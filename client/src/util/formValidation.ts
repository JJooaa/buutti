import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(100, "Too long!")
    .required("Can't be empty"),
  description: Yup.string()
    .min(10, "Minumum 10 characters")
    .max(250, "Too long!")
    .required("Can't be empty"),
  author: Yup.string()
    .min(3, "Minumum 3 characters")
    .max(50, "Too long!")
    .required("Can't be empty"),
});
