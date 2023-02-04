const express = require("express");
const morgan = require("morgan");
const userRoute = require("./routes/Users.routes");
const authRoute = require("./routes/Auth.routes");
const conversationRoute = require("./routes/Conversations.routes");
const messageRoute = require("./routes/Messages.routes");


const cors = require("cors");
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());



app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "DELETE", "PUT"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User connected: ${socket.id}`);
//   socket.on("join_room", (room) => {
//     socket.join(room);
//     console.log(`User with ID: ${socket.id} joined room: ${room}`);
//   });

//   socket.on("send_message", (data) => {
//     console.log(data);
//     socket.to(data.room).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected", socket.id);
//   });
// });

module.exports = app;
