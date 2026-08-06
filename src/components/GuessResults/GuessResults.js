import React from 'react';
import GuessCells from '../GuessCells/GuessCells';
import TelemetryReadout from '../TelemetryReadout';
import CrewConsole from '../CrewConsole';

function GuessResults({ guessList, answer }) {
  // Only surface crew consensus for the most recently submitted guess.
  const lastFilledIndex = guessList.reduce(
    (last, guess, index) => (guess ? index : last),
    -1
  );

  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <div className="guess-row" key={index}>
          <GuessCells guess={guess} answer={answer} />
          <TelemetryReadout guess={guess} answer={answer} index={index} />
        </div>
      ))}
      <CrewConsole
        guess={lastFilledIndex >= 0 ? guessList[lastFilledIndex] : ''}
        answer={answer}
        guessIndex={lastFilledIndex}
      />
    </div>
  );
}

export default GuessResults;
