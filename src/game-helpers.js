/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = '✓';

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: 'correct',
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = 'incorrect';
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = 'misplaced';
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

/**
 * Picks a word deterministically based on the calendar day, so every
 * player sees the same word for "Daily" mode until the day changes.
 */
export function getDailyWord(words, date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diffInMs = date - startOfYear;
  const dayOfYear = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return words[dayOfYear % words.length];
}

/**
 * Enforces "Hard Mode" rules: any letter revealed as correct must be
 * reused in the same spot on later guesses, and any letter revealed as
 * misplaced must be included somewhere in later guesses.
 * Returns an error message string if the guess is invalid, or null if OK.
 */
export function validateHardModeGuess(guess, previousGuesses, answer) {
  const requiredPositions = {};
  const requiredLetters = new Set();

  previousGuesses
    .filter((prevGuess) => Boolean(prevGuess))
    .forEach((prevGuess) => {
      const result = checkGuess(prevGuess, answer);
      result.forEach((entry, index) => {
        if (entry.status === 'correct') {
          requiredPositions[index] = entry.letter;
        } else if (entry.status === 'misplaced') {
          requiredLetters.add(entry.letter);
        }
      });
    });

  const guessChars = guess.toUpperCase().split('');

  for (const [index, letter] of Object.entries(requiredPositions)) {
    if (guessChars[Number(index)] !== letter) {
      return `Hard Mode: letter #${Number(index) + 1} must be ${letter}.`;
    }
  }

  for (const letter of requiredLetters) {
    if (!guessChars.includes(letter)) {
      return `Hard Mode: guess must include the letter ${letter}.`;
    }
  }

  return null;
}
