import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useMutation, useQuery } from "@tanstack/react-query";
import { showPropertyAPI } from "../../services/propertyService.js";
import { addToWishlistAPI } from "../../services/wishlistService.js";

export default function PropertyDetails() {
  const { id } = useParams();
  const [wishlist, setWishlist] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const toggleWishlist = async() => {
    setWishlist((prev) => !prev);    
    refetch();
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["show-property", id], 
    queryFn: () => showPropertyAPI(id), 
    enabled: !!id, 
  });
  if (isLoading) return <p className="text-center">Loading property details...</p>;
  if (error) return <p className="text-center text-red-500">Error loading property</p>;
  console.log(data.lat ,data.lng);
  
  return (
    <div className="container mx-auto p-4">
      {/* Banner Image */}
      <div className="grid grid-cols-2 gap-2">
        {data?.photos?.map((photo, index) => (
          <img key={index} src={photo} alt="Property" className="w-full h-70 object-cover rounded-lg" />
        ))}
      </div>
      {/* Property Info */}
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="mt-4 text-gray-700">{data?.description}</p>

      {/* Google Maps Embed */}
      {data?.lat && data?.lng && (
  <iframe
    className="w-1/2 h-64 rounded-lg shadow-md mt-4"
    src={`https://www.openstreetmap.org/export/embed.html?bbox=${data.lng - 0.01},${data.lat - 0.01},${data.lng + 0.01},${data.lat + 0.01}&layer=mapnik&marker=${data.lat},${data.lng}`}
    allowFullScreen
    loading="lazy"
  ></iframe>
)}


      {/* Property Price */}
      <p className="text-xl font-bold mt-2">${data?.price}</p>

      {/* Property Details */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Property Details</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Bedrooms: {data?.bedrooms}</li>
          <li>Kitchen: {data?.kitchen || "N/A"}</li>
          <li>Area: {data?.area} sq.ft</li>
          <li>{data?.features?.join(", ")}</li> {/* Optional features */}
        </ul>
      </div>

      {/* Enquiry & Wishlist Buttons */}
      <div className="mt-6 flex gap-4">
        <button 
          className="bg-blue-500 text-white px-6 py-2 rounded"
          onClick={() => setShowEnquiryPopup(true)}
        >
          Enquire Now
        </button>

        <button
          className={`p-2 rounded-full shadow-lg ${
            wishlist ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
          onClick={toggleWishlist}
        >
          <HeartIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Enquiry Popup */}
      {showEnquiryPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Contact Owner/Agent</h2>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded mb-2 w-full"
              onClick={() => window.location.href = `tel:${data?.contactNumber}`}
            >
              Call
            </button>
            <Link to="/user/chat">
              <button className="bg-blue-500 text-white px-6 py-2 rounded w-full">
                Chat
              </button>
            </Link>
            <button
              className="mt-4 text-gray-600 underline"
              onClick={() => setShowEnquiryPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
