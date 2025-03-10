import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3 bg-gray-900 text-white'>
      {/* Left section for the logo */}
      <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-blue-600'>Estate</span>
          <span className='text-blue-200'>Hub</span>
        </h1>
      </Link>

      

      {/* Right section for navigation links */}
      <div className='flex items-center gap-6'>
        <ul className='flex gap-6 items-center'>
          <Link to='/' className='hover:text-gray-400 hover:underline'>
            <li className='hidden sm:inline'>Home</li>
          </Link>
          <Link to='/about' className='hover:text-gray-400 hover:underline'>
            <li className='hidden sm:inline'>About</li>
          </Link>
          <Link to='/team' className='hover:text-gray-400 hover:underline'>
            <li className='hidden sm:inline'>Team</li>
          </Link>
          <Link to='/services' className='hover:text-gray-400 hover:underline'>
            <li className='hidden sm:inline'>Services</li>
          </Link>
          <Link to='/contact' className='hover:text-gray-400 hover:underline'>
            <li className='hidden sm:inline'>Contact</li>
          </Link>
        </ul>

        {/* Sign In Button */}
        <Link to='/signin'>
          <button className='px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-blue-200 transition'>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
