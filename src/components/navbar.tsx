import { useState, useEffect, useRef, useCallback } from 'react';
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// --- Type Definitions ---
interface LinkType {
  name: string;
  href: string;
  isMain: boolean; // Indicates if it's a top-level link (used for mobile styling)
}

type MobileDrawerProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  // NOTE: mobileLinks is no longer needed as the component uses the data directly
};

// --- Data for navigation and dropdown ---
const navLinks: LinkType[] = [
  { name: 'Home', href: '/', isMain: true },
  { name: 'Gallery', href: '/gallary', isMain: true },
  { name: 'Construction Drawings', href: '/construction', isMain: true },
  { name: 'Contact', href: '/appointment', isMain: true },
];

const designServicesLinks: LinkType[] = [
  { name: 'Kitchen Design', href: '#kitchen', isMain: false },
  { name: 'Bathroom Design', href: '#bathroom', isMain: false },
  { name: 'Aging in Place', href: '#aging-in-place', isMain: false },
];

// --- Sub-Component: The Full-Screen Mobile Drawer (REDUCED & SLICKER) ---
const MobileDrawer = ({ isOpen, toggleMenu }: MobileDrawerProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{
        backgroundColor: 'rgba(25, 25, 25, 0.98)', // Near black, high contrast
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Close Button - Minimal and High Contrast */}
      <div className="absolute top-0 right-0 p-6 sm:p-8">
        <button
          onClick={toggleMenu}
          className="text-amber-400 p-2 focus:outline-none transition-colors"
          aria-label="Close navigation menu"
        >
          {/* Smaller, slicker icon size */}
          <FaTimes className="h-7 w-7" /> 
        </button>
      </div>

      {/* Content Container - Centered and Clean */}
      <div className="flex flex-col h-full items-start justify-center p-8 sm:p-12 space-y-10">
        
        {/* Main Links - Reduced Font Size for Elegance */}
        <div className='flex flex-col space-y-3'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              // Reduced size to text-4xl, using leading-none for tight vertical spacing
              className="text-4xl text-white font-serif italic hover:text-amber-400 transition duration-300 leading-none tracking-tight"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Sub-Links (Design Services) - Clearer Separation */}
        <div className="pt-4 pl-0 space-y-2 w-full max-w-sm">
          <div className="text-sm uppercase tracking-[0.2em] text-amber-400 pb-2 border-b border-gray-700 font-sans font-medium">
            Design Services
          </div>
          {designServicesLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              // Smaller sub-links for hierarchy
              className="block text-lg text-gray-300 font-sans font-light pl-2 hover:text-white transition duration-200"
              onClick={toggleMenu}
            >
              — {link.name}
            </a>
          ))}
        </div>
        
        {/* CTA Button - Simple and Prominent */}
        <a 
          href="tel:07016969298"
          className="mt-10 w-full max-w-sm text-center bg-amber-600 text-stone-900 text-lg font-bold py-3.5 rounded-full transition duration-300 hover:bg-amber-500 shadow-lg uppercase tracking-wider"
          onClick={toggleMenu}
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
};


// --- Main Navbar Component (UNCHANGED) ---
const Navbar = () => {
  // State
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavHovering, setIsNavHovering] = useState(false); 

  // useRef with type for the dropdown wrapper div
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handlers
  const toggleMobileMenu = useCallback(() => setIsMobileOpen(prev => !prev), []);
  const toggleDropdown = useCallback(() => setIsDropdownOpen(prev => !prev), []);
  const closeDropdown = useCallback(() => setIsDropdownOpen(false), []);
  
  // Effect 1: Handle scroll behavior (Fade and size change)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5); // Low threshold for immediate effect
      // Close dropdown when scrolling starts
      if (window.scrollY > 0) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect 2: Close dropdown on outside click
  useEffect(() => {
    // Defined a specific type for the mouse event to ensure target is a Node
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Dynamic Styles (No changes made to preserve desktop behavior)
  const bgColorClass = isScrolled || isNavHovering || isDropdownOpen 
    ? 'bg-stone-900/90 shadow-2xl backdrop-blur-sm' 
    : 'bg-black/70';
    
  const heightClass = isScrolled ? 'h-24' : 'h-36';
  const logoSizeClass = isScrolled ? 'text-4xl' : 'text-5xl';

  // Nav link style calculation - text color adjusts based on state
  const navLinkStyle = `font-light tracking-widest uppercase text-sm transition duration-300 ` +
    ((isScrolled || isNavHovering || isDropdownOpen)
      ? 'text-white hover:text-amber-400'
      // When at the top and not hovering, links are black
      : 'text-white hover:text-white');

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all ease-in-out duration-500 ${bgColorClass} ${heightClass}`}
        onMouseEnter={() => setIsNavHovering(true)}
        onMouseLeave={() => setIsNavHovering(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          
          {/* Logo Section - The primary anchor */}
          <Link to={'/'} className="text-white leading-none flex flex-col group py-3 transition-all duration-300" aria-label="Design Alternatives Home">
            <div className={`italic font-serif tracking-tight transition-all duration-500 ${logoSizeClass}`} style={{ textShadow: '0 0 5px rgba(0,0,0,0.7)' }}>
              DesignHeaven
            </div>
            <div className={`text-xs uppercase tracking-[.4em] border-t border-b border-white border-opacity-70 py-0.5 mt-[-4px] group-hover:border-amber-400 transition-colors duration-500 ${isScrolled ? 'text-[10px]' : 'text-xs'}`}>
              KITCHEN & BATH DESIGN
            </div>
          </Link>

          {/* Desktop Nav Links & CTA (UNCHANGED) */}
          <div className="hidden lg:flex items-center space-x-10">
            
            {/* Design Services Dropdown - Minimalist and direct */}
            <div className="relative h-full flex items-center" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`${navLinkStyle} flex items-center gap-1.5 focus:outline-none`}
                aria-expanded={isDropdownOpen}
                aria-controls="design-menu"
              >
                Design Services
                {isDropdownOpen ? <FaAngleUp className="w-3 h-3 text-amber-400" /> : <FaAngleDown className="w-3 h-3" />}
              </button>

              {isDropdownOpen && (
                <div
                  id="design-menu"
                  // z-50 ensures dropdown is above the rest of the content (except the mobile drawer)
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

            {/* Other Main Links */}
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={navLinkStyle}>
                {link.name}
              </a>
            ))}
          
            {/* CTA Button - Primary Focus */}
          <a
              href="tel:07016969298"
              className="bg-amber-600 text-stone-900 text-sm font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-amber-500 shadow-xl uppercase tracking-widest transform hover:scale-105"
              aria-label="Call to Book an Appointment"
            >
              Appointment
            </a>

          </div>

          {/* Mobile Menu Button - The only visible element on mobile */}
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
      
      {/* The Full-Screen Drawer Renders here */}
      <MobileDrawer 
        isOpen={isMobileOpen} 
        toggleMenu={toggleMobileMenu} 
      />
    </>
  );
};

export default Navbar;