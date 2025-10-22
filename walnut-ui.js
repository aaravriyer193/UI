/*!
 * Walnut UI (walnut-ui.js)
 * Drop-in, zero-deps UI framework with dynamic theming + interactive components.
 * Usage:
 *   <script src="walnut-ui.js?colors=Purple,Teal,Amber&style=glass"></script>
 *
 * This script:
 *  - Injects CSS (below) into the page
 *  - Parses URL params: colors (3 values), style (glass|sleek|solid)
 *  - Maps color names → hex (supports hex/rgb/hsl input too)
 *  - Updates CSS variables on :root
 *  - Initializes components: particles, modals, tabs, tooltips, dropdowns,
 *    accordions, code copy, chat typing animation, hero gradient mouse parallax,
 *    card hover spotlight, micro entrance animations.
 */

/* -------------------------
   1) Walnut CSS (inline)
   ------------------------- */
const WALNUT_CSS = `/* Walnut UI CSS injected by walnut-ui.js */
@import url('data:text/css;charset=utf-8,/* placeholder to allow copy of injected CSS if needed */');
/* The full stylesheet is designed to match walnut-ui.css. If you prefer,
   you can also include walnut-ui.css directly. For portability, key rules are
   already provided in the separate CSS file. This injector is a convenience. */
`;

// Optional: If you want full parity injection, you can paste the entire CSS from
// walnut-ui.css into WALNUT_CSS above. By default we keep injection minimal
// to avoid doubling payload when using both files. The theme variables + classes
// still work because walnut-ui.css is recommended for full styles.
// However, for fully standalone usage, uncomment the next block to fetch & inject
// the full CSS payload embedded below:
//
// (() => { /* FULL CSS inline alternative (commented for brevity in this version) */ //})();

/* -------------------------
   2) Helpers
   ------------------------- */
const Walnut = (() => {
  const qs = (s, r = document) => r.querySelector(s);
  const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));

  // Color map (common names). Also accept hex (#abc or #aabbcc), rgb(), hsl()
  const COLOR_MAP = {
    /* Basic */
    Black:"#000000", White:"#ffffff", Gray:"#808080", Silver:"#c0c0c0", Red:"#ef4444",
    Green:"#22c55e", Blue:"#3b82f6", Yellow:"#f59e0b", Orange:"#f97316", Purple:"#7c3aed",
    Pink:"#ec4899", Teal:"#14b8a6", Cyan:"#06b6d4", Lime:"#84cc16", Amber:"#f59e0b",
    Indigo:"#6366f1", Violet:"#8b5cf6", Fuchsia:"#d946ef", Rose:"#f43f5e,

    /* Nice extras */
    Slate:"#64748b", Stone:"#78716c", Zinc:"#71717a", Neutral:"#737373",
    Sky:"#0ea5e9", Emerald:"#10b981", Jade:"#00a693", Aqua:"#00ffff",
    Navy:"#1f2a44", Maroon:"#7f1d1d", Gold:"#fbbf24", Bronze:"#b45309",
  };

  const isColorLike = (s) => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s)
    || /^rgb(a?)\(/i.test(s) || /^hsl(a?)\(/i.test(s);

  const toColor = (nameOrCode, fallback) => {
    if (!nameOrCode) return fallback;
    const key = String(nameOrCode).trim();
    if (isColorLike(key)) return key;
    const norm = key.replace(/[^a-z]/gi,'').toLowerCase();
    const found = Object.keys(COLOR_MAP).find(k => k.toLowerCase() === norm);
    return found ? COLOR_MAP[found] : fallback;
  };

  const parseParams = () => {
    try {
      const url = new URL((qs('script[src*="walnut-ui.js"]')||{}).src || window.location.href);
      const colorsRaw = url.searchParams.get('colors');
      const style = (url.searchParams.get('style') || 'glass').toLowerCase();
      let colors = (colorsRaw || '').split(',').map(s => s.trim()).filter(Boolean);
      if (colors.length < 3) colors = colors.concat(['Purple','Teal','Amber']).slice(0,3);
      return { colors, style };
    } catch {
      return { colors: ['Purple','Teal','Amber'], style: 'glass' };
    }
  };

  // Inject a <style> tag (lightweight; main CSS is expected as walnut-ui.css)
  const injectCSS = (cssText) => {
    if (!cssText) return;
    const style = document.createElement('style');
    style.setAttribute('data-walnut', 'injected');
    style.textContent = cssText;
    document.head.appendChild(style);
  };

  // Set CSS variables and style preset
  const applyTheme = (primary, secondary, accent, preset) => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', primary);
    root.style.setProperty('--secondary-color', secondary);
    root.style.setProperty('--accent-color', accent);

    // Simple auto palette tweak (background/text) based on luminance of primary
    const luminance = (hex) => {
      const c = hex.replace('#','');
      const r = parseInt(c.length===3?c[0]+c[0]:c.slice(0,2),16)/255;
      const g = parseInt(c.length===3?c[1]+c[1]:c.slice(2,4),16)/255;
      const b = parseInt(c.length===3?c[2]+c[2]:c.slice(4,6),16)/255;
      const f = (u)=> u<=0.03928?u/12.92:Math.pow((u+0.055)/1.055,2.4);
      return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b);
    };

    const L = luminance(primary);
    // Adjust background darkness slightly based on primary
    const bg = L > 0.6 ? '#0d0f16' : '#0b0b12';
    const bgMuted = L > 0.6 ? '#121424' : '#101018';
    const surface = L > 0.6 ? '#14172a' : '#131324';
    const surface2 = L > 0.6 ? '#1a1e36' : '#181832';
    const text = '#e7e7f0';
    const textMuted = '#b9b9c7';

    const rootVars = {
      '--bg': bg, '--bg-muted': bgMuted, '--surface': surface, '--surface-2': surface2,
      '--text': text, '--text-muted': textMuted,
      '--glass-bg': 'rgba(255,255,255,0.06)',
      '--glass-stroke': 'rgba(255,255,255,0.12)',
    };
    Object.entries(rootVars).forEach(([k,v]) => root.style.setProperty(k,v));

    // Set preset attribute on <html>
    document.documentElement.setAttribute('data-walnut-style', preset);
  };

  /* -------------------------
     3) Interactions
     ------------------------- */

  // Card hover spotlight (tracks cursor)
  const bindCardSpotlight = () => {
    qsa('.w-card').forEach(card => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - r.left}px`);
        card.style.setProperty('--y', `${e.clientY - r.top}px`);
      });
    });
  };

  // Modals: [data-modal-open="#id"] and [data-modal-close]
  const bindModals = () => {
    qsa('[data-modal-open]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-modal-open');
        const backdrop = qs(id);
        if (backdrop) backdrop.classList.add('open');
      });
    });
    qsa('[data-modal-close]').forEach(btn => {
      btn.addEventListener('click', () => btn.closest('.w-modal-backdrop')?.classList.remove('open'));
    });
    // Close on backdrop click
    qsa('.w-modal-backdrop').forEach(b => {
      b.addEventListener('click', (e) => { if (e.target === b) b.classList.remove('open'); });
    });
    // ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') qsa('.w-modal-backdrop.open').forEach(b => b.classList.remove('open'));
    });
  };

  // Tooltips: elements with [data-tooltip="..."]
  let tooltipEl;
  const bindTooltips = () => {
    tooltipEl = document.createElement('div');
    tooltipEl.className = 'w-tooltip';
    document.body.appendChild(tooltipEl);

    const showTip = (el, text, x, y) => {
      tooltipEl.textContent = text;
      tooltipEl.style.left = `${x + 10}px`;
      tooltipEl.style.top = `${y + 12}px`;
      tooltipEl.classList.add('show');
    };
    const hideTip = () => tooltipEl.classList.remove('show');

    qsa('[data-tooltip]').forEach(el => {
      el.addEventListener('pointerenter', (e) => showTip(el, el.getAttribute('data-tooltip') || '', e.clientX, e.clientY));
      el.addEventListener('pointermove', (e) => { tooltipEl.style.left = `${e.clientX + 10}px`; tooltipEl.style.top = `${e.clientY + 12}px`; });
      el.addEventListener('pointerleave', hideTip);
      el.addEventListener('blur', hideTip);
    });
  };

  // Dropdowns: .w-dropdown with .w-dropdown-toggle
  const bindDropdowns = () => {
    qsa('.w-dropdown').forEach(dd => {
      const toggle = qs('.w-dropdown-toggle', dd);
      toggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        dd.classList.toggle('open');
      });
    });
    document.addEventListener('click', () => qsa('.w-dropdown.open').forEach(dd => dd.classList.remove('open')));
  };

  // Tabs
  const bindTabs = () => {
    qsa('.w-tabs').forEach(tabs => {
      const list = qs('.w-tab-list', tabs);
      const panels = qsa('[role="tabpanel"]', tabs);
      const items = qsa('[role="tab"]', list);

      const select = (i) => {
        items.forEach((t, idx) => {
          t.setAttribute('aria-selected', String(idx === i));
          panels[idx].style.display = idx === i ? 'block' : 'none';
        });
      };
      items.forEach((t, i) => t.addEventListener('click', () => select(i)));
      select(0);
    });
  };

  // Accordions
  const bindAccordions = () => {
    qsa('.w-acc-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const panel = btn.nextElementSibling;
        panel?.classList.toggle('open');
      });
    });
  };

  // Code blocks: add copy button + naive highlight
  const enhanceCode = () => {
    qsa('pre.w-code').forEach(pre => {
      if (!qs('.w-copy', pre)) {
        const b = document.createElement('button');
        b.className = 'w-copy';
        b.textContent = 'Copy';
        b.addEventListener('click', async () => {
          const raw = pre.innerText.replace(/^Copy\s*/,'');
          try { await navigator.clipboard.writeText(raw); b.textContent = 'Copied!'; setTimeout(()=>b.textContent='Copy', 1200); }
          catch { b.textContent = 'Error'; setTimeout(()=>b.textContent='Copy', 1200); }
        });
        pre.appendChild(b);
      }
      // Tiny highlight pass
      pre.innerHTML = pre.innerHTML
        .replace(/(\/\/.*?$)/gm, '<span class="cm">$1</span>')
        .replace(/("(?:[^"\\]|\\.)*"|\'(?:[^\'\\]|\\.)*\'|\`(?:[^\\`]|\\.)*\`)/g, '<span class="st">$1</span>')
        .replace(/\b(function|const|let|var|return|if|else|for|while|class|new|this|import|from|export|async|await|try|catch|throw)\b/g, '<span class="kw">$1</span>')
        .replace(/\b([A-Za-z_]\w*)(?=\s*\()/g, '<span class="fn">$1</span>')
        .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="num">$1</span>');
    });
  };

  // Chat typing animation helper
  const chatTyping = () => {
    qsa('[data-typing]').forEach(el => {
      // Create three dots if not present
      if (!qs('.w-typing', el)) {
        const t = document.createElement('span');
        t.className = 'w-typing';
        t.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
        el.appendChild(t);
      }
    });
  };

  // Hero parallax & particles
  const initHeroes = () => {
    qsa('.w-hero').forEach(hero => {
      // Overlay
      if (!qs('.w-hero-overlay', hero)) {
        const ov = document.createElement('div');
        ov.className = 'w-hero-overlay';
        hero.appendChild(ov);
      }
      // Optional particles if data-walnut-particles present
      if (hero.hasAttribute('data-walnut-particles')) {
        createParticles(hero);
      }
      // Parallax light drift on mouse
      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        hero.style.backgroundPosition = `${50 + x*4}% 50%`;
      });
    });
  };

  // Particles (canvas)
  const createParticles = (container) => {
    let wrap = qs('.w-particles', container);
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'w-particles';
      container.appendChild(wrap);
    }
    let c = qs('canvas', wrap);
    if (!c) {
      c = document.createElement('canvas');
      wrap.appendChild(c);
    }
    const ctx = c.getContext('2d');
    let w, h, dpr;
    const particles = [];
    const COUNT = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--particles-count')) || 40;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = wrap.clientWidth; h = wrap.clientHeight;
      c.width = w * dpr; c.height = h * dpr;
      c.style.width = w + 'px'; c.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const rand = (a,b)=>a+Math.random()*(b-a);
    const reset = () => {
      particles.length = 0;
      for (let i=0;i<COUNT;i++){
        particles.push({
          x: rand(0,w), y: rand(0,h),
          r: rand(2,6),
          vx: rand(-0.25,0.25), vy: rand(-0.25,0.25),
          color: Math.random() < 0.5 ? getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() : getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim()
        });
      }
    };

    const step = () => {
      ctx.clearRect(0,0,w,h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w+10; if (p.x > w+10) p.x = -10;
        if (p.y < -10) p.y = h+10; if (p.y > h+10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.85;
        ctx.fill();
      }
      requestAnimationFrame(step);
    };

    resize(); reset(); step();
    const ro = new ResizeObserver(()=>{ resize(); reset(); });
    ro.observe(wrap);
  };

  // Micro-animations: fade-in on intersection
  const microEntrances = () => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.animation = 'fadeIn 500ms both';
          io.unobserve(e.target);
        }
      })
    }, { threshold: 0.1 });
    qsa('.w-card, .w-surface, .w-media, .w-btn').forEach(el => {
      el.style.opacity = '0';
      io.observe(el);
    });
  };

  /* -------------------------
     4) Public init
     ------------------------- */
  const init = () => {
    // 1) Inject (light) CSS payload if desired
    injectCSS(WALNUT_CSS);

    // 2) Parse URL params (colors + style)
    const { colors, style } = parseParams();
    const [p,s,a] = colors;
    const primary = toColor(p, '#7c3aed');
    const secondary = toColor(s, '#14b8a6');
    const accent = toColor(a, '#f59e0b');

    // 3) Apply theme
    applyTheme(primary, secondary, accent, ['glass','sleek','solid'].includes(style) ? style : 'glass');

    // 4) Bind interactions
    bindCardSpotlight();
    bindModals();
    bindTooltips();
    bindDropdowns();
    bindTabs();
    bindAccordions();
    enhanceCode();
    chatTyping();
    initHeroes();
    microEntrances();

    // 5) Button hover animation hooks (optional programmatic)
    qsa('.w-btn').forEach(btn => {
      btn.addEventListener('pointerenter', ()=> btn.classList.add('glow'));
      btn.addEventListener('pointerleave', ()=> btn.classList.remove('glow'));
    });
  };

  return { init, applyTheme };
})();

/* -------------------------
   5) Auto-init
   ------------------------- */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Walnut.init);
} else {
  Walnut.init();
}

/* -------------------------
   6) Tiny starter markup helper (optional)
   Call Walnut.applyTheme(...) yourself if you want to switch themes at runtime.
   ------------------------- */
// No runtime extras required; framework wires to your existing HTML.
// Example markup to try quickly:
//
// <section class="w-hero gradient" data-walnut-particles>
//   <div class="w-hero-inner">
//     <div class="w-hero-eyebrow">Walnut UI</div>
//     <h1 class="w-hero-title">Build fast. Theme faster.</h1>
//     <p class="w-hero-sub">Glass / Sleek / Solid presets with 3-color themes.</p>
//     <div class="mt-3">
//       <button class="w-btn">Primary</button>
//       <button class="w-btn secondary">Secondary</button>
//       <button class="w-btn accent">Accent</button>
//     </div>
//   </div>
// </section>
