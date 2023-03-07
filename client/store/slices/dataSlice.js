import { io } from "socket.io-client";

let URL = "https://rps-backend.up.railway.app";

if (process.env.NODE_ENV !== "production") {
  URL = "http://127.0.0.1:5000";
}

const dataSlice = (set, get) => ({
  socket: io(URL),
  roomId: null,
  setDataState: (modal) => {
    set(modal);
  },
});

export default dataSlice;
