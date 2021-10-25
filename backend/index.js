const express = require("express");
const app = express();
const http = require('http').createServer(app);
const cors = require("cors");
const {getAll, updateCurrentOffer, getById} = require('./models/auctionModel')

const PORT = process.env.PORT || 3001;

const io = require('socket.io')(http, {
  cors: {
    origin: `http://127.0.0.1:5500`,
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

io.on('connection', (socket) => {
  socket.on('updateCurrentOffer', async ()=>{
    await updateCurrentOffer()
    
    const updatedProduct = await getById()

    io.emit('refreshCurrentOffer', updatedProduct)
  })
});

app.use(express.json());

app.get("/", (_request, response) => {
  getAll()
  response.status(200).send({ message: "Ok" });
});

http.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
});

const insertFirstProductOnDb = async (id) => {
  const hasThisProduct = await getById(id)
  if(!id){
    await insertOneProduct("617717d7d23ede171536dc55")
  }
}

insertFirstProductOnDb("617717d7d23ede171536dc55")
