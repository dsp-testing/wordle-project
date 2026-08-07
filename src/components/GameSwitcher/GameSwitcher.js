import React from 'react';

import { GAMES } from '../../constants';

function GameSwitcher({ activeGame, onChangeGame }) {
  return (
    <nav className="game-switcher" aria-label="Choose a game">
      <button
        type="button"
        className={activeGame === GAMES.WORDLE ? 'game-btn active' : 'game-btn'}
        aria-pressed={activeGame === GAMES.WORDLE}
        onClick={() => onChangeGame(GAMES.WORDLE)}
      >
        Wordle
      </button>
      <button
        type="button"
        className={activeGame === GAMES.HANGMAN ? 'game-btn active' : 'game-btn'}
        aria-pressed={activeGame === GAMES.HANGMAN}
        onClick={() => onChangeGame(GAMES.HANGMAN)}
      >
        Hangman
      </button>
    </nav>
  );
}

export default GameSwitcher;
