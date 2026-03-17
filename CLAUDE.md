# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm start` — dev server with fast refresh on http://localhost:3000
- `npm test` — Jest in watch mode; use `npm test -- --watchAll=false` for CI
- `npm test -- --coverage` — run tests with coverage report
- `npm run build` — production build to `build/`

## Architecture

React 19 single-page portfolio app built with Create React App (not ejected). Plain JavaScript, no TypeScript.

**Data-driven design:** All portfolio content lives in `src/data.json` — navigation links, profile info, skill categories, projects, and career history. Components read from this JSON; content changes rarely require touching component code.

**Component hierarchy:**
```
App.js (scroll state, nav handler, data destructuring)
├── Header (scroll-aware fixed nav)
├── Hero (intro section)
├── main
│   ├── AboutSection (profile grid)
│   ├── SkillsSection (categorized skill tags)
│   ├── ProjectsSection (project cards)
│   └── CareerSection (career timeline)
└── Footer (contact info)
```

**Key patterns:**
- Barrel exports via `index.js` in each component subdirectory (`common/`, `layout/`, `sections/`)
- SVG icons defined as React components in `src/constants/icons.js`, rendered through `Icon` wrapper
- All styles in a single `src/App.css` (responsive CSS Grid/Flexbox, breakpoints at 900px/768px/480px)
- Scroll position tracked in App state to toggle header transparency

## Coding Conventions

- Functional components with hooks, JSDoc comments
- 2-space indentation, `const`/`let` only
- PascalCase for components/files, camelCase for functions
- ESLint: CRA's `react-app` preset — fix lint errors before committing
- Korean language content and comments throughout

## Commit Style

Imperative, sentence-case. Recent examples: `feat) 코드 정리 및 skills 추가`, `Initialize project using Create React App`. Keep commits focused on a single concern.
