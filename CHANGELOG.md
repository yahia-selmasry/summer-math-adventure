# Changelog – Summer Math Adventure Booklet

---

## [4.0.0] – 2026-06-13

### Changed – Font & Readability Overhaul

**All booklet files** (`summer_math_complete_booklet.html`, `summer_booklet_weeks6_8.html`):
- Font changed from `Georgia` (serif) to **Nunito** (Google Fonts) — matches Beast Academy's actual typeface
- Base body font size: 13px → **15px**
- h1: 22px → **26px** (weight 900)
- h2: 16px → **19px** (weight 800)
- h3: 13px → **16px** (weight 700)
- `.ans-line` height: 18px → **30px** (kids can write answers comfortably)
- `.ans-line-long` height: 18px → **30px**
- `.work-box` min-height: 70px → **110px** (more scratch work space)
- `.work-box-sm` min-height: 44–50px → **80px**
- Answer line border upgraded from 1px to **2px** solid
- Tables, hints, footer, score-box, intro-box all scaled up proportionally
- Duplicate CSS blocks (one per week addition) consolidated into a single clean stylesheet

**All 15 comic files** (`comics/*.html`):
- Font changed from `Comic Neue` to **Nunito** — consistent with booklets
- Body font size added: **16px**
- Speech bubbles: 13.5px → **15px**
- `.bubble.big`: 15px → **17px**
- `.bubble.sm`: 12px → **14px**

### Added – Fraction Division Comic Panel

**`comics/concept_fractions.html`** — new panel added on page 2 before the Think challenge:
- Full "Keep → Change → Flip" (KCF) rule with color-coded labels
- Worked example: 3/4 ÷ 1/2 → 3/4 × 2/1 = 6/4 = 1½
- Mixed number example: 2½ ÷ 1/4 (convert to improper first → 5/2 × 4/1 = 10)
- Conceptual "WHY" explanation: dividing by ½ = asking how many halves fit
- Note: "÷ by a fraction always makes the answer bigger" insight

**concept_fractions.html now covers all 4 operations**: +, −, ×, **÷**

### Added – GitHub Pages Hosting

- Public URL: **https://yahia-selmasry.github.io/summer-math-adventure/**
- Permanent, no password, no expiration (free GitHub Pages)
- Repository: https://github.com/yahia-selmasry/summer-math-adventure
- Branch: `main`, path: `/`
- To push future updates: `git add . && git commit -m "..." && git push`

### Added – Comics File List Updated

`index.html` and `CLAUDE.md` updated to show all 15 comics (was missing the 3 new ones from v3.0.0):
- `concept_area_perimeter.html`
- `concept_rectangular_prisms.html`
- `concept_coordinate_plane.html`

---

## [3.0.0] – 2026-06-13

### Added

**4 New Comic Guides** (Beast Academy 4B/4C/4D aligned)

| File | Topic | BA Source |
|------|-------|-----------|
| `comics/concept_fractions.html` | Fractions (2-page) | 4C Ch 8 + 4D Ch 10 |
| `comics/concept_decimals.html` | Decimals | 4D Ch 11 |
| `comics/concept_factors.html` | Factors, Primes, Divisibility, GCF, Factor Trees | 4C Ch 7 + 4B Ch 5 |
| `comics/concept_integers.html` | Integers, Negatives, Add/Subtract | 4C Ch 9 |

**concept_fractions.html** — 2-page comic covering:
- Numerator/denominator, bar model visual
- Equivalent fractions (multiply/divide both parts)
- Simplifying by GCF
- Comparing fractions (3 strategies + cross-multiply)
- Adding/subtracting like denominators
- Adding/subtracting unlike denominators (LCD method)
- Mixed numbers ↔ improper fractions
- Multiplying fractions (top×top, bottom×bottom)
- "Of" = multiply (½ of 12 = 6)

**concept_decimals.html** — 1-page comic covering:
- Place value chart (tenths, hundredths, thousandths)
- Reading decimals aloud
- 10×10 grid visual for 0.35
- Decimal ↔ fraction connection
- Comparing with digit-by-digit method
- Adding/subtracting (line up the dot)
- Common mistake: 0.9 ≠ 0.09

**concept_factors.html** — 1-page comic covering:
- What a factor is, factor pairs strategy
- Divisibility rules (÷2, ÷3, ÷5, ÷6, ÷9, ÷10)
- Prime vs composite (definitions + examples)
- Sieve of Eratosthenes visual (primes to 30)
- Factor tree → prime factorization
- GCF by listing factors

**concept_integers.html** — 1-page comic covering:
- Number line with positives, zero, negatives
- Real-world negatives (temperature, floors, debt)
- Adding integers (same sign / different signs rules)
- Number line walkthrough for additions
- Subtracting = adding the opposite
- Comparing integers

**Navigation Hub**
- `index.html` — full navigation page with:
  - Top sticky navbar
  - Hero section with quick-access buttons
  - Weekly booklet cards (all 8 weeks) with Open + Print buttons
  - Comic guide grid (all 12 guides) with direct links
  - Answer key section
  - Suggested study order table

**Answer Key Updated**
- `summer_booklet_answer_key.html` cover page updated:
  - All 8 weeks now listed with colored badges
  - Instructions for accessing Week 6–8 answers (in weeks6_8.html)
  - Note about index.html navigation hub

**Docs Updated**
- `CLAUDE.md` — full rewrite: BA curriculum alignment table, comic CSS class reference, hosting instructions
- `CHANGELOG.md` — this file

### Hosting
- All files are flat HTML/CSS — deployable via **Netlify Drop** (drag folder to netlify.com/drop)
- No build step, no server required

---

## [2.0.0] – 2026-06-13 (earlier)

### Added – Weeks 6–8 Extension Booklet (`summer_booklet_weeks6_8.html`)

**Week 6 – Exponents**
- Day 1: What is an exponent? (base, exponent, expand, exponential form)
- Day 2: Powers of 10 (zeros pattern, multiply by powers of 10)
- Day 3: Comparing & ordering exponential expressions
- Day 4: Order of operations with exponents (PEMDAS)
- Day 5: Perfect squares (1–12 chart), square roots, area context
- Week 6 Quiz (20 pts)

**Week 7 – Expressions & Equations**
- Day 1: Variables & algebraic expressions (vocab, write, evaluate)
- Day 2: Simplifying — combining like terms
- Day 3: One-step equations (inverse operations, solve & check)
- Day 4: Two-step equations (label steps, word problems)
- Day 5: Inequalities (write, solve, graph on number line)
- Week 7 Quiz (20 pts)

**Week 8 – Probability**
- Day 1: Probability intro (P formula, 0–1 scale)
- Day 2: Experimental vs theoretical (coin flip, die roll data)
- Day 3: Sample space & tree diagrams (counting principle)
- Day 4: Making predictions (expected = P × trials)
- Day 5: Review & complement rule (deck of cards, raffle)
- Week 8 Quiz (20 pts)

### Added – 8 Comic Guides (`comics/`)
- `concept_exponents.html`
- `concept_powers_of_10.html`
- `concept_perfect_squares.html`
- `concept_expressions.html`
- `concept_equations.html`
- `concept_inequalities.html`
- `concept_probability.html`
- `concept_sample_space.html`

---

## [1.0.0] – prior sessions

### Added – Weeks 1–5 Complete Booklet (`summer_math_complete_booklet.html`)

**Week 1 – Number Sense**
- Place value: reading & writing big numbers
- Comparing & ordering whole numbers
- Rounding to any place
- Addition & subtraction review
- Day 5 review + Week 1 Quiz

**Week 2 – Fractions**
- Understanding fractions (models, number lines)
- Equivalent fractions
- Comparing & ordering fractions
- Adding & subtracting fractions (like denominators)
- Mixed numbers & improper fractions
- Week 2 Quiz

**Week 3 – Multiplication & Division**
- Multiplication facts & strategies
- Multi-digit multiplication
- Division concepts & long division
- Remainders in context
- Multi-step word problems
- Week 3 Quiz

**Week 4 – Decimals**
- Decimal place value (tenths, hundredths)
- Reading & writing decimals
- Comparing & ordering decimals
- Adding & subtracting decimals
- Decimal ↔ fraction connections
- Week 4 Quiz

**Week 5 – Geometry**
- Points, lines, angles (acute, right, obtuse, straight)
- Triangles & quadrilaterals
- Perimeter & area
- Coordinate plane basics
- Week 5 Quiz

**Other files**
- `summer_booklet_answer_key.html` — standalone answer key for Weeks 1–5
- `summer_booklet_week1.html` – `week5.html` — standalone per-week files

---

## Format Notes

- All files: pure HTML/CSS, print-ready, 8.5×11 letter
- Comic files: yellow background (#f5c842), Beast Academy character art in CSS
- Each daily booklet page targets ~45 minutes of practice
- Each page has a `/X` score tracker in the footer
- Answer keys are at the end of each combined booklet file, plus the standalone key
