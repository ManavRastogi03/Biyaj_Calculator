import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 text-center flex items-center justify-center space-x-0">
      
      {/* Logo Image */}
      <img 
        src={logo} 
        alt="Logo" 
        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mr-2" 
      />

      {/* Text */}
      <h1 className="text-2xl sm:text-3xl font-bold animate-fade-color">
        शिव अजय ज्वैलर्स
      </h1>
    </header>
  );
};

export default Header;
