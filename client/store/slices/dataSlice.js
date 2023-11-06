import { io } from "socket.io-client";

let URL;
if (process.env.NODE_ENV !== "production") {
  URL = "http://127.0.0.1:5000";
} else {
  URL = `https://rps-bac.litegix.me`;
}

const dataSlice = (set, get) => ({
  socket: io(URL),
  roomId: null,
  setDataState: (modal) => {
    set(modal);
  },
});

export default dataSlice;
