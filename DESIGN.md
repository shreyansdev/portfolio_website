# Manga Design System Specification

A technical summary of the design system values and patterns implemented in the codebase.

---

## 1. Color System

Colors are implemented as CSS custom properties on `<html>` and dynamically toggled via `data-theme="light"` and `data-theme="dark"` attributes.

| Variable | Light Mode (`:root`, `[data-theme="light"]`) | Dark Mode (`[data-theme="dark"]`) | Description |
| :--- | :--- | :--- | :--- |
| `--paper` | `#ffffff` | `#0a0a0a` | Primary background canvas |
| `--ink` | `#0a0a0a` | `#ffffff` | Primary text, strokes, and solid fills |
| `--tone` | `#ededed` | `#1a1a1a` | Secondary panel background & contrast fill |
| `--line` | `#0a0a0a` | `#ffffff` | Panel borders and dividing rules |
| `--muted` | `#555555` | `#bcbcbc` | Secondary body text and metadata labels |
| `--dot` | `rgba(10, 10, 10, 0.17)` | `rgba(255, 255, 255, 0.18)` | Screentone halftone dot color |
| `--shadow` | `7px 7px 0 var(--ink)` | `7px 7px 0 var(--ink)` | Hard manga drop shadow |
| `--nav` | `rgba(255, 255, 255, 0.94)` | `rgba(10, 10, 10, 0.94)` | Header blur backdrop |

Tailwind semantic color aliases map directly to these variables: `paper`, `ink-new`, `tone`, `line`, `muted`, `nav`.

---

## 2. Typography

Loaded via `next/font/google` in `app/layout.tsx` and mapped to CSS variables:

- **Display (`font-display`)**: `var(--font-anton), Anton, Impact, sans-serif`
  - Weight: `400`
  - Style: Uppercase, letter-spacing `0.015em`, line-height `0.95`–`0.98`.
  - Usage: Hero headlines, chapter titles, project titles, numbers, volume tags.
- **Sans / Body (`font-sans`)**: `var(--font-inter), Inter, Arial, sans-serif`
  - Weights: `400`, `500`, `600`
  - Style: Clean geometric sans-serif, line-height `1.6`–`1.7`.
  - Usage: Paragraphs, descriptions, bullet points, author bios.
- **Monospace (`font-mono`)**: `var(--font-dm-mono), "DM Mono", monospace`
  - Weights: `400`, `500`
  - Style: Monospace, letter-spacing `0.04em`, uppercase for labels.
  - Usage: Chapter eyebrows, tags/chips, timestamps, stats, buttons.

---

## 3. Layout & Spacing

- **Container Width**: `width: min(1180px, calc(100% - 48px)); max-width: 80rem; margin: auto;`
- **Section Padding**: `py-16 sm:py-20 lg:py-28` (`padding: 110px 0` on desktop, `74px 0` on mobile).
- **Sticky Header Height**: `76px` (`66px` on mobile screens).
- **Grid Gutters**:
  - Dense grids (Skills, Mini-panels): `gap-3 sm:gap-4` (`12px`–`16px`).
  - Split column sections (About, Experience, Contact): `gap-8 lg:gap-12` (`24px`–`42px`).

---

## 4. Manga Primitives & Effects

- **Panel Borders**: `border: 2px solid var(--line)` (with `border-[3px]` for hero and chapter seals).
- **Panel Corner Cuts (`.cut-corner-panel`)**:
  `clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 12px 100%, 0 calc(100% - 12px))`
- **Profile Frame (`.profile-frame`)**:
  `border: 4px solid var(--ink); background: var(--tone); transform: rotate(3deg); clip-path: polygon(0 0, 100% 0, 100% 91%, 91% 100%, 0 100%); box-shadow: 12px 12px 0 var(--ink)`
- **Screentone Halftone (`.halftone`)**:
  `background-image: radial-gradient(var(--dot) 1px, transparent 1.3px); background-size: 7px 7px;`
- **Vertical Japanese Strip (`.vertical-jp`)**:
  `writing-mode: vertical-rl; font-family: var(--font-dm-mono), monospace; letter-spacing: 0.25em;`
- **Buttons (`.btn`)**:
  - Base: `display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 12px 18px; border: 2px solid var(--ink); font-family: var(--font-dm-mono); font-size: 11px; letter-spacing: 0.04em; text-transform: uppercase; background: var(--paper); color: var(--ink);`
  - Solid variant (`.btn.solid`): `background: var(--ink); color: var(--paper);`
  - Hover: `transform: translate(-2px, -2px); box-shadow: 4px 4px 0 var(--ink);`
  - Active: `transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--ink);`
- **Speech Bubbles (`SpeechBubble`)**:
  - Quote tail: `p-6 sm:p-7 border-2 border-line bg-tone relative` with `left-9 -bottom-[17px] w-7 h-7 bg-tone border-l-2 border-b-2 border-line transform: skew(-25deg) rotate(-25deg)`.

---

## 5. Animation Rules

All animations run through Framer Motion using `LazyMotion` and `domAnimation` features:

- **Performance Constraints**:
  - Animate only `transform` and `opacity` properties.
  - No interactive animation exceeds `800ms`.
  - Viewport scroll reveals execute once: `{ viewport: { once: true, amount: 0.2 } }`.
- **Easings & Spring Configurations**:
  - Standard ease: `mangaEase = [0.22, 1, 0.36, 1]`
  - Entrance slam spring: `{ type: "spring", stiffness: 380, damping: 24, mass: 0.8 }`
  - Pop spring: `{ type: "spring", stiffness: 420, damping: 20 }`
  - Letter stamp spring: `{ type: "spring", stiffness: 450, damping: 20 }`
- **Ambient Animations**:
  - Background focus lines rotate slowly via CSS compositor: `@keyframes focusSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }` at `80s linear infinite`.
- **View Transitions**:
  - Theme switching invokes `document.startViewTransition` using click origin coordinates to animate a circular mask across the viewport (`clipPath: circle(...)`, duration `450ms`, easing `cubic-bezier(0.22, 1, 0.36, 1)`).
- **Accessibility**:
  - Wrapped globally in `<MotionConfig reducedMotion="user">`.
  - Parallax and 3D card tilt are scoped to desktop pointer devices (`(pointer: fine) and (hover: hover)`).
