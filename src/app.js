/* ============================================================
   CONFIG — datos centralizados
   ============================================================ */
const CONFIG = {
  business: "Âme Beauty Lounge",
  whatsapp: "56956100642",
  agendapro: "https://ameblounge.site.agendapro.com/cl/sucursal/25770",
  bookingInline: true,   // false = los botones "Reservar" abren AgendaPro en pestaña nueva
  reviews:   "https://link.agendapro.com/cl/ameblounge/49b17017/reviews/81e643b9-484a-4381-9655-ee2e82c45046",
  instagram: "https://www.instagram.com/",   // TODO: reemplazar por el perfil real (p. ej. https://www.instagram.com/usuario/)
  mapEmbed: "https://www.google.com/maps?q=Los%20Ingleses%20186%2C%20Chicureo%2C%20Colina%2C%20Chile&z=16&output=embed",
  // Mensajes de WhatsApp pre-armados según la sección del clic
  waMessages: {
    default:   "Hola Âme, quisiera hacer una consulta.",
    menu:      "Hola Âme, quisiera hacer una consulta.",
    barra:     "Hola Âme, quisiera hacer una consulta sobre sus servicios.",
    flotante:  "Hola Âme, quisiera hacer una consulta sobre sus servicios.",
    ubicacion: "Hola Âme, ¿me podrían indicar cómo llegar al salón en Los Ingleses 186?",
    cta:       "Hola Âme, tengo una duda antes de reservar mi hora.",
    footer:    "Hola Âme, quisiera hacer una consulta.",
    servicio:  "Hola Âme, quisiera más información sobre {name}."
  },
  // Horario DE EJEMPLO (domingo = 0): confirmar con el salón
  hours: [
    { day: "Domingo",   open: null,    close: null },
    { day: "Lunes",     open: "10:00", close: "20:00" },
    { day: "Martes",    open: "10:00", close: "20:00" },
    { day: "Miércoles", open: "10:00", close: "20:00" },
    { day: "Jueves",    open: "10:00", close: "20:00" },
    { day: "Viernes",   open: "10:00", close: "20:00" },
    { day: "Sábado",    open: "10:00", close: "18:00" }
  ]
};

/* Servicios — las 16 categorías de AgendaPro, en su mismo orden, agrupadas en mundos.
   Manicure, pestañas y cejas, masajes, depilación de rostro y la promo mani+pedi usan nombres reales
   (tomados de las reseñas de AgendaPro); el resto son REFERENCIALES: reemplazar por los reales. Agregar servicios = agregar filas. */
const SERVICES = [
  { id: "cabello", name: "Cabello", img: "cabello-wide.webp",
    intro: "Color, corte, alisado y cuidado pensados para tu tipo de cabello.",
    groups: [
      { id: "alisados", name: "Alisados", items: ["Alisado orgánico", "Keratina brasileña", "Botox capilar"] },
      { id: "coloracion", name: "Coloración", items: ["Retoque de raíz", "Balayage", "Mechas y babylights"] },
      { id: "cortes", name: "Cortes", items: ["Corte femenino", "Corte masculino", "Corte infantil"] },
      { id: "lavados", name: "Lavados capilares", items: ["Lavado y secado", "Lavado con masaje craneal", "Lavado y brushing"] },
      { id: "peluqueria", name: "Peluquería", items: ["Brushing", "Ondas con babyliss", "Peinado de evento"] },
      { id: "tratamientos-capilares", name: "Tratamientos capilares", items: ["Hidratación profunda", "Reconstrucción capilar", "Ampolla nutritiva"] }
    ] },
  { id: "belleza", name: "Belleza", img: "belleza-wide.webp",
    intro: "Manos, pies y mirada. Detalles que se notan, con herramientas esterilizadas.",
    groups: [
      { id: "manicure-femenina", name: "Manicure femenina", items: ["Manicure con esmaltado permanente 1 color", "Manicure permanente con refuerzo simple", "Manicure con esmaltado permanente y refuerzo rubber 1 color", "Uñas Softgel con esmaltado permanente 1 color", "Extensión de uñas Polygel con esmaltado permanente 1 color"] },
      { id: "pedicure-femenina", name: "Pedicure femenina", items: ["Pedicure tradicional sin esmaltado", "Pedicure con esmaltado permanente", "Pedicure spa"] },
      { id: "spa-kids", name: "Spa kids", items: ["Mani kids", "Pedi kids", "Peinado kids"] },
      { id: "masculina", name: "Manicure y pedicure masculina", items: ["Manicure masculina", "Pedicure masculina", "Combo mani + pedi"] },
      { id: "pestanas-cejas", name: "Pestañas y cejas", items: ["Lifting de pestañas con tinte", "Extensión de pestañas volumen (2D-3D-4D-5D)", "Laminado de cejas con tinte"] },
      { id: "depilacion-femenina", name: "Depilación femenina", items: ["Rostro completo", "Axilas y piernas", "Rebaje"] },
      { id: "depilacion-masculina", name: "Depilación masculina", items: ["Espalda", "Pecho y abdomen", "Cejas y rostro"] }
    ] },
  { id: "bienestar", name: "Bienestar", img: "bienestar-wide.webp",
    intro: "Una pausa real en tu semana: cuidado de la piel y masajes.",
    groups: [
      { id: "faciales", name: "Tratamientos faciales", items: ["Limpieza facial profunda", "Hidratación facial", "Dermaplaning"] },
      { id: "masajes", name: "Masajes corporales", items: ["Masaje mixto descontracturante + relajante (45 min)", "Masaje relajante", "Masaje descontracturante"] }
    ] },
  { id: "promociones", name: "Promociones", promo: true,
    intro: "Combos pensados para ahorrar tiempo y dinero. Revisa las vigentes en la agenda.",
    groups: [
      { id: "promos", name: "Promociones del mes", items: ["Promo manicure y pedicure esmaltado permanente 1 color", "Corte + tratamiento capilar", "Lifting + laminado de cejas"] }
    ] }
];

/* Reseñas reales de AgendaPro (4,8 · 54 reseñas). Solo las que tienen comentario. */
const REVIEWS = [
  { name: "Isabel",    stars: 5, service: "Extensión uñas Polygel con esmaltado permanente", text: "Excelente experiencia en Ame Beauty. Hacen las uñas fenomenal, con muchísimo cuidado y atención al detalle, y el servicio es siempre muy profesional y agradable. Además, valoro especialmente que todo está perfectamente esterilizado y los materiales utilizados son individuales para cada cliente, algo que da muchísima confianza. ¡Muy recomendable!" },
  { name: "Antonia",   stars: 5, service: "Uñas Softgel con esmaltado permanente", text: "Me encantó el trabajo de Paz con mis uñas que me las mordí, no tuvo problemas y me las dejó perfectas! También la experiencia como clienta en el salón fui súper bien recibida, acogida, conversamos, valoré cada detalle tanto de Paz como del equipo. El café, galletas y hasta me dieron un regalito!" },
  { name: "Paz",       stars: 5, service: "Pedicure tradicional sin esmaltado", text: "Excelente servicio, el lugar súper cómodo y acogedor. La chica muy cuidadosa, amable, delicada y simpática. Quedé encantada con el servicio de pedicure; fue un ratito súper relajante, ¡sin duda volveré!" },
  { name: "Mara",      stars: 5, service: "Lifting de pestañas con tinte", text: "Servicio excelente y muy amorosas todas las niñas. Definitivamente voy a volver, quedé muy conforme." },
  { name: "Virginia",  stars: 5, service: "Extensión de pestañas volumen", text: "Muy buena atención y muy lindo y acogedor el nuevo local!" },
  { name: "Ángeles",   stars: 5, service: "Masaje mixto descontracturante + relajante", text: "Excelentes masajes!" },
  { name: "Bárbara",   stars: 5, service: "Manicure con esmaltado permanente", text: "Excelente servicio, muy simpáticas todas, feliz con mi esmaltado." },
  { name: "Yoeni",     stars: 5, service: "Manicure con esmaltado permanente", text: "Las uñitas me quedaron bellísimas." },
  { name: "Vicky",     stars: 4, service: "Promo manicure y pedicure esmaltado permanente", text: "Muy buenos trabajos, recomendado." }
];

/* Galería — reemplaza con fotos reales (assets/img/galeria/) */
const GALLERY = [
  { home: true, file: "unas-01.webp",     cat: "unas",   cap: "Manicure de precisión" },
  { home: true, file: "color-01.webp",    cat: "color",  cap: "Color con pincel y papel" },
  { home: true, file: "rostro-01.webp",   cat: "rostro", cap: "Limpieza facial" },
  { home: true, file: "ondas-01.webp",    cat: "cabello",cap: "Ondas con tenaza" },
  { home: true, file: "color-02.webp",    cat: "color",  cap: "Color luminoso" },
  { home: true, file: "brushing-01.webp", cat: "cabello",cap: "Brushing con cepillo redondo" }
];

/* Equipo — nombres reales; roles y bios por confirmar. Fotos: assets/img/team/<nombre-apellido>.jpg */
const TEAM = [
  { name: "Dayana Hinojosa", role: "Especialista", file: "dayana-hinojosa.jpg", sample: true, tagline: "Perfil por completar.", bio: "Cuéntanos su especialidad y experiencia para completar este perfil." },
  { name: "Ely Oropeza",     role: "Especialista", file: "ely-oropeza.jpg",     sample: true, tagline: "Perfil por completar.", bio: "Cuéntanos su especialidad y experiencia para completar este perfil." },
  { name: "Isamar Espinoza", role: "Especialista", file: "isamar-espinoza.jpg", sample: true, tagline: "Perfil por completar.", bio: "Cuéntanos su especialidad y experiencia para completar este perfil." },
  { name: "Nicole Segovia",  role: "Especialista", file: "nicole-segovia.jpg",  sample: true, tagline: "Perfil por completar.", bio: "Cuéntanos su especialidad y experiencia para completar este perfil." },
  { name: "Evelin Loyola",   role: "Especialista", file: "evelin-loyola.jpg",   sample: true, tagline: "Perfil por completar.", bio: "Cuéntanos su especialidad y experiencia para completar este perfil." }
];

/* ============================================================
   UTILIDADES
   ============================================================ */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const waLink = msg => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
const store = {
  get(k, d){ try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
const STAR = '<svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.7l5.9-.8z"/></svg>';
const sampleBadge = (txt = "Contenido de ejemplo") => `<span class="sample">${txt}</span>`;
const imgBox = (src, alt, cls = "", attrs = "") =>
  `<div class="ph ${cls}" data-file="${esc(src)}" ${attrs}><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async"></div>`;

function toast(msg){
  const t = $("#toast");
  t.textContent = msg; t.classList.add("is-show");
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("is-show"), 3200);
}

/* Placeholder visible cuando falta una imagen/video (antes de subir la multimedia) */
function watchMedia(root = document){
  $$(".ph img", root).forEach(img => {
    const mark = () => img.closest(".ph").classList.add("is-missing");
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) mark();
    img.addEventListener("error", mark, { once: true });
    img.addEventListener("load", () => img.closest(".ph").classList.remove("is-missing"), { once: true });
  });
}

/* ============================================================
   LINKS CENTRALIZADOS (AgendaPro, WhatsApp, Instagram)
   ============================================================ */
function wireLinks(root = document){
  $$(".js-book", root).forEach(a => a.href = CONFIG.agendapro);
  $$(".js-reviews", root).forEach(a => a.href = CONFIG.reviews);
  $$(".js-ig", root).forEach(a => a.href = CONFIG.instagram);
  $$(".js-wa", root).forEach(a => {
    const key = a.dataset.wa || "default";
    let msg = CONFIG.waMessages[key] || CONFIG.waMessages.default;
    if (a.dataset.name) msg = msg.replace("{name}", a.dataset.name);
    a.href = waLink(msg);
  });
}

/* ============================================================
   RENDER DE SECCIONES
   ============================================================ */
/* ============================================================
   RENDER DE SECCIONES
   ============================================================ */
function renderGallery(){
  const el = $("#gallery"), preview = el.dataset.preview !== undefined;
  el.innerHTML = GALLERY.map((g, i) => (preview && !g.home) ? "" : `
    <button class="g-item reveal" type="button" data-cat="${g.cat}" data-index="${i}" aria-label="Ampliar foto: ${esc(g.cap)}">
      ${imgBox("assets/img/galeria/" + g.file, g.cap)}
      <figcaption>${esc(g.cap)}</figcaption>
    </button>`).join("");
}

function renderTeam(){
  $("#team").innerHTML = TEAM.map((m, i) => `
    <article class="member reveal" data-delay="${i % 4}">
      <div class="member__photo">
        ${imgBox("assets/img/team/" + m.file, `${m.name}, ${m.role}`)}
        <div class="member__over" id="bio-${i}">
          <p class="member__tag">${esc(m.tagline)}</p>
          <p>${esc(m.bio)}</p>
          <a class="js-book" href="#" target="_blank" rel="noopener">Agendar con ${esc(m.name.split(" ")[0])} →</a>
        </div>
      </div>
      <h3>${esc(m.name)}</h3>
      <p class="role">${esc(m.role)} ${m.sample ? sampleBadge("Rol por confirmar") : ""}</p>
            <button class="member__more" type="button" aria-expanded="false" aria-controls="bio-${i}">Ver perfil</button>
    </article>`).join("");
  // Táctil y teclado: el botón abre/cierra el perfil (en desktop también aparece con el cursor)
  $("#team").addEventListener("click", e => {
    const b = e.target.closest(".member__more"); if (!b) return;
    const card = b.closest(".member"), open = !card.classList.contains("is-open");
    $$(".member.is-open").forEach(c => { c.classList.remove("is-open"); $(".member__more", c).setAttribute("aria-expanded", "false"); $(".member__more", c).textContent = "Ver perfil"; });
    card.classList.toggle("is-open", open);
    b.setAttribute("aria-expanded", open); b.textContent = open ? "Cerrar" : "Ver perfil";
  });
}

// Página de servicios: lista completa + índice fijo + barra de categorías (móvil) + buscador
function renderServices(){
  const norm = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  $("#svcList").innerHTML = SERVICES.map(c => `
    <section class="svc-cat${c.promo ? " svc-cat--promo" : ""}" id="${c.id}" data-spy="${c.id}" aria-labelledby="h-${c.id}">
      <div class="svc-cat__head">
        ${c.img ? imgBox("assets/img/servicios/" + c.img, "", "svc-cat__img") : ""}
        <div class="svc-cat__title"><h2 id="h-${c.id}">${c.name}</h2><p>${c.intro}</p></div>
      </div>
      ${c.groups.map(g => `
        <div class="svc-group" id="${c.id}-${g.id}" data-spy="${c.id}" data-sub="${c.id}-${g.id}">
          <div class="svc-group__head"><h3>${g.name}</h3><a class="link js-book" href="#" target="_blank" rel="noopener">Reservar →</a></div>
          <ul class="svc-rows">
            ${g.items.map(n => `<li data-q="${esc(norm(n + " " + g.name + " " + c.name))}"><span class="svc-rows__name">${esc(n)}</span><a class="svc-rows__go js-book" href="#" target="_blank" rel="noopener" aria-label="Ver valor y reservar ${esc(n)}">Ver valor</a></li>`).join("")}
          </ul>
        </div>`).join("")}
    </section>`).join("");
  $("#svcIndex").innerHTML = SERVICES.map(c => `
    <li><a href="#${c.id}" data-cat="${c.id}">${c.name}</a>
      <ul>${c.groups.map(g => `<li><a href="#${c.id}-${g.id}" data-sub="${c.id}-${g.id}">${g.name}</a></li>`).join("")}</ul></li>`).join("");
  $("#svcChips").innerHTML = SERVICES.map(c => `<a class="chip" href="#${c.id}" data-cat="${c.id}">${c.name}</a>`).join("");

  // Resalta en el índice y en la barra la sección visible
  const mark = (cat, sub) => {
    $$("[data-cat]", $("#svcIndex")).concat($$("[data-cat]", $("#svcChips"))).forEach(a => a.classList.toggle("is-active", a.dataset.cat === cat));
    $$("[data-sub]", $("#svcIndex")).forEach(a => a.classList.toggle("is-active", a.dataset.sub === sub));
    const chip = $(`#svcChips [data-cat="${cat}"]`); if (chip) chip.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  };
  const io = new IntersectionObserver(entries => {
    const vis = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (vis) mark(vis.target.dataset.spy, vis.target.dataset.sub || null);
  }, { rootMargin: "-30% 0px -60% 0px" });
  $$(".svc-group, .svc-cat__head", $("#svcList")).forEach(el => { if (!el.dataset.spy) el.dataset.spy = el.closest(".svc-cat").id; io.observe(el); });
  mark(SERVICES[0].id, null);

  // Buscador
  const input = $("#svcSearch"), empty = $("#svcEmpty");
  input.addEventListener("input", () => {
    const q = norm(input.value.trim());
    let total = 0;
    $$(".svc-group", $("#svcList")).forEach(g => {
      let n = 0;
      $$("li", g).forEach(li => { const ok = !q || li.dataset.q.includes(q); li.hidden = !ok; n += ok; });
      g.hidden = n === 0; total += n;
    });
    $$(".svc-cat", $("#svcList")).forEach(c => c.hidden = !$$(".svc-group", c).some(g => !g.hidden));
    empty.hidden = total > 0;
    $("#svcCount").textContent = q ? `${total} ${total === 1 ? "servicio" : "servicios"}` : "";
  });
}

function renderReviews(){
  $("#reviews").innerHTML = REVIEWS.map((r, i) => `
    <li class="review" aria-roledescription="reseña" aria-label="${i + 1} de ${REVIEWS.length}">
      <div class="review__top"><b>${esc(r.name)}</b></div>
      <span class="stars" role="img" aria-label="${r.stars} de 5 estrellas">${STAR.repeat(r.stars)}${STAR.replace("<svg", '<svg class="is-empty"').repeat(5 - r.stars)}</span>
      <p class="review__text">${esc(r.text)}</p>
      <button class="review__more" type="button" hidden>Leer más</button>
      <div class="review__foot"><span>${esc(r.service)}</span></div>
    </li>`).join("");
  initCarousel($("#reviews").closest(".carousel"));
}

// Carrusel horizontal: flechas, arrastre/scroll nativo con snap y "Leer más" en textos largos
function initCarousel(root){
  const track = $(".carousel__track", root), prev = $(".carousel__btn--prev", root), next = $(".carousel__btn--next", root);
  const step = () => { const c = track.firstElementChild; return c ? c.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0) : 300; };
  const sync = () => {
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  };
  prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  track.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { e.preventDefault(); next.click(); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); prev.click(); }
  });
  track.addEventListener("scroll", () => requestAnimationFrame(sync), { passive: true });
  window.addEventListener("resize", sync);
  // "Leer más" solo donde el texto quedó cortado
  const clampCheck = () => $$(".review", track).forEach(card => {
    const t = $(".review__text", card), b = $(".review__more", card);
    if (card.classList.contains("is-open")) return;
    b.hidden = t.scrollHeight <= t.clientHeight + 2;
  });
  track.addEventListener("click", e => {
    const b = e.target.closest(".review__more"); if (!b) return;
    const card = b.closest(".review"), open = card.classList.toggle("is-open");
    b.textContent = open ? "Leer menos" : "Leer más";
  });
  sync(); clampCheck(); window.addEventListener("resize", clampCheck);
  document.fonts && document.fonts.ready.then(() => { sync(); clampCheck(); });
}

function renderHours(){
  const now = new Date();
  const today = now.getDay();
  const order = [1,2,3,4,5,6,0];
  $("#hoursBody").innerHTML = order.map(d => {
    const h = CONFIG.hours[d];
    return `<tr class="${d === today ? "is-today" : ""}"><th scope="row">${h.day}${d === today ? ' <span class="sr-only">(hoy)</span>' : ""}</th><td>${h.open ? `${h.open} – ${h.close}` : "Cerrado"}</td></tr>`;
  }).join("");

  // ¿Abierto ahora? (hora de Chile)
  const parts = new Intl.DateTimeFormat("es-CL", { timeZone: "America/Santiago", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(now);
  const hh = +parts.find(p => p.type === "hour").value, mm = +parts.find(p => p.type === "minute").value;
  const cl = new Date(now.toLocaleString("en-US", { timeZone: "America/Santiago" }));
  const h = CONFIG.hours[cl.getDay()];
  const mins = hh * 60 + mm;
  const toM = s => { const [a, b] = s.split(":").map(Number); return a * 60 + b; };
  const el = $("#openNow");
  if (h.open && mins >= toM(h.open) && mins < toM(h.close)) {
    el.lastElementChild.textContent = `Abierto ahora · cierra a las ${h.close}`;
  } else {
    el.classList.add("is-closed");
    el.lastElementChild.textContent = "Cerrado ahora · reserva online 24/7";
  }
}

/* ============================================================
   INTERACCIONES
   ============================================================ */
// Header sólido al hacer scroll
function initHeader(){
  const header = $("#header");
  if (document.body.classList.contains("page-sub")) { header.classList.add("is-solid"); return; }
  const onScroll = () => header.classList.toggle("is-solid", window.scrollY > window.innerHeight * 0.6 - 80);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
}

// Tema claro/oscuro
function initTheme(){
  const btn = $("#themeBtn");
  const saved = store.get("ame-theme", null);
  if (saved) document.documentElement.dataset.theme = saved;
  const isDark = () => document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  const label = () => btn.setAttribute("aria-label", isDark() ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
  label();
  btn.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next; store.set("ame-theme", next); label();
  });
  $("#themeBtnM").addEventListener("click", () => btn.click());
}

// Focus trap + overlay genérico
let lastFocus = null;
function openLayer(el, { scrim = false } = {}){
  lastFocus = document.activeElement;
  el.classList.add("is-open");
  if (scrim) $("#scrim").classList.add("is-open");
  document.body.style.overflow = "hidden";
  const f = el.querySelector("button, a[href], input, select, textarea");
  setTimeout(() => f && f.focus(), 60);
}
function closeLayer(el){
  el.classList.remove("is-open");
  $("#scrim").classList.remove("is-open");
  document.body.style.overflow = "";
  lastFocus && lastFocus.focus();
}
function trapFocus(e, el){
  if (e.key !== "Tab" || !el.classList.contains("is-open")) return;
  const f = $$("button:not([disabled]), a[href], input, select, textarea", el).filter(x => x.offsetParent !== null);
  if (!f.length) return;
  if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f.at(-1).focus(); }
  else if (!e.shiftKey && document.activeElement === f.at(-1)) { e.preventDefault(); f[0].focus(); }
}

// Menú móvil
function initMenu(){
  const m = $("#mnav"), btn = $("#menuBtn");
  btn.addEventListener("click", () => { openLayer(m); btn.setAttribute("aria-expanded", "true"); });
  const close = () => { closeLayer(m); btn.setAttribute("aria-expanded", "false"); };
  $("#menuClose").addEventListener("click", close);
  $$("a[href^='#']", m).forEach(a => a.addEventListener("click", close));
  m.addEventListener("keydown", e => { if (e.key === "Escape") close(); trapFocus(e, m); });
}

// Video hero: pausa accesible + reduced motion
function initHero(){
  const v = $("#heroVideo"), b = $("#heroPause"), box = v.closest(".ph");
  const sources = $$("source", v);
  let failed = 0;
  sources.forEach(s => s.addEventListener("error", () => { if (++failed === sources.length) { box.classList.add("is-missing"); b.hidden = true; } }));
  if (matchMedia("(max-width: 699px)").matches) v.poster = "assets/img/hero-poster-mobile.jpg";
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { v.removeAttribute("autoplay"); v.pause(); }
  const sync = () => {
    b.setAttribute("aria-label", v.paused ? "Reproducir video de fondo" : "Pausar video de fondo");
    b.innerHTML = v.paused
      ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5l12 7-12 7z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';
  };
  b.addEventListener("click", () => { v.paused ? v.play() : v.pause(); });
  v.addEventListener("play", sync); v.addEventListener("pause", sync); sync();
}

// Galería: filtros + lightbox
function initGallery(){
  const items = () => $$(".g-item");
  $$("[data-filter]").forEach(b => b.addEventListener("click", () => {
    $$("[data-filter]").forEach(x => x.setAttribute("aria-pressed", x === b));
    const f = b.dataset.filter;
    items().forEach(it => it.classList.toggle("is-hidden", f !== "all" && it.dataset.cat !== f));
  }));

  const lb = $("#lightbox"), img = $("#lbImg"), cap = $("#lbCap");
  let idx = 0;
  const visible = () => items().filter(i => !i.classList.contains("is-hidden") && !$(".ph", i).classList.contains("is-missing"));
  const show = i => {
    const v = visible(); idx = (i + v.length) % v.length;
    const g = GALLERY[+v[idx].dataset.index];
    img.src = "assets/img/galeria/" + g.file; img.alt = g.cap; cap.textContent = g.cap;
  };
  $("#gallery").addEventListener("click", e => {
    const it = e.target.closest(".g-item"); if (!it) return;
    if ($(".ph", it).classList.contains("is-missing")) { toast("Foto pendiente: súbela en assets/img/galeria/"); return; }
    show(visible().indexOf(it)); openLayer(lb);
  });
  $(".lb-close", lb).addEventListener("click", () => closeLayer(lb));
  $(".lb-prev", lb).addEventListener("click", () => show(idx - 1));
  $(".lb-next", lb).addEventListener("click", () => show(idx + 1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLayer(lb); });
  lb.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLayer(lb);
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
    trapFocus(e, lb);
  });
}

// Reserva: los botones "Reservar" abren AgendaPro dentro de la página.
// Si AgendaPro no permite mostrarse embebido, el link "Abrir en AgendaPro" sigue disponible arriba.
function initBooking(){
  const host = location.hostname;
  if (!CONFIG.bookingInline || !host || /claude|anthropic/.test(host)) return; // visor de artifacts: abre pestaña nueva
  const modal = $("#booking"), frame = $("#bookingFrame"), loading = $(".booking__loading", modal);
  $$(".js-book-ext").forEach(a => a.href = CONFIG.agendapro);
  frame.addEventListener("load", () => { if (frame.src) loading.hidden = true; });
  const open = () => {
    if (!frame.src) frame.src = CONFIG.agendapro;
    modal.hidden = false; requestAnimationFrame(() => modal.classList.add("is-open"));
    lastFocus = document.activeElement; document.body.style.overflow = "hidden";
    setTimeout(() => $("#bookingClose").focus(), 60);
  };
  const close = () => {
    modal.classList.remove("is-open"); document.body.style.overflow = "";
    setTimeout(() => { modal.hidden = true; }, 250); lastFocus && lastFocus.focus();
  };
  document.addEventListener("click", e => {
    const a = e.target.closest(".js-book");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; // cmd/ctrl+clic: pestaña nueva
    e.preventDefault(); $("#mnav")?.classList.contains("is-open") && $("#menuClose").click(); open();
  });
  $("#bookingClose").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  modal.addEventListener("keydown", e => { if (e.key === "Escape") close(); trapFocus(e, modal); });
  if (location.hash === "#reservar") open();
}

// Mapa: embebe Google Maps cuando el sitio corre en su propio dominio
function initMap(){
  const host = location.hostname;
  if (!host || /claude|anthropic/.test(host)) return; // visor de artifacts: se queda la tarjeta con link
  // El bloque deja de ser un link completo: el mapa se usa y la tarjeta sigue llevando a Google Maps
  const link = $(".map"), box = document.createElement("div");
  box.className = link.className; box.dataset.delay = link.dataset.delay || "";
  const f = document.createElement("iframe");
  f.title = "Mapa: Âme Beauty Lounge en Los Ingleses 186, Chicureo";
  f.loading = "lazy"; f.referrerPolicy = "no-referrer-when-downgrade"; f.src = CONFIG.mapEmbed;
  f.className = "map__frame";
  const card = document.createElement("a");
  card.className = "map__card is-over-map"; card.href = link.href; card.target = "_blank"; card.rel = "noopener";
  card.innerHTML = $(".map__card", link).innerHTML;
  box.append(f, card); link.replaceWith(box);
}

// Post de Instagram con video: se reproduce solo cuando está en pantalla
function initIgVideo(){
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  $$(".ig-video").forEach(v => {
    if (reduce) return;
    new IntersectionObserver(([e]) => e.isIntersecting ? v.play().catch(() => {}) : v.pause(), { threshold: .3 }).observe(v);
  });
}

// Reveal on scroll
function initReveal(){
  const els = $$(".reveal:not(.is-in)");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach(e => e.classList.add("is-in")); return;
  }
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
  }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  els.forEach(e => io.observe(e));
}

// Mostrar/ocultar etiquetas de ejemplo (para revisar el diseño limpio)
function initSamples(){
  const b = $("#toggleSamples");
  b.addEventListener("click", () => {
    const on = document.documentElement.classList.toggle("hide-samples");
    b.textContent = on ? "Mostrar etiquetas de ejemplo" : "Ocultar etiquetas de ejemplo";
  });
}

/* ============================================================
   INIT
   ============================================================ */
// Cada bloque corre solo si su sección existe en la página actual
const run = (sel, fn) => { if (!sel || $(sel)) fn(); };
run("#gallery", renderGallery); run("#team", renderTeam); run("#reviews", renderReviews); run("#svcList", renderServices); run("#hoursBody", renderHours);
wireLinks(); watchMedia();
run(null, initHeader); run(null, initTheme); run("#mnav", initMenu); run("#heroVideo", initHero);
run("#gallery", initGallery); run(".map", initMap); run("#booking", initBooking); run(".ig-video", initIgVideo); run(null, initReveal); run("#toggleSamples", initSamples);
$("#year").textContent = new Date().getFullYear();
