export interface Book {
  author: string;
  title: string;
  description: string;
  _id: string;
}

export interface BookListProps {
  books: Array<Book>;
  setSelectedBook: (book: Book) => void;
}

export interface BookCardProps {
  book: Book;
  setSelectedBook: (book: Book) => void;
}

export interface FormikProps {
  books: Array<Book>;
  selectedBook: Book | null;
  setSelectedBook: (value: null) => void;
}

export interface ButtonGroupProps {
  books: Book[];
  setSelectedBook: (value: null) => void;
  selectedBook: Book | null;
  values: {
    author?: string;
    title?: string;
    description?: string;
  };
}
