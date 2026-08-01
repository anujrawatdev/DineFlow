const mongoose = require('mongoose');

async function connectMongoDB() {
    try {
     await mongoose.connect(`${process.env.MONGODB_URI}`);
      console.log("mongoDb connected");
      console.log("Connected DB:", mongoose.connection.name);
    } catch (error) {
        console.log("mongoDb connection error :",error.message);
    }
}

module.exports = {connectMongoDB};