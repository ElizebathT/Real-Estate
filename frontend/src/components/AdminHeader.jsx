// components/AdminHeader.jsx
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaUserCircle, FaSignOutAlt, FaBuilding } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";

const AdminHeader = () => {
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
    <header className="bg-gray-900 text-white p-.5 flex justify-between items-center">
      <div className="p-5 text-xl font-bold flex items-center gap-2">
          <FaBuilding className="text-2xl" />
          EstateHub
        </div>
      <div className="flex items-center gap-4">
        <Link to="/admin/profile" className="flex items-center gap-2">
          <FaUserCircle className="text-2xl" /> Profile
        </Link>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded flex items-center gap-2">
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
