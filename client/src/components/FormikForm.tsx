import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { FormikProps } from "../util/types";
import ButtonGroup from "./ButtonGroup";

const FormikForm = ({ books, selectedBook, setSelectedBook }: FormikProps) => {
  const initialValues = {
    title: "" || selectedBook?.title,
    author: "" || selectedBook?.author,
    description: "" || selectedBook?.description,
  };

  return (
    <>
      {books.length === 0 || selectedBook !== null ? (
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            axios.post("http://localhost:3001/api/books/", values);
            setSelectedBook(null);
            setSubmitting(false);
          }}
        >
          {({ values }) => (
            <Form>
              <div className="form-inner">
                <h1>Add a new book</h1>
                <h2>Or change an existing one</h2>

                <label htmlFor="title">Title</label>
                <Field name="title" />
                <ErrorMessage name="title" />

                <label htmlFor="title">Author</label>
                <Field name="author" />
                <ErrorMessage name="author" />

                <label htmlFor="title">Description</label>
                <Field name="description" as="textarea" />
                <ErrorMessage name="description" />

                <ButtonGroup
                  books={books}
                  selectedBook={selectedBook}
                  setSelectedBook={setSelectedBook}
                  values={values}
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
