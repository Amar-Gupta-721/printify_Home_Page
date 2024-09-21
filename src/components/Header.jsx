import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full flex justify-between items-center py-4 px-6 lg:px-40 bg-white shadow-md">
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Printify Logo"
            className="h-10"
          />
        </div>

        <nav className="hidden md:flex space-x-4 lg:space-x-8 text-gray-700">
          <a href="#" className="hover:text-green-600">Catalog</a>

          <div className="relative group">
            <button className="hover:text-green-600 focus:outline-none flex items-center">
              How it works
              <IoMdArrowDropdown className="ml-2 transition-transform transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">How Printify Works</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Print On Demand</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Printify Quality Promise</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">What to Sell?</a>
            </div>
          </div>

          <a href="#" className="hover:text-green-600">Pricing</a>
          <a href="#" className="hover:text-green-600">Blog</a>

          <div className="relative group">
            <button className="hover:text-green-600 focus:outline-none flex items-center">
              Services
              <IoMdArrowDropdown className="ml-2 transition-transform transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Printify Studio</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Printify Express Delivery</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Transfer Products</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Order In Bulk</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Experts Program</a>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-green-600 focus:outline-none flex items-center">
              Use-cases
              <IoMdArrowDropdown className="ml-2 transition-transform transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Merch for Fans</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Merch for eCommerce</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Merch for Enterprises</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Grow Your Store</a>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-green-600 focus:outline-none flex items-center">
              Need help?
              <IoMdArrowDropdown className="ml-2 transition-transform transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Help Center</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contacts</a>
            </div>
          </div>
        </nav>

        <div className="flex items-center space-x-2 lg:space-x-4">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100">
            Log in
          </button>
          <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-600">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
