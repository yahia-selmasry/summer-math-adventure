# Summer Math Booklet – Project Guide

## What This Project Is

A printable summer math workbook for a student transitioning from Grade 4 to Grade 5.  
Aligned to **Beast Academy 4B / 4C / 4D** and **iReady** curriculum.  
Each HTML file is self-contained and formatted for 8.5×11 letter printing.

---

## File Structure

```
summer_booklet/
├── index.html                        ← Navigation hub (start here!)
├── summer_math_complete_booklet.html ← Weeks 1–5 combined (25 days + quizzes + key)
├── summer_booklet_weeks6_8.html      ← Weeks 6–8 combined (15 days + quizzes + key)
├── summer_booklet_answer_key.html    ← Standalone answer key (all 8 weeks)
├── summer_booklet_week1.html         ← Week 1 standalone
├── summer_booklet_week2.html         ← Week 2 standalone
├── summer_booklet_week3.html         ← Week 3 standalone
├── summer_booklet_week4.html         ← Week 4 standalone
├── summer_booklet_week5.html         ← Week 5 standalone
├── CLAUDE.md                         ← This file
├── CHANGELOG.md                      ← Version history
└── comics/
    ├── concept_exponents.html
    ├── concept_powers_of_10.html
    ├── concept_perfect_squares.html
    ├── concept_expressions.html
    ├── concept_equations.html
    ├── concept_inequalities.html
    ├── concept_probability.html
    ├── concept_sample_space.html
    ├── concept_fractions.html       ← covers +, −, ×, ÷ (all 4 operations)
    ├── concept_decimals.html
    ├── concept_factors.html
    ├── concept_integers.html
    ├── concept_area_perimeter.html
    ├── concept_rectangular_prisms.html
    └── concept_coordinate_plane.html
```

---

## Beast Academy Curriculum Alignment

| Week | Topic | BA Book | BA Chapter |
|------|-------|---------|-----------|
| 1 | Number Sense | 4A | Ch 1–3 |
| 2 | Fractions | 4C Ch 8 / 4D Ch 10 | Fractions, Mixed Numbers, Multiply |
| 3 | Multiplication & Division | 4B Ch 5 | Division, Divisibility |
| 4 | Decimals | 4D Ch 11 | Decimals, Reading, Comparing, Operations |
| 5 | Geometry | 4A Ch 2 | Shapes, Area, Perimeter |
| 6 | Exponents | 5A Ch 1 | Exponents, Powers of 10 |
| 7 | Expressions & Equations | 5A/5B | Expressions, Equations, Inequalities |
| 8 | Probability | 4D Ch 12 | Chance, Computing Probability, Coins & Dice |

### Comic Guides ↔ BA Topics
| Comic | BA Source |
|-------|-----------|
| concept_fractions.html | 4C Ch 8 + 4D Ch 10 |
| concept_factors.html | 4C Ch 7 + 4B Ch 5 |
| concept_integers.html | 4C Ch 9 |
| concept_decimals.html | 4D Ch 11 |
| concept_probability.html | 4D Ch 12 |
| concept_sample_space.html | 4D Ch 12 |

---

## Design Conventions

### Page Layout
- Each `<div class="page">` = one printed page (8.5in wide, min 11in tall)
- Padding: `0.6in 0.7in`
- `page-break-after: always` on every `.page`
- Footer: page number + topic name, positioned at `bottom: 0.4in`

### Color Scheme (one accent color per week)

| Week | Topic | Color |
|------|-------|-------|
| 1 | Number Sense | `#1a3a6b` navy |
| 2 | Fractions | `#2e7d32` green |
| 3 | Mult & Division | `#6a0080` purple |
| 4 | Decimals | `#00695c` teal |
| 5 | Geometry | `#bf360c` deep red |
| 6 | Exponents | `#e65100` deep orange |
| 7 | Expressions & Equations | `#283593` indigo |
| 8 | Probability | `#00695c` teal |

### Key CSS Classes (Booklet)
- `.page` — one full printed page
- `.badge` — colored circle (top-right), shows W#/D#
- `.topic-tag` — pill label below the title
- `.intro-box` — concept explanation box with left border
- `.grid-2` / `.grid-3` / `.grid-4` — CSS grid layouts
- `.problem-block` — wrapper for a single problem
- `.ans-line` — 160px answer blank
- `.ans-line-long` — 300px answer blank
- `.work-box` — dashed scratch work box
- `.challenge-box` — yellow bordered challenge
- `.frac` — inline fraction (flexbox, num/den spans)

### Key CSS Classes (Comics)
- `.comic-page` — yellow background page container
- `.panel` — bordered comic panel (bg-sky / bg-green / bg-peach / bg-tan)
- `.bubble` — speech bubble with tail (.left / .right / .top-left)
- `.zara` — CSS art: tall orange dinosaur teacher character
- `.max` — CSS art: small blue monster student character
- `.math-box` — styled inline math display
- `.think-sign` — red octagon challenge box
- `.scene` — flex container for characters + bubbles

### Font Standards
- **Comics**: `'Nunito'` (Google Fonts), body `font-size: 16px`, bubbles `15px`, `.bubble.big` `17px`
- **Booklets**: `'Nunito'` (Google Fonts), body `font-size: 15px`, h1 `26px/900`, h2 `19px/800`, h3 `16px/700`
- **Title cards** in comics: `'Bangers'` (Google Fonts, comic book style)
- Both fonts loaded via: `https://fonts.googleapis.com/css2?family=Bangers&family=Nunito:wght@400;600;700;800;900&display=swap`

### Fractions
```html
<span class="frac"><span class="num">3</span><span class="den">4</span></span>
```

### Superscripts
```html
2<sup>5</sup>
```

---

## Daily Page Structure (template order)
1. `.badge` (W# D#)
2. `<h1>Summer Math Adventure</h1>`
3. `.subtitle`
4. `.name-date`
5. `.topic-tag`
6. `.intro-box`
7. `Part A / B / C …`
8. `.challenge-box`
9. `.footer`

---

## Navigation & Hosting

- **index.html** is the hub — open this first
- All files are pure HTML/CSS, no build step needed
- **Printing**: Chrome/Safari → File → Print → Letter → No margins → Background graphics ✓
- **Live URL**: https://yahia-selmasry.github.io/summer-math-adventure/ (GitHub Pages, permanent, no password)
- **To push updates**: `git add . && git commit -m "..." && git push` from the project directory
- The site is a flat file structure — no server needed, everything is relative paths

---

## Student Info
- Based in Peoria, AZ
- Grade 4 → 5 transition
- Target: ~45 min per daily page
- Each page has a `/X` score tracker in the footer
- Comic guides are meant to be READ before doing the matching booklet week
