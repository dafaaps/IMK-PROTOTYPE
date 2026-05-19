let gmap,userMarker,userLat=null,userLng=null,gpsAsked=false;

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
  const reports=[
    {lat:-6.2,lng:106.85,title:'Korupsi Dana Desa',color:'#EF4444'},
    {lat:-6.9,lng:107.6,title:'Pungli Pelayanan',color:'#EAB308'},
    {lat:-7.25,lng:112.75,title:'Penyalahgunaan Wewenang',color:'#22C55E'},
    {lat:-8.65,lng:115.2,title:'Pelanggaran HAM',color:'#EF4444'},
    {lat:3.6,lng:98.68,title:'Korupsi APBD',color:'#EAB308'}
  ];
  reports.forEach(r=>{
    new google.maps.Marker({position:{lat:r.lat,lng:r.lng},map:gmap,title:r.title,
      icon:{path:google.maps.SymbolPath.CIRCLE,scale:8,fillColor:r.color,fillOpacity:.9,strokeColor:'#fff',strokeWeight:2}
    });
  });
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

function selectFilter(element) {
  const container = element.parentElement;
  const buttons = container.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.className = 'filter-btn cursor-pointer bg-surface text-gray-400 text-xs px-3 py-1.5 rounded-full transition hover:bg-gray-800';
  });
  element.className = 'filter-btn cursor-pointer bg-primary/20 text-primary text-xs px-3 py-1.5 rounded-full font-medium transition';
}
