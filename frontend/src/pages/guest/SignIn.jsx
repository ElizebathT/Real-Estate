import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { loginAPI } from "../../services/userService";
import { login } from "../../redux/userSlice";
import {useDispatch  } from "react-redux";
import { useNavigate } from "react-router-dom"

export default function SignIn() {
  const { mutateAsync } = useMutation({
    mutationFn: loginAPI, 
    mutationKey: ["userLogin"]
  });   //mutateAssync is used to call assync fn and mutate is used for synchronous fn

  const navigate =useNavigate()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
    }),

    onSubmit: (values) => {
      mutateAsync(values).then((data)=>{
        dispatch(login(data))
        localStorage.setItem(`userData`,data.token)
        navigate('/userhome')        
      })
    },
  });


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-7">Login</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white mb-3">Username</label>
            <input
              type="email"
              name="email"
             {...formik.getFieldProps("email")}
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray-200"
              placeholder="Username..."
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-3">Password</label>
            <input
              type="password"
              name="password"
              {...formik.getFieldProps("password")}
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray-200 mb-5"
              placeholder="Password..."
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-32 mx-auto block bg-gray-900 text-white py-1.5 rounded-md hover:bg-gray-600 transition font-semibold text-sm"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
