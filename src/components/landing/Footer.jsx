import React from 'react';
import { Sparkles, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { scrollToLandingSection } from './scrollToLandingSection';

const Footer = ({ onStart, onOpenPricing, onNavigateLandingSection }) => {
  const navigateToSection = (sectionId) => {
    if (onNavigateLandingSection) {
      onNavigateLandingSection(sectionId);
      return;
    }

    scrollToLandingSection(sectionId);
  };

  const productLinks = [
    { label: 'How It Works', action: () => navigateToSection('how-it-works') },
    { label: 'Resume Templates', action: () => navigateToSection('templates') },
    { label: 'Exact or AI Import', action: () => navigateToSection('import') },
    { label: 'Pricing Plans', action: onOpenPricing },
    { label: 'Resume Examples', action: () => navigateToSection('examples') },
  ];

  const resourceLinks = [
    { label: 'ATS and Interview Prep', action: () => navigateToSection('features') },
    { label: 'Repository Workflow', action: () => navigateToSection('reviews') },
    { label: 'Mobile PDF Export', action: () => navigateToSection('import') },
    { label: 'Help Center', action: () => navigateToSection('faq') },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: 'mailto:support@careersense.ai?subject=Privacy%20Policy%20Request' },
    { label: 'Terms of Service', href: 'mailto:support@careersense.ai?subject=Terms%20of%20Service%20Request' },
    { label: 'Cookie Policy', href: 'mailto:support@careersense.ai?subject=Cookie%20Policy%20Request' },
  ];

  return (
    <footer className="theme-footer-surface border-t pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[color:var(--theme-text-primary)] font-black text-xl tracking-tight">
              <Sparkles size={20} className="text-[color:var(--theme-accent)]" /> 
              CareerSense
            </div>
            <p className="text-sm leading-relaxed">
              CareerSense helps you import, edit, tailor, store, and export resumes from one connected builder workspace.
            </p>
            <div className="flex gap-4">
                <button type="button" onClick={() => navigateToSection('reviews')} className="transition-colors hover:text-[color:var(--theme-accent-strong)]" aria-label="Go to reviews"><Twitter size={18} /></button>
                <button type="button" onClick={() => navigateToSection('templates')} className="transition-colors hover:text-[color:var(--theme-accent-strong)]" aria-label="Go to templates"><Github size={18} /></button>
                <button type="button" onClick={() => navigateToSection('features')} className="transition-colors hover:text-[color:var(--theme-accent-strong)]" aria-label="Go to features"><Linkedin size={18} /></button>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="mb-6 uppercase text-xs tracking-widest font-bold text-[color:var(--theme-text-primary)]">Product</h4>
            <ul className="space-y-3 text-sm">
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <button type="button" onClick={item.action} className="transition-colors text-left hover:text-[color:var(--theme-accent-strong)]">
                      {item.label}
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="mb-6 uppercase text-xs tracking-widest font-bold text-[color:var(--theme-text-primary)]">Resources</h4>
            <ul className="space-y-3 text-sm">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <button type="button" onClick={item.action} className="transition-colors text-left hover:text-[color:var(--theme-accent-strong)]">
                      {item.label}
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="mb-6 uppercase text-xs tracking-widest font-bold text-[color:var(--theme-text-primary)]">Legal</h4>
            <ul className="space-y-3 text-sm">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="transition-colors hover:text-[color:var(--theme-accent-strong)]">{item.label}</a>
                  </li>
                ))}
                <li><a href="mailto:support@careersense.ai" className="transition-colors hover:text-[color:var(--theme-accent-strong)] flex items-center gap-2"><Mail size={14}/> Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-xs font-medium border-[color:var(--theme-footer-border)]">
            <p>&copy; {new Date().getFullYear()} CareerSense AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
