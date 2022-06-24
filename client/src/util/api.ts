import axios from "axios";

export const handleDelete = (
  id: string,
  setSelectedBook: (value: null) => void
) => {
  axios
    .delete(`http://localhost:3001/api/books/${id}`)
    .then(() => setSelectedBook(null))
    .catch((error) => console.error(error));
};

export const handleUpdate = (
  id: string,
  setSelectedBook: (value: null) => void,
  values: {
    author?: string;
    title?: string;
    description?: string;
  }
) => {
  axios
    .put(`http://localhost:3001/api/books/${id}`, values)
    .then(() => setSelectedBook(null))
    .catch((error) => console.error(error));
};
