import React, { useState } from "react";
import { Link } from "react-router-dom";
import AgentFooter from "../../components/AgentFooter";

const ViewProperties = () => {
  const [properties, setProperties] = useState([
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
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="container mx-auto p-6 flex-grow">
        <h2 className="text-3xl font-bold mb-6 text-center">Property Listings</h2>

        {/* Responsive Table Wrapper */}
        <div className="overflow-auto bg-white shadow-md rounded-lg">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-6 py-3 text-left border-b">Property Type</th>
                <th className="px-6 py-3 text-left border-b">Price</th>
                <th className="px-6 py-3 text-left border-b">Bedrooms</th>
                <th className="px-6 py-3 text-left border-b">Bathrooms</th>
                <th className="px-6 py-3 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property.id} className="border-b hover:bg-gray-100">
                  <td className="px-6 py-3">{property.propertyType}</td>
                  <td className="px-6 py-3">{property.price}</td>
                  <td className="px-6 py-3">{property.bedrooms}</td>
                  <td className="px-6 py-3">{property.bathrooms}</td>
                  <td className="px-6 py-3">
                    <Link to={`/agent/viewmoreproperties`}>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        View More
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Property Button */}
        <div className="mt-8 text-center">
          <Link to="/agent/addpropertyy">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Add Property
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <AgentFooter />
    </div>
  );
};

export default ViewProperties;
