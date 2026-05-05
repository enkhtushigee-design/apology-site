# Apology Website 🤍

A cinematic, emotional apology website built with React + Vite + Framer Motion + Tailwind CSS.

## Setup

```bash
npm install
npm run dev       # development
npm run build     # production build
npm run preview   # preview production build
```

## Add Your Photo

Place `her.jpg` inside the `public/` folder before deploying:
```
public/
  her.jpg   ← add this
  heart.svg
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

### Option 2 — Vercel Dashboard
1. Push to GitHub
2. Import repo at vercel.com/new
3. Framework: **Vite** (auto-detected)
4. Click Deploy ✓

## Project Structure

```
src/
  App.jsx                     # Root component
  main.jsx                    # Entry point
  index.css                   # Global styles
  components/
    FloatingBackground.jsx    # Ambient orb animation
    HeroSection.jsx           # Full-screen intro
    StorySection.jsx          # Animated story steps
    ImageSection.jsx          # Photo + caption
    ApologySection.jsx        # Big emotional text
    DecisionSection.jsx       # Interactive buttons + confetti
    FinalSection.jsx          # Closing message
  hooks/
    useWindowSize.js          # Window size hook for confetti
```
