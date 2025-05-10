import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#portfolio' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
    className={`fixed top-1 z-50 transition-all duration-300 transform ${
      isScrolled
        ? 'top-2 left-1/2 -translate-x-1/2 bg-black py-2 w-3/4 shadow-[0_0_30px_#5271FF] rounded-full'
        : 'bg-transparent py-4 w-full  left-1/2 -translate-x-1/2 '
    }`}
    
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl md:text-2xl font-bold text-blue-600">
            Samanvay Gupta
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#resume" 
              className="btn btn-primary flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg- p-4 shadow-md absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-800 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#resume" 
              className="btn btn-primary flex items-center justify-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};