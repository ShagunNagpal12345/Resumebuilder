import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = ({ onStart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-[#0f172a] ${
        scrolled 
          ? 'border-slate-800 py-4 shadow-lg' 
          : 'border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-2 font-black text-xl tracking-tight cursor-pointer text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center text-white">
            <Sparkles size={18} fill="white" />
          </div>
          <span>CareerSense</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#templates" className="hover:text-white transition-colors">Templates</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-slate-300 hover:text-white font-bold text-sm transition-colors">
            Log in
          </button>
          <button 
            onClick={onStart}
            className="group px-5 py-2.5 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-teal-50 transition-all flex items-center gap-2"
          >
            Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f172a] border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
          <a href="#features" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#templates" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Templates</a>
          <a href="#testimonials" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
          <hr className="border-slate-800 my-2" />
          <button className="text-left text-slate-300 hover:text-white font-bold">Log in</button>
          <button onClick={onStart} className="px-5 py-3 bg-teal-500 text-white rounded-xl font-bold text-center">
            Create Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;