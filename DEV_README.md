# Developer README

This document covers everything you need to set up, run, and work on the Wordle clone locally.

## Tech Stack

- **React 19** for UI components
- **Parcel** as the build tool / dev server
- **ESLint** (`react-app` config) + **Prettier** for linting and formatting

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (bundled with Node.js)

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local dev server (Parcel, with hot reloading):

```bash
npm run dev
```

This clears the Parcel cache/`dist` folder first (`predev`), then serves
`public/index.html`. The app will be available at the URL Parcel prints in
the terminal (typically `http://localhost:1234`).

Build a production bundle:

```bash
npm run build
```

Output is written to `dist/`.

## Scaffolding a New Component

This project uses [`new-component`](https://github.com/joshwcomeau/new-component)
to scaffold consistent component folders:

```bash
npm run new-component -- ComponentName
```

This creates a new folder under `src/components/` with the standard
`ComponentName.js` + `index.js` pair used throughout the codebase.

## Project Structure

```
public/            Static assets and the HTML entry point
src/
  index.js         App entry point
  constants.js     Shared game constants (word length, guess count, etc.)
  data.js          Word list(s) used by the game
  game-helpers.js  Core game logic helpers
  utils.js         Misc utility functions
  styles.css       Global styles
  reset.css        CSS reset
  components/      React components, one folder per component
docs/              Images/GIFs used in documentation
```

## Linting & Formatting

Lint the project with ESLint (configured via `.eslintrc.json`, extending
`react-app`):

```bash
npx eslint src
```

Format files with Prettier:

```bash
npx prettier --write .
```

## Notes

- There is no automated test suite in this project yet.
- Node modules and the `dist`/`.parcel-cache` build artifacts are git-ignored;
  see `.gitignore` for the full list.
