import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SignUpOwner = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner155.jpg')" }}
    >
      <div className="max-w-md w-full p-4 bg-gray-200 shadow-lg rounded-lg bg-opacity-90">
        <h2 className="text-xl font-bold text-center mb-4">Owner Registration</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username && <p className="text-red-500 text-sm">{formik.errors.username}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>}

          <button
            type="submit"
            className="w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 block mx-auto"
          >
            Register as Owner
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpOwner;