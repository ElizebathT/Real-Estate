import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import { addToWishlistAPI, removeFromWishlistAPI } from "../../services/wishlistService.js";
import axios from "axios";
import { BASE_URL } from "../../../../../Personal Finance Tracker/frontend/src/utils/urls.js";
import { getUserData } from "../../utils/storageHandler.js";
import { viewPropertyAPI } from "../../services/propertyService";

export default function BuyAProperty() {
  const [wishlist, setWishlist] = useState([]);
  const { data } = useQuery({
    queryKey: ["view-property"],
    queryFn: viewPropertyAPI,
  });
  
  const properties = data?.filter(property => property.rentOrSale === "sale") || [];
  
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
        {properties?.map((property) => (
          <div key={property._id} className="border rounded-lg shadow p-4 relative flex flex-col">
            <img src={property?.photos?.[0]} alt={`Property `} className="w-full h-40 object-cover rounded-lg" />
            <div className="mt-2 flex-1">
              <h2 className="text-lg font-semibold">{property.title}</h2>
              <p className="text-gray-500">{property.area} sq ft</p>
              <p className="font-bold">${property.price}</p>
              <Link to={`/user/buypropertydetails/${property._id}`} className="block text-blue-500 mt-2 font-semibold">
                View More
              </Link>
            </div>
            <div
              className="absolute bottom-2 right-2 cursor-pointer p-2 bg-white rounded-full shadow-lg"
              onClick={() => toggleWishlist(property._id)}
            >
              <HeartIcon
                className={`w-6 h-6 ${wishlist.includes(property._id) ? "text-red-500" : "text-gray-500"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
