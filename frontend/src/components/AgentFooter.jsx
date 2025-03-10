import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function AgentFooter() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <h1 className="font-bold text-lg">
            <span className="text-gray-100">Estate</span>
            <span className="text-gray-400">Hub</span>
          </h1>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-6 mb-4 sm:mb-0">
          <ul>
            <li><a href="/agent-dashboard" className="hover:text-gray-300">Dashboard</a></li>
            <li><a href="/agent-listings" className="hover:text-gray-300">My Listings</a></li>
            <li><a href="/agent-profile" className="hover:text-gray-300">Profile</a></li>
            <li><a href="/support" className="hover:text-gray-300">Support</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex gap-4">
          <a href="https://facebook.com" className="hover:text-gray-300 text-xl">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-300 text-xl">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" className="hover:text-gray-300 text-xl">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-4">
        <p>&copy; 2025 EstateHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default AgentFooter;
