const { MongoClient } = require("mongodb");

const MONGO_DB_URL = process.env.DB_URL || "mongodb://localhost:27017/Auction";

const DB_NAME = process.env.DB_NAME || "Auction";

const connection = (URL = MONGO_DB_URL) =>
  MongoClient.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.error(err);
    });

module.exports = { connection };
