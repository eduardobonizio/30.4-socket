const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization"],
  })
);

app.use(express.json());

app.get("/", (_request, response) => {
  response.status(200).send({ message: "Ok" });
});

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
});
