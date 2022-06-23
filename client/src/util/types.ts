export interface Book {
  author: string;
  title: string;
  description: string;
  _id: string;
}

export interface BookListProps {
  books: Array<Book>;
  handleSelectBook: (book: Book) => void;
}

export interface BookCardProps {
  book: Book;
  handleSelectBook: (book: Book) => void;
}

export interface FormikProps {
  books: Array<Book>;
  selectedBook: Book | null;
  setSelectedBook: (value: null) => void;
}
