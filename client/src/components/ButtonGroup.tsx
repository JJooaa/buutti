import { ButtonGroupProps } from "../util/types";
import { handleUpdate, handleDelete, handleAddBook } from "../util/api";

const ButtonGroup = ({
  books,
  setSelectedBook,
  handleSubmit,
  values,
  selectedBook,
}: ButtonGroupProps) => {
  const onClickAdd = () => {
    handleSubmit(handleAddBook(values));
  };

  const onClickUpdate = () => {
    handleSubmit(handleUpdate(selectedBook!._id, values));
  };

  const onClickDelete = () => {
    handleSubmit(handleDelete(selectedBook!._id));
  };

  const onClickCancel = () => {
    setSelectedBook(null);
  };

  return (
    <div className="button-group">
      <button type="button" onClick={onClickAdd}>
        Save New
      </button>
      {/* If there are no books, buttons "save, delete and cancel" become obsolete */}
      {books.length !== 0 && (
        <>
          <button type="button" onClick={onClickUpdate}>
            Save
          </button>

          <button type="button" onClick={onClickDelete}>
            Delete
          </button>

          <button onClick={onClickCancel}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default ButtonGroup;
