import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './NavBar';
import CustomerNavbar from './UserNavBar';
 // Default Navbar


function Header() {
  const location = useLocation();

  // Render the appropriate navbar based on the current route
  const renderNavbar = () => {
    if (location.pathname === "/customerhome") {
      return <CustomerNavbar />; // Customer-specific navbar
    } else {
      return <Navbar />; // Default navbar
    }
  };

  return (
    <header className='bg-gray-900 shadow-md'>
     
      {/* Render the selected navbar */}
      {renderNavbar()}
    </header>
  );
}

export default Header;
