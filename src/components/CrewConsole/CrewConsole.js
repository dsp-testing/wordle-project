import React from 'react';

import { checkGuess } from '../../game-helpers';
import { seededValue } from '../../utils';
import { CREW_VOTERS } from '../../constants';

// Fabricated flavor lines the crew "says" depending on how a guess
// scored, keyed by rough performance tier.
const VOTE_COMMENTS = {
  high: [
    'Strong signal lock, recommend holding course.',
    'Trajectory confidence high, proceed.',
    'Readings confirm partial solve, converging fast.',
  ],
  mid: [
    'Mixed telemetry, suggest re-scanning bearings.',
    'Partial lock acquired, adjust vector and retry.',
    'Some drift detected, recommend recalibration.',
  ],
  low: [
    'Signal mostly noise, recommend full resweep.',
    'No meaningful lock, propose new approach vector.',
    'Telemetry inconclusive, defer to next pass.',
  ],
};

function tierFor(score) {
  if (score >= 4) return 'high';
  if (score >= 2) return 'mid';
  return 'low';
}

function CrewConsole({ guess, answer, guessIndex }) {
  if (!guess) {
    return (
      <div className="crew-console crew-console-empty">
        <span className="briefing-label">Crew Consensus</span>
        <p className="crew-idle">Standing by for next guess submission...</p>
      </div>
    );
  }

  const results = checkGuess(guess, answer);
  const score = results.filter((r) => r.status !== 'incorrect').length;
  const tier = tierFor(score);

  return (
    <div className="crew-console">
      <span className="briefing-label">Crew Consensus &mdash; Row {guessIndex + 1}</span>
      <ul className="crew-votes">
        {CREW_VOTERS.map((voter) => {
          const seed = `${voter}-${guess}-${guessIndex}`;
          const confidence = seededValue(seed, 41, 99);
          const commentPool = VOTE_COMMENTS[tier];
          const comment = commentPool[seededValue(seed + 'c', 0, commentPool.length)];
          return (
            <li key={voter} className="crew-vote">
              <strong>{voter}</strong>
              <span className="crew-confidence">{confidence}%</span>
              <span className="crew-comment">{comment}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CrewConsole;
