const { ObjectId } = require('mongodb');

const mongoConnection = require("./connection");

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

  await productsCollection.updateOne({_id: ObjectId(id)}, {$inc: { currentOffer: 5}})
}

const getById = async (id = '617717d7d23ede171536dc55') => {

  const productsCollection = await mongoConnection
  .connection()
  .then((db) => db.collection("products"));

  const updatedProduct = await productsCollection.findOne({_id: ObjectId(id)})

  return updatedProduct;
}

module.exports = {
  getAll,
  updateCurrentOffer,
  getById
};
