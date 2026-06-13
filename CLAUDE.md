# Summer Math Booklet – Project Guide

## What This Project Is

A printable summer math workbook for a student transitioning from Grade 4 to Grade 5. Each file is a self-contained HTML page formatted for 8.5×11 letter printing. The style is inspired by iReady and Beast Academy.

## File Structure

| File | Contents |
|------|----------|
| `summer_booklet_week1.html` | Week 1: Number Sense |
| `summer_booklet_week2.html` | Week 2: Fractions |
| `summer_booklet_week3.html` | Week 3: Multiplication & Division |
| `summer_booklet_week4.html` | Week 4: Decimals |
| `summer_booklet_week5.html` | Week 5: Geometry |
| `summer_math_complete_booklet.html` | Weeks 1–5 combined (single printable file, includes answer key) |
| `summer_booklet_weeks6_8.html` | Weeks 6–8: Exponents, Expressions & Equations, Probability |
| `summer_booklet_answer_key.html` | Standalone answer key for Weeks 1–5 |

## Design Conventions

### Page Layout
- Each `<div class="page">` = one printed page (8.5in wide, min 11in tall)
- Padding: `0.6in 0.7in`
- `page-break-after: always` on every `.page`
- Footer: page number + topic name, positioned at `bottom: 0.4in`

### Color Scheme (one accent color per week)
| Week | Topic | Color |
|------|-------|-------|
| 1 | Number Sense | `#1a3a6b` (navy) |
| 2 | Fractions | `#2e7d32` (green) |
| 3 | Mult & Division | `#6a0080` (purple) |
| 4 | Decimals | `#00695c` (teal) |
| 5 | Geometry | `#bf360c` (deep red) |
| 6 | Exponents | `#e65100` (deep orange) |
| 7 | Expressions & Equations | `#283593` (indigo) |
| 8 | Probability | `#00695c` (teal) |

Each week uses its accent color for: `h2`, `.topic-tag`, `.badge`, `th` (table headers), `.intro-box` border, `.star`.

### Key CSS Classes
- `.page` — one full printed page
- `.badge` — colored circle (top-right), shows week/day (e.g. W6 D1)
- `.topic-tag` — pill label below the title
- `.intro-box` — concept explanation box with left border
- `.grid-2` / `.grid-3` / `.grid-4` — CSS grid layouts for problems
- `.problem-block` — wrapper for a single problem
- `.ans-line` — 160px answer blank
- `.ans-line-long` — 300px answer blank
- `.work-box` — dashed box for scratch work (min-height: 70px)
- `.work-box-sm` — smaller scratch box (min-height: 44–50px)
- `.box-blank` — inline blank box (fill-in-the-blank)
- `.challenge-box` — yellow-bordered challenge section
- `.frac` — inline fraction display using flexbox
- `.hint` — small italic helper text

### Fractions
Use the `.frac` class with nested `.num` and `.den` spans:
```html
<span class="frac"><span class="num">3</span><span class="den">4</span></span>
```

### Superscripts / Exponents
Use the native HTML `<sup>` tag:
```html
2<sup>5</sup>
```

### Number Lines
Use inline SVG. See Week 7 Day 5 for a reusable pattern with tick marks and arrow.

## Daily Page Structure (template)

Each daily page follows this order:
1. `.badge` (W# D#)
2. `<h1>Summer Math Adventure</h1>`
3. `.subtitle` (Week X · Day Y | Topic Name)
4. `.name-date` row
5. `.topic-tag`
6. `.intro-box` (concept explanation)
7. `<h2>Part A</h2>` … `<h2>Part B</h2>` … etc.
8. `.challenge-box` (starred challenge)
9. `.footer` (topic | score)

## Quiz Page Structure

1. `.badge` (W# QUIZ)
2. Title + subtitle
3. `.score-box` (score + time)
4. 3 sections: recall → application → reasoning/word problem
5. `.footer`

## Printing Instructions

Open any HTML file in Chrome or Safari → File → Print → set paper to Letter, margins to None, enable "Background graphics". Each `.page` div prints as one page.

## Curriculum Scope

- **Weeks 1–5:** Core Grade 4→5 transition topics
- **Weeks 6–8:** Extension topics (above grade level / enrichment)
  - Week 6: Exponents, powers of 10, perfect squares, square roots, PEMDAS with exponents
  - Week 7: Variables, expressions, like terms, one-step and two-step equations, inequalities
  - Week 8: Probability basics, experimental vs. theoretical, sample space, tree diagrams, predictions, complement rule

## Session Notes

- Student is in Peoria, AZ
- Booklets are iReady-aligned and Beast Academy in style
- Target: ~45 minutes per daily page
- Each page has a `/X` score tracker in the footer
- Answer keys are included at the end of each combined file
