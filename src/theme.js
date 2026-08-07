export const THEMES = {
  DEFAULT: 'default',
  YELLOW: 'yellow',
};

const STORAGE_KEY = 'wordle-theme';

export function getStoredTheme() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) || THEMES.DEFAULT;
  } catch {
    return THEMES.DEFAULT;
  }
}

export function applyTheme(theme) {
  if (theme === THEMES.YELLOW) {
    document.documentElement.setAttribute('data-theme', THEMES.YELLOW);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore storage errors (e.g. private browsing)
  }
}
