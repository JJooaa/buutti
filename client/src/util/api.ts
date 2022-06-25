import axios from "axios";
import { Values } from "./types";

export const handleDelete = async (id: string) => {
  axios
    .delete(`http://localhost:3001/api/books/${id}`)
    .catch((error) => console.error(error));
};

export const handleUpdate = async (id: string, values: Values) => {
  axios
    .put(`http://localhost:3001/api/books/${id}`, values)
    .catch((error) => console.error(error));
};

export const handleAddBook = async (values: Values) => {
  await axios
    .post("http://localhost:3001/api/books/", values)
    .catch((error) => console.error(error));
};
