import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormikProps } from "../util/types";
import ButtonGroup from "./ButtonGroup";
import { validationSchema } from "../util/formValidation";

const FormikForm = ({ books, selectedBook, setSelectedBook }: FormikProps) => {
  // if we click on a book it will select its values and display them in the form
  const initialValues = {
    title: "" || selectedBook?.title,
    author: "" || selectedBook?.author,
    description: "" || selectedBook?.description,
  };

  return (
    <>
      {/* If we dont have any books or we have a selectedBook, display the form with its values */}
      {books.length === 0 || selectedBook !== null ? (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {
            // the buttongroup component handles the submission
            setSelectedBook(null);
          }}
        >
          {({ handleSubmit, values }) => (
            <Form>
              <div className="form-inner">
                <h1>Add a new book</h1>
                <h2>Or change an existing one</h2>

                <label htmlFor="title">Title</label>
                <Field name="title" />
                <ErrorMessage name="title" component="span" />

                <label htmlFor="title">Author</label>
                <Field name="author" />
                <ErrorMessage name="author" component="span" />

                <label htmlFor="title">Description</label>
                <Field name="description" as="textarea" />
                <ErrorMessage name="description" component="span" />
                <ButtonGroup
                  selectedBook={selectedBook}
                  values={values}
                  handleSubmit={handleSubmit}
                  books={books}
                  setSelectedBook={setSelectedBook}
                />
              </div>
            </Form>
          )}
        </Formik>
      ) : null}
    </>
  );
};

export default FormikForm;
