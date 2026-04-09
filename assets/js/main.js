// Main JavaScript - AI Tech Version
document.addEventListener("DOMContentLoaded", () => {
  initSmoothScrolling();
  initContactForm();
  initRevealAnimations();
  initNavbarOnScroll();
  initThemeToggle();
  initFooterYear();
  initParticleNetwork();
  console.log("%cAI portfolio system online.", "color:#69d8ff;font-weight:bold;");
});

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      window.scrollTo({
        top: targetElement.offsetTop - 76,
        behavior: "smooth",
      });
    });
  });
}

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    if (!data.name || !data.email || !data.message) {
      alert("Please fill in all required fields.");
      return;
    }
    alert("Message queued. Thanks for reaching out.");
    contactForm.reset();
  });
}

function initRevealAnimations() {
  const targets = document.querySelectorAll(".project-card, .agi-highlight, .contact-form");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => {
      target.style.opacity = "1";
      target.style.transform = "translateY(0)";
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, self) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        node.style.opacity = "1";
        node.style.transform = "translateY(0)";
        self.unobserve(node);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((target, index) => {
    target.style.opacity = "0";
    target.style.transform = "translateY(22px)";
    target.style.transition = `opacity 520ms ease ${index * 50}ms, transform 520ms ease ${index * 50}ms`;
    observer.observe(target);
  });
}

function initNavbarOnScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const applyNavbarState = () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (window.scrollY > 40) {
      navbar.style.backgroundColor = isLight ? "rgba(255, 255, 255, 0.93)" : "rgba(5, 10, 21, 0.9)";
      navbar.style.boxShadow = isLight
        ? "0 12px 28px -18px rgba(15,23,42,0.35)"
        : "0 18px 34px -22px rgba(6,14,32,0.95)";
    } else {
      navbar.style.backgroundColor = isLight ? "rgba(255, 255, 255, 0.82)" : "rgba(6, 10, 20, 0.72)";
      navbar.style.boxShadow = "none";
    }
  };

  window.addEventListener("scroll", applyNavbarState, { passive: true });
  window.addEventListener("themechange", applyNavbarState);
  applyNavbarState();
}

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  const updateButtonIcon = () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    themeToggle.textContent = isLight ? "🌙" : "☀️";
    themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  updateButtonIcon();

  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    updateButtonIcon();
    window.dispatchEvent(new Event("themechange"));
  });
}

function initFooterYear() {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) yearElement.textContent = String(new Date().getFullYear());
}

function initParticleNetwork() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;

  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const particleCount = reducedMotion ? 18 : isMobile ? 34 : 64;
  const maxLinkDistance = isMobile ? 92 : 128;
  const pointerRadius = isMobile ? 88 : 132;
  const pointer = { x: -9999, y: -9999, active: false };
  let particles = [];
  let animationFrame = 0;
  let width = 0;
  let height = 0;
  let ratio = 1;

  const getThemeColors = () => {
    const style = getComputedStyle(document.documentElement);
    return {
      dot: (style.getPropertyValue("--color-accent-soft") || "#7af2ff").trim(),
      line: (style.getPropertyValue("--color-primary") || "#39c7ff").trim(),
      glow: (style.getPropertyValue("--color-accent") || "#bb6cff").trim(),
    };
  };

  let colors = getThemeColors();

  const randomBetween = (min, max) => Math.random() * (max - min) + min;

  const createParticle = () => ({
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    vx: randomBetween(-0.22, 0.22),
    vy: randomBetween(-0.22, 0.22),
    r: randomBetween(0.7, 1.8),
  });

  const resize = () => {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles = Array.from({ length: particleCount }, createParticle);
  };

  const updateParticle = (particle) => {
    if (!reducedMotion && pointer.active) {
      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const distance = Math.hypot(dx, dy);
      if (distance < pointerRadius && distance > 1) {
        const force = (pointerRadius - distance) / pointerRadius;
        particle.vx -= (dx / distance) * force * 0.012;
        particle.vy -= (dy / distance) * force * 0.012;
      }
    }

    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vx *= 0.992;
    particle.vy *= 0.992;

    if (particle.x < -10) particle.x = width + 10;
    if (particle.x > width + 10) particle.x = -10;
    if (particle.y < -10) particle.y = height + 10;
    if (particle.y > height + 10) particle.y = -10;
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);
    context.globalCompositeOperation = "lighter";

    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      updateParticle(p1);

      context.beginPath();
      context.fillStyle = `${colors.dot}cc`;
      context.arc(p1.x, p1.y, p1.r, 0, Math.PI * 2);
      context.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.hypot(dx, dy);
        if (dist > maxLinkDistance) continue;

        const alpha = (1 - dist / maxLinkDistance) * (reducedMotion ? 0.18 : 0.32);
        context.strokeStyle = `rgba(105, 216, 255, ${alpha})`;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(p1.x, p1.y);
        context.lineTo(p2.x, p2.y);
        context.stroke();
      }
    }

    if (!reducedMotion && pointer.active) {
      const gradient = context.createRadialGradient(pointer.x, pointer.y, 4, pointer.x, pointer.y, pointerRadius);
      gradient.addColorStop(0, `${colors.glow}33`);
      gradient.addColorStop(1, "transparent");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(pointer.x, pointer.y, pointerRadius, 0, Math.PI * 2);
      context.fill();
    }

    context.globalCompositeOperation = "source-over";
    animationFrame = requestAnimationFrame(draw);
  };

  window.addEventListener("mousemove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });

  window.addEventListener("mouseleave", () => {
    pointer.active = false;
  });

  window.addEventListener("resize", resize);
  window.addEventListener("themechange", () => {
    colors = getThemeColors();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrame);
      return;
    }
    draw();
  });

  resize();
  draw();
}
