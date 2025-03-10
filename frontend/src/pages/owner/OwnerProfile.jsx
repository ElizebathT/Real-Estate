import React, { useState } from "react";

const OwnerProfile = () => {
  const [name, setName] = useState("Owner User");
  const [email, setEmail] = useState("Owner@example.com");
  const [phone, setPhone] = useState("9876543210");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("/default-avatar.png");

  // Sample user reviews
  const reviews = [
    { id: 1, user: "John Doe", rating: 5, comment: "Excellent service!" },
    { id: 2, user: "Sarah Lee", rating: 4, comment: "Very professional and responsive." },
    { id: 3, user: "Mark Smith", rating: 3, comment: "Good but can improve on communication." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      {/* Profile Section */}
      <div className="max-w-lg mx-auto mt-16 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Owner Profile</h2>

        <div className="flex flex-col items-center">
          <img
            src={preview}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
          />
          <label className="mt-3 bg-gray-200 px-4 py-2 rounded cursor-pointer text-sm hover:bg-gray-300">
            Change Image
            <input type="file" className="hidden" accept="image/*" />
          </label>
        </div>

        <div className="mt-4">
          <label className="block text-gray-600">Name</label>
          <input type="text" className="w-full border px-3 py-2 rounded focus:outline-none focus:ring" value={name} />
        </div>

        <div className="mt-4">
          <label className="block text-gray-600">Email</label>
          <input type="email" className="w-full border px-3 py-2 rounded focus:outline-none focus:ring" value={email} />
        </div>

        <div className="mt-4">
          <label className="block text-gray-600">Phone</label>
          <input type="text" className="w-full border px-3 py-2 rounded focus:outline-none focus:ring" value={phone} />
        </div>

       

        <div className="mt-6 text-center">
          <button className="bg-sky-950 text-white px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
        </div>
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

export default OwnerProfile;
