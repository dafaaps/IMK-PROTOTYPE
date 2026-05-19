let gmap,userMarker,userLat=null,userLng=null,gpsAsked=false;
let activeMarkers = [];

const reportsData = [
  { lat: 3.5952, lng: 98.6722, title: 'Korupsi APBD', color: '#EAB308', island: 'Sumatera', locationName: 'Medan', count: 852, urgency: 'Tinggi' },
  { lat: -0.9471, lng: 100.3688, title: 'Pungli Izin Usaha', color: '#EAB308', island: 'Sumatera', locationName: 'Padang', count: 320, urgency: 'Sedang' },
  { lat: -2.9909, lng: 104.7566, title: 'Jalan Rusak Parah', color: '#22C55E', island: 'Sumatera', locationName: 'Palembang', count: 150, urgency: 'Selesai' },
  { lat: -6.2000, lng: 106.8166, title: 'Pungli Pelayanan Publik', color: '#EF4444', island: 'Jawa', locationName: 'DKI Jakarta', count: 1247, urgency: 'Tinggi' },
  { lat: -6.9147, lng: 107.6098, title: 'Penyalahgunaan Wewenang', color: '#EAB308', island: 'Jawa', locationName: 'Jawa Barat', count: 893, urgency: 'Sedang' },
  { lat: -7.2504, lng: 112.7688, title: 'Bantuan Sosial Fiktif', color: '#EF4444', island: 'Jawa', locationName: 'Jawa Timur', count: 621, urgency: 'Tinggi' },
  { lat: -0.0263, lng: 109.3425, title: 'Ilegal Logging', color: '#EF4444', island: 'Kalimantan', locationName: 'Pontianak', count: 410, urgency: 'Tinggi' },
  { lat: -3.3167, lng: 114.5901, title: 'Tambang Ilegal', color: '#EAB308', island: 'Kalimantan', locationName: 'Banjarmasin', count: 280, urgency: 'Sedang' },
  { lat: -1.2653, lng: 116.8312, title: 'Pungli Pelabuhan', color: '#EAB308', island: 'Kalimantan', locationName: 'Balikpapan', count: 190, urgency: 'Sedang' },
  { lat: -5.1477, lng: 119.4327, title: 'Korupsi Dana Desa', color: '#EF4444', island: 'Sulawesi', locationName: 'Makassar', count: 520, urgency: 'Tinggi' },
  { lat: 1.4822, lng: 124.8489, title: 'Infrastruktur Mangkrak', color: '#EAB308', island: 'Sulawesi', locationName: 'Manado', count: 215, urgency: 'Sedang' },
  { lat: -8.6705, lng: 115.2128, title: 'Pungli Pariwisata', color: '#EAB308', island: 'Bali & Nusa Tenggara', locationName: 'Bali', count: 340, urgency: 'Sedang' },
  { lat: -10.1589, lng: 123.5786, title: 'Kekurangan Air Bersih', color: '#EF4444', island: 'Bali & Nusa Tenggara', locationName: 'Kupang', count: 110, urgency: 'Tinggi' },
  { lat: -3.6949, lng: 128.1814, title: 'Fasilitas Kesehatan Minim', color: '#EAB308', island: 'Maluku & Papua', locationName: 'Ambon', count: 180, urgency: 'Sedang' },
  { lat: -2.5337, lng: 140.7181, title: 'Korupsi Dana Otsus', color: '#EF4444', island: 'Maluku & Papua', locationName: 'Jayapura', count: 450, urgency: 'Tinggi' }
];

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b=>{
    b.classList.remove('text-primary');b.classList.add('text-gray-500');
    if(b.dataset.screen===id){b.classList.add('text-primary');b.classList.remove('text-gray-500');}
  });
  window.scrollTo(0,0);
  if(id==='map' && !gpsAsked){
    gpsAsked=true;
    document.getElementById('gpsModal').style.display='flex';
  }
}

function initMap(){
  const defaultPos={lat:-2.5,lng:118};
  gmap=new google.maps.Map(document.getElementById('google-map'),{
    center:defaultPos,zoom:5,
    disableDefaultUI:true,zoomControl:true,
    styles:[
      {elementType:'geometry',stylers:[{color:'#1d1d1d'}]},
      {elementType:'labels.text.stroke',stylers:[{color:'#1d1d1d'}]},
      {elementType:'labels.text.fill',stylers:[{color:'#8a8a8a'}]},
      {featureType:'water',elementType:'geometry',stylers:[{color:'#0e1626'}]},
      {featureType:'road',elementType:'geometry',stylers:[{color:'#2a2a2a'}]},
      {featureType:'poi',elementType:'labels',stylers:[{visibility:'off'}]}
    ]
  });
  
  // Draw initial markers (All)
  drawMarkers('Semua');
}

function drawMarkers(filterIsland = 'Semua') {
  // Clear existing
  activeMarkers.forEach(m => m.setMap(null));
  activeMarkers = [];

  const filtered = filterIsland === 'Semua' ? reportsData : reportsData.filter(r => r.island === filterIsland);
  
  filtered.forEach(r => {
    const m = new google.maps.Marker({
      position: {lat: r.lat, lng: r.lng},
      map: gmap,
      title: r.title,
      icon: {path: google.maps.SymbolPath.CIRCLE, scale: 8, fillColor: r.color, fillOpacity: .9, strokeColor: '#fff', strokeWeight: 2}
    });
    activeMarkers.push(m);
  });

  renderHotspots(filtered);
}

function renderHotspots(data) {
  const list = document.getElementById('hotspot-list');
  if(!list) return;
  list.innerHTML = '';
  
  // Sort by count descending
  const sorted = [...data].sort((a, b) => b.count - a.count).slice(0, 5); // top 5
  
  if (sorted.length === 0) {
    list.innerHTML = '<p class="text-sm text-gray-500">Tidak ada data hotspot di wilayah ini.</p>';
    return;
  }

  sorted.forEach(r => {
    let bg = r.urgency === 'Tinggi' ? 'bg-red-500/20 text-red-400' : (r.urgency === 'Sedang' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400');
    list.innerHTML += `
      <div class="bg-card rounded-xl p-4 flex justify-between items-center fade-in">
        <div><p class="text-sm font-semibold">${r.locationName}</p><p class="text-xs text-gray-400">${r.count.toLocaleString()} laporan aktif</p></div>
        <span class="${bg} text-xs px-2 py-1 rounded-full">${r.urgency}</span>
      </div>
    `;
  });
}

function filterByIsland(island, element) {
  // update buttons UI
  const container = element.parentElement;
  const buttons = container.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.className = 'filter-btn cursor-pointer bg-surface text-gray-400 text-xs px-3 py-1.5 rounded-full transition hover:bg-gray-800';
  });
  element.className = 'filter-btn cursor-pointer bg-primary/20 text-primary text-xs px-3 py-1.5 rounded-full font-medium transition';
  
  // redraw markers and list
  drawMarkers(island);
  
  // adjust map bounds or center based on island
  const centers = {
    'Semua': { lat: -2.5, lng: 118, zoom: 5 },
    'Sumatera': { lat: 0, lng: 102, zoom: 5 },
    'Jawa': { lat: -7.5, lng: 110, zoom: 6 },
    'Kalimantan': { lat: -1, lng: 114, zoom: 5 },
    'Sulawesi': { lat: -2, lng: 120, zoom: 5 },
    'Bali & Nusa Tenggara': { lat: -8.5, lng: 120, zoom: 6 },
    'Maluku & Papua': { lat: -3, lng: 135, zoom: 5 }
  };
  
  if (centers[island] && gmap) {
    gmap.panTo({lat: centers[island].lat, lng: centers[island].lng});
    gmap.setZoom(centers[island].zoom);
  }
}

function requestGPS(){
  document.getElementById('gpsModal').style.display='none';
  if(!navigator.geolocation){alert('GPS tidak didukung di browser ini.');return;}
  navigator.geolocation.getCurrentPosition(onGPSSuccess,onGPSError,{enableHighAccuracy:true,timeout:10000});
}

function denyGPS(){
  document.getElementById('gpsModal').style.display='none';
}

function onGPSSuccess(pos){
  userLat=pos.coords.latitude;userLng=pos.coords.longitude;
  const loc={lat:userLat,lng:userLng};
  gmap.setCenter(loc);gmap.setZoom(14);
  if(userMarker)userMarker.setMap(null);
  userMarker=new google.maps.Marker({position:loc,map:gmap,title:'Lokasi Anda',
    icon:{path:google.maps.SymbolPath.CIRCLE,scale:10,fillColor:'#E91E63',fillOpacity:1,strokeColor:'#fff',strokeWeight:3}
  });
  document.getElementById('mapLocationInfo').style.display='flex';
  fetch('https://nominatim.openstreetmap.org/reverse?lat='+userLat+'&lon='+userLng+'&format=json')
    .then(r=>r.json()).then(d=>{
      document.getElementById('userAddress').textContent=d.display_name||userLat.toFixed(4)+', '+userLng.toFixed(4);
    }).catch(()=>{
      document.getElementById('userAddress').textContent=userLat.toFixed(4)+', '+userLng.toFixed(4);
    });
}

function onGPSError(err){
  let msg='Tidak dapat mengakses lokasi.';
  if(err.code===1)msg='Akses lokasi ditolak. Aktifkan GPS di pengaturan browser.';
  else if(err.code===2)msg='Sinyal GPS tidak tersedia.';
  else if(err.code===3)msg='Waktu permintaan habis.';
  alert(msg);
}

function centerToUser(){
  if(userLat&&userLng){gmap.setCenter({lat:userLat,lng:userLng});gmap.setZoom(14);}
  else{document.getElementById('gpsModal').style.display='flex';}
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('uploadIcon').style.display = 'none';
      document.getElementById('uploadText').style.display = 'none';
      const imgPreview = document.getElementById('imagePreview');
      imgPreview.src = e.target.result;
      imgPreview.classList.remove('hidden');
      document.getElementById('uploadArea').classList.remove('p-6');
      document.getElementById('uploadArea').classList.add('p-0', 'h-32');
    };
    reader.readAsDataURL(file);
  }
}

function toggleSwitch(element) {
  const knob = element.querySelector('.toggle-knob');
  if (element.classList.contains('bg-primary')) {
    element.classList.remove('bg-primary');
    element.classList.add('bg-gray-600');
    knob.classList.remove('right-1');
    knob.classList.add('left-1');
  } else {
    element.classList.remove('bg-gray-600');
    element.classList.add('bg-primary');
    knob.classList.remove('left-1');
    knob.classList.add('right-1');
  }
}

// --- SOS CALL LOGIC ---
let volumePressCount = 0;
let volumePressTimer;
let sosCallTimer;
let sosConnectedTimer;

// Detect volume keys or 'v' key for testing
document.addEventListener('keydown', (e) => {
  if (e.key === 'AudioVolumeUp' || e.key === 'AudioVolumeDown' || e.key.toLowerCase() === 'v') {
    volumePressCount++;
    
    clearTimeout(volumePressTimer);
    
    if (volumePressCount >= 3) {
      triggerSOSCall();
      volumePressCount = 0;
    } else {
      volumePressTimer = setTimeout(() => {
        volumePressCount = 0;
      }, 2000); // 2 seconds window
    }
  }
});

function triggerSOSCall() {
  showScreen('sos-call');
  const bottomNav = document.getElementById('bottom-nav');
  if(bottomNav) bottomNav.style.display = 'none'; // hide bottom nav
  
  const statusEl = document.getElementById('sos-call-status');
  statusEl.textContent = 'Memanggil...';
  statusEl.classList.add('animate-pulse');
  
  // Reset overlay
  const overlay = document.getElementById('dark-overlay');
  overlay.style.display = 'none';
  overlay.classList.replace('opacity-100', 'opacity-0');
  
  // Simulate ringing for 3 seconds, then connect
  sosCallTimer = setTimeout(() => {
    statusEl.classList.remove('animate-pulse');
    let seconds = 0;
    statusEl.textContent = 'Tersambung 00:00';
    
    // Start connected timer
    sosConnectedTimer = setInterval(() => {
      seconds++;
      const m = Math.floor(seconds / 60).toString().padStart(2, '0');
      const s = (seconds % 60).toString().padStart(2, '0');
      statusEl.textContent = `Tersambung ${m}:${s}`;
      
      // After 2 seconds, dim screen
      if (seconds === 2) {
        overlay.style.display = 'block';
        setTimeout(() => overlay.classList.replace('opacity-0', 'opacity-100'), 50);
      }
    }, 1000);
    
  }, 3000);
}

function endSOSCall() {
  clearTimeout(sosCallTimer);
  clearInterval(sosConnectedTimer);
  
  // Remove dark overlay
  const overlay = document.getElementById('dark-overlay');
  overlay.classList.replace('opacity-100', 'opacity-0');
  setTimeout(() => { overlay.style.display = 'none'; }, 500); // wait for fade transition
  
  // Go back to previous screen
  const bottomNav = document.getElementById('bottom-nav');
  if(bottomNav) bottomNav.style.display = 'block';
  showScreen('home'); // or profile/rights depending on where they were, defaulting to home is safer for prototype
}

let blackoutClickCount = 0;
let blackoutClickTimer;

function handleBlackoutClick() {
  blackoutClickCount++;
  clearTimeout(blackoutClickTimer);
  
  if (blackoutClickCount >= 4) {
    // Exit blackout mode
    const overlay = document.getElementById('dark-overlay');
    overlay.classList.replace('opacity-100', 'opacity-0');
    setTimeout(() => { 
      overlay.style.display = 'none'; 
    }, 500);
    blackoutClickCount = 0;
  } else {
    blackoutClickTimer = setTimeout(() => {
      blackoutClickCount = 0;
    }, 1500); // Must click 4 times within 1.5 seconds
  }
}

