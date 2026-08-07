import React from 'react';

import { useRoomConnection } from '../../multiplayer/useRoomConnection';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults/GuessResults';
import ResultsBanner from '../ResultsBanner';
import PlayerList from './PlayerList';
import JoinPrompt from './JoinPrompt';

function ShareLink({ roomId }) {
  const shareUrl = `${window.location.origin}${window.location.pathname}?room=${roomId}`;
  const [copied, setCopied] = React.useState(false);

  function handleCopy() {
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="share-link">
      <p>Share this link so friends can join and play the same word with you:</p>
      <input type="text" readOnly value={shareUrl} onFocus={(e) => e.target.select()} />
      <button onClick={handleCopy}>{copied ? 'Copied!' : 'Copy link'}</button>
    </div>
  );
}

function MultiplayerGame({ roomId }) {
  const [name, setName] = React.useState(null);
  const { status, roomState, errorMessage, submitGuess, resetGame } = useRoomConnection(roomId, name);

  if (!name) {
    return <JoinPrompt roomId={roomId} onJoin={setName} />;
  }

  if (status === 'connecting' || !roomState) {
    return <p>Connecting to room…</p>;
  }

  if (status === 'error') {
    return <p>Lost connection to the game: {errorMessage || 'the server closed the connection.'}</p>;
  }

  const { answer, guessList, guessListIndex, isGameWon, isGameLost, players } = roomState;
  const disableForm = isGameWon || isGameLost;

  return (
    <>
      <ShareLink roomId={roomId} />
      <PlayerList players={players} />
      {isGameWon || isGameLost ? (
        <ResultsBanner
          isGameWon={isGameWon}
          answer={answer}
          guessListIndex={guessListIndex}
          resetGame={resetGame}
        />
      ) : null}
      <GuessResults guessList={guessList} answer={answer} />
      <GuessForm addToGuessList={submitGuess} disableForm={disableForm} />
    </>
  );
}

export default MultiplayerGame;
