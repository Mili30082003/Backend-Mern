const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.MONGO_URI || "mongodb+srv://mili-mb:Qop87AEmHES8lWEe@cluster0.aony1.mongodb.net/mern-hotel?retryWrites=true&w=majority";

console.log("Mongo URL:", mongoURL);

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Mongo DB Connection Successful"))
  .catch((err) => console.error("Mongo DB Connection Failed:", err.message));

module.exports = mongoose;
