import React from 'react';

const THEME_STORAGE_KEY = 'word-game-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'default';
  }

  return window.localStorage.getItem(THEME_STORAGE_KEY) || 'default';
}

function Header() {
  const [theme, setTheme] = React.useState(getInitialTheme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'purple' ? 'default' : 'purple'
    );
  }

  return (
    <header>
      <div className="side">
        <button
          className="theme-toggle-btn"
          onClick={handleToggleTheme}
          aria-label={
            theme === 'purple'
              ? 'Switch to default color theme'
              : 'Switch to purple color theme'
          }
          title={
            theme === 'purple'
              ? 'Switch to default color theme'
              : 'Switch to purple color theme'
          }
        >
          {theme === 'purple' ? '🟣' : '🎨'}
        </button>
      </div>
      <h1>Word Game</h1>
      <div className="side" />
    </header>
  );
}

export default Header;
