# Wordle

Remake of the wordle game!

## Playing with friends (multiplayer)

You can play the same word together with friends by sharing a room link.

1. Start the multiplayer server: `npm run server` (runs on port 8080).
2. Start the app as usual: `npm run dev`.
3. Open the app, click **Play with friends** to create a room, then copy and
   send the share link that appears — anyone who opens it can enter their
   name and join. Everyone in the room sees the same secret word and the
   same guesses update live.

The multiplayer server is a small in-memory Node/WebSocket server
(`server/`) — rooms are ephemeral and only live as long as the server
process runs.
