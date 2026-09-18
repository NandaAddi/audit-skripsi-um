/**
 * AUDIT SKRIPSI UM — Interactive Frontend Logic
 * Standar Pedoman Penulisan Karya Ilmiah UM 2017
 */

// Data Kasus Sebelum vs Sesudah (Before & After Showcase)
const CASE_STUDIES = {
  bab1: {
    title: "BAB I: Latar Belakang Masalah (Gap Empiris vs Esai Opini)",
    badgeBefore: "Celah Fatal: Esai Klise Tanpa Data",
    badgeAfter: "Rekonstruksi: Berbasis Data PISA & Rujukan Primer",
    quoteBefore: `Pendidikan merupakan hal yang sangat penting bagi kemajuan suatu bangsa di negara kita. Pada era globalisasi saat ini, siswa dituntut memiliki kemampuan berpikir kritis dan kreatif. Namun dalam kenyataannya, banyak siswa yang merasa fisika itu sulit dan membosankan. Peneliti melakukan observasi dan merasa bahwa guru kurang inovatif dalam mengajar, sehingga siswa menjadi malas belajar.`,
    criticBefore: [
      { label: "Cacat Logika & Kaidah", desc: "Pernyataan klise esai populer tanpa data empiris; memakai kata ganti inklusif 'negara kita'; menyalahkan guru berdasarkan opini subjektif ('peneliti merasa'); konjungsi intrakalimat 'sehingga' di awal klausa." },
      { label: "Status Kelayakan", desc: "🔴 REVISI MAYOR / DITOLAK PENGUJI" }
    ],
    quoteAfter: `Tantangan mutu pendidikan dasar di Indonesia tercermin pada rendahnya capaian literasi membaca dan sains siswa yang menempati peringkat 71 dari 81 negara berdasarkan laporan PISA 2022 (OECD, 2023). Hasil observasi awal di SMA Negeri 1 Malang mengindikasikan bahwa 82,5% siswa mengalami kesulitan dalam memvisualisasikan konsep abstrak termodinamika. Studi meta-analisis Pratama & Lestari (2021) membuktikan bahwa integrasi simulasi interaktif mampu meningkatkan perolehan gain pemahaman konsep hingga g = 0,72 pada kategori tinggi. Oleh karena itu, penelitian ini bertujuan menguji efektivitas model inkuiri berbantuan media simulasi.`,
    formulaAfter: [
      { label: "Formula Rekonstruksi", desc: "[Konteks Data Empiris Global/PISA] + [Fakta Lapangan Terukur %] + [Rujukan Primer Mutakhir 10 Tahun] + [Justifikasi Urgensi Ilmiah]." },
      { label: "Kepatuhan Bahasa", desc: "✅ Bebas kata ganti subjektif, desimal koma (82,5%), rujukan jurnal mutakhir (2021-2023)." }
    ]
  },
  bab4: {
    title: "BAB IV: Pembahasan Hasil (Deskripsi Angka vs Pemaknaan Teoretis)",
    badgeBefore: "Celah Mayor: Sekadar Fotokopi Tabel",
    badgeAfter: "Rekonstruksi: Interpretasi Saintifik & Konfirmasi Teori",
    quoteBefore: `Berdasarkan Tabel 4.2 di atas, dapat dilihat bahwa rata-rata nilai posttest kelas eksperimen adalah 84.50 sedangkan kelas kontrol adalah 71.20. Hal ini menunjukkan bahwa kelas eksperimen lebih tinggi daripada kelas kontrol. Nilai t-hitung diperoleh sebesar 4.312 dengan sig 0.000. Karena 0.000 < 0.05 maka Ho ditolak dan Ha diterima. Jadi media ini berhasil meningkatkan hasil belajar siswa.`,
    criticBefore: [
      { label: "Cacat Logika & Kaidah", desc: "Pembahasan hanya mendongengkan ulang angka dari tabel tanpa memaknai MENGAPA hasilnya demikian; desimal memakai titik (84.50); tidak ada rujukan teori kognitif atau pembanding dengan riset terdahulu." },
      { label: "Status Kelayakan", desc: "🟡 CEGAH KELULUSAN (Bukan Pembahasan Ilmiah)" }
    ],
    quoteAfter: `Keunggulan capaian hasil belajar siswa pada kelas eksperimen (rerata 84,50) dibandingkan kelas kontrol (rerata 71,20) secara teoretis dapat dijelaskan melalui Cognitive Load Theory (Sweller, 2011). Visualisasi dinamis pada media simulasi mereduksi beban kognitif luar (*extraneous cognitive load*), sehingga kapasitas memori kerja siswa terfokus pada pengorganisasian skema mental konsep termodinamika. Temuan ini sejalan dengan penelitian Wardani, dkk. (2022) yang membuktikan bahwa representasi visual interaktif memfasilitasi retensi memori jangka panjang secara signifikan lebih kokoh dibanding teks statis.`,
    formulaAfter: [
      { label: "Formula Rekonstruksi", desc: "[Pemaknaan Selisih Temuan] + [Landasan Teori Pokok / Mengapa Hasil Terjadi] + [Komparasi dengan Riset Terkait 5 Tahun Terakhir]." },
      { label: "Kepatuhan Bahasa", desc: "✅ Menggunakan istilah kognitif tepat, istilah asing cetak miring (*italic*), rujukan mutakhir." }
    ]
  },
  bab5: {
    title: "BAB V: Simpulan (Poin Angka Statistik vs Alinea Naratif UM)",
    badgeBefore: "Celah Fatal: Format Numerik & Statistik Teknis",
    badgeAfter: "Rekonstruksi: Alinea Naratif Baku Sesuai Bab 5 UM 2017",
    quoteBefore: `5.1 Simpulan
Berdasarkan hasil penelitian dan analisis data, dapat disimpulkan bahwa:
1. Nilai rata-rata posttest meningkat dari 55.4 menjadi 84.5 dengan t-hitung 4.312 > t-tabel 1.99.
2. Terdapat pengaruh signifikan media Android terhadap hasil belajar dengan signifikansi p = 0.000 < 0.05.
3. Media pembelajaran dinyatakan valid dengan persentase 88.5% oleh ahli materi.`,
    criticBefore: [
      { label: "Cacat Kaidah UM 2017", desc: "Pedoman UM 2017 Bab 2 & 4 secara tegas melarang simpulan berbentuk butir numerik (1, 2, 3) dan melarang penggunaan istilah teknis statistik (t-hitung, p-value, angka persen). Simpulan harus berbentuk alinea naratif padat!" },
      { label: "Status Kelayakan", desc: "🔴 SALAH FORMAT TOTAL UM 2017" }
    ],
    quoteAfter: `Penerapan model pembelajaran inkuiri terbimbing berbantuan media simulasi interaktif terbukti efektif dalam meningkatkan penguasaan konsep fisika dan keterampilan berpikir kritis siswa secara signifikan. Interaktivitas simulasi berhasil mengatasi kendala visualisasi fenomena abstrak sehingga menumbuhkan kemandirian penalaran saintifik siswa. Dengan demikian, media ini layak diintegrasikan ke dalam perangkat kurikulum fisika tingkat sekolah menengah sebagai alternatif solusi pembelajaran aktif.`,
    formulaAfter: [
      { label: "Aturan Pedoman UM 2017", desc: "Simpulan disajikan dalam bentuk alinea narasi yang merangkum esensi temuan dan kontribusi ilmiah, bersih dari angka teknis statistik dan metodologi." },
      { label: "Kepatuhan Format", desc: "✅ 100% Sesuai Aturan Bab V Pedoman Penulisan Karya Ilmiah UM Edisi Keenam." }
    ]
  },
  sidang: {
    title: "Simulasi Ujian Sidang: Menghadapi Pertanyaan Jebakan Metodologi",
    badgeBefore: "Jawaban Mahasiswa yang Lemah & Runtuh",
    badgeAfter: "Jawaban Ilmiah Tangguh & Mempertahankan Benang Merah",
    quoteBefore: `Penguji: "Mengapa Anda menggunakan sampel 65 siswa dengan teknik purposive sampling? Mengapa tidak menggunakan cluster random sampling agar bisa digeneralisasikan?"
Mahasiswa: "Emm... Karena dari sekolahnya yang diizinkan hanya dua kelas itu saja Pak, dan waktu penelitian saya juga sangat terbatas jadi saya ambil kelas yang ada saja."`,
    criticBefore: [
      { label: "Cacat Argumentasi", desc: "Menjawab dengan dalih keterbatasan non-akademik ('waktu mepet', 'kebijakan sekolah') yang langsung mematikan validitas eksternal penelitian. Menunjukkan ketidaksiapan metodologis fatal!" },
      { label: "Status Sidang", desc: "🔴 NILAI SIDANG ANJLOK / SKOR < 60" }
    ],
    quoteAfter: `Penguji: "Mengapa Anda menggunakan sampel 65 siswa dengan teknik purposive sampling? Mengapa tidak menggunakan cluster random sampling agar bisa digeneralisasikan?"
Mahasiswa: "Terima kasih atas pertanyaannya, Prof. Pemilihan purposive sampling didasarkan pada pertimbangan kesetaraan karakteristik awal (*baseline equivalency*). Berdasarkan analisis uji homogenitas nilai rapor semester ganjil (Levene's test, p = 0,421), kedua kelas ini memiliki varians kemampuan awal yang setara dan diajar oleh guru yang sama. Hal ini krusial untuk mengisolasi variabel perlakuan media dan meminimalkan ancaman validitas internal akibat *teacher effect*, sebagaimana disarankan oleh Fraenkel & Wallen (2019)."`,
    formulaAfter: [
      { label: "Formula Respon Tangguh", desc: "[Apresiasi Pertanyaan] + [Justifikasi Saintifik & Bukti Homogenitas Awal] + [Alasan Isolasi Ancaman Validitas Internal] + [Dukungan Rujukan Metodologi Bereputasi]." },
      { label: "Verdict Penguji", desc: "🟢 NILAI MAKSIMAL (Skor 95 - Mahasiswa Sangat Menguasai Desain Penelitiannya)." }
    ]
  }
};

// Custom Instructions Teks untuk 1-Klik Salin
const CLAUDE_CUSTOM_INSTRUCTIONS = `# IDENTITAS & PERSONA GANDA — AUDIT SKRIPSI UM 2017
Kamu memiliki dua persona kerja yang berganti sesuai kebutuhan mahasiswa:

🔴 Persona A: Dosen Penguji Sidang "Killer" (/sidang atau /audit)
Nama: Prof. Dr. Evaluator, M.Pd. — Dosen Penguji Sidang Skripsi senior Universitas Negeri Malang dengan reputasi "killer".
- Tidak pernah kompromi terhadap cacat logika, lubang argumen, inkonsistensi data, dan klaim kosong tanpa data rujukan primer mutakhir.
- Membedah benang merah dari latar belakang sampai simpulan — jika putus, serang langsung.
- Menguji mahasiswa dalam 4 ronde bertahap dan menerbitkan Kartu Nilai Sidang resmi UM (skala 0-100 dan Nilai Huruf A hingga E).

🟢 Persona B: Dosen Pembimbing Konstruktif (/bimbingan)
Nama: Dr. Pembimbing Solutif, M.Pd. — Pendamping penulisan karya ilmiah yang edukatif, sistematis, dan solutif.
- Menemukan akar kelemahan tulisan, menjelaskan kaidah akademik yang dilanggar, dan selalu memberikan Formula 4-Bagian Rekonstruksi Kalimat siap pakai.

STANDAR ACUAN RESMI:
Gunakan Pedoman Penulisan Karya Ilmiah UM 2017 (Edisi Keenam):
1. Kajian Pustaka: Minimal 80% rujukan terbit dalam 10 tahun terakhir dan minimal 80% dari sumber primer (jurnal ilmiah).
2. Kuantitas Kata: Skripsi S1 maks 15.000 kata bagian inti.
3. Simpulan: Wajib ALINEA naratif (bukan numerik 1, 2, 3), tanpa istilah teknis statistik.
4. Pembahasan: Wajib MEMAKNAI temuan dan membandingkannya dengan riset terdahulu (bukan sekadar fotokopi tabel angka).
5. Kaidah Bahasa: Ragam impersonal (dilarang: "peneliti melakukan...", "penulis berpendapat...", "di negara kita"). Dilarang konjungsi intrakalimat di awal kalimat (Sehingga, Sedangkan di awal). Desimal menggunakan koma (,), bukan titik (.).

PERINTAH CEPAT:
- /audit       : Laporan audit komprehensif lengkap dengan metrik & skor.
- /sidang      : Simulasi sidang killer 4 ronde bertahap + Kartu Nilai UM.
- /bimbingan   : Rekonstruksi kalimat ilmiah dengan formula 4-bagian.
- /benang-merah: Evaluasi keselarasan Masalah <-> Teori <-> Metode <-> Temuan <-> Simpulan.
- /cek-rujukan : Audit kemutakhiran 10 tahun, primer 80%, dan sitasi silang.
- /cek-pedoman : Validasi format fisik & gaya selingkung.`;

const CHATGPT_SYSTEM_PROMPT = `Kamu adalah Asisten Dosen Penguji Sidang & Pembimbing Skripsi berbasis Pedoman Penulisan Karya Ilmiah Universitas Negeri Malang (UM 2017 Edisi Keenam).
Tugasmu:
1. Mode /audit: Bedah draf naskah mahasiswa berdasarkan 5 pilar (Benang Merah, Gap Latar Belakang, Metodologi, Kedalaman Pembahasan, dan Kepatuhan Format UM).
2. Mode /sidang: Uji mental mahasiswa dengan pertanyaan killer metodologi 4 ronde bertahap, lalu keluarkan Kartu Nilai Sidang UM (A/B+/B/C/Tidak Lulus).
3. Mode /bimbingan: Berikan kritik dengan Formula 4-Bagian:
   - Kutipan Teks Asli Mahasiswa
   - Cacat Logika / Kaidah Akademik
   - Formula Rekonstruksi Ilmiah
   - Draf Kalimat Perbaikan Siap Pakai
4. Taati aturan UM: 80% rujukan jurnal 10 tahun terakhir, simpulan bentuk alinea naratif tanpa angka statistik, desimal koma (bukan titik), dilarang kata ganti orang pertama ("peneliti melakukan").`;

// Fungsi Render Tab Before & After
function renderCaseStudy(key) {
  const data = CASE_STUDIES[key];
  if (!data) return;

  const container = document.getElementById("caseStudyView");
  if (!container) return;

  let criticHtml = data.criticBefore.map(c => `
    <div class="analysis-row">
      <span class="analysis-label" style="color: var(--red-killer);">${c.label}</span>
      <p style="color: #7f1d1d;">${c.desc}</p>
    </div>
  `).join("");

  let formulaHtml = data.formulaAfter.map(f => `
    <div class="analysis-row">
      <span class="analysis-label" style="color: var(--green-solutif);">${f.label}</span>
      <p style="color: #064e3b;">${f.desc}</p>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="comparison-side side-before">
      <div class="side-header">
        <span class="side-title text-navy">❌ Naskah Asli / Respon Lemah</span>
        <span class="badge badge-red">${data.badgeBefore}</span>
      </div>
      <div class="quote-box bad">
        <p>${data.quoteBefore.replace(/\n/g, '<br>')}</p>
      </div>
      <div class="analysis-breakdown">
        ${criticHtml}
      </div>
    </div>

    <div class="comparison-side side-after">
      <div class="side-header">
        <span class="side-title text-navy">✅ Hasil Rekonstruksi Ilmiah UM</span>
        <span class="badge badge-green">${data.badgeAfter}</span>
      </div>
      <div class="quote-box good">
        <p>${data.quoteAfter.replace(/\n/g, '<br>')}</p>
      </div>
      <div class="analysis-breakdown">
        ${formulaHtml}
      </div>
    </div>
  `;
}

// Fungsi Toast Notification
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerHTML = `<span>✅</span> <span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// Fungsi Salin Teks ke Clipboard
function copyText(text, successMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(err => {
      fallbackCopyText(text, successMessage);
    });
  } else {
    fallbackCopyText(text, successMessage);
  }
}

function fallbackCopyText(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMessage);
  } catch (err) {
    alert("Silakan salin teks secara manual.");
  }
  document.body.removeChild(textArea);
}

// Inisialisasi Event Listener saat DOM Siap
document.addEventListener("DOMContentLoaded", () => {
  // Render default case study
  renderCaseStudy("bab1");

  // Tab switcher listeners
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-target");
      renderCaseStudy(target);
    });
  });

  // Tombol Salin Prompt Claude
  const btnCopyClaude = document.getElementById("btnCopyClaude");
  if (btnCopyClaude) {
    btnCopyClaude.addEventListener("click", (e) => {
      e.preventDefault();
      copyText(CLAUDE_CUSTOM_INSTRUCTIONS, "Prompt Claude.ai Projects Berhasil Disalin!");
    });
  }

  // Tombol Salin Prompt ChatGPT
  const btnCopyChatGPT = document.getElementById("btnCopyChatGPT");
  if (btnCopyChatGPT) {
    btnCopyChatGPT.addEventListener("click", (e) => {
      e.preventDefault();
      copyText(CHATGPT_SYSTEM_PROMPT, "Prompt ChatGPT Custom GPT Berhasil Disalin!");
    });
  }

  // Tombol Salin Hero CTA
  const btnHeroCopy = document.getElementById("btnHeroCopy");
  if (btnHeroCopy) {
    btnHeroCopy.addEventListener("click", (e) => {
      e.preventDefault();
      copyText(CLAUDE_CUSTOM_INSTRUCTIONS, "Prompt Claude.ai Projects Berhasil Disalin!");
    });
  }

  // Accordion FAQ
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(q => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      item.classList.toggle("open");
    });
  });
});
