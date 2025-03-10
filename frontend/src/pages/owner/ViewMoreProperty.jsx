import React from "react";
import { Link } from "react-router-dom";
import OwnerFooter from "../../components/OwnerFooter";

const ViewMoreProperty = () => {
  return (
    <div>
        <div className="mt-6"></div>
      {/* Property Banner */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/banner155.jpg')" }}>
        
      </div>

      

      {/* Property Details Section */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Modern Family Home</h2>
        <p className="text-lg text-gray-700 mb-6">
          A spacious and modern family home located in a quiet and serene neighborhood, perfect for families looking for comfort and convenience.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Property Details</h3>
            <p className="text-lg mb-2"><strong>Price:</strong> $500,000</p>
            <p className="text-lg mb-2"><strong>Bedrooms:</strong> 3</p>
            <p className="text-lg mb-2"><strong>Bathrooms:</strong> 2</p>
            <p className="text-lg mb-2"><strong>Area:</strong> 2,500 sq. ft.</p>
            <p className="text-lg mb-2"><strong>Location:</strong> Springfield, USA</p>
          </div>
          
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <Link to="/owner/viewproperty"
            className="bg-gray-500 text-white p-4 rounded-lg hover:bg-gray-600 transition"
          >
            Back to Listings
          </Link>
          <div className="flex gap-4">
          <Link to="/owner/editproperty"
              className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition"
            >
              Edit Property
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

export default ViewMoreProperty;
