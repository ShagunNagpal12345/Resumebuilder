import React, { useCallback, useEffect, useState } from 'react';
import { Menu, X, FolderOpen, Coins, ReceiptText } from 'lucide-react';
import { scrollToLandingSection } from './scrollToLandingSection';
import ThemeToggleButton from '../ui/ThemeToggleButton';
import { getRepositoryStats } from '../../services/resumeRepositoryService';
import careerSenseLogo from '../../assets/CareerSense.svg';

const Navbar = ({
  onStart,
  onOpenRepository,
  onOpenPricing,
  onOpenHome,
  onNavigateLandingSection,
  currentPage = 'landing',
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [repositoryStats, setRepositoryStats] = useState(() => getRepositoryStats());

  const formatNumber = (value) => new Intl.NumberFormat().format(Number(value || 0));

  const refreshRepositoryStats = useCallback(() => {
    setRepositoryStats(getRepositoryStats());
  }, []);

  const navigateToSection = useCallback((sectionId) => {
    if (onNavigateLandingSection) {
      onNavigateLandingSection(sectionId);
      return;
    }

    scrollToLandingSection(sectionId);
  }, [onNavigateLandingSection]);

  const navItems = currentPage === 'pricing'
    ? [
        { id: 'home', label: 'Home', action: () => (onOpenHome ? onOpenHome() : navigateToSection('top')) },
        { id: 'features', label: 'Features', action: () => navigateToSection('features') },
        { id: 'templates', label: 'Templates', action: () => navigateToSection('templates') },
        { id: 'faq', label: 'FAQ', action: () => navigateToSection('faq') },
        { id: 'pricing', label: 'Pricing', action: onOpenPricing, active: true },
      ]
    : [
        { id: 'how-it-works', label: 'How It Works', action: () => navigateToSection('how-it-works') },
        { id: 'features', label: 'Features', action: () => navigateToSection('features') },
        { id: 'templates', label: 'Templates', action: () => navigateToSection('templates') },
        { id: 'faq', label: 'FAQ', action: () => navigateToSection('faq') },
        { id: 'pricing', label: 'Pricing', action: onOpenPricing },
      ];

  const handleNavClick = (action) => {
    if (action) {
      action();
    }
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
      <div className="max-w-7xl mx-auto flex items-center justify-between pl-1 pr-6 sm:pl-2 sm:pr-6 lg:pl-0 lg:pr-6">
        
        {/* Logo */}
        <div 
          className="-ml-1 flex items-center cursor-pointer sm:ml-0"
          onClick={() => handleNavClick(() => {
            if (currentPage === 'pricing' && onOpenHome) {
              onOpenHome();
              return;
            }
            navigateToSection('top');
          })}
        >
          <img
            src={careerSenseLogo}
            alt="CareerSense"
            className="h-10 shrink-0 object-contain sm:h-10 md:h-8 lg:h-12"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium theme-nav-link">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.action)}
              className={`transition-colors ${item.active ? 'text-[color:var(--theme-nav-link)]' : 'theme-nav-link'}`}
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
              onClick={() => handleNavClick(item.action)}
              className={`text-left ${item.active ? 'text-[color:var(--theme-nav-link)]' : 'theme-nav-link'}`}
            >
              {item.label}
            </button>
          ))}
          <hr className="my-2 border-white/10" />
          <button
            type="button"
            onClick={() => handleNavClick(() => navigateToSection('templates'))}
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
