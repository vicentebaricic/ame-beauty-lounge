# Âme Beauty Lounge · Sitio web

Sitio estático con la misma estructura que el de Glanz: portada + página de servicios,
generadas desde `src/` y publicadas en GitHub Pages.

- Publicado: https://vicentebaricic.github.io/ame-beauty-lounge/
- Reservas: los botones "Reservar" abren AgendaPro dentro de la página (ventana integrada),
  con un enlace "Abrir en AgendaPro ↗" por si la agenda no carga embebida.

## Editar

| Qué | Dónde |
|---|---|
| WhatsApp, AgendaPro, Instagram, horario | `src/app.js` → `CONFIG` |
| Servicios (16 categorías de AgendaPro, en su orden) | `src/app.js` → `SERVICES` |
| Equipo (roles y bios) | `src/app.js` → `TEAM` |
| Galería de trabajos | `src/app.js` → `GALLERY` + fotos en `assets/img/galeria/` |
| Textos de la portada | `src/pages/index.html` |
| Colores y tipografía | `src/styles.css` (tokens al inicio) |

Después de editar, regenerar las páginas: `python3 tools/build_pages.py`
(arma `index.html` y `servicios.html` autocontenidos en la raíz).

Ver en local: `python3 -m http.server` y abrir http://localhost:8000

## Pendientes

Lo marcado con la etiqueta amarilla en la página es contenido de ejemplo
(se puede ocultar con el botón del pie de página).

| Qué | Archivo esperado |
|---|---|
| Fotos del local | `assets/img/nosotros-01.webp` (4:5), `nosotros-02.webp` (3:4), `assets/img/espacio/salon-main.webp` |
| Foto de manos para el destacado | `assets/img/destacado-manos.webp` (4:5) |
| Fotos de los mundos de servicios | `assets/img/servicios/home-belleza.webp`, `home-bienestar.webp` (4:5) y `belleza-wide.webp`, `bienestar-wide.webp` (5:2) |
| Posts de Instagram | `assets/img/instagram/post-01.webp`, `post-03.webp` (4:5) |
| Galería | `assets/img/galeria/*.webp` (nombres en `GALLERY`) |
| Fotos del equipo en buena resolución | `assets/img/team/<nombre-apellido>.jpg` (cuadradas, ≥ 600 px) |
| Imagen del mapa (opcional) | `assets/img/espacio/mapa.webp` |

## Publicación

`.github/workflows/pages.yml` publica en GitHub Pages en cada push.
