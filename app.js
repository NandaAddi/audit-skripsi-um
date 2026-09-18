/**
 * AUDIT SKRIPSI UM — Claude.ai Exclusive Academic Platform
 * Pedoman Penulisan Karya Ilmiah Universitas Negeri Malang (2017)
 */

// Data Kasus Sebelum vs Sesudah
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

// Data 4 Langkah Visual Simulator Claude.ai
const CLAUDE_GUIDE_STEPS = {
  1: {
    badge: "Langkah 01 dari 04",
    title: "Buka claude.ai & Buat Project Baru",
    desc: `
      <ol class="sim-steps-list">
        <li><strong>Buka Claude:</strong> Kunjungi <a href="https://claude.ai" target="_blank" rel="noopener" class="text-link">claude.ai</a> dan masuk menggunakan akun Anda.</li>
        <li><strong>Pilih Projects:</strong> Klik menu <strong>Projects</strong> pada bilah navigasi sisi kiri.</li>
        <li><strong>Buat Ruang Kerja:</strong> Klik tombol <strong>Create Project</strong> dan beri nama ruang kerja Anda, misalnya <em>"Audit Skripsi UM"</em>.</li>
      </ol>
    `,
    actionType: "link",
    actionText: "Buka claude.ai di Tab Baru",
    actionHref: "https://claude.ai",
    urlBar: "claude.ai/projects/new",
    mockup: `
      <div class="mockup-sidebar-layout">
        <div class="mockup-sidebar">
          <div class="mockup-menu-item">Chats</div>
          <div class="mockup-menu-item active">Projects</div>
          <div class="mockup-menu-item">Artifacts</div>
          <div class="mockup-menu-item" style="margin-top: 3rem;">Settings</div>
        </div>
        <div class="mockup-main-area">
          <div class="mockup-dialog-box">
            <h5>Create new project</h5>
            <p>Ruang kerja privat untuk menelaah naskah skripsi Anda</p>
            <div class="mockup-input-field">Audit Skripsi UM</div>
            <button class="btn btn-navy btn-sm" style="width: 100%;">Create Project</button>
          </div>
        </div>
      </div>
    `
  },
  2: {
    badge: "Langkah 02 dari 04",
    title: "Masukkan Instruksi Kustom (Custom Instructions)",
    desc: `
      <ol class="sim-steps-list">
        <li><strong>Salin Teks:</strong> Klik tombol <em>Salin Teks Instruksi Claude</em> di bawah ini.</li>
        <li><strong>Buka Pengaturan:</strong> Di ruang kerja project Anda, buka menu <strong>Set custom instructions</strong>.</li>
        <li><strong>Tempel & Simpan:</strong> Tempel teks instruksi ke kolom tersebut lalu klik <strong>Save</strong>. Seluruh standar telaah UM 2017 langsung aktif.</li>
      </ol>
    `,
    actionType: "copy",
    actionText: "Salin Teks Instruksi Claude",
    urlBar: "claude.ai/project/audit-skripsi-um/settings",
    mockup: `
      <div class="mockup-dialog-box" style="box-shadow: none; padding: 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <h5 style="margin: 0;">Custom Instructions</h5>
          <span class="tag tag-navy" style="font-size: 0.7rem;">Standar UM 2017</span>
        </div>
        <div class="mockup-preview-textarea">
# IDENTITAS & PERSONA — AUDIT SKRIPSI UM 2017
Kamu adalah mitra penelaahan karya ilmiah berbasis Pedoman Penulisan Karya Ilmiah UM 2017 (Edisi Keenam).
- /audit  : Telaah komprehensif naskah bab
- /sidang : Simulasi tanya-jawab sidang 4 ronde
- Rujukan : Minimal 80% rujukan jurnal 10 tahun terakhir
- Simpulan: Bentuk alinea naratif padat tanpa angka statistik...
        </div>
        <button class="btn btn-navy btn-sm" style="width: 100%;">Save instructions</button>
      </div>
    `
  },
  3: {
    badge: "Langkah 03 dari 04",
    title: "Unggah Berkas Pedoman UM ke Knowledge",
    desc: `
      <ol class="sim-steps-list">
        <li><strong>Unduh Berkas Pedoman:</strong> Unduh berkas <em>Pedoman-Penulisan-Karya-Ilmiah-2017.md</em> (147 KB) menggunakan tombol di bawah.</li>
        <li><strong>Buka Project Knowledge:</strong> Pada panel <strong>Project Knowledge</strong> di project Claude Anda, klik <strong>Add content / Files</strong>.</li>
        <li><strong>Unggah Berkas:</strong> Pilih berkas Markdown tersebut agar Claude memahami seluruh aturan gaya selingkung UM 2017.</li>
      </ol>
    `,
    actionType: "download",
    actionText: "Unduh Berkas Pedoman (.md)",
    actionHref: "Pedoman-Penulisan-Karya-Ilmiah-2017.md",
    urlBar: "claude.ai/project/audit-skripsi-um/knowledge",
    mockup: `
      <div class="mockup-dialog-box" style="box-shadow: none; padding: 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <h5 style="margin: 0;">Project Knowledge</h5>
          <span class="tag" style="font-size: 0.7rem;">1 File Terunggah</span>
        </div>
        <div class="mockup-file-card">
          <div class="file-info">
            <h6>Pedoman-Penulisan-Karya-Ilmiah-2017.md</h6>
            <span>147 KB • Markdown Indexed</span>
          </div>
          <span style="font-size: 0.75rem; color: #0f2347; font-weight: 700;">Tersimpan</span>
        </div>
        <div style="margin-top: 1.25rem; text-align: center;">
          <button class="btn btn-muted btn-sm" style="width: 100%; font-size: 0.775rem;">+ Add more content</button>
        </div>
      </div>
    `
  },
  4: {
    badge: "Langkah 04 dari 04",
    title: "Mulai Chat & Kirimkan Naskah Bab",
    desc: `
      <ol class="sim-steps-list">
        <li><strong>Buka Chat:</strong> Klik tombol <strong>Start chat</strong> di dalam project Claude Anda.</li>
        <li><strong>Ketik Perintah Telaah:</strong> Klik salah satu perintah cepat di bawah untuk menyalin perintah, lalu tempelkan draf bab naskah Anda.</li>
        <li><strong>Terima Masukan Seketika:</strong> Claude akan menelaah naskah Anda sesuai Pedoman UM atau menyimulasikan ujian sidang.</li>
      </ol>
    `,
    actionType: "chips",
    urlBar: "claude.ai/project/audit-skripsi-um/chat",
    mockup: `
      <div style="display: flex; flex-direction: column; justify-content: center; height: 100%;">
        <div class="mockup-chat-bubble user">
          /audit Bab I Latar Belakang Masalah...
        </div>
        <div class="mockup-chat-bubble claude">
          <strong>Laporan Penelaahan Skripsi — Standar UM 2017:</strong><br>
          • Nilai Mutu: A (Sangat Memuaskan)<br>
          • Benang Merah: Rumusan masalah selaras dengan kesenjangan empiris.<br>
          • Catatan: Ubah konjungsi "sehingga" di awal kalimat alinea ke-3.
        </div>
      </div>
    `
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

let currentStep = 1;

function renderGuideStep(stepNum) {
  const step = CLAUDE_GUIDE_STEPS[stepNum];
  if (!step) return;

  currentStep = stepNum;

  // Update navigasi tombol
  const navBtns = document.querySelectorAll(".sim-nav-btn");
  navBtns.forEach((btn, idx) => {
    if (idx + 1 === stepNum) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update konten instruksi
  const badgeEl = document.getElementById("simStepBadge");
  const titleEl = document.getElementById("simStepTitle");
  const descEl = document.getElementById("simStepDesc");
  const actionAreaEl = document.getElementById("simActionArea");
  const stepCounterEl = document.getElementById("simStepCounter");
  const urlBarEl = document.getElementById("simUrlBar");
  const windowContentEl = document.getElementById("simWindowContent");

  if (badgeEl) badgeEl.textContent = step.badge;
  if (titleEl) titleEl.textContent = step.title;
  if (descEl) descEl.innerHTML = step.desc;
  if (stepCounterEl) stepCounterEl.textContent = `Langkah ${stepNum} dari 4`;
  if (urlBarEl) urlBarEl.textContent = step.urlBar;
  if (windowContentEl) windowContentEl.innerHTML = step.mockup;

  // Update tombol aksi langsung
  if (actionAreaEl) {
    if (step.actionType === "copy") {
      actionAreaEl.innerHTML = `
        <button id="btnStepCopyInline" class="btn btn-navy btn-sm">
          ${step.actionText}
        </button>
      `;
      const btnInline = document.getElementById("btnStepCopyInline");
      if (btnInline) {
        btnInline.addEventListener("click", () => {
          copyText(CLAUDE_CUSTOM_INSTRUCTIONS, "Instruksi Claude berhasil disalin ke clipboard.");
        });
      }
    } else if (step.actionType === "download") {
      actionAreaEl.innerHTML = `
        <a href="${step.actionHref}" download class="btn btn-muted btn-sm">
          ${step.actionText}
        </a>
      `;
    } else if (step.actionType === "link") {
      actionAreaEl.innerHTML = `
        <a href="${step.actionHref}" target="_blank" rel="noopener" class="btn btn-muted btn-sm">
          ${step.actionText}
        </a>
      `;
    } else if (step.actionType === "chips") {
      actionAreaEl.innerHTML = `
        <div class="quick-chips-wrap">
          <span class="chips-label">Klik untuk menyalin perintah siap pakai:</span>
          <div class="quick-chips-grid">
            <button class="quick-chip" data-cmd="/audit Bab 1 [tempel draf naskah latar belakang]">/audit Bab 1</button>
            <button class="quick-chip" data-cmd="/sidang Simulasi Ujian Sidang Skripsi">/sidang</button>
            <button class="quick-chip" data-cmd="/bimbingan [tempel alinea untuk diperbaiki]">/bimbingan</button>
            <button class="quick-chip" data-cmd="/cek-rujukan [tempel daftar rujukan]">/cek-rujukan</button>
          </div>
        </div>
      `;
      const chips = actionAreaEl.querySelectorAll(".quick-chip");
      chips.forEach(chip => {
        chip.addEventListener("click", () => {
          const cmd = chip.getAttribute("data-cmd");
          copyText(cmd, `Perintah disalin! Tempelkan di chat Claude.`);
        });
      });
    } else {
      actionAreaEl.innerHTML = "";
    }
  }

  // Update tombol prev/next status
  const prevBtn = document.getElementById("btnSimPrev");
  const nextBtn = document.getElementById("btnSimNext");
  if (prevBtn) prevBtn.disabled = (stepNum === 1);
  if (nextBtn) nextBtn.disabled = (stepNum === 4);
}

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
  // Inisialisasi Case Study default
  renderCaseStudy("bab1");

  // Inisialisasi Visual Simulator Langkah 1
  renderGuideStep(1);

  // Tab perbandingan naskah
  const tabBtns = document.querySelectorAll(".viewer-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-target");
      renderCaseStudy(target);
    });
  });

  // Navigasi Simulator Langkah (Pills)
  const simNavBtns = document.querySelectorAll(".sim-nav-btn");
  simNavBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const step = parseInt(btn.getAttribute("data-step"), 10);
      renderGuideStep(step);
    });
  });

  // Tombol Prev/Next Simulator
  const btnSimPrev = document.getElementById("btnSimPrev");
  if (btnSimPrev) {
    btnSimPrev.addEventListener("click", () => {
      if (currentStep > 1) renderGuideStep(currentStep - 1);
    });
  }

  const btnSimNext = document.getElementById("btnSimNext");
  if (btnSimNext) {
    btnSimNext.addEventListener("click", () => {
      if (currentStep < 4) renderGuideStep(currentStep + 1);
    });
  }

  // Tombol Salin Prompt Claude (Resource Hub & Hero)
  const btnCopyClaude = document.getElementById("btnCopyClaude");
  if (btnCopyClaude) {
    btnCopyClaude.addEventListener("click", (e) => {
      e.preventDefault();
      copyText(CLAUDE_CUSTOM_INSTRUCTIONS, "Instruksi Claude berhasil disalin ke clipboard.");
    });
  }

  const btnHeroCopy = document.getElementById("btnHeroCopy");
  if (btnHeroCopy) {
    btnHeroCopy.addEventListener("click", (e) => {
      e.preventDefault();
      copyText(CLAUDE_CUSTOM_INSTRUCTIONS, "Instruksi Claude berhasil disalin ke clipboard.");
    });
  }

  // Accordion FAQ
  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const row = trigger.parentElement;
      row.classList.toggle("open");
    });
  });
});
