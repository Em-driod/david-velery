import { useState, useEffect, useRef, useCallback } from 'react';
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// --- Type Definitions ---
interface LinkType {
  name: string;
  href: string;
  isMain: boolean;
}

type MobileDrawerProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

// --- Data ---
const navLinks: LinkType[] = [
  { name: 'Home', href: '/', isMain: true },
  { name: 'Gallery', href: '/gallery', isMain: true },
  { name: 'Construction Drawings', href: '/gallery', isMain: true },
  { name: 'Appointment', href: '/appointment', isMain: true }, // Keeping this as a main link
];

const designServicesLinks: LinkType[] = [
  { name: 'Kitchen Design', href: '#kitchen', isMain: false },
  { name: 'Bathroom Design', href: '#bathroom', isMain: false },
  { name: 'Aging in Place', href: '#aging-in-place', isMain: false },
];

// --- Mobile Drawer (Reimagined) ---
const MobileDrawer = ({ isOpen, toggleMenu }: MobileDrawerProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out transform ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
      style={{
        background: 'rgba(15, 15, 15, 0.9)',
        backdropFilter: 'blur(14px)',
      }}
    >
      {/* Close Button */}
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleMenu}
          className="text-amber-400 hover:text-amber-500 transition-colors focus:outline-none"
          aria-label="Close navigation menu"
        >
          <FaTimes className="h-8 w-8" />
        </button>
      </div>

      {/* Drawer Content */}
      <div className="flex flex-col justify-center h-full px-8 sm:px-12 space-y-14 animate-fade-in">
        
        {/* Logo & Tagline */}
        <div className="text-center space-y-2">
          <div className="text-4xl font-serif italic text-white tracking-tight">
            DesignHeaven
          </div>
          <div className="text-xs uppercase tracking-[.3em] text-amber-400 font-light">
            Kitchen & Bath Design
          </div>
        </div>

        {/* Main Links */}
        <div className="flex flex-col space-y-5 text-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={toggleMenu}
              style={{ transitionDelay: `${index * 80}ms` }}
              className="text-3xl font-serif italic text-white hover:text-amber-400 transition-all duration-300 transform hover:translate-x-1"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50"></div>
        </div>

        {/* Sub-links */}
        <div className="space-y-4 text-center">
          <div className="text-sm uppercase tracking-[0.25em] text-amber-400 font-medium">
            Design Services
          </div>
          <div className="space-y-3">
            {designServicesLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                style={{ transitionDelay: `${index * 100}ms` }}
                className="block text-lg text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-1"
              >
                — {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* CTA (Updated to be a Link to the Appointment page) */}
        {/* We use <Link> here since it is for an internal route */}
        <Link 
          to="/appointment" 
          onClick={toggleMenu}
          className="bg-amber-600 text-stone-900 text-sm font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-amber-500 shadow-xl uppercase tracking-widest transform hover:scale-105 text-center"
          aria-label="Go to Appointment Booking Page"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

// --- Main Navbar ---
const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavHovering, setIsNavHovering] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = useCallback(() => setIsMobileOpen((prev) => !prev), []);
  const toggleDropdown = useCallback(() => setIsDropdownOpen((prev) => !prev), []);
  const closeDropdown = useCallback(() => setIsDropdownOpen(false), []);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
      if (window.scrollY > 0) setIsDropdownOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const bgColorClass =
    isScrolled || isNavHovering || isDropdownOpen
      ? 'bg-stone-900/90 shadow-2xl backdrop-blur-sm'
      : 'bg-black/70';
  const heightClass = isScrolled ? 'h-24' : 'h-36';
  const logoSizeClass = isScrolled ? 'text-4xl' : 'text-5xl';
  const navLinkStyle =
    `font-light tracking-widest uppercase text-sm transition duration-300 ` +
    (isScrolled || isNavHovering || isDropdownOpen
      ? 'text-white hover:text-amber-400'
      : 'text-white hover:text-white');
  
  // Filter out the 'Appointment' link from the main navLinks for the desktop view
  // since we have a dedicated CTA button for it.
  const desktopNavLinks = navLinks.filter(link => link.name !== 'Appointment');

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all ease-in-out duration-500 ${bgColorClass} ${heightClass}`}
        onMouseEnter={() => setIsNavHovering(true)}
        onMouseLeave={() => setIsNavHovering(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            to="/"
            className="text-white leading-none flex flex-col group py-3 transition-all duration-300"
            aria-label="Design Alternatives Home"
          >
            <div
              className={`italic font-serif tracking-tight transition-all duration-500 ${logoSizeClass}`}
              style={{ textShadow: '0 0 5px rgba(0,0,0,0.7)' }}
            >
              DesignHeaven
            </div>
            <div
              className={`text-xs uppercase tracking-[.4em] border-t border-b border-white border-opacity-70 py-0.5 mt-[-4px] group-hover:border-amber-400 transition-colors duration-500 ${
                isScrolled ? 'text-[10px]' : 'text-xs'
              }`}
            >
              KITCHEN & BATH DESIGN
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {/* Dropdown */}
            <div className="relative h-full flex items-center" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`${navLinkStyle} flex items-center gap-1.5 focus:outline-none`}
                aria-expanded={isDropdownOpen}
                aria-controls="design-menu"
              >
                Design Services
                {isDropdownOpen ? (
                  <FaAngleUp className="w-3 h-3 text-amber-400" />
                ) : (
                  <FaAngleDown className="w-3 h-3" />
                )}
              </button>

              {isDropdownOpen && (
                <div
                  id="design-menu"
                  className="absolute top-full mt-0 pt-4 w-56 z-50 rounded-none shadow-2xl bg-stone-900/95 ring-1 ring-gray-700 overflow-hidden"
                  role="menu"
                >
                  {designServicesLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-5 py-3 text-sm text-gray-200 font-medium hover:bg-stone-800 transition duration-200 border-l-4 border-transparent hover:border-amber-500"
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links (excluding Appointment) */}
            {desktopNavLinks.map((link) => (
              <Link key={link.name} to={link.href} className={navLinkStyle}>
                {link.name}
              </Link>
            ))}

            {/* CTA (Updated to link to the Appointment page) */}
            <Link
              to="/appointment"
              className="bg-amber-600 text-stone-900 text-sm font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-amber-500 shadow-xl uppercase tracking-widest transform hover:scale-105"
              aria-label="Go to Appointment Booking Page"
            >
              Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 rounded-lg hover:text-amber-400 focus:outline-none transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={isMobileOpen}
            >
              <FaBars className="h-8 w-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isMobileOpen} toggleMenu={toggleMobileMenu} />
    </>
  );
};

export default Navbar;