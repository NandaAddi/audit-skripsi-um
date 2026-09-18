# Pedoman Kontribusi (Contributing Guide)

Terima kasih atas minat Anda untuk berkontribusi pada proyek **Audit Skripsi UM**! Proyek ini bertujuan membantu mahasiswa di seluruh Indonesia menghasilkan karya ilmiah yang berkualitas tinggi dan siap menghadapi ujian sidang.

---

## 🎯 Bidang Kontribusi yang Sangat Diharapkan

Anda dapat berkontribusi dalam berbagai aspek:

1. **Memperkaya Kamus Kebahasaan Ilmiah:**
   - Menambahkan kata non-baku yang sering keliru ditulis mahasiswa ke dalam [`reference/kamus-tata-bahasa-ilmiah.md`](skills/audit-skripsi/reference/kamus-tata-bahasa-ilmiah.md) dan [`scripts/audit_bahasa.py`](skills/audit-skripsi/scripts/audit_bahasa.py).
   - Menambahkan frasa subjektif atau pola kalimat rancu yang sering muncul.

2. **Menyempurnakan Script Otomasi Python:**
   - Meningkatkan akurasi regex parser sitasi pada `scripts/audit_rujukan.py`.
   - Mengoptimalkan ekstraksi tabel dan rumus pada `scripts/extract_naskah.py`.
   - Menambahkan dukungan format input dokumen lain.

3. **Rubrik Spesifik Program Studi / Fakultas:**
   - Menambahkan pedoman gaya selingkung fakultas tertentu (misal: Fakultas Sastra, FMIPA, FT, FIP, FEB, FS, FIK, FIS) ke dalam folder `reference/`.

4. **Adaptasi ke Pedoman Kampus Lain:**
   - Jika Anda ingin membuat varian untuk kampus Anda (misal: UGM, ITB, UI, UPI, dsb.), Anda dipersilakan membuat folder pedoman terpisah atau melakukan *fork*.

---

## 🛠️ Alur Kontribusi Melalui GitHub

1. **Fork Repositori:** Klik tombol **Fork** di pojok kanan atas repositori ini.
2. **Clone Lokal:**
   ```bash
   git clone https://github.com/<username-anda>/audit-skripsi-um.git
   cd audit-skripsi-um
   ```
3. **Buat Branch Fitur Baru:**
   ```bash
   git checkout -b fitur/tambah-kata-baku-psikologi
   ```
4. **Lakukan Perubahan & Uji Coba:**
   Pastikan script tetap berjalan mulus dengan menjalankan pengujian pada berkas contoh:
   ```bash
   python skills/audit-skripsi/scripts/audit_cli.py examples/contoh_bab1_kuantitatif.md
   ```
5. **Commit dengan Pesan Deskriptif:**
   ```bash
   git commit -m "feat(kamus): tambahkan 15 istilah baku bidang pendidikan"
   ```
6. **Push ke Fork Anda:**
   ```bash
   git push origin fitur/tambah-kata-baku-psikologi
   ```
7. **Buka Pull Request (PR):** Ajukan PR ke branch `main` repositori utama dengan menjelaskan perubahan yang Anda buat.

---

## 📜 Prinsip & Etika Akademik

- **Bebas Data Privat:** Dilarang keras mengunggah naskah tugas akhir asli yang memuat data pribadi mahasiswa, nomor induk mahasiswa (NIM), atau data rahasia instansi. Gunakan data dummy atau contoh anonim.
- **Rujukan Resmi:** Setiap penambahan aturan format wajib merujuk pada pedoman resmi universitas yang dapat dipertanggungjawabkan atau kaidah PUEBI/EYD dan KBBI.
