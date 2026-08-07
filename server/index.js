const http = require('http');
const crypto = require('crypto');
const { WebSocketServer } = require('ws');
const {
  getRoom,
  getOrCreateRoom,
  addPlayer,
  removePlayer,
  submitGuess,
  resetRoom,
  roomState,
  broadcast,
} = require('./rooms');

const PORT = process.env.MULTIPLAYER_PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
    return;
  }
  res.writeHead(404);
  res.end();
});

const wss = new WebSocketServer({ server });

function send(ws, message) {
  if (ws.readyState === ws.OPEN) {
    ws.send(JSON.stringify(message));
  }
}

wss.on('connection', (ws) => {
  let currentRoom = null;
  let playerId = null;

  ws.on('message', (raw) => {
    let message;
    try {
      message = JSON.parse(raw);
    } catch (err) {
      return send(ws, { type: 'error', message: 'Malformed message.' });
    }

    if (message.type === 'join') {
      const { roomId, name } = message;
      if (!roomId) {
        return send(ws, { type: 'error', message: 'roomId is required to join.' });
      }

      currentRoom = getOrCreateRoom(roomId);
      playerId = crypto.randomBytes(6).toString('hex');
      addPlayer(currentRoom, playerId, name || 'Anonymous', ws);

      send(ws, { type: 'joined', playerId, ...roomState(currentRoom) });
      broadcast(currentRoom, { type: 'state', ...roomState(currentRoom) });
      return;
    }

    if (!currentRoom) {
      return send(ws, { type: 'error', message: 'Join a room before doing that.' });
    }

    if (message.type === 'guess') {
      const result = submitGuess(currentRoom, message.guess);
      if (result.error) {
        return send(ws, { type: 'error', message: result.error });
      }
      broadcast(currentRoom, { type: 'state', ...roomState(currentRoom) });
      return;
    }

    if (message.type === 'reset') {
      resetRoom(currentRoom);
      broadcast(currentRoom, { type: 'state', ...roomState(currentRoom) });
      return;
    }
  });

  ws.on('close', () => {
    if (currentRoom && playerId) {
      removePlayer(currentRoom, playerId);
      broadcast(currentRoom, { type: 'state', ...roomState(currentRoom) });
    }
  });
});

server.listen(PORT, () => {
  console.info(`Multiplayer WebSocket server listening on port ${PORT}`);
});
