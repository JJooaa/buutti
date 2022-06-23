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
