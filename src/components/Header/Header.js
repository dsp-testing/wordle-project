import React from 'react';

function Header({
  theme,
  onToggleTheme,
  colorblindMode,
  onToggleColorblindMode,
}) {
  const isDark = theme === 'dark';

  return (
    <header>
      <div className="side" />
      <h1>Word Game</h1>
      <div className="side header-controls">
        <button
          className="theme-toggle-btn"
          onClick={onToggleColorblindMode}
          aria-pressed={colorblindMode}
          aria-label={
            colorblindMode
              ? 'Turn off colorblind-friendly colors'
              : 'Turn on colorblind-friendly colors'
          }
          title={
            colorblindMode
              ? 'Turn off colorblind-friendly colors'
              : 'Turn on colorblind-friendly colors'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 5c-5.05 0-9.29 3.11-11 7.5 1.71 4.39 5.95 7.5 11 7.5s9.29-3.11 11-7.5C21.29 8.11 17.05 5 12 5Zm0 12.5a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />
          </svg>
        </button>
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 4a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1Zm0 18a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1ZM4 13H2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm18 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2ZM5.64 6.36a1 1 0 0 1-.7-.29L3.5 4.63a1 1 0 1 1 1.42-1.42L6.35 4.65a1 1 0 0 1-.71 1.71Zm12.73 12.73a1 1 0 0 1-.7-.3l-1.44-1.43a1 1 0 1 1 1.42-1.42l1.43 1.43a1 1 0 0 1-.71 1.72ZM4.22 20.49a1 1 0 0 1-.71-1.71l1.43-1.43a1 1 0 1 1 1.42 1.42l-1.43 1.43a1 1 0 0 1-.71.29Zm13.14-13.14a1 1 0 0 1-.71-1.71l1.43-1.43a1 1 0 1 1 1.42 1.42l-1.43 1.43a1 1 0 0 1-.71.29ZM12 18a6 6 0 1 1 6-6 6 6 0 0 1-6 6Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.34 2.02a1 1 0 0 1 .82 1.36 8 8 0 0 0 10.46 10.46 1 1 0 0 1 1.29 1.29A10 10 0 1 1 11.05.73a1 1 0 0 1 1.29 1.29Z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
