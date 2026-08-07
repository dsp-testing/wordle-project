// URL of the multiplayer WebSocket server. Configurable via Parcel's
// process.env support (define MULTIPLAYER_SERVER_URL in a .env file) so this
// can point at a deployed server; defaults to same-host port 8080 for local
// development.
export function getServerUrl() {
  if (process.env.MULTIPLAYER_SERVER_URL) {
    return process.env.MULTIPLAYER_SERVER_URL;
  }
  const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
  return `${protocol}://${window.location.hostname}:8080`;
}

/**
 * Opens a WebSocket connection to the multiplayer server and joins the given
 * room. Returns an object with helpers to interact with the room and a
 * `close` function to disconnect.
 */
export function connectToRoom(roomId, name, handlers = {}) {
  const ws = new WebSocket(getServerUrl());

  ws.addEventListener('open', () => {
    ws.send(JSON.stringify({ type: 'join', roomId, name }));
  });

  ws.addEventListener('message', (event) => {
    let message;
    try {
      message = JSON.parse(event.data);
    } catch (err) {
      return;
    }

    if (message.type === 'joined' && handlers.onJoined) {
      handlers.onJoined(message);
    } else if (message.type === 'state' && handlers.onState) {
      handlers.onState(message);
    } else if (message.type === 'error' && handlers.onError) {
      handlers.onError(message);
    }
  });

  ws.addEventListener('close', () => {
    if (handlers.onClose) {
      handlers.onClose();
    }
  });

  ws.addEventListener('error', () => {
    if (handlers.onError) {
      handlers.onError({ message: 'Connection error.' });
    }
  });

  return {
    sendGuess(guess) {
      ws.send(JSON.stringify({ type: 'guess', guess }));
    },
    sendReset() {
      ws.send(JSON.stringify({ type: 'reset' }));
    },
    close() {
      ws.close();
    },
  };
}

export function generateRoomId() {
  // Short, URL-friendly room code generated client-side when starting a
  // new game. The server will create the room the first time anyone joins
  // with this id.
  return Math.random().toString(36).slice(2, 10);
}
