import { io } from "socket.io-client";

const MySocket = io(process.env.NEXT_PUBLIC_SOCKET_HOST?.toString() || "");



export default MySocket;