const express = require("express");
const apiRouter = require("./api");
const morgan = require("morgan");
const { client } = require("./db");

const server = express();
const PORT = 8080;

client.connect();

server.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});

server.use(morgan("dev"));

server.use(express.json());

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

server.use("/api", apiRouter);
