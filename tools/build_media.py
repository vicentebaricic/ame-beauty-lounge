"""Genera las imágenes optimizadas de assets/ a partir de los originales en Media/.

Todas pasan por el mismo grade suave (cálido, rosado, sombras levantadas) para que
se vean como una sola sesión junto a la paleta crema/rosa del sitio.
Uso: python3 tools/build_media.py   (requiere Pillow y numpy; ffmpeg para los cuadros del video)
"""
import os, subprocess, tempfile
import numpy as np
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
M = os.path.join(ROOT, "Media")
A = os.path.join(ROOT, "assets", "img")
VIDEO = os.path.join(M, "7575516-uhd_3840_2160_24fps.mp4")

SRC = {
    "A": "a.jpg",                                      # clienta sonriendo durante el color
    "G": "giorgio-trovato-wSpkThmoZQc-unsplash.jpg",   # ondas con tenaza
    "C": "haircolouring.jpg",                          # coloración con pincel
    "F": "ionela-mat-16mHHrY3PUk-unsplash.jpg",        # facial
    "N": "manicure.jpg",                               # manicure
}

def grade(im):
    """Grade 'Âme': cálido con un toque rosado, suave y luminoso."""
    a = np.asarray(im.convert("RGB")).astype(np.float32) / 255.0
    mean = a.reshape(-1, 3).mean(0)
    a = a * (mean.mean() / mean) ** 0.5                 # balance de blancos parcial
    a = a * np.array([1.04, 0.995, 0.975])              # cálido + rosado
    a = np.clip(a, 0, 1)
    a = a + 0.08 * np.sin(np.pi * a) * (a - 0.5)        # S suave
    a = 0.05 + a * 0.92                                 # fade de negros y blancos
    lum = (a * np.array([0.299, 0.587, 0.114])).sum(2, keepdims=True)
    a = a + (1 - lum) ** 2 * np.array([0.03, 0.01, 0.015])  # sombras ciruela
    a = lum + (a - lum) * 0.84                          # saturación contenida
    return Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8))

_cache = {}
def load(key):
    if key not in _cache:
        if key.startswith("V"):
            f = tempfile.mktemp(suffix=".png")
            subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", key[1:], "-i", VIDEO, "-frames:v", "1", f], check=True)
            _cache[key] = Image.open(f).convert("RGB")
        else:
            _cache[key] = ImageOps.exif_transpose(Image.open(os.path.join(M, SRC[key]))).convert("RGB")
    return _cache[key]

def crop(key, cx, cy, ar, zoom=1.0):
    """Recorte centrado en (cx, cy) (fracciones) con proporción ar = ancho/alto; zoom > 1 acerca."""
    im = load(key); W, H = im.size
    w, h = (H * ar, H) if W / H > ar else (W, W / ar)
    w, h = w / zoom, h / zoom
    x0 = min(max(cx * W - w / 2, 0), W - w); y0 = min(max(cy * H - h / 2, 0), H - h)
    return im.crop((int(x0), int(y0), int(x0 + w), int(y0 + h)))

def save(img, rel, width, graded=True):
    img = img.resize((width, round(width * img.size[1] / img.size[0])), Image.LANCZOS)
    if graded: img = grade(img)
    path = os.path.join(A, rel); os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path, quality=80, method=6)
    print("✓", rel, img.size)

JOBS = [
    # destacados (split) 4:5
    ("V7.5", .55, .5, 4/5, 1.0, "destacado-brushing.webp", 900),
    ("N", .62, .5, 4/5, 1.25, "destacado-manos.webp", 900),
    # nosotros
    ("A", .45, .55, 4/5, 1.0, "nosotros-01.webp", 880),
    ("C", .45, .45, 3/4, 1.3, "nosotros-02.webp", 525),
    # tarjetas de servicios 4:5 y cabeceras 5:2
    ("V2", .42, .5, 4/5, 1.0, "servicios/home-cabello.webp", 800),
    ("N", .55, .45, 4/5, 1.0, "servicios/home-belleza.webp", 800),
    ("F", .62, .45, 4/5, 1.0, "servicios/home-bienestar.webp", 800),
    ("G", .5, .35, 5/2, 1.0, "servicios/cabello-wide.webp", 1600),
    ("N", .55, .4, 5/2, 1.0, "servicios/belleza-wide.webp", 1600),
    ("F", .55, .4, 5/2, 1.0, "servicios/bienestar-wide.webp", 1600),
    # galería 4:5
    ("N", .52, .55, 4/5, 2.0, "galeria/unas-01.webp", 720),
    ("C", .55, .4, 4/5, 1.0, "galeria/color-01.webp", 720),
    ("F", .58, .62, 4/5, 1.05, "galeria/rostro-01.webp", 720),
    ("G", .55, .45, 4/5, 1.0, "galeria/ondas-01.webp", 720),
    ("A", .35, .5, 4/5, 1.5, "galeria/color-02.webp", 720),
    ("V5", .5, .5, 4/5, 1.0, "galeria/brushing-01.webp", 720),
    # CTA final
    ("G", .5, .45, 16/9, 1.0, "espacio/cta.webp", 1600),
]

if __name__ == "__main__":
    for key, cx, cy, ar, z, rel, w in JOBS:
        save(crop(key, cx, cy, ar, z), rel, w)
    # Posts de Instagram (ya diseñados: sin grade)
    for src, dst in [("ig-post-servicios.webp", "instagram/post-01.webp"), ("ig-post-logo.webp", "instagram/post-02.webp"),
                     ("ig-post-experiencia.webp", "instagram/post-03.webp")]:
        if os.path.exists(os.path.join(M, src)):
            im = Image.open(os.path.join(M, src)).convert("RGB"); W, H = im.size
            save(im.crop((8, 8, W - 8, H - 8)), dst, 720, graded=False)   # quita el borde de la captura
