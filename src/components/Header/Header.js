import React from 'react';

const THEME_STORAGE_KEY = 'word-game-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'default';
  }

  return window.localStorage.getItem(THEME_STORAGE_KEY) || 'default';
}

const THEMES = ['default', 'purple', 'beige'];
const THEME_ICONS = {
  default: '🎨',
  purple: '🟣',
  beige: '🟤',
};
const THEME_LABELS = {
  default: 'default',
  purple: 'purple',
  beige: 'beige',
};

function getNextTheme(currentTheme) {
  const currentIndex = THEMES.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % THEMES.length;
  return THEMES[nextIndex];
}

function Header() {
  const [theme, setTheme] = React.useState(getInitialTheme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme((currentTheme) => getNextTheme(currentTheme));
  }

  const nextThemeLabel = THEME_LABELS[getNextTheme(theme)];

  return (
    <header>
      <div className="side">
        <button
          className="theme-toggle-btn"
          onClick={handleToggleTheme}
          aria-label={`Switch to ${nextThemeLabel} color theme`}
          title={`Switch to ${nextThemeLabel} color theme`}
        >
          {THEME_ICONS[theme]}
        </button>
      </div>
      <h1>Word Game</h1>
      <div className="side" />
    </header>
  );
}

export default Header;
