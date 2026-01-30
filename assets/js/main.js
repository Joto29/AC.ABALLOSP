// ========== Utilidades ==========
function getBasePath() {
  // Si estás en /pages/ => sube un nivel. Si estás en raíz => queda igual.
  return window.location.pathname.includes("/pages/") ? ".." : ".";
}

function setBrandLogo() {
  const logo = document.querySelector(".brand-logo");
  if (!logo) return;

  const base = getBasePath();
  logo.src = `${base}/assets/img/brand/B96D004D-B28A-4A8D-B88E-5077FE04EF08_1_105_c.jpeg`;
}


function resolveNavLinks() {
  const base = getBasePath();

  const map = {
    home: `${base}/index.html`,
    about: `${base}/pages/about.html`,
    programs: `${base}/pages/programs.html`,
    founders: `${base}/pages/founders.html`,
    contact: `${base}/pages/contact.html`,
    faq: `${base}/pages/faq.html`,
  };

  document.querySelectorAll("[data-link]").forEach((a) => {
    const key = a.getAttribute("data-link");
    if (map[key]) a.setAttribute("href", map[key]);
  });
}

function setActiveNav() {
  const path = window.location.pathname;

  const current =
    path.endsWith("/index.html") || path.endsWith("/") ? "home" :
    path.includes("/pages/about.html") ? "about" :
    path.includes("/pages/programs.html") ? "programs" :
    path.includes("/pages/founders.html") ? "founders" :
    path.includes("/pages/contact.html") ? "contact" :
    path.includes("/pages/faq.html") ? "faq" :
    null;

  if (!current) return;

  document.querySelectorAll(".site-nav a[data-link]").forEach((a) => {
    if (a.getAttribute("data-link") === current) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });
}

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });
}

function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ========== Cargar componentes ==========
async function loadComponent(targetId, componentPath) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const base = getBasePath();
  const url = `${base}/${componentPath}`;

  const res = await fetch(url);
  const html = await res.text();
  target.innerHTML = html;
}

async function init() {
  // Cargar header y footer si existen placeholders
  await loadComponent("site-header", "components/header.html");
  await loadComponent("site-footer", "components/footer.html");

  // Después de inyectar, configura links y comportamiento
  resolveNavLinks();
  setActiveNav();
  setupMobileNav();
  setYear();
  setBrandLogo();
}

init();
