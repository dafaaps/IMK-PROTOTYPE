/* ==========================================================================
   APP.JS - Core Interactivity and Synthesis Engine for Nure Birthday Web App
   ========================================================================== */

// 1. Audio and Synth Sound Effects Engine (Web Audio API)
let audioCtx = null;
let bgMusic = null;
let isMusicPlaying = false;

// Initialize Audio Context on user click
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

// Synthesize a beautiful crystal bell/chime sound
function playChimeSound(frequency = 587.33, duration = 1.2) {
  try {
    initAudio();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Sweet sine wave mixed with triangle for crystal clarity
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    // Add quick pitch bend up for pleasant sparkle
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, audioCtx.currentTime + 0.08);
    osc.frequency.exponentialRampToValueAtTime(frequency, audioCtx.currentTime + 0.3);

    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.log("Audio play blocked or unsupported:", e);
  }
}

// Synthesize a soft wind blow sound (white noise filtered)
function playBlowSound() {
  try {
    initAudio();
    if (!audioCtx) return;

    const bufferSize = audioCtx.sampleRate * 0.4; // 0.4 seconds
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    // Generate white noise
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    // Filter to make it sound like a soft puff
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, audioCtx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.3);

    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.4, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noise.start();
  } catch (e) {
    console.log("Sound error:", e);
  }
}

// Synthesize a sweet succession of happy arpeggio notes
function playVictoryArpeggio() {
  const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C major arpeggio
  notes.forEach((freq, idx) => {
    setTimeout(() => {
      playChimeSound(freq, 1.5 - idx * 0.15);
    }, idx * 100);
  });
}

// 2. Setup Background Music
function setupBackgroundMusic() {
  // Creating audio element with a license-free elegant acoustic/lullaby track
  bgMusic = new Audio();
  bgMusic.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"; // Beautiful chill ambient
  bgMusic.loop = true;
  bgMusic.volume = 0.4;

  const btnToggle = document.getElementById('btn-music-toggle');
  
  btnToggle.addEventListener('click', () => {
    initAudio();
    if (isMusicPlaying) {
      bgMusic.pause();
      btnToggle.classList.remove('playing');
      isMusicPlaying = false;
    } else {
      bgMusic.play().then(() => {
        btnToggle.classList.add('playing');
        isMusicPlaying = true;
      }).catch(e => {
        console.log("Music play failed:", e);
      });
    }
  });
}

// 3. Envelope opening flow
document.addEventListener('DOMContentLoaded', () => {
  setupBackgroundMusic();
  setupEnvelopeInteractions();
  setupHeartErupter();
  
  // Add dynamic background sparkles to the welcome screen
  createAmbientSparkles();
});

function setupEnvelopeInteractions() {
  const envelope = document.getElementById('envelope-wrapper');
  const btnOpen = document.getElementById('btn-open-envelope');
  
  const triggerOpen = () => {
    if (envelope.classList.contains('opened')) return;
    
    // Play sound and toggle classes
    playChimeSound(523.25, 1.5); // C5 note
    envelope.classList.add('opened');
    
    // Trigger Initial Confetti Burst
    setTimeout(() => {
      triggerConfetti(0.25, {
        spread: 80,
        startVelocity: 45
      });
    }, 700);

    // Fly envelope out
    setTimeout(() => {
      envelope.classList.add('envelope-dismiss');
      playChimeSound(659.25, 1.2); // E5 note
    }, 1500);

    // Transition to main screen
    setTimeout(() => {
      const welcome = document.getElementById('welcome-screen');
      const app = document.getElementById('app-screen');
      const audioControl = document.getElementById('audio-container');

      welcome.style.opacity = '0';
      welcome.style.transform = 'translateY(-30px)';
      
      setTimeout(() => {
        welcome.classList.add('hidden');
        app.classList.remove('hidden');
        audioControl.classList.remove('hidden');
        
        // Auto-show app screen with smooth transition
        setTimeout(() => {
          app.classList.remove('opacity-0', 'scale-95');
          
          // Try to auto-start BGM
          bgMusic.play().then(() => {
            document.getElementById('btn-music-toggle').classList.add('playing');
            isMusicPlaying = true;
          }).catch(() => {
            console.log("Auto playback restricted by browser policy, awaiting user toggle.");
          });

          // Play dynamic introductory arpeggio chime
          playVictoryArpeggio();
          
          // Trigger sweet screen splash confetti
          triggerConfetti(0.4, { spread: 120, startVelocity: 35 });
        }, 100);
      }, 500);

    }, 2300);
  };

  envelope.addEventListener('click', triggerOpen);
  btnOpen.addEventListener('click', triggerOpen);
}

// 4. Tab / Navigation Page Switching
function switchPage(pageId) {
  initAudio();
  playChimeSound(783.99, 0.4); // G5 quick tap note

  // Hide all pages
  const pages = document.querySelectorAll('.page-content');
  pages.forEach(page => {
    page.classList.add('hidden');
  });

  // Show selected page
  const selectedPage = document.getElementById(`page-${pageId}`);
  if (selectedPage) {
    selectedPage.classList.remove('hidden');
  }

  // Handle nav buttons active states
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.classList.remove('active');
  });

  const activeBtn = document.getElementById(`nav-${pageId}`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  // Scroll to top of content
  document.getElementById('pages-container').scrollTop = 0;
}

// 5. Interactive Virtual Cake & Candle Blow Mechanic
const extinguishedCandles = {
  1: false,
  2: false,
  3: false
};

function blowCandle(id) {
  if (extinguishedCandles[id]) return;

  // Extinguish candle
  extinguishedCandles[id] = true;
  const candleEl = document.getElementById(`candle-${id}`);
  candleEl.classList.remove('active');
  candleEl.classList.add('extinguished');

  // Sound puff synthesis
  playBlowSound();

  // Spawn smoke particles
  spawnSmokePuff(candleEl);

  // Check if all candles blown
  const allBlown = Object.values(extinguishedCandles).every(val => val === true);
  if (allBlown) {
    setTimeout(() => {
      // Big celebration sound and confetti
      playVictoryArpeggio();
      triggerConfetti(0.6, { spread: 100, particleCount: 150 });
      
      // Reveal the secret wish card
      const secretCard = document.getElementById('cake-secret-card');
      secretCard.classList.remove('hidden');
      setTimeout(() => {
        secretCard.classList.remove('scale-90', 'opacity-0');
      }, 100);

      document.getElementById('candles-status').innerHTML = "<i class='fa-solid fa-heart text-brand-pink animate-pulse'></i> Semua Lilin Padam! Semoga terkabul!";
      document.getElementById('candles-status').classList.remove('animate-pulse');
    }, 800);
  }
}

function spawnSmokePuff(candleEl) {
  const container = candleEl.querySelector('.flame');
  if (!container) return;

  const rect = container.getBoundingClientRect();
  const cakeContainer = document.getElementById('page-cake');

  for (let i = 0; i < 5; i++) {
    const smoke = document.createElement('span');
    smoke.className = 'smoke-puff';
    
    // Position relatively to page view
    smoke.style.left = `${candleEl.offsetLeft + 2}px`;
    smoke.style.top = `${candleEl.offsetTop - 10}px`;
    
    // Randomized offsets
    smoke.style.transform = `translate(${(Math.random() - 0.5) * 10}px, ${(Math.random() - 0.5) * 10}px)`;
    smoke.style.animationDelay = `${Math.random() * 0.2}s`;

    candleEl.appendChild(smoke);

    // Clean up
    setTimeout(() => {
      smoke.remove();
    }, 1000);
  }
}

// 6. Batang Ase Nostalgia Progress Kuis Game
let nostalgiaProgress = 20;

function boostNostalgia() {
  if (nostalgiaProgress >= 100) return;

  nostalgiaProgress += 20;
  playChimeSound(440 + nostalgiaProgress * 4, 0.6); // Rising pitch for incremental fun

  const bar = document.getElementById('nostalgia-progress');
  const label = document.getElementById('nostalgia-label');

  bar.style.width = `${nostalgiaProgress}%`;
  label.textContent = `${nostalgiaProgress}% Kangen`;

  if (nostalgiaProgress === 100) {
    label.textContent = "100% KANGEN NURE! ❤️";
    
    setTimeout(() => {
      playVictoryArpeggio();
      triggerConfetti(0.5, { spread: 120, colors: ['#4ade80', '#ffd166', '#ff5c8a'] });
      
      // Update label description
      document.getElementById('btn-meter').innerHTML = "<i class='fa-solid fa-check-double text-green-400'></i> Kangen Terkirim Ke Nure!";
      document.getElementById('btn-meter').classList.remove('bg-brand-purple');
      document.getElementById('btn-meter').classList.add('bg-emerald-600');
    }, 600);
  }
}

// 7. Sweet Typewriter Letter Reveal
let letterLineIdx = 1;

function readNextLetterLine() {
  letterLineIdx++;
  playChimeSound(600 + letterLineIdx * 50, 0.5);

  const nextParagraph = document.getElementById(`letter-paragraph-${letterLineIdx}`);
  if (nextParagraph) {
    nextParagraph.classList.remove('hidden');
    nextParagraph.style.animation = 'fadeIn 0.8s ease-out forwards';
  }

  // If final line reached, hide the navigation controls
  if (letterLineIdx === 4) {
    document.getElementById('letter-controls').classList.add('hidden');
    triggerConfetti(0.2, { spread: 60 });
  }
}

// 8. Dynamic Wish Generator List
const nureWishes = [
  "Semoga Nure dilancarkan segala urusannya, dimudahkan rezekinya, dan didekatkan dengan segala kebaikan! Amin! 💖",
  "Semoga Nure makin sukses dalam karir dan pekerjaan, berlimpah kebahagiaan, serta tetap jadi sosok periang! 🌟",
  "Semoga di level umur yang baru ini, Nure dipenuhi keberkahan, kesehatan jasmani rohani, dan selalu dilindungi Allah SWT! 🎂",
  "Nure, ingat ya: kamu itu luar biasa hebat, mandiri, cantik, dan berhak mendapatkan kebahagiaan terbaik di alam semesta! 🥰",
  "Selamat bertambah usia Nure! Semoga impian-impian besarmu bisa tercapai satu persatu dengan penuh kemudahan! ✈️🌍",
  "Barakallah Fii Umrik Nure! Semoga senyuman manis khas dari Batang Ase selalu terpancar di wajahmu setiap hari! 😊🌳",
  "Semoga hatimu selalu lapang, dijauhkan dari segala gundah dan duka, serta didekatkan dengan orang-orang baik yang menyayangimu! 🤍"
];

function generateRandomWish() {
  playChimeSound(698.46, 0.5); // F5 note
  
  const textEl = document.getElementById('wish-box-text');
  
  // Choose random wish, make sure it is different from current if possible
  let randomIdx = Math.floor(Math.random() * nureWishes.length);
  let selectedWish = nureWishes[randomIdx];

  // Trigger quick click visual effect
  textEl.style.opacity = '0';
  textEl.style.transform = 'scale(0.95)';

  setTimeout(() => {
    textEl.textContent = `"${selectedWish}" ✨`;
    textEl.style.opacity = '1';
    textEl.style.transform = 'scale(1)';
    triggerConfetti(0.15, { spread: 50, particleCount: 30 });
  }, 200);
}

// 9. Spawning Erupter Hearts Overlay
let heartClicksCount = 0;

function setupHeartErupter() {
  const btn = document.getElementById('btn-heart-erupter');
  
  btn.addEventListener('click', (e) => {
    heartClicksCount++;
    document.getElementById('heart-count').textContent = heartClicksCount;
    
    // Scale button down slightly on tap
    btn.style.transform = 'scale(0.9)';
    setTimeout(() => btn.style.transform = 'scale(1)', 100);

    // Play synthesis chime sound
    playChimeSound(600 + Math.random() * 400, 0.4);

    // Spawn floating emoji animation
    const container = document.getElementById('particle-overlay');
    const emojis = ['❤️', '💖', '🥰', '✨', '💕', '🔥', '🌸'];
    
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const heart = document.createElement('span');
    heart.className = 'floating-heart text-2xl md:text-3xl pointer-events-none select-none';
    heart.textContent = randomEmoji;

    // Center spawning point relative to client click or button center
    const x = e.clientX || window.innerWidth / 2;
    const y = e.clientY || window.innerHeight / 2;
    
    heart.style.left = `${x - 15}px`;
    heart.style.top = `${y - 30}px`;
    
    // Random directions
    const randomDirX = (Math.random() - 0.5) * 150; // drift left or right
    const randomRotate = (Math.random() - 0.5) * 60; // tilt angle
    const randomScale = 0.5 + Math.random() * 0.8; // scale variations

    // Custom inline properties for CSS animations
    heart.style.setProperty('--drift-x', `${randomDirX}px`);
    heart.style.transform = `scale(${randomScale}) rotate(${randomRotate}deg)`;
    
    // Inject and apply custom keyframe overrides for dynamic drift
    heart.style.animation = `floatUpDrift 2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards`;
    
    container.appendChild(heart);

    // Cleanup
    setTimeout(() => {
      heart.remove();
    }, 2000);

    // Milestone bonus confetti
    if (heartClicksCount % 10 === 0) {
      triggerConfetti(0.3, { spread: 80, particleCount: 50 });
      playVictoryArpeggio();
    }
  });
}

// CSS Injection for dynamic heart drift
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes floatUpDrift {
    0% { transform: translate(0, 0) scale(0.6) rotate(0deg); opacity: 0; }
    15% { opacity: 1; }
    90% { opacity: 0.9; }
    100% { transform: translate(var(--drift-x), -220px) scale(1.4) rotate(45deg); opacity: 0; }
  }
`;
document.head.appendChild(styleSheet);

// 10. Helper Canvas Confetti Wrapper
function triggerConfetti(intensity = 0.3, options = {}) {
  try {
    const defaults = {
      particleCount: Math.floor(100 * intensity),
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff5c8a', '#ff85a2', '#f72585', '#7209b7', '#ffd166']
    };
    
    confetti(Object.assign({}, defaults, options));
  } catch (err) {
    console.log("Canvas Confetti error:", err);
  }
}

// 11. Generate slow ambient background sparkles (welcome screen decorative background)
function createAmbientSparkles() {
  const container = document.querySelector('.sparkles-container');
  if (!container) return;

  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'absolute w-1 h-1 bg-white rounded-full opacity-0 pointer-events-none';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    
    const delay = Math.random() * 5;
    const duration = 2 + Math.random() * 3;
    sparkle.style.animation = `ambientTwinkle ${duration}s ease-in-out ${delay}s infinite`;
    
    container.appendChild(sparkle);
  }
}

// Add ambient twinkle animation to stylesheet
styleSheet.innerText += `
  @keyframes ambientTwinkle {
    0%, 100% { opacity: 0; transform: scale(0.5); }
    50% { opacity: 0.8; transform: scale(1.5); }
  }
`;
