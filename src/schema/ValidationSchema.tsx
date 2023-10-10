// "use client";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup"; //Valider data via skema
// import * as yup from "yup";

// const schema = yup.object().shape({
//   firstName: yup.string().required("Your name is required"),

//   age: yup
//     .number()
//     .typeError("Your age is required")
//     .required("Has to be filled")
//     .min(18, "You have to be over the age of 18")
//     .max(99, "You have to be under the age of 99"),

//   email: yup
//     .string()
//     .email("Invalid email format")
//     .required("Your email is required"),

//   terms: yup.bool().oneOf([true], "Agree on terms and conditions"),
// });

// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm({
//   resolver: yupResolver(schema),
// });

// export default schema;
