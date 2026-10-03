# Âme Beauty Lounge · Landing

Sitio estático (HTML + CSS + JS vanilla) basado en `STYLE_GUIDE.md`, con paleta pastel.

Reservas: todos los botones "Reservar" abren AgendaPro (`CONFIG.booking` en `src/main.js`).

Ver en local: `python3 -m http.server` y abrir http://localhost:8000

## Pendientes para completar

Lo marcado en la página con la etiqueta amarilla es contenido de ejemplo.

| Qué | Dónde |
|---|---|
| Revisar los 3 servicios de cada categoría (son referenciales; las 16 categorías vienen de AgendaPro) | `index.html`, sección `#servicios` |
| Cargo de cada profesional | `index.html`, sección `#equipo` |
| Fotos del equipo en alta resolución (cuadradas, ≥ 600 px) | `assets/img/team/<nombre-apellido>.jpg` |
| Fotos de trabajos / Instagram | `assets/img/gallery/01.jpg` … `06.jpg` (4:5) |
| Fotos del local | `assets/img/local-1.jpg` (4:5), `assets/img/local-2.jpg` (3:4) |
| URL de Instagram | `src/main.js` → `CONFIG.instagram` |
| Horario real | `src/main.js` → `CONFIG.hours` (y quitar la etiqueta en `#visitanos`) |

Las imágenes que faltan se muestran como un recuadro pastel con el nombre del archivo esperado.

## Publicación (GitHub Pages)

El workflow `.github/workflows/pages.yml` publica el sitio en cada push.
Requiere activar Pages una sola vez: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
