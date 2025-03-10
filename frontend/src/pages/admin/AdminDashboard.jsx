import React, { useState } from "react";
import { FaUserCircle, FaSignOutAlt, FaTachometerAlt, FaMapMarkerAlt, FaCreditCard, FaChartPie, FaFileAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const AdminDashboard = () => {
  const [viewDropdown, setViewDropdown] = useState(false);
  const [chartDropdown, setChartDropdown] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 text-white p-6 flex flex-col">
        
        <ul className="space-y-4 flex-1">
          <li>
            <a href="/dashboard" className="flex items-center gap-3 py-2 px-4 hover:bg-gray-700 rounded">
              <FaTachometerAlt /> Dashboard
            </a>
          </li>
          <li>
            <a href="/location" className="flex items-center gap-3 py-2 px-4 hover:bg-gray-700 rounded">
              <FaMapMarkerAlt /> Add Locations
            </a>
          </li>
          
          <li>
            <button onClick={() => setViewDropdown(!viewDropdown)} className="w-full flex items-center justify-between py-2 px-4 hover:bg-gray-700 rounded">
              <div className="flex items-center gap-3">
                <FaFileAlt /> Views
              </div>
              <IoMdArrowDropdown />
            </button>
            {viewDropdown && (
              <ul className="pl-6 mt-2 space-y-2">
                <li><a href="/viewlocation" className="block py-2 px-4 hover:bg-gray-600 rounded">View Users</a></li>
                <li><a href="/viewcategory" className="block py-2 px-4 hover:bg-gray-600 rounded">Categories</a></li>
                <li><a href="/viewcard" className="block py-2 px-4 hover:bg-gray-600 rounded">Cards</a></li>
                <li><a href="/viewallcustomer" className="block py-2 px-4 hover:bg-gray-600 rounded">Registered Users</a></li>
                <li><a href="/viewrequest" className="block py-2 px-4 hover:bg-gray-600 rounded">Requests</a></li>
              </ul>
            )}
          </li>
          <li>
            <a href="/location" className="flex items-center gap-3 py-2 px-4 hover:bg-gray-700 rounded">
              <FaMapMarkerAlt /> Payment History
            </a>
          </li>


          <li>
            <button onClick={() => setChartDropdown(!chartDropdown)} className="w-full flex items-center justify-between py-2 px-4 hover:bg-gray-700 rounded">
              <div className="flex items-center gap-3">
                <FaChartPie /> Charts
              </div>
              <IoMdArrowDropdown />
            </button>
            {chartDropdown && (
              <ul className="pl-6 mt-2 space-y-2">
                <li><a href="/piechartview" className="block py-2 px-4 hover:bg-gray-600 rounded">Pie Chart</a></li>
                <li><a href="/datewisereport" className="block py-2 px-4 hover:bg-gray-600 rounded">Date-wise Report</a></li>
              </ul>
            )}
          </li>

          
        </ul>
        <div className="mt-auto">
          
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-4">Welcome to EstateHub Admin</h3>
          <p>Manage real estate services efficiently.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
