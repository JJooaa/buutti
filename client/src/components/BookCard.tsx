import { BookCardProps } from "../util/types";

const BookCard = ({ book, setSelectedBook }: BookCardProps) => {
  return (
    <li className="book-card" onClick={() => setSelectedBook(book)}>
      <h3>Author: {book.author}</h3>
      <h3>Title: {book.title}</h3>
    </li>
  );
};

export default BookCard;
