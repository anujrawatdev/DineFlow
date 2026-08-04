require("dotenv").config();

const app = require("./app");
const { connectMongoDB } = require("./config/database");


const PORT = process.env.PORT || 5000;

connectMongoDB().then(() => {
  app.listen(PORT, () => console.log("Server Started at Port :", PORT));
});
console.log("CLOUDINARY NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("CLOUDINARY KEY:", process.env.CLOUDINARY_API_KEY ? "FOUND" : "MISSING");
console.log("CLOUDINARY SECRET:", process.env.CLOUDINARY_API_SECRET ? "FOUND" : "MISSING");