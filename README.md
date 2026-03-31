# Bilal Arshad — Portfolio

A **cyber-themed**, production-ready portfolio built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## 🗂 Project Structure

```
bilal-portfolio/
├── app/
│   ├── api/
│   │   ├── contact/route.ts        ← Contact form backend (email via Nodemailer)
│   │   └── cv-download/route.ts    ← CV download tracking
│   ├── globals.css                 ← Global styles, animations, cyber effects
│   ├── layout.tsx                  ← Root layout + SEO metadata
│   ├── page.tsx                    ← Home page
│   ├── robots.txt                  ← Search engine robots
│   └── sitemap.ts                  ← Sitemap generation
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx            ← With modal detail panels
│   │   ├── Education.tsx           ← Animated timeline
│   │   ├── Experience.tsx
│   │   ├── Achievements.tsx        ← Tag/badge display
│   │   └── Contact.tsx             ← Form + API integration
│   └── ui/
│       ├── ParticleBackground.tsx  ← Canvas particle animation
│       ├── TerminalWidget.tsx      ← Floating terminal widget
│       ├── SectionWrapper.tsx      ← Scroll-triggered fade-in
│       └── SectionHeading.tsx
├── data/
│   └── profile.ts                  ← ✏️ EDIT YOUR CONTENT HERE
└── public/
    └── Bilal-Arshad-CV.pdf         ← Drop your CV here
```

## 🚀 Running Locally

### Prerequisites
- Node.js 18+
- npm or yarn

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your email credentials (for the contact form). The site works without this — the form will log to console in development.

### 3. Add your CV

Drop your CV as `public/Bilal-Arshad-CV.pdf`.

### 4. Run development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📧 Contact Form Setup

The backend contact form uses **Nodemailer** with SMTP (Gmail supported).

**Gmail setup:**
1. Enable 2-Factor Authentication on your Google account
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Generate an App Password for "Mail"
4. Add to `.env.local`:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your-16-char-app-password
EMAIL_TO=your@gmail.com
```

**Other providers** (Outlook, SendGrid, etc.) can be configured by changing `EMAIL_HOST` and `EMAIL_PORT`.

---

## ☁️ Deploying to Vercel

### Option A: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option B: GitHub + Vercel Dashboard

1. Push to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Add environment variables in Vercel dashboard (Settings → Environment Variables):
   - `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`, `ADMIN_SECRET`
4. Deploy!

### Custom Domain

In Vercel: Settings → Domains → Add `bilalarshad.dev` → Follow DNS instructions.

---

## ✏️ Updating Content

All content is centralised in `data/profile.ts`. Edit:

- `profile` — name, tagline, bio, social links
- `skills` — skill categories and items  
- `projects` — project cards and details
- `education` — education timeline
- `experience` — work and volunteering
- `achievements` — awards and interests tags
- `terminalLines` — what the terminal widget types out
- `stats` — hero stats

No other files need editing for content changes.

---

## 🔧 Backend API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | `POST` | Receive contact form, send email |
| `/api/cv-download` | `GET` | Serve & track CV downloads |
| `/api/cv-download` | `POST` | Get download count (requires `ADMIN_SECRET`) |

### Rate Limiting
- Contact form: **3 submissions per IP per hour**
- Built-in input sanitisation against XSS

---

## ♿ Accessibility

- All interactive elements have `aria-label`
- Keyboard navigable (Tab/Enter/Space)
- `prefers-reduced-motion` respected — all animations disabled
- Colour contrast meets WCAG AA
- Semantic HTML (`<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- Focus rings visible on all interactive elements

---

## 🎨 Customising the Theme

CSS variables are in `app/globals.css`:

```css
:root {
  --cyber-cyan: #00f5ff;     /* Primary accent */
  --cyber-green: #39ff14;    /* Secondary accent */
  --cyber-purple: #bf5fff;   /* Tertiary accent */
  --cyber-black: #050a0e;    /* Background */
}
```

Tailwind tokens in `tailwind.config.ts` under `theme.extend.colors.cyber`.

---

