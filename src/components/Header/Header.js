import React from 'react';

import ThemeToggle from '../ThemeToggle';

function Header() {
  return (
    <header>
      <div className="side" aria-hidden="true" />
      <h1>Word Game</h1>
      <div className="side">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
