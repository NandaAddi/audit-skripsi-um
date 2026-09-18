#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
extract_naskah.py — Ekstraktor Dokumen Naskah Skripsi ke Clean Markdown
Mendukung format .docx (native tanpa dependensi eksternal), .txt, dan .md.
"""

import sys
import os
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

def extract_docx_to_markdown(docx_path):
    """Ekstraksi dokumen Word (.docx) langsung menggunakan zipfile & XML parser bawaan Python."""
    if not zipfile.is_zipfile(docx_path):
        raise ValueError(f"File bukan merupakan berkas ZIP/DOCX yang valid: {docx_path}")
        
    with zipfile.ZipFile(docx_path, 'r') as zf:
        if 'word/document.xml' not in zf.namelist():
            raise ValueError("Struktur DOCX tidak memiliki word/document.xml")
            
        xml_content = zf.read('word/document.xml')
        
    root = ET.fromstring(xml_content)
    
    # Namespace WordprocessingML
    ns = {
        'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
    }
    
    lines = []
    
    # Iterasi tiap paragraf atau tabel di dokumen
    for elem in root.iter():
        tag = elem.tag.split('}')[-1]
        
        # Paragraf
        if tag == 'p':
            # Cek style paragraf (apakah Heading 1, 2, Title)
            style_name = ""
            pPr = elem.find('w:pPr', ns)
            if pPr is not None:
                pStyle = pPr.find('w:pStyle', ns)
                if pStyle is not None:
                    style_name = pStyle.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val', '').lower()
                    
            text_runs = []
            for r in elem.findall('w:r', ns):
                # Cek apakah italic
                rPr = r.find('w:rPr', ns)
                is_italic = False
                is_bold = False
                if rPr is not None:
                    if rPr.find('w:i', ns) is not None:
                        is_italic = True
                    if rPr.find('w:b', ns) is not None:
                        is_bold = True
                        
                t = r.find('w:t', ns)
                if t is not None and t.text:
                    val = t.text
                    if is_bold and is_italic:
                        val = f"***{val.strip()}*** "
                    elif is_bold:
                        val = f"**{val.strip()}** "
                    elif is_italic:
                        val = f"*{val.strip()}* "
                    text_runs.append(val)
                    
            para_text = "".join(text_runs).strip()
            if para_text:
                if 'heading1' in style_name or 'judul1' in style_name or re.match(r'^(?:BAB\s+[IVXLCDM]+)', para_text, re.IGNORECASE):
                    lines.append(f"\n# {para_text}\n")
                elif 'heading2' in style_name or 'judul2' in style_name:
                    lines.append(f"\n## {para_text}\n")
                elif 'heading3' in style_name or 'judul3' in style_name:
                    lines.append(f"\n### {para_text}\n")
                else:
                    lines.append(para_text)
                    
        # Baris tabel
        elif tag == 'tr':
            cells = []
            for tc in elem.findall('w:tc', ns):
                cell_text = "".join(tc.itertext()).strip()
                cells.append(cell_text.replace('\n', ' '))
            if cells and any(c for c in cells):
                lines.append("| " + " | ".join(cells) + " |")
                
    # Gabungkan dan rapikan spasi berlebih
    raw_md = "\n\n".join(lines)
    clean_md = re.sub(r'\n{3,}', '\n\n', raw_md)
    return clean_md

def extract_naskah(file_path):
    """Fungsi pembungkus untuk membaca file skripsi berbagai format."""
    path = Path(file_path)
    if not path.exists():
        raise FileNotFoundError(f"File tidak ditemukan: {file_path}")
        
    ext = path.suffix.lower()
    if ext == '.docx':
        return extract_docx_to_markdown(path)
    elif ext in ['.md', '.txt']:
        return path.read_text(encoding='utf-8', errors='ignore')
    elif ext == '.pdf':
        # Coba import pypdf jika ada
        try:
            import pypdf
            reader = pypdf.PdfReader(str(path))
            pages_text = [page.extract_text() or "" for page in reader.pages]
            return "\n\n".join(pages_text)
        except ImportError:
            raise RuntimeError("Ekstraksi file .pdf membutuhkan pustaka `pypdf`. Disarankan mengonversi file ke .docx atau .md terlebih dahulu.")
    else:
        raise ValueError(f"Ekstensi file {ext} tidak didukung. Harap gunakan format .docx, .md, atau .txt.")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Penggunaan: python extract_naskah.py <file_naskah.docx/md/txt> [output.md]")
        sys.exit(1)
        
    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None
    
    try:
        md_text = extract_naskah(input_file)
        if output_file:
            Path(output_file).write_text(md_text, encoding='utf-8')
            print(f"✅ Berhasil mengekstrak {input_file} ke {output_file} ({len(md_text):,} karakter)")
        else:
            print(md_text[:1500])
            print("\n... [Potongan ekstraksi teks selesai] ...")
    except Exception as e:
        print(f"❌ Error ekstraksi: {e}")
        sys.exit(1)
