import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { editProfileAPI, getProfileAPI } from "../../services/userService";
import { useFormik } from "formik";

const AgentProfile = () => {
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
      license: user?.license || "",
      experience: user?.experience || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => formData.append(key, value));

        if (selectedImage) {
          formData.append("profileImage", selectedImage);
        }

        await mutateAsync(formData);
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
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const reviews = data?.reviews || []; 
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      {/* Profile Section */}
      <div className="max-w-lg mx-auto mt-16 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Agent Profile</h2>

        {/* <div className="flex flex-col items-center">
          <img
            src={preview || user?.profileImage || "/default-avatar.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
          />
          <label className="mt-3 bg-gray-200 px-4 py-2 rounded cursor-pointer text-sm hover:bg-gray-300">
            Change Image
            <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
          </label>
        </div> */}

        <form onSubmit={formik.handleSubmit} className="mt-4">
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            value={formik.values.name}
            onChange={formik.handleChange}
          />

          <label className="block text-gray-600 mt-4">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          <label className="block text-gray-600 mt-4">Phone</label>
          <input
            type="text"
            name="phone"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />

          <label className="block text-gray-600 mt-4">Agent License Number</label>
          <input
            type="text"
            name="license"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            value={formik.values.license}
            onChange={formik.handleChange}
          />

          <label className="block text-gray-600 mt-4">Experience</label>
          <input
            type="text"
            name="experience"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            value={formik.values.experience}
            onChange={formik.handleChange}
          />

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-sky-950 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* User Reviews Section */}
      <div className="max-w-lg mx-auto mt-8 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">User Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="border-b pb-3 mb-3">
              <h3 className="font-semibold">{review.user}</h3>
              <p className="text-yellow-500">Rating: {review.rating} ⭐</p>
              <p className="text-gray-700 italic">"{review.comment}"</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default AgentProfile;
