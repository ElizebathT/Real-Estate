import React from 'react'

function OwnerFooter() {
  return (
    <div><footer className="bg-gray-800 text-white p-6 mt-6">
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
          <li>
            <a href="/about" className="hover:text-gray-300">About Us</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </li>
          <li>
            <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
          </li>
          <li>
            <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
          </li>
        </ul>
      </div>
  
      {/* Social Media */}
      <div className="flex gap-4 mb-4 sm:mb-0">
        <a href="https://facebook.com" className="hover:text-gray-300">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" className="hover:text-gray-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" className="hover:text-gray-300">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  
    {/* Footer Bottom */}
    <div className="text-center text-sm mt-4">
      <p>&copy; 2025 EstateHub. All rights reserved.</p>
    </div>
  </footer>
  </div>
  )
}

export default OwnerFooter