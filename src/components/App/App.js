import React from 'react';

import Game from '../Game';
import Header from '../Header';
import LandingPage from '../LandingPage';

function App() {
  const [hasStarted, setHasStarted] = React.useState(false);

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        {hasStarted ? (
          <Game />
        ) : (
          <LandingPage onStart={() => setHasStarted(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
