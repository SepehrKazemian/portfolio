import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Adjusted padding, removed background/border
    <footer className="py-10 mt-16"> {/* Added top margin */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-xs"> {/* Smaller text */}
        <p>
          &copy; {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
