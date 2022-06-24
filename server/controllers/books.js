const booksRouter = require("express").Router();
const Book = require("../models/book.model");

// get all books
booksRouter.get("/", (req, res) => {
  Book.find({}).then((books) => {
    res.json(books);
  });
});

// get specific book with id
booksRouter.get("/:id", (req, res, next) => {
  Book.findById(req.params.id)
    .then((book) => {
      if (book) {
        res.json(book);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// delete book with id
booksRouter.delete("/:id", (req, res, next) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).end())
    .catch((err) => next(err));
});

// add new book
booksRouter.post("/", (req, res, next) => {
  const { title, author, description } = req.body;

  const book = new Book({
    title,
    author,
    description,
  });

  book
    .save()
    .then((addedBook) => {
      res.json(addedBook);
    })
    .catch((error) => next(error));
});

//update book
booksRouter.put("/:id", (req, res, next) => {
  const { title, author, description } = req.body;

  const book = {
    title,
    author,
    description,
  };

  Book.findByIdAndUpdate(req.params.id, book, { new: true })
    .then((updatedBook) => {
      res.json(updatedBook);
    })
    .catch((error) => next(error));
});

module.exports = booksRouter;
