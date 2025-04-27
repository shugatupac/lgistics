import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Truck } from 'lucide-react'; // Added Truck icon import

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Truck className="h-10 w-10 text-blue-700 mr-2" />
              <span className="text-2xl font-bold text-blue-700">Overnight Logistics</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-800 hover:text-primary px-3 py-2 rounded-md font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-primary px-3 py-2 rounded-md font-medium">
                About
              </Link>
              <Link to="/services" className="text-gray-800 hover:text-primary px-3 py-2 rounded-md font-medium">
                Services
              </Link>
              <Link to="/products" className="text-gray-800 hover:text-primary px-3 py-2 rounded-md font-medium">
                Products
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-primary px-3 py-2 rounded-md font-medium">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/products" 
              className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;