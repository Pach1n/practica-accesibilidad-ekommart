# Evaluación e implementación de la accesibilidad web

## Parte 1. Preparación del proyecto

Estructura preparada:

- `index.html`: índice de versiones para GitHub Pages.
- `Proyecto RESPONSIVE/`: versión responsive optimizada.
- `Proyecto MULTIMEDIA/`: versión multimedia optimizada.
- `Proyecto_AAA/`: versión final accesible.
- `Proyecto_USABILIDAD/`: carpeta preparada para la entrega de usabilidad.

URL del repositorio: https://github.com/Pach1n/practica-accesibilidad-ekommart

URL de GitHub Pages: https://pach1n.github.io/practica-accesibilidad-ekommart/

## Parte 2. Conceptos WCAG

### a. Qué son las WCAG

Las WCAG, Web Content Accessibility Guidelines, son las pautas internacionales del W3C/WAI para hacer que el contenido web sea accesible para personas con discapacidad y para mejorar el acceso en distintos dispositivos, contextos y tecnologías de apoyo.

### b. Qué son los principios

Los principios son la base de las WCAG. Definen las cuatro condiciones generales que debe cumplir una web accesible: perceptible, operable, comprensible y robusta.

### c. Los 4 principios

- Perceptible: la información debe poder percibirse por diferentes sentidos. Por ejemplo, una imagen necesita texto alternativo y un vídeo necesita subtítulos o descripción.
- Operable: la interfaz debe poder manejarse con teclado, ratón, pantalla táctil o tecnología de apoyo.
- Comprensible: el contenido y el funcionamiento deben ser claros, previsibles y coherentes.
- Robusto: el código debe ser compatible con navegadores, lectores de pantalla y otras tecnologías actuales y futuras.

### d. Qué son las pautas

Las pautas son objetivos generales dentro de cada principio. No son todavía pruebas concretas, sino áreas de accesibilidad que después se verifican mediante criterios de conformidad.

### e. Las 13 pautas

Perceptible:

- 1.1 Alternativas textuales.
- 1.2 Medios basados en el tiempo.
- 1.3 Adaptable.
- 1.4 Distinguible.

Operable:

- 2.1 Accesible por teclado.
- 2.2 Tiempo suficiente.
- 2.3 Convulsiones y reacciones físicas.
- 2.4 Navegable.
- 2.5 Modalidades de entrada.

Comprensible:

- 3.1 Legible.
- 3.2 Previsible.
- 3.3 Ayuda en la entrada de datos.

Robusto:

- 4.1 Compatible.

### f. Qué son los criterios de conformidad

Los criterios de conformidad son requisitos comprobables. Están clasificados en niveles A, AA y AAA.

Ejemplos:

- 1.1.1 Contenido no textual: las imágenes informativas deben tener alternativa textual.
- 2.4.7 Foco visible: el usuario debe poder ver dónde está el foco cuando navega con teclado.

### g. Qué son las técnicas y los errores

Las técnicas son formas recomendadas de cumplir un criterio. Los errores son patrones conocidos que incumplen las WCAG.

Ejemplos de técnicas:

- H37: usar `alt` en imágenes.
- G18: asegurar contraste suficiente entre texto y fondo.

Ejemplos de errores:

- F65: omitir el atributo `alt` en imágenes informativas.
- F30: usar enlaces con texto ambiguo que no permite conocer su destino.

### h. Relación entre principios, pautas, criterios y técnicas

Las WCAG funcionan por capas. Los principios definen la base general. Las pautas organizan cada principio en objetivos. Los criterios de conformidad convierten esos objetivos en requisitos verificables. Las técnicas y errores ayudan a implementar o detectar si esos criterios se cumplen correctamente.

## Parte 2. Informe WCAG-EM

Para generar el informe:

1. Publicar el repositorio en GitHub Pages.
2. Abrir `https://www.w3.org/WAI/eval/report-tool/`.
3. Indicar como sitio evaluado la URL de GitHub Pages.
4. Usar como muestra principal la portada `Proyecto_AAA/index.html`.
5. Seleccionar WCAG 2.2 y nivel AAA.
6. Adjuntar el informe exportado.

## Parte 3. Implementación de accesibilidad

Las correcciones se aplicaron en `Proyecto_AAA`.

| Nivel | Criterio | Problema detectado | Solución aplicada |
| --- | --- | --- | --- |
| A | 1.1.1 Contenido no textual | Había iconos con texto alternativo duplicado y elementos decorativos anunciados por lectores de pantalla. | Los iconos decorativos usan `alt=""` y `aria-hidden="true"`. Las imágenes informativas conservan descripciones útiles. |
| A | 1.2.1 / 1.2.2 Multimedia | Audio y vídeo no tenían alternativa textual suficiente. | Se añadieron transcripción del audio, descripción del vídeo y pista `track` de subtítulos. |
| A | 1.3.1 Información y relaciones | La valoración por estrellas dependía visualmente del color y usaba ARIA incorrecto. | La valoración ahora tiene texto para lector de pantalla y las estrellas son decorativas. |
| A | 2.1.1 Teclado | Había enlaces `href="#"` sin destino real. | Se sustituyeron por botones o enlaces internos con destino real. |
| A | 2.4.1 Evitar bloques | No existía enlace para saltar directamente al contenido principal. | Se añadió `Saltar al contenido principal`. |
| A | 2.4.2 Título de página | El título no describía la finalidad de la página. | Se cambió a `ekommart | Proyecto accesible AAA`. |
| A | 2.4.4 Propósito de enlaces | Había enlaces repetidos como `SHOP NOW`. | Los enlaces de compra ahora describen el producto o sección de destino. |
| A | 3.1.1 Idioma de la página | La página estaba en español pero gran parte de la interfaz estaba en inglés. | Se tradujo la interfaz principal al español. |
| A | 4.1.2 Nombre, función y valor | El botón de menú no comunicaba estado ni relación con el menú. | Se añadieron `aria-controls`, `aria-expanded` y lógica de apertura/cierre. |
| AA | 1.4.3 Contraste mínimo | Varios colores no llegaban a 4.5:1 sobre fondo blanco. | Se oscurecieron colores de texto, precio, enlaces, etiquetas y estados. |
| AA | 1.4.10 Reflow | La versión responsive ya existía, pero se mantuvo la revisión de grids y menús. | El menú se mantiene usable en móvil y el contenido fluye en una columna cuando corresponde. |
| AA | 1.4.11 Contraste no textual | Botones, badges y foco necesitaban contraste más claro. | Se aumentó contraste de bordes, badges y estilos de foco. |
| AA | 2.4.7 Foco visible | No había estilo de foco personalizado suficientemente claro. | Se añadió `:focus-visible` con contorno azul de 3 px. |
| AA | 3.1.2 Idioma de partes | La interfaz mezclaba idiomas. | Se tradujo la interfaz visible y se dejaron nombres propios de producto como nombres comerciales. |
| AAA | 1.4.6 Contraste mejorado | Algunos textos secundarios no llegaban a 7:1. | Se ajustaron colores para cumplir contraste reforzado en texto normal. |
| AAA | 2.4.8 Ubicación | No había indicación clara de ubicación actual. | Se añadió `aria-current="page"` en la navegación principal y un índice de versiones. |
| AAA | 2.4.9 Propósito de enlace | Algunos enlaces solo tenían sentido por contexto visual. | Los textos de enlace se hicieron autosuficientes. |
| AAA | 2.3.3 Animación desde interacciones | La página tenía transiciones y efectos hover. | Se añadió `prefers-reduced-motion: reduce`. |
| AAA | 2.2.3 Sin temporización | No hay temporizadores ni límites de tiempo en la portada. | No requiere cambio de código. |

## Optimización multimedia

- El vídeo local pasó de `294 MB` a `11 MB`, manteniendo formato MP4 y siendo apto para GitHub Pages.
- Se quitó la regla de Git LFS para `*.mp4`, porque GitHub Pages no sirve archivos gestionados por LFS.
- Las imágenes principales se redujeron en peso y, cuando procedía, en dimensiones reales.

Ejemplos:

- `Fruit bowl earrings.png`: de 161 KB a 44 KB.
- `Real simple.jpg`: de 138 KB a 72 KB.
- `Seasons newest arrivals.jpg`: de 115 KB a 59 KB.
