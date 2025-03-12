import React, { useState } from "react";
import { Link } from "react-router-dom";
import AgentFooter from "../../components/AgentFooter";
import { useQuery } from "@tanstack/react-query";
import { viewPropertyAPI } from "../../services/propertyService";

const ViewProperties = () => {
  const { data:properties } = useQuery({
    queryKey: ['view-property'],
    queryFn: viewPropertyAPI,
  });
  

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
                <th className="px-6 py-3 text-left border-b">Area(Sq Ft)</th>
                <th className="px-6 py-3 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(properties) && properties.map((property) => (
                <tr key={property.id} className="border-b hover:bg-gray-100">
                  <td className="px-6 py-3">
                      {property.propertyType === "both"
                        ? "Land and Building"
                        : property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1)}
                    </td>

                  <td className="px-6 py-3">{property.price}</td>
                  <td className="px-6 py-3">{property.area}</td>
                  <td className="px-6 py-3">
                    <Link to={`/agent/viewmoreproperties/${property._id}`}>
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
