# Portfolio rules

- Next.js 14 App Router static export (output: 'export'), TypeScript, Tailwind CSS 3, Framer Motion, lucide-react. Do not add other dependencies without asking me.
- The site is deployed to GitHub Pages at https://shreyansdev.github.io/portfolio_website/ (a subpath) by .github/workflows/deploy.yml. Do not edit the workflow or next.config.mjs unless the task says so.
- Files in public/ (avatar, resume, favicons) are referenced with relative paths such as ./avatar.png and ./resume.pdf, using a plain <img> or <a>. Never start a public file path with "/". Do not use next/image for them.
- All visible text lives in content/resumeData.ts, content/siteContent.ts and theme/functions/siteConfig.ts. Components contain no hard-coded visible strings. Never add, remove or reword text unless I ask. Never invent facts, numbers, badges or links.
- Black and white only. No other colors, no gradients. Colors come from CSS variables for light and dark mode.
- Animations use Framer Motion with LazyMotion, animate only transform and opacity, run scroll reveals once, and respect prefers-reduced-motion.
- Components are server components unless they need state, effects or Framer Motion ("use client").
- Before deleting any file, list it and wait for my approval.
- After each task run npm run lint, npx tsc --noEmit and npm run build, and report the results.
- Make the smallest change that does the job. Summarize the diff after each task.
