# Repository Guidelines

## Project Structure & Module Organization
The app follows Create React App defaults. Primary source lives in `src/`, with `index.js` wiring React to the DOM and `App.js` hosting top-level layout. Styles shared in `index.css` and component-specific CSS sit next to each component. Static assets and the HTML shell reside in `public/`. Tests live beside implementation files as `*.test.js`; Jest setup and shared utilities live in `src/setupTests.js` and `src/reportWebVitals.js`.

## Build, Test, and Development Commands
- `npm install` — install or update dependencies listed in `package.json`.
- `npm start` — launch the dev server with fast refresh on http://localhost:3000.
- `npm test` — run Jest in watch mode with React Testing Library. Add `-- --watchAll=false` in CI.
- `npm run build` — create an optimized production bundle under `build/` ready for deployment.

## Coding Style & Naming Conventions
Use ES2015+ syntax with 2-space indentation; prefer `const`/`let`. Name React components and files in PascalCase (`HeroSection.js`) and hooks in camelCase (`usePortfolioData`). Keep components focused and colocate styles or CSS modules with the component when practical. CRA ships with the `react-app` ESLint profile; fix lint errors surfaced in the console before committing.

## Testing Guidelines
Write tests with Jest + React Testing Library. Co-locate specs as `Component.test.js` to mirror the component under test. Favor user-visible assertions (query by role or text) and cover key flows before refining UI polish. For one-off utilities, snapshot tests live next to the helper. Run `npm test -- --coverage` locally before release branches to ensure no unexpected drops.

## Commit & Pull Request Guidelines
Follow the imperative, sentence-case style used in the history (`Initialize project using Create React App`). Keep each commit focused on a single concern. Pull requests should include a scope summary, notable UI changes (screenshot or GIF when applicable), testing evidence (commands run), and any follow-up TODOs. Reference issue IDs in the description to enable traceability.
