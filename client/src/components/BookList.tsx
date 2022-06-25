import BookCard from "./BookCard";
import { Book, BookListProps } from "../util/types";

const BookList = ({ books, setSelectedBook }: BookListProps) => {
  return (
    <>
      <h1>Found {books.length} books</h1>
      <ul>
        {books.map((book: Book, index: number) => (
          <BookCard
            key={book.title + index}
            book={book}
            setSelectedBook={setSelectedBook}
          />
        ))}
      </ul>
    </>
  );
};

export default BookList;
