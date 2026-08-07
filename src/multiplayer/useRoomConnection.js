import React from 'react';
import { connectToRoom } from './socketClient';

/**
 * Manages the lifecycle of a multiplayer room connection: connects on
 * mount, tears down on unmount, and exposes the latest room state plus
 * helpers to submit guesses / reset the game.
 */
export function useRoomConnection(roomId, name) {
  const [status, setStatus] = React.useState('connecting'); // connecting | connected | error
  const [roomState, setRoomState] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const connectionRef = React.useRef(null);

  React.useEffect(() => {
    if (!roomId || !name) {
      return;
    }

    const connection = connectToRoom(roomId, name, {
      onJoined(message) {
        setStatus('connected');
        setRoomState(message);
      },
      onState(message) {
        setRoomState(message);
      },
      onError(message) {
        setStatus('error');
        setErrorMessage(message.message);
      },
      onClose() {
        setStatus((current) => (current === 'error' ? current : 'error'));
      },
    });

    connectionRef.current = connection;

    return () => {
      connection.close();
      connectionRef.current = null;
    };
  }, [roomId, name]);

  const submitGuess = React.useCallback((guess) => {
    connectionRef.current?.sendGuess(guess);
  }, []);

  const resetGame = React.useCallback(() => {
    connectionRef.current?.sendReset();
  }, []);

  return { status, roomState, errorMessage, submitGuess, resetGame };
}
