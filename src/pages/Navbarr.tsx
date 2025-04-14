import Logo from "../assets/Icon.png";
import { useState } from "react";

const Navbarr = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-700 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Nexcent Logo" className="w-6 h-6" />
            <span className="font-semibold text-lg">Nexcent</span>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-900">
              Home
            </a>
            <a href="#" className="hover:text-gray-900">
              Features
            </a>
            <a href="#" className="hover:text-gray-900">
              Community
            </a>
            <a href="#" className="hover:text-gray-900">
              Blog
            </a>
            <a href="#" className="hover:text-gray-900">
              Pricing
            </a>
          </div>

          {/* Register Button - Desktop */}
          <button className="hidden md:block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Register Now <span className="ml-1">→</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } mt-4 space-y-4`}
        >
          <a href="#" className="block hover:text-gray-900">
            Home
          </a>
          <a href="#" className="block hover:text-gray-900">
            Features
          </a>
          <a href="#" className="block hover:text-gray-900">
            Community
          </a>
          <a href="#" className="block hover:text-gray-900">
            Blog
          </a>
          <a href="#" className="block hover:text-gray-900">
            Pricing
          </a>
          <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Register Now <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
