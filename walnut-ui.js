/*
 * Walnut UI Showcase CSS Bank
 * Version: 1.0.0
 * Author: Manus AI
 * Date: Oct 22, 2025
 *
 * This CSS bank demonstrates a wide range of modern CSS capabilities,
 * organized logically and thematically. It is designed to integrate
 * seamlessly with the Walnut UI theming system.
 *
 * Walnut UI Theming Integration:
 * This stylesheet utilizes CSS custom properties (CSS variables) that are
 * expected to be defined by the Walnut UI theming system. Ensure the following
 * variables are set in your project's root or a parent element:
 * --primary-color: Main brand color.
 * --secondary-color: Complementary brand color.
 * --accent-color: Highlight or interactive element color.
 * --bg: General background color.
 * --text: Default text color.
 * --surface: Background color for cards, modals, etc.
 * --border: Default border color.
 * --success-color: Color for success messages.
 * --warning-color: Color for warning messages.
 * --error-color: Color for error messages.
 * --info-color: Color for informational messages.
 *
 * Background Modes:
 * Use utility classes like `.bg-solid`, `.bg-gradient`, `.bg-animated`, `.bg-image`
 * on the `<body>` or container elements to switch background modes.
 * These classes will dynamically pick up colors from the Walnut UI theme variables.
 *
 * Utility Classes:
 * Utility classes follow the `.util-[group]-[variant]` naming convention.
 *
 * Demonstration Classes:
 * Feature demonstration classes follow the `.[family]-[variant]` naming convention.
 *
 * Each selector includes a one-line comment describing its effect.
 *
 */

root {
    /* Walnut UI Theme Variables (placeholders - actual values should come from Walnut UI) */
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --accent-color: #28a745;
    --bg: #f8f9fa;
    --text: #212529;
    --surface: #ffffff;
    --border: #dee2e6;
    --success-color: #28a745;
    --warning-color: #ffc107;
    --error-color: #dc3545;
    --info-color: #17a2b8;

    /* Light/Dark mode specific variables (can be overridden by Walnut UI) */
    --text-light: #f8f9fa;
    --text-dark: #212529;
    --bg-light: #f8f9fa;
    --bg-dark: #343a40;
}

/* 01 - Typography */
/* Font Sizes */
.typography-h1 { font-size: 3rem; } /* Sets font size to 3rem */
.typography-h2 { font-size: 2.5rem; } /* Sets font size to 2.5rem */
.typography-h3 { font-size: 2rem; } /* Sets font size to 2rem */
.typography-h4 { font-size: 1.5rem; } /* Sets font size to 1.5rem */
.typography-h5 { font-size: 1.25rem; } /* Sets font size to 1.25rem */
.typography-h6 { font-size: 1rem; } /* Sets font size to 1rem */
.typography-lead { font-size: 1.25rem; font-weight: 300; } /* Sets lead paragraph font size */
.typography-small { font-size: 0.875em; } /* Sets small font size */
.typography-xsmall { font-size: 0.75em; } /* Sets extra small font size */
.typography-large { font-size: 1.5em; } /* Sets large font size */

/* Font Weights */
.typography-thin { font-weight: 100; } /* Sets font weight to thin */
.typography-extralight { font-weight: 200; } /* Sets font weight to extra light */
.typography-light { font-weight: 300; } /* Sets font weight to light */
.typography-normal { font-weight: 400; } /* Sets font weight to normal */
.typography-medium { font-weight: 500; } /* Sets font weight to medium */
.typography-semibold { font-weight: 600; } /* Sets font weight to semi-bold */
.typography-bold { font-weight: 700; } /* Sets font weight to bold */
.typography-extrabold { font-weight: 800; } /* Sets font weight to extra bold */
.typography-black { font-weight: 900; } /* Sets font weight to black */

/* Font Styles */
.typography-italic { font-style: italic; } /* Sets font style to italic */
.typography-normal-style { font-style: normal; } /* Sets font style to normal */

/* Font Families (examples, actual fonts should be loaded) */
.typography-serif { font-family: Georgia, serif; } /* Sets font family to serif */
.typography-sans-serif { font-family: Arial, sans-serif; } /* Sets font family to sans-serif */
.typography-monospace { font-family: "Courier New", monospace; } /* Sets font family to monospace */

/* Line Heights */
.typography-lh-1 { line-height: 1; } /* Sets line height to 1 */
.typography-lh-1-25 { line-height: 1.25; } /* Sets line height to 1.25 */
.typography-lh-1-5 { line-height: 1.5; } /* Sets line height to 1.5 */
.typography-lh-loose { line-height: 2; } /* Sets line height to 2 */

/* Letter Spacing */
.typography-ls-tight { letter-spacing: -0.05em; } /* Sets tight letter spacing */
.typography-ls-normal { letter-spacing: normal; } /* Sets normal letter spacing */
.typography-ls-wide { letter-spacing: 0.1em; } /* Sets wide letter spacing */

/* Text Transforms */
.typography-uppercase { text-transform: uppercase; } /* Transforms text to uppercase */
.typography-lowercase { text-transform: lowercase; } /* Transforms text to lowercase */
.typography-capitalize { text-transform: capitalize; } /* Capitalizes text */
.typography-none-transform { text-transform: none; } /* Removes text transform */

/* Text Decorations */
.typography-underline { text-decoration: underline; } /* Underlines text */
.typography-line-through { text-decoration: line-through; } /* Strikes through text */
.typography-overline { text-decoration: overline; } /* Overlines text */
.typography-no-decoration { text-decoration: none; } /* Removes text decoration */
.typography-underline-primary { text-decoration: underline var(--primary-color); } /* Underlines with primary color */
.typography-underline-wavy { text-decoration: wavy underline var(--accent-color); } /* Wavy underline with accent color */

/* Text Shadows */
.typography-shadow-sm { text-shadow: 1px 1px 2px rgba(0,0,0,0.2); } /* Small text shadow */
.typography-shadow-md { text-shadow: 2px 2px 4px rgba(0,0,0,0.4); } /* Medium text shadow */
.typography-shadow-lg { text-shadow: 3px 3px 6px rgba(0,0,0,0.6); } /* Large text shadow */
.typography-shadow-primary { text-shadow: 2px 2px 0 var(--primary-color); } /* Primary color text shadow */
.typography-shadow-neon { text-shadow: 0 0 5px var(--accent-color), 0 0 10px var(--accent-color), 0 0 15px var(--accent-color); } /* Neon text shadow */

/* Text Rendering */
.typography-optimize-legibility { text-rendering: optimizeLegibility; } /* Optimizes legibility */
.typography-geometric-precision { text-rendering: geometricPrecision; } /* Geometric precision rendering */

/* Font Features */
.typography-small-caps { font-feature-settings: "smcp"; } /* Enables small caps */
.typography-ligatures { font-feature-settings: "liga"; } /* Enables ligatures */

/* Text Overflow */
.typography-overflow-ellipsis { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } /* Truncates text with ellipsis */
.typography-overflow-clip { white-space: nowrap; overflow: hidden; text-overflow: clip; } /* Clips text */

/* Word Break */
.typography-break-word { word-break: break-word; } /* Breaks words */
.typography-keep-all { word-break: keep-all; } /* Keeps all words together */

/* Hyphens */
.typography-hyphens-auto { hyphens: auto; } /* Enables auto hyphens */
.typography-hyphens-manual { hyphens: manual; } /* Enables manual hyphens */
.typography-hyphens-none { hyphens: none; } /* Disables hyphens */

/* White Space */
.typography-nowrap { white-space: nowrap; } /* Prevents text wrapping */
.typography-pre { white-space: pre; } /* Behaves like <pre> tag */
.typography-pre-wrap { white-space: pre-wrap; } /* Behaves like <pre> but wraps */
.typography-pre-line { white-space: pre-line; } /* Behaves like <pre> but collapses spaces */

/* Direction */
.typography-ltr { direction: ltr; } /* Sets text direction left-to-right */
.typography-rtl { direction: rtl; } /* Sets text direction right-to-left */

/* Vertical Align */
.typography-align-baseline { vertical-align: baseline; } /* Aligns baseline */
.typography-align-top { vertical-align: top; } /* Aligns top */
.typography-align-middle { vertical-align: middle; } /* Aligns middle */
.typography-align-bottom { vertical-align: bottom; } /* Aligns bottom */
.typography-align-sub { vertical-align: sub; } /* Aligns subscript */
.typography-align-super { vertical-align: super; } /* Aligns superscript */

/* 02 - Color Palettes */
/* Text Colors */
.color-text-primary { color: var(--primary-color); } /* Sets text color to primary */
.color-text-secondary { color: var(--secondary-color); } /* Sets text color to secondary */
.color-text-accent { color: var(--accent-color); } /* Sets text color to accent */
.color-text-bg { color: var(--bg); } /* Sets text color to background */
.color-text-surface { color: var(--surface); } /* Sets text color to surface */
.color-text-border { color: var(--border); } /* Sets text color to border */
.color-text-success { color: var(--success-color); } /* Sets text color to success */
.color-text-warning { color: var(--warning-color); } /* Sets text color to warning */
.color-text-error { color: var(--error-color); } /* Sets text color to error */
.color-text-info { color: var(--info-color); } /* Sets text color to info */
.color-text-dark { color: var(--text-dark); } /* Sets text color to dark theme text */
.color-text-light { color: var(--text-light); } /* Sets text color to light theme text */

/* Background Colors */
.color-bg-primary { background-color: var(--primary-color); } /* Sets background color to primary */
.color-bg-secondary { background-color: var(--secondary-color); } /* Sets background color to secondary */
.color-bg-accent { background-color: var(--accent-color); } /* Sets background color to accent */
.color-bg-bg { background-color: var(--bg); } /* Sets background color to general background */
.color-bg-surface { background-color: var(--surface); } /* Sets background color to surface */
.color-bg-border { background-color: var(--border); } /* Sets background color to border */
.color-bg-success { background-color: var(--success-color); } /* Sets background color to success */
.color-bg-warning { background-color: var(--warning-color); } /* Sets background color to warning */
.color-bg-error { background-color: var(--error-color); } /* Sets background color to error */
.color-bg-info { background-color: var(--info-color); } /* Sets background color to info */
.color-bg-dark { background-color: var(--bg-dark); } /* Sets background color to dark theme background */
.color-bg-light { background-color: var(--bg-light); } /* Sets background color to light theme background */

/* Border Colors */
.color-border-primary { border-color: var(--primary-color); } /* Sets border color to primary */
.color-border-secondary { border-color: var(--secondary-color); } /* Sets border color to secondary */
.color-border-accent { border-color: var(--accent-color); } /* Sets border color to accent */
.color-border-bg { border-color: var(--bg); } /* Sets border color to background */
.color-border-surface { border-color: var(--surface); } /* Sets border color to surface */
.color-border-border { border-color: var(--border); } /* Sets border color to default border */
.color-border-success { border-color: var(--success-color); } /* Sets border color to success */
.color-border-warning { border-color: var(--warning-color); } /* Sets border color to warning */
.color-border-error { border-color: var(--error-color); } /* Sets border color to error */
.color-border-info { border-color: var(--info-color); } /* Sets border color to info */

/* 03 - Gradients */
/* Linear Gradients */
.gradient-linear-to-right { background-image: linear-gradient(to right, var(--primary-color), var(--secondary-color)); } /* Linear gradient to right */
.gradient-linear-to-bottom { background-image: linear-gradient(to bottom, var(--primary-color), var(--accent-color)); } /* Linear gradient to bottom */
.gradient-linear-45deg { background-image: linear-gradient(45deg, var(--primary-color), var(--secondary-color), var(--accent-color)); } /* Linear gradient at 45 degrees */
.gradient-linear-stops { background-image: linear-gradient(to right, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-color) 100%); } /* Linear gradient with color stops */
.gradient-linear-transparent { background-image: linear-gradient(to top, rgba(var(--primary-color), 0.5), rgba(var(--primary-color), 0)); } /* Linear gradient with transparency */
.gradient-linear-three-color { background-image: linear-gradient(to right, var(--primary-color), var(--accent-color), var(--secondary-color)); } /* Three-color linear gradient */
.gradient-linear-diagonal-br { background-image: linear-gradient(to bottom right, var(--primary-color), var(--secondary-color)); } /* Diagonal linear gradient to bottom right */
.gradient-linear-diagonal-tl { background-image: linear-gradient(to top left, var(--accent-color), var(--primary-color)); } /* Diagonal linear gradient to top left */
.gradient-linear-angle-135 { background-image: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); } /* Linear gradient at 135 degrees */
.gradient-linear-repeating { background-image: repeating-linear-gradient(45deg, var(--primary-color), var(--primary-color) 10px, var(--secondary-color) 10px, var(--secondary-color) 20px); } /* Repeating linear gradient */

/* Radial Gradients */
.gradient-radial-circle { background-image: radial-gradient(circle, var(--accent-color), var(--primary-color)); } /* Radial gradient circle */
.gradient-radial-ellipse { background-image: radial-gradient(ellipse at center, var(--accent-color), var(--secondary-color)); } /* Radial gradient ellipse */
.gradient-radial-at-top { background-image: radial-gradient(at top, var(--primary-color), var(--bg)); } /* Radial gradient at top */
.gradient-radial-size { background-image: radial-gradient(closest-side at 20% 80%, var(--accent-color), var(--primary-color)); } /* Radial gradient with size and position */
.gradient-radial-repeating { background-image: repeating-radial-gradient(circle, var(--primary-color), var(--primary-color) 10px, var(--secondary-color) 10px, var(--secondary-color) 20px); } /* Repeating radial gradient */

/* Conic Gradients */
.gradient-conic-basic { background-image: conic-gradient(var(--primary-color), var(--secondary-color), var(--accent-color)); } /* Basic conic gradient */
.gradient-conic-from-angle { background-image: conic-gradient(from 90deg, var(--primary-color), var(--secondary-color), var(--accent-color)); } /* Conic gradient from 90 degrees */
.gradient-conic-at-position { background-image: conic-gradient(at 20% 30%, var(--primary-color), var(--secondary-color), var(--accent-color)); } /* Conic gradient at position */
.gradient-conic-stops { background-image: conic-gradient(var(--primary-color) 0deg, var(--secondary-color) 90deg, var(--accent-color) 180deg, var(--primary-color) 360deg); } /* Conic gradient with color stops */
.gradient-conic-pie-chart { background-image: conic-gradient(var(--primary-color) 0% 25%, var(--secondary-color) 25% 50%, var(--accent-color) 50% 75%, var(--info-color) 75% 100%); } /* Conic gradient for pie chart */

/* 04 - Filters */
.filter-blur-sm { filter: blur(2px); } /* Applies a small blur filter */
.filter-blur-md { filter: blur(5px); } /* Applies a medium blur filter */
.filter-blur-lg { filter: blur(10px); } /* Applies a large blur filter */
.filter-brightness-50 { filter: brightness(0.5); } /* Reduces brightness by 50% */
.filter-brightness-150 { filter: brightness(1.5); } /* Increases brightness by 50% */
.filter-contrast-50 { filter: contrast(0.5); } /* Reduces contrast by 50% */
.filter-contrast-200 { filter: contrast(2); } /* Increases contrast by 100% */
.filter-grayscale { filter: grayscale(100%); } /* Converts element to grayscale */
.filter-hue-rotate-90 { filter: hue-rotate(90deg); } /* Rotates hue by 90 degrees */
.filter-hue-rotate-180 { filter: hue-rotate(180deg); } /* Rotates hue by 180 degrees */
.filter-invert { filter: invert(100%); } /* Inverts colors */
.filter-opacity-50 { filter: opacity(0.5); } /* Reduces opacity to 50% */
.filter-saturate-200 { filter: saturate(200%); } /* Increases saturation by 100% */
.filter-sepia { filter: sepia(100%); } /* Applies sepia tone */
.filter-drop-shadow-sm { filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3)); } /* Small drop shadow */
.filter-drop-shadow-lg { filter: drop-shadow(4px 4px 8px rgba(0,0,0,0.5)); } /* Large drop shadow */
.filter-multiple { filter: blur(3px) grayscale(50%) brightness(1.2); } /* Applies multiple filters */
.filter-none { filter: none; } /* Removes all filters */

/* 05 - Transforms */
/* Translate */
.transform-translate-x-10 { transform: translateX(10px); } /* Translates element 10px on X-axis */
.transform-translate-y-10 { transform: translateY(10px); } /* Translates element 10px on Y-axis */
.transform-translate-xy-20 { transform: translate(20px, 20px); } /* Translates element 20px on X and Y-axis */
.transform-translate-z-100 { transform: translateZ(100px); } /* Translates element 100px on Z-axis */
.transform-translate-3d { transform: translate3d(10px, 20px, 30px); } /* Translates element on X, Y, Z-axis */

/* Scale */
.transform-scale-1-1 { transform: scale(1.1); } /* Scales element by 1.1 */
.transform-scale-x-0-8 { transform: scaleX(0.8); } /* Scales element on X-axis by 0.8 */
.transform-scale-y-1-2 { transform: scaleY(1.2); } /* Scales element on Y-axis by 1.2 */
.transform-scale-z-1-5 { transform: scaleZ(1.5); } /* Scales element on Z-axis by 1.5 */
.transform-scale-3d { transform: scale3d(0.9, 1.1, 1); } /* Scales element on X, Y, Z-axis */

/* Rotate */
.transform-rotate-45 { transform: rotate(45deg); } /* Rotates element by 45 degrees */
.transform-rotate-x-30 { transform: rotateX(30deg); } /* Rotates element on X-axis by 30 degrees */
.transform-rotate-y-60 { transform: rotateY(60deg); } /* Rotates element on Y-axis by 60 degrees */
.transform-rotate-z-90 { transform: rotateZ(90deg); } /* Rotates element on Z-axis by 90 degrees */
.transform-rotate-3d { transform: rotate3d(1, 1, 0, 45deg); } /* Rotates element on a 3D vector */

/* Skew */
.transform-skew-x-10 { transform: skewX(10deg); } /* Skews element on X-axis by 10 degrees */
.transform-skew-y-20 { transform: skewY(20deg); } /* Skews element on Y-axis by 20 degrees */
.transform-skew-xy-15 { transform: skew(15deg, 15deg); } /* Skews element on X and Y-axis */

/* Matrix */
.transform-matrix { transform: matrix(1, 0.5, -0.5, 1, 10, 10); } /* Applies a 2D transformation matrix */
.transform-matrix-3d { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } /* Applies a 3D transformation matrix (identity) */

/* Origin */
.transform-origin-top-left { transform-origin: top left; } /* Sets transform origin to top left */
.transform-origin-center { transform-origin: center; } /* Sets transform origin to center */

/* 06 - 3D Effects */
.3d-perspective-500 { perspective: 500px; } /* Sets perspective for 3D transforms */
.3d-transform-style-preserve { transform-style: preserve-3d; } /* Preserves 3D transformations of children */
.3d-backface-hidden { backface-visibility: hidden; } /* Hides backface of 3D transformed element */
.3d-backface-visible { backface-visibility: visible; } /* Shows backface of 3D transformed element */

/* 07 - Backgrounds */
/* Background Size */
.background-size-auto { background-size: auto; } /* Sets background size to auto */
.background-size-cover { background-size: cover; } /* Covers the entire background area */
.background-size-contain { background-size: contain; } /* Contains the background image */
.background-size-50 { background-size: 50%; } /* Sets background size to 50% */
.background-size-custom { background-size: 100px 50px; } /* Sets custom background size */

/* Background Position */
.background-position-center { background-position: center; } /* Centers background image */
.background-position-top { background-position: top; } /* Positions background image to top */
.background-position-bottom { background-position: bottom; } /* Positions background image to bottom */
.background-position-left { background-position: left; } /* Positions background image to left */
.background-position-right { background-position: right; } /* Positions background image to right */
.background-position-custom { background-position: 20px 30px; } /* Custom background position */
.background-position-percentage { background-position: 25% 75%; } /* Percentage background position */

/* Background Repeat */
.background-repeat-x { background-repeat: repeat-x; } /* Repeats background horizontally */
.background-repeat-y { background-repeat: repeat-y; } /* Repeats background vertically */
.background-repeat-no { background-repeat: no-repeat; } /* Does not repeat background */
.background-repeat-round { background-repeat: round; } /* Repeats background with rounding */
.background-repeat-space { background-repeat: space; } /* Repeats background with spacing */

/* Background Attachment */
.background-attachment-scroll { background-attachment: scroll; } /* Background scrolls with content */
.background-attachment-fixed { background-attachment: fixed; } /* Background fixed */
.background-attachment-local { background-attachment: local; } /* Background scrolls with element */

/* Background Origin */
.background-origin-border { background-origin: border-box; } /* Background origin from border box */
.background-origin-padding { background-origin: padding-box; } /* Background origin from padding box */
.background-origin-content { background-origin: content-box; } /* Background origin from content box */

/* Background Clip */
.background-clip-border { background-clip: border-box; } /* Background clip to border box */
.background-clip-padding { background-clip: padding-box; } /* Background clip to padding box */
.background-clip-content { background-clip: content-box; } /* Background clip to content box */
.background-clip-text { background-clip: text; -webkit-background-clip: text; color: transparent; } /* Clips background to text */

/* Multiple Backgrounds */
.background-multiple { background-image: url('https://via.placeholder.com/150/0000FF/FFFFFF?text=Image1'), linear-gradient(to right, var(--primary-color), var(--secondary-color)); background-position: top left, bottom right; background-repeat: no-repeat; } /* Multiple backgrounds */

/* 08 - Masks */
/* Mask Image */
.mask-image-alpha { mask-image: linear-gradient(to bottom, black 50%, transparent 100%); } /* Linear gradient mask */
.mask-image-url { mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="black"/></svg>'); } /* SVG circle mask */

/* Mask Mode */
.mask-mode-alpha { mask-mode: alpha; } /* Uses alpha channel as mask */
.mask-mode-luminance { mask-mode: luminance; } /* Uses luminance as mask */

/* Mask Origin */
.mask-origin-border { mask-origin: border-box; } /* Mask origin from border box */
.mask-origin-padding { mask-origin: padding-box; } /* Mask origin from padding box */
.mask-origin-content { mask-origin: content-box; } /* Mask origin from content box */

/* Mask Position */
.mask-position-center { mask-position: center; } /* Centers mask */
.mask-position-top { mask-position: top; } /* Positions mask to top */

/* Mask Repeat */
.mask-repeat-no { mask-repeat: no-repeat; } /* Does not repeat mask */
.mask-repeat-round { mask-repeat: round; } /* Repeats mask with rounding */

/* Mask Size */
.mask-size-cover { mask-size: cover; } /* Covers mask area */
.mask-size-50 { mask-size: 50%; } /* Sets mask size to 50% */

/* Mask Type */
.mask-type-alpha { mask-type: alpha; } /* Sets mask type to alpha */
.mask-type-luminance { mask-type: luminance; } /* Sets mask type to luminance */

/* 09 - Blend Modes */
/* Mix Blend Mode */
.blend-mode-multiply { mix-blend-mode: multiply; } /* Applies multiply blend mode */
.blend-mode-screen { mix-blend-mode: screen; } /* Applies screen blend mode */
.blend-mode-overlay { mix-blend-mode: overlay; } /* Applies overlay blend mode */
.blend-mode-darken { mix-blend-mode: darken; } /* Applies darken blend mode */
.blend-mode-lighten { mix-blend-mode: lighten; } /* Applies lighten blend mode */
.blend-mode-color-dodge { mix-blend-mode: color-dodge; } /* Applies color-dodge blend mode */
.blend-mode-color-burn { mix-blend-mode: color-burn; } /* Applies color-burn blend mode */
.blend-mode-hard-light { mix-blend-mode: hard-light; } /* Applies hard-light blend mode */
.blend-mode-soft-light { mix-blend-mode: soft-light; } /* Applies soft-light blend mode */
.blend-mode-difference { mix-blend-mode: difference; } /* Applies difference blend mode */
.blend-mode-exclusion { mix-blend-mode: exclusion; } /* Applies exclusion blend mode */
.blend-mode-hue { mix-blend-mode: hue; } /* Applies hue blend mode */
.blend-mode-saturation { mix-blend-mode: saturation; } /* Applies saturation blend mode */
.blend-mode-color { mix-blend-mode: color; } /* Applies color blend mode */
.blend-mode-luminosity { mix-blend-mode: luminosity; } /* Applies luminosity blend mode */

/* Background Blend Mode */
.bg-blend-mode-multiply { background-blend-mode: multiply; } /* Applies multiply background blend mode */
.bg-blend-mode-screen { background-blend-mode: screen; } /* Applies screen background blend mode */
.bg-blend-mode-overlay { background-blend-mode: overlay; } /* Applies overlay background blend mode */

/* 10 - Layout Systems (Display Properties) */
.util-display-block { display: block; } /* Sets display to block */
.util-display-inline { display: inline; } /* Sets display to inline */
.util-display-inline-block { display: inline-block; } /* Sets display to inline-block */
.util-display-flex { display: flex; } /* Sets display to flex */
.util-display-inline-flex { display: inline-flex; } /* Sets display to inline-flex */
.util-display-grid { display: grid; } /* Sets display to grid */
.util-display-inline-grid { display: inline-grid; } /* Sets display to inline-grid */
.util-display-none { display: none; } /* Hides element */
.util-display-contents { display: contents; } /* Makes children visible as if element was removed */
.util-display-table { display: table; } /* Sets display to table */
.util-display-table-row { display: table-row; } /* Sets display to table-row */
.util-display-table-cell { display: table-cell; } /* Sets display to table-cell */

/* 11 - Grid Layout */
/* Grid Template Columns */
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); } /* 1 column grid */
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); } /* 2 column grid */
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); } /* 3 column grid */
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); } /* 4 column grid */
.grid-cols-auto { grid-template-columns: auto auto auto; } /* Auto column grid */
.grid-cols-fixed { grid-template-columns: 100px 1fr 200px; } /* Fixed and fluid columns */
.grid-cols-minmax { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); } /* Responsive minmax columns */

/* Grid Template Rows */
.grid-rows-1 { grid-template-rows: repeat(1, 1fr); } /* 1 row grid */
.grid-rows-2 { grid-template-rows: repeat(2, 1fr); } /* 2 row grid */
.grid-rows-auto { grid-template-rows: auto auto; } /* Auto row grid */
.grid-rows-fixed { grid-template-rows: 50px 1fr 50px; } /* Fixed and fluid rows */

/* Grid Gaps */
.grid-gap-sm { gap: 0.5rem; } /* Small grid gap */
.grid-gap-md { gap: 1rem; } /* Medium grid gap */
.grid-gap-lg { gap: 1.5rem; } /* Large grid gap */
.grid-row-gap-sm { row-gap: 0.5rem; } /* Small row gap */
.grid-col-gap-md { column-gap: 1rem; } /* Medium column gap */

/* Grid Auto Flow */
.grid-flow-row { grid-auto-flow: row; } /* Auto flow rows */
.grid-flow-column { grid-auto-flow: column; } /* Auto flow columns */
.grid-flow-dense { grid-auto-flow: dense; } /* Auto flow dense */

/* Grid Areas */
.grid-area-header { grid-area: header; } /* Assigns element to header grid area */
.grid-area-sidebar { grid-area: sidebar; } /* Assigns element to sidebar grid area */
.grid-area-main { grid-area: main; } /* Assigns element to main grid area */
.grid-template-areas { grid-template-areas: "header header" "sidebar main"; } /* Defines grid template areas */

/* Justify/Align Items/Content */
.grid-justify-start { justify-items: start; } /* Justifies items to start */
.grid-justify-end { justify-items: end; } /* Justifies items to end */
.grid-justify-center { justify-items: center; } /* Justifies items to center */
.grid-justify-stretch { justify-items: stretch; } /* Justifies items to stretch */

.grid-align-start { align-items: start; } /* Aligns items to start */
.grid-align-end { align-items: end; } /* Aligns items to end */
.grid-align-center { align-items: center; } /* Aligns items to center */
.grid-align-stretch { align-items: stretch; } /* Aligns items to stretch */

.grid-justify-content-start { justify-content: start; } /* Justifies content to start */
.grid-justify-content-end { justify-content: end; } /* Justifies content to end */
.grid-justify-content-center { justify-content: center; } /* Justifies content to center */
.grid-justify-content-space-between { justify-content: space-between; } /* Justifies content with space between */
.grid-justify-content-space-around { justify-content: space-around; } /* Justifies content with space around */
.grid-justify-content-space-evenly { justify-content: space-evenly; } /* Justifies content with space evenly */

.grid-align-content-start { align-content: start; } /* Aligns content to start */
.grid-align-content-end { align-content: end; } /* Aligns content to end */
.grid-align-content-center { align-content: center; } /* Aligns content to center */
.grid-align-content-space-between { align-content: space-between; } /* Aligns content with space between */
.grid-align-content-space-around { align-content: space-around; } /* Aligns content with space around */
.grid-align-content-space-evenly { align-content: space-evenly; } /* Aligns content with space evenly */

/* Place Items/Content */
.grid-place-items-center { place-items: center; } /* Places items to center */
.grid-place-content-center { place-content: center; } /* Places content to center */

/* Grid Column/Row Start/End */
.grid-col-span-2 { grid-column: span 2; } /* Spans 2 columns */
.grid-row-span-2 { grid-row: span 2; } /* Spans 2 rows */
.grid-col-start-1 { grid-column-start: 1; } /* Starts at column 1 */
.grid-col-end-3 { grid-column-end: 3; } /* Ends at column 3 */
.grid-row-start-2 { grid-row-start: 2; } /* Starts at row 2 */
.grid-row-end-4 { grid-row-end: 4; } /* Ends at row 4 */

/* 12 - Flexbox Layout */
/* Flex Direction */
.flex-direction-row { flex-direction: row; } /* Sets flex direction to row */
.flex-direction-row-reverse { flex-direction: row-reverse; } /* Sets flex direction to row-reverse */
.flex-direction-column { flex-direction: column; } /* Sets flex direction to column */
.flex-direction-column-reverse { flex-direction: column-reverse; } /* Sets flex direction to column-reverse */

/* Flex Wrap */
.flex-wrap { flex-wrap: wrap; } /* Allows flex items to wrap */
.flex-nowrap { flex-wrap: nowrap; } /* Prevents flex items from wrapping */
.flex-wrap-reverse { flex-wrap: wrap-reverse; } /* Allows flex items to wrap in reverse */

/* Justify Content */
.flex-justify-start { justify-content: flex-start; } /* Justifies content to start */
.flex-justify-end { justify-content: flex-end; } /* Justifies content to end */
.flex-justify-center { justify-content: center; } /* Justifies content to center */
.flex-justify-between { justify-content: space-between; } /* Justifies content with space between */
.flex-justify-around { justify-content: space-around; } /* Justifies content with space around */
.flex-justify-evenly { justify-content: space-evenly; } /* Justifies content with space evenly */

/* Align Items */
.flex-align-start { align-items: flex-start; } /* Aligns items to start */
.flex-align-end { align-items: flex-end; } /* Aligns items to end */
.flex-align-center { align-items: center; } /* Aligns items to center */
.flex-align-baseline { align-items: baseline; } /* Aligns items to baseline */
.flex-align-stretch { align-items: stretch; } /* Aligns items to stretch */

/* Align Content */
.flex-align-content-start { align-content: flex-start; } /* Aligns multi-line content to start */
.flex-align-content-end { align-content: flex-end; } /* Aligns multi-line content to end */
.flex-align-content-center { align-content: center; } /* Aligns multi-line content to center */
.flex-align-content-between { align-content: space-between; } /* Aligns multi-line content with space between */
.flex-align-content-around { align-content: space-around; } /* Aligns multi-line content with space around */
.flex-align-content-stretch { align-content: stretch; } /* Stretches multi-line content */

/* Align Self */
.flex-self-auto { align-self: auto; } /* Resets align-self to auto */
.flex-self-start { align-self: flex-start; } /* Aligns individual item to start */
.flex-self-end { align-self: flex-end; } /* Aligns individual item to end */
.flex-self-center { align-self: center; } /* Aligns individual item to center */
.flex-self-baseline { align-self: baseline; } /* Aligns individual item to baseline */
.flex-self-stretch { align-self: stretch; } /* Stretches individual item */

/* Flex Grow/Shrink/Basis */
.flex-grow-0 { flex-grow: 0; } /* Prevents item from growing */
.flex-grow-1 { flex-grow: 1; } /* Allows item to grow */
.flex-shrink-0 { flex-shrink: 0; } /* Prevents item from shrinking */
.flex-shrink-1 { flex-shrink: 1; } /* Allows item to shrink */
.flex-basis-auto { flex-basis: auto; } /* Sets flex basis to auto */
.flex-basis-50 { flex-basis: 50%; } /* Sets flex basis to 50% */
.flex-basis-100px { flex-basis: 100px; } /* Sets flex basis to 100px */

/* Order */
.flex-order-first { order: -1; } /* Places item first */
.flex-order-last { order: 99; } /* Places item last */
.flex-order-1 { order: 1; } /* Sets item order to 1 */
.flex-order-2 { order: 2; } /* Sets item order to 2 */

/* 13 - Utilities */
/* Margins */
.util-m-0 { margin: 0; } /* Sets all margins to 0 */
.util-mt-1 { margin-top: 0.25rem; } /* Sets margin top to 0.25rem */
.util-mb-2 { margin-bottom: 0.5rem; } /* Sets margin bottom to 0.5rem */
.util-ml-3 { margin-left: 0.75rem; } /* Sets margin left to 0.75rem */
.util-mr-4 { margin-right: 1rem; } /* Sets margin right to 1rem */
.util-mx-auto { margin-left: auto; margin-right: auto; } /* Centers element horizontally */
.util-my-5 { margin-top: 1.25rem; margin-bottom: 1.25rem; } /* Sets vertical margins */
.util-m-6 { margin: 1.5rem; } /* Sets all margins to 1.5rem */
.util-m-auto { margin: auto; } /* Sets all margins to auto */

/* Paddings */
.util-p-0 { padding: 0; } /* Sets all paddings to 0 */
.util-pt-1 { padding-top: 0.25rem; } /* Sets padding top to 0.25rem */
.util-pb-2 { padding-bottom: 0.5rem; } /* Sets padding bottom to 0.5rem */
.util-pl-3 { padding-left: 0.75rem; } /* Sets padding left to 0.75rem */
.util-pr-4 { padding-right: 1rem; } /* Sets padding right to 1rem */
.util-px-5 { padding-left: 1.25rem; padding-right: 1.25rem; } /* Sets horizontal paddings */
.util-py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; } /* Sets vertical paddings */
.util-p-7 { padding: 1.75rem; } /* Sets all paddings to 1.75rem */

/* Display Helpers (re-using from Layout Systems for utilities) */
.util-d-block { display: block; } /* Sets display to block */
.util-d-inline { display: inline; } /* Sets display to inline */
.util-d-inline-block { display: inline-block; } /* Sets display to inline-block */
.util-d-flex { display: flex; } /* Sets display to flex */
.util-d-grid { display: grid; } /* Sets display to grid */
.util-d-none { display: none; } /* Hides element */

/* Text Alignment */
.util-text-left { text-align: left; } /* Aligns text to left */
.util-text-center { text-align: center; } /* Aligns text to center */
.util-text-right { text-align: right; } /* Aligns text to right */
.util-text-justify { text-align: justify; } /* Justifies text */

/* Visibility */
.util-invisible { visibility: hidden; } /* Hides element but reserves space */
.util-visible { visibility: visible; } /* Makes element visible */
.util-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; } /* Visually hidden but accessible */

/* Overflow */
.util-overflow-auto { overflow: auto; } /* Sets overflow to auto */
.util-overflow-hidden { overflow: hidden; } /* Hides overflowing content */
.util-overflow-scroll { overflow: scroll; } /* Always shows scrollbars */
.util-overflow-x-auto { overflow-x: auto; } /* Sets horizontal overflow to auto */
.util-overflow-y-auto { overflow-y: auto; } /* Sets vertical overflow to auto */

/* Z-Index */
.util-z-0 { z-index: 0; } /* Sets z-index to 0 */
.util-z-10 { z-index: 10; } /* Sets z-index to 10 */
.util-z-20 { z-index: 20; } /* Sets z-index to 20 */
.util-z-max { z-index: 9999; } /* Sets z-index to max */

/* Box Sizing */
.util-box-border { box-sizing: border-box; } /* Sets box-sizing to border-box */
.util-box-content { box-sizing: content-box; } /* Sets box-sizing to content-box */

/* Widths */
.util-w-25 { width: 25%; } /* Sets width to 25% */
.util-w-50 { width: 50%; } /* Sets width to 50% */
.util-w-75 { width: 75%; } /* Sets width to 75% */
.util-w-100 { width: 100%; } /* Sets width to 100% */
.util-w-auto { width: auto; } /* Sets width to auto */
.util-max-w-full { max-width: 100%; } /* Sets max-width to 100% */

/* Heights */
.util-h-25 { height: 25%; } /* Sets height to 25% */
.util-h-50 { height: 50%; } /* Sets height to 50% */
.util-h-75 { height: 75%; } /* Sets height to 75% */
.util-h-100 { height: 100%; } /* Sets height to 100% */
.util-h-auto { height: auto; } /* Sets height to auto */
.util-min-h-screen { min-height: 100vh; } /* Sets minimum height to full viewport height */

/* Position */
.util-position-static { position: static; } /* Sets position to static */
.util-position-relative { position: relative; } /* Sets position to relative */
.util-position-absolute { position: absolute; } /* Sets position to absolute */
.util-position-fixed { position: fixed; } /* Sets position to fixed */
.util-position-sticky { position: sticky; } /* Sets position to sticky */

/* Top, Right, Bottom, Left */
.util-top-0 { top: 0; } /* Sets top to 0 */
.util-right-0 { right: 0; } /* Sets right to 0 */
.util-bottom-0 { bottom: 0; } /* Sets bottom to 0 */
.util-left-0 { left: 0; } /* Sets left to 0 */
.util-inset-0 { top: 0; right: 0; bottom: 0; left: 0; } /* Sets all insets to 0 */

/* Floats */
.util-float-left { float: left; } /* Floats element to left */
.util-float-right { float: right; } /* Floats element to right */
.util-float-none { float: none; } /* Removes float */
.util-clearfix::after { content: ""; display: table; clear: both; } /* Clearfix utility */

/* Cursors */
.util-cursor-pointer { cursor: pointer; } /* Sets cursor to pointer */
.util-cursor-not-allowed { cursor: not-allowed; } /* Sets cursor to not-allowed */
.util-cursor-text { cursor: text; } /* Sets cursor to text */
.util-cursor-help { cursor: help; } /* Sets cursor to help */
.util-cursor-wait { cursor: wait; } /* Sets cursor to wait */

/* 14 - Animations */
/* Keyframe Definitions (examples) */
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } /* Spin keyframe */
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } } /* Fade-in keyframe */
@keyframes slide-in-left { from { transform: translateX(-100%); } to { transform: translateX(0); } } /* Slide-in-left keyframe */

/* Animation Properties */
.animation-spin { animation: spin 2s linear infinite; } /* Applies infinite spin animation */
.animation-fade-in { animation: fade-in 1s ease-out forwards; } /* Applies fade-in animation */
.animation-slide-in { animation: slide-in-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; } /* Applies slide-in animation */
.animation-duration-1s { animation-duration: 1s; } /* Sets animation duration to 1s */
.animation-timing-ease { animation-timing-function: ease; } /* Sets animation timing to ease */
.animation-delay-0-5s { animation-delay: 0.5s; } /* Sets animation delay to 0.5s */
.animation-iteration-3 { animation-iteration-count: 3; } /* Sets animation iteration count to 3 */
.animation-direction-reverse { animation-direction: reverse; } /* Sets animation direction to reverse */
.animation-fill-forwards { animation-fill-mode: forwards; } /* Sets animation fill mode to forwards */
.animation-play-paused { animation-play-state: paused; } /* Pauses animation */
.animation-play-running { animation-play-state: running; } /* Runs animation */

/* 15 - Transitions */
.transition-all { transition: all 0.3s ease-in-out; } /* Smooth transition for all properties */
.transition-color { transition: color 0.2s linear; } /* Transition for color property */
.transition-transform { transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); } /* Transition for transform property */
.transition-opacity-delay { transition: opacity 0.3s ease-out 0.1s; } /* Transition with delay */
.transition-duration-0-5s { transition-duration: 0.5s; } /* Sets transition duration to 0.5s */
.transition-timing-bounce { transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55); } /* Sets transition timing to bounce effect */
.transition-delay-0-2s { transition-delay: 0.2s; } /* Sets transition delay to 0.2s */

/* 16 - Hover/Focus States */
/* Basic Hover/Focus */
.hover-bg-primary:hover { background-color: var(--primary-color); } /* Changes background on hover */
.focus-border-accent:focus { border-color: var(--accent-color); } /* Changes border on focus */
.active-scale:active { transform: scale(0.95); } /* Scales down on active */
.visited-text-secondary:visited { color: var(--secondary-color); } /* Changes text color for visited links */

/* Nth-child */
.nth-child-odd:nth-child(odd) { background-color: var(--surface); } /* Styles odd children */
.nth-child-even:nth-child(even) { background-color: var(--bg); } /* Styles even children */
.nth-child-3n-plus-1:nth-child(3n+1) { color: var(--accent-color); } /* Styles every 3rd child starting from 1 */

/* First/Last/Only Child */
.first-child { border-top-left-radius: 8px; } /* Styles first child */
.last-child { border-bottom-right-radius: 8px; } /* Styles last child */
.only-child { font-weight: bold; } /* Styles element if it's the only child */

/* Not Selector */
.not-disabled:not(:disabled) { opacity: 1; cursor: pointer; } /* Styles elements that are not disabled */
.not-first:not(:first-child) { margin-left: 1rem; } /* Styles elements not being the first child */

/* Empty Selector */
.empty:empty { height: 20px; background-color: var(--border); } /* Styles empty elements */

/* Checked/Disabled/Enabled */
.checked:checked + label { color: var(--primary-color); } /* Styles label next to checked input */
.disabled:disabled { opacity: 0.6; cursor: not-allowed; } /* Styles disabled elements */
.enabled:enabled { opacity: 1; } /* Styles enabled elements */

/* BEM-style variants for hover/focus states */
.btn-hover-glow:hover { box-shadow: 0 0 8px var(--accent-color); } /* Button glow on hover */
.input-focus:focus { border-color: var(--primary-color); box-shadow: 0 0 0 3px rgba(var(--primary-color), 0.25); } /* Input focus styling */
.card-hover-lift:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); } /* Card lift on hover */
.link-hover-underline:hover { text-decoration: underline; text-decoration-color: var(--accent-color); } /* Link underline on hover */
.icon-hover-rotate:hover { transform: rotate(15deg); } /* Icon rotate on hover */

/* 17 - Forms */
/* Input Styles */
.form-input { 
    width: 100%; padding: 0.5rem 0.75rem; border: 1px solid var(--border); border-radius: 0.25rem;
    font-size: 1rem; line-height: 1.5; color: var(--text); background-color: var(--surface);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
} /* Basic input styling */
.form-input:focus { 
    border-color: var(--primary-color); outline: 0; box-shadow: 0 0 0 0.2rem rgba(var(--primary-color), 0.25);
} /* Input focus styling */
.form-input-lg { padding: 0.75rem 1rem; font-size: 1.25rem; border-radius: 0.3rem; } /* Large input */
.form-input-sm { padding: 0.25rem 0.5rem; font-size: 0.875rem; border-radius: 0.2rem; } /* Small input */
.form-input-error { border-color: var(--error-color); } /* Input error state */
.form-input-success { border-color: var(--success-color); } /* Input success state */
.form-input-disabled:disabled { background-color: var(--bg); opacity: 0.8; cursor: not-allowed; } /* Disabled input */

/* Button Styles */
.form-btn { 
    display: inline-block; font-weight: 400; color: var(--text-light); text-align: center;
    vertical-align: middle; user-select: none; background-color: var(--primary-color);
    border: 1px solid var(--primary-color); padding: 0.375rem 0.75rem; font-size: 1rem;
    line-height: 1.5; border-radius: 0.25rem; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
} /* Basic button styling */
.form-btn:hover { color: var(--text-light); background-color: var(--secondary-color); border-color: var(--secondary-color); } /* Button hover state */
.form-btn-secondary { color: var(--text-light); background-color: var(--secondary-color); border-color: var(--secondary-color); } /* Secondary button */
.form-btn-accent { color: var(--text-light); background-color: var(--accent-color); border-color: var(--accent-color); } /* Accent button */
.form-btn-outline { 
    color: var(--primary-color); background-color: transparent; border-color: var(--primary-color);
} /* Outline button */
.form-btn-outline:hover { 
    color: var(--text-light); background-color: var(--primary-color); border-color: var(--primary-color);
} /* Outline button hover */
.form-btn-lg { padding: 0.5rem 1rem; font-size: 1.25rem; border-radius: 0.3rem; } /* Large button */
.form-btn-sm { padding: 0.25rem 0.5rem; font-size: 0.875rem; border-radius: 0.2rem; } /* Small button */
.form-btn-block { display: block; width: 100%; } /* Block level button */

/* Textarea */
.form-textarea { 
    width: 100%; padding: 0.5rem 0.75rem; border: 1px solid var(--border); border-radius: 0.25rem;
    font-size: 1rem; line-height: 1.5; color: var(--text); background-color: var(--surface);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; resize: vertical;
} /* Textarea styling */

/* Select */
.form-select { 
    display: block; width: 100%; padding: 0.375rem 2.25rem 0.375rem 0.75rem; -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--text); background-color: var(--surface);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat; background-position: right 0.75rem center; background-size: 16px 12px;
    border: 1px solid var(--border); border-radius: 0.25rem; appearance: none;
} /* Select styling */

/* Checkbox/Radio */
.form-check-input { 
    width: 1em; height: 1em; margin-top: 0.25em; vertical-align: top;
    background-color: var(--surface); border: 1px solid var(--border); appearance: none;
    color-adjust: exact; background-image: var(--check-bg-image, none); background-size: 100% 100%;
    background-repeat: no-repeat; background-position: center; transition: background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
} /* Basic checkbox/radio styling */
.form-check-input[type="checkbox"] { border-radius: 0.25em; } /* Checkbox specific styling */
.form-check-input[type="radio"] { border-radius: 50%; } /* Radio specific styling */
.form-check-input:checked { 
    background-color: var(--primary-color); border-color: var(--primary-color);
    --check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
} /* Checked state for checkbox/radio */
.form-check-label { margin-left: 0.5rem; } /* Label for checkbox/radio */

/* File Input */
.form-file-input { 
    display: block; width: 100%; padding: 0.375rem 0.75rem; font-size: 1rem;
    line-height: 1.5; color: var(--text); background-color: var(--surface);
    border: 1px solid var(--border); border-radius: 0.25rem;
} /* File input styling */

/* Range Input */
.form-range { 
    width: 100%; height: 0.5rem; padding: 0; background-color: var(--border);
    border-radius: 1rem; appearance: none;
} /* Range input styling */
.form-range::-webkit-slider-thumb { 
    width: 1rem; height: 1rem; background-color: var(--primary-color); border: 0;
    border-radius: 1rem; transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out; appearance: none;
} /* Range input thumb styling (webkit) */
.form-range::-moz-range-thumb { 
    width: 1rem; height: 1rem; background-color: var(--primary-color); border: 0;
    border-radius: 1rem; transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out; appearance: none;
} /* Range input thumb styling (moz) */

/* Validation States */
.form-valid-feedback { width: 100%; margin-top: 0.25rem; font-size: 0.875em; color: var(--success-color); } /* Valid feedback message */
.form-invalid-feedback { width: 100%; margin-top: 0.25rem; font-size: 0.875em; color: var(--error-color); } /* Invalid feedback message */
.form-is-valid .form-input { border-color: var(--success-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.343 5.343l-1.414-1.414L.293 4.586 2.343 6.636l4.243-4.243L5.95 1.05z'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); } /* Valid input state */
.form-is-invalid .form-input { border-color: var(--error-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3e%3ccircle fill='%23dc3545' cx='6' cy='6' r='6'/%3e%3cpath fill='%23fff' d='M4.776 3.224L6 4.448l1.224-1.224L8 4l-1.224 1.224L8 6.448l-.776.776L6 5.552l-1.224 1.224L4 6.448l1.224-1.224L4 4l.776-.776z'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); } /* Invalid input state */

/* 18 - Tables */
.table { 
    width: 100%; margin-bottom: 1rem; color: var(--text); border-collapse: collapse;
} /* Basic table styling */
.table th, .table td { 
    padding: 0.75rem; vertical-align: top; border-top: 1px solid var(--border);
} /* Table header/data cell styling */
.table thead th { 
    vertical-align: bottom; border-bottom: 2px solid var(--border);
} /* Table header styling */
.table tbody + tbody { 
    border-top: 2px solid var(--border);
} /* Separator for multiple tbody */
.table-striped tbody tr:nth-of-type(odd) { 
    background-color: rgba(var(--primary-color), 0.05);
} /* Striped table rows */
.table-bordered { border: 1px solid var(--border); } /* Bordered table */
.table-bordered th, .table-bordered td { border: 1px solid var(--border); } /* Bordered table cells */
.table-hover tbody tr:hover { 
    color: var(--text); background-color: rgba(var(--primary-color), 0.075);
} /* Table hover state */
.table-sm th, .table-sm td { padding: 0.3rem; } /* Small table */
.table-dark { 
    color: var(--text-light); background-color: var(--bg-dark);
} /* Dark table */
.table-dark th, .table-dark td, .table-dark thead th { 
    border-color: var(--secondary-color);
} /* Dark table borders */
.table-responsive { overflow-x: auto; -webkit-overflow-scrolling: touch; } /* Responsive table wrapper */

/* Table Layout */
.table-layout-auto { table-layout: auto; } /* Sets table layout to auto */
.table-layout-fixed { table-layout: fixed; } /* Sets table layout to fixed */

/* Border Collapse */
.table-border-collapse { border-collapse: collapse; } /* Collapses table borders */
.table-border-separate { border-collapse: separate; border-spacing: 2px; } /* Separates table borders */

/* Caption Side */
.table-caption-top { caption-side: top; } /* Positions caption to top */
.table-caption-bottom { caption-side: bottom; } /* Positions caption to bottom */

/* Empty Cells */
.table-empty-cells-show { empty-cells: show; } /* Shows empty cells */
.table-empty-cells-hide { empty-cells: hide; } /* Hides empty cells */

/* 19 - Lists */
/* List Style Type */
.list-style-none { list-style-type: none; } /* Removes list markers */
.list-style-disc { list-style-type: disc; } /* Sets list marker to disc */
.list-style-circle { list-style-type: circle; } /* Sets list marker to circle */
.list-style-square { list-style-type: square; } /* Sets list marker to square */
.list-style-decimal { list-style-type: decimal; } /* Sets list marker to decimal */
.list-style-alpha-lower { list-style-type: lower-alpha; } /* Sets list marker to lower alpha */
.list-style-roman-upper { list-style-type: upper-roman; } /* Sets list marker to upper roman */

/* List Style Position */
.list-position-inside { list-style-position: inside; } /* Positions marker inside content */
.list-position-outside { list-style-position: outside; } /* Positions marker outside content */

/* List Style Image */
.list-image-url { list-style-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"%3E%3Ccircle cx="5" cy="5" r="5" fill="%23007bff"/%3E%3C/svg%3E'); } /* Custom SVG list image */

/* Custom List Markers (using ::marker) */
.list-custom-marker li::marker { content: "👉 "; color: var(--accent-color); font-size: 1.2em; } /* Custom marker with emoji */
.list-custom-marker-square li::marker { content: "\25A0 "; color: var(--primary-color); } /* Custom square marker */

/* 20 - Tooltips */
.tooltip-container { position: relative; display: inline-block; } /* Tooltip container */
.tooltip-text { 
    visibility: hidden; width: 120px; background-color: var(--text-dark); color: var(--text-light);
    text-align: center; border-radius: 6px; padding: 5px 0; position: absolute; z-index: 1;
    bottom: 125%; left: 50%; margin-left: -60px; opacity: 0; transition: opacity 0.3s;
} /* Basic tooltip text */
.tooltip-container:hover .tooltip-text { visibility: visible; opacity: 1; } /* Show tooltip on hover */
.tooltip-top .tooltip-text { bottom: 125%; left: 50%; margin-left: -60px; } /* Tooltip top */
.tooltip-bottom .tooltip-text { top: 125%; left: 50%; margin-left: -60px; } /* Tooltip bottom */
.tooltip-left .tooltip-text { top: -5px; right: 125%; margin-top: -5px; } /* Tooltip left */
.tooltip-right .tooltip-text { top: -5px; left: 125%; margin-top: -5px; } /* Tooltip right */
.tooltip-arrow-top::after { 
    content: ""; position: absolute; top: 100%; left: 50%; margin-left: -5px;
    border-width: 5px; border-style: solid; border-color: var(--text-dark) transparent transparent transparent;
} /* Tooltip arrow top */

/* 21 - Modals */
.modal-overlay { 
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);
    display: flex; justify-content: center; align-items: center; z-index: 1000; visibility: hidden;
    opacity: 0; transition: visibility 0s, opacity 0.3s ease;
} /* Modal overlay */
.modal-overlay.is-open { visibility: visible; opacity: 1; } /* Open modal overlay */
.modal-content { 
    background-color: var(--surface); padding: 2rem; border-radius: 0.5rem; max-width: 500px;
    width: 90%; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transform: translateY(-50px); opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
} /* Modal content */
.modal-overlay.is-open .modal-content { transform: translateY(0); opacity: 1; } /* Open modal content animation */
.modal-header { 
    display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;
    border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;
} /* Modal header */
.modal-footer { 
    display: flex; justify-content: flex-end; margin-top: 1rem;
    border-top: 1px solid var(--border); padding-top: 0.5rem;
} /* Modal footer */
.modal-close-btn { 
    background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text);
} /* Modal close button */

/* 22 - Media Queries (examples, actual implementation would be in specific components) */
/* Small devices (phones, 576px and down) */
@media (max-width: 576px) { 
    .media-sm-hidden { display: none; } /* Hides element on small screens */
    .media-sm-full-width { width: 100%; } /* Full width on small screens */
} /* Media query for small screens */

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 
    .media-md-grid-2 { grid-template-columns: repeat(2, 1fr); } /* 2 column grid on medium screens */
    .media-md-text-lg { font-size: 1.25rem; } /* Large text on medium screens */
} /* Media query for medium screens */

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    .media-lg-flex { display: flex; } /* Flex display on large screens */
    .media-lg-sidebar-show { display: block; } /* Shows sidebar on large screens */
} /* Media query for large screens */

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
    .media-xl-container { max-width: 1140px; } /* Max width container on extra large screens */
} /* Media query for extra large screens */

/* Orientation */
@media (orientation: landscape) { 
    .media-landscape-adjust { flex-direction: row; } /* Adjusts flex direction in landscape */
} /* Media query for landscape orientation */

/* Print Styles */
@media print { 
    .print-hidden { display: none; } /* Hides element when printing */
    .print-text-black { color: #000 !important; } /* Forces black text when printing */
} /* Media query for print */

/* 23 - Container Queries (examples, requires browser support or polyfill) */
@container (min-width: 400px) { 
    .container-card { flex-direction: row; } /* Card flex direction changes at 400px container width */
} /* Container query for min-width 400px */
@container (max-width: 300px) { 
    .container-text-sm { font-size: 0.875rem; } /* Text size changes at 300px container width */
} /* Container query for max-width 300px */
@container (min-height: 200px) { 
    .container-tall-element { padding-top: 2rem; } /* Padding changes at 200px container height */
} /* Container query for min-height 200px */

/* 24 - Scroll Effects */
/* Scroll Snap */
.scroll-snap-container-y { scroll-snap-type: y mandatory; overflow-y: scroll; } /* Vertical mandatory scroll snap container */
.scroll-snap-item-start { scroll-snap-align: start; } /* Scroll snap item alignment to start */
.scroll-snap-item-end { scroll-snap-align: end; } /* Scroll snap item alignment to end */
.scroll-snap-item-center { scroll-snap-align: center; } /* Scroll snap item alignment to center */
.scroll-snap-container-x { scroll-snap-type: x proximity; overflow-x: scroll; } /* Horizontal proximity scroll snap container */

/* Overscroll Behavior */
.overscroll-behavior-auto { overscroll-behavior: auto; } /* Default overscroll behavior */
.overscroll-behavior-none { overscroll-behavior: none; } /* Prevents overscroll chaining */
.overscroll-behavior-contain { overscroll-behavior: contain; } /* Contains overscroll within element */
.overscroll-behavior-y-none { overscroll-behavior-y: none; } /* Prevents vertical overscroll chaining */

/* Scroll Behavior */
.scroll-behavior-smooth { scroll-behavior: smooth; } /* Smooth scrolling */

/* 25 - Shapes */
/* Clip Path */
.clip-path-inset { clip-path: inset(10% 20% 30% 40%); } /* Inset clip path */
.clip-path-circle { clip-path: circle(50% at 50% 50%); } /* Circle clip path */
.clip-path-ellipse { clip-path: ellipse(40% 30% at 50% 50%); } /* Ellipse clip path */
.clip-path-polygon { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); } /* Polygon clip path (diamond) */
.clip-path-star { clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); } /* Star clip path */
.clip-path-url { clip-path: url(#myClip); } /* Clip path from SVG URL */

/* Shape Outside */
.shape-outside-circle { shape-outside: circle(50%); float: left; margin-right: 1rem; } /* Text wraps around a circle shape */
.shape-outside-ellipse { shape-outside: ellipse(50% 50%); float: right; margin-left: 1rem; } /* Text wraps around an ellipse shape */
.shape-outside-polygon { shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%); float: left; } /* Text wraps around a polygon (square) */
.shape-outside-image { shape-outside: url('https://via.placeholder.com/100'); } /* Text wraps around an image's alpha channel */

/* 26 - SVG Filters (applying to HTML elements) */
/* Example SVG Filter Definition (usually in SVG file or <defs>) */
/* <svg width="0" height="0" style="position: absolute; z-index: -1;">
  <filter id="f1" x="0" y="0" width="200%" height="200%">
    <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" />
    <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
  </filter>
</svg> */
.svg-filter-shadow { filter: url(#f1); } /* Applies an SVG filter for shadow */
.svg-filter-duotone { filter: url(#duotone-filter); } /* Applies a duotone SVG filter */

/* 27 - Cursors */
.cursor-auto { cursor: auto; } /* Default cursor */
.cursor-default { cursor: default; } /* Default arrow cursor */
.cursor-none { cursor: none; } /* No cursor */
.cursor-help-c { cursor: help; } /* Help cursor */
.cursor-pointer-c { cursor: pointer; } /* Pointer cursor (hand) */
.cursor-progress { cursor: progress; } /* Progress cursor */
.cursor-wait-c { cursor: wait; } /* Wait cursor */
.cursor-crosshair { cursor: crosshair; } /* Crosshair cursor */
.cursor-text-c { cursor: text; } /* Text selection cursor */
.cursor-move { cursor: move; } /* Move cursor */
.cursor-grab { cursor: grab; } /* Grab cursor */
.cursor-grabbing { cursor: grabbing; } /* Grabbing cursor */
.cursor-not-allowed-c { cursor: not-allowed; } /* Not allowed cursor */
.cursor-zoom-in { cursor: zoom-in; } /* Zoom in cursor */
.cursor-zoom-out { cursor: zoom-out; } /* Zoom out cursor */
.cursor-col-resize { cursor: col-resize; } /* Column resize cursor */
.cursor-row-resize { cursor: row-resize; } /* Row resize cursor */
.cursor-custom { cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="%23007bff"/></svg>') 10 10, auto; } /* Custom SVG cursor */

/* 28 - Scrollbars (webkit-specific for customization) */
.scrollbar-custom::-webkit-scrollbar { width: 12px; } /* Custom scrollbar width */
.scrollbar-custom::-webkit-scrollbar-track { background: var(--bg); border-radius: 10px; } /* Custom scrollbar track */
.scrollbar-custom::-webkit-scrollbar-thumb { background: var(--primary-color); border-radius: 10px; border: 3px solid var(--bg); } /* Custom scrollbar thumb */
.scrollbar-custom::-webkit-scrollbar-thumb:hover { background: var(--accent-color); } /* Custom scrollbar thumb hover */
.scrollbar-hidden::-webkit-scrollbar { display: none; } /* Hides scrollbar */

/* 29 - Caret/Selection */
.caret-color-accent { caret-color: var(--accent-color); } /* Sets caret color to accent */
.selection-primary::selection { background: var(--primary-color); color: var(--text-light); } /* Styles text selection */
.selection-secondary::-moz-selection { background: var(--secondary-color); color: var(--text-light); } /* Styles text selection (Mozilla) */

/* 30 - Writing Modes */
.writing-mode-vertical-rl { writing-mode: vertical-rl; } /* Sets writing mode to vertical right-to-left */
.writing-mode-vertical-lr { writing-mode: vertical-lr; } /* Sets writing mode to vertical left-to-right */
.writing-mode-horizontal-tb { writing-mode: horizontal-tb; } /* Sets writing mode to horizontal top-to-bottom */
.text-orientation-sideways { text-orientation: sideways; } /* Sets text orientation to sideways */
.text-orientation-upright { text-orientation: upright; } /* Sets text orientation to upright */

/* 31 - Columns */
.columns-2 { column-count: 2; } /* Divides content into 2 columns */
.columns-3 { column-count: 3; } /* Divides content into 3 columns */
.columns-width-150 { column-width: 150px; } /* Sets column width to 150px */
.columns-gap-lg { column-gap: 2rem; } /* Sets column gap to large */
.columns-rule { column-rule: 1px solid var(--border); } /* Sets column rule */
.columns-span-all { column-span: all; } /* Spans element across all columns */

/* 32 - Borders */
/* Border Styles */
.border-solid { border-style: solid; } /* Solid border */
.border-dashed { border-style: dashed; } /* Dashed border */
.border-dotted { border-style: dotted; } /* Dotted border */
.border-double { border-style: double; } /* Double border */
.border-groove { border-style: groove; } /* Groove border */
.border-ridge { border-style: ridge; } /* Ridge border */
.border-inset { border-style: inset; } /* Inset border */
.border-outset { border-style: outset; } /* Outset border */

/* Border Widths */
.border-w-1 { border-width: 1px; } /* 1px border width */
.border-w-2 { border-width: 2px; } /* 2px border width */
.border-w-4 { border-width: 4px; } /* 4px border width */
.border-t-w-2 { border-top-width: 2px; } /* Top border 2px */

/* Border Colors (re-using from Color Palettes for consistency) */
.border-color-primary { border-color: var(--primary-color); } /* Primary border color */

/* Border Radius */
.border-radius-sm { border-radius: 0.25rem; } /* Small border radius */
.border-radius-md { border-radius: 0.5rem; } /* Medium border radius */
.border-radius-lg { border-radius: 1rem; } /* Large border radius */
.border-radius-full { border-radius: 9999px; } /* Full border radius (circle/pill) */
.border-radius-top { border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem; } /* Top border radius */

/* Border Image */
.border-image-gradient { border-image: linear-gradient(45deg, var(--primary-color), var(--accent-color)) 1; } /* Border image from gradient */
.border-image-slice { border-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="30" height="30"%3E%3Crect x="0" y="0" width="10" height="10" fill="%23007bff"/%3E%3Crect x="20" y="0" width="10" height="10" fill="%23007bff"/%3E%3Crect x="0" y="20" width="10" height="10" fill="%23007bff"/%3E%3Crect x="20" y="20" width="10" height="10" fill="%23007bff"/%3E%3C/svg%3E') 10 round; } /* Border image from SVG with slice */

/* 33 - Box Shadows */
.box-shadow-sm { box-shadow: 0 1px 2px rgba(0,0,0,0.05); } /* Small box shadow */
.box-shadow-md { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); } /* Medium box shadow */
.box-shadow-lg { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); } /* Large box shadow */
.box-shadow-xl { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); } /* Extra large box shadow */
.box-shadow-inset { box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.06); } /* Inset box shadow */
.box-shadow-primary { box-shadow: 0 0 0 3px rgba(var(--primary-color), 0.5); } /* Primary color box shadow */
.box-shadow-neon-glow { box-shadow: 0 0 10px var(--accent-color), 0 0 20px var(--accent-color), 0 0 30px var(--accent-color); } /* Neon glow box shadow */
.box-shadow-none { box-shadow: none; } /* Removes box shadow */

/* 34 - Outline */
.outline-none { outline: none; } /* Removes outline */
.outline-solid-primary { outline: 2px solid var(--primary-color); } /* Solid primary outline */
.outline-dashed-accent { outline: 2px dashed var(--accent-color); } /* Dashed accent outline */
.outline-offset-2 { outline-offset: 2px; } /* Outline offset 2px */
.outline-offset-negative { outline-offset: -3px; } /* Negative outline offset */

/* 35 - Pseudo-elements */
/* Before/After */
.pseudo-before::before { content: "\201C"; font-size: 2em; color: var(--accent-color); display: inline-block; margin-right: 0.2em; } /* Adds a quote mark before content */
.pseudo-after::after { content: "\201D"; font-size: 2em; color: var(--accent-color); display: inline-block; margin-left: 0.2em; } /* Adds a quote mark after content */
.pseudo-icon-before::before { content: "\f00c"; font-family: 'Font Awesome 5 Free'; font-weight: 900; margin-right: 0.5rem; color: var(--success-color); } /* Adds Font Awesome icon before */
.pseudo-underline::after { content: ''; display: block; width: 0; height: 2px; background: var(--primary-color); transition: width 0.3s ease; } /* Underline effect after */
.pseudo-underline:hover::after { width: 100%; } /* Underline effect on hover */

/* 36 - Text Effects */
/* Text Stroke (webkit-specific) */
.text-stroke-primary { -webkit-text-stroke: 1px var(--primary-color); color: transparent; } /* Primary color text stroke */
.text-stroke-accent-2px { -webkit-text-stroke: 2px var(--accent-color); color: var(--surface); } /* Accent color 2px text stroke */

/* Text Fill Color (webkit-specific) */
.text-fill-gradient { 
    background: linear-gradient(to right, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
} /* Gradient text fill */

/* Text Overflow Ellipsis (re-using from Typography for consistency) */
.text-overflow-ellipsis-effect { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } /* Truncates text with ellipsis */

/* 37 - Accessibility Helpers */
.util-visually-hidden { 
    position: absolute !important; width: 1px !important; height: 1px !important; 
    padding: 0 !important; margin: -1px !important; overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important; white-space: nowrap !important; border: 0 !important;
} /* Visually hidden but accessible (more robust) */
.util-focusable:focus { 
    outline: 2px solid var(--accent-color); outline-offset: 2px;
} /* Adds focus outline for accessibility */

/* 38 - Print Styles (re-using from Media Queries for consistency) */
/* @media print { ... } */

/* 39 - Aspect Ratios */
.aspect-ratio-16x9 { aspect-ratio: 16 / 9; } /* 16:9 aspect ratio */
.aspect-ratio-1x1 { aspect-ratio: 1 / 1; } /* 1:1 aspect ratio */
.aspect-ratio-4x3 { aspect-ratio: 4 / 3; } /* 4:3 aspect ratio */
.aspect-ratio-auto { aspect-ratio: auto; } /* Auto aspect ratio */

/* 40 - Variables & Fallbacks */
.var-fallback-color { color: var(--non-existent-color, var(--primary-color)); } /* Uses primary color as fallback */
.var-fallback-bg { background-color: var(--another-bg-var, #eee); } /* Uses #eee as fallback */
.var-calc-width { width: calc(100% - var(--sidebar-width, 200px)); } /* Calculates width with variable fallback */

/* 41 - Accent Color (for form elements) */
.accent-color-primary { accent-color: var(--primary-color); } /* Sets accent color to primary */
.accent-color-secondary { accent-color: var(--secondary-color); } /* Sets accent color to secondary */

/* 42 - Color Scheme */
.color-scheme-dark { color-scheme: dark; } /* Forces dark color scheme */
.color-scheme-light { color-scheme: light; } /* Forces light color scheme */
.color-scheme-light-dark { color-scheme: light dark; } /* Allows both light and dark color schemes */

/* 43 - Marker Styling (for list items) */
.marker-color-accent li::marker { color: var(--accent-color); } /* Styles list marker color */
.marker-font-size li::marker { font-size: 1.5em; } /* Styles list marker font size */
.marker-content li::marker { content: "\2713 "; } /* Custom content for list marker (checkmark) */

/* 44 - Is/Where Selectors */
.is-heading:is(h1, h2, h3) { margin-top: 2rem; margin-bottom: 1rem; } /* Styles h1, h2, h3 */
.where-link:where(a:link, a:visited) { color: var(--primary-color); text-decoration: none; } /* Styles links without specificity */
.is-button:is(.btn, .button) { padding: 0.5rem 1rem; border-radius: 0.25rem; } /* Styles elements with .btn or .button class */

/* Component Styles Examples */
/* Cards */
.card { 
    background-color: var(--surface); border: 1px solid var(--border); border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05); padding: 1rem; margin-bottom: 1rem;
} /* Basic card style */
.card-glass { 
    background-color: rgba(var(--surface), 0.7); backdrop-filter: blur(10px); border-color: rgba(var(--border), 0.5);
} /* Glassmorphism card */
.card-sleek { 
    background: linear-gradient(to bottom right, var(--surface), var(--bg)); border: none;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08); 
} /* Sleek card */
.card-solid-primary { 
    background-color: var(--primary-color); color: var(--text-light); border-color: var(--primary-color);
} /* Solid primary card */

/* Responsive Card Variants (examples) */
@media (min-width: 768px) { 
    .card-glass-md { padding: 1.5rem; } /* Medium glass card padding */
    .card-sleek-md { border-radius: 0.75rem; } /* Medium sleek card border radius */
}
@media (min-width: 992px) { 
    .card-glass-lg { padding: 2rem; } /* Large glass card padding */
    .card-sleek-lg { box-shadow: 0 8px 20px rgba(0,0,0,0.1); } /* Large sleek card shadow */
}

/* Badges */
.badge { 
    display: inline-block; padding: 0.25em 0.4em; font-size: 75%; font-weight: 700;
    line-height: 1; text-align: center; white-space: nowrap; vertical-align: baseline;
    border-radius: 0.25rem; color: var(--text-light); background-color: var(--secondary-color);
} /* Basic badge style */
.badge-primary { background-color: var(--primary-color); } /* Primary badge */
.badge-accent { background-color: var(--accent-color); } /* Accent badge */
.badge-success { background-color: var(--success-color); } /* Success badge */
.badge-warning { background-color: var(--warning-color); } /* Warning badge */
.badge-error { background-color: var(--error-color); } /* Error badge */
.badge-info { background-color: var(--info-color); } /* Info badge */
.badge-pill { border-radius: 10rem; } /* Pill badge */
.badge-outline { 
    background-color: transparent; border: 1px solid currentColor; color: var(--primary-color);
} /* Outline badge */

/* Alerts */
.alert { 
    position: relative; padding: 0.75rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent;
    border-radius: 0.25rem; color: var(--text-dark); background-color: var(--surface);
} /* Basic alert style */
.alert-primary { 
    color: #004085; background-color: #cce5ff; border-color: #b8daff;
} /* Primary alert */
.alert-success { 
    color: #155724; background-color: #d4edda; border-color: #c3e6cb;
} /* Success alert */
.alert-warning { 
    color: #856404; background-color: #fff3cd; border-color: #ffeeba;
} /* Warning alert */
.alert-error { 
    color: #721c24; background-color: #f8d7da; border-color: #f5c6cb;
} /* Error alert */
.alert-info { 
    color: #0c5460; background-color: #d1ecf1; border-color: #bee5eb;
} /* Info alert */
.alert-dismissible { 
    padding-right: 4rem;
} /* Dismissible alert */
.alert-dismissible .close { 
    position: absolute; top: 0; right: 0; padding: 0.75rem 1.25rem; color: inherit;
} /* Dismiss button for alert */

/* Toasts */
.toast-container { 
    position: fixed; top: 1rem; right: 1rem; z-index: 1050;
} /* Toast container */
.toast { 
    max-width: 350px; overflow: hidden; font-size: 0.875rem; background-color: rgba(var(--surface), 0.85);
    background-clip: padding-box; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,0.1);
    backdrop-filter: blur(10px); border-radius: 0.25rem; display: none; opacity: 0;
    transition: opacity 0.15s linear;
} /* Basic toast style */
.toast.show { display: block; opacity: 1; } /* Show toast */
.toast-header { 
    display: flex; align-items: center; padding: 0.5rem 0.75rem; color: var(--text);
    background-color: rgba(var(--surface), 0.85); border-bottom: 1px solid rgba(0,0,0,0.05);
} /* Toast header */
.toast-body { padding: 0.75rem; color: var(--text); } /* Toast body */
.toast-close { 
    margin-left: auto; background: none; border: none; font-size: 1.25rem; cursor: pointer;
    color: var(--text); opacity: 0.5;
} /* Toast close button */

/* Background Modes (utility classes) */
.bg-solid { background-color: var(--bg); } /* Solid background */
.bg-gradient { background-image: linear-gradient(to bottom right, var(--primary-color), var(--secondary-color)); } /* Gradient background */
.bg-animated { 
    background: linear-gradient(-45deg, var(--primary-color), var(--secondary-color), var(--accent-color), var(--info-color));
    background-size: 400% 400%; animation: bg-gradient-animation 15s ease infinite;
} /* Animated gradient background */
@keyframes bg-gradient-animation { 
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
} /* Keyframes for animated background */
.bg-image { background-image: url('https://via.placeholder.com/1920x1080/6c757d/ffffff?text=Background+Image'); background-size: cover; background-position: center; } /* Image background */
(() => {
  // --- color helpers ---
  const COLOR_MAP = {
    Black:"#000000", White:"#ffffff", Gray:"#808080", Silver:"#c0c0c0",
    Red:"#ef4444", Green:"#22c55e", Blue:"#3b82f6", Yellow:"#f59e0b",
    Orange:"#f97316", Purple:"#7c3aed", Pink:"#ec4899", Teal:"#14b8a6",
    Cyan:"#06b6d4", Lime:"#84cc16", Amber:"#f59e0b", Indigo:"#6366f1",
    Violet:"#8b5cf6", Gold:"#fbbf24"
  };
  const isHex = v => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v);
  const toHex = (v, fb) => {
    if (!v) return fb;
    const k = String(v).trim();
    if (isHex(k)) return k;
    const hit = Object.keys(COLOR_MAP).find(n => n.toLowerCase() === k.toLowerCase());
    return hit ? COLOR_MAP[hit] : fb;
  };
  const hexToRgbTuple = (hex) => {
    let h = hex.replace('#','');
    if (h.length === 3) h = h.split('').map(x=>x+x).join('');
    const r = parseInt(h.slice(0,2),16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
    return [r,g,b];
  };

  // --- params ---
  const parseParams = () => {
    const script = document.currentScript || [...document.scripts].find(s=>s.src.includes("walnut-ui.js")) || {src:location.href};
    const url = new URL(script.src, location.href);
    const colors = (url.searchParams.get("colors") || "Purple,Teal,Amber").split(",").map(s=>s.trim());
    const style = (url.searchParams.get("style") || "glass").toLowerCase();
    const background = (url.searchParams.get("background") || "solid").toLowerCase(); // solid|gradient|animated|image
    const bgurl = url.searchParams.get("bgurl") || ""; // optional image URL
    return { colors, style, background, bgurl };
  };

  // --- apply theme & background ---
  const applyTheme = ({colors, style, background, bgurl}) => {
    const root = document.documentElement;
    const [p,s,a] = colors;
    const P = toHex(p, "#7c3aed");
    const S = toHex(s, "#14b8a6");
    const A = toHex(a, "#f59e0b");

    // HEX vars
    root.style.setProperty("--primary-color", P);
    root.style.setProperty("--secondary-color", S);
    root.style.setProperty("--accent-color", A);

    // RGB vars for rgba() usage in your CSS bank
    const [pr,pg,pb] = hexToRgbTuple(P);
    const [sr,sg,sb] = hexToRgbTuple(S);
    const [ar,ag,ab] = hexToRgbTuple(A);
    root.style.setProperty("--primary-rgb", `${pr}, ${pg}, ${pb}`);
    root.style.setProperty("--secondary-rgb", `${sr}, ${sg}, ${sb}`);
    root.style.setProperty("--accent-rgb", `${ar}, ${ag}, ${ab}`);

    // Give surface/border fallbacks in RGB too (if your CSS uses them with rgba())
    // You can override these in your base theme if needed:
    const surface = getComputedStyle(root).getPropertyValue('--surface').trim() || "#ffffff";
    const border = getComputedStyle(root).getPropertyValue('--border').trim() || "#dee2e6";
    const toRGB = (hex) => hexToRgbTuple(/^#/.test(hex) ? hex : "#ffffff").join(", ");
    if (!getComputedStyle(root).getPropertyValue('--surface-rgb').trim()) {
      root.style.setProperty('--surface-rgb', toRGB(surface));
    }
    if (!getComputedStyle(root).getPropertyValue('--border-rgb').trim()) {
      root.style.setProperty('--border-rgb', toRGB(border));
    }

    // style preset marker (use in your CSS if you want)
    root.setAttribute("data-walnut-style", ["glass","sleek","solid"].includes(style) ? style : "glass");

    // background classes on <body>
    const b = document.body;
    b.classList.remove("bg-solid","bg-gradient","bg-animated","bg-image");
    b.classList.add(`bg-${["solid","gradient","animated","image"].includes(background) ? background : "solid"}`);

    // optional custom image
    if (background === "image" && bgurl) {
      b.style.setProperty("--bg-image-url", `url("${bgurl.replace(/"/g,'\\"')}")`);
    } else {
      b.style.removeProperty("--bg-image-url");
    }
  };

  // --- init ---
  const init = () => {
    const config = parseParams();
    applyTheme(config);
    console.log("🌰 Walnut UI ready:", config);
  };

  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
