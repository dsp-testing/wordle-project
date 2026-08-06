import React from 'react';

import {
  SUMMARY_STATS,
  GUESS_DISTRIBUTION,
  LETTER_ACCURACY,
} from '../../telemetry-data';

// Maps a 0-1 hit rate to a color along the red -> yellow -> green
// scale used throughout the dashboard.
function colorForHitRate(hitRate) {
  const hue = hitRate * 130; // 0 = red, ~50 = yellow, 130 = green
  return `hsl(${hue}deg 70% 50%)`;
}

function StatCard({ label, value, delta, deltaDirection }) {
  return (
    <div className="telemetry-stat-card">
      <div className="telemetry-stat-label">{label}</div>
      <div className="telemetry-stat-value">{value}</div>
      {delta !== undefined && (
        <div className={`telemetry-stat-delta telemetry-stat-delta--${deltaDirection}`}>
          {deltaDirection === 'up' ? '▲' : '▼'} {delta}
        </div>
      )}
    </div>
  );
}

function GuessDistributionChart({ data }) {
  const maxCount = Math.max(...data.map((d) => d.count));

  return (
    <div className="telemetry-bars">
      {data.map(({ guesses, count }) => (
        <div className="telemetry-bar-col" key={guesses}>
          <div
            className={`telemetry-bar${guesses === 'X' ? ' telemetry-bar--fail' : ''}`}
            style={{ height: `${(count / maxCount) * 100}%` }}
            title={`${count} games`}
          />
          <span className="telemetry-bar-label">{guesses}</span>
        </div>
      ))}
    </div>
  );
}

function LetterAccuracyGrid({ data }) {
  return (
    <div className="telemetry-letter-grid">
      {data.map(({ letter, hitRate }) => (
        <div
          className="telemetry-letter-tile"
          key={letter}
          style={{ backgroundColor: colorForHitRate(hitRate) }}
          title={`${Math.round(hitRate * 100)}% hit rate`}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

function TelemetryDashboard() {
  const stats = SUMMARY_STATS;

  return (
    <div className="telemetry-dashboard">
      <div className="telemetry-stat-row">
        <StatCard
          label="Games Played"
          value={stats.gamesPlayed.toLocaleString()}
          delta={`${stats.gamesPlayedDeltaPct}% vs last month`}
          deltaDirection="up"
        />
        <StatCard
          label="Win Rate"
          value={`${stats.winRatePct}%`}
          delta={`${stats.winRateDeltaPct}%`}
          deltaDirection="up"
        />
        <StatCard
          label="Avg. Guesses to Win"
          value={stats.avgGuesses}
          delta={Math.abs(stats.avgGuessesDelta)}
          deltaDirection="down"
        />
        <StatCard
          label="Current Streak (median)"
          value={stats.medianStreak}
          delta={stats.medianStreakDelta}
          deltaDirection="up"
        />
      </div>

      <div className="telemetry-panels">
        <div className="telemetry-panel">
          <h2>Guess Distribution</h2>
          <GuessDistributionChart data={GUESS_DISTRIBUTION} />
        </div>
        <div className="telemetry-panel">
          <h2>Letter Accuracy (hit rate)</h2>
          <LetterAccuracyGrid data={LETTER_ACCURACY} />
        </div>
      </div>
    </div>
  );
}

export default TelemetryDashboard;
