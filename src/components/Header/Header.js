import React from 'react';
import { THEMES, getStoredTheme, applyTheme } from '../../theme';

function Header() {
  const [theme, setTheme] = React.useState(getStoredTheme);

  React.useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) =>
      current === THEMES.YELLOW ? THEMES.DEFAULT : THEMES.YELLOW
    );
  }

  return (
    <header>
      <div className="side" />
      <h1>Word Game</h1>
      <div className="side">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={
            theme === THEMES.YELLOW
              ? 'Switch to default colour palette'
              : 'Switch to yellow colour palette'
          }
          title={
            theme === THEMES.YELLOW
              ? 'Switch to default colour palette'
              : 'Switch to yellow colour palette'
          }
        >
          🎨
        </button>
      </div>
    </header>
  );
}

export default Header;
