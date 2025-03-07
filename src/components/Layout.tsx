import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InstagramIcon, FacebookIcon, TwitterIcon, MenuIcon, XIcon } from "lucide-react";
export const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-semibold text-gray-900">
                LENS
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link to="/gallery" className="text-gray-600 hover:text-gray-900">
                Gallery
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link to="/gallery" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Gallery
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>}
      </nav>
      <main className="pt-16">{children}</main>
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600">
              © 2024 LENS. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};