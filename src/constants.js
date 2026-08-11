export const NUM_OF_GUESSES_ALLOWED = 6;

export const LANGUAGES = {
  ENGLISH: 'english',
  JAPANESE: 'japanese',
};

export const LANGUAGE_CONFIG = {
  [LANGUAGES.ENGLISH]: {
    label: 'English',
    title: 'Word Game',
    guessLabel: 'Enter guess:',
    // Matches exactly 5 uppercase A-Z letters.
    validationPattern: /^[A-Z]{5}$/,
    validationMessage: 'Guess must have exactly 5 A-Z characters',
  },
  [LANGUAGES.JAPANESE]: {
    label: '日本語',
    title: '言葉ゲーム',
    guessLabel: 'ひらがなで入力:',
    // Matches exactly 5 hiragana characters.
    validationPattern: /^[\u3040-\u309F]{5}$/,
    validationMessage: 'ひらがな5文字で入力してください',
  },
};
