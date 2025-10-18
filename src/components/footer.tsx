import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Construction Drawings', href: '#drawings' },
    { name: 'Contact', href: '#contact' },
  ];

  const designServicesLinks = [
    { name: 'Kitchen Design', href: '#kitchen' },
    { name: 'Bathroom Design', href: '#bathroom' },
    { name: 'Aging in Place', href: '#aging-in-place' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaLinkedin />, href: '#' },
  ];

  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Branding */}
          <div className="col-span-1 md:col-span-1 flex flex-col">
            <Link to={'/'}  className="text-white leading-none flex flex-col group py-3 transition-all duration-300" aria-label="Design Alternatives Home">
              <div className="italic font-serif tracking-tight transition-all duration-500 text-4xl" style={{ textShadow: '0 0 5px rgba(0,0,0,0.7)' }}>
                DesignHeaven
              </div>
              <div className="text-xs uppercase tracking-[.4em] border-t border-b border-white border-opacity-70 py-0.5 mt-[-4px] group-hover:border-amber-400 transition-colors duration-500 text-[10px]">
                KITCHEN & BATH DESIGN
              </div>
            </Link>
            
            <p className="text-gray-400 mt-4 text-sm">
              Creating timeless spaces that reflect your personality and lifestyle.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-amber-400">Menu</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Design Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-amber-400">Design Services</h3>
            <ul className="mt-4 space-y-2">
              {designServicesLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-amber-400">Contact Us</h3>
            <div className="mt-4 space-y-2 text-gray-300">
              <p> 600 Dewar Dr, Rock Springs, WY 82901, USA
</p>
              
              <p>
                <a href="mailto:contact@designalternatives.com" className="hover:text-amber-400">
                  contact@DesignHeaven.com
                </a>
              </p>
              <p>
                <a href="tel:+307 462 9173" className="hover:text-amber-400">
                  (307) 462 9173
                </a>
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DesignHeaven. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
