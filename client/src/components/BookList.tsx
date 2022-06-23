import BookCard from "./BookCard";
import { Book, BookListProps } from "../util/types";

const BookList = ({ books, handleSelectBook }: BookListProps) => {
  return (
    <>
      <h1>Found {books.length} books</h1>
      <ul>
        {books.map((book: Book) => (
          <BookCard book={book} handleSelectBook={handleSelectBook} />
        ))}
      </ul>
    </>
  );
};

export default BookList;
