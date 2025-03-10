import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-500 to-gray-800">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-7">Sign Up</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" {...formik.getFieldProps("firstName")} className="w-full px-4 py-2 border rounded-lg" />
              {formik.touched.firstName && formik.errors.firstName && <p className="text-red-500 text-sm">{formik.errors.firstName}</p>}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
              <input type="text" {...formik.getFieldProps("middleName")} className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" {...formik.getFieldProps("lastName")} className="w-full px-4 py-2 border rounded-lg" />
              {formik.touched.lastName && formik.errors.lastName && <p className="text-red-500 text-sm">{formik.errors.lastName}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" {...formik.getFieldProps("email")} className="w-full px-4 py-2 border rounded-lg" />
            {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" {...formik.getFieldProps("password")} className="w-full px-4 py-2 border rounded-lg" />
            {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input type="password" {...formik.getFieldProps("confirmPassword")} className="w-full px-4 py-2 border rounded-lg" />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>}
          </div>

          <div className="flex justify-center">
            <button type="submit" className="w-50 bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition font-semibold">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
