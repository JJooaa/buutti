import { BookCardProps } from "../util/types";

const BookCard = ({ book, setSelectedBook }: BookCardProps) => {
  // when we click on a book, we select that book, so we can display its values in a form
  return (
    <li className="book-card" onClick={() => setSelectedBook(book)}>
      <h3>Author: {book.author}</h3>
      <h3>Title: {book.title}</h3>
    </li>
  );
};

export default BookCard;
