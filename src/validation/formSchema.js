import * as Yup from "yup";

const formSchema = Yup.object().shape({

    name: Yup
        .string()
        .min(3, "Name must be at least 3 characters long.")
        .required("Name is Required"),
    email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Email is Required"),
    password: Yup
        .string()
        .min(8, "Password must be at least 8 characters long.")
        .required("Password is Required"),
    terms: Yup
        .boolean()
        .oneOf([true], "Must Accept Terms of Service")
        .required("Please agree to terms of service to proceed"),
})

export default formSchema;