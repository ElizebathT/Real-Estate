import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function PropertyDetails() {
  const { id } = useParams();
  const [wishlist, setWishlist] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  const toggleWishlist = () => {
    setWishlist((prev) => !prev);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Banner Image */}
      <div className="w-full h-64 bg-gray-300 rounded-lg mb-4 flex items-center justify-center text-gray-600">
        Property Image Banner
      </div>

      {/* Property Info */}
      <h1 className="text-3xl font-bold">Property Title {id}</h1>
      <p className="mt-4 text-gray-700">
        This property is a perfect place for families looking for comfort and convenience. It is
        located in a prime area with all necessary amenities nearby.
      </p>
      <p className="text-gray-500 text-lg">Location: City Name</p>
      <p className="text-xl font-bold mt-2">$Price</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Property Details</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Bedrooms: 3</li>
          <li>Kitchen: 1</li>
          <li>Area: 1500 sq.ft</li>
          <li>Spacious Living Room</li>
        </ul>
      </div>

      {/* Enquiry & Wishlist Buttons */}
      <div className="mt-6 flex gap-4">
        {/* Enquire Now Button */}
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
        <div className="fixed inset-0 flex items-center justify-center bg-[url('/images/banner1.jpg')] bg-cover bg-center">
          <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Contact Owner/Agent</h2>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded mb-2 w-full"
              onClick={() => window.location.href = "tel:+123456789"}
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
