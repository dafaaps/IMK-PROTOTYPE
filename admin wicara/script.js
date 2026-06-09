// ========== INSTITUTION DATA ==========
const institutions = [
  {
    id: 'kpk',
    name: 'KPK',
    fullName: 'Komisi Pemberantasan Korupsi',
    icon: '⚖️',
    bannerGradient: 'linear-gradient(135deg, #E91E63, #9C27B0)',
    category: 'Anti-Korupsi',
    desc: 'Lembaga negara independen yang dibentuk untuk mengatasi, menanggulangi, dan memberantas korupsi di Indonesia. KPK berwenang melakukan penyelidikan, penyidikan, dan penuntutan tindak pidana korupsi.',
    address: 'Jl. Kuningan Persada Kav. 4, Jakarta Selatan 12950',
    phone: '(021) 2557-8300',
    website: 'www.kpk.go.id',
    email: 'informasi@kpk.go.id',
    tags: ['Korupsi', 'Suap', 'Gratifikasi', 'TPPU'],
    stats: { reports: 2847, resolved: 2103, officers: 1650 },
    head: 'Nawawi Pomolango',
    headTitle: 'Ketua KPK',
    established: '2002',
    uu: 'UU No. 30 Tahun 2002'
  },
  {
    id: 'ombudsman',
    name: 'Ombudsman RI',
    fullName: 'Ombudsman Republik Indonesia',
    icon: '🏛️',
    bannerGradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    category: 'Pelayanan Publik',
    desc: 'Lembaga negara yang mempunyai kewenangan mengawasi penyelenggaraan pelayanan publik, termasuk yang diselenggarakan oleh BUMN, BUMD, dan badan swasta atau perseorangan yang diberi tugas menyelenggarakan pelayanan publik.',
    address: 'Jl. HR. Rasuna Said Kav. C-19, Jakarta Selatan 12920',
    phone: '(021) 2251-6158',
    website: 'www.ombudsman.go.id',
    email: 'pengaduan@ombudsman.go.id',
    tags: ['Maladministrasi', 'Pelayanan Publik', 'Pungli'],
    stats: { reports: 3421, resolved: 2890, officers: 850 },
    head: 'Mokhammad Najih',
    headTitle: 'Ketua Ombudsman RI',
    established: '2000',
    uu: 'UU No. 37 Tahun 2008'
  },
  {
    id: 'kejaksaan',
    name: 'Kejaksaan Agung',
    fullName: 'Kejaksaan Agung Republik Indonesia',
    icon: '🔱',
    bannerGradient: 'linear-gradient(135deg, #eab308, #f97316)',
    category: 'Penegakan Hukum',
    desc: 'Lembaga pemerintah yang melaksanakan kekuasaan negara di bidang penuntutan serta kewenangan lain berdasarkan undang-undang. Kejaksaan berwenang menuntut perkara korupsi dan tindak pidana khusus lainnya.',
    address: 'Jl. Sultan Hasanuddin No. 1, Jakarta Selatan 12160',
    phone: '(021) 722-1269',
    website: 'www.kejaksaan.go.id',
    email: 'pengaduan@kejaksaan.go.id',
    tags: ['Penuntutan', 'Korupsi', 'Pidana Khusus'],
    stats: { reports: 5210, resolved: 4102, officers: 24500 },
    head: 'ST Burhanuddin',
    headTitle: 'Jaksa Agung RI',
    established: '1945',
    uu: 'UU No. 16 Tahun 2004'
  },
  {
    id: 'polri',
    name: 'Divisi Tipidkor Polri',
    fullName: 'Divisi Tindak Pidana Korupsi - Kepolisian RI',
    icon: '🛡️',
    bannerGradient: 'linear-gradient(135deg, #22c55e, #059669)',
    category: 'Penegakan Hukum',
    desc: 'Divisi khusus di bawah Bareskrim Polri yang menangani penyidikan tindak pidana korupsi. Bertugas melakukan penyelidikan dan penyidikan terhadap perkara korupsi yang merugikan keuangan negara.',
    address: 'Jl. Trunojoyo No. 3, Jakarta Selatan 12110',
    phone: '(021) 721-3849',
    website: 'www.polri.go.id',
    email: 'divtipidkor@polri.go.id',
    tags: ['Penyidikan', 'Korupsi', 'Kerugian Negara'],
    stats: { reports: 4150, resolved: 3200, officers: 8700 },
    head: 'Listyo Sigit Prabowo',
    headTitle: 'Kapolri',
    established: '1946',
    uu: 'UU No. 2 Tahun 2002'
  },
  {
    id: 'bpk',
    name: 'BPK RI',
    fullName: 'Badan Pemeriksa Keuangan Republik Indonesia',
    icon: '📊',
    bannerGradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
    category: 'Pengawasan Keuangan',
    desc: 'Lembaga tinggi negara yang bertugas memeriksa pengelolaan dan tanggung jawab keuangan negara. BPK memeriksa APBN, APBD, BUMN, BUMD, dan badan lain yang mengelola keuangan negara.',
    address: 'Jl. Gatot Subroto No. 31, Jakarta Pusat 10210',
    phone: '(021) 2554-9000',
    website: 'www.bpk.go.id',
    email: 'humas@bpk.go.id',
    tags: ['Audit', 'Keuangan Negara', 'APBN', 'APBD'],
    stats: { reports: 1890, resolved: 1650, officers: 6800 },
    head: 'Isma Yatun',
    headTitle: 'Ketua BPK RI',
    established: '1946',
    uu: 'UU No. 15 Tahun 2006'
  },
  {
    id: 'saberpungli',
    name: 'Saber Pungli',
    fullName: 'Satuan Tugas Sapu Bersih Pungutan Liar',
    icon: '🚨',
    bannerGradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    category: 'Anti-Pungli',
    desc: 'Satuan tugas yang dibentuk berdasarkan Perpres No. 87 Tahun 2016 untuk memberantas pungutan liar di seluruh instansi pemerintah. Bertugas melakukan operasi tangkap tangan dan pencegahan pungli.',
    address: 'Jl. Medan Merdeka Barat No. 15, Jakarta Pusat 10110',
    phone: '(021) 345-5987',
    website: 'www.saberpungli.id',
    email: 'lapor@saberpungli.id',
    tags: ['Pungli', 'OTT', 'Pelayanan Publik', 'Perizinan'],
    stats: { reports: 6230, resolved: 5100, officers: 3200 },
    head: 'Menko Polhukam',
    headTitle: 'Ketua Satgas Saber Pungli',
    established: '2016',
    uu: 'Perpres No. 87 Tahun 2016'
  },
  {
    id: 'komnasham',
    name: 'Komnas HAM',
    fullName: 'Komisi Nasional Hak Asasi Manusia',
    icon: '✊',
    bannerGradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    category: 'Hak Asasi Manusia',
    desc: 'Lembaga mandiri yang berkedudukan setingkat dengan lembaga negara lainnya, berfungsi melaksanakan pengkajian, penelitian, penyuluhan, pemantauan, dan mediasi hak asasi manusia di Indonesia.',
    address: 'Jl. Latuharhary No. 4B, Jakarta Pusat 10310',
    phone: '(021) 392-5230',
    website: 'www.komnasham.go.id',
    email: 'pengaduan@komnasham.go.id',
    tags: ['HAM', 'Pelanggaran HAM', 'Mediasi', 'Pemantauan'],
    stats: { reports: 2100, resolved: 1700, officers: 520 },
    head: 'Atnike Nova Sigiro',
    headTitle: 'Ketua Komnas HAM',
    established: '1993',
    uu: 'UU No. 39 Tahun 1999'
  },
  {
    id: 'bpkp',
    name: 'BPKP',
    fullName: 'Badan Pengawasan Keuangan dan Pembangunan',
    icon: '🔍',
    bannerGradient: 'linear-gradient(135deg, #f97316, #ea580c)',
    category: 'Pengawasan Keuangan',
    desc: 'Lembaga pemerintah nonkementerian yang melaksanakan tugas pemerintahan di bidang pengawasan keuangan negara/daerah dan pembangunan nasional. BPKP melakukan audit investigatif atas kasus korupsi.',
    address: 'Jl. Pramuka No. 33, Jakarta Timur 13120',
    phone: '(021) 859-10031',
    website: 'www.bpkp.go.id',
    email: 'humas@bpkp.go.id',
    tags: ['Audit Investigatif', 'Keuangan Daerah', 'Pembangunan'],
    stats: { reports: 1450, resolved: 1280, officers: 7200 },
    head: 'Muhammad Yusuf Ateh',
    headTitle: 'Kepala BPKP',
    established: '1983',
    uu: 'Perpres No. 192 Tahun 2014'
  },
  {
    id: 'inspektorat',
    name: 'Itjen Kemendagri',
    fullName: 'Inspektorat Jenderal Kementerian Dalam Negeri',
    icon: '🏢',
    bannerGradient: 'linear-gradient(135deg, #64748b, #475569)',
    category: 'Pengawasan Internal',
    desc: 'Unit pengawasan internal Kemendagri yang bertugas melakukan pengawasan terhadap pelaksanaan tugas di lingkungan Kementerian Dalam Negeri dan pemerintah daerah, termasuk pengawasan dana desa dan APBD.',
    address: 'Jl. Medan Merdeka Utara No. 7, Jakarta Pusat 10110',
    phone: '(021) 345-0038',
    website: 'www.kemendagri.go.id',
    email: 'itjen@kemendagri.go.id',
    tags: ['Pengawasan Daerah', 'Dana Desa', 'APBD', 'ASN'],
    stats: { reports: 980, resolved: 820, officers: 450 },
    head: 'Tomsi Tohap Parlindungan',
    headTitle: 'Inspektur Jenderal',
    established: '1945',
    uu: 'Perpres No. 11 Tahun 2015'
  }
];

// ========== USERS DATA ==========
const users = [
  { username: 'superadmin', password: '123', name: 'Super Admin', role: 'Administrator', avatar: 'SA', institution: 'all', isSuper: true },
  { username: 'kpk', password: '123', name: 'Admin KPK', role: 'Operator Instansi', avatar: 'KP', institution: 'KPK', isSuper: false },
  { username: 'ombudsman', password: '123', name: 'Admin Ombudsman', role: 'Operator Instansi', avatar: 'OM', institution: 'Ombudsman RI', isSuper: false },
  { username: 'kejaksaan', password: '123', name: 'Admin Kejaksaan', role: 'Operator Instansi', avatar: 'KJ', institution: 'Kejaksaan Agung', isSuper: false },
  { username: 'polri', password: '123', name: 'Admin Tipidkor', role: 'Operator Instansi', avatar: 'PL', institution: 'Divisi Tipidkor Polri', isSuper: false },
  { username: 'bpk', password: '123', name: 'Admin BPK', role: 'Operator Instansi', avatar: 'BP', institution: 'BPK RI', isSuper: false },
  { username: 'saber', password: '123', name: 'Admin Saber Pungli', role: 'Operator Instansi', avatar: 'SP', institution: 'Saber Pungli', isSuper: false },
  { username: 'komnasham', password: '123', name: 'Admin Komnas HAM', role: 'Operator Instansi', avatar: 'KH', institution: 'Komnas HAM', isSuper: false },
  { username: 'bpkp', password: '123', name: 'Admin BPKP', role: 'Operator Instansi', avatar: 'BK', institution: 'BPKP', isSuper: false },
  { username: 'itjen', password: '123', name: 'Admin Itjen', role: 'Operator Instansi', avatar: 'IT', institution: 'Itjen Kemendagri', isSuper: false }
];
let currentUser = null;

// ========== REPORTS DATA ==========
const reportsData = [
  { id:'RPT-2026-001', title:'Korupsi Dana Desa Cimahi', institution:'KPK', status:'urgent', date:'09 Jun 2026', reporter:'Anonim #4821', location:'Kab. Bandung Barat' },
  { id:'RPT-2026-002', title:'Pungli Pembuatan KTP', institution:'Saber Pungli', status:'process', date:'08 Jun 2026', reporter:'Anonim #3392', location:'Jakarta Timur' },
  { id:'RPT-2026-003', title:'Penyalahgunaan APBD 2025', institution:'BPK RI', status:'new', date:'08 Jun 2026', reporter:'Anonim #7710', location:'Surabaya' },
  { id:'RPT-2026-004', title:'Pungli Pelabuhan Bakauheni', institution:'Saber Pungli', status:'urgent', date:'07 Jun 2026', reporter:'Anonim #1256', location:'Lampung' },
  { id:'RPT-2026-005', title:'Gratifikasi Pejabat Pemda', institution:'KPK', status:'process', date:'07 Jun 2026', reporter:'Anonim #8843', location:'Makassar' },
  { id:'RPT-2026-006', title:'Kekerasan Aparat terhadap Warga', institution:'Komnas HAM', status:'urgent', date:'06 Jun 2026', reporter:'Anonim #2019', location:'Papua' },
  { id:'RPT-2026-007', title:'Markup Proyek Infrastruktur', institution:'Kejaksaan Agung', status:'process', date:'06 Jun 2026', reporter:'Anonim #5567', location:'Medan' },
  { id:'RPT-2026-008', title:'Maladministrasi BPJS Kesehatan', institution:'Ombudsman RI', status:'done', date:'05 Jun 2026', reporter:'Anonim #9901', location:'Semarang' },
  { id:'RPT-2026-009', title:'Korupsi Bansos COVID-19', institution:'Divisi Tipidkor Polri', status:'done', date:'04 Jun 2026', reporter:'Anonim #6634', location:'Bandung' },
  { id:'RPT-2026-010', title:'Pungli Perizinan Usaha', institution:'Saber Pungli', status:'new', date:'04 Jun 2026', reporter:'Anonim #4477', location:'Yogyakarta' },
  { id:'RPT-2026-011', title:'Penyimpangan Dana BOS', institution:'BPKP', status:'urgent', date:'03 Jun 2026', reporter:'Anonim #3310', location:'Palembang' },
  { id:'RPT-2026-012', title:'Korupsi Proyek Jalan Daerah', institution:'Itjen Kemendagri', status:'process', date:'03 Jun 2026', reporter:'Anonim #5521', location:'Kalimantan Barat' },
  { id:'RPT-2026-013', title:'Diskriminasi Hak Tanah Adat', institution:'Komnas HAM', status:'new', date:'02 Jun 2026', reporter:'Anonim #1187', location:'Sulawesi Tengah' },
  { id:'RPT-2026-014', title:'Mark-up Pengadaan Alkes RS', institution:'BPK RI', status:'urgent', date:'02 Jun 2026', reporter:'Anonim #7789', location:'Manado' },
  { id:'RPT-2026-015', title:'Suap Izin Tambang Nikel', institution:'KPK', status:'new', date:'01 Jun 2026', reporter:'Anonim #6012', location:'Maluku Utara' },
  { id:'RPT-2026-016', title:'Pelayanan Lambat Disdukcapil', institution:'Ombudsman RI', status:'process', date:'01 Jun 2026', reporter:'Anonim #8230', location:'Bekasi' },
  { id:'RPT-2026-017', title:'Penyelewengan Dana Desa', institution:'Itjen Kemendagri', status:'new', date:'31 Mei 2026', reporter:'Anonim #4490', location:'NTT' },
  { id:'RPT-2026-018', title:'Korupsi Proyek Irigasi', institution:'Kejaksaan Agung', status:'urgent', date:'31 Mei 2026', reporter:'Anonim #2678', location:'Jawa Tengah' },
  { id:'RPT-2026-019', title:'Audit Fiktif BUMD', institution:'BPKP', status:'done', date:'30 Mei 2026', reporter:'Anonim #3311', location:'Riau' },
  { id:'RPT-2026-020', title:'Pemerasan oleh Oknum Polisi', institution:'Divisi Tipidkor Polri', status:'process', date:'30 Mei 2026', reporter:'Anonim #9920', location:'Bali' },
];

// ========== AUTH ==========
function populateHintGrid() {
  const grid = document.getElementById('hint-grid');
  if(!grid) return;
  grid.innerHTML = users.map(u => `
    <div class="hint-item" onclick="document.getElementById('login-username').value='${u.username}'; document.getElementById('login-password').value='${u.password}';">
      <div class="hint-name">${u.name}</div>
      <div class="hint-user">${u.username} / ${u.password}</div>
    </div>
  `).join('');
}

function doLogin() {
  const userStr = document.getElementById('login-username').value;
  const passStr = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');
  
  const user = users.find(u => u.username === userStr && u.password === passStr);
  if (user) {
    currentUser = user;
    errEl.classList.remove('show');
    document.getElementById('login-overlay').classList.add('hidden');
    
    // Update UI
    document.getElementById('sidebar-avatar').textContent = user.avatar;
    document.getElementById('sidebar-name').textContent = user.name;
    document.getElementById('sidebar-role').textContent = user.role;
    
    const roleBadge = document.getElementById('topbar-role');
    if(roleBadge) {
      roleBadge.textContent = user.name;
      if(user.isSuper) {
        roleBadge.className = 'role-badge super';
        document.getElementById('dashboard-notice').style.display = 'none';
      } else {
        roleBadge.className = 'role-badge';
        document.getElementById('dashboard-notice').style.display = 'flex';
        document.getElementById('notice-inst-name').textContent = user.institution;
      }
    }
    
    const navInst = document.getElementById('nav-institutions');
    if(navInst) {
      navInst.style.display = user.isSuper ? 'flex' : 'none';
    }
    
    // Re-render data
    renderDashboard();
    renderReports();
    renderMessages();
    
    // Update settings page
    const sName = document.getElementById('settings-name');
    const sRole = document.getElementById('settings-role');
    const sInst = document.getElementById('settings-inst');
    if(sName) sName.textContent = user.name;
    if(sRole) sRole.textContent = user.role;
    if(sInst) sInst.textContent = user.isSuper ? 'Semua Instansi' : user.institution;
    
    showPage('dashboard');
  } else {
    errEl.classList.add('show');
  }
}

function doLogout() {
  currentUser = null;
  document.getElementById('login-overlay').classList.remove('hidden');
  document.getElementById('login-username').value = '';
  document.getElementById('login-password').value = '';
}

// ========== PAGE / NAV ==========
let currentPage = 'dashboard';

function showPage(pageId) {
  // Prevent regular admins from accessing institutions page
  if (pageId === 'institutions' && currentUser && !currentUser.isSuper) {
    pageId = 'dashboard';
  }

  currentPage = pageId;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + pageId).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
    if (n.dataset.page === pageId) n.classList.add('active');
  });
  // Update topbar title
  const titles = { dashboard:'Dashboard', institutions:'Profil Instansi', reports:'Laporan Masuk', messages:'Kotak Pesan', settings:'Pengaturan' };
  document.getElementById('topbar-title').textContent = titles[pageId] || 'Dashboard';
  closeSidebar();
}

// ========== SIDEBAR MOBILE ==========
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('mobile-overlay').classList.toggle('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('mobile-overlay').classList.remove('show');
}

// ========== RENDER DASHBOARD ==========
function renderDashboard() {
  const filteredReports = currentUser && !currentUser.isSuper ? reportsData.filter(r => r.institution === currentUser.institution) : reportsData;
  
  const total = filteredReports.length;
  const done = filteredReports.filter(r => r.status === 'done').length;
  const process = filteredReports.filter(r => r.status === 'process').length;
  
  const statsGrid = document.getElementById('dashboard-stats');
  if(statsGrid) {
    statsGrid.innerHTML = `
      <div class="card stat-card">
        <div class="stat-icon" style="background:rgba(233,30,99,.15)">📊</div>
        <div class="stat-value">${total}</div>
        <div class="stat-label">Total Laporan</div>
      </div>
      <div class="card stat-card">
        <div class="stat-icon" style="background:rgba(34,197,94,.15)">✅</div>
        <div class="stat-value">${done}</div>
        <div class="stat-label">Laporan Selesai</div>
      </div>
      <div class="card stat-card">
        <div class="stat-icon" style="background:rgba(234,179,8,.15)">⏳</div>
        <div class="stat-value">${process}</div>
        <div class="stat-label">Sedang Diproses</div>
      </div>
      <div class="card stat-card">
        <div class="stat-icon" style="background:rgba(59,130,246,.15)">🏛️</div>
        <div class="stat-value">${institutions.length}</div>
        <div class="stat-label">Instansi Terdaftar</div>
      </div>
    `;
  }

  // Update recent reports table in dashboard
  const tbody = document.getElementById('dashboard-reports-tbody');
  if(tbody) {
    const statusMap = {
      urgent: { label:'Urgent', class:'status-urgent' },
      process: { label:'Diproses', class:'status-process' },
      done: { label:'Selesai', class:'status-done' },
      new: { label:'Baru', class:'status-new' }
    };
    
    tbody.innerHTML = filteredReports.slice(0, 5).map(r => `
      <tr style="cursor:pointer" onclick="showReportDetail('${r.id}')">
        <td style="font-weight:600;color:var(--primary);font-size:12px">${r.id}</td>
        <td><div style="font-weight:600">${r.title}</div><div style="font-size:11px;color:var(--text-muted)">${r.location}</div></td>
        <td>${r.institution}</td>
        <td><span class="status-badge ${statusMap[r.status].class}">${statusMap[r.status].label}</span></td>
        <td style="color:var(--text-muted)">${r.date}</td>
      </tr>
    `).join('');
    
    if(filteredReports.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:20px;">Tidak ada laporan untuk instansi ini.</td></tr>`;
    }
  }
}

// ========== RENDER INSTITUTIONS ==========
function renderInstitutions(filter = 'all') {
  const grid = document.getElementById('institutions-grid');
  if (!grid) return;

  let filtered = filter === 'all' ? [...institutions] : institutions.filter(i => i.category === filter);
  
  // Non-super users can only see their own institution
  if (currentUser && !currentUser.isSuper) {
    filtered = filtered.filter(i => i.name === currentUser.institution);
  }
  
  grid.innerHTML = filtered.map(inst => `
    <div class="card profile-card" onclick="showInstitutionDetail('${inst.id}')">
      <div class="profile-banner" style="background:${inst.bannerGradient}">
        <div class="profile-avatar" style="background:${inst.bannerGradient}">${inst.icon}</div>
      </div>
      <div style="margin-top:8px">
        <div class="profile-name">${inst.name}</div>
        <div class="profile-title">${inst.fullName}</div>
        <div class="profile-desc">${inst.desc.substring(0, 120)}...</div>
        <div class="profile-tags">
          ${inst.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="profile-stats">
          <div class="pstat"><div class="pstat-val" style="color:var(--primary)">${inst.stats.reports.toLocaleString()}</div><div class="pstat-label">Laporan</div></div>
          <div class="pstat"><div class="pstat-val" style="color:var(--green)">${inst.stats.resolved.toLocaleString()}</div><div class="pstat-label">Selesai</div></div>
          <div class="pstat"><div class="pstat-val" style="color:var(--blue)">${inst.stats.officers.toLocaleString()}</div><div class="pstat-label">Personel</div></div>
        </div>
      </div>
    </div>
  `).join('');
}

// ========== INSTITUTION DETAIL MODAL ==========
function showInstitutionDetail(id) {
  const inst = institutions.find(i => i.id === id);
  if (!inst) return;

  const modal = document.getElementById('detail-modal');
  document.getElementById('modal-content').innerHTML = `
    <div style="position:relative">
      <div style="height:100px;border-radius:14px 14px 0 0;margin:-24px -24px 0 -24px;background:${inst.bannerGradient};display:flex;align-items:flex-end;padding:16px 20px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:50px;height:50px;border-radius:12px;background:rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;font-size:24px;border:2px solid rgba(255,255,255,.3)">${inst.icon}</div>
          <div><div style="font-size:18px;font-weight:700;color:#fff">${inst.name}</div><div style="font-size:11px;color:rgba(255,255,255,.8)">${inst.fullName}</div></div>
        </div>
      </div>
      <button onclick="closeModal()" style="position:absolute;top:-8px;right:-8px;width:32px;height:32px;border-radius:8px;background:rgba(0,0,0,.4);border:none;color:#fff;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center">✕</button>
    </div>
    <div style="margin-top:20px">
      <p style="font-size:13px;color:var(--text-secondary);line-height:1.7;margin-bottom:16px">${inst.desc}</p>
      
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px">
        <div class="card" style="padding:12px;text-align:center;border-color:var(--border)">
          <div style="font-size:20px;font-weight:800;color:var(--primary)">${inst.stats.reports.toLocaleString()}</div>
          <div style="font-size:10px;color:var(--text-muted)">Total Laporan</div>
        </div>
        <div class="card" style="padding:12px;text-align:center;border-color:var(--border)">
          <div style="font-size:20px;font-weight:800;color:var(--green)">${inst.stats.resolved.toLocaleString()}</div>
          <div style="font-size:10px;color:var(--text-muted)">Terselesaikan</div>
        </div>
        <div class="card" style="padding:12px;text-align:center;border-color:var(--border)">
          <div style="font-size:20px;font-weight:800;color:var(--blue)">${inst.stats.officers.toLocaleString()}</div>
          <div style="font-size:10px;color:var(--text-muted)">Personel</div>
        </div>
      </div>

      <div class="card" style="padding:14px;margin-bottom:12px">
        <div style="font-size:12px;font-weight:600;margin-bottom:10px;color:var(--text-muted)">INFORMASI INSTANSI</div>
        <div style="display:flex;flex-direction:column;gap:10px">
          <div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--text-muted)">Pimpinan</span><span style="font-weight:600">${inst.head}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--text-muted)">Jabatan</span><span style="font-weight:600">${inst.headTitle}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--text-muted)">Didirikan</span><span style="font-weight:600">${inst.established}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--text-muted)">Dasar Hukum</span><span style="font-weight:600">${inst.uu}</span></div>
        </div>
      </div>

      <div class="card" style="padding:14px;margin-bottom:12px">
        <div style="font-size:12px;font-weight:600;margin-bottom:10px;color:var(--text-muted)">KONTAK</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;align-items:center;gap:8px;font-size:12px"><span>📍</span><span style="color:var(--text-secondary)">${inst.address}</span></div>
          <div style="display:flex;align-items:center;gap:8px;font-size:12px"><span>📞</span><span style="color:var(--text-secondary)">${inst.phone}</span></div>
          <div style="display:flex;align-items:center;gap:8px;font-size:12px"><span>🌐</span><span style="color:var(--primary)">${inst.website}</span></div>
          <div style="display:flex;align-items:center;gap:8px;font-size:12px"><span>📧</span><span style="color:var(--primary)">${inst.email}</span></div>
        </div>
      </div>

      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${inst.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `;
  modal.classList.add('show');
}

function closeModal() {
  document.getElementById('detail-modal').classList.remove('show');
}

// ========== RENDER REPORTS TABLE ==========
function renderReports(filter = 'all') {
  const tbody = document.getElementById('reports-tbody');
  if (!tbody) return;

  let baseReports = reportsData;
  if (currentUser && !currentUser.isSuper) {
    baseReports = reportsData.filter(r => r.institution === currentUser.institution);
  }

  const filtered = filter === 'all' ? baseReports : baseReports.filter(r => r.status === filter);
  const statusMap = {
    urgent: { label:'Urgent', class:'status-urgent' },
    process: { label:'Diproses', class:'status-process' },
    done: { label:'Selesai', class:'status-done' },
    new: { label:'Baru', class:'status-new' }
  };

  tbody.innerHTML = filtered.map(r => `
    <tr style="cursor:pointer" onclick="showReportDetail('${r.id}')">
      <td style="font-weight:600;color:var(--primary);font-size:12px">${r.id}</td>
      <td><div style="font-weight:600">${r.title}</div><div style="font-size:11px;color:var(--text-muted)">${r.location}</div></td>
      <td>${r.institution}</td>
      <td><span class="status-badge ${statusMap[r.status].class}">${statusMap[r.status].label}</span></td>
      <td style="color:var(--text-muted)">${r.date}</td>
      <td style="color:var(--text-muted)">${r.reporter}</td>
    </tr>
  `).join('');
  
  if(filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:20px;">Tidak ada laporan ditemukan.</td></tr>`;
  }
}

// ========== FILTER BUTTONS ==========
function filterInstitutions(cat, el) {
  document.querySelectorAll('.inst-filter').forEach(b => {
    b.style.background = 'var(--surface)';
    b.style.color = 'var(--text-secondary)';
    b.style.borderColor = 'var(--border)';
  });
  el.style.background = 'var(--primary)';
  el.style.color = '#fff';
  el.style.borderColor = 'var(--primary)';
  renderInstitutions(cat);
}

function filterReports(status, el) {
  document.querySelectorAll('.report-filter').forEach(b => {
    b.style.background = 'var(--surface)';
    b.style.color = 'var(--text-secondary)';
    b.style.borderColor = 'var(--border)';
  });
  el.style.background = 'var(--primary)';
  el.style.color = '#fff';
  el.style.borderColor = 'var(--primary)';
  renderReports(status);
}

// ========== REPORT DETAIL & STATUS UPDATE ==========
function showReportDetail(reportId) {
  const r = reportsData.find(rep => rep.id === reportId);
  if (!r) return;

  const statusMap = {
    urgent: { label:'Urgent', class:'status-urgent', color:'var(--red)' },
    process: { label:'Diproses', class:'status-process', color:'var(--yellow)' },
    done: { label:'Selesai', class:'status-done', color:'var(--green)' },
    new: { label:'Baru', class:'status-new', color:'var(--blue)' }
  };
  const s = statusMap[r.status];

  const modal = document.getElementById('detail-modal');
  document.getElementById('modal-content').innerHTML = `
    <div style="position:relative">
      <div style="height:80px;border-radius:14px 14px 0 0;margin:-24px -24px 0 -24px;background:linear-gradient(135deg,${s.color},var(--card));display:flex;align-items:flex-end;padding:16px 20px">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="font-size:14px;font-weight:700;color:#fff">${r.id}</div>
          <span class="status-badge ${s.class}">${s.label}</span>
        </div>
      </div>
      <button onclick="closeModal()" style="position:absolute;top:-8px;right:-8px;width:32px;height:32px;border-radius:8px;background:rgba(0,0,0,.4);border:none;color:#fff;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center">✕</button>
    </div>
    <div style="margin-top:18px">
      <h3 style="font-size:16px;font-weight:700;margin-bottom:4px">${r.title}</h3>
      <p style="font-size:12px;color:var(--text-muted);margin-bottom:16px">📍 ${r.location} · 📅 ${r.date}</p>

      <div class="card" style="padding:14px;margin-bottom:12px">
        <div style="font-size:12px;font-weight:600;margin-bottom:10px;color:var(--text-muted)">DETAIL LAPORAN</div>
        <div style="display:flex;flex-direction:column;gap:10px">
          <div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--text-muted)">Pelapor</span><span style="font-weight:600">${r.reporter}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--text-muted)">Instansi</span><span style="font-weight:600">${r.institution}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--text-muted)">Tanggal</span><span style="font-weight:600">${r.date}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--text-muted)">Status</span><span class="status-badge ${s.class}">${s.label}</span></div>
        </div>
      </div>

      <div class="card" style="padding:14px">
        <div style="font-size:12px;font-weight:600;margin-bottom:10px;color:var(--text-muted)">UPDATE STATUS</div>
        <div class="status-btn-grid">
          <button class="status-update-btn" style="--btn-color:var(--blue)" onclick="updateReportStatus('${r.id}','new')">🔵 Baru</button>
          <button class="status-update-btn" style="--btn-color:var(--yellow)" onclick="updateReportStatus('${r.id}','process')">🟡 Diproses</button>
          <button class="status-update-btn" style="--btn-color:var(--red)" onclick="updateReportStatus('${r.id}','urgent')">🔴 Urgent</button>
          <button class="status-update-btn" style="--btn-color:var(--green)" onclick="updateReportStatus('${r.id}','done')">🟢 Selesai</button>
        </div>
      </div>
    </div>
  `;
  modal.classList.add('show');
}

function updateReportStatus(reportId, newStatus) {
  const r = reportsData.find(rep => rep.id === reportId);
  if (!r) return;
  r.status = newStatus;
  
  // Re-render everything
  renderDashboard();
  renderReports();
  
  // Reopen modal with updated data
  showReportDetail(reportId);
}

// ========== MESSAGING SYSTEM ==========
let messagesData = [
  { id:'MSG-001', from:'superadmin', to:'kpk', fromName:'Super Admin', toName:'Admin KPK', subject:'Tindak Lanjut Laporan RPT-2026-001', body:'Mohon segera ditindaklanjuti laporan korupsi dana desa Cimahi. Laporan ini sudah masuk status urgent dan memerlukan penanganan segera. Koordinasikan dengan tim penyidik untuk langkah selanjutnya.', date:'09 Jun 2026, 09:15', read:false },
  { id:'MSG-002', from:'saber', to:'superadmin', fromName:'Admin Saber Pungli', toName:'Super Admin', subject:'Update OTT Pelabuhan Bakauheni', body:'Lapor, operasi tangkap tangan di Pelabuhan Bakauheni telah berhasil dilaksanakan. 3 oknum petugas berhasil diamankan. Bukti-bukti telah disita. Mohon arahan untuk langkah selanjutnya.', date:'08 Jun 2026, 14:30', read:false },
  { id:'MSG-003', from:'superadmin', to:'bpk', fromName:'Super Admin', toName:'Admin BPK', subject:'Permintaan Audit APBD Surabaya', body:'Berdasarkan laporan RPT-2026-003, mohon BPK segera melakukan audit investigatif terhadap penggunaan APBD Kota Surabaya tahun 2025. Terdapat indikasi penyimpangan yang signifikan.', date:'08 Jun 2026, 10:00', read:true },
  { id:'MSG-004', from:'komnasham', to:'superadmin', fromName:'Admin Komnas HAM', toName:'Super Admin', subject:'Laporan Kekerasan Aparat Papua', body:'Kami telah menerima dan memverifikasi laporan kekerasan aparat terhadap warga di Papua. Tim pemantau akan dikirim ke lokasi dalam 48 jam. Mohon dukungan koordinasi dengan Polri.', date:'07 Jun 2026, 16:45', read:false },
  { id:'MSG-005', from:'ombudsman', to:'superadmin', fromName:'Admin Ombudsman', toName:'Super Admin', subject:'Rekomendasi Perbaikan Layanan BPJS', body:'Berdasarkan investigasi kami, maladministrasi BPJS Kesehatan di Semarang telah dikonfirmasi. Kami akan mengeluarkan rekomendasi perbaikan dalam 7 hari kerja.', date:'06 Jun 2026, 11:20', read:true },
];

function getMyMessages(filter = 'all') {
  if (!currentUser) return [];
  const uname = currentUser.username;
  let msgs;
  if (filter === 'sent') {
    msgs = messagesData.filter(m => m.from === uname);
  } else if (filter === 'unread') {
    msgs = messagesData.filter(m => m.to === uname && !m.read);
  } else if (filter === 'read') {
    msgs = messagesData.filter(m => m.to === uname && m.read);
  } else {
    msgs = messagesData.filter(m => m.to === uname || m.from === uname);
  }
  return msgs;
}

function renderMessages(filter = 'all') {
  const list = document.getElementById('messages-list');
  if (!list || !currentUser) return;
  
  const msgs = getMyMessages(filter);
  
  if (msgs.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">📭</div><div class="empty-text">Tidak ada pesan.</div></div>`;
    return;
  }
  
  const uname = currentUser.username;
  list.innerHTML = msgs.map(m => {
    const isSent = m.from === uname;
    const isUnread = !isSent && !m.read;
    return `
      <div class="msg-card ${isUnread ? 'unread' : ''} ${isSent ? 'sent-card' : ''}" onclick="readMessage('${m.id}')">
        <div class="msg-avatar">${isSent ? m.toName.charAt(0) : m.fromName.charAt(0)}</div>
        <div class="msg-content">
          <div class="msg-from">${isSent ? 'Ke: ' + m.toName : m.fromName}</div>
          <div class="msg-subject">${m.subject}</div>
          <div class="msg-preview">${m.body}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
          <div class="msg-time">${m.date}</div>
          ${isUnread ? '<div class="msg-unread-dot"></div>' : ''}
          ${isSent ? '<span style="font-size:10px;color:var(--cyan)">Terkirim</span>' : ''}
        </div>
      </div>
    `;
  }).join('');
  
  updateMsgBadge();
}

function updateMsgBadge() {
  if (!currentUser) return;
  const unreadCount = messagesData.filter(m => m.to === currentUser.username && !m.read).length;
  const badge = document.getElementById('msg-badge');
  if (badge) {
    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? 'inline' : 'none';
  }
}

function readMessage(msgId) {
  const m = messagesData.find(msg => msg.id === msgId);
  if (!m) return;
  
  // Mark as read if it's incoming
  if (m.to === currentUser.username) m.read = true;
  
  const isSent = m.from === currentUser.username;
  const modal = document.getElementById('read-modal');
  document.getElementById('read-modal-content').innerHTML = `
    <div style="position:relative">
      <div class="read-header">
        <div class="read-subject">${m.subject}</div>
        <div class="read-meta">${isSent ? 'Ke: ' + m.toName : 'Dari: ' + m.fromName} · ${m.date}</div>
      </div>
      <button onclick="closeReadModal()" style="position:absolute;top:-8px;right:-8px;width:32px;height:32px;border-radius:8px;background:rgba(0,0,0,.4);border:none;color:#fff;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center">✕</button>
    </div>
    <div class="read-body">${m.body}</div>
    ${!isSent ? '<button class="login-btn" style="margin-top:16px" onclick="closeReadModal(); replyTo(\'' + m.from + '\',\'' + m.subject.replace(/'/g,"\\'") + '\')">↩️ Balas Pesan</button>' : ''}
  `;
  modal.classList.add('show');
  renderMessages();
}

function closeReadModal() {
  document.getElementById('read-modal').classList.remove('show');
}

function openCompose(toUser, subject) {
  const select = document.getElementById('compose-to');
  select.innerHTML = users.filter(u => u.username !== currentUser.username).map(u =>
    `<option value="${u.username}" ${toUser === u.username ? 'selected' : ''}>${u.name} (${u.institution === 'all' ? 'Super Admin' : u.institution})</option>`
  ).join('');
  document.getElementById('compose-subject').value = subject || '';
  document.getElementById('compose-body').value = '';
  document.getElementById('compose-modal').classList.add('show');
}

function closeCompose() {
  document.getElementById('compose-modal').classList.remove('show');
}

function replyTo(fromUser, subject) {
  openCompose(fromUser, 'Re: ' + subject.replace(/^Re: /,''));
}

function sendMessage() {
  const to = document.getElementById('compose-to').value;
  const subject = document.getElementById('compose-subject').value.trim();
  const body = document.getElementById('compose-body').value.trim();
  
  if (!subject || !body) { alert('Subjek dan isi pesan harus diisi!'); return; }
  
  const toUser = users.find(u => u.username === to);
  const now = new Date();
  const dateStr = now.toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}) + ', ' + now.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
  
  messagesData.unshift({
    id: 'MSG-' + String(messagesData.length + 1).padStart(3,'0'),
    from: currentUser.username,
    to: to,
    fromName: currentUser.name,
    toName: toUser.name,
    subject: subject,
    body: body,
    date: dateStr,
    read: false
  });
  
  closeCompose();
  renderMessages();
  showPage('messages');
}

function filterMessages(filter, el) {
  document.querySelectorAll('.msg-filter').forEach(b => b.classList.remove('active-filter'));
  el.classList.add('active-filter');
  renderMessages(filter);
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  populateHintGrid();
  renderInstitutions();
});

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.id === 'detail-modal') closeModal();
  if (e.target.id === 'compose-modal') closeCompose();
  if (e.target.id === 'read-modal') closeReadModal();
});
