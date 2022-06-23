import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";

interface Book {
  author: string;
  title: string;
  description: string;
  _id: string;
}

const App = () => {
  const [books, setBooks] = useState([]);

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // if we have a selectedBook render its properties in the form
  const initialValues = {
    title: "" || selectedBook?.title,
    author: "" || selectedBook?.author,
    description: "" || selectedBook?.description,
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/books")
      .then((res) => setBooks(res.data))
      .catch((error) => console.error(error));
  }, [books]);

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/api/books/${selectedBook?._id}`)
      .then(() => setSelectedBook(null))
      .catch((error) => console.error(error));
  };

  return (
    <main>
      <h1>Found {books.length} books</h1>
      <ul>
        {books.map((book: Book) => (
          <li
            className="book-card"
            key={book.title}
            onClick={() => handleSelectBook(book)}
          >
            <h3>Author: {book.author}</h3>
            <h3>Title: {book.title}</h3>
          </li>
        ))}
      </ul>

      {books.length === 0 || selectedBook !== null ? (
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            axios.post("http://localhost:3001/api/books/", values);
            setSelectedBook(null);
            setSubmitting(false);
          }}
        >
          <Form>
            <div className="form-inner">
              <h1>Add a new book</h1>
              <h2>Or change an existing one</h2>

              <label htmlFor="title">Title</label>
              <Field name="title" />
              <ErrorMessage name="title" />

              <label htmlFor="title">Author</label>
              <Field name="author" />
              <ErrorMessage name="author" />

              <label htmlFor="title">Description</label>
              <Field name="description" as="textarea" />
              <ErrorMessage name="description" />

              <div className="button-group">
                <button type="submit">Save New</button>
                <button type="button">Save</button>
                <button type="button" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      ) : null}
    </main>
  );
};

export default App;
