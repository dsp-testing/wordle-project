import React from 'react';

function Header({ isColorblindMode, toggleColorblindMode }) {
  return (
    <header>
      <h1>Word Game</h1>
      <button
        type="button"
        className="colorblind-toggle"
        aria-pressed={isColorblindMode}
        onClick={toggleColorblindMode}
        title="Toggle colorblind-friendly mode"
      >
        {isColorblindMode ? '👁️ Colorblind: On' : '👁️ Colorblind: Off'}
      </button>
    </header>
  );
}

export default Header;
