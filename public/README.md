# Society . E X E — Kit de Marca v1.0

## Concepto

El isotipo es una **"S."** — la inicial de *Society* seguida del punto que ya usan en su propia
convención tipográfica (**"Society . E X E"**). Es minimalista, funciona a cualquier tamaño
(incluido favicon de 16px) y el punto en color de acento funciona como guiño a ".exe" /
indicador de "sistema activo", coherente con el posicionamiento de ciberseguridad del proyecto.

- **Tipografía del isotipo y "SOCIETY":** Poppins Bold (geométrica, limpia, muy legible en pantalla).
- **Tipografía de ". E X E":** monoespaciada en negrita — refuerza la lectura "técnica/código"
  del sufijo, igual que ya aparece espaciado en sus propios documentos.

## Paleta

| Color | Hex | Uso |
| --- | --- | --- |
| Navy (base) | `#090D13` | Fondo del isotipo, fondo de interfaz oscura |
| Off-white | `#F6F8FA` | Texto/letra sobre fondo oscuro |
| Cyan (acento) | `#22D3EE` | Punto del isotipo, acentos, el ". E X E" |
| Charcoal | `#11141A` | Texto/letra sobre fondo claro |
| Pale | `#F2F4F7` | Fondo claro alternativo del isotipo |

## Contenido del kit

- **/favicon** — todo lo necesario para los `<head>` de ambos sitios (ver instalación abajo).
- **/isotipo** — la "S." sola, en PNG (1024px) y SVG vectorial, en 6 variantes de color/fondo.
- **/wordmark** — el logotipo completo (isotipo + "SOCIETY . EXE"), en PNG y SVG, para
  fondo oscuro y fondo claro.
- **/presentacion** — lámina resumen del sistema completo (referencia visual rápida).

Los `.svg` están construidos a partir del contorno vectorial real de la tipografía (no son
texto editable con fuentes del sistema), así que se ven idénticos en cualquier dispositivo o
programa, y pueden escalarse a cualquier tamaño sin perder nitidez.

## Instalar el favicon

### society-exe.site (sitio público — Next.js App Router, export estático)

Next.js detecta automáticamente los iconos si los colocas dentro de la carpeta `app/`
del proyecto, sin tocar ningún `<head>` a mano:

1. Copia `favicon.ico` → `app/favicon.ico`
2. Copia `favicon-512x512.png` → `app/icon.png`
3. Copia `apple-touch-icon.png` → `app/apple-icon.png`

Next.js generará las etiquetas `<link rel="icon">` / `<link rel="apple-touch-icon">` por ti en
cada build. Como el proyecto usa `output: "export"`, estos archivos quedan embebidos en el
export estático igual que cualquier otro asset — no requiere servidor.

### dashboard.society-exe.site (cpanel-S-EXE — Next.js híbrido App Router + Pages API)

Mismo mecanismo si el panel ya vive bajo `app/`:

1. Copia `favicon.ico` → `app/favicon.ico`
2. Copia `favicon-512x512.png` → `app/icon.png`
3. Copia `apple-touch-icon.png` → `app/apple-icon.png`

Si alguna vista del panel todavía usa el `<head>` clásico (Pages Router / `_document.js`),
agrega manualmente:

```html
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

con `favicon.ico`, `favicon-192x192.png` (renómbralo a `icon-192.png`) y
`apple-touch-icon.png` copiados a la carpeta `public/`.

## Notas

- El favicon.ico incluye 6 resoluciones embebidas (16/32/48/64/128/256px) en un solo archivo,
  compatible con todos los navegadores.
- `icon-512-maskable.png` está pensado para manifest.json / PWA (Android adaptive icon).
- Las variantes monocromas son para usos de una sola tinta (sellos, grabado, documentos legales
  en blanco y negro como el MOU o el NDA).
