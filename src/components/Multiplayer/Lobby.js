import React from 'react';
import { generateRoomId } from '../../multiplayer/socketClient';

function Lobby({ onCreateRoom }) {
  return (
    <div className="lobby">
      <p>Want to solve the puzzle together? Start a shared game and send the link to friends — everyone will see the same word and the same guesses live.</p>
      <button
        onClick={() => onCreateRoom(generateRoomId())}
      >
        Play with friends
      </button>
    </div>
  );
}

export default Lobby;
