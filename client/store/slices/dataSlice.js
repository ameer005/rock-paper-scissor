import { io } from "socket.io-client";

let URL;
if (process.env.NODE_ENV !== "production") {
  URL = "http://127.0.0.1:5000";
} else {
  URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;
}

const dataSlice = (set, get) => ({
  socket: io(URL),
  roomId: null,
  setDataState: (modal) => {
    set(modal);
  },
});

export default dataSlice;
