import { useEffect, useState } from 'react';

const STORAGE_KEY = 'word-game-colorblind-mode';

function getInitialColorblindMode() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(STORAGE_KEY) === 'true';
}

// Manages the colorblind-friendly palette setting, syncing it to the
// <html> element's `data-colorblind` attribute (so CSS can react to it)
// and to localStorage (so the choice persists across visits).
function useColorblindMode() {
  const [colorblindMode, setColorblindMode] = useState(
    getInitialColorblindMode
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-colorblind',
      colorblindMode ? 'true' : 'false'
    );
    window.localStorage.setItem(STORAGE_KEY, colorblindMode);
  }, [colorblindMode]);

  function toggleColorblindMode() {
    setColorblindMode((current) => !current);
  }

  return [colorblindMode, toggleColorblindMode];
}

export default useColorblindMode;
