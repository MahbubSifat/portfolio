# Md. Mahbubul Alom Sifat | Portfolio

Personal portfolio of a Software Engineering student at the University of Frontier Technology, Bangladesh (UFTB), focused on full stack web development with React and Next.js.

## What is inside

- Cinematic scroll-driven hero and about sections (canvas frame sequences, GSAP ScrollTrigger, Lenis smooth scroll)
- Education and learning journey, about me, and skills grouped by how they were used
- Three featured projects with a dedicated case-study page each: stack, features, challenges, future improvements, live demo and source links
- Contact section with email, optional phone and WhatsApp, and social links

## Tech stack

React 19, Vite, React Router, Tailwind CSS 4, GSAP, Lenis, Motion, lucide-react.

## Run locally

```bash
npm install
npm run dev
```

Production build: `npm run build`, preview it with `npm run preview`.

## Where to edit content

| What | File |
| --- | --- |
| Name, email, phone, WhatsApp, social links, resume | `src/data/links.js` |
| About text and profile photo | `src/data/about.js` |
| Projects (text, links, screenshots) | `src/data/projects.js` |
| Navigation labels | `src/data/nav.js` |
| Skills | `src/components/SkillsSection.jsx` |
| Education and learning timeline | `src/components/ExperienceSection.jsx` |

Project screenshots go in `public/projects/` using the names set in `src/data/projects.js`.

## Animation frames

The hero and about animations play image sequences from `public/frames/`. They are generated from source frames with `npm run frames` (see `scripts/optimize-frames.mjs`). Commit `public/frames`, because the deployed site loads them directly.

## Deployment

Deployed on Vercel. `vercel.json` rewrites every path to `index.html` so project pages such as `/projects/fitlog` also work on refresh.
