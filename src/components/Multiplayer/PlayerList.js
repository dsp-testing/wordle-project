import React from 'react';

function PlayerList({ players }) {
  return (
    <div className="player-list">
      <strong>Playing together:</strong>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
