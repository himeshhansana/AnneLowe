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
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 shadow-sm bg-white/95 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              SACHI LOWE
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
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
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b sm:px-3">
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
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-gray-600">
            © 2025 Sachi Lowe. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/vintfade?igsh=MWl4dGo0bHBjajIybA%3D%3D&utm_source=qr" className="text-gray-600 hover:text-gray-900">
              <InstagramIcon size={20} />
            </a>
            <a href="https://www.facebook.com/share/1GaJSvhi1y/?mibextid=LQQJ4d" className="text-gray-600 hover:text-gray-900">
              <FacebookIcon size={20} />
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-gray-900">
              <TwitterIcon size={20} />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  </div>;
};