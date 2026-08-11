import React from 'react';

import Game from '../Game';
import Header from '../Header';
import { LANGUAGES } from '../../constants';

function App() {
  const [language, setLanguage] = React.useState(LANGUAGES.ENGLISH);

  return (
    <div className="wrapper">
      <Header language={language} setLanguage={setLanguage} />

      <div className="game-wrapper">
        {/* Remount the game whenever the language changes so it starts fresh. */}
        <Game key={language} language={language} />
      </div>
    </div>
  );
}

export default App;
