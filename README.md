# Dayan Marrero — Tech UGC Portfolio

A responsive, static portfolio website built with HTML, CSS and vanilla JavaScript. No framework, build step, paid service, or API key is required.

## Files

- `index.html` — page content
- `styles.css` — responsive design and styling
- `script.js` — mobile navigation and current year
- `assets/images/` — add your portrait and project cover images here
- `assets/videos/` — optional folder for your own video files (not currently embedded)

## Sección "Best Performing Videos" (Métricas)

La sección de métricas muestra 4 tarjetas (puedes añadir o quitar más copiando el bloque `<article class="metric-card">`).

### Imágenes necesarias
Coloca estas imágenes en `assets/images/`:

- `metric-01.jpg`
- `metric-02.jpg`
- `metric-03.jpg`
- `metric-04.jpg`

Recomendación: capturas de pantalla de Instagram Insights o TikTok Analytics, formato vertical (proporción 9:16). Tamaño recomendado: 1080 × 1920 px.

### URLs de los videos
En `index.html`, dentro de cada `<article class="metric-card">`, busca:

```html
href="URL_DEL_VIDEO_01"