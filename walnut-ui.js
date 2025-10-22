/*!
 * Walnut UI (clean version)
 * Drop-in, zero-dependency UI framework with dynamic theming + interactivity.
 * Usage:
 *   <script src="walnut-ui.js?colors=Purple,Teal,Amber&style=glass"></script>
 */

(() => {
  /* -------------------------------------------------------------
     1. Base CSS — minimal injection to ensure styles always exist
     ------------------------------------------------------------- */
  const WALNUT_BASE_CSS = `
    :root {
      --primary-color: #7c3aed;
      --secondary-color: #14b8a6;
      --accent-color: #f59e0b;
      --bg: #0b0b12;
      --text: #e7e7f0;
      --text-muted: #b9b9c7;
      --border: rgba(255,255,255,0.1);
    }
    body {
      margin:0;
      background:var(--bg);
      color:var(--text);
      font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
      line-height:1.6;
    }
    .w-btn {
      background:var(--primary-color);
      color:#fff;
      border:none;
      border-radius:8px;
      padding:0.7rem 1.2rem;
      cursor:pointer;
      transition:all 0.25s ease;
      box-shadow:0 4px 16px rgba(0,0,0,0.2);
    }
    .w-btn.secondary { background:var(--secondary-color); }
    .w-btn.accent { background:var(--accent-color); }
    .w-btn:hover { transform:translateY(-2px); opacity:.9; }
    .w-hero {
      text-align:center;
      padding:5rem 1rem;
      background:linear-gradient(180deg,rgba(255,255,255,0.04),transparent 70%);
    }
    .w-hero-title { font-size:clamp(2rem,3vw,3rem); margin-bottom:0.5rem; }
    .w-hero-sub { opacity:0.8; font-size:1.1rem; }
    .w-card {
      background:rgba(255,255,255,0.05);
      border:1px solid var(--border);
      border-radius:12px;
      padding:1rem;
      transition:all 0.3s ease;
    }
    .w-card:hover { transform:translateY(-4px); box-shadow:0 8px 20px rgba(0,0,0,0.3); }
    .w-container { max-width:1000px; margin:auto; padding:2rem 1rem; }
    h2 { border-bottom:1px solid var(--border); padding-bottom:0.5rem; }
  `;

  const injectCSS = (css) => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  };

  /* -------------------------------------------------------------
     2. Color logic and theming
     ------------------------------------------------------------- */
  const COLOR_MAP = {
    Black: "#000000", White: "#ffffff", Red: "#ef4444", Green: "#22c55e",
    Blue: "#3b82f6", Yellow: "#f59e0b", Orange: "#f97316", Purple: "#7c3aed",
    Pink: "#ec4899", Teal: "#14b8a6", Cyan: "#06b6d4", Lime: "#84cc16",
    Amber: "#f59e0b", Indigo: "#6366f1", Violet: "#8b5cf6", Gold: "#fbbf24"
  };

  const parseParams = () => {
    const script = document.currentScript || [...document.scripts].find(s => s.src.includes("walnut-ui.js"));
    if (!script) return { colors: ["Purple", "Teal", "Amber"], style: "glass" };
    const url = new URL(script.src);
    const colorsRaw = url.searchParams.get("colors");
    const style = (url.searchParams.get("style") || "glass").toLowerCase();
    let colors = (colorsRaw || "").split(",").map(c => c.trim()).filter(Boolean);
    if (colors.length < 3) colors = colors.concat(["Purple","Teal","Amber"]).slice(0,3);
    return { colors, style };
  };

  const toHex = (c, fallback) => COLOR_MAP[c] || c || fallback;

  const applyTheme = (p, s, a, style) => {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", toHex(p, "#7c3aed"));
    root.style.setProperty("--secondary-color", toHex(s, "#14b8a6"));
    root.style.setProperty("--accent-color", toHex(a, "#f59e0b"));
    document.documentElement.setAttribute("data-walnut-style", style);
  };

  /* -------------------------------------------------------------
     3. UI interactivity (minimal but functional)
     ------------------------------------------------------------- */
  const bindModals = () => {
    document.querySelectorAll("[data-modal-open]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-modal-open");
        const m = document.querySelector(id);
        if (m) m.classList.add("open");
      });
    });
    document.querySelectorAll("[data-modal-close]").forEach(btn => {
      btn.addEventListener("click", () => btn.closest(".w-modal-backdrop")?.classList.remove("open"));
    });
  };

  const initParticles = () => {
    document.querySelectorAll("[data-walnut-particles]").forEach(hero => {
      const canvas = document.createElement("canvas");
      canvas.style.position = "absolute";
      canvas.style.inset = "0";
      canvas.style.zIndex = "0";
      hero.prepend(canvas);
      const ctx = canvas.getContext("2d");
      const resize = () => {
        canvas.width = hero.clientWidth;
        canvas.height = hero.clientHeight;
      };
      const rand = (a,b)=>a+Math.random()*(b-a);
      let particles = [];
      const reset = ()=>{ particles=[]; for(let i=0;i<30;i++)particles.push({
        x:rand(0,canvas.width), y:rand(0,canvas.height),
        r:rand(2,6), vx:rand(-0.3,0.3), vy:rand(-0.3,0.3),
        c: Math.random()>.5?"var(--primary-color)":"var(--secondary-color)"
      });};
      const draw = ()=>{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particles.forEach(p=>{
          ctx.beginPath();
          ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
          ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue(p.c);
          ctx.globalAlpha=0.7;
          ctx.fill();
          p.x+=p.vx; p.y+=p.vy;
          if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0;
          if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0;
        });
        requestAnimationFrame(draw);
      };
      resize(); reset(); draw();
      new ResizeObserver(()=>{resize();reset();}).observe(hero);
    });
  };

  /* -------------------------------------------------------------
     4. Init
     ------------------------------------------------------------- */
  const init = () => {
    injectCSS(WALNUT_BASE_CSS);
    const { colors, style } = parseParams();
    applyTheme(colors[0], colors[1], colors[2], style);
    bindModals();
    initParticles();
    console.log("✅ Walnut UI initialized with:", colors, style);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
