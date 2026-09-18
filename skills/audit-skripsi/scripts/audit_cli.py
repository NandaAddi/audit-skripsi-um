#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
audit_cli.py — CLI Terpadu Audit Teknis Skripsi UM 2017
Menjalankan ekstraksi, audit rujukan (10 tahun & primer), audit kebahasaan (kata baku & konjungsi),
serta menghasilkan header laporan diagnostik terpadu untuk LLM / Penguji.
"""

import sys
import json
import argparse
from pathlib import Path

if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

# Import modul internal dari folder scripts
try:
    from extract_naskah import extract_naskah
    from audit_rujukan import audit_references, format_report
    from audit_bahasa import audit_bahasa, format_report_bahasa
except ImportError:
    script_dir = Path(__file__).resolve().parent
    sys.path.append(str(script_dir))
    from extract_naskah import extract_naskah
    from audit_rujukan import audit_references, format_report
    from audit_bahasa import audit_bahasa, format_report_bahasa

def run_comprehensive_audit(file_path, stage="skripsi", level="s1"):
    """Menjalankan seluruh pipeline audit teknis."""
    text = extract_naskah(file_path)
    
    ref_results = audit_references(text)
    lang_results = audit_bahasa(text, level=level)
    
    # Hitung skor kepatuhan teknis (0 - 100)
    # Bobot: Kemutakhiran 30%, Keprimeran 30%, Bebas kata non-baku 20%, Bebas konjungsi awal 10%, Panjang kata 10%
    score_mutakhir = min(100.0, (ref_results['recent_pct'] / 80.0) * 100.0) if ref_results['total_entries'] > 0 else 0.0
    score_primer = min(100.0, (ref_results['primary_pct'] / 80.0) * 100.0) if ref_results['total_entries'] > 0 else 0.0
    
    penalti_kata = min(100.0, lang_results['non_baku_count'] * 5.0)
    score_baku = max(0.0, 100.0 - penalti_kata)
    
    penalti_konjungsi = min(100.0, lang_results['konjungsi_count'] * 10.0)
    score_konjungsi = max(0.0, 100.0 - penalti_konjungsi)
    
    score_length = 100.0 if lang_results['word_status'] == "MEMENUHI" else 50.0
    
    technical_score = (
        (score_mutakhir * 0.30) +
        (score_primer * 0.30) +
        (score_baku * 0.20) +
        (score_konjungsi * 0.10) +
        (score_length * 0.10)
    )
    
    technical_status = "LAYAK TEKNIS" if technical_score >= 75.0 else "REVISI TEKNIS DIPERLUKAN"

    return {
        'file_name': Path(file_path).name,
        'stage': stage.upper(),
        'level': level.upper(),
        'technical_score': round(technical_score, 1),
        'technical_status': technical_status,
        'references': ref_results,
        'language': lang_results
    }

def print_markdown_summary(res):
    """Mencetak laporan header diagnostik Markdown terpadu."""
    ref = res['references']
    lang = res['language']
    
    print("\n" + "=" * 65)
    print(f"📋 HASIL DIAGNOSTIK OTOMATIS: {res['file_name']}")
    print(f"🎓 Jenjang: {res['level']} | Tahap: {res['stage']}")
    print(f"⚖️ Skor Kelayakan Teknis: {res['technical_score']}/100 ➔ [{res['technical_status']}]")
    print("=" * 65)
    
    print("\n### 1. Metrik Kepatuhan Rujukan (UM 2017)")
    print(f"- **Total Rujukan Terdaftar:** {ref['total_entries']} entri")
    print(f"- **Kemutakhiran (10 Th Terakhir):** {ref['recent_count']}/{ref['total_entries']} ({ref['recent_pct']}%) {'✅' if ref['recent_pct']>=80 else '❌ Target: ≥80%'}")
    print(f"- **Keprimeran (Jurnal/Tesis/Riset):** {ref['primary_count']}/{ref['total_entries']} ({ref['primary_pct']}%) {'✅' if ref['primary_pct']>=80 else '❌ Target: ≥80%'}")
    print(f"- **Sitasi dalam Teks:** {ref['in_text_citations_count']} sitasi")
    if ref['missing_in_ref']:
        print(f"- ⚠️ **Sitasi Hilang di Daftar Rujukan:** {len(ref['missing_in_ref'])} kasus")
    if ref['orphan_refs']:
        print(f"- ⚠️ **Rujukan Tidak Dirujuk dalam Teks:** {len(ref['orphan_refs'])} kasus")
        
    print("\n### 2. Metrik Kepatuhan Bahasa & Format")
    print(f"- **Panjang Kata Inti:** {lang['word_count']:,} kata (Batas: {lang['word_limit']:,} kata) {'✅' if lang['word_status']=='MEMENUHI' else '⚠️ Melebihi Batas'}")
    print(f"- **Kata Non-Baku Terdeteksi:** {lang['non_baku_count']} kasus {'✅' if lang['non_baku_count']==0 else '❌'}")
    print(f"- **Konjungsi Awal Kalimat:** {lang['konjungsi_count']} kasus {'✅' if lang['konjungsi_count']==0 else '❌'}")
    print(f"- **Frasa Subjektif Persona:** {lang['subjektif_count']} kasus {'✅' if lang['subjektif_count']==0 else '❌'}")
    print(f"- **Desimal Tanda Titik (.):** {lang['desimal_count']} angka (wajib koma) {'✅' if lang['desimal_count']==0 else '❌'}")
    print("\n" + "=" * 65 + "\n")

def main():
    parser = argparse.ArgumentParser(description="Toolkit Audit Teknis Skripsi UM 2017")
    parser.add_argument("file_path", help="Path ke berkas skripsi (.docx, .md, atau .txt)")
    parser.add_argument("--stage", choices=["proposal", "skripsi", "artikel"], default="skripsi", help="Tahapan dokumen akademik (default: skripsi)")
    parser.add_argument("--level", choices=["s1", "s2", "s3"], default="s1", help="Jenjang studi akademik (default: s1)")
    parser.add_argument("--json", action="store_true", help="Keluarkan output dalam format JSON")
    
    args = parser.parse_args()
    
    try:
        results = run_comprehensive_audit(args.file_path, stage=args.stage, level=args.level)
        if args.json:
            # Saring struktur agar serializable
            clean_res = {
                'file_name': results['file_name'],
                'stage': results['stage'],
                'level': results['level'],
                'technical_score': results['technical_score'],
                'technical_status': results['technical_status'],
                'references': {k: v for k, v in results['references'].items() if k != 'entries'},
                'language': {k: v for k, v in results['language'].items() if not k.startswith('findings_')}
            }
            print(json.dumps(clean_res, indent=2))
        else:
            print_markdown_summary(results)
    except Exception as e:
        print(f"❌ Terjadi kesalahan: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    main()
