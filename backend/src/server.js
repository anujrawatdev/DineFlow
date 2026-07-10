require("dotenv").config();

const app = require("./app");
const { connectMongoDB } = require("./config/database");

const PORT = process.env.PORT || 5000;

connectMongoDB().then(() => {
  app.listen(PORT, () => console.log("Server Started at Port :", PORT));
});
