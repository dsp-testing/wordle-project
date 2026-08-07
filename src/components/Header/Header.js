import React from 'react';
import { THEMES, getStoredTheme, applyTheme, getNextTheme } from '../../theme';

const THEME_LABELS = {
  [THEMES.DEFAULT]: 'default',
  [THEMES.YELLOW]: 'yellow',
  [THEMES.RED]: 'red',
};

function Header() {
  const [theme, setTheme] = React.useState(getStoredTheme);

  React.useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => getNextTheme(current));
  }

  const nextThemeLabel = THEME_LABELS[getNextTheme(theme)];

  return (
    <header>
      <div className="side" />
      <h1>Word Game</h1>
      <div className="side">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${nextThemeLabel} colour palette`}
          title={`Switch to ${nextThemeLabel} colour palette`}
        >
          🎨
        </button>
      </div>
    </header>
  );
}

export default Header;
