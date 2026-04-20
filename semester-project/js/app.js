// ── Shared utilities and progress management ──

// Escape HTML so tags render as text
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// SVG icon paths (subset of lucide icons used)
const icons = {
  code2: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
  bookOpen: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
  barChart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M13 17V9"/><path d="M18 17V5"/><path d="M8 17v-3"/></svg>',
  zap: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  clock: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>',
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  chevronUp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
  eye: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>',
  terminal: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>',
  cpu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
  trophy: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  refreshCw: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>',
};

function icon(name, cssClass) {
  const svg = icons[name] || '';
  if (!cssClass) return svg;
  return svg.replace('<svg ', `<svg class="${cssClass}" `);
}

// ── Progress (localStorage) ──
function getUserProgress() {
  const stored = localStorage.getItem('bp-progress');
  if (stored) return JSON.parse(stored);
  return { completedExercises: [], totalXp: 0, streakDays: 0 };
}

function saveUserProgress(progress) {
  localStorage.setItem('bp-progress', JSON.stringify(progress));
}

function completeExercise(exerciseId) {
  const progress = getUserProgress();
  if (!progress.completedExercises.includes(exerciseId)) {
    const exercise = exercises.find(e => e.id === exerciseId);
    progress.completedExercises.push(exerciseId);
    progress.totalXp += exercise ? exercise.xp : 0;
    saveUserProgress(progress);
  }
  return getUserProgress();
}

// ── Recommendation Engine ──
function getRecommendations(completedIds) {
  if (completedIds.length === 0) {
    return exercises.filter(e => e.difficulty === 'beginner').slice(0, 3);
  }

  const completed = exercises.filter(e => completedIds.includes(e.id));
  const remaining = exercises.filter(e => !completedIds.includes(e.id));
  if (remaining.length === 0) return [];

  const tagFrequency = {};
  completed.forEach(e => {
    e.tags.forEach(tag => {
      tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
    });
  });

  const maxDiff = completed.some(e => e.difficulty === 'advanced') ? 3
    : completed.some(e => e.difficulty === 'intermediate') ? 2 : 1;

  const scored = remaining.map(exercise => {
    let score = 0;
    exercise.tags.forEach(tag => { score += tagFrequency[tag] || 0; });
    const diffLevel = exercise.difficulty === 'advanced' ? 3 : exercise.difficulty === 'intermediate' ? 2 : 1;
    if (diffLevel === maxDiff || diffLevel === maxDiff + 1) score += 3;
    const completedCategories = new Set(completed.map(c => c.category));
    if (!completedCategories.has(exercise.category)) score += 1;
    return { exercise, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3).map(s => s.exercise);
}

// ── Render Navbar ──
function renderNavbar(activePage) {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const links = [
    { href: 'index.html', label: 'Home', icon: 'code2', id: 'home' },
    { href: 'exercises.html', label: 'Exercises', icon: 'bookOpen', id: 'exercises' },
    { href: 'recommendations.html', label: 'AI Recommend', icon: 'sparkles', id: 'recommendations' },
    { href: 'progress.html', label: 'Progress', icon: 'barChart', id: 'progress' },
  ];

  nav.innerHTML = `
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;padding-top:0.75rem;padding-bottom:0.75rem;">
      <a href="index.html" class="navbar-brand">
        ${icon('code2', 'icon-lg')}
        <span class="brand-text">BrowserDev</span>
        <span class="suffix">.bootcamp</span>
      </a>
      <div class="navbar-links">
        ${links.map(l => `
          <a href="${l.href}" class="${activePage === l.id ? 'active' : ''}">
            ${icon(l.icon, 'icon')}
            <span class="label">${l.label}</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

// ── Exercise Card HTML ──
function exerciseCardHTML(exercise, isCompleted) {
  const diffClass = `difficulty-${exercise.difficulty}`;
  return `
    <a href="exercise.html?id=${exercise.id}" class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;">
        <span class="badge">${exercise.category}</span>
        ${isCompleted ? `<span class="text-accent">${icon('checkCircle', 'icon')}</span>` : ''}
      </div>
      <h3 style="margin-bottom:0.5rem;font-size:1.125rem;font-weight:600;color:var(--card-foreground);">${exercise.title}</h3>
      <p class="line-clamp-2" style="margin-bottom:1rem;font-size:0.875rem;color:var(--muted-foreground);">${escapeHtml(exercise.description)}</p>
      <div style="display:flex;align-items:center;gap:1rem;font-size:0.75rem;color:var(--muted-foreground);">
        <span class="${diffClass}" style="display:flex;align-items:center;gap:0.25rem;">
          ${icon('clock', 'icon-sm')} ${exercise.difficulty}
        </span>
        <span style="display:flex;align-items:center;gap:0.25rem;">
          <span class="text-primary">${icon('zap', 'icon-sm')}</span> ${exercise.xp} XP
        </span>
      </div>
    </a>
  `;
}
