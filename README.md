# Arunagiri S — Production Full-Stack Portfolio

A production-ready, JARVIS/Iron Man HUD-inspired personal portfolio and engineering showcase for **Arunagiri S**, ECE undergraduate. Built with React 19, Vite, TypeScript, Tailwind CSS v4, Framer Motion, and a serverless MongoDB Atlas backend API.

---

## ⚡ Tech Stack

- **Frontend:** React 19, TypeScript, Vite 8, Tailwind CSS v4, Framer Motion, Lucide Icons
- **Backend & API:** Vercel Serverless Functions (`/api/projects`, `/api/experience`, `/api/certificates`, `/api/contact`, `/api/health`)
- **Database:** MongoDB Atlas (`portfolio` database with `projects`, `experience`, `certificates`, and `messages` collections)
- **Deployment:** Vercel

---

## 🚀 Key Features

1. **JARVIS / Iron Man Engineering HUD System:**
   - Futuristic dark UI, glowing accents, tactile telemetry, and responsive micro-animations.
   - Interactive SVG Arc Reactor visual console.
2. **Dynamic MongoDB Atlas Data Integration:**
   - Serverless API routes fetch live project, experience, and certification data from MongoDB Atlas.
   - Graceful fallback mechanism ensures zero downtime if API or database is unreachable.
3. **Interactive Contact Dispatch:**
   - Functional contact form that validates input and persists messages directly into `portfolio.messages`.
4. **Idempotent Data Seeding:**
   - Safe seeding script (`npm run seed`) populates database collections without duplicating records.

---

## 🛠️ Environment Configuration

Copy `.env.example` to `.env.local` and add your production MongoDB credentials:

```bash
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
MONGODB_USERNAME=YOUR_DATABASE_USERNAME
MONGODB_PASSWORD=YOUR_DATABASE_PASSWORD
```

> **Note:** `.env.local` is ignored by Git and will never be tracked or pushed to public repositories.

---

## 📜 NPM Scripts

- `npm run dev` — Start Vite development server with native `/api` endpoint routing
- `npm run build` — Compile TypeScript and build production bundle
- `npm run seed` — Seed initial portfolio data into MongoDB Atlas
- `npm run preview` — Preview local production build

---

## 📫 Contact Information

- **Name:** Arunagiri S
- **Degree:** B.E. Electronics and Communication Engineering
- **Email:** [arunofficial311@gmail.com](mailto:arunofficial311@gmail.com)
- **Phone:** [8778165582](tel:8778165582)
- **GitHub:** [https://github.com/ARUNAGIRI-S](https://github.com/ARUNAGIRI-S)
- **LinkedIn:** [https://www.linkedin.com/in/arunagiri-ece](https://www.linkedin.com/in/arunagiri-ece)
