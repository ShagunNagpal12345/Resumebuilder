// // import React, { useState, useMemo } from 'react';
// // import { 
// //   ArrowLeft, Layout, ShieldCheck, FileJson, Zap, Filter, Sparkles, ChevronRight
// // } from 'lucide-react';
// // import ResumeThumbnail from "../resume/ResumeThumbnail"; 

// // // --- DUMMY DATA FOR PREVIEWS ---
// // const DUMMY_DATA = {
// //   personal: {
// //     name: "POOJA BANSAL",
// //     title: "SENIOR DATA ANALYST",
// //     email: "p.bansal@datasense.com",
// //     phone: "+91 98765 43210",
// //     location: "Gurgaon, India",
// //     summary: "Strategic and detail-oriented Data Analyst with 8+ years of experience transforming raw data into actionable business insights. Proven track record in optimizing operational efficiency by 40% and driving revenue growth through predictive modeling. Expert in Python, SQL, and Tableau with strong leadership skills in mentoring junior analysts and collaborating with C-suite stakeholders."
// //   },
// //   experience: [
// //     { 
// //       id: 1, 
// //       role: "Lead Data Analyst", 
// //       company: "TechCorp Solutions", 
// //       date: "2020 - Present", 
// //       desc: "• Spearheaded a team of 5 analysts to develop automated dashboards, reducing reporting time by 30%.\n• Led the migration of legacy data systems to AWS Redshift, improving query performance by 50%.\n• Collaborated with product teams to define KPIs and track feature adoption, directly influencing the Q3 product roadmap.\n• Conducted deep-dive analysis on customer churn, identifying key friction points that led to a 15% retention increase.", 
// //       pageBreak: false 
// //     },
// //     { 
// //       id: 2, 
// //       role: "Senior Data Analyst", 
// //       company: "DataFlow Inc.", 
// //       date: "2017 - 2020", 
// //       desc: "• Built predictive models using Python (Scikit-learn) to forecast quarterly sales with 95% accuracy.\n• Designed and maintained ETL pipelines using SQL and Python, ensuring 99.9% data availability for daily operations.\n• Visualized complex datasets in Tableau to communicate trends to non-technical stakeholders, resulting in a $200k marketing budget reallocation.", 
// //       pageBreak: false 
// //     },
// //     { 
// //       id: 3, 
// //       role: "Junior Analyst", 
// //       company: "Innovate Analytics", 
// //       date: "2015 - 2017", 
// //       desc: "• Assisted in the cleaning and preprocessing of large datasets for machine learning models.\n• Automating weekly Excel reports using VBA macros, saving 10+ hours of manual work per week.", 
// //       pageBreak: false 
// //     }
// //   ],
// //   education: [
// //     { 
// //       id: 1, 
// //       degree: "M.S. in Statistics", 
// //       school: "Columbia University", 
// //       date: "2017", 
// //       pageBreak: false 
// //     },
// //     { 
// //       id: 2, 
// //       degree: "B.S. in Computer Science", 
// //       school: "Indian Institute of Technology, Delhi", 
// //       date: "2015", 
// //       pageBreak: false 
// //     }
// //   ],
// //   skills: { 
// //     core: ["Data Strategy", "Predictive Modeling", "A/B Testing", "ETL Pipelines", "Stakeholder Management"], 
// //     technical: ["Python (Pandas, NumPy)", "SQL (PostgreSQL)", "Tableau", "PowerBI", "AWS Redshift", "Git/Jira"], 
// //     soft: ["Leadership", "Strategic Thinking", "Communication", "Problem Solving", "Mentoring"] 
// //   },
// //   projects: [
// //     { 
// //       id: 1, 
// //       name: "Customer Churn Predictor", 
// //       desc: "Developed a Random Forest machine learning model to identify high-risk customers. The model was integrated into the CRM, allowing the support team to proactively retain 12% of at-risk accounts.", 
// //       pageBreak: false 
// //     },
// //     { 
// //       id: 2, 
// //       name: "Market Basket Analysis", 
// //       desc: "Implemented association rule mining algorithms on retail transaction data to optimize product placement, boosting cross-sell revenue by $150k in the first quarter.", 
// //       pageBreak: false 
// //     }
// //   ],
// //   awards: [
// //     { id: 1, name: "Employee of the Year", issuer: "TechCorp Global", pageBreak: false },
// //     { id: 2, name: "Best Innovation Award", issuer: "DataFlow Inc. Hackathon", pageBreak: false }
// //   ],
// //   certifications: [
// //     { id: 1, name: "Google Data Analytics Professional", issuer: "Coursera", date: "2022", pageBreak: false },
// //     { id: 2, name: "AWS Certified Data Analytics - Specialty", issuer: "Amazon Web Services", date: "2020", pageBreak: false }
// //   ],
// //   languages: [
// //     { name: "English", level: "Native" }, 
// //     { name: "Hindi", level: "Native" },
// //     { name: "Spanish", level: "Intermediate" }
// //   ],
// //   volunteering: [
// //     { 
// //       id: 1, 
// //       role: "Data Science Mentor", 
// //       org: "Girls Who Code", 
// //       date: "2019 - Present", 
// //       desc: "Mentoring high school students in Python basics and data visualization concepts.", 
// //       pageBreak: false 
// //     }
// //   ]
// // };

// // // --- ALL 44 TEMPLATES ---
// // export const TEMPLATES = [
// //     // 1. Core / Professional
// //     { id: 'professional', name: 'Clean Professional', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0d9488', recommended: true },
// //     { id: 'minimal', name: 'ATS Minimal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1a1a1a', recommended: false },
// //     { id: 'classic', name: 'Ivy League', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: false },
// //     { id: 'formal', name: 'Structured Formal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: false },
    
// //     // 2. Modern / Creative
// //     { id: 'modern', name: 'Modern Emerald', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2D5A43', recommended: false },
// //     { id: 'creative', name: 'Visual Portfolio', hasHeadshot: true, graphics: 'High', columns: '2', color: '#3b82f6', recommended: false },
// //     { id: 'executive', name: 'Global Executive', hasHeadshot: false, graphics: 'High', columns: '1', color: '#1a1a1a', recommended: true },
// //     { id: 'tech', name: 'Terminal Dark', hasHeadshot: true, graphics: 'High', columns: '1', color: '#00E5FF', recommended: true },
    
// //     // 3. Blue / Indigo Series
// //     { id: 'indigo-elite', name: 'Indigo Leader', hasHeadshot: false, graphics: 'High', columns: '1', color: '#004B8D', recommended: true },
// //     { id: 'accent-grid', name: 'Accent Grid', hasHeadshot: false, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: false },
// //     { id: 'centered-initials', name: 'Centered Initials', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: false },
// //     { id: 'azure-pro', name: 'Azure Impact', hasHeadshot: false, graphics: 'High', columns: '1', color: '#2A7BBF', recommended: false },
// //     { id: 'blue-frame', name: 'Blue Frame', hasHeadshot: false, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: false },
// //     { id: 'bordered-elegant', name: 'Bordered Elegant', hasHeadshot: false, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: false },
// //     { id: 'bubble-header', name: 'Bubble Header', hasHeadshot: false, graphics: 'High', columns: '1', color: '#3b82f6', recommended: false },
// //     { id: 'cloud-soft', name: 'Cloud Minimal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0369A1', recommended: false },
// //     { id: 'impact-header', name: 'Impact Header', hasHeadshot: false, graphics: 'High', columns: '1', color: '#0f172a', recommended: false },
// //     { id: 'marine-clean', name: 'Marine Clean', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0097A7', recommended: false },
// //     { id: 'marine-compact', name: 'Marine Compact', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0097A7', recommended: false },
// //     { id: 'modern-circle', name: 'Modern Circle', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: false },
// //     { id: 'navy-sidebar', name: 'Navy Modern', hasHeadshot: true, graphics: 'High', columns: '2', color: '#004B8D', recommended: false },
// //     { id: 'ocean-ats', name: 'Deep Ocean', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#004B8D', recommended: false },
// //     { id: 'pointer-banner', name: 'Pointer Banner', hasHeadshot: true, graphics: 'High', columns: '1', color: '#2d4a8a', recommended: false },
// //     { id: 'professional-columns', name: 'Prof. Columns', hasHeadshot: false, graphics: 'Low', columns: '2', color: '#1e3a8a', recommended: false },
// //     { id: 'rule-minimalist', name: 'Rule Minimalist', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: false },
// //     { id: 'skyline', name: 'Skyline Creative', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2A7BBF', recommended: false },
// //     { id: 'block-branding', name: 'Block Branding', hasHeadshot: false, graphics: 'High', columns: '1', color: '#2d4a8a', recommended: false },

// //     // 4. Teal / Cyan / Green
// //     { id: 'teal-innovator', name: 'Teal Innovator', hasHeadshot: false, graphics: 'High', columns: '2', color: '#0097A7', recommended: true },
// //     { id: 'cyan-grid', name: 'Cyan Flux', hasHeadshot: true, graphics: 'High', columns: '1', color: '#0097A7', recommended: false },
// //     { id: 'forest-sidebar', name: 'Forest Duo', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2D5A43', recommended: false },
// //     { id: 'mint-fresh', name: 'Mint Minimal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#2D5A43', recommended: false },

// //     // 5. Warm / Earth Tones
// //     { id: 'amber-visual', name: 'Amber Visual', hasHeadshot: true, graphics: 'High', columns: '2', color: '#F57C00', recommended: true },
// //     { id: 'brick-formal', name: 'Brick Solid', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#D32F2F', recommended: false },
// //     { id: 'crimson-sidebar', name: 'Crimson Edge', hasHeadshot: true, graphics: 'High', columns: '2', color: '#D32F2F', recommended: false },
// //     { id: 'mocha-creative', name: 'Mocha Visual', hasHeadshot: true, graphics: 'High', columns: '2', color: '#A79284', recommended: true },
// //     { id: 'modern-gold', name: 'Beige Executive', hasHeadshot: true, graphics: 'High', columns: '2', color: '#A79284', recommended: false },
// //     { id: 'orange-punch', name: 'Orange Punch', hasHeadshot: false, graphics: 'High', columns: '1', color: '#F57C00', recommended: false },
// //     { id: 'ruby-creative', name: 'Ruby Creative', hasHeadshot: false, graphics: 'High', columns: '1', color: '#D32F2F', recommended: false },
// //     { id: 'sand-minimal', name: 'Sandstone Clean', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#A79284', recommended: false },
// //     { id: 'sunset-slim', name: 'Sunset Brief', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#F57C00', recommended: false },

// //     // 6. Dark / Slate
// //     { id: 'night-admin', name: 'Night Admin', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1A1C1E', recommended: false },
// //     { id: 'slate-duo', name: 'Slate Split', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2D2E2E', recommended: false },
// //     { id: 'soft-serif', name: 'Soft Serif', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: false },
// // ];

// // const FilterDropdown = ({ label, options, value, onChange }) => (
// //     <div className="relative">
// //         <select value={value} onChange={(e) => onChange(e.target.value)} className="appearance-none bg-transparent rounded-2xl px-6 py-2.5 text-sm font-bold pr-12 outline-none cursor-pointer">
// //             {options.map(o => <option key={o} value={o}>{label}: {o}</option>)}
// //         </select>
// //         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
// //             <ChevronRight size={14} className="rotate-90" />
// //         </div>
// //     </div>
// // );

// // const TemplateGallery = ({ onSelectTemplate, onBack }) => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [filters, setFilters] = useState({ headshot: 'All', graphics: 'All', columns: 'All', color: null });

// //   const filteredTemplates = useMemo(() => {
// //     return TEMPLATES.filter(t => {
// //       const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
// //       const matchesHeadshot = filters.headshot === 'All' || (filters.headshot === 'Yes' ? t.hasHeadshot : !t.hasHeadshot);
// //       const matchesGraphics = filters.graphics === 'All' || t.graphics === filters.graphics;
// //       const matchesColumns = filters.columns === 'All' || t.columns === filters.columns;
// //       const matchesColor = !filters.color || t.color === filters.color;
// //       return matchesSearch && matchesHeadshot && matchesGraphics && matchesColumns && matchesColor;
// //     });
// //   }, [searchTerm, filters]);

// //   return (
// //     <div className="h-screen bg-[#F8FAFC] flex flex-col overflow-hidden font-['Inter',_sans-serif] relative">
// //         <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
// //             <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-teal-50 rounded-full blur-[120px]" />
// //             <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-emerald-50 rounded-full blur-[120px]" />
// //         </div>
// //         <div className="flex-1 overflow-y-auto p-12 custom-scrollbar relative z-10">
// //           <div className="max-w-7xl mx-auto">
            
// //             {/* Header Section */}
// //             <header className="mb-12">
// //               <button onClick={onBack} className="mb-6 flex items-center gap-2 text-xs font-bold uppercase text-slate-400 hover:text-slate-900 transition-colors">
// //                 <ArrowLeft size={16} /> Back to Selection
// //               </button>
              
// //               <div className="flex items-center gap-2 text-[#0d9488] font-bold text-xs uppercase tracking-widest mb-4">
// //                   <Sparkles size={16}/> <span>Intelligent Template Engine v4.0</span>
// //               </div>
// //               <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
// //                 Craft your <span className="text-[#0d9488]">Career Story</span>
// //               </h1>
// //               <p className="text-xl font-medium text-slate-500 max-w-2xl">
// //                 Choose from our library of 40+ ATS-optimized templates designed by recruitment experts.
// //               </p>

// //               {/* Stats Bar */}
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-white/60 backdrop-blur-xl border border-white p-6 rounded-[2.5rem] shadow-sm">
// //                   <div className="flex items-center gap-4">
// //                       <div className="bg-teal-50 p-3 rounded-2xl text-[#0d9488]"><Layout size={20}/></div>
// //                       <div><div className="text-sm font-black text-slate-900">44 Layouts</div><div className="text-[10px] text-slate-400 font-bold uppercase">Professional</div></div>
// //                   </div>
// //                   <div className="flex items-center gap-4">
// //                       <div className="bg-emerald-50 p-3 rounded-2xl text-[#10b981]"><ShieldCheck size={20}/></div>
// //                       <div><div className="text-sm font-black text-slate-900">ATS Optimized</div><div className="text-[10px] text-slate-400 font-bold uppercase">Verified</div></div>
// //                   </div>
// //                   <div className="flex items-center gap-4">
// //                       <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600"><FileJson size={20}/></div>
// //                       <div><div className="text-sm font-black text-slate-900">Multi-Format</div><div className="text-[10px] text-slate-400 font-bold uppercase">PDF & Web</div></div>
// //                   </div>
// //                   <div className="flex items-center gap-4">
// //                       <div className="bg-orange-50 p-3 rounded-2xl text-orange-600"><Zap size={20}/></div>
// //                       <div><div className="text-sm font-black text-slate-900">Live Preview</div><div className="text-[10px] text-slate-400 font-bold uppercase">Real-time</div></div>
// //                   </div>
// //               </div>
// //             </header>

// //             {/* Filter Bar */}
// //             <div className="bg-white/80 backdrop-blur-md p-4 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-white mb-12 flex flex-wrap items-center gap-6 sticky top-0 z-30">
// //               <div className="flex items-center gap-4 pl-4">
// //                 <Filter size={18} className="text-slate-400" />
// //                 <FilterDropdown label="Headshot" options={['All', 'Yes', 'No']} value={filters.headshot} onChange={(v)=>setFilters({...filters, headshot: v})} />
// //                 <FilterDropdown label="Graphics" options={['All', 'High', 'Low']} value={filters.graphics} onChange={(v)=>setFilters({...filters, graphics: v})} />
// //                 <FilterDropdown label="Columns" options={['All', '1', '2']} value={filters.columns} onChange={(v)=>setFilters({...filters, columns: v})} />
// //               </div>
// //               <div className="h-8 w-px bg-slate-200 mx-2" />
// //               <div className="flex items-center gap-3">
// //                 <div className="flex gap-2">
// //                     {['#ffffff', '#1a1a1a', '#1A1C1E', '#0f172a', '#2D2E2E', '#334155', 
// //       '#0d9488', '#2563eb', '#0369A1', '#2A7BBF', '#004B8D', '#1e3a8a', 
// //       '#2d4a8a', '#0097A7', '#00E5FF', '#2D5A43', '#A79284', '#F57C00', '#D32F2F'].map(c => (
// //                         <button 
// //                             key={c} 
// //                             onClick={() => setFilters({...filters, color: filters.color === c ? null : c})}
// //                             className={`w-8 h-8 rounded-full border-4 transition-all hover:scale-110 ${filters.color === c ? 'border-[#0d9488] scale-110' : 'border-white shadow-sm'}`}
// //                             style={{ backgroundColor: c }}
// //                         />
// //                     ))}
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 text-left">
// //               {filteredTemplates.map(tpl => (
// //                 <div key={tpl.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 relative flex flex-col group border border-slate-100 transform hover:-translate-y-2">
// //                   <div className="px-6 py-4 bg-white flex justify-between items-center">
// //                     <div>
// //                         <span className="text-xs font-black uppercase text-slate-800 tracking-widest">{tpl.name}</span>
// //                         <div className="flex gap-2 mt-1">
// //                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{tpl.columns} Column</span>
// //                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">•</span>
// //                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{tpl.graphics === 'High' ? 'Graphic' : 'Minimal'}</span>
// //                         </div>
// //                     </div>
// //                     {tpl.recommended && (
// //                         <span className="bg-[#10b981] text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter shadow-lg shadow-emerald-200">Recommended</span>
// //                     )}
// //                   </div>

// //                   <div className="relative w-full aspect-[210/230] bg-slate-50 overflow-hidden">
// //                     <ResumeThumbnail templateId={tpl.id} data={DUMMY_DATA} />
// //                     <div className="absolute inset-0 bg-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
// //                   </div>
                  
// //                   <div className="p-8 flex justify-center bg-white border-t border-slate-50">
// //                       <button 
// //                           onClick={() => onSelectTemplate(tpl.id)}
// //                           className="bg-[#0d9488] text-white px-10 py-4 rounded-2xl font-black uppercase text-xs w-full hover:bg-[#0b7a6f] transition-all shadow-lg active:scale-95 group-hover:tracking-[0.1em]"
// //                       >
// //                           Build with this style
// //                       </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //     </div>
// //   );
// // };

// // export default TemplateGallery;





// import React, { useState, useMemo } from 'react';
// import { 
//   ArrowLeft, Search, Layout, Image, Palette, CheckCircle2, SlidersHorizontal, 
//   Star, Zap, Shield, MousePointer2
// } from 'lucide-react';
// import ResumeThumbnail from "../resume/ResumeThumbnail"; 

// // --- DUMMY DATA FOR PREVIEWS ---
// const DUMMY_DATA = {
//   personal: {
//     name: "POOJA BANSAL",
//     title: "SENIOR DATA ANALYST",
//     email: "p.bansal@datasense.com",
//     phone: "+91 98765 43210",
//     location: "Gurgaon, India",
//     summary: "Strategic and detail-oriented Data Analyst with 8+ years of experience transforming raw data into actionable business insights. Proven track record in optimizing operational efficiency by 40% and driving revenue growth through predictive modeling. Expert in Python, SQL, and Tableau with strong leadership skills in mentoring junior analysts and collaborating with C-suite stakeholders."
//   },
//   experience: [
//     { 
//       id: 1, 
//       role: "Lead Data Analyst", 
//       company: "TechCorp Solutions", 
//       date: "2020 - Present", 
//       desc: "• Spearheaded a team of 5 analysts to develop automated dashboards, reducing reporting time by 30%.\n• Led the migration of legacy data systems to AWS Redshift, improving query performance by 50%.\n• Collaborated with product teams to define KPIs and track feature adoption, directly influencing the Q3 product roadmap.\n• Conducted deep-dive analysis on customer churn, identifying key friction points that led to a 15% retention increase.", 
//       pageBreak: false 
//     },
//     { 
//       id: 2, 
//       role: "Senior Data Analyst", 
//       company: "DataFlow Inc.", 
//       date: "2017 - 2020", 
//       desc: "• Built predictive models using Python (Scikit-learn) to forecast quarterly sales with 95% accuracy.\n• Designed and maintained ETL pipelines using SQL and Python, ensuring 99.9% data availability for daily operations.\n• Visualized complex datasets in Tableau to communicate trends to non-technical stakeholders, resulting in a $200k marketing budget reallocation.", 
//       pageBreak: false 
//     },
//     { 
//       id: 3, 
//       role: "Junior Analyst", 
//       company: "Innovate Analytics", 
//       date: "2015 - 2017", 
//       desc: "• Assisted in the cleaning and preprocessing of large datasets for machine learning models.\n• Automating weekly Excel reports using VBA macros, saving 10+ hours of manual work per week.", 
//       pageBreak: false 
//     }
//   ],
//   education: [
//     { 
//       id: 1, 
//       degree: "M.S. in Statistics", 
//       school: "Columbia University", 
//       date: "2017", 
//       pageBreak: false 
//     },
//     { 
//       id: 2, 
//       degree: "B.S. in Computer Science", 
//       school: "Indian Institute of Technology, Delhi", 
//       date: "2015", 
//       pageBreak: false 
//     }
//   ],
//   skills: { 
//     core: ["Data Strategy", "Predictive Modeling", "A/B Testing", "ETL Pipelines", "Stakeholder Management"], 
//     technical: ["Python (Pandas, NumPy)", "SQL (PostgreSQL)", "Tableau", "PowerBI", "AWS Redshift", "Git/Jira"], 
//     soft: ["Leadership", "Strategic Thinking", "Communication", "Problem Solving", "Mentoring"] 
//   },
//   projects: [
//     { 
//       id: 1, 
//       name: "Customer Churn Predictor", 
//       desc: "Developed a Random Forest machine learning model to identify high-risk customers. The model was integrated into the CRM, allowing the support team to proactively retain 12% of at-risk accounts.", 
//       pageBreak: false 
//     },
//     { 
//       id: 2, 
//       name: "Market Basket Analysis", 
//       desc: "Implemented association rule mining algorithms on retail transaction data to optimize product placement, boosting cross-sell revenue by $150k in the first quarter.", 
//       pageBreak: false 
//     }
//   ],
//   awards: [
//     { id: 1, name: "Employee of the Year", issuer: "TechCorp Global", pageBreak: false },
//     { id: 2, name: "Best Innovation Award", issuer: "DataFlow Inc. Hackathon", pageBreak: false }
//   ],
//   certifications: [
//     { id: 1, name: "Google Data Analytics Professional", issuer: "Coursera", date: "2022", pageBreak: false },
//     { id: 2, name: "AWS Certified Data Analytics - Specialty", issuer: "Amazon Web Services", date: "2020", pageBreak: false }
//   ],
//   languages: [
//     { name: "English", level: "Native" }, 
//     { name: "Hindi", level: "Native" },
//     { name: "Spanish", level: "Intermediate" }
//   ],
//   volunteering: [
//     { 
//       id: 1, 
//       role: "Data Science Mentor", 
//       org: "Girls Who Code", 
//       date: "2019 - Present", 
//       desc: "Mentoring high school students in Python basics and data visualization concepts.", 
//       pageBreak: false 
//     }
//   ]
// };

// // --- EXTENSIVE TEMPLATE LIST ---
// export const TEMPLATES = [
//     // 1. Core / Professional
//     { id: 'professional', name: 'Clean Professional', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0d9488', recommended: true },
//     { id: 'minimal', name: 'ATS Minimal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1a1a1a', recommended: false },
//     { id: 'classic', name: 'Ivy League', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: false },
//     { id: 'formal', name: 'Structured Formal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: false },
    
//     // 2. Modern / Creative
//     { id: 'modern', name: 'Modern Emerald', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2D5A43', recommended: false },
//     { id: 'creative', name: 'Visual Portfolio', hasHeadshot: true, graphics: 'High', columns: '2', color: '#3b82f6', recommended: false },
//     { id: 'executive', name: 'Global Executive', hasHeadshot: false, graphics: 'High', columns: '1', color: '#1a1a1a', recommended: true },
//     { id: 'tech', name: 'Terminal Dark', hasHeadshot: true, graphics: 'High', columns: '1', color: '#00E5FF', recommended: true },
    
//     // 3. Blue / Indigo Series
//     { id: 'indigo-elite', name: 'Indigo Leader', hasHeadshot: false, graphics: 'High', columns: '1', color: '#004B8D', recommended: true },
//     { id: 'accent-grid', name: 'Accent Grid', hasHeadshot: false, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: false },
//     { id: 'centered-initials', name: 'Centered Initials', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: false },
//     { id: 'azure-pro', name: 'Azure Impact', hasHeadshot: false, graphics: 'High', columns: '1', color: '#2A7BBF', recommended: false },
//     { id: 'blue-frame', name: 'Blue Frame', hasHeadshot: false, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: false },
//     { id: 'bordered-elegant', name: 'Bordered Elegant', hasHeadshot: false, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: false },
//     { id: 'bubble-header', name: 'Bubble Header', hasHeadshot: false, graphics: 'High', columns: '1', color: '#3b82f6', recommended: false },
//     { id: 'cloud-soft', name: 'Cloud Minimal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0369A1', recommended: false },
//     { id: 'impact-header', name: 'Impact Header', hasHeadshot: false, graphics: 'High', columns: '1', color: '#0f172a', recommended: false },
//     { id: 'marine-clean', name: 'Marine Clean', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0097A7', recommended: false },
//     { id: 'marine-compact', name: 'Marine Compact', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0097A7', recommended: false },
//     { id: 'modern-circle', name: 'Modern Circle', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: false },
//     { id: 'navy-sidebar', name: 'Navy Modern', hasHeadshot: true, graphics: 'High', columns: '2', color: '#004B8D', recommended: false },
//     { id: 'ocean-ats', name: 'Deep Ocean', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#004B8D', recommended: false },
//     { id: 'pointer-banner', name: 'Pointer Banner', hasHeadshot: true, graphics: 'High', columns: '1', color: '#2d4a8a', recommended: false },
//     { id: 'professional-columns', name: 'Prof. Columns', hasHeadshot: false, graphics: 'Low', columns: '2', color: '#1e3a8a', recommended: false },
//     { id: 'rule-minimalist', name: 'Rule Minimalist', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: false },
//     { id: 'skyline', name: 'Skyline Creative', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2A7BBF', recommended: false },
//     { id: 'block-branding', name: 'Block Branding', hasHeadshot: false, graphics: 'High', columns: '1', color: '#2d4a8a', recommended: false },

//     // 4. Teal / Cyan / Green
//     { id: 'teal-innovator', name: 'Teal Innovator', hasHeadshot: false, graphics: 'High', columns: '2', color: '#0097A7', recommended: true },
//     { id: 'cyan-grid', name: 'Cyan Flux', hasHeadshot: true, graphics: 'High', columns: '1', color: '#0097A7', recommended: false },
//     { id: 'forest-sidebar', name: 'Forest Duo', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2D5A43', recommended: false },
//     { id: 'mint-fresh', name: 'Mint Minimal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#2D5A43', recommended: false },

//     // 5. Warm / Earth Tones
//     { id: 'amber-visual', name: 'Amber Visual', hasHeadshot: true, graphics: 'High', columns: '2', color: '#F57C00', recommended: true },
//     { id: 'brick-formal', name: 'Brick Solid', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#D32F2F', recommended: false },
//     { id: 'crimson-sidebar', name: 'Crimson Edge', hasHeadshot: true, graphics: 'High', columns: '2', color: '#D32F2F', recommended: false },
//     { id: 'mocha-creative', name: 'Mocha Visual', hasHeadshot: true, graphics: 'High', columns: '2', color: '#A79284', recommended: true },
//     { id: 'modern-gold', name: 'Beige Executive', hasHeadshot: true, graphics: 'High', columns: '2', color: '#A79284', recommended: false },
//     { id: 'orange-punch', name: 'Orange Punch', hasHeadshot: false, graphics: 'High', columns: '1', color: '#F57C00', recommended: false },
//     { id: 'ruby-creative', name: 'Ruby Creative', hasHeadshot: false, graphics: 'High', columns: '1', color: '#D32F2F', recommended: false },
//     { id: 'sand-minimal', name: 'Sandstone Clean', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#A79284', recommended: false },
//     { id: 'sunset-slim', name: 'Sunset Brief', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#F57C00', recommended: false },

//     // 6. Dark / Slate
//     { id: 'night-admin', name: 'Night Admin', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1A1C1E', recommended: false },
//     { id: 'slate-duo', name: 'Slate Split', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2D2E2E', recommended: false },
//     { id: 'soft-serif', name: 'Soft Serif', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: false },
// ];

// // --- COMPONENTS ---

// const FilterSection = ({ title, icon: Icon, children }) => (
//   <div className="mb-8">
//     <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
//       <Icon size={14} className="text-teal-400" /> {title}
//     </div>
//     <div className="space-y-3">{children}</div>
//   </div>
// );

// const CheckboxItem = ({ label, checked, onChange }) => (
//   <label className="flex items-center gap-3 cursor-pointer group">
//     <div className={`w-5 h-5 rounded flex items-center justify-center transition-all duration-200 ${checked ? 'bg-teal-500 border-teal-500' : 'bg-slate-800 border-slate-700 group-hover:border-teal-500/50'}`}>
//       {checked && <CheckCircle2 size={12} className="text-white" />}
//     </div>
//     <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
//     <span className={`text-sm font-medium transition-colors ${checked ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>{label}</span>
//   </label>
// );

// const ColorSwatch = ({ color, active, onClick }) => (
//   <button 
//     onClick={onClick}
//     className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 relative ${active ? 'border-white scale-110 shadow-lg shadow-black/20' : 'border-transparent hover:border-white/50'}`}
//     style={{ backgroundColor: color }}
//     title={color}
//   >
//     {active && <div className="absolute inset-0 flex items-center justify-center"><CheckCircle2 size={14} className="text-white drop-shadow-md" /></div>}
//   </button>
// );

// const TemplateGallery = ({ onSelectTemplate, onBack }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filters, setFilters] = useState({ headshot: 'All', graphics: 'All', columns: 'All', color: null });

//   const handleFilterChange = (category, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [category]: prev[category] === value ? 'All' : value
//     }));
//   };

//   const filteredTemplates = useMemo(() => {
//     return TEMPLATES.filter(t => {
//       const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesHeadshot = filters.headshot === 'All' || (filters.headshot === 'Yes' ? t.hasHeadshot : !t.hasHeadshot);
//       const matchesGraphics = filters.graphics === 'All' || t.graphics === filters.graphics;
//       const matchesColumns = filters.columns === 'All' || t.columns === filters.columns;
//       const matchesColor = !filters.color || t.color === filters.color;
//       return matchesSearch && matchesHeadshot && matchesGraphics && matchesColumns && matchesColor;
//     });
//   }, [searchTerm, filters]);

//   return (
//     <div className="h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900 overflow-hidden">
      
//       <div className="flex flex-1 overflow-hidden">
        
//         {/* --- LEFT SIDEBAR (Dark Mode Studio Feel) --- */}
//         <aside className="w-80 bg-[#0f172a] text-slate-300 overflow-y-auto hidden lg:flex flex-col p-8 border-r border-slate-800 shadow-2xl relative z-20">
          
//           <div className="mb-10">
//              <button onClick={onBack} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white transition-colors mb-8 group">
//                 <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform"/> Back
//              </button>
//              <h2 className="text-2xl font-black text-white tracking-tight mb-2">Filters</h2>
//              <p className="text-xs text-slate-500">Refine your search preferences</p>
//           </div>

//           <div className="flex-1">
//             <FilterSection title="Layout Structure" icon={Layout}>
//                 <CheckboxItem label="Single Column" checked={filters.columns === '1'} onChange={() => handleFilterChange('columns', '1')} />
//                 <CheckboxItem label="Two Columns" checked={filters.columns === '2'} onChange={() => handleFilterChange('columns', '2')} />
//             </FilterSection>

//             <FilterSection title="Visual Style" icon={Image}>
//                 <CheckboxItem label="With Photo" checked={filters.headshot === 'Yes'} onChange={() => handleFilterChange('headshot', 'Yes')} />
//                 <CheckboxItem label="Text Only" checked={filters.headshot === 'No'} onChange={() => handleFilterChange('headshot', 'No')} />
//                 <div className="h-2"></div>
//                 <CheckboxItem label="Graphic Heavy" checked={filters.graphics === 'High'} onChange={() => handleFilterChange('graphics', 'High')} />
//                 <CheckboxItem label="Minimalist" checked={filters.graphics === 'Low'} onChange={() => handleFilterChange('graphics', 'Low')} />
//             </FilterSection>

//             <FilterSection title="Color Palette" icon={Palette}>
//                 <div className="grid grid-cols-5 gap-3">
//                 {['#1a1a1a', '#334155', '#2563eb', '#0369A1', '#004B8D', 
//                     '#0d9488', '#0097A7', '#10b981', '#2D5A43', '#F57C00', 
//                     '#D32F2F', '#A79284', '#2D2E2E', '#1e3a8a', '#00E5FF'].map(c => (
//                     <ColorSwatch 
//                     key={c} 
//                     color={c} 
//                     active={filters.color === c} 
//                     onClick={() => setFilters(prev => ({...prev, color: prev.color === c ? null : c}))} 
//                     />
//                 ))}
//                 </div>
//             </FilterSection>
//           </div>

//           <div className="mt-8 pt-8 border-t border-slate-800">
//              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
//                 <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase mb-2">
//                     <Zap size={14}/> Pro Tip
//                 </div>
//                 <p className="text-xs text-slate-400 leading-relaxed">
//                     ATS systems prefer simple, single-column layouts for high-volume corporate jobs.
//                 </p>
//              </div>
//           </div>
//         </aside>

//         {/* --- MAIN CONTENT AREA --- */}
//         <main className="flex-1 overflow-y-auto bg-slate-50 relative">
          
//           {/* Subtle Grid Background */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

//           <div className="p-8 md:p-12 max-w-[1600px] mx-auto relative z-10">
            
//             {/* Header */}
//             <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
//                 <div>
//                     <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
//                         Choose a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Template</span>
//                     </h1>
//                     <p className="text-slate-500 text-lg font-medium">
//                         50+ Professionally Designed Layouts. Verified by Recruiters.
//                     </p>
//                 </div>
                
//                 {/* Search Bar */}
//                 <div className="relative w-full md:w-80 group">
//                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors" size={18} />
//                     <input 
//                         type="text" 
//                         placeholder="Search templates (e.g. 'Modern')..." 
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="w-full bg-white border border-slate-200 rounded-full py-3 pl-12 pr-6 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
//                     />
//                 </div>
//             </div>

//             {/* Colorful Stats Row */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
//                 {[
//                     { icon: Shield, label: "ATS Optimized", sub: "100% Readable", color: "text-emerald-700", bg: "bg-emerald-100", border: "border-emerald-200" },
//                     { icon: Layout, label: "44 Layouts", sub: "For every role", color: "text-blue-700", bg: "bg-blue-100", border: "border-blue-200" },
//                     { icon: MousePointer2, label: "Click to Edit", sub: "Live Preview", color: "text-purple-700", bg: "bg-purple-100", border: "border-purple-200" },
//                     { icon: Zap, label: "AI Powered", sub: "Smart Formatting", color: "text-orange-700", bg: "bg-orange-100", border: "border-orange-200" },
//                 ].map((stat, i) => (
//                     <div key={i} className={`p-4 rounded-2xl border ${stat.border} ${stat.bg} flex items-center gap-4 shadow-sm`}>
//                         <div className={`p-2 bg-white rounded-xl ${stat.color} shadow-sm`}><stat.icon size={20}/></div>
//                         <div>
//                             <div className={`text-sm font-black ${stat.color}`}>{stat.label}</div>
//                             <div className={`text-[10px] font-bold uppercase tracking-wider opacity-70 ${stat.color}`}>{stat.sub}</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Gallery Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-20">
//               {filteredTemplates.map(tpl => (
//                 <div key={tpl.id} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-900/5 flex flex-col h-full relative hover:-translate-y-1">
                  
//                   {/* Card Header */}
//                   <div className="px-6 py-4 border-b border-slate-50 flex justify-between items-center bg-white">
//                     <h3 className="text-sm font-bold text-slate-900">{tpl.name}</h3>
//                     {tpl.recommended && (
//                         <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
//                             <Star size={8} fill="currentColor" /> Top Pick
//                         </span>
//                     )}
//                   </div>

//                   {/* Thumbnail */}
//                   <div 
//                     className="relative w-full aspect-[210/260] bg-slate-100 overflow-hidden cursor-pointer"
//                     onClick={() => onSelectTemplate(tpl.id)}
//                   >
//                     {/* Render the Resume Scaled Down */}
//                     <div className="origin-top-left transform scale-[0.45] w-[222%] h-[222%] pointer-events-none select-none p-8 bg-white shadow-inner">
//                         <ResumeThumbnail templateId={tpl.id} data={DUMMY_DATA} />
//                     </div>

//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
//                         <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-teal-50 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl scale-105">
//                             Use Template
//                         </button>
//                     </div>
//                   </div>

//                   {/* Card Footer Info */}
//                   <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
//                       <div className="flex gap-3">
//                           <span>{tpl.columns} Column</span>
//                           <span>•</span>
//                           <span>{tpl.graphics === 'High' ? 'Graphic' : 'Clean'}</span>
//                       </div>
//                       <div className="w-3 h-3 rounded-full border border-slate-300" style={{backgroundColor: tpl.color}}></div>
//                   </div>
                  
//                 </div>
//               ))}
//             </div>

//             {filteredTemplates.length === 0 && (
//                 <div className="py-20 text-center">
//                     <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
//                         <Search size={40} />
//                     </div>
//                     <h3 className="text-xl font-bold text-slate-900">No templates found</h3>
//                     <p className="text-slate-500">Try adjusting your filters to see more results.</p>
//                 </div>
//             )}

//           </div>
//         </main>

//       </div>
//     </div>
//   );
// };

// export default TemplateGallery;


import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Search, Layout, Image, Palette, CheckCircle2, SlidersHorizontal, 
  Star, Zap, Shield, MousePointer2, Brain
} from 'lucide-react';
import ResumeThumbnail from "../resume/ResumeThumbnail"; 

// --- DUMMY DATA FOR PREVIEWS ---
const DUMMY_DATA = {
  personal: {
    name: "POOJA BANSAL",
    title: "SENIOR DATA ANALYST",
    email: "p.bansal@datasense.com",
    phone: "+91 98765 43210",
    location: "Gurgaon, India",
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
  
  // ==========================================
  // 2. TECH, DATA & DEVELOPMENT (Structured, skill-focused, terminal aesthetics)
  // ==========================================
  { id: 'software-engineer', name: 'Software Engineer', hasHeadshot: true, graphics: 'High', columns: '2', color: '#00695c', recommended: true },
  { id: 'data-scientist', name: 'Data Scientist', hasHeadshot: false, graphics: 'low', columns: '2', color: '#3b82f6', recommended: true },
  { id: 'tech', name: 'Terminal Dark', hasHeadshot: true, graphics: 'High', columns: '2', color: '#00E5FF', recommended: false },
  { id: 'developer', name: 'Dev Console', hasHeadshot: true, graphics: 'High', columns: '2', color: '#282c34', recommended: true },
  { id: 'coder', name: 'Coder Terminal', hasHeadshot: true, graphics: 'High', columns: '2', color: '#0d1117', recommended: false },
  { id: 'cyan-grid', name: 'Cyan Flux', hasHeadshot: true, graphics: 'High', columns: '2', color: '#0097A7', recommended: false },
  { id: 'accent-grid', name: 'Accent Grid', hasHeadshot: true, graphics: 'low', columns: '2', color: '#1e3a8a', recommended: false },
  { id: 'engineer', name: 'Industrial Eng.', hasHeadshot: false, graphics: 'Low', columns: '2', color: '#2563eb', recommended: false },

  // ==========================================
  // 3. EXECUTIVE & CORPORATE (Bold headers, clean lines, professional colors)
  // ==========================================
  { id: 'executive', name: 'Global Executive', hasHeadshot: false, graphics: 'low', columns: '1', color: '#1a1a1a', recommended: true },
  { id: 'business-analyst', name: 'Business Analyst', hasHeadshot: false, graphics: 'High', columns: '2', color: '#2e7d32', recommended: true },
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
  { id: 'Artistic', name: 'Artistic Portfolio', hasHeadshot: true, graphics: 'High', columns: '2', color: '#1e1b4b', recommended: false },
  { id: 'startup', name: 'Startup Gradient', hasHeadshot: true, graphics: 'High', columns: '2', color: '#6366f1', recommended: false },
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
    <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
      <Icon size={14} className="text-teal-400" /> {title}
    </div>
    <div className="space-y-3">{children}</div>
  </div>
);

const CheckboxItem = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div className={`w-5 h-5 rounded flex items-center justify-center transition-all duration-200 ${checked ? 'bg-teal-500 border-teal-500' : 'bg-slate-800 border-slate-700 group-hover:border-teal-500/50'}`}>
      {checked && <CheckCircle2 size={12} className="text-white" />}
    </div>
    <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
    <span className={`text-sm font-medium transition-colors ${checked ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>{label}</span>
  </label>
);

const ColorSwatch = ({ color, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 relative ${active ? 'border-white scale-110 shadow-lg shadow-black/20' : 'border-transparent hover:border-white/50'}`}
    style={{ backgroundColor: color }}
    title={color}
  >
    {active && <div className="absolute inset-0 flex items-center justify-center"><CheckCircle2 size={14} className="text-white drop-shadow-md" /></div>}
  </button>
);

const TemplateGallery = ({ onSelectTemplate, onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ headshot: 'All', graphics: 'All', columns: 'All', color: null });

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
      const matchesGraphics = filters.graphics === 'All' || t.graphics === filters.graphics;
      const matchesColumns = filters.columns === 'All' || t.columns === filters.columns;
      const matchesColor = !filters.color || t.color === filters.color;
      return matchesSearch && matchesHeadshot && matchesGraphics && matchesColumns && matchesColor;
    });
  }, [searchTerm, filters]);

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900 overflow-hidden">
      
      <div className="flex flex-1 overflow-hidden">
        
        {/* --- LEFT SIDEBAR (Dark Mode Studio Feel) --- */}
        <aside className="w-80 bg-[#0f172a] text-slate-300 overflow-y-auto hidden lg:flex flex-col p-8 border-r border-slate-800 shadow-2xl relative z-20">
          
          <div className="mb-10">
             <button onClick={onBack} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white transition-colors mb-8 group">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform"/> Back
             </button>
             <h2 className="text-2xl font-black text-white tracking-tight mb-2">Filters</h2>
             <p className="text-xs text-slate-500">Refine your search preferences</p>
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
      // Dark / Grays
      '#1a1a1a', '#334155', '#0f172a', '#1A1C1E', '#2D2E2E', '#78716c',
      
      // Blues
      '#2563eb', '#3b82f6', '#0369A1', '#2A7BBF', '#004B8D', '#1e3a8a', '#2d4a8a',
      
      // Cyans / Teals / Greens
      '#00E5FF', '#0097A7', '#0d9488', '#006064', '#00695c', '#004d40', '#2D5A43', '#2e7d32',
      
      // Warm (Reds, Oranges, Browns)
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

          <div className="mt-8 pt-8 border-t border-slate-800">
             <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase mb-2">
                    <Brain size={14}/> Pro Tip
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                    ATS systems prefer simple, single-column layouts for high-volume corporate jobs.
                </p>
             </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="flex-1 overflow-y-auto bg-slate-50 relative">
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          <div className="p-8 md:p-12 max-w-[1600px] mx-auto relative z-10">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
                        Choose a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Template</span>
                    </h1>
                    <p className="text-slate-500 text-lg font-medium">
                        70+ Professionally Designed Layouts. Verified by Recruiters.
                    </p>
                </div>
                
                {/* Search Bar */}
                <div className="relative w-full md:w-80 group">
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

            {/* Colorful Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                    { icon: Shield, label: "ATS Optimized", sub: "100% Readable", color: "text-emerald-700", bg: "bg-emerald-100", border: "border-emerald-200" },
                    { icon: Layout, label: "70+ Layouts", sub: "For every role", color: "text-blue-700", bg: "bg-blue-100", border: "border-blue-200" },
                    { icon: MousePointer2, label: "Click to Edit", sub: "Live Preview", color: "text-purple-700", bg: "bg-purple-100", border: "border-purple-200" },
                    { icon: Brain, label: "AI Powered", sub: "Smart Enhancements", color: "text-orange-700", bg: "bg-orange-100", border: "border-orange-200" },
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
              {filteredTemplates.map(tpl => (
                <div key={tpl.id} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-900/5 flex flex-col h-full relative hover:-translate-y-1">
                  
                  {/* Card Header */}
                  <div className="px-6 py-4 border-b border-slate-50 flex justify-between items-center bg-white">
                    <h3 className="text-sm font-bold text-slate-900">{tpl.name}</h3>
                    {tpl.recommended && (
                        <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                            <Star size={8} fill="currentColor" /> Top Pick
                        </span>
                    )}
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
                  <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <div className="flex gap-3">
                          <span>{tpl.columns} Column</span>
                          <span>•</span>
                          <span>{tpl.graphics === 'High' ? 'Graphic' : 'Clean'}</span>
                      </div>
                      <div className="w-3 h-3 rounded-full border border-slate-300" style={{backgroundColor: tpl.color}}></div>
                  </div>
                  
                </div>
              ))}
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