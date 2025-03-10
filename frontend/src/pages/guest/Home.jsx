import React from "react";
import { useState } from "react";
import { FaHandPointDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const properties = [
    { id: 1, image: "/images/property1.jpg", name: "Luxury Villa" },
    { id: 2, image: "/images/property2.jpg", name: "Modern Apartment" },
    { id: 3, image: "/images/property3.jpg", name: "Beach House" },
    { id: 4, image: "/images/property4.jpg", name: "Mountain Cabin" },
    { id: 5, image: "/images/property5.jpg", name: "Urban Condo" },
    { id: 6, image: "/images/property6.jpg", name: "Suburban Home" },
  ];

  return (
    <div>
      {/* Banner Section */}
      <div 
        className="about-banner bg-cover bg-center bg-no-repeat py-50"
        style={{ backgroundImage: "url('/images/banner155.jpg')" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white">Experience Excellence in Real Estate</h3>
          <p className="text-white max-w-2xl mx-auto mt-4">
            Whether you're a first-time buyer, an experienced investor, or looking to sell,  
            we provide tailored solutions to help you achieve your real estate goals.
          </p>
          <p className="text-white max-w-2xl mx-auto mt-4 mb-5">
            Do you have an account? If not, click here  
            <FaHandPointDown className="inline-block text-white ml-2" />
          </p>
          <Link to="/signupagent">
            <button className="bg-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-700 transition font-semibold text-sm mt-3 mr-2">
              Sign Up as Agent
            </button>
          </Link>
          <Link to="/signupowner">
            <button className="bg-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-700 transition font-semibold text-sm mt-3 mr-2">
              Sign Up as Owner
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-700 transition font-semibold text-sm mt-3">
              Sign Up as User
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Properties</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="shadow-lg rounded-lg overflow-hidden">
              <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
              <h3 className="text-lg font-semibold text-center py-2">{property.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Reviews */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Amazing experience! Found my dream home effortlessly."
              </p>
              <h4 className="mt-2 text-right font-semibold">- John Doe</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Great service and very professional staff. Highly recommended!"
              </p>
              <h4 className="mt-2 text-right font-semibold">- Sarah Lee</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Smooth process and excellent property choices. A++!"
              </p>
              <h4 className="mt-2 text-right font-semibold">- Mark Smith</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
