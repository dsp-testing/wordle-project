import React from 'react';

import { LANGUAGES, LANGUAGE_CONFIG } from '../../constants';

function Header({ language = LANGUAGES.ENGLISH, setLanguage }) {
  const title = LANGUAGE_CONFIG[language].title;

  return (
    <header>
      <h1>{title}</h1>
      {setLanguage ? (
        <div className="language-switcher">
          {Object.values(LANGUAGES).map((lang) => (
            <button
              key={lang}
              type="button"
              className={lang === language ? 'active' : ''}
              onClick={() => setLanguage(lang)}
            >
              {LANGUAGE_CONFIG[lang].label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  );
}

export default Header;
