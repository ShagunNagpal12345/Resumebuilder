import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Search, CheckCircle2, Layout, Image, Palette, Star, Shield, MousePointer2, Brain, PanelLeftClose, PanelLeftOpen, SlidersHorizontal
} from 'lucide-react';
import ResumeThumbnail from "../resume/ResumeThumbnail"; 
import poojaImage from '../../assets/Pooja.png';
import BuilderProgress from './BuilderProgress';
import { getResumeInsights, getTemplateRecommendations } from '../../utils/resumeInsights';

// --- DUMMY DATA FOR PREVIEWS ---
const DUMMY_DATA = {
  personal: {
    name: "POOJA BANSAL",
    title: "SENIOR DATA ANALYST",
    email: "p.bansal@datasense.com",
    phone: "+91 98765 43210",
    location: "Gurgaon, India",
    photo: poojaImage,
    summary: "Strategic and detail-oriented Data Analyst with 8+ years of experience transforming raw data into actionable business insights. Proven track record in optimizing operational efficiency by 40% and driving revenue growth through predictive modeling. Expert in Python, SQL, and Tableau with strong leadership skills in mentoring junior analysts and collaborating with C-suite stakeholders."
  },
  experience: [
    { 
      id: 1, 
      role: "Lead Data Analyst", 
      company: "TechCorp Solutions", 
      date: "2020 - Present", 
      desc: "• Spearheaded a team of 5 analysts to develop automated dashboards, reducing reporting time by 30%.\n• Led the migration of legacy data systems to AWS Redshift, improving query performance by 50%.\n• Collaborated with product teams to define KPIs and track feature adoption, directly influencing the Q3 product roadmap.\n• Conducted deep-dive analysis on customer churn, identifying key friction points that led to a 15% retention increase.", 
      pageBreak: false 
    },
    { 
      id: 2, 
      role: "Senior Data Analyst", 
      company: "DataFlow Inc.", 
      date: "2017 - 2020", 
      desc: "• Built predictive models using Python (Scikit-learn) to forecast quarterly sales with 95% accuracy.\n• Designed and maintained ETL pipelines using SQL and Python, ensuring 99.9% data availability for daily operations.\n• Visualized complex datasets in Tableau to communicate trends to non-technical stakeholders, resulting in a $200k marketing budget reallocation.", 
      pageBreak: false 
    },
    { 
      id: 3, 
      role: "Junior Analyst", 
      company: "Innovate Analytics", 
      date: "2015 - 2017", 
      desc: "• Assisted in the cleaning and preprocessing of large datasets for machine learning models.\n• Automating weekly Excel reports using VBA macros, saving 10+ hours of manual work per week.", 
      pageBreak: false 
    }
  ],
  education: [
    { 
      id: 1, 
      degree: "M.S. in Statistics", 
      school: "Columbia University", 
      date: "2017", 
      pageBreak: false 
    },
    { 
      id: 2, 
      degree: "B.S. in Computer Science", 
      school: "Indian Institute of Technology, Delhi", 
      date: "2015", 
      pageBreak: false 
    }
  ],
  skills: { 
    core: ["Data Strategy", "Predictive Modeling", "A/B Testing", "ETL Pipelines", "Stakeholder Management"], 
    technical: ["Python (Pandas, NumPy)", "SQL (PostgreSQL)", "Tableau", "PowerBI", "AWS Redshift", "Git/Jira"], 
    soft: ["Leadership", "Strategic Thinking", "Communication", "Problem Solving", "Mentoring"] 
  },
  projects: [
    { 
      id: 1, 
      name: "Customer Churn Predictor", 
      desc: "Developed a Random Forest machine learning model to identify high-risk customers. The model was integrated into the CRM, allowing the support team to proactively retain 12% of at-risk accounts.", 
      pageBreak: false 
    },
    { 
      id: 2, 
      name: "Market Basket Analysis", 
      desc: "Implemented association rule mining algorithms on retail transaction data to optimize product placement, boosting cross-sell revenue by $150k in the first quarter.", 
      pageBreak: false 
    }
  ],
  awards: [
    { id: 1, name: "Employee of the Year", issuer: "TechCorp Global", pageBreak: false },
    { id: 2, name: "Best Innovation Award", issuer: "DataFlow Inc. Hackathon", pageBreak: false }
  ],
  certifications: [
    { id: 1, name: "Google Data Analytics Professional", issuer: "Coursera", date: "2022", pageBreak: false },
    { id: 2, name: "AWS Certified Data Analytics - Specialty", issuer: "Amazon Web Services", date: "2020", pageBreak: false }
  ],
  languages: [
    { name: "English", level: "Native" }, 
    { name: "Hindi", level: "Native" },
    { name: "Spanish", level: "Intermediate" }
  ],
  volunteering: [
    { 
      id: 1, 
      role: "Data Science Mentor", 
      org: "Girls Who Code", 
      date: "2019 - Present", 
      desc: "Mentoring high school students in Python basics and data visualization concepts.", 
      pageBreak: false 
    }
  ]
};

// --- EXTENSIVE TEMPLATE LIST ---
export const TEMPLATES = [

  // ==========================================
  // 1. ATS-OPTIMIZED & TRADITIONAL (Safe, text-heavy, scanner-friendly)
  // ==========================================
  { id: 'professional', name: 'Clean Professional', hasHeadshot: true, graphics: 'Low', columns: '1', color: '#0d9488', recommended: true },
  { id: 'Ats', name: 'ATS Standard', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#000000', recommended: true },
  { id: 'minimal', name: 'ATS Minimal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1a1a1a', recommended: false },
  { id: 'classic', name: 'Ivy League', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: false },
  { id: 'formal', name: 'Structured Formal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: false },
  { id: 'Academic', name: 'Academic Scholar', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#27272a', recommended: false },
  { id: 'ocean-ats', name: 'Deep Ocean', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#004B8D', recommended: false },
  { id: 'career-launch', name: 'Career Launch', hasHeadshot: true, graphics: 'Low', columns: '1', color: '#0f766e', recommended: true },
  { id: 'associate-prime', name: 'Associate Prime', hasHeadshot: true, graphics: 'Low', columns: '1', color: '#2563eb', recommended: true },
  { id: 'consulting-line', name: 'Consulting Line', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: true },
  { id: 'leadership-signature', name: 'Leadership Signature', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#7c2d12', recommended: true },
  { id: 'boardroom-one', name: 'Boardroom One', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: true },
  { id: 'ceo-brief', name: 'CEO Brief', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#b45309', recommended: true },
  
  // ==========================================
  // 2. TECH, DATA & DEVELOPMENT (Structured, skill-focused, terminal aesthetics)
  // ==========================================
  { id: 'software-engineer', name: 'Software Engineer', hasHeadshot: true, graphics: 'High', columns: '2', color: '#00695c', recommended: true },
  { id: 'data-scientist', name: 'Data Scientist', hasHeadshot: false, graphics: 'low', columns: '2', color: '#3b82f6', recommended: true },
  { id: 'sql-terminal', name: 'SQL Terminal', hasHeadshot: false, graphics: 'High', columns: '2', color: '#fb923c', recommended: false },
  { id: 'tech', name: 'Terminal Dark', hasHeadshot: true, graphics: 'High', columns: '2', color: '#00E5FF', recommended: false },
  { id: 'developer', name: 'Dev Console', hasHeadshot: true, graphics: 'High', columns: '2', color: '#282c34', recommended: true },
  { id: 'class-file-dark', name: 'Class File Dark', hasHeadshot: true, graphics: 'High', columns: '2', color: '#9adbf7', recommended: false },
  { id: 'coder', name: 'Coder Terminal', hasHeadshot: true, graphics: 'High', columns: '2', color: '#0d1117', recommended: false },
  { id: 'cyan-grid', name: 'Cyan Flux', hasHeadshot: true, graphics: 'High', columns: '2', color: '#0097A7', recommended: false },
  { id: 'accent-grid', name: 'Accent Grid', hasHeadshot: true, graphics: 'low', columns: '2', color: '#1e3a8a', recommended: false },
  { id: 'engineer', name: 'Industrial Eng.', hasHeadshot: false, graphics: 'Low', columns: '2', color: '#2563eb', recommended: false },

  // ==========================================
  // 3. EXECUTIVE & CORPORATE (Bold headers, clean lines, professional colors)
  // ==========================================
  { id: 'executive', name: 'Global Executive', hasHeadshot: false, graphics: 'low', columns: '1', color: '#1a1a1a', recommended: true },
  { id: 'business-analyst', name: 'Business Analyst', hasHeadshot: false, graphics: 'High', columns: '2', color: '#2e7d32', recommended: true },
  { id: 'chartered-accountant', name: 'Chartered Accountant', hasHeadshot: true, graphics: 'High', columns: '2', color: '#0f766e', recommended: false },
  { id: 'lawyer-trial', name: 'Trial Lawyer', hasHeadshot: true, graphics: 'High', columns: '2', color: '#1f3b73', recommended: false },
  { id: 'reporting-mis', name: 'Reporting MIS', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2563eb', recommended: false },
  { id: 'indigo-elite', name: 'Indigo Leader', hasHeadshot: true, graphics: 'High', columns: '2', color: '#004B8D', recommended: true },
  { id: 'luxe', name: 'Luxe Executive', hasHeadshot: true, graphics: 'Low', columns: '1', color: '#d4af37', recommended: false },
  { id: 'product-manager', name: 'Product Manager', hasHeadshot: false, graphics: 'Low', columns: '2', color: '#3b82f6', recommended: false },
  { id: 'accounting', name: 'Financial Expert', hasHeadshot: false, graphics: 'High', columns: '2', color: '#006064', recommended: false },
  { id: 'sales', name: 'Sales Executive', hasHeadshot: false, graphics: 'Low', columns: '2', color: '#2563eb', recommended: false },
  { id: 'impact-header', name: 'Impact Header', hasHeadshot: true, graphics: 'High', columns: '2', color: '#0f172a', recommended: false },
  { id: 'modern-gold', name: 'Beige Executive', hasHeadshot: false, graphics: 'High', columns: '2', color: '#A79284', recommended: false },
  { id: 'professional-columns', name: 'Prof. Columns', hasHeadshot: false, graphics: 'Low', columns: '2', color: '#1e3a8a', recommended: false },
  { id: 'bordered-elegant', name: 'Bordered Elegant', hasHeadshot: true, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: false },
  { id: 'rule-minimalist', name: 'Rule Minimalist', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: false },

  // ==========================================
  // 4. CREATIVE, MARKETING & DESIGN (High visual impact, unique layouts)
  // ==========================================
  { id: 'designer', name: 'Creative Designer', hasHeadshot: true, graphics: 'High', columns: '2', color: '#F57C00', recommended: true },
  { id: 'creative', name: 'Creative Gradient', hasHeadshot: true, graphics: 'High', columns: '2', color: '#7c3aed', recommended: true },
  { id: 'marketing', name: 'Marketing Pro', hasHeadshot: false, graphics: 'High', columns: '2', color: '#004d40', recommended: true },
  { id: 'motion-designer-board', name: 'Motion Designer Board', hasHeadshot: true, graphics: 'High', columns: '2', color: '#facc15', recommended: false },
  { id: 'student-notes', name: 'Student Notes', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2563eb', recommended: false },
  { id: 'chalkboard-artist', name: 'Chalkboard Artist', hasHeadshot: true, graphics: 'High', columns: '2', color: '#262626', recommended: false },
  { id: 'polaroid-portfolio', name: 'Polaroid Portfolio', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2563eb', recommended: false },
  { id: 'influencer-media-kit', name: 'Influencer Media Kit', hasHeadshot: true, graphics: 'High', columns: '2', color: '#06b6d4', recommended: false },
  { id: 'youtube-creator', name: 'YouTube Creator', hasHeadshot: true, graphics: 'High', columns: '2', color: '#ff2d20', recommended: false },
  { id: 'actor-spotlight', name: 'Actor Spotlight', hasHeadshot: true, graphics: 'High', columns: '2', color: '#b4472f', recommended: false },
  { id: 'chef-menu', name: 'Chef Menu', hasHeadshot: true, graphics: 'High', columns: '2', color: '#991b1b', recommended: false },
  { id: 'painter-canvas', name: 'Painter Canvas', hasHeadshot: true, graphics: 'High', columns: '2', color: '#a855f7', recommended: false },
  { id: 'magazine-cover', name: 'Magazine Cover', hasHeadshot: true, graphics: 'High', columns: '1', color: '#dc2626', recommended: false },
  { id: 'portfolio-showcase', name: 'Portfolio Showcase', hasHeadshot: true, graphics: 'High', columns: '2', color: '#1ed5a9', recommended: true },
  { id: 'Artistic', name: 'Artistic Portfolio', hasHeadshot: true, graphics: 'High', columns: '2', color: '#1e1b4b', recommended: false },
  { id: 'startup', name: 'Startup Gradient', hasHeadshot: true, graphics: 'High', columns: '2', color: '#6366f1', recommended: false },
  { id: 'gamer-arena', name: 'Gamer Arena', hasHeadshot: true, graphics: 'High', columns: '2', color: '#facc15', recommended: false },
  { id: 'newspaper-editorial', name: 'Newspaper Editorial', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2a2a2a', recommended: false },
  { id: 'photographer-resume', name: 'Photographer Resume', hasHeadshot: true, graphics: 'High', columns: '2', color: '#d97706', recommended: false },
  { id: 'infographic', name: 'Infographic', hasHeadshot: true, graphics: 'High', columns: '1', color: '#3b82f6', recommended: false },
  { id: 'metro', name: 'Metro Blocks', hasHeadshot: true, graphics: 'High', columns: '2', color: '#f59e0b', recommended: false },
  { id: 'berlin', name: 'Berlin Bold', hasHeadshot: true, graphics: 'High', columns: '2', color: '#0f172a', recommended: false },
  { id: 'amber-visual', name: 'Amber Visual', hasHeadshot: true, graphics: 'High', columns: '2', color: '#F57C00', recommended: false },
  { id: 'skyline', name: 'Skyline Creative', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2A7BBF', recommended: false },
  { id: 'mocha-creative', name: 'Mocha Visual', hasHeadshot: true, graphics: 'High', columns: '2', color: '#A79284', recommended: false },
  { id: 'bubble-header', name: 'Bubble Header', hasHeadshot: true, graphics: 'High', columns: '1', color: '#3b82f6', recommended: false },
  { id: 'Mosaic', name: 'Mosaic', hasHeadshot: true, graphics: 'High', columns: '1', color: '#3b82f6', recommended: false },

  // ==========================================
  // 5. MODERN MINIMALIST & CLEAN (Whitespace heavy, soft accents)
  // ==========================================
  { id: 'modern', name: 'Modern Emerald', hasHeadshot: false, graphics: 'High', columns: '2', color: '#1A1C1E', recommended: true },
  { id: 'japanese', name: 'Japanese Clean', hasHeadshot: true, graphics: 'Low', columns: '1', color: '#1c1917', recommended: true },
  { id: 'card', name: 'Card Minimal', hasHeadshot: true, graphics: 'Low', columns: '1', color: '#18181b', recommended: false },
  { id: 'cloud-soft', name: 'Cloud Minimal', hasHeadshot: true, graphics: 'Low', columns: '2', color: '#0369A1', recommended: false },
  { id: 'soft-serif', name: 'Soft Serif', hasHeadshot: false, graphics: 'Low', columns: '2', color: '#334155', recommended: false },
  { id: 'sand-minimal', name: 'Sandstone Clean', hasHeadshot: true, graphics: 'Low', columns: '2', color: '#A79284', recommended: false },
  { id: 'marine-clean', name: 'Marine Clean', hasHeadshot: true, graphics: 'Low', columns: '2', color: '#0097A7', recommended: false },
  { id: 'mint-fresh', name: 'Mint Minimal', hasHeadshot: true, graphics: 'Low', columns: '2', color: '#2D5A43', recommended: false },
  { id: 'sunset-slim', name: 'Sunset Brief', hasHeadshot: false, graphics: 'Low', columns: '2', color: '#F57C00', recommended: false },

  // ==========================================
  // 6. SPECIALIZED INDUSTRY (Healthcare, Architecture, Education)
  // ==========================================
  { id: 'doctor-profile', name: 'Doctor Profile', hasHeadshot: true, graphics: 'High', columns: '2', color: '#0f766e', recommended: false },
  { id: 'physician-care', name: 'Physician Care', hasHeadshot: true, graphics: 'High', columns: '2', color: '#0f4f63', recommended: false },
  { id: 'medical', name: 'Medical Clinical', hasHeadshot: true, graphics: 'High', columns: '1', color: '#0d9488', recommended: true },
  { id: 'Architect', name: 'Architect', hasHeadshot: false, graphics: 'High', columns: '1', color: '#1e3a5f', recommended: true },
  { id: 'teacher', name: 'Education Pro', hasHeadshot: false, graphics: 'Low', columns: '2', color: '#78716c', recommended: false },

  // ==========================================
  // 7. BOLD ACCENTS & SIDEBARS (Heavy color blocking)
  // ==========================================
  { id: 'teal-innovator', name: 'Teal Innovator', hasHeadshot: false, graphics: 'low', columns: '2', color: '#0097A7', recommended: false },
  { id: 'navy-sidebar', name: 'Navy Modern', hasHeadshot: true, graphics: 'High', columns: '2', color: '#0f172a', recommended: false },
  { id: 'forest-sidebar', name: 'Forest Duo', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2D5A43', recommended: false },
  { id: 'slate-duo', name: 'Slate Split', hasHeadshot: false, graphics: 'High', columns: '2', color: '#2D2E2E', recommended: false },
  { id: 'crimson-sidebar', name: 'Crimson Edge', hasHeadshot: true, graphics: 'High', columns: '2', color: '#D32F2F', recommended: false },
  { id: 'ruby-creative', name: 'Ruby Creative', hasHeadshot: true, graphics: 'High', columns: '2', color: '#D32F2F', recommended: false },
  { id: 'orange-punch', name: 'Orange Punch', hasHeadshot: true, graphics: 'High', columns: '2', color: '#F57C00', recommended: false },
  { id: 'blue-frame', name: 'Blue Frame', hasHeadshot: true, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: false },
  { id: 'brick-formal', name: 'Brick Solid', hasHeadshot: false, graphics: 'Low', columns: '2', color: '#D32F2F', recommended: false },
  
  // ==========================================
  // 8. UNIQUE HEADERS (Stylized top sections)
  // ==========================================
  { id: 'pointer-banner', name: 'Pointer Banner', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2d4a8a', recommended: false },
  { id: 'block-branding', name: 'Block Branding', hasHeadshot: true, graphics: 'High', columns: '2', color: '#1a1a1a', recommended: false },
  { id: 'modern-circle', name: 'Modern Circle', hasHeadshot: true, graphics: 'High', columns: '2', color: '#D32F2F', recommended: false },
  { id: 'centered-initials', name: 'Centered Initials', hasHeadshot: true, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: false },
  { id: 'azure-pro', name: 'Azure Impact', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2563eb', recommended: false },
  { id: 'night-admin', name: 'Night Admin', hasHeadshot: true, graphics: 'Low', columns: '2', color: '#1A1C1E', recommended: false },
  { id: 'marine-compact', name: 'Marine Compact', hasHeadshot: true, graphics: 'Low', columns: '2', color: '#0097A7', recommended: false },

  // ==========================================
    // 9. HIGH VISUAL & INFOGRAPHIC (Progress bars, charts, heavy UI)
    // ==========================================
    { id: 'info-blue', name: 'Blue Sidebar', hasHeadshot: true, graphics: 'High', columns: '2', color: '#1d4ed8', recommended: false },
    { id: 'info-executive', name: 'Executive Grid', hasHeadshot: true, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: true },
    { id: 'info-teal', name: 'Teal Circular', hasHeadshot: true, graphics: 'High', columns: '2', color: '#0f766e', recommended: false },
    { id: 'info-green', name: 'Floating Charts', hasHeadshot: true, graphics: 'High', columns: '2', color: '#10b981', recommended: false },
    { id: 'info-navy', name: 'Full Infographic', hasHeadshot: true, graphics: 'High', columns: '2', color: '#1e293b', recommended: false },
];

// --- COMPONENTS ---

const FilterSection = ({ title, icon: Icon, children }) => (
  <div className="mb-8">
    <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[color:var(--theme-text-secondary)]">
      <Icon size={14} className="text-[color:var(--theme-accent)]" /> {title}
    </div>
    <div className="space-y-3">{children}</div>
  </div>
);

const CheckboxItem = ({ label, checked, onChange }) => (
  <button
    type="button"
    role="checkbox"
    aria-checked={checked}
    onClick={onChange}
    className="group flex w-full items-center gap-3 text-left"
  >
    <div className={`flex h-5 w-5 items-center justify-center rounded border transition-all duration-200 ${checked ? 'border-teal-500 bg-teal-500' : 'border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-solid)] group-hover:border-teal-300'}`}>
      {checked && <CheckCircle2 size={12} className="text-white" />}
    </div>
    <span className={`text-sm font-medium transition-colors ${checked ? 'text-[color:var(--theme-text-primary)]' : 'text-[color:var(--theme-text-secondary)] group-hover:text-[color:var(--theme-text-primary)]'}`}>{label}</span>
  </button>
);

const ColorSwatch = ({ color, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`relative h-8 w-8 rounded-full border-2 transition-all hover:scale-110 ${active ? 'scale-110 border-[color:var(--theme-text-primary)] shadow-lg shadow-slate-400/20' : 'border-transparent hover:border-[color:var(--theme-border-strong)]'}`}
    style={{ backgroundColor: color }}
    title={color}
  >
    {active && <div className="absolute inset-0 flex items-center justify-center"><CheckCircle2 size={14} className="text-white drop-shadow-md" /></div>}
  </button>
);

const TemplateGallery = ({ onSelectTemplate, onBack, resumeData = null, mode = 'scratch' }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ headshot: 'All', graphics: 'All', columns: 'All', color: null });
  const [isFiltersCollapsed, setIsFiltersCollapsed] = useState(() => (
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  ));
  const resumeInsights = useMemo(() => getResumeInsights(resumeData), [resumeData]);
  const rankedTemplates = useMemo(
    () => getTemplateRecommendations(resumeData, TEMPLATES, mode),
    [mode, resumeData]
  );
  const recommendationMap = useMemo(
    () => new Map(rankedTemplates.map((template, index) => [template.id, { ...template, rank: index + 1 }])),
    [rankedTemplates]
  );
  const hasImportedResume = Boolean(resumeData);
  const hasActiveFilters =
    filters.headshot !== 'All' ||
    filters.graphics !== 'All' ||
    filters.columns !== 'All' ||
    Boolean(filters.color);

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? 'All' : value
    }));
  };

  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter(t => {
      const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesHeadshot = filters.headshot === 'All' || (filters.headshot === 'Yes' ? t.hasHeadshot : !t.hasHeadshot);
      const matchesGraphics =
        filters.graphics === 'All' ||
        String(t.graphics || '').toLowerCase() === String(filters.graphics || '').toLowerCase();
      const matchesColumns =
        filters.columns === 'All' ||
        String(t.columns || '') === String(filters.columns || '');
      const matchesColor = !filters.color || t.color === filters.color;
      return matchesSearch && matchesHeadshot && matchesGraphics && matchesColumns && matchesColor;
    }).sort((a, b) => {
      const recommendationDelta = (recommendationMap.get(b.id)?.score || 0) - (recommendationMap.get(a.id)?.score || 0);
      if (recommendationDelta !== 0) return recommendationDelta;
      if (a.recommended !== b.recommended) return a.recommended ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
  }, [filters, recommendationMap, searchTerm]);

  const topRecommendations = rankedTemplates.slice(0, 3);
  const handleClearFilters = () => {
    setFilters({ headshot: 'All', graphics: 'All', columns: 'All', color: null });
    setSearchTerm('');
  };

  return (
    <div className="theme-app-shell min-h-screen bg-[radial-gradient(circle_at_top,#ecfeff,transparent_30%),linear-gradient(180deg,#eef5f7_0%,#f8fafc_42%,#f8fafc_100%)] flex flex-col font-sans text-slate-900">
      
      <div className="flex flex-1 flex-col lg:flex-row min-h-0">
        
        {/* --- LEFT SIDEBAR (Dark Mode Studio Feel) --- */}
        <aside className={`theme-strong-panel relative z-20 flex w-full flex-col overflow-y-auto border-b lg:border-b-0 lg:border-r border-[color:var(--theme-strong-border)] transition-all duration-300 ${isFiltersCollapsed ? 'lg:w-[92px] p-4' : 'lg:w-80 p-5 sm:p-6 lg:p-8'}`}>
          {isFiltersCollapsed ? (
            <div className="hidden h-full lg:flex lg:flex-col lg:items-center lg:justify-between">
              <div className="flex flex-col items-center gap-4">
                <button onClick={onBack} className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-solid)] text-[color:var(--theme-text-secondary)] transition-all hover:border-[color:var(--theme-border-strong)] hover:text-[color:var(--theme-text-primary)]">
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={() => setIsFiltersCollapsed(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-teal-200 bg-teal-50 text-teal-700 transition-all hover:bg-teal-100"
                  title="Expand filters"
                >
                  <PanelLeftOpen size={18} />
                </button>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-subtle)] text-[color:var(--theme-text-secondary)]">
                  <SlidersHorizontal size={18} />
                </div>
                <div className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-black uppercase tracking-[0.32em] text-[color:var(--theme-text-muted)]">
                  Studio Filters
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-solid)] text-[color:var(--theme-text-secondary)] transition-all hover:border-teal-300 hover:text-[color:var(--theme-text-primary)]"
                  title="Clear filters"
                >
                  <Brain size={16} />
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="mb-10">
                <div className="mb-8 flex items-center justify-between gap-3">
                  <button onClick={onBack} className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[color:var(--theme-text-secondary)] transition-colors hover:text-[color:var(--theme-text-primary)]">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform"/> Back
                  </button>
                  <button
                    onClick={() => setIsFiltersCollapsed(true)}
                    className="hidden lg:inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-solid)] text-[color:var(--theme-text-secondary)] transition-all hover:border-teal-300 hover:text-[color:var(--theme-text-primary)]"
                    title="Minimize filters"
                  >
                    <PanelLeftClose size={18} />
                  </button>
                </div>
                <h2 className="mb-2 text-2xl font-black tracking-tight text-[color:var(--theme-strong-text)]">Studio Filters</h2>
                <p className="text-xs text-[color:var(--theme-text-secondary)]">Dial in the layout style you want to explore.</p>
              </div>

              <div className="flex-1">
                <FilterSection title="Layout Structure" icon={Layout}>
                    <CheckboxItem label="Single Column" checked={filters.columns === '1'} onChange={() => handleFilterChange('columns', '1')} />
                    <CheckboxItem label="Two Columns" checked={filters.columns === '2'} onChange={() => handleFilterChange('columns', '2')} />
                </FilterSection>

                <FilterSection title="Visual Style" icon={Image}>
                    <CheckboxItem label="With Photo" checked={filters.headshot === 'Yes'} onChange={() => handleFilterChange('headshot', 'Yes')} />
                    <CheckboxItem label="Text Only" checked={filters.headshot === 'No'} onChange={() => handleFilterChange('headshot', 'No')} />
                    <div className="h-2"></div>
                    <CheckboxItem label="Graphic Heavy" checked={filters.graphics === 'High'} onChange={() => handleFilterChange('graphics', 'High')} />
                    <CheckboxItem label="Minimalist" checked={filters.graphics === 'Low'} onChange={() => handleFilterChange('graphics', 'Low')} />
                </FilterSection>

                <FilterSection title="Color Palette" icon={Palette}>
                    <div className="grid grid-cols-5 gap-3">
                    {[
          '#1a1a1a', '#334155', '#0f172a', '#1A1C1E', '#2D2E2E', '#78716c',
          '#2563eb', '#3b82f6', '#0369A1', '#2A7BBF', '#004B8D', '#1e3a8a', '#2d4a8a',
          '#00E5FF', '#0097A7', '#0d9488', '#006064', '#00695c', '#004d40', '#2D5A43', '#2e7d32',
          '#F57C00', '#D32F2F', '#A79284'
        ].map(c => (
                        <ColorSwatch 
                        key={c} 
                        color={c} 
                        active={filters.color === c} 
                        onClick={() => setFilters(prev => ({...prev, color: prev.color === c ? null : c}))} 
                        />
                    ))}
                    </div>
                </FilterSection>
              </div>

              <div className="mt-8 border-t border-[color:var(--theme-strong-border)] pt-8">
                 {hasActiveFilters && (
                   <button
                     onClick={handleClearFilters}
                     className="mb-4 w-full rounded-xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-solid)] px-4 py-3 text-xs font-black uppercase tracking-[0.22em] text-[color:var(--theme-text-primary)] transition-all hover:border-teal-300"
                   >
                     Clear All Filters
                   </button>
                 )}
                 <div className="rounded-xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-subtle)] p-4">
                    <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-teal-700">
                        <Brain size={14}/> Pro Tip
                    </div>
                    <p className="text-xs leading-relaxed text-[color:var(--theme-text-secondary)]">
                        ATS systems prefer simple, single-column layouts for high-volume corporate jobs.
                    </p>
                 </div>
              </div>
            </>
          )}
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="relative min-h-0 flex-1 overflow-y-auto">
          
          {/* Subtle Grid Background */}
          <div className="theme-grid-overlay absolute inset-0 pointer-events-none opacity-80"></div>

          <div className="p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1520px] mx-auto relative z-10">
            <div className="mb-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start">
              <div className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-5 shadow-sm shadow-slate-200/70 backdrop-blur sm:p-6">
                <BuilderProgress current="template" minimal />
                <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-teal-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-teal-700">
                        {hasImportedResume ? 'Resume Ready For Styling' : 'Explore Before You Start'}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                        {filteredTemplates.length} templates visible
                      </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-[3.35rem] font-black text-slate-900 mb-3 tracking-tight leading-[0.95]">
                      Choose a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Template</span>
                    </h1>
                    <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                      {hasImportedResume
                        ? 'Your content is already in place, so this step is about choosing the visual direction that makes it easier to scan and stronger to remember.'
                        : 'Browse recruiter-tested layouts, compare styles, and pick the resume direction you want before you start editing.'}
                    </p>
                  </div>

                  <div className="rounded-[1.6rem] border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-black text-teal-800">
                      <Shield size={18} />
                      Template Confidence
                    </div>
                    <p className="text-sm leading-relaxed text-teal-900/80">
                      {hasImportedResume
                        ? `${resumeInsights.experienceCount || 0} roles, ${resumeInsights.totalSkillCount || 0} skills, and ${resumeInsights.summaryLines || 0} summary lines are ready to flow into any layout.`
                        : 'Every template here uses the same live editor, A4 preview, and PDF export engine, so you can focus on style without losing control.'}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5">
                    <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">Best Fit</div>
                    <div className="mt-2 text-lg font-black tracking-tight text-slate-900">{topRecommendations[0]?.name || 'Professional Picks'}</div>
                    <div className="mt-1 text-xs text-slate-500">
                      {topRecommendations[0]?.reasons?.[0] || 'A strong place to start for most resumes.'}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5">
                    <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">Layout Direction</div>
                    <div className="mt-2 text-lg font-black tracking-tight text-slate-900">
                      {hasImportedResume && resumeInsights.experienceCount >= 5 ? 'Text First' : 'Flexible'}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {hasImportedResume && resumeInsights.experienceCount >= 5
                        ? 'Longer work histories often read best in cleaner one-column layouts.'
                        : 'You can go minimal, premium, or visual depending on your target role.'}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5">
                    <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">Editing Experience</div>
                    <div className="mt-2 text-lg font-black tracking-tight text-slate-900">Live + Instant</div>
                    <div className="mt-1 text-xs text-slate-500">
                      Click a template and you can keep editing content, spacing, and live preview without starting over.
                    </div>
                  </div>
                </div>
              </div>

              <div className="theme-strong-panel h-fit rounded-[2rem] p-5 shadow-2xl">
                <div className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.24em] text-[color:var(--theme-accent)]">
                  <Brain size={16} />
                  Recommended For You
                </div>
                <div className="space-y-2.5">
                  {topRecommendations.map((template, index) => (
                    <button
                      key={template.id}
                      onClick={() => onSelectTemplate(template.id)}
                      className="w-full rounded-[1.35rem] border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-solid)] px-4 py-3.5 text-left transition-all hover:border-teal-300 hover:bg-[color:var(--theme-surface-subtle)]"
                    >
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <div className="text-sm font-bold text-[color:var(--theme-text-primary)]">{template.name}</div>
                        <div className="rounded-full bg-teal-50 px-2 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-teal-700">
                          #{index + 1} pick
                        </div>
                      </div>
                      <div className="text-xs leading-relaxed text-[color:var(--theme-text-secondary)]">{template.reasons[0]}</div>
                    </button>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-subtle)] px-4 py-3.5 text-xs leading-relaxed text-[color:var(--theme-text-secondary)]">
                  Recommendations shift automatically based on your imported content, selected mode, and the density of the resume.
                </div>
              </div>
            </div>
            
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
                        Browse, compare, and pick your direction.
                    </h2>
                    <p className="text-slate-500 text-base font-medium">
                        The best matches are surfaced first, but every template stays fully editable once you enter the builder.
                    </p>
                </div>
                
                {/* Search Bar */}
                <div className="relative w-full md:w-[320px] group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search templates (e.g. 'Modern')..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-full py-3 pl-12 pr-6 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    />
                </div>
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                Showing {filteredTemplates.length} of {TEMPLATES.length}
              </span>
              {hasImportedResume && (
                <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-teal-700">
                  {resumeInsights.experienceCount} roles • {resumeInsights.totalSkillCount} skills
                </span>
              )}
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 transition-all hover:border-teal-200 hover:text-teal-700"
                >
                  Reset Filters
                </button>
              )}
            </div>

            {/* Colorful Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { icon: Shield, label: "ATS Optimized", sub: "Text stays readable", color: "text-emerald-700", bg: "bg-emerald-100", border: "border-emerald-200" },
                    { icon: Layout, label: "Recruiter Tested", sub: "Built for real roles", color: "text-blue-700", bg: "bg-blue-100", border: "border-blue-200" },
                    { icon: MousePointer2, label: "Click to Edit", sub: "Live preview ready", color: "text-violet-700", bg: "bg-violet-100", border: "border-violet-200" },
                    { icon: Brain, label: "Smart Matching", sub: hasImportedResume ? "Ranked for your resume" : "Curated top picks", color: "text-orange-700", bg: "bg-orange-100", border: "border-orange-200" },
                ].map((stat, i) => (
                    <div key={i} className={`p-4 rounded-2xl border ${stat.border} ${stat.bg} flex items-center gap-4 shadow-sm`}>
                        <div className={`p-2 bg-white rounded-xl ${stat.color} shadow-sm`}><stat.icon size={20}/></div>
                        <div>
                            <div className={`text-sm font-black ${stat.color}`}>{stat.label}</div>
                            <div className={`text-[10px] font-bold uppercase tracking-wider opacity-70 ${stat.color}`}>{stat.sub}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-20">
              {filteredTemplates.map((tpl) => {
                const recommendation = recommendationMap.get(tpl.id);

                return (
                  <div key={tpl.id} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-900/5 flex flex-col h-full relative hover:-translate-y-1">
                    
                    {/* Card Header */}
                    <div className="px-6 py-4 border-b border-slate-50 bg-white">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">{tpl.name}</h3>
                          <p className="mt-1 text-xs leading-relaxed text-slate-500">
                            {recommendation?.reasons?.[0] || 'Balanced professional layout with full live editing support.'}
                          </p>
                        </div>
                        {(tpl.recommended || recommendation?.rank <= 3) && (
                          <span className="shrink-0 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                            <Star size={8} fill="currentColor" /> {recommendation?.rank === 1 ? 'Best Match' : 'Top Pick'}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <div
                      className="relative w-full aspect-[210/260] bg-slate-100 overflow-hidden cursor-pointer"
                      onClick={() => onSelectTemplate(tpl.id)}
                    >
                      {/* Render the Resume Scaled Down */}
                      <div className="origin-top-left transform scale-[0.45] w-[222%] h-[222%] pointer-events-none select-none p-8 bg-white shadow-inner">
                          <ResumeThumbnail templateId={tpl.id} data={DUMMY_DATA} />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-teal-50 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl scale-105">
                              Use Template
                          </button>
                      </div>
                    </div>

                    {/* Card Footer Info */}
                    <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        <div className="flex flex-wrap gap-3">
                            <span>{tpl.columns} Column</span>
                            <span>•</span>
                            <span>{tpl.graphics === 'High' ? 'Graphic' : 'Clean'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {recommendation?.rank <= 3 && (
                            <span className="rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-[9px] font-black tracking-[0.22em] text-teal-700">
                              #{recommendation.rank}
                            </span>
                          )}
                          <div className="w-3 h-3 rounded-full border border-slate-300" style={{backgroundColor: tpl.color}}></div>
                        </div>
                    </div>
                    
                  </div>
                );
              })}
            </div>

            {filteredTemplates.length === 0 && (
                <div className="py-20 text-center">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                        <Search size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">No templates found</h3>
                    <p className="text-slate-500">Try adjusting your filters to see more results.</p>
                </div>
            )}

          </div>
        </main>

      </div>
    </div>
  );
};

export default TemplateGallery;
