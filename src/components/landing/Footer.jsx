import React from 'react';
import { Sparkles, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] border-t border-slate-800 pt-20 pb-10 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
              <Sparkles size={20} className="text-teal-500" /> 
              CareerSense
            </div>
            <p className="text-sm leading-relaxed">
              The AI-powered resume builder designed to beat the ATS and help you land your dream job faster.
            </p>
            <div className="flex gap-4">
                <a href="#" className="hover:text-teal-400 transition-colors"><Twitter size={18} /></a>
                <a href="#" className="hover:text-teal-400 transition-colors"><Github size={18} /></a>
                <a href="#" className="hover:text-teal-400 transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Product</h4>
            <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Resume Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Job Tailoring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cover Letter Builder</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resume Examples</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Career Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interview Prep</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ATS Scanner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="mailto:support@careersense.ai" className="hover:text-white transition-colors flex items-center gap-2"><Mail size={14}/> Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs font-medium">
            <p>&copy; {new Date().getFullYear()} CareerSense AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;