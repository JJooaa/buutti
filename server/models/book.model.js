const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
