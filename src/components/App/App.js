import React from 'react';

import Game from '../Game';
import Header from '../Header';

const COLORBLIND_STORAGE_KEY = 'colorblindMode';

function App() {
  const [isColorblindMode, setIsColorblindMode] = React.useState(() => {
    return window.localStorage.getItem(COLORBLIND_STORAGE_KEY) === 'true';
  });

  function toggleColorblindMode() {
    setIsColorblindMode((prev) => {
      const next = !prev;
      window.localStorage.setItem(COLORBLIND_STORAGE_KEY, next);
      return next;
    });
  }

  return (
    <div className={`wrapper ${isColorblindMode ? 'colorblind-mode' : ''}`}>
      <Header
        isColorblindMode={isColorblindMode}
        toggleColorblindMode={toggleColorblindMode}
      />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
