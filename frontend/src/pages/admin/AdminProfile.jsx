import React, { useState } from "react";

const AdminProfile = () => {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("/default-avatar.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    alert("Profile updated!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Profile Section */}
      <div className="max-w-lg mx-auto mt-16 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Admin Profile</h2>

        <div className="flex flex-col items-center">
          <img
            src={preview}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
          />
          <label className="mt-3 bg-gray-200 px-4 py-2 rounded cursor-pointer text-sm hover:bg-gray-300">
            Change Image
            <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
          </label>
        </div>

        <div className="mt-4">
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-6 text-center">
          <button onClick={handleSave} className="bg-sky-950 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;