# 📖 Panduan Pemakaian — Skill Audit Skripsi "Dosen Killer" & Bimbingan Solutif

Panduan lengkap cara menggunakan skill `audit-skripsi` di **Antigravity IDE**, **Claude Code (CLI)**, **Claude.ai (Web)**, serta cara menjalankan **Toolkit Otomasi Python**.

---

## 🚀 1. Penggunaan di Antigravity IDE & Claude Code

Skill ini sudah terpasang otomatis dan tersinkronisasi di:
- `C:\Users\Nanda Addi\.agents\skills\audit-skripsi\`
- `C:\Users\Nanda Addi\.gemini\config\skills\audit-skripsi\`

### Perintah Cepat yang Dapat Digunakan:

#### 1. Mode Audit Dokumen Lengkap (`/audit`)
Laporan audit menyeluruh dengan estimasi nilai mutu UM (A hingga E), bedah celah 4-bagian, dan metrik kepatuhan teknis.
```markdown
/audit
Berikut naskah Bab 1 dan Daftar Rujukan skripsi saya:
[paste naskah Anda di sini]
```

#### 2. Mode Simulasi Sidang Killer (`/sidang`)
Latihan ujian sidang 4 ronde bertahap menghadapi penguji killer, lengkap dengan kartu nilai kelulusan resmi UM di akhir sesi.
```markdown
/sidang
Judul: "Pengembangan Media Pembelajaran Interaktif Berbasis Android untuk Meningkatkan Literasi Sains Siswa SMP"
Jenjang: S1 | Jenis: R&D
Berikut draf abstrak dan metodologi saya:
[paste ringkasan / bab naskah]
```

#### 3. Mode Bimbingan Konstruktif (`/bimbingan`)
Coaching penulisan ramah yang membedah kelemahan naskah dan menyajikan formula rekonstruksi kalimat siap pakai.
```markdown
/bimbingan
Tolong bantu perbaiki latar belakang skripsi saya ini agar memiliki gap empiris yang kuat:
[paste latar belakang]
```

#### 4. Audit Fokus Spesifik:
- `/benang-merah` : Memeriksa keselarasan logika: Masalah ↔ Teori ↔ Metode ↔ Temuan ↔ Simpulan.
- `/cek-rujukan` : Memeriksa kemutakhiran (10 tahun terakhir), keprimeran (jurnal ≥ 80%), dan sitasi silang.
- `/cek-pedoman` : Memeriksa kepatuhan format fisik, tata letak, tabel/gambar, dan batas kuantitas kata UM 2017.

---

## 🛠️ 2. Menjalankan Toolkit Otomasi Python (CLI)

Skill ini dilengkapi script otomasi di folder `scripts/` yang dapat dijalankan langsung di terminal untuk memeriksa naskah dalam format `.docx`, `.md`, atau `.txt`.

### A. Audit Diagnostik Terpadu (Direkomendasikan)
Jalankan CLI utama untuk memperoleh metrik rujukan, bahasa, dan kuantitas kata sekaligus:
```bash
python "C:\Users\Nanda Addi\.agents\skills\audit-skripsi\scripts\audit_cli.py" "path/ke/naskah_skripsi.docx" --stage skripsi --level s1
```
*Opsi `--stage`: `proposal`, `skripsi`, `artikel`*
*Opsi `--level`: `s1`, `s2`, `s3`*
*Tambahkan `--json` jika ingin output data JSON.*

### B. Audit Rujukan & Sitasi Silang Saja
Mengecek apakah rujukan terbit dalam 10 tahun terakhir, minimal 80% jurnal, serta mendeteksi sitasi dalam teks yang tidak ada di daftar pustaka:
```bash
python "C:\Users\Nanda Addi\.agents\skills\audit-skripsi\scripts\audit_rujukan.py" "path/ke/naskah.md"
```

### C. Audit Kaidah Bahasa & Kata Non-Baku
Mendeteksi kata non-baku (seperti *aktifitas, analisa, standard, merubah*), konjungsi intrakalimat di awal kalimat (*Sehingga, Sedangkan*), dan frasa subjektif:
```bash
python "C:\Users\Nanda Addi\.agents\skills\audit-skripsi\scripts\audit_bahasa.py" "path/ke/naskah.md" --level s1
```

### D. Konversi DOCX ke Markdown Bersih
Mengekstrak naskah Word `.docx` menjadi format Markdown yang rapi:
```bash
python "C:\Users\Nanda Addi\.agents\skills\audit-skripsi\scripts\extract_naskah.py" "skripsi.docx" "output_bersih.md"
```

---

## 🌐 3. Penggunaan di Claude.ai (Web Projects)

1. Buka [claude.ai](https://claude.ai) dan masuk ke menu **Projects**.
2. Buat Project baru bernama `Audit Skripsi UM`.
3. Buka **Project Settings** ➔ **Custom Instructions**:
   - Buka file [`CLAUDE_PROJECT_INSTRUCTIONS.md`](./CLAUDE_PROJECT_INSTRUCTIONS.md).
   - Salin seluruh isinya (mulai dari `## IDENTITAS & PERSONA GANDA` hingga akhir) dan paste ke kolom Custom Instructions.
4. Pada bagian **Project Knowledge**:
   - Upload file [`Pedoman-Penulisan-Karya-Ilmiah-2017.md`](./Pedoman-Penulisan-Karya-Ilmiah-2017.md).
5. Selesai! Anda tinggal membuka chat baru di project tersebut dan mengetikkan perintah `/audit`, `/sidang`, atau `/bimbingan`.

---

## 📚 4. Struktur Modul Referensi Lengkap

Di dalam folder `reference/`, tersedia 4 dokumen acuan mendalam:
1. `rubrik-audit-um2017.md`: Matriks jenjang S1/S2/S3, tahapan naskah, dan checklist khusus kuantitatif, kualitatif, R&D, dan PTK.
2. `skala-penilaian-sidang-um.md`: Standar konversi nilai mutu UM (A s.d. E), bobot komponen evaluasi sidang, dan format kartu penilaian sidang.
3. `panduan-artikel-jurnal-um.md`: Aturan penulisan artikel ilmiah dari ringkasan skripsi untuk publikasi jurnal ilmiah UM (Bab 3 pedoman).
4. `kamus-tata-bahasa-ilmiah.md`: 100+ kata baku vs non-baku akademik, konjungsi terlarang awal kalimat, dan aturan bilangan/desimal koma.
