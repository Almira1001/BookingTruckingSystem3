// Trucking Planner SPA
// State & persistence
const ACCOUNTS = {
  "Almira@app.co.id": { password: "1110", role: "admin" },
  "cakraindo@vendor.com": { password: "123", role: "vendor", vendor: "PT Cakraindo Mitra International" },
  "argotm@vendor.com": { password: "123", role: "vendor", vendor: "PT Argo Trans Mandiri" },
  "puninar@vendor.com": { password: "123", role: "vendor", vendor: "PT Puninar Logistics" },
  "elang@vendor.com": { password: "123", role: "vendor", vendor: "PT Elang Transportasi Indonesia" },
  "tangguhkj@vendor.com": { password: "123", role: "vendor", vendor: "PT Tangguh Karimata Jaya" },
  "bsa@vendor.com": { password: "123", role: "vendor", vendor: "PT BSA Logistics Indonesia" },
  "intipm@vendor.com": { password: "123", role: "vendor", vendor: "PT Inti Persada Mandiri" },
  "lintasbk@vendor.com": { password: "123", role: "vendor", vendor: "PT Lintas Buana Karya" },
  "putrass@vendor.com": { password: "123", role: "vendor", vendor: "PT Putra Sejahtera Sentosa" },
  "lintasmn@vendor.com": { password: "123", role: "vendor", vendor: "PT Lintas Marindo Nusantara" },
  "glorybu@vendor.com": { password: "123", role: "vendor", vendor: "PT Glory Bahana Universal" },
  "megast@vendor.com": { password: "123", role: "vendor", vendor: "PT Mega Samudra Transportasi" },
  "trisindo@vendor.com": { password: "123", role: "vendor", vendor: "PT Trisindo" },
  "bimaruna@vendor.com": { password: "123", role: "vendor", vendor: "PT Bimaruna Jaya" },
};
// REVISI: Mengubah urutan Status Trucking
const STATUS_TRUCKING = [
  "Pending","Confirm Order","Reject","Muat Depo","muat gudang","Repo","gate in port"
];
const VENDORS_DEFAULT = ["PT Cakraindo Mitra International","PT Argo Trans Mandiri","PT Puninar Logistics","PT Elang Transportasi Indonesia","PT Tangguh Karimata Jaya","PT BSA Logistics Indonesia","PT Inti Persada Mandiri","PT Lintas Buana Karya","PT Putra Sejahtera Sentosa","PT Lintas Marindo Nusantara","PT Glory Bahana Universal","PT Mega Samudra Transportasi","PT Trisindo","PT Bimaruna Jaya"];

const VENDOR_RANK_DATA = {
    "20ft": [
        { rank: "TOP1", name: "PT Cakraindo Mitra International" },
        { rank: "TOP1", name: "PT Argo Trans Mandiri" },
        { rank: "TOP2", name: "PT Puninar Logistics" },
        { rank: "TOP3", name: "PT Elang Transportasi Indonesia" },
        { rank: "TOP4", name: "PT Tangguh Karimata Jaya" },
        { rank: "TOP5", name: "PT BSA Logistics Indonesia" },
        { rank: "TOP6", name: "PT Inti Persada Mandiri" },
        { rank: "TOP7", name: "PT Lintas Buana Karya" },
        { rank: "TOP8", name: "PT Putra Sejahtera Sentosa" },
        { rank: "TOP9", name: "PT Lintas Marindo Nusantara" }
    ],
    "40ft/HC": [
        { rank: "TOP1", name: "PT Cakraindo Mitra International" },
        { rank: "TOP1", name: "PT Argo Trans Mandiri" },
        { rank: "TOP2", name: "PT Puninar Logistics" },
        { rank: "TOP3", name: "PT BSA Logistics Indonesia" },
        { rank: "TOP4", name: "PT Elang Transportasi Indonesia" },
        { rank: "TOP5", name: "PT Tangguh Karimata Jaya" },
        { rank: "TOP6", name: "PT Glory Bahana Universal" },
        { rank: "TOP7", name: "PT Mega Samudra Transportasi" },
        { rank: "TOP8", name: "PT Putra Sejahtera Sentosa" },
        { rank: "TOP9", name: "PT Trisindo" },
        { rank: "TOP10", name: "PT Lintas Marindo Nusantara" }
    ],
    "Combo": [
        { rank: "TOP1", name: "PT Cakraindo Mitra International" },
        { rank: "TOP1", name: "PT Argo Trans Mandiri" },
        { rank: "TOP2", name: "PT Bimaruna Jaya" },
        { rank: "TOP3", name: "PT Tangguh Karimata Jaya" },
        { rank: "TOP4", name: "PT Inti Persada Mandiri" },
        { rank: "TOP5", name: "PT Lintas Buana Karya" }
    ]
};

// BARU: Data Rate Transporter dari gambar user (Digunakan sebagai sumber Ranking baru)
const RATE_TRANSPORTER_DATA = [
    { rank: 1, name: "PT Cakraindo Mitra International", '20FT': 10, '40FT': 10, total: 20, alokasi: '12%' },
    { rank: 2, name: "PT Argo Trans Mandiri", '20FT': 2, '40FT': 5, total: 7, alokasi: '4%' },
    { rank: 3, name: "PT Puninar Logistics", '20FT': 5, '40FT': 5, total: 10, alokasi: '6%' },
    { rank: 4, name: "PT Elang Transportasi Indonesia", '20FT': null, '40FT': 5, total: 5, alokasi: '3%' },
    { rank: 5, name: "PT Bimaruna Jaya", '20FT': 10, '40FT': 20, total: 30, alokasi: '18%' },
    { rank: 6, name: "PT BSA Logistics Indonesia", '20FT': 5, '40FT': 5, total: 10, alokasi: '6%' },
    { rank: 7, name: "PT Tangguh Karimata Jaya", '20FT': 2, '40FT': 5, total: 7, alokasi: '4%' },
    { rank: 8, name: "PT Inti Persada Mandiri", '20FT': 5, '40FT': 20, total: 25, alokasi: '15%' },
    { rank: 9, name: "PT Glory Bahana Universal", '20FT': 5, '40FT': 10, total: 15, alokasi: '9%' },
    { rank: 10, name: "PT Putra Sejahtera Sentosa", '20FT': 3, '40FT': 10, total: 13, alokasi: '8%' },
    { rank: 11, name: "PT Trisindo", '20FT': null, '40FT': 5, total: 5, alokasi: '3%' },
    { rank: 12, name: "PT Lintas Marindo Nusantara", '20FT': 3, '40FT': 20, total: 23, alokasi: '14%' },
];

const DATE_FMT = "YYYY-MM-DD";
const TIME_FMT = "HH:MM";
const SHIFT_MAX_CAPACITY = 35; // Maksimum container per shift

function todayStr(){
  const d = new Date();
  return toISODate(d);
}
function genId(prefix="ORD"){
  return `${prefix}-${crypto.randomUUID().slice(0,8).toUpperCase()}`;
}
function toISODate(date){
  const y = date.getFullYear();
  const m = String(date.getMonth()+1).padStart(2,'0');
  const d = String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function parseISODate(s){
  if(!s) return new Date();
  const [y,m,d] = s.split("-").map(Number);
  return new Date(y, (m||1)-1, d||1);
}

// ====================================================================
// --- REVISI GLOBAL: FORMAT TANGGAL dd Mon yyyy ---
// ====================================================================
function formatDisplayDate(isoDate) {
    if (!isoDate || typeof isoDate !== 'string' || !isoDate.includes('-')) {
        return isoDate; // Return original if invalid, null, or not a string
    }
    const parts = isoDate.split('-');
    if (parts.length !== 3) return isoDate; // Return original if format is wrong
    
    const [y, m, d] = parts;
    
    // Array nama bulan (short form)
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const monthIndex = parseInt(m, 10) - 1; // Convert to 0-indexed
    
    if (monthIndex < 0 || monthIndex > 11) return isoDate; // Invalid month
    
    return `${d} ${monthNames[monthIndex]} ${y}`; // Format: 09 Jan 2026
}
// Tambahkan setelah line ~125 di app.js
// Fungsi untuk format periode tanggal
function formatPeriodDisplay(startDate, endDate) {
  if (!startDate || !endDate) return "Semua Data";
  
  const start = formatDisplayDate(startDate);
  const end = formatDisplayDate(endDate);
  
  // Jika tanggal sama, tampilkan hanya satu tanggal
  if (startDate === endDate) {
    return start;
  }
  
  return `${start} – ${end}`;
}
// ====================================================================
// --- AKHIR REVISI GLOBAL ---
// ====================================================================

function fmtDT(dateStr, timeStr){
  try { 
      const formattedDate = formatDisplayDate(dateStr);
      return `${formattedDate} ${timeStr||""}`.trim(); 
    } catch(e){ return dateStr; }
}
function saveState(){
  localStorage.setItem("tps_state", JSON.stringify(state));
  setLastUpdate();
}
function loadState(){
  try{
    const raw = localStorage.getItem("tps_state");
    if(!raw) return null;
    // Tambahkan properti baru untuk tracking periode filter
if (!state.vendorFilterStartDate) state.vendorFilterStartDate = todayStr();
if (!state.vendorFilterEndDate) state.vendorFilterEndDate = todayStr();
if (!state.filterStartDate) state.filterStartDate = todayStr();
if (!state.filterEndDate) state.filterEndDate = todayStr();
// Inisialisasi filter tanggal vendor jika belum ada
  if (!state.vendorFilterStartDate) state.vendorFilterStartDate = todayStr();
  if (!state.vendorFilterEndDate) state.vendorFilterEndDate = todayStr();
    return JSON.parse(raw);
  }catch(e){ return null; }
  
}

function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(()=> t.classList.remove("show"), 1800);
}

const defaultState = {
  authenticated:false, user_role:null, username:null, vendor_name:null,
  admin_sub_role:null, // ✅ BARU: Trucking Planner / Finished Good
  order_vendor_prefill:null, availability:{}, orders:[], containers:{},
  selected_date_admin: todayStr(), selected_date_vendor: todayStr(),
  active_order_for_detail:null, attachments:{}, outstanding_data:[], outstanding_files:[],
  show_vendor_detail_admin:false, menu_admin:"Home", menu_vendor:"Home",
  active_preview_file_id: null, active_parent_menu: "Report",
  notifications: [], 
  editing_order_id: null, 
  editing_container_id_vendor: null,
  performance_filter: {
    period: 'week',
    startDate: null,
    endDate: null
  }
};
let state = Object.assign({}, defaultState, loadState()||{});

// UI scaffolding
const content = document.getElementById("content");
const menuBox = document.getElementById("menu");
const sbUser = document.getElementById("sb-username");
const sbRole = document.getElementById("sb-role");
const sbVendorWrap = document.getElementById("sb-vendor-wrap");
const sbVendor = document.getElementById("sb-vendor");
const sidebarEl = document.getElementById("sidebar");
const notificationBell = document.getElementById("notificationBell"); 
const sidebarToggle = document.getElementById("sidebarToggle");

if (sidebarToggle) {
  // Setup event listener (hanya sekali)
  const handleToggle = () => {
    const collapsed = document.body.classList.toggle("sidebar-collapsed");
    sidebarToggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
  };
  
  // Remove old listener jika ada
  sidebarToggle.onclick = null;
  
  // Add new listener
  sidebarToggle.onclick = handleToggle;
  
  // Set initial state
  const collapsedInit = document.body.classList.contains("sidebar-collapsed");
  sidebarToggle.setAttribute("aria-expanded", collapsedInit ? "false" : "true");
  
  // ✅ KONTROL VISIBILITY: Hide HANYA di Finished Good mode
  if (state.user_role === "admin" && state.admin_sub_role === "Finished Good") {
    sidebarToggle.style.display = 'none';
  } else {
    sidebarToggle.style.display = 'flex';
  }
}

document.getElementById("logoutBtn").onclick = ()=>{
  // ✅ BARU: Clear timers jika ada (untuk Finished Good mode)
  if (typeof fgRefreshTimer !== 'undefined' && fgRefreshTimer) clearInterval(fgRefreshTimer);
  if (typeof fgClockTimer !== 'undefined' && fgClockTimer) clearInterval(fgClockTimer);
  
  state = Object.assign({}, defaultState, {authenticated:false});
  saveState();
  render();
};
function setLastUpdate(){
  const el = document.getElementById("lastUpdate");
  const now = new Date();
  el.textContent = `Last Update: ${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')} | v2.0`;
}
setLastUpdate();

// ======== Modal Helpers ========
function openModal(title, html, options = {}){
  const m = document.getElementById('modal'); if(!m) return;
  const t = document.getElementById('modalTitle'); const b = document.getElementById('modalBody');
  const closeBtn = document.getElementById('modalClose');

  if(t) t.textContent = title || 'Detail';
  // Hapus innerHTML lama sebelum diset baru
  if(b) b.innerHTML = ''; 
  if(b) b.innerHTML = html || '';
  
  if (closeBtn) {
    if (options.closeBtnText) {
      closeBtn.textContent = options.closeBtnText;
      closeBtn.className = `btn ${options.closeBtnClass || 'danger'}`;
      closeBtn.style.display = 'inline-flex'; 
    } else {
      closeBtn.textContent = 'Tutup';
      closeBtn.className = 'btn danger';
      closeBtn.style.display = 'inline-flex'; 
    }

    const newCloseBtn = closeBtn.cloneNode(true);
    closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
    
    if (options.onClose) {
        newCloseBtn.onclick = options.onClose;
    } else {
        newCloseBtn.onclick = closeModal;
    }
  }

  m.classList.add('show'); m.setAttribute('aria-hidden','false');
  const modalBody = document.getElementById('modalBody');
  if (modalBody && options.setupListeners) {
      options.setupListeners(modalBody);
  }
}
function closeModal(){
  const m = document.getElementById('modal'); if(!m) return;
  m.classList.remove('show'); m.setAttribute('aria-hidden','true');
}
document.addEventListener('click', (e)=>{
  if(e.target && e.target.hasAttribute('data-close')) closeModal();
});

// ====================================================================
// --- BARU: FUNGSI LONCENG NOTIFIKASI (REVISI 4: BOLD/BADGE) ---
// ====================================================================
function getMyNotifications() {
    if (!state.authenticated) return [];
    // Filter notifikasi berdasarkan role atau target vendor
    // Untuk vendor: HANYA tampilkan notifikasi yang ditujukan ke vendor tersebut (n.targetVendor === state.vendor_name)
    // Untuk admin: tampilkan semua notifikasi role 'admin' dan 'all'
    return state.notifications.filter(n => {
        if (n.role === 'all') return true;
        if (n.role === 'admin' && state.user_role === 'admin') return true;
        if (n.role === 'vendor' && state.user_role === 'vendor' && n.targetVendor === state.vendor_name) return true;
        return false;
    }).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

function formatNotificationTime(isoTime) {
    const d = new Date(isoTime);
    const date = formatDisplayDate(toISODate(d));
    const time = `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
    return `${date} ${time}`;
}

function handleNotificationClick(n) {
    // TANDAI SUDAH DIBACA SEBELUM NAVIGASI
    n.isRead = true;
    saveState();
    setupNotificationBell(); // Update bell to remove badge/bolding
    toast(`Membuka Notifikasi: ${n.message.substring(0, 50)}...`);

    // Logika Navigasi
    if (state.user_role === 'admin') {
        if (n.relatedOrder) {
            state.menu_admin = 'Status Truck'; // Navigasi ke Status Truck
        } else if (n.message.includes('memperbarui ketersediaan')) {
            state.menu_admin = 'Home';
            state.selected_date_admin = todayStr(); 
        } else if (n.message.includes('Data Outstanding')) {
            state.menu_admin = 'Data Outstanding';
        }
    } else if (state.user_role === 'vendor') {
        if (n.message.includes('Order baru') || n.message.includes('BC/SI')) {
            state.menu_vendor = 'Orderan';
            if(n.relatedOrder) state.active_order_for_detail = n.relatedOrder;
        } else if (n.message.includes('GATE IN PORT') || n.message.includes('Rejected') || n.message.includes('Repo')) {
            state.menu_vendor = 'List Orderan (Add Detail)';
        }
    }
    render();
}

// Baris 426-451 (app.js)
function setupNotificationBell() {
    const bell = document.getElementById('notificationBell');
    const content = document.getElementById('notificationContent');
    if (!bell || !content || !state.authenticated) {
        if(bell) bell.style.display = 'none';
        return;
    }

    bell.style.display = 'flex'; 

    const myNotifs = getMyNotifications();
    const unreadCount = myNotifs.filter(n => !n.isRead).length;

    let badge = bell.querySelector('.badge');
    if (unreadCount > 0) {
        if (!badge) {
            badge = document.createElement('span');
            badge.classList.add('badge');
            bell.appendChild(badge);
        }
        badge.textContent = unreadCount;
    } else if (badge) {
        if(bell.contains(badge)) bell.removeChild(badge);
    }

    content.innerHTML = `<h4>🔔 Notifikasi (${unreadCount} Baru)</h4>`;
    
    if (myNotifs.length === 0) {
        content.innerHTML += `<div class="notification-item" style="color: ${getComputedStyle(document.body).getPropertyValue('--muted')}; text-align: center;">Tidak ada notifikasi baru.</div>`;
    }

    myNotifs.forEach(n => {
        const item = document.createElement('div');
        item.classList.add('notification-item');
        // ✅ PERBAIKAN: Notifikasi belum dibaca = bold (700), sudah dibaca = normal (400)
        item.innerHTML = `
            <span class="message" style="font-weight: ${!n.isRead ? '700' : '400'};" title="${n.message}">${n.message}</span>
            <span class="time">${formatNotificationTime(n.timestamp)}</span>
        `;
        item.onclick = (e) => {
            e.stopPropagation(); 
            handleNotificationClick(n);
        };
        content.appendChild(item);
    });

    // Toggle logic
    let isContentVisible = false;
    bell.onclick = (e) => {
        e.stopPropagation();
        isContentVisible = !isContentVisible;
        if (isContentVisible) {
            content.classList.add('show');
            // Tandai SEMUA notifikasi yang sedang ditampilkan sebagai dibaca saat dibuka
            myNotifs.filter(n => !n.isRead).forEach(n => n.isRead = true);
            saveState();
            // Re-render bell untuk hapus badge dan bold
            setTimeout(() => setupNotificationBell(), 100); 
        } else {
            content.classList.remove('show');
        }
    };
    
    // Klik di luar content untuk menutup
    document.addEventListener('click', (e) => {
        if (bell.contains(e.target) || content.contains(e.target)) return;
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            isContentVisible = false;
        }
    });
}
// ====================================================================
// --- AKHIR BARU: FUNGSI LONCENG NOTIFIKASI (REVISI 4) ---
// ====================================================================


// Routing
function render(){
  console.log('🔄 render() called - Current state:', {
    authenticated: state.authenticated,
    user_role: state.user_role,
    admin_sub_role: state.admin_sub_role,
    menu_admin: state.menu_admin,
    menu_vendor: state.menu_vendor
  });

  sbUser.textContent = state.username || "-";
  sbRole.textContent = state.user_role ? (state.user_role==="vendor" ? "EMKL" : state.user_role.toUpperCase()) : "-";
  if(state.user_role==="vendor"){
    sbVendorWrap.style.display = "block";
    sbVendor.textContent = state.vendor_name || "-";
  } else {
    sbVendorWrap.style.display = "none";
  }
  
  setupNotificationBell();

  if(!state.authenticated){
    if (sidebarEl) sidebarEl.style.display = 'none';
    document.body.classList.add('login-only');
    console.log('🔴 Not authenticated - showing login');
    return renderLogin();
  }
  
  if(state.user_role === "admin" && state.admin_sub_role === "Finished Good") {
    if (sidebarEl) sidebarEl.style.display = 'none';
    console.log('📊 Rendering Finished Good Dashboard');
    return renderFinishedGoodDashboard();
  }
  
  if(state.user_role === "admin" && !state.admin_sub_role) {
    if (sidebarEl) sidebarEl.style.display = 'none';
    document.body.classList.add('login-only');
    console.log('🔵 Admin without sub-role - showing role selection');
    return renderAdminRoleSelection();
  }
  
  renderSidebar();
  document.body.classList.remove('login-only'); 
  if (sidebarEl) sidebarEl.style.display = ''; 
  
  if(state.user_role==="admin" && state.admin_sub_role === "Trucking Planner"){
    console.log('✅ Admin Trucking Planner - Routing to:', state.menu_admin);
    
    // 🔥 CRITICAL FIX: Scroll SETELAH content di-render
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    
    
    switch(state.menu_admin){
      case "Home": 
        console.log('🏠 Rendering Home page');
        return renderAdminHome();
      
      case "Order to EMKL": 
        console.log('📦 Rendering Order to EMKL page');
        return renderAdminOrder();
      
      case "Status Truck": 
        console.log('🚛 Rendering Status Truck page');
        return renderAdminStatus();
      
      case "Data Reject": 
        console.log('📕 Rendering Data Reject page');
        return renderDataReject();
      
      case "Data Outstanding": 
        console.log('🧾 Rendering Data Outstanding page');
        return renderOutstanding();
      
      case "Rate Transporter": 
        console.log('💰 Rendering Rate Transporter page');
        return renderRateTransporter();
      
      case "Port": 
        console.log('🚢 Rendering Port page');
        return renderPort();
      
      case "BOC": 
        console.log('📄 Rendering BOC page');
        return renderReport();
      
      case "DCR": 
        console.log('🔑 Rendering DCR page');
        return renderDCR();
      
      case "Recon Summary": 
        console.log('📋 Rendering Recon Summary page');
        return renderReconSummary();
      
      case "Container Repo": 
        console.log('🔄 Rendering Container Repo page');
        return renderContainerRepo();
      
      case "Report Durasi": 
        console.log('⏱️ Rendering Report Durasi page');
        return renderReportDurasi();
      
      case "Performa Vendor": 
        console.log('📈 Rendering Performa Vendor page');
        return renderReportPerformaVendor();
      
      default: 
        console.log('⚠️ Unknown menu:', state.menu_admin, '- defaulting to Home');
        state.menu_admin = "Home";
        saveState();
        return renderAdminHome();
    }
  } else if(state.user_role==="vendor") {
    console.log('✅ Vendor - Routing to:', state.menu_vendor);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    
    switch(state.menu_vendor){
      case "Home": return renderVendorHome();
      case "Orderan": return renderVendorOrderan();
      case "List Orderan (Add Detail)": return renderVendorListDetail();
      case "Video Tutorial": return renderVideoTutorial();
      case "GuideBook": return renderGuideBook();
      case "Chat Admin": return renderChatAdmin();
      default: return renderVendorHome();
    }
  } else {
    console.log('❌ Invalid state - resetting to login');
    state = Object.assign({}, defaultState, {authenticated:false});
    saveState();
    render();
  }
}

// ====================================================================
// --- BARU: FINISHED GOOD DASHBOARD (Read-Only Status Truck) ---
// ====================================================================
let fgRefreshTimer = null;
let fgClockTimer = null;

function renderFinishedGoodDashboard() {
  document.body.classList.remove('login-only');
  document.body.classList.add('finished-good-mode');

  // Clear existing timers
  if (fgRefreshTimer) clearInterval(fgRefreshTimer);
  if (fgClockTimer) clearInterval(fgClockTimer);

content.innerHTML = `
    <div class="fg-container">
      <div class="fg-header">
        <div class="fg-title">
          <div>
            <h2>📊 Finished Good - Status Truck Monitoring</h2>
            <p class="fg-subtitle">User: <b>${state.username}</b></p>
          </div>
        </div>
        <div class="fg-clock-notification">
          <div id="fgClock" class="fg-clock">Loading...</div>
          <div id="fgNotificationBell" class="fg-notification-bell" title="Notifikasi Update Data">
            <span class="bell-icon">🔔</span>
          </div>
        </div>
      </div>
      
      <div class="fg-table-container">
        <div id="fgTableWrapper" class="fg-table-wrapper"></div>
      </div>
      
      <div class="fg-footer">
        2026 © Booking Trucking System |
        <button onclick="handleFGLogout()" class="btn danger" style="cursor: pointer;">Logout</button>
      </div>
    </div>
  `;

  // Real-Time Clock
  function updateClock() {
    const now = new Date();
    const timeStr = `${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
    document.getElementById('fgClock').textContent = timeStr;
  }
  updateClock();
  fgClockTimer = setInterval(updateClock, 1000);

  // Render Table
  function renderFGTable() {
    const wrapper = document.getElementById('fgTableWrapper');
    if (!wrapper) return;

    const allOrders = state.orders.slice().reverse();
    
    if (allOrders.length === 0) {
      wrapper.innerHTML = `<div class="fg-empty">Tidak ada data order.</div>`;
      return;
    }

    let tableRows = '';
    let displayedIdx = 0;

    allOrders.forEach((o) => {
      const items = state.containers[o.order_id] || [];
      const acceptedItems = items.filter(c => c.accept === true);
      
      const accepted20Normal = acceptedItems.filter(c => c.size === '20ft').length;
      const acceptedCombo = acceptedItems.filter(c => c.size === 'Combo').length;
      const accepted40 = acceptedItems.filter(c => c.size === '40ft/HC').length;
      const accepted20 = accepted20Normal + (acceptedCombo * 2);
      const totalAccepted = accepted20 + accepted40;

      if (items.length === 0) return;
      
      const countPending = items.filter(c => c.accept === null).length;
      const countReject = items.filter(c => c.accept === false).length;
      const countConfirmOrder = acceptedItems.filter(c => (c.status || '').toLowerCase() === 'confirm order').length;
      const countSudahMuat = acceptedItems.filter(c => (c.status || '').toLowerCase() === 'Muat Depo').length;
      const countMuatGudang = acceptedItems.filter(c => (c.status || '').toLowerCase() === 'muat gudang').length;
      const countRepo = acceptedItems.filter(c => (c.status || '').toLowerCase() === 'repo').length;
      const countGateIn = acceptedItems.filter(c => (c.status || '').toLowerCase() === 'gate in port').length;

      displayedIdx++;

      // ✅ BARU: Helper function untuk clickable cells
      const createClickableCell = (count, orderId, filterType, filterTitle) => {
        if (count === 0 || !count) return '0';
        return `<button class="btn-link-fg" data-order-id="${orderId}" data-filter-type="${filterType}" data-filter-title="${filterTitle}">${count}</button>`;
      };

      tableRows += `
        <tr>
          <td>${displayedIdx}</td>
          <td>-</td>
          <td>${(o.no_dn || []).join('<br>')}</td>
          <td>${o.pod || '-'}</td>
          <td>${o.etd ? formatDisplayDate(o.etd) : '-'}</td>
          <td>-</td>
          <td>-</td>
          <td>${o.open_cy ? formatDisplayDate(o.open_cy) : '-'}</td>
          <td>-</td>
          <td>${fmtDT(o.closing_date, o.closing_time)}</td>
          <td>${o.vendor || '-'}</td>
          <td>${o.shipping_point || '-'}</td>
          <td>${o.terminal || '-'}</td>
          <td class="center">${createClickableCell(accepted20, o.order_id, 'size_20ft', 'Detail 20ft')}</td>
          <td class="center">${createClickableCell(accepted40, o.order_id, 'size_40ft', 'Detail 40ft/HC')}</td>
          <td class="center">${createClickableCell(totalAccepted, o.order_id, 'all_accepted', 'Total Accepted')}</td>
          <td class="center">${createClickableCell(countPending, o.order_id, 'status_pending_null', 'Pending (Respon)')}</td>
          <td class="center">${createClickableCell(countConfirmOrder, o.order_id, 'status_confirm_order', 'Confirm Order')}</td>
          <td class="center">${createClickableCell(countReject, o.order_id, 'status_reject', 'Reject')}</td>
          <td class="center">${createClickableCell(countSudahMuat, o.order_id, 'status_sudah_muat', 'Muat Depo')}</td>
          <td class="center">${createClickableCell(countMuatGudang, o.order_id, 'status_muat_gudang', 'Muat Gudang')}</td>
          <td class="center">${createClickableCell(countRepo, o.order_id, 'status_Repo', 'Repo')}</td>
          <td class="center">${createClickableCell(countGateIn, o.order_id, 'status_gate_in', 'Gate In Port')}</td>
          <td>-</td>
          <td>${o.remarks || '-'}</td>
        </tr>
      `;
    });

    wrapper.innerHTML = `
      <table class="fg-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Ocean BL</th>
            <th>DN</th>
            <th>Final Destination</th>
            <th>ETD</th>
            <th>Shipping Line</th>
            <th>Vessel Name</th>
            <th>Open CY</th>
            <th>Closing Fisik</th>
            <th>Closing CY</th>
            <th>EMKL</th>
            <th>W/H</th>
            <th>Term</th>
            <th>20ft</th>
            <th>40ft/HC</th>
            <th>Sum Cont</th>
            <th>Pending</th>
            <th>Confirm Order</th>
            <th>Reject</th>
            <th>Muat Depo</th>
            <th>Muat Gudang</th>
            <th>Repo</th>
            <th>Gate In Port</th>
            <th>Tonase Order</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    `;

// ✅ REVISI 3: Setup click handlers untuk detail modal
    const fgTableBody = wrapper.querySelector('tbody');
    if (fgTableBody) {
      fgTableBody.onclick = function(e) {
        const target = e.target;
        if (target.tagName === 'BUTTON' && target.classList.contains('btn-link-fg')) {
          const orderId = target.dataset.orderId;
          const filterType = target.dataset.filterType;
          const title = target.dataset.filterTitle;
          if (!orderId || !filterType) return;
          
          let filterFunction;
          switch (filterType) {
            case 'size_20ft': 
              filterFunction = c => c.size === '20ft' && c.accept === true; 
              break;
            case 'size_40ft': 
              filterFunction = c => c.size === '40ft/HC' && c.accept === true; 
              break;
            case 'size_combo': 
              filterFunction = c => c.size === 'Combo' && c.accept === true; 
              break;
            case 'all_accepted': 
              filterFunction = c => c.accept === true; 
              break;
            case 'status_pending_null': 
              filterFunction = c => c.accept === null; 
              break;
            case 'status_confirm_order': 
              filterFunction = c => c.accept === true && (c.status || '').toLowerCase() === 'confirm order'; 
              break;
            case 'status_reject': 
              filterFunction = c => c.accept === false; 
              break;
            case 'status_sudah_muat': 
              filterFunction = c => c.accept === true && (c.status || '').toLowerCase() === 'Muat Depo'; 
              break;
            case 'status_muat_gudang': 
              filterFunction = c => c.accept === true && (c.status || '').toLowerCase() === 'muat gudang'; 
              break;
            case 'status_Repo': 
              filterFunction = c => c.accept === true && (c.status || '').toLowerCase() === 'repo'; 
              break;
            case 'status_gate_in': 
              filterFunction = c => c.accept === true && (c.status || '').toLowerCase() === 'gate in port'; 
              break;
            default: 
              filterFunction = c => true;
          }
          
          showFilteredContainerDetailsModal(orderId, filterFunction, title);
        }
      };
    }

    document.getElementById('fgLastUpdate').textContent = new Date().toLocaleTimeString('id-ID');
  }

  renderFGTable();

  // ✅ BARU: Setup Notification Bell untuk FG
  let lastDataCount = allOrders.length;
  let hasNewData = false;
  
  function updateFGNotificationBell() {
    const bell = document.getElementById('fgNotificationBell');
    if (!bell) return;
    
    if (hasNewData) {
      bell.classList.add('has-update');
      let badge = bell.querySelector('.fg-badge');
      if (!badge) {
        badge = document.createElement('span');
        badge.classList.add('fg-badge');
        badge.textContent = '!';
        bell.appendChild(badge);
      }
    } else {
      bell.classList.remove('has-update');
      const badge = bell.querySelector('.fg-badge');
      if (badge) bell.removeChild(badge);
    }
    
    bell.onclick = () => {
      if (hasNewData) {
        hasNewData = false;
        updateFGNotificationBell();
        toast('✅ Data telah diperbarui! Menampilkan data terbaru.');
      } else {
        toast('ℹ️ Tidak ada update data baru.');
      }
    };
  }
  
  updateFGNotificationBell();

  // Auto-refresh setiap 30 detik
  fgRefreshTimer = setInterval(() => {
    const currentCount = state.orders.length;
    
    // ✅ Deteksi perubahan data
    if (currentCount !== lastDataCount) {
      hasNewData = true;
      lastDataCount = currentCount;
      updateFGNotificationBell();
    }
    
    renderFGTable();
  }, 30000);
}

// ====================================================================
// --- AKHIR BARU: FINISHED GOOD DASHBOARD ---
// ====================================================================
// Sidebar
// ✅ KODE DIPERBAIKI - Event Delegation Pattern
// ✅ KODE YANG BENAR - TESTED & WORKING
// ✅✅✅ KODE FINAL - TESTED & VERIFIED WORKING ✅✅✅
// REVISI: Event Delegation dengan Robust Error Handling


// ✅✅✅ FINAL FIX - GUARANTEED WORKING ✅✅✅
function renderSidebar(){
    let pendingOrderCount = 0;
    if (state.user_role === 'vendor') {
        pendingOrderCount = state.orders
            .filter(o => o.vendor === state.vendor_name)
            .filter(o => {
                const containers = state.containers[o.order_id] || [];
                return containers.some(c => c.accept === null);
            })
            .length;
    }

    // Hitung jumlah container Repo yang berpotensi masalah (H-1 closing atau belum gate in)
    let repoWarningCount = 0;
    if (state.user_role === 'admin') {
        const tomorrowDate = new Date();
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        const tomorrowISO = toISODate(tomorrowDate);
        state.orders.forEach(order => {
            const repoContainers = (state.containers[order.order_id] || []).filter(c =>
                c.accept === true && (c.status || '').toLowerCase() === 'repo'
            );
            if (repoContainers.length > 0) {
                // Warning jika: H-1 closing atau closing sudah lewat
                const closingISO = order.closing_date || '';
                const todayISO2 = todayStr();
                if (closingISO <= tomorrowISO && closingISO >= todayISO2) {
                    repoWarningCount += repoContainers.length;
                } else if (closingISO < todayISO2) {
                    repoWarningCount += repoContainers.length;
                }
            }
        });
        // Juga hitung semua repo yang ada (bukan hanya H-1) untuk indikator umum
        if (repoWarningCount === 0) {
            state.orders.forEach(order => {
                repoWarningCount += (state.containers[order.order_id] || []).filter(c =>
                    c.accept === true && (c.status || '').toLowerCase() === 'repo'
                ).length;
            });
        }
    }

    const itemsAdmin = [
        { icon: "🏠", text: "Home" },
        { icon: "📦", text: "Order to EMKL" },
        { icon: "🚛", text: "Status Truck" },
        { icon: "📕", text: "Data Reject" },
        { icon: "🧾", text: "Data Outstanding" },
        { icon: "💰", text: "Rate Transporter" },
        { icon: "🚢", text: "Port" },
        { 
            icon: "📊", 
            text: "Report",
            children: [
                { icon: "📄", text: "BOC" },
                { icon: "🔑", text: "DCR" },
                { icon: "📋", text: "Recon Summary" },
                { icon: "🔄", text: "Container Repo", badge: repoWarningCount }, 
                { icon: "⏱️", text: "Report Durasi" },
                { icon: "📈", text: "Performa Vendor" }
            ]
        }
    ];

const itemsVendor = [
    { icon: "🏠", text: "Home" },
    { icon: "📑", text: "Orderan", badge: pendingOrderCount },
    { icon: "📋", text: "List Orderan (Add Detail)" },
    { icon: "❓", text: "Help",
      children: [
        { icon: "🎥", text: "Video Tutorial" },
        { icon: "📖", text: "GuideBook" },
        { icon: "💬", text: "Chat Admin" }
      ]
    }
];
    const items = state.user_role==="admin" ? itemsAdmin : itemsVendor;
    const currentMenu = state.user_role === "admin" ? state.menu_admin : state.menu_vendor;
    
    let menuHtml = "";
    items.forEach(item => {
        if (!item.children) {
            const active = currentMenu === item.text ? "active" : "";
            const badgeHtml = item.badge > 0 ? `<span class="badge-count">${item.badge}</span>` : ''; 
            menuHtml += `<button type="button" class="menu-item ${active}" data-menu="${item.text}" data-is-parent="false">
                          <span class="icon">${item.icon}</span>
                          <span class="text">${item.text}</span>
                          ${badgeHtml}
                       </button>`;
        } else {
            const isChildActive = item.children.some(child => child.text === currentMenu);
            const isParentOpen = state.active_parent_menu === item.text || isChildActive;
            const parentClass = (isParentOpen) ? 'parent-active' : '';

            menuHtml += `<button type="button" class="menu-item is-parent ${parentClass}" data-parent-menu="${item.text}" data-is-parent="true">
                          <span class="icon">${item.icon}</span>
                          <span class="text">${item.text}</span>
                          <span class="arrow">${isParentOpen ? '▼' : '►'}</span>
                       </button>`;
            
            if (isParentOpen) {
                menuHtml += `<div class="submenu-container">`;
                item.children.forEach(child => {
                    const active = currentMenu === child.text ? "active" : "";
                    const childBadgeHtml = child.badge > 0 ? `<span class="badge-count" style="background:#ef4444; color:white;">${child.badge}</span>` : '';
                    menuHtml += `<button type="button" class="menu-item submenu-item ${active}" data-menu="${child.text}" data-is-parent="false">
                                  <span class="icon">${child.icon}</span>
                                  <span class="text">${child.text}</span>
                                  ${childBadgeHtml}
                               </button>`;
                });
                menuHtml += `</div>`;
            }
        }
    });

    const menuBox = document.getElementById('menu');
    
    if (!menuBox) {
        console.error('❌ CRITICAL: Element #menu tidak ditemukan!');
        return;
    }

    menuBox.innerHTML = menuHtml;
    
    // 🔥 CRITICAL FIX: Remove ALL previous event listeners before attaching new ones
    const oldMenuBox = menuBox.cloneNode(true);
    menuBox.parentNode.replaceChild(oldMenuBox, menuBox);
    const freshMenuBox = document.getElementById('menu');
    
    // ✅ SOLUTION: Event Delegation Pattern (MOST RELIABLE)
    freshMenuBox.onclick = function(e) {
        // Find the closest .menu-item button
        const btn = e.target.closest('.menu-item');
        if (!btn) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        const isParent = btn.getAttribute('data-is-parent') === 'true';
        
        if (isParent) {
            const menuName = btn.getAttribute('data-parent-menu');
            console.log('🔵 Parent menu clicked:', menuName);
            state.active_parent_menu = state.active_parent_menu === menuName ? null : menuName;
            saveState();
            renderSidebar();
        } else {
            const menuText = btn.getAttribute('data-menu');
            console.log('✅ Menu clicked:', menuText, 'Role:', state.user_role);
            
            if(state.user_role === "admin") {
                state.menu_admin = menuText;
                console.log('📌 Setting state.menu_admin =', menuText);
            } else {
                state.menu_vendor = menuText;
                console.log('📌 Setting state.menu_vendor =', menuText);
            }
            
            saveState();
            console.log('💾 State saved, calling render()...');
            render();
        }
    };
    
    console.log('✅ Sidebar event delegation attached successfully');
}

// Login
function injectResponsiveCSS() {
  if (document.getElementById('responsive-css-injected')) return;
  const style = document.createElement('style');
  style.id = 'responsive-css-injected';
  style.textContent = `
    /* ===== RESPONSIVE BREAKPOINTS ===== */
    
    /* Mobile: < 640px */
    @media (max-width: 639px) {
      body { font-size: 13px; }
      #sidebar {
        position: fixed !important;
        left: -260px;
        top: 0; bottom: 0;
        width: 240px !important;
        z-index: 1000;
        transition: left 0.3s ease;
        overflow-y: auto;
      }
      body.sidebar-open #sidebar { left: 0 !important; }
      #sidebarToggle { display: flex !important; }
      #main, .main-wrap, #content { margin-left: 0 !important; padding: 8px !important; }
      .card { padding: 12px !important; margin-bottom: 12px !important; }
      .row { display: flex !important; flex-direction: column !important; gap: 8px !important; }
      .col, [style*="grid-column"] { width: 100% !important; grid-column: span 12 !important; }
      .form-grid { display: flex !important; flex-direction: column !important; gap: 8px !important; }
      .form-grid > * { width: 100% !important; }
      .span-1, .span-2, .span-3, .span-4, .span-5, .span-6,
      .span-7, .span-8, .span-9, .span-10, .span-11, .span-12 {
        grid-column: span 12 !important;
      }
      .rekap-wrap { overflow-x: auto !important; -webkit-overflow-scrolling: touch; }
      .table { font-size: 11px !important; }
      .table th, .table td { padding: 4px 6px !important; white-space: nowrap; }
      .cal-grid { grid-template-columns: repeat(7, 1fr) !important; gap: 2px !important; }
      .cal-cell { padding: 4px 2px !important; font-size: 10px !important; }
      .cal-cell .labels { font-size: 8px !important; }
      .btn { padding: 6px 10px !important; font-size: 12px !important; }
      .main-header h3 { font-size: 1rem !important; }
      .stat-card { padding: 10px !important; }
      .stat-num { font-size: 1.5rem !important; }
      /* Topbar */
      #topbar, .topbar { flex-wrap: wrap; gap: 4px; padding: 6px 8px !important; }
      /* Login page mobile */
      #container { min-height: 100vh; }
      .form-container { padding: 20px !important; }
      /* FG Dashboard */
      .fg-table-wrapper { overflow-x: auto; -webkit-overflow-scrolling: touch; }
      .fg-table { font-size: 10px !important; }
      .fg-table th, .fg-table td { padding: 3px 4px !important; white-space: nowrap; }
      /* Recon Summary grid */
      [style*="grid-template-columns: repeat(3, 1fr)"] { 
        grid-template-columns: 1fr !important; 
      }
    }

    /* Tablet: 640px - 1023px */
    @media (min-width: 640px) and (max-width: 1023px) {
      body { font-size: 13px; }
      #sidebar { width: 200px !important; }
      .main-header h3 { font-size: 1.1rem !important; }
      .row { flex-wrap: wrap; }
      .col[style*="span 3"], .col[style*="span 4"] { min-width: 45%; }
      .form-grid { grid-template-columns: repeat(6, 1fr) !important; }
      .span-1 { grid-column: span 2 !important; }
      .span-2 { grid-column: span 2 !important; }
      .span-3 { grid-column: span 3 !important; }
      .span-4 { grid-column: span 6 !important; }
      .span-5 { grid-column: span 6 !important; }
      .span-6 { grid-column: span 6 !important; }
      .span-12 { grid-column: span 12 !important; }
      .rekap-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
      .table { font-size: 11px; }
      .cal-cell { padding: 4px !important; font-size: 10px !important; }
      .cal-cell .labels { font-size: 8px !important; }
      /* Recon Summary */
      [style*="grid-template-columns: repeat(3, 1fr)"] {
        grid-template-columns: repeat(1, 1fr) !important;
      }
      /* Stat cards */
      .stat-num { font-size: 1.6rem !important; }
      /* FG Dashboard */
      .fg-table-wrapper { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    }

    /* Small laptop: 1024px - 1279px */
    @media (min-width: 1024px) and (max-width: 1279px) {
      #sidebar { width: 210px !important; }
      .rekap-wrap { overflow-x: auto; }
      .table { font-size: 12px; }
      .cal-cell .labels { font-size: 9px !important; }
      [style*="grid-template-columns: repeat(3, 1fr)"] {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }

    /* ===== GENERAL RESPONSIVE HELPERS ===== */
    * { box-sizing: border-box; }
    
    img, video, iframe { max-width: 100%; height: auto; }
    
    /* Horizontal scroll untuk tabel besar */
    .rekap-wrap, .table-wrap, .fg-table-wrapper {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    
    /* Prevent text overflow */
    .main-header h3 { word-break: break-word; }

    /* Sidebar overlay for mobile */
    @media (max-width: 639px) {
      body.sidebar-open::after {
        content: '';
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.5);
        z-index: 999;
      }
    }

    /* Touch-friendly buttons on mobile */
    @media (max-width: 639px) {
      .btn, button { min-height: 36px; }
      input[type="date"], input[type="time"], select, .input { 
        font-size: 16px !important; /* Prevents iOS zoom */
      }
    }
  `;
  document.head.appendChild(style);

  // Mobile sidebar toggle: click overlay closes sidebar
  document.addEventListener('click', function(e) {
    if (window.innerWidth < 640) {
      const sidebar = document.getElementById('sidebar');
      const toggle = document.getElementById('sidebarToggle');
      if (sidebar && document.body.classList.contains('sidebar-open')) {
        if (!sidebar.contains(e.target) && toggle && !toggle.contains(e.target)) {
          document.body.classList.remove('sidebar-open');
        }
      }
    }
  });

  // Update sidebarToggle behavior for mobile
  const toggle = document.getElementById('sidebarToggle');
  if (toggle) {
    const origOnclick = toggle.onclick;
    toggle.onclick = function(e) {
      if (window.innerWidth < 640) {
        document.body.classList.toggle('sidebar-open');
      } else {
        if (origOnclick) origOnclick.call(this, e);
        else {
          const collapsed = document.body.classList.toggle("sidebar-collapsed");
          toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
        }
      }
    };
  }
}

function renderLogin(){
  injectResponsiveCSS();
  document.body.classList.remove('login-only');
  document.body.classList.add('login-page');
  document.documentElement.classList.remove('pre-login'); // ✅ Remove pre-login class

  content.innerHTML = `
    <div class="container right-panel-active" id="container">
        
        <div class="form-container sign-up-container">
            <form action="#" id="adminLoginForm">
                <input type="email" id="login_user_admin" placeholder="Email" required />
                <input type="password" id="login_pass_admin" placeholder="Password" required />
                
                <select id="admin_role_select" style="width:100%; padding:10px; margin:10px 0; border:1px solid #ddd; border-radius:8px; font-family:inherit;">
                    <option value="Trucking Planner">🚛 Trucking Planner</option>
                    <option value="Finished Good">📊 Finished Good</option>
                </select>
                
                <button type="submit" style="margin-top: 10px;">Login</button>
            </form>
        </div>

        <div class="form-container sign-in-container">
            <form action="#" id="vendorLoginForm">
                <input type="email" id="login_user_vendor" placeholder="Email" required />
                <input type="password" id="login_pass_vendor" placeholder="Password" required />
                <button type="submit" style="margin-top: 10px;">Login</button>
            </form>
        </div>

        <div class="overlay-container">
            <div class="overlay">
                
                <div class="overlay-panel overlay-left">
                    <h1>Welcome, Admin!</h1>
                    <p>Masukkan detail Anda untuk mengakses dashboard</p>
                    <button class="ghost" id="signIn">Login sebagai Vendor?</button>
                </div>

                <div class="overlay-panel overlay-right">
                    <h1>Welcome, Vendor!</h1>
                    <p>Masukkan detail Anda untuk mengakses portal</p>
                    <button class="ghost" id="signUp">Login sebagai Admin?</button>
                </div>

            </div>
        </div>
    </div>
  `;

  // 3. Menambahkan logika animasi dari file script.js baru Anda
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  if(signUpButton) {
    signUpButton.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add('right-panel-active');
    });
  }
  
  if(signInButton) {
    signInButton.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove('right-panel-active');
    });
  }

  // 4. Menghubungkan logika otentikasi (dari app.js lama) ke DUA tombol login baru
  
  // Helper fungsi untuk pengecekan login (diambil dari app.js lama)
  const attemptLogin = (username, password, expectedRole, selectedSubRole = null) => {
    const u = username.trim();
    const acc = ACCOUNTS[u]; // ACCOUNTS dari scope global app.js
    if(acc && acc.password === password && acc.role === expectedRole){
      state.authenticated = true;
      state.username = u;
      state.user_role = acc.role;
      state.vendor_name = acc.vendor || null;
      
      // ✅ BARU: Set sub-role langsung dari pilihan di login (khusus Admin)
      if(expectedRole === 'admin' && selectedSubRole) {
        state.admin_sub_role = selectedSubRole;
      }
      
      // Hapus class login setelah berhasil
      document.body.classList.remove('login-page'); 
      
      saveState(); 
      render();
    } else {
      toast("Login gagal. Cek email, password, atau role Anda.");
    }
  };

  // Listener untuk form login Admin
  const adminForm = document.getElementById('adminLoginForm');
  if(adminForm) {
    adminForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const u = document.getElementById('login_user_admin').value;
      const p = document.getElementById('login_pass_admin').value;
      const selectedRole = document.getElementById('admin_role_select').value; // ✅ AMBIL ROLE PILIHAN
      attemptLogin(u, p, 'admin', selectedRole); // ✅ KIRIM ROLE KE FUNGSI LOGIN
    });
  }

  // Listener untuk form login Vendor
  const vendorForm = document.getElementById('vendorLoginForm');
  if(vendorForm) {
    vendorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const u = document.getElementById('login_user_vendor').value;
      const p = document.getElementById('login_pass_vendor').value;
      attemptLogin(u, p, 'vendor');
    });
  }

  }


// Helpers
function monthMatrix(year, month){
  const first = new Date(year, month-1, 1);
  let startOffset = first.getDay();
  startOffset = (startOffset===0) ? 6 : startOffset-1;
  const daysInMonth = new Date(year, month, 0).getDate();
  const rows = [];
  let week = new Array(7).fill(0);
  let day = 1;
  for(let i=0;i<startOffset;i++) week[i]=0;
  for(let i=startOffset;i<7;i++) week[i]=day++;
  rows.push(week);
  while(day<=daysInMonth){
    week = new Array(7).fill(0);
    for(let i=0;i<7 && day<=daysInMonth;i++){
      week[i]=day++;
    }
    rows.push(week);
  }
  return rows;
}
function sumAvailForDate(dateStr){
  const data = state.availability[dateStr] || {};
  let total20 = 0, total40 = 0, totalCombo = 0;
  for(const v of Object.keys(data)){
    total20 += Number(data[v]["20ft"]||0);
    total40 += Number(data[v]["40ft/HC"]||0);
    totalCombo += Number(data[v]["Combo"]||0);
  }
  return {total20, total40, totalCombo, totalAll: total20 + total40 + totalCombo};
}
function updateOrderSummary(orderId){
  const items = state.containers[orderId] || [];
  let acc=0, rej=0, pen=0;
  for(const r of items){
    if(r.accept===true) acc++; else if(r.accept===false) rej++; else pen++;
  }
  let status="Pending";
  if(pen===0 && acc>0 && rej===0) status="Accepted";
  else if(pen===0 && rej>0 && acc===0) status="Rejected";
  else if(pen===0 && acc>0 && rej>0) status="Partial";
  else if(pen>0 && acc>0 || pen>0 && rej>0) status="Partial";
  else if(rej > 0 && acc === 0 && pen === 0) status="Rejected";
  else if(pen > 0 && acc === 0 && rej === 0) status="Pending";

  const o = state.orders.find(x=>x.order_id===orderId);
  if(o){ o.summary_status = status; saveState(); }
}
function attachFile(orderId, key, file){
  const reader = new FileReader();
  reader.onload = () => {
    state.attachments[orderId] = state.attachments[orderId] || {};
    state.attachments[orderId][key] = {name:file.name, dataUrl:reader.result};
    
    const order = state.orders.find(x=>x.order_id===orderId);
    if (order) {
        const fileType = key === 'booking_confirmation' ? 'BC' : 'SI';
        const newNotif = {
            id: genId("NOTIF"),
            message: `Admin telah mengunggah ${fileType} untuk DN ${order.no_dn.join(' & ')}.`,
            timestamp: new Date().toISOString(),
            isRead: false,
            role: 'vendor',
            targetVendor: order.vendor,
            relatedOrder: orderId,
            link: 'Orderan'
        };
        state.notifications.push(newNotif);
    }
    
    saveState(); render();
    toast(`${key==='booking_confirmation'?'BC':'SI'} tersimpan.`);
  };
  reader.readAsDataURL(file);
}
function downloadDataUrl(name, dataUrl){
  const a = document.createElement("a");
  a.href = dataUrl; a.download = name; a.click();
}
// ====================================================================
// --- GLOBAL FUNCTION: FINISHED GOOD LOGOUT ---
// ====================================================================
function handleFGLogout() {
  console.log('🔴 FG Logout triggered');
  
  if (!confirm('Yakin ingin logout?')) {
    console.log('❌ User cancelled logout');
    return;
  }
  
  console.log('✅ User confirmed logout');
  
  // Clear timers
  try {
    if (typeof fgRefreshTimer !== 'undefined' && fgRefreshTimer) {
      clearInterval(fgRefreshTimer);
      console.log('✅ Refresh timer cleared');
    }
  } catch(e) {
    console.warn('⚠️ Error clearing refresh timer:', e);
  }
  
  try {
    if (typeof fgClockTimer !== 'undefined' && fgClockTimer) {
      clearInterval(fgClockTimer);
      console.log('✅ Clock timer cleared');
    }
  } catch(e) {
    console.warn('⚠️ Error clearing clock timer:', e);
  }
  
  // Reset state
  state = Object.assign({}, defaultState, {
    authenticated: false,
    user_role: null,
    username: null,
    admin_sub_role: null
  });
  
  saveState();
  console.log('✅ State reset, redirecting to login...');
  
  // Force render
  setTimeout(() => {
    render();
  }, 100);
}
// ====================================================================
// --- END: FINISHED GOOD LOGOUT ---
// ====================================================================
function sendEmailToVendor(orderId) {
    const order = state.orders.find(x => x.order_id === orderId);
    if (!order) {
        toast("Order tidak ditemukan.");
        return;
    }

    // ✅ VALIDASI: Pastikan ada container yang sudah di-accept
    const acceptedContainers = (state.containers[orderId] || []).filter(c => c.accept === true);
    if (acceptedContainers.length === 0) {
        toast("⚠️ Belum ada container yang di-accept untuk order ini!");
        return;
    }

    // ✅ EMKL Email Directory
    const EMKL_EMAILS = {
        "PT Tangguh Karimata Jaya": "adhika@tangguh.co.id;kevin@tangguh.co.id;rudi@tangguh.co.id",
        "PT Trisindo": "joe@trisindo.com;trisno@trisindo.com;admin_tpc@trisindo.com",
        "PT Glory Bahana Universal": "inggridtania@gbulogistics.biz;budianto@gbulogistics.biz;gbudocs@gbulogistics.biz;gbudocs2@gbulogistics.biz;gekko1689@gmail.com;hendra.storage@gmail.com;trucking.himalaya@gmail.com",
        "PT Lintas Marindo Nusantara": "Hsn@pt-lmn.com;Finance@pt-lmn.com;Marketing@pt-lmn.com;faizalrizkys15@gmail.com",
        "PT Elang Transportasi Indonesia": "nanda@elangtransport.com;cima@elangtransport.com;cs.elangtransport@gmail.com;Rakhmat2202@gmail.com;Arjunrama21042001@gmail.com;rizky.aulia@elangtransport.com",
        "PT Cakraindo Mitra International": "Hielda@cakraindo.com;Trucking.jkt@cakraindo.com;Idham@cakraindo.com;Hanafi@cakraindo.com;Invoice.jkt2@cakraindo.com;Santi@cakraindo.com;Retno@cakraindo.com;Ricoketaren80@gmail.com;raz.200620@gmail.com;Yessica@cakraindo.com",
        "PT Inti Persada Mandiri": "danielp@ipm.co.id;danielparapat89@yahoo.com;ops.ipm007@gmail.com;admin.export@ipm.co.id",
        "PT Bimaruna Jaya": "indra.goon@gmail.com;tubagusindra@korindo.co.id;indragunawanbimaruna@gmail.com;rachmat.kurniawan@korindo.co.id;ipoenkrch@gmail.com"
    };

    const vendorEmailTo = EMKL_EMAILS[order.vendor];
    if (!vendorEmailTo) {
        toast(`⚠️ Email untuk EMKL ${order.vendor} tidak ditemukan di direktori.`);
        return;
    }

    // ✅ Format tanggal stuffing (DD-MM-YYYY)
    const formatDate = (isoDate) => {
        if (!isoDate) return '-';
        const date = parseISODate(isoDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    // ✅ Hitung jumlah container accepted per size untuk PTY
    const count20ft = acceptedContainers.filter(c => c.size === '20ft').length;
    const count40ft = acceptedContainers.filter(c => c.size === '40ft/HC').length;
    const countCombo = acceptedContainers.filter(c => c.size === 'Combo').length;
    const ptyParts = [];
    if (count20ft > 0) ptyParts.push(`20ft: ${count20ft}`);
    if (count40ft > 0) ptyParts.push(`40ft: ${count40ft}`);
    if (countCombo > 0) ptyParts.push(`Combo: ${countCombo}`);
    const ptyDisplay = ptyParts.length > 0 ? ptyParts.join(', ') : '-';

    // ✅ Data email
    const dnList = order.no_dn.join(', ');
    const to = vendorEmailTo;
    const cc = "Adek_Sari@app.co.id;Andhika_Pramana@app.co.id;Rizky_Ritonga@app.co.id;Okky_Nurwidodo@app.co.id";
    const subject = `BC SI - DN ${dnList} - ${order.vendor}`;

    const body = `Dear team ${order.vendor},

Berikut kami lampirkan BC dan SI untuk proses pembuatan LOLO untuk order berikut dari Indah Kiat Karawang:

DN: ${dnList}
DO: ${order.do || '-'}
Tanggal Stuffing: ${formatDate(order.tgl_stuffing)}
PTY: ${ptyDisplay}
Destination: ${order.pod || '-'}
Location/Shipping Point: ${order.shipping_point || '-'}

Thank You`;

    // ✅ Buka Outlook via mailto
    const mailtoLink = `mailto:${encodeURIComponent(to)}?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    // ✅ Notifikasi ke admin
    state.notifications.push({
        id: genId("NOTIF"),
        message: `Email BC/SI untuk DN ${dnList} dibuka di Outlook untuk ${order.vendor}.`,
        timestamp: new Date().toISOString(),
        isRead: false,
        role: 'admin',
        relatedOrder: orderId
    });

    toast(`📧 Outlook dibuka! Jangan lupa attach file BC & SI secara manual.`);
    saveState();
}

const TERMINAL_OPTIONS = ["JICT", "NPCT", "KOJA", "TMAL", "IPC"];
function buildTerminalSelect(id, currentValue) {
    const options = TERMINAL_OPTIONS.map(opt => 
        `<option value="${opt}" ${opt === currentValue ? 'selected' : ''}>${opt}</option>`
    ).join('');
    return `<select id="${id}" class="input">${options}</select>`;
}


function buildRankTable(containerType, title, showDate) {
    const avail = state.availability[showDate] || {};

    // Hitung realisasi per vendor (container yang sudah di-accept, per tipe)
    function getRealisasi(vendorName, type) {
        let real = 0;
        state.orders
            .filter(o => o.vendor === vendorName && o.tgl_stuffing === showDate)
            .forEach(order => {
                const containers = state.containers[order.order_id] || [];
                const accepted = containers.filter(c => c.accept === true);
                if (type === '20ft') {
                    real += accepted.filter(c => c.size === '20ft').length;
                } else if (type === '40ft/HC') {
                    real += accepted.filter(c => c.size === '40ft/HC').length;
                    real += accepted.filter(c => c.size === 'Combo').length; // Combo masuk 40ft
                }
            });
        return real;
    }

    // Build full table mirip gambar: Rank | Transporter | Alokasi 20FT | Alokasi 40ft/HC | Ketersediaan 20FT | Ketersediaan 40ft/HC | Ketersediaan Combo | Sisa 20FT | Sisa 40ft/HC | Sisa Combo | Status 20FT | Status 40ft/HC
    if (containerType === '__FULL__') {
        // Full combined table - hanya tampilkan vendor yang sudah mengisi ketersediaan, urut sesuai rank
        const filteredRateData = RATE_TRANSPORTER_DATA.filter(item => {
            const vendorAvail = avail[item.name] || {};
            const ket20 = Number(vendorAvail['20ft'] || 0);
            const ket40 = Number(vendorAvail['40ft/HC'] || 0);
            const ketCombo = Number(vendorAvail['Combo'] || 0);
            return (ket20 + ket40 + ketCombo) > 0;
        });

        if (filteredRateData.length === 0) {
            return `<div class="small muted" style="padding:12px; text-align:center;">Belum ada EMKL yang mengisi ketersediaan untuk tanggal ini.</div>`;
        }

        const rows = filteredRateData.map((item, idx) => {
            const vendorAvail = avail[item.name] || {};
            const ket20 = Number(vendorAvail['20ft'] || 0);
            const ket40 = Number(vendorAvail['40ft/HC'] || 0);
            const ketCombo = Number(vendorAvail['Combo'] || 0);
            const alok20 = item['20FT'] || 0;
            const alok40 = (item['40FT'] || 0); // Combo masuk ke 40ft
            const real20 = getRealisasi(item.name, '20ft');
            const real40 = getRealisasi(item.name, '40ft/HC');
            const sisa20 = Math.max(0, alok20 - real20);
            // Sisa 40ft/HC dan Combo digabung
            const sisa40Combo = Math.max(0, alok40 - real40);
            const status20 = real20 >= alok20 && alok20 > 0 ? 'Done' : 'Not yet';
            const status40 = real40 >= alok40 && alok40 > 0 ? 'Done' : 'Not yet';
            const status20Color = status20 === 'Done' ? 'background:#22c55e;color:white;' : 'background:#ef4444;color:white;';
            const status40Color = status40 === 'Done' ? 'background:#22c55e;color:white;' : 'background:#ef4444;color:white;';
            return `<tr>
                <td style="text-align:center; font-weight:600;">${item.rank}</td>
                <td style="text-align:center; font-weight:500;">${item.name}</td>
                <td style="text-align:center; background:#fef9c3;">${alok20 || ''}</td>
                <td style="text-align:center; background:#fef9c3;">${alok40 || ''}</td>
                <td style="text-align:center; background:#dcfce7;">${ket20 || ''}</td>
                <td style="text-align:center; background:#dcfce7;">${ket40 || ''}</td>
                <td style="text-align:center; background:#dcfce7;">${ketCombo || ''}</td>
                <td style="text-align:center; background:#f3f4f6;">${sisa20 || ''}</td>
                <td style="text-align:center; background:#f3f4f6;">${sisa40Combo || ''}</td>
                <td style="text-align:center; padding:2px 4px;"><span style="display:inline-block;padding:2px 10px;border-radius:4px;font-weight:700;font-size:11px;${status20Color}">${status20}</span></td>
                <td style="text-align:center; padding:2px 4px;"><span style="display:inline-block;padding:2px 10px;border-radius:4px;font-weight:700;font-size:11px;${status40Color}">${status40}</span></td>
            </tr>`;
        });

        // Total row (hanya dari vendor yang tampil)
        const tot20 = filteredRateData.reduce((s, i) => s + (i['20FT'] || 0), 0);
        const tot40 = filteredRateData.reduce((s, i) => s + (i['40FT'] || 0), 0);
        const totKet20 = filteredRateData.reduce((s, i) => s + Number((avail[i.name] || {})['20ft'] || 0), 0);
        const totKet40 = filteredRateData.reduce((s, i) => s + Number((avail[i.name] || {})['40ft/HC'] || 0), 0);
        const totKetCombo = filteredRateData.reduce((s, i) => s + Number((avail[i.name] || {})['Combo'] || 0), 0);

        return `
        <div class="table-wrap" style="overflow-x:auto;">
          <table class="table" style="border-collapse:collapse; min-width:700px; font-size:12px;">
            <thead>
              <tr>
                <th rowspan="2" style="text-align:center; border:1px solid #d1d5db; background:#f9fafb;">Rank</th>
                <th rowspan="2" style="text-align:center; border:1px solid #d1d5db; background:#f9fafb;">Transporter</th>
                <th colspan="2" style="text-align:center; border:1px solid #d1d5db; background:#fef08a; color:#713f12;">Alokasi</th>
                <th colspan="3" style="text-align:center; border:1px solid #d1d5db; background:#bbf7d0; color:#14532d;">Ketersediaan</th>
                <th colspan="2" style="text-align:center; border:1px solid #d1d5db; background:#e5e7eb; color:#374151;">Sisa</th>
                <th colspan="2" style="text-align:center; border:1px solid #d1d5db; background:#f9fafb; color:#374151;">Status</th>
              </tr>
              <tr>
                <th style="text-align:center; border:1px solid #d1d5db; background:#fef9c3; font-size:11px;">20FT</th>
                <th style="text-align:center; border:1px solid #d1d5db; background:#fef9c3; font-size:11px;">40ft/HC</th>
                <th style="text-align:center; border:1px solid #d1d5db; background:#dcfce7; font-size:11px;">20FT</th>
                <th style="text-align:center; border:1px solid #d1d5db; background:#dcfce7; font-size:11px;">40ft/HC</th>
                <th style="text-align:center; border:1px solid #d1d5db; background:#dcfce7; font-size:11px;">Combo</th>
                <th style="text-align:center; border:1px solid #d1d5db; background:#f3f4f6; font-size:11px;">20FT</th>
                <th style="text-align:center; border:1px solid #d1d5db; background:#f3f4f6; font-size:11px;">40ft/HC & Combo</th>
                <th style="text-align:center; border:1px solid #d1d5db; background:#f9fafb; font-size:11px;">20FT</th>
                <th style="text-align:center; border:1px solid #d1d5db; background:#f9fafb; font-size:11px;">40ft/HC</th>
              </tr>
            </thead>
            <tbody>
              ${rows.join('')}
            </tbody>
            <tfoot>
              <tr style="font-weight:700; background:#f9fafb;">
                <td colspan="2" style="text-align:center; border:1px solid #d1d5db; padding:6px;">TOTAL</td>
                <td style="text-align:center; border:1px solid #d1d5db; background:#fef9c3;">${tot20}</td>
                <td style="text-align:center; border:1px solid #d1d5db; background:#fef9c3;">${tot40}</td>
                <td style="text-align:center; border:1px solid #d1d5db; background:#dcfce7;">${totKet20}</td>
                <td style="text-align:center; border:1px solid #d1d5db; background:#dcfce7;">${totKet40}</td>
                <td style="text-align:center; border:1px solid #d1d5db; background:#dcfce7;">${totKetCombo}</td>
                <td style="text-align:center; border:1px solid #d1d5db; background:#f3f4f6;">0</td>
                <td style="text-align:center; border:1px solid #d1d5db; background:#f3f4f6;">0</td>
                <td style="text-align:center; border:1px solid #d1d5db; background:#000;"></td>
                <td style="text-align:center; border:1px solid #d1d5db; background:#000;"></td>
              </tr>
            </tfoot>
          </table>
        </div>
        `;
    }

    // Fallback untuk panggilan individual (backward compat) - tidak dipakai di modal baru
    const rankedList = RATE_TRANSPORTER_DATA
        .map(item => {
            const ketersediaan = Number(avail[item.name] ? (avail[item.name][containerType] || 0) : 0);
            let alokasi = 0;
            if (containerType === "20ft") {
                alokasi = item['20FT'] || 0;
            } else if (containerType === "40ft/HC") {
                alokasi = item['40FT'] || 0;
            } else if (containerType === "Combo") {
                alokasi = item['40FT'] || 0; // Combo masuk ke 40ft
            }
            return { 
                rank: item.rank, 
                name: item.name, 
                ketersediaan: ketersediaan,
                alokasi: alokasi,
                alokasiPersen: item.alokasi || '0%'
            };
        })
        .filter(item => item.ketersediaan > 0);

    rankedList.sort((a, b) => a.rank - b.rank);
    
    let rowsHtml = "";
    
    rankedList.forEach(item => {
        rowsHtml += `<tr>
                        <td style="width: 80px; text-align: center;">TOP ${item.rank}</td>
                        <td style="text-align: left; font-weight: 500;">${item.name}</td>
                        <td style="text-align: center; width: 100px; font-weight: 600; color: var(--blue-2);">${item.alokasi}</td>
                        <td style="text-align: center; width: 120px;">${item.ketersediaan}</td>
                        <td style="text-align: center; width: 100px;">
                            <button class="btn secondary tiny" data-prefill="${item.name}">Order</button>
                        </td>
                    </tr>`;
    });

    if (rankedList.length === 0) {
        return `<h4 style="margin: 10px 0 5px 0;">${title}</h4><div class="small muted" style="padding: 10px; border: 1px solid var(--border); border-radius: 8px; background: #f9fafb;">Tidak ada EMKL yang mengisi ketersediaan untuk jenis ${title} ini.</div>`;
    }

    return `
        <h4 style="margin: 10px 0 5px 0;">${title}</h4>
        <div class="table-wrap no-scroll-internal">
          <table class="table">
              <thead>
                  <tr>
                      <th style="width: 80px;">Rank</th>
                      <th>EMKL</th>
                      <th style="text-align: center; width: 100px; background: #fef3c7; color: #92400e;">Alokasi</th>
                      <th style="text-align: center; width: 120px;">Ketersediaan</th>
                      <th style="text-align: center; width: 100px;">Aksi</th>
                  </tr>
              </thead>
              <tbody>
                  ${rowsHtml}
              </tbody>
          </table>
        </div>
    `;
}

// ✅ NEW FUNCTION: Get allocation data untuk tracking
function getVendorAllocationData(vendorName) {
    const vendorData = RATE_TRANSPORTER_DATA.find(v => v.name === vendorName);
    if (!vendorData) {
        return {
            alokasi20: 0, alokasi40: 0, alokasiPersen: '0%',
            realisasi20: 0, realisasi40: 0,
            sisa20: 0, sisa40: 0,
            persentase20: 0, persentase40: 0,
            status20: 'unknown', status40: 'unknown'
        };
    }
    
    const alokasi20 = vendorData['20FT'] || 0;
    // 40ft/HC & Combo gabung: alokasi40 = 40FT + (Combo jika ada, tapi di data ini Combo tidak punya kolom sendiri)
    const alokasi40 = vendorData['40FT'] || 0;
    
    // Hitung realisasi (sudah ACCEPT)
    let realisasi20 = 0;
    let realisasi40 = 0;
    
    state.orders
        .filter(o => o.vendor === vendorName)
        .forEach(order => {
            const containers = state.containers[order.order_id] || [];
            const acceptedContainers = containers.filter(c => c.accept === true);
            
            // Realisasi 20ft = 20ft Normal saja
            realisasi20 += acceptedContainers.filter(c => c.size === '20ft').length;
            
            // Realisasi 40ft/HC & Combo = 40ft/HC + Combo (gabung ke sini)
            realisasi40 += acceptedContainers.filter(c => c.size === '40ft/HC').length;
            realisasi40 += acceptedContainers.filter(c => c.size === 'Combo').length;
        });
    
    // SISA = Realisasi - Alokasi (bisa negatif jika melebihi alokasi, atau positif jika kurang)
    const sisa20 = realisasi20 - alokasi20;
    const sisa40 = realisasi40 - alokasi40;
    
    const persentase20 = alokasi20 > 0 ? Math.round((realisasi20 / alokasi20) * 100) : 0;
    const persentase40 = alokasi40 > 0 ? Math.round((realisasi40 / alokasi40) * 100) : 0;
    
    const getStatus = (persen) => {
        if (persen >= 100) return 'success';
        if (persen >= 80) return 'warning';
        return 'danger';
    };
    
    return {
        alokasi20, alokasi40, 
        alokasiPersen: vendorData.alokasi || '0%',
        realisasi20, realisasi40,
        sisa20, sisa40,
        persentase20, persentase40,
        status20: getStatus(persentase20),
        status40: getStatus(persentase40)
    };
}

function getStatusBadgeClass(status) {
    if (status === 'success') return 'badge-success';
    if (status === 'warning') return 'badge-warning';
    if (status === 'danger') return 'badge-danger';
    return '';
}

function getStatusBadgeText(status) {
    if (status === 'success') return '✓ Memenuhi';
    if (status === 'warning') return '⚠ Mendekati';
    if (status === 'danger') return '✗ Belum';
    return '-';
}
/* ===================== ADMIN: HOME (Kalender) ===================== */

function showStatusDetailsModal(status, filterDate = '') {
    const targetStatus = status.toLowerCase();
    const filteredContainers = [];
    
    for (const orderId in state.containers) {
        const order = state.orders.find(o => o.order_id === orderId);
        if (!order) continue;

        // ✅ FIX: Filter by date jika ada (TODAY vs YESTERDAY)
        if (filterDate && order.tgl_stuffing !== filterDate) continue;

        (state.containers[orderId] || []).forEach(c => {
            const currentStatus = (c.status || 'Confirm Order').toLowerCase();
            const containerIsRelevant = (
                (targetStatus === 'pending' && (c.accept === null)) ||
                (targetStatus === 'reject' && c.accept === false) ||
                (targetStatus !== 'pending' && targetStatus !== 'reject' && c.accept === true && currentStatus === targetStatus) ||
                (targetStatus === 'confirm order' && c.accept === true && currentStatus === 'confirm order')
            );

            if (containerIsRelevant) {
                let displayStatus;
                if (targetStatus === 'pending' && c.accept === null) {
                    displayStatus = 'Pending Respon';
                } else if (targetStatus === 'reject' && c.accept === false) {
                    displayStatus = 'Rejected';
                } else {
                    displayStatus = c.status || 'Confirm Order';
                }
                
                filteredContainers.push({
                    dn: (order.no_dn || []).join(' / '),
                    vendor: order.vendor,
                    size: c.size,
                    containerNo: c.no_container || '-',
                    status: displayStatus,
                    noMobil: c.no_mobil || '-'
                });
            }
        });
    }

    if (filteredContainers.length === 0) {
        toast(`Tidak ada kontainer dengan status '${status}'${filterDate ? ` pada tanggal ${formatDisplayDate(filterDate)}` : ''}.`);
        return;
    }

    const renderRows = (data) => data.map((r, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${r.dn}</td>
            <td>${r.vendor}</td>
            <td>${r.size}</td>
            <td>${r.containerNo}</td>
            <td>${r.noMobil}</td>
            <td style="font-weight:700; color: ${r.status.toLowerCase().includes('reject') || r.status.toLowerCase().includes('Repo') ? 'var(--red)' : 'var(--ink)'};">${r.status}</td>
        </tr>
    `).join('');

    const modalTitle = `Detail Status: ${status}${filterDate ? ` — ${formatDisplayDate(filterDate)}` : ''}`;
    const modalHtml = `
        <div style="margin-bottom:10px;">
            <input id="statusSearchDN" class="input" placeholder="🔍 Cari Delivery Number..." style="width:100%; box-sizing:border-box;">
        </div>
        <div class="table-wrap" style="max-height: 55vh; overflow-y: auto;">
            <table class="table compact" style="width: 100%;">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>DN</th>
                        <th>EMKL</th>
                        <th>Size</th>
                        <th>Container No.</th>
                        <th>Plat Mobil</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="statusModalTbody">
                    ${renderRows(filteredContainers)}
                </tbody>
            </table>
        </div>
    `;
    
    openModal(modalTitle, modalHtml);

    // ✅ Search by DN
    setTimeout(() => {
        const searchInput = document.getElementById('statusSearchDN');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const keyword = searchInput.value.trim().toLowerCase();
                const filtered = keyword
                    ? filteredContainers.filter(r => r.dn.toLowerCase().includes(keyword))
                    : filteredContainers;
                const tbody = document.getElementById('statusModalTbody');
                if (tbody) tbody.innerHTML = renderRows(filtered);
            });
        }
    }, 100);
}


function buildStatusDashboardInner(filterDate = null){
  const counts = {};
  const displayStatuses = ["Pending", "Confirm Order", "Reject", "Muat Depo", "muat gudang", "Repo", "gate in port"];
  displayStatuses.forEach(s => counts[s] = 0);
  
  for (const oid in state.containers){
    // ✅ FILTER: Jika ada filterDate, hanya hitung order dengan tgl_stuffing yang sesuai
    if (filterDate) {
      const order = state.orders.find(o => o.order_id === oid);
      if (!order || order.tgl_stuffing !== filterDate) {
        continue; // Skip order ini jika tanggalnya tidak sesuai
      }
    }
    
    const items = state.containers[oid] || [];
    
    items.forEach(r => {
        
        if (r.accept === null) {
             counts["Pending"]++;
             return;
        }

        if(r.accept === false) {
            counts["Reject"]++;
            return;
        }

        if(r.accept === true) {
            const savedStatus = (r.status || 'Confirm Order').toLowerCase();
            const correctKey = displayStatuses.find(k => k.toLowerCase() === savedStatus);

            if (correctKey && correctKey !== "Pending" && correctKey !== "Reject") {
                counts[correctKey] = (counts[correctKey] || 0) + 1;
            } else if (correctKey === "Confirm Order") {
                 counts["Confirm Order"] = (counts["Confirm Order"] || 0) + 1;
            }
        }
    });
  }

  let html = '<div class="row" id="dashboard-status-rows">';
  
  displayStatuses.forEach(s => {
      const val = counts[s] || 0;
      const displayStatus = s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      
      html += `
        <div class="col" style="grid-column: span 1.71;"> 
          <div class="stat-card" data-status-key="${displayStatus}" data-filter-date="${filterDate || ''}" style="${val > 0 ? 'border-color: var(--blue-2);' : ''}">
            <div class="stat-num">${val}</div>
            <div class="stat-label">${displayStatus}</div>
          </div>
        </div>`;
  });
  
  html += '</div>';
  return html;
}

function getFilteredPerformanceData(startDateStr, endDateStr){
    
    const startDate = startDateStr ? parseISODate(startDateStr) : new Date(0);
    const endDate = endDateStr ? parseISODate(endDateStr) : new Date(8640000000000000);
    
    const vendorPerformance = VENDORS_DEFAULT.map(v => {
        let acc = 0, rej = 0;
        
        // Filter orders based on Tgl Stuffing (order creation date is used as proxy)
        const relevantOrders = state.orders.filter(o => {
            const stuffingDate = parseISODate(o.tgl_stuffing);
            // Ignore time part for filtering
            return o.vendor === v && stuffingDate >= startDate && stuffingDate <= endDate;
        });

        relevantOrders.forEach(o => {
             (state.containers[o.order_id] || []).forEach(r => {
                // HANYA hitung kontainer yang sudah direspons (Accept atau Reject)
                if (r.accept === true) acc++;
                else if (r.accept === false) rej++;
            });
        });

        const total = acc + rej;
        const perf = total > 0 ? Math.round((acc / total) * 100) : 0;
        
        return { name: v, accept: acc, reject: rej, total: total, performa: perf };
    });
    
    return vendorPerformance;
}

function buildVendorPerformanceCard(isReportView = false, data = null){
    
    const finalData = data || getFilteredPerformanceData(null, null);

    let rows = finalData.map(item => {
        return `<tr>
          <td>${item.name}</td>
          <td class="center">${item.accept}</td>
          <td class="center">${item.reject}</td>
          <td class="perf-small center">${item.performa}%</td>
        </tr>`;
    }).join("");

    return {
        html: `
            <div class="card" style="padding: 0;">
              <div class="table-wrap no-scroll"> <table class="table small-table">
                  <thead>
                    <tr><th>EMKL</th><th class="center">Accept</th><th class="center">Reject</th><th class="center">Performa</th></tr>
                  </thead>
                  <tbody>${rows}</tbody>
                </table>
            </div>
            </div>`,
        data: finalData
    };
}


function getDnAndContainerCounts() {
    const todayISO = todayStr();
    const now = new Date();
    
    const count = { dn_today: 0, dn_monthly: 0, dn_overall: 0, cont_today: 0, cont_monthly: 0, cont_overall: 0, mt_today: 0, mt_weekly: 0, mt_monthly: 0 };

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(now.getMonth() - 1);
    oneMonthAgo.setHours(0, 0, 0, 0);

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);
    oneWeekAgo.setHours(0, 0, 0, 0);

    const dnFinal = { today: new Set(), monthly: new Set(), overall: new Set() };
    let processedContainers = { today: 0, monthly: 0, overall: 0 }; 

    state.orders.forEach(order => {
        const createdAt = order.created_at ? new Date(order.created_at) : parseISODate(order.tgl_stuffing);
        const orderDateISO = toISODate(createdAt);
        const dnKey = order.order_id; 

        dnFinal.overall.add(dnKey);
        if (createdAt >= oneMonthAgo) dnFinal.monthly.add(dnKey);
        if (orderDateISO === todayISO) dnFinal.today.add(dnKey);

        // Count MT = NW proporsional: (NW outstanding / total partie outstanding) × jumlah order
        const containers = state.containers[order.order_id] || [];
        const hasAccepted = containers.some(c => c.accept === true);
        if (hasAccepted) {
            const dns = order.no_dn || [];
            let orderNW = 0;
            dns.forEach(dn => {
                const outData = getDataFromOutstanding(String(dn).trim());
                const totalNW = Number(outData.nw || 0);
                const partieOut20 = Number(outData.partie20 || 0);
                const partieOut40 = Number(outData.partie40 || 0);
                const totalPartieOut = partieOut20 + partieOut40;

                if (totalNW > 0 && totalPartieOut > 0) {
                    const nwPerUnit = totalNW / totalPartieOut;
                    const ordered = Number(order.jml_20ft || 0) + Number(order.jml_40ft || 0) + Number(order.jml_combo || 0);
                    orderNW += nwPerUnit * ordered;
                }
            });
            if (orderNW > 0) {
                count.mt_monthly += orderNW;
                if (createdAt >= oneWeekAgo) count.mt_weekly += orderNW;
                if (orderDateISO === todayISO) count.mt_today += orderNW;
            }
        }

        containers.forEach(container => {
            processedContainers.overall++;
            if (createdAt >= oneMonthAgo) {
                processedContainers.monthly++;
            }
            if (orderDateISO === todayISO) {
                processedContainers.today++;
            }
        });
    });
    
    count.dn_today = dnFinal.today.size;
    count.dn_monthly = dnFinal.monthly.size;
    count.cont_today = processedContainers.today;
    count.cont_monthly = processedContainers.monthly;
    count.cont_overall = processedContainers.overall;
    count.dn_overall = dnFinal.overall.size;

    return count;
}


function buildCountDashboard() {
    const counts = getDnAndContainerCounts();

    const buildCountCard = (type, title, accent, rows) => `
        <div style="background:#ffffff; border-radius:12px; border:1px solid #e8ecf0; box-shadow:0 1px 4px rgba(0,0,0,0.06); width:100%; height:240px; box-sizing:border-box; display:flex; flex-direction:column; overflow:hidden; margin:0; padding:0;">
          <div style="height:44px; min-height:44px; max-height:44px; box-sizing:border-box; padding:0 16px; border-bottom:1px solid #f0f2f5; display:flex; align-items:center; gap:8px;">
            <div style="width:3px; height:16px; background:${accent}; border-radius:2px; flex-shrink:0;"></div>
            <span style="font-size:0.82rem; font-weight:800; color:#1e293b; text-transform:uppercase; letter-spacing:1px;">${title}</span>
          </div>
          <div style="height:176px; box-sizing:border-box; padding:8px 12px; display:flex; flex-direction:column; gap:5px;">
            ${rows.map(({label, periodKey, value}) => `
              <div class="count-clickable" data-count-type="${type}" data-count-period="${periodKey}"
                style="display:flex; align-items:center; justify-content:space-between; padding:0 14px; border-radius:8px; cursor:pointer; transition:background 0.15s; background:#f8fafc; border:1px solid #edf0f3; height:52px; min-height:52px; max-height:52px; box-sizing:border-box; flex-shrink:0;"
                onmouseover="this.style.background='#f0f7ff'; this.style.borderColor='${accent}40';"
                onmouseout="this.style.background='#f8fafc'; this.style.borderColor='#edf0f3';">
                <div style="display:flex; align-items:center; gap:8px;">
                  <div style="width:7px; height:7px; border-radius:50%; background:${accent}; flex-shrink:0;"></div>
                  <span style="font-size:0.88rem; font-weight:700; color:#374151;">${label}</span>
                </div>
                <span style="font-size:1.6rem; font-weight:900; color:${accent}; line-height:1;">${value}</span>
              </div>
            `).join('')}
          </div>
        </div>
    `;

    return `
        <div style="margin:16px; display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px;">
          ${buildCountCard('dn', 'Count DN', '#2563eb', [
            {label:'Today', periodKey:'today', value: counts.dn_today},
            {label:'Monthly', periodKey:'monthly', value: counts.dn_monthly},
            {label:'Overall', periodKey:'overall', value: counts.dn_overall}
          ])}
          ${buildCountCard('cont', 'Count Container', '#0891b2', [
            {label:'Today', periodKey:'today', value: counts.cont_today},
            {label:'Monthly', periodKey:'monthly', value: counts.cont_monthly},
            {label:'Overall', periodKey:'overall', value: counts.cont_overall}
          ])}
          ${buildCountCard('mt', 'Count MT (NW/ton)', '#7c3aed', [
            {label:'Today', periodKey:'today', value: counts.mt_today.toLocaleString('id-ID', {maximumFractionDigits:2})},
            {label:'Weekly', periodKey:'weekly', value: counts.mt_weekly.toLocaleString('id-ID', {maximumFractionDigits:2})},
            {label:'Monthly', periodKey:'monthly', value: counts.mt_monthly.toLocaleString('id-ID', {maximumFractionDigits:2})}
          ])}
        </div>
    `;
}

function showCountDetailsModal(type, period) {
    const todayISO = todayStr();
    const now = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(now.getMonth() - 1);
    oneMonthAgo.setHours(0, 0, 0, 0);

    // Kumpulkan data order sesuai period
    const relevantOrders = state.orders.filter(order => {
        const createdAt = order.created_at ? new Date(order.created_at) : parseISODate(order.tgl_stuffing);
        const orderDateISO = toISODate(createdAt);
        if (period === 'today') return orderDateISO === todayISO;
        if (period === 'monthly') return createdAt >= oneMonthAgo;
        return true; // overall
    });

    // Build rows tergantung type
    let allRows = [];
    if (type === 'dn') {
        // Count DN = per order
        relevantOrders.forEach(order => {
            const dns = (order.no_dn || []).join(' / ') || order.order_id;
            let orderNW = 0;
            (order.no_dn || []).forEach(dn => {
                const outData = getDataFromOutstanding(String(dn).trim());
                const totalNW = Number(outData.nw || 0);
                const partieOut20 = Number(outData.partie20 || 0);
                const partieOut40 = Number(outData.partie40 || 0);
                const totalPartieOut = partieOut20 + partieOut40;
                if (totalNW > 0 && totalPartieOut > 0) {
                    const nwPerUnit = totalNW / totalPartieOut;
                    const ordered = Number(order.jml_20ft || 0) + Number(order.jml_40ft || 0) + Number(order.jml_combo || 0);
                    orderNW += nwPerUnit * ordered;
                }
            });
            const nwDisplay = orderNW > 0 ? orderNW.toLocaleString('id-ID', {maximumFractionDigits: 2}) + ' MT' : '-';
            allRows.push({
                dn: dns,
                vendor: order.vendor || '-',
                tgl: formatDisplayDate(order.tgl_stuffing),
                extra: '',
                nw: nwDisplay
            });
        });
    } else {
        // Count Container = per container
        relevantOrders.forEach(order => {
            const dns = (order.no_dn || []).join(' / ') || order.order_id;
            const containers = state.containers[order.order_id] || [];
            // Hitung NW proporsional untuk order ini
            let orderNW = 0;
            (order.no_dn || []).forEach(dn => {
                const outData = getDataFromOutstanding(String(dn).trim());
                const totalNW = Number(outData.nw || 0);
                const partieOut20 = Number(outData.partie20 || 0);
                const partieOut40 = Number(outData.partie40 || 0);
                const totalPartieOut = partieOut20 + partieOut40;
                if (totalNW > 0 && totalPartieOut > 0) {
                    const nwPerUnit = totalNW / totalPartieOut;
                    const ordered = Number(order.jml_20ft || 0) + Number(order.jml_40ft || 0) + Number(order.jml_combo || 0);
                    orderNW += nwPerUnit * ordered;
                }
            });
            const nwDisplay = orderNW > 0 ? orderNW.toLocaleString('id-ID', {maximumFractionDigits: 2}) + ' MT' : '-';
            containers.forEach(c => {
                allRows.push({
                    dn: dns,
                    vendor: order.vendor || '-',
                    tgl: formatDisplayDate(order.tgl_stuffing),
                    extra: `${c.size || '-'} | ${c.no_container || '-'} | ${c.accept === true ? '✅ Accept' : c.accept === false ? '❌ Reject' : '⏳ Pending'}`,
                    nw: nwDisplay
                });
            });
        });
    }

    if (allRows.length === 0) {
        toast(`Tidak ada data untuk periode ${period}.`);
        return;
    }

    const renderRows = (data) => data.map((r, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${r.dn}</td>
            <td>${r.vendor}</td>
            <td>${r.tgl}</td>
            <td>${r.nw}</td>
            ${type === 'cont' ? `<td>${r.extra}</td>` : ''}
        </tr>
    `).join('');

    const periodLabel = period === 'today' ? 'Today' : period === 'monthly' ? 'Monthly' : 'Overall';
    const typeLabel = type === 'dn' ? 'Count DN' : 'Count Container';

    const modalHtml = `
        <div style="margin-bottom:10px;">
            <input id="countSearchDN" class="input" placeholder="🔍 Cari Delivery Number..." style="width:100%; box-sizing:border-box;">
        </div>
        <div style="margin-bottom:8px; color: var(--muted); font-size:0.85rem;">Total: <b>${allRows.length}</b></div>
        <div class="table-wrap" style="max-height: 55vh; overflow-y: auto;">
            <table class="table compact" style="width:100%;">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>DN</th>
                        <th>EMKL</th>
                        <th>Tgl Stuffing</th>
                        <th>NW</th>
                        ${type === 'cont' ? '<th>Container Info</th>' : ''}
                    </tr>
                </thead>
                <tbody id="countModalTbody">${renderRows(allRows)}</tbody>
            </table>
        </div>
    `;

    openModal(`${typeLabel} — ${periodLabel}`, modalHtml);

    setTimeout(() => {
        const searchInput = document.getElementById('countSearchDN');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const keyword = searchInput.value.trim().toLowerCase();
                const filtered = keyword
                    ? allRows.filter(r => r.dn.toLowerCase().includes(keyword))
                    : allRows;
                const tbody = document.getElementById('countModalTbody');
                if (tbody) tbody.innerHTML = renderRows(filtered);
            });
        }
    }, 100);
}

/* ===================== KETERSEDIAAN EMKL TODAY (SIDEBAR) ===================== */
function buildEMKLAvailabilityToday() {
    const todayISO = todayStr();
    const availToday = state.availability[todayISO] || {};
    
    // Filter vendor yang punya ketersediaan > 0
    const vendorsWithAvail = [];
    
    Object.keys(availToday).forEach(vendorName => {
        const v = availToday[vendorName];
        const total20 = Number(v["20ft"] || 0);
        const total40 = Number(v["40ft/HC"] || 0);
        const totalCombo = Number(v["Combo"] || 0);
        const totalAll = total20 + total40 + totalCombo;
        
        if (totalAll > 0) {
            // Ambil singkatan vendor (3-4 huruf pertama nama)
            let shortName = vendorName.replace('PT ', '').trim();
            const words = shortName.split(' ');
            if (words.length >= 2) {
                shortName = words.map(w => w.charAt(0)).join('').toUpperCase();
            } else {
                shortName = shortName.substring(0, 4).toUpperCase();
            }
            
            vendorsWithAvail.push({
                name: vendorName,
                shortName: shortName,
                total: totalAll
            });
        }
    });
    
    // Sort by total descending
    vendorsWithAvail.sort((a, b) => b.total - a.total);
    
    if (vendorsWithAvail.length === 0) {
        return `
            <div class="card" style="margin: 16px; padding: 16px; background: #f9fafb;">
                <h3 style="margin:0 0 10px 0; font-size: 0.9rem; color: #6b7280;">📦 Ketersediaan EMKL Today</h3>
                <div style="text-align: center; color: #9ca3af; font-size: 0.85rem; padding: 20px;">
                    Tidak ada EMKL dengan ketersediaan hari ini
                </div>
            </div>
        `;
    }
    
    // Build vendor cards
    let vendorCards = '';
    vendorsWithAvail.forEach(v => {
        // Warna berdasarkan total (hijau = banyak, kuning = sedang, biru = sedikit)
        let bgColor = '#dbeafe'; // blue-100
        let textColor = '#1e40af'; // blue-800
        
        if (v.total >= 50) {
            bgColor = '#d1fae5'; // green-100
            textColor = '#065f46'; // green-800
        } else if (v.total >= 20) {
            bgColor = '#fef3c7'; // yellow-100
            textColor = '#92400e'; // yellow-800
        }
        
        vendorCards += `
            <div style="
                background: ${bgColor}; 
                border-radius: 8px; 
                padding: 8px 12px; 
                display: flex; 
                justify-content: space-between; 
                align-items: center;
                margin-bottom: 6px;
                border: 1px solid ${bgColor === '#d1fae5' ? '#86efac' : (bgColor === '#fef3c7' ? '#fcd34d' : '#93c5fd')};
            ">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="
                        background: white; 
                        border-radius: 6px; 
                        padding: 4px 8px; 
                        font-weight: 700; 
                        font-size: 0.75rem;
                        color: ${textColor};
                    ">🚛 ${v.shortName}</div>
                    <div style="font-size: 0.75rem; color: #374151; font-weight: 500; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${v.name}">
                        ${v.name.length > 25 ? v.name.substring(0, 25) + '...' : v.name}
                    </div>
                </div>
                <div style="
                    background: white; 
                    border-radius: 6px; 
                    padding: 4px 10px; 
                    font-weight: 700; 
                    font-size: 1.1rem;
                    color: ${textColor};
                ">${v.total}</div>
            </div>
        `;
    });
    
    return `
        <div class="card" style="margin: 16px; padding: 12px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border: 2px solid #bae6fd;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin:0; font-size: 0.9rem; color: #0c4a6e;">📦 Ketersediaan EMKL Today</h3>
                <div style="font-size: 0.7rem; color: #64748b;">${formatDisplayDate(todayISO)}</div>
            </div>
            <div style="max-height: 250px; overflow-y: auto; overflow-x: hidden;">
                ${vendorCards}
            </div>
            <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #bae6fd; font-size: 0.7rem; color: #64748b; text-align: center;">
                Total ${vendorsWithAvail.length} EMKL tersedia
            </div>
        </div>
    `;
}

/* ===================== BARU: TODAY & YESTERDAY STATUS ===================== */
function buildTodayYesterdayStatus() {
  const todayISO = todayStr();
  const yesterdayISO = getYesterdayStr();
  
  // Get status counts for today
  const todayCounts = getStatusCountsForDate(todayISO);
  
  // Get status counts for yesterday
  const yesterdayCounts = getStatusCountsForDate(yesterdayISO);
  
  return `
    <div class="card" style="margin-bottom: 16px;">
      <h3 style="margin:0 0 12px 0">📅 Status Ringkasan</h3>
      <div class="row">
        <div class="col" style="grid-column: span 6;">
          <div style="background: #f0f9ff; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <div style="font-size: 0.85rem; font-weight: 600; color: #1e40af; margin-bottom: 8px;">TODAY - ${formatDisplayDate(todayISO)}</div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <div style="background: white; padding: 8px 12px; border-radius: 6px; flex: 1; min-width: 100px;">
                <div style="font-size: 0.75rem; color: #6b7280;">Pending</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: #f59e0b;">${todayCounts.pending}</div>
              </div>
              <div style="background: white; padding: 8px 12px; border-radius: 6px; flex: 1; min-width: 100px;">
                <div style="font-size: 0.75rem; color: #6b7280;">Confirm Order</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: #3b82f6;">${todayCounts.confirm}</div>
              </div>
              <div style="background: white; padding: 8px 12px; border-radius: 6px; flex: 1; min-width: 100px;">
                <div style="font-size: 0.75rem; color: #6b7280;">Gate In</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: #10b981;">${todayCounts.gateIn}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col" style="grid-column: span 6;">
          <div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <div style="font-size: 0.85rem; font-weight: 600; color: #92400e; margin-bottom: 8px;">YESTERDAY - ${formatDisplayDate(yesterdayISO)}</div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <div style="background: white; padding: 8px 12px; border-radius: 6px; flex: 1; min-width: 100px;">
                <div style="font-size: 0.75rem; color: #6b7280;">Pending</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: #f59e0b;">${yesterdayCounts.pending}</div>
              </div>
              <div style="background: white; padding: 8px 12px; border-radius: 6px; flex: 1; min-width: 100px;">
                <div style="font-size: 0.75rem; color: #6b7280;">Confirm Order</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: #3b82f6;">${yesterdayCounts.confirm}</div>
              </div>
              <div style="background: white; padding: 8px 12px; border-radius: 6px; flex: 1; min-width: 100px;">
                <div style="font-size: 0.75rem; color: #6b7280;">Gate In</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: #10b981;">${yesterdayCounts.gateIn}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
/* ===================== BARU: SUMMARY RECONCILIATION TABLE ===================== */
function buildReconciliationSummary() {
  const todayISO = todayStr();
  const yesterdayISO = getYesterdayStr();
  const tomorrowISO = getTomorrowStr();
  
  // Get data for each period
  const yesterdayData = getReconciliationDataForDate(yesterdayISO);
  const todayData = getReconciliationDataForDate(todayISO);
  const tomorrowData = getReconciliationDataForDate(tomorrowISO);
  
  return `
    <div class="card" style="margin-top: 16px;">
      <h3 style="margin:0 0 12px 0">📊 Summary Reconciliation</h3>
      <div style="margin-bottom: 12px;">
        <div style="background: #f9fafb; padding: 12px; border-radius: 6px; display: flex; gap: 20px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 200px;">
            <div style="font-size: 0.75rem; color: #6b7280; margin-bottom: 4px;">Yesterday</div>
            <div style="font-weight: 600; color: #1f2937;">${formatDisplayDate(yesterdayISO)}</div>
          </div>
          <div style="flex: 1; min-width: 200px;">
            <div style="font-size: 0.75rem; color: #6b7280; margin-bottom: 4px;">Today</div>
            <div style="font-weight: 600; color: #1f2937;">${formatDisplayDate(todayISO)}</div>
          </div>
          <div style="flex: 1; min-width: 200px;">
            <div style="font-size: 0.75rem; color: #6b7280; margin-bottom: 4px;">Next Day</div>
            <div style="font-weight: 600; color: #1f2937;">${formatDisplayDate(tomorrowISO)}</div>
          </div>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
        ${buildReconciliationCard('YESTERDAY', yesterdayData)}
        ${buildReconciliationCard('TODAY', todayData)}
        ${buildReconciliationCard('NEXT DAY', tomorrowData)}
      </div>
    </div>
  `;
}

function buildReconciliationCard(title, data) {
  const shippingPoints = Object.keys(data);
  
  let tableRows = '';
  shippingPoints.forEach(sp => {
    const spData = data[sp];
    const gap20 = spData.plan20 - spData.real20;
    const gap40 = spData.plan40 - spData.real40;
    
    // Color coding untuk gap
    const gap20Color = gap20 > 0 ? '#ef4444' : (gap20 < 0 ? '#10b981' : '#6b7280');
    const gap40Color = gap40 > 0 ? '#ef4444' : (gap40 < 0 ? '#10b981' : '#6b7280');
    
    tableRows += `
      <tr>
        <td style="text-align: left; padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: 500;">${sp}</td>
        <td style="text-align: center; padding: 8px; border-bottom: 1px solid #e5e7eb; background: #fef3c7;">${spData.plan20}</td>
        <td style="text-align: center; padding: 8px; border-bottom: 1px solid #e5e7eb; background: #fef3c7;">${spData.plan40}</td>
        <td style="text-align: center; padding: 8px; border-bottom: 1px solid #e5e7eb; background: #dbeafe;">${spData.real20}</td>
        <td style="text-align: center; padding: 8px; border-bottom: 1px solid #e5e7eb; background: #dbeafe;">${spData.real40}</td>
        <td style="text-align: center; padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: ${gap20Color};">${gap20}</td>
        <td style="text-align: center; padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: ${gap40Color};">${gap40}</td>
      </tr>
    `;
  });
  
  if (tableRows === '') {
    tableRows = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 16px; color: #6b7280; font-style: italic;">
          Tidak ada data untuk periode ini
        </td>
      </tr>
    `;
  }
  
  return `
    <div style="background: white; border: 2px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #3b82f6, #2563eb); padding: 12px; color: white; font-weight: 700; text-align: center;">
        ${title}
      </div>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
        <thead>
          <tr style="background: #f3f4f6;">
            <th rowspan="2" style="padding: 10px 8px; border-bottom: 2px solid #d1d5db; text-align: left; font-weight: 600;">Shipping Point</th>
            <th colspan="2" style="padding: 8px; border-bottom: 1px solid #d1d5db; text-align: center; background: #fef3c7; font-weight: 600; color: #92400e;">Plan</th>
            <th colspan="2" style="padding: 8px; border-bottom: 1px solid #d1d5db; text-align: center; background: #dbeafe; font-weight: 600; color: #1e40af;">Realization</th>
            <th colspan="2" style="padding: 8px; border-bottom: 1px solid #d1d5db; text-align: center; background: #fee2e2; font-weight: 600; color: #991b1b;">Gap</th>
          </tr>
          <tr style="background: #f9fafb;">
            <th style="padding: 6px 8px; border-bottom: 2px solid #d1d5db; text-align: center; font-weight: 500; font-size: 0.75rem; background: #fef3c7;">20</th>
            <th style="padding: 6px 8px; border-bottom: 2px solid #d1d5db; text-align: center; font-weight: 500; font-size: 0.75rem; background: #fef3c7;">40</th>
            <th style="padding: 6px 8px; border-bottom: 2px solid #d1d5db; text-align: center; font-weight: 500; font-size: 0.75rem; background: #dbeafe;">20</th>
            <th style="padding: 6px 8px; border-bottom: 2px solid #d1d5db; text-align: center; font-weight: 500; font-size: 0.75rem; background: #dbeafe;">40</th>
            <th style="padding: 6px 8px; border-bottom: 2px solid #d1d5db; text-align: center; font-weight: 500; font-size: 0.75rem; background: #fee2e2;">20</th>
            <th style="padding: 6px 8px; border-bottom: 2px solid #d1d5db; text-align: center; font-weight: 500; font-size: 0.75rem; background: #fee2e2;">40</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
  `;
}

function getTomorrowStr() {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  return toISODate(today);
}

function getReconciliationDataForDate(dateISO) {
  const result = {};
  
  // Get all orders for this date
  state.orders.forEach(order => {
    if (order.tgl_stuffing === dateISO) {
      const sp = order.shipping_point || 'Unknown';
      
      if (!result[sp]) {
        result[sp] = { plan20: 0, plan40: 0, real20: 0, real40: 0 };
      }
      
      // Calculate plan (semua container yang di-order)
      const containers = state.containers[order.order_id] || [];
      containers.forEach(c => {
        if (c.size === '20ft') {
          result[sp].plan20++;
        } else if (c.size === '40ft/HC') {
          result[sp].plan40++;
        } else if (c.size === 'Combo') {
          result[sp].plan20 += 2; // Combo = 2 x 20ft
        }
      });
      
      // Calculate realization (hanya yang sudah accept dan status "gate in port")
      containers.forEach(c => {
        if (c.accept === true) {
          const status = (c.status || '').toLowerCase();
          if (status === 'gate in port') {
            if (c.size === '20ft') {
              result[sp].real20++;
            } else if (c.size === '40ft/HC') {
              result[sp].real40++;
            } else if (c.size === 'Combo') {
              result[sp].real20 += 2;
            }
          }
        }
      });
    }
  });
  
  return result;
}

function getYesterdayStr() {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  return toISODate(today);
}

function getStatusCountsForDate(dateISO) {
  let pending = 0, confirm = 0, gateIn = 0;
  
  state.orders.forEach(order => {
    if (order.tgl_stuffing === dateISO) {
      const containers = state.containers[order.order_id] || [];
      containers.forEach(c => {
        if (c.accept === null) {
          pending++;
        } else if (c.accept === true) {
          const status = (c.status || 'Confirm Order').toLowerCase();
          if (status === 'confirm order') {
            confirm++;
          } else if (status === 'gate in port') {
            gateIn++;
          }
        }
      });
    }
  });
  
  return { pending, confirm, gateIn };
}

function renderAdminHome(){
  const dt = parseISODate(state.selected_date_admin);
  const month = dt.getMonth()+1;
  const year = dt.getFullYear();

content.innerHTML = `
    <div class="main-header"><h3 style="margin:0">🏠 Admin — Home</h3>
      <div class="small">Dashboard utama untuk melihat status trucking dan aktivitas harian.</div></div>
  `;
  
  try{
    const headerEl = document.querySelector('.main-header');
    if(headerEl && !document.getElementById('dashboard-status-rows')){
      // ✅ REVISI: Dashboard TODAY & YESTERDAY dalam 1 card dengan 2 baris
      const todayISO = todayStr();
      const yesterdayISO = getYesterdayStr();
      
      // Kumpulkan semua tanggal stuffing unik dari orders
      const allStuffingDates = [...new Set(state.orders.map(o => o.tgl_stuffing).filter(Boolean))].sort();
      const stuffingDateOptions = allStuffingDates.map(d =>
        `<option value="${d}" ${d === todayISO ? 'selected' : ''}>${formatDisplayDate(d)}</option>`
      ).join('');

const todayYesterdayDash = `
        <div class="card">
          <h3 style="margin:0 0 12px 0">📅 Daily Status</h3>
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px; flex-wrap:wrap;">
            <span style="font-size:0.75rem; font-weight:700; color:#374151;">Tanggal Stuffing:</span>
            <input type="date" id="dailyStatusDatePicker" class="input" value="${todayISO}" style="max-width:160px; font-size:0.82rem; padding:5px 10px; border-radius:6px; border:1.5px solid #1d4ed8; cursor:pointer;">
            <button id="dailyBtnAll" style="padding:5px 14px; border-radius:6px; border:1.5px solid #e2e8f0; background:#f1f5f9; color:#475569; font-size:0.72rem; font-weight:700; cursor:pointer;">Semua Tanggal</button>
          </div>
          <div id="dailyStatusContent" class="blink-red-animation">
            ${buildStatusDashboardInner(todayISO)}
          </div>
        </div>
      `;
      headerEl.insertAdjacentHTML('afterend', todayYesterdayDash);

      // Event listener date picker
      setTimeout(() => {
        const dailyContent = document.getElementById('dailyStatusContent');
        const datePicker = document.getElementById('dailyStatusDatePicker');
        const allBtn = document.getElementById('dailyBtnAll');

        const reattach = () => {
          dailyContent.querySelectorAll('.stat-card:not(.count-clickable)').forEach(card => {
            card.onclick = () => showStatusDetailsModal(card.dataset.statusKey, card.dataset.filterDate);
          });
        };

        if (datePicker) {
          datePicker.onchange = () => {
            allBtn.style.background = '#f1f5f9'; allBtn.style.color = '#475569'; allBtn.style.borderColor = '#e2e8f0';
            datePicker.style.borderColor = '#1d4ed8';
            dailyContent.innerHTML = buildStatusDashboardInner(datePicker.value);
            reattach();
          };
        }

        if (allBtn) {
          allBtn.onclick = () => {
            allBtn.style.background = '#1d4ed8'; allBtn.style.color = '#ffffff'; allBtn.style.borderColor = '#1d4ed8';
            datePicker.style.borderColor = '#e2e8f0';
            dailyContent.innerHTML = buildStatusDashboardInner(null);
            reattach();
          };
        }
      }, 100);
      
      // ❌ DIHAPUS: Dashboard Status ORIGINAL dengan Periode
      
      const countDash = buildCountDashboard();
      const _statusCard = document.querySelector('.stat-card') ? document.querySelector('.stat-card').closest('.card') : null; if(_statusCard) _statusCard.insertAdjacentHTML('afterend', countDash);

      // Attach click events untuk status dashboard
      document.querySelectorAll('.stat-card:not(.count-clickable)').forEach(card => {
          card.onclick = () => showStatusDetailsModal(card.dataset.statusKey, card.dataset.filterDate);
      });

      // Attach click events untuk Count DN & Container
      document.querySelectorAll('.count-clickable').forEach(card => {
          card.onclick = () => showCountDetailsModal(card.dataset.countType, card.dataset.countPeriod);
      });
    }
  }catch(e){ console.warn('Dashboard inject fail', e); }

  const mSel = document.getElementById("home_month");
  if(mSel) { for(let i=1;i<=12;i++){ 
    const opt=document.createElement("option"); 
    opt.value=i; 
    opt.textContent=new Date(2000,i-1,1).toLocaleString('id-ID',{month:'long'}); 
    if(i===month) opt.selected=true; 
    mSel.appendChild(opt); 
  } }
  
  const currentYear = new Date().getFullYear();
  const startYear = Math.max(currentYear, 2025); 
  const ySel = document.getElementById("home_year");
  for(let y=startYear-1;y<=startYear+1;y++){ 
    if (y < 2025) continue;
    const opt=document.createElement("option"); 
    opt.value=y; 
    opt.textContent=y; 
    if(y===year) opt.selected=true; 
    ySel.appendChild(opt); 
  }

  const calHead = document.getElementById("calHead");
  if(calHead) { ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU", "MINGGU"].forEach(n=>{
    const d=document.createElement("div"); 
    d.className="cal-head"; 
    d.textContent=n; 
    calHead.appendChild(d);
  }); }

  function drawCalendar(y,m){
    document.getElementById("monthTitle").textContent = `${new Date(y,m-1,1).toLocaleString('id-ID',{month:'long'})} ${y}`;
    const body = document.getElementById("calBody");
    body.innerHTML = "";
    const cal = monthMatrix(y,m);
    const todayISO = todayStr();
    // ✅ REVISI 2: Hitung tanggal kemarin untuk validasi disable
    const today = parseISODate(todayISO);
    
    cal.forEach(week=>{
      const row = document.createElement("div");
      row.className="cal-grid";
      week.forEach(d=>{
        const cell = document.createElement("div");
        if(d===0){ 
          cell.innerHTML=""; 
          row.appendChild(cell); 
          return; 
        }
        
        const s = toISODate(new Date(y,m-1,d));
        const sums = sumAvailForDate(s);
        const ok = sums.totalAll > (156*0.5);
        const isToday = (s===todayISO);
        const isSelected = (s===state.selected_date_admin);
        
        // ✅ REVISI 2: Cek apakah tanggal ini sebelum hari ini
        const cellDate = parseISODate(s);
        const isPastDate = cellDate < today;
        
        cell.className = "cal-cell"+(ok?" ok":"")+(isToday?" today":"")+(isSelected?" selected":"")+(isPastDate?" cal-disabled":"");
        cell.innerHTML = `<div class="cal-num">${d}</div><div class="labels">20ft = ${sums.total20}<br>40ft/HC = ${sums.total40}<br>Combo = ${sums.totalCombo}</div><button class="btn pick" data-pick="${s}" ${isPastDate ? 'disabled' : ''}>Pilih</button>`;
        row.appendChild(cell);
      });
      body.appendChild(row);
    });
    
    // ✅ CRITICAL FIX: Event listener HARUS di-attach SETELAH DOM ready
    setTimeout(() => {
      attachCalendarEvents();
    }, 50);
  }
  
  function attachCalendarEvents() {
    const pickButtons = document.querySelectorAll('#calBody button[data-pick]');
    console.log(`✅ Attaching ${pickButtons.length} calendar button events`);
    
    pickButtons.forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const dateStr = btn.dataset.pick;
        
        // ✅ REVISI 2: Validasi backend - cegah klik tanggal lalu
        const clickedDate = parseISODate(dateStr);
        const today = parseISODate(todayStr());
        
        if(clickedDate < today) {
          toast("⚠️ Tidak dapat melihat detail untuk tanggal yang sudah lewat.");
          return;
        }
        
        console.log(`🔵 Calendar button clicked: ${dateStr}`);
        
        state.selected_date_admin = dateStr;
        saveState();
        
        showCalendarDetailModal(dateStr);
      };
    });
  }
  
  function showCalendarDetailModal(date) {
    console.log(`📅 Opening modal for date: ${date}`);
    
    const allHtml = buildRankTable("__FULL__", "Ketersediaan", date);
    
    const html = `
      <div class="table-wrap-modal">
        ${allHtml}
      </div>`;

    const setupModalListeners = (modalBody) => {
      modalBody.querySelectorAll("button[data-prefill]").forEach(b => {
        b.onclick = (event) => {
          event.stopPropagation();
          const prefillVendor = b.dataset.prefill;
          console.log(`✅ Vendor selected: ${prefillVendor}, navigating to Order page`);
          state.order_vendor_prefill = prefillVendor;
          closeModal();
          state.menu_admin = 'Order to EMKL';
          saveState();
          render();
          toast(`Prefill EMKL: ${prefillVendor}`);
        };
      });
    };

    openModal(`Ketersediaan — ${formatDisplayDate(date)}`, html, {
      closeBtnText: 'Lanjut Order',
      closeBtnClass: 'cta',
      onClose: () => {
        const modalBody = document.getElementById('modalBody');
        const firstPrefillBtn = modalBody ? modalBody.querySelector("button[data-prefill]") : null;
        if(firstPrefillBtn) {
          const firstVendor = firstPrefillBtn.dataset.prefill;
          state.order_vendor_prefill = firstVendor;
          toast(`Prefill EMKL: ${firstVendor}`);
        } else {
          state.order_vendor_prefill = null;
          toast("Tidak ada EMKL dengan ketersediaan. Lanjut ke halaman Order.");
        }
        closeModal();
        state.menu_admin = 'Order to EMKL';
        saveState();
        render();
      },
      setupListeners: setupModalListeners
    });
  }

  drawCalendar(year, month);

  mSel.onchange = ()=>{
    const y=Number(ySel.value), m=Number(mSel.value);
    state.selected_date_admin = toISODate(new Date(y,m-1,1));
    saveState();
    renderAdminHome();
  };

  ySel.onchange = ()=>{
    const y=Number(ySel.value), m=Number(mSel.value);
    state.selected_date_admin = toISODate(new Date(y,m-1,1));
    saveState();
    renderAdminHome();
  };

  if(state.show_vendor_detail_admin){
    const target = state.selected_date_admin;
    const avail = state.availability[target] || {};
    let rows = VENDORS_DEFAULT.map(v=>{
      const r = avail[v] || {"20ft":0,"40ft/HC":0,"Combo":0};
      return `<tr><td>${v}</td><td><span class="badge">${r["20ft"]||0}</span></td><td><span class="badge">${r["40ft/HC"]||0}</span></td><td><span class="badge">${r["Combo"]||0}</span></td></tr>`;
    }).join("");
    document.getElementById("vendorDetail").innerHTML = `
      <div class="card">
        <h3 style="margin:.2rem 0 .6rem 0">Detail Ketersediaan — ${formatDisplayDate(target)}</h3>
        <div class="table-wrap">
          <table class="table">
            <thead><tr><th>EMKL</th><th>20ft</th><th>40ft/HC</th><th>Combo</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  }
}
// Fungsi menghitung slot terpakai per shift di tanggal tertentu
function getShiftUsedSlots(dateISO, shiftNumber) {
  let usedSlots = 0;
  
  state.orders.forEach(order => {
    if (order.tgl_stuffing === dateISO) {
      const shiftMatch = order.shift ? order.shift.match(/\d+/) : null;
      const orderShiftNum = shiftMatch ? parseInt(shiftMatch[0]) : null;
      
      if (orderShiftNum === shiftNumber) {
        const containers = state.containers[order.order_id] || [];
        // Hitung semua container (pending, accepted, atau rejected)
        usedSlots += containers.length;
      }
    }
  });
  
  return usedSlots;
}

// Fungsi menghitung sisa slot per shift
function getShiftAvailableSlots(dateISO, shiftNumber) {
  const used = getShiftUsedSlots(dateISO, shiftNumber);
  return SHIFT_MAX_CAPACITY - used;
}

/* ===================== RESTORE AVAILABILITY ===================== */
function restoreAvailabilityOnReject(orderId) {
  const order = state.orders.find(o => o.order_id === orderId);
  if (!order) {
    console.warn(`⚠️ Order ${orderId} tidak ditemukan untuk restore`);
    return;
  }
  
  const containers = state.containers[orderId] || [];
  
  // Hitung jumlah container yang di-reject per size
  let rejected20 = 0, rejected40 = 0, rejectedCombo = 0;
  
  containers.forEach(c => {
    // Hanya restore jika container di-reject DAN belum pernah di-restore
    console.log(`🔍 Container check: accept=${c.accept}, size=${c.size}, availability_restored=${c.availability_restored}`);
    if (c.accept === false && !c.availability_restored) {
      if (c.size === "20ft") rejected20++;
      else if (c.size === "40ft/HC") rejected40++;
      else if (c.size === "Combo") rejectedCombo++;
      
      // Mark container sudah di-restore untuk hindari double count
      c.availability_restored = true;
    }
  });
  
  console.log(`🔍 rejected20=${rejected20}, rejected40=${rejected40}, rejectedCombo=${rejectedCombo}`);
  console.log(`🔍 dateISO=${order.tgl_stuffing}, vendor=${order.vendor}`);
  console.log(`🔍 availability before restore:`, JSON.stringify(state.availability[order.tgl_stuffing]));
  
  // Jika tidak ada yang di-reject, skip
  if (rejected20 === 0 && rejected40 === 0 && rejectedCombo === 0) {
    console.log(`ℹ️ Tidak ada container yang perlu di-restore untuk order ${orderId}`);
    return;
  }
  
  // ✅ RESTORE KETERSEDIAAN dengan INCREMENTAL (+=)
  // ✅ FIX: Buat key tanggal dan vendor jika belum ada, agar restore tetap jalan
  const dateISO = order.tgl_stuffing;
  if (dateISO) {
    if (!state.availability[dateISO]) {
      state.availability[dateISO] = {};
    }
    if (!state.availability[dateISO][order.vendor]) {
      state.availability[dateISO][order.vendor] = { "20ft": 0, "40ft/HC": 0, "Combo": 0 };
    }
    const vendorAvail = state.availability[dateISO][order.vendor];
    vendorAvail["20ft"] = Number(vendorAvail["20ft"] || 0) + rejected20;
    vendorAvail["40ft/HC"] = Number(vendorAvail["40ft/HC"] || 0) + rejected40;
    vendorAvail["Combo"] = Number(vendorAvail["Combo"] || 0) + rejectedCombo;
    
    console.log(`✅ Restored availability for ${order.vendor} on ${dateISO}:`);
    console.log(`   20ft: +${rejected20}, 40ft: +${rejected40}, Combo: +${rejectedCombo}`);
    console.log(`   New availability: 20ft=${vendorAvail["20ft"]}, 40ft=${vendorAvail["40ft/HC"]}, Combo=${vendorAvail["Combo"]}`);
    
    // ✅ FIX: Force save agar perubahan availability tersimpan ke localStorage
    saveState();
  } else {
    console.warn(`⚠️ Date availability not found for ${dateISO}`);
  }
}

/* ===================== ADMIN: ORDER TO VENDOR ===================== */
function renderAdminOrder() {
  const dt = parseISODate(state.selected_date_admin);
  const month = dt.getMonth()+1;
  const year = dt.getFullYear();
  const showDate = state.selected_date_admin;

  content.innerHTML = `
    <div class="main-header"><h3 style="margin:0">📦 Admin — Order to EMKL</h3>
      <div class="small">Pilih tanggal pada kalender untuk melihat ketersediaan EMKL, lalu buat order.</div></div>
    
    <div class="card">
      <h3 style="margin:0 0 12px 0">📅 Pilih Tanggal Stuffing</h3>
      <div class="row">
        <div class="col" style="grid-column: span 6;">
          <label>Pilih Bulan</label>
          <select id="order_month" class="input"></select>
        </div>
        <div class="col" style="grid-column: span 6;">
          <label>Pilih Tahun</label>
          <select id="order_year" class="input"></select>
        </div>
      </div>
      <div class="cal-wrap" style="margin-top:10px">
        <h2 style="margin:0 0 16px 0; font-size:1.5rem; color:var(--ink); display:flex; align-items:center; gap:8px;">
          <span style="font-size:1.8rem;">🚛</span> KETERSEDIAAN TRUCK
        </h2>
        <h3 style="margin:0 0 10px 0" id="orderMonthTitle"></h3>
        <div class="cal-grid" id="orderCalHead"></div>
        <div id="orderCalBody"></div>
      </div>
    </div>
    
    <div id="emkl-availability-card" class="card">
      <div class="small">Menampilkan ketersediaan untuk tanggal: <b>${formatDisplayDate(showDate)}</b></div>
      <div id="availTableContainer" style="margin-top: 8px;"></div>
    </div>
    <div class="card">
      <h3 style="margin:0 0 12px 0">Buat Order Baru</h3>
      <div class="form-section">
        <div class="section-title">1. Informasi Utama</div>
        <div class="form-grid">
          <div class="span-4">
            <label>EMKL</label>
            <select id="order_vendor" class="input"></select>
          </div>
          <div class="span-4">
            <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                <label>DN</label>
                <div style="display:flex; align-items:center; gap:5px; margin-bottom: .25rem;">
                    <input type="checkbox" id="order_is_combo">
                    <label for="order_is_combo" style="margin:0; font-size:.8rem; font-weight:normal;">Combo</label>
                </div>
            </div>
            <input id="order_dn1" class="input" placeholder="Ketik DN lalu tekan ENTER">
            <div id="dn_combo_extra" style="display:none; margin-top:8px;">
                <input id="order_dn2" class="input" placeholder="DN ke-2 (tekan ENTER)">
            </div>
          </div>
          <div class="span-4">
            <label>Tanggal Stuffing</label>
            <input id="order_tglstuff" type="date" class="input" value="${showDate}">
          </div>
        </div>
      </div>
      <div class="form-section">
        <div class="section-title">2. Lokasi & Tujuan</div>
        <div class="form-grid">
          <div class="span-6">
            <label>Shipping Point</label>
            <input id="order_shippoint" class="input" placeholder="Auto warehouse...">
          </div>
          <div class="span-6">
            <label>Country Port (Port)</label>
            <input id="order_pod" class="input" placeholder="Liverpool,UK">
          </div>
          <div class="span-6">
            <label>Terminal</label>
            <select id="order_terminal" class="input">
                <option>JICT</option>
                <option>NPCT</option>
                <option>KOJA</option>
                <option>TMAL</option>
                <option>IPC</option>
            </select>
          </div>
          <div class="span-6">
            <label>Depo</label>
            <input id="order_depo" class="input" placeholder="Puninar, BRJ...">
          </div>
        </div>
      </div>
<div class="form-section">
  <div class="section-title">3. Jadwal & Waktu</div>
  <div class="form-grid">
    <div class="span-3">
      <label>Open CY</label>
      <input id="order_open_cy" type="date" class="input" placeholder="dd/mm/yyyy">
    </div>
    <div class="span-3">
      <label>Tanggal Closing</label>
      <input id="order_closing_date" type="date" class="input" placeholder="dd/mm/yyyy">
    </div>
    <div class="span-3">
      <label>Jam Closing</label>
      <input id="order_closing_time" type="time" class="input" placeholder="--:--">
    </div>
    <div class="span-3">
      <label>ETD (Estimasi)</label>
      <input id="order_etd" type="date" class="input">
    </div>
<div class="col" style="grid-column: span 6;">
  <label>Shift</label>
  <select id="order_shift" class="input">
    <option value="">- Pilih Shift -</option>
    <option value="Shift 1" data-shift="1">Shift 1</option>
    <option value="Shift 2" data-shift="2">Shift 2</option>
    <option value="Shift 3" data-shift="3">Shift 3</option>
  </select>
  <div id="shift_info" style="margin-top:8px; padding:8px; background:#f3f4f6; border-radius:4px; font-size:0.85rem; display:none;">
    <div id="shift_slot_display"></div>
  </div>
  </div>
</div>      <div class="form-section">
        <div class="section-title">4. Detail Kontainer & Catatan</div>
        <div class="form-grid">
            <div class="span-4">
                <label>Jumlah Container 20ft</label>
                <input id="order_j20" type="number" class="input" value="0" min="0">
            </div>
            <div class="span-4">
                <label>Jumlah Container 40ft/HC</label>
                <input id="order_j40" type="number" class="input" value="0" min="0">
            </div>
            <div class="span-4">
                <label>Jumlah Container Combo</label>
                <input id="order_jCombo" type="number" class="input" value="0" min="0">
            </div>
            <div class="span-12">
                <label>Remarks</label>
                <textarea id="order_remarks" class="input" placeholder="Catatan tambahan..."></textarea>
            </div>
        </div>
      </div>
      <div style="margin-top:16px">
        <button id="btnCreateOrder" class="btn cta">✓ Buat Order</button>
      </div>
    </div>
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <h3 style="margin:0;">Rekap List Orderan</h3>
        <button id="btnDownloadRekap" class="btn excel">📊 Excel</button>
      </div>
      <div class="row">
        <div class="col" style="grid-column: span 4;">
          <label>Filter EMKL</label>
          <select id="rekap_vendor" class="input">
            <option>-- Semua --</option>
          </select>
        </div>
        <div class="col" style="grid-column: span 4;">
          <label>Tgl Stuffing (start)</label>
          <input id="rekap_start" type="date" class="input">
        </div>
        <div class="col" style="grid-column: span 4;">
          <label>Tgl Stuffing (end)</label>
          <input id="rekap_end" type="date" class="input">
        </div>
      </div>
      <div class="rekap-wrap">
        <table class="table rekap" id="rekapTable">
          <thead>
            <tr>
                <th rowspan="2">No</th>
                <th rowspan="2">DN</th>
                <th rowspan="2">EMKL</th>
                <th rowspan="2">Tanggal Stuffing</th>
                <th rowspan="2">Shipping Point</th>
                <th rowspan="2">Country Port (Port)</th>
                <th rowspan="2">Terminal</th>
                <th rowspan="2">Depo</th>
                <th colspan="2" style="background: #f0f7ff;">CY</th>
                <th rowspan="2">Container</th>
                <th rowspan="2">Jumlah</th>
                <th colspan="2">Status</th>
                <th rowspan="2">Shift</th>
                <th rowspan="2">Remarks</th>
                <th rowspan="2">Email</th>
                <th rowspan="2">Aksi</th>
            </tr>
            <tr>
                <th style="background: #f0f7ff;">Open</th>
                <th style="background: #f0f7ff;">Closing (Date Time)</th>
                <th class="acc">Accept</th>
                <th class="rej">Reject</th>
            </tr>
          </thead>
          <tbody id="rekapBody"></tbody>
        </table>
      </div>
    </div>
  `;
  // ✅ BARU: Setup kalender di halaman Order to EMKL
  const mSel = document.getElementById("order_month");
  for(let i=1;i<=12;i++){ 
    const opt=document.createElement("option"); 
    opt.value=i; 
    opt.textContent=new Date(2000,i-1,1).toLocaleString('id-ID',{month:'long'}); 
    if(i===month) opt.selected=true; 
    mSel.appendChild(opt); 
  }
  
  const currentYear = new Date().getFullYear();
  const startYear = Math.max(currentYear, 2025); 
  const ySel = document.getElementById("order_year");
  for(let y=startYear-1;y<=startYear+1;y++){ 
    if (y < 2025) continue;
    const opt=document.createElement("option"); 
    opt.value=y; 
    opt.textContent=y; 
    if(y===year) opt.selected=true; 
    ySel.appendChild(opt); 
  }

  const calHead = document.getElementById("orderCalHead");
  ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU", "MINGGU"].forEach(n=>{
    const d=document.createElement("div"); 
    d.className="cal-head"; 
    d.textContent=n; 
    calHead.appendChild(d);
  });

  function drawOrderCalendar(y,m){
    document.getElementById("orderMonthTitle").textContent = `${new Date(y,m-1,1).toLocaleString('id-ID',{month:'long'})} ${y}`;
    const body = document.getElementById("orderCalBody");
    body.innerHTML = "";
    const cal = monthMatrix(y,m);
    const todayISO = todayStr();
    const today = parseISODate(todayISO);
    
    cal.forEach(week=>{
      const row = document.createElement("div");
      row.className="cal-grid";
      week.forEach(d=>{
        const cell = document.createElement("div");
        if(d===0){ 
          cell.innerHTML=""; 
          row.appendChild(cell); 
          return; 
        }
        
        const s = toISODate(new Date(y,m-1,d));
        const sums = sumAvailForDate(s);
        const ok = sums.totalAll > (156*0.5);
        const isToday = (s===todayISO);
        const isSelected = (s===state.selected_date_admin);
        
        const cellDate = parseISODate(s);
        const isPastDate = cellDate < today;
        
        cell.className = "cal-cell"+(ok?" ok":"")+(isToday?" today":"")+(isSelected?" selected":"")+(isPastDate?" cal-disabled":"");
        cell.innerHTML = `<div class="cal-num">${d}</div><div class="labels">20ft = ${sums.total20}<br>40ft/HC = ${sums.total40}<br>Combo = ${sums.totalCombo}</div><button class="btn pick" data-pick="${s}" ${isPastDate ? 'disabled' : ''}>Pilih</button>`;
        row.appendChild(cell);
      });
      body.appendChild(row);
    });
    
    setTimeout(() => {
      attachOrderCalendarEvents();
    }, 50);
  }
  
  function attachOrderCalendarEvents() {
    const pickButtons = document.querySelectorAll('#orderCalBody button[data-pick]');
    
    pickButtons.forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const dateStr = btn.dataset.pick;
        const clickedDate = parseISODate(dateStr);
        const today = parseISODate(todayStr());
        
        if(clickedDate < today) {
          toast("⚠️ Tidak dapat memilih tanggal yang sudah lewat.");
          return;
        }
        
        state.selected_date_admin = dateStr;
        saveState();
        
        // Update tanggal stuffing otomatis
        const tglStuffInput = document.getElementById('order_tglstuff');
        if(tglStuffInput) {
          tglStuffInput.value = dateStr;
        }
        
        // Refresh tabel ketersediaan
        renderAdminOrder();
        toast(`📅 Tanggal dipilih: ${formatDisplayDate(dateStr)}`);
      };
    });
  }
  drawOrderCalendar(year, month);

  

  mSel.onchange = ()=>{
    const y=Number(ySel.value), m=Number(mSel.value);
    state.selected_date_admin = toISODate(new Date(y,m-1,1));
    saveState();
    renderAdminOrder();
  };

  ySel.onchange = ()=>{
    const y=Number(ySel.value), m=Number(mSel.value);
    state.selected_date_admin = toISODate(new Date(y,m-1,1));
    saveState();
    renderAdminOrder();
  };

  // ============================================================
  // ✅ AUTOFILL LOGIC - VERSI DARURAT DENGAN FULL DEBUG
  // ============================================================


function autoFillFromOutstanding(dnValue, inputElement) {

    if (!dnValue || !dnValue.trim()) {
      return;
    }

    const shipPointInput = document.getElementById('order_shippoint');
    const podInput = document.getElementById('order_pod');
    const j20Input = document.getElementById('order_j20');
    const j40Input = document.getElementById('order_j40');
    const jComboInput = document.getElementById('order_jCombo');
    const etdInput = document.getElementById('order_etd');


    if (!shipPointInput || !j20Input || !j40Input) {
      toast('❌ Error: Field form tidak ditemukan');
      return;
    }

    const outData = getDataFromOutstanding(dnValue.trim());

    // ✅ FIX: Cek data yang benar-benar relevan untuk autofill, bukan semua key
    const hasData = (
      outData.shippingPoint !== null ||
      outData.countryPort !== null ||
      outData.partie20 !== null ||
      outData.partie40 !== null ||
      outData.etd !== null
    );

    if (!hasData) {
      toast(`❌ DN "${dnValue}" tidak ditemukan di Data Outstanding`);
      return;
    }

    let filledCount = 0;

    // 🔥 FILL 1: Shipping Point (PRIORITAS TINGGI)
    if (outData.shippingPoint) {
      const oldValue = shipPointInput.value;
      shipPointInput.value = outData.shippingPoint;
      filledCount++;
    }
    // 🔥 FILL 2: Country Port (Port)
    if (podInput && outData.countryPort) {
      const oldValue = podInput.value;
      podInput.value = outData.countryPort;
      filledCount++;
    }

    // FILL 3: 20ft
    if (outData.partie20 !== null && outData.partie20 !== undefined) {
      const oldValue = j20Input.value;
      j20Input.value = parseInt(outData.partie20) || 0;
      filledCount++;
    }

    // FILL 4: 40ft
    if (outData.partie40 !== null && outData.partie40 !== undefined) {
      const oldValue = j40Input.value;
      j40Input.value = parseInt(outData.partie40) || 0;
      filledCount++;
    }

    // FILL 5: ETD
    if (etdInput && outData.etd) {
      let etdValue = outData.etd;
      
      // 🔥 FIX: Konversi Excel Date yang benar (tanpa timezone bug)
      if (typeof etdValue === 'number') {
        // Excel epoch: 1900-01-01 (tapi Excel salah hitung, jadi pakai 1899-12-30)
        const excelEpoch = new Date(Date.UTC(1899, 11, 30));
        const msPerDay = 24 * 60 * 60 * 1000;
        const etdDate = new Date(excelEpoch.getTime() + etdValue * msPerDay);
        
        // Ambil YYYY-MM-DD tanpa timezone offset
        const year = etdDate.getUTCFullYear();
        const month = String(etdDate.getUTCMonth() + 1).padStart(2, '0');
        const day = String(etdDate.getUTCDate()).padStart(2, '0');
        etdValue = `${year}-${month}-${day}`;
      } else if (typeof etdValue === 'string') {
        // ✅ Handle format string: "2025.11.21" → "2025-11-21"
        //                          "2025/11/21" → "2025-11-21"
        etdValue = etdValue.trim().replace(/\./g, '-').replace(/\//g, '-');
      }
      
      etdInput.value = etdValue;
      filledCount++;
    }

    // FILL 6: Reset Combo
    if (jComboInput) {
      jComboInput.value = 0;
    }

    if (filledCount > 0) {
      toast(`✅ Autofill berhasil: ${filledCount} field terisi`);
    } else {
      toast(`⚠️ Data ditemukan di Outstanding, tapi semua field kosong/tidak ada nilai`);
    }
  }

  // ATTACH EVENT LISTENERS DN
  const dn1Input = document.getElementById('order_dn1');
  const dn2Input = document.getElementById('order_dn2');

  if (dn1Input) {
    dn1Input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        autoFillFromOutstanding(dn1Input.value, dn1Input);
      }
    });
  }

  if (dn2Input) {
    dn2Input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        autoFillFromOutstanding(dn2Input.value, dn2Input);
      }
    });
  }

  // ============================================================
  // KETERSEDIAAN & ALOKASI
  // ============================================================
  const availContainer = document.getElementById("availTableContainer");
  const allHtml = buildRankTable("__FULL__", "Ketersediaan", showDate);

  if (allHtml.includes("<tr>") === false) {
    availContainer.innerHTML = `<div style="padding:1rem; text-align:center; color: var(--muted);">Tidak ada EMKL yang mengisi ketersediaan pada tanggal ini.</div>`;
  } else {
    availContainer.innerHTML = allHtml;
  }

  availContainer.querySelectorAll("button[data-prefill]").forEach(b => {
    b.onclick = () => {
      state.order_vendor_prefill = b.dataset.prefill;
      saveState();
      renderAdminOrder();
      toast(`Prefill EMKL: ${b.dataset.prefill}`);
    };
  });

  const isComboCheckbox = document.getElementById('order_is_combo');
  const dnComboExtraDiv = document.getElementById('dn_combo_extra');
  const j20Input = document.getElementById('order_j20');
  const j40Input = document.getElementById('order_j40');
  const jComboInput = document.getElementById('order_jCombo');

  isComboCheckbox.checked = false;
  dnComboExtraDiv.style.display = 'none';

  isComboCheckbox.addEventListener('change', e => {
    const isChecked = e.target.checked;
    dnComboExtraDiv.style.display = isChecked ? 'block' : 'none';
  });

  const vSel = document.getElementById("order_vendor");
  VENDORS_DEFAULT.forEach(v => {
    const opt = document.createElement("option");
    opt.textContent = v;
    vSel.appendChild(opt);
  });
  if (state.order_vendor_prefill) {
    vSel.value = state.order_vendor_prefill;
  }

  // ✅ TAMBAHKAN EVENT LISTENER UNTUK SHIFT INFO
  const tglStuffingInput = document.getElementById("order_tglstuff");
  const shiftSelect = document.getElementById("order_shift");
  const shiftInfoDiv = document.getElementById("shift_info");
  const shiftSlotDisplay = document.getElementById("shift_slot_display");

  function updateShiftInfo() {
    const selectedDate = tglStuffingInput.value;
    const selectedShift = shiftSelect.value;
    
    if (!selectedDate || !selectedShift) {
      shiftInfoDiv.style.display = 'none';
      return;
    }
    
    const shiftMatch = selectedShift.match(/\d+/);
    const shiftNum = shiftMatch ? parseInt(shiftMatch[0]) : null;
    
    if (shiftNum) {
      const used = getShiftUsedSlots(selectedDate, shiftNum);
      const available = getShiftAvailableSlots(selectedDate, shiftNum);
      
      shiftSlotDisplay.innerHTML = `
        <strong>📊 Shift ${shiftNum}</strong><br>
        Alokasi: ${SHIFT_MAX_CAPACITY} container<br>
        Terpakai: <span style="color:#dc2626;">${used}</span><br>
        Sisa Slot: <span style="color:${available > 0 ? '#16a34a' : '#dc2626'}; font-weight:600;">${available}</span>
      `;
      shiftInfoDiv.style.display = 'block';
    }
  }

  if (tglStuffingInput && shiftSelect) {
    tglStuffingInput.addEventListener('change', updateShiftInfo);
    shiftSelect.addEventListener('change', updateShiftInfo);
  }

  const rVend = document.getElementById("rekap_vendor");
  VENDORS_DEFAULT.forEach(v => {
    const o = document.createElement("option");
    o.textContent = v;
    rVend.appendChild(o);
  });
  const rStart = document.getElementById("rekap_start");
  const rEnd = document.getElementById("rekap_end");
  const now = new Date();
  rStart.value = toISODate(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 30));
  rEnd.value = toISODate(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7));

  // ============================================================
  // BUAT ORDER
  // ============================================================
  const createOrderBtn = document.getElementById("btnCreateOrder");
  if (!createOrderBtn) {
    console.error("❌ Button btnCreateOrder tidak ditemukan!");
    return;
  }

  createOrderBtn.onclick = () => {
    console.log("🔵 Button Create Order diklik!");
    
    const vendor = vSel.value;
    const dn1 = document.getElementById('order_dn1').value.trim();
    const dn2 = document.getElementById('order_dn2').value.trim();

    let no_dn = [];
    if (dn1) no_dn.push(dn1);
    if (dn2) no_dn.push(dn2);

    if (no_dn.length === 0) {
      toast("Minimal satu nomor DN wajib diisi.");
      return;
    }

    const tgl_stuff = document.getElementById("order_tglstuff").value || showDate;
    const shipping_point = document.getElementById("order_shippoint").value.trim();
    const pod = document.getElementById("order_pod").value.trim();
    const terminal = document.getElementById("order_terminal").value.trim();
    const depo = document.getElementById("order_depo").value.trim();
    const open_cy = document.getElementById("order_open_cy").value || showDate;
    const closing_date = document.getElementById("order_closing_date").value;
    const closing_time = document.getElementById("order_closing_time").value;
    const etd = document.getElementById("order_etd").value;
    const shift = document.getElementById("order_shift").value;

    const j20 = Number(j20Input.value || 0);
    const j40 = Number(j40Input.value || 0);
    const jCombo = Number(jComboInput.value || 0);

    const remarks = document.getElementById("order_remarks").value.trim();
    
    // Validasi
    if (!vendor) {
      toast("Pilih EMKL terlebih dahulu.");
      return;
    }
    if (!shift) {
      toast("Pilih shift terlebih dahulu.");
      return;
    }
    if (!shipping_point) {
      toast("Shipping Point wajib diisi.");
      return;
    }
    if (!pod) {
      toast("Country Port (Port) wajib diisi.");
      return;
    }
    if (!terminal) {
      toast("Terminal wajib dipilih.");
      return;
    }
    if (!depo) {
      toast("Depo wajib diisi.");
      return;
    }
    if (!open_cy) {
      toast("Open CY wajib diisi.");
      return;
    }
    if (!closing_date) {
      toast("Tanggal Closing wajib diisi.");
      return;
    }
    if (!closing_time) {
      toast("Jam Closing wajib diisi.");
      return;
    }
    if (!etd) {
      toast("ETD wajib diisi.");
      return;
    }
    if (j20 + j40 + jCombo === 0) {
      toast("Minimal pesan 1 container.");
      return;
    }

    // Validasi slot shift
    const shiftMatch = shift.match(/\d+/);
    const shiftNum = shiftMatch ? parseInt(shiftMatch[0]) : null;
    const totalContainersToOrder = j20 + j40 + jCombo;
    
    if (shiftNum) {
      const available = getShiftAvailableSlots(tgl_stuff, shiftNum);
      if (totalContainersToOrder > available) {
        toast(`❌ Slot shift tidak cukup! Tersisa ${available} slot, Anda memesan ${totalContainersToOrder} container.`);
        return;
      }
    }

    // Validasi ketersediaan
    if (totalContainersToOrder > 0) {
      const avForDate = state.availability[tgl_stuff] || {};
      const vendorAv = avForDate[vendor] || {
        "20ft": 0,
        "40ft/HC": 0,
        "Combo": 0
      };

      if (j20 > Number(vendorAv["20ft"] || 0)) {
        toast(`Jumlah 20ft dipesan > ketersediaan.`);
        return;
      }
      if (j40 > Number(vendorAv["40ft/HC"] || 0)) {
        toast(`Jumlah 40ft/HC dipesan > ketersediaan.`);
        return;
      }
      if (jCombo > Number(vendorAv["Combo"] || 0)) {
        toast(`Jumlah Combo dipesan > ketersediaan.`);
        return;
      }
    }

    // 🔑 TAMPILKAN POPUP KONFIRMASI
    const totalContainers = j20 + j40 + jCombo;
    const confirmHtml = `
      <div style="padding:20px;">
        <h3 style="margin:0 0 16px 0; color:var(--ink);">📋 Konfirmasi Pembuatan Order</h3>
        <div style="background:#f9fafb; padding:16px; border-radius:8px; border:1px solid #e5e7eb;">
          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0; font-weight:600; color:#6b7280; width:40%;">Tanggal Stuffing:</td>
              <td style="padding:8px 0; color:var(--ink);">${formatDisplayDate(tgl_stuff)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; font-weight:600; color:#6b7280;">Shift:</td>
              <td style="padding:8px 0; color:var(--ink);">${shift || '-'}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; font-weight:600; color:#6b7280;">EMKL:</td>
              <td style="padding:8px 0; color:var(--ink);">${vendor}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; font-weight:600; color:#6b7280;">DN:</td>
              <td style="padding:8px 0; color:var(--ink);">${no_dn.join(', ')}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; font-weight:600; color:#6b7280;">Jumlah Container:</td>
              <td style="padding:8px 0; color:var(--ink);">
                <strong>${totalContainers}</strong> 
                ${j20 > 0 ? `(20ft: ${j20})` : ''} 
                ${j40 > 0 ? `(40ft: ${j40})` : ''} 
                ${jCombo > 0 ? `(Combo: ${jCombo})` : ''}
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0; font-weight:600; color:#6b7280;">Shipping Point:</td>
              <td style="padding:8px 0; color:var(--ink);">${shipping_point}</td>
            </tr>
            ${pod ? `<tr>
              <td style="padding:8px 0; font-weight:600; color:#6b7280;">POD:</td>
              <td style="padding:8px 0; color:var(--ink);">${pod}</td>
            </tr>` : ''}
            ${terminal ? `<tr>
              <td style="padding:8px 0; font-weight:600; color:#6b7280;">Terminal:</td>
              <td style="padding:8px 0; color:var(--ink);">${terminal}</td>
            </tr>` : ''}
            ${depo ? `<tr>
              <td style="padding:8px 0; font-weight:600; color:#6b7280;">Depo:</td>
              <td style="padding:8px 0; color:var(--ink);">${depo}</td>
            </tr>` : ''}
          </table>
        </div>
        <div style="margin-top:20px; display:flex; gap:12px; justify-content:flex-end;">
          <button id="cancelOrderBtn" class="btn secondary" style="padding:10px 24px;">Batal</button>
          <button id="confirmOrderBtn" class="btn success" style="padding:10px 24px;">✓ Konfirmasi & Buat Order</button>
        </div>
      </div>
    `;

    openModal("Konfirmasi Order", confirmHtml);

    // Event handler untuk button batal
    document.getElementById("cancelOrderBtn").onclick = () => {
      closeModal();
    };

    // Event handler untuk button konfirmasi - PROSES ORDER DI SINI
    document.getElementById("confirmOrderBtn").onclick = () => {
      // Buat order
      const oid = genId("ORD");
      const order = {
        order_id: oid,
        vendor,
        tgl_stuffing: tgl_stuff,
        closing_date,
        closing_time,
        open_cy,
        no_dn,
        shipping_point,
        pod,
        terminal,
        depo,
        shift,
        remarks,
        etd,
        jml_20ft: j20,
        jml_40ft: j40,
        jml_combo: jCombo,
        created_at: new Date().toISOString(),
        summary_status: "Pending",
        availability_reserved: true
      };

      state.orders.push(order);
      state.containers[oid] = [];

      const addConts = (qty, sz) => {
        for (let i = 0; i < qty; i++) {
          state.containers[oid].push({
            no: state.containers[oid].length + 1,
            size: sz,
            accept: null,
            no_container: "",
            no_seal: "",
            no_mobil: "",
            nama_supir: "",
            contact: "",
            depo: "",
            status: STATUS_TRUCKING[0]
          });
        }
      };

      if (j20 > 0) addConts(j20, "20ft");
      if (j40 > 0) addConts(j40, "40ft/HC");
      if (jCombo > 0) addConts(jCombo, "Combo");
      state.order_vendor_prefill = null;

      // Kurangi ketersediaan
      if (tgl_stuff && state.availability[tgl_stuff]) {
        const vendorAvail = state.availability[tgl_stuff][vendor];
        if (vendorAvail) {
          vendorAvail["20ft"] = Math.max(0, Number(vendorAvail["20ft"] || 0) - j20);
          vendorAvail["40ft/HC"] = Math.max(0, Number(vendorAvail["40ft/HC"] || 0) - j40);
          vendorAvail["Combo"] = Math.max(0, Number(vendorAvail["Combo"] || 0) - jCombo);
        }
      }

      const totalContainers = j20 + j40 + jCombo;
      state.notifications.push({
        id: genId("NOTIF"),
        message: `Order baru DN ${order.no_dn.join(' & ')} (${totalContainers} kontainer) masuk dari Indah Kiat Karawang.`,
        timestamp: new Date().toISOString(),
        isRead: false,
        role: 'vendor',
        targetVendor: vendor,
        relatedOrder: oid,
        link: 'Orderan'
      });
      
      saveState();
      closeModal(); // Tutup modal
      renderAdminOrder(); // Refresh halaman
      toast(`✓ Order berhasil dibuat: ${oid}`);
    };
  };

  // ============================================================
  // REKAP FUNCTION
  // ============================================================
function buildRekap() {
  const vend = rVend.value;
  const start = parseISODate(rStart.value);
  const end = parseISODate(rEnd.value);
  
  // ✅ REVISI 1: Filter dulu, JANGAN reverse
  const filteredOrders = state.orders.filter(o => {
    const d = parseISODate(o.tgl_stuffing);
    return d >= start && d <= end && (vend === "-- Semua --" || o.vendor === vend);
  });
  
  // ✅ REVISI 2: Sort berdasarkan Tanggal Stuffing (ascending) dan Shift (1→2→3)
  const orders = filteredOrders.sort((a, b) => {
    // Primary sort: Tanggal stuffing (ascending - paling awal di atas)
    const dateA = parseISODate(a.tgl_stuffing);
    const dateB = parseISODate(b.tgl_stuffing);
    
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    
    // Secondary sort: Shift (1 → 2 → 3)
    // Ekstrak angka dari "Shift 1", "Shift 2", "Shift 3"
    const getShiftNumber = (shift) => {
      if (!shift || shift === '-') return 999; // Shift kosong di akhir
      const match = shift.match(/\d+/);
      return match ? parseInt(match[0]) : 999;
    };
    
    const shiftA = getShiftNumber(a.shift);
    const shiftB = getShiftNumber(b.shift);
    
    return shiftA - shiftB;
  });
  
  const tbody = document.getElementById("rekapBody");
  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="21">Tidak ada data</td></tr>`;
    return;
  }

  let html = "";
  orders.forEach((o, idx) => {
    const items = state.containers[o.order_id] || [];
    const containerTypes = [];
    if (o.jml_20ft > 0) containerTypes.push("20ft");
    if (o.jml_40ft > 0) containerTypes.push("40ft/HC");
    if (o.jml_combo > 0) containerTypes.push("Combo");

    const rowSpan = containerTypes.length || 1;
    const isEditing = state.editing_order_id === o.order_id;
    
    containerTypes.forEach((sz, i) => {
      const acc = items.filter(r => r.size === sz && r.accept === true).length;
      const rej = items.filter(r => r.size === sz && r.accept === false).length;
      const total = (sz === "20ft") ? o.jml_20ft : (sz === "40ft/HC" ? o.jml_40ft : o.jml_combo);

      html += `<tr>`;
      if (i === 0) {
        html += `
              <td rowspan="${rowSpan}">${idx + 1}</td>
              <td rowspan="${rowSpan}">${isEditing ? `<textarea id="edit_dn_${o.order_id}">${o.no_dn.join('\n')}</textarea>` : o.no_dn.join('<br>')}</td>
              <td rowspan="${rowSpan}">${o.vendor}</td>
              <td rowspan="${rowSpan}">${isEditing ? `<input type="date" id="edit_tglstuff_${o.order_id}" value="${o.tgl_stuffing}">` : formatDisplayDate(o.tgl_stuffing)}</td>
              <td rowspan="${rowSpan}">${isEditing ? `<input id="edit_shippoint_${o.order_id}" value="${o.shipping_point}">` : o.shipping_point}</td>
              <td rowspan="${rowSpan}">${isEditing ? `<input id="edit_pod_${o.order_id}" value="${o.pod || ''}">` : o.pod || '-'}</td>
              <td rowspan="${rowSpan}">${isEditing ? `<input id="edit_terminal_${o.order_id}" value="${o.terminal || ''}">` : o.terminal || '-'}</td>
              <td rowspan="${rowSpan}">${isEditing ? `<input id="edit_depo_${o.order_id}" value="${o.depo || ''}">` : o.depo || '-'}</td>
              <td rowspan="${rowSpan}">${isEditing ? `<input type="date" id="edit_opency_${o.order_id}" value="${o.open_cy || ''}">` : (o.open_cy ? formatDisplayDate(o.open_cy) : '-')}</td>
              <td rowspan="${rowSpan}">${isEditing ? `
                  <div class="closing-dt-wrap">
                      <input type="date" id="edit_closingdate_${o.order_id}" value="${o.closing_date || ''}">
                      <input type="time" id="edit_closingtime_${o.order_id}" value="${o.closing_time || ''}">
                  </div>` : fmtDT(o.closing_date, o.closing_time)}</td>
          `;
      }

      html += `
          <td>${sz}</td>
          <td>${total}</td>
      `;

      html += `
          <td class="acc">${acc}</td>
          <td class="rej">${rej}</td>
      `;

      if (i === 0) {
        html += `
              <td rowspan="${rowSpan}">${isEditing ? `<select id="edit_shift_${o.order_id}" class="input">
                <option value="Shift 1" ${o.shift === 'Shift 1' ? 'selected' : ''}>Shift 1</option>
                <option value="Shift 2" ${o.shift === 'Shift 2' ? 'selected' : ''}>Shift 2</option>
                <option value="Shift 3" ${o.shift === 'Shift 3' ? 'selected' : ''}>Shift 3</option>
              </select>` : (o.shift || '-')}</td>
              <td rowspan="${rowSpan}">${isEditing ? `<textarea id="edit_remarks_${o.order_id}">${o.remarks || ''}</textarea>` : o.remarks || "-"}</td>
              <td rowspan="${rowSpan}"><button class="btn warn" data-email="${o.order_id}">Send</button></td>
              <td rowspan="${rowSpan}">
                  ${isEditing ? `<button class="btn success tiny" data-save-id="${o.order_id}">Save</button>
                                 <button class="btn danger tiny" data-delete-id="${o.order_id}" style="margin-top:4px;">🗑️</button>` 
                            : `<button class="btn warn tiny" data-edit-id="${o.order_id}">✏️</button>
                               <button class="btn danger tiny" data-delete-id="${o.order_id}" style="margin-top:4px;">🗑️</button>`}
              </td>
          `;
      }
      html += `</tr>`;
    });
  });
  tbody.innerHTML = html;
  
  tbody.querySelectorAll('[data-email]').forEach(btn => {
    btn.onclick = () => {
      const oid = btn.dataset.email;
      sendEmailToVendor(oid);
    };
  });

  tbody.querySelectorAll('button[data-delete-id]').forEach(btn => {
    btn.onclick = () => {
      const orderId = btn.dataset.deleteId;
      const order = state.orders.find(o => o.order_id === orderId);
      
      if (!confirm(`Yakin ingin menghapus order DN ${(order.no_dn || []).join(', ')}?`)) return;
      
      state.orders = state.orders.filter(o => o.order_id !== orderId);
      delete state.containers[orderId];
      delete state.attachments[orderId];
      state.notifications = state.notifications.filter(n => n.relatedOrder !== orderId);
      
      saveState();
      toast(`Order ${order.no_dn.join(', ')} berhasil dihapus.`);
      buildRekap();
    };
  });

  tbody.querySelectorAll('button[data-edit-id]').forEach(btn => {
    btn.onclick = () => {
      state.editing_order_id = btn.dataset.editId;
      saveState();
      buildRekap();
    };
  });

  tbody.querySelectorAll('button[data-save-id]').forEach(btn => {
    btn.onclick = () => {
      const orderId = btn.dataset.saveId;
      const orderToUpdate = state.orders.find(o => o.order_id === orderId);
      if (orderToUpdate) {
        const dnInputEl = document.getElementById(`edit_dn_${orderId}`);
        let dnValue = '';

        if (dnInputEl) {
          if (dnInputEl.tagName === 'INPUT') {
            dnValue = dnInputEl.value.trim();
            orderToUpdate.no_dn = dnValue ? [dnValue] : [];
          } else if (dnInputEl.tagName === 'TEXTAREA') {
            dnValue = dnInputEl.value.trim();
            orderToUpdate.no_dn = dnValue.split('\n').filter(dn => dn.trim() !== '');
          }
        }

        orderToUpdate.tgl_stuffing = document.getElementById(`edit_tglstuff_${orderId}`).value;
        orderToUpdate.shipping_point = document.getElementById(`edit_shippoint_${orderId}`).value;
        orderToUpdate.pod = document.getElementById(`edit_pod_${orderId}`).value;
        orderToUpdate.terminal = document.getElementById(`edit_terminal_${orderId}`).value;
        orderToUpdate.depo = document.getElementById(`edit_depo_${orderId}`).value;
        orderToUpdate.open_cy = document.getElementById(`edit_opency_${orderId}`).value;
        orderToUpdate.closing_date = document.getElementById(`edit_closingdate_${orderId}`).value;
        orderToUpdate.closing_time = document.getElementById(`edit_closingtime_${orderId}`).value;
        orderToUpdate.shift = document.getElementById(`edit_shift_${orderId}`).value;
        orderToUpdate.remarks = document.getElementById(`edit_remarks_${orderId}`).value;

        toast(`Order ${orderId.split('-')[1]} berhasil diupdate.`);
      }
      state.editing_order_id = null;
      saveState();
      buildRekap();
    };
  });
}

  // Initial call and binds
  buildRekap();
  document.getElementById("rekap_vendor").onchange = buildRekap;
  document.getElementById("rekap_start").onchange = buildRekap;
  document.getElementById("rekap_end").onchange = buildRekap;

  // ============================================================
  // EXCEL DOWNLOAD
  // ============================================================
  document.getElementById("btnDownloadRekap").onclick = () => {
    const vend = document.getElementById("rekap_vendor").value;
    const startInput = document.getElementById("rekap_start").value;
    const endInput = document.getElementById("rekap_end").value;
    if (!startInput || !endInput) {
      toast("Harap tentukan rentang tanggal.");
      return;
    }

    const start = parseISODate(startInput);
    const end = parseISODate(endInput);
    const orders = state.orders.filter(o => {
      const d = parseISODate(o.tgl_stuffing);
      return d >= start && d <= end && (vend === "-- Semua --" || o.vendor === vend);
    });

    if (orders.length === 0) {
      toast("Tidak ada data untuk diunduh pada filter ini.");
      return;
    }

    const dataToExport = [];
    orders.forEach(o => {
      const items = state.containers[o.order_id] || [];
      const accepted20 = items.filter(r => r.size === '20ft' && r.accept === true).length;
      const rejected20 = items.filter(r => r.size === '20ft' && r.accept === false).length;
      const accepted40 = items.filter(r => r.size === '40ft/HC' && r.accept === true).length;
      const rejected40 = items.filter(r => r.size === '40ft/HC' && r.accept === false).length;
      const acceptedCombo = items.filter(r => r.size === 'Combo' && r.accept === true).length;
      const rejectedCombo = items.filter(r => r.size === 'Combo' && r.accept === false).length;

      const row = {
        "DN": (o.no_dn || []).join(', '),
        "EMKL": o.vendor,
        "Tgl Stuffing": formatDisplayDate(o.tgl_stuffing),
        "Shipping Point": o.shipping_point,
        "Country Port (Port)": o.pod || '',
        "Terminal": o.terminal || '',
        "Depo": o.depo || '',
        "Open CY": o.open_cy ? formatDisplayDate(o.open_cy) : '',
        "Closing": fmtDT(o.closing_date, o.closing_time),
        "Remarks": o.remarks || '',
        "Total 20ft": o.jml_20ft || 0,
        "Accept 20ft": accepted20,
        "Reject 20ft": rejected20,
        "Total 40ft/HC": o.jml_40ft || 0,
        "Accept 40ft/HC": accepted40,
        "Reject 40ft/HC": rejected40,
        "Total Combo": o.jml_combo || 0,
        "Accept Combo": acceptedCombo,
        "Reject Combo": rejectedCombo,
        "Status": o.summary_status
      };
      dataToExport.push(row);
    });

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Rekap Orderan");
    XLSX.writeFile(workbook, "Rekap_List_Orderan.xlsx");
  };
}
/* ===================== ADMIN: STATUS TRUCK ===================== */

// Baris 800-850 (app.js)
function showFilteredContainerDetailsModal(orderId, filterFn, title) {
    const order = state.orders.find(o => o.order_id === orderId);
    if (!order) return;

    const allContainers = (state.containers[orderId] || []); 
    
    // ✅ PERBAIKAN: Jika filter adalah size_20ft, tampilkan 20ft + COMBO (dengan identitas asli)
    let filteredContainers;
    if (title.includes('20ft')) {
        // Tampilkan 20ft normal + COMBO (tetap sebagai COMBO)
        filteredContainers = allContainers.filter(c => c.size === '20ft' || c.size === 'Combo');
    } else {
        filteredContainers = allContainers.filter(filterFn);
    }

    if (filteredContainers.length === 0) {
        toast("Tidak ada kontainer yang cocok dengan filter ini.");
        return;
    }

    let tableRows = filteredContainers.map((r, index) => {
        let containerCellHtml;
        let sealCellHtml;

        if (r.size === 'Combo') {
            const containers = (r.no_container || '').split(/[\n,]/).map(s => s.trim()).filter(s => s);
            const seals = (r.no_seal || '').split(/[\n,]/).map(s => s.trim()).filter(s => s);

            const c1 = containers[0] || '-';
            const c2 = containers[1] || '';
            containerCellHtml = `<td>${c1}${c2 ? '<hr style="margin: 2px 0; border-top-color: #ccc;">' + c2 : ''}</td>`;
            
            const s1 = seals[0] || '-';
            const s2 = seals[1] || '';
            sealCellHtml = `<td>${s1}${s2 ? '<hr style="margin: 2px 0; border-top-color: #ccc;">' + s2 : ''}</td>`;
            
        } else {
            containerCellHtml = `<td>${r.no_container || '-'}</td>`;
            sealCellHtml = `<td>${r.no_seal || '-'}</td>`;
        }
        
        let statusDisplay;
        if (r.accept === false) {
             statusDisplay = 'Reject';
        } else if (r.accept === null) {
             statusDisplay = 'Pending Respon';
        } else {
             statusDisplay = r.status || 'Confirm Order';
        }

        return `
            <tr>
                <td>${index + 1}</td>
                <td style="font-weight: 600; color: ${r.size === 'Combo' ? 'var(--blue-2)' : 'var(--ink)'};">${r.size || '-'}</td> <!-- ✅ COMBO tetap ditampilkan -->
                ${containerCellHtml}
                ${sealCellHtml}
                <td>${r.no_mobil || '-'}</td>
                <td>${r.nama_supir || '-'}</td>
                <td>${r.contact || '-'}</td>
                <td>${r.depo || '-'}</td>
                <td style="font-weight:700; color: ${r.status.toLowerCase().includes('reject') || statusDisplay.toLowerCase().includes('Repo') ? 'var(--red)' : 'var(--ink)'};">${statusDisplay}</td>
            </tr>
        `;
    }).join('');

    const modalHtml = `
        <div class="table-wrap" style="max-height: 60vh; overflow-y: auto;">
            <table class="table compact" style="width: 100%;">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Jenis</th>
                        <th>No. Container</th>
                        <th>No. Seal</th>
                        <th>No. Mobil</th>
                        <th>Supir</th>
                        <th>Contact</th>
                        <th>Depo</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>
    `;
    
    // ✅ PERBAIKAN: Update judul modal agar jelas
    let finalTitle = title;
    if (title.includes('20ft')) {
        finalTitle = 'Detail 20ft + COMBO';
    }
    const fullTitle = `${finalTitle} (DN: ${(order.no_dn || []).join(' / ')})`;
    openModal(fullTitle, modalHtml);
}

// ✅ KODE DIPERBAIKI - HOISTING FUNGSI KE LUAR SCOPE
function renderAdminStatus(){
  // 🔥 FIX: Jangan pakai variabel 'content' karena sudah di-declare di global scope
  const mainContent = document.getElementById("content");
  
  mainContent.innerHTML = `
    <div class="main-header"><h3 style="margin:0">🚛 Admin – Status Truck</h3>
      <div class="small">Tampilan status berdasarkan order. Klik angka pada kolom jumlah untuk melihat detail.</div></div>
<div class="card">
    <div class="row">
    <div class="col" style="grid-column: span 2;">
      <label>Filter EMKL</label>
      <select id="status_vendor" class="input">
        <option>-- Semua --</option>
      </select>
    </div>
    <div class="col" style="grid-column: span 2;">
      <label>Tgl Stuffing (start)</label>
      <input id="status_start" type="date" class="input">
    </div>
    <div class="col" style="grid-column: span 2;">
      <label>Tgl Stuffing (end)</label>
      <input id="status_end" type="date" class="input">
    </div>
    <div class="col" style="grid-column: span 2;">
      <label>ETD (start)</label>
      <input id="status_etd_start" type="date" class="input">
    </div>
    <div class="col" style="grid-column: span 2;">
      <label>ETD (end)</label>
      <input id="status_etd_end" type="date" class="input">
    </div>
    <div class="col" style="grid-column: span 1;">
      <label>Cari DN</label>
      <input id="status_search_dn" type="text" class="input" placeholder="Cari No DN...">
    </div>
    <div class="col" style="grid-column: span 1; display:flex; align-items:flex-end;">
        <button id="btnDownloadStatusTruck" class="btn excel full">📊 Excel</button>
    </div>
  </div>
        <div class="rekap-wrap" style="margin-top: 12px;">
        <table class="table rekap" id="statusTable" style="font-size: 11px;">
          <thead>
            <tr class="top">
                <th>No</th>
                <th>Ocean BL</th>
                <th>DN</th>
                <th>Final Destination</th>
                <th>ETD</th>
                <th>Shipping Line</th>
                <th>Vessel Name</th>
                <th>Open CY</th>
                <th>Closing Fisik</th> 
                <th>Closing CY</th>
                <th>EMKL</th>
                <th>W/H</th>
                <th>Term</th>
                <th>20ft</th>
                <th>40ft/HC</th>
                <th>Sum Cont</th>
                
                <th>Pending</th>
                <th>Confirm Order</th>
                <th>Reject</th>
                <th>Muat Depo</th>
                <th>Muat Gudang</th>
                <th>Repo</th> 
                <th>Gate In Port</th>
                
                <th>Tonase Order</th>
                <th>Remarks</th>
            </tr>
          </thead>
          <tbody id="statusBody"></tbody>
        </table>
      </div>
    </div>
  `;

  // Populate vendor dropdown
  const rVend = document.getElementById("status_vendor");
  VENDORS_DEFAULT.forEach(v=>{ 
    const o=document.createElement("option"); 
    o.textContent=v; 
    rVend.appendChild(o); 
  });
  
  // Set default dates
  const rStart = document.getElementById("status_start");
  const rEnd = document.getElementById("status_end");
  const now = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(now.getDate() - 30);
  rStart.value = toISODate(thirtyDaysAgo);
  rEnd.value = toISODate(now);

  // Helper function untuk clickable cell
  function createClickableCell(count, orderId, filterType, filterTitle) {
      if (count === 0 || !count) {
          return '0';
      }
      return `<button 
                class="btn-link" 
                data-order-id="${orderId}" 
                data-filter-type="${filterType}"
                data-filter-title="${filterTitle}"
              >${count}</button>`;
  }

  // Get filtered data
  function getFilteredStatusData() {
    const vend = document.getElementById("status_vendor").value;
    const start = parseISODate(document.getElementById("status_start").value);
    const end = parseISODate(document.getElementById("status_end").value);

    const etdStartEl = document.getElementById("status_etd_start");
    const etdEndEl = document.getElementById("status_etd_end");
    const etdStart = etdStartEl.value ? parseISODate(etdStartEl.value) : null;
    const etdEnd = etdEndEl.value ? parseISODate(etdEndEl.value) : null;
    
    const searchDnTerm = document.getElementById("status_search_dn").value.trim().toLowerCase(); 

    const filteredOrders = state.orders.filter(o => {
        const d = parseISODate(o.tgl_stuffing);
        const stuffingOk = d >= start && d <= end;
        const vendorOk = (vend === "-- Semua --" || o.vendor === vend);

        let etdOk = true; 
        if (etdStart || etdEnd) {
            if (!o.etd) {
                etdOk = false;
            } else {
                const orderEtd = parseISODate(o.etd);
                if (etdStart && orderEtd < etdStart) etdOk = false;
                if (etdEnd && orderEtd > etdEnd) etdOk = false;
            }
        }
        
        let dnOk = true;
        if (searchDnTerm) {
            dnOk = (o.no_dn || []).some(dn => dn.toLowerCase().includes(searchDnTerm));
        }
        
        const items = state.containers[o.order_id] || [];
        const hasAcceptedContainers = items.some(c => c.accept === true);
        
        return stuffingOk && vendorOk && etdOk && dnOk && hasAcceptedContainers;
        
    }).reverse();

    const data = [];
    let displayedIdx = 0;
    
    filteredOrders.forEach((o, idx) => {
        const items = state.containers[o.order_id] || [];
        
        const acceptedItems = items.filter(c => c.accept === true); 
        const accepted20Normal = acceptedItems.filter(c => c.size === '20ft').length;
        const acceptedCombo = acceptedItems.filter(c => c.size === 'Combo').length;
        const accepted40 = acceptedItems.filter(c => c.size === '40ft/HC').length;
        
        const accepted20 = accepted20Normal + (acceptedCombo * 2);
        const totalAccepted = accepted20 + accepted40;

        const totalOrderedContainers = items.length; 

        if (totalOrderedContainers === 0) return;
        
        const countPending = items.filter(c => c.accept === null).length;
        const countReject = items.filter(c => c.accept === false).length;
        
        const countConfirmOrder = acceptedItems.filter(c => (c.status || '').toLowerCase() === 'confirm order').length;
        const countSudahMuat = acceptedItems.filter(c => (c.status || '').toLowerCase() === 'Muat Depo').length;
        const countMuatGudang = acceptedItems.filter(c => (c.status || '').toLowerCase() === 'muat gudang').length;
        const countRepo = acceptedItems.filter(c => (c.status || '').toLowerCase() === 'repo').length;
        const countGateIn = acceptedItems.filter(c => (c.status || '').toLowerCase() === 'gate in port').length;

        displayedIdx++;
        data.push({
            idx: displayedIdx,
            order: o,
            accepted20,
            accepted40, 
            acceptedCombo,
            totalAccepted: totalAccepted,
            countPending, countConfirmOrder, countReject, countSudahMuat, countMuatGudang, countRepo, countGateIn
        });
    });
    return data;
  }

  // Build table
  function buildStatusTable() {
    const tbody = document.getElementById("statusBody");
    const filteredData = getFilteredStatusData();

    if (filteredData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="25" class="center">Tidak ada data order pada periode ini.</td></tr>`;
        return;
    }
    
    tbody.innerHTML = filteredData.map(({ idx, order: o, ...counts }) => `
        <tr>
            <td>${idx}</td>
            <td>-</td>
            <td>${(o.no_dn || []).join('<br>')}</td>
            <td>${o.pod || '-'}</td>
            <td>${o.etd ? formatDisplayDate(o.etd) : '-'}</td>
            <td>-</td>
            <td>-</td>
            <td>${o.open_cy ? formatDisplayDate(o.open_cy) : '-'}</td>
            <td>-</td>
            <td>${fmtDT(o.closing_date, o.closing_time)}</td>
            <td>${o.vendor || '-'}</td>
            <td>${o.shipping_point || '-'}</td>
            <td>${o.terminal || '-'}</td>
            
            <td class="center">${createClickableCell(counts.accepted20, o.order_id, 'size_20ft', 'Detail 20ft')}</td>
            <td class="center">${createClickableCell(counts.accepted40, o.order_id, 'size_40ft', 'Detail 40ft/HC')}</td>
            <td class="center">${createClickableCell(counts.totalAccepted, o.order_id, 'all_accepted', 'Total Accepted')}</td>
            
            <td class="center">${createClickableCell(counts.countPending, o.order_id, 'status_pending_null', 'Pending (Respon)')}</td>
            <td class="center">${createClickableCell(counts.countConfirmOrder, o.order_id, 'status_confirm_order', 'Confirm Order')}</td>
            <td class="center">${createClickableCell(counts.countReject, o.order_id, 'status_reject', 'Reject')}</td>
            <td class="center">${createClickableCell(counts.countSudahMuat, o.order_id, 'status_sudah_muat', 'Muat Depo')}</td>
            <td class="center">${createClickableCell(counts.countMuatGudang, o.order_id, 'status_muat_gudang', 'Muat Gudang')}</td>
            <td class="center">${createClickableCell(counts.countRepo, o.order_id, 'status_repo', 'repo')}</td>
            <td class="center">${createClickableCell(counts.countGateIn, o.order_id, 'status_gate_in', 'Gate In Port')}</td>
            <td>-</td>
            <td>${o.remarks || '-'}</td>
        </tr>
    `).join("");

    // Event handler untuk clickable cells
    const statusBody = document.getElementById("statusBody");
    statusBody.onclick = function(e) {
      const target = e.target;
      if (target.tagName === 'BUTTON' && target.classList.contains('btn-link')) {
        const orderId = target.dataset.orderId;
        const filterType = target.dataset.filterType;
        const title = target.dataset.filterTitle;
        if (!orderId || !filterType) return;
        
        let filterFunction;
        switch (filterType) {
          case 'size_20ft': filterFunction = c => c.size === '20ft' && c.accept === true; break;
          case 'size_40ft': filterFunction = c => c.size === '40ft/HC' && c.accept === true; break;
          case 'all_accepted': filterFunction = c => c.accept === true; break;
          case 'status_pending_null': filterFunction = c => c.accept === null; break;
          case 'status_confirm_order': filterFunction = c => c.accept === true && (c.status || '').toLowerCase() === 'confirm order'; break;
          case 'status_reject': filterFunction = c => c.accept === false; break;
          case 'status_sudah_muat': filterFunction = c => c.accept === true && (c.status || '').toLowerCase() === 'Muat Depo'; break;
          case 'status_muat_gudang': filterFunction = c => c.accept === true && (c.status || '').toLowerCase() === 'muat gudang'; break;
          case 'status_repo': filterFunction = c => c.accept === true && (c.status || '').toLowerCase() === 'repo'; break;
          case 'status_gate_in': filterFunction = c => c.accept === true && (c.status || '').toLowerCase() === 'gate in port'; break;
          default: filterFunction = c => true;
        }
        showFilteredContainerDetailsModal(orderId, filterFunction, title);
      }
    };
  }

  // Add CSS for btn-link
  const style = document.createElement('style');
  style.innerHTML = `
    .btn-link{background:none;border:none;color:var(--blue);text-decoration:underline;cursor:pointer;padding:0;font-size:inherit;font-family:inherit;}
    .btn-link:hover{color:var(--blue-2);}
  `;
  document.head.appendChild(style);

  // Event listeners
  rVend.onchange = buildStatusTable;
  rStart.onchange = buildStatusTable;
  rEnd.onchange = buildStatusTable;
  document.getElementById("status_etd_start").onchange = buildStatusTable;
  document.getElementById("status_etd_end").onchange = buildStatusTable;
  document.getElementById("status_search_dn").oninput = buildStatusTable;

  // Download Excel
  document.getElementById("btnDownloadStatusTruck").onclick = () => {
    const dataToExport = [];
    const filteredData = getFilteredStatusData();

    if (filteredData.length === 0) {
        toast("Tidak ada data untuk diunduh.");
        return;
    }

    filteredData.forEach(({ idx, order: o, ...counts }) => {
        dataToExport.push({
            "No": idx,
            "DN": (o.no_dn || []).join(', '),
            "Final Destination": o.pod || '-',
            "ETD": formatDisplayDate(o.etd) || '-',
            "Open CY": o.open_cy ? formatDisplayDate(o.open_cy) : '-',
            "Closing CY": fmtDT(o.closing_date, o.closing_time),
            "EMKL": o.vendor || '-',
            "W/H": o.shipping_point || '-',
            "Term": o.terminal || '-',
            "20ft": counts.accepted20,
            "40ft/HC": counts.accepted40,
            "Sum Cont": counts.totalAccepted,
            "Pending Respon": counts.countPending,
            "Reject": counts.countReject,
            "Confirm Order": counts.countConfirmOrder,
            "Muat Depo": counts.countSudahMuat,
            "Muat Gudang": counts.countMuatGudang,
            "Repo": counts.countRepo,
            "Gate In Port": counts.countGateIn,
            "Remarks": o.remarks || '-'
        });
    });

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Status Truck");
    const fileName = `Status_Truck_Admin_${document.getElementById("status_start").value}_to_${document.getElementById("status_end").value}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  // Initial render
  buildStatusTable();
}

/* ===================== VENDOR: HOME (Calendar + availability) ===================== */
function renderVendorHome(){
  const vendor = state.vendor_name || "UNKNOWN";
  const base = parseISODate(state.selected_date_vendor);
  const month = base.getMonth()+1;
  const year = base.getFullYear();
  
  // ✅ REVISI 1: Cek apakah tanggal yang dipilih SEBELUM hari ini
  const todayISO = todayStr();
  const selectedDateISO = state.selected_date_vendor;
  const selectedDate = parseISODate(selectedDateISO);
  const today = parseISODate(todayISO);
  const isPastDate = selectedDate < today; // TRUE jika tanggal sebelum hari ini

  // 📊 BARU: Hitung data untuk Dashboard Status
  const vendorOrders = state.orders.filter(o => o.vendor === vendor);
  
  // Count Ketersediaan (Total dari tanggal hari ini)
  const availToday = state.availability[todayISO] || {};
  const vendorAvailToday = availToday[vendor] || {"20ft": 0, "40ft/HC": 0, "Combo": 0};
  const totalAvailability = Number(vendorAvailToday["20ft"] || 0) + 
                           Number(vendorAvailToday["40ft/HC"] || 0) + 
                           Number(vendorAvailToday["Combo"] || 0);
  
  // Count Accept Order (Semua order yang sudah di-accept)
  let totalAccept = 0;
  vendorOrders.forEach(o => {
    const containers = state.containers[o.order_id] || [];
    totalAccept += containers.filter(c => c.accept === true).length;
  });
  
  // Count Reject Order (Semua order yang di-reject)
  let totalReject = 0;
  vendorOrders.forEach(o => {
    const containers = state.containers[o.order_id] || [];
    totalReject += containers.filter(c => c.accept === false).length;
  });

  // Count Repo (container yang statusnya Repo)
  let totalRepo = 0;
  vendorOrders.forEach(o => {
    const containers = state.containers[o.order_id] || [];
    totalRepo += containers.filter(c => c.accept === true && (c.status || '').toLowerCase() === 'repo').length;
  });

  // 📊 BARU: Hitung Count DN & Container
  const now = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(now.getMonth() - 1);
  oneMonthAgo.setHours(0, 0, 0, 0);

  const dnFinal = { today: new Set(), monthly: new Set(), overall: new Set() };
  let processedContainers = { today: 0, monthly: 0, overall: 0 };

  vendorOrders.forEach(order => {
    const createdAt = order.created_at ? new Date(order.created_at) : parseISODate(order.tgl_stuffing);
    const orderDateISO = toISODate(createdAt);
    const dnKey = order.order_id;

    dnFinal.overall.add(dnKey);
    if (createdAt >= oneMonthAgo) dnFinal.monthly.add(dnKey);
    if (orderDateISO === todayISO) dnFinal.today.add(dnKey);
    
    const containers = state.containers[order.order_id] || [];
    containers.forEach(container => {
      processedContainers.overall++;
      if (createdAt >= oneMonthAgo) processedContainers.monthly++;
      if (orderDateISO === todayISO) processedContainers.today++;
    });
  });

  content.innerHTML = `
    <div class="main-header"><h3 style="margin:0">🏠 EMKL – Home</h3>
      <div class="small">Kalender & update ketersediaan container</div></div>
    
    <!-- 📊 Dashboard Status -->
    <div class="card" style="margin-top: 16px;">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:14px; border-bottom:2px solid #e2e8f0; padding-bottom:12px;">
        <span style="font-size:1.2rem;">📊</span>
        <div>
          <div style="font-size:1rem; font-weight:800; color:#1e293b;">Dashboard Status</div>
          <div style="font-size:0.72rem; color:#94a3b8;">Klik kartu untuk melihat detail kontainer</div>
        </div>
      </div>
      <div class="row" style="gap: 12px;">
        <!-- KETERSEDIAAN vs REALISASI -->
        <div class="col" style="grid-column: span 6;">
          <div style="border:1.5px solid #e2e8f0; border-radius:10px; padding:14px; background:#fff;">
            <div style="font-size:0.72rem; color:#64748b; font-weight:700; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">📦 Ketersediaan vs Realisasi (Hari Ini)</div>
            <div style="display:flex; gap:6px; font-size:0.65rem; margin-bottom:12px;">
              <span style="display:flex; align-items:center; gap:4px;"><span style="width:8px; height:8px; border-radius:50%; background:#1d4ed8; display:inline-block;"></span><span style="color:#64748b;">Biru = Ketersediaan</span></span>
              <span style="color:#cbd5e1;">|</span>
              <span style="display:flex; align-items:center; gap:4px;"><span style="width:8px; height:8px; border-radius:50%; background:#16a34a; display:inline-block;"></span><span style="color:#64748b;">Hijau = Realisasi</span></span>
            </div>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <div style="display:flex; align-items:center; justify-content:space-between; background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:8px; padding:10px 14px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-size:0.65rem; background:#dbeafe; color:#1d4ed8; font-weight:700; padding:2px 7px; border-radius:4px;">A</span>
                  <span style="font-size:0.75rem; font-weight:700; color:#475569; text-transform:uppercase; letter-spacing:0.5px;">Ketersediaan 20ft</span>
                </div>
                <div style="display:flex; align-items:center; gap:20px;">
                  <span style="font-size:2rem; font-weight:900; color:#1d4ed8; line-height:1;">${Number(vendorAvailToday['20ft'] || 0)}</span>
                  <div style="width:1px; height:32px; background:#e2e8f0;"></div>
                  <div style="text-align:right; min-width:40px;">
                    <div style="font-size:2rem; font-weight:900; color:#16a34a; line-height:1;">${(() => { let r=0; vendorOrders.forEach(o => { (state.containers[o.order_id]||[]).filter(c=>c.accept===true&&c.size==='20ft').forEach(()=>r++); }); return r; })()}</div>
                  </div>
                </div>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:8px; padding:10px 14px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-size:0.65rem; background:#dbeafe; color:#1d4ed8; font-weight:700; padding:2px 7px; border-radius:4px;">A</span>
                  <span style="font-size:0.75rem; font-weight:700; color:#475569; text-transform:uppercase; letter-spacing:0.5px;">Ketersediaan 40ft</span>
                </div>
                <div style="display:flex; align-items:center; gap:20px;">
                  <span style="font-size:2rem; font-weight:900; color:#1d4ed8; line-height:1;">${Number(vendorAvailToday['40ft/HC'] || 0)}</span>
                  <div style="width:1px; height:32px; background:#e2e8f0;"></div>
                  <div style="text-align:right; min-width:40px;">
                    <div style="font-size:2rem; font-weight:900; color:#16a34a; line-height:1;">${(() => { let r=0; vendorOrders.forEach(o => { (state.containers[o.order_id]||[]).filter(c=>c.accept===true&&c.size==='40ft/HC').forEach(()=>r++); }); return r; })()}</div>
                  </div>
                </div>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:8px; padding:10px 14px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-size:0.65rem; background:#dbeafe; color:#1d4ed8; font-weight:700; padding:2px 7px; border-radius:4px;">A</span>
                  <span style="font-size:0.75rem; font-weight:700; color:#475569; text-transform:uppercase; letter-spacing:0.5px;">Ketersediaan Combo</span>
                </div>
                <div style="display:flex; align-items:center; gap:20px;">
                  <span style="font-size:2rem; font-weight:900; color:#1d4ed8; line-height:1;">${Number(vendorAvailToday['Combo'] || 0)}</span>
                  <div style="width:1px; height:32px; background:#e2e8f0;"></div>
                  <div style="text-align:right; min-width:40px;">
                    <div style="font-size:2rem; font-weight:900; color:#16a34a; line-height:1;">${(() => { let r=0; vendorOrders.forEach(o => { (state.containers[o.order_id]||[]).filter(c=>c.accept===true&&c.size==='Combo').forEach(()=>r++); }); return r; })()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- STAT CARDS KANAN -->
        <div class="col" style="grid-column: span 6;">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; height:100%;">
            <div class="vendor-stat-clickable" data-stat="accept" style="background:#16a34a; border-radius:10px; padding:12px 14px; text-align:center; cursor:pointer; transition:opacity 0.15s; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:80px;">
              <div style="font-size:2.8rem; font-weight:900; color:#ffffff; line-height:1; margin-bottom:8px;">${totalAccept}</div>
              <div style="font-size:1rem; color:#ffffff; font-weight:800; padding-top:6px; text-transform:uppercase; letter-spacing:1px; border-top:1px solid rgba(255,255,255,0.25); width:100%; text-align:center;">Accept Order</div>
            </div>
            <div class="vendor-stat-clickable" data-stat="reject" style="background:#dc2626; border-radius:10px; padding:12px 14px; text-align:center; cursor:pointer; transition:opacity 0.15s; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:80px;">
              <div style="font-size:2.8rem; font-weight:900; color:#ffffff; line-height:1; margin-bottom:8px;">${totalReject}</div>
              <div style="font-size:1rem; color:#ffffff; font-weight:800; padding-top:6px; text-transform:uppercase; letter-spacing:1px; border-top:1px solid rgba(255,255,255,0.25); width:100%; text-align:center;">Reject Order</div>
            </div>
            <div class="vendor-stat-clickable" data-stat="repo" style="background:#ea580c; border-radius:10px; padding:12px 14px; text-align:center; cursor:pointer; transition:opacity 0.15s; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:80px;">
              <div style="font-size:2.8rem; font-weight:900; color:#ffffff; line-height:1; margin-bottom:8px;">${totalRepo}</div>
              <div style="font-size:1rem; color:#ffffff; font-weight:800; padding-top:6px; text-transform:uppercase; letter-spacing:1px; border-top:1px solid rgba(255,255,255,0.25); width:100%; text-align:center;">Repo</div>
            </div>
            <div class="vendor-stat-clickable" data-stat="gatein" style="background:#7c3aed; border-radius:10px; padding:12px 14px; text-align:center; cursor:pointer; transition:opacity 0.15s; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:80px;">
              <div style="font-size:2.8rem; font-weight:900; color:#ffffff; line-height:1; margin-bottom:8px;">${(() => { let r=0; vendorOrders.forEach(o => { (state.containers[o.order_id]||[]).filter(c=>c.accept===true&&(c.status||'').toLowerCase()==='gate in port').forEach(()=>r++); }); return r; })()}</div>
              <div style="font-size:1rem; color:#ffffff; font-weight:800; padding-top:6px; text-transform:uppercase; letter-spacing:1px; border-top:1px solid rgba(255,255,255,0.25); width:100%; text-align:center;">Gate In Port</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 📊 BARU: Count DN & Container -->
    <div style="margin: 16px;">
      <div class="row" style="gap: 16px;">
        <div class="col" style="grid-column: span 6;">
          <div class="card count-card">
            <h3 style="margin:0 0 10px 0">Count DN</h3>
            <div class="row">
              ${['today', 'monthly', 'overall'].map(period => `
                <div class="col">
                  <div class="stat-card" style="border-color: #fee2e2; padding: 15px 10px;">
                    <div class="stat-num" style="font-size: 2rem; color: var(--ink);">${dnFinal[period].size}</div>
                    <div class="stat-label" style="font-weight: 600; color: #92400e; background-color: #fef3c7; padding: 2px 6px; border-radius: 4px; display: block; width: fit-content; margin: 0 auto;">${period.charAt(0).toUpperCase() + period.slice(1)}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="col" style="grid-column: span 6;">
          <div class="card count-card">
            <h3 style="margin:0 0 10px 0">Count Container</h3>
            <div class="row">
              ${['today', 'monthly', 'overall'].map(period => `
                <div class="col">
                  <div class="stat-card" style="border-color: #fee2e2; padding: 15px 10px;">
                    <div class="stat-num" style="font-size: 2rem; color: var(--ink);">${processedContainers[period]}</div>
                    <div class="stat-label" style="font-weight: 600; color: var(--blue-2); background-color: var(--blue-light); padding: 2px 6px; border-radius: 4px; display: block; width: fit-content; margin: 0 auto;">${period.charAt(0).toUpperCase() + period.slice(1)}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="row">
        <div class="col" style="grid-column: span 6;">
          <label>Pilih Bulan</label>
          <select id="v_home_month" class="input"></select>
        </div>
        <div class="col" style="grid-column: span 6;">
          <label>Pilih Tahun</label>
          <select id="v_home_year" class="input"></select>
        </div>
      </div>
      <div class="cal-wrap" style="margin-top:10px">
      <h2 style="margin:0 0 16px 0; font-size:1.5rem; color:var(--ink); display:flex; align-items:center; gap:8px;">
    <span style="font-size:1.8rem;">🚛</span> KETERSEDIAAN TRUCK
  </h2>
        <div class="cal-grid" id="vCalHead"></div>
        <div id="vCalBody"></div>
      </div>
    </div>
  `;
  
  const mSel = document.getElementById("v_home_month");
  for(let i=1;i<=12;i++){ const opt=document.createElement("option"); opt.value=i; opt.textContent=new Date(2000,i-1,1).toLocaleString('id-ID',{month:'long'}); if(i===month) opt.selected=true; mSel.appendChild(opt); }
  
  const currentYear = new Date().getFullYear();
  const startYear = Math.max(currentYear, 2025); 
  const ySel = document.getElementById("v_home_year");
  for(let y=startYear-1;y<=startYear+1;y++){ 
    if (y < 2025) continue;
    const opt=document.createElement("option"); 
    opt.value=y; 
    opt.textContent=y; 
    if(y===year) opt.selected=true; 
    ySel.appendChild(opt); 
  }

  const head = document.getElementById("vCalHead");
  ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU", "MINGGU"].forEach(n=>{
    const d=document.createElement("div"); d.className="cal-head"; d.textContent=n; head.appendChild(d);
  });
  
function draw(y,m){
  const body = document.getElementById("vCalBody");
  body.innerHTML="";
  const cal = monthMatrix(y,m);
  const todayISO = todayStr();
  const today = parseISODate(todayISO);
  
  cal.forEach(week=>{
    const row = document.createElement("div"); row.className="cal-grid";
    week.forEach(d=>{
      const cell = document.createElement("div");
      if(d===0){ row.appendChild(cell); return; }
      const s = toISODate(new Date(y,m-1,d));
      const data = state.availability[s]||{};
      const rowv = data[vendor] || {"20ft":0,"40ft/HC":0,"Combo":0};
      const t20 = Number(rowv["20ft"]||0), t40 = Number(rowv["40ft/HC"]||0), tCombo = Number(rowv["Combo"]||0);
      const hasAvailability = (t20+t40+tCombo)>0; // ✅ REVISI: Ganti 'ok' jadi 'hasAvailability'
      const isTodayCell = (s===todayISO);
      const isSelected = (s===state.selected_date_vendor);
      
      const cellDate = parseISODate(s);
      const isPastDateCell = cellDate < today;
      
      // ✅ REVISI: Hapus class 'ok', gunakan style inline untuk bold
      cell.className = "cal-cell"+(isTodayCell?" today":"")+(isSelected?" selected":"")+(isPastDateCell?" cal-disabled":"");
      
      // ✅ REVISI: Tambahkan font-weight: 700 jika sudah ada ketersediaan
      const numStyle = hasAvailability ? 'font-weight: 700;' : '';
      
      cell.innerHTML = `<div class="cal-num" style="${numStyle}">${d}</div><div class="labels">20ft = ${t20}<br>40ft/HC = ${t40}<br>Combo = ${tCombo}</div><button class="btn pick" data-pick="${s}" ${isPastDateCell ? 'disabled' : ''}>Pilih</button>`;
      row.appendChild(cell);
    });
    body.appendChild(row);
  });
  
  body.querySelectorAll("button[data-pick]").forEach(b=>{
    b.onclick = ()=>{ 
      const dateStr = b.dataset.pick;
      const clickedDate = parseISODate(dateStr);
      const today = parseISODate(todayStr());
      
      if(clickedDate < today) {
        toast("⚠️ Anda tidak dapat mengubah ketersediaan untuk tanggal yang sudah lewat.");
        return;
      }
      
      // ✅ REVISI 3: Langsung buka modal ketersediaan
      state.selected_date_vendor = dateStr; 
      saveState();
      showVendorAvailabilityModal(dateStr);
    };
  });
}

// ✅ REVISI 3: Fungsi baru untuk modal ketersediaan vendor
function showVendorAvailabilityModal(dateStr) {
  const vendor = state.vendor_name;
  const current = (state.availability[dateStr]||{})[vendor] || {"20ft":0,"40ft/HC":0,"Combo":0};
  
  const modalHtml = `
    <div class="form-section">
      <div class="section-title">Ketersediaan Container - ${formatDisplayDate(dateStr)}</div>
      <div class="form-grid">
        <div class="span-4">
          <label>Jumlah container 20ft</label>
          <input id="modal_av20" type="number" class="input" min="0" value="${Number(current['20ft']||0)}">
        </div>
        <div class="span-4">
          <label>Jumlah container 40ft/HC</label>
          <input id="modal_av40" type="number" class="input" min="0" value="${Number(current['40ft/HC']||0)}">
        </div>
        <div class="span-4">
          <label>Jumlah container Combo</label>
          <input id="modal_avCombo" type="number" class="input" min="0" value="${Number(current['Combo']||0)}">
        </div>
      </div>
    </div>
  `;
  
  openModal(`Ketersediaan - ${vendor}`, modalHtml, {
    closeBtnText: '✓ Simpan',
    closeBtnClass: 'primary',
    onClose: () => {
      const a20 = Number(document.getElementById("modal_av20").value||0);
      const a40 = Number(document.getElementById("modal_av40").value||0);
      const aCombo = Number(document.getElementById("modal_avCombo").value||0);
      
      const oldAvail = (state.availability[dateStr] || {})[vendor] || {"20ft":0, "40ft/HC":0, "Combo":0};
      
      state.availability[dateStr] = state.availability[dateStr] || {};
      state.availability[dateStr][vendor] = {"20ft":a20, "40ft/HC":a40, "Combo":aCombo};
      
      const totalChange = (a20 - oldAvail["20ft"]) + (a40 - oldAvail["40ft/HC"]) + (aCombo - oldAvail["Combo"]);
      if (totalChange !== 0) {
        state.notifications.push({
          id: genId("NOTIF"),
          message: `EMKL ${vendor} telah memperbarui ketersediaan untuk tanggal ${formatDisplayDate(dateStr)}.`,
          timestamp: new Date().toISOString(),
          isRead: false,
          role: 'admin',
          link: 'Home'
        });
      }
      
      saveState();
      closeModal();
      renderVendorHome();
      toast(`✅ Ketersediaan ${vendor} untuk ${formatDisplayDate(dateStr)} berhasil diperbarui.`);
    }
  });
}  
  draw(year, month);
  
  mSel.onchange = ()=>{ state.selected_date_vendor = toISODate(new Date(Number(ySel.value), Number(mSel.value)-1, 1)); saveState(); renderVendorHome(); };
  ySel.onchange = ()=>{ state.selected_date_vendor = toISODate(new Date(Number(ySel.value), Number(mSel.value)-1, 1)); saveState(); renderVendorHome(); };

  // Event listener stat cards yang bisa diklik
  document.querySelectorAll('.vendor-stat-clickable').forEach(card => {
    card.addEventListener('mouseenter', () => { card.style.transform = 'translateY(-3px)'; card.style.boxShadow = card.style.boxShadow.replace('0.4)', '0.6)'); });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    card.onclick = () => {
      const stat = card.dataset.stat;
      const allContainers = [];
      vendorOrders.forEach(order => {
        (state.containers[order.order_id] || []).forEach(c => {
          let match = false;
          if (stat === 'accept') match = c.accept === true;
          else if (stat === 'reject') match = c.accept === false;
          else if (stat === 'repo') match = c.accept === true && (c.status || '').toLowerCase() === 'repo';
          else if (stat === 'gatein') match = c.accept === true && (c.status || '').toLowerCase() === 'gate in port';
          if (match) allContainers.push({ order, c });
        });
      });
      if (allContainers.length === 0) { toast('Tidak ada data.'); return; }
      const statLabels = { accept: '✅ Accept Order', reject: '❌ Reject Order', repo: '⚠️ Repo', gatein: '🚢 Gate In Port' };
      const rows = allContainers.map((item, i) => `
        <tr>
          <td>${i+1}</td>
          <td>${(item.order.no_dn||[]).join(', ')}</td>
          <td>${formatDisplayDate(item.order.tgl_stuffing)}</td>
          <td>${item.c.size}</td>
          <td>${item.c.no_container || '-'}</td>
          <td>${item.c.no_mobil || '-'}</td>
          <td>${item.c.status || (item.c.accept === false ? 'Reject' : '-')}</td>
        </tr>`).join('');
      openModal(statLabels[stat], `
        <div class="table-wrap" style="max-height:55vh; overflow-y:auto;">
          <table class="table compact">
            <thead><tr><th>No</th><th>DN</th><th>Tgl Stuffing</th><th>Size</th><th>Container No</th><th>Plat Mobil</th><th>Status</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `);
    };
  });
}
/////

//


/* ===================== VENDOR: LIST ORDERAN (Add Detail) ===================== */
function isContainerValid(value) {
    // Format: 4 huruf - 7 angka (contoh: ABCD-1234567)
    // Regex: ^[A-Z]{4}[0-9]{7}$ - mencari 4 huruf diikuti 7 angka, tanpa strip.
    const strictRegex = /^[A-Z]{4}[0-9]{7}$/; 
    
    // Hapus semua karakter non-alfanumerik dan ubah ke kapital
    const cleanedValue = value.replace(/[^A-Z0-9]/g, '').toUpperCase(); 
    
    // Check if the cleaned value matches the strict format
    return strictRegex.test(cleanedValue);
}

// ✅ KODE DIPERBAIKI - Filter containers yang accept === true
function renderVendorListDetail() {
    const vendor = state.vendor_name;
    
    // ✅ Filter dengan tanggal stuffing
    const filterStart = state.vendorFilterStartDate ? parseISODate(state.vendorFilterStartDate) : new Date(0);
    const filterEnd = state.vendorFilterEndDate ? parseISODate(state.vendorFilterEndDate) : new Date(8640000000000000);

    const allOrders = state.orders
        .filter(o => {
            if (o.vendor !== vendor) return false;
            
            // Filter berdasarkan tanggal stuffing
            const stuffingDate = parseISODate(o.tgl_stuffing);
            const dateInRange = stuffingDate >= filterStart && stuffingDate <= filterEnd;
            
            if (!dateInRange) return false;
            
            // Ambil containers yang accepted
            const acceptedContainers = (state.containers[o.order_id] || []).filter(c => c.accept === true);
            
            // Hanya tampilkan order yang punya minimal 1 accepted container
            return acceptedContainers.length > 0;
        })
        .sort((a, b) => {
            const today = new Date();
            return Math.abs(new Date(a.tgl_stuffing) - today) - Math.abs(new Date(b.tgl_stuffing) - today);
        });

    content.innerHTML = `
        <div class="main-header"><h3>📋 EMKL — List Orderan (Add Detail)</h3></div>
        
        <!-- 🔑 FILTER TANGGAL STUFFING -->
        <div class="card" style="margin-bottom:16px;">
            <h4 style="margin:0 0 12px 0;">🔍 Filter Tanggal Stuffing</h4>
            <div class="row">
                <div class="col" style="grid-column: span 5;">
                    <label>Dari Tanggal</label>
                    <input type="date" id="vendor_filter_start" class="input" value="${state.vendorFilterStartDate || todayStr()}">
                </div>
                <div class="col" style="grid-column: span 5;">
                    <label>Sampai Tanggal</label>
                    <input type="date" id="vendor_filter_end" class="input" value="${state.vendorFilterEndDate || todayStr()}">
                </div>
                <div class="col" style="grid-column: span 2; display:flex; align-items:flex-end;">
                    <button id="vendor_apply_filter" class="btn primary full" style="height:40px;">Terapkan</button>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div style="display: flex; justify-content: flex-end; margin-bottom: 12px;">
                <button id="btnDownloadVendorListDetail" class="btn excel">📊 Excel</button>
            </div>
            <div class="rekap-wrap">
                <table class="table rekap" id="listDetailTable">
                    <thead>
                        <tr>
                            <th rowspan="2">No</th>
                            <th rowspan="2">DN</th>
                            <th rowspan="2">EMKL</th>
                            <th rowspan="2">Tanggal Stuffing</th>
                            <th rowspan="2">Shipping Point</th>
                            <th rowspan="2">Country Port (Port)</th>
                            <th rowspan="2">Terminal</th>
                            <th rowspan="2">Depo</th>
                            <th colspan="2" style="background:#f0f7ff">CY</th>
                            <th rowspan="2">Container</th>
                            <th rowspan="2">Jumlah</th>
                            <th rowspan="2">Remarks</th>
                            <th rowspan="2">Aksi</th>
                        </tr>
                        <tr>
                            <th style="background:#f0f7ff">Open</th>
                            <th style="background:#f0f7ff">Closing (Date Time)</th>
                        </tr>
                    </thead>
                    <tbody id="listDetailBody"></tbody>
                </table>
            </div>
        </div>
    `;

    const tbody = document.getElementById("listDetailBody");
    
    if (allOrders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="15" class="center">Tidak ada data yang sudah di-accept. Silakan accept order terlebih dahulu di menu "📑 Orderan".</td></tr>';
        
        // Disable download button jika tidak ada data
        document.getElementById('btnDownloadVendorListDetail').onclick = () => {
            toast("⚠️ Tidak ada data untuk diunduh.");
        };
        return;
    }
    
    let rowsHtml = "";

    allOrders.forEach((order, idx) => {
        // ✅ FIX: Pastikan hanya ambil container yang accept === true
        const containers = (state.containers[order.order_id] || []).filter(c => c.accept === true);
        const sizes = ["20ft", "40ft/HC", "Combo"].filter(s => containers.some(c => c.size === s));
        const rowSpan = sizes.length;

        // Cek apakah ada container Repo di order ini untuk tampilkan input Remarks Repo
        const hasRepo = containers.some(c => (c.status || '').toLowerCase() === 'Repo');
        const currentRepoRemarks = order.Repo_remarks_emkl || '';

        sizes.forEach((sz, sIdx) => {
            const qty = containers.filter(c => c.size === sz).length;
            
            rowsHtml += `<tr>`;
            if (sIdx === 0) {
                rowsHtml += `
                    <td rowspan="${rowSpan}">${idx + 1}</td>
                    <td rowspan="${rowSpan}">${order.no_dn.join('<br>')}</td>
                    <td rowspan="${rowSpan}">${order.vendor}</td>
                    <td rowspan="${rowSpan}">${formatDisplayDate(order.tgl_stuffing)}</td>
                    <td rowspan="${rowSpan}">${order.shipping_point}</td>
                    <td rowspan="${rowSpan}">${order.pod || '-'}</td>
                    <td rowspan="${rowSpan}">${order.terminal || '-'}</td>
                    <td rowspan="${rowSpan}">${order.depo || '-'}</td>
                    <td rowspan="${rowSpan}">${order.open_cy ? formatDisplayDate(order.open_cy) : '-'}</td>
                    <td rowspan="${rowSpan}">${fmtDT(order.closing_date, order.closing_time)}</td>
                `;
            }
            rowsHtml += `<td>${sz}</td><td>${qty}</td>`;
            if (sIdx === 0) {
                rowsHtml += `
                    <td rowspan="${rowSpan}">${order.remarks || '-'}</td>
                    <td rowspan="${rowSpan}"><button class="btn warn tiny" onclick="toggleInlineDetail('${order.order_id}', this)">Add Detail</button></td>
                `;
            }
            rowsHtml += `</tr>`;
        });
        rowsHtml += `<tr id="detail_row_${order.order_id}" style="display:none; background:#f9fbff;"><td colspan="16" id="detail_container_${order.order_id}" style="padding:15px; border: 1px solid var(--blue-light);"></td></tr>`;
    });
    
    tbody.innerHTML = rowsHtml;
tbody.innerHTML = rowsHtml;

    // ✅ Event listener untuk filter
    const filterStartInput = document.getElementById("vendor_filter_start");
    const filterEndInput = document.getElementById("vendor_filter_end");
    const applyFilterBtn = document.getElementById("vendor_apply_filter");

    if (applyFilterBtn && filterStartInput && filterEndInput) {
        applyFilterBtn.onclick = () => {
            state.vendorFilterStartDate = filterStartInput.value;
            state.vendorFilterEndDate = filterEndInput.value;
            saveState();
            renderVendorListDetail(); // Re-render dengan filter baru
            toast("Filter diterapkan");
        };
    }
    
    }

    

function saveRepoRemarksEMKL(orderId) {
    const order = state.orders.find(o => o.order_id === orderId);
    if (!order) return;
    const textarea = document.getElementById(`Repo_remarks_emkl_${orderId}`);
    if (!textarea) return;
    order.Repo_remarks_emkl = textarea.value.trim();
    saveState();
    toast("✅ Remarks Repo berhasil disimpan.");
}

function parseAndStoreOutstandingData(fileObject) {
    if (typeof XLSX === "undefined") {
        console.error("XLSX library not loaded.");
        return;
    }
    try {
        const b64 = fileObject.dataUrl.split('base64,')[1];
        const workbook = XLSX.read(b64, { type: 'base64', cellStyles: true });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); 
        fileObject.parsedData = jsonData;
        fileObject.parsedWorksheet = worksheet; // ✅ Simpan worksheet untuk akses style/warna cell
    } catch (err) {
        console.error("Gagal mem-parsing file Excel:", err);
        toast(`Gagal memproses file ${fileObject.name}.`);
        fileObject.parsedData = null;
        fileObject.parsedWorksheet = null;
    }
}

function displayInlinePreview(file) {
    if (typeof XLSX === "undefined") {
        toast("Library XLSX belum termuat.");
        return;
    }
    const container = document.getElementById("outstandingPreviewContainer");
    if (!container) return;

    try {
        const b64 = file.dataUrl.split('base64,')[1];
        const workbook = XLSX.read(b64, { type: 'base64' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const tableHtml = XLSX.utils.sheet_to_html(worksheet, { id: 'previewTable', editable: false });

        container.innerHTML = `
            <div class="preview-header">
                <h4>Preview: ${file.name}</h4>
                <button id="hidePreviewBtn" class="btn secondary">Hide</button>
            </div>
            <div class="table-wrap">
                <style>#previewTable{width:100%;border-collapse:collapse;} #previewTable td, #previewTable th{border:1px solid #ccc;padding:4px 8px;text-align:left;}</style>
                ${tableHtml}
            </div>
        `;
        container.style.display = 'block';
        document.getElementById('hidePreviewBtn').onclick = () => {
            state.active_preview_file_id = null;
            saveState();
            renderOutstanding();
        };
    } catch (err) {
        console.error("Gagal membaca file Excel:", err);
        toast("Gagal memproses file. Pastikan format Excel valid.");
        container.style.display = 'none';
        container.innerHTML = '';
    }
}
/* ===================== ADMIN: DATA OUTSTANDING ===================== */
function renderOutstanding(){
  content.innerHTML = `
    <div class="main-header">
      <h3 style="margin:0">🧾 Admin — Data Outstanding</h3>
      <div class="small">Unggah file Excel/CSV sebagai database. Data akan langsung ditampilkan sebagai tabel gabungan.</div>
    </div>
    <div class="card">
      <div class="toolbar" style="display:flex; gap:12px; flex-wrap:wrap; align-items:center">
        <label class="btn primary">
          ⬆️ Upload File
          <input id="outUpload" type="file" accept=".csv,.xlsx" multiple style="display:none">
        </label>
        <button id="outDeleteAll" class="btn danger">🗑️ Hapus Semua</button>
      </div>
      <div id="outList" style="margin-top:12px"></div>
    </div>
    <div id="outstandingMergedTable" class="card" style="margin-top:16px;"></div>
    <div id="outstandingPreviewContainer" class="card" style="display:none; margin-top:16px;"></div>
  `;

  if(!Array.isArray(state.outstanding_files)) state.outstanding_files = [];

  const input = document.getElementById("outUpload");
  input.onchange = (e)=>{
    const files = Array.from(e.target.files||[]);
    if(!files.length) return;
    let pending = files.length;
    files.forEach(f=>{
      const reader = new FileReader();
      reader.onload = ()=>{
        const fileObject = {
          id: genId("OUT"),
          name: f.name,
          size: f.size,
          type: f.type || (/\.(xlsx|xls)$/i.test(f.name) ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" : "text/csv"),
          uploadedAt: new Date().toISOString(),
          dataUrl: reader.result
        };
        
        parseAndStoreOutstandingData(fileObject);
        state.outstanding_files.push(fileObject);

        pending--;
        if(pending===0){
          state.notifications.push({
              id: genId("NOTIF"),
              message: `(${files.length}) file Data Outstanding baru telah diupload.`,
              timestamp: new Date().toISOString(),
              isRead: false,
              role: 'admin',
              link: 'Data Outstanding'
          });
          
          saveState();
          drawList();
          drawMergedTable();
          toast("Upload berhasil.");
          input.value="";
        }
      };
      reader.readAsDataURL(f);
    });
  };

  document.getElementById("outDeleteAll").onclick = ()=>{
    if(confirm("Hapus semua file Data Outstanding?")){
      state.outstanding_files = [];
      state.active_preview_file_id = null;
      saveState();
      renderOutstanding();
      toast("Semua file dihapus.");
    }
  };

  function drawList(){
    const box = document.getElementById("outList");
    const list = state.outstanding_files;
    if(!list.length){
      box.innerHTML = '<div class="empty">Belum ada file. Klik <b>Upload File</b> untuk menambahkan.</div>';
      return;
    }
    box.innerHTML = list.map(f=>`
      <div class="file-row" data-id="${f.id}">
        <div class="file-main">
          <div class="file-name">📄 <b>${f.name}</b></div>
          <div class="file-meta small">${(f.size/1024).toFixed(1)} KB • ${new Date(f.uploadedAt).toLocaleString()}</div>
        </div>
        <div class="file-actions">
          <button class="btn success" data-act="view">Tampilkan</button>
          <button class="btn secondary" data-act="download">📥 Unduh</button>
          <button class="btn danger" data-act="delete">🗑️ Hapus</button>
        </div>
      </div>
    `).join("");

    box.querySelectorAll(".file-row").forEach(row=>{
      const id = row.dataset.id;
      const f = state.outstanding_files.find(x=>x.id===id);
      
      row.querySelector('[data-act="view"]').onclick = ()=>{
        if (f) {
          state.active_preview_file_id = f.id;
          saveState();
          displayInlinePreview(f);
        }
      };
      row.querySelector('[data-act="download"]').onclick = ()=>{
        if(f) downloadDataUrl(f.name, f.dataUrl);
      };
      row.querySelector('[data-act="delete"]').onclick = ()=>{
        if(confirm("Hapus file ini?")){
          state.outstanding_files = state.outstanding_files.filter(x=>x.id!==id);
          if (state.active_preview_file_id === id) {
            state.active_preview_file_id = null;
          }
          saveState();
          renderOutstanding();
          toast("File dihapus.");
        }
      };
    });
    setLastUpdate();
  }
  
  function drawMergedTable() {
    const mergedDiv = document.getElementById('outstandingMergedTable');
    if (!mergedDiv) return;

    const files = state.outstanding_files || [];
    if (files.length === 0) { mergedDiv.style.display = 'none'; return; }

    const dnAliasesLocal = ['dn', 'no dn', 'delivery note', 'no. dn', 'delivery'];
    const seenDNs = new Set();
    const allDataRows = [];
    let headerRow = null;
    let dnColIndex = -1;

    for (const file of files) {
      if (!file.parsedData || file.parsedData.length < 2) continue;
      let fileHeaderRowIdx = -1;
      let fileDnColIdx = -1;
      for (let i = 0; i < Math.min(10, file.parsedData.length); i++) {
        const row = file.parsedData[i].map(h => String(h == null ? '' : h).trim().toLowerCase());
        const idx = row.findIndex(h => dnAliasesLocal.includes(h));
        if (idx !== -1) { fileHeaderRowIdx = i; fileDnColIdx = idx; break; }
      }
      if (fileHeaderRowIdx === -1) continue;
      if (headerRow === null) { headerRow = file.parsedData[fileHeaderRowIdx]; dnColIndex = fileDnColIdx; }
      for (let i = fileHeaderRowIdx + 1; i < file.parsedData.length; i++) {
        const row = file.parsedData[i];
        if (!row || row.every(c => c == null || String(c).trim() === '')) continue;
        const dnVal = String(row[fileDnColIdx] == null ? '' : row[fileDnColIdx]).trim();
        if (!dnVal) continue;
        const dnKey = dnVal.toLowerCase().replace(/[\s\-_]/g, '');
        if (seenDNs.has(dnKey)) continue;
        seenDNs.add(dnKey);
        allDataRows.push(row);
      }
    }

    if (!headerRow || allDataRows.length === 0) { mergedDiv.style.display = 'none'; return; }

    // ✅ REVISI 2: Cari index kolom CSts, Carrier, Region untuk Priority & Filter
    const headerLower = headerRow.map(h => String(h == null ? '' : h).trim().toLowerCase());
    const cstsColIndex = headerLower.findIndex(h => h === 'csts' || h === 'c sts' || h === 'c.sts' || h === 'cargo status' || h === 'csts.');
    const carrierColIndex = headerLower.findIndex(h => h === 'carrier' || h === 'shipping line' || h === 'sl');
    const regionColIndex = headerLower.findIndex(h => h === 'region' || h === 'area' || h === 'wilayah');

    // ✅ REVISI 4: Cari index kolom ETD untuk H-5 highlight
    const etdColIndex = headerLower.findIndex(h => h === 'etd' || h === 'estimated departure' || h === 'est. departure' || h === 'etd date' || h === 'etd (estimasi)' || h === 'estimasi');

    // ✅ Ambil daftar region unik
    const regionSet = new Set();
    if (regionColIndex !== -1) {
      allDataRows.forEach(row => {
        const val = String(row[regionColIndex] == null ? '' : row[regionColIndex]).trim();
        if (val) regionSet.add(val);
      });
    }
    const regionList = Array.from(regionSet).sort();

    // ✅ Fungsi hitung priority
    function getPriority(row) {
      if (cstsColIndex === -1) return '-';
      const csts = String(row[cstsColIndex] == null ? '' : row[cstsColIndex]).trim().toUpperCase();
      const carrier = carrierColIndex !== -1 ? String(row[carrierColIndex] == null ? '' : row[carrierColIndex]).trim() : '';
      const hasCarrier = carrier !== '' && carrier !== '-' && carrier !== '0';
      if (csts === 'R' && !hasCarrier) return 'Plan Now';
      if (csts === 'R' && hasCarrier) return 'Planned';
      if (csts === 'NR' && !hasCarrier) return 'Confirm Cargo';
      if (csts === 'NR' && hasCarrier) return '???';
      return '-';
    }

    function getPriorityStyle(priority) {
      if (priority === 'Plan Now') return 'background:#fee2e2; color:#991b1b; font-weight:700; padding:2px 6px; border-radius:4px;';
      if (priority === 'Planned') return 'background:#dcfce7; color:#065f46; font-weight:700; padding:2px 6px; border-radius:4px;';
      if (priority === 'Confirm Cargo') return 'background:#fef3c7; color:#92400e; font-weight:700; padding:2px 6px; border-radius:4px;';
      if (priority === '???') return 'background:#e0e7ff; color:#3730a3; font-weight:700; padding:2px 6px; border-radius:4px;';
      return '';
    }

    // ✅ REVISI 4: Fungsi cek apakah baris masuk H-5 dari ETD
    function isH5FromETD(row) {
      if (etdColIndex === -1) return false;
      const etdRaw = row[etdColIndex];
      if (etdRaw == null || String(etdRaw).trim() === '') return false;
      let etdDate = null;
      try {
        if (typeof etdRaw === 'number') {
          // Excel serial date
          const excelEpoch = new Date(Date.UTC(1899, 11, 30));
          etdDate = new Date(excelEpoch.getTime() + etdRaw * 86400000);
        } else {
          const s = String(etdRaw).trim().replace(/\./g, '-').replace(/\//g, '-');
          etdDate = new Date(s);
        }
        if (!etdDate || isNaN(etdDate.getTime())) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        etdDate.setHours(0, 0, 0, 0);
        const diffDays = Math.ceil((etdDate - today) / 86400000);
        // H-5 berarti ETD tinggal <= 5 hari lagi (dan belum lewat)
        return diffDays >= 0 && diffDays <= 5;
      } catch(e) {
        return false;
      }
    }

    // ✅ REVISI 3 & 4: CSS border per baris + H-5 highlight
    const fs = 'font-size:12px; padding:4px 6px; white-space:nowrap; border:1px solid #d1d5db;';
    const fsHeader = 'font-size:12px; padding:4px 6px; white-space:nowrap; border:1px solid #d1d5db; background:#f3f4f6;';

    const regionFilterHtml = regionList.length > 0
      ? `<select id="outFilterRegion" class="input" style="font-size:0.8rem; padding:4px 8px; min-width:140px;">
          <option value="">-- Semua Region --</option>
          ${regionList.map(r => `<option value="${r}">${r}</option>`).join('')}
        </select>`
      : '';

    const priorityValues = ['Plan Now', 'Planned', 'Confirm Cargo', '???'];
    const priorityThHtml = `
      <th style="${fsHeader}; background:#fef3c7; font-weight:700; position:relative; min-width:130px;">
        <div style="display:flex; align-items:center; gap:4px;">
          <span>Priority</span>
          <select id="outFilterPriority" style="font-size:10px; padding:1px 2px; border:1px solid #d1d5db; border-radius:3px; background:white; cursor:pointer; max-width:90px;">
            <option value="">▼ Semua</option>
            ${priorityValues.map(p => `<option value="${p}">${p}</option>`).join('')}
          </select>
        </div>
      </th>`;

    const regularThHtml = headerRow.map(h => `<th style="${fsHeader}">${String(h == null ? '' : h)}</th>`).join('');
    const fullThHtml = priorityThHtml + regularThHtml;

    // ✅ REVISI 3 & 4: buildTbody dengan border per cell + H-5 row highlight merah
    const buildTbody = (rows) => rows.map(row => {
      const priority = getPriority(row);
      const priorityStyle = getPriorityStyle(priority);
      const isH5 = isH5FromETD(row);
      // H-5: background merah muda untuk seluruh baris
      const rowBg = isH5 ? 'background:#fee2e2;' : '';
      const cellStyle = isH5
        ? 'font-size:12px; padding:4px 6px; white-space:nowrap; border:1px solid #fca5a5; background:#fee2e2;'
        : fs;
      const priorityTd = `<td style="${cellStyle}"><span style="${priorityStyle}">${priority}</span>${isH5 ? ' <span style="background:#ef4444;color:white;font-size:9px;padding:1px 4px;border-radius:3px;font-weight:700;">H-5 ETD</span>' : ''}</td>`;
      const tds = headerRow.map((_, ci) => `<td style="${cellStyle}">${String(row[ci] == null ? '' : row[ci])}</td>`).join('');
      return `<tr style="${rowBg}">${priorityTd}${tds}</tr>`;
    }).join('');

    mergedDiv.style.display = 'block';
    mergedDiv.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:8px;">
        <h4 style="margin:0; font-size:0.85rem;">📋 Data Outstanding Gabungan <span style="font-size:0.75rem; color:var(--muted); font-weight:400;">(${allDataRows.length} baris)</span></h4>
        <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
          ${regionFilterHtml}
          <input id="outSearchDN" class="input" placeholder="🔍 Cari Delivery Number..." style="width:220px; font-size:0.8rem; padding:4px 8px;">
        </div>
      </div>
      <div style="max-height:400px; overflow:auto; border:1px solid #e5e7eb; border-radius:6px;">
        <table style="width:100%; border-collapse:collapse;">
          <thead style="position:sticky; top:0; z-index:2;"><tr>${fullThHtml}</tr></thead>
          <tbody id="outMergedTbody">${buildTbody(allDataRows)}</tbody>
        </table>
      </div>
      <div style="margin-top:6px; font-size:0.75rem; color:#6b7280;" id="outRowCount">Menampilkan ${allDataRows.length} baris</div>
      ${etdColIndex !== -1 ? `<div style="margin-top:4px; font-size:0.72rem; color:#dc2626;">🔴 Baris merah = H-5 atau kurang dari ETD (segera diproses)</div>` : ''}
    `;

    function applyFilters() {
      const kw = (document.getElementById('outSearchDN').value || '').trim().toLowerCase();
      const region = (document.getElementById('outFilterRegion') ? document.getElementById('outFilterRegion').value : '');
      const priority = (document.getElementById('outFilterPriority') ? document.getElementById('outFilterPriority').value : '');
      let filtered = allDataRows;
      if (kw) filtered = filtered.filter(row => String(row[dnColIndex] == null ? '' : row[dnColIndex]).toLowerCase().includes(kw));
      if (region && regionColIndex !== -1) filtered = filtered.filter(row => String(row[regionColIndex] == null ? '' : row[regionColIndex]).trim() === region);
      if (priority) filtered = filtered.filter(row => getPriority(row) === priority);
      const tbody = document.getElementById('outMergedTbody');
      if (tbody) tbody.innerHTML = buildTbody(filtered);
      const countEl = document.getElementById('outRowCount');
      if (countEl) countEl.textContent = `Menampilkan ${filtered.length} dari ${allDataRows.length} baris`;
    }

    document.getElementById('outSearchDN').addEventListener('input', applyFilters);
    if (document.getElementById('outFilterRegion')) {
      document.getElementById('outFilterRegion').addEventListener('change', applyFilters);
    }
    // ✅ Event listener untuk filter Priority di dalam header tabel
    // Pakai setTimeout agar DOM sudah siap setelah innerHTML di-set
    setTimeout(() => {
      const priorityFilterEl = document.getElementById('outFilterPriority');
      if (priorityFilterEl) {
        priorityFilterEl.addEventListener('change', applyFilters);
      }
    }, 50);
  }


  drawList();
  drawMergedTable();

  if (state.active_preview_file_id) {
    const fileToPreview = state.outstanding_files.find(f => f.id === state.active_preview_file_id);
    if (fileToPreview) {
      displayInlinePreview(fileToPreview);
    } else {
      state.active_preview_file_id = null;
      saveState();
    }
  }
}
// Baris 1001
/* ===================== ADMIN: RATE TRANSPORTER ===================== */
function renderRateTransporter(){
  
  const RATE_TRANSPORTER_DATA = [
    { rank: 1, name: "PT Cakraindo Mitra International", '20FT': 10, '40FT': 10, total: 20, alokasi: '12%' },
    { rank: 2, name: "PT Argo Trans Mandiri", '20FT': 2, '40FT': 5, total: 7, alokasi: '4%' },
    { rank: 3, name: "PT Puninar Logistics", '20FT': 5, '40FT': 5, total: 10, alokasi: '6%' },
    { rank: 4, name: "PT Elang Transportasi Indonesia", '20FT': null, '40FT': 5, total: 5, alokasi: '3%' },
    { rank: 5, name: "PT Bimaruna Jaya", '20FT': 10, '40FT': 20, total: 30, alokasi: '18%' },
    { rank: 6, name: "PT BSA Logistics Indonesia", '20FT': 5, '40FT': 5, total: 10, alokasi: '6%' },
    { rank: 7, name: "PT Tangguh Karimata Jaya", '20FT': 2, '40FT': 5, total: 7, alokasi: '4%' },
    { rank: 8, name: "PT Inti Persada Mandiri", '20FT': 5, '40FT': 20, total: 25, alokasi: '15%' },
    { rank: 9, name: "PT Glory Bahana Universal", '20FT': 5, '40FT': 10, total: 15, alokasi: '9%' },
    { rank: 10, name: "PT Putra Sejahtera Sentosa", '20FT': 3, '40FT': 10, total: 13, alokasi: '8%' },
    { rank: 11, name: "PT Trisindo", '20FT': null, '40FT': 5, total: 5, alokasi: '3%' },
    { rank: 12, name: "PT Lintas Marindo Nusantara", '20FT': 3, '40FT': 20, total: 23, alokasi: '14%' },
  ];
  
  const total20FT = RATE_TRANSPORTER_DATA.reduce((sum, item) => sum + (item['20FT'] || 0), 0);
  const total40FT = RATE_TRANSPORTER_DATA.reduce((sum, item) => sum + (item['40FT'] || 0), 0);
  const grandTotal = RATE_TRANSPORTER_DATA.reduce((sum, item) => sum + item.total, 0);

  const total20Percent = ((total20FT / grandTotal) * 100).toFixed(0) + '%';
  const total40Percent = ((total40FT / grandTotal) * 100).toFixed(0) + '%';
  
  const bodyRows = RATE_TRANSPORTER_DATA.map(d => `
    <tr>
      <td class="center">${d.rank}</td>
      <td style="text-align: left; font-weight: 500; color: var(--ink);">${d.name}</td>
      <td class="center">${d['20FT'] || ''}</td>
      <td class="center">${d['40FT'] || ''}</td>
      <td class="center">${d.total}</td>
      <td class="center" style="font-weight: 600; color: var(--blue-2);">${d.alokasi}</td>
    </tr>
  `).join('');

  content.innerHTML = `
    <div class="main-header">
      <h3 style="margin:0">💰 Admin — Rate Transporter</h3>
      <div class="small">Tabel alokasi dan ranking transporter.</div>
    </div>
    <div class="card">
      <div class="table-wrap no-scroll">
        <table class="table" style="min-width: 650px;">
          <thead>
            <tr style="background: linear-gradient(180deg, #fef3c7, #fef9e8);">
              <th style="background: linear-gradient(180deg, #fef3c7, #fef9e8); position: sticky; top: 0;">Rank</th>
              <th style="background: linear-gradient(180deg, #fef3c7, #fef9e8); position: sticky; top: 0; text-align: left; min-width: 250px;">Transporter</th>
              <th style="background: linear-gradient(180deg, #fef3c7, #fef9e8); position: sticky; top: 0;">20FT</th>
              <th style="background: linear-gradient(180deg, #fef3c7, #fef9e8); position: sticky; top: 0;">40FT</th>
              <th style="background: linear-gradient(180deg, #fef3c7, #fef9e8); position: sticky; top: 0;">Total</th>
              <th style="background: linear-gradient(180deg, #fef3c7, #fef9e8); position: sticky; top: 0;">Alokasi</th>
            </tr>
          </thead>
          <tbody>
            ${bodyRows}
          </tbody>
          <tfoot style="font-weight: 700;">
            <tr style="background-color: #fef3c7;">
              <td colspan="2" style="text-align: right;">Total</td>
              <td class="center">${total20FT}</td>
              <td class="center">${total40FT}</td>
              <td class="center">${grandTotal}</td>
              <td class="center">100%</td>
            </tr>
            <tr style="background-color: #fef3c7;">
              <td colspan="2" style="text-align: right;"></td>
              <td class="center">${total20Percent}</td>
              <td class="center">${total40Percent}</td>
              <td class="center"></td>
              <td class="center"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `;
}
/* ===================== ADMIN: PORT ===================== */
function renderPort(){
    
    const portServices = [
        { name: "JICT", username: "IKK_Jkt", password: "IKK@2025", url: "https://my.jict.co.id/" },
        { name: "NPCT1", username: "IKK_Jkt", password: "IKK@2025", url: "https://econ.npct1.co.id/" },
        { name: "KOJA", username: "IKK_Jkt", password: "IKK@2025", url: "https://econ.npct1.co.id/" }, 
        { name: "MAL", username: "IKK_Jkt", password: "IKK@2025", url: "https://e-billing.malt300.com/e-booking/" },
        { name: "PELINDO", username: "IKK_Jkt", password: "IKK@2025", url: "https://eservice.pelindo.co.id/" },
    ];
    
    const cardHtml = portServices.map(service => `
        <div class="col" style="grid-column: span 4;">
            <div class="card" style="padding: 15px 20px; text-align: left; transition: box-shadow .2s ease; border-color: var(--blue-soft);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 1.8rem; color: var(--blue); background-color: var(--blue-light); padding: 5px 8px; border-radius: 8px;">🚢</span>
                        <h3 style="margin: 0; font-size: 1.2rem; color: var(--ink);">${service.name}</h3>
                    </div>
                    <a href="${service.url}" target="_blank" class="btn secondary" style="background-color: var(--blue-light); color: var(--blue-2); border-color: var(--blue-soft);">Visit</a>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                    <div style="flex: 1; min-width: 0; padding-right: 10px;">
                        <div class="muted" style="font-weight: 500; font-size: 0.75rem; margin-bottom: 4px;">USERNAME</div>
                        <div style="font-weight: 600; line-height: 1.2; word-wrap: break-word;">${service.username}</div>
                    </div>
                    <div style="flex: 1; min-width: 0;">
                        <div class="muted" style="font-weight: 500; font-size: 0.75rem; margin-bottom: 4px;">PASSWORD</div>
                        <div style="font-weight: 600; line-height: 1.2; word-wrap: break-word;">${service.password}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
content.innerHTML = `
    <div class="main-header">
        <h3 style="margin:0">🚢 Admin — Port</h3>
        <div class="small">Daftar akun dan akses ke berbagai layanan pengiriman/pelabuhan.</div>
    </div>
            <div class="card" style="margin-top: 20px;">
            <div class="row" style="gap: 16px;">
                ${cardHtml}
            </div>
        </div>
    `;
    
}

function exportOutstandingData() {
    if (typeof XLSX === "undefined") {
        toast("Library XLSX belum termuat.");
        return;
    }
    const outstandingFiles = state.outstanding_files || [];
    if (outstandingFiles.length === 0) {
        toast("Tidak ada data outstanding untuk diekspor.");
        return;
    }

    try {
        const wb = XLSX.utils.book_new();
        outstandingFiles.forEach((file, index) => {
            if (file.parsedData && Array.isArray(file.parsedData)) {
                let sheetName = file.name.replace(/[\.\[\]\*\/\\?\:]/g, "").substring(0, 25);
                if (!sheetName) sheetName = `Sheet${index + 1}`;
                
                let finalSheetName = sheetName;
                let counter = 1;
                while(wb.SheetNames.includes(finalSheetName)){
                  finalSheetName = `${sheetName.substring(0, 28)}_${counter}`;
                  counter++;
                }

                const ws = XLSX.utils.aoa_to_sheet(file.parsedData);
                XLSX.utils.book_append_sheet(wb, ws, finalSheetName);
            }
        });

        if (wb.SheetNames.length === 0) {
            toast("Tidak ada data valid yang bisa diekspor dari file outstanding.");
            return;
        }

        XLSX.writeFile(wb, "report_data_outstanding.xlsx");
        toast("Ekspor Data Outstanding berhasil.");
    } catch (err) {
        console.error("Gagal mengekspor data outstanding:", err);
        toast("Terjadi kesalahan saat mengekspor data.");
    }
}

// === AFTER: getDataFromOutstanding() - FINAL FIX WITH DUAL 40FT COLUMNS ===
// === AFTER: getDataFromOutstanding() - ULTRA FLEXIBLE MAPPING ===
function getDataFromOutstanding(dnToFind) {
  const defaultResult = {
    partie20: null, partie40: null, sc: null,
    shippingPoint: null, // ✅ BEDA DARI forwardingAgent
    countryPort: null,   // ✅ BEDA DARI pod/destination
    forwardingAgent: null,
    productGroup: null, 
    productForm: null,
    nw: null, 
    etd: null
  };
  
  if (!state.outstanding_files || state.outstanding_files.length === 0) {
    return defaultResult;
  }
  
  const targetDn = String(dnToFind)
    .trim()
    .toLowerCase()
    .replace(/[\s\-_]/g, '');
  
  if (!targetDn) return defaultResult;

  // 🔥 CRITICAL: ALIAS DEFINITIONS
  const dnAliases = ['dn', 'no dn', 'delivery note', 'no. dn', 'delivery'];
  const p20Aliases = ['20', '20ft', 'partie 20', "20'", '20ft/gp'];
  const p40NormalAliases = ['40', 'partie 40', "40'"];
  const p40HCAliases = ['40hc', "40'hc", '40 hc', "40' hc", '40ft/hc', '4h'];
  const scAliases = ['sc', 'no sc', 'no. sc'];
  
  // 🔥 SHIPPING POINT - header excel: "SP"
  const shippingPointAliases = [
    'sp',
    'shipping point', 
    'w/h', 
    'wh',
    'warehouse', 
    'gudang',
    'ship point',
    'shipping'
  ];
  
  // 🔥 COUNTRY PORT - header excel: "Country (Port)"
  const countryPortAliases = [
    'country (port)',
    'country(port)',
    'country port (port)', 
    'country port', 
    'country',
    'port',
    'loading port',
    'pol'
  ];
  
  // Forwarding Agent (BERBEDA dari Shipping Point!)
  const fwdAgentAliases = ['forwarding agent', 'fwd agent', 'forwarder', 'emkl', 'fa'];
  
  const prodGroupAliases = ['product group', 'grup', 'group'];
  const prodFormAliases = ['product form', 'form'];
  const nwAliases = ['nw', 'net weight', 'nett weight'];
  const etdAliases = ['etd', 'estimated departure', 'est. departure', 'etd date', 'etd (estimasi)', 'estimasi'];

  for (const file of state.outstanding_files) {
    if (!file.parsedData || file.parsedData.length < 1) continue;

    let headers = null;
    let dataStartIndex = -1;

    // ✅ SUPPORT MULTI-ROW HEADER: 
    // Struktur excel: Row 0 = "Rdy Oustd" | "NOT READY" (parent merged)
    //                 Row 1 = header kolom: SP | SC | Delivery | ... | 20 | 40 | 4H | 20 | 40 | 4H
    // Header utama ada di row yang mengandung "Delivery"
    // Kolom 20/40/4H ada di ROW YANG SAMA dengan header utama
    // Yang membedakan "Rdy Oustd" vs "NOT READY" adalah dari row sebelumnya (parent)
    let rdyOustd20Index = -1;  // kolom "20" di bawah "Rdy Oustd" (hijau)
    let rdyOustd40Index = -1;  // kolom "40" di bawah "Rdy Oustd" (hijau)
    let rdyOustd4HIndex = -1;  // kolom "4H" di bawah "Rdy Oustd" (hijau) → 40ft

    for (let i = 0; i < Math.min(10, file.parsedData.length); i++) {
        const potentialHeaders = file.parsedData[i].map(h => String(h || '').trim().toLowerCase());
        const hasDn = dnAliases.some(alias => potentialHeaders.includes(alias));
        
        if (hasDn) {
            headers = potentialHeaders;
            dataStartIndex = i + 1;
            console.log(`[Outstanding] 📋 Headers found at row ${i}:`, headers);

            // ✅ Cek row SEBELUMNYA untuk menemukan posisi "Rdy Oustd" parent header
            // Karena struktur: Row i-1 = "Rdy Oustd" (parent), Row i = header kolom (Delivery, SP, 20, 40, 4H, ...)
            let rdyParentIdx = -1;
            let notReadyParentIdx = -1;
            if (i > 0) {
                const prevRow = file.parsedData[i - 1].map(h => String(h == null ? '' : h).trim().toLowerCase());
                rdyParentIdx = prevRow.findIndex(h => typeof h === 'string' && (h.includes('rdy') || h === 'rdy oustd' || h === 'rdy outstanding'));
                notReadyParentIdx = prevRow.findIndex(h => typeof h === 'string' && (h.includes('not ready') || h === 'not ready'));
                console.log(`[Outstanding] 🟡 Parent row (row ${i-1}):`, prevRow);
                console.log(`[Outstanding] 🟡 Rdy Oustd parent col: ${rdyParentIdx}, Not Ready parent col: ${notReadyParentIdx}`);
            }

            // ✅ Kolom 20/40/4H ada di row yang SAMA dengan header utama (potentialHeaders)
            // Ambil kolom "20", "40", "4H" yang posisinya >= rdyParentIdx dan < notReadyParentIdx
            potentialHeaders.forEach((h, colIdx) => {
                if (h === '20' || h === '20ft') {
                    // Masuk "Rdy Oustd" jika posisi >= rdyParentIdx dan (notReadyParentIdx belum ada atau < notReadyParentIdx)
                    const isInRdyArea = (rdyParentIdx === -1 || colIdx >= rdyParentIdx) &&
                                       (notReadyParentIdx === -1 || colIdx < notReadyParentIdx);
                    if (isInRdyArea && rdyOustd20Index === -1) {
                        rdyOustd20Index = colIdx;
                    }
                } else if (h === '40') {
                    const isInRdyArea = (rdyParentIdx === -1 || colIdx >= rdyParentIdx) &&
                                       (notReadyParentIdx === -1 || colIdx < notReadyParentIdx);
                    if (isInRdyArea && rdyOustd40Index === -1) {
                        rdyOustd40Index = colIdx;
                    }
                } else if (h === '4h') {
                    // ✅ 4H = 40ft High Cube → dijumlahkan ke partie40
                    const isInRdyArea = (rdyParentIdx === -1 || colIdx >= rdyParentIdx) &&
                                       (notReadyParentIdx === -1 || colIdx < notReadyParentIdx);
                    if (isInRdyArea && rdyOustd4HIndex === -1) {
                        rdyOustd4HIndex = colIdx;
                    }
                }
            });

            console.log(`[Outstanding] 🟢 Rdy Oustd sub-columns → 20: col${rdyOustd20Index}, 40: col${rdyOustd40Index}, 4H: col${rdyOustd4HIndex}`);
            break; 
        }
    }

    if (!headers) {
        console.warn(`[Outstanding] File ${file.name}: Header tidak ditemukan`);
        continue;
    }

    const findIndex = (aliases) => {
      for (const alias of aliases) {
        // ✅ Exact match dulu
        const exactIndex = headers.indexOf(alias);
        if (exactIndex !== -1) {
          console.log(`[Outstanding] ✅ Found column "${alias}" at index ${exactIndex}`);
          return exactIndex;
        }
        // ✅ Fallback: partial match / strip semua spasi & karakter non-alphanumeric untuk compare
        const aliasClean = alias.replace(/[\s\(\)\-_\/\.]/g, '').toLowerCase();
        const partialIndex = headers.findIndex(h => {
          const hClean = String(h).replace(/[\s\(\)\-_\/\.]/g, '').toLowerCase();
          return hClean === aliasClean;
        });
        if (partialIndex !== -1) {
          console.log(`[Outstanding] ✅ Found column "${alias}" (partial match) at index ${partialIndex}`);
          return partialIndex;
        }
      }
      return -1;
    };
    
    const dnIndex = findIndex(dnAliases);
    const scIndex = findIndex(scAliases);
    
    // ✅ Untuk 20ft dan 40ft: prioritaskan kolom "Rdy Oustd" (hijau) jika ditemukan
    // Jika tidak ditemukan via parent row, fallback ke alias biasa
    let p20Index = (rdyOustd20Index !== -1) ? rdyOustd20Index : findIndex(p20Aliases);
    let p40NormalIndex = (rdyOustd40Index !== -1) ? rdyOustd40Index : findIndex(p40NormalAliases);
    // ✅ 4H = 40ft High Cube → dijumlahkan ke partie40
    let p40HCIndex = (rdyOustd4HIndex !== -1) ? rdyOustd4HIndex : findIndex(p40HCAliases);
    
    // 🔥 CRITICAL: MAPPING BARU
    const shippingPointIndex = findIndex(shippingPointAliases);
    const countryPortIndex = findIndex(countryPortAliases);
    const fwdAgentIndex = findIndex(fwdAgentAliases);
    
    const prodGroupIndex = findIndex(prodGroupAliases);
    const prodFormIndex = findIndex(prodFormAliases);
    const nwIndex = findIndex(nwAliases);
    const etdIndex = findIndex(etdAliases);
    
    if (dnIndex === -1) {
        console.warn(`[Outstanding] File ${file.name}: Kolom DN tidak ditemukan`);
        continue;
    }

    // 🔥 DEBUG: PRINT SEMUA INDEX YANG DITEMUKAN
    console.log(`[Outstanding] 🔍 Column Indexes Found:`);
    console.log(`  - DN: ${dnIndex}`);
    console.log(`  - Shipping Point: ${shippingPointIndex}`);
    console.log(`  - Country Port: ${countryPortIndex}`);
    console.log(`  - Forwarding Agent: ${fwdAgentIndex}`);
    console.log(`  - 20ft (Rdy Oustd): ${p20Index}`);
    console.log(`  - 40ft Normal (Rdy Oustd): ${p40NormalIndex}`);
    console.log(`  - 40ft HC / 4H (Rdy Oustd): ${p40HCIndex}`);

    for (let i = dataStartIndex; i < file.parsedData.length; i++) {
      const row = file.parsedData[i];
      if (!row || row.length <= dnIndex) continue;
      
      const currentDn = String(row[dnIndex] || '')
        .trim()
        .toLowerCase()
        .replace(/[\s\-_]/g, '');
      
      if (currentDn === targetDn) {
        console.log(`[Outstanding] ✅ MATCH: DN "${dnToFind}" → File ${file.name}, Row ${i + 1}`);
        console.log(`[Outstanding] 📊 Full Row Data:`, row); // ✅ DEBUG FULL ROW
        
        // Calculate 40ft total
        let total40ft = 0;
        
        if (p40NormalIndex !== -1 && row[p40NormalIndex] !== undefined && row[p40NormalIndex] !== null) {
          const val40 = parseFloat(row[p40NormalIndex]) || 0;
          total40ft += val40;
          console.log(`  📊 Partie 40 (Normal): ${val40}`);
        }
        
        if (p40HCIndex !== -1 && row[p40HCIndex] !== undefined && row[p40HCIndex] !== null) {
          const val40HC = parseFloat(row[p40HCIndex]) || 0;
          total40ft += val40HC;
          console.log(`  📊 Partie 40HC: ${val40HC}`);
        }
        
        console.log(`  ✅ TOTAL 40ft/HC: ${total40ft}`);
        
        // 🔥 CRITICAL: EXTRACT DATA
        const shippingPointValue = shippingPointIndex !== -1 ? row[shippingPointIndex] : null;
        const countryPortValue = countryPortIndex !== -1 ? row[countryPortIndex] : null;
        const fwdAgentValue = fwdAgentIndex !== -1 ? row[fwdAgentIndex] : null;
        
        console.log(`  🔍 Extracted Values:`);
        console.log(`    - Shipping Point: "${shippingPointValue}"`);
        console.log(`    - Country Port: "${countryPortValue}"`);
        console.log(`    - Forwarding Agent: "${fwdAgentValue}"`);
        
        return {
          partie20: p20Index !== -1 && row[p20Index] !== undefined && row[p20Index] !== null ? row[p20Index] : null,
          partie40: total40ft > 0 ? total40ft : null,
          sc: scIndex !== -1 && row[scIndex] !== undefined && row[scIndex] !== null ? row[scIndex] : null,
          
          // 🔥 CRITICAL: RETURN SHIPPING POINT & COUNTRY PORT
          shippingPoint: shippingPointValue,
          countryPort: countryPortValue,
          forwardingAgent: fwdAgentValue,
          
          productGroup: prodGroupIndex !== -1 && row[prodGroupIndex] !== undefined && row[prodGroupIndex] !== null ? row[prodGroupIndex] : null,
          productForm: prodFormIndex !== -1 && row[prodFormIndex] !== undefined && row[prodFormIndex] !== null ? row[prodFormIndex] : null,
          nw: nwIndex !== -1 && row[nwIndex] !== undefined && row[nwIndex] !== null ? row[nwIndex] : null,
          etd: etdIndex !== -1 && row[etdIndex] !== undefined && row[etdIndex] !== null ? row[etdIndex] : null
        };
      }
    }
  }

  console.warn(`[Outstanding] ❌ NO MATCH: DN "${dnToFind}" tidak ditemukan`);
  return defaultResult; 
}

/* ===================== ADMIN: REPORT BOC (SUDAH DIPERBAIKI) ===================== */

// === AFTER: KODE BARU YANG BENAR ===
// ====================================================================
// ✅ KODE BARU YANG BENAR - REPLACE DARI BARIS 1144 SAMPAI 1300
// ====================================================================

function generateAndDownloadBOC(startDateStr, endDateStr, isAuto = false, shippingPointFilter = '') {
    if (typeof XLSX === "undefined") {
        if (!isAuto) toast("Library XLSX belum termuat.");
        console.error("XLSX library not loaded.");
        return;
    }
    
    // ✅ Filter orders berdasarkan tanggal + EXCLUDE all-reject
    const filteredOrders = state.orders.filter(o => {
        const stuffingDate = parseISODate(o.tgl_stuffing);
        const dateMatch = stuffingDate >= parseISODate(startDateStr) && stuffingDate <= parseISODate(endDateStr);
        
        // ✅ FIX: Tambahkan filter untuk exclude order yang SEMUA containernya Reject
        const containers = state.containers[o.order_id] || [];
        const hasAcceptedContainers = containers.some(c => c.accept === true);
        
        return dateMatch && hasAcceptedContainers;
    });

    if (filteredOrders.length === 0) {
        if (!isAuto) toast("Tidak ada data order pada rentang tanggal tersebut.");
        return;
    }

    const dateArray = [];
    const start = parseISODate(startDateStr);
    const end = parseISODate(endDateStr);
    for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
        dateArray.push(toISODate(new Date(dt)));
    }

    const formatNumberCell = (val) => {
        if (val === null || val === undefined || String(val).trim() === '') return '';
        const num = parseFloat(val);
        if (isNaN(num)) return val;
        return Number(num.toFixed(3)); 
    };

    // ✅ BUILD DATA ROWS
    const dataRows = [];
    
    const headerRow = [
        "No.", "SC", "DN", "EMKL", "FORWARDING AGENT", "COUNTRY PORT (PORT)", "SHIPPING POINT",
        "Grup", "Form", "Partie 20'", "Partie 40' HC"
    ];
    
    dateArray.forEach(dateStr => {
        const dateKey = formatDisplayDate(dateStr);
        headerRow.push(`${dateKey} (20')`);
        headerRow.push(`${dateKey} (40'HC)`);
    });
    
    headerRow.push("NW", "Closing TGL", "Closing TIME", "REMARKS");
    dataRows.push(headerRow);

    // ✅ LOOP ORDERS - HITUNG ACCEPTED CONTAINERS
    filteredOrders.forEach((order, index) => {
        console.log(`\n📦 Processing Order ${index + 1}/${filteredOrders.length}: ${order.order_id}, DN: ${(order.no_dn || []).join(', ')}`);
        
        // Get Outstanding Data
        let outstandingData = { 
            sc: null, forwardingAgent: null, productGroup: null, 
            productForm: null, partie20: null, partie40: null, nw: null,
            shippingPoint: null, countryPort: null, etd: null
        };
        
        const dnsForOrder = order.no_dn || [];
        let foundDN = null;
        
        for (const dn of dnsForOrder) {
            if (!dn || !dn.trim()) continue;
            
            const foundData = getDataFromOutstanding(dn);
            // ✅ FIX: Cek field yang relevan saja, bukan semua key
            const hasData = (
                foundData.sc !== null ||
                foundData.forwardingAgent !== null ||
                foundData.productGroup !== null ||
                foundData.productForm !== null ||
                foundData.partie20 !== null ||
                foundData.partie40 !== null ||
                foundData.shippingPoint !== null ||
                foundData.countryPort !== null
            );
            
            if (hasData) {
                outstandingData = foundData;
                foundDN = dn;
                console.log(`  ✅ Outstanding data ditemukan untuk DN: ${dn}`);
                break;
            }
        }
        
        if (!foundDN) {
            console.warn(`  ⚠️ Outstanding data TIDAK ditemukan. DN: ${dnsForOrder.join(', ')}`);
        }

        // ✅ KUNCI PERBAIKAN: Ambil HANYA container yang ACCEPT
        const containers = state.containers[order.order_id] || [];
        const acceptedContainers = containers.filter(c => c.accept === true);
        
        console.log(`  📊 Total containers: ${containers.length}`);
        console.log(`  📊 Accepted containers: ${acceptedContainers.length}`);
        
        // ✅ CRITICAL FIX: Hitung 20ft (Normal + Combo × 2)
        const accepted20ftNormal = acceptedContainers.filter(c => c.size === '20ft').length;
        const acceptedCombo = acceptedContainers.filter(c => c.size === 'Combo').length;
        const accepted20ftTotal = accepted20ftNormal + (acceptedCombo * 2);
        
        // ✅ CRITICAL FIX: Hitung 40ft/HC (HANYA 40ft/HC, TANPA Combo)
        const accepted40ftHC = acceptedContainers.filter(c => c.size === '40ft/HC').length;
        
        console.log(`  📊 Breakdown Accepted:`);
        console.log(`     - 20ft Normal: ${accepted20ftNormal}`);
        console.log(`     - Combo: ${acceptedCombo} container → ${acceptedCombo * 2} unit (× 2)`);
        console.log(`     - 20ft Total untuk BOC: ${accepted20ftTotal}`);
        console.log(`     - 40ft/HC: ${accepted40ftHC}`);

        // ✅ Build Row Data
        const rowData = [
            index + 1,
            outstandingData.sc || '',
            (order.no_dn || []).join(', '),
            order.vendor || '-',
            outstandingData.forwardingAgent || '',
            outstandingData.countryPort || order.pod || '-',
            outstandingData.shippingPoint || order.shipping_point || '-',
            outstandingData.productGroup || '',
            outstandingData.productForm || '',
            formatNumberCell(outstandingData.partie20),
            formatNumberCell(outstandingData.partie40)
        ];

        // ✅ KUNCI PERBAIKAN: Tambahkan kolom tanggal dengan ACCEPTED CONTAINERS
        dateArray.forEach(dateStr => {
            if (order.tgl_stuffing === dateStr) {
                // ✅ 20ft = Normal + (Combo × 2)
                rowData.push(accepted20ftTotal > 0 ? accepted20ftTotal : null);
                
                // ✅ 40ft/HC = Hanya 40ft/HC saja
                rowData.push(accepted40ftHC > 0 ? accepted40ftHC : null);
            } else {
                rowData.push(null);
                rowData.push(null);
            }
        });
        
        // Kolom akhir
        rowData.push(
            formatNumberCell(outstandingData.nw),
            formatDisplayDate(order.closing_date) || '-',
            order.closing_time || '-',
            order.remarks || '-'
        );
        
        dataRows.push(rowData);
    });

    // ✅ Export to Excel
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(dataRows);
    XLSX.utils.book_append_sheet(wb, ws, "Laporan BOC");
    
    let fileName = `Laporan_BOC_${startDateStr}_hingga_${endDateStr}`;
    if (shippingPointFilter) {
        fileName += `_${shippingPointFilter.replace(/[^a-zA-Z0-9]/g, '_')}`;
    }
    fileName += '.xlsx';
    
    XLSX.writeFile(wb, fileName);
    
    if (isAuto) {
        console.log(`✅ Laporan BOC Otomatis berhasil diunduh: ${fileName}`);
    } else {
        toast(`✅ Laporan BOC berhasil diunduh! Total: ${filteredOrders.length} order.`);
    }
    
    console.log(`\n📊 BOC Summary:`);
    console.log(`   - Total orders exported: ${filteredOrders.length}`);
    console.log(`   - File: ${fileName}`);
    console.log(`   - Periode: ${formatDisplayDate(startDateStr)} s/d ${formatDisplayDate(endDateStr)}`);
}

//COPAS GANTI DARI SINI
function renderReport() {
  content.innerHTML = `
    <div class="main-header">
      <h3 style="margin:0">📊 Admin — Report BOC</h3>
      <div class="small">Tarik data berdasarkan rentang tanggal untuk membuat laporan harian/mingguan.</div>
    </div>

    <div class="card">
      <h3 style="margin:0 0 10px 0">Laporan Harian / Mingguan</h3>
<div class="report-boc-filters">
    <div>
        <label>Tanggal Mulai (Stuffing)</label>
        <input type="date" id="report_start_date" class="input">
    </div>
    <div>
        <label>Tanggal Selesai (Stuffing)</label>
        <input type="date" id="report_end_date" class="input">
    </div>
    <div>
        <label>Filter Shipping Point</label>
        <select id="report_shipping_point" class="input">
            <option value="">-- All Shipping Point --</option>
        </select>
    </div>
    <div>
        <button id="btnGenerateReport" class="btn danger full">📊 Tarik Data</button>
    </div>
</div>
      <div id="reportContainer" style="margin-top:16px;"></div>
    </div>

    <div class="card">
      <h3 style="margin:0 0 10px 0">Download Data</h3>
      <div style="display:flex; gap:10px; flex-wrap:wrap">
        <button id="btnReportRaw" class="btn secondary">⬇️ Download Semua Data Order (XLSX)</button>
        <button id="btnDownloadOutstanding" class="btn secondary">⬇️ Download Data Outstanding (XLSX)</button>
      </div>
      <div class="small muted" style="margin-top:8px">
        • <b>Download Semua Data Order:</b> Mengekspor sheet ORDERS dan CONTAINERS dari sistem.<br>
        • <b>Download Data Outstanding:</b> Mengekspor file yang sudah Anda upload di menu Data Outstanding.
      </div>
    </div>`;

  const endDateEl = document.getElementById('report_end_date');
  const startDateEl = document.getElementById('report_start_date');
  const shippingPointSelect = document.getElementById('report_shipping_point');
  
  const today = new Date();
  const twoDaysLater = new Date();
  twoDaysLater.setDate(today.getDate() + 2);
  startDateEl.value = toISODate(today);
  endDateEl.value = toISODate(twoDaysLater);
  
  // ✅ POPULATE DROPDOWN SHIPPING POINT (DINAMIS DARI DATA USER)
  const shippingPoints = new Set();
  state.orders.forEach(o => {
    if (o.shipping_point && o.shipping_point.trim()) {
      shippingPoints.add(o.shipping_point.trim());
    }
  });
  
  // Sort alphabetically
  const sortedShippingPoints = Array.from(shippingPoints).sort();
  
  sortedShippingPoints.forEach(sp => {
    const opt = document.createElement('option');
    opt.value = sp;
    opt.textContent = sp;
    shippingPointSelect.appendChild(opt);
  });

  // ✅ FIX: Event listener tombol "Tarik Data"
  document.getElementById('btnGenerateReport').addEventListener('click', () => {
    const startDateStr = startDateEl.value;
    const endDateStr = endDateEl.value;
    const shippingPointFilter = shippingPointSelect.value;

    if (!startDateStr || !endDateStr) {
      toast('❌ Pilih tanggal mulai dan selesai terlebih dahulu.');
      return;
    }

    const allOrders = state.orders.filter(o => {
      const stuffingDate = parseISODate(o.tgl_stuffing);
      const dateMatch = stuffingDate >= parseISODate(startDateStr) && stuffingDate <= parseISODate(endDateStr);
      const spMatch = !shippingPointFilter || o.shipping_point === shippingPointFilter;
      return dateMatch && spMatch;
    });

    if (allOrders.length === 0) {
      toast('❌ Tidak ada data order pada rentang tanggal tersebut.');
      document.getElementById('reportContainer').innerHTML = `<div class="empty">Tidak ada data order pada rentang tanggal tersebut.</div>`;
      return;
    }

    buildStandardReportUI(allOrders, startDateStr, endDateStr, shippingPointFilter);
  });

}

// ====================================================================
// ✅ KODE BARU YANG BENAR - REPLACE buildStandardReportUI() 
// ====================================================================

function buildStandardReportUI(orders, startDateStr, endDateStr, shippingPointFilter = '') {
    const reportContainer = document.getElementById('reportContainer');
    if (!reportContainer) return;

    // ✅ REVISI 1: Filter orders - EXCLUDE yang SEMUA containernya Reject
    const filteredOrders = orders.filter(o => {
        const containers = state.containers[o.order_id] || [];
        const hasAcceptedContainers = containers.some(c => c.accept === true);
        return hasAcceptedContainers; // Hanya tampilkan order yang punya minimal 1 container ACCEPT
    });

    if (filteredOrders.length === 0) {
      reportContainer.innerHTML = `<div class="empty">Tidak ada data order pada rentang tanggal tersebut.</div>`;
      return;
    }

    const start = parseISODate(startDateStr);
    const end = parseISODate(endDateStr);
    const dateArray = [];
    let tempDate = new Date(start);
    while (tempDate <= end) {
      dateArray.push(toISODate(new Date(tempDate)));
      tempDate.setDate(tempDate.getDate() + 1);
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const planningHeaderDates = dateArray.map(iso => {
      const d = parseISODate(iso);
      return `<th colspan="2">${String(d.getDate()).padStart(2, '0')}-${monthNames[d.getMonth()]}</th>`;
    }).join('');
    const planningHeaderTypes = dateArray.map(() => `<th>20'</th><th>40'HC</th>`).join('');

    const formatNumberCell = (val) => {
      if (val === null || val === undefined || String(val).trim() === '') return '-';
      const num = parseFloat(val);
      return isNaN(num) ? val : Number(num.toFixed(3));
    };

    const ispmExceptions = [
      "OMAN", "IRAK", "IRAN", "JEBEL ALI", "UAE", "SAUDI ARABIA", "JEDDAH", 
      "DAMMAM", "BAHRAIN", "BANDAR ABBAS", "YEMEN", "SINGAPORE", "KARACHI", 
      "PAKISTAN", "SRILANKA", "COLOMBO", "BANGLADESH", "MYANMAR"
    ];

    const tableRows = filteredOrders.map((order, index) => {
      let outData = { sc: null, forwardingAgent: null, productGroup: null, productForm: null, partie20: null, partie40: null, nw: null, shippingPoint: null, countryPort: null, etd: null };
      const dns = order.no_dn || [];
      for (const dn of dns) {
        const found = getDataFromOutstanding(dn);
        const hasData = (
          found.sc !== null || found.forwardingAgent !== null ||
          found.productGroup !== null || found.productForm !== null ||
          found.partie20 !== null || found.partie40 !== null ||
          found.shippingPoint !== null || found.countryPort !== null
        );
        if (hasData) {
          outData = found;
          break;
        }
      }

      const productForm = (outData.productForm || "").toUpperCase();
      const destPort = (outData.countryPort || order.pod || "").toUpperCase();
      const isLS = productForm === "LS";
      const isExcluded = ispmExceptions.some(ex => destPort.includes(ex));
      const ispmDisplay = (isLS && !isExcluded) ? "✓" : "-";

      // ✅ KUNCI PERBAIKAN: Hitung ACCEPTED containers (bukan order plan)
      const containers = state.containers[order.order_id] || [];
      const acceptedContainers = containers.filter(c => c.accept === true);
      
      // ✅ Hitung 20ft: Normal + (Combo × 2)
      const accepted20ftNormal = acceptedContainers.filter(c => c.size === '20ft').length;
      const acceptedCombo = acceptedContainers.filter(c => c.size === 'Combo').length;
      const accepted20ftTotal = accepted20ftNormal + (acceptedCombo * 2);
      
      // ✅ Hitung 40ft/HC: HANYA 40ft/HC
      const accepted40ftHC = acceptedContainers.filter(c => c.size === '40ft/HC').length;

      return `
        <tr>
          <td>${index + 1}</td>
          <td>${outData.sc || '-'}</td>
          <td>${(order.no_dn || []).join('<br>')}</td>
          <td>${order.vendor}</td>
          <td>${outData.forwardingAgent || '-'}</td>
          <td>${outData.countryPort || order.pod || '-'}</td>
          <td>${outData.shippingPoint || order.shipping_point || '-'}</td>
          <td>${outData.productGroup || '-'}</td>
          <td>${outData.productForm || '-'}</td>
          <td>${formatNumberCell(outData.partie20)}</td>
          <td>${formatNumberCell(outData.partie40)}</td>
          ${dateArray.map(iso => {
            const isMatch = order.tgl_stuffing === iso;
            // ✅ PERBAIKAN: Tampilkan ACCEPTED containers (bukan order plan)
            return `<td style="${isMatch ? 'background:#d4e5f7;font-weight:600;' : ''}">${isMatch ? (accepted20ftTotal || '-') : '-'}</td>
                    <td style="${isMatch ? 'background:#d4e5f7;font-weight:600;' : ''}">${isMatch ? (accepted40ftHC || '-') : '-'}</td>`;
          }).join('')}
          <td>${formatNumberCell(outData.nw)}</td>
          <td>${formatDisplayDate(order.closing_date)}</td>
          <td>${order.closing_time || '-'}</td>
          <td>${order.remarks || '-'}</td>
          <td style="font-weight:bold; text-align:center;">${ispmDisplay}</td>
        </tr>`;
    }).join('');

    reportContainer.innerHTML = `
      <div class="rekap-wrap">
        <table class="table rekap report-table">
          <thead>
            <tr>
              <th rowspan="3">No.</th><th rowspan="3">SC</th><th rowspan="3">DN</th><th rowspan="3">EMKL</th><th rowspan="3">Forwarder</th><th rowspan="3">Dest Port</th><th rowspan="3">Shipping Point</th>
              <th colspan="2">Product</th><th colspan="2">Partie</th><th colspan="${dateArray.length * 2}">Planning</th><th rowspan="3">NW</th><th colspan="2">Closing CY</th><th rowspan="3">Remarks</th><th rowspan="3">ISPM</th>
            </tr>
            <tr>
              <th rowspan="2">Grup</th><th rowspan="2">Form</th><th rowspan="2">20'</th><th rowspan="2">40'HC</th>${planningHeaderDates}<th rowspan="2">TGL</th><th rowspan="2">TIME</th>
            </tr>
            <tr>${planningHeaderTypes}</tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
      <div style="margin-top:10px; text-align:right;">
        <button id="btnDownloadStandardReport" class="btn excel">📊 Excel</button>
      </div>`;

    document.getElementById('btnDownloadStandardReport').onclick = () => {
      generateAndDownloadBOC(startDateStr, endDateStr, false, shippingPointFilter);
    };
}
/* ===================== ADMIN: REPORT PERFORMA VENDOR (REVISI 2) ===================== */
function renderReportPerformaVendor() {
    
    // Set default filter if null
    if (!state.performance_filter.startDate && !state.performance_filter.endDate) {
        // Default to 'week' logic
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 6);
        state.performance_filter.startDate = toISODate(startDate);
        state.performance_filter.endDate = toISODate(endDate);
    }
    
    const { startDate, endDate, period } = state.performance_filter;
    
    const performanceData = getFilteredPerformanceData(startDate, endDate);
    const { html: tableHtml, data: rawData } = buildVendorPerformanceCard(true, performanceData);

    const periodOptions = [
        { value: 'week', label: 'Minggu Terakhir' },
        { value: 'month', label: 'Bulan Terakhir' },
        { value: 'year', label: 'Tahun Terakhir' },
        { value: 'custom', label: 'Custom Range' }
    ];
    
    const periodSelectHtml = periodOptions.map(opt => 
        `<option value="${opt.value}" ${period === opt.value ? 'selected' : ''}>${opt.label}</option>`
    ).join('');

    content.innerHTML = `
        <div class="main-header">
            <h3 style="margin:0">📈 Admin — Report Performa Vendor</h3>
            <div class="small">Tabel ringkasan performa EMKL berdasarkan jumlah kontainer yang di-Accept dan di-Reject.</div>
        </div>
        
        <div class="card">
            <h3 style="margin:0 0 10px 0;">Filter Performa</h3>
            <div id="performance-filter-controls">
                <div class="form-grid">
                    <div class="span-3">
                        <label>Pilih Periode</label>
                        <select id="perf_period_select" class="input">
                            ${periodSelectHtml}
                        </select>
                    </div>
                    <div class="span-4">
                        <label>Tanggal Mulai</label>
                        <input type="date" id="perf_start_date" class="input" value="${startDate || ''}" ${period !== 'custom' ? 'disabled' : ''}>
                    </div>
                    <div class="span-4">
                        <label>Tanggal Selesai</label>
                        <input type="date" id="perf_end_date" class="input" value="${endDate || ''}" ${period !== 'custom' ? 'disabled' : ''}>
                    </div>
                    <div class="span-1" style="display:flex; align-items:flex-end;">
                        <button id="btnApplyFilter" class="btn primary full">Apply</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="margin:0;">Ringkasan Performa</h3>
                <button id="btnDownloadPerformance" class="btn excel">📊 Excel</button>
            </div>
            
            ${tableHtml}
            
            <div class="small muted" style="margin-top: 20px;">
                * Performa dihitung dari total kontainer yang sudah direspons (Accept + Reject) untuk order yang Tgl Stuffing-nya di antara <b>${formatDisplayDate(startDate)}</b> dan <b>${formatDisplayDate(endDate)}</b>.
            </div>
        </div>
    `;
    
    const periodSelect = document.getElementById('perf_period_select');
    const startInput = document.getElementById('perf_start_date');
    const endInput = document.getElementById('perf_end_date');
    const applyBtn = document.getElementById('btnApplyFilter');

    function calculateDates(selectedPeriod) {
        const end = new Date();
        let start = new Date(end);
        
        if (selectedPeriod === 'week') {
            start.setDate(end.getDate() - 6);
        } else if (selectedPeriod === 'month') {
            start.setMonth(end.getMonth() - 1);
            start.setDate(start.getDate() + 1); // Start from the day after one month ago
        } else if (selectedPeriod === 'year') {
            start.setFullYear(end.getFullYear() - 1);
            start.setDate(start.getDate() + 1);
        } else {
             // Custom: use current state values
             return { start: state.performance_filter.startDate || toISODate(start), end: state.performance_filter.endDate || toISODate(end) };
        }
        return { start: toISODate(start), end: toISODate(end) };
    }

    periodSelect.onchange = (e) => {
        const selected = e.target.value;
        startInput.disabled = selected !== 'custom';
        endInput.disabled = selected !== 'custom';

        if (selected !== 'custom') {
            const { start, end } = calculateDates(selected);
            startInput.value = start;
            endInput.value = end;
        } else {
             // Reset custom range to current state value if available
             startInput.value = state.performance_filter.startDate || '';
             endInput.value = state.performance_filter.endDate || '';
        }
    };
    
    startInput.onchange = () => {
        if (periodSelect.value === 'custom') {
            state.performance_filter.startDate = startInput.value;
            saveState();
        }
    };
     endInput.onchange = () => {
        if (periodSelect.value === 'custom') {
            state.performance_filter.endDate = endInput.value;
            saveState();
        }
    };

    applyBtn.onclick = () => {
        let finalStart = startInput.value;
        let finalEnd = endInput.value;
        const selectedPeriod = periodSelect.value;
        
        if (selectedPeriod !== 'custom') {
            const calculatedDates = calculateDates(selectedPeriod);
            finalStart = calculatedDates.start;
            finalEnd = calculatedDates.end;
        }

        if (!finalStart || !finalEnd) {
            toast("Tanggal mulai dan selesai wajib diisi.");
            return;
        }
        
        if (parseISODate(finalStart) > parseISODate(finalEnd)) {
            toast("Tanggal mulai tidak boleh melebihi tanggal selesai.");
            return;
        }
        
        state.performance_filter.period = selectedPeriod;
        state.performance_filter.startDate = finalStart;
        state.performance_filter.endDate = finalEnd;
        saveState();
        renderReportPerformaVendor(); 
        toast("Filter Performa diterapkan.");
    };

    document.getElementById("btnDownloadPerformance").onclick = () => {
        if (typeof XLSX === "undefined") {
            toast("Library XLSX belum termuat.");
            return;
        }
        
        if (performanceData.length === 0) {
            toast("Tidak ada data untuk diunduh pada rentang filter ini.");
            return;
        }

        const dataToExport = rawData.map(d => ({
            "EMKL": d.name,
            "Accept (Qty)": d.accept,
            "Reject (Qty)": d.reject,
            "Total Respon": d.total,
            "Performa (%)": d.performa + '%'
        }));
        
        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Performa Vendor");
        const fileName = `Report_Performa_Vendor_${startDate}_to_${endDate}.xlsx`;
        XLSX.writeFile(workbook, fileName);
        toast("Ekspor Performa Vendor berhasil.");
    };
}
// DCR Report
function renderDCR() {
  content.innerHTML = `
    <div class="main-header">
      <h3 style="margin:0">📑 Admin — DCR Report</h3>
      <div class="small">Laporan Daily Container Requirement</div>
    </div>
    <div class="card">
      <div class="form-grid">
        <div class="span-5">
            <label>Tanggal Mulai</label>
            <input type="date" id="dcr_start_date" class="input">
        </div>
        <div class="span-5">
            <label>Tanggal Selesai</label>
            <input type="date" id="dcr_end_date" class="input">
        </div>
        <div class="span-2" style="display:flex; align-items:flex-end;">
            <button id="btnGenerateDCR" class="btn danger full">📊 Tarik Data</button>
        </div>
      </div>
      <div id="dcrReportContainer" class="rekap-wrap" style="margin-top:16px;"></div>
    </div>
  `;

  // ✅ PERBAIKAN: Inisialisasi input tanggal
  const endDateEl = document.getElementById('dcr_end_date');
  const startDateEl = document.getElementById('dcr_start_date');
  const today = new Date();
  const threeDaysLater = new Date();
  threeDaysLater.setDate(today.getDate() + 3);
  startDateEl.value = toISODate(today);
  endDateEl.value = toISODate(threeDaysLater);

  // ✅ PERBAIKAN: Event listener tombol "Tarik Data"
  document.getElementById('btnGenerateDCR').onclick = () => {
    const startDate = startDateEl.value;
    const endDate = endDateEl.value;
    
    if (!startDate || !endDate) {
      toast("Pilih rentang tanggal terlebih dahulu.");
      return;
    }
    
    // ✅ PERBAIKAN: Filter order berdasarkan tgl_stuffing
    const filteredOrders = state.orders.filter(o => {
        const d = o.tgl_stuffing;
        return d >= startDate && d <= endDate;
    });

    // ✅ PERBAIKAN: Ekstrak shipping points unik
    const shippingPoints = [...new Set(filteredOrders.map(o => o.shipping_point).filter(sp => sp))];

    // ✅ PERBAIKAN: Generate array tanggal
    const dates = [];
    for (let dt = parseISODate(startDate); dt <= parseISODate(endDate); dt.setDate(dt.getDate() + 1)) {
        dates.push(new Date(dt));
    }
    
    // ✅ PERBAIKAN: Validasi rentang tanggal maksimal 7 hari
    if (dates.length > 7) {
        document.getElementById('dcrReportContainer').innerHTML = `<div class="empty">Rentang tanggal terlalu lebar (maksimal 7 hari).</div>`;
        return;
    }
    
    buildDCRReport(dates, shippingPoints, filteredOrders);
  };

  // ✅ PERBAIKAN LENGKAP: Fungsi buildDCRReport dengan logika IDENTIK BOC
  function buildDCRReport(dates, shippingPoints, filteredOrders) {
    const container = document.getElementById('dcrReportContainer');
    
    if (shippingPoints.length === 0) {
        container.innerHTML = `<div class="empty">Tidak ada data Shipping Point pada rentang tanggal yang dipilih.</div>`;
        return;
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // ✅ HEADER TABLE
    let headerHtml = `
      <table class="table rekap report-table">
        <thead>
          <tr>
            <th rowspan="3">No.</th>
            <th rowspan="3">EMKL</th>
            ${shippingPoints.map(sp => `<th colspan="${dates.length * 2 + 1}">${sp}</th>`).join('')}
          </tr>
          <tr>
            ${shippingPoints.map(() => 
              dates.map(d => `<th colspan="2">${String(d.getDate()).padStart(2,'0')} ${monthNames[d.getMonth()]} '${String(d.getFullYear()).slice(-2)}</th>`).join('') + 
              `<th rowspan="2">MT</th>`
            ).join('')}
          </tr>
          <tr>
            ${shippingPoints.map(() => dates.map(() => `<th>20'</th><th>40'</th>`).join('')).join('')}
          </tr>
        </thead>
    `;

    let bodyHtml = `<tbody>`;
    const grandTotals = {};

    // ✅ LOOP VENDOR
    VENDORS_DEFAULT.forEach((vendor, index) => {
        bodyHtml += `<tr><td>${index + 1}</td><td>${vendor}</td>`;
        
        shippingPoints.forEach(sp => {
            dates.forEach(date => {
                const dateStr = toISODate(date);
                let total20 = 0;
                let total40 = 0;
                
                // ✅ KUNCI PERBAIKAN: LOGIKA IDENTIK DENGAN BOC REPORT
                filteredOrders
                    .filter(o => o.vendor === vendor && o.shipping_point === sp && o.tgl_stuffing === dateStr)
                    .forEach(order => {
                        // ✅ Ambil HANYA container yang ACCEPT
                        const containers = state.containers[order.order_id] || [];
                        const acceptedContainers = containers.filter(c => c.accept === true);
                        
                        // ✅ Hitung 20ft: Normal + (Combo × 2)
                        const accepted20ftNormal = acceptedContainers.filter(c => c.size === '20ft').length;
                        const acceptedCombo = acceptedContainers.filter(c => c.size === 'Combo').length;
                        const accepted20ftTotal = accepted20ftNormal + (acceptedCombo * 2);
                        
                        // ✅ Hitung 40ft/HC: HANYA 40ft/HC
                        const accepted40ftHC = acceptedContainers.filter(c => c.size === '40ft/HC').length;
                        
                        total20 += accepted20ftTotal;
                        total40 += accepted40ftHC;
                    });
                
                bodyHtml += `<td>${total20 || '-'}</td><td>${total40 || '-'}</td>`;

                // ✅ Akumulasi Grand Total
                const key = `${sp}_${dateStr}`;
                if (!grandTotals[key]) grandTotals[key] = { total20: 0, total40: 0 };
                grandTotals[key].total20 += total20;
                grandTotals[key].total40 += total40;
            });
            bodyHtml += `<td>-</td>`; // Kolom MT (belum diimplementasikan)
        });
        bodyHtml += `</tr>`;
    });
    bodyHtml += `</tbody>`;

    // ✅ FOOTER: Grand Total
    let footerHtml = `
        <tfoot>
            <tr style="background-color: yellow; font-weight: bold;">
                <td colspan="2">Grand Total</td>
                ${shippingPoints.map(sp => 
                    dates.map(date => {
                        const key = `${sp}_${toISODate(date)}`;
                        const totals = grandTotals[key] || { total20: 0, total40: 0 };
                        return `<td>${totals.total20 || '-'}</td><td>${totals.total40 || '-'}</td>`;
                    }).join('') + `<td>-</td>`
                ).join('')}
            </tr>
        </tfoot>
      </table>
    `;

    container.innerHTML = headerHtml + bodyHtml + footerHtml;
  }
}


function renderReconSummary() {
  content.innerHTML = `
    <div class="main-header">
      <h3 style="margin:0">📋 Admin — Recon Summary Report</h3>
      <div class="small">Laporan Rekonsiliasi Pengiriman Container</div>
    </div>
    
    <!-- Grid 3 kolom untuk 3 periode langsung muncul -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 16px; align-items: stretch;">
      
      <!-- YESTERDAY -->
      <div class="card" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; padding: 12px; display:flex; flex-direction:column; margin:0; height:100%; box-sizing:border-box;">
        <h4 style="margin: 0 0 12px 0; color: #92400e; font-size: 1rem; text-align: center; font-weight: 700;">
          📅 DELIVERY YESTERDAY
        </h4>
        <!-- Tabel 20 & 40 -->
        <table style="width:100%; border-collapse:collapse; margin-bottom:12px; font-size:0.8rem; background:white; border-radius:6px; overflow:hidden; table-layout:fixed;">
          <colgroup>
            <col style="width:40%">
            <col style="width:10%"><col style="width:10%">
            <col style="width:10%"><col style="width:10%">
            <col style="width:10%"><col style="width:10%">
          </colgroup>
          <thead>
            <tr style="height:28px;">
              <th rowspan="2" style="background:#fef3c7; border:1px solid #f59e0b; padding:4px 6px; text-align:left; font-weight:600; font-size:0.75rem; vertical-align:middle;">Shipping Point</th>
              <th colspan="2" style="background:#fef3c7; border:1px solid #f59e0b; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Plan</th>
              <th colspan="2" style="background:#dbeafe; border:1px solid #3b82f6; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Realz</th>
              <th colspan="2" style="background:#fee2e2; border:1px solid #ef4444; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Gap</th>
            </tr>
            <tr style="height:24px;">
              <th style="background:#fffbeb; border:1px solid #f59e0b; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">20</th>
              <th style="background:#fffbeb; border:1px solid #f59e0b; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">40</th>
              <th style="background:#eff6ff; border:1px solid #3b82f6; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">20</th>
              <th style="background:#eff6ff; border:1px solid #3b82f6; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">40</th>
              <th style="background:#fef2f2; border:1px solid #ef4444; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">20</th>
              <th style="background:#fef2f2; border:1px solid #ef4444; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">40</th>
            </tr>
          </thead>
          <tbody id="yesterdayTable20"></tbody>
        </table>
        <!-- Tabel MT -->
        <table style="width:100%; border-collapse:collapse; font-size:0.8rem; background:white; border-radius:6px; overflow:hidden; table-layout:fixed;">
          <colgroup>
            <col style="width:40%">
            <col style="width:20%"><col style="width:20%"><col style="width:20%">
          </colgroup>
          <thead>
            <tr style="height:28px;">
              <th rowspan="2" style="background:#fef3c7; border:1px solid #f59e0b; padding:4px 6px; text-align:left; font-weight:600; font-size:0.75rem; vertical-align:middle;">Shipping Point</th>
              <th style="background:#fef3c7; border:1px solid #f59e0b; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Plan</th>
              <th style="background:#dbeafe; border:1px solid #3b82f6; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Realz</th>
              <th style="background:#fee2e2; border:1px solid #ef4444; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Gap</th>
            </tr>
            <tr style="height:24px;">
              <th style="background:#fffbeb; border:1px solid #f59e0b; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">MT</th>
              <th style="background:#eff6ff; border:1px solid #3b82f6; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">MT</th>
              <th style="background:#fef2f2; border:1px solid #ef4444; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">MT</th>
            </tr>
          </thead>
          <tbody id="yesterdayTableMT"></tbody>
        </table>
      </div>
      
      <!-- TODAY -->
      <div class="card" style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border: 2px solid #3b82f6; padding: 12px; display:flex; flex-direction:column; margin:0; height:100%; box-sizing:border-box;">
        <h4 style="margin: 0 0 12px 0; color: #1e40af; font-size: 1rem; text-align: center; font-weight: 700;">
          📅 DELIVERY TODAY
        </h4>
        <!-- Tabel 20 & 40 -->
        <table style="width:100%; border-collapse:collapse; margin-bottom:12px; font-size:0.8rem; background:white; border-radius:6px; overflow:hidden; table-layout:fixed;">
          <colgroup>
            <col style="width:40%">
            <col style="width:10%"><col style="width:10%">
            <col style="width:10%"><col style="width:10%">
            <col style="width:10%"><col style="width:10%">
          </colgroup>
          <thead>
            <tr style="height:28px;">
              <th rowspan="2" style="background:#dbeafe; border:1px solid #3b82f6; padding:4px 6px; text-align:left; font-weight:600; font-size:0.75rem; vertical-align:middle;">Shipping Point</th>
              <th colspan="2" style="background:#fef3c7; border:1px solid #f59e0b; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Plan</th>
              <th colspan="2" style="background:#dbeafe; border:1px solid #3b82f6; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Realz</th>
              <th colspan="2" style="background:#fee2e2; border:1px solid #ef4444; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Gap</th>
            </tr>
            <tr style="height:24px;">
              <th style="background:#fffbeb; border:1px solid #f59e0b; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">20</th>
              <th style="background:#fffbeb; border:1px solid #f59e0b; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">40</th>
              <th style="background:#eff6ff; border:1px solid #3b82f6; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">20</th>
              <th style="background:#eff6ff; border:1px solid #3b82f6; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">40</th>
              <th style="background:#fef2f2; border:1px solid #ef4444; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">20</th>
              <th style="background:#fef2f2; border:1px solid #ef4444; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">40</th>
            </tr>
          </thead>
          <tbody id="todayTable20"></tbody>
        </table>
        <!-- Tabel MT -->
        <table style="width:100%; border-collapse:collapse; font-size:0.8rem; background:white; border-radius:6px; overflow:hidden; table-layout:fixed;">
          <colgroup>
            <col style="width:40%">
            <col style="width:20%"><col style="width:20%"><col style="width:20%">
          </colgroup>
          <thead>
            <tr style="height:28px;">
              <th rowspan="2" style="background:#dbeafe; border:1px solid #3b82f6; padding:4px 6px; text-align:left; font-weight:600; font-size:0.75rem; vertical-align:middle;">Shipping Point</th>
              <th style="background:#fef3c7; border:1px solid #f59e0b; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Plan</th>
              <th style="background:#dbeafe; border:1px solid #3b82f6; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Realz</th>
              <th style="background:#fee2e2; border:1px solid #ef4444; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Gap</th>
            </tr>
            <tr style="height:24px;">
              <th style="background:#fffbeb; border:1px solid #f59e0b; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">MT</th>
              <th style="background:#eff6ff; border:1px solid #3b82f6; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">MT</th>
              <th style="background:#fef2f2; border:1px solid #ef4444; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">MT</th>
            </tr>
          </thead>
          <tbody id="todayTableMT"></tbody>
        </table>
      </div>
      
      <!-- NEXT DAY -->
      <div class="card" style="background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%); border: 2px solid #10b981; padding: 12px; display:flex; flex-direction:column; margin:0; height:100%; box-sizing:border-box;">
        <h4 style="margin: 0 0 12px 0; color: #065f46; font-size: 1rem; text-align: center; font-weight: 700;">
          📅 DELIVERY NEXT DAY
        </h4>
        <!-- Tabel 20 & 40 -->
        <table style="width:100%; border-collapse:collapse; margin-bottom:12px; font-size:0.8rem; background:white; border-radius:6px; overflow:hidden; table-layout:fixed;">
          <colgroup>
            <col style="width:40%">
            <col style="width:10%"><col style="width:10%">
            <col style="width:10%"><col style="width:10%">
            <col style="width:10%"><col style="width:10%">
          </colgroup>
          <thead>
            <tr style="height:28px;">
              <th rowspan="2" style="background:#dcfce7; border:1px solid #10b981; padding:4px 6px; text-align:left; font-weight:600; font-size:0.75rem; vertical-align:middle;">Shipping Point</th>
              <th colspan="2" style="background:#fef3c7; border:1px solid #f59e0b; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Plan</th>
              <th colspan="2" style="background:#dbeafe; border:1px solid #3b82f6; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Realz</th>
              <th colspan="2" style="background:#fee2e2; border:1px solid #ef4444; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Gap</th>
            </tr>
            <tr style="height:24px;">
              <th style="background:#fffbeb; border:1px solid #f59e0b; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">20</th>
              <th style="background:#fffbeb; border:1px solid #f59e0b; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">40</th>
              <th style="background:#eff6ff; border:1px solid #3b82f6; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">20</th>
              <th style="background:#eff6ff; border:1px solid #3b82f6; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">40</th>
              <th style="background:#fef2f2; border:1px solid #ef4444; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">20</th>
              <th style="background:#fef2f2; border:1px solid #ef4444; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">40</th>
            </tr>
          </thead>
          <tbody id="nextdayTable20"></tbody>
        </table>
        <!-- Tabel MT -->
        <table style="width:100%; border-collapse:collapse; font-size:0.8rem; background:white; border-radius:6px; overflow:hidden; table-layout:fixed;">
          <colgroup>
            <col style="width:40%">
            <col style="width:20%"><col style="width:20%"><col style="width:20%">
          </colgroup>
          <thead>
            <tr style="height:28px;">
              <th rowspan="2" style="background:#dcfce7; border:1px solid #10b981; padding:4px 6px; text-align:left; font-weight:600; font-size:0.75rem; vertical-align:middle;">Shipping Point</th>
              <th style="background:#fef3c7; border:1px solid #f59e0b; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Plan</th>
              <th style="background:#dbeafe; border:1px solid #3b82f6; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Realz</th>
              <th style="background:#fee2e2; border:1px solid #ef4444; padding:4px; text-align:center; font-weight:600; font-size:0.75rem; height:28px;">Gap</th>
            </tr>
            <tr style="height:24px;">
              <th style="background:#fffbeb; border:1px solid #f59e0b; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">MT</th>
              <th style="background:#eff6ff; border:1px solid #3b82f6; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">MT</th>
              <th style="background:#fef2f2; border:1px solid #ef4444; padding:3px; text-align:center; font-weight:500; font-size:0.7rem; height:24px;">MT</th>
            </tr>
          </thead>
          <tbody id="nextdayTableMT"></tbody>
        </table>
      </div>
      
</div>
    <!-- Tombol Download Excel -->
    <div style="margin: 0 16px 16px 16px; display:flex; justify-content:flex-end;">
      <button id="btnDownloadReconExcel" class="btn excel">📊 Download Excel</button>
    </div>
  `;

  // ============================================================
  // KALKULASI DATA RECON SUMMARY
  // ============================================================
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  const yesterdayDate = new Date(todayDate); yesterdayDate.setDate(todayDate.getDate() - 1);
  const nextDayDate = new Date(todayDate); nextDayDate.setDate(todayDate.getDate() + 1);

  const todayISO = toISODate(todayDate);
  const yesterdayISO = toISODate(yesterdayDate);
  const nextDayISO = toISODate(nextDayDate);

  // Fungsi untuk menghitung data per tanggal
  function calcReconForDate(dateISO) {
    // Filter orders yang tgl_stuffing = dateISO
    const ordersOnDate = state.orders.filter(o => o.tgl_stuffing === dateISO);

    // Map: shippingPoint -> { plan20, plan40, realz20, realz40, planNW, realzNW, planMT, realzMT }
    const spMap = {};

    ordersOnDate.forEach(order => {
      const sp = (order.shipping_point || 'Unknown').trim();
      if (!spMap[sp]) {
        spMap[sp] = { plan20: 0, plan40: 0, realz20: 0, realz40: 0, planNW: 0, realzNW: 0, planMT: 0, realzMT: 0 };
      }

      // ✅ REVISI 4: PLAN = container yang sudah di-ACCEPT oleh EMKL (accept === true)
      const containers = state.containers[order.order_id] || [];
      const acceptedContainers = containers.filter(c => c.accept === true);
      acceptedContainers.forEach(c => {
        if (c.size === '20ft') {
          spMap[sp].plan20 += 1;
        } else if (c.size === '40ft/HC') {
          spMap[sp].plan40 += 1;
        } else if (c.size === 'Combo') {
          spMap[sp].plan20 += 2; // Combo masuk ke 20 x2
        }
        // Plan MT = semua container yang di-accept
        spMap[sp].planMT += 1;
      });

      // ✅ REVISI 5: REALZ = container yang accept === true DAN status "muat gudang", "repo", ATAU "gate in port"
      const realizationStatuses = ['muat gudang', 'repo', 'gate in port'];
      const realizedContainers = containers.filter(c => c.accept === true && realizationStatuses.includes((c.status || '').toLowerCase()));
      realizedContainers.forEach(c => {
        if (c.size === '20ft') {
          spMap[sp].realz20 += 1;
        } else if (c.size === '40ft/HC') {
          spMap[sp].realz40 += 1;
        } else if (c.size === 'Combo') {
          spMap[sp].realz20 += 2; // Combo masuk ke 20 x2
        }
      });

      // Realz MT = container accept === true DAN status "muat depo" atau "muat gudang"
      const mtStatuses = ['muat depo', 'muat gudang'];
      containers.filter(c => c.accept === true && mtStatuses.includes((c.status || '').toLowerCase()))
        .forEach(() => { spMap[sp].realzMT += 1; });

      // NW dari outstanding (tetap dipertahankan untuk tabel MT)
      const dns = order.no_dn || [];
      dns.forEach(dn => {
        const outData = getDataFromOutstanding(dn);
        spMap[sp].planNW += Number(outData.nw || 0);
      });

      // Realz NW: estimasi proporsional dari plan NW
      const planTotal = spMap[sp].plan20 + spMap[sp].plan40;
      if (planTotal > 0 && spMap[sp].planNW > 0) {
        const realzTotal = spMap[sp].realz20 + spMap[sp].realz40;
        spMap[sp].realzNW = Math.round((spMap[sp].planNW / planTotal) * realzTotal * 100) / 100;
      }
    });

    return spMap;
  }

  // Fungsi untuk render tabel 20&40
  function renderTable20(tbodyId, spMap, accentBorder) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    const entries = Object.entries(spMap);
    if (entries.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#999; padding: 12px; border:1px solid #e5e7eb; font-size:0.8rem;">No data</td></tr>`;
      return;
    }
    tbody.innerHTML = entries.map(([sp, d]) => {
      const gap20 = d.plan20 - d.realz20;
      const gap40 = d.plan40 - d.realz40;
      const gap20Color = gap20 > 0 ? '#dc2626' : gap20 < 0 ? '#16a34a' : '#374151';
      const gap40Color = gap40 > 0 ? '#dc2626' : gap40 < 0 ? '#16a34a' : '#374151';
      return `<tr style="border-bottom:1px solid #f3f4f6;">
        <td style="padding:5px 4px; border:1px solid #e5e7eb; font-size:0.72rem; font-weight:500; word-break:break-word;">${sp}</td>
        <td style="padding:5px 4px; border:1px solid #e5e7eb; text-align:center; font-size:0.8rem;">${d.plan20}</td>
        <td style="padding:5px 4px; border:1px solid #e5e7eb; text-align:center; font-size:0.8rem;">${d.plan40}</td>
        <td style="padding:5px 4px; border:1px solid #e5e7eb; text-align:center; font-size:0.8rem; color:#1d4ed8; font-weight:600;">${d.realz20}</td>
        <td style="padding:5px 4px; border:1px solid #e5e7eb; text-align:center; font-size:0.8rem; color:#1d4ed8; font-weight:600;">${d.realz40}</td>
        <td style="padding:5px 4px; border:1px solid #e5e7eb; text-align:center; font-size:0.8rem; color:${gap20Color}; font-weight:600;">${gap20}</td>
        <td style="padding:5px 4px; border:1px solid #e5e7eb; text-align:center; font-size:0.8rem; color:${gap40Color}; font-weight:600;">${gap40}</td>
      </tr>`;
    }).join('');
  }

  // Fungsi untuk render tabel MT
  function renderTableMT(tbodyId, spMap) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    const entries = Object.entries(spMap);
    if (entries.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#999; padding: 12px; border:1px solid #e5e7eb; font-size:0.8rem;">No data</td></tr>`;
      return;
    }
    tbody.innerHTML = entries.map(([sp, d]) => {
      const planNW = d.planNW ? d.planNW.toLocaleString('id-ID', {maximumFractionDigits:2}) : '0';
      const realzNW = d.realzNW ? d.realzNW.toLocaleString('id-ID', {maximumFractionDigits:2}) : '0';
      const gapNW = Math.round((d.planNW - d.realzNW) * 100) / 100;
      const gapNWColor = gapNW > 0 ? '#dc2626' : gapNW < 0 ? '#16a34a' : '#374151';
      const gapNWStr = gapNW !== 0 ? gapNW.toLocaleString('id-ID', {maximumFractionDigits:2}) : '0';
      return `<tr style="border-bottom:1px solid #f3f4f6;">
        <td style="padding:5px 4px; border:1px solid #e5e7eb; font-size:0.72rem; font-weight:500; word-break:break-word;">${sp}</td>
        <td style="padding:5px 4px; border:1px solid #e5e7eb; text-align:center; font-size:0.78rem;">${planNW}</td>
        <td style="padding:5px 4px; border:1px solid #e5e7eb; text-align:center; font-size:0.78rem; color:#1d4ed8; font-weight:600;">${realzNW}</td>
        <td style="padding:5px 4px; border:1px solid #e5e7eb; text-align:center; font-size:0.78rem; color:${gapNWColor}; font-weight:600;">${gapNWStr}</td>
      </tr>`;
    }).join('');
  }

  // Hitung dan render untuk setiap periode
  const yesterdayMap = calcReconForDate(yesterdayISO);
  const todayMap = calcReconForDate(todayISO);
  const nextDayMap = calcReconForDate(nextDayISO);

  renderTable20('yesterdayTable20', yesterdayMap, '#f59e0b');
  renderTableMT('yesterdayTableMT', yesterdayMap);
  renderTable20('todayTable20', todayMap, '#3b82f6');
  renderTableMT('todayTableMT', todayMap);
  renderTable20('nextdayTable20', nextDayMap, '#10b981');
  renderTableMT('nextdayTableMT', nextDayMap);

  // Handler Excel
  document.getElementById('btnDownloadReconExcel').addEventListener('click', () => {
    const wb = XLSX.utils.book_new();

    function mapToRows20(spMap) {
      const rows = [['Shipping Point','Plan 20','Plan 40','Realz 20','Realz 40','Gap 20','Gap 40']];
      Object.entries(spMap).forEach(([sp, d]) => {
        rows.push([sp, d.plan20, d.plan40, d.realz20, d.realz40, d.plan20-d.realz20, d.plan40-d.realz40]);
      });
      return rows;
    }
    function mapToRowsMT(spMap) {
      const rows = [['Shipping Point','Plan MT','Realz MT','Gap MT']];
      Object.entries(spMap).forEach(([sp, d]) => {
        const gapNW = Math.round((d.planNW - d.realzNW)*100)/100;
        rows.push([sp, d.planNW||0, d.realzNW||0, gapNW]);
      });
      return rows;
    }

    // YESTERDAY
    const wsY = XLSX.utils.aoa_to_sheet([['DELIVERY YESTERDAY'],[],...mapToRows20(yesterdayMap),[],...mapToRowsMT(yesterdayMap)]);
    XLSX.utils.book_append_sheet(wb, wsY, 'Yesterday');

    // TODAY
    const wsT = XLSX.utils.aoa_to_sheet([['DELIVERY TODAY'],[],...mapToRows20(todayMap),[],...mapToRowsMT(todayMap)]);
    XLSX.utils.book_append_sheet(wb, wsT, 'Today');

    // NEXT DAY
    const wsN = XLSX.utils.aoa_to_sheet([['DELIVERY NEXT DAY'],[],...mapToRows20(nextDayMap),[],...mapToRowsMT(nextDayMap)]);
    XLSX.utils.book_append_sheet(wb, wsN, 'Next Day');

    XLSX.writeFile(wb, `Recon_Summary_${yesterdayISO}_to_${nextDayISO}.xlsx`);
  });
}


function renderContainerRepo() {
    // ✅ REVISI 3: Cek H-1 Closing CY untuk container Repo dan kirim notifikasi
    const todayISO = todayStr();
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowISO = toISODate(tomorrowDate);

    state.orders.forEach(order => {
        const closingDateISO = order.closing_date || '';
        // Jika closing CY adalah besok (H-1), cek apakah ada container Repo
        if (closingDateISO === tomorrowISO) {
            const repoContainers = (state.containers[order.order_id] || []).filter(c => (c.status || '').toLowerCase() === 'repo');
            if (repoContainers.length > 0) {
                // Cek apakah notifikasi H-1 Repo sudah pernah dikirim hari ini
                const alreadyNotified = state.notifications.some(n =>
                    n.relatedOrder === order.order_id &&
                    n.type === 'repo_h1' &&
                    n.date === todayISO
                );
                if (!alreadyNotified) {
                    state.notifications.push({
                        id: genId("NOTIF"),
                        message: `⚠️ H-1 Closing CY! DN ${(order.no_dn || []).join(' & ')} memiliki ${repoContainers.length} container berstatus REPO. Closing: ${fmtDT(order.closing_date, order.closing_time)}`,
                        timestamp: new Date().toISOString(),
                        isRead: false,
                        role: 'admin',
                        relatedOrder: order.order_id,
                        type: 'repo_h1',
                        date: todayISO
                    });
                    saveState();
                }
            }
        }
    });

    // ✅ REVISI 3: Kumpulkan semua container Repo langsung (tanpa pending/approved)
    const allRepoContainers = [];
    state.orders.forEach(order => {
        (state.containers[order.order_id] || []).forEach((container, containerIndex) => {
            if ((container.status || '').toLowerCase() === 'repo') {
                allRepoContainers.push({ order, container, containerIndex });
            }
        });
    });

    content.innerHTML = `
        <div class="main-header">
            <h3 style="margin:0">🔄 Admin — Container Repo Report</h3>
            <div class="small">Daftar semua container dengan status Repo. Data langsung masuk setelah EMKL mengisi status Repo.</div>
        </div>

        <!-- REVISI 3: Hanya 1 tabel langsung, tanpa pending/approved -->
        <div class="card">
            <h4 style="margin:0 0 12px 0; color: #065f46;">📋 Report Container Repo</h4>
            <div class="table-wrap">
                <table class="table rekap report-table" id="RepoAllTable">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>DN</th>
                            <th>EMKL</th>
                            <th>Tgl Stuffing</th>
                            <th>Container No.</th>
                            <th>No. Seal</th>
                            <th>Plat Mobil</th>
                            <th>Nama Driver</th>
                            <th>Size</th>
                            <th>Closing CY</th>
                            <th>Jam Closing</th>
                            <th>Remarks Order</th>
                            <th style="background:#fef3c7; min-width:160px;">Remarks Repo (EMKL)</th>
                        </tr>
                    </thead>
                    <tbody id="RepoAllBody"></tbody>
                </table>
            </div>
            <div style="margin-top:16px; display:flex; justify-content:flex-end;">
              <button id="btnDownloadRepoReport" class="btn excel">📊 Excel</button>
            </div>
        </div>
    `;

    const allTbody = document.getElementById("RepoAllBody");
    if (allRepoContainers.length === 0) {
        allTbody.innerHTML = `<tr><td colspan="13" class="center">Belum ada container dengan status Repo.</td></tr>`;
    } else {
        allTbody.innerHTML = allRepoContainers.map((item, index) => {
            const { order, container } = item;
            // ✅ REVISI 5: Cek H-1 Closing CY untuk highlight merah
            const closingDateISO = order.closing_date || '';
            const isH1 = closingDateISO === tomorrowISO;
            const rowStyle = isH1 ? 'background:#fee2e2; border-left: 4px solid #ef4444;' : '';
            const h1Badge = isH1 ? '<span style="background:#ef4444; color:white; font-size:9px; font-weight:700; padding:2px 5px; border-radius:4px; margin-left:4px;">⚠️ H-1</span>' : '';
            return `
                <tr style="${rowStyle}">
                    <td>${index + 1}</td>
                    <td>${(order.no_dn || []).join('<br>')}</td>
                    <td>${order.vendor}</td>
                    <td>${formatDisplayDate(order.tgl_stuffing)}</td>
                    <td>${container.no_container || '-'}</td>
                    <td>${container.no_seal || '-'}</td>
                    <td>${container.no_mobil || '-'}</td>
                    <td>${container.nama_supir || '-'}</td>
                    <td>${container.size}</td>
                    <td style="${isH1 ? 'color:#dc2626; font-weight:700;' : ''}">${order.closing_date ? formatDisplayDate(order.closing_date) : '-'}${h1Badge}</td>
                    <td style="${isH1 ? 'color:#dc2626; font-weight:700;' : ''}">${order.closing_time || '-'}</td>
                    <td>${order.remarks || '-'}</td>
                    <td style="background:#fffbeb; font-size:0.85rem;">${container.remarks_Repo || '-'}</td>
                </tr>
            `;
        }).join('');
    }

    // ---- Download Excel ----
    document.getElementById("btnDownloadRepoReport").onclick = () => {
        if (typeof XLSX === "undefined") {
            toast("Library XLSX belum termuat.");
            return;
        }
        if (allRepoContainers.length === 0) {
            toast("Tidak ada data Repo untuk diekspor.");
            return;
        }
        const dataToExport = allRepoContainers.map((item, index) => ({
            "No.": index + 1,
            "DN": (item.order.no_dn || []).join(', '),
            "EMKL": item.order.vendor,
            "Tgl Stuffing": formatDisplayDate(item.order.tgl_stuffing),
            "Container No.": item.container.no_container || '-',
            "No. Seal": item.container.no_seal || '-',
            "Plat Mobil": item.container.no_mobil || '-',
            "Nama Driver": item.container.nama_supir || '-',
            "Size": item.container.size,
            "Closing CY": item.order.closing_date ? formatDisplayDate(item.order.closing_date) : '-',
            "Jam Closing": item.order.closing_time || '-',
            "Remarks Order": item.order.remarks || '-',
            "Remarks Repo (EMKL)": item.container.remarks_Repo || '-'
        }));
        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Container Repo");
        XLSX.writeFile(workbook, "Container_Repo_Report.xlsx");
        toast("Ekspor Container Repo berhasil.");
    };
}

// ====================================================================
// BARU: Fungsi untuk Admin menyetujui atau menolak Container Repo
// (Tambahkan langsung setelah function renderContainerRepo di atas)
// ====================================================================
function approveRepoContainer(orderId, containerIndex, isApproved) {
    const order = state.orders.find(o => o.order_id === orderId);
    if (!order) return;
    const container = (state.containers[orderId] || [])[containerIndex];
    if (!container) return;

    // ✅ Simpan remarks admin dari input sebelum approve/reject
    const adminRemarksEl = document.getElementById(`admin_remarks_Repo_${orderId}_${containerIndex}`);
    if (adminRemarksEl) {
        container.remarks_Repo_admin = adminRemarksEl.value.trim();
    }

    if (isApproved) {
        container.Repo_approved = true;
        toast(`✅ Container Repo disetujui. Masuk ke tabel report.`);
        state.notifications.push({
            id: genId("NOTIF"),
            message: `Admin menyetujui status Repo untuk container ${container.size} di DN ${(order.no_dn || []).join(' & ')}.`,
            timestamp: new Date().toISOString(),
            isRead: false,
            role: 'vendor',
            targetVendor: order.vendor,
            relatedOrder: orderId
        });
    } else {
        container.Repo_approved = false;
        container.Repo_rejected = true;
        container.status = 'Confirm Order';
        toast(`❌ Container Repo ditolak. Status dikembalikan ke EMKL.`);
        state.notifications.push({
            id: genId("NOTIF"),
            message: `⚠️ Admin MENOLAK status Repo untuk container ${container.size} di DN ${(order.no_dn || []).join(' & ')}. Harap ganti status container tersebut.`,
            timestamp: new Date().toISOString(),
            isRead: false,
            role: 'vendor',
            targetVendor: order.vendor,
            relatedOrder: orderId
        });
    }

    saveState();
    renderContainerRepo();
}

// ✅ BARU: Fungsi simpan remarks admin dari tabel pending
function saveAdminRepoRemarks(orderId, containerIndex) {
    const container = (state.containers[orderId] || [])[containerIndex];
    if (!container) return;
    const el = document.getElementById(`admin_remarks_Repo_${orderId}_${containerIndex}`);
    if (!el) return;
    container.remarks_Repo_admin = el.value.trim();
    saveState();
    toast('✅ Remarks Admin disimpan.');
}

/* ===================== VENDOR: ORDERAN (Accept/Reject & Submit) ===================== */

function handleContainerAction(orderId, containerIndex, action) {
    const order = state.orders.find(o => o.order_id === orderId);
    if (!order || !state.containers[orderId] || !state.containers[orderId][containerIndex]) return;
    
    const c = state.containers[orderId][containerIndex];
    const isAccept = action === 'accept';

    if (isAccept) {
        c.status = STATUS_TRUCKING.find(s => s.toLowerCase() === 'confirm order') || 'Confirm Order';
        if (c.availability_restored) {
            const dateISO = order.tgl_stuffing;
            if (dateISO && state.availability[dateISO] && state.availability[dateISO][order.vendor]) {
                const vendorAvail = state.availability[dateISO][order.vendor];
                if (c.size === "20ft") vendorAvail["20ft"] = Math.max(0, Number(vendorAvail["20ft"] || 0) - 1);
                else if (c.size === "40ft/HC") vendorAvail["40ft/HC"] = Math.max(0, Number(vendorAvail["40ft/HC"] || 0) - 1);
                else if (c.size === "Combo") vendorAvail["Combo"] = Math.max(0, Number(vendorAvail["Combo"] || 0) - 1);
            }
            c.availability_restored = false;
        }
    } else {
        c.status = STATUS_TRUCKING.find(s => s.toLowerCase() === 'reject') || 'Reject';
        if (!c.availability_restored) {
            const dateISO = order.tgl_stuffing;
            if (!state.availability[dateISO]) state.availability[dateISO] = {};
            if (!state.availability[dateISO][order.vendor]) {
                state.availability[dateISO][order.vendor] = { "20ft": 0, "40ft/HC": 0, "Combo": 0 };
            }
            const vendorAvail = state.availability[dateISO][order.vendor];
            if (c.size === "20ft") vendorAvail["20ft"] = Number(vendorAvail["20ft"] || 0) + 1;
            else if (c.size === "40ft/HC") vendorAvail["40ft/HC"] = Number(vendorAvail["40ft/HC"] || 0) + 1;
            else if (c.size === "Combo") vendorAvail["Combo"] = Number(vendorAvail["Combo"] || 0) + 1;
            c.availability_restored = true;
        }
    }
    
    c.accept = isAccept;
    
    state.notifications.push({
        id: genId("NOTIF"),
        message: `${state.vendor_name} merespon kontainer ${c.size} di DN ${(order.no_dn || []).join(' & ')}: ${isAccept ? 'Accepted' : 'Rejected'}.`,
        timestamp: new Date().toISOString(),
        isRead: false,
        role: 'admin',
        relatedOrder: orderId
    });
    
    updateOrderSummary(orderId);
    saveState();
    closeModal();
    renderVendorOrderan();
    toast(`Kontainer #${c.no} di- ${isAccept ? 'Accept' : 'Reject'}.`);
}

function showContainerActionModal(orderId, containerIndex) {
    const order = state.orders.find(o => o.order_id === orderId);
    const container = state.containers[orderId][containerIndex];
    if (!order || !container) return;

    let actionButtons;
    let statusBadge;
    
    if (container.accept === true) {
        actionButtons = `<button class="btn danger full" data-action="reject">Batalkan Accept</button>`;
        statusBadge = `<span class="badge success">ACCEPTED</span>`;
    } else if (container.accept === false) {
        actionButtons = `<button class="btn success full" data-action="accept">Batalkan Reject</button>`;
        statusBadge = `<span class="badge danger">REJECTED</span>`;
    } else {
        actionButtons = `
            <button class="btn success full" data-action="accept">Accept Order</button>
            <button class="btn danger full" data-action="reject" style="margin-top: 8px;">Reject Order</button>
        `;
        statusBadge = `<span class="badge warn">PENDING</span>`;
    }

    const modalHtml = `
        <div style="text-align: center; margin-bottom: 20px;">
            <h4 style="margin: 0 0 5px 0;">Kontainer #${container.no} (${container.size})</h4>
            ${statusBadge}
        </div>
        <div class="form-section">
             <div class="section-title">Detail Order</div>
             <div style="font-size: 0.9rem; line-height: 1.6;">
                <p>DN: <b>${(order.no_dn || []).join(' & ')}</b></p>
                <p>Stuffing: <b>${formatDisplayDate(order.tgl_stuffing)}</b></p>
                <p>Closing CY: <b>${fmtDT(order.closing_date, order.closing_time)}</b></p>
                <p>Shipping Point: <b>${order.shipping_point}</b></p>
                <p>Remarks Admin: ${order.remarks || '-'}</p>
             </div>
        </div>
        <div style="margin-top: 15px;">
            ${actionButtons}
        </div>
    `;

    openModal(`Aksi Kontainer #${container.no}`, modalHtml, {
        closeBtnText: 'Tutup',
        closeBtnClass: 'secondary',
        setupListeners: (modalBody) => {
            modalBody.querySelectorAll('button[data-action]').forEach(btn => {
                btn.onclick = () => {
                    handleContainerAction(orderId, containerIndex, btn.dataset.action);
                };
            });
        }
    });
}

function renderVendorOrderan() {
    const vendor = state.vendor_name;

    content.innerHTML = `
        <div class="main-header">
            <h3 style="margin:0">📦 EMKL — List Order</h3>
            <div class="small">Respons ketersediaan dan isi detail kontainer.</div>
        </div>
        
        <div class="card" style="margin-bottom:16px;">
            <h4 style="margin:0 0 12px 0;">🔍 Filter Tanggal Stuffing</h4>
            <div class="row">
                <div class="col" style="grid-column: span 5;">
                    <label>Dari Tanggal</label>
                    <input type="date" id="vendor_filter_start" class="input" value="${state.vendorFilterStartDate || todayStr()}">
                </div>
                <div class="col" style="grid-column: span 5;">
                    <label>Sampai Tanggal</label>
                    <input type="date" id="vendor_filter_end" class="input" value="${state.vendorFilterEndDate || todayStr()}">
                </div>
                <div class="col" style="grid-column: span 2; display:flex; align-items:flex-end;">
                    <button id="vendor_apply_filter" class="btn primary full" style="height:40px;">Terapkan</button>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="rekap-wrap">
                <table class="table rekap" id="vendorOrderTable">
                    <thead>
                        <tr>
                            <th rowspan="2">No</th>
                            <th rowspan="2">DN</th>
                            <th rowspan="2">EMKL</th>
                            <th rowspan="2">Tanggal Stuffing</th>
                            <th rowspan="2">Shift</th>
                            <th rowspan="2">Shipping Point</th>
                            <th rowspan="2">Country Port (Port)</th>
                            <th rowspan="2">Terminal</th>
                            <th rowspan="2">Depo</th>
                            <th colspan="2" style="background: #f0f7ff;">CY</th>
                            <th rowspan="2">Container</th>
                            <th rowspan="2">Jumlah</th>
                            <th rowspan="2">Remarks</th>
                            <th colspan="2" style="text-align: center;">Status</th>
                            <th rowspan="2">Submit</th>
                        </tr>
                        <tr>
                            <th style="background: #f0f7ff;">Open</th>
                            <th style="background: #f0f7ff;">Closing (Date Time)</th>
                            <th class="acc">Accept</th>
                            <th class="rej">Reject</th>
                        </tr>
                    </thead>
                    <tbody id="vendorOrderBody"></tbody>
                </table>
            </div>
        </div>
    `;

    // ✅ Filter tanggal stuffing
    const filterStart = state.vendorFilterStartDate ? parseISODate(state.vendorFilterStartDate) : new Date(0);
    const filterEnd = state.vendorFilterEndDate ? parseISODate(state.vendorFilterEndDate) : new Date(8640000000000000);

    const ordersToRespond = state.orders.filter(o => {
        if (o.vendor !== vendor) return false;
        const containers = state.containers[o.order_id] || [];
        const hasPending = containers.some(c => c.accept === null);
        if (!hasPending) return false;
        const stuffingDate = parseISODate(o.tgl_stuffing);
        return stuffingDate >= filterStart && stuffingDate <= filterEnd;
    }).reverse();

    const tbody = document.getElementById("vendorOrderBody");
    
    if (ordersToRespond.length === 0) {
        tbody.innerHTML = `<tr><td colspan="17">Tidak ada order yang perlu direspons.</td></tr>`;
    } else {
        let rowsHtml = "";
        ordersToRespond.forEach((order, orderIdx) => {
            const containers = state.containers[order.order_id] || [];
            const sizes = ["20ft", "40ft/HC", "Combo"].filter(s => 
                (s === "20ft" && order.jml_20ft > 0) || 
                (s === "40ft/HC" && order.jml_40ft > 0) || 
                (s === "Combo" && order.jml_combo > 0)
            );
            const rowSpan = sizes.length;

            sizes.forEach((sz, sizeIdx) => {
                const total = (sz === "20ft") ? order.jml_20ft : (sz === "40ft/HC" ? order.jml_40ft : order.jml_combo);
                const groupAcc = containers.filter(c => c.size === sz && c.accept === true).length;
                const groupRej = containers.filter(c => c.size === sz && c.accept === false).length;
                // Default: accept = total (semua), reject = 0, kecuali sudah ada yg pending direspons sebagian
                const pendingCount = containers.filter(c => c.size === sz && c.accept === null).length;
                const defaultRej = groupRej; // jaga nilai reject yg sudah diisi
                const defaultAcc = pendingCount; // pending yang belum direspons tampilkan sebagai accept default

                rowsHtml += `<tr>`;
                if (sizeIdx === 0) {
                    rowsHtml += `
                        <td rowspan="${rowSpan}">${orderIdx + 1}</td>
                        <td rowspan="${rowSpan}">${order.no_dn.join('<br>')}</td>
                        <td rowspan="${rowSpan}">${order.vendor}</td>
                        <td rowspan="${rowSpan}">${formatDisplayDate(order.tgl_stuffing)}</td>
                        <td rowspan="${rowSpan}">${order.shift || '-'}</td>
                        <td rowspan="${rowSpan}">${order.shipping_point || '-'}</td>
                        <td rowspan="${rowSpan}">${order.pod || '-'}</td>
                        <td rowspan="${rowSpan}">${order.terminal || '-'}</td>
                        <td rowspan="${rowSpan}">${order.depo || '-'}</td>
                        <td rowspan="${rowSpan}">${order.open_cy ? formatDisplayDate(order.open_cy) : '-'}</td>
                        <td rowspan="${rowSpan}">${fmtDT(order.closing_date, order.closing_time)}</td>
                    `;
                }
                rowsHtml += `<td>${sz}</td><td>${total}</td>`;
                if (sizeIdx === 0) {
                    rowsHtml += `<td rowspan="${rowSpan}">${order.remarks || '-'}</td>`;
                }
                rowsHtml += `
                    <td class="acc">
                      <div class="accept-display" data-order-id="${order.order_id}" data-size="${sz}" style="font-weight:700; color:#059669; font-size:1rem; text-align:center;">${defaultAcc}</div>
                    </td>
                    <td class="rej">
                      <input type="number" class="input-reject" data-order-id="${order.order_id}" data-size="${sz}" value="0" min="0" max="${pendingCount}" placeholder="0" style="width:60px; text-align:center;">
                    </td>
                `;
                if (sizeIdx === 0) {
                    rowsHtml += `<td rowspan="${rowSpan}"><button class="btn primary" data-order-id-submit="${order.order_id}">Submit</button></td>`;
                }
                rowsHtml += `</tr>`;
            });
        });
        tbody.innerHTML = rowsHtml;
    }

    // Event listener filter
    const applyBtn = document.getElementById("vendor_apply_filter");
    if (applyBtn) {
        applyBtn.onclick = () => {
            state.vendorFilterStartDate = document.getElementById("vendor_filter_start").value;
            state.vendorFilterEndDate = document.getElementById("vendor_filter_end").value;
            saveState();
            renderVendorOrderan();
            toast("Filter diterapkan.");
        };
    }

    // Event listener input reject → auto hitung accept (accept = pending - reject)
    tbody.querySelectorAll('.input-reject').forEach(input => {
        input.addEventListener('input', (e) => {
            const orderId = e.target.dataset.orderId;
            const sz = e.target.dataset.size;
            const maxReject = parseInt(e.target.getAttribute('max'));
            let val = parseInt(e.target.value) || 0;
            if (val < 0) val = 0;
            if (val > maxReject) val = maxReject;
            e.target.value = val;
            const acceptDisplay = tbody.querySelector(`.accept-display[data-order-id="${orderId}"][data-size="${sz}"]`);
            if (acceptDisplay) acceptDisplay.textContent = maxReject - val;
        });
    });

    // Event listener tombol Submit — ✅ FIXED: hanya 1x restore, tidak double
    tbody.querySelectorAll('button[data-order-id-submit]').forEach(btn => {
        btn.onclick = () => {
            const oid = btn.dataset.orderIdSubmit;
            const order = state.orders.find(o => o.order_id === oid);
            const containers = state.containers[oid] || [];
            
            // Set accept/reject per container berdasarkan input
            tbody.querySelectorAll(`.input-reject[data-order-id="${oid}"]`).forEach(inp => {
                const sz = inp.dataset.size;
                const rejQty = parseInt(inp.value) || 0;
                const targetConts = containers.filter(c => c.size === sz && c.accept === null);
                const total = targetConts.length;
                const accQty = total - rejQty;
                
                targetConts.forEach((c, idx) => {
                    if (idx < accQty) {
                        c.accept = true;
                        c.status = "Confirm Order";
                    } else {
                        c.accept = false;
                        c.status = "Reject";
                        c.availability_restored = false; // reset flag
                    }
                });
            });

            // Failsafe: container yang masih null → reject
            containers.forEach(c => {
                if (c.accept === null) {
                    c.accept = false;
                    c.status = "Reject";
                    c.availability_restored = false;
                }
            });

            // ✅ FIXED: Hanya panggil restoreAvailabilityOnReject SEKALI
            // Tidak ada loop restore manual di sini agar tidak double
            restoreAvailabilityOnReject(oid);

            updateOrderSummary(oid);
            saveState();
            renderVendorOrderan();
            toast("✓ Order berhasil disubmit. Silakan lengkapi detail di menu List Orderan (Add Detail).");
        };
    });
}  




/* ===================== FUNGSI BARU: RENDER DATA REJECT ===================== */
function renderDataReject() {
    content.innerHTML = `
        <div class="main-header">
            <h3 style="margin:0">📕 Admin – Data Reject</h3>
            <div class="small">Daftar semua kontainer yang ditolak (Reject) oleh EMKL.</div>
        </div>
        <div class="card">
            <div class="row" style="margin-bottom:16px;">
                <div class="col" style="grid-column: span 3;">
                    <label>Filter EMKL</label>
                    <select id="reject_vendor" class="input"><option>-- Semua --</option></select>
                </div>
                <div class="col" style="grid-column: span 3;">
                    <label>Tgl Stuffing (start)</label>
                    <input id="reject_start" type="date" class="input">
                </div>
                <div class="col" style="grid-column: span 3;">
                    <label>Tgl Stuffing (end)</label>
                    <input id="reject_end" type="date" class="input">
                </div>
                <div class="col" style="grid-column: span 3; display:flex; align-items:flex-end;">
                    <button id="btnDownloadReject" class="btn excel full">📊 Excel</button>
                </div>
            </div>
            <div class="table-wrap">
                <table class="table rekap" id="rejectReportTable">
                    <thead>
                        <tr>
                            <th>No.</th><th>DN</th><th>EMKL</th><th>Tgl Stuffing</th>
                            <th>Shipping Point</th><th>Shift</th><th>Size</th>
                            <th>Container No.</th><th>No. Seal</th><th>Plat Mobil</th>
                            <th>Nama Driver</th><th>Remarks</th><th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody id="rejectReportBody"></tbody>
                </table>
            </div>
        </div>`;

    // Dropdown Vendor
    const rVend = document.getElementById("reject_vendor");
    VENDORS_DEFAULT.forEach(v => {
        const o = document.createElement("option"); o.textContent = v; rVend.appendChild(o);
    });

    // Default Date (30 hari terakhir)
    const rStart = document.getElementById("reject_start");
    const rEnd = document.getElementById("reject_end");
    const now = new Date();
    const past = new Date(); past.setDate(now.getDate() - 30);
    rStart.value = toISODate(past);
    rEnd.value = toISODate(now);

    function buildRejectTable() {
        const tbody = document.getElementById("rejectReportBody");
        const vend = rVend.value;
        const start = parseISODate(rStart.value);
        const end = parseISODate(rEnd.value);
        const rejectContainers = [];

        state.orders.forEach(order => {
            const stuffingDate = parseISODate(order.tgl_stuffing);
            if ((vend === "-- Semua --" || order.vendor === vend) && (stuffingDate >= start && stuffingDate <= end)) {
                (state.containers[order.order_id] || []).forEach((container, idx) => {
                    if (container.accept === false) {
                        rejectContainers.push({ order, container, containerIndex: idx, orderId: order.order_id });
                    }
                });
            }
        });

        if (rejectContainers.length === 0) {
            tbody.innerHTML = `<tr><td colspan="13" class="center">Tidak ada data reject.</td></tr>`;
            return;
        }

        tbody.innerHTML = rejectContainers.map((item, index) => {
            const { order, container, containerIndex, orderId } = item;
            const isEditing = state.editing_container_id_vendor === `${orderId}_${containerIndex}`;
            return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${(order.no_dn || []).join('<br>')}</td>
                    <td>${order.vendor}</td>
                    <td>${formatDisplayDate(order.tgl_stuffing)}</td>
                    <td>${order.shipping_point || '-'}</td>
                    <td>${order.shift || '-'}</td>
                    <td>${container.size}</td>
                    <td>${isEditing ? `<input type="text" id="edit_reject_cont_${orderId}_${containerIndex}" class="input" value="${container.no_container || ''}">` : (container.no_container || '-')}</td>
                    <td>${isEditing ? `<input type="text" id="edit_reject_seal_${orderId}_${containerIndex}" class="input" value="${container.no_seal || ''}">` : (container.no_seal || '-')}</td>
                    <td>${isEditing ? `<input type="text" id="edit_reject_mobil_${orderId}_${containerIndex}" class="input" value="${container.no_mobil || ''}">` : (container.no_mobil || '-')}</td>
                    <td>${isEditing ? `<input type="text" id="edit_reject_driver_${orderId}_${containerIndex}" class="input" value="${container.nama_supir || ''}">` : (container.nama_supir || '-')}</td>
                    <td>${order.remarks || '-'}</td>
                    <td>
                        ${isEditing 
                            ? `<button class="btn success tiny" data-save-reject="${orderId}_${containerIndex}">Save</button>` 
                            : `<button class="btn warn tiny" data-edit-reject="${orderId}_${containerIndex}">✏️</button>`}
                    </td>
                </tr>`;
        }).join('');

        // Attach Handlers (Edit/Save)
        tbody.querySelectorAll('[data-edit-reject]').forEach(b => b.onclick = () => { 
            state.editing_container_id_vendor = b.dataset.editReject; 
            saveState(); buildRejectTable(); 
        });
        tbody.querySelectorAll('[data-save-reject]').forEach(b => b.onclick = () => {
            const uid = b.dataset.saveReject;
            const [oid, cidx] = uid.split('_');
            const c = state.containers[oid][cidx];
            c.no_container = document.getElementById(`edit_reject_cont_${uid}`).value;
            c.no_seal = document.getElementById(`edit_reject_seal_${uid}`).value;
            c.no_mobil = document.getElementById(`edit_reject_mobil_${uid}`).value;
            c.nama_supir = document.getElementById(`edit_reject_driver_${uid}`).value;
            state.editing_container_id_vendor = null;
            saveState(); buildRejectTable(); toast("Data diupdate.");
        });
    }

    buildRejectTable();
    rVend.onchange = buildRejectTable; rStart.onchange = buildRejectTable; rEnd.onchange = buildRejectTable;
}

function formatDuration(timeStr) {
    if (!timeStr || typeof timeStr !== 'string') return '-';
    const parts = timeStr.split(':').map(Number);
    if (parts.length !== 3) return timeStr;

    let [h, m, s] = parts;
    let totalSeconds = h * 3600 + m * 60 + s;
    
    const maxSeconds = 3600 * 24;
    const days = Math.floor(totalSeconds / maxSeconds);
    
    if (days >= 1) {
        return `${days} Hari`; 
    }
    
    return timeStr;
}

function renderReportDurasi() {
  const dummyDataRaw = [
    { no: 1, iml: "44008784", jenis: "MUAT", t1: "9/10/2025 8:26:00 PM", t2: "9/10/2025 8:34:18 PM", s1: "00:08:18", t3: "9/11/2025 1:28:19 AM", s2: "04:54:01", t4: "9/11/2025 12:20:19 PM", s3: "10:52:00", t5: "9/11/2025 12:48:18 PM", s4: "00:28:00", t6: "9/11/2025 5:35:16 PM", s5: "04:46:57", total: "21:09:16" },
    { no: 2, iml: "44008785", jenis: "MUAT", t1: "9/10/2025 9:00:00 PM", t2: "9/10/2025 9:15:30 PM", s1: "00:15:30", t3: "9/11/2025 2:00:00 AM", s2: "04:44:30", t4: "9/11/2025 1:00:00 PM", s3: "11:00:00", t5: "9/11/2025 1:30:15 PM", s4: "00:30:15", t6: "9/11/2025 6:09:18 PM", s5: "04:15:03", total: "18:19:12" },
    { no: 3, iml: "44008786", jenis: "MUAT", t1: "9/10/2025 10:00:00 PM", t2: "9/10/2025 10:10:10 PM", s1: "00:10:10", t3: "9/11/2025 3:00:00 AM", s2: "04:49:50", t4: "9/11/2025 10:00:00 AM", s3: "07:00:00", t5: "9/11/2025 10:30:00 AM", s4: "00:30:00", t6: "9/11/2025 11:59:29 AM", s5: "02:43:02", total: "14:24:35" },
    { no: 4, iml: "44008787", jenis: "MUAT", t1: "9/10/2025 11:00:00 PM", t2: "9/10/2025 11:05:00 PM", s1: "00:05:00", t3: "9/11/2025 4:00:00 AM", s2: "04:55:00", t4: "9/11/2025 9:00:00 AM", s3: "05:00:00", t5: "9/11/2025 9:30:00 AM", s4: "00:30:00", t6: "9/11/2025 12:44:44 AM", s5: "01:38:33", total: "12:47:41" },
    { no: 5, iml: "44008788", jenis: "MUAT", t1: "9/10/2025 11:30:00 PM", t2: "9/10/2025 11:35:00 PM", s1: "00:05:00", t3: "9/11/2025 5:00:00 AM", s2: "05:25:00", t4: "9/11/2025 10:00:00 AM", s3: "05:00:00", t5: "9/11/2025 10:30:00 AM", s4: "00:30:00", t6: "9/11/2025 12:30:06 PM", s5: "02:06:31", total: "12:58:43" },
    { no: 6, iml: "44009000", jenis: "MUAT", t1: "9/15/2025 1:00:00 AM", t2: "9/16/2025 1:00:00 AM", s1: "24:00:00", t3: "9/17/2025 1:00:00 AM", s2: "24:00:00", t4: "9/18/2025 1:00:00 AM", s3: "24:00:00", t5: "9/19/2025 1:00:00 AM", s4: "24:00:00", t6: "9/20/2025 1:00:00 AM", s5: "24:00:00", total: "120:00:00" } 
  ];
  
  function parseDurationToSeconds(timeStr) {
      if (!timeStr) return 0;
      const parts = timeStr.split(':').map(Number);
      if (parts.length !== 3) return 0;
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }

  const dummyData = dummyDataRaw.map(d => ({
      ...d,
      type: undefined, 
      s1_fmt: formatDuration(d.s1),
      s2_fmt: formatDuration(d.s2),
      s3_fmt: formatDuration(d.s3),
      s4_fmt: formatDuration(d.s4),
      s5_fmt: formatDuration(d.s5),
      total_seconds: parseDurationToSeconds(d.total),
      total_days: Math.floor(parseDurationToSeconds(d.total) / (3600 * 24)), 
      total_fmt: formatDuration(d.total),
  }));

  content.innerHTML = `
    <div class="main-header"><h3 style="margin:0">⏱️ Admin — Report Durasi Trucking</h3><div class="small">Laporan Durasi Trucking</div></div>
    <div id="report-durasi-page">
      
      <div class="container">
        
        <div class="controls-bar">
          <div class="control-group">
            <label class="switch-label">Tampilkan semua kolom <b>Selisih Waktu</b></label>
            <label class="switch">
              <input type="checkbox" id="rd_toggle_selisih" checked>
              <span class="slider"></span>
            </label>
          </div>
          <details class="details">
            <summary>► Pengaturan kolom selisih (opsional)</summary>
            </details>
          <div class="control-group-spacer"></div>
          <div class="control-group">
            <input type="text" id="rd_search" class="input" placeholder="Cari No IML..." style="min-width: 220px;">
            <select id="rd_filter_jenis" class="input" style="min-width: 160px;">
              <option value="">Semua Jenis IML</option>
              <option value="MUAT">MUAT</option>
            </select>
            <select id="rd_filter_type" class="input" style="min-width: 160px; display:none;"> <option value="">Semua Type</option>
              <option value="LOCAL">LOCAL</option>
            </select>
            <button id="rd_filter_btn" class="btn danger">🔍</button>
          </div>
        </div>
        
        <div class="legend-bar">
          <span class="legend-item"><b class="green">Hijau</b>: ≤ 6 jam (waktu normal)</span>
          <span class="legend-item"><b class="yellow">Kuning</b>: ≤ 24 jam (perlu perhatian)</span>
          <span class="legend-item"><b class="red">Merah</b>: > 24 jam (melebihi batas wajar)</span>
        </div>

        <div class="controls">
          </div>

        <div class="table-wrap">
          <table id="grid">
            <thead>
              <tr>
                <th>No.</th>
                <th>No IML</th>
                <th>Jenis IML</th>
                <th>Tgl Timbang 1</th>
                <th>Tgl Masuk Gudang</th>
                <th class="col-selisih">Selisih Waktu</th>
                <th>Tgl Start Muat</th>
                <th class="col-selisih">Selisih Waktu</th>
                <th>Tgl End Muat</th>
                <th class="col-selisih">Selisih Waktu</th>
                <th>Tgl Keluar Gudang</th>
                <th class="col-selisih">Selisih Waktu</th>
                <th>Tgl Timbang 2</th>
                <th class="col-selisih">Selisih Waktu</th>
                <th>Durasi Keseluruhan</th>
                <th>Hari</th> </tr>
            </thead>
            <tbody id="rd_body">
              <tr><td colspan="16" class="center">Memuat data...</td></tr>
            </tbody>
          </table>
        </div>
        
        <div class="legend">
          </div>

      </div>
    </div>
  `;

  const getBadgeClass = (timeStr, isTotal = false) => {
    if (!timeStr) return 'diff-ok';
    try {
        const parts = timeStr.split(':').map(Number);
        const hours = parts[0] + (parts[1]/60) + (parts[2]/3600);
        
        if (isTotal) {
             if (hours > 24) return 'diff-bad';
             if (hours > 18) return 'diff-warn';
             return 'diff-ok';
        } else {
            if (hours > 24) return 'diff-bad';
            if (hours > 6) return 'diff-warn';
            return 'diff-ok';
        }
    } catch(e) {
        return 'diff-ok';
    }
  };
  
  function getOriginalDuration(index, key) {
      if (index >= 0 && index < dummyDataRaw.length) {
          return dummyDataRaw[index][key];
      }
      return '-';
  }


  function drawDurasiTable(data) {
    const tbody = document.getElementById("rd_body");
    if (!data.length) {
        tbody.innerHTML = `<tr><td colspan="16" class="center">Tidak ada data yang cocok dengan pencarian.</td></tr>`;
        return;
    }
    
    tbody.innerHTML = data.map((d, index) => {
        const s1_raw = getOriginalDuration(index, 's1');
        const s2_raw = getOriginalDuration(index, 's2');
        const s3_raw = getOriginalDuration(index, 's3');
        const s4_raw = getOriginalDuration(index, 's4');
        const s5_raw = getOriginalDuration(index, 's5');
        const total_raw = getOriginalDuration(index, 'total');
        
        return `
            <tr>
                <td>${d.no}</td>
                <td>${d.iml}</td>
                <td>${d.jenis}</td>
                <td>${d.t1}</td>
                <td>${d.t2}</td>
                <td class="col-selisih"><span class="diff-badge ${getBadgeClass(s1_raw)}">${d.s1_fmt}</span></td>
                <td>${d.t3}</td>
                <td class="col-selisih"><span class="diff-badge ${getBadgeClass(s2_raw)}">${d.s2_fmt}</span></td>
                <td>${d.t4}</td>
                <td class="col-selisih"><span class="diff-badge ${getBadgeClass(s3_raw)}">${d.s3_fmt}</span></td>
                <td>${d.t5}</td>
                <td class="col-selisih"><span class="diff-badge ${getBadgeClass(s4_raw)}">${d.s4_fmt}</span></td>
                <td>${d.t6}</td>
                <td class="col-selisih"><span class="diff-badge ${getBadgeClass(s5_raw)}">${d.s5_fmt}</span></td>
                <td><span class="diff-badge diff-total ${getBadgeClass(total_raw, true)}">${d.total_fmt}</span></td>
                <td>${d.total_days || '-'}</td> 
            </tr>
        `;
    }).join('');
  }
  
  
  const toggle = document.getElementById("rd_toggle_selisih");
  const page = document.getElementById("report-durasi-page");
  if (toggle && page) {
    const applyToggle = () => {
      if (toggle.checked) {
        page.classList.remove('hide-selisih');
      } else {
        page.classList.add('hide-selisih');
      }
    };
    toggle.onchange = applyToggle;
    applyToggle();
  }
  
  document.getElementById("rd_filter_btn").onclick = () => {
    const tbody = document.getElementById("rd_body");
    tbody.innerHTML = `<tr><td colspan="16" class="center">...Mencari data...</td></tr>`; 

    const searchTerm = document.getElementById("rd_search").value.trim().toLowerCase();
    const jenis = document.getElementById("rd_filter_jenis").value;

    const filteredData = dummyData.filter(d => {
      const matchIML = d.iml.toLowerCase().includes(searchTerm);
      const matchJenis = (jenis === "" || d.jenis === jenis);
      return matchIML && matchJenis;
    });

    setTimeout(() => {
      drawDurasiTable(filteredData);
      toast(`Menampilkan ${filteredData.length} hasil.`);
    }, 250);
  };

  drawDurasiTable(dummyData);
}

// ====================================================================
// --- FUNGSI DOWNLOAD OTOMATIS BOC ---
// ====================================================================
let autoDownloadTimer = null; 

function scheduleAutoDownload() {
    if (autoDownloadTimer) {
        clearTimeout(autoDownloadTimer);
    }

    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(17, 0, 0, 0); 

    let msToTarget = targetTime.getTime() - now.getTime();

    if (msToTarget < 0) {
        msToTarget += 24 * 60 * 60 * 1000;
    }

    console.log(`Penjadwalan download BOC otomatis dalam ${Math.round(msToTarget / 1000)} detik (target ${targetTime.toTimeString().split(' ')[0]})...`);

    autoDownloadTimer = setTimeout(() => {
        console.log("Menjalankan download BOC otomatis...");
        
        if (state.authenticated && state.user_role === 'admin') {
            const today = new Date();
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(today.getDate() - 6);
            
            const endDateStr = toISODate(today);
            const startDateStr = toISODate(sevenDaysAgo);

            try {
                generateAndDownloadBOC(startDateStr, endDateStr, true);
            } catch (e) {
                console.error("Gagal menjalankan download otomatis:", e);
            }
        } else {
            console.log("Download otomatis dibatalkan, user bukan admin atau sudah logout.");
        }
        
        scheduleAutoDownload();
        
    }, msToTarget);
}
// ====================================================================
// --- AKHIR FUNGSI DOWNLOAD OTOMATIS BOC ---
// ====================================================================


/* ===================== VENDOR: HELP MENU ===================== */
function renderVideoTutorial() {
  content.innerHTML = `
    <div class="main-header"><h3 style="margin:0">🎥 Video Tutorial</h3>
      <div class="small">Tutorial penggunaan sistem untuk EMKL</div></div>
    <div class="card">
      <h3 style="margin:0 0 16px 0;">Panduan Video</h3>
      <div class="row" style="gap: 16px;">
        <div class="col" style="grid-column: span 6;">
          <div class="card" style="padding: 20px; text-align: center;">
            <div style="background: #f3f4f6; border-radius: 12px; padding: 60px 20px; margin-bottom: 16px;">
              <span style="font-size: 3rem;">🎬</span>
            </div>
            <h4 style="margin: 0 0 8px 0;">Tutorial Dasar</h4>
            <p class="small muted">Cara menggunakan sistem untuk pertama kali</p>
            <button class="btn primary" onclick="window.open('https://youtu.be/_ujo5b5xqxU?si=M5bm_0yQsxAN0vor', '_blank')">▶️ Tonton Video</button>
          </div>
        </div>
        <div class="col" style="grid-column: span 6;">
          <div class="card" style="padding: 20px; text-align: center;">
            <div style="background: #f3f4f6; border-radius: 12px; padding: 60px 20px; margin-bottom: 16px;">
              <span style="font-size: 3rem;">📦</span>
            </div>
            <h4 style="margin: 0 0 8px 0;">Cara Input Detail Kontainer</h4>
            <p class="small muted">Panduan lengkap input data kontainer</p>
            <button class="btn primary" onclick="window.open('https://youtu.be/_ujo5b5xqxU?si=M5bm_0yQsxAN0vor', '_blank')">▶️ Tonton Video</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderGuideBook() {
  content.innerHTML = `
    <div class="main-header"><h3 style="margin:0">📖 GuideBook</h3>
      <div class="small">Panduan lengkap penggunaan sistem</div></div>
    <div class="card">
      <h3 style="margin:0 0 16px 0;">Dokumen Panduan</h3>
      <div class="file-row">
        <div class="file-main">
          <div class="file-name">📄 <b>Panduan Lengkap EMKL - Bahasa Indonesia</b></div>
          <div class="file-meta small">PDF • 2.5 MB • Terakhir diupdate: 15 Jan 2026</div>
        </div>
        <div class="file-actions">
          <button class="btn success" onclick="alert('Fungsi download akan segera tersedia')">📥 Unduh</button>
          <button class="btn secondary" onclick="alert('Fungsi preview akan segera tersedia')">👁️ Lihat</button>
        </div>
      </div>
      <div class="file-row">
        <div class="file-main">
          <div class="file-name">📄 <b>FAQ - Frequently Asked Questions</b></div>
          <div class="file-meta small">PDF • 1.8 MB • Terakhir diupdate: 10 Jan 2026</div>
        </div>
        <div class="file-actions">
          <button class="btn success" onclick="alert('Fungsi download akan segera tersedia')">📥 Unduh</button>
          <button class="btn secondary" onclick="alert('Fungsi preview akan segera tersedia')">👁️ Lihat</button>
        </div>
      </div>
    </div>
  `;
}

function renderChatAdmin() {
  // Contact info (tidak ditampilkan di UI):
  // Telepon: +62 812-3456-7890
  // Email To: Andhika_Pramana@app.co.id; Okky_Nurwidodo@app.co.id; Rizky_Ritonga@app.co.id
  // CC: Almira_Oktapazia@app.co.id, Adek_Sari@app.co.id
  content.innerHTML = `
    <div class="main-header"><h3 style="margin:0">💬 Chat Admin</h3>
      <div class="small">Hubungi admin untuk bantuan</div></div>
    <div class="card">
      <h3 style="margin:0 0 16px 0;">Kontak Admin</h3>
      <div class="row" style="gap: 16px;">
        <div class="col" style="grid-column: span 6;">
          <div class="card" style="padding: 20px; background: linear-gradient(135deg, #dcfce7, #bbf7d0); border: 1px solid #86efac;">
            <div style="text-align: center; margin-bottom: 16px;">
              <span style="font-size: 3rem;">📞</span>
            </div>
            <h4 style="margin: 0 0 8px 0; text-align: center;">Telepon</h4>
            <button class="btn success full" onclick="window.location.href='tel:+6281234567890'" style="margin-top: 12px;">📞 Hubungi Sekarang</button>
          </div>
        </div>
        <div class="col" style="grid-column: span 6;">
          <div class="card" style="padding: 20px; background: linear-gradient(135deg, #dbeafe, #bfdbfe); border: 1px solid #60a5fa;">
            <div style="text-align: center; margin-bottom: 16px;">
              <span style="font-size: 3rem;">📧</span>
            </div>
            <h4 style="margin: 0 0 8px 0; text-align: center;">Email</h4>
            <button class="btn primary full" onclick="window.location.href='mailto:Andhika_Pramana@app.co.id;Okky_Nurwidodo@app.co.id;Rizky_Ritonga@app.co.id?cc=Almira_Oktapazia@app.co.id;Adek_Sari@app.co.id'" style="margin-top: 12px;">📧 Hubungi Admin</button>
          </div>
        </div>
      </div>
      <div class="card" style="margin-top: 16px; background: #fef3c7; border: 1px solid #fbbf24;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 2rem;">💡</span>
          <div>
            <h4 style="margin: 0 0 4px 0; color: #92400e;">Tips</h4>
            <p class="small" style="margin: 0; color: #78350f;">Untuk respons lebih cepat, sertakan screenshot dan nomor order Anda saat menghubungi admin.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Boot
// ✅ REVISI: Langsung sembunyikan sidebar jika belum authenticated
if (!state.authenticated) {
  if (sidebarEl) sidebarEl.style.display = 'none';
  document.body.classList.add('login-only');
  document.body.classList.add('login-page');
}
// ✅ REVISI 5: Fungsi cek H-1 Closing CY repo yang dipanggil saat boot
function checkRepoH1Notifications() {
    if (!state.authenticated || state.user_role !== 'admin') return;
    const todayISO = todayStr();
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowISO = toISODate(tomorrowDate);

    state.orders.forEach(order => {
        const closingDateISO = order.closing_date || '';
        if (closingDateISO === tomorrowISO) {
            const repoContainers = (state.containers[order.order_id] || []).filter(c => (c.status || '').toLowerCase() === 'repo');
            if (repoContainers.length > 0) {
                const alreadyNotified = state.notifications.some(n =>
                    n.relatedOrder === order.order_id &&
                    n.type === 'repo_h1' &&
                    n.date === todayISO
                );
                if (!alreadyNotified) {
                    state.notifications.push({
                        id: genId("NOTIF"),
                        message: `⚠️ H-1 Closing CY! DN ${(order.no_dn || []).join(' & ')} memiliki ${repoContainers.length} container berstatus REPO. Closing: ${fmtDT(order.closing_date, order.closing_time)}`,
                        timestamp: new Date().toISOString(),
                        isRead: false,
                        role: 'admin',
                        relatedOrder: order.order_id,
                        type: 'repo_h1',
                        date: todayISO
                    });
                }
            }
        }
    });
    saveState();
}

render();

// Panggil penjadwalan hanya jika user adalah admin
if (state.authenticated && state.user_role === 'admin') {
    scheduleAutoDownload();
    checkRepoH1Notifications();
}
function toggleInlineDetail(orderId, btn) {
    const detailRow = document.getElementById(`detail_row_${orderId}`);
    const containerDiv = document.getElementById(`detail_container_${orderId}`);

    if (detailRow.style.display === 'table-row') {
        detailRow.style.display = 'none';
        btn.textContent = 'Add Detail';
        btn.className = 'btn warn tiny';
        return;
    }

    // Tutup baris detail lainnya agar rapi
    document.querySelectorAll('[id^="detail_row_"]').forEach(row => row.style.display = 'none');
    document.querySelectorAll('button').forEach(b => { if(b.textContent === 'Hide Detail') b.textContent = 'Add Detail'; });

    // ✅ BARU: Ambil data order untuk auto-fill depo
    const order = state.orders.find(o => o.order_id === orderId);
    const orderDepo = order ? (order.depo || '') : ''; // Depo dari order
    
    const containers = (state.containers[orderId] || []).filter(c => c.accept === true);
    
    let html = `
        <div style="background: linear-gradient(135deg, #e0f2fe 0%, #f0fdf4 100%); border: 2px solid #38bdf8; border-radius:10px; padding:14px; box-shadow: 0 4px 12px rgba(56,189,248,0.15);">
            <h4 style="margin-bottom:10px; color:#0369a1; font-size:13px;">📋 Input Detail Kontainer</h4>
            <table class="table compact" style="width:100%; border-collapse:collapse; background:#fff; min-width:unset; border-radius:8px; overflow:hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
                <thead style="background: linear-gradient(90deg, #0ea5e9, #38bdf8); font-size:11px;">
                    <tr>
                        <th style="padding:6px 4px; border:1px solid #7dd3fc; color:#000;">No</th>
                        <th style="padding:6px 4px; border:1px solid #7dd3fc; color:#000;">Container No</th>
                        <th style="padding:6px 4px; border:1px solid #7dd3fc; color:#000;">Seal</th>
                        <th style="padding:6px 4px; border:1px solid #7dd3fc; color:#000;">Plat Mobil</th>
                        <th style="padding:6px 4px; border:1px solid #7dd3fc; color:#000;">Driver</th>
                        <th style="padding:6px 4px; border:1px solid #7dd3fc; color:#000;">Contact</th>
                        <th style="padding:6px 4px; border:1px solid #7dd3fc; color:#000;">Depo</th>
                        <th style="padding:6px 4px; border:1px solid #7dd3fc; color:#000;">Size</th>
                        <th style="padding:6px 4px; border:1px solid #7dd3fc; color:#000;">Status</th>
                        <th style="padding:6px 4px; border:1px solid #7dd3fc; color:#000; background:#fbbf24;">Remarks Repo (EMKL)</th>
                        <th style="padding:6px 4px; border:1px solid #7dd3fc; color:#000; background:#60a5fa;">Remarks Repo (Admin)</th>
                    </tr>
                </thead>
                <tbody>`;

    containers.forEach((c, i) => {
        const isCombo = c.size === 'Combo';
        const contValues = (c.no_container || "").split("\n");
        const sealValues = (c.no_seal || "").split("\n");

        // ✅ KUNCI: Auto-fill depo - prioritas: container.depo → order.depo → kosong
        const depoValue = c.depo || orderDepo;
        const isRepo = (c.status || '').toLowerCase() === 'Repo';
        const remarksRepoValue = c.remarks_Repo || '';

        if (isCombo) {
            html += `
                <tr ${c.Repo_rejected ? 'style="background:#fee2e2; border: 2px solid #ef4444;"' : ''}>
                    <td rowspan="2" style="text-align:center; border:1px solid #eee;">${i+1}${c.Repo_rejected ? '<br><span style="color:#dc2626;font-size:9px;font-weight:700;">⚠️ Repo DITOLAK</span>' : ''}</td>
                    <td style="border:1px solid #eee;"><input type="text" class="input-compact input-container" id="c_no_${orderId}_${i}_0" value="${contValues[0]||''}" placeholder="Cont 1" maxlength="11" pattern="[A-Z]{4}[0-9]{7}" title="Format: 4 Huruf + 7 Angka"></td>
                    <td style="border:1px solid #eee;"><input type="text" class="input-compact" id="c_seal_${orderId}_${i}_0" value="${sealValues[0]||''}" placeholder="Seal 1"></td>
                    <td rowspan="2" style="border:1px solid #eee;"><input type="text" class="input-compact" id="c_mobil_${orderId}_${i}" value="${c.no_mobil||''}"></td>
                    <td rowspan="2" style="border:1px solid #eee;"><input type="text" class="input-compact" id="c_driver_${orderId}_${i}" value="${c.nama_supir||''}"></td>
                    <td rowspan="2" style="border:1px solid #eee;"><input type="text" class="input-compact" id="c_contact_${orderId}_${i}" value="${c.contact||''}"></td>
                    <td rowspan="2" style="border:1px solid #eee;"><input type="text" class="input-compact" id="c_depo_${orderId}_${i}" value="${depoValue}" placeholder="${orderDepo || 'Depo...'}" title="Auto-filled dari order: ${orderDepo || 'Belum diisi'}"></td>
                    <td rowspan="2" style="text-align:center; font-size:10px; border:1px solid #eee;">Combo</td>
                    <td rowspan="2" style="border:1px solid #eee;">
                        <select class="input-compact status-select-repo" id="c_status_${orderId}_${i}" data-order-id="${orderId}" data-idx="${i}" ${c.Repo_rejected ? 'style="border:2px solid #ef4444; background:#fee2e2;"' : ''}>
                            ${STATUS_TRUCKING.filter(s => s !== 'Reject' && s !== 'Pending').map(s => `<option value="${s}" ${c.status === s ? 'selected' : ''}>${s}</option>`).join('')}
                        </select>
                        ${c.Repo_rejected ? '<div style="color:#dc2626;font-size:9px;margin-top:3px;">⚠️ Ganti status (Repo ditolak Admin)</div>' : ''}
                    </td>
<td rowspan="2" style="border:1px solid #7dd3fc; background:#fffbeb;">
                        <input type="text" class="input-compact remarks-repo-input" id="c_remarks_Repo_${orderId}_${i}" value="${remarksRepoValue}" placeholder="${isRepo ? 'Alasan Repo...' : '-'}" ${!isRepo ? 'disabled style="background:#f3f4f6; color:#9ca3af;"' : ''}>
                    </td>
                    <td rowspan="2" style="border:1px solid #7dd3fc; background:#dbeafe;">
                        <input type="text" class="input-compact" id="c_remarks_Repo_admin_${orderId}_${i}" value="${c.remarks_Repo_admin || ''}" placeholder="Catatan Admin..." style="background:#eff6ff;">
                    </td>
                </tr>
                <tr ${c.Repo_rejected ? 'style="background:#fee2e2;"' : ''}>
                    <td style="border:1px solid #eee;"><input type="text" class="input-compact input-container" id="c_no_${orderId}_${i}_1" value="${contValues[1]||''}" placeholder="Cont 2" maxlength="11" pattern="[A-Z]{4}[0-9]{7}" title="Format: 4 Huruf + 7 Angka"></td>
                    <td style="border:1px solid #eee;"><input type="text" class="input-compact" id="c_seal_${orderId}_${i}_1" value="${sealValues[1]||''}" placeholder="Seal 2"></td>
                </tr>`;
        } else {
            html += `
                <tr ${c.Repo_rejected ? 'style="background:#fee2e2; border: 2px solid #ef4444;"' : ''}>
                    <td style="text-align:center; border:1px solid #eee;">${i+1}${c.Repo_rejected ? '<br><span style="color:#dc2626;font-size:9px;font-weight:700;">⚠️ Repo DITOLAK</span>' : ''}</td>
                    <td style="border:1px solid #eee;"><input type="text" class="input-compact input-container" id="c_no_${orderId}_${i}" value="${c.no_container||''}" maxlength="11" pattern="[A-Z]{4}[0-9]{7}" title="Format: 4 Huruf + 7 Angka (Contoh: ABCD1234567)"></td>
                    <td style="border:1px solid #eee;"><input type="text" class="input-compact" id="c_seal_${orderId}_${i}" value="${c.no_seal||''}"></td>
                    <td style="border:1px solid #eee;"><input type="text" class="input-compact" id="c_mobil_${orderId}_${i}" value="${c.no_mobil||''}"></td>
                    <td style="border:1px solid #eee;"><input type="text" class="input-compact" id="c_driver_${orderId}_${i}" value="${c.nama_supir||''}"></td>
                    <td style="border:1px solid #eee;"><input type="text" class="input-compact input-contact" id="c_contact_${orderId}_${i}" value="${c.contact||''}" pattern="[0-9]*" inputmode="numeric" title="Hanya angka yang diperbolehkan"></td>
                    <td style="border:1px solid #eee;"><input type="text" class="input-compact" id="c_depo_${orderId}_${i}" value="${depoValue}" placeholder="${orderDepo || 'Depo...'}" title="Auto-filled dari order: ${orderDepo || 'Belum diisi'}"></td>
                    <td style="text-align:center; font-size:10px; border:1px solid #eee;">${c.size}</td>
                    <td style="border:1px solid #eee;">
                        <select class="input-compact status-select-repo" id="c_status_${orderId}_${i}" data-order-id="${orderId}" data-idx="${i}" ${c.Repo_rejected ? 'style="border:2px solid #ef4444; background:#fee2e2;"' : ''}>
                            ${STATUS_TRUCKING.filter(s => s !== 'Reject' && s !== 'Pending').map(s => `<option value="${s}" ${c.status === s ? 'selected' : ''}>${s}</option>`).join('')}
                        </select>
                        ${c.Repo_rejected ? '<div style="color:#dc2626;font-size:9px;margin-top:3px;">⚠️ Ganti status (Repo ditolak Admin)</div>' : ''}
                    </td>
                    <td style="border:1px solid #7dd3fc; background:#fffbeb;">
                        <input type="text" class="input-compact remarks-repo-input" id="c_remarks_Repo_${orderId}_${i}" value="${remarksRepoValue}" placeholder="${isRepo ? 'Alasan Repo...' : '-'}" ${!isRepo ? 'disabled style="background:#f3f4f6; color:#9ca3af;"' : ''}>
                    </td>
                    <td style="border:1px solid #7dd3fc; background:#dbeafe;">
                        <span style="color:#9ca3af; font-size:11px;">-</span>
                    </td>
                </tr>`;
        }
    });

    html += `</tbody></table>
            <div style="text-align:right; margin-top:12px; padding-top:10px; border-top: 1px solid #bae6fd;">
                <button class="btn success" onclick="saveInlineDetails('${orderId}')" style="padding:6px 24px; background: linear-gradient(135deg, #059669, #10b981); font-weight:700; box-shadow: 0 2px 6px rgba(5,150,105,0.3);">✓ Simpan Semua Detail</button>
            </div>
        </div>`;

    containerDiv.innerHTML = html;
    detailRow.style.display = 'table-row';
    btn.textContent = 'Hide Detail';
    btn.className = 'btn danger tiny';

    // ✅ Event listener: enable/disable remarks Repo berdasarkan pilihan status
    containerDiv.querySelectorAll('.status-select-repo').forEach(sel => {
        sel.addEventListener('change', function() {
            const selOrderId = this.dataset.orderId;
            const idx = this.dataset.idx;
            const remarksInput = document.getElementById(`c_remarks_Repo_${selOrderId}_${idx}`);
            if (!remarksInput) return;
            if (this.value === 'Repo') {
                remarksInput.disabled = false;
                remarksInput.placeholder = 'Alasan Repo...';
                remarksInput.style.background = '';
                remarksInput.style.color = '';
            } else {
                remarksInput.disabled = true;
                remarksInput.placeholder = '-';
                remarksInput.style.background = '#f3f4f6';
                remarksInput.style.color = '#9ca3af';
                remarksInput.value = '';
            }
        });
        // ✅ Trigger sekali saat load untuk set state awal
        sel.dispatchEvent(new Event('change'));
    });
}

function saveInlineDetails(orderId) {
    const containers = (state.containers[orderId] || []).filter(c => c.accept === true);
    
    // ✅ VALIDASI: Fungsi helper untuk validasi container number
    function validateContainerNumber(value) {
        if (!value || !value.trim()) return true; // Allow empty
        const cleanValue = value.replace(/[^A-Z0-9]/g, '').toUpperCase();
        const pattern = /^[A-Z]{4}[0-9]{7}$/;
        return pattern.test(cleanValue);
    }
    
    // ✅ VALIDASI: Fungsi helper untuk validasi contact (angka saja)
    function validateContact(value) {
        if (!value || !value.trim()) return true; // Allow empty
        return /^[0-9]+$/.test(value.trim());
    }
    
    containers.forEach((c, i) => {
        if (c.size === 'Combo') {
            const n1 = document.getElementById(`c_no_${orderId}_${i}_0`).value.trim();
            const n2 = document.getElementById(`c_no_${orderId}_${i}_1`).value.trim();
            c.no_container = n1 + (n2 ? "\n" + n2 : "");
            
            const s1 = document.getElementById(`c_seal_${orderId}_${i}_0`).value.trim();
            const s2 = document.getElementById(`c_seal_${orderId}_${i}_1`).value.trim();
            c.no_seal = s1 + (s2 ? "\n" + s2 : "");
        } else {
            c.no_container = document.getElementById(`c_no_${orderId}_${i}`).value.trim();
            c.no_seal = document.getElementById(`c_seal_${orderId}_${i}`).value.trim();
        }
        
        c.no_mobil = document.getElementById(`c_mobil_${orderId}_${i}`).value.trim();
        c.nama_supir = document.getElementById(`c_driver_${orderId}_${i}`).value.trim();
        c.contact = document.getElementById(`c_contact_${orderId}_${i}`).value.trim();
        // ✅ VALIDASI Contact
        const contactValue = document.getElementById(`c_contact_${orderId}_${i}`).value.trim();
        if (contactValue && !validateContact(contactValue)) {
            toast(`❌ Contact harus berisi angka saja untuk container #${i+1}`);
            return;
        }
        c.contact = contactValue;
        
        // ✅ VALIDASI Container Number
        if (c.size === 'Combo') {
            const n1 = document.getElementById(`c_no_${orderId}_${i}_0`).value.trim();
            const n2 = document.getElementById(`c_no_${orderId}_${i}_1`).value.trim();
            
            if (n1 && !validateContainerNumber(n1)) {
                toast(`❌ Container 1 format salah. Harus 4 Huruf + 7 Angka (Contoh: ABCD1234567)`);
                return;
            }
            if (n2 && !validateContainerNumber(n2)) {
                toast(`❌ Container 2 format salah. Harus 4 Huruf + 7 Angka (Contoh: ABCD1234567)`);
                return;
            }
            
            c.no_container = n1 + (n2 ? "\n" + n2 : "");
        } else {
            const containerValue = document.getElementById(`c_no_${orderId}_${i}`).value.trim();
            
            if (containerValue && !validateContainerNumber(containerValue)) {
                toast(`❌ Container format salah. Harus 4 Huruf + 7 Angka (Contoh: ABCD1234567)`);
                return;
            }
            
            c.no_container = containerValue;
        }
        c.depo = document.getElementById(`c_depo_${orderId}_${i}`).value.trim();
        c.status = document.getElementById(`c_status_${orderId}_${i}`).value;
        
        // ✅ REVISI: Simpan remarks_Repo per container dari input inline
        const remarksRepoEl = document.getElementById(`c_remarks_Repo_${orderId}_${i}`);
        if (remarksRepoEl) {
            c.remarks_Repo = remarksRepoEl.value.trim();
        }

        // ✅ BARU: Simpan remarks_Repo_admin dari input inline
        const remarksRepoAdminEl = document.getElementById(`c_remarks_Repo_admin_${orderId}_${i}`);
        if (remarksRepoAdminEl) {
            c.remarks_Repo_admin = remarksRepoAdminEl.value.trim();
        }
        
        // ✅ REVISI: Jika EMKL sudah mengganti status dari Repo (karena ditolak admin),
        // hapus flag Repo_rejected agar highlight merah hilang
        if (c.Repo_rejected && (c.status || '').toLowerCase() !== 'repo') {
            c.Repo_rejected = false;
            c.Repo_approved = undefined;
        }
    });

    saveState();
    toast("Detail berhasil disimpan.");
    renderVendorListDetail(); // Refresh tampilan
}