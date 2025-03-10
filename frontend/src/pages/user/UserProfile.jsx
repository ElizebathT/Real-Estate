import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { editProfileAPI, getProfileAPI } from "../../services/userService";
import { useFormik } from "formik";

const UserProfile = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const { data, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileAPI,
  });

  const { mutateAsync } = useMutation({
    mutationFn: editProfileAPI,
    mutationKey: ["edit-profile"],
  });

  const user = data?.user || {};

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        await mutateAsync(values);
        refetch();
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating profile", error);
      }
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      {/* Profile Section */}
      <div className="max-w-lg mx-auto mt-16 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Buyer Profile</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col items-center">
            <img
              src={preview || user?.profileImage || "/default-avatar.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
            />
            <label className="mt-3 bg-gray-200 px-4 py-2 rounded cursor-pointer text-sm hover:bg-gray-300">
              Change Image
              <input type="file" name="profilePic"
                value={formik.values.profilePic}
                onChange={formik.handleChange} className="hidden" accept="image/*" />
            </label>
          </div>

          <div className="mt-4">
            <label className="block text-gray-600">Name</label>
           
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
          </div>

          <div className="mt-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-600">Phone</label>
            <input
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-600">Address</label>
            <textarea
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            />
          </div>

          {isEditing ? (
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md mt-4 hover:bg-green-600"
            >
              Save Changes
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600"
            >
              Save Changes
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
