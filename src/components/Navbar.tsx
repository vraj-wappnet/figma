import React, { useState } from "react";
import "./Navbar.css"; // Keep the existing CSS for reference, but we'll override with Tailwind

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center p-4 z-50 shadow-md">
      <div className="logo text-2xl font-bold uppercase tracking-wide">
        GERICHT
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
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
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <ul
        className={`nav-links ${
          isOpen ? "block" : "hidden"
        } md:flex md:space-x-6 absolute md:static top-16 right-4 bg-black p-4 md:p-0 rounded-md md:bg-transparent`}
      >
        <li className="mb-4 md:mb-0">
          <a href="#home" className="block text-white hover:text-yellow-400">
            Home
          </a>
        </li>
        <li className="mb-4 md:mb-0">
          <a href="#blog" className="block text-white hover:text-yellow-400">
            Blog
          </a>
        </li>
        <li className="mb-4 md:mb-0">
          <a href="#login" className="block text-white hover:text-yellow-400">
            Log In / Registration
          </a>
        </li>
        <li className="mb-4 md:mb-0">
          <a href="#book" className="block text-white hover:text-yellow-400">
            Book Table
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
