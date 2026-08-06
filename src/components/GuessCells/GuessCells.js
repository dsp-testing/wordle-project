import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '/src/game-helpers.js'

// Telemetry vocabulary: swaps the classic wordle correct/misplaced/incorrect
// labels for mission-control style signal-lock terminology.
const TELEMETRY_LABEL = {
  correct: 'LOCKED',
  misplaced: 'PARTIAL SIGNAL',
  incorrect: 'NO SIGNAL',
};

function GuessCells({guess, answer}) {
  const results = checkGuess(guess, answer)

  function className(index) {
    if (!results) {
      return "cell"
    }

    return `cell ${results[index].status}`
  }

  function telemetryLabel(index) {
    if (!results) {
      return undefined;
    }
    return TELEMETRY_LABEL[results[index].status];
  }

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          key={index}
          className={className(index)}
          title={telemetryLabel(index)}
          aria-label={telemetryLabel(index)}
        >
          { guess ? guess[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default GuessCells;
