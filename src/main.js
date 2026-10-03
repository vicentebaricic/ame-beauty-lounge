/* ÂME Beauty Lounge · interacciones (JS vanilla) */
(() => {
  "use strict";

  /* ---------- Configuración del negocio: editar aquí ---------- */
  const CONFIG = {
    whatsapp: "56956100642",
    booking: "https://ameblounge.site.agendapro.com/cl/sucursal/25770",
    instagram: "", // p. ej. "https://www.instagram.com/usuario/" — vacío = enlace genérico
    timezone: "America/Santiago",
    // Horario de EJEMPLO (0 = domingo). null = cerrado. Confirmar con el salón.
    hours: [
      null,
      ["10:00", "20:00"],
      ["10:00", "20:00"],
      ["10:00", "20:00"],
      ["10:00", "20:00"],
      ["10:00", "20:00"],
      ["10:00", "18:00"],
    ],
  };
  const DAYS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const root = document.documentElement;

  $$("[data-book]").forEach(a => (a.href = CONFIG.booking));
  if (CONFIG.instagram) $$("[data-ig]").forEach(a => (a.href = CONFIG.instagram));
  const year = $("#year"); if (year) year.textContent = new Date().getFullYear();

  /* ---------- Placeholders de imagen ---------- */
  $$(".ph img").forEach(img => {
    const miss = () => img.closest(".ph").classList.add("is-missing");
    if (img.complete && img.naturalWidth === 0) miss();
    img.addEventListener("error", miss);
  });

  /* ---------- Header sólido al hacer scroll ---------- */
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Link activo según sección visible */
  const navLinks = $$('.nav a[href^="#"]');
  const spy = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    navLinks.forEach(a => a.getAttribute("href") === "#" + en.target.id
      ? a.setAttribute("aria-current", "true")
      : a.removeAttribute("aria-current"));
  }), { rootMargin: "-45% 0px -50% 0px" });
  navLinks.forEach(a => { const s = $(a.getAttribute("href")); if (s) spy.observe(s); });

  /* ---------- Tema ---------- */
  const isDark = () => root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  const toggleTheme = () => {
    const next = isDark() ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  };
  $$("#themeBtn, [data-theme-toggle]").forEach(b => b.addEventListener("click", toggleTheme));

  /* ---------- Menú móvil ---------- */
  const mnav = $("#mnav"), menuBtn = $(".menu-btn");
  const setMenu = open => {
    mnav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) $("[data-close-menu]", mnav).focus(); else menuBtn.focus({ preventScroll: true });
  };
  menuBtn.addEventListener("click", () => setMenu(true));
  $("[data-close-menu]", mnav).addEventListener("click", () => setMenu(false));
  $$("a", mnav).forEach(a => a.addEventListener("click", () => setMenu(false)));

  /* ---------- Revelado al hacer scroll ---------- */
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
  }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  $$(".reveal:not(.is-in)").forEach(el => io.observe(el));

  /* ---------- Lightbox ---------- */
  const lb = $("#lightbox"), lbImg = $("img", lb);
  let items = [], idx = 0, lastFocus = null;
  const show = i => {
    idx = (i + items.length) % items.length;
    const img = $("img", items[idx]);
    lbImg.src = img.currentSrc || img.src; lbImg.alt = img.alt;
  };
  const closeLb = () => { lb.classList.remove("is-open"); document.body.style.overflow = ""; lastFocus && lastFocus.focus(); };
  $$("[data-gallery] .g-item").forEach(btn => btn.addEventListener("click", () => {
    items = $$("[data-gallery] .g-item").filter(b => !$(".ph", b).classList.contains("is-missing"));
    const i = items.indexOf(btn);
    if (i < 0) { toast("Foto pendiente: súbela en assets/img/" + $(".ph", btn).dataset.file); return; }
    lastFocus = btn; show(i);
    lb.classList.add("is-open"); document.body.style.overflow = "hidden";
    $(".lightbox__close", lb).focus();
  }));
  $(".lightbox__close", lb).addEventListener("click", closeLb);
  $(".lightbox__prev", lb).addEventListener("click", () => show(idx - 1));
  $(".lightbox__next", lb).addEventListener("click", () => show(idx + 1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (lb.classList.contains("is-open")) closeLb();
      if (mnav.classList.contains("is-open")) setMenu(false);
    }
    if (lb.classList.contains("is-open")) {
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    }
  });

  /* ---------- Filtro de servicios ---------- */
  const chips = $$(".svc-filter .chip");
  const cards = $$("#svcCards .svc-card");
  chips.forEach(chip => chip.addEventListener("click", () => {
    const f = chip.dataset.filter;
    chips.forEach(c => c.setAttribute("aria-selected", String(c === chip)));
    cards.forEach(card => {
      const show = f === "all" || card.dataset.group === f;
      card.hidden = !show;
      card.classList.remove("is-shown");
      if (show) { card.classList.add("is-in"); void card.offsetWidth; card.classList.add("is-shown"); }
    });
  }));

  /* ---------- Toast ---------- */
  const toastEl = $("#toast"); let toastT;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add("is-show");
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("is-show"), 3200);
  }

  /* ---------- Horario + estado "abierto ahora" ---------- */
  const nowParts = () => {
    const p = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
      timeZone: CONFIG.timezone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date()).map(x => [x.type, x.value]));
    return { day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(p.weekday), mins: +p.hour * 60 + +p.minute };
  };
  const toMin = t => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
  const hoursBody = $("#hoursBody");
  if (hoursBody) {
    const { day, mins } = nowParts();
    [1, 2, 3, 4, 5, 6, 0].forEach(d => {
      const h = CONFIG.hours[d];
      const tr = document.createElement("tr");
      if (d === day) tr.className = "is-today";
      tr.innerHTML = `<th scope="row">${DAYS[d]}</th><td>${h ? `${h[0]} – ${h[1]}` : "Cerrado"}</td>`;
      hoursBody.append(tr);
    });
    const today = CONFIG.hours[day];
    const open = today && mins >= toMin(today[0]) && mins < toMin(today[1]);
    const st = $("#openStatus");
    st.hidden = false;
    st.classList.toggle("is-closed", !open);
    st.textContent = open ? `Abierto ahora · hasta las ${today[1]}` : "Cerrado ahora · escríbenos y te respondemos";
  }

  /* ---------- Formulario de reserva → WhatsApp ---------- */
  const form = $("#bookForm");
  const fecha = $("#f-fecha");
  if (fecha) fecha.min = new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 10);

  const setErr = (id, msg, field) => {
    $("#err-" + id).textContent = msg;
    if (field) field.setAttribute("aria-invalid", msg ? "true" : "false");
  };
  const nombre = $("#f-nombre");
  nombre.addEventListener("blur", () => nombre.value.trim() && setErr("nombre", "", nombre));
  const svcSel = $("#f-svc");
  svcSel.addEventListener("change", () => svcSel.value && setErr("servicio", "", svcSel));

  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);
    const svc = data.get("servicio");
    const name = (data.get("nombre") || "").trim();
    let firstBad = null;
    if (!svc) { setErr("servicio", "Elige un servicio para continuar.", svcSel); firstBad = svcSel; }
    if (!name) { setErr("nombre", "Escribe tu nombre para saber a quién responder.", nombre); firstBad = firstBad || nombre; }
    if (firstBad) { firstBad.focus(); return; }

    const lines = [`Hola Âme! Soy ${name} y quiero reservar una hora.`, `• Servicio: ${svc}`];
    const pro = data.get("profesional"); if (pro) lines.push(`• Profesional: ${pro}`);
    const f = data.get("fecha");
    if (f) {
      const d = new Date(f + "T12:00:00");
      lines.push(`• Fecha: ${d.toLocaleDateString("es-CL", { weekday: "long", day: "numeric", month: "long" })}`);
    }
    const hor = data.get("horario"); if (hor) lines.push(`• Horario: ${hor}`);
    const c = (data.get("comentario") || "").trim(); if (c) lines.push(`• Comentario: ${c}`);

    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    toast("Abriendo WhatsApp con tu mensaje…");
  });
})();
