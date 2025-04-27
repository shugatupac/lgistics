import React from 'react';
import { NavLink } from 'react-router-dom';
import { Truck } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              {/* Logo and site name */}
              <div className="flex items-center justify-center bg-blue-700 text-white p-1 rounded-md mr-2">
                <Truck size={24} />
              </div>
              <span className="text-xl font-bold text-blue-700">Overnight Logistics</span>
            </NavLink>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 transition-colors ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-700 hover:text-blue-700'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-3 py-2 transition-colors ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-700 hover:text-blue-700'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `px-3 py-2 transition-colors ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-700 hover:text-blue-700'}`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `px-3 py-2 transition-colors ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-700 hover:text-blue-700'}`
              }
            >
              Products
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-3 py-2 transition-colors ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-700 hover:text-blue-700'}`
              }
            >
              Contact
            </NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Mobile menu toggle button here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;