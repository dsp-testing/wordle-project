import React from 'react';

import Game from '../Game';
import Header from '../Header';

const COLORBLIND_STORAGE_KEY = 'wordle-colorblind-mode';

function App() {
  const [isColorblindMode, setIsColorblindMode] = React.useState(() => {
    return window.localStorage.getItem(COLORBLIND_STORAGE_KEY) === 'true';
  });

  React.useEffect(() => {
    window.localStorage.setItem(COLORBLIND_STORAGE_KEY, isColorblindMode);
  }, [isColorblindMode]);

  function toggleColorblindMode() {
    setIsColorblindMode((current) => !current);
  }

  return (
    <div className={`wrapper ${isColorblindMode ? 'colorblind' : ''}`}>
      <Header
        isColorblindMode={isColorblindMode}
        onToggleColorblindMode={toggleColorblindMode}
      />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
