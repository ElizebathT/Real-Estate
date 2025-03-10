import { useState } from "react";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function BuyAProperty() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (propertyId) => {
    setWishlist((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Buy Properties</h1>
      <div className="flex gap-4 mb-6">
        <input className="border p-2 rounded" placeholder="Location" />
        <input className="border p-2 rounded" type="number" placeholder="Min Price" />
        <input className="border p-2 rounded" type="number" placeholder="Max Price" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} className="border rounded-lg shadow p-4 relative flex flex-col">
            <div className="w-full h-48 bg-gray-300 rounded"></div>
            <div className="mt-2 flex-1">
              <h2 className="text-lg font-semibold">Property Title</h2>
              <p className="text-gray-500">Location</p>
              <p className="font-bold">$Price</p>
              <Link to={'/user/buypropertydetails'} className="block text-blue-500 mt-2 font-semibold">
                View More
              </Link>
            </div>

            {/* Wishlist Icon at Bottom Right */}
            <div 
              className="absolute bottom-2 right-2 cursor-pointer p-2 bg-white rounded-full shadow-lg"
              onClick={() => toggleWishlist(id)}
            >
              <HeartIcon
                className={`w-6 h-6 ${wishlist.includes(id) ? "text-red-500" : "text-gray-500"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
