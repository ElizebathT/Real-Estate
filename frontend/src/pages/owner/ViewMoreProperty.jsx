import React from "react";
import { Link } from "react-router-dom";
import OwnerFooter from "../../components/OwnerFooter";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { showPropertyAPI } from "../../services/propertyService";

const ViewMoreProperty = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["show-property", id], // Include ID in the queryKey to refetch when ID changes
    queryFn: () => showPropertyAPI(id), // Pass ID to API function
    enabled: !!id, // Ensures the query runs only when ID is available
  });
  console.log(data);
  
  return (
    <div>
        <div className="mt-6"></div>
      {/* Property Banner */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/banner155.jpg')" }}>
        
      </div>

      

      {/* Property Details Section */}
      <div className="container mx-auto p-6">
  <h2 className="text-3xl font-bold mb-4">{data?.title}</h2>
  <p className="text-lg text-gray-700 mb-6">
    {data?.description}
  </p>

  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <h3 className="text-2xl font-semibold mb-2">Property Details</h3>
      <p className="text-lg mb-2"><strong>Price:</strong> ${data?.price.toLocaleString()}</p>
      <p className="text-lg mb-2"><strong>Bedrooms:</strong> {data?.bedrooms}</p>
      <p className="text-lg mb-2"><strong>Bathrooms:</strong> {data?.bathrooms}</p>
      <p className="text-lg mb-2"><strong>Area:</strong> {data?.area} sq. ft.</p>
      <p className="text-lg mb-2">
        <strong>Location:</strong> {data?.location?.address}, {data?.location?.city}, {data?.location?.zipCode}
      </p>
      <p className="text-lg mb-2"><strong>Average Rating:</strong> {data?.averageRating} ⭐</p>

      

      <h3 className="text-xl font-semibold mt-4">Features</h3>
      <ul className="list-disc pl-5">
        {data?.features?.map((feature, index) => (
          <li key={index} className="text-lg">{feature}</li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-2">Images</h3>
      <div className="grid grid-cols-2 gap-2">
        {data?.photos?.map((photo, index) => (
          <img key={index} src={photo} alt={`Property ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
        ))}
      </div>

      <h3 className="text-2xl font-semibold mt-4">Video Tour</h3>
      {data?.videos?.length > 0 && (
        <video controls className="w-full rounded-lg mt-2">
          <source src={data.videos[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
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
