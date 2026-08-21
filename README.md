# ⚡ Portfolio Website — Shreyans Jain

A high-contrast, interactive **Neo-Brutalist Portfolio** built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to highlight projects in Full-Stack Development, Cybersecurity, Machine Learning, and IoT/Hardware.

🌐 **Live Demo:** [https://shreyansdev.github.io/portfolio_website/](https://shreyansdev.github.io/portfolio_website/)

---

## 🎨 Features

- **Neo-Brutalist Design Aesthetics**: Bold borders, vivid accent colors, stark contrast, retro badge elements, and clean typography.
- **Fluid Motion & Animations**: Interactive hover effects, smooth scroll navigation, and entrance animations powered by Framer Motion.
- **Dynamic Content Architecture**: Fully typed content configuration (`content/resumeData.ts`) powering Hero, About, Skills, Projects, Experience, and Contact sections.
- **Optimized Static Export**: Built for maximum performance and instant page loads via Next.js static export.
- **Automated CI/CD Pipeline**: GitHub Actions workflow automatically builds and deploys updates to GitHub Pages on every push.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Export)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) & GitHub Actions

---

## 📂 Directory Structure

```
portfolio_website/
├── app/
│   ├── globals.css         # Custom utility styles & font configuration
│   ├── layout.tsx          # Root layout with site metadata & Navbar
│   └── page.tsx            # Main page assembling all portfolio sections
├── content/
│   └── resumeData.ts       # Structured portfolio content data
├── public/
│   └── resume.pdf          # Downloadable resume asset
├── theme/
│   ├── components/         # Reusable UI primitives (Card, Badge, AnimatedSection)
│   ├── functions/          # Helper utilities & animation configurations
│   ├── partials/           # Navbar, ResumeButton, SocialLinks
│   └── templates/          # Portfolio section components (Hero, About, Skills, Projects, etc.)
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment workflow
├── next.config.mjs         # Next.js static export configuration
├── tailwind.config.ts      # Custom Neo-Brutalist color scheme & utilities
└── package.json
```

---

## 🚀 Local Development

Follow these steps to run the portfolio locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shreyansdev/portfolio_website.git
   cd portfolio_website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for production (Static Export):**
   ```bash
   npm run build
   ```
   This generates the static output in the `out/` directory.

---

## 🚀 Deployment

This project uses **GitHub Actions** to automatically build and deploy the Next.js static export to **GitHub Pages**.

Whenever code is pushed to the `master` branch:
1. The `.github/workflows/deploy.yml` workflow triggers automatically.
2. Next.js compiles the site and exports static HTML/CSS/JS assets to `./out`.
3. The artifacts are uploaded and deployed directly to GitHub Pages.

---

## 👤 Author

**Shreyans Jain**
- **GitHub**: [@shreyansdev](https://github.com/shreyansdev)
- **LinkedIn**: [shreyansdev](https://linkedin.com/in/shreyansdev)
- **Email**: shreyans048@gmail.com

---

## 📜 License

Distributed under the [MIT License](LICENSE).
