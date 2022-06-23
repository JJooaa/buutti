const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const middleware = require("./utils/middleware");
const booksRouter = require("./controllers/books");

// connect to mongodb database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.error("error connecting to MongoDB:", error.message);
  });

app.use(cors()); // use cors so we can communicate between localhost 3000 and 3001 
app.use(express.json()); // change the req.body to js object

app.use("/api/books", booksRouter);

app.use(middleware.unknownEndpoint); // give us error if we call a endpoint that doesnt exist
app.use(middleware.errorHandler); // handle errors that we receive from mongodb

module.exports = app;
