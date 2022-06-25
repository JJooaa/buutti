import axios from "axios";
import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import FormikForm from "./components/FormikForm";
import { Book } from "./util/types";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/books")
      .then((res) => setBooks(res.data))
      .catch((error) => console.error(error));
  }, [selectedBook]);

  return (
    <main>
      <BookList books={books} setSelectedBook={setSelectedBook} />
      <FormikForm
        setBooks={setBooks}
        books={books}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
      />
    </main>
  );
};

export default App;
