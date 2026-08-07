export const NUM_OF_GUESSES_ALLOWED = 6;

// Hue values (0-360 on the HSL colour wheel) used to build the "correct
// letter" colour palette picker. Saturation/lightness stay fixed so every
// option remains readable against white text.
export const BLUE_HUE_OPTIONS = [
  { label: 'Sky', hue: 195 },
  { label: 'Azure', hue: 205 },
  { label: 'Cobalt', hue: 215 },
  { label: 'Classic', hue: 225 },
  { label: 'Indigo', hue: 240 },
  { label: 'Navy', hue: 250 },
];

export const SUCCESS_HUE_STORAGE_KEY = 'wordle-success-hue';
