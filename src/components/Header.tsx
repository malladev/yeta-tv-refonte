import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationItem {
  label: string;
  path: string;
}

interface HeaderProps {
  brandName?: string;
  navigationItems?: NavigationItem[];
  logoIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ComponentType<{ className?: string }>;
  className?: string;
}

const NavigationLink: React.FC<{ item: NavigationItem; onClick?: () => void }> = ({ item, onClick }) => (
  <Link
    to={item.path}
    onClick={onClick}
    className="text-white hover:text-orange-500 transition-colors duration-200 font-medium text-lg md:text-base"
  >
    {item.label}
  </Link>
);

const Header: React.FC<HeaderProps> = ({
  navigationItems = [
    { label: 'Nos Séries', path: '/series' },
    { label: 'Services', path: '/services' },
    { label: 'À Propos', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ],
  className = ''
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const baseStyles = `fixed top-0 w-full z-50 transition-all duration-300 ${className} bg-black/50 backdrop-blur-sm shadow-lg`;
  const scrolledStyles = isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : '';

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <header className={`${baseStyles} ${scrolledStyles}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <a href="/">
              <img 
                src="src/logo.png" 
                alt="YETA TV Logo" 
                className="h-auto w-32 md:w-34 object-contain" 
              />
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navigationItems.map((item, index) => (
              <NavigationLink key={index} item={item} />
            ))}
          </nav>

          <button
            className="md:hidden text-white p-2 rounded-full hover:bg-black/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            onClick={handleMenuToggle}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-black/95 backdrop-blur-sm py-4 px-6 rounded-xl mt-2"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <motion.nav 
                className="flex flex-col space-y-5"
                variants={menuVariants}
              >
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <NavigationLink 
                      item={item} 
                      onClick={closeMenu}
                    />
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;