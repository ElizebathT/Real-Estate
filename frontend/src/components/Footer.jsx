import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-blue-400">EstateHub</h2>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Discover the best properties for sale and rent. Connecting people with 
            their dream homes effortlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center">
          <ul className="space-y-3 text-center md:text-left">
            <li>
              <Link to="/" className="text-gray-400 hover:text-blue-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-blue-400 transition">About</Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-400 hover:text-blue-400 transition">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110">
            <FaFacebook size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110">
            <FaInstagram size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110">
            <FaTwitter size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500 transition transform hover:scale-110">
            <FaGithub size={28} />
          </a>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © 2025 EstateHub. All Rights Reserved | Designed by 
          <a href="#" className="text-blue-400 hover:underline ml-1">Lakshmi</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
