const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const middleware = require("./utils/middleware");
const booksRouter = require("./controllers/books");
require("dotenv").config();
// connect to mongodb database

const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.error("error connecting to MongoDB:", error.message);
  });

app.use(cors()); // use cors so we can communicate between localhost 3000 and 3001
app.use(express.json()); // change the req.body to js object

app.use("/api/books", booksRouter); // assign booksRouter to  /api/books endpoint

app.use(middleware.unknownEndpoint); // give us error if we call a endpoint that doesnt exist
app.use(middleware.errorHandler); // handle errors that we receive from mongodb

module.exports = app;
