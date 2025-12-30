import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SearchCommand } from './SearchCommand';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.vehicles'), path: '/araclar' },
    { name: t('nav.team'), path: '/takim' },
    { name: t('nav.achievements'), path: '/basarilar' },
    { name: t('nav.sponsors'), path: '/sponsorlar' },
    { name: t('nav.contact'), path: '/iletisim' },
    { name: t('nav.join_us'), path: '/join-us' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/photos/logo/light.png" alt="ITUNOM" className="h-9 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-bordo-500 ${
                  isActive(item.path) ? 'text-bordo-500' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => i18n.changeLanguage('tr')}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                i18n.language === 'tr' 
                  ? 'bg-bordo-700 text-white' 
                  : 'bg-gray-700 text-white hover:bg-bordo-800'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                i18n.language === 'en' 
                  ? 'bg-bordo-700 text-white' 
                  : 'bg-gray-700 text-white hover:bg-bordo-800'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-white hover:text-bordo-500 transition-colors"
            >
              <Search size={24} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-bordo-500 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path) ? 'text-bordo-500' : 'text-white hover:text-bordo-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-2 pt-4 border-t border-gray-800 mt-4">
              <button
                onClick={() => {
                  i18n.changeLanguage('tr');
                  setIsOpen(false);
                }}
                className={`flex-1 px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                  i18n.language === 'tr' 
                    ? 'bg-bordo-700 text-white' 
                    : 'bg-gray-700 text-white hover:bg-bordo-800'
                }`}
              >
                TR
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                  setIsOpen(false);
                }}
                className={`flex-1 px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                  i18n.language === 'en' 
                    ? 'bg-bordo-700 text-white' 
                    : 'bg-gray-700 text-white hover:bg-bordo-800'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
      <SearchCommand open={searchOpen} setOpen={setSearchOpen} />
    </nav>
  );
};

export default Navbar;
