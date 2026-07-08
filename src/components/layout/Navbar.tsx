import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/Bhekizizwe_logo_1783348910396.jpg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/projects' },
  { name: 'Community', href: '/community-impact' },
  { name: 'HSE', href: '/hse' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white py-3 shadow-md border-b-0'
          : 'bg-white border-b border-gray-100 py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group z-50">
          <img src={logo} alt="Bhekizizwe Projects and Civils" className="h-[55px] w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wide font-semibold transition-colors hover:text-[#1B5E20] ${
                location === link.href ? 'text-[#1B5E20]' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-green ml-2 py-2 px-6 text-sm">
            Request a Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-800 z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-start gap-5 pt-24 pb-8 z-40 overflow-y-auto"
            >
              <img src={logo} alt="Bhekizizwe Projects and Civils" className="h-[55px] w-auto object-contain mb-6" />
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl tracking-wide font-display font-bold transition-colors ${
                    location === link.href ? 'text-[#1B5E20]' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-green mt-4 w-[80%] max-w-[300px]"
              >
                Request a Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
