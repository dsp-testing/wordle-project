# Telemetry Dashboard - Design & Plan

## Goal
Add a telemetry/stats dashboard to the Wordle clone so players can see
aggregate gameplay stats (games played, win rate, guess distribution,
letter accuracy). There is no analytics backend yet, so the dashboard
is built against a mock data module (`src/telemetry-data.js`) that
mirrors the shape a real telemetry API would return, making it a
drop-in swap later.

## Process
1. Designed 3 mockup concepts as static HTML and rendered screenshots
   with headless Chrome (see `docs/telemetry-mockups/concept-*.png`):
   - **Concept A - Light Stat Cards**: clean/corporate analytics look
   - **Concept B - Dark Terminal**: monospace dark mode with keyboard
     heatmap and game log
   - **Concept C - Playful Tiles**: matches Wordle's own green/tile
     aesthetic
2. Reviewed with the team; chosen direction: **Concept A's card layout
   rendered in Concept B's dark palette**
   (`docs/telemetry-mockups/concept-final-dark-cards.png`).
3. Built the chosen design as a real React component
   (`src/components/TelemetryDashboard`) wired into the app via a new
   Play/Stats toggle in the header.

## What shipped
- `src/telemetry-data.js` - mock telemetry data (summary stats, guess
  distribution, letter accuracy)
- `src/components/TelemetryDashboard/` - dashboard component
  (StatCard, GuessDistributionChart, LetterAccuracyGrid)
- `src/components/Header/Header.js` - added a Play/Stats nav toggle
- `src/components/App/App.js` - toggles between the game and the
  dashboard based on the selected view
- `src/styles.css` - dark "terminal" themed styles for the dashboard,
  scoped under `.telemetry-*` classes so they don't affect the game UI
- `docs/telemetry-mockups/` - design artifacts (mockup concepts +
  screenshots of the shipped dashboard)

## Out of scope / follow-ups
- A player leaderboard was proposed as a fast-follow. It requires
  per-player identity/accounts, which this app does not currently
  have, so it's left as a separate, future feature.
- Real telemetry collection/storage (this PR only adds the UI against
  mock data).
