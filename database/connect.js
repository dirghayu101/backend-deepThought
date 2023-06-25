const { MongoClient } = require("mongodb");

const Client = new MongoClient(process.env.MONGO_URI);

const connectDb = async () => {
  await Client.connect();
  console.log("Connected successfully to the database.");
};

const closeDb = async () => {
  await Client.close();
  console.log("Closing DB..");
};

module.exports = { connect: connectDb, closeDb };
