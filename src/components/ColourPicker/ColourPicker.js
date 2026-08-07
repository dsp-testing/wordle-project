import React from 'react';

import { BLUE_HUE_OPTIONS, SUCCESS_HUE_STORAGE_KEY } from '../../constants';

function applyHue(hue) {
  document.documentElement.style.setProperty(
    '--color-success',
    `hsl(${hue}deg 70% 30%)`
  );
}

function getStoredHue() {
  const stored = window.localStorage.getItem(SUCCESS_HUE_STORAGE_KEY);
  const parsed = Number(stored);
  const isKnownHue = BLUE_HUE_OPTIONS.some((option) => option.hue === parsed);
  return isKnownHue ? parsed : BLUE_HUE_OPTIONS.find((option) => option.label === 'Classic').hue;
}

function ColourPicker() {
  const [selectedHue, setSelectedHue] = React.useState(getStoredHue);

  React.useEffect(() => {
    applyHue(selectedHue);
    window.localStorage.setItem(SUCCESS_HUE_STORAGE_KEY, selectedHue);
  }, [selectedHue]);

  return (
    <fieldset className="colour-picker">
      <legend className="visually-hidden">Correct letter colour</legend>
      {BLUE_HUE_OPTIONS.map(({ label, hue }) => (
        <button
          key={hue}
          type="button"
          className="colour-swatch"
          style={{ background: `hsl(${hue}deg 70% 30%)` }}
          aria-pressed={selectedHue === hue}
          aria-label={label}
          title={label}
          onClick={() => setSelectedHue(hue)}
        />
      ))}
    </fieldset>
  );
}

export default ColourPicker;
