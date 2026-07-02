// --- NEURAL NETWORK CANVAS BACKGROUND ---
const canvas = document.getElementById('neural-bg');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 65;
const connectionDistance = 120;
let mouse = { x: null, y: null, radius: 150 };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Track Mouse Movement
window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
window.addEventListener('mouseleave', () => {
  mouse.x = null;
  mouse.y = null;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.radius = Math.random() * 2 + 1.5;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Boundaries check
    if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
    if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

    // Mouse interactive push / pull effect
    if (mouse.x != null) {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        // Subtle magnetic pull
        this.x += dx * 0.01;
        this.y += dy * 0.01;
      }
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    const isLight = document.body.classList.contains('light-theme');
    ctx.fillStyle = isLight ? 'rgba(124, 58, 237, 0.35)' : 'rgba(139, 92, 246, 0.4)';
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}
initParticles();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const isLight = document.body.classList.contains('light-theme');
  
  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    
    for (let j = i + 1; j < particles.length; j++) {
      let dx = particles[i].x - particles[j].x;
      let dy = particles[i].y - particles[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < connectionDistance) {
        let alpha = 1 - (dist / connectionDistance);
        ctx.strokeStyle = isLight 
          ? `rgba(8, 145, 178, ${alpha * 0.12})` 
          : `rgba(6, 182, 212, ${alpha * 0.15})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }

    // Connect to mouse
    if (mouse.x != null) {
      let dx = particles[i].x - mouse.x;
      let dy = particles[i].y - mouse.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        let alpha = 1 - (dist / mouse.radius);
        ctx.strokeStyle = isLight 
          ? `rgba(124, 58, 237, ${alpha * 0.2})` 
          : `rgba(139, 92, 246, ${alpha * 0.25})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}
animate();


// --- EXPERIENCE TIMELINE CONSOLE ---
const consoleBody = document.getElementById('console-body');
const expCounter = document.getElementById('exp-counter');
const expProgressBar = document.getElementById('exp-progress-bar');
const expPrevBtn = document.getElementById('exp-prev');
const expNextBtn = document.getElementById('exp-next');

// Experience keys mapped to their i18n translation keys and tags
const experienceKeys = [
  { prefix: "exp1", detailCount: 4, tags: ["IA", "Full Stack", ".NET", "Docker", "RAG"] },
  { prefix: "exp2", detailCount: 4, tags: ["NLP", "RAG", "Python", "ML", "R&D"] },
  { prefix: "exp3", detailCount: 4, tags: ["ML", "Python", "Data Science", "Scikit-learn"] },
  { prefix: "exp4", detailCount: 2, tags: ["Data Quality", "Terrain", "Supervision"] },
  { prefix: "exp5", detailCount: 2, tags: ["React", ".NET Core", "SQL Server", "Full Stack"] },
  { prefix: "exp6", detailCount: 2, tags: [".NET Core", "React", "SQL Server", "Agile"] },
  { prefix: "exp7", detailCount: 2, tags: ["Leadership", "Community", "Tech Events"] },
  { prefix: "exp8", detailCount: 2, tags: ["Communication", "Service Client"] }
];

let currentExpIndex = 0;
let autoScrollTimer = null;

function getTranslation(key) {
  // Access translations from i18n.js
  if (typeof translations !== 'undefined' && translations[key] && translations[key][currentLang]) {
    return translations[key][currentLang];
  }
  return key; // fallback
}

function renderExperience(index) {
  // Remove previous experience entries (keep the initial command logs)
  const entries = consoleBody.querySelectorAll('.console-exp-entry, .console-log.exp-log');
  entries.forEach(el => el.remove());

  const expKey = experienceKeys[index];
  const prefix = expKey.prefix;

  // Add command log
  const cmdLog = document.createElement('div');
  cmdLog.className = 'console-log exp-log';
  cmdLog.innerHTML = `<span class="console-prompt">user@guest ~ %</span> <span class="console-input-line">query experiences[${index}] --verbose</span>`;
  consoleBody.appendChild(cmdLog);

  // Add separator
  const separator = document.createElement('div');
  separator.className = 'console-log exp-log';
  separator.innerHTML = `<span class="console-response" style="color: var(--accent-emerald); opacity: 0.7;">─────────────────────────────────────</span>`;
  consoleBody.appendChild(separator);

  // Build details HTML from translations
  let detailsHTML = '';
  for (let i = 1; i <= expKey.detailCount; i++) {
    detailsHTML += `<div class="exp-detail">${getTranslation(prefix + '.d' + i)}</div>`;
  }
  let tagsHTML = expKey.tags.map(t => `<span class="console-exp-tag">${t}</span>`).join('');

  // Add experience entry
  const entry = document.createElement('div');
  entry.className = 'console-exp-entry';
  entry.innerHTML = `
    <div class="exp-role">${getTranslation(prefix + '.role')}</div>
    <div class="exp-company">@ ${getTranslation(prefix + '.company')}</div>
    <div class="exp-date">📅 ${getTranslation(prefix + '.date')}</div>
    ${detailsHTML}
    <div style="margin-top: 0.5rem;">${tagsHTML}</div>
  `;
  consoleBody.appendChild(entry);

  // Scroll to bottom
  consoleBody.scrollTop = consoleBody.scrollHeight;

  // Update counter and progress
  expCounter.textContent = `${index + 1} / ${experienceKeys.length}`;
  expProgressBar.style.width = `${((index + 1) / experienceKeys.length) * 100}%`;
}

function nextExperience() {
  currentExpIndex = (currentExpIndex + 1) % experienceKeys.length;
  renderExperience(currentExpIndex);
  resetAutoScroll();
}

function prevExperience() {
  currentExpIndex = (currentExpIndex - 1 + experienceKeys.length) % experienceKeys.length;
  renderExperience(currentExpIndex);
  resetAutoScroll();
}

function resetAutoScroll() {
  if (autoScrollTimer) clearInterval(autoScrollTimer);
  autoScrollTimer = setInterval(nextExperience, 6000);
}

// Event listeners
expNextBtn.addEventListener('click', nextExperience);
expPrevBtn.addEventListener('click', prevExperience);

// Language toggle click handler
const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', toggleLanguage);
}

// Initialize: render first experience after a short delay
setTimeout(() => {
  renderExperience(0);
  resetAutoScroll();
}, 1200);


// --- SCROLL REVEAL ANIMATIONS ---
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


// --- ACTIVE MENU NAVIGATION ON SCROLL ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});


// --- FORM SUBMIT SIMULATION ---
const contactForm = document.getElementById('portfolio-contact-form');
const submitBtn = document.getElementById('form-btn');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.textContent = getTranslation('form.sending');
    submitBtn.disabled = true;
    
    // Simulate API call to FastAPI backend
    setTimeout(() => {
      submitBtn.textContent = getTranslation('form.success');
      submitBtn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
      contactForm.reset();
      
      setTimeout(() => {
        submitBtn.textContent = getTranslation('form.reset');
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3000);
    }, 1500);
  });
}

// --- LIGHT / DARK THEME TOGGLE LOGIC ---
const themeToggleBtn = document.getElementById('theme-toggle');

// Helper to switch theme
function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Check saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
  document.body.classList.add('light-theme');
} else {
  document.body.classList.remove('light-theme');
}

// Toggle on click
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}
