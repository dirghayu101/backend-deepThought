const app = require("./app");
const { connect, closeDb } = require("./database/connect");
const PORT = process.env.PORT || 4500;

const start = async () => {
  try {
    await connect();
    const server = app.listen(PORT, () => {
      console.log(`The server is listening on http://localhost:${PORT}`);
    });
    server.on("close", async () => {
      try {
        await closeDb();
      } catch (error) {
        console.log("Error while closing the MongoDB connection: ", error);
      }
    });
  } catch (error) {
    console.log("An error occurred: ", error);
  }
};

start();
