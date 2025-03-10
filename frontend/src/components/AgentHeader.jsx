import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaHome, FaPlus, FaEdit, FaTrash, FaBell, FaBuilding } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const AgentHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true); // Simulated notification
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
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="font-bold text-lg flex items-center space-x-2">
  <FaBuilding className="text-gray-400" /> 
  <span>
    <span className="text-gray-100">Estate</span>
    <span className="text-gray-400">Hub</span>
  </span>
</h1>


      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* View Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <FaHome />
            View
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg w-40">
              <Link to="/agent/addpropertyy" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200">
                <FaPlus /> Add Property
              </Link>
              <Link to="/agent/editproperties" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200">
                <FaEdit /> Edit Property
              </Link>
              <Link to="/agent/deleteproperty" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200">
                <FaTrash /> Delete Property
              </Link>
            </div>
          )}
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <Link to="/agent/notifications" className="relative hover:text-gray-300">
            <FaBell />
            {hasNotifications && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                1
              </span>
            )}
          </Link>
        </div>

        {/* Profile Icon */}
        <Link to="/agent/agentprofile" className="hover:text-gray-300">
          <FaUserCircle size={24} />
        </Link>
        <button onClick={handleLogout} className="hover:text-gray-300">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default AgentHeader;
