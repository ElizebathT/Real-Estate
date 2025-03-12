import { useState } from "react";
import { useParams } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { showPropertyAPI } from "../../services/propertyService";

export default function RentPropertyDetails() {
  const { id } = useParams();
  const [wishlist, setWishlist] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [showReviewSection, setShowReviewSection] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  const toggleWishlist = () => {
    setWishlist((prev) => !prev);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const submitReview = () => {
    console.log("Rating:", rating, "Comment:", comment);
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["show-property", id], 
    queryFn: () => showPropertyAPI(id), 
    enabled: !!id, 
  });
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
      <p className="mt-4 text-gray-700">
      {data?.description}</p>
      {data?.lat && data?.lng && (
  <iframe
    className="w-1/2 h-64 rounded-lg shadow-md mt-4"
    src={`https://www.openstreetmap.org/export/embed.html?bbox=${data.lng - 0.01},${data.lat - 0.01},${data.lng + 0.01},${data.lat + 0.01}&layer=mapnik&marker=${data.lat},${data.lng}`}
    allowFullScreen
    loading="lazy"
  ></iframe>
)}<p className="text-xl font-bold mt-2">${data?.price}</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Property Details</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Bedrooms: {data?.bedrooms}</li>
          <li>Kitchen:{data?.kitchen || "N/A"}</li>
          <li>Area: {data?.area} sq.ft</li>
          <li>{data?.features?.join(", ")}</li>
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
            <Link to={`/user/chat/67cfb65cc4beab1f387a3cb0/67cebe83d939372f171313f8`} >
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

      {/* Show Review Section Button */}
      <button 
        className="mt-6 bg-purple-500 text-white px-6 py-2 rounded" 
        onClick={() => setShowReviewSection((prev) => !prev)}
      >
        {showReviewSection ? "Hide Review Section" : "Write a Review"}
      </button>

      {/* Rating & Comment Section */}
      {showReviewSection && (
        <div className="mt-6 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-2">Rate & Comment</h2>
          <label className="block text-lg font-semibold">Rating (out of 5):</label>
          <input 
            type="number" 
            min="1" 
            max="5" 
            value={rating} 
            onChange={handleRatingChange} 
            className="w-full p-2 border rounded mb-2"
          />
          <label className="block text-lg font-semibold">Comment:</label>
          <textarea 
            value={comment} 
            onChange={handleCommentChange} 
            className="w-full p-2 border rounded mb-2"
            rows="3"
            placeholder="Write your review here..."
          />
          <button onClick={submitReview} className="bg-green-500 text-white px-6 py-2 rounded mt-2">Submit Review</button>
        </div>
      )}
    </div>
  );
}
