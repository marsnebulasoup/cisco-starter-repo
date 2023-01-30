const SOCKET_URL = "ws://localhost:55455";

export function watchLatency(setLatency) {
  const socket = new WebSocket(SOCKET_URL);
  socket.onmessage = ({ data }) => {
    setLatency(new Date().getTime() - Number(data));
  }
  socket.onerror = () => setLatency("Unable to fetch latency");
  socket.onclose = () => setLatency("Latency service disconnected");
}