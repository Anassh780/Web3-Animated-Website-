# UNIVERSAL MASTER PROMPT: BUILD THE NEXUSCHAIN AI WEBSITE

**Goal:** Build a complete, high-fidelity Web3 landing page called "NexusChain AI" using Next.js, Tailwind 4, and Framer Motion. The site must feature "Pro" animations (parallax, 3D tilt, magnetic buttons) and a cinematic dark aesthetic.

## PHASE 1: INITIAL SETUP & CONFIG
1. **Initialize Project:** Create a Next.js (App Router) project with TypeScript and Tailwind CSS 4.
2. **Install Dependencies:** `npm install framer-motion lenis lucide-react clsx tailwind-merge`
3. **Configure tailwind.css:** Setup custom variables for `purple` (#6366f1), `bg` (#030303), and `font-heading` (Outfit), `font-body` (Jakarta). Add a global `body::before` radial-gradient glow in `globals.css`.
4. **Utility Functions:** Create `src/lib/utils.ts` with a standard `cn()` merge function.

## PHASE 2: CORE LIBRARIES & WRAPPERS
1. **Smooth Scroll Component:** Create `src/components/SmoothScroll.tsx`. Initialize Lenis with `duration: 1.5` and a custom cubic-bezier easing for a "viscous" feel.
2. **Magnetic Button Component:** Create `src/components/MagneticButton.tsx`. Use `framer-motion` to track the cursor and pull the button slightly (`strength: 30`) towards it on hover.
3. **Root Layout:** Wrap the entire app in `SmoothScroll` and setup Google Fonts (Outfit & Plus Jakarta Sans).

## PHASE 3: KEY COMPONENTS IMPLEMENTATION

### 1. Hero Section (` HeroSection.tsx`)
- **Visuals:** Cinematic background video (`hero-bg.mp4`) with `mix-blend-screen`.
- **Animations:** 
    - Use `useScroll` and `useTransform` for parallax on the video and background glow.
    - Title/Buttons reveal with a staggered spring animation (`stiffness: 90, damping: 22`).
- **Interaction:** Wrap primary buttons in `MagneticButton`.

### 2. Dashboard Preview (`DashboardPreview.tsx`)
- **Logic:** Add a subtle 3D tilt effect (`rotateX`, `rotateY`) that responds to the scroll position using `scrollYProgress`.
- **UI:** A glassmorphism dashboard containing KPI cards (TVL, Yield) and a simulated SVG chart.
- **Entry:** KPI cards should slide in from the left with a coordinated stagger.

### 3. Features Section (`Features.tsx`)
- **Staggered Reveal:** Use `framer-motion` variants to reveal feature cards with a blur-to-clear transition (`filter: blur(4px)` to `0px`).
- **Interactive Spot:** Add a background glow orb that moves vertically as the user scrolls through the section.
- **Card Hover:** Deep scaling, icon color-shifting, and a corner shine effect.

## PHASE 4: REPLICATION OF ALL SECTIONS
- **Sections to include:** Navbar (glassmorphism), Integrations (marquee ticker), Methodology, Project Profiles, Pricing, Testimonials, Founder, FAQ, and Footer.
- **Polish:** Ensure every section has consistent padding (`py-24`) and uses the deep-black/purple-accent palette.

## FINAL INSTRUCTION TO GENERATOR:
"Build this website sequentially. ENSURE all components using React Hooks include the 'use client' directive. Focus on making the typography feel 'Pro' (Extreme bold headings, tight tracking) and the animations feel cinematic and expensive. All gradients should be smooth, avoiding flat colors."
