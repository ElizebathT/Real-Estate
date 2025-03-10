import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaList } from "react-icons/fa";
import OwnerFooter from "../../components/OwnerFooter";

const OwnerHome = () => {
  return (
    <div className="bg-gray-100 pt-1">
      {/* Hero Section */}
      <div 
        className="about-banner bg-cover bg-center bg-no-repeat py-40 flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('/images/banner19.jpg')" }} // Update banner image if needed
      >
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-white drop-shadow-md">
            Manage Your Properties with Ease!
          </h3>
          <p className="text-white max-w-2xl mx-auto mt-4 text-lg">
            Add, edit, and track your property listings efficiently.
          </p>
          <Link to="/">
            <button className="mt-6 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 text-lg font-semibold transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Property Management</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaPlusCircle className="text-4xl text-blue-600 mx-auto mb-3" />
            <h4 className="text-xl font-semibold">Add a Property</h4>
            <p className="text-gray-600 mt-2">Create a new listing easily.</p>
            <Link to="/owner/addproperty">
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Add Property
              </button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaList className="text-4xl text-green-600 mx-auto mb-3" />
            <h4 className="text-xl font-semibold">View Properties</h4>
            <p className="text-gray-600 mt-2">Manage and track your listings.</p>
            <Link to="/owner/viewproperty">
              <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                View Listings
              </button>
            </Link>
          </div>
        </div>
      </div>

      <OwnerFooter />
    </div>
  );
};

export default OwnerHome;
