import React from 'react';

import Game from '../Game';
import Header from '../Header';
import GameSwitcher from '../GameSwitcher';
import ModeSwitcher from '../ModeSwitcher';
import Hangman from '../Hangman';
import { GAMES, DEFAULT_WORDLE_MODE } from '../../constants';

function App() {
  const [activeGame, setActiveGame] = React.useState(GAMES.WORDLE);
  const [wordleMode, setWordleMode] = React.useState(DEFAULT_WORDLE_MODE);

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <GameSwitcher activeGame={activeGame} onChangeGame={setActiveGame} />

        {activeGame === GAMES.WORDLE ? (
          <>
            <ModeSwitcher mode={wordleMode} onChangeMode={setWordleMode} />
            <Game key={wordleMode.type} mode={wordleMode} />
          </>
        ) : (
          <Hangman />
        )}
      </div>
    </div>
  );
}

export default App;

