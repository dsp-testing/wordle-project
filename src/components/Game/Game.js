import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, GAME_MODES, DEFAULT_WORDLE_MODE } from '../../constants';
import { getDailyWord } from '../../game-helpers';

import GuessForm from '../GuessForm'
import GuessResults from '../GuessResults/GuessResults';
import ResultsBanner from '../ResultsBanner';

function pickAnswer(mode) {
  return mode.type === GAME_MODES.DAILY ? getDailyWord(WORDS) : sample(WORDS);
}

function Game({ mode = DEFAULT_WORDLE_MODE }) {
  const [answer, setAnswer] = React.useState(() => pickAnswer(mode))
  const [guessList, setGuessList] = React.useState(range(NUM_OF_GUESSES_ALLOWED).map(() => ""))
  const [guessListIndex, setGuessListIndex] = React.useState(0)
  const [isGameWon, setIsGameWon] = React.useState(false)
  const [isGameLost, setIsGameLost] = React.useState(false)
  const [disableForm, setDisableForm] = React.useState(false)

  console.info({ answer });

  function addToGuessList(guess) {
    const newGuessList = [...guessList]
    newGuessList[guessListIndex] = guess
    setGuessListIndex(guessListIndex + 1)
    setGuessList(newGuessList)

    if (guess === answer) {
      setIsGameWon(true)
      setDisableForm(true)
    }

    if (!isGameWon && guessListIndex + 1 === NUM_OF_GUESSES_ALLOWED) {
      setIsGameLost(true)
      setDisableForm(true)
    }
  }

  function resetGame() {
    setGuessListIndex(0)
    setGuessList(range(NUM_OF_GUESSES_ALLOWED).map(() => ""))
    setIsGameWon(false)
    setIsGameLost(false)
    setDisableForm(false)
    setAnswer(pickAnswer(mode))
  }

  return (
    <>
      {isGameWon || isGameLost ? <ResultsBanner isGameWon={isGameWon} answer={answer} guessListIndex={guessListIndex} resetGame={resetGame} /> : null}
      <GuessResults guessList={guessList} answer={answer} />
      <GuessForm
        addToGuessList={addToGuessList}
        disableForm={disableForm}
        hardMode={mode.hardMode}
        guessList={guessList}
        answer={answer}
      />
    </>
  )
}

export default Game;
