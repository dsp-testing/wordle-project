import React from 'react';

import { checkGuess } from '../../game-helpers';
import { seededValue } from '../../utils';

// Renders a per-guess telemetry summary: signal lock counts and a
// fabricated signal-to-noise ratio, styled to look like real uplink data.
function TelemetryReadout({ guess, answer, index }) {
  const results = checkGuess(guess, answer);

  if (!results) {
    return null;
  }

  const locked = results.filter((r) => r.status === 'correct').length;
  const partial = results.filter((r) => r.status === 'misplaced').length;
  const noSignal = results.filter((r) => r.status === 'incorrect').length;
  const snr = seededValue(guess + answer + index, 12, 98);

  return (
    <p className="telemetry-line">
      <span className="telemetry-item telemetry-locked">LOCKED {locked}</span>
      <span className="telemetry-item telemetry-partial">PARTIAL {partial}</span>
      <span className="telemetry-item telemetry-none">NO SIGNAL {noSignal}</span>
      <span className="telemetry-item telemetry-snr">SNR {snr}%</span>
    </p>
  );
}

export default TelemetryReadout;
