import React from 'react';

import Game from '../Game';
import Header from '../Header';
import TelemetryDashboard from '../TelemetryDashboard';

function App() {
  const [view, setView] = React.useState('game');

  return (
    <div className="wrapper">
      <Header view={view} onChangeView={setView} />

      <div className="game-wrapper">
        {view === 'game' ? <Game /> : <TelemetryDashboard />}
      </div>
    </div>
  );
}

export default App;
