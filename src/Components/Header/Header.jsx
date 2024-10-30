import React from "react";

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between shadow-xl">
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://academy.hubspot.com/hubfs/assets/hubspot.com/academy/logos/hubspot-academy-logo-color.svg"
          alt="HubSpot Logo"
          className="w-32 md:w-52"
        />
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-800">
        <a href="#">Explore Academy</a>
        <a href="#">About</a>
      </div>

      {/* Right Side - Sign Up Button */}
      <div className="hidden md:block">
        <button className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-500 transition duration-300">
          Sign up for free courses
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-gray-800 focus:outline-none"
          aria-label="Open Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
