# Guía de estilo · Sistema de diseño

Documento para replicar este sistema visual en otro proyecto. Describe solo reglas de diseño: los textos de ejemplo son genéricos.

**Stack:** HTML + CSS puro con variables CSS (sin Tailwind ni preprocesador) + JS vanilla para interacciones. Todo el CSS vive en un solo archivo (`src/styles.css`) organizado en bloques: *Tokens → Base → Header → Hero → secciones → componentes → páginas internas*.

**Carácter:** editorial, cálido y sobrio. Fondo crema, tinta café casi negra, un único acento malva usado con moderación. Titulares serif grandes con una palabra en cursiva de acento, cuerpo sans-serif limpio. Esquinas prácticamente rectas (0–2 px), líneas de 1 px en lugar de cajas con sombra, fotos a sangre con degradados oscuros para el texto encima.

---

## 1. Paleta de colores

Regla de proporción declarada en el código: **70 / 15 / 10 / 5** (fondo / superficie / tinta / acento).

### Modo claro (por defecto)

| Token | Hex | Uso |
|---|---|---|
| `--c-bg` | `#F8F5F0` | Fondo general (70 %). Fondo de tarjetas de reseña, menú móvil, drawer, modales. También color del texto claro sobre fotos. |
| `--c-surface` | `#EEE8E0` | Secciones alternas (`.section--alt`), footer, fondo de placeholders de imagen (15 %). |
| `--c-ink` | `#292522` | Tinta: texto principal, botón primario (`.btn`), chips activos, toast (10 %). |
| `--c-accent` | `#8A505A` | Acento malva (5 %): botón `.btn--accent`, banda de color, contador del carrito, estrellas en reseñas, anillo de foco, ícono del mapa. |
| `--c-accent-ink` | `#7A4450` | Malva más oscuro para **texto** sobre fondo claro (contraste AA): eyebrows, `<em>` en titulares, links `.link`, día actual en horarios. También es el **hover** de `.btn--accent`. |
| `--c-on-accent` | `#FFFFFF` | Texto sobre el acento. |
| `--c-text` | `= --c-ink` | Color de texto del body. |
| `--c-muted` | `#615953` | Texto secundario: leads, descripciones, fechas, precios en listas, títulos de columnas del footer. |
| `--c-line` | `#DDD4C9` | Bordes y separadores de 1 px, borde de inputs y chips. |
| `--c-card` | `#FFFFFF` | Fondo de inputs, buscador y fotos de producto. |
| `--c-overlay` | `rgba(24,20,18,.55)` | Scrim detrás de drawer y modal. |
| `--c-sample-bg` / `--c-sample-tx` | `#FFF1C9` / `#6B4E00` | Etiqueta "contenido de ejemplo" (opcional, de uso interno). |

### Modo oscuro

Se activa con `prefers-color-scheme: dark` (si el usuario no forzó claro) o con `<html data-theme="dark">`. La preferencia manual se guarda en `localStorage`.

| Token | Hex |
|---|---|
| `--c-bg` | `#1D1A18` |
| `--c-surface` | `#27231F` |
| `--c-ink` / `--c-text` | `#F3EEE8` |
| `--c-accent` | `#D29AA5` |
| `--c-accent-ink` | `#E2B3BC` |
| `--c-on-accent` | `#1D1A18` |
| `--c-muted` | `#B9AFA6` |
| `--c-line` | `#3A3430` |
| `--c-card` | `#2C2723` |
| `--c-overlay` | `rgba(10,8,7,.6)` |

### Colores fijos (no cambian con el tema)

| Hex / valor | Uso |
|---|---|
| `#F8F5F0` | Texto y botones claros sobre foto/video (hero, CTA final, captions, lightbox, knob antes/después). |
| `#292522` | Texto de `.btn--light`, fondo de la tarjeta de regalo y de la banda CTA. |
| `#F0CBD1` | Rosa claro: `<em>` en titulares **sobre foto oscura** (hero, CTA) y tagline del overlay de equipo. |
| `#2B2521` | Fondo del hero / posts mientras carga el medio. |
| `#3A302B` | Fondo de la foto del CTA mientras carga. |
| `rgba(20,16,14, α)` | Base de todos los degradados oscuros sobre fotos (α entre .05 y .85). |
| `rgba(15,12,10,.92)` | Fondo del lightbox. |
| `rgba(32,27,24,.88)` | Overlay de bio en tarjetas de equipo. |
| `#F2B880` | Estrellas sobre el hero. |
| `#1F7A4D` | Verde WhatsApp (botón flotante, botón de la barra móvil, estado "agregado" del botón de producto). |
| `#2E8B57` / `#B24A3A` | Punto "abierto" / "cerrado". `#B24A3A` también es borde y texto de error. |
| `#F0A08F` | Texto de error en modo oscuro forzado. |

`theme-color` del navegador: `#F8F5F0` (claro) y `#1D1A18` (oscuro).

### Estados (hover / activo)

- `.btn` (tinta): no cambia de color, solo sube 1 px.
- `.btn--accent`: fondo pasa de `--c-accent` a `--c-accent-ink`.
- `.btn--ghost`: se invierte (fondo `--c-text`, texto `--c-bg`).
- `.btn--ghost-light`: se invierte a fondo `#F8F5F0`, texto `#292522`.
- Chips: el borde pasa de `--c-line` a `--c-text`; seleccionado = fondo `--c-ink`, texto `--c-bg`.
- Links de navegación: aparece un subrayado de 1 px (`border-bottom: currentColor`).
- Links de lista/índice: el color pasa a `--c-accent-ink`.
- Foco (`:focus-visible`): `outline: 3px solid var(--c-accent); outline-offset: 3px`.

---

## 2. Tipografía

### Fuentes e import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
--font-display: "DM Serif Display", Georgia, "Times New Roman", serif;  /* titulares */
--font-body: "Manrope", system-ui, -apple-system, "Segoe UI", sans-serif; /* todo lo demás */
```

DM Serif Display solo existe en peso 400 (normal + itálica). Manrope se carga en 400/500/600/700 (algún título usa 800, que el navegador sintetiza o redondea).

### Escala

| Token | Valor | ≈ px |
|---|---|---|
| `--fs-xs` | `.8125rem` | 13 |
| `--fs-sm` | `.9375rem` | 15 |
| `--fs-md` | `1.0625rem` | 17 (cuerpo) |
| `--fs-lg` | `1.25rem` | 20 |
| `--fs-xl` | `clamp(1.6rem, 1.2rem + 1.6vw, 2.25rem)` | 26 → 36 |
| `--fs-2xl` | `clamp(2.1rem, 1.4rem + 3vw, 3.6rem)` | 34 → 58 |
| `--fs-hero` | `clamp(2.8rem, 1.2rem + 7vw, 7rem)` | 45 → 112 |

### Por nivel

| Elemento | Fuente | Tamaño | Peso | Interlineado | Tracking / otros |
|---|---|---|---|---|---|
| **h1 hero** | Display | `--fs-hero` | 400 | `.98` | `-.02em`, `max-width: 13ch` |
| **h1 páginas internas** | Display | `--fs-2xl` | 400 | `1.08` | `-.01em` |
| **h2 de sección** (`.h2`) | Display | `--fs-2xl` | 400 | `1.08` | `-.01em`, `text-wrap: balance` |
| h2 CTA final | Display | `--fs-2xl` | 400 | `1.08` | `max-width: 16ch` |
| h2 sobre foto (split) | Display | `--fs-xl` | 400 | `1.08` | — |
| h2 bloque "espacio" | Body | `clamp(2rem, 1.4rem + 2vw, 2.9rem)` | 500 | `1.08` | `-.01em` (variante sans) |
| **h3 tarjeta de servicio** | Display | `1.6rem` móvil / `1.9rem` ≥700px | 400 | `1.08` | — |
| h3 equipo | Display | `1.35rem` | 400 | `1.08` | — |
| h3 reseña | Body | `1.3rem` | 500 | `1.3` | — |
| h3 producto / grupo de lista | Body | `--fs-md` / `1.2rem` | 600 | `1.35` | — |
| h3 columnas del footer | Body | `--fs-xs` | 700 | — | `.14em`, MAYÚSCULAS, color `--c-muted` |
| **Párrafo** (body) | Body | `--fs-md` | 400 | `1.65` | `margin: 0 0 1rem` |
| Lead (`.lead`) | Body | `--fs-lg` | 400 | `1.65` | `--c-muted`, `max-width: 56ch` |
| Eyebrow (`.eyebrow`) | Body | `--fs-xs` | 600 | — | `.16em`, MAYÚSCULAS, `--c-accent-ink`, con línea de 28×1 px antes |
| Kicker del hero | Body | `--fs-xs` | 600 | — | `.24em`, MAYÚSCULAS |
| **Botones** | Body | `--fs-sm` | 500 | — | `.02em` |
| Chips | Body | `--fs-sm` | 600 | — | — |
| Nav | Body | `--fs-sm` | 500 | — | — |
| Menú móvil (links) | Display | `2rem` | 400 | — | — |
| Cifras grandes (ratings, años) | Display | `clamp(3.2rem…4.6rem)` / `clamp(4rem…6.5rem)` | 400 | `.8–.85` | — |
| Título de post social | Body | `clamp(2rem, .9rem + 2.3vw, 3.4rem)` | 800 | `.92` | MAYÚSCULAS, `-.01em` |

Reglas generales:

- Todos los `h1–h4` son Display 400, `line-height: 1.08`, `letter-spacing: -.01em`, `text-wrap: balance`, `margin: 0`.
- **Firma tipográfica:** dentro de cada titular, una frase en `<em>` (itálica) con color `--c-accent-ink` (o `#F0CBD1` sobre fotos).
- Números en precios, horarios y contadores: `font-variant-numeric: tabular-nums`.
- `-webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility`.
- Inputs con `font-size: 16px` (evita el zoom en iOS).

---

## 3. Espaciado

### Escala

```css
--sp-1: .25rem;  /*  4px */
--sp-2: .5rem;   /*  8px */
--sp-3: .75rem;  /* 12px */
--sp-4: 1rem;    /* 16px */
--sp-5: 1.5rem;  /* 24px */
--sp-6: 2rem;    /* 32px */
--sp-7: 3rem;    /* 48px */
--sp-8: 4.5rem;  /* 72px */
--sp-9: 7rem;    /* 112px */
```

### Contenedores

| Uso | Regla |
|---|---|
| Contenedor estándar | `.container { width: min(100% - 2.5rem, 1240px); margin-inline: auto }` → gutter de 20 px por lado en móvil |
| Contenedor ancho (header, hero, bloque "espacio") | `width: min(100% - 2.5rem, 1400px)` |
| Header | `--header-h: 68px` |

### Secciones

| Elemento | Padding |
|---|---|
| `.section` | `padding-block: 4.5rem` (móvil) → `7rem` (≥900px) |
| Banda de color | `padding-block: 2rem` |
| CTA final | `padding-block: 7rem` |
| Encabezado de página interna | `padding-block: 4.5rem 2rem` |
| Footer | `padding-block: 4.5rem 2rem` |
| Encabezado de sección → contenido | `margin-bottom: 3rem` |
| Bloque "ver más" bajo un grid | `margin-top: 4.5rem` |

### Gaps habituales

- Grids de tarjetas: `1rem` móvil → `1.5rem` desktop.
- Galería: `8px` (muy apretada, estilo mosaico).
- Grid social: `6px` con `padding-inline: 6px` (casi a sangre).
- Fotos a sangre en par: `12px` móvil → `24px` desktop.
- Encabezado partido (título + lead): `3rem` entre columnas.
- Grupo de botones (`.btn-row`, CTAs del hero): `12px`.
- Anchos de lectura: `56ch` (lead), `52ch`, `46ch`, `34ch`; titulares `13ch`–`22ch`.

---

## 4. Componentes

> En el HTML los textos son marcadores; reemplázalos por los tuyos.

### 4.1 Botones

```html
<a class="btn" href="#">Primario (tinta)</a>
<a class="btn btn--accent" href="#">Acción principal</a>
<a class="btn btn--ghost" href="#">Secundario</a>
<!-- Sobre fotos oscuras -->
<a class="btn btn--light" href="#">Primario claro</a>
<a class="btn btn--ghost-light" href="#">Secundario claro</a>
<!-- Link de texto -->
<a class="link" href="#">Ver más →</a>
```

```css
.btn{
  --_bg:var(--c-ink);--_fg:var(--c-bg);
  display:inline-flex;align-items:center;justify-content:center;gap:.6em;
  min-height:50px;padding:0 1.6em;border-radius:var(--radius-pill);border:1px solid transparent;
  background:var(--_bg);color:var(--_fg);font-weight:500;font-size:var(--fs-sm);letter-spacing:.02em;
  text-decoration:none;cursor:pointer;touch-action:manipulation;
  transition:background var(--dur-fast) var(--ease-out),color var(--dur-fast),border-color var(--dur-fast),transform var(--dur-fast);
}
.btn:hover{transform:translateY(-1px)}
.btn:active{transform:translateY(0) scale(.98)}
.btn--accent{--_bg:var(--c-accent);--_fg:var(--c-on-accent)}
.btn--accent:hover{--_bg:var(--c-accent-ink)}
.btn--ghost{--_bg:transparent;--_fg:var(--c-text);border-color:currentColor}
.btn--ghost:hover{--_bg:var(--c-text);--_fg:var(--c-bg)}
.btn--light{--_bg:#F8F5F0;--_fg:#292522}
.btn--ghost-light{--_bg:transparent;--_fg:#F8F5F0;border-color:rgba(248,245,240,.7)}
.btn--ghost-light:hover{--_bg:#F8F5F0;--_fg:#292522}
.btn svg{width:18px;height:18px;flex:none}

.link{
  display:inline-flex;align-items:center;gap:.4em;font-weight:600;color:var(--c-accent-ink);
  text-decoration:underline;text-underline-offset:.25em;text-decoration-thickness:1px;
}
.link:hover{text-decoration-thickness:2px}
```

Patrón clave: cada variante solo redefine `--_bg` / `--_fg`. Altura mínima 50 px (táctil). Esquinas de 2 px (casi rectas).

**Botón de ícono** (header, cerrar, flechas): círculo de 44×44, transparente, al hover muestra borde `currentColor`.

```css
.icon-btn{position:relative;display:inline-grid;place-items:center;width:44px;height:44px;border-radius:50%;
  background:transparent;border:1px solid transparent;cursor:pointer;color:inherit;
  transition:background var(--dur-fast),border-color var(--dur-fast)}
.icon-btn:hover{border-color:currentColor}
.icon-btn svg{width:20px;height:20px}
```

**Chip / filtro:**

```css
.chip{min-height:44px;padding:0 1.2em;border-radius:var(--radius-pill);border:1px solid var(--c-line);background:transparent;
  font-weight:600;font-size:var(--fs-sm);cursor:pointer;transition:all var(--dur-fast)}
.chip:hover{border-color:var(--c-text)}
.chip[aria-selected="true"],.chip[aria-pressed="true"]{background:var(--c-ink);color:var(--c-bg);border-color:var(--c-ink)}
```

Íconos: SVG inline de trazo, `viewBox="0 0 24 24"`, `fill="none" stroke="currentColor" stroke-width="1.6"`.

### 4.2 Encabezado de sección (patrón repetido)

```html
<section class="section [section--alt]">
  <div class="container">
    <div class="section-head section-head--split">
      <div>
        <p class="eyebrow">Etiqueta</p>
        <h2 class="h2">Titular de sección, <em>con frase de acento</em></h2>
      </div>
      <p class="lead">Texto de apoyo breve.</p>
    </div>
    <!-- contenido -->
  </div>
</section>
```

```css
.section-head{display:grid;gap:var(--sp-4);margin-bottom:var(--sp-7)}
@media (min-width:900px){ .section-head--split{grid-template-columns:1.1fr .9fr;align-items:end;gap:var(--sp-7)} }
.eyebrow{display:inline-flex;align-items:center;gap:var(--sp-3);font-size:var(--fs-xs);font-weight:600;
  letter-spacing:.16em;text-transform:uppercase;color:var(--c-accent-ink);margin-bottom:var(--sp-4)}
.eyebrow::before{content:"";width:28px;height:1px;background:currentColor}
```

### 4.3 Tarjetas de servicios

Tarjeta sin borde ni sombra: foto 4:5 + cuerpo. En móvil es **horizontal** (foto 40 % a la izquierda); desde 700 px es **vertical** en grid de 3.

```html
<div class="svc-cards">
  <a class="svc-card reveal" href="#">
    <div class="ph"><img src="…" alt="…" loading="lazy"></div>
    <div class="svc-card__body">
      <h3>Categoría</h3>
      <p>Subservicio · Subservicio · Subservicio</p>
      <span class="link">Ver más →</span>
    </div>
  </a>
  …
</div>
```

```css
.svc-cards{display:grid;gap:var(--sp-4)}
@media (min-width:700px){ .svc-cards{grid-template-columns:repeat(3,1fr);gap:var(--sp-5)} }
.svc-card{display:grid;grid-template-columns:40% 1fr;gap:var(--sp-4);align-items:center;text-decoration:none;color:inherit;background:var(--c-bg)}
.svc-card .ph{aspect-ratio:4/5}
.svc-card img{transition:transform 1s var(--ease-out)}
.svc-card:hover img{transform:scale(1.04)}
.svc-card__body{padding:var(--sp-4) var(--sp-4) var(--sp-4) 0}
.svc-card h3{font-size:1.6rem;margin-bottom:var(--sp-2)}
.svc-card p{font-size:var(--fs-sm);color:var(--c-muted);margin-bottom:var(--sp-3)}
@media (min-width:700px){
  .svc-card{grid-template-columns:1fr;gap:0;align-items:start;align-content:start}
  .svc-card__body{padding:var(--sp-5)}
  .svc-card h3{font-size:1.9rem}
}
```

Se colocan sobre `.section--alt` (superficie) para que el fondo `--c-bg` de la tarjeta las despegue sin sombra.

**Lista de precios** (página de servicios): filas con línea punteada, nombre / duración / precio alineados a la derecha.

```css
.svc-rows li{display:grid;grid-template-columns:1fr auto auto;gap:var(--sp-4);align-items:baseline;
  padding:var(--sp-3) 0;border-top:1px dotted var(--c-line);font-size:var(--fs-md)}
.svc-rows__dur{font-size:var(--fs-sm);color:var(--c-muted);white-space:nowrap}
.svc-rows__price{font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap;min-width:9ch;text-align:right}
```

Cabecera de categoría: foto 5:2 (2:1 en móvil) con título Display superpuesto sobre `linear-gradient(transparent, rgba(20,16,14,.7))`.

**Tarjeta de producto:** foto 4:5 sobre `--c-card`, marca en eyebrow gris (xs, 700, `.12em`, mayúsculas), h3 sans 600, descripción muted, pie flex con precio (700, tabular) + `.btn--ghost` compacto (`min-height:44px; font-size: xs`). Grid 2 → 3 (≥800) → 4 (≥1180).

### 4.4 Navbar (header)

Header fijo de 68 px con grid de **3 columnas: nav izquierda · logo centrado · acciones derecha**. Sobre el hero es transparente con texto claro; al pasar ~60 % del alto de la ventana se vuelve sólido (`.is-solid`). En páginas internas es sólido desde el inicio.

```html
<header class="header" id="header">
  <div class="header__inner">
    <a class="brand" href="/"><img src="logo.png" alt="…"></a>
    <nav class="nav"><ul><li><a href="#">Link</a></li>…</ul></nav>
    <div class="header__actions">
      <button class="icon-btn" id="themeBtn">…</button>
      <button class="icon-btn">…<span class="cart-count">0</span></button>
      <a class="btn btn-book" href="#">Acción principal</a>
      <button class="icon-btn menu-btn">…</button>
    </div>
  </div>
</header>
```

```css
.header{position:fixed;inset:0 0 auto 0;z-index:var(--z-header);height:var(--header-h);
  display:flex;align-items:center;color:#F8F5F0;
  transition:background var(--dur-med),color var(--dur-med),box-shadow var(--dur-med)}
.header.is-solid{background:color-mix(in srgb, var(--c-bg) 92%, transparent);color:var(--c-text);
  box-shadow:0 1px 0 var(--c-line);backdrop-filter:saturate(1.2) blur(10px);-webkit-backdrop-filter:saturate(1.2) blur(10px)}
.header__inner{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:var(--sp-4);width:min(100% - 2.5rem, 1400px);margin-inline:auto}
.brand{display:flex;flex-direction:column;align-items:center;line-height:1;text-decoration:none;grid-column:2}
.brand img{height:44px;width:auto}                 /* 34px <420px · 56px ≥1080px */
.nav{display:none;grid-column:1;grid-row:1}
.nav ul{display:flex;gap:var(--sp-5);flex-wrap:nowrap;list-style:none;margin:0;padding:0}
.nav a{font-size:var(--fs-sm);font-weight:500;text-decoration:none;padding:var(--sp-2) 0;border-bottom:1px solid transparent}
.nav a:hover,.nav a[aria-current="page"]{border-color:currentColor}
.header__actions{display:flex;align-items:center;justify-content:flex-end;gap:var(--sp-2);grid-column:3;grid-row:1}
/* El CTA del header NO es un botón relleno: es texto subrayado */
.header .btn-book{display:none;min-height:auto;padding:var(--sp-2) 0;background:none;color:inherit;border:0;border-bottom:1px solid currentColor;border-radius:0}
.header .btn-book:hover{transform:none;opacity:.75}
.cart-count{position:absolute;top:2px;right:0;min-width:18px;height:18px;padding:0 5px;border-radius:999px;
  background:var(--c-accent);color:var(--c-on-accent);font-size:11px;font-weight:700;line-height:18px;text-align:center}
@media (min-width:1080px){ .nav{display:block} .header .btn-book{display:inline-flex} .menu-btn{display:none} #themeBtn{display:inline-grid} }
```

Se usan tres versiones del logo: normal, clara (sobre hero transparente) y para modo oscuro, alternadas con `display`.

```js
const onScroll = () => header.classList.toggle("is-solid", window.scrollY > window.innerHeight * 0.6 - 80);
```

**Menú móvil** (< 1080 px): panel a pantalla completa que baja desde arriba; links en Display 2rem separados por líneas; pie con botones apilados.

```css
.mnav{position:fixed;inset:0;z-index:var(--z-drawer);background:var(--c-bg);color:var(--c-text);
  display:flex;flex-direction:column;padding:var(--sp-5) 1.25rem;
  transform:translateY(-100%);visibility:hidden;transition:transform var(--dur-med) var(--ease-out),visibility 0s var(--dur-med)}
.mnav.is-open{transform:none;visibility:visible;transition:transform var(--dur-med) var(--ease-out)}
.mnav ul{list-style:none;margin:var(--sp-7) 0 0;padding:0}
.mnav li a{display:block;font-family:var(--font-display);font-size:2rem;padding:var(--sp-2) 0;text-decoration:none;border-bottom:1px solid var(--c-line)}
.mnav a[aria-current="page"]{color:var(--c-accent-ink)}
.mnav__foot{margin-top:auto;display:grid;gap:var(--sp-3)}
```

**Barra fija inferior móvil** (< 900 px): CTA principal siempre visible + botón cuadrado de mensajería. El `body` lleva `padding-bottom:76px` para no tapar contenido.

```css
.mbar{position:fixed;inset:auto 0 0 0;z-index:var(--z-bar);display:grid;grid-template-columns:1fr auto;gap:var(--sp-2);
  padding:var(--sp-3) 1.25rem calc(var(--sp-3) + env(safe-area-inset-bottom));
  background:color-mix(in srgb, var(--c-bg) 94%, transparent);backdrop-filter:blur(10px);border-top:1px solid var(--c-line)}
.mbar .btn--wa{width:50px;padding:0;background:#1F7A4D;color:#fff}
@media (min-width:900px){ .mbar{display:none} }
```

En desktop se reemplaza por un botón flotante circular de 56 px (`right/bottom: 24px`, `--shadow-2`, hover `scale(1.06)`).

### 4.5 Footer

Fondo `--c-surface`, texto `--fs-sm`. Grid de 4 columnas (2fr 1fr 1fr 1fr) con logo + descripción y tres listas. Debajo, el **wordmark gigante** a todo el ancho (letras SVG distribuidas con `justify-content: space-between`) y una barra inferior con línea superior.

```html
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div><span class="brand"><img …></span><p class="muted" style="margin-top:var(--sp-4);max-width:36ch">…</p></div>
      <div><h3>Columna</h3><ul><li><a href="#">Link</a></li>…</ul></div>
      <div>…</div><div>…</div>
    </div>
    <div class="footer__mark" aria-hidden="true"><svg>…</svg><svg>…</svg>…</div>
    <div class="footer__bottom"><span>© Año Marca</span><button class="text-btn">…</button></div>
  </div>
</footer>
```

```css
.footer{background:var(--c-surface);padding-block:var(--sp-8) var(--sp-6);font-size:var(--fs-sm)}
.footer__grid{display:grid;gap:var(--sp-6)}
@media (min-width:800px){ .footer__grid{grid-template-columns:2fr 1fr 1fr 1fr} }
.footer .brand{align-items:flex-start}
.footer .brand img{height:56px}
.footer h3{font-family:var(--font-body);font-size:var(--fs-xs);font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:var(--sp-3);color:var(--c-muted)}
.footer ul{list-style:none;margin:0;padding:0;display:grid;gap:var(--sp-2)}
.footer a{text-decoration:none}
.footer a:hover{text-decoration:underline}
.footer__mark{display:flex;justify-content:space-between;align-items:flex-end;margin-top:var(--sp-8);color:var(--c-text);user-select:none}
.footer__mark svg{height:clamp(3.2rem, 14vw, 13.5rem);width:auto;display:block}
.footer__bottom{display:flex;flex-wrap:wrap;justify-content:space-between;gap:var(--sp-4);margin-top:var(--sp-7);padding-top:var(--sp-5);border-top:1px solid var(--c-line);color:var(--c-muted)}
```

### 4.6 Galería

Mosaico editorial asimétrico con `grid-auto-flow: dense`. Cada ítem es un `<button>` que abre un lightbox. Modificadores de tamaño: `.g-tall` (2 filas), `.g-wide` (2 columnas), `.g-big` (2×2). Caption con degradado que aparece al hover (siempre visible en táctil).

```html
<div class="gallery">
  <button class="g-item g-big reveal" type="button" data-cat="cat">
    <div class="ph"><img src="…" alt="…" loading="lazy"></div>
    <figcaption>Descripción breve</figcaption>
  </button>
  …
</div>
```

```css
.gallery{display:grid;gap:var(--sp-2);grid-template-columns:repeat(2,1fr);grid-auto-flow:dense;grid-auto-rows:minmax(140px, 22vw)}
@media (min-width:700px){ .gallery{grid-template-columns:repeat(4,1fr);grid-auto-rows:minmax(160px, 15vw)} }
@media (min-width:1240px){ .gallery{grid-template-columns:repeat(6,1fr);grid-auto-rows:150px} }
.g-item{position:relative;border-radius:var(--radius-m);overflow:hidden;cursor:zoom-in;border:0;padding:0;background:var(--c-surface)}
.g-item .ph{position:absolute;inset:0}
.g-item img{transition:transform 900ms var(--ease-out)}
.g-item:hover img{transform:scale(1.04)}
.g-item figcaption{position:absolute;left:0;right:0;bottom:0;padding:var(--sp-6) var(--sp-3) var(--sp-3);
  background:linear-gradient(transparent, rgba(20,16,14,.72));color:#F8F5F0;font-size:var(--fs-xs);font-weight:600;letter-spacing:.04em;
  text-align:left;opacity:0;transform:translateY(6px);transition:all var(--dur-med) var(--ease-out)}
.g-item:hover figcaption,.g-item:focus-visible figcaption{opacity:1;transform:none}
@media (hover:none){ .g-item figcaption{opacity:1;transform:none} }
.g-tall{grid-row:span 2} .g-wide{grid-column:span 2} .g-big{grid-column:span 2;grid-row:span 2}
```

**Variante vista previa** (portada, `data-preview`): grid uniforme 2 → 3 columnas de fotos 4:5, con la columna central desplazada `translateY(2rem)` para un ritmo escalonado:

```css
.gallery[data-preview]{grid-template-columns:repeat(2,1fr);grid-auto-rows:auto}
.gallery[data-preview] .g-item{aspect-ratio:4/5;grid-column:auto;grid-row:auto}
@media (min-width:900px){ .gallery[data-preview]{grid-template-columns:repeat(3,1fr)}
  .gallery[data-preview] .g-item:nth-child(3n+2){transform:translateY(var(--sp-6))} }
```

**Lightbox:** fondo `rgba(15,12,10,.92)`, imagen `max-height:82vh; max-width:min(92vw,1100px)`, botones de ícono claros (cerrar arriba-derecha, flechas centradas a los lados), fundido de opacidad 320 ms.

**Antes / después** (componente relacionado): marco 4:5 (4:3 en los secundarios), foto "después" recortada con `clip-path: inset(0 0 0 var(--pos))`, línea vertical de 2 px `#F8F5F0`, perilla circular de 48 px con `--shadow-2`, etiquetas en píldora `rgba(20,16,14,.6)` y un `<input type="range">` invisible encima que actualiza `--pos`. Layout ≥900 px: `1.25fr 1fr`, el primero ocupa 2 filas.

**Fotos a sangre en par** (`.split`): dos fotos 4:5 (≥1000 px: altura `min(92vh, 980px)`) con caption sobre degradado, título Display `--fs-xl` y un enlace subrayado; zoom lento `scale(1.03)` en 1.2 s.

### 4.7 Testimonios (reseñas)

Encabezado partido: titular a la izquierda, puntuación grande en Display + estrellas + link a la derecha. Debajo, **carrusel con scroll-snap nativo**: 86 % de ancho en móvil (se asoma la siguiente), 2 columnas ≥700 px, 3 columnas ≥1080 px. Flechas circulares que se ocultan al llegar a los extremos.

```html
<div class="rev-head">
  <div><p class="eyebrow">…</p><h2 class="h2">… <em>…</em></h2></div>
  <div class="rev-score"><span class="rev-score__num">X,X</span><div><span class="stars">★★★★★</span><a class="link">N reseñas</a></div></div>
</div>
<div class="carousel" role="region" aria-roledescription="carrusel">
  <ul class="carousel__track" tabindex="0">
    <li class="review">
      <div class="review__top"><b>Nombre</b><time>Fecha</time></div>
      <span class="stars" role="img" aria-label="5 de 5">…</span>
      <h3>Título de la reseña</h3>
      <p class="review__text">Texto…</p>
      <button class="review__more" hidden>Leer más</button>
      <div class="review__foot"><span>Servicio</span></div>
    </li>
  </ul>
  <button class="carousel__btn carousel__btn--prev">‹</button>
  <button class="carousel__btn carousel__btn--next">›</button>
</div>
```

```css
.rev-head{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:var(--sp-5);margin-bottom:var(--sp-7)}
.rev-score{display:flex;align-items:center;gap:var(--sp-4)}
.rev-score__num{font-family:var(--font-display);font-size:clamp(3.2rem, 2.4rem + 2.5vw, 4.6rem);line-height:.85}
.rev-score .stars{color:var(--c-accent);display:flex;margin-bottom:var(--sp-1)}

.carousel{position:relative}
.carousel__track{list-style:none;margin:0;padding:0 0 var(--sp-2);display:grid;grid-auto-flow:column;column-gap:var(--sp-4);
  grid-auto-columns:86%;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;overscroll-behavior-x:contain;scrollbar-width:none}
.carousel__track::-webkit-scrollbar{display:none}
@media (min-width:700px){ .carousel__track{grid-auto-columns:calc((100% - var(--sp-4)) / 2)} }
@media (min-width:1080px){ .carousel__track{grid-auto-columns:calc((100% - 2 * var(--sp-5)) / 3);column-gap:var(--sp-5)} }
.carousel__btn{position:absolute;top:50%;z-index:2;width:44px;height:44px;margin-top:-22px;border-radius:50%;display:grid;place-items:center;
  background:var(--c-bg);color:var(--c-text);border:1px solid var(--c-line);box-shadow:var(--shadow-1);cursor:pointer;
  transition:opacity var(--dur-fast),transform var(--dur-fast)}
.carousel__btn:hover{transform:scale(1.06)}
.carousel__btn:disabled{opacity:0;pointer-events:none}
.carousel__btn--prev{left:-10px} .carousel__btn--next{right:-10px}
@media (min-width:1240px){ .carousel__btn--prev{left:-22px} .carousel__btn--next{right:-22px} }

.review{scroll-snap-align:start;display:flex;flex-direction:column;min-height:300px;padding:var(--sp-6);background:var(--c-bg);border:1px solid var(--c-line)}
.review__top{display:flex;justify-content:space-between;gap:var(--sp-3);font-size:var(--fs-sm);margin-bottom:var(--sp-3)}
.review__top time{color:var(--c-muted);font-variant-numeric:tabular-nums}
.review .stars{color:var(--c-accent);display:flex;gap:2px;margin-bottom:var(--sp-4)}
.review h3{font-family:var(--font-body);font-weight:500;font-size:1.3rem;line-height:1.3;margin-bottom:var(--sp-3)}
.review__text{font-size:var(--fs-md);line-height:1.6;margin:0;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}
.review.is-open .review__text{-webkit-line-clamp:unset;display:block}
.review__more{align-self:flex-start;background:none;border:0;padding:var(--sp-1) 0;margin-top:var(--sp-1);cursor:pointer;color:var(--c-accent-ink);font-weight:600;font-size:var(--fs-sm)}
.review__foot{margin-top:auto;padding-top:var(--sp-5);display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:var(--sp-2);font-size:var(--fs-sm);color:var(--c-muted)}
```

Estrella SVG (`viewBox="0 0 20 20"`, `fill="currentColor"`): `M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 15l-5.2 2.7 1-5.9L1.5 7.7l5.9-.8z`.

Las flechas avanzan exactamente una tarjeta (`ancho de tarjeta + column-gap`) con `scrollBy({behavior:"smooth"})`.

### 4.8 CTA de reserva y formulario

**Banda CTA final** — foto a sangre con degradado horizontal oscuro, titular Display a la izquierda, botones claros:

```html
<section class="cta-band">
  <div class="ph"><img src="…" alt=""></div>
  <div class="container">
    <h2 class="reveal">Titular de cierre <em>con acento.</em></h2>
    <p class="reveal" data-delay="1" style="max-width:46ch;opacity:.9">Texto de apoyo.</p>
    <div class="btn-row reveal" data-delay="2">
      <a class="btn btn--light" href="#">Acción principal</a>
      <a class="btn btn--ghost-light" href="#">Acción secundaria</a>
    </div>
  </div>
</section>
```

```css
.cta-band{position:relative;color:#F8F5F0;isolation:isolate;overflow:hidden;background:#292522}
.cta-band .ph{position:absolute;inset:0;z-index:-2;background:#3A302B}
.cta-band::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg, rgba(20,16,14,.85), rgba(20,16,14,.35))}
.cta-band .container{padding-block:var(--sp-9);display:grid;gap:var(--sp-5);justify-items:start}
.cta-band h2{font-size:var(--fs-2xl);max-width:16ch}
.cta-band h2 em{color:#F0CBD1}
.btn-row{display:flex;flex-wrap:wrap;gap:var(--sp-3)}
```

**Banda de acento** (aviso promocional delgado): fondo `--c-accent`, texto `--c-on-accent`, flex con texto + link subrayado, `padding-block: 2rem`.

**Modal de reserva** (todos los botones de reserva abren un iframe del sistema de agenda): scrim `--c-overlay`, panel `min(100%, 980px) × min(88vh, 860px)` sobre `--c-bg` con `--shadow-2`, entra con `translateY(16px) → 0`. Cabecera con título Display 1.5rem + link externo + cerrar. En < 700 px ocupa toda la pantalla (`100dvh`) anclado abajo.

```css
.booking{position:fixed;inset:0;z-index:var(--z-drawer);display:grid;place-items:center;padding:var(--sp-5);background:var(--c-overlay);opacity:0;transition:opacity var(--dur-med)}
.booking.is-open{opacity:1}
.booking__panel{width:min(100%, 980px);height:min(88vh, 860px);background:var(--c-bg);display:flex;flex-direction:column;box-shadow:var(--shadow-2);
  transform:translateY(16px);transition:transform var(--dur-med) var(--ease-out)}
.booking.is-open .booking__panel{transform:none}
.booking__head{display:flex;align-items:center;gap:var(--sp-4);padding:var(--sp-3) var(--sp-3) var(--sp-3) var(--sp-5);border-bottom:1px solid var(--c-line)}
@media (max-width:699px){ .booking{padding:0;place-items:end stretch} .booking__panel{width:100%;height:100dvh;transform:translateY(24px)} }
```

**Formularios:**

```html
<form class="form">
  <fieldset class="field" style="border:0;padding:0;margin:0">
    <legend>Opción</legend>
    <div class="amounts">
      <label><input type="radio" name="x" checked><span>Opción A</span></label>
      <label><input type="radio" name="x"><span>Opción B</span></label>
    </div>
  </fieldset>
  <div class="grid-2">
    <div class="field"><label for="a">Campo *</label><input class="input" id="a" required><span class="err" role="alert"></span></div>
    <div class="field"><label for="b">Campo *</label><input class="input" id="b" required><span class="err" role="alert"></span></div>
  </div>
  <div class="field"><label for="c">Mensaje</label><textarea class="input" id="c"></textarea><small>Ayuda.</small></div>
  <button class="btn btn--accent" type="submit">Enviar</button>
</form>
```

```css
.form{display:grid;gap:var(--sp-4)}
.field{display:grid;gap:var(--sp-2)}
.field label,.field legend{font-size:var(--fs-sm);font-weight:600}
.field small{font-size:var(--fs-xs);color:var(--c-muted)}
.input{width:100%;min-height:48px;padding:.7em 1em;border-radius:var(--radius-m);border:1px solid var(--c-line);background:var(--c-card);
  font-size:16px;transition:border-color var(--dur-fast)}
textarea.input{min-height:96px;resize:vertical}
.input:hover{border-color:var(--c-muted)}
.input:focus-visible{outline:2px solid var(--c-accent);outline-offset:1px;border-color:transparent}
.input[aria-invalid="true"]{border-color:#B24A3A}
.err{color:#B24A3A;font-size:var(--fs-xs);font-weight:600;min-height:1em}
/* Radios como píldoras */
.amounts{display:flex;flex-wrap:wrap;gap:var(--sp-2);border:0;padding:0;margin:0}
.amounts label{position:relative}
.amounts input{position:absolute;opacity:0;inset:0;cursor:pointer}
.amounts span{display:inline-flex;align-items:center;min-height:44px;padding:0 1.1em;border-radius:var(--radius-pill);border:1px solid var(--c-line);
  font-weight:600;font-size:var(--fs-sm);font-variant-numeric:tabular-nums;cursor:pointer;transition:all var(--dur-fast)}
.amounts input:checked + span{background:var(--c-ink);color:var(--c-bg);border-color:var(--c-ink)}
.amounts input:focus-visible + span{outline:3px solid var(--c-accent);outline-offset:2px}
.grid-2{display:grid;gap:var(--sp-4)}
@media (min-width:600px){ .grid-2{grid-template-columns:1fr 1fr} }
```

**Tarjeta de regalo (vista previa en vivo):** proporción 1.6, fondo `#292522`, círculo decorativo `#8A505A` (70 % del ancho, desbordando arriba-derecha, `opacity:.9`), monto en Display grande, mensaje en Display itálica. Layout página: 2 columnas ≥1000 px (tarjeta + formulario).

### 4.9 Otros componentes

- **Placeholder de imagen (`.ph`)**: todo `<img>` va envuelto en `.ph` (`overflow:hidden`, `object-fit:cover`, fondo `color-mix(in srgb, var(--c-surface) 82%, var(--c-ink) 8%)`). Si la imagen falla, JS añade `.is-missing` y se muestra un rayado diagonal sutil con el nombre del archivo.
- **Hero**: `min-height:100svh`, video/foto de fondo, contenido alineado abajo, degradado vertical `rgba(20,16,14,.45) 0% → .05 30% → .15 55% → .78 100%`. Kicker en mayúsculas → h1 gigante → fila con CTAs (`btn--light` + `btn--ghost-light`) a la izquierda y puntuación (número Display 2.25rem + estrellas `#F2B880`) a la derecha. Botón de pausa circular de 44 px (accesibilidad).
- **Sobre nosotros**: grid de 12 columnas ≥900 px: texto en 1–5 (sticky), fotos en 7–12 como collage (una 4:5 grande + una 3:4 chica desplazada `margin-bottom:12%`). Cifra destacada en Display `clamp(4rem…6.5rem)` color `--c-accent-ink`, con línea superior.
- **Equipo**: grid 2 → 4 columnas, foto cuadrada (máx. 260 px); en desktop con hover aparece un overlay oscuro `rgba(32,27,24,.88)` con la bio; en táctil/móvil la bio se despliega debajo y la tarjeta pasa a ocupar toda la fila. Rol en eyebrow (`.6875rem`, 700, `.12em`, mayúsculas, `--c-accent-ink`).
- **Bloque "el espacio"**: `4fr 8fr` ≥1000 px; texto (h2 sans 500) + lista de atributos grandes separados por líneas; foto `min-height:min(78vh, 760px)`. En móvil la foto va primero (`order:-1`).
- **Grid social**: 1 → 3 columnas, gap 6 px, posts 4:5 con degradado inferior y título en Manrope 800 mayúsculas, ícono arriba-derecha, botón de play circular de 56 px para videos.
- **Horarios + mapa**: tabla con filas separadas por líneas, día actual en `--c-accent-ink` 700; indicador "abierto" con punto de 8 px. Mapa ≥380 px de alto con tarjeta flotante (`--c-bg`, `--shadow-2`) abajo.
- **Drawer (carrito)**: panel lateral derecho `min(100%, 440px)`, entra con `translateX(100%) → 0`, cabecera/pie separados con líneas.
- **Toast**: píldora `--c-ink`/`--c-bg` centrada abajo (96 px en móvil, 32 px en desktop), sube 20 px y aparece; se oculta a los 3.2 s.
- **Skip link** y `.sr-only` incluidos por accesibilidad.

---

## 5. Bordes, sombras y radios

```css
--radius-s: 2px; --radius-m: 0px; --radius-l: 2px; --radius-pill: 2px; --radius-round: 999px;
--shadow-1: 0 1px 2px rgba(41,37,34,.06), 0 4px 14px rgba(41,37,34,.06);
--shadow-2: 0 10px 40px rgba(41,37,34,.16);
/* modo oscuro */
--shadow-1: 0 1px 2px rgba(0,0,0,.3), 0 4px 14px rgba(0,0,0,.25);
--shadow-2: 0 10px 40px rgba(0,0,0,.5);
```

- **Radios:** el sistema es deliberadamente **rectangular**. Fotos, galería, inputs y tarjetas: 0 px. Botones, chips y modales: 2 px (aunque el token se llama `pill`). Solo son círculos (`50%` / `999px`) los botones de ícono, flechas, perillas, contador y puntos de estado.
- **Bordes:** siempre 1 px, color `--c-line`. Variantes: `1px dotted var(--c-line)` en listas de precios; `1px solid var(--c-ink)` como regla superior fuerte; `2px` izquierdo `--c-accent` para el ítem activo del índice lateral.
- **Separación de bloques:** se hace con líneas (`border-top/bottom`) y cambios de fondo (`--c-bg` ↔ `--c-surface`), **no con sombras**.
- **Sombras:** `--shadow-1` solo en flechas del carrusel. `--shadow-2` en elementos flotantes: drawer, modal, toast, botón flotante, tarjeta del mapa, perilla antes/después, tarjeta de regalo.
- **Header sólido:** `box-shadow: 0 1px 0 var(--c-line)` (línea, no sombra).
- **Vidrio:** `backdrop-filter: blur(8–10px)` + fondo `color-mix(in srgb, var(--c-bg) 92–94%, transparent)` en header, barra móvil y barra de categorías sticky.

---

## 6. Animaciones y transiciones

### Tokens

```css
--ease-out: cubic-bezier(.22,.61,.36,1);
--dur-fast: 160ms;   /* hovers de botones, chips, inputs */
--dur-med:  320ms;   /* header, menús, drawer, modal, captions, overlays */
--dur-slow: 800ms;   /* revelado al hacer scroll */
```

### Revelado al hacer scroll

Cualquier elemento con `.reveal` aparece subiendo 24 px; `data-delay="1|2|3"` escalona 90 / 180 / 270 ms (en grids generados por JS: `data-delay = índice % 4`).

```css
.reveal{opacity:0;transform:translateY(24px);transition:opacity var(--dur-slow) var(--ease-out),transform var(--dur-slow) var(--ease-out)}
.reveal.is-in{opacity:1;transform:none}
.reveal[data-delay="1"]{transition-delay:90ms}
.reveal[data-delay="2"]{transition-delay:180ms}
.reveal[data-delay="3"]{transition-delay:270ms}
```

```js
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
}), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
document.querySelectorAll(".reveal:not(.is-in)").forEach(el => io.observe(el));
```

### Hover

| Elemento | Efecto |
|---|---|
| Botones | `translateY(-1px)`; al presionar `scale(.98)`; 160 ms |
| Botón flotante / flechas | `scale(1.06)` |
| Fotos en tarjetas de servicio | `scale(1.04)` en **1 s** |
| Fotos de galería | `scale(1.04)` en **900 ms** |
| Fotos a sangre, mapa, posts sociales | `scale(1.03–1.04)` en **1.2 s** |
| Captions de galería | `opacity 0→1` + `translateY(6px)→0`, 320 ms |
| Links | grosor del subrayado 1 → 2 px, o aparición de `border-bottom` |

El zoom de imágenes es siempre **lento** (0.9–1.2 s) con `--ease-out`: transmite calma.

### Otros movimientos

- Header transparente → sólido: transición de fondo/color 320 ms.
- Menú móvil: baja desde `translateY(-100%)`; drawer entra desde `translateX(100%)`; modal sube 16 px; lightbox y scrim con fundido. Patrón para ocultar: `visibility:hidden` con `transition: visibility 0s var(--dur-med)` para que la salida se anime.
- Cambio de pestaña/categoría: `@keyframes svcIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}` en 320 ms.
- Acordeones: ícono "+" rota 45° (320 ms).
- Toast: `translate(-50%, 20px) → translate(-50%, 0)` + fundido.
- Scroll suave global (`html{scroll-behavior:smooth}`) y `scroll-margin-top: calc(var(--header-h) + 12px)` en todo elemento con `id`.
- Videos se reproducen solo cuando están visibles (`IntersectionObserver`, `threshold: .3`).

### Movimiento reducido

```css
@media (prefers-reduced-motion: reduce){
  html{scroll-behavior:auto}
  .reveal{opacity:1;transform:none;transition:none}
  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
```

Además el video del hero no se reproduce solo.

---

## 7. Estructura de secciones (portada, en orden)

1. **Header** fijo, transparente sobre el hero.
2. **Hero** a pantalla completa con video de fondo, kicker, h1 gigante, CTAs claros y puntuación.
3. **Par de fotos a sangre** (dos destacados con caption sobre la foto).
4. **Sobre nosotros** — texto sticky + collage de dos fotos + cifra destacada.
5. **Banda de acento** — aviso promocional delgado en malva.
6. **Servicios** (`section--alt`) — encabezado partido + 3 tarjetas + botón ghost "ver todos".
7. **Trabajos** — encabezado partido + vista previa de galería escalonada + botón ghost.
8. **El espacio** — texto + lista de atributos + foto grande (contenedor ancho).
9. **Equipo** — encabezado partido + grid de perfiles.
10. **Grid social** — 3 posts grandes casi a sangre.
11. **Reseñas** (`section--alt`) — puntuación + carrusel.
12. **Horarios y ubicación** — tabla de horarios, dirección, botones + mapa.
13. **CTA final** — foto a sangre con degradado y botones claros.
14. **Footer** con wordmark gigante.
15. Capas fijas: barra inferior móvil, botón flotante (desktop), menú móvil, drawer, modal de reserva, lightbox, toast.

Ritmo de fondos: `bg → (foto) → bg → acento → surface → bg → bg → bg → (fotos) → surface → bg → (foto) → surface`.

**Páginas internas** (`body.page-sub`): header sólido desde el inicio, `main{padding-top:var(--header-h)}`, cabecera `.page-head` con migas de pan (xs, muted) → eyebrow → h1 `--fs-2xl` con `<em>` → lead. Luego el contenido y, normalmente, el mismo CTA final.

Página de listado largo (servicios): barra de chips sticky bajo el header (solo < 1000 px) + layout `260px 1fr` con índice lateral sticky, buscador y botón de reserva (≥ 1000 px).

---

## 8. Breakpoints y comportamiento responsive

Enfoque **mobile-first** (`min-width`). No hay variables de breakpoint; se usan estos valores:

| Breakpoint | Qué cambia |
|---|---|
| `< 420px` | Logo del header baja a 34 px |
| `< 500px` | Filas de precios: la duración pasa bajo el nombre, el precio queda centrado a la derecha |
| `≥ 600px` | `.grid-2` del formulario pasa a 2 columnas |
| `≥ 700px` | Tarjetas de servicio 3 col. verticales · galería 4 col. · fotos a sangre en par lado a lado · carrusel 2 tarjetas · grid social 3 col. · pilares 2 col. · modal de reserva deja de ser pantalla completa |
| `≥ 800px` | Footer 4 columnas · tienda 3 columnas |
| `≥ 900px` | **Corte principal móvil/desktop:** secciones 72 → 112 px · encabezados partidos en 2 columnas · "nosotros" en grid de 12 con texto sticky · equipo 4 col. con bio en hover · desaparece la barra inferior (y el `padding-bottom` del body) · aparece el botón flotante · galería de vista previa 3 col. escalonada |
| `≥ 1000px` | Fotos a sangre con altura `min(92vh, 980px)` · bloque "espacio", horarios/mapa y tarjeta de regalo en 2 columnas · índice lateral sticky en servicios (desaparece la barra de chips) |
| `≥ 1080px` | **Header completo:** nav visible, CTA de texto, botón de tema, logo 56 px; se oculta el botón de menú · carrusel 3 tarjetas · pilares 4 col. |
| `≥ 1180px` | Tienda 4 columnas |
| `≥ 1240px` | Galería 6 columnas con filas de 150 px · flechas del carrusel salen más del contenedor |

Otras media queries: `(hover: none)` para mostrar captions y desplegar bios bajo la foto; `(prefers-color-scheme: dark)`; `(prefers-reduced-motion: reduce)`.

**En móvil, en resumen:**

- Todo pasa a una columna con gutter de 20 px; las secciones respiran 72 px en vertical.
- El header muestra solo logo centrado + carrito + hamburguesa; la navegación es un panel a pantalla completa con links serif de 2rem.
- La acción principal vive en la **barra fija inferior** (botón ancho + botón de mensajería cuadrado), siempre visible.
- Las tarjetas de servicio se vuelven horizontales (foto 40 % + texto).
- Galería en 2 columnas; captions siempre visibles.
- El carrusel muestra 86 % de tarjeta para insinuar el deslizamiento.
- Las fotos que van al lado del texto en desktop suben arriba (`order:-1`).
- Modales a pantalla completa (`100dvh`); se respetan `env(safe-area-inset-bottom)`.
- Áreas táctiles mínimas de 44 px (botones 50 px).

---

## 9. Variables CSS (copiadas tal cual)

No se usa Tailwind; toda la configuración está en estas variables de `src/styles.css`:

```css
:root{
  /* Paleta base: 70 / 15 / 10 / 5 */
  --c-bg:        #F8F5F0;   /* 70% */
  --c-surface:   #EEE8E0;   /* 15% */
  --c-ink:       #292522;   /* 10% */
  --c-accent:    #8A505A;   /* 5%  malva del logo (botones, acentos) */
  --c-accent-ink:#7A4450;   /* malva para texto sobre claro (AA) */
  --c-on-accent: #FFFFFF;

  --c-text:      var(--c-ink);
  --c-muted:     #615953;
  --c-line:      #DDD4C9;
  --c-card:      #FFFFFF;
  --c-overlay:   rgba(24,20,18,.55);
  --c-sample-bg: #FFF1C9;
  --c-sample-tx: #6B4E00;

  --font-display: "DM Serif Display", Georgia, "Times New Roman", serif;
  --font-body: "Manrope", system-ui, -apple-system, "Segoe UI", sans-serif;

  --fs-xs: .8125rem;
  --fs-sm: .9375rem;
  --fs-md: 1.0625rem;
  --fs-lg: 1.25rem;
  --fs-xl: clamp(1.6rem, 1.2rem + 1.6vw, 2.25rem);
  --fs-2xl: clamp(2.1rem, 1.4rem + 3vw, 3.6rem);
  --fs-hero: clamp(2.8rem, 1.2rem + 7vw, 7rem);

  --sp-1: .25rem; --sp-2: .5rem; --sp-3: .75rem; --sp-4: 1rem;
  --sp-5: 1.5rem; --sp-6: 2rem; --sp-7: 3rem; --sp-8: 4.5rem; --sp-9: 7rem;

  --radius-s: 2px; --radius-m: 0px; --radius-l: 2px; --radius-pill: 2px; --radius-round: 999px;
  --shadow-1: 0 1px 2px rgba(41,37,34,.06), 0 4px 14px rgba(41,37,34,.06);
  --shadow-2: 0 10px 40px rgba(41,37,34,.16);

  --ease-out: cubic-bezier(.22,.61,.36,1);
  --dur-fast: 160ms; --dur-med: 320ms; --dur-slow: 800ms;

  --container: 1240px;
  --header-h: 68px;

  --z-header: 40; --z-bar: 45; --z-drawer: 60; --z-toast: 80;
  color-scheme: light;
}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --c-bg:#1D1A18; --c-surface:#27231F; --c-ink:#F3EEE8;
    --c-accent:#D29AA5; --c-accent-ink:#E2B3BC; --c-on-accent:#1D1A18;
    --c-text:#F3EEE8; --c-muted:#B9AFA6; --c-line:#3A3430; --c-card:#2C2723;
    --c-overlay:rgba(10,8,7,.6); --c-sample-bg:#4A3A10; --c-sample-tx:#FFE29A;
    --shadow-1: 0 1px 2px rgba(0,0,0,.3), 0 4px 14px rgba(0,0,0,.25);
    --shadow-2: 0 10px 40px rgba(0,0,0,.5);
    color-scheme: dark;
  }
}
:root[data-theme="dark"]{
  --c-bg:#1D1A18; --c-surface:#27231F; --c-ink:#F3EEE8;
  --c-accent:#D29AA5; --c-accent-ink:#E2B3BC; --c-on-accent:#1D1A18;
  --c-text:#F3EEE8; --c-muted:#B9AFA6; --c-line:#3A3430; --c-card:#2C2723;
  --c-overlay:rgba(10,8,7,.6); --c-sample-bg:#4A3A10; --c-sample-tx:#FFE29A;
  --shadow-1: 0 1px 2px rgba(0,0,0,.3), 0 4px 14px rgba(0,0,0,.25);
  --shadow-2: 0 10px 40px rgba(0,0,0,.5);
  color-scheme: dark;
}
```

### Base global (copiada tal cual)

```css
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{
  margin:0;background:var(--c-bg);color:var(--c-text);
  font-family:var(--font-body);font-size:var(--fs-md);line-height:1.65;
  -webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;
  padding-bottom:76px; /* barra fija móvil */
}
@media (min-width: 900px){ body{padding-bottom:0} }
img,video{display:block;max-width:100%}
img{height:auto}
a{color:inherit}
button,input,select,textarea{font:inherit;color:inherit}
h1,h2,h3,h4{font-family:var(--font-display);font-weight:400;line-height:1.08;margin:0;letter-spacing:-.01em;text-wrap:balance}
p{margin:0 0 var(--sp-4)}
[id]{scroll-margin-top:calc(var(--header-h) + 12px)}
:focus-visible{outline:3px solid var(--c-accent);outline-offset:3px;border-radius:4px}
.sr-only{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
.skip{position:absolute;left:var(--sp-4);top:-60px;z-index:100;background:var(--c-ink);color:var(--c-bg);padding:var(--sp-3) var(--sp-4);border-radius:var(--radius-s)}
.skip:focus{top:var(--sp-4)}

.container{width:min(100% - 2.5rem, var(--container));margin-inline:auto}
.section{padding-block:var(--sp-8)}
@media (min-width: 900px){ .section{padding-block:var(--sp-9)} }
.section--alt{background:var(--c-surface)}
.h2{font-size:var(--fs-2xl)}
.h2 em{font-style:italic;color:var(--c-accent-ink)}
.lead{font-size:var(--fs-lg);color:var(--c-muted);max-width:56ch}
.muted{color:var(--c-muted)}
```

### Tema (JS mínimo)

```js
const saved = localStorage.getItem("theme");          // "light" | "dark" | null
if (saved) document.documentElement.dataset.theme = saved;
const isDark = () => document.documentElement.dataset.theme
  ? document.documentElement.dataset.theme === "dark"
  : matchMedia("(prefers-color-scheme: dark)").matches;
themeBtn.addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  document.documentElement.dataset.theme = next; localStorage.setItem("theme", next);
});
```

```html
<meta name="theme-color" content="#F8F5F0" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#1D1A18" media="(prefers-color-scheme: dark)">
```

---

## Checklist para replicar

1. Copiar las variables (§9), la base global y el import de fuentes (§2).
2. Usar `.container` + `.section` / `.section--alt` alternando fondos.
3. Cada sección: `eyebrow` → `.h2` con un `<em>` → `lead`, en `.section-head--split`.
4. Botones solo con las 5 variantes de `.btn`; acento malva reservado para la acción principal.
5. Fotos siempre dentro de `.ph` con `object-fit:cover`, esquinas rectas y zoom lento al hover.
6. Texto sobre foto: degradado `rgba(20,16,14,…)` y color `#F8F5F0` con `<em>` en `#F0CBD1`.
7. Separar con líneas de 1 px `--c-line`, no con sombras.
8. Añadir `.reveal` (+ `data-delay`) a los bloques y el `IntersectionObserver` de §6.
9. En móvil: barra fija inferior con la acción principal y menú a pantalla completa.
