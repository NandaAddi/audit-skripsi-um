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
// Data 5 Langkah Visual Simulator Claude.ai
const CLAUDE_GUIDE_STEPS = {
  1: {
    badge: "Langkah 01 dari 05",
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
            <div class="mockup-input-wrapper">
              <label class="mockup-input-label">Nama Project</label>
              <div id="simStep1Input" class="mockup-input-field">
                <span id="simStep1Typed"></span><span id="simStep1Cursor" class="typing-cursor">|</span>
              </div>
            </div>
            <button id="simStep1Btn" class="btn btn-navy btn-sm" style="width: 100%;">Create Project</button>
            <div id="simStep1Toast" class="sim-toast-success">
              <span class="toast-check">✓</span> Project "Audit Skripsi UM" berhasil dibuat!
            </div>
          </div>
        </div>
      </div>
    `
  },
  2: {
    badge: "Langkah 02 dari 05",
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
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
          <h5 style="margin: 0; font-size: 0.95rem;">Custom Instructions</h5>
          <span class="tag tag-navy" style="font-size: 0.7rem;">Standar UM 2017</span>
        </div>
        <div id="simStep2Notice" class="sim-paste-notice">
          <span>📋</span> Menempelkan teks instruksi sistem UM 2017...
        </div>
        <div id="simStep2CodeArea" class="mockup-preview-textarea">
          <div class="code-stream-line hl-comment" id="line1"># IDENTITAS &amp; PERSONA — AUDIT SKRIPSI UM 2017</div>
          <div class="code-stream-line hl-item" id="line2">• Mitra telaah karya ilmiah berbasis Pedoman UM 2017</div>
          <div class="code-stream-line hl-item" id="line3">• /audit : Telaah keselarasan benang merah bab</div>
          <div class="code-stream-line hl-item" id="line4">• /sidang : Simulasi penguji senior 4 ronde bertahap</div>
          <div class="code-stream-line hl-item" id="line5">• Syarat Mutlak : Minimal 80% jurnal 10 tahun terakhir</div>
          <div class="code-stream-line hl-item" id="line6">• Simpulan : Alinea naratif padat bebas angka statistik</div>
        </div>
        <button id="simStep2Btn" class="btn btn-navy btn-sm" style="width: 100%;">Save instructions</button>
        <div id="simStep2Toast" class="sim-toast-success">
          <span class="toast-check">✓</span> Seluruh Standar Pedoman UM 2017 Tersimpan Aktif
        </div>
      </div>
    `
  },
  3: {
    badge: "Langkah 03 dari 05",
    title: "Unggah 5 Berkas Acuan Terpisah ke Knowledge",
    desc: `
      <ol class="sim-steps-list">
        <li><strong>Unduh 5 Berkas Terpisah:</strong> Unduh kelima berkas Markdown acuan (Buku Pedoman, Rubrik 8 Dimensi, Kamus Kata Baku, Skala Nilai Sidang, dan Pedoman Artikel) di bawah ini. Masing-masing berkas sengaja dipisahkan agar pemetaan konteks analisis Claude menjadi spesifik dan jelas.</li>
        <li><strong>Buka Project Knowledge:</strong> Pada ruang kerja Project Claude Anda, temukan panel <strong>Project Knowledge</strong> lalu klik <strong>Add content / Files</strong>.</li>
        <li><strong>Unggah Kelima Berkas:</strong> Masukkan atau seret kelima berkas <code>.md</code> tersebut. Claude akan mengindeks masing-masing berkas sebagai dasar evaluasi naskah Anda.</li>
      </ol>
    `,
    actionType: "download_separate",
    urlBar: "claude.ai/project/audit-skripsi-um/knowledge",
    mockup: `
      <div class="mockup-dialog-box" style="box-shadow: none; padding: 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
          <h5 style="margin: 0; font-size: 0.9rem;">Project Knowledge</h5>
          <span id="simStep3Badge" class="tag tag-navy" style="font-size: 0.7rem;">0 dari 5 Berkas Terunggah</span>
        </div>
        <div id="simStep3Cards" class="sim-cards-container">
          <div class="animated-file-card" id="fileCard0">
            <div class="card-top-row">
              <div>
                <h6>Pedoman-Penulisan-Karya-Ilmiah-2017.md</h6>
                <span>147 KB • Buku Pedoman Induk Edisi Keenam</span>
              </div>
              <span class="file-badge-state" id="fileBadge0">Mengunggah...</span>
            </div>
            <div class="file-progress-track">
              <div class="file-progress-fill" id="fileProgress0"></div>
            </div>
          </div>
          <div class="animated-file-card" id="fileCard1">
            <div class="card-top-row">
              <div>
                <h6>rubrik-audit-um2017.md</h6>
                <span>10 KB • Rubrik 8 Dimensi Telaah Skripsi UM</span>
              </div>
              <span class="file-badge-state" id="fileBadge1">Mengunggah...</span>
            </div>
            <div class="file-progress-track">
              <div class="file-progress-fill" id="fileProgress1"></div>
            </div>
          </div>
          <div class="animated-file-card" id="fileCard2">
            <div class="card-top-row">
              <div>
                <h6>kamus-tata-bahasa-ilmiah.md</h6>
                <span>9 KB • Pasangan Kata Baku &amp; Aturan Konjungsi</span>
              </div>
              <span class="file-badge-state" id="fileBadge2">Mengunggah...</span>
            </div>
            <div class="file-progress-track">
              <div class="file-progress-fill" id="fileProgress2"></div>
            </div>
          </div>
          <div class="animated-file-card" id="fileCard3">
            <div class="card-top-row">
              <div>
                <h6>skala-penilaian-sidang-um.md</h6>
                <span>8 KB • Standar Nilai A–E &amp; Kriteria Sidang</span>
              </div>
              <span class="file-badge-state" id="fileBadge3">Mengunggah...</span>
            </div>
            <div class="file-progress-track">
              <div class="file-progress-fill" id="fileProgress3"></div>
            </div>
          </div>
          <div class="animated-file-card" id="fileCard4">
            <div class="card-top-row">
              <div>
                <h6>panduan-artikel-jurnal-um.md</h6>
                <span>6 KB • Format IMRAD Publikasi Ilmiah UM</span>
              </div>
              <span class="file-badge-state" id="fileBadge4">Mengunggah...</span>
            </div>
            <div class="file-progress-track">
              <div class="file-progress-fill" id="fileProgress4"></div>
            </div>
          </div>
        </div>
        <div id="simStep3Toast" class="sim-toast-success">
          <span class="toast-check">✓</span> 5 Berkas Pedoman Terindeks Siap Menjadi Rujukan
        </div>
      </div>
    `
  },
  4: {
    badge: "Langkah 04 dari 05",
    title: "Unggah Draf / Berkas Naskah Skripsi Anda",
    desc: `
      <ol class="sim-steps-list">
        <li><strong>Siapkan Berkas Naskah:</strong> Gunakan draf naskah skripsi Anda dalam format <code>.docx</code> (Microsoft Word) atau <code>.pdf</code>.</li>
        <li><strong>Rekomendasi Unggah per Bab:</strong> Sangat dianjurkan menelaah naskah bab demi bab (misal Bab I atau Proposal Bab I–III) agar telaah logika dan rujukan mendalam tanpa batasan panjang teks.</li>
        <li><strong>Lampirkan ke Chat:</strong> Klik ikon lampiran klip kertas (📎) di kolom percakapan Claude atau seret (drag-and-drop) berkas naskah Anda ke dalam ruang kerja.</li>
      </ol>
    `,
    actionType: "draft_tips",
    urlBar: "claude.ai/project/audit-skripsi-um/chat",
    mockup: `
      <div class="mockup-dialog-box" style="box-shadow: none; padding: 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
          <h5 style="margin: 0; font-size: 0.95rem;">Lampiran Berkas Naskah</h5>
          <span class="tag tag-lime" style="font-size: 0.7rem;">Format .docx / .pdf</span>
        </div>
        <div id="simStep4Dropzone" class="sim-upload-dropzone">
          <div id="simStep4DropContent" class="dropzone-inner">
            <div class="dropzone-icon">📄</div>
            <div class="dropzone-title">Seret berkas draf naskah ke sini</div>
            <div class="dropzone-sub">Mendukung Microsoft Word (.docx) atau PDF (.pdf)</div>
          </div>
          <div id="simStep4FileAttached" class="sim-attached-file-pill">
            <div class="file-icon-box">DOCX</div>
            <div class="file-meta">
              <strong>Draf_Skripsi_Bab1_Pendahuluan.docx</strong>
              <span>1.8 MB • Bab I Pendahuluan S1 UM</span>
            </div>
            <div id="simStep4UploadBadge" class="file-status-badge">
              Mengunggah...
            </div>
          </div>
          <div class="file-progress-track" id="simStep4ProgressTrack" style="margin-top: 0.5rem; display: none;">
            <div class="file-progress-fill" id="simStep4ProgressBar"></div>
          </div>
        </div>
        <div class="sim-prompt-preview-box">
          <div class="prompt-preview-label">Keterangan Prompt Bersama Berkas:</div>
          <div class="prompt-preview-text" id="simStep4PromptText">
            <span id="simStep4PromptTyped"></span><span id="simStep4PromptCursor" class="typing-cursor">|</span>
          </div>
        </div>
        <button id="simStep4SendBtn" class="btn btn-navy btn-sm" style="width: 100%; margin-top: 0.75rem;">
          Lampirkan &amp; Siapkan Telaah ➔
        </button>
        <div id="simStep4Toast" class="sim-toast-success">
          <span class="toast-check">✓</span> Berkas Draf Bab I Terlampir Siap Ditelaah
        </div>
      </div>
    `
  },
  5: {
    badge: "Langkah 05 dari 05",
    title: "Mulai Chat & Jalankan Perintah Telaah",
    desc: `
      <ol class="sim-steps-list">
        <li><strong>Buka Chat:</strong> Klik tombol <strong>Start chat</strong> di dalam project Claude Anda.</li>
        <li><strong>Ketik Perintah Telaah:</strong> Klik salah satu tombol perintah cepat di bawah untuk menyalin perintah (misal <code>/audit</code> atau <code>/sidang</code>) bersama berkas draf yang sudah terlampir.</li>
        <li><strong>Terima Masukan Seketika:</strong> Claude akan membedah naskah Anda sesuai Pedoman UM 2017 dan menyajikan laporan kelayakan ilmiah.</li>
      </ol>
    `,
    actionType: "chips",
    urlBar: "claude.ai/project/audit-skripsi-um/chat",
    mockup: `
      <div class="sim-chat-container">
        <div id="simChatUser" class="mockup-chat-bubble user sim-anim-bubble">
          <div class="chat-sender">Mahasiswa</div>
          <div class="chat-text">/audit Bab I Latar Belakang Masalah (Draf Naskah Terlampir)</div>
        </div>
        <div id="simChatThinking" class="mockup-thinking-bubble">
          <div class="thinking-dots">
            <span class="thinking-dot"></span>
            <span class="thinking-dot"></span>
            <span class="thinking-dot"></span>
          </div>
          <span>Claude menganalisis naskah berdasarkan Pedoman UM 2017...</span>
        </div>
        <div id="simChatClaude" class="mockup-chat-bubble claude sim-anim-bubble">
          <div class="chat-sender-claude">Claude • Evaluator Akademik UM</div>
          <div class="claude-response-content">
            <div class="report-badge">📊 Hasil Evaluasi Bab I Standar UM 2017:</div>
            <div class="report-point" id="simPt1"><span class="point-icon check">✓</span> <div><strong>Benang Merah:</strong> Rumusan masalah selaras dengan kesenjangan empiris.</div></div>
            <div class="report-point" id="simPt2"><span class="point-icon check">✓</span> <div><strong>Kajian Pustaka:</strong> 85% rujukan merupakan artikel jurnal 10 tahun terakhir.</div></div>
            <div class="report-point" id="simPt3"><span class="point-icon warn">⚠</span> <div><strong>Tata Bahasa:</strong> Perbaiki konjungsi <em>"sehingga"</em> di awal kalimat alinea ke-3.</div></div>
          </div>
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
let activeAnimationTimeouts = [];

function clearActiveAnimations() {
  activeAnimationTimeouts.forEach(id => clearTimeout(id));
  activeAnimationTimeouts = [];
}

function addAnimTimeout(callback, delay) {
  const id = setTimeout(callback, delay);
  activeAnimationTimeouts.push(id);
  return id;
}

function playStepAnimation(stepNum) {
  clearActiveAnimations();

  if (stepNum === 1) {
    const typedEl = document.getElementById("simStep1Typed");
    const cursorEl = document.getElementById("simStep1Cursor");
    const btnEl = document.getElementById("simStep1Btn");
    const toastEl = document.getElementById("simStep1Toast");

    if (!typedEl || !btnEl) return;

    typedEl.textContent = "";
    if (cursorEl) cursorEl.style.display = "inline";
    btnEl.className = "btn btn-navy btn-sm";
    btnEl.style.width = "100%";
    btnEl.textContent = "Create Project";
    if (toastEl) toastEl.classList.remove("show");

    const textToType = "Audit Skripsi UM";
    for (let i = 0; i < textToType.length; i++) {
      addAnimTimeout(() => {
        typedEl.textContent = textToType.slice(0, i + 1);
      }, 250 + i * 65);
    }

    const typingDuration = 250 + textToType.length * 65;

    addAnimTimeout(() => {
      if (cursorEl) cursorEl.style.display = "none";
      btnEl.classList.add("btn-active-click");
    }, typingDuration + 300);

    addAnimTimeout(() => {
      btnEl.classList.remove("btn-active-click");
      btnEl.classList.add("btn-anim-success");
      btnEl.textContent = "✓ Project Created";
      if (toastEl) toastEl.classList.add("show");
    }, typingDuration + 550);
  } else if (stepNum === 2) {
    const noticeEl = document.getElementById("simStep2Notice");
    const lines = [
      document.getElementById("line1"),
      document.getElementById("line2"),
      document.getElementById("line3"),
      document.getElementById("line4"),
      document.getElementById("line5"),
      document.getElementById("line6")
    ];
    const btnEl = document.getElementById("simStep2Btn");
    const toastEl = document.getElementById("simStep2Toast");

    if (!btnEl) return;

    if (noticeEl) noticeEl.classList.remove("show");
    lines.forEach(l => l && l.classList.remove("show"));
    btnEl.className = "btn btn-navy btn-sm";
    btnEl.style.width = "100%";
    btnEl.textContent = "Save instructions";
    if (toastEl) toastEl.classList.remove("show");

    addAnimTimeout(() => {
      if (noticeEl) noticeEl.classList.add("show");
    }, 150);

    lines.forEach((line, idx) => {
      if (line) {
        addAnimTimeout(() => {
          line.classList.add("show");
        }, 350 + idx * 200);
      }
    });

    const linesDuration = 350 + lines.length * 200;

    addAnimTimeout(() => {
      btnEl.classList.add("btn-active-click");
    }, linesDuration + 250);

    addAnimTimeout(() => {
      btnEl.classList.remove("btn-active-click");
      btnEl.classList.add("btn-anim-success");
      btnEl.textContent = "✓ Instructions Saved";
      if (toastEl) toastEl.classList.add("show");
    }, linesDuration + 500);
  } else if (stepNum === 3) {
    const badgeEl = document.getElementById("simStep3Badge");
    const toastEl = document.getElementById("simStep3Toast");
    const fileCount = 5;

    for (let i = 0; i < fileCount; i++) {
      const card = document.getElementById(`fileCard${i}`);
      const prog = document.getElementById(`fileProgress${i}`);
      const badge = document.getElementById(`fileBadge${i}`);

      if (card) {
        card.classList.remove("show", "done");
      }
      if (prog) prog.style.width = "0%";
      if (badge) {
        badge.classList.remove("done");
        badge.textContent = "Mengunggah...";
      }
    }
    if (badgeEl) badgeEl.textContent = "0 dari 5 Berkas Terunggah";
    if (toastEl) toastEl.classList.remove("show");

    for (let i = 0; i < fileCount; i++) {
      const startTime = 200 + i * 360;
      addAnimTimeout(() => {
        const card = document.getElementById(`fileCard${i}`);
        const prog = document.getElementById(`fileProgress${i}`);
        if (card) card.classList.add("show");
        if (prog) prog.style.width = "100%";
      }, startTime);

      addAnimTimeout(() => {
        const card = document.getElementById(`fileCard${i}`);
        const badge = document.getElementById(`fileBadge${i}`);
        if (card) card.classList.add("done");
        if (badge) {
          badge.classList.add("done");
          badge.textContent = "Tersimpan ✓";
        }
        if (badgeEl) badgeEl.textContent = `${i + 1} dari 5 Berkas Terunggah`;
      }, startTime + 300);
    }

    addAnimTimeout(() => {
      if (toastEl) toastEl.classList.add("show");
    }, 200 + fileCount * 360 + 250);
  } else if (stepNum === 4) {
    const dropzone = document.getElementById("simStep4Dropzone");
    const dropContent = document.getElementById("simStep4DropContent");
    const fileAttached = document.getElementById("simStep4FileAttached");
    const progressTrack = document.getElementById("simStep4ProgressTrack");
    const progressBar = document.getElementById("simStep4ProgressBar");
    const uploadBadge = document.getElementById("simStep4UploadBadge");
    const promptTyped = document.getElementById("simStep4PromptTyped");
    const promptCursor = document.getElementById("simStep4PromptCursor");
    const sendBtn = document.getElementById("simStep4SendBtn");
    const toastEl = document.getElementById("simStep4Toast");

    if (!dropzone) return;

    // Reset initial state
    dropzone.classList.remove("active");
    if (dropContent) {
      dropContent.style.display = "flex";
      dropContent.classList.remove("hide");
    }
    if (fileAttached) fileAttached.classList.remove("show");
    if (progressTrack) progressTrack.style.display = "none";
    if (progressBar) progressBar.style.width = "0%";
    if (uploadBadge) {
      uploadBadge.className = "file-status-badge";
      uploadBadge.textContent = "Mengunggah...";
    }
    if (promptTyped) promptTyped.textContent = "";
    if (promptCursor) promptCursor.style.display = "inline";
    if (sendBtn) {
      sendBtn.className = "btn btn-navy btn-sm";
      sendBtn.style.width = "100%";
      sendBtn.style.marginTop = "0.75rem";
      sendBtn.innerHTML = `<span>Lampirkan &amp; Siapkan Telaah</span> ➔`;
    }
    if (toastEl) toastEl.classList.remove("show");

    // Sequence 1: Drag & drop hover active
    addAnimTimeout(() => {
      dropzone.classList.add("active");
    }, 250);

    // Sequence 2: File dropped -> show attached pill & progress bar
    addAnimTimeout(() => {
      dropzone.classList.remove("active");
      if (dropContent) {
        dropContent.classList.add("hide");
        dropContent.style.display = "none";
      }
      if (fileAttached) fileAttached.classList.add("show");
      if (progressTrack) progressTrack.style.display = "block";
      if (progressBar) progressBar.style.width = "100%";
    }, 700);

    // Sequence 3: Upload finished
    addAnimTimeout(() => {
      if (uploadBadge) {
        uploadBadge.classList.add("done");
        uploadBadge.textContent = "Terlampir ✓";
      }
    }, 1300);

    // Sequence 4: Type accompanying prompt
    const promptToType = "/audit Bab I: Telaah keselarasan latar belakang dan kemutakhiran 80% rujukan jurnal.";
    const startTypeTime = 1500;
    for (let i = 0; i < promptToType.length; i++) {
      addAnimTimeout(() => {
        if (promptTyped) promptTyped.textContent = promptToType.slice(0, i + 1);
      }, startTypeTime + i * 25);
    }

    const typeDuration = startTypeTime + promptToType.length * 25;

    // Sequence 5: Click button & show toast
    addAnimTimeout(() => {
      if (promptCursor) promptCursor.style.display = "none";
      if (sendBtn) sendBtn.classList.add("btn-active-click");
    }, typeDuration + 200);

    addAnimTimeout(() => {
      if (sendBtn) {
        sendBtn.classList.remove("btn-active-click");
        sendBtn.classList.add("btn-anim-success");
        sendBtn.textContent = "✓ Berkas & Prompt Siap Dikirim";
      }
      if (toastEl) toastEl.classList.add("show");
    }, typeDuration + 450);
  } else if (stepNum === 5) {
    const userBubble = document.getElementById("simChatUser");
    const thinkingBubble = document.getElementById("simChatThinking");
    const claudeBubble = document.getElementById("simChatClaude");
    const pt1 = document.getElementById("simPt1");
    const pt2 = document.getElementById("simPt2");
    const pt3 = document.getElementById("simPt3");

    if (userBubble) userBubble.classList.remove("show");
    if (thinkingBubble) {
      thinkingBubble.style.display = "flex";
      thinkingBubble.classList.remove("show");
    }
    if (claudeBubble) claudeBubble.classList.remove("show");
    if (pt1) pt1.classList.remove("show");
    if (pt2) pt2.classList.remove("show");
    if (pt3) pt3.classList.remove("show");

    addAnimTimeout(() => {
      if (userBubble) userBubble.classList.add("show");
    }, 200);

    addAnimTimeout(() => {
      if (thinkingBubble) thinkingBubble.classList.add("show");
    }, 600);

    addAnimTimeout(() => {
      if (thinkingBubble) {
        thinkingBubble.classList.remove("show");
        thinkingBubble.style.display = "none";
      }
      if (claudeBubble) claudeBubble.classList.add("show");
    }, 1800);

    addAnimTimeout(() => {
      if (pt1) pt1.classList.add("show");
    }, 2050);

    addAnimTimeout(() => {
      if (pt2) pt2.classList.add("show");
    }, 2350);

    addAnimTimeout(() => {
      if (pt3) pt3.classList.add("show");
    }, 2650);
  }
}

// Auto-Play Tour Controller
let isTourActive = false;
let isTourPaused = false;
let tourStepTimer = null;
let tourProgressInterval = null;
let tourStartTime = 0;
let tourElapsed = 0;
const STEP_TOUR_DURATION = 4200; // ms per langkah

function stopAutoPlayTour(resetUI = true) {
  isTourActive = false;
  isTourPaused = false;
  if (tourStepTimer) clearTimeout(tourStepTimer);
  if (tourProgressInterval) clearInterval(tourProgressInterval);
  tourStepTimer = null;
  tourProgressInterval = null;
  tourElapsed = 0;

  const progressFill = document.getElementById("simTourProgressFill");
  if (progressFill) progressFill.style.width = "0%";

  if (resetUI) {
    const playBtn = document.getElementById("btnAutoPlayTour");
    const tourText = document.getElementById("tourBtnText");
    if (playBtn) {
      playBtn.classList.remove("active", "paused");
      const icon = playBtn.querySelector(".tour-icon");
      if (icon) icon.textContent = "▶";
    }
    if (tourText) tourText.textContent = "Putar Animasi Demo";
  }
}

function startAutoPlayTour(fromStep = 1) {
  isTourActive = true;
  isTourPaused = false;
  tourElapsed = 0;

  const playBtn = document.getElementById("btnAutoPlayTour");
  const tourText = document.getElementById("tourBtnText");
  if (playBtn) {
    playBtn.classList.add("active");
    playBtn.classList.remove("paused");
    const icon = playBtn.querySelector(".tour-icon");
    if (icon) icon.textContent = "⏸";
  }
  if (tourText) tourText.textContent = "Jeda Demo";

  renderGuideStep(fromStep);
  runTourStep(fromStep);
}

function runTourStep(stepNum) {
  if (!isTourActive || isTourPaused) return;

  if (tourStepTimer) clearTimeout(tourStepTimer);
  if (tourProgressInterval) clearInterval(tourProgressInterval);

  tourStartTime = Date.now() - tourElapsed;
  const progressFill = document.getElementById("simTourProgressFill");

  tourProgressInterval = setInterval(() => {
    if (!isTourActive || isTourPaused) return;
    const elapsed = Date.now() - tourStartTime;
    const pct = Math.min(100, (elapsed / STEP_TOUR_DURATION) * 100);
    if (progressFill) progressFill.style.width = `${pct}%`;
  }, 40);

  const remaining = Math.max(100, STEP_TOUR_DURATION - tourElapsed);

  tourStepTimer = setTimeout(() => {
    clearInterval(tourProgressInterval);
    tourElapsed = 0;
    if (progressFill) progressFill.style.width = "0%";

    if (stepNum < 5) {
      const next = stepNum + 1;
      renderGuideStep(next);
      runTourStep(next);
    } else {
      isTourActive = false;
      const playBtn = document.getElementById("btnAutoPlayTour");
      const tourText = document.getElementById("tourBtnText");
      if (playBtn) {
        playBtn.classList.remove("active", "paused");
        const icon = playBtn.querySelector(".tour-icon");
        if (icon) icon.textContent = "↻";
      }
      if (tourText) tourText.textContent = "Putar Ulang Demo";
    }
  }, remaining);
}

function pauseAutoPlayTour() {
  if (!isTourActive || isTourPaused) return;
  isTourPaused = true;
  tourElapsed = Date.now() - tourStartTime;
  if (tourStepTimer) clearTimeout(tourStepTimer);
  if (tourProgressInterval) clearInterval(tourProgressInterval);

  const playBtn = document.getElementById("btnAutoPlayTour");
  const tourText = document.getElementById("tourBtnText");
  if (playBtn) {
    playBtn.classList.remove("active");
    playBtn.classList.add("paused");
    const icon = playBtn.querySelector(".tour-icon");
    if (icon) icon.textContent = "▶";
  }
  if (tourText) tourText.textContent = "Lanjutkan Demo";
}

function resumeAutoPlayTour() {
  if (!isTourActive || !isTourPaused) return;
  isTourPaused = false;
  const playBtn = document.getElementById("btnAutoPlayTour");
  const tourText = document.getElementById("tourBtnText");
  if (playBtn) {
    playBtn.classList.add("active");
    playBtn.classList.remove("paused");
    const icon = playBtn.querySelector(".tour-icon");
    if (icon) icon.textContent = "⏸";
  }
  if (tourText) tourText.textContent = "Jeda Demo";

  runTourStep(currentStep);
}

function toggleAutoPlayTour() {
  if (!isTourActive) {
    const startStep = currentStep === 5 ? 1 : currentStep;
    startAutoPlayTour(startStep);
  } else if (isTourPaused) {
    resumeAutoPlayTour();
  } else {
    pauseAutoPlayTour();
  }
}

function renderGuideStep(stepNum) {
  const step = CLAUDE_GUIDE_STEPS[stepNum];
  if (!step) return;

  currentStep = stepNum;

  // Update navigasi tombol
  const navBtns = document.querySelectorAll(".sim-nav-btn");
  navBtns.forEach((btn, idx) => {
    if (idx + 1 === stepNum) {
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
    } else {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
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
  if (stepCounterEl) stepCounterEl.textContent = `Langkah ${stepNum} dari 5`;
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
    } else if (step.actionType === "download_separate") {
      actionAreaEl.innerHTML = `
        <div class="quick-chips-wrap">
          <span class="chips-label">Unduh 5 berkas acuan terpisah (.md):</span>
          <div class="quick-chips-grid">
            <a href="Pedoman-Penulisan-Karya-Ilmiah-2017.md" download class="quick-chip">1. Buku Pedoman UM (.md)</a>
            <a href="rubrik-audit-um2017.md" download class="quick-chip">2. Rubrik 8 Dimensi (.md)</a>
            <a href="kamus-tata-bahasa-ilmiah.md" download class="quick-chip">3. Kamus Kata Baku (.md)</a>
            <a href="skala-penilaian-sidang-um.md" download class="quick-chip">4. Skala Sidang (.md)</a>
            <a href="panduan-artikel-jurnal-um.md" download class="quick-chip">5. Pedoman Artikel (.md)</a>
          </div>
        </div>
      `;
    } else if (step.actionType === "draft_tips") {
      actionAreaEl.innerHTML = `
        <div class="quick-chips-wrap">
          <span class="chips-label">Pilihan Cepat Penyiapan Draf:</span>
          <div class="quick-chips-grid">
            <button class="quick-chip" id="chipCopyFilename" data-text="Skripsi_S1_UM_Bab1_Pendahuluan.docx">📋 Salin Format Nama File</button>
            <button class="quick-chip" id="chipCopyBabPrompt" data-text="/audit Bab I: Mohon telaah keselarasan latar belakang masalah, kesenjangan empiris, dan proporsi 80% rujukan jurnal.">💬 Salin Perintah Telaah Bab I</button>
          </div>
        </div>
      `;
      const copyChips = actionAreaEl.querySelectorAll(".quick-chip");
      copyChips.forEach(chip => {
        chip.addEventListener("click", () => {
          const txt = chip.getAttribute("data-text");
          copyText(txt, "Teks berhasil disalin ke clipboard!");
        });
      });
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
  if (nextBtn) nextBtn.disabled = (stepNum === 5);

  // Jalankan animasi interaktif langkah ini
  playStepAnimation(stepNum);
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

/**
 * -------------------------------------------------------------------------
 * SISTEM ANIMASI MODERN (Sleek Academic Motion System)
 * -------------------------------------------------------------------------
 */

// 1. Reading Progress Bar Controller
function initReadingProgressBar() {
  const progressBar = document.getElementById("readingProgressFill");
  if (!progressBar) return;

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight > 0) {
          const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
          progressBar.style.width = progress + "%";
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// 2. Scroll Reveal & Stagger Grid Controller (IntersectionObserver)
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll, .stagger-grid");
  if (!revealElements.length) return;

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.12
  });

  revealElements.forEach(el => observer.observe(el));
}

// 3. Count-Up Numbers Controller
function initCountUp() {
  const countElements = document.querySelectorAll(".count-num, #heroScoreNum");
  if (!countElements.length) return;

  function animateCount(el) {
    const target = parseInt(el.getAttribute("data-count"), 10);
    if (isNaN(target)) return;
    const isComma = el.getAttribute("data-format") === "comma";
    const duration = 1400; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);

      if (isComma) {
        el.textContent = current.toLocaleString("id-ID");
      } else {
        el.textContent = current;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (isComma) {
          el.textContent = target.toLocaleString("id-ID");
        } else {
          el.textContent = target;
        }
      }
    }

    requestAnimationFrame(update);
  }

  if (!("IntersectionObserver" in window)) {
    countElements.forEach(el => animateCount(el));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  countElements.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi Sistem Animasi Modern
  initReadingProgressBar();
  initScrollReveal();
  initCountUp();

  // Inisialisasi Case Study default
  renderCaseStudy("bab1");

  // Inisialisasi Visual Simulator Langkah 1
  renderGuideStep(1);

  // Tab perbandingan naskah
  const tabBtns = document.querySelectorAll(".viewer-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const target = btn.getAttribute("data-target");
      renderCaseStudy(target);
    });
  });

  // Navigasi Simulator Langkah (Pills)
  const simNavBtns = document.querySelectorAll(".sim-nav-btn");
  simNavBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      stopAutoPlayTour(true);
      const step = parseInt(btn.getAttribute("data-step"), 10);
      renderGuideStep(step);
    });
  });

  // Tombol Prev/Next Simulator
  const btnSimPrev = document.getElementById("btnSimPrev");
  if (btnSimPrev) {
    btnSimPrev.addEventListener("click", () => {
      stopAutoPlayTour(true);
      if (currentStep > 1) renderGuideStep(currentStep - 1);
    });
  }

  const btnSimNext = document.getElementById("btnSimNext");
  if (btnSimNext) {
    btnSimNext.addEventListener("click", () => {
      stopAutoPlayTour(true);
      if (currentStep < 5) renderGuideStep(currentStep + 1);
    });
  }

  // Tombol Putar Animasi Tur Otomatis
  const btnAutoPlayTour = document.getElementById("btnAutoPlayTour");
  if (btnAutoPlayTour) {
    btnAutoPlayTour.addEventListener("click", () => {
      toggleAutoPlayTour();
    });
  }

  // Tombol Ulangi Animasi (Replay)
  const btnReplayAnim = document.getElementById("btnReplayAnim");
  if (btnReplayAnim) {
    btnReplayAnim.addEventListener("click", () => {
      playStepAnimation(currentStep);
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
      const isOpen = row.classList.toggle("open");
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });
});
