import { BookCardProps } from "../util/types";

const BookCard = ({ book, handleSelectBook }: BookCardProps) => {
  return (
    <li
      className="book-card"
      key={book.title}
      onClick={() => handleSelectBook(book)}
    >
      <h3>Author: {book.author}</h3>
      <h3>Title: {book.title}</h3>
    </li>
  );
};

export default BookCard;
