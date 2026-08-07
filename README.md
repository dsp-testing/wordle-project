# Wordle

Remake of the wordle game!

## Developer Guide

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (bundled with Node.js)

### Getting Started

1. Clone the repository and install dependencies:

   ```bash
   npm install
   ```

2. Start the local dev server:

   ```bash
   npm run dev
   ```

   This runs a `predev` step that clears the Parcel cache and `dist` folder, then serves `public/index.html` with [Parcel](https://parceljs.org/) (with hot reloading).

### Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Cleans build artifacts and starts the Parcel dev server |
| `npm run build` | Produces a production build in `dist/` |
| `npm run new-component` | Scaffolds a new React component using [`new-component`](https://github.com/joshwcomeau/new-component) |

### Project Structure

```
public/          Static assets and index.html entry point
src/
  components/    React components (App, Game, GuessCells, GuessForm, GuessResults, Header, ResultsBanner)
  constants.js   Shared constants (e.g. word length, guess limits)
  data.js        Word list data
  game-helpers.js  Core game logic helpers
  utils.js       General utility functions
  index.js       Application entry point
docs/            Design references and demo assets
```

### Linting

This project uses ESLint with the `react-app` config (see `.eslintrc.json`). Run your editor's ESLint integration or `npx eslint src` to check for issues.
