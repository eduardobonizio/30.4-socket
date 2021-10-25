const express = require("express");
const app = express();
const http = require('http').createServer(app);
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const io = require('socket.io')(http, {
  cors: {
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id} `);
});


app.use(express.json());

app.get("/", (_request, response) => {
  response.status(200).send({ message: "Ok" });
});

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
});
