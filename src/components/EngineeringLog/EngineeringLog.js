import React from 'react';

// Scrolling fake engineering fix / systems log. Entries are pushed in
// from Game as guesses come in; purely cosmetic flavor text.
function EngineeringLog({ entries }) {
  return (
    <div className="engineering-log">
      <span className="briefing-label">Engineering Log</span>
      <ul>
        {entries.length === 0 ? (
          <li className="log-entry log-entry-idle">All systems nominal. No actions logged yet.</li>
        ) : (
          entries.map((entry) => (
            <li key={entry.id} className="log-entry">
              <span className="log-timestamp">T+{entry.timestamp}</span>
              <span className="log-message">{entry.message}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default EngineeringLog;
