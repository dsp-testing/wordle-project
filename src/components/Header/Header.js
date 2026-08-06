import React from 'react';

import ThemeToggle from '../ThemeToggle';
import ColorblindToggle from '../ColorblindToggle';

function Header() {
  return (
    <header>
      <div className="side" aria-hidden="true" />
      <h1>Word Game</h1>
      <div className="side header-controls">
        <ColorblindToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
