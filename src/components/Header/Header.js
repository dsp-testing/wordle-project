import React from 'react';

function Header({ view, onChangeView }) {
  return (
    <header>
      <h1>Word Game</h1>
      <nav className="telemetry-nav-toggle">
        <button
          type="button"
          aria-pressed={view === 'game'}
          onClick={() => onChangeView('game')}
        >
          Play
        </button>
        <button
          type="button"
          aria-pressed={view === 'dashboard'}
          onClick={() => onChangeView('dashboard')}
        >
          Stats
        </button>
      </nav>
    </header>
  );
}

export default Header;
