# Kaushik — Portfolio

A dark, cinematic personal portfolio built with Next.js, TypeScript, Tailwind CSS, and [Motion.dev](https://motion.dev). No projects section — the focus is on identity, skills, GitHub activity, and creative work.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy

1. **Avatar** — drop your own image at `public/avatar.png` (square, at least 256×256). A placeholder is not included; the hero will show a broken image until you add one.
2. **Links** — every `TODO` in `components/Hero.tsx`, `components/Contact.tsx`, and `components/GithubStats.tsx` (the `USERNAME` constant) needs your real GitHub, LinkedIn, email, and GitHub username.
3. **Copy** — `components/About.tsx`, `CurrentFocus.tsx`, and `TechStack.tsx` were written from what's currently known about your work (MLP2 pricing pipeline, Python/Azure/ML stack). Adjust freely as things change.

## Deploying

The fastest path is [Vercel](https://vercel.com): connect the repo, it detects Next.js automatically, no config needed. Once deployed, put the URL in the GitHub profile README's "Enter my portfolio" button.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS for styling
- [Motion.dev](https://motion.dev) (`motion/react`) for all animation — entrance sequences, scroll reveals, hover/magnetic interactions
- `prefers-reduced-motion` respected globally (see `app/globals.css`)
