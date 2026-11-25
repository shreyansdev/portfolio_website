# Shreyans Jain — Portfolio Website

Personal portfolio website for Shreyans Jain, a Computer Science & Engineering undergraduate at Acharya Institute of Technology, Bengaluru. The site is designed with a manga aesthetic featuring screentone halftones, angled panel borders, kanji chapter seals, light/dark mode support, and spring-based animations.

**Live URL:** [https://shreyansdev.github.io/portfolio_website/](https://shreyansdev.github.io/portfolio_website/)

---

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static HTML Export)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11 (`LazyMotion`, `domMax`, `MotionConfig`) + pure CSS keyframe hero entrance
- **Icons**: Lucide React
- **Deployment**: GitHub Pages via GitHub Actions

---

## Directory Structure

```
portfolio_website/
├── app/
│   ├── apple-icon.png         # File-based Apple touch icon (180x180)
│   ├── favicon.ico            # File-based multi-resolution icon (16, 32, 48 px)
│   ├── globals.css            # CSS variables for light/dark mode, manga utilities, hero keyframes
│   ├── layout.tsx             # Root layout, viewport/canonical/JSON-LD metadata, fonts, skip link
│   ├── page.tsx               # Main page assembling section templates
│   ├── robots.ts              # Static robots.txt route (force-static)
│   └── sitemap.ts             # Static sitemap.xml route (force-static)
├── assets-src/
│   ├── avatar-dark.png        # High-res dark-background avatar source
│   └── avatar-light.png       # High-res light-background avatar source
├── content/
│   ├── resumeData.ts          # Structured resume data (education, skills, projects, certs)
│   └── siteContent.ts         # Manga copy, chapter seals, headings, sound effects
├── public/
│   ├── avatar-dark-160.webp   # Optimized 160x160 dark avatar for circular badges
│   ├── avatar-dark-800.webp   # Optimized 800x800 dark avatar for hero frame
│   ├── avatar-light-160.webp  # Optimized 160x160 light avatar for circular badges
│   ├── avatar-light-800.webp  # Optimized 800x800 light avatar for hero frame
│   ├── og.png                 # 1200x630 monochrome Open Graph / Twitter share card
│   └── resume.pdf             # Downloadable resume document
├── theme/
│   ├── components/            # Manga UI primitives (AvatarImage, BurstBubble, ChapterHeading, Panel, ProjectCoverArt, SpeechBubble, Tag)
│   │   └── anim/              # Animation wrappers (AvatarParallax, CardTilt, Reveal, ScrollProgress, Stagger, TagStagger, TextMaskReveal, TimelineProgress)
│   ├── context/               # ThemeContext (View Transitions API, OS/storage sync) & MotionProvider (domMax)
│   ├── functions/             # Animation variants (animations.ts) & siteConfig.ts
│   ├── partials/              # Navbar, ThemeToggle, ResumeButton, SocialLinks
│   └── templates/             # Sections: Hero, About, Skills, Experience, Projects, ContactFooter
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions deployment workflow
├── next.config.mjs            # Next.js static export configuration
├── package.json               # Project manifest
└── tailwind.config.ts         # Tailwind configuration mapped to CSS variables
```

---

## Editing Site Content

All text, projects, and credentials are decoupled from presentation templates and managed across three files:

1. **`content/resumeData.ts`**:
   - `personalInfo`: Name, bio, tagline, contact details.
   - `education`: Academic history, institutions, dates, scores, and details.
   - `skillCategories`: Toolkit grouped by category.
   - `projects`: Project titles, years, tech stacks, GitHub links, and bullet descriptions.
   - `certifications`: Professional licenses and NPTEL achievements (rendered in Education).
   - `coursework`: Core academic subjects (rendered in About).

2. **`content/siteContent.ts`**:
   - Chapter numbering, kanji seals (`一`, `二`, `三`, `四`, `五`, `六`), and Japanese text strips.
   - Section subheadings, pull quotes, stat labels, and button labels.
   - Katakana sound effects (`ドン`, `ゴゴゴ`) and decorative text.

3. **`theme/functions/siteConfig.ts`**:
   - Navigation links and anchors (`navItems`).
   - Social profile URLs (LinkedIn, GitHub, email, phone).
   - Theme-specific avatar paths (`avatarLight800`, `avatarDark800`, `avatarLight160`, `avatarDark160`), `avatarAlt`, `resumePath`, and global metadata titles/descriptions.

---

## Local Development

### Prerequisites

- Node.js 18.17 or higher
- npm 9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/shreyansdev/portfolio_website.git
cd portfolio_website

# Install dependencies using the exact lockfile
npm ci
```

### Running Locally

```bash
# Start the local development server at http://localhost:3000
npm run dev
```

### Building for Production

```bash
# Type check and build static export to the out/ directory
npm run build
```

---

## Deployment

The website is statically generated and deployed to GitHub Pages via GitHub Actions:
- The workflow is defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
- Every push to the `master` branch triggers `npm ci`, builds the static site via `npm run build`, and publishes the resulting `out/` folder to GitHub Pages.
