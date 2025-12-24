import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/5 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="flex items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="/i-tech.svg"
                alt="I-TECH Logo"
                className="h-6 sm:h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side - Login button style */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('#contacto')}
              className="px-6 py-3 bg-gradient-to-r from-[#00d4ff] via-[#00a8cc] to-[#0088aa] text-white text-sm font-semibold uppercase tracking-wide rounded-full shadow-[0_22px_55px_-20px_rgba(0,212,255,0.85)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_25px_60px_-15px_rgba(0,212,255,0.95)] inline-flex items-center gap-2"
            >
              Conversemos
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4 border-t border-white/10 pt-6"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block text-white/90 hover:text-white transition-colors duration-200 font-medium text-base py-2"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => handleNavClick('#contacto')}
              variant="primary"
              size="sm"
              className="w-full mt-4"
            >
              Conversemos
            </Button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
