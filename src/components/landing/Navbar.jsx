import React, { useCallback, useEffect, useState } from 'react';
import { Sparkles, Menu, X, FolderOpen, Coins, ReceiptText } from 'lucide-react';
import { scrollToLandingSection } from './scrollToLandingSection';
import ThemeToggleButton from '../ui/ThemeToggleButton';
import { getRepositoryStats } from '../../services/resumeRepositoryService';

const Navbar = ({ onStart, onOpenRepository }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [repositoryStats, setRepositoryStats] = useState(() => getRepositoryStats());
  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'templates', label: 'Templates' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
  ];

  const formatNumber = (value) => new Intl.NumberFormat().format(Number(value || 0));

  const refreshRepositoryStats = useCallback(() => {
    setRepositoryStats(getRepositoryStats());
  }, []);

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

  useEffect(() => {
    refreshRepositoryStats();

    const intervalId = window.setInterval(refreshRepositoryStats, 15000);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refreshRepositoryStats();
      }
    };

    const handleStorageChange = () => {
      refreshRepositoryStats();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [refreshRepositoryStats]);

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
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-[11px] font-bold text-slate-600 shadow-sm">
            <Coins size={14} className="text-teal-600" />
            <span className="uppercase tracking-[0.14em] text-slate-400">Career Points</span>
            <span className="font-black text-slate-900">{formatNumber(repositoryStats.totalCareerPoints)}</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/90 px-3 py-2 text-[11px] font-bold text-teal-700 shadow-sm">
            <ReceiptText size={14} />
            <span className="uppercase tracking-[0.14em] text-teal-600">Total Bill</span>
            <span className="font-black">{repositoryStats.totalBillUsdFormatted}</span>
          </div>
          <ThemeToggleButton />
          {onOpenRepository && (
            <button
              type="button"
              onClick={onOpenRepository}
              className="theme-nav-link inline-flex items-center gap-2 font-bold text-sm transition-colors"
            >
              <FolderOpen size={16} />
              My Repository
            </button>
          )}
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
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Career Points</div>
              <div className="mt-2 text-lg font-black tracking-tight text-slate-900">{formatNumber(repositoryStats.totalCareerPoints)}</div>
            </div>
            <div className="rounded-2xl border border-teal-200 bg-teal-50 px-4 py-3">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-teal-600">Total Bill</div>
              <div className="mt-2 text-lg font-black tracking-tight text-teal-800">{repositoryStats.totalBillUsdFormatted}</div>
            </div>
          </div>
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
          {onOpenRepository && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRepository();
              }}
              className="theme-nav-link inline-flex items-center gap-2 text-left font-bold"
            >
              <FolderOpen size={16} />
              My Repository
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
