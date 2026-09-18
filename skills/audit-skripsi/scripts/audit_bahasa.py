#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
audit_bahasa.py — Detektor Kaidah Ragam Bahasa Ilmiah & Kata Baku UM 2017
Memeriksa kata non-baku, konjungsi intrakalimat di awal kalimat, kata ganti subjektif,
tanda desimal koma vs titik, dan batas panjang kata bagian inti.
"""

import sys
import re
from pathlib import Path

if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

# Kamus Kata Baku UM 2017 & KBBI
KAMUS_BAKU = {
    "aktifitas": "aktivitas",
    "analisa": "analisis",
    "analitis": "analitis",
    "standard": "standar",
    "standarisasi": "standardisasi",
    "praktek": "praktik",
    "efektifitas": "efektivitas",
    "produktifitas": "produktivitas",
    "kreatifitas": "kreativitas",
    "kualitet": "kualitas",
    "kuantitet": "kuantitas",
    "hipotesa": "hipotesis",
    "sintesa": "sintesis",
    "obyek": "objek",
    "subyek": "subjek",
    "sistim": "sistem",
    "sistematik": "sistematis",
    "metoda": "metode",
    "metodhe": "metode",
    "respon": "respons",
    "resiko": "risiko",
    "cidera": "cedera",
    "kwalitatif": "kualitatif",
    "kwantitatif": "kuantitatif",
    "tehnik": "teknik",
    "jadual": "jadwal",
    "karir": "karier",
    "kongkrit": "konkret",
    "komplit": "komplet",
    "teoritis": "teoretis",
    "hirarki": "hierarki",
    "katagori": "kategori",
    "sub bagian": "subbagian",
    "antar siswa": "antarsiswa",
    "pra penelitian": "prapenelitian",
    "pasca panen": "pascapanen",
    "non formal": "nonformal",
    "multi media": "multimedia",
    "ekstrim": "ekstrem",
    "legalisir": "legalisasi",
    "diagnosa": "diagnosis",
    "orisinil": "orisinal",
    "merubah": "mengubah",
    "merinci": "memerinci",
    "mensosialisasikan": "menyosialisasikan",
    "mempengaruhi": "memengaruhi",
    "mempesona": "memesona",
    "mengkaitkan": "mengaitkan",
    "menterjemahkan": "menerjemahkan",
    "mentargetkan": "menargetkan",
    "prosentase": "persentase",
    "frekwensi": "frekuensi",
    "linier": "linear",
    "ketimbang": "daripada",
}

# Konjungsi Terlarang di Awal Kalimat (setelah tanda titik)
KONJUNGSI_AWAL = {
    "sehingga": "Oleh karena itu, ... / Akibatnya, ...",
    "sedangkan": "Sementara itu, ... / Di sisi lain, ...",
    "karena": "Oleh sebab itu, ... / Hal ini disebabkan oleh...",
    "dan": "Selain itu, ... / [Gabungkan dengan kalimat sebelumnya]",
    "atau": "[Gabungkan dengan kalimat sebelumnya]",
    "bahwa": "[Struktur rancu: jangan penggal anak kalimat menjadi kalimat mandiri]",
    "agar": "Untuk itu, ... / Tujuannya adalah agar..."
}

# Frasa Subjektif / Terlarang Berorientasi Persona
FRASA_SUBJEKTIF = [
    (r'(?i)\bpeneliti\s+(?:melakukan|mengambil|mengumpulkan|menganalisis|merasa|berpendapat|mengharapkan)\b', 
     'Fokus pada persona peneliti. Ganti dengan bentuk pasif bertolak dari gagasan (misal: "Data dikumpulkan melalui...", "Analisis dilakukan dengan...").'),
    (r'(?i)\bpenulis\s+(?:berpendapat|merasa|menemukan|menyimpulkan)\b',
     'Ganti dengan fokus temuan: "Temuan ini mengindikasikan...", "Hasil analisis menyimpulkan...".'),
    (r'(?i)\b(?:saya|kami|kita)\b',
     'Penggunaan kata ganti orang pertama/inklusif. Karya ilmiah UM wajib menggunakan ragam impersonal.'),
    (r'(?i)\bseperti\s+kita\s+ketahui\b',
     'Frasa klise lisan. Hapus atau sajikan fakta empiris dengan rujukan ilmiah.'),
    (r'(?i)\bdi\s+negara\s+kita\b',
     'Ganti dengan "di Indonesia".'),
    (r'(?i)\bdalam\s+penelitian\s+ini\s+membahas\b',
     'Kalimat rancu tak bersubjek. Ubah menjadi: "Penelitian ini membahas..." atau "Dalam penelitian ini dibahas...".'),
    (r'(?i)\bpenelitian\s+ini\s+bertujuan\s+untuk\b',
     'Mubazir kata: kata kerja "bertujuan" tidak memerlukan preposisi "untuk". Ubah menjadi "Penelitian ini bertujuan...".')
]

BATAS_KATA = {
    "s1": 15000,
    "s2": 20000,
    "s3": 30000,
    "artikel": 7000
}

def audit_bahasa(text, level="s1"):
    """Melakukan audit kaidah kebahasaan dan kata baku naskah."""
    lines = text.split('\n')
    word_count = len(re.findall(r'\b\w+\b', text))
    
    findings_kata_baku = []
    findings_konjungsi = []
    findings_subjektif = []
    findings_desimal = []
    
    # 1. Cek Kata Non-Baku
    for line_num, line in enumerate(lines, 1):
        clean_line = re.sub(r'\[.*?\]\(.*?\)', '', line) # abaikan markdown link
        words = re.findall(r'\b[a-zA-Z\-]+\b', clean_line.lower())
        for w in words:
            if w in KAMUS_BAKU and w != KAMUS_BAKU[w]:
                findings_kata_baku.append({
                    'line': line_num,
                    'word': w,
                    'suggested': KAMUS_BAKU[w],
                    'snippet': line.strip()[:100]
                })
                
        # 2. Cek Konjungsi di Awal Kalimat
        # Kalimat diawali setelah titik atau awal paragraf
        sentences = re.split(r'[\.\?\!]\s+', clean_line)
        for s in sentences:
            s_clean = s.strip()
            first_word_match = re.match(r'^([a-zA-Z]+)\b', s_clean.lower())
            if first_word_match:
                first_word = first_word_match.group(1)
                if first_word in KONJUNGSI_AWAL:
                    findings_konjungsi.append({
                        'line': line_num,
                        'word': first_word.capitalize(),
                        'rule': KONJUNGSI_AWAL[first_word],
                        'snippet': s_clean[:90]
                    })
                    
        # 3. Cek Frasa Subjektif
        for pattern, reason in FRASA_SUBJEKTIF:
            match = re.search(pattern, clean_line)
            if match:
                findings_subjektif.append({
                    'line': line_num,
                    'phrase': match.group(0),
                    'reason': reason,
                    'snippet': clean_line[:100]
                })

        # 4. Cek Tanda Desimal Titik (angka.angka%) atau p=0.05
        decimal_matches = re.finditer(r'\b(\d+)\.(\d+)(?:%|\b)', clean_line)
        for dm in decimal_matches:
            # Pastikan bukan nomor bab/subbab seperti 1.1 atau 2.3.1
            full_match = dm.group(0)
            if not re.search(r'^(?:bab|\#|\d+\.\d+\.)', clean_line.lower()):
                findings_desimal.append({
                    'line': line_num,
                    'token': full_match,
                    'suggested': f"{dm.group(1)},{dm.group(2)}",
                    'snippet': clean_line[:90]
                })

    limit = BATAS_KATA.get(level.lower(), 15000)
    word_status = "MEMENUHI" if word_count <= limit else "MELEBIHI BATAS"

    return {
        'word_count': word_count,
        'word_limit': limit,
        'word_status': word_status,
        'non_baku_count': len(findings_kata_baku),
        'konjungsi_count': len(findings_konjungsi),
        'subjektif_count': len(findings_subjektif),
        'desimal_count': len(findings_desimal),
        'findings_kata_baku': findings_kata_baku,
        'findings_konjungsi': findings_konjungsi,
        'findings_subjektif': findings_subjektif,
        'findings_desimal': findings_desimal
    }

def format_report_bahasa(results):
    """Menghasilkan teks laporan hasil audit kebahasaan."""
    output = []
    output.append("📝 METRIK KEBAHASAAN & KATA BAKU (STANDAR UM 2017)")
    output.append("─" * 50)
    output.append(f"• Jumlah Kata Bagian Inti   : {results['word_count']:,} kata (Batas: maks. {results['word_limit']:,} kata)")
    status_icon = "✅" if results['word_status'] == "MEMENUHI" else "⚠️"
    output.append(f"  Status Kuantitas Kata     : {status_icon} {results['word_status']}")
    output.append(f"• Temuan Kata Non-Baku      : {results['non_baku_count']} kata")
    output.append(f"• Konjungsi Awal Kalimat    : {results['konjungsi_count']} kasus (Sehingga/Sedangkan/Karena di awal)")
    output.append(f"• Frasa Subjektif/Persona   : {results['subjektif_count']} kasus ('peneliti melakukan', 'kita', dll.)")
    output.append(f"• Format Desimal Titik (.)  : {results['desimal_count']} angka (wajib koma `,` dalam bahasa Indonesia)")
    output.append("─" * 50)

    if results['findings_kata_baku']:
        output.append(f"\n❌ CONTOH KATA NON-BAKU TERDETEKSI ({results['non_baku_count']}):")
        for f in results['findings_kata_baku'][:8]:
            output.append(f"  • Baris {f['line']}: '{f['word']}' ➔ ubah ke '{f['suggested']}'")
        if len(results['findings_kata_baku']) > 8:
            output.append(f"  ...dan {len(results['findings_kata_baku']) - 8} kata non-baku lainnya.")

    if results['findings_konjungsi']:
        output.append(f"\n⚠️ KONJUNGSI TERLARANG DI AWAL KALIMAT ({results['konjungsi_count']}):")
        for f in results['findings_konjungsi'][:5]:
            output.append(f"  • Baris {f['line']} [{f['word']}]: {f['rule']}")
            output.append(f"    Teks: \"{f['snippet']}...\"")

    if results['findings_subjektif']:
        output.append(f"\n🚫 FRASA SUBJEKTIF / PERSONA PENELITI ({results['subjektif_count']}):")
        for f in results['findings_subjektif'][:5]:
            output.append(f"  • Baris {f['line']} [{f['phrase']}]: {f['reason']}")

    return "\n".join(output)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Penggunaan: python audit_bahasa.py <file_naskah.md/txt> [--level s1|s2|s3|artikel]")
        sys.exit(1)

    filepath = Path(sys.argv[1])
    if not filepath.exists():
        print(f"File tidak ditemukan: {filepath}")
        sys.exit(1)

    level = "s1"
    if "--level" in sys.argv:
        idx = sys.argv.index("--level")
        if idx + 1 < len(sys.argv):
            level = sys.argv[idx + 1]

    text = filepath.read_text(encoding='utf-8', errors='ignore')
    results = audit_bahasa(text, level)
    print(format_report_bahasa(results))
