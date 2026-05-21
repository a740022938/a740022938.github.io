// Main JavaScript - Final Premium AI Edition
document.addEventListener("DOMContentLoaded", () => {
  const context = {
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    isMobile: window.matchMedia("(max-width: 768px)").matches,
  };

  const i18n = window.SiteI18n || null;
  if (i18n && typeof i18n.init === "function") {
    i18n.init();
  }

  initLanguageSwitcher(i18n);
  initSmoothScrolling();
  initContactForm(i18n);
  initRevealAnimations(context);
  initNavbarOnScroll();
  initThemeToggle(i18n);
  initFooterYear();
  initScrollSpy();
  initWeChatModal(i18n);
  initPointerAmbient(context);
  initParticleNetwork(context);

  console.log("%cAI factory interface online.", "color:#7ff5ff;font-weight:700;");
});

function t(i18n, key, fallback) {
  if (!i18n || typeof i18n.t !== "function") return fallback;
  const value = i18n.t(key);
  return value && value !== key ? value : fallback;
}

function initLanguageSwitcher(i18n) {
  if (!i18n || typeof i18n.applyLanguage !== "function") return;

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      i18n.applyLanguage(button.dataset.lang || "zh");
    });
  });
}

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;

      window.scrollTo({
        top: target.offsetTop - 82,
        behavior: "smooth",
      });
    });
  });
}

function initContactForm(i18n) {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    if (!data.name || !data.email || !data.message) {
      alert(t(i18n, "alerts.required", "Please fill in all required fields."));
      return;
    }

    alert(t(i18n, "alerts.success", "Instruction received. I will get back to you soon."));
    form.reset();
  });
}

function initRevealAnimations({ reducedMotion }) {
  const targets = document.querySelectorAll(
    ".showcase-main, .about-content, .project-card, .contact-form"
  );

  if (reducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((node) => {
      node.style.opacity = '1';
      node.style.transform = 'translateY(0)';
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, self) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
        self.unobserve(node);
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -50px 0px' }
  );

  targets.forEach((node, index) => {
    node.style.opacity = '0';
    node.style.transform = 'translateY(22px)';
    node.style.transition = `opacity 560ms ease ${index * 55}ms, transform 560ms ease ${index * 55}ms`;
    observer.observe(node);
  });
}

function initNavbarOnScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const apply = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 28);
  };

  window.addEventListener('scroll', apply, { passive: true });
  apply();
}

function initThemeToggle(i18n) {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  const THEME_KEY = 'theme-preference';

  const updateLabel = () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const text = isLight
      ? t(i18n, 'nav.theme_to_dark', 'Dark UI')
      : t(i18n, 'nav.theme_to_light', 'Light UI');
    const aria = isLight
      ? t(i18n, 'nav.theme_to_dark_aria', 'Switch to dark interface')
      : t(i18n, 'nav.theme_to_light_aria', 'Switch to light interface');

    toggle.textContent = text;
    toggle.setAttribute('aria-label', aria);
  };

  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem(THEME_KEY, 'dark');
  }

  updateLabel();

  toggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem(THEME_KEY, 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem(THEME_KEY, 'light');
    }

    updateLabel();
    window.dispatchEvent(new Event('themechange'));
  });

  document.addEventListener('languagechange', updateLabel);
}

function initFooterYear() {
  const yearNode = document.getElementById('currentYear');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
}

function initScrollSpy() {
  const links = Array.from(document.querySelectorAll('.nav-links a[data-nav-target]'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  const sectionById = new Map();
  links.forEach((link) => {
    const id = link.dataset.navTarget;
    const section = document.getElementById(id);
    if (section) sectionById.set(section, link);
  });

  const activate = (activeLink) => {
    links.forEach((link) => {
      link.classList.toggle('is-active', link === activeLink);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) return;
      const link = sectionById.get(visible[0].target);
      if (link) activate(link);
    },
    { rootMargin: '-35% 0px -45% 0px', threshold: [0.2, 0.35, 0.5, 0.75] }
  );

  sectionById.forEach((_, section) => observer.observe(section));
}

function initWeChatModal(i18n) {
  const trigger = document.getElementById('wechatTrigger');
  const modal = document.getElementById('wechatModal');
  const closeButton = document.getElementById('wechatModalClose');
  const qrImage = document.getElementById('wechatQrImage');
  const qrFallback = document.getElementById('wechatQrFallback');

  if (!trigger || !modal || !closeButton) return;

  let lastFocusedElement = null;
  const open = () => {
    if (qrImage && !qrImage.getAttribute('src')) {
      const targetSrc = qrImage.dataset.qrSrc || '';
      if (targetSrc) {
        qrImage.setAttribute('src', targetSrc);
      }
    }

    if (qrImage) {
      qrImage.addEventListener('contextmenu', (event) => event.preventDefault(), { once: true });
      qrImage.addEventListener('dragstart', (event) => event.preventDefault(), { once: true });
      qrImage.onerror = () => {
        qrImage.style.display = 'none';
        if (qrFallback) {
          qrFallback.hidden = false;
          qrFallback.textContent = t(i18n, 'wechat.image_missing', 'Please place your QR image at assets/images/wechat_qr.png');
        }
      };
    }

    lastFocusedElement = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    closeButton.focus();
  };

  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  };

  trigger.addEventListener('click', open);

  modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.hasAttribute('data-wechat-close')) {
      close();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      close();
    }
  });

}

function initPointerAmbient({ reducedMotion, isMobile }) {
  if (reducedMotion || isMobile) return;

  let frame = 0;
  const update = (x, y) => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const px = (x / window.innerWidth) * 100;
      const py = (y / window.innerHeight) * 100;
      document.body.style.setProperty('--pointer-x', `${px.toFixed(2)}%`);
      document.body.style.setProperty('--pointer-y', `${py.toFixed(2)}%`);
      frame = 0;
    });
  };

  window.addEventListener(
    'pointermove',
    (event) => {
      update(event.clientX, event.clientY);
    },
    { passive: true }
  );
}

function initParticleNetwork({ reducedMotion, isMobile }) {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const pointer = { x: -9999, y: -9999, active: false };
  const particleCount = reducedMotion ? 14 : isMobile ? 30 : 72;
  const maxLinkDistance = isMobile ? 92 : 142;
  const pointerRadius = isMobile ? 92 : 142;
  const streamCount = reducedMotion ? 1 : isMobile ? 2 : 3;

  let width = 0;
  let height = 0;
  let ratio = 1;
  let animationFrame = 0;
  let particles = [];
  let streams = [];
  let isRunning = false;

  const randomBetween = (min, max) => Math.random() * (max - min) + min;

  const hexToRgb = (hex) => {
    const value = hex.replace('#', '').trim();
    if (![3, 6].includes(value.length)) return null;
    const full = value.length === 3 ? value.split('').map((part) => part + part).join('') : value;
    const int = parseInt(full, 16);
    if (Number.isNaN(int)) return null;
    return {
      r: (int >> 16) & 255,
      g: (int >> 8) & 255,
      b: int & 255,
    };
  };

  const colorToRgba = (rgb, alpha, fallback) => {
    if (!rgb) return fallback;
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  };

  const getColors = () => {
    const styles = getComputedStyle(document.documentElement);
    const dotHex = (styles.getPropertyValue('--color-accent-soft') || '#7ff5ff').trim();
    const lineHex = (styles.getPropertyValue('--color-primary') || '#49d9ff').trim();
    const glowHex = (styles.getPropertyValue('--color-accent') || '#b86bff').trim();

    const dotRgb = hexToRgb(dotHex) || { r: 127, g: 245, b: 255 };
    const lineRgb = hexToRgb(lineHex) || { r: 73, g: 217, b: 255 };
    const glowRgb = hexToRgb(glowHex) || { r: 184, g: 107, b: 255 };

    return {
      dotRgb,
      lineRgb,
      glowRgb,
      dotSoft: colorToRgba(dotRgb, 0.75, 'rgba(127, 245, 255, 0.75)'),
      glowSoft: colorToRgba(glowRgb, 0.22, 'rgba(184, 107, 255, 0.22)'),
      streamA: colorToRgba(lineRgb, reducedMotion ? 0.08 : 0.16, 'rgba(73, 217, 255, 0.16)'),
      streamB: colorToRgba(glowRgb, reducedMotion ? 0.06 : 0.13, 'rgba(184, 107, 255, 0.13)'),
    };
  };

  let colors = getColors();

  const createParticle = () => ({
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    vx: randomBetween(-0.24, 0.24),
    vy: randomBetween(-0.24, 0.24),
    r: randomBetween(0.7, 1.85),
  });

  const createStreams = () =>
    Array.from({ length: streamCount }, (_, index) => ({
      baseY: height * randomBetween(0.18, 0.82),
      amplitude: randomBetween(18, 52) * (isMobile ? 0.75 : 1),
      speed: randomBetween(0.0025, 0.0055),
      phase: randomBetween(0, Math.PI * 2),
      curve: randomBetween(0.0025, 0.0055),
      width: randomBetween(1.2, 2.1),
      tint: index % 2 === 0 ? 'streamA' : 'streamB',
    }));

  const resize = () => {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    particles = Array.from({ length: particleCount }, createParticle);
    streams = createStreams();
  };

  const updateParticle = (particle) => {
    if (!reducedMotion && pointer.active) {
      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const distance = Math.hypot(dx, dy);

      if (distance < pointerRadius && distance > 1) {
        const force = (pointerRadius - distance) / pointerRadius;
        particle.vx -= (dx / distance) * force * 0.011;
        particle.vy -= (dy / distance) * force * 0.011;
      }
    }

    particle.x += particle.vx;
    particle.y += particle.vy;

    particle.vx *= 0.992;
    particle.vy *= 0.992;

    if (particle.x < -12) particle.x = width + 12;
    if (particle.x > width + 12) particle.x = -12;
    if (particle.y < -12) particle.y = height + 12;
    if (particle.y > height + 12) particle.y = -12;
  };

  const drawStreams = () => {
    streams.forEach((stream) => {
      stream.phase += stream.speed;

      const gradient = ctx.createLinearGradient(0, stream.baseY - stream.amplitude, width, stream.baseY + stream.amplitude);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(0.28, colors[stream.tint]);
      gradient.addColorStop(0.72, colors[stream.tint]);
      gradient.addColorStop(1, 'transparent');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = stream.width;
      ctx.beginPath();

      let isFirst = true;
      for (let x = -20; x <= width + 20; x += 24) {
        const y =
          stream.baseY +
          Math.sin(x * stream.curve + stream.phase) * stream.amplitude +
          Math.cos(x * stream.curve * 0.6 + stream.phase * 1.2) * stream.amplitude * 0.35;

        if (isFirst) {
          ctx.moveTo(x, y);
          isFirst = false;
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    });
  };

  const drawParticles = () => {
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      updateParticle(p1);

      ctx.beginPath();
      ctx.fillStyle = colors.dotSoft;
      ctx.arc(p1.x, p1.y, p1.r, 0, Math.PI * 2);
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.hypot(dx, dy);
        if (distance > maxLinkDistance) continue;

        const alpha = (1 - distance / maxLinkDistance) * (reducedMotion ? 0.18 : 0.34);
        ctx.strokeStyle = colorToRgba(colors.lineRgb, alpha.toFixed(3), 'rgba(73, 217, 255, 0.34)');
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  };

  const drawPointerGlow = () => {
    if (reducedMotion || !pointer.active) return;

    const gradient = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, pointerRadius);
    gradient.addColorStop(0, colors.glowSoft);
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(pointer.x, pointer.y, pointerRadius, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawFrame = () => {
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'lighter';

    drawStreams();
    drawParticles();
    drawPointerGlow();

    ctx.globalCompositeOperation = 'source-over';
    animationFrame = requestAnimationFrame(drawFrame);
  };

  const start = () => {
    if (isRunning) return;
    isRunning = true;
    drawFrame();
  };

  const stop = () => {
    if (!isRunning) return;
    isRunning = false;
    cancelAnimationFrame(animationFrame);
  };

  window.addEventListener('mousemove', (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });

  window.addEventListener('mouseleave', () => {
    pointer.active = false;
  });

  window.addEventListener('resize', resize);

  window.addEventListener('themechange', () => {
    colors = getColors();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stop();
      return;
    }
    start();
  });

  resize();
  start();
}
