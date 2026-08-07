import React from 'react';

function JoinPrompt({ roomId, onJoin }) {
  const [name, setName] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim()) {
      return;
    }
    onJoin(name.trim());
  }

  return (
    <div className="join-prompt">
      <p>You've been invited to a shared Wordle game (room <code>{roomId}</code>).</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="player-name">Enter your name to join:</label>
        <input
          id="player-name"
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          maxLength={20}
        />
        <button type="submit">Join game</button>
      </form>
    </div>
  );
}

export default JoinPrompt;
