// module imports
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3000", process.env.FRONTEND_URL],
  },
});
const dotenv = require("dotenv");

dotenv.config();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "This is working",
  });
});

io.on("connection", (socket) => {
  socket.on("create-room", (roomId) => {
    if (io.sockets.adapter.rooms[roomId]) {
      console.log("room already exist");
    } else {
      console.log(`creating room ${roomId}`);
      socket.join(roomId);
    }
  });

  socket.on("join-room", (roomId, cb) => {
    if (io.sockets.adapter.rooms.get(roomId)) {
      if (io.sockets.adapter.rooms.get(roomId).size < 2) {
        socket.join(roomId);
        socket.to(roomId).emit("joined", true);
        cb({ status: "success" });
      } else {
        cb({ status: "failed", message: "room is full" });
      }
    } else {
      cb({ status: "failed", message: "room doesn't exist" });
    }
  });

  socket.on("send-move", (roomId, move, cb) => {
    if (io.sockets.adapter.rooms.get(roomId)) {
      if (io.sockets.adapter.rooms.get(roomId).size === 2) {
        socket.to(roomId).emit("receive-move", move);
        cb({ status: "success" });
      } else {
        cb({ status: "failed", message: "user left the room" });
      }
    } else {
      cb({ status: "failed", message: "room doesn't exist" });
    }
  });

  socket.on("leave-room", (roomId) => {
    if (io.sockets.adapter.rooms.get(roomId)) {
      socket.leave(roomId);
      socket.to(roomId).emit("user-left", true);
    }
  });

  // TODO delete room on leaving and notify the clietn so they can exit
  socket.on("disconnect", () => {});
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
