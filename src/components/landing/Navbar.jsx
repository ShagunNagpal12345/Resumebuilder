import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { scrollToLandingSection } from './scrollToLandingSection';
import ThemeToggleButton from '../ui/ThemeToggleButton';

const Navbar = ({ onStart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'templates', label: 'Templates' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (sectionId) => {
    scrollToLandingSection(sectionId);
    setMobileMenuOpen(false);
  };

  // Handle scroll effect (We keep this for the padding animation)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      data-landing-navbar="true"
      className={`theme-nav-surface fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'py-4 shadow-[0_20px_50px_var(--theme-shadow-soft)]' 
          : 'border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-2 font-black text-xl tracking-tight cursor-pointer text-[color:var(--theme-nav-link)]"
          onClick={() => handleNavClick('top')}
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-teal-300 to-emerald-400 rounded-lg flex items-center justify-center text-white shadow-sm shadow-black/10">
            <Sparkles size={18} fill="white" />
          </div>
          <span>CareerSense</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium theme-nav-link">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="theme-nav-link transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggleButton />
          <button
            type="button"
            onClick={() => handleNavClick('templates')}
            className="theme-nav-link font-bold text-sm transition-colors"
          >
            View Templates
          </button>
          <button 
            onClick={onStart}
            className="theme-nav-cta group rounded-full px-5 py-2.5 font-bold text-sm transition-all flex items-center gap-2"
          >
            Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="theme-nav-link md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="theme-nav-surface md:hidden absolute top-full left-0 w-full border-b p-6 flex flex-col gap-4 shadow-2xl">
          <div className="mb-2">
            <ThemeToggleButton showLabel />
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="theme-nav-link text-left"
            >
              {item.label}
            </button>
          ))}
          <hr className="my-2 border-white/10" />
          <button
            type="button"
            onClick={() => handleNavClick('templates')}
            className="theme-nav-link text-left font-bold"
          >
            View Templates
          </button>
          <button onClick={onStart} className="theme-nav-cta rounded-xl px-5 py-3 font-bold text-center">
            Create Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
