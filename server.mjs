import { WebSocketServer } from 'ws';

const WS_PORT = 8080;
const wss = new WebSocketServer({ port: WS_PORT });

wss.on('connection', (ws) => {
  console.log('🟢 Client connected');

  ws.on('message', (message) => {
    console.log('📨 Received:', message.toString());
    ws.send(`Received: ${message}`);
  });

  ws.on('close', () => {
    console.log('🔴 Client disconnected');
  });

  ws.send('👋 Yo! The connection works!');
});

console.log(`🚀 WebSocket server listens at ws://localhost:${WS_PORT}`);


