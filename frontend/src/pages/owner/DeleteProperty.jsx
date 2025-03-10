import React from "react";
import { Link } from "react-router-dom"; // Assuming you will use Link to navigate back
import OwnerFooter from "../../components/OwnerFooter";

const DeleteProperty = () => {
  return (
    <div>
      {/* Navbar */}

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Delete Property</h2>
        <p className="text-lg text-gray-700 mb-8">
          Select a property to delete. Once deleted, this action cannot be undone.
        </p>

        {/* Property Listing */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold mb-4">Property Details</h3>
          <div className="flex gap-6 mb-4">
            <div className="flex-1">
              <img
                src="https://via.placeholder.com/300x200" // Replace with dynamic image
                alt="Property Image"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg font-semibold mb-2">Property Type: Home</p>
              <p className="text-lg mb-2">Price: $500,000</p>
              <p className="text-lg mb-2">Bedrooms: 3</p>
              <p className="text-lg mb-2">Bathrooms: 2</p>
              <p className="text-lg mb-2">Description: Spacious family home in a quiet neighborhood.</p>
            </div>
          </div>
          <div className="flex justify-between">
            <Link
              to="/owner" // Navigate back to the owner dashboard
              className="bg-gray-500 text-white p-4 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </Link>
            <button
              className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-700 transition"
            >
              Delete Property
            </button>
          </div>
        </div>
      </div>

      <OwnerFooter />
    </div>
  );
};

export default DeleteProperty;
