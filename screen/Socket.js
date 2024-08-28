import { io } from 'socket.io-client';
const socket = io('http://192.168.43.41:4000');
export default socket;