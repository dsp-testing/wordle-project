import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { HANGMAN_MAX_WRONG_GUESSES } from '../../constants';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function pickWord() {
  return sample(WORDS);
}

function Hangman() {
  const [answer, setAnswer] = React.useState(pickWord);
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  const wrongGuesses = guessedLetters.filter(
    (letter) => !answer.includes(letter)
  );
  const isGameWon = answer
    .split('')
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuesses.length >= HANGMAN_MAX_WRONG_GUESSES;
  const isGameOver = isGameWon || isGameLost;

  function guessLetter(letter) {
    if (isGameOver || guessedLetters.includes(letter)) {
      return;
    }
    setGuessedLetters([...guessedLetters, letter]);
  }

  function resetGame() {
    setGuessedLetters([]);
    setAnswer(pickWord());
  }

  const remainingGuesses = HANGMAN_MAX_WRONG_GUESSES - wrongGuesses.length;

  return (
    <div className="hangman">
      {isGameOver ? (
        <div className={isGameWon ? 'happy banner' : 'sad banner'}>
          {isGameWon ? (
            <p><strong>Congratulations!</strong> You guessed it.</p>
          ) : (
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          )}
          <button onClick={resetGame}>Play again</button>
        </div>
      ) : null}

      <p className="hangman-remaining">
        Remaining guesses: <strong>{remainingGuesses}</strong>
      </p>

      <p className="hangman-word" aria-label="Word to guess">
        {answer.split('').map((letter, index) => (
          <span key={index} className="hangman-letter">
            {guessedLetters.includes(letter) || isGameLost ? letter : '_'}
          </span>
        ))}
      </p>

      <div className="hangman-keyboard">
        {ALPHABET.map((letter) => {
          const isGuessed = guessedLetters.includes(letter);
          const isCorrect = isGuessed && answer.includes(letter);
          const isIncorrect = isGuessed && !answer.includes(letter);
          return (
            <button
              key={letter}
              className={
                isCorrect
                  ? 'hangman-key correct'
                  : isIncorrect
                  ? 'hangman-key incorrect'
                  : 'hangman-key'
              }
              disabled={isGuessed || isGameOver}
              onClick={() => guessLetter(letter)}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Hangman;
