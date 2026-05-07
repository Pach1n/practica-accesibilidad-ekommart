# PU. Análisis de la usabilidad de una web

## URLs evaluadas

- Proyecto RESPONSIVE: https://pach1n.github.io/practica-accesibilidad-ekommart/Proyecto%20RESPONSIVE/
- Proyecto AAA: https://pach1n.github.io/practica-accesibilidad-ekommart/Proyecto_AAA/
- Proyecto USABILIDAD: https://pach1n.github.io/practica-accesibilidad-ekommart/Proyecto_USABILIDAD/

## 1. Resultados iniciales con PageSpeed Insights

Herramienta: https://pagespeed.web.dev/

| Marcador | Proyecto RESPONSIVE móvil | Proyecto RESPONSIVE escritorio | Proyecto AAA móvil | Proyecto AAA escritorio |
| --- | ---: | ---: | ---: | ---: |
| Rendimiento |  |  |  |  |
| Accesibilidad |  |  |  |  |
| Prácticas recomendadas |  |  |  |  |
| SEO |  |  |  |  |

Capturas que hay que adjuntar:

- PageSpeed móvil de Proyecto RESPONSIVE.
- PageSpeed escritorio de Proyecto RESPONSIVE.
- PageSpeed móvil de Proyecto AAA.
- PageSpeed escritorio de Proyecto AAA.

## 2. Modificaciones aplicadas para Proyecto_USABILIDAD

El proyecto se ha creado a partir de `Proyecto_AAA` y se ha optimizado pensando en los avisos habituales de PageSpeed Insights:

- Se eliminó la dependencia externa de Google Fonts y se sustituyó por una pila de fuentes del sistema.
- Se añadió `meta description` y `theme-color` para mejorar SEO y buenas prácticas.
- Se añadió favicon local para evitar errores 404 en navegador.
- Se añadió `preload` de la imagen principal de la portada.
- Se añadieron dimensiones `width` y `height` a imágenes para reducir cambios de diseño.
- Se añadieron `loading="lazy"` y `decoding="async"` en imágenes no críticas.
- El vídeo local pasó a `preload="none"` para no cargar datos innecesarios al inicio.
- El iframe de YouTube se sustituyó por un bloque ligero que solo carga el iframe cuando el usuario pulsa el botón.
- El JavaScript se movió a `static/js/main.js` y se carga con `defer`.
- Se añadió `content-visibility` en secciones inferiores para reducir trabajo de renderizado inicial.
- Se mantuvieron las correcciones de accesibilidad de `Proyecto_AAA`.

Comprobaciones locales realizadas:

- `html-validate` en `Proyecto_USABILIDAD/index.html`: sin errores.
- `axe-core` en `Proyecto_USABILIDAD/index.html`: 0 violaciones.
- Lighthouse local aproximado: rendimiento 96, accesibilidad 100, SEO 100. La categoría de buenas prácticas baja en local por no usar HTTPS; en GitHub Pages se sirve con HTTPS.

## 3. Resultados finales con PageSpeed Insights

| Marcador | Proyecto USABILIDAD móvil | Proyecto USABILIDAD escritorio |
| --- | ---: | ---: |
| Rendimiento |  |  |
| Accesibilidad |  |  |
| Prácticas recomendadas |  |  |
| SEO |  |  |

Capturas que hay que adjuntar:

- PageSpeed móvil de Proyecto USABILIDAD.
- PageSpeed escritorio de Proyecto USABILIDAD.
