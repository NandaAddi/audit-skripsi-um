#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
audit_rujukan.py — Validator Daftar Rujukan & Sitasi Silang UM 2017
Mengecek kemutakhiran (10 tahun terakhir), keprimeran (>=80%), format sitasi,
dan cross-reference antara sitasi dalam teks dengan daftar rujukan.
"""

import sys
import re
import datetime
from pathlib import Path

if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

CURRENT_YEAR = datetime.datetime.now().year
TEN_YEARS_AGO = CURRENT_YEAR - 10

def find_references_section(text):
    """Memisahkan teks bagian inti naskah dengan bagian Daftar Rujukan."""
    header_pattern = re.compile(
        r'(?i)(?:^|\n)(?:#{1,3}\s*)?(?:daftar\s+rujukan|daftar\s+pustaka|references|bibliografi)\s*(?:\n|$)'
    )
    matches = list(header_pattern.finditer(text))
    if not matches:
        return text, ""
    last_match = matches[-1]
    body_text = text[:last_match.start()]
    ref_text = text[last_match.end():]
    return body_text, ref_text

def extract_in_text_citations(body_text):
    """
    Mengekstrak sitasi dalam teks seperti:
    - (Pratama, 2021)
    - (Untari, dkk., 2019)
    - Susilowati & Latifah (2018)
    - Margono (2014:149)
    """
    citations = set()
    
    # Pola 1: Dalam kurung, misal (Nama, 2020) atau (Nama & Nama, 2020) atau (Nama, dkk., 2020)
    p1 = re.compile(r'\(([A-Z][a-zA-Z\s\.\,\&\-]+?),\s*(\d{4})(?:\:[0-9\-]+)?\)')
    for match in p1.finditer(body_text):
        author_part = match.group(1).strip()
        year = int(match.group(2))
        # Bersihkan nama utama (ambil nama belakang pertama)
        main_author = clean_author_name(author_part)
        if main_author and len(main_author) > 1:
            citations.add((main_author, year, match.group(0)))

    # Pola 2: Luar kurung, misal Nama (2020) atau Nama dkk. (2020)
    p2 = re.compile(r'\b([A-Z][a-zA-Z\s\.\,\-]+?)\s*\(([0-9]{4})(?:\:[0-9\-]+)?\)')
    for match in p2.finditer(body_text):
        author_part = match.group(1).strip()
        year = int(match.group(2))
        main_author = clean_author_name(author_part)
        if main_author and len(main_author) > 1:
            citations.add((main_author, year, f"{author_part} ({year})"))

    return list(citations)

def clean_author_name(raw_name):
    """Ekstraksi nama belakang dari sitasi untuk pencocokan."""
    name = re.sub(r'(?i)\b(dkk|et al|ed|eds)\b[\.]?', '', raw_name)
    name = re.sub(r'[\(\)\&\,]', ' ', name)
    tokens = [t.strip() for t in name.split() if t.strip() and not t.strip().endswith('.')]
    if tokens:
        return tokens[0]  # Nama pertama dalam sitasi
    return ""

def parse_reference_entries(ref_text):
    """Memecah entri daftar rujukan dan menganalisis tiap entri."""
    if not ref_text.strip():
        return []
    
    # Split entri berdasarkan baris baru ganda atau baris yang diawali nama/bullet
    raw_entries = [e.strip() for e in re.split(r'\n\s*\n|\n(?=[A-Z][a-zA-Z])', ref_text) if len(e.strip()) > 15]
    
    entries = []
    for entry in raw_entries:
        # Bersihkan bullet markdown
        clean_entry = re.sub(r'^\s*[\-\*\d\.]+\s*', '', entry)
        year_match = re.search(r'\b(19\d{2}|20\d{2})[a-z]?\b', clean_entry)
        year = int(year_match.group(1)) if year_match else None
        
        # Ekstrak nama penulis pertama (sebelum tanda titik pertama atau sebelum tahun)
        first_token = clean_entry.split('.')[0].strip() if '.' in clean_entry else clean_entry[:30]
        author_surname = first_token.split(',')[0].strip().split()[0] if first_token else ""
        
        # Klasifikasi jenis sumber (Primer vs Sekunder)
        is_primary = False
        lower_entry = clean_entry.lower()
        if any(term in lower_entry for term in ['jurnal', 'journal', 'vol.', 'volume', 'no.', 'nomor', 'doi.org', 'skripsi', 'tesis', 'disertasi', 'prosiding', 'proceeding', 'conference']):
            is_primary = True
        
        # Cek kemutakhiran (10 tahun terakhir)
        is_recent = False
        if year and year >= TEN_YEARS_AGO:
            is_recent = True
            
        entries.append({
            'raw': clean_entry,
            'author_surname': author_surname,
            'year': year,
            'is_primary': is_primary,
            'is_recent': is_recent
        })
        
    return entries

def audit_references(text):
    """Menjalankan audit lengkap rujukan dan mengembalikan metrik."""
    body_text, ref_text = find_references_section(text)
    in_text_citations = extract_in_text_citations(body_text)
    ref_entries = parse_reference_entries(ref_text)
    
    total_entries = len(ref_entries)
    recent_count = sum(1 for e in ref_entries if e['is_recent'])
    primary_count = sum(1 for e in ref_entries if e['is_primary'])
    
    recent_pct = (recent_count / total_entries * 100) if total_entries > 0 else 0.0
    primary_pct = (primary_count / total_entries * 100) if total_entries > 0 else 0.0
    
    # Cross-reference matching
    ref_keys = set()
    for e in ref_entries:
        if e['author_surname'] and e['year']:
            ref_keys.add((e['author_surname'].lower(), e['year']))
    
    missing_in_ref = []
    for author, year, raw_cite in in_text_citations:
        match_found = False
        for ref_author, ref_year in ref_keys:
            if (author.lower() in ref_author or ref_author in author.lower()) and year == ref_year:
                match_found = True
                break
        if not match_found:
            missing_in_ref.append((author, year, raw_cite))
            
    # Rujukan yang tidak pernah dirujuk di teks (orphan)
    body_lower = body_text.lower()
    orphan_refs = []
    for e in ref_entries:
        if e['author_surname']:
            surname_lower = e['author_surname'].lower()
            if surname_lower not in body_lower:
                orphan_refs.append(e)

    return {
        'total_entries': total_entries,
        'recent_count': recent_count,
        'recent_pct': round(recent_pct, 1),
        'primary_count': primary_count,
        'primary_pct': round(primary_pct, 1),
        'in_text_citations_count': len(in_text_citations),
        'missing_in_ref': missing_in_ref,
        'orphan_refs': orphan_refs,
        'entries': ref_entries
    }

def format_report(results):
    """Menghasilkan teks laporan hasil audit rujukan."""
    output = []
    output.append("📊 METRIK RUJUKAN & SITASI (STANDAR UM 2017)")
    output.append("─" * 50)
    output.append(f"• Total Entri Daftar Rujukan : {results['total_entries']} sumber")
    output.append(f"• Kemutakhiran (≤10 th/{TEN_YEARS_AGO}-{CURRENT_YEAR}): {results['recent_count']}/{results['total_entries']} ({results['recent_pct']}%) [Target: ≥80%]")
    status_recent = "✅ MEMENUHI" if results['recent_pct'] >= 80 else "❌ BELUM MEMENUHI"
    output.append(f"  Status Kemutakhiran       : {status_recent}")
    
    output.append(f"• Keprimeran (Jurnal/Riset) : {results['primary_count']}/{results['total_entries']} ({results['primary_pct']}%) [Target: ≥80%]")
    status_primary = "✅ MEMENUHI" if results['primary_pct'] >= 80 else "❌ BELUM MEMENUHI"
    output.append(f"  Status Keprimeran         : {status_primary}")
    
    output.append(f"• Total Sitasi dalam Teks   : {results['in_text_citations_count']} sitasi")
    output.append("─" * 50)
    
    if results['missing_in_ref']:
        output.append(f"\n⚠️ SITASI DALAM TEKS YANG HILANG DI DAFTAR RUJUKAN ({len(results['missing_in_ref'])}):")
        for author, year, cite in results['missing_in_ref'][:10]:
            output.append(f"  ❌ {cite} (Penulis: {author}, {year})")
        if len(results['missing_in_ref']) > 10:
            output.append(f"  ...dan {len(results['missing_in_ref']) - 10} lainnya.")
    else:
        output.append("\n✅ Seluruh sitasi dalam teks tercatat di Daftar Rujukan.")
        
    if results['orphan_refs']:
        output.append(f"\n⚠️ DAFTAR RUJUKAN 'SILUMAN' (Tidak pernah dirujuk dalam teks) ({len(results['orphan_refs'])}):")
        for ref in results['orphan_refs'][:5]:
            output.append(f"  ⚠️ {ref['raw'][:90]}...")
        if len(results['orphan_refs']) > 5:
            output.append(f"  ...dan {len(results['orphan_refs']) - 5} lainnya.")
            
    return "\n".join(output)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Penggunaan: python audit_rujukan.py <file_naskah.md/txt>")
        sys.exit(1)
        
    filepath = Path(sys.argv[1])
    if not filepath.exists():
        print(f"File tidak ditemukan: {filepath}")
        sys.exit(1)
        
    text = filepath.read_text(encoding='utf-8', errors='ignore')
    results = audit_references(text)
    print(format_report(results))
