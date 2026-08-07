/**
 * Kept in sync with ../src/data.js and ../src/constants.js.
 * Duplicated here (rather than imported) so the server can run as
 * plain CommonJS without depending on the frontend's ESM build setup.
 */

const WORDS = [
  'AGENT',
  'WORLD',
  'ABOUT',
  'HEART',
  'WATER',
  'SIXTY',
  'BOARD',
  'MONTH',
  'MUSIC',
  'PARTY',
  'PIANO',
  'MOUTH',
  'WOMAN',
  'SUGAR',
  'AMBER',
  'DREAM',
  'LAUGH',
  'TIGER',
  'EARTH',
  'MONEY',
  'WORDS',
  'SMILE',
  'LEMON',
  'SOUTH',
  'AFTER',
  'STONE',
  'THING',
  'LIGHT',
  'STORY',
  'POWER',
  'TODAY',
  'RANGE',
  'PEARL',
  'VENOM',
  'PROXY',
  'ROUND',
  'HOVER',
  'CANDY',
  'ABOVE',
  'PHONE',
  'OTHER',
  'SMART',
  'BLACK',
  'MAGIC',
  'FRUIT',
  'RADIO',
  'ROYAL',
  'HONEY',
  'FLAKE',
  'SOUND',
];

const NUM_OF_GUESSES_ALLOWED = 6;

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = { WORDS, NUM_OF_GUESSES_ALLOWED, sample };
