import  { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  // State for controlling the mobile menu's open/close status
  const [isOpen, setIsOpen] = useState(false);

  // State for navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  const scrollTimeout = useRef<number | null>(null);
  const lastScrollY = useRef(window.scrollY);

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Hide navbar on scroll, show when scrolling stops
  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar when scrolling
      setShowNavbar(false);
      // Clear previous timer
  if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      // Show navbar after 200ms of no scroll
      scrollTimeout.current = window.setTimeout(() => {
        setShowNavbar(true);
      }, 200);
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Common styles for the navigation links
  const navLinkStyle = "text-white text-lg font-normal hover:text-gray-300 transition duration-300 cursor-pointer";

  // Navigation data
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Design Services', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Construction Drawings', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav
      className={`bg-[#8A817C] shadow-lg sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ willChange: 'transform' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32"> {/* Increased height for visual match */}
          
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="text-white text-2xl font-script leading-tight">
              {/* This attempts to visually recreate the 'Design Alternatives' logo text */}
              <div className="text-4xl italic font-serif" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px', lineHeight: '1.2' }}>
                Design Alternatives
              </div>
              <div className="text-sm uppercase tracking-widest border-t border-b border-white border-opacity-50 py-1 mt-[-8px]">
                KITCHEN & BATH DESIGN
              </div>
              <div className="text-xs italic tracking-wider mt-1">
                With Aging in Place in Mind!
              </div>
            </div>
          </div>

          {/* Desktop Nav Links & Appointments Button */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Links */}
            {navLinks.map((link) => (
              // Note: Design Services is a dropdown in the image, here it's simplified as a link.
              <a key={link.name} href={link.href} className={navLinkStyle}>
                {link.name} {link.name === 'Design Services' && '▼'} 
              </a>
            ))}

            {/* Appointments Button */}
            <button
              className="bg-[#2D3748] text-white text-lg font-semibold py-3 px-8 rounded-lg transition duration-300 hover:bg-[#3A475C] shadow-lg"
              aria-label="Book an Appointment"
            >
              Appointments
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger/Close Icon) */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {/* Use FaTimes (X) when menu is open, FaBars (Hamburger) when closed */}
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-[#8A817C]`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Mobile Links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white transition duration-300"
              onClick={toggleMenu} // Close menu when a link is clicked
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Appointments Button */}
          <button
            className="w-full mt-2 bg-[#2D3748] text-white text-base font-semibold py-2 px-4 rounded-md transition duration-300 hover:bg-[#3A475C]"
            onClick={toggleMenu} // Close menu after 'Appointments' is clicked
          >
            Appointments
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;