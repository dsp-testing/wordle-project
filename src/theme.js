export const THEMES = {
  DEFAULT: 'default',
  YELLOW: 'yellow',
  RED: 'red',
};

// Order used when cycling through the available themes.
export const THEME_ORDER = [THEMES.DEFAULT, THEMES.YELLOW, THEMES.RED];

const STORAGE_KEY = 'wordle-theme';

export function getStoredTheme() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) || THEMES.DEFAULT;
  } catch {
    return THEMES.DEFAULT;
  }
}

export function getNextTheme(theme) {
  const currentIndex = THEME_ORDER.indexOf(theme);
  return THEME_ORDER[(currentIndex + 1) % THEME_ORDER.length];
}

export function applyTheme(theme) {
  if (theme === THEMES.DEFAULT) {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore storage errors (e.g. private browsing)
  }
}
