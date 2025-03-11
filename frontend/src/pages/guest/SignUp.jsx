import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { registerAPI } from "../../services/userService";
import { signup } from "../../redux/userSlice";

const SignUp = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("First name is required"),
    middleName: Yup.string(),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutateAsync } = useMutation({
    mutationFn: registerAPI,
    mutationKey: ["register-user"],
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      middleName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      role:"customer"
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
          try {
            const data = await mutateAsync(values);
            if (data?.token) {
              localStorage.setItem("userToken", data.token);
              dispatch(signup(data));
              resetForm();
              navigate("/userhome");
            } else {
              alert("Invalid response from server");
            }
          } catch (error) {
            console.error("Signup Error:", error);
          }
        },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-500 to-gray-800">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-7">Sign Up</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name
              <input type="text" {...formik.getFieldProps("name")} className="w-full px-4 py-2 border rounded-lg" />
              </label>
              {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name
              <input type="text" {...formik.getFieldProps("middleName")} className="w-full px-4 py-2 border rounded-lg" />
              </label>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name
              <input type="text" {...formik.getFieldProps("lastName")} className="w-full px-4 py-2 border rounded-lg" />
              </label>
              {formik.touched.lastName && formik.errors.lastName && <p className="text-red-500 text-sm">{formik.errors.lastName}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email
            <input type="email" {...formik.getFieldProps("email")} className="w-full px-4 py-2 border rounded-lg" />
            </label>
            {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username
            <input type="text" {...formik.getFieldProps("username")} className="w-full px-4 py-2 border rounded-lg" />
            </label>
            {formik.touched.username && formik.errors.username && <p className="text-red-500 text-sm">{formik.errors.username}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password
            <input type="password" {...formik.getFieldProps("password")} className="w-full px-4 py-2 border rounded-lg" />
            </label>
            {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password
            <input type="password" {...formik.getFieldProps("confirmPassword")} className="w-full px-4 py-2 border rounded-lg" />
            </label>
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
