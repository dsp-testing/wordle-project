import React from 'react';

import Game from '../Game';
import Header from '../Header';
import Lobby from '../Multiplayer/Lobby';
import MultiplayerGame from '../Multiplayer/MultiplayerGame';

function getRoomIdFromUrl() {
  return new URLSearchParams(window.location.search).get('room');
}

function App() {
  const [roomId, setRoomId] = React.useState(getRoomIdFromUrl);

  React.useEffect(() => {
    function handlePopState() {
      setRoomId(getRoomIdFromUrl());
    }
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  function createRoom(newRoomId) {
    const url = new URL(window.location.href);
    url.searchParams.set('room', newRoomId);
    window.history.pushState({}, '', url);
    setRoomId(newRoomId);
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        {roomId ? (
          <MultiplayerGame roomId={roomId} />
        ) : (
          <>
            <Game />
            <Lobby onCreateRoom={createRoom} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
