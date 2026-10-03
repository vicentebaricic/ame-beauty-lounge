# Âme Beauty Lounge · Landing

Sitio estático (HTML + CSS + JS vanilla) basado en `STYLE_GUIDE.md`, con paleta pastel.

Ver en local: `python3 -m http.server` y abrir http://localhost:8000

## Pendientes para completar

Lo marcado en la página con la etiqueta amarilla es contenido de ejemplo.

| Qué | Dónde |
|---|---|
| Lista real de servicios | `index.html`, sección `#servicios` (y las opciones del formulario) |
| Cargo de cada profesional | `index.html`, sección `#equipo` |
| Fotos del equipo en alta resolución (cuadradas, ≥ 600 px) | `assets/img/team/<nombre-apellido>.jpg` |
| Fotos de trabajos / Instagram | `assets/img/gallery/01.jpg` … `06.jpg` (4:5) |
| Fotos del local | `assets/img/local-1.jpg` (4:5), `assets/img/local-2.jpg` (3:4) |
| URL de Instagram | `src/main.js` → `CONFIG.instagram` |
| Horario real | `src/main.js` → `CONFIG.hours` (y quitar la etiqueta en `#visitanos`) |

Las imágenes que faltan se muestran como un recuadro pastel con el nombre del archivo esperado.
