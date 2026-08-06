/**
 * Mock telemetry data for the dashboard.
 *
 * There's no analytics backend yet, so this module generates
 * deterministic sample data that mirrors the shape a real
 * telemetry service would return (games played, win rate,
 * guess distribution, letter accuracy, etc). Once real
 * telemetry collection exists, this module can be swapped
 * for an API call without changing the dashboard components.
 */

export const SUMMARY_STATS = {
  gamesPlayed: 4812,
  gamesPlayedDeltaPct: 12,
  winRatePct: 86.4,
  winRateDeltaPct: 2.1,
  avgGuesses: 4.1,
  avgGuessesDelta: -0.3,
  medianStreak: 7,
  medianStreakDelta: 1,
};

// Number of games that finished on each guess (1-6), plus games lost ('X').
export const GUESS_DISTRIBUTION = [
  { guesses: '1', count: 18 },
  { guesses: '2', count: 210 },
  { guesses: '3', count: 890 },
  { guesses: '4', count: 1204 },
  { guesses: '5', count: 760 },
  { guesses: '6', count: 340 },
  { guesses: 'X', count: 190 },
];

// Hit rate (0-1) for a sample of frequently-used letters, used to
// color the letter accuracy tiles. Higher = more often correct/misplaced
// rather than incorrect when guessed.
export const LETTER_ACCURACY = [
  { letter: 'A', hitRate: 0.82 },
  { letter: 'R', hitRate: 0.71 },
  { letter: 'O', hitRate: 0.55 },
  { letter: 'S', hitRate: 0.68 },
  { letter: 'E', hitRate: 0.34 },
  { letter: 'T', hitRate: 0.58 },
  { letter: 'L', hitRate: 0.77 },
  { letter: 'N', hitRate: 0.31 },
  { letter: 'I', hitRate: 0.69 },
];
