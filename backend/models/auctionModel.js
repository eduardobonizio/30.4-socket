const { ObjectId } = require('mongodb');

const mongoConnection = require("./connection");

const insertOneProduct = async () => {
  const productsCollection = await mongoConnection
  .connection()
  .then((db) => db.collection("products"));

  await productsCollection.insertOne({
    id: "617717d7d23ede171536dc55",
    name: "Violão",
    currentOffer: 0
  })
}

const getAll = async () => {
  const productsCollection = await mongoConnection
    .connection()
    .then((db) => db.collection("products"));

  const products = await productsCollection.find({});

  return products;
};

const updateCurrentOffer = async (id = '617717d7d23ede171536dc55') => {

  const productsCollection = await mongoConnection
  .connection()
  .then((db) => db.collection("products"));

  await productsCollection.updateOne({id: id}, {$inc: { currentOffer: 5}})
}

const getById = async (id = '617717d7d23ede171536dc55') => {

  const productsCollection = await mongoConnection
  .connection()
  .then((db) => db.collection("products"));

  const updatedProduct = await productsCollection.findOne({id: id})

  return updatedProduct;
}

module.exports = {
  getAll,
  updateCurrentOffer,
  getById,
  insertOneProduct
};
