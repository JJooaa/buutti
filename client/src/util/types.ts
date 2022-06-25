export interface Book {
  author: string;
  title: string;
  description: string;
  _id: string;
}

export interface Values {
  author?: string;
  title?: string;
  description?: string;
}

export interface BookListProps {
  books: Book[];
  setSelectedBook: (book: Book) => void;
}

export interface BookCardProps {
  book: Book;
  setSelectedBook: (book: Book) => void;
}

export interface FormikProps {
  books: Book[];
  selectedBook: Book | null;
  setSelectedBook: (value: null) => void;
  setBooks: (value: any) => void;
}

export interface ButtonGroupProps {
  books: Book[];
  setSelectedBook: (value: null) => void;
  handleSubmit: any;
  values: any;
  selectedBook: Book | null;
}
