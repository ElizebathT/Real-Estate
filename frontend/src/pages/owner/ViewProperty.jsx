import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import OwnerFooter from "../../components/OwnerFooter";

const ViewProperty = () => {
  const [properties, setProperties] = useState([
    // Example structure for the properties
    {
      id: 1,
      propertyType: "Home",
      price: "$250,000",
      bedrooms: 3,
      bathrooms: 2,
      image: "property1.jpg",
    },
    {
      id: 2,
      propertyType: "Commercial Property",
      price: "$1,000,000",
      bedrooms: 0,
      bathrooms: 2,
      image: "property2.jpg",
    },
    // Add more properties as needed
  ]);

  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Property Listings</h2>

        {/* Property Table */}
        <table className="min-w-full table-auto bg-white border-collapse shadow-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border-b">Property Type</th>
              <th className="px-4 py-2 text-left border-b">Price</th>
              <th className="px-4 py-2 text-left border-b">Bedrooms</th>
              <th className="px-4 py-2 text-left border-b">Bathrooms</th>
              <th className="px-4 py-2 text-left border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id} className="border-b">
                <td className="px-4 py-2">{property.propertyType}</td>
                <td className="px-4 py-2">{property.price}</td>
                <td className="px-4 py-2">{property.bedrooms}</td>
                <td className="px-4 py-2">{property.bathrooms}</td>
                <td className="px-4 py-2 flex gap-4">
                  {/* View More Button */}
                  <Link to={`/owner/viewmoreproperty`}>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      View More
                    </button>
                  </Link>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Property Button */}
        <div className="mt-8 text-center">
          <Link to="/owner/addproperty">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Add Property
            </button>
          </Link>
        </div>
      </div>
      <OwnerFooter />
    </>
  );
};

export default ViewProperty;
