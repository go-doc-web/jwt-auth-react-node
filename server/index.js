require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser);
app.use(cors());

app.get("/", (req, res) => {
  res.send("HI I am from Ukraine");
});

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST);
    app.listen(PORT, () => {
      console.log(`Server run on the ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();
// mongodb+srv://doc:<password>@cluster0.0ocf5yr.mongodb.net/?retryWrites=true&w=majority
