import React from 'react';

import { GAME_MODES } from '../../constants';

function ModeSwitcher({ mode, onChangeMode }) {
  function handleTypeChange(type) {
    if (type !== mode.type) {
      onChangeMode({ ...mode, type });
    }
  }

  function handleHardModeToggle() {
    onChangeMode({ ...mode, hardMode: !mode.hardMode });
  }

  return (
    <div className="mode-switcher" role="group" aria-label="Wordle mode">
      <div className="mode-switcher-types">
        <button
          type="button"
          className={mode.type === GAME_MODES.DAILY ? 'mode-btn active' : 'mode-btn'}
          aria-pressed={mode.type === GAME_MODES.DAILY}
          onClick={() => handleTypeChange(GAME_MODES.DAILY)}
        >
          Daily
        </button>
        <button
          type="button"
          className={mode.type === GAME_MODES.PRACTICE ? 'mode-btn active' : 'mode-btn'}
          aria-pressed={mode.type === GAME_MODES.PRACTICE}
          onClick={() => handleTypeChange(GAME_MODES.PRACTICE)}
        >
          Practice
        </button>
      </div>
      <label className="hard-mode-toggle">
        <input
          type="checkbox"
          checked={mode.hardMode}
          onChange={handleHardModeToggle}
        />
        Hard Mode
      </label>
    </div>
  );
}

export default ModeSwitcher;
