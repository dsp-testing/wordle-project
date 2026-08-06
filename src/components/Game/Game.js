import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, ENGINEERING_LOG_POOL } from '../../constants';

import GuessForm from '../GuessForm'
import GuessResults from '../GuessResults/GuessResults';
import ResultsBanner from '../ResultsBanner';
import EngineeringLog from '../EngineeringLog';

let logIdCounter = 0;

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS))
  const [guessList, setGuessList] = React.useState(range(NUM_OF_GUESSES_ALLOWED).map(() => ""))
  const [guessListIndex, setGuessListIndex] = React.useState(0)
  const [isGameWon, setIsGameWon] = React.useState(false)
  const [isGameLost, setIsGameLost] = React.useState(false)
  const [disableForm, setDisableForm] = React.useState(false)
  const [logEntries, setLogEntries] = React.useState([])

  console.info({ answer });

  function pushLogEntry() {
    const message = sample(ENGINEERING_LOG_POOL);
    const timestamp = `${String(Math.floor(logIdCounter * 7.4)).padStart(3, '0')}s`;
    logIdCounter += 1;
    setLogEntries((prev) => [
      ...prev,
      { id: logIdCounter, message, timestamp },
    ]);
  }

  function addToGuessList(guess) {
    const newGuessList = [...guessList]
    newGuessList[guessListIndex] = guess
    setGuessListIndex(guessListIndex + 1)
    setGuessList(newGuessList)
    pushLogEntry()

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
    setAnswer(sample(WORDS))
    setLogEntries([])
  }

  return (
    <>
      {isGameWon || isGameLost ? <ResultsBanner isGameWon={isGameWon} answer={answer} guessListIndex={guessListIndex} resetGame={resetGame} /> : null}
      <GuessResults guessList={guessList} answer={answer} />
      <GuessForm addToGuessList={addToGuessList} disableForm={disableForm} />
      <EngineeringLog entries={logEntries} />
    </>
  )
}

export default Game;
