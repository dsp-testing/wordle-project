const crypto = require('crypto');
const { WORDS, NUM_OF_GUESSES_ALLOWED, sample } = require('./gameData');

/**
 * In-memory room store. Rooms are ephemeral: they live only as long as the
 * server process runs and are cleaned up a short while after everyone
 * disconnects. This is intentionally simple (no database) since rooms are
 * meant to be short-lived, disposable "play with friends right now" sessions.
 */
const rooms = new Map();

const ROOM_EMPTY_TTL_MS = 5 * 60 * 1000; // clean up 5 min after last player leaves

function generateRoomId() {
  // Short, URL-friendly, easy to read aloud / paste into a link.
  return crypto.randomBytes(4).toString('hex');
}

function createRoom(roomId) {
  if (!roomId) {
    roomId = generateRoomId();
    while (rooms.has(roomId)) {
      roomId = generateRoomId();
    }
  }

  const room = {
    id: roomId,
    answer: sample(WORDS),
    guessList: Array(NUM_OF_GUESSES_ALLOWED).fill(''),
    guessListIndex: 0,
    isGameWon: false,
    isGameLost: false,
    players: new Map(), // playerId -> { id, name, ws }
    emptySince: null,
    cleanupTimer: null,
  };

  rooms.set(roomId, room);
  return room;
}

function getRoom(roomId) {
  return rooms.get(roomId);
}

function getOrCreateRoom(roomId) {
  return rooms.get(roomId) || createRoom(roomId);
}

function addPlayer(room, playerId, name, ws) {
  if (room.cleanupTimer) {
    clearTimeout(room.cleanupTimer);
    room.cleanupTimer = null;
  }
  room.players.set(playerId, { id: playerId, name, ws });
}

function removePlayer(room, playerId) {
  room.players.delete(playerId);

  if (room.players.size === 0) {
    room.cleanupTimer = setTimeout(() => {
      rooms.delete(room.id);
    }, ROOM_EMPTY_TTL_MS);
  }
}

function playerList(room) {
  return Array.from(room.players.values()).map((p) => ({ id: p.id, name: p.name }));
}

function submitGuess(room, guess) {
  if (room.isGameWon || room.isGameLost) {
    return { error: 'Game is already over.' };
  }

  const normalizedGuess = String(guess || '').toUpperCase();
  if (!/^[A-Z]{5}$/.test(normalizedGuess)) {
    return { error: 'Guess must have exactly 5 A-Z characters.' };
  }

  const newGuessList = [...room.guessList];
  newGuessList[room.guessListIndex] = normalizedGuess;
  room.guessList = newGuessList;
  room.guessListIndex += 1;

  if (normalizedGuess === room.answer) {
    room.isGameWon = true;
  } else if (room.guessListIndex === NUM_OF_GUESSES_ALLOWED) {
    room.isGameLost = true;
  }

  return { room };
}

function resetRoom(room) {
  room.answer = sample(WORDS);
  room.guessList = Array(NUM_OF_GUESSES_ALLOWED).fill('');
  room.guessListIndex = 0;
  room.isGameWon = false;
  room.isGameLost = false;
}

function roomState(room) {
  return {
    roomId: room.id,
    answer: room.answer,
    guessList: room.guessList,
    guessListIndex: room.guessListIndex,
    isGameWon: room.isGameWon,
    isGameLost: room.isGameLost,
    players: playerList(room),
  };
}

function broadcast(room, message) {
  const payload = JSON.stringify(message);
  for (const player of room.players.values()) {
    if (player.ws.readyState === player.ws.OPEN) {
      player.ws.send(payload);
    }
  }
}

module.exports = {
  rooms,
  createRoom,
  getRoom,
  getOrCreateRoom,
  addPlayer,
  removePlayer,
  playerList,
  submitGuess,
  resetRoom,
  roomState,
  broadcast,
};
