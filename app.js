/**
 * AUDIT SKRIPSI UM — Clean Academic Logic
 * Pedoman Penulisan Karya Ilmiah Universitas Negeri Malang (2017)
 */

const CASE_STUDIES = {
  bab1: {
    badgeBefore: "Catatan: Kalimat Klise Tanpa Data",
    badgeAfter: "Alternatif: Berbasis Data & Rujukan Primer",
    quoteBefore: `Pendidikan merupakan hal yang sangat penting bagi kemajuan suatu bangsa di negara kita. Pada era globalisasi saat ini, siswa dituntut memiliki kemampuan berpikir kritis dan kreatif. Namun dalam kenyataannya, banyak siswa yang merasa fisika itu sulit dan membosankan. Peneliti melakukan observasi dan merasa bahwa guru kurang inovatif dalam mengajar, sehingga siswa menjadi malas belajar.`,
    criticBefore: [
      { label: "Kelemahan Penulisan", desc: "Pernyataan bernada esai opini umum; memuat frasa inklusif 'negara kita'; menarik simpulan dari asumsi subjektif ('peneliti merasa'); konjungsi intrakalimat 'sehingga' digunakan di awal klausa mandiri." }
    ],
    quoteAfter: `Tantangan mutu pendidikan dasar di Indonesia tercermin pada rendahnya capaian literasi membaca dan sains siswa yang menempati peringkat 71 dari 81 negara berdasarkan laporan PISA 2022 (OECD, 2023). Hasil observasi awal di SMA Negeri 1 Malang mengindikasikan bahwa 82,5% siswa mengalami kendala dalam memvisualisasikan konsep abstrak termodinamika. Studi meta-analisis Pratama & Lestari (2021) membuktikan bahwa integrasi simulasi interaktif mampu meningkatkan perolehan gain pemahaman konsep hingga g = 0,72 pada kategori tinggi. Oleh karena itu, penelitian ini bertujuan menguji efektivitas model inkuiri berbantuan media simulasi.`,
    formulaAfter: [
      { label: "Pola Rekonstruksi", desc: "Konteks data empiris mutakhir + temuan lapangan terukur persentase + rujukan primer jurnal 10 tahun terakhir + tujuan objektif." }
    ]
  },
  bab4: {
    badgeBefore: "Catatan: Deskripsi Ulang Angka Tabel",
    badgeAfter: "Alternatif: Pembahasan Berbasis Teori",
    quoteBefore: `Berdasarkan Tabel 4.2 di atas, dapat dilihat bahwa rata-rata nilai posttest kelas eksperimen adalah 84.50 sedangkan kelas kontrol adalah 71.20. Hal ini menunjukkan bahwa kelas eksperimen lebih tinggi daripada kelas kontrol. Nilai t-hitung diperoleh sebesar 4.312 dengan sig 0.000. Karena 0.000 < 0.05 maka Ho ditolak dan Ha diterima. Jadi media ini berhasil meningkatkan hasil belajar siswa.`,
    criticBefore: [
      { label: "Kelemahan Penulisan", desc: "Hanya mengulang angka dari tabel tanpa menginterpretasikan mengapa hasil tersebut dapat terjadi; desimal memakai titik (84.50 bukan 84,50); belum mengaitkan temuan dengan teori belajar maupun penelitian terdahulu." }
    ],
    quoteAfter: `Keunggulan capaian hasil belajar siswa pada kelas eksperimen (rerata 84,50) dibandingkan kelas kontrol (rerata 71,20) secara teoretis dapat dijelaskan melalui Cognitive Load Theory (Sweller, 2011). Visualisasi dinamis pada media simulasi mereduksi beban kognitif luar (extraneous cognitive load), sehingga kapasitas memori kerja siswa terfokus pada pengorganisasian skema mental konsep termodinamika. Temuan ini sejalan dengan penelitian Wardani, dkk. (2022) yang membuktikan bahwa representasi visual interaktif memfasilitasi retensi memori jangka panjang secara signifikan lebih kokoh dibanding teks statis.`,
    formulaAfter: [
      { label: "Pola Rekonstruksi", desc: "Pemaknaan selisih temuan + justifikasi teori kognitif yang melandasi + komparasi dengan hasil riset relevan lima tahun terakhir." }
    ]
  },
  bab5: {
    badgeBefore: "Catatan: Format Numerik & Statistik",
    badgeAfter: "Alternatif: Alinea Naratif Sesuai Pedoman",
    quoteBefore: `5.1 Simpulan
Berdasarkan hasil penelitian dan analisis data, dapat disimpulkan bahwa:
1. Nilai rata-rata posttest meningkat dari 55.4 menjadi 84.5 dengan t-hitung 4.312 > t-tabel 1.99.
2. Terdapat pengaruh signifikan media Android terhadap hasil belajar dengan signifikansi p = 0.000 < 0.05.
3. Media pembelajaran dinyatakan valid dengan persentase 88.5% oleh ahli materi.`,
    criticBefore: [
      { label: "Kelemahan Penulisan", desc: "Pedoman UM 2017 Bab 2 dan 4 mengatur bahwa simpulan disajikan dalam bentuk alinea naratif padat, bukan dalam bentuk poin penomoran (1, 2, 3), serta tidak memuat istilah statistik teknis (t-hitung, p-value)." }
    ],
    quoteAfter: `Penerapan model pembelajaran inkuiri terbimbing berbantuan media simulasi interaktif terbukti efektif dalam meningkatkan penguasaan konsep fisika dan keterampilan berpikir kritis siswa secara signifikan. Interaktivitas simulasi berhasil mengatasi kendala visualisasi fenomena abstrak sehingga menumbuhkan kemandirian penalaran saintifik siswa. Dengan demikian, media ini layak diintegrasikan ke dalam perangkat kurikulum fisika tingkat sekolah menengah sebagai alternatif solusi pembelajaran aktif.`,
    formulaAfter: [
      { label: "Pola Rekonstruksi", desc: "Simpulan berupa alinea mengalir yang merangkum esensi capaian rumusan masalah dan implikasi praktis, bersih dari rumus statistik teknis." }
    ]
  },
  sidang: {
    badgeBefore: "Catatan: Argumentasi Asumsi",
    badgeAfter: "Alternatif: Argumentasi Metodologis",
    quoteBefore: `Penguji: "Mengapa Anda menggunakan sampel 65 siswa dengan teknik purposive sampling? Mengapa tidak menggunakan cluster random sampling agar hasilnya dapat digeneralisasikan?"
Mahasiswa: "Karena dari pihak sekolah hanya mengizinkan dua kelas itu saja, dan waktu penelitian kami juga sangat terbatas sehingga kami mengambil kelas yang tersedia."`,
    criticBefore: [
      { label: "Kelemahan Argumentasi", desc: "Menjawab dengan dalih kendala administratif atau waktu, yang dapat melemahkan justifikasi metodologis penelitian di hadapan dewan penguji." }
    ],
    quoteAfter: `Penguji: "Mengapa Anda menggunakan sampel 65 siswa dengan teknik purposive sampling? Mengapa tidak menggunakan cluster random sampling agar hasilnya dapat digeneralisasikan?"
Mahasiswa: "Terima kasih atas pertanyaannya. Pemilihan purposive sampling didasarkan pada pertimbangan kesetaraan karakteristik awal (baseline equivalency). Berdasarkan analisis uji homogenitas nilai rapor semester ganjil (Levene's test, p = 0,421), kedua kelas memiliki varians kemampuan awal yang setara dan diajar oleh guru yang sama. Hal ini penting untuk mengisolasi variabel perlakuan media dan meminimalkan ancaman validitas internal akibat perbedaan gaya mengajar guru, sebagaimana disarankan oleh Fraenkel & Wallen (2019)."`,
    formulaAfter: [
      { label: "Pola Rekonstruksi", desc: "Menjelaskan landasan ilmiah di balik pemilihan teknik sampling + menyertakan bukti homogenitas data awal + merujuk literatur metodologi rujukan." }
    ]
  }
};

const CLAUDE_CUSTOM_INSTRUCTIONS = `# IDENTITAS & PERSONA — AUDIT SKRIPSI UM 2017
Kamu adalah mitra penelaahan karya ilmiah berbasis Pedoman Penulisan Karya Ilmiah Universitas Negeri Malang (UM 2017 Edisi Keenam).

Dua Pendekatan yang Disediakan:
1. Evaluasi Penguji (/sidang atau /audit):
   - Bertindak sebagai penguji akademik yang cermat terhadap logika benang merah, ketepatan metode, dan kebaruan rujukan.
   - Menelaah keselarasan: Latar Belakang -> Rumusan Masalah -> Teori -> Metode -> Temuan -> Simpulan.
   - Menguji pemahaman mahasiswa melalui pertanyaan kritis terstruktur.

2. Bimbingan Penulisan (/bimbingan):
   - Membantu memperbaiki konstruksi kalimat dan tata bahasa agar memenuhi ragam formal ilmiah.
   - Memberikan contoh perbaikan kalimat siap pakai dengan formula yang jelas.

STANDAR ACUAN RESMI:
- Pedoman Penulisan Karya Ilmiah UM 2017 (Edisi Keenam).
- Kajian Pustaka: Minimal 80% rujukan terbit dalam 10 tahun terakhir dan minimal 80% dari sumber primer (artikel jurnal).
- Batas Bagian Inti: Skripsi S1 maksimal 15.000 kata.
- Simpulan: Disajikan dalam bentuk alinea naratif (bukan poin numerik), tanpa istilah teknis statistik.
- Bahasa: Ragam impersonal (hindari kata ganti orang pertama), hindari konjungsi intrakalimat di awal kalimat (seperti Sehingga, Sedangkan), dan gunakan koma untuk tanda desimal.

PERINTAH:
- /audit       : Telaah menyeluruh bab naskah.
- /sidang      : Simulasi tanya-jawab sidang secara bertahap.
- /bimbingan   : Rekonstruksi kalimat dan pemilihan kata baku.
- /benang-merah: Evaluasi keselarasan alur logika naskah.
- /cek-rujukan : Pemeriksaan kemutakhiran dan keprimeran rujukan.`;

const CHATGPT_SYSTEM_PROMPT = `Kamu bertindak sebagai asisten penelaahan skripsi berbasis Pedoman Penulisan Karya Ilmiah Universitas Negeri Malang (UM 2017 Edisi Keenam).
Fokus penelaahan:
1. Keselarasan benang merah (Masalah, Teori, Metode, Temuan, Simpulan).
2. Rujukan: minimal 80% artikel jurnal 10 tahun terakhir.
3. Pembahasan: harus mengaitkan temuan dengan teori dan riset terdahulu.
4. Simpulan: bentuk alinea naratif (bukan poin angka), tanpa angka statistik teknis.
5. Bahasa baku: ragam impersonal, hindari konjungsi intrakalimat di awal kalimat, format desimal koma (bukan titik).
Gunakan gaya komunikasi yang profesional, lugas, dan edukatif.`;

function renderCaseStudy(key) {
  const data = CASE_STUDIES[key];
  if (!data) return;

  const container = document.getElementById("caseStudyView");
  if (!container) return;

  const criticHtml = data.criticBefore.map(c => `
    <div class="note-item">
      <span>${c.label}</span>
      <p>${c.desc}</p>
    </div>
  `).join("");

  const formulaHtml = data.formulaAfter.map(f => `
    <div class="note-item">
      <span>${f.label}</span>
      <p>${f.desc}</p>
    </div>
  `).join("");

  container.innerHTML = `
    <div class="comparison-col col-before">
      <div class="col-header">
        <h4>Contoh Draf Asli</h4>
        <span class="tag">${data.badgeBefore}</span>
      </div>
      <div class="text-passage before">
        <p>${data.quoteBefore.replace(/\n/g, '<br>')}</p>
      </div>
      <div class="notes-list">
        ${criticHtml}
      </div>
    </div>

    <div class="comparison-col col-after">
      <div class="col-header">
        <h4>Alternatif Rekonstruksi Ilmiah</h4>
        <span class="tag tag-navy">${data.badgeAfter}</span>
      </div>
      <div class="text-passage after">
        <p>${data.quoteAfter.replace(/\n/g, '<br>')}</p>
      </div>
      <div class="notes-list">
        ${formulaHtml}
      </div>
    </div>
  `;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 3000);
}

function copyText(text, successMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
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

document.addEventListener("DOMContentLoaded", () => {
  renderCaseStudy("bab1");

  const tabBtns = document.querySelectorAll(".viewer-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-target");
      renderCaseStudy(target);
    });
  });

  // Guide Tab Switcher (Claude.ai vs AI Agent)
  const guideTabBtns = document.querySelectorAll(".guide-tab-btn");
  guideTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      guideTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetGuide = btn.getAttribute("data-guide");
      
      const panelClaude = document.getElementById("guide-claude");
      const panelAgent = document.getElementById("guide-agent");
      
      if (targetGuide === "claude") {
        if (panelClaude) panelClaude.classList.add("active");
        if (panelAgent) panelAgent.classList.remove("active");
      } else {
        if (panelClaude) panelClaude.classList.remove("active");
        if (panelAgent) panelAgent.classList.add("active");
      }
    });
  });

  // Tombol Salin Prompt Claude (Resource Hub & Hero)
  const btnCopyClaude = document.getElementById("btnCopyClaude");
  if (btnCopyClaude) {
    btnCopyClaude.addEventListener("click", (e) => {
      e.preventDefault();
      copyText(CLAUDE_CUSTOM_INSTRUCTIONS, "Instruksi Claude berhasil disalin ke clipboard.");
    });
  }

  // Tombol Salin Prompt Inline di Langkah 2
  const btnStepCopyClaude = document.getElementById("btnStepCopyClaude");
  if (btnStepCopyClaude) {
    btnStepCopyClaude.addEventListener("click", (e) => {
      e.preventDefault();
      copyText(CLAUDE_CUSTOM_INSTRUCTIONS, "Instruksi Claude berhasil disalin ke clipboard.");
    });
  }

  // Tombol Salin Prompt ChatGPT
  const btnCopyChatGPT = document.getElementById("btnCopyChatGPT");
  if (btnCopyChatGPT) {
    btnCopyChatGPT.addEventListener("click", (e) => {
      e.preventDefault();
      copyText(CHATGPT_SYSTEM_PROMPT, "Instruksi ChatGPT berhasil disalin ke clipboard.");
    });
  }

  const btnHeroCopy = document.getElementById("btnHeroCopy");
  if (btnHeroCopy) {
    btnHeroCopy.addEventListener("click", (e) => {
      e.preventDefault();
      copyText(CLAUDE_CUSTOM_INSTRUCTIONS, "Instruksi Claude berhasil disalin ke clipboard.");
    });
  }

  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const row = trigger.parentElement;
      row.classList.toggle("open");
    });
  });
});
