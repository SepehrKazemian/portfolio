import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
    // Add other links like 'Resume' if needed
  ];

  return (
    // Simpler navbar, remove background/shadow, adjust padding/margins
    <nav className="w-full py-4"> {/* Removed sticky, bg, border */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Wider container */}
        <div className="flex items-center justify-between h-12"> {/* Adjusted height */}
          {/* Left side: Name */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-semibold text-gray-900 hover:text-gray-700">
              Your Name {/* Replace with actual name */}
            </a>
          </div>

          {/* Right side: Navigation Links (Desktop) */}
          <div className="hidden sm:block">
            {/* Increased spacing */}
            <div className="ml-6 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  // Adjusted text size, color, hover effect
                  className="text-gray-600 hover:text-gray-900 text-base font-medium transition-colors duration-150"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              // Adjusted button styling
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200" id="mobile-menu"> {/* Added background and border */}
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                // Adjusted mobile link styling
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
