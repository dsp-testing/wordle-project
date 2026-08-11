import React from 'react';

import { LANGUAGES, LANGUAGE_CONFIG } from '../../constants';

function GuessForm({ addToGuessList, disableForm = false, language = LANGUAGES.ENGLISH }) {
  const [guess, setGuess] = React.useState("")
  const { validationPattern, validationMessage, guessLabel } = LANGUAGE_CONFIG[language]

  function handleSubmit(event) {
    event.preventDefault()

    if (!validationPattern.test(guess)) {
      return window.alert(validationMessage)
    }

    console.info({ guess });
    addToGuessList(guess)
    setGuess("")
  }

  function handleChange(event) {
    const value = event.target.value
    // English guesses are compared in uppercase; Japanese hiragana has no case.
    setGuess(language === LANGUAGES.ENGLISH ? value.toUpperCase() : value)
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">{guessLabel}</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        maxLength={5}
        minLength={5}
        disabled={disableForm}
      />
    </form>
  );
}

export default GuessForm;
