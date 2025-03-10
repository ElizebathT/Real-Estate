import React from 'react';
import { FaSearch, FaHome, FaBuilding, FaDollarSign, FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';

function UserHome() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div 
        className=" about-banner bg-cover bg-center bg-no-repeat py-40 flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('/images/banner18.jpg')" }}
      >
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-white drop-shadow-md">
            Find Your Dream Property Today!
          </h3>
          <p className="text-white max-w-2xl mx-auto mt-4 text-lg">
            Buy, rent, or sell properties effortlessly with our trusted platform.
          </p>

        
          {/* CTA Button */}
          <Link to=''>
            <button className="mt-6 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 text-lg font-semibold transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaHome className="text-4xl text-blue-600 mx-auto mb-3" />
            <h4 className="text-xl font-semibold">Buy a Home</h4>
            <p className="text-gray-600 mt-2">Find your perfect home among thousands of listings.</p>
            <Link to='/user/buyaproperty'>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                View Listings
              </button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaBuilding className="text-4xl text-green-600 mx-auto mb-3" />
            <h4 className="text-xl font-semibold">Rent a Property</h4>
            <p className="text-gray-600 mt-2">Discover rental homes, apartments, and spaces.</p>
            <Link to='/user/rentaproperty'>
              <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                Explore Rentals
              </button>
            </Link>
          </div>
          
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="container mx-auto px-4 mt-12">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Featured Properties</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { id: 1, img: "/images/property1.jpg", title: "Luxury Apartment in NYC", price: "$1,200,000" },
            { id: 2, img: "/images/property2.jpg", title: "Modern House in LA", price: "$850,000" },
            { id: 3, img: "/images/property3.jpg", title: "Beachside Villa in Miami", price: "$2,500,000" }
          ].map((property) => (
            <div key={property.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={property.img} alt={property.title} className="rounded-md w-full h-48 object-cover"/>
              <h4 className="text-xl font-semibold mt-4">{property.title}</h4>
              <p className="text-gray-600 mt-2">{property.price}</p>
              <Link to={`/property/${property.id}`}>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">What Our Clients Say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { id: 1, name: "John Doe", review: "Amazing service! Found my dream home quickly." },
            { id: 2, name: "Sarah Smith", review: "Very professional and helpful in selling my house." },
            { id: 3, name: "David Wilson", review: "Great platform with lots of property options!" }
          ].map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <FaUsers className="text-4xl text-gray-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              <p className="text-gray-600 mt-2 italic">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Start Your Real Estate Journey Today</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Sign up now and gain access to exclusive listings and expert advice.
        </p>
        <Link to='/sign-up'>
          <button className="w-40 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition font-semibold text-lg mb-6">
            Get Started
          </button>
        </Link>
      </div>

      
    </div>
  );
}

export default UserHome;
