# StudyNotion — Portfolio Modernization Design Doc

> **Goal:** Evolve the 2024 StudyNotion e-learning frontend into a polished, portfolio-ready product showcase with modern motion, smoother UX, and tighter visual consistency — without breaking existing functionality.

---

## 1. Context

| Item | Detail |
|------|--------|
| **Built** | 2024 |
| **Refresh target** | 2026 portfolio presentation |
| **Stack** | React 18, Tailwind CSS, Redux, React Router, GSAP, Swiper |
| **Scope (Phase 1)** | Public marketing pages: Home, About, Contact, shared layout (Navbar, Footer, ReviewSlider) |
| **Out of scope (Phase 1)** | Dashboard, auth flows, course player — keep functional, polish later |

---

## 2. Design Vision

### North star
A **premium dark-mode ed-tech landing experience** that feels alive but never distracting — the kind of site a recruiter opens and immediately thinks *"this person cares about craft."*

### Keywords
- **Confident** — bold headings, clear hierarchy
- **Smooth** — buttery scroll, intentional motion
- **Focused** — one idea per section, no visual clutter
- **Trustworthy** — social proof, stats, clean typography

### What we are NOT doing
- Rebranding colors or rebuilding from scratch
- Adding heavy 3D / WebGL / particle overload
- Replacing Redux or routing architecture

---

## 3. Current State Audit

### What already works
- Strong dark palette (`richblack-900` base, `yellow-50` accent)
- Home page has a clear narrative arc: hero → code blocks → catalog → timeline → reviews
- ReviewSlider recently upgraded with carousel + fallback data
- Footer copyright is dynamic (`new Date().getFullYear()`)
- GSAP used for hero video play-button follow cursor

### Gaps & friction (to fix)

| Area | Issue |
|------|-------|
| **Motion** | GSAP only on hero video; rest of page is static. No scroll-triggered reveals. |
| **Scroll** | Default browser scroll; no smooth scroll behavior. |
| **Sections** | Inconsistent vertical rhythm (`my-20`, `mt-[-100px]`, magic spacer divs). |
| **Hero** | Text blocks appear instantly; no entrance animation. |
| **Navbar** | No scroll-aware styling (transparent → solid on scroll). |
| **Code blocks** | Hover scale feels dated; no scroll-in animation. |
| **About / Contact** | Same patterns as 2024; no motion, overlapping image layout fragile on mobile. |
| **Typography** | Mix of `text-4xl`, `text-[2.5rem]`, `text-[16px]` without a scale system. |
| **Accessibility** | Motion has no `prefers-reduced-motion` fallback. |
| **Portfolio story** | No "built by" / tech stack / project context for recruiters. |

---

## 4. Technical Additions

### New dependency
```bash
npm install framer-motion
```

**Why Framer Motion over more GSAP?**
- Declarative React API (`motion.div`, `whileInView`)
- Built-in `useReducedMotion` hook
- Less boilerplate for scroll reveals and staggered children
- GSAP stays for the hero video cursor effect (already working)

### Optional (Phase 2)
- `lenis` or CSS `scroll-behavior: smooth` for smooth scrolling
- `@studio-freight/lenis` is popular but adds ~3kb; start with CSS + Framer, add Lenis if needed

### Shared utilities to create

```
src/
  components/
    common/
      MotionWrapper.jsx      # Reusable scroll-reveal wrapper
      SectionHeading.jsx     # Consistent section title + subtitle
      PageTransition.jsx     # Optional route fade (Phase 2)
  hooks/
    useScrollProgress.js     # Navbar background on scroll (optional)
  utils/
    motionVariants.js        # Shared animation presets
```

---

## 5. Motion System

### Principles
1. **Subtle by default** — 20–40px travel, 0.4–0.6s duration
2. **Once per viewport** — `viewport={{ once: true, amount: 0.2 }}`
3. **Stagger children** — 0.08–0.12s delay between items
4. **Respect reduced motion** — disable transforms, keep opacity-only or skip

### Preset variants (`motionVariants.js`)

| Name | Use case | Values |
|------|----------|--------|
| `fadeUp` | Section headings, cards | `opacity: 0→1`, `y: 24→0` |
| `fadeIn` | Images, video | `opacity: 0→1`, `scale: 0.98→1` |
| `staggerContainer` | Grid of cards, footer columns | `staggerChildren: 0.1` |
| `slideInLeft` | Code block text | `x: -30→0` |
| `slideInRight` | Code block code panel | `x: 30→0` |

### Smooth scrolling
```css
/* index.css */
html {
  scroll-behavior: smooth;
}
```
- Anchor links and "back to top" feel native
- If jank on Safari, evaluate Lenis in Phase 2

---

## 6. Section-by-Section Plan

### 6.1 Global — Navbar
**Current:** Fixed height, border-bottom, yellow active link.  
**Upgrade:**
- [ ] Add scroll listener: at `scrollY > 40`, apply `bg-richblack-900/80 backdrop-blur-md shadow-lg`
- [ ] Subtle logo scale on scroll (optional)
- [ ] Mobile menu slide-in with Framer Motion (if hamburger exists)

---

### 6.2 Home — Hero (Section 1)
**Current:** Instructor pill → headline → subcopy → CTAs → video with GSAP play button.  
**Upgrade:**
- [ ] Stagger animate: pill → headline → subcopy → buttons (0.1s stagger)
- [ ] Video container: `fadeIn` + slight scale on load
- [ ] Replace harsh video `hover:scale-105` with softer shadow lift
- [ ] Fix PLAY button: use `position: absolute` inside container (currently `fixed` — can misalign)

**Copy tweak (portfolio):**
> Subheadline stays educational; no "demo" language change needed.

---

### 6.3 Home — Code Blocks (×2)
**Current:** Two mirrored CodeBlocks with gradient blobs.  
**Upgrade:**
- [ ] Text column: `slideInLeft` / `slideInRight` based on position
- [ ] Code panel: opposite direction slide + `whileInView`
- [ ] Replace `code-border:hover { scale(0.95) }` with `translateY(-4px)` + glow (consistent with ReviewSlider cards)
- [ ] Unify heading size via `SectionHeading`

---

### 6.4 Home — Explore More
**Upgrade:**
- [ ] Category pills/cards: stagger `fadeUp`
- [ ] Active tab transition with `layoutId` (Framer shared layout) for underline/pill

---

### 6.5 Home — Catalog CTA band
**Current:** `homepage_bg` with negative margin hacks (`mt-[-100px]`).  
**Upgrade:**
- [ ] Replace magic spacers with consistent `section` padding (`py-24 lg:py-32`)
- [ ] Parallax-lite: background moves slower on scroll (optional, low priority)
- [ ] CTA buttons: subtle pulse or arrow nudge on hover

---

### 6.6 Home — "Job in demand" + Timeline + Languages
**Upgrade:**
- [ ] Two-column "job" section: left heading `fadeUp`, right copy delayed
- [ ] Timeline: each step animates in sequence (stagger)
- [ ] Language section: flag/icon cards with hover lift matching review cards

---

### 6.7 Home — Instructor Section
**Current:** Image with white shadow offset, text block.  
**Upgrade:**
- [ ] Image: `fadeIn` from left
- [ ] Text: stagger headline → paragraph → CTA
- [ ] Image hover: soft glow instead of static shadow box

---

### 6.8 Home — Review Slider
**Current:** Polished cards, nav arrows, fallback reviews. ✅  
**Minor upgrades:**
- [ ] Section wrapper: `fadeUp` on header
- [ ] Cards already have hover lift — keep as reference pattern for other components

---

### 6.9 Footer
**Upgrade:**
- [ ] Column groups: `staggerContainer` on scroll into view
- [ ] Link hover: underline slide animation (CSS)
- [ ] Optional portfolio line: `Built by [Your Name] · React · Tailwind · Framer Motion`

---

### 6.10 About Page
**Upgrade:**
- [ ] Hero: stagger title + subtitle
- [ ] Three banner images: scale-in with slight delay each
- [ ] Founding story: image + text slide from opposite sides
- [ ] Stats component: count-up animation on view (Framer Motion `useMotionValue` + `useTransform`, or simple CSS)
- [ ] ReviewSlider section: reuse Home patterns

---

### 6.11 Contact Page
**Upgrade:**
- [ ] Split layout: contact details left, form right — animate each side
- [ ] Form inputs: focus ring animation (Tailwind `ring-yellow-50`)
- [ ] Submit button: loading state micro-interaction

---

## 7. Layout & Spacing System

Replace ad-hoc margins with a consistent section rhythm:

```jsx
// Standard section wrapper
<section className="w-full py-20 lg:py-28">
  <div className="mx-auto w-11/12 max-w-maxContent">
    {/* content */}
  </div>
</section>
```

### Vertical spacing scale
| Token | Value | Use |
|-------|-------|-----|
| Section gap | `gap-16 lg:gap-24` | Between major blocks inside a section |
| Component gap | `gap-6 lg:gap-8` | Inside cards, form groups |
| Remove | `h-[150px]`, `mt-[-100px]` | Replace with proper padding |

---

## 8. Typography Scale

| Role | Classes |
|------|---------|
| Display | `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight` |
| Section title | `text-3xl md:text-4xl font-semibold` |
| Section subtitle | `text-base md:text-lg text-richblack-300 max-w-2xl` |
| Body | `text-base text-richblack-300 leading-relaxed` |
| Label / meta | `text-sm text-richblack-400` |

Use `SectionHeading` everywhere instead of raw `<h1>` + `<p>` combos.

---

## 9. Component Patterns (Reference)

### Review card (already implemented — reuse)
```
rounded-2xl · border-richblack-700 · hover:-translate-y-1 · shadow on hover
```

### Primary CTA button
```
yellow-50 bg · richblack-900 text · rounded-md · hover:scale-95 transition
```
Keep existing `CTAButton`; add optional `motion` wrapper for entrance.

### Section heading block
```
[Title — bold white]
[Subtitle — richblack-300, max-w-xl]
[Optional: nav arrows or link — right aligned]
```

---

## 10. Portfolio Presentation Layer

Add a lightweight **"Project spotlight"** touch recruiters notice:

### Option A — Footer credit (minimal)
```
Built with React & Framer Motion · Portfolio project by [Name]
```

### Option B — Dedicated strip above footer (recommended)
Small banner on Home only:
> **StudyNotion** — Full-stack e-learning platform UI · React · Redux · Tailwind · REST API

### Option C — `/about` addition
Short "About this project" paragraph with GitHub link + live demo link.

**Recommendation:** Option B on Home + Option A in Footer.

---

## 11. Implementation Phases

### Phase 1 — Foundation (Day 1)
- [ ] Install `framer-motion`
- [ ] Add `scroll-behavior: smooth` to `index.css`
- [ ] Create `motionVariants.js` + `MotionWrapper.jsx` + `SectionHeading.jsx`
- [ ] Add `prefers-reduced-motion` handling in MotionWrapper

### Phase 2 — Home page polish (Day 2–3)
- [ ] Hero stagger animation
- [ ] Fix video PLAY button positioning
- [ ] CodeBlocks scroll reveals
- [ ] Section spacing cleanup (remove negative margins)
- [ ] Instructor + ExploreMore + Timeline animations
- [ ] Navbar scroll-aware background

### Phase 3 — Shared & secondary pages (Day 4)
- [ ] Footer stagger
- [ ] About page motion pass
- [ ] Contact page motion pass
- [ ] Portfolio credit strip

### Phase 4 — QA & performance (Day 5)
- [ ] Test mobile (375px, 768px, 1280px)
- [ ] Lighthouse pass — ensure animations don't tank performance
- [ ] `prefers-reduced-motion` manual test
- [ ] Cross-browser: Chrome, Safari, Firefox

---

## 12. Files to Touch (Checklist)

| File | Changes |
|------|---------|
| `package.json` | Add `framer-motion` |
| `src/index.css` | Smooth scroll, optional motion CSS |
| `src/utils/motionVariants.js` | **New** — animation presets |
| `src/components/common/MotionWrapper.jsx` | **New** — reusable wrapper |
| `src/components/common/SectionHeading.jsx` | **New** — title block |
| `src/components/common/Navbar.jsx` | Scroll-aware styling |
| `src/components/common/Footer.jsx` | Stagger + portfolio credit |
| `src/components/common/ReviewSlider.jsx` | Header fadeUp (minor) |
| `src/pages/Home.jsx` | Section spacing, wrap sections in MotionWrapper |
| `src/pages/About.jsx` | Motion pass |
| `src/pages/Contact.jsx` | Motion pass |
| `src/components/core/HomePage/CodeBlocks.jsx` | Scroll animations |
| `src/components/core/HomePage/InstructorSection.jsx` | Motion + spacing |
| `src/components/core/HomePage/ExploreMore.jsx` | Stagger cards |
| `src/components/core/HomePage/Timeline.jsx` | Sequential reveal |
| `src/App.css` | Soften code-border hover |

---

## 13. Success Criteria

Before calling this portfolio-ready:

- [ ] Scrolling feels smooth; no layout shift jumps
- [ ] Every major Home section animates in once on scroll
- [ ] Hover states are consistent (lift + shadow, not random scale)
- [ ] No clipped animations (ReviewSlider hover fix pattern applied elsewhere)
- [ ] Mobile layout has no overlapping About banner images
- [ ] Footer shows dynamic year + portfolio attribution
- [ ] Animations disabled gracefully with `prefers-reduced-motion`
- [ ] Page loads in < 3s on 4G (no blocking animation libs)

---

## 14. Open Questions (for you)

1. **Portfolio credit** — What name / GitHub / LinkedIn should appear in the footer strip?
2. **Lenis smooth scroll** — Want buttery Lenis or is CSS smooth scroll enough?
3. **Scope** — Phase 1 public pages only, or also polish Login/Signup screens?
4. **Dark-only** — Keep dark theme only, or add a light mode toggle (probably skip for portfolio)?

---

## 15. Next Step

Once you approve this doc (or answer the open questions), implementation starts with **Phase 1**: install Framer Motion, create shared motion utilities, then work through Home top-to-bottom.

---

*Last updated: June 2026*
