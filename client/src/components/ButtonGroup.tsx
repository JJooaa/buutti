import { handleUpdate, handleDelete } from "../util/api";
import { ButtonGroupProps } from "../util/types";

const ButtonGroup = ({
  books,
  setSelectedBook,
  selectedBook,
  values,
}: ButtonGroupProps) => {
  return (
    <div className="button-group">
      <button type="submit">Save New</button>
      <button
        type="button"
        onClick={() => handleUpdate(selectedBook!._id, setSelectedBook, values)}
      >
        Save
      </button>
      <button
        type="button"
        onClick={() => handleDelete(selectedBook!._id, setSelectedBook)}
      >
        Delete
      </button>
      {books.length !== 0 && (
        <button onClick={() => setSelectedBook(null)}>Cancel</button>
      )}
    </div>
  );
};

export default ButtonGroup;
