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

Fotos: los originales van en `Media/`; `python3 tools/build_media.py` genera los recortes de `assets/img/`.

Después de editar, regenerar las páginas: `python3 tools/build_pages.py`
(arma `index.html` y `servicios.html` autocontenidos en la raíz).

Ver en local: `python3 -m http.server` y abrir http://localhost:8000

## Pendientes

Lo marcado con la etiqueta amarilla en la página es contenido de ejemplo
(se puede ocultar con el botón del pie de página).

| Qué | Archivo esperado |
|---|---|
| Foto real del salón (hoy es de referencia) | `Media/salon.jpg` y luego `python3 tools/build_media.py` |
| Cargos reales del equipo | `src/app.js` → `TEAM` |
| Fotos del equipo en buena resolución | `assets/img/team/<nombre-apellido>.jpg` (cuadradas, ≥ 600 px) |
| Horario real | `src/app.js` → `CONFIG.hours` |

## Publicación

`.github/workflows/pages.yml` publica en GitHub Pages en cada push.
