import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { FaSearch , FaUserCircle} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/userSlice';

function UserNavBar() {
  const navigate = useNavigate()
  const queryClient=useQueryClient()
  const dispatch = useDispatch()
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.clear() 
      dispatch(logout())
      queryClient.invalidateQueries()
      navigate('/'); 
    }
  };
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      {/* Left section for the logo */}
      <Link to='/userhome'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-green-500'>Estate</span>
          <span className='text-green-700'>Hub</span>
        </h1>
      </Link>

      {/* Center section for the small search bar */}
      <div className='flex-grow flex justify-center'>
        <form className='bg-slate-100 p-2 rounded-lg flex items-center w-full max-w-xs'>
          <input
            type='text'
            placeholder='Search....'
            className='bg-transparent focus:outline-none w-full'
          />
          <FaSearch className='text-slate-600' />
        </form>
      </div>

      {/* Right section for navigation links */}
      <div className='flex items-center gap-4'>
        <ul className='flex gap-4'>
          <Link to='/userhome'>
            <li className='text-green-700 hover:underline'>Home</li>
          </Link>
          <Link to='/user/userprofile'>
            <li className='text-green-700 hover:underline flex items-center gap-2'><FaUserCircle className="text-2xl" />Profile</li>
            
          </Link>
          <button onClick={handleLogout} className="text-green-700 hover:underline">
          Sign Out
        </button>
        </ul>
      </div>
    </div>
  );
}

export default UserNavBar;
