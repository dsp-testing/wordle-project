import React from 'react';

const STORAGE_KEY = 'colorblind';

function getInitialColorblind() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(STORAGE_KEY) === 'true';
}

function ColorblindToggle() {
  const [enabled, setEnabled] = React.useState(getInitialColorblind);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-colorblind', enabled ? 'true' : 'false');
    window.localStorage.setItem(STORAGE_KEY, enabled);
  }, [enabled]);

  function toggleColorblind() {
    setEnabled((currentlyEnabled) => !currentlyEnabled);
  }

  return (
    <button
      type="button"
      className={`theme-toggle ${enabled ? 'active' : ''}`}
      onClick={toggleColorblind}
      aria-pressed={enabled}
      aria-label={enabled ? 'Disable colorblind mode' : 'Enable colorblind mode'}
      title={enabled ? 'Disable colorblind mode' : 'Enable colorblind mode'}
    >
      <span aria-hidden="true">👁</span>
    </button>
  );
}

export default ColorblindToggle;
