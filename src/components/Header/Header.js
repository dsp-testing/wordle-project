import React from 'react';

function Header({ isColorblindMode, onToggleColorblindMode }) {
  return (
    <header>
      <h1>Word Game</h1>
      <div className="side">
        <button
          type="button"
          className="colorblind-toggle"
          aria-pressed={isColorblindMode}
          onClick={onToggleColorblindMode}
          title={
            isColorblindMode
              ? 'Disable colorblind mode'
              : 'Enable colorblind mode'
          }
        >
          <span aria-hidden="true">👁️</span>
          <span className="visually-hidden">
            {isColorblindMode
              ? 'Disable colorblind mode'
              : 'Enable colorblind mode'}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
