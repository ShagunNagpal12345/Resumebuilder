
// // // // // // // // // // import React, { useState, useRef, useMemo } from 'react';
// // // // // // // // // // import { 
// // // // // // // // // //   Upload, Download, ArrowLeft, Plus, Trash2, User, Briefcase, 
// // // // // // // // // //   GraduationCap, X, CheckCircle, Award, Globe, Layers, Heart, Eye, 
// // // // // // // // // //   Image as ImageIcon, Palette, Cpu, Sparkles, Zap, Search, Filter,
// // // // // // // // // //   Archive, Save, Layout, ChevronRight, BarChart3, ShieldCheck, FileJson,
// // // // // // // // // //   PenTool, Star, MousePointer2, FileCheck, ArrowRight, CheckCircle2
// // // // // // // // // // } from 'lucide-react';

// // // // // // // // // // // Ensure this path matches your project structure
// // // // // // // // // // import ResumePreview from "../../components/resume/ResumePreview"; 
// // // // // // // // // // import html2canvas from 'html2canvas';
// // // // // // // // // // import jsPDF from 'jspdf';

// // // // // // // // // // // --- IMPORT THE NEW LANDING VIEW ---
// // // // // // // // // // import ResumeBuilderLanding from '../landing/ResumeBuilderLanding'; 

// // // // // // // // // // // --- DUMMY DATA FOR LIVE PREVIEWS ---
// // // // // // // // // // const DUMMY_DATA = {
// // // // // // // // // //   personal: {
// // // // // // // // // //     name: "POOJA BANSAL",
// // // // // // // // // //     title: "SENIOR DATA ANALYST",
// // // // // // // // // //     email: "P.BANSAL@datasense.com",
// // // // // // // // // //     phone: "+1 555 0123 8765",
// // // // // // // // // //     location: "Gurgaon, India",
// // // // // // // // // //     summary: "Strategic and detail-oriented Data Analyst with 8+ years of experience in translating complex datasets into actionable business insights. Proven track record in optimizing operational efficiency and driving data-led decisions."
// // // // // // // // // //   },
// // // // // // // // // //   experience: [
// // // // // // // // // //     { id: 1, role: "Lead Data Analyst", company: "TechCorp Solutions", date: "2020 - Present", desc: "Spearheaded a team of 5 analysts to deliver monthly performance reports. Reduced data processing time by 40% using automated Python scripts and SQL optimization.", pageBreak: false },
// // // // // // // // // //     { id: 2, role: "Junior Analyst", company: "DataFlow Inc.", date: "2017 - 2020", desc: "Analyzed consumer behavior patterns for top-tier retail clients. Developed 15+ custom SQL dashboards for real-time tracking of KPIs.", pageBreak: false }
// // // // // // // // // //   ],
// // // // // // // // // //   education: [
// // // // // // // // // //     { id: 1, degree: "M.S. in Statistics", school: "Columbia University", date: "2017", pageBreak: false },
// // // // // // // // // //     { id: 2, degree: "B.S. in Mathematics", school: "NYU", date: "2015", pageBreak: false }
// // // // // // // // // //   ],
// // // // // // // // // //   skills: { 
// // // // // // // // // //     core: ["Data Strategy", "SQL", "Python", "Tableau", "Machine Learning"], 
// // // // // // // // // //     technical: ["R Programming", "PowerBI", "AWS Data Pipeline", "TensorFlow"], 
// // // // // // // // // //     soft: ["Leadership", "Stakeholder Management", "Public Speaking"] 
// // // // // // // // // //   },
// // // // // // // // // //   projects: [{ id: 1, name: "Predictive Sales Model", desc: "Built an XGBoost model that predicted quarterly sales with 94% accuracy across 200+ retail locations.", pageBreak: false }],
// // // // // // // // // //   awards: [{ id: 1, name: "Employee of the Year", issuer: "TechCorp Global", pageBreak: false }],
// // // // // // // // // //   certifications: [{ id: 1, name: "Google Data Analytics Professional", issuer: "Coursera", date: "2022", pageBreak: false }],
// // // // // // // // // //   languages: [{ name: "English", level: "Native" }, { name: "Spanish", level: "Fluent" }],
// // // // // // // // // //   volunteering: [{ id: 1, role: "Coding Tutor", org: "Local Library", date: "2021", desc: "Taught basic Python and data literacy to local high school students.", pageBreak: false }]
// // // // // // // // // // };

// // // // // // // // // // // --- THUMBNAIL COMPONENT ---
// // // // // // // // // // const ResumeThumbnail = ({ templateId }) => (
// // // // // // // // // //   <div className="w-full aspect-[210/320] overflow-hidden relative bg-white pointer-events-none select-none border-b border-slate-100 shadow-inner">
// // // // // // // // // //     <div 
// // // // // // // // // //       className="absolute top-0 left-0 origin-top-left transform scale-[0.43] md:scale-[0.45] lg:scale-[0.42] xl:scale-[0.41]"
// // // // // // // // // //       style={{ 
// // // // // // // // // //         width: '260mm', 
// // // // // // // // // //         height: '200mm',
// // // // // // // // // //       }}
// // // // // // // // // //     >
// // // // // // // // // //       <ResumePreview data={DUMMY_DATA} template={templateId} />
// // // // // // // // // //     </div>
// // // // // // // // // //   </div>
// // // // // // // // // // );

// // // // // // // // // // const TEMPLATES = [
// // // // // // // // // //     { id: 'professional', name: 'Clean Professional', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0d9488', recommended: true },
// // // // // // // // // //     { id: 'minimal', name: 'ATS Minimal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1a1a1a', recommended: false },
// // // // // // // // // //     { id: 'classic', name: 'Ivy League', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: false },
// // // // // // // // // //     { id: 'indigo-elite', name: 'Indigo Leader', hasHeadshot: false, graphics: 'High', columns: '1', color: '#004B8D', recommended: true },
// // // // // // // // // //     { id: 'accent-grid', name: 'Accent Grid', hasHeadshot: false, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: false },
// // // // // // // // // //     { id: 'centered-initials', name: 'Centered Initials', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: false },
// // // // // // // // // //     { id: 'executive', name: 'Global Executive', hasHeadshot: false, graphics: 'High', columns: '1', color: '#1a1a1a', recommended: true },
// // // // // // // // // //     { id: 'tech', name: 'Terminal Dark', hasHeadshot: true, graphics: 'High', columns: '1', color: '#00E5FF', recommended: true },
// // // // // // // // // //     { id: 'creative', name: 'Visual Portfolio', hasHeadshot: true, graphics: 'High', columns: '2', color: '#3b82f6', recommended: false },
// // // // // // // // // //     { id: 'modern', name: 'Modern Emerald', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2D5A43', recommended: false },
// // // // // // // // // //     { id: 'teal-innovator', name: 'Teal Innovator', hasHeadshot: false, graphics: 'High', columns: '2', color: '#0097A7', recommended: true },
// // // // // // // // // //     { id: 'amber-visual', name: 'Amber Visual', hasHeadshot: true, graphics: 'High', columns: '2', color: '#F57C00', recommended: true },
// // // // // // // // // // ];

// // // // // // // // // // const ResumeBuilder = ({ userProfile, setUserProfile }) => {
// // // // // // // // // //   // --- UPDATED: Default mode is now 'landing' to show the start screen first ---
// // // // // // // // // //   const [mode, setMode] = useState('landing'); 
// // // // // // // // // //   const [activeSection, setActiveSection] = useState('personal');
// // // // // // // // // //   const [selectedTemplate, setSelectedTemplate] = useState('professional');
// // // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // // //   const [filters, setFilters] = useState({ headshot: 'All', graphics: 'All', columns: 'All', color: null });
// // // // // // // // // //   const previewRef = useRef(null);

// // // // // // // // // //   const [resume, setResume] = useState({
// // // // // // // // // //     personal: { 
// // // // // // // // // //         name: userProfile?.name || "", 
// // // // // // // // // //         title: userProfile?.headline || "", 
// // // // // // // // // //         email: userProfile?.email || "", 
// // // // // // // // // //         phone: userProfile?.phone || "", 
// // // // // // // // // //         location: userProfile?.location || "", 
// // // // // // // // // //         summary: userProfile?.summary || "", 
// // // // // // // // // //         photo: null 
// // // // // // // // // //     },
// // // // // // // // // //     experience: userProfile?.experience || [], 
// // // // // // // // // //     education: userProfile?.education || [], 
// // // // // // // // // //     projects: userProfile?.projects || [], 
// // // // // // // // // //     certifications: userProfile?.certifications || [], 
// // // // // // // // // //     languages: [], 
// // // // // // // // // //     awards: userProfile?.awards || [], 
// // // // // // // // // //     volunteering: [],
// // // // // // // // // //     skills: userProfile?.skills || { core: [], technical: [], soft: [] }
// // // // // // // // // //   });

// // // // // // // // // //   const addItem = (sec) => {
// // // // // // // // // //     const newId = Date.now() + Math.random(); 
// // // // // // // // // //     const defaults = {
// // // // // // // // // //       experience: { id: newId, role: "", company: "", date: "", desc: "", pageBreak: false },
// // // // // // // // // //       education: { id: newId, degree: "", school: "", date: "", pageBreak: false },
// // // // // // // // // //       projects: { id: newId, name: "", desc: "", pageBreak: false },
// // // // // // // // // //       certifications: { id: newId, name: "", issuer: "", date: "", pageBreak: false },
// // // // // // // // // //       languages: { id: newId, name: "", level: "Fluent" },
// // // // // // // // // //       awards: { id: newId, name: "", issuer: "", pageBreak: false },
// // // // // // // // // //       volunteering: { id: newId, role: "", org: "", date: "", desc: "", pageBreak: false }
// // // // // // // // // //     };
// // // // // // // // // //     if (sec === 'skills') return;
// // // // // // // // // //     setResume({ ...resume, [sec]: [...resume[sec], defaults[sec]] });
// // // // // // // // // //   };

// // // // // // // // // //   const updateItem = (sec, idx, field, val) => {
// // // // // // // // // //     const list = [...resume[sec]];
// // // // // // // // // //     list[idx][field] = val;
// // // // // // // // // //     setResume({ ...resume, [sec]: list });
// // // // // // // // // //   };

// // // // // // // // // //   const removeItem = (sec, id) => {
// // // // // // // // // //     setResume({ ...resume, [sec]: resume[sec].filter(item => item.id !== id) });
// // // // // // // // // //   };

// // // // // // // // // //   const handleSaveToArchive = () => {
// // // // // // // // // //     const archiveData = { ...resume, template: selectedTemplate, timestamp: new Date().toISOString() };
// // // // // // // // // //     const currentArchive = JSON.parse(localStorage.getItem('resume_archive') || '[]');
// // // // // // // // // //     localStorage.setItem('resume_archive', JSON.stringify([...currentArchive, archiveData]));
// // // // // // // // // //     alert("Resume saved to Archive!");
// // // // // // // // // //   };

// // // // // // // // // //   const filteredTemplates = useMemo(() => {
// // // // // // // // // //     return TEMPLATES.filter(t => {
// // // // // // // // // //       const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
// // // // // // // // // //       const matchesHeadshot = filters.headshot === 'All' || (filters.headshot === 'Yes' ? t.hasHeadshot : !t.hasHeadshot);
// // // // // // // // // //       const matchesGraphics = filters.graphics === 'All' || t.graphics === filters.graphics;
// // // // // // // // // //       const matchesColumns = filters.columns === 'All' || t.columns === filters.columns;
// // // // // // // // // //       const matchesColor = !filters.color || t.color === filters.color;
// // // // // // // // // //       return matchesSearch && matchesHeadshot && matchesGraphics && matchesColumns && matchesColor;
// // // // // // // // // //     });
// // // // // // // // // //   }, [searchTerm, filters]);

// // // // // // // // // //   const handleDownloadPDF = async () => {
// // // // // // // // // //     const element = previewRef.current;
// // // // // // // // // //     if (!element) return;
// // // // // // // // // //     const canvas = await html2canvas(element, { scale: 2, useCORS: true });
// // // // // // // // // //     const imgData = canvas.toDataURL('image/png');
// // // // // // // // // //     const pdf = new jsPDF('p', 'mm', 'a4');
// // // // // // // // // //     const pdfWidth = pdf.internal.pageSize.getWidth();
// // // // // // // // // //     const pdfHeight = pdf.internal.pageSize.getHeight();
// // // // // // // // // //     const finalHeight = (canvas.height * pdfWidth) / canvas.width;

// // // // // // // // // //     let heightLeft = finalHeight;
// // // // // // // // // //     let position = 0;

// // // // // // // // // //     pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, finalHeight);
// // // // // // // // // //     heightLeft -= pdfHeight;

// // // // // // // // // //     while (heightLeft >= 0) {
// // // // // // // // // //       position = heightLeft - finalHeight;
// // // // // // // // // //       pdf.addPage();
// // // // // // // // // //       pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, finalHeight);
// // // // // // // // // //       heightLeft -= pdfHeight;
// // // // // // // // // //     }
// // // // // // // // // //     pdf.save(`Resume_${resume.personal.name || 'Export'}.pdf`);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="h-screen bg-[#F8FAFC] flex flex-col overflow-hidden font-['Inter',_sans-serif] relative">
      
// // // // // // // // // //       {/* --- 1. LANDING MODE (Shows First) --- */}
// // // // // // // // // //       {mode === 'landing' && (
// // // // // // // // // //         <ResumeBuilderLanding onStart={() => setMode('selection')} />
// // // // // // // // // //       )}

// // // // // // // // // //       {/* --- 2. SELECTION MODE (GALLERY) --- */}
// // // // // // // // // //       {mode === 'selection' && (
// // // // // // // // // //         <>
// // // // // // // // // //         <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
// // // // // // // // // //             <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-teal-50 rounded-full blur-[120px]" />
// // // // // // // // // //             <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-emerald-50 rounded-full blur-[120px]" />
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="flex-1 overflow-y-auto p-12 custom-scrollbar relative z-10">
// // // // // // // // // //           <div className="max-w-7xl mx-auto">
            
// // // // // // // // // //             {/* Header Section */}
// // // // // // // // // //             <header className="mb-12">
// // // // // // // // // //               {/* Back Button to Landing Page */}
// // // // // // // // // //               <button onClick={() => setMode('landing')} className="mb-6 flex items-center gap-2 text-xs font-bold uppercase text-slate-400 hover:text-slate-900 transition-colors">
// // // // // // // // // //                 <ArrowLeft size={16} /> Back to Landing
// // // // // // // // // //               </button>
              
// // // // // // // // // //               <div className="flex items-center gap-2 text-[#0d9488] font-bold text-xs uppercase tracking-widest mb-4">
// // // // // // // // // //                   <Sparkles size={16}/> <span>Intelligent Template Engine v4.0</span>
// // // // // // // // // //               </div>
// // // // // // // // // //               <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
// // // // // // // // // //                 Craft your <span className="text-[#0d9488]">Career Story</span>
// // // // // // // // // //               </h1>
// // // // // // // // // //               <p className="text-xl font-medium text-slate-500 max-w-2xl">
// // // // // // // // // //                 Choose from our library of 40+ ATS-optimized templates designed by recruitment experts.
// // // // // // // // // //               </p>

// // // // // // // // // //               {/* Stats Bar */}
// // // // // // // // // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-white/60 backdrop-blur-xl border border-white p-6 rounded-[2.5rem] shadow-sm">
// // // // // // // // // //                   <div className="flex items-center gap-4">
// // // // // // // // // //                       <div className="bg-teal-50 p-3 rounded-2xl text-[#0d9488]"><Layout size={20}/></div>
// // // // // // // // // //                       <div><div className="text-sm font-black text-slate-900">42 Layouts</div><div className="text-[10px] text-slate-400 font-bold uppercase">Professional</div></div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <div className="flex items-center gap-4">
// // // // // // // // // //                       <div className="bg-emerald-50 p-3 rounded-2xl text-[#10b981]"><ShieldCheck size={20}/></div>
// // // // // // // // // //                       <div><div className="text-sm font-black text-slate-900">ATS Optimized</div><div className="text-[10px] text-slate-400 font-bold uppercase">Verified</div></div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <div className="flex items-center gap-4">
// // // // // // // // // //                       <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600"><FileJson size={20}/></div>
// // // // // // // // // //                       <div><div className="text-sm font-black text-slate-900">Multi-Format</div><div className="text-[10px] text-slate-400 font-bold uppercase">PDF & Web</div></div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <div className="flex items-center gap-4">
// // // // // // // // // //                       <div className="bg-orange-50 p-3 rounded-2xl text-orange-600"><Zap size={20}/></div>
// // // // // // // // // //                       <div><div className="text-sm font-black text-slate-900">Live Preview</div><div className="text-[10px] text-slate-400 font-bold uppercase">Real-time</div></div>
// // // // // // // // // //                   </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </header>

// // // // // // // // // //             {/* Filter Bar */}
// // // // // // // // // //             <div className="bg-white/80 backdrop-blur-md p-4 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-white mb-12 flex flex-wrap items-center gap-6 sticky top-0 z-30">
// // // // // // // // // //               <div className="flex items-center gap-4 pl-4">
// // // // // // // // // //                 <Filter size={18} className="text-slate-400" />
// // // // // // // // // //                 <FilterDropdown label="Headshot" options={['All', 'Yes', 'No']} value={filters.headshot} onChange={(v)=>setFilters({...filters, headshot: v})} />
// // // // // // // // // //                 <FilterDropdown label="Graphics" options={['All', 'High', 'Low']} value={filters.graphics} onChange={(v)=>setFilters({...filters, graphics: v})} />
// // // // // // // // // //                 <FilterDropdown label="Columns" options={['All', '1', '2']} value={filters.columns} onChange={(v)=>setFilters({...filters, columns: v})} />
// // // // // // // // // //               </div>
// // // // // // // // // //               <div className="h-8 w-px bg-slate-200 mx-2" />
// // // // // // // // // //               <div className="flex items-center gap-3">
// // // // // // // // // //                 <div className="flex gap-2">
// // // // // // // // // //                     {['#ffffff', '#1a1a1a', '#1A1C1E', '#0f172a', '#2D2E2E', '#334155', 
// // // // // // // // // //       '#0d9488', '#2563eb', '#0369A1', '#2A7BBF', '#004B8D', '#1e3a8a', 
// // // // // // // // // //       '#2d4a8a', '#0097A7', '#00E5FF', '#2D5A43', '#A79284', '#F57C00', '#D32F2F'].map(c => (
// // // // // // // // // //                         <button 
// // // // // // // // // //                             key={c} 
// // // // // // // // // //                             onClick={() => setFilters({...filters, color: filters.color === c ? null : c})}
// // // // // // // // // //                             className={`w-8 h-8 rounded-full border-4 transition-all hover:scale-110 ${filters.color === c ? 'border-[#0d9488] scale-110' : 'border-white shadow-sm'}`}
// // // // // // // // // //                             style={{ backgroundColor: c }}
// // // // // // // // // //                         />
// // // // // // // // // //                     ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 text-left">
// // // // // // // // // //               {filteredTemplates.map(tpl => (
// // // // // // // // // //                 <div key={tpl.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 relative flex flex-col group border border-slate-100 transform hover:-translate-y-2">
                  
// // // // // // // // // //                   {/* Template Info Overlay */}
// // // // // // // // // //                   <div className="px-6 py-4 bg-white flex justify-between items-center">
// // // // // // // // // //                     <div>
// // // // // // // // // //                         <span className="text-xs font-black uppercase text-slate-800 tracking-widest">{tpl.name}</span>
// // // // // // // // // //                         <div className="flex gap-2 mt-1">
// // // // // // // // // //                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{tpl.columns} Column</span>
// // // // // // // // // //                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">•</span>
// // // // // // // // // //                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{tpl.graphics === 'High' ? 'Graphic' : 'Minimal'}</span>
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     {tpl.recommended && (
// // // // // // // // // //                         <span className="bg-[#10b981] text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter shadow-lg shadow-emerald-200">Recommended</span>
// // // // // // // // // //                     )}
// // // // // // // // // //                   </div>

// // // // // // // // // //                   <div className="relative w-full aspect-[210/230] bg-slate-50 overflow-hidden">
// // // // // // // // // //                     <ResumeThumbnail templateId={tpl.id} />
// // // // // // // // // //                     <div className="absolute inset-0 bg-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
// // // // // // // // // //                   </div>
                  
// // // // // // // // // //                   <div className="p-8 flex justify-center bg-white border-t border-slate-50">
// // // // // // // // // //                       <button 
// // // // // // // // // //                           onClick={() => { setSelectedTemplate(tpl.id); setMode('editor'); }}
// // // // // // // // // //                           className="bg-[#0d9488] text-white px-10 py-4 rounded-2xl font-black uppercase text-xs w-full hover:bg-[#0b7a6f] transition-all shadow-lg active:scale-95 group-hover:tracking-[0.1em]"
// // // // // // // // // //                       >
// // // // // // // // // //                           Build with this style
// // // // // // // // // //                       </button>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //         </>
// // // // // // // // // //       )}

// // // // // // // // // //       {/* --- 3. EDITOR MODE --- */}
// // // // // // // // // //       {mode === 'editor' && (
// // // // // // // // // //         <div className="flex-1 flex overflow-hidden">
// // // // // // // // // //           <div className="w-24 bg-[#0f172a] flex flex-col items-center py-10 gap-8 text-slate-500 shrink-0 shadow-2xl z-50">
// // // // // // // // // //              <NavButton id="personal" icon={<User size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // // //              <NavButton id="experience" icon={<Briefcase size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // // //              <NavButton id="projects" icon={<Layers size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // // //              <NavButton id="education" icon={<GraduationCap size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // // //              <NavButton id="skills" icon={<Cpu size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // // //              <NavButton id="certifications" icon={<CheckCircle size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // // //              <NavButton id="languages" icon={<Globe size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // // //              <NavButton id="awards" icon={<Award size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // // //              <NavButton id="volunteering" icon={<Heart size={24}/>} active={activeSection} onClick={setActiveSection} />
             
// // // // // // // // // //              <div className="mt-auto flex flex-col gap-8 items-center border-t border-slate-800 pt-10 w-full">
// // // // // // // // // //                 <button onClick={() => setMode('selection')} className="text-slate-500 hover:text-white transition-colors" title="Gallery"><Layout size={24}/></button>
// // // // // // // // // //                 <button onClick={handleSaveToArchive} className="text-slate-500 hover:text-[#10b981] transition-colors" title="Save Archive"><Archive size={24}/></button>
// // // // // // // // // //              </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="w-[500px] bg-white border-r flex flex-col shadow-2xl z-40 text-left">
// // // // // // // // // //              <div className="p-8 border-b flex justify-between items-center sticky top-0 bg-white z-10">
// // // // // // // // // //                 <button onClick={() => setMode('selection')} className="flex items-center gap-2 text-xs font-black uppercase text-slate-400 hover:text-slate-900 tracking-widest"><ArrowLeft size={16}/> Gallery</button>
// // // // // // // // // //                 <button onClick={handleDownloadPDF} className="bg-[#0d9488] text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase flex items-center gap-2 shadow-xl hover:bg-[#0b7a6f] transition-all"><Download size={16}/> Export PDF</button>
// // // // // // // // // //              </div>
             
// // // // // // // // // //              <div className="flex-1 overflow-y-auto p-12 custom-scrollbar pb-32">
// // // // // // // // // //                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-slate-900">{activeSection}</h2>
                
// // // // // // // // // //                 {activeSection === 'personal' && (
// // // // // // // // // //                     <div className="space-y-8">
// // // // // // // // // //                         <Input label="Full Name" value={resume.personal.name} onChange={(v) => setResume({...resume, personal: {...resume.personal, name: v}})} />
// // // // // // // // // //                         <Input label="Professional Title" value={resume.personal.title} onChange={(v) => setResume({...resume, personal: {...resume.personal, title: v}})} />
// // // // // // // // // //                         <div className="grid grid-cols-2 gap-6">
// // // // // // // // // //                             <Input label="Email" value={resume.personal.email} onChange={(v) => setResume({...resume, personal: {...resume.personal, email: v}})} />
// // // // // // // // // //                             <Input label="Phone" value={resume.personal.phone} onChange={(v) => setResume({...resume, personal: {...resume.personal, phone: v}})} />
// // // // // // // // // //                         </div>
// // // // // // // // // //                         <Input label="Location" value={resume.personal.location} onChange={(v) => setResume({...resume, personal: {...resume.personal, location: v}})} />
// // // // // // // // // //                         <TextArea label="Professional Summary" value={resume.personal.summary} onChange={(v) => setResume({...resume, personal: {...resume.personal, summary: v}})} />
// // // // // // // // // //                     </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {activeSection === 'skills' && (
// // // // // // // // // //                     <div className="space-y-8">
// // // // // // // // // //                         <TextArea label="Technical Skills (Comma separated)" value={resume.skills.technical.join(', ')} onChange={(v) => setResume({...resume, skills: {...resume.skills, technical: v.split(',').map(s=>s.trim())}})} />
// // // // // // // // // //                         <TextArea label="Core / Soft Skills (Comma separated)" value={resume.skills.core.join(', ')} onChange={(v) => setResume({...resume, skills: {...resume.skills, core: v.split(',').map(s=>s.trim())}})} />
// // // // // // // // // //                     </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {['experience', 'projects', 'education', 'certifications', 'awards', 'volunteering', 'languages'].includes(activeSection) && (
// // // // // // // // // //                     <div className="space-y-10">
// // // // // // // // // //                         {resume[activeSection].map((item, i) => (
// // // // // // // // // //                             <div key={item.id} className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] relative group shadow-sm transition-all hover:bg-slate-100/50">
// // // // // // // // // //                                 <button onClick={() => removeItem(activeSection, item.id)} className="absolute -top-3 -right-3 bg-rose-500 text-white p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"><Trash2 size={16}/></button>
                                
// // // // // // // // // //                                 {activeSection === 'experience' && (
// // // // // // // // // //                                     <>
// // // // // // // // // //                                         <Input label="Job Title" value={item.role} onChange={(v) => updateItem('experience', i, 'role', v)} />
// // // // // // // // // //                                         <Input label="Company" value={item.company} onChange={(v) => updateItem('experience', i, 'company', v)} />
// // // // // // // // // //                                         <Input label="Date / Duration" value={item.date} onChange={(v) => updateItem('experience', i, 'date', v)} />
// // // // // // // // // //                                         <TextArea label="Job Description" value={item.desc} onChange={(v) => updateItem('experience', i, 'desc', v)} />
// // // // // // // // // //                                     </>
// // // // // // // // // //                                 )}
// // // // // // // // // //                                 {activeSection === 'projects' && (
// // // // // // // // // //                                     <>
// // // // // // // // // //                                         <Input label="Project Name" value={item.name} onChange={(v) => updateItem('projects', i, 'name', v)} />
// // // // // // // // // //                                         <TextArea label="Description" value={item.desc} onChange={(v) => updateItem('projects', i, 'desc', v)} />
// // // // // // // // // //                                     </>
// // // // // // // // // //                                 )}
// // // // // // // // // //                                 {activeSection === 'education' && (
// // // // // // // // // //                                     <>
// // // // // // // // // //                                         <Input label="Degree / Course" value={item.degree} onChange={(v) => updateItem('education', i, 'degree', v)} />
// // // // // // // // // //                                         <Input label="Institution" value={item.school} onChange={(v) => updateItem('education', i, 'school', v)} />
// // // // // // // // // //                                         <Input label="Date" value={item.date} onChange={(v) => updateItem('education', i, 'date', v)} />
// // // // // // // // // //                                     </>
// // // // // // // // // //                                 )}
// // // // // // // // // //                                 {activeSection === 'certifications' && (
// // // // // // // // // //                                     <>
// // // // // // // // // //                                         <Input label="Certificate Name" value={item.name} onChange={(v) => updateItem('certifications', i, 'name', v)} />
// // // // // // // // // //                                         <Input label="Issuer" value={item.issuer} onChange={(v) => updateItem('certifications', i, 'issuer', v)} />
// // // // // // // // // //                                     </>
// // // // // // // // // //                                 )}
// // // // // // // // // //                                 {activeSection === 'awards' && (
// // // // // // // // // //                                     <>
// // // // // // // // // //                                         <Input label="Award Title" value={item.name} onChange={(v) => updateItem('awards', i, 'name', v)} />
// // // // // // // // // //                                         <Input label="Issuer" value={item.issuer} onChange={(v) => updateItem('awards', i, 'issuer', v)} />
// // // // // // // // // //                                     </>
// // // // // // // // // //                                 )}
// // // // // // // // // //                                 {activeSection === 'languages' && (
// // // // // // // // // //                                     <div className="grid grid-cols-2 gap-4">
// // // // // // // // // //                                         <Input label="Language" value={item.name} onChange={(v) => updateItem('languages', i, 'name', v)} />
// // // // // // // // // //                                         <Input label="Proficiency" value={item.level} onChange={(v) => updateItem('languages', i, 'level', v)} />
// // // // // // // // // //                                     </div>
// // // // // // // // // //                                 )}
// // // // // // // // // //                                 {activeSection === 'volunteering' && (
// // // // // // // // // //                                     <>
// // // // // // // // // //                                         <Input label="Role" value={item.role} onChange={(v) => updateItem('volunteering', i, 'role', v)} />
// // // // // // // // // //                                         <Input label="Organization" value={item.org} onChange={(v) => updateItem('volunteering', i, 'org', v)} />
// // // // // // // // // //                                         <TextArea label="Details" value={item.desc} onChange={(v) => updateItem('volunteering', i, 'desc', v)} />
// // // // // // // // // //                                     </>
// // // // // // // // // //                                 )}

// // // // // // // // // //                                 {activeSection !== 'languages' && (
// // // // // // // // // //                                     <div className="mt-8 pt-6 border-t flex justify-between items-center text-left">
// // // // // // // // // //                                         <span className="text-[10px] font-black uppercase text-slate-300 tracking-[0.2em]">PDF Formatting</span>
// // // // // // // // // //                                         <button 
// // // // // // // // // //                                             onClick={() => updateItem(activeSection, i, 'pageBreak', !item.pageBreak)}
// // // // // // // // // //                                             className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase transition-all shadow-sm ${item.pageBreak ? 'bg-[#0d9488] text-white shadow-teal-200' : 'bg-white text-slate-400 border border-slate-200'}`}
// // // // // // // // // //                                         >
// // // // // // // // // //                                             <Zap size={14} fill={item.pageBreak ? "white" : "none"}/> {item.pageBreak ? 'New Page Active' : 'Start on New Page'}
// // // // // // // // // //                                         </button>
// // // // // // // // // //                                     </div>
// // // // // // // // // //                                 )}
// // // // // // // // // //                             </div>
// // // // // // // // // //                         ))}
// // // // // // // // // //                         <button onClick={() => addItem(activeSection)} className="w-full py-8 border-2 border-dashed border-slate-200 rounded-[2.5rem] font-black text-slate-400 uppercase tracking-[0.4em] text-[10px] hover:border-[#0d9488] hover:text-[#0d9488] transition-all hover:bg-teal-50/50 shadow-sm">+ Add {activeSection} Entry</button>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 )}
// // // // // // // // // //              </div>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="flex-1 bg-[#E1E5EB] overflow-y-auto p-12 flex justify-center custom-scrollbar shadow-inner">
// // // // // // // // // //              <div ref={previewRef} className="w-[210mm] min-h-[297mm] shadow-[0_45px_100px_-15px_rgba(0,0,0,0.4)] bg-white origin-top transition-all duration-700 hover:scale-[1.01]">
// // // // // // // // // //                 <ResumePreview data={resume} template={selectedTemplate} />
// // // // // // // // // //              </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // // --- HELPER COMPONENTS ---
// // // // // // // // // // const NavButton = ({ id, icon, active, onClick }) => (
// // // // // // // // // //     <button onClick={() => onClick(id)} className={`p-4 rounded-2xl transition-all ${active === id ? 'bg-[#0d9488] text-white shadow-xl shadow-teal-500/50 scale-110' : 'hover:text-white hover:bg-slate-800'}`}>
// // // // // // // // // //         {icon}
// // // // // // // // // //     </button>
// // // // // // // // // // );

// // // // // // // // // // const FilterDropdown = ({ label, options, value, onChange }) => (
// // // // // // // // // //     <div className="relative">
// // // // // // // // // //         <select value={value} onChange={(e) => onChange(e.target.value)} className="appearance-none bg-transparent rounded-2xl px-6 py-2.5 text-sm font-bold pr-12 outline-none cursor-pointer">
// // // // // // // // // //             {options.map(o => <option key={o} value={o}>{label}: {o}</option>)}
// // // // // // // // // //         </select>
// // // // // // // // // //         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
// // // // // // // // // //             <ChevronRight size={14} className="rotate-90" />
// // // // // // // // // //         </div>
// // // // // // // // // //     </div>
// // // // // // // // // // );

// // // // // // // // // // const Input = ({ label, value, onChange }) => (
// // // // // // // // // //   <div className="w-full">
// // // // // // // // // //     <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block px-1 tracking-[0.2em]">{label}</label>
// // // // // // // // // //     <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:border-[#0d9488] focus:bg-white outline-none transition-all shadow-sm" />
// // // // // // // // // //   </div>
// // // // // // // // // // );

// // // // // // // // // // const TextArea = ({ label, value, onChange }) => (
// // // // // // // // // //   <div className="w-full">
// // // // // // // // // //     <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block px-1 tracking-[0.2em]">{label}</label>
// // // // // // // // // //     <textarea value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] px-6 py-4 text-sm font-medium focus:border-[#0d9488] focus:bg-white outline-none transition-all h-40 resize-none custom-scrollbar shadow-sm" />
// // // // // // // // // //   </div>
// // // // // // // // // // );

// // // // // // // // // // export default ResumeBuilder;

// // // // // // // // // import React, { useState, useRef, useMemo } from 'react';
// // // // // // // // // import { 
// // // // // // // // //   Download, ArrowLeft, Trash2, User, Briefcase, 
// // // // // // // // //   GraduationCap, CheckCircle, Award, Globe, Layers, Heart, 
// // // // // // // // //   Cpu, Sparkles, Zap, Filter, Archive, Layout, ChevronRight, 
// // // // // // // // //   ShieldCheck, FileJson
// // // // // // // // // } from 'lucide-react';

// // // // // // // // // import html2canvas from 'html2canvas';
// // // // // // // // // import jsPDF from 'jspdf';

// // // // // // // // // // --- CORRECTED IMPORT PATHS ---
// // // // // // // // // import ResumePreview from "../resume/ResumePreview"; 
// // // // // // // // // import ResumeThumbnail from "../resume/ResumeThumbnail"; 

// // // // // // // // // // --- DUMMY DATA FOR LIVE PREVIEWS IN GALLERY ---
// // // // // // // // // const DUMMY_DATA = {
// // // // // // // // //   personal: {
// // // // // // // // //     name: "POOJA BANSAL",
// // // // // // // // //     title: "SENIOR DATA ANALYST",
// // // // // // // // //     email: "P.BANSAL@datasense.com",
// // // // // // // // //     phone: "+1 555 0123 8765",
// // // // // // // // //     location: "Gurgaon, India",
// // // // // // // // //     summary: "Strategic and detail-oriented Data Analyst with 8+ years of experience in translating complex datasets into actionable business insights. Proven track record in optimizing operational efficiency and driving data-led decisions."
// // // // // // // // //   },
// // // // // // // // //   experience: [
// // // // // // // // //     { id: 1, role: "Lead Data Analyst", company: "TechCorp Solutions", date: "2020 - Present", desc: "Spearheaded a team of 5 analysts to deliver monthly performance reports. Reduced data processing time by 40% using automated Python scripts and SQL optimization.", pageBreak: false },
// // // // // // // // //     { id: 2, role: "Junior Analyst", company: "DataFlow Inc.", date: "2017 - 2020", desc: "Analyzed consumer behavior patterns for top-tier retail clients. Developed 15+ custom SQL dashboards for real-time tracking of KPIs.", pageBreak: false }
// // // // // // // // //   ],
// // // // // // // // //   education: [
// // // // // // // // //     { id: 1, degree: "M.S. in Statistics", school: "Columbia University", date: "2017", pageBreak: false },
// // // // // // // // //     { id: 2, degree: "B.S. in Mathematics", school: "NYU", date: "2015", pageBreak: false }
// // // // // // // // //   ],
// // // // // // // // //   skills: { 
// // // // // // // // //     core: ["Data Strategy", "SQL", "Python", "Tableau", "Machine Learning"], 
// // // // // // // // //     technical: ["R Programming", "PowerBI", "AWS Data Pipeline", "TensorFlow"], 
// // // // // // // // //     soft: ["Leadership", "Stakeholder Management", "Public Speaking"] 
// // // // // // // // //   },
// // // // // // // // //   projects: [{ id: 1, name: "Predictive Sales Model", desc: "Built an XGBoost model that predicted quarterly sales with 94% accuracy across 200+ retail locations.", pageBreak: false }],
// // // // // // // // //   awards: [{ id: 1, name: "Employee of the Year", issuer: "TechCorp Global", pageBreak: false }],
// // // // // // // // //   certifications: [{ id: 1, name: "Google Data Analytics Professional", issuer: "Coursera", date: "2022", pageBreak: false }],
// // // // // // // // //   languages: [{ name: "English", level: "Native" }, { name: "Spanish", level: "Fluent" }],
// // // // // // // // //   volunteering: [{ id: 1, role: "Coding Tutor", org: "Local Library", date: "2021", desc: "Taught basic Python and data literacy to local high school students.", pageBreak: false }]
// // // // // // // // // };

// // // // // // // // // // --- UPDATED: ALL 44 TEMPLATES ---
// // // // // // // // // const TEMPLATES = [
// // // // // // // // //     // 1. Core / Professional
// // // // // // // // //     { id: 'professional', name: 'Clean Professional', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0d9488', recommended: true },
// // // // // // // // //     { id: 'minimal', name: 'ATS Minimal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1a1a1a', recommended: false },
// // // // // // // // //     { id: 'classic', name: 'Ivy League', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: false },
// // // // // // // // //     { id: 'formal', name: 'Structured Formal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: false },
    
// // // // // // // // //     // 2. Modern / Creative
// // // // // // // // //     { id: 'modern', name: 'Modern Emerald', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2D5A43', recommended: false },
// // // // // // // // //     { id: 'creative', name: 'Visual Portfolio', hasHeadshot: true, graphics: 'High', columns: '2', color: '#3b82f6', recommended: false },
// // // // // // // // //     { id: 'executive', name: 'Global Executive', hasHeadshot: false, graphics: 'High', columns: '1', color: '#1a1a1a', recommended: true },
// // // // // // // // //     { id: 'tech', name: 'Terminal Dark', hasHeadshot: true, graphics: 'High', columns: '1', color: '#00E5FF', recommended: true },
    
// // // // // // // // //     // 3. Blue / Indigo Series
// // // // // // // // //     { id: 'indigo-elite', name: 'Indigo Leader', hasHeadshot: false, graphics: 'High', columns: '1', color: '#004B8D', recommended: true },
// // // // // // // // //     { id: 'accent-grid', name: 'Accent Grid', hasHeadshot: false, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: false },
// // // // // // // // //     { id: 'centered-initials', name: 'Centered Initials', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: false },
// // // // // // // // //     { id: 'azure-pro', name: 'Azure Impact', hasHeadshot: false, graphics: 'High', columns: '1', color: '#2A7BBF', recommended: false },
// // // // // // // // //     { id: 'blue-frame', name: 'Blue Frame', hasHeadshot: false, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: false },
// // // // // // // // //     { id: 'bordered-elegant', name: 'Bordered Elegant', hasHeadshot: false, graphics: 'High', columns: '2', color: '#1e3a8a', recommended: false },
// // // // // // // // //     { id: 'bubble-header', name: 'Bubble Header', hasHeadshot: false, graphics: 'High', columns: '1', color: '#3b82f6', recommended: false },
// // // // // // // // //     { id: 'cloud-soft', name: 'Cloud Minimal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0369A1', recommended: false },
// // // // // // // // //     { id: 'impact-header', name: 'Impact Header', hasHeadshot: false, graphics: 'High', columns: '1', color: '#0f172a', recommended: false },
// // // // // // // // //     { id: 'marine-clean', name: 'Marine Clean', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0097A7', recommended: false },
// // // // // // // // //     { id: 'marine-compact', name: 'Marine Compact', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#0097A7', recommended: false },
// // // // // // // // //     { id: 'modern-circle', name: 'Modern Circle', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: false },
// // // // // // // // //     { id: 'navy-sidebar', name: 'Navy Modern', hasHeadshot: true, graphics: 'High', columns: '2', color: '#004B8D', recommended: false },
// // // // // // // // //     { id: 'ocean-ats', name: 'Deep Ocean', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#004B8D', recommended: false },
// // // // // // // // //     { id: 'pointer-banner', name: 'Pointer Banner', hasHeadshot: true, graphics: 'High', columns: '1', color: '#2d4a8a', recommended: false },
// // // // // // // // //     { id: 'professional-columns', name: 'Prof. Columns', hasHeadshot: false, graphics: 'Low', columns: '2', color: '#1e3a8a', recommended: false },
// // // // // // // // //     { id: 'rule-minimalist', name: 'Rule Minimalist', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1e3a8a', recommended: false },
// // // // // // // // //     { id: 'skyline', name: 'Skyline Creative', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2A7BBF', recommended: false },
// // // // // // // // //     { id: 'block-branding', name: 'Block Branding', hasHeadshot: false, graphics: 'High', columns: '1', color: '#2d4a8a', recommended: false },

// // // // // // // // //     // 4. Teal / Cyan / Green
// // // // // // // // //     { id: 'teal-innovator', name: 'Teal Innovator', hasHeadshot: false, graphics: 'High', columns: '2', color: '#0097A7', recommended: true },
// // // // // // // // //     { id: 'cyan-grid', name: 'Cyan Flux', hasHeadshot: true, graphics: 'High', columns: '1', color: '#0097A7', recommended: false },
// // // // // // // // //     { id: 'forest-sidebar', name: 'Forest Duo', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2D5A43', recommended: false },
// // // // // // // // //     { id: 'mint-fresh', name: 'Mint Minimal', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#2D5A43', recommended: false },

// // // // // // // // //     // 5. Warm / Earth Tones
// // // // // // // // //     { id: 'amber-visual', name: 'Amber Visual', hasHeadshot: true, graphics: 'High', columns: '2', color: '#F57C00', recommended: true },
// // // // // // // // //     { id: 'brick-formal', name: 'Brick Solid', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#D32F2F', recommended: false },
// // // // // // // // //     { id: 'crimson-sidebar', name: 'Crimson Edge', hasHeadshot: true, graphics: 'High', columns: '2', color: '#D32F2F', recommended: false },
// // // // // // // // //     { id: 'mocha-creative', name: 'Mocha Visual', hasHeadshot: true, graphics: 'High', columns: '2', color: '#A79284', recommended: true },
// // // // // // // // //     { id: 'modern-gold', name: 'Beige Executive', hasHeadshot: true, graphics: 'High', columns: '2', color: '#A79284', recommended: false },
// // // // // // // // //     { id: 'orange-punch', name: 'Orange Punch', hasHeadshot: false, graphics: 'High', columns: '1', color: '#F57C00', recommended: false },
// // // // // // // // //     { id: 'ruby-creative', name: 'Ruby Creative', hasHeadshot: false, graphics: 'High', columns: '1', color: '#D32F2F', recommended: false },
// // // // // // // // //     { id: 'sand-minimal', name: 'Sandstone Clean', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#A79284', recommended: false },
// // // // // // // // //     { id: 'sunset-slim', name: 'Sunset Brief', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#F57C00', recommended: false },

// // // // // // // // //     // 6. Dark / Slate
// // // // // // // // //     { id: 'night-admin', name: 'Night Admin', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#1A1C1E', recommended: false },
// // // // // // // // //     { id: 'slate-duo', name: 'Slate Split', hasHeadshot: true, graphics: 'High', columns: '2', color: '#2D2E2E', recommended: false },
// // // // // // // // //     { id: 'soft-serif', name: 'Soft Serif', hasHeadshot: false, graphics: 'Low', columns: '1', color: '#334155', recommended: false },
// // // // // // // // // ];

// // // // // // // // // const Editor = ({ initialData, onBack }) => {
// // // // // // // // //   // If we have AI data (initialData), jump straight to editor. Otherwise show gallery (selection).
// // // // // // // // //   const [mode, setMode] = useState(initialData ? 'editor' : 'selection'); 
// // // // // // // // //   const [activeSection, setActiveSection] = useState('personal');
// // // // // // // // //   const [selectedTemplate, setSelectedTemplate] = useState('professional');
// // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // //   const [filters, setFilters] = useState({ headshot: 'All', graphics: 'All', columns: 'All', color: null });
// // // // // // // // //   const previewRef = useRef(null);

// // // // // // // // //   // Initialize Resume State
// // // // // // // // //   const [resume, setResume] = useState(initialData || {
// // // // // // // // //     personal: { 
// // // // // // // // //         name: "", 
// // // // // // // // //         title: "", 
// // // // // // // // //         email: "", 
// // // // // // // // //         phone: "", 
// // // // // // // // //         location: "", 
// // // // // // // // //         summary: "", 
// // // // // // // // //         photo: null 
// // // // // // // // //     },
// // // // // // // // //     experience: [], 
// // // // // // // // //     education: [], 
// // // // // // // // //     projects: [], 
// // // // // // // // //     certifications: [], 
// // // // // // // // //     languages: [], 
// // // // // // // // //     awards: [], 
// // // // // // // // //     volunteering: [],
// // // // // // // // //     skills: { core: [], technical: [], soft: [] }
// // // // // // // // //   });

// // // // // // // // //   const addItem = (sec) => {
// // // // // // // // //     const newId = Date.now() + Math.random(); 
// // // // // // // // //     const defaults = {
// // // // // // // // //       experience: { id: newId, role: "", company: "", date: "", desc: "", pageBreak: false },
// // // // // // // // //       education: { id: newId, degree: "", school: "", date: "", pageBreak: false },
// // // // // // // // //       projects: { id: newId, name: "", desc: "", pageBreak: false },
// // // // // // // // //       certifications: { id: newId, name: "", issuer: "", date: "", pageBreak: false },
// // // // // // // // //       languages: { id: newId, name: "", level: "Fluent" },
// // // // // // // // //       awards: { id: newId, name: "", issuer: "", pageBreak: false },
// // // // // // // // //       volunteering: { id: newId, role: "", org: "", date: "", desc: "", pageBreak: false }
// // // // // // // // //     };
// // // // // // // // //     if (sec === 'skills') return;
// // // // // // // // //     setResume({ ...resume, [sec]: [...resume[sec], defaults[sec]] });
// // // // // // // // //   };

// // // // // // // // //   const updateItem = (sec, idx, field, val) => {
// // // // // // // // //     const list = [...resume[sec]];
// // // // // // // // //     list[idx][field] = val;
// // // // // // // // //     setResume({ ...resume, [sec]: list });
// // // // // // // // //   };

// // // // // // // // //   const removeItem = (sec, id) => {
// // // // // // // // //     setResume({ ...resume, [sec]: resume[sec].filter(item => item.id !== id) });
// // // // // // // // //   };

// // // // // // // // //   const handleSaveToArchive = () => {
// // // // // // // // //     const archiveData = { ...resume, template: selectedTemplate, timestamp: new Date().toISOString() };
// // // // // // // // //     const currentArchive = JSON.parse(localStorage.getItem('resume_archive') || '[]');
// // // // // // // // //     localStorage.setItem('resume_archive', JSON.stringify([...currentArchive, archiveData]));
// // // // // // // // //     alert("Resume saved to Archive!");
// // // // // // // // //   };

// // // // // // // // //   const filteredTemplates = useMemo(() => {
// // // // // // // // //     return TEMPLATES.filter(t => {
// // // // // // // // //       const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
// // // // // // // // //       const matchesHeadshot = filters.headshot === 'All' || (filters.headshot === 'Yes' ? t.hasHeadshot : !t.hasHeadshot);
// // // // // // // // //       const matchesGraphics = filters.graphics === 'All' || t.graphics === filters.graphics;
// // // // // // // // //       const matchesColumns = filters.columns === 'All' || t.columns === filters.columns;
// // // // // // // // //       const matchesColor = !filters.color || t.color === filters.color;
// // // // // // // // //       return matchesSearch && matchesHeadshot && matchesGraphics && matchesColumns && matchesColor;
// // // // // // // // //     });
// // // // // // // // //   }, [searchTerm, filters]);

// // // // // // // // //   const handleDownloadPDF = async () => {
// // // // // // // // //     const element = previewRef.current;
// // // // // // // // //     if (!element) return;
// // // // // // // // //     const canvas = await html2canvas(element, { scale: 2, useCORS: true });
// // // // // // // // //     const imgData = canvas.toDataURL('image/png');
// // // // // // // // //     const pdf = new jsPDF('p', 'mm', 'a4');
// // // // // // // // //     const pdfWidth = pdf.internal.pageSize.getWidth();
// // // // // // // // //     const pdfHeight = pdf.internal.pageSize.getHeight();
// // // // // // // // //     const finalHeight = (canvas.height * pdfWidth) / canvas.width;

// // // // // // // // //     let heightLeft = finalHeight;
// // // // // // // // //     let position = 0;

// // // // // // // // //     pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, finalHeight);
// // // // // // // // //     heightLeft -= pdfHeight;

// // // // // // // // //     while (heightLeft >= 0) {
// // // // // // // // //       position = heightLeft - finalHeight;
// // // // // // // // //       pdf.addPage();
// // // // // // // // //       pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, finalHeight);
// // // // // // // // //       heightLeft -= pdfHeight;
// // // // // // // // //     }
// // // // // // // // //     pdf.save(`Resume_${resume.personal.name || 'Export'}.pdf`);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="h-screen bg-[#F8FAFC] flex flex-col overflow-hidden font-['Inter',_sans-serif] relative">
      
// // // // // // // // //       {/* --- SELECTION MODE (GALLERY) --- */}
// // // // // // // // //       {mode === 'selection' && (
// // // // // // // // //         <>
// // // // // // // // //         <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
// // // // // // // // //             <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-teal-50 rounded-full blur-[120px]" />
// // // // // // // // //             <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-emerald-50 rounded-full blur-[120px]" />
// // // // // // // // //         </div>
// // // // // // // // //         <div className="flex-1 overflow-y-auto p-12 custom-scrollbar relative z-10">
// // // // // // // // //           <div className="max-w-7xl mx-auto">
            
// // // // // // // // //             {/* Header Section */}
// // // // // // // // //             <header className="mb-12">
// // // // // // // // //               {/* Back Button calls onBack prop to go to Landing */}
// // // // // // // // //               <button onClick={onBack} className="mb-6 flex items-center gap-2 text-xs font-bold uppercase text-slate-400 hover:text-slate-900 transition-colors">
// // // // // // // // //                 <ArrowLeft size={16} /> Back to Landing
// // // // // // // // //               </button>
              
// // // // // // // // //               <div className="flex items-center gap-2 text-[#0d9488] font-bold text-xs uppercase tracking-widest mb-4">
// // // // // // // // //                   <Sparkles size={16}/> <span>Intelligent Template Engine v4.0</span>
// // // // // // // // //               </div>
// // // // // // // // //               <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
// // // // // // // // //                 Craft your <span className="text-[#0d9488]">Career Story</span>
// // // // // // // // //               </h1>
// // // // // // // // //               <p className="text-xl font-medium text-slate-500 max-w-2xl">
// // // // // // // // //                 Choose from our library of 40+ ATS-optimized templates designed by recruitment experts.
// // // // // // // // //               </p>

// // // // // // // // //               {/* Stats Bar */}
// // // // // // // // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-white/60 backdrop-blur-xl border border-white p-6 rounded-[2.5rem] shadow-sm">
// // // // // // // // //                   <div className="flex items-center gap-4">
// // // // // // // // //                       <div className="bg-teal-50 p-3 rounded-2xl text-[#0d9488]"><Layout size={20}/></div>
// // // // // // // // //                       <div><div className="text-sm font-black text-slate-900">42 Layouts</div><div className="text-[10px] text-slate-400 font-bold uppercase">Professional</div></div>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div className="flex items-center gap-4">
// // // // // // // // //                       <div className="bg-emerald-50 p-3 rounded-2xl text-[#10b981]"><ShieldCheck size={20}/></div>
// // // // // // // // //                       <div><div className="text-sm font-black text-slate-900">ATS Optimized</div><div className="text-[10px] text-slate-400 font-bold uppercase">Verified</div></div>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div className="flex items-center gap-4">
// // // // // // // // //                       <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600"><FileJson size={20}/></div>
// // // // // // // // //                       <div><div className="text-sm font-black text-slate-900">Multi-Format</div><div className="text-[10px] text-slate-400 font-bold uppercase">PDF & Web</div></div>
// // // // // // // // //                   </div>
// // // // // // // // //                   <div className="flex items-center gap-4">
// // // // // // // // //                       <div className="bg-orange-50 p-3 rounded-2xl text-orange-600"><Zap size={20}/></div>
// // // // // // // // //                       <div><div className="text-sm font-black text-slate-900">Live Preview</div><div className="text-[10px] text-slate-400 font-bold uppercase">Real-time</div></div>
// // // // // // // // //                   </div>
// // // // // // // // //               </div>
// // // // // // // // //             </header>

// // // // // // // // //             {/* Filter Bar */}
// // // // // // // // //             <div className="bg-white/80 backdrop-blur-md p-4 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-white mb-12 flex flex-wrap items-center gap-6 sticky top-0 z-30">
// // // // // // // // //               <div className="flex items-center gap-4 pl-4">
// // // // // // // // //                 <Filter size={18} className="text-slate-400" />
// // // // // // // // //                 <FilterDropdown label="Headshot" options={['All', 'Yes', 'No']} value={filters.headshot} onChange={(v)=>setFilters({...filters, headshot: v})} />
// // // // // // // // //                 <FilterDropdown label="Graphics" options={['All', 'High', 'Low']} value={filters.graphics} onChange={(v)=>setFilters({...filters, graphics: v})} />
// // // // // // // // //                 <FilterDropdown label="Columns" options={['All', '1', '2']} value={filters.columns} onChange={(v)=>setFilters({...filters, columns: v})} />
// // // // // // // // //               </div>
// // // // // // // // //               <div className="h-8 w-px bg-slate-200 mx-2" />
// // // // // // // // //               <div className="flex items-center gap-3">
// // // // // // // // //                 <div className="flex gap-2">
// // // // // // // // //                     {['#ffffff', '#1a1a1a', '#1A1C1E', '#0f172a', '#2D2E2E', '#334155', 
// // // // // // // // //       '#0d9488', '#2563eb', '#0369A1', '#2A7BBF', '#004B8D', '#1e3a8a', 
// // // // // // // // //       '#2d4a8a', '#0097A7', '#00E5FF', '#2D5A43', '#A79284', '#F57C00', '#D32F2F'].map(c => (
// // // // // // // // //                         <button 
// // // // // // // // //                             key={c} 
// // // // // // // // //                             onClick={() => setFilters({...filters, color: filters.color === c ? null : c})}
// // // // // // // // //                             className={`w-8 h-8 rounded-full border-4 transition-all hover:scale-110 ${filters.color === c ? 'border-[#0d9488] scale-110' : 'border-white shadow-sm'}`}
// // // // // // // // //                             style={{ backgroundColor: c }}
// // // // // // // // //                         />
// // // // // // // // //                     ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 text-left">
// // // // // // // // //               {filteredTemplates.map(tpl => (
// // // // // // // // //                 <div key={tpl.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 relative flex flex-col group border border-slate-100 transform hover:-translate-y-2">
                  
// // // // // // // // //                   {/* Template Info Overlay */}
// // // // // // // // //                   <div className="px-6 py-4 bg-white flex justify-between items-center">
// // // // // // // // //                     <div>
// // // // // // // // //                         <span className="text-xs font-black uppercase text-slate-800 tracking-widest">{tpl.name}</span>
// // // // // // // // //                         <div className="flex gap-2 mt-1">
// // // // // // // // //                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{tpl.columns} Column</span>
// // // // // // // // //                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">•</span>
// // // // // // // // //                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{tpl.graphics === 'High' ? 'Graphic' : 'Minimal'}</span>
// // // // // // // // //                         </div>
// // // // // // // // //                     </div>
// // // // // // // // //                     {tpl.recommended && (
// // // // // // // // //                         <span className="bg-[#10b981] text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter shadow-lg shadow-emerald-200">Recommended</span>
// // // // // // // // //                     )}
// // // // // // // // //                   </div>

// // // // // // // // //                   <div className="relative w-full aspect-[210/230] bg-slate-50 overflow-hidden">
                    
// // // // // // // // //                     {/* --- FIXED: Added data={DUMMY_DATA} to prevent undefined error --- */}
// // // // // // // // //                     <ResumeThumbnail templateId={tpl.id} data={DUMMY_DATA} />

// // // // // // // // //                     <div className="absolute inset-0 bg-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
// // // // // // // // //                   </div>
                  
// // // // // // // // //                   <div className="p-8 flex justify-center bg-white border-t border-slate-50">
// // // // // // // // //                       <button 
// // // // // // // // //                           onClick={() => { setSelectedTemplate(tpl.id); setMode('editor'); }}
// // // // // // // // //                           className="bg-[#0d9488] text-white px-10 py-4 rounded-2xl font-black uppercase text-xs w-full hover:bg-[#0b7a6f] transition-all shadow-lg active:scale-95 group-hover:tracking-[0.1em]"
// // // // // // // // //                       >
// // // // // // // // //                           Build with this style
// // // // // // // // //                       </button>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //         </>
// // // // // // // // //       )}

// // // // // // // // //       {/* --- EDITOR MODE --- */}
// // // // // // // // //       {mode === 'editor' && (
// // // // // // // // //         <div className="flex-1 flex overflow-hidden">
// // // // // // // // //           <div className="w-24 bg-[#0f172a] flex flex-col items-center py-10 gap-8 text-slate-500 shrink-0 shadow-2xl z-50">
// // // // // // // // //              <NavButton id="personal" icon={<User size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // //              <NavButton id="experience" icon={<Briefcase size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // //              <NavButton id="projects" icon={<Layers size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // //              <NavButton id="education" icon={<GraduationCap size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // //              <NavButton id="skills" icon={<Cpu size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // //              <NavButton id="certifications" icon={<CheckCircle size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // //              <NavButton id="languages" icon={<Globe size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // //              <NavButton id="awards" icon={<Award size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // // //              <NavButton id="volunteering" icon={<Heart size={24}/>} active={activeSection} onClick={setActiveSection} />
             
// // // // // // // // //              <div className="mt-auto flex flex-col gap-8 items-center border-t border-slate-800 pt-10 w-full">
// // // // // // // // //                 <button onClick={() => setMode('selection')} className="text-slate-500 hover:text-white transition-colors" title="Gallery"><Layout size={24}/></button>
// // // // // // // // //                 <button onClick={handleSaveToArchive} className="text-slate-500 hover:text-[#10b981] transition-colors" title="Save Archive"><Archive size={24}/></button>
// // // // // // // // //              </div>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="w-[500px] bg-white border-r flex flex-col shadow-2xl z-40 text-left">
// // // // // // // // //              <div className="p-8 border-b flex justify-between items-center sticky top-0 bg-white z-10">
// // // // // // // // //                 <button onClick={() => setMode('selection')} className="flex items-center gap-2 text-xs font-black uppercase text-slate-400 hover:text-slate-900 tracking-widest"><ArrowLeft size={16}/> Gallery</button>
// // // // // // // // //                 <button onClick={handleDownloadPDF} className="bg-[#0d9488] text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase flex items-center gap-2 shadow-xl hover:bg-[#0b7a6f] transition-all"><Download size={16}/> Export PDF</button>
// // // // // // // // //              </div>
             
// // // // // // // // //              <div className="flex-1 overflow-y-auto p-12 custom-scrollbar pb-32">
// // // // // // // // //                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-slate-900">{activeSection}</h2>
                
// // // // // // // // //                 {activeSection === 'personal' && (
// // // // // // // // //                     <div className="space-y-8">
// // // // // // // // //                         <Input label="Full Name" value={resume.personal.name} onChange={(v) => setResume({...resume, personal: {...resume.personal, name: v}})} />
// // // // // // // // //                         <Input label="Professional Title" value={resume.personal.title} onChange={(v) => setResume({...resume, personal: {...resume.personal, title: v}})} />
// // // // // // // // //                         <div className="grid grid-cols-2 gap-6">
// // // // // // // // //                             <Input label="Email" value={resume.personal.email} onChange={(v) => setResume({...resume, personal: {...resume.personal, email: v}})} />
// // // // // // // // //                             <Input label="Phone" value={resume.personal.phone} onChange={(v) => setResume({...resume, personal: {...resume.personal, phone: v}})} />
// // // // // // // // //                         </div>
// // // // // // // // //                         <Input label="Location" value={resume.personal.location} onChange={(v) => setResume({...resume, personal: {...resume.personal, location: v}})} />
// // // // // // // // //                         <TextArea label="Professional Summary" value={resume.personal.summary} onChange={(v) => setResume({...resume, personal: {...resume.personal, summary: v}})} />
// // // // // // // // //                     </div>
// // // // // // // // //                 )}

// // // // // // // // //                 {activeSection === 'skills' && (
// // // // // // // // //                     <div className="space-y-8">
// // // // // // // // //                         <TextArea label="Technical Skills (Comma separated)" value={resume.skills.technical.join(', ')} onChange={(v) => setResume({...resume, skills: {...resume.skills, technical: v.split(',').map(s=>s.trim())}})} />
// // // // // // // // //                         <TextArea label="Core / Soft Skills (Comma separated)" value={resume.skills.core.join(', ')} onChange={(v) => setResume({...resume, skills: {...resume.skills, core: v.split(',').map(s=>s.trim())}})} />
// // // // // // // // //                     </div>
// // // // // // // // //                 )}

// // // // // // // // //                 {['experience', 'projects', 'education', 'certifications', 'awards', 'volunteering', 'languages'].includes(activeSection) && (
// // // // // // // // //                     <div className="space-y-10">
// // // // // // // // //                         {resume[activeSection].map((item, i) => (
// // // // // // // // //                             <div key={item.id} className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] relative group shadow-sm transition-all hover:bg-slate-100/50">
// // // // // // // // //                                 <button onClick={() => removeItem(activeSection, item.id)} className="absolute -top-3 -right-3 bg-rose-500 text-white p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"><Trash2 size={16}/></button>
                                
// // // // // // // // //                                 {activeSection === 'experience' && (
// // // // // // // // //                                     <>
// // // // // // // // //                                         <Input label="Job Title" value={item.role} onChange={(v) => updateItem('experience', i, 'role', v)} />
// // // // // // // // //                                         <Input label="Company" value={item.company} onChange={(v) => updateItem('experience', i, 'company', v)} />
// // // // // // // // //                                         <Input label="Date / Duration" value={item.date} onChange={(v) => updateItem('experience', i, 'date', v)} />
// // // // // // // // //                                         <TextArea label="Job Description" value={item.desc} onChange={(v) => updateItem('experience', i, 'desc', v)} />
// // // // // // // // //                                     </>
// // // // // // // // //                                 )}
// // // // // // // // //                                 {activeSection === 'projects' && (
// // // // // // // // //                                     <>
// // // // // // // // //                                         <Input label="Project Name" value={item.name} onChange={(v) => updateItem('projects', i, 'name', v)} />
// // // // // // // // //                                         <TextArea label="Description" value={item.desc} onChange={(v) => updateItem('projects', i, 'desc', v)} />
// // // // // // // // //                                     </>
// // // // // // // // //                                 )}
// // // // // // // // //                                 {activeSection === 'education' && (
// // // // // // // // //                                     <>
// // // // // // // // //                                         <Input label="Degree / Course" value={item.degree} onChange={(v) => updateItem('education', i, 'degree', v)} />
// // // // // // // // //                                         <Input label="Institution" value={item.school} onChange={(v) => updateItem('education', i, 'school', v)} />
// // // // // // // // //                                         <Input label="Date" value={item.date} onChange={(v) => updateItem('education', i, 'date', v)} />
// // // // // // // // //                                     </>
// // // // // // // // //                                 )}
// // // // // // // // //                                 {activeSection === 'certifications' && (
// // // // // // // // //                                     <>
// // // // // // // // //                                         <Input label="Certificate Name" value={item.name} onChange={(v) => updateItem('certifications', i, 'name', v)} />
// // // // // // // // //                                         <Input label="Issuer" value={item.issuer} onChange={(v) => updateItem('certifications', i, 'issuer', v)} />
// // // // // // // // //                                     </>
// // // // // // // // //                                 )}
// // // // // // // // //                                 {activeSection === 'awards' && (
// // // // // // // // //                                     <>
// // // // // // // // //                                         <Input label="Award Title" value={item.name} onChange={(v) => updateItem('awards', i, 'name', v)} />
// // // // // // // // //                                         <Input label="Issuer" value={item.issuer} onChange={(v) => updateItem('awards', i, 'issuer', v)} />
// // // // // // // // //                                     </>
// // // // // // // // //                                 )}
// // // // // // // // //                                 {activeSection === 'languages' && (
// // // // // // // // //                                     <div className="grid grid-cols-2 gap-4">
// // // // // // // // //                                         <Input label="Language" value={item.name} onChange={(v) => updateItem('languages', i, 'name', v)} />
// // // // // // // // //                                         <Input label="Proficiency" value={item.level} onChange={(v) => updateItem('languages', i, 'level', v)} />
// // // // // // // // //                                     </div>
// // // // // // // // //                                 )}
// // // // // // // // //                                 {activeSection === 'volunteering' && (
// // // // // // // // //                                     <>
// // // // // // // // //                                         <Input label="Role" value={item.role} onChange={(v) => updateItem('volunteering', i, 'role', v)} />
// // // // // // // // //                                         <Input label="Organization" value={item.org} onChange={(v) => updateItem('volunteering', i, 'org', v)} />
// // // // // // // // //                                         <TextArea label="Details" value={item.desc} onChange={(v) => updateItem('volunteering', i, 'desc', v)} />
// // // // // // // // //                                     </>
// // // // // // // // //                                 )}

// // // // // // // // //                                 {activeSection !== 'languages' && (
// // // // // // // // //                                     <div className="mt-8 pt-6 border-t flex justify-between items-center text-left">
// // // // // // // // //                                         <span className="text-[10px] font-black uppercase text-slate-300 tracking-[0.2em]">PDF Formatting</span>
// // // // // // // // //                                         <button 
// // // // // // // // //                                             onClick={() => updateItem(activeSection, i, 'pageBreak', !item.pageBreak)}
// // // // // // // // //                                             className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase transition-all shadow-sm ${item.pageBreak ? 'bg-[#0d9488] text-white shadow-teal-200' : 'bg-white text-slate-400 border border-slate-200'}`}
// // // // // // // // //                                         >
// // // // // // // // //                                             <Zap size={14} fill={item.pageBreak ? "white" : "none"}/> {item.pageBreak ? 'New Page Active' : 'Start on New Page'}
// // // // // // // // //                                         </button>
// // // // // // // // //                                     </div>
// // // // // // // // //                                 )}
// // // // // // // // //                             </div>
// // // // // // // // //                         ))}
// // // // // // // // //                         <button onClick={() => addItem(activeSection)} className="w-full py-8 border-2 border-dashed border-slate-200 rounded-[2.5rem] font-black text-slate-400 uppercase tracking-[0.4em] text-[10px] hover:border-[#0d9488] hover:text-[#0d9488] transition-all hover:bg-teal-50/50 shadow-sm">+ Add {activeSection} Entry</button>
// // // // // // // // //                     </div>
// // // // // // // // //                 )}
// // // // // // // // //              </div>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="flex-1 bg-[#E1E5EB] overflow-y-auto p-12 flex justify-center custom-scrollbar shadow-inner">
// // // // // // // // //              <div ref={previewRef} className="w-[210mm] min-h-[297mm] shadow-[0_45px_100px_-15px_rgba(0,0,0,0.4)] bg-white origin-top transition-all duration-700 hover:scale-[1.01]">
// // // // // // // // //                 <ResumePreview data={resume} template={selectedTemplate} />
// // // // // // // // //              </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // // --- HELPER COMPONENTS ---
// // // // // // // // // const NavButton = ({ id, icon, active, onClick }) => (
// // // // // // // // //     <button onClick={() => onClick(id)} className={`p-4 rounded-2xl transition-all ${active === id ? 'bg-[#0d9488] text-white shadow-xl shadow-teal-500/50 scale-110' : 'hover:text-white hover:bg-slate-800'}`}>
// // // // // // // // //         {icon}
// // // // // // // // //     </button>
// // // // // // // // // );

// // // // // // // // // const FilterDropdown = ({ label, options, value, onChange }) => (
// // // // // // // // //     <div className="relative">
// // // // // // // // //         <select value={value} onChange={(e) => onChange(e.target.value)} className="appearance-none bg-transparent rounded-2xl px-6 py-2.5 text-sm font-bold pr-12 outline-none cursor-pointer">
// // // // // // // // //             {options.map(o => <option key={o} value={o}>{label}: {o}</option>)}
// // // // // // // // //         </select>
// // // // // // // // //         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
// // // // // // // // //             <ChevronRight size={14} className="rotate-90" />
// // // // // // // // //         </div>
// // // // // // // // //     </div>
// // // // // // // // // );

// // // // // // // // // const Input = ({ label, value, onChange }) => (
// // // // // // // // //   <div className="w-full">
// // // // // // // // //     <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block px-1 tracking-[0.2em]">{label}</label>
// // // // // // // // //     <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:border-[#0d9488] focus:bg-white outline-none transition-all shadow-sm" />
// // // // // // // // //   </div>
// // // // // // // // // );

// // // // // // // // // const TextArea = ({ label, value, onChange }) => (
// // // // // // // // //   <div className="w-full">
// // // // // // // // //     <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block px-1 tracking-[0.2em]">{label}</label>
// // // // // // // // //     <textarea value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] px-6 py-4 text-sm font-medium focus:border-[#0d9488] focus:bg-white outline-none transition-all h-40 resize-none custom-scrollbar shadow-sm" />
// // // // // // // // //   </div>
// // // // // // // // // );

// // // // // // // // // export default Editor;


// // // // // // // // import React, { useState, useRef } from 'react';
// // // // // // // // import { 
// // // // // // // //   Download, ArrowLeft, Trash2, User, Briefcase, 
// // // // // // // //   GraduationCap, CheckCircle, Award, Globe, Layers, Heart, 
// // // // // // // //   Cpu, Archive, Zap, Layout // <--- ADDED 'Layout' HERE
// // // // // // // // } from 'lucide-react';

// // // // // // // // import html2canvas from 'html2canvas';
// // // // // // // // import jsPDF from 'jspdf';
// // // // // // // // import ResumePreview from "../resume/ResumePreview"; 

// // // // // // // // // --- HELPER COMPONENTS ---
// // // // // // // // const NavButton = ({ id, icon, active, onClick }) => (
// // // // // // // //     <button onClick={() => onClick(id)} className={`p-4 rounded-2xl transition-all ${active === id ? 'bg-[#0d9488] text-white shadow-xl shadow-teal-500/50 scale-110' : 'hover:text-white hover:bg-slate-800'}`}>
// // // // // // // //         {icon}
// // // // // // // //     </button>
// // // // // // // // );

// // // // // // // // const Input = ({ label, value, onChange }) => (
// // // // // // // //   <div className="w-full">
// // // // // // // //     <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block px-1 tracking-[0.2em]">{label}</label>
// // // // // // // //     <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold focus:border-[#0d9488] focus:bg-white outline-none transition-all shadow-sm" />
// // // // // // // //   </div>
// // // // // // // // );

// // // // // // // // const TextArea = ({ label, value, onChange }) => (
// // // // // // // //   <div className="w-full">
// // // // // // // //     <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block px-1 tracking-[0.2em]">{label}</label>
// // // // // // // //     <textarea value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] px-6 py-4 text-sm font-medium focus:border-[#0d9488] focus:bg-white outline-none transition-all h-40 resize-none custom-scrollbar shadow-sm" />
// // // // // // // //   </div>
// // // // // // // // );

// // // // // // // // // --- MAIN EDITOR COMPONENT ---
// // // // // // // // const Editor = ({ initialData, selectedTemplate, onBack }) => {
// // // // // // // //   const [activeSection, setActiveSection] = useState('personal');
// // // // // // // //   const previewRef = useRef(null);

// // // // // // // //   // Initialize Resume State
// // // // // // // //   const [resume, setResume] = useState(initialData || {
// // // // // // // //     personal: { 
// // // // // // // //         name: "", title: "", email: "", phone: "", 
// // // // // // // //         location: "", summary: "", photo: null 
// // // // // // // //     },
// // // // // // // //     experience: [], education: [], projects: [], 
// // // // // // // //     certifications: [], languages: [], awards: [], 
// // // // // // // //     volunteering: [], skills: { core: [], technical: [], soft: [] }
// // // // // // // //   });

// // // // // // // //   const addItem = (sec) => {
// // // // // // // //     const newId = Date.now() + Math.random(); 
// // // // // // // //     const defaults = {
// // // // // // // //       experience: { id: newId, role: "", company: "", date: "", desc: "", pageBreak: false },
// // // // // // // //       education: { id: newId, degree: "", school: "", date: "", pageBreak: false },
// // // // // // // //       projects: { id: newId, name: "", desc: "", pageBreak: false },
// // // // // // // //       certifications: { id: newId, name: "", issuer: "", date: "", pageBreak: false },
// // // // // // // //       languages: { id: newId, name: "", level: "Fluent" },
// // // // // // // //       awards: { id: newId, name: "", issuer: "", pageBreak: false },
// // // // // // // //       volunteering: { id: newId, role: "", org: "", date: "", desc: "", pageBreak: false }
// // // // // // // //     };
// // // // // // // //     if (sec === 'skills') return;
// // // // // // // //     setResume({ ...resume, [sec]: [...resume[sec], defaults[sec]] });
// // // // // // // //   };

// // // // // // // //   const updateItem = (sec, idx, field, val) => {
// // // // // // // //     const list = [...resume[sec]];
// // // // // // // //     list[idx][field] = val;
// // // // // // // //     setResume({ ...resume, [sec]: list });
// // // // // // // //   };

// // // // // // // //   const removeItem = (sec, id) => {
// // // // // // // //     setResume({ ...resume, [sec]: resume[sec].filter(item => item.id !== id) });
// // // // // // // //   };

// // // // // // // //   const handleSaveToArchive = () => {
// // // // // // // //     const archiveData = { ...resume, template: selectedTemplate, timestamp: new Date().toISOString() };
// // // // // // // //     const currentArchive = JSON.parse(localStorage.getItem('resume_archive') || '[]');
// // // // // // // //     localStorage.setItem('resume_archive', JSON.stringify([...currentArchive, archiveData]));
// // // // // // // //     alert("Resume saved to Archive!");
// // // // // // // //   };

// // // // // // // //   const handleDownloadPDF = async () => {
// // // // // // // //     const element = previewRef.current;
// // // // // // // //     if (!element) return;
// // // // // // // //     const canvas = await html2canvas(element, { scale: 2, useCORS: true });
// // // // // // // //     const imgData = canvas.toDataURL('image/png');
// // // // // // // //     const pdf = new jsPDF('p', 'mm', 'a4');
// // // // // // // //     const pdfWidth = pdf.internal.pageSize.getWidth();
// // // // // // // //     const pdfHeight = pdf.internal.pageSize.getHeight();
// // // // // // // //     const finalHeight = (canvas.height * pdfWidth) / canvas.width;

// // // // // // // //     let heightLeft = finalHeight;
// // // // // // // //     let position = 0;

// // // // // // // //     pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, finalHeight);
// // // // // // // //     heightLeft -= pdfHeight;

// // // // // // // //     while (heightLeft >= 0) {
// // // // // // // //       position = heightLeft - finalHeight;
// // // // // // // //       pdf.addPage();
// // // // // // // //       pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, finalHeight);
// // // // // // // //       heightLeft -= pdfHeight;
// // // // // // // //     }
// // // // // // // //     pdf.save(`Resume_${resume.personal.name || 'Export'}.pdf`);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="h-screen bg-[#F8FAFC] flex flex-col overflow-hidden font-['Inter',_sans-serif] relative">
// // // // // // // //         <div className="flex-1 flex overflow-hidden">
          
// // // // // // // //           {/* SIDEBAR NAVIGATION */}
// // // // // // // //           <div className="w-24 bg-[#0f172a] flex flex-col items-center py-10 gap-8 text-slate-500 shrink-0 shadow-2xl z-50">
// // // // // // // //              <NavButton id="personal" icon={<User size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // //              <NavButton id="experience" icon={<Briefcase size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // //              <NavButton id="projects" icon={<Layers size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // //              <NavButton id="education" icon={<GraduationCap size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // //              <NavButton id="skills" icon={<Cpu size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // //              <NavButton id="certifications" icon={<CheckCircle size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // //              <NavButton id="languages" icon={<Globe size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // //              <NavButton id="awards" icon={<Award size={24}/>} active={activeSection} onClick={setActiveSection} />
// // // // // // // //              <NavButton id="volunteering" icon={<Heart size={24}/>} active={activeSection} onClick={setActiveSection} />
             
// // // // // // // //              <div className="mt-auto flex flex-col gap-8 items-center border-t border-slate-800 pt-10 w-full">
// // // // // // // //                 <button onClick={onBack} className="text-slate-500 hover:text-white transition-colors" title="Change Template"><Layout size={24}/></button>
// // // // // // // //                 <button onClick={handleSaveToArchive} className="text-slate-500 hover:text-[#10b981] transition-colors" title="Save Archive"><Archive size={24}/></button>
// // // // // // // //              </div>
// // // // // // // //           </div>

// // // // // // // //           {/* INPUT FORM AREA */}
// // // // // // // //           <div className="w-[500px] bg-white border-r flex flex-col shadow-2xl z-40 text-left">
// // // // // // // //              <div className="p-8 border-b flex justify-between items-center sticky top-0 bg-white z-10">
// // // // // // // //                 <button onClick={onBack} className="flex items-center gap-2 text-xs font-black uppercase text-slate-400 hover:text-slate-900 tracking-widest"><ArrowLeft size={16}/> Template</button>
// // // // // // // //                 <button onClick={handleDownloadPDF} className="bg-[#0d9488] text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase flex items-center gap-2 shadow-xl hover:bg-[#0b7a6f] transition-all"><Download size={16}/> Export PDF</button>
// // // // // // // //              </div>
             
// // // // // // // //              <div className="flex-1 overflow-y-auto p-12 custom-scrollbar pb-32">
// // // // // // // //                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-slate-900">{activeSection}</h2>
                
// // // // // // // //                 {activeSection === 'personal' && (
// // // // // // // //                     <div className="space-y-8">
// // // // // // // //                         <Input label="Full Name" value={resume.personal.name} onChange={(v) => setResume({...resume, personal: {...resume.personal, name: v}})} />
// // // // // // // //                         <Input label="Professional Title" value={resume.personal.title} onChange={(v) => setResume({...resume, personal: {...resume.personal, title: v}})} />
// // // // // // // //                         <div className="grid grid-cols-2 gap-6">
// // // // // // // //                             <Input label="Email" value={resume.personal.email} onChange={(v) => setResume({...resume, personal: {...resume.personal, email: v}})} />
// // // // // // // //                             <Input label="Phone" value={resume.personal.phone} onChange={(v) => setResume({...resume, personal: {...resume.personal, phone: v}})} />
// // // // // // // //                         </div>
// // // // // // // //                         <Input label="Location" value={resume.personal.location} onChange={(v) => setResume({...resume, personal: {...resume.personal, location: v}})} />
// // // // // // // //                         <TextArea label="Professional Summary" value={resume.personal.summary} onChange={(v) => setResume({...resume, personal: {...resume.personal, summary: v}})} />
// // // // // // // //                     </div>
// // // // // // // //                 )}

// // // // // // // //                 {activeSection === 'skills' && (
// // // // // // // //                     <div className="space-y-8">
// // // // // // // //                         <TextArea label="Technical Skills (Comma separated)" value={resume.skills.technical.join(', ')} onChange={(v) => setResume({...resume, skills: {...resume.skills, technical: v.split(',').map(s=>s.trim())}})} />
// // // // // // // //                         <TextArea label="Core / Soft Skills (Comma separated)" value={resume.skills.core.join(', ')} onChange={(v) => setResume({...resume, skills: {...resume.skills, core: v.split(',').map(s=>s.trim())}})} />
// // // // // // // //                     </div>
// // // // // // // //                 )}

// // // // // // // //                 {['experience', 'projects', 'education', 'certifications', 'awards', 'volunteering', 'languages'].includes(activeSection) && (
// // // // // // // //                     <div className="space-y-10">
// // // // // // // //                         {resume[activeSection].map((item, i) => (
// // // // // // // //                             <div key={item.id} className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] relative group shadow-sm transition-all hover:bg-slate-100/50">
// // // // // // // //                                 <button onClick={() => removeItem(activeSection, item.id)} className="absolute -top-3 -right-3 bg-rose-500 text-white p-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"><Trash2 size={16}/></button>
                                
// // // // // // // //                                 {activeSection === 'experience' && (
// // // // // // // //                                     <>
// // // // // // // //                                         <Input label="Job Title" value={item.role} onChange={(v) => updateItem('experience', i, 'role', v)} />
// // // // // // // //                                         <Input label="Company" value={item.company} onChange={(v) => updateItem('experience', i, 'company', v)} />
// // // // // // // //                                         <Input label="Date / Duration" value={item.date} onChange={(v) => updateItem('experience', i, 'date', v)} />
// // // // // // // //                                         <TextArea label="Job Description" value={item.desc} onChange={(v) => updateItem('experience', i, 'desc', v)} />
// // // // // // // //                                     </>
// // // // // // // //                                 )}
// // // // // // // //                                 {activeSection === 'projects' && (
// // // // // // // //                                     <>
// // // // // // // //                                         <Input label="Project Name" value={item.name} onChange={(v) => updateItem('projects', i, 'name', v)} />
// // // // // // // //                                         <TextArea label="Description" value={item.desc} onChange={(v) => updateItem('projects', i, 'desc', v)} />
// // // // // // // //                                     </>
// // // // // // // //                                 )}
// // // // // // // //                                 {activeSection === 'education' && (
// // // // // // // //                                     <>
// // // // // // // //                                         <Input label="Degree / Course" value={item.degree} onChange={(v) => updateItem('education', i, 'degree', v)} />
// // // // // // // //                                         <Input label="Institution" value={item.school} onChange={(v) => updateItem('education', i, 'school', v)} />
// // // // // // // //                                         <Input label="Date" value={item.date} onChange={(v) => updateItem('education', i, 'date', v)} />
// // // // // // // //                                     </>
// // // // // // // //                                 )}
// // // // // // // //                                 {activeSection === 'certifications' && (
// // // // // // // //                                     <>
// // // // // // // //                                         <Input label="Certificate Name" value={item.name} onChange={(v) => updateItem('certifications', i, 'name', v)} />
// // // // // // // //                                         <Input label="Issuer" value={item.issuer} onChange={(v) => updateItem('certifications', i, 'issuer', v)} />
// // // // // // // //                                     </>
// // // // // // // //                                 )}
// // // // // // // //                                 {activeSection === 'awards' && (
// // // // // // // //                                     <>
// // // // // // // //                                         <Input label="Award Title" value={item.name} onChange={(v) => updateItem('awards', i, 'name', v)} />
// // // // // // // //                                         <Input label="Issuer" value={item.issuer} onChange={(v) => updateItem('awards', i, 'issuer', v)} />
// // // // // // // //                                     </>
// // // // // // // //                                 )}
// // // // // // // //                                 {activeSection === 'languages' && (
// // // // // // // //                                     <div className="grid grid-cols-2 gap-4">
// // // // // // // //                                         <Input label="Language" value={item.name} onChange={(v) => updateItem('languages', i, 'name', v)} />
// // // // // // // //                                         <Input label="Proficiency" value={item.level} onChange={(v) => updateItem('languages', i, 'level', v)} />
// // // // // // // //                                     </div>
// // // // // // // //                                 )}
// // // // // // // //                                 {activeSection === 'volunteering' && (
// // // // // // // //                                     <>
// // // // // // // //                                         <Input label="Role" value={item.role} onChange={(v) => updateItem('volunteering', i, 'role', v)} />
// // // // // // // //                                         <Input label="Organization" value={item.org} onChange={(v) => updateItem('volunteering', i, 'org', v)} />
// // // // // // // //                                         <TextArea label="Details" value={item.desc} onChange={(v) => updateItem('volunteering', i, 'desc', v)} />
// // // // // // // //                                     </>
// // // // // // // //                                 )}

// // // // // // // //                                 <div className="mt-8 pt-6 border-t flex justify-between items-center text-left">
// // // // // // // //                                     <span className="text-[10px] font-black uppercase text-slate-300 tracking-[0.2em]">PDF Formatting</span>
// // // // // // // //                                     <button 
// // // // // // // //                                         onClick={() => updateItem(activeSection, i, 'pageBreak', !item.pageBreak)}
// // // // // // // //                                         className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase transition-all shadow-sm ${item.pageBreak ? 'bg-[#0d9488] text-white shadow-teal-200' : 'bg-white text-slate-400 border border-slate-200'}`}
// // // // // // // //                                     >
// // // // // // // //                                         <Zap size={14} fill={item.pageBreak ? "white" : "none"}/> {item.pageBreak ? 'New Page Active' : 'Start on New Page'}
// // // // // // // //                                     </button>
// // // // // // // //                                 </div>
// // // // // // // //                             </div>
// // // // // // // //                         ))}
// // // // // // // //                         <button onClick={() => addItem(activeSection)} className="w-full py-8 border-2 border-dashed border-slate-200 rounded-[2.5rem] font-black text-slate-400 uppercase tracking-[0.4em] text-[10px] hover:border-[#0d9488] hover:text-[#0d9488] transition-all hover:bg-teal-50/50 shadow-sm">+ Add {activeSection} Entry</button>
// // // // // // // //                     </div>
// // // // // // // //                 )}
// // // // // // // //              </div>
// // // // // // // //           </div>

// // // // // // // //           {/* LIVE PREVIEW AREA */}
// // // // // // // //           <div className="flex-1 bg-[#E1E5EB] overflow-y-auto p-12 flex justify-center custom-scrollbar shadow-inner">
// // // // // // // //              <div ref={previewRef} className="w-[210mm] min-h-[297mm] shadow-[0_45px_100px_-15px_rgba(0,0,0,0.4)] bg-white origin-top transition-all duration-700 hover:scale-[1.01]">
// // // // // // // //                 <ResumePreview data={resume} template={selectedTemplate} />
// // // // // // // //              </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Editor;

// // // // // import React, { useState, useRef } from 'react';
// // // // // import { 
// // // // //   Download, ArrowLeft, Trash2, User, Briefcase, 
// // // // //   GraduationCap, CheckCircle, Award, Globe, Layers, Heart, 
// // // // //   Cpu, Archive, Zap, Layout, FileText, ChevronLeft, Save
// // // // // } from 'lucide-react';

// // // // // import html2canvas from 'html2canvas';
// // // // // import jsPDF from 'jspdf';
// // // // // import ResumePreview from "../resume/ResumePreview"; 

// // // // // // --- HELPER COMPONENTS ---
// // // // // const NavButton = ({ id, icon, active, onClick, label }) => (
// // // // //     <button 
// // // // //         onClick={() => onClick(id)} 
// // // // //         className={`group flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 relative ${active === id ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
// // // // //         title={label}
// // // // //     >
// // // // //         {icon}
// // // // //         {/* Tooltip */}
// // // // //         <span className="absolute left-14 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
// // // // //             {label}
// // // // //         </span>
// // // // //     </button>
// // // // // );

// // // // // const Input = ({ label, value, onChange, placeholder }) => (
// // // // //   <div className="w-full group">
// // // // //     <label className="text-[11px] font-bold text-slate-500 uppercase mb-2 block tracking-wider group-focus-within:text-teal-600 transition-colors">{label}</label>
// // // // //     <input 
// // // // //         value={value} 
// // // // //         onChange={(e) => onChange(e.target.value)} 
// // // // //         placeholder={placeholder}
// // // // //         className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 placeholder:text-slate-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all shadow-sm hover:border-slate-300" 
// // // // //     />
// // // // //   </div>
// // // // // );

// // // // // const TextArea = ({ label, value, onChange, placeholder }) => (
// // // // //   <div className="w-full group">
// // // // //     <label className="text-[11px] font-bold text-slate-500 uppercase mb-2 block tracking-wider group-focus-within:text-teal-600 transition-colors">{label}</label>
// // // // //     <textarea 
// // // // //         value={value} 
// // // // //         onChange={(e) => onChange(e.target.value)} 
// // // // //         placeholder={placeholder}
// // // // //         className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 placeholder:text-slate-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all h-32 resize-none shadow-sm hover:border-slate-300 custom-scrollbar" 
// // // // //     />
// // // // //   </div>
// // // // // );

// // // // // // --- MAIN EDITOR COMPONENT ---
// // // // // const Editor = ({ initialData, selectedTemplate, onBack }) => {
// // // // //   const [activeSection, setActiveSection] = useState('personal');
// // // // //   const previewRef = useRef(null);

// // // // //   // Initialize Resume State
// // // // //   const [resume, setResume] = useState(initialData || {
// // // // //     personal: { 
// // // // //         name: "", title: "", email: "", phone: "", 
// // // // //         location: "", summary: "", photo: null 
// // // // //     },
// // // // //     experience: [], education: [], projects: [], 
// // // // //     certifications: [], languages: [], awards: [], 
// // // // //     volunteering: [], skills: { core: [], technical: [], soft: [] }
// // // // //   });

// // // // //   const addItem = (sec) => {
// // // // //     const newId = Date.now() + Math.random(); 
// // // // //     const defaults = {
// // // // //       experience: { id: newId, role: "", company: "", date: "", desc: "", pageBreak: false },
// // // // //       education: { id: newId, degree: "", school: "", date: "", pageBreak: false },
// // // // //       projects: { id: newId, name: "", desc: "", pageBreak: false },
// // // // //       certifications: { id: newId, name: "", issuer: "", date: "", pageBreak: false },
// // // // //       languages: { id: newId, name: "", level: "Fluent" },
// // // // //       awards: { id: newId, name: "", issuer: "", pageBreak: false },
// // // // //       volunteering: { id: newId, role: "", org: "", date: "", desc: "", pageBreak: false }
// // // // //     };
// // // // //     if (sec === 'skills') return;
// // // // //     setResume({ ...resume, [sec]: [...resume[sec], defaults[sec]] });
// // // // //   };

// // // // //   const updateItem = (sec, idx, field, val) => {
// // // // //     const list = [...resume[sec]];
// // // // //     list[idx][field] = val;
// // // // //     setResume({ ...resume, [sec]: list });
// // // // //   };

// // // // //   const removeItem = (sec, id) => {
// // // // //     setResume({ ...resume, [sec]: resume[sec].filter(item => item.id !== id) });
// // // // //   };

// // // // //   const handleSaveToArchive = () => {
// // // // //     const archiveData = { ...resume, template: selectedTemplate, timestamp: new Date().toISOString() };
// // // // //     const currentArchive = JSON.parse(localStorage.getItem('resume_archive') || '[]');
// // // // //     localStorage.setItem('resume_archive', JSON.stringify([...currentArchive, archiveData]));
// // // // //     alert("Resume saved to Archive!");
// // // // //   };

// // // // //   const handleDownloadPDF = async () => {
// // // // //     const element = previewRef.current;
// // // // //     if (!element) return;
// // // // //     const canvas = await html2canvas(element, { scale: 2, useCORS: true });
// // // // //     const imgData = canvas.toDataURL('image/png');
// // // // //     const pdf = new jsPDF('p', 'mm', 'a4');
// // // // //     const pdfWidth = pdf.internal.pageSize.getWidth();
// // // // //     const pdfHeight = pdf.internal.pageSize.getHeight();
// // // // //     const finalHeight = (canvas.height * pdfWidth) / canvas.width;

// // // // //     let heightLeft = finalHeight;
// // // // //     let position = 0;

// // // // //     pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, finalHeight);
// // // // //     heightLeft -= pdfHeight;

// // // // //     while (heightLeft >= 0) {
// // // // //       position = heightLeft - finalHeight;
// // // // //       pdf.addPage();
// // // // //       pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, finalHeight);
// // // // //       heightLeft -= pdfHeight;
// // // // //     }
// // // // //     pdf.save(`Resume_${resume.personal.name || 'Export'}.pdf`);
// // // // //   };

// // // // //   return (
// // // // //     <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-900 overflow-hidden">
        
// // // // //         {/* TOP BAR */}
// // // // //         <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-50 shadow-sm shrink-0">
// // // // //             <div className="flex items-center gap-4">
// // // // //                 <button onClick={onBack} className="p-2 -ml-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors">
// // // // //                     <ChevronLeft size={20} />
// // // // //                 </button>
// // // // //                 <div className="h-6 w-px bg-slate-200"></div>
// // // // //                 <div className="flex items-center gap-2">
// // // // //                     <FileText size={18} className="text-teal-600"/>
// // // // //                     <span className="font-bold text-sm text-slate-800">Editor Mode</span>
// // // // //                 </div>
// // // // //             </div>
            
// // // // //             <div className="flex items-center gap-3">
// // // // //                 <button onClick={handleSaveToArchive} className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200">
// // // // //                     <Save size={14}/> Save Draft
// // // // //                 </button>
// // // // //                 <button onClick={handleDownloadPDF} className="flex items-center gap-2 px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-all shadow-md active:scale-95">
// // // // //                     <Download size={14}/> Download PDF
// // // // //                 </button>
// // // // //             </div>
// // // // //         </div>

// // // // //         <div className="flex-1 flex overflow-hidden">
          
// // // // //           {/* SIDEBAR NAVIGATION */}
// // // // //           <div className="w-20 bg-[#0f172a] flex flex-col items-center py-6 gap-4 text-slate-500 shrink-0 border-r border-slate-800 z-40">
// // // // //              <NavButton id="personal" icon={<User size={20}/>} active={activeSection} onClick={setActiveSection} label="Personal Info" />
// // // // //              <NavButton id="experience" icon={<Briefcase size={20}/>} active={activeSection} onClick={setActiveSection} label="Experience" />
// // // // //              <NavButton id="education" icon={<GraduationCap size={20}/>} active={activeSection} onClick={setActiveSection} label="Education" />
// // // // //              <NavButton id="skills" icon={<Cpu size={20}/>} active={activeSection} onClick={setActiveSection} label="Skills" />
// // // // //              <NavButton id="projects" icon={<Layers size={20}/>} active={activeSection} onClick={setActiveSection} label="Projects" />
// // // // //              <NavButton id="certifications" icon={<CheckCircle size={20}/>} active={activeSection} onClick={setActiveSection} label="Certifications" />
// // // // //              <NavButton id="languages" icon={<Globe size={20}/>} active={activeSection} onClick={setActiveSection} label="Languages" />
// // // // //              <NavButton id="awards" icon={<Award size={20}/>} active={activeSection} onClick={setActiveSection} label="Awards" />
// // // // //              <NavButton id="volunteering" icon={<Heart size={20}/>} active={activeSection} onClick={setActiveSection} label="Volunteering" />
// // // // //           </div>

// // // // //           {/* INPUT FORM AREA */}
// // // // //           <div className="w-[450px] bg-white border-r border-slate-200 flex flex-col z-30 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
// // // // //              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
// // // // //                 <div className="mb-8">
// // // // //                     <h2 className="text-xl font-bold text-slate-900 mb-1 capitalize">{activeSection.replace(/([A-Z])/g, ' $1').trim()}</h2>
// // // // //                     <p className="text-xs text-slate-500">Fill in the details below to update your resume.</p>
// // // // //                 </div>
                
// // // // //                 {activeSection === 'personal' && (
// // // // //                     <div className="space-y-5">
// // // // //                         <Input label="Full Name" value={resume.personal.name} onChange={(v) => setResume({...resume, personal: {...resume.personal, name: v}})} placeholder="e.g. Jane Doe" />
// // // // //                         <Input label="Job Title" value={resume.personal.title} onChange={(v) => setResume({...resume, personal: {...resume.personal, title: v}})} placeholder="e.g. Senior Product Designer" />
// // // // //                         <div className="grid grid-cols-2 gap-4">
// // // // //                             <Input label="Email" value={resume.personal.email} onChange={(v) => setResume({...resume, personal: {...resume.personal, email: v}})} placeholder="jane@example.com" />
// // // // //                             <Input label="Phone" value={resume.personal.phone} onChange={(v) => setResume({...resume, personal: {...resume.personal, phone: v}})} placeholder="+1 234 567 890" />
// // // // //                         </div>
// // // // //                         <Input label="Location" value={resume.personal.location} onChange={(v) => setResume({...resume, personal: {...resume.personal, location: v}})} placeholder="City, Country" />
// // // // //                         <TextArea label="Professional Summary" value={resume.personal.summary} onChange={(v) => setResume({...resume, personal: {...resume.personal, summary: v}})} placeholder="Briefly describe your professional background and key achievements..." />
// // // // //                     </div>
// // // // //                 )}

// // // // //                 {activeSection === 'skills' && (
// // // // //                     <div className="space-y-6">
// // // // //                         <TextArea label="Technical Skills" value={resume.skills.technical.join(', ')} onChange={(v) => setResume({...resume, skills: {...resume.skills, technical: v.split(',').map(s=>s.trim())}})} placeholder="Python, SQL, React..." />
// // // // //                         <TextArea label="Soft Skills" value={resume.skills.core.join(', ')} onChange={(v) => setResume({...resume, skills: {...resume.skills, core: v.split(',').map(s=>s.trim())}})} placeholder="Leadership, Communication..." />
// // // // //                     </div>
// // // // //                 )}

// // // // //                 {['experience', 'projects', 'education', 'certifications', 'awards', 'volunteering', 'languages'].includes(activeSection) && (
// // // // //                     <div className="space-y-6">
// // // // //                         {resume[activeSection].map((item, i) => (
// // // // //                             <div key={item.id} className="p-5 bg-slate-50 border border-slate-200 rounded-xl relative group transition-all hover:shadow-md hover:border-slate-300">
// // // // //                                 <button onClick={() => removeItem(activeSection, item.id)} className="absolute top-4 right-4 text-slate-400 hover:text-rose-500 transition-colors"><Trash2 size={16}/></button>
                                
// // // // //                                 <div className="space-y-4 pt-2">
// // // // //                                     {activeSection === 'experience' && (
// // // // //                                         <>
// // // // //                                             <Input label="Job Title" value={item.role} onChange={(v) => updateItem('experience', i, 'role', v)} />
// // // // //                                             <Input label="Company" value={item.company} onChange={(v) => updateItem('experience', i, 'company', v)} />
// // // // //                                             <Input label="Date Range" value={item.date} onChange={(v) => updateItem('experience', i, 'date', v)} placeholder="e.g. Jan 2020 - Present" />
// // // // //                                             <TextArea label="Description" value={item.desc} onChange={(v) => updateItem('experience', i, 'desc', v)} placeholder="• Achieved X by doing Y..." />
// // // // //                                         </>
// // // // //                                     )}
// // // // //                                     {activeSection === 'projects' && (
// // // // //                                         <>
// // // // //                                             <Input label="Project Name" value={item.name} onChange={(v) => updateItem('projects', i, 'name', v)} />
// // // // //                                             <TextArea label="Details" value={item.desc} onChange={(v) => updateItem('projects', i, 'desc', v)} />
// // // // //                                         </>
// // // // //                                     )}
// // // // //                                     {activeSection === 'education' && (
// // // // //                                         <>
// // // // //                                             <Input label="Degree" value={item.degree} onChange={(v) => updateItem('education', i, 'degree', v)} />
// // // // //                                             <Input label="School / University" value={item.school} onChange={(v) => updateItem('education', i, 'school', v)} />
// // // // //                                             <Input label="Year" value={item.date} onChange={(v) => updateItem('education', i, 'date', v)} />
// // // // //                                         </>
// // // // //                                     )}
// // // // //                                     {/* ... add similar blocks for other sections if needed ... */}
// // // // //                                     {activeSection === 'languages' && (
// // // // //                                         <div className="grid grid-cols-2 gap-4">
// // // // //                                             <Input label="Language" value={item.name} onChange={(v) => updateItem('languages', i, 'name', v)} />
// // // // //                                             <Input label="Level" value={item.level} onChange={(v) => updateItem('languages', i, 'level', v)} placeholder="e.g. Native" />
// // // // //                                         </div>
// // // // //                                     )}
// // // // //                                 </div>

// // // // //                                 <div className="mt-4 pt-4 border-t border-slate-200 flex justify-end">
// // // // //                                     <button 
// // // // //                                         onClick={() => updateItem(activeSection, i, 'pageBreak', !item.pageBreak)}
// // // // //                                         className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all ${item.pageBreak ? 'bg-teal-50 text-teal-700 border border-teal-200' : 'text-slate-400 hover:text-slate-600'}`}
// // // // //                                     >
// // // // //                                         <Zap size={12} fill={item.pageBreak ? "currentColor" : "none"}/> {item.pageBreak ? 'Page Break On' : 'Page Break'}
// // // // //                                     </button>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         ))}
                        
// // // // //                         <button 
// // // // //                             onClick={() => addItem(activeSection)} 
// // // // //                             className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl font-bold text-slate-400 text-xs hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50/50 transition-all flex items-center justify-center gap-2"
// // // // //                         >
// // // // //                             + Add Item
// // // // //                         </button>
// // // // //                     </div>
// // // // //                 )}
// // // // //              </div>
// // // // //           </div>

// // // // //           {/* LIVE PREVIEW AREA */}
// // // // //           <div className="flex-1 bg-slate-100 overflow-y-auto p-12 flex justify-center custom-scrollbar">
// // // // //              <div ref={previewRef} className="w-[210mm] min-h-[297mm] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] bg-white origin-top transition-all duration-300">
// // // // //                 <ResumePreview data={resume} template={selectedTemplate} />
// // // // //              </div>
// // // // //           </div>
// // // // //         </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Editor;

// // // // import React, { useState, useRef } from 'react';
// // // // import { 
// // // //   Download, ChevronLeft, Trash2, User, Briefcase, 
// // // //   GraduationCap, CheckCircle, Award, Globe, Layers,
// // // //   Cpu, FileText, PanelLeftClose, PanelLeftOpen, Camera, X
// // // // } from 'lucide-react';

// // // // import html2canvas from 'html2canvas';
// // // // import jsPDF from 'jspdf';
// // // // import ResumePreview from "../resume/ResumePreview"; 

// // // // // --- HELPER COMPONENTS ---

// // // // // NavItem for Sidebar
// // // // const NavItem = ({ id, icon: Icon, label, active, onClick, isOpen }) => (
// // // //   <button 
// // // //     onClick={() => onClick(id)}
// // // //     title={!isOpen ? label : ''} 
// // // //     className={`
// // // //       flex items-center gap-3 py-3 text-sm font-bold transition-all duration-200
// // // //       ${isOpen ? 'px-4 w-full rounded-r-full mr-4' : 'px-0 w-full justify-center rounded-none'}
// // // //       ${active === id 
// // // //         ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-600' 
// // // //         : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'}
// // // //     `}
// // // //   >
// // // //     <Icon size={20} />
// // // //     <span className={`whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
// // // //       {label}
// // // //     </span>
// // // //   </button>
// // // // );

// // // // const Input = ({ label, value, onChange, placeholder }) => (
// // // //   <div className="mb-4">
// // // //     <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
// // // //     <input 
// // // //       value={value || ''}
// // // //       onChange={(e) => onChange(e.target.value)}
// // // //       placeholder={placeholder}
// // // //       className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all"
// // // //     />
// // // //   </div>
// // // // );

// // // // const TextArea = ({ label, value, onChange, placeholder }) => (
// // // //   <div className="mb-4">
// // // //     <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
// // // //     <textarea 
// // // //       value={value || ''}
// // // //       onChange={(e) => onChange(e.target.value)}
// // // //       placeholder={placeholder}
// // // //       className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all h-24 resize-none"
// // // //     />
// // // //   </div>
// // // // );

// // // // // --- MAIN EDITOR ---
// // // // const Editor = ({ initialData, selectedTemplate, onBack }) => {
// // // //   const [activeSection, setActiveSection] = useState('personal');
// // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
// // // //   const previewRef = useRef(null);

// // // //   // --- 1. DATA INITIALIZATION ---
// // // //   const initializeData = (data) => {
// // // //     const safeData = {
// // // //       personal: { 
// // // //         name: '', title: '', email: '', phone: '', location: '', 
// // // //         summary: '', linkedin: '', photo: null, // Added photo & linkedin
// // // //         ...(data?.personal || {}) 
// // // //       },
// // // //       experience: Array.isArray(data?.experience) ? data.experience : [],
// // // //       education: Array.isArray(data?.education) ? data.education : [],
// // // //       skills: { 
// // // //         technical: Array.isArray(data?.skills?.technical) ? data.skills.technical : [],
// // // //         soft: Array.isArray(data?.skills?.soft) ? data.skills.soft : (Array.isArray(data?.skills?.core) ? data.skills.core : [])
// // // //       },
// // // //       projects: Array.isArray(data?.projects) ? data.projects : [],
// // // //       languages: Array.isArray(data?.languages) ? data.languages : [],
// // // //       certifications: Array.isArray(data?.certifications) ? data.certifications : [],
// // // //       awards: Array.isArray(data?.awards) ? data.awards : [] // Added awards
// // // //     };
    
// // // //     // Assign unique IDs
// // // //     ['experience', 'education', 'projects', 'languages', 'certifications', 'awards'].forEach(key => {
// // // //       safeData[key] = safeData[key].map(item => ({ ...item, id: item.id || Date.now() + Math.random() }));
// // // //     });

// // // //     return safeData;
// // // //   };

// // // //   const [resume, setResume] = useState(initializeData(initialData));

// // // //   // --- 2. HANDLERS ---
// // // //   const handlePersonalChange = (field, value) => {
// // // //     setResume(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
// // // //   };

// // // //   const handlePhotoUpload = (e) => {
// // // //     const file = e.target.files[0];
// // // //     if (file) {
// // // //       const reader = new FileReader();
// // // //       reader.onloadend = () => {
// // // //         handlePersonalChange('photo', reader.result);
// // // //       };
// // // //       reader.readAsDataURL(file);
// // // //     }
// // // //   };

// // // //   const handleSkillsChange = (type, valueString) => {
// // // //     const list = valueString.split(',').map(s => s.trim());
// // // //     setResume(prev => ({ ...prev, skills: { ...prev.skills, [type]: list } }));
// // // //   };

// // // //   const addListItem = (section) => {
// // // //     const newItem = { id: Date.now(), title: '', name: '', date: '', desc: '', issuer: '', role: '', company: '' }; 
// // // //     setResume(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
// // // //   };

// // // //   const updateListItem = (section, id, field, value) => {
// // // //     setResume(prev => ({
// // // //       ...prev,
// // // //       [section]: prev[section].map(item => item.id === id ? { ...item, [field]: value } : item)
// // // //     }));
// // // //   };

// // // //   const removeListItem = (section, id) => {
// // // //     setResume(prev => ({ ...prev, [section]: prev[section].filter(item => item.id !== id) }));
// // // //   };

// // // //   const handleDownload = async () => {
// // // //     const element = previewRef.current;
// // // //     if (!element) return;
// // // //     const canvas = await html2canvas(element, { scale: 2 });
// // // //     const imgData = canvas.toDataURL('image/png');
// // // //     const pdf = new jsPDF('p', 'mm', 'a4');
// // // //     const pdfW = pdf.internal.pageSize.getWidth();
// // // //     const pdfH = pdf.internal.pageSize.getHeight();
// // // //     pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
// // // //     pdf.save(`Resume_${resume.personal.name || 'Draft'}.pdf`);
// // // //   };

// // // //   return (
// // // //     <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      
// // // //       {/* TOP BAR */}
// // // //       <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-50">
// // // //         <div className="flex items-center gap-4">
// // // //           <button onClick={onBack} className="p-2 rounded hover:bg-slate-100 text-slate-500"><ChevronLeft size={20}/></button>
// // // //           <span className="font-bold text-slate-700 flex items-center gap-2"><FileText size={18} className="text-teal-600"/> Resume Editor</span>
// // // //         </div>
// // // //         <button onClick={handleDownload} className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">
// // // //           <Download size={16}/> Download PDF
// // // //         </button>
// // // //       </div>

// // // //       <div className="flex-1 flex overflow-hidden">
        
// // // //         {/* SIDEBAR */}
// // // //         <div 
// // // //             className={`bg-white border-r border-slate-200 py-6 overflow-y-auto shrink-0 transition-all duration-300 ease-in-out flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'}`}
// // // //         >
// // // //           <div className={`px-6 mb-6 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
// // // //             {isSidebarOpen && <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest">Sections</h2>}
// // // //             <button 
// // // //                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// // // //                 className="text-slate-400 hover:text-teal-600 transition-colors p-1 rounded-md hover:bg-slate-100"
// // // //             >
// // // //                 {isSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={20} />}
// // // //             </button>
// // // //           </div>

// // // //           <nav className="space-y-1 flex-1">
// // // //             <NavItem id="personal" icon={User} label="Personal Details" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // // //             <NavItem id="experience" icon={Briefcase} label="Experience" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // // //             <NavItem id="education" icon={GraduationCap} label="Education" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // // //             <NavItem id="skills" icon={Cpu} label="Skills" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // // //             <NavItem id="projects" icon={Layers} label="Projects" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // // //             <NavItem id="certifications" icon={CheckCircle} label="Certifications" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // // //             <NavItem id="awards" icon={Award} label="Awards" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // // //             <NavItem id="languages" icon={Globe} label="Languages" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // // //           </nav>
// // // //         </div>

// // // //         {/* EDITOR FORM AREA */}
// // // //         <div className="w-[450px] bg-slate-50 border-r border-slate-200 p-8 overflow-y-auto shrink-0">
// // // //           <div className="max-w-md mx-auto">
// // // //             <h2 className="text-2xl font-bold text-slate-900 mb-6 capitalize">{activeSection}</h2>

// // // //             {/* --- PERSONAL SECTION --- */}
// // // //             {activeSection === 'personal' && (
// // // //               <div className="space-y-4">
                
// // // //                 {/* PHOTO UPLOAD */}
// // // //                 <div className="mb-6">
// // // //                     <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Profile Picture</label>
// // // //                     <div className="flex items-center gap-4">
// // // //                         <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-300 flex items-center justify-center relative group">
// // // //                             {resume.personal.photo ? (
// // // //                                 <img src={resume.personal.photo} alt="Profile" className="w-full h-full object-cover" />
// // // //                             ) : (
// // // //                                 <User className="text-slate-400" />
// // // //                             )}
// // // //                         </div>
// // // //                         <div className="flex flex-col gap-2">
// // // //                             <label className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-md text-xs font-bold cursor-pointer hover:bg-slate-50 flex items-center gap-2">
// // // //                                 <Camera size={14}/> Upload Photo
// // // //                                 <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
// // // //                             </label>
// // // //                             {resume.personal.photo && (
// // // //                                 <button onClick={() => handlePersonalChange('photo', null)} className="text-xs text-rose-500 font-bold hover:underline flex items-center gap-1">
// // // //                                     <X size={12}/> Remove
// // // //                                 </button>
// // // //                             )}
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 <Input label="Full Name" value={resume.personal.name} onChange={(v) => handlePersonalChange('name', v)} />
// // // //                 <Input label="Job Title" value={resume.personal.title} onChange={(v) => handlePersonalChange('title', v)} />
// // // //                 <Input label="Email" value={resume.personal.email} onChange={(v) => handlePersonalChange('email', v)} />
// // // //                 <Input label="Phone" value={resume.personal.phone} onChange={(v) => handlePersonalChange('phone', v)} />
// // // //                 <Input label="LinkedIn URL" value={resume.personal.linkedin} onChange={(v) => handlePersonalChange('linkedin', v)} placeholder="linkedin.com/in/username" />
// // // //                 <Input label="Location" value={resume.personal.location} onChange={(v) => handlePersonalChange('location', v)} />
// // // //                 <TextArea label="Summary" value={resume.personal.summary} onChange={(v) => handlePersonalChange('summary', v)} />
// // // //               </div>
// // // //             )}

// // // //             {/* --- SKILLS SECTION --- */}
// // // //             {activeSection === 'skills' && (
// // // //               <div className="space-y-6">
// // // //                 <TextArea label="Technical Skills (Comma separated)" value={resume.skills.technical.join(', ')} onChange={(v) => handleSkillsChange('technical', v)} placeholder="Java, Python, React..." />
// // // //                 <TextArea label="Soft Skills (Comma separated)" value={resume.skills.soft.join(', ')} onChange={(v) => handleSkillsChange('soft', v)} placeholder="Leadership, Teamwork..." />
// // // //               </div>
// // // //             )}

// // // //             {/* --- LIST SECTIONS --- */}
// // // //             {['experience', 'education', 'projects', 'languages', 'certifications', 'awards'].includes(activeSection) && (
// // // //               <div className="space-y-6">
// // // //                 {resume[activeSection].map((item) => (
// // // //                   <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative group">
// // // //                     <button onClick={() => removeListItem(activeSection, item.id)} className="absolute top-3 right-3 text-slate-300 hover:text-rose-500"><Trash2 size={16}/></button>
                    
// // // //                     {activeSection === 'experience' && (
// // // //                       <>
// // // //                         <Input label="Role" value={item.role} onChange={(v) => updateListItem('experience', item.id, 'role', v)} />
// // // //                         <Input label="Company" value={item.company} onChange={(v) => updateListItem('experience', item.id, 'company', v)} />
// // // //                         <Input label="Date" value={item.date} onChange={(v) => updateListItem('experience', item.id, 'date', v)} />
// // // //                         <TextArea label="Description" value={item.desc} onChange={(v) => updateListItem('experience', item.id, 'desc', v)} />
// // // //                       </>
// // // //                     )}

// // // //                     {activeSection === 'education' && (
// // // //                       <>
// // // //                         <Input label="School" value={item.school} onChange={(v) => updateListItem('education', item.id, 'school', v)} />
// // // //                         <Input label="Degree" value={item.degree} onChange={(v) => updateListItem('education', item.id, 'degree', v)} />
// // // //                         <Input label="Date" value={item.date} onChange={(v) => updateListItem('education', item.id, 'date', v)} />
// // // //                       </>
// // // //                     )}
                     
// // // //                     {activeSection === 'projects' && (
// // // //                       <>
// // // //                         <Input label="Project Name" value={item.name} onChange={(v) => updateListItem('projects', item.id, 'name', v)} />
// // // //                         <TextArea label="Description" value={item.desc} onChange={(v) => updateListItem('projects', item.id, 'desc', v)} />
// // // //                       </>
// // // //                     )}

// // // //                     {/* NEW: Certifications */}
// // // //                     {activeSection === 'certifications' && (
// // // //                       <>
// // // //                         <Input label="Certificate Name" value={item.name} onChange={(v) => updateListItem('certifications', item.id, 'name', v)} />
// // // //                         <Input label="Issuing Organization" value={item.issuer} onChange={(v) => updateListItem('certifications', item.id, 'issuer', v)} />
// // // //                         <Input label="Date" value={item.date} onChange={(v) => updateListItem('certifications', item.id, 'date', v)} />
// // // //                       </>
// // // //                     )}

// // // //                     {/* NEW: Awards */}
// // // //                     {activeSection === 'awards' && (
// // // //                       <>
// // // //                         <Input label="Award Title" value={item.name} onChange={(v) => updateListItem('awards', item.id, 'name', v)} />
// // // //                         <Input label="Issuer / Organization" value={item.issuer} onChange={(v) => updateListItem('awards', item.id, 'issuer', v)} />
// // // //                         <Input label="Date" value={item.date} onChange={(v) => updateListItem('awards', item.id, 'date', v)} />
// // // //                       </>
// // // //                     )}

// // // //                      {activeSection === 'languages' && (
// // // //                       <div className="grid grid-cols-2 gap-4">
// // // //                         <Input label="Language" value={item.name} onChange={(v) => updateListItem('languages', item.id, 'name', v)} />
// // // //                         <Input label="Level" value={item.level} onChange={(v) => updateListItem('languages', item.id, 'level', v)} />
// // // //                       </div>
// // // //                     )}
// // // //                   </div>
// // // //                 ))}
// // // //                 <button onClick={() => addListItem(activeSection)} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 font-bold hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all flex items-center justify-center gap-2">
// // // //                    + Add Item
// // // //                 </button>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         {/* PREVIEW AREA */}
// // // //         <div className="flex-1 bg-slate-200 overflow-y-auto p-12 flex justify-center">
// // // //           <div ref={previewRef} className="w-[210mm] min-h-[297mm] bg-white shadow-2xl origin-top scale-[0.85] transition-all duration-300">
// // // //             <ResumePreview data={resume} template={selectedTemplate} />
// // // //           </div>
// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Editor;

// // // import React, { useState, useRef } from 'react';
// // // import { 
// // //   Download, ChevronLeft, Trash2, User, Briefcase, 
// // //   GraduationCap, CheckCircle, Award, Globe, Layers,
// // //   Cpu, FileText, PanelLeftClose, PanelLeftOpen, Camera, X, LayoutGrid, Check
// // // } from 'lucide-react';

// // // import html2canvas from 'html2canvas';
// // // import jsPDF from 'jspdf';
// // // import ResumePreview from "../resume/ResumePreview"; 
// // // import { TEMPLATES } from './TemplateGallery'; // Import your template list

// // // // --- HELPER COMPONENTS ---
// // // const NavItem = ({ id, icon: Icon, label, active, onClick, isOpen }) => (
// // //   <button 
// // //     onClick={() => onClick(id)}
// // //     title={!isOpen ? label : ''} 
// // //     className={`
// // //       flex items-center gap-3 py-3 text-sm font-bold transition-all duration-200
// // //       ${isOpen ? 'px-4 w-full rounded-r-full mr-4' : 'px-0 w-full justify-center rounded-none'}
// // //       ${active === id 
// // //         ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-600' 
// // //         : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'}
// // //     `}
// // //   >
// // //     <Icon size={20} />
// // //     <span className={`whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
// // //       {label}
// // //     </span>
// // //   </button>
// // // );

// // // const Input = ({ label, value, onChange, placeholder }) => (
// // //   <div className="mb-4">
// // //     <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
// // //     <input 
// // //       value={value || ''}
// // //       onChange={(e) => onChange(e.target.value)}
// // //       placeholder={placeholder}
// // //       className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all"
// // //     />
// // //   </div>
// // // );

// // // const TextArea = ({ label, value, onChange, placeholder }) => (
// // //   <div className="mb-4">
// // //     <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
// // //     <textarea 
// // //       value={value || ''}
// // //       onChange={(e) => onChange(e.target.value)}
// // //       placeholder={placeholder}
// // //       className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all h-24 resize-none"
// // //     />
// // //   </div>
// // // );

// // // // --- MAIN EDITOR ---
// // // const Editor = ({ initialData, selectedTemplate, onChangeTemplate, onBack }) => {
// // //   const [activeSection, setActiveSection] = useState('personal');
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
// // //   const previewRef = useRef(null);

// // //   // --- 1. DATA INITIALIZATION ---
// // //   const initializeData = (data) => {
// // //     const safeData = {
// // //       personal: { 
// // //         name: '', title: '', email: '', phone: '', location: '', 
// // //         summary: '', linkedin: '', photo: null,
// // //         ...(data?.personal || {}) 
// // //       },
// // //       experience: Array.isArray(data?.experience) ? data.experience : [],
// // //       education: Array.isArray(data?.education) ? data.education : [],
// // //       skills: { 
// // //         technical: Array.isArray(data?.skills?.technical) ? data.skills.technical : [],
// // //         soft: Array.isArray(data?.skills?.soft) ? data.skills.soft : (Array.isArray(data?.skills?.core) ? data.skills.core : [])
// // //       },
// // //       projects: Array.isArray(data?.projects) ? data.projects : [],
// // //       languages: Array.isArray(data?.languages) ? data.languages : [],
// // //       certifications: Array.isArray(data?.certifications) ? data.certifications : [],
// // //       awards: Array.isArray(data?.awards) ? data.awards : []
// // //     };
    
// // //     ['experience', 'education', 'projects', 'languages', 'certifications', 'awards'].forEach(key => {
// // //       safeData[key] = safeData[key].map(item => ({ ...item, id: item.id || Date.now() + Math.random() }));
// // //     });

// // //     return safeData;
// // //   };

// // //   const [resume, setResume] = useState(initializeData(initialData));

// // //   // --- 2. HANDLERS ---
// // //   const handlePersonalChange = (field, value) => {
// // //     setResume(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
// // //   };

// // //   const handlePhotoUpload = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       const reader = new FileReader();
// // //       reader.onloadend = () => {
// // //         handlePersonalChange('photo', reader.result);
// // //       };
// // //       reader.readAsDataURL(file);
// // //     }
// // //   };

// // //   const handleSkillsChange = (type, valueString) => {
// // //     const list = valueString.split(',').map(s => s.trim());
// // //     setResume(prev => ({ ...prev, skills: { ...prev.skills, [type]: list } }));
// // //   };

// // //   const addListItem = (section) => {
// // //     const newItem = { id: Date.now(), title: '', name: '', date: '', desc: '', issuer: '', role: '', company: '' }; 
// // //     setResume(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
// // //   };

// // //   const updateListItem = (section, id, field, value) => {
// // //     setResume(prev => ({
// // //       ...prev,
// // //       [section]: prev[section].map(item => item.id === id ? { ...item, [field]: value } : item)
// // //     }));
// // //   };

// // //   const removeListItem = (section, id) => {
// // //     setResume(prev => ({ ...prev, [section]: prev[section].filter(item => item.id !== id) }));
// // //   };

// // //   const handleDownload = async () => {
// // //     const element = previewRef.current;
// // //     if (!element) return;
// // //     const canvas = await html2canvas(element, { scale: 2 });
// // //     const imgData = canvas.toDataURL('image/png');
// // //     const pdf = new jsPDF('p', 'mm', 'a4');
// // //     const pdfW = pdf.internal.pageSize.getWidth();
// // //     const pdfH = pdf.internal.pageSize.getHeight();
// // //     pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
// // //     pdf.save(`Resume_${resume.personal.name || 'Draft'}.pdf`);
// // //   };

// // //   return (
// // //     <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      
// // //       {/* TOP BAR */}
// // //       <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-50">
// // //         <div className="flex items-center gap-4">
// // //           <button onClick={onBack} className="p-2 rounded hover:bg-slate-100 text-slate-500"><ChevronLeft size={20}/></button>
// // //           <span className="font-bold text-slate-700 flex items-center gap-2"><FileText size={18} className="text-teal-600"/> Resume Editor</span>
// // //         </div>
// // //         <button onClick={handleDownload} className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">
// // //           <Download size={16}/> Download PDF
// // //         </button>
// // //       </div>

// // //       <div className="flex-1 flex overflow-hidden">
        
// // //         {/* SIDEBAR */}
// // //         <div className={`bg-white border-r border-slate-200 py-6 overflow-y-auto shrink-0 transition-all duration-300 ease-in-out flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
// // //           <div className={`px-6 mb-6 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
// // //             {isSidebarOpen && <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest">Sections</h2>}
// // //             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-400 hover:text-teal-600 transition-colors p-1 rounded-md hover:bg-slate-100">
// // //                 {isSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={20} />}
// // //             </button>
// // //           </div>

// // //           <nav className="space-y-1 flex-1">
// // //             <NavItem id="templates" icon={LayoutGrid} label="Change Template" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // //             <div className="my-4 border-t border-slate-100 mx-4"></div>
// // //             <NavItem id="personal" icon={User} label="Personal Details" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // //             <NavItem id="experience" icon={Briefcase} label="Experience" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // //             <NavItem id="education" icon={GraduationCap} label="Education" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // //             <NavItem id="skills" icon={Cpu} label="Skills" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // //             <NavItem id="projects" icon={Layers} label="Projects" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // //             <NavItem id="certifications" icon={CheckCircle} label="Certifications" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // //             <NavItem id="awards" icon={Award} label="Awards" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // //             <NavItem id="languages" icon={Globe} label="Languages" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// // //           </nav>
// // //         </div>

// // //         {/* EDITOR FORM AREA */}
// // //         <div className="w-[450px] bg-slate-50 border-r border-slate-200 p-8 overflow-y-auto shrink-0">
// // //           <div className="max-w-md mx-auto">
// // //             <h2 className="text-2xl font-bold text-slate-900 mb-6 capitalize">
// // //                 {activeSection === 'templates' ? 'Select Template' : activeSection}
// // //             </h2>

// // //             {/* --- TEMPLATE PICKER (NEW) --- */}
// // //             {activeSection === 'templates' && (
// // //                 <div className="grid grid-cols-2 gap-4">
// // //                     {TEMPLATES.map(tpl => (
// // //                         <div 
// // //                             key={tpl.id} 
// // //                             onClick={() => onChangeTemplate(tpl.id)}
// // //                             className={`
// // //                                 cursor-pointer rounded-xl border-2 overflow-hidden relative transition-all hover:scale-[1.02]
// // //                                 ${selectedTemplate === tpl.id ? 'border-teal-600 ring-2 ring-teal-600/20' : 'border-slate-200 hover:border-teal-400'}
// // //                             `}
// // //                         >
// // //                             <div className="h-32 bg-slate-200 w-full relative">
// // //                                 {/* Placeholder for thumbnail - ideally map this to an image */}
// // //                                 <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
// // //                                     {tpl.name}
// // //                                 </div>
// // //                                 <div className="absolute inset-0 bg-slate-900/10 opacity-0 hover:opacity-100 transition-opacity"></div>
// // //                             </div>
// // //                             <div className="p-3 bg-white flex justify-between items-center">
// // //                                 <span className="text-xs font-bold text-slate-700 truncate">{tpl.name}</span>
// // //                                 {selectedTemplate === tpl.id && <CheckCircle size={14} className="text-teal-600"/>}
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             )}

// // //             {/* --- PERSONAL SECTION --- */}
// // //             {activeSection === 'personal' && (
// // //               <div className="space-y-4">
// // //                 <div className="mb-6">
// // //                     <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Profile Picture</label>
// // //                     <div className="flex items-center gap-4">
// // //                         <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-300 flex items-center justify-center relative group">
// // //                             {resume.personal.photo ? <img src={resume.personal.photo} alt="Profile" className="w-full h-full object-cover" /> : <User className="text-slate-400" />}
// // //                         </div>
// // //                         <div className="flex flex-col gap-2">
// // //                             <label className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-md text-xs font-bold cursor-pointer hover:bg-slate-50 flex items-center gap-2">
// // //                                 <Camera size={14}/> Upload <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
// // //                             </label>
// // //                             {resume.personal.photo && <button onClick={() => handlePersonalChange('photo', null)} className="text-xs text-rose-500 font-bold hover:underline flex items-center gap-1"><X size={12}/> Remove</button>}
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //                 <Input label="Full Name" value={resume.personal.name} onChange={(v) => handlePersonalChange('name', v)} />
// // //                 <Input label="Job Title" value={resume.personal.title} onChange={(v) => handlePersonalChange('title', v)} />
// // //                 <Input label="Email" value={resume.personal.email} onChange={(v) => handlePersonalChange('email', v)} />
// // //                 <Input label="Phone" value={resume.personal.phone} onChange={(v) => handlePersonalChange('phone', v)} />
// // //                 <Input label="LinkedIn URL" value={resume.personal.linkedin} onChange={(v) => handlePersonalChange('linkedin', v)} />
// // //                 <Input label="Location" value={resume.personal.location} onChange={(v) => handlePersonalChange('location', v)} />
// // //                 <TextArea label="Summary" value={resume.personal.summary} onChange={(v) => handlePersonalChange('summary', v)} />
// // //               </div>
// // //             )}

// // //             {/* --- OTHER SECTIONS (Same as before) --- */}
// // //             {activeSection === 'skills' && (
// // //               <div className="space-y-6">
// // //                 <TextArea label="Technical Skills" value={resume.skills.technical.join(', ')} onChange={(v) => handleSkillsChange('technical', v)} />
// // //                 <TextArea label="Soft Skills" value={resume.skills.soft.join(', ')} onChange={(v) => handleSkillsChange('soft', v)} />
// // //               </div>
// // //             )}

// // //             {['experience', 'education', 'projects', 'languages', 'certifications', 'awards'].includes(activeSection) && (
// // //               <div className="space-y-6">
// // //                 {resume[activeSection].map((item) => (
// // //                   <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative group">
// // //                     <button onClick={() => removeListItem(activeSection, item.id)} className="absolute top-3 right-3 text-slate-300 hover:text-rose-500"><Trash2 size={16}/></button>
// // //                     {activeSection === 'experience' && (
// // //                       <>
// // //                         <Input label="Role" value={item.role} onChange={(v) => updateListItem('experience', item.id, 'role', v)} />
// // //                         <Input label="Company" value={item.company} onChange={(v) => updateListItem('experience', item.id, 'company', v)} />
// // //                         <Input label="Date" value={item.date} onChange={(v) => updateListItem('experience', item.id, 'date', v)} />
// // //                         <TextArea label="Description" value={item.desc} onChange={(v) => updateListItem('experience', item.id, 'desc', v)} />
// // //                       </>
// // //                     )}
// // //                     {activeSection === 'education' && (
// // //                       <>
// // //                         <Input label="School" value={item.school} onChange={(v) => updateListItem('education', item.id, 'school', v)} />
// // //                         <Input label="Degree" value={item.degree} onChange={(v) => updateListItem('education', item.id, 'degree', v)} />
// // //                         <Input label="Date" value={item.date} onChange={(v) => updateListItem('education', item.id, 'date', v)} />
// // //                       </>
// // //                     )}
// // //                     {activeSection === 'projects' && (
// // //                       <>
// // //                         <Input label="Name" value={item.name} onChange={(v) => updateListItem('projects', item.id, 'name', v)} />
// // //                         <TextArea label="Description" value={item.desc} onChange={(v) => updateListItem('projects', item.id, 'desc', v)} />
// // //                       </>
// // //                     )}
// // //                     {activeSection === 'certifications' && (
// // //                       <>
// // //                         <Input label="Name" value={item.name} onChange={(v) => updateListItem('certifications', item.id, 'name', v)} />
// // //                         <Input label="Issuer" value={item.issuer} onChange={(v) => updateListItem('certifications', item.id, 'issuer', v)} />
// // //                         <Input label="Date" value={item.date} onChange={(v) => updateListItem('certifications', item.id, 'date', v)} />
// // //                       </>
// // //                     )}
// // //                     {activeSection === 'awards' && (
// // //                       <>
// // //                         <Input label="Award" value={item.name} onChange={(v) => updateListItem('awards', item.id, 'name', v)} />
// // //                         <Input label="Issuer" value={item.issuer} onChange={(v) => updateListItem('awards', item.id, 'issuer', v)} />
// // //                         <Input label="Date" value={item.date} onChange={(v) => updateListItem('awards', item.id, 'date', v)} />
// // //                       </>
// // //                     )}
// // //                     {activeSection === 'languages' && (
// // //                       <div className="grid grid-cols-2 gap-4">
// // //                         <Input label="Language" value={item.name} onChange={(v) => updateListItem('languages', item.id, 'name', v)} />
// // //                         <Input label="Level" value={item.level} onChange={(v) => updateListItem('languages', item.id, 'level', v)} />
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 ))}
// // //                 <button onClick={() => addListItem(activeSection)} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 font-bold hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all"> + Add Item </button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>

// // //         {/* PREVIEW AREA */}
// // //         <div className="flex-1 bg-slate-200 overflow-y-auto p-12 flex justify-center">
// // //           <div ref={previewRef} className="w-[210mm] min-h-[297mm] bg-white shadow-2xl origin-top scale-[0.85] transition-all duration-300">
// // //             <ResumePreview data={resume} template={selectedTemplate} />
// // //           </div>
// // //         </div>

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Editor;

// // import React, { useState, useRef } from 'react';
// // import { 
// //   Download, ChevronLeft, Trash2, User, Briefcase, 
// //   GraduationCap, CheckCircle, Award, Globe, Layers,
// //   Cpu, FileText, PanelLeftClose, PanelLeftOpen, Camera, X, LayoutGrid
// // } from 'lucide-react';

// // import html2canvas from 'html2canvas';
// // import jsPDF from 'jspdf';
// // import ResumePreview from "../resume/ResumePreview"; 
// // import { TEMPLATES } from './TemplateGallery'; 

// // // --- HELPER COMPONENTS ---
// // const NavItem = ({ id, icon: Icon, label, active, onClick, isOpen }) => (
// //   <button 
// //     onClick={() => onClick(id)}
// //     title={!isOpen ? label : ''} 
// //     className={`
// //       flex items-center gap-3 py-3 text-sm font-bold transition-all duration-200
// //       ${isOpen ? 'px-4 w-full rounded-r-full mr-4' : 'px-0 w-full justify-center rounded-none'}
// //       ${active === id 
// //         ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-600' 
// //         : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'}
// //     `}
// //   >
// //     <Icon size={20} />
// //     <span className={`whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
// //       {label}
// //     </span>
// //   </button>
// // );

// // const Input = ({ label, value, onChange, placeholder }) => (
// //   <div className="mb-4">
// //     <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
// //     <input 
// //       value={value || ''}
// //       onChange={(e) => onChange(e.target.value)}
// //       placeholder={placeholder}
// //       className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all"
// //     />
// //   </div>
// // );

// // const TextArea = ({ label, value, onChange, placeholder }) => (
// //   <div className="mb-4">
// //     <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
// //     <textarea 
// //       value={value || ''}
// //       onChange={(e) => onChange(e.target.value)}
// //       placeholder={placeholder}
// //       className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all h-24 resize-none"
// //     />
// //   </div>
// // );

// // // --- MAIN EDITOR ---
// // const Editor = ({ initialData, selectedTemplate, onChangeTemplate, onBack }) => {
// //   const [activeSection, setActiveSection] = useState('personal');
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
// //   const previewRef = useRef(null);

// //   // --- DATA INITIALIZATION ---
// //   const initializeData = (data) => {
// //     const safeData = {
// //       personal: { 
// //         name: '', title: '', email: '', phone: '', location: '', 
// //         summary: '', linkedin: '', photo: null,
// //         ...(data?.personal || {}) 
// //       },
// //       experience: Array.isArray(data?.experience) ? data.experience : [],
// //       education: Array.isArray(data?.education) ? data.education : [],
// //       skills: { 
// //         technical: Array.isArray(data?.skills?.technical) ? data.skills.technical : [],
// //         soft: Array.isArray(data?.skills?.soft) ? data.skills.soft : (Array.isArray(data?.skills?.core) ? data.skills.core : [])
// //       },
// //       projects: Array.isArray(data?.projects) ? data.projects : [],
// //       languages: Array.isArray(data?.languages) ? data.languages : [],
// //       certifications: Array.isArray(data?.certifications) ? data.certifications : [],
// //       awards: Array.isArray(data?.awards) ? data.awards : []
// //     };
    
// //     ['experience', 'education', 'projects', 'languages', 'certifications', 'awards'].forEach(key => {
// //       safeData[key] = safeData[key].map(item => ({ ...item, id: item.id || Date.now() + Math.random() }));
// //     });

// //     return safeData;
// //   };

// //   const [resume, setResume] = useState(initializeData(initialData));

// //   // --- HANDLERS ---
// //   const handlePersonalChange = (field, value) => {
// //     setResume(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
// //   };

// //   const handlePhotoUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         handlePersonalChange('photo', reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSkillsChange = (type, valueString) => {
// //     const list = valueString.split(',').map(s => s.trim());
// //     setResume(prev => ({ ...prev, skills: { ...prev.skills, [type]: list } }));
// //   };

// //   const addListItem = (section) => {
// //     const newItem = { id: Date.now(), title: '', name: '', date: '', desc: '', issuer: '', role: '', company: '' }; 
// //     setResume(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
// //   };

// //   const updateListItem = (section, id, field, value) => {
// //     setResume(prev => ({
// //       ...prev,
// //       [section]: prev[section].map(item => item.id === id ? { ...item, [field]: value } : item)
// //     }));
// //   };

// //   const removeListItem = (section, id) => {
// //     setResume(prev => ({ ...prev, [section]: prev[section].filter(item => item.id !== id) }));
// //   };

// //   // --- MULTI-PAGE PDF GENERATION FIX ---
// //   const handleDownload = async () => {
// //     const element = previewRef.current;
// //     if (!element) return;

// //     // 1. Capture the element at high resolution
// //     const canvas = await html2canvas(element, { scale: 2, useCORS: true });
// //     const imgData = canvas.toDataURL('image/png');

// //     // 2. Setup PDF (A4 size)
// //     const pdf = new jsPDF('p', 'mm', 'a4');
// //     const pageWidth = pdf.internal.pageSize.getWidth();   // 210mm
// //     const pageHeight = pdf.internal.pageSize.getHeight(); // 297mm

// //     // 3. Calculate dimensions
// //     const imgWidth = pageWidth; 
// //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
// //     let heightLeft = imgHeight;
// //     let position = 0;

// //     // 4. Add First Page
// //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
// //     heightLeft -= pageHeight;

// //     // 5. Add Extra Pages if content overflows
// //     while (heightLeft > 0) {
// //       position = heightLeft - imgHeight;
// //       pdf.addPage();
// //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
// //       heightLeft -= pageHeight;
// //     }

// //     pdf.save(`Resume_${resume.personal.name || 'Export'}.pdf`);
// //   };

// //   return (
// //     <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      
// //       {/* TOP BAR */}
// //       <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-50">
// //         <div className="flex items-center gap-4">
// //           <button onClick={onBack} className="p-2 rounded hover:bg-slate-100 text-slate-500"><ChevronLeft size={20}/></button>
// //           <span className="font-bold text-slate-700 flex items-center gap-2"><FileText size={18} className="text-teal-600"/> Resume Editor</span>
// //         </div>
// //         <button onClick={handleDownload} className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md active:scale-95">
// //           <Download size={16}/> Download PDF
// //         </button>
// //       </div>

// //       <div className="flex-1 flex overflow-hidden">
        
// //         {/* SIDEBAR */}
// //         <div className={`bg-white border-r border-slate-200 py-6 overflow-y-auto shrink-0 transition-all duration-300 ease-in-out flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
// //           <div className={`px-6 mb-6 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
// //             {isSidebarOpen && <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest">Sections</h2>}
// //             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-400 hover:text-teal-600 transition-colors p-1 rounded-md hover:bg-slate-100">
// //                 {isSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={20} />}
// //             </button>
// //           </div>

// //           <nav className="space-y-1 flex-1">
// //             <NavItem id="templates" icon={LayoutGrid} label="Change Template" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// //             <div className="my-4 border-t border-slate-100 mx-4"></div>
// //             <NavItem id="personal" icon={User} label="Personal Details" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// //             <NavItem id="experience" icon={Briefcase} label="Experience" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// //             <NavItem id="education" icon={GraduationCap} label="Education" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// //             <NavItem id="skills" icon={Cpu} label="Skills" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// //             <NavItem id="projects" icon={Layers} label="Projects" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// //             <NavItem id="certifications" icon={CheckCircle} label="Certifications" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// //             <NavItem id="awards" icon={Award} label="Awards" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// //             <NavItem id="languages" icon={Globe} label="Languages" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
// //           </nav>
// //         </div>

// //         {/* EDITOR FORM */}
// //         <div className="w-[450px] bg-slate-50 border-r border-slate-200 p-8 overflow-y-auto shrink-0">
// //            {/* ... (Keep your Form Logic exact same as before) ... */}
// //            {/* Just rendering the Form content again for completeness */}
// //            <div className="max-w-md mx-auto">
// //             <h2 className="text-2xl font-bold text-slate-900 mb-6 capitalize">
// //                 {activeSection === 'templates' ? 'Select Template' : activeSection}
// //             </h2>

// //             {/* TEMPLATE PICKER */}
// //             {activeSection === 'templates' && (
// //                 <div className="grid grid-cols-2 gap-4">
// //                     {TEMPLATES.map(tpl => (
// //                         <div key={tpl.id} onClick={() => onChangeTemplate(tpl.id)} className={`cursor-pointer rounded-xl border-2 overflow-hidden relative transition-all hover:scale-[1.02] ${selectedTemplate === tpl.id ? 'border-teal-600 ring-2 ring-teal-600/20' : 'border-slate-200 hover:border-teal-400'}`}>
// //                             <div className="h-32 bg-slate-200 w-full flex items-center justify-center text-[10px] font-bold uppercase">{tpl.name}</div>
// //                             <div className="p-3 bg-white"><span className="text-xs font-bold text-slate-700">{tpl.name}</span></div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             )}
            
// //             {/* PERSONAL */}
// //             {activeSection === 'personal' && (
// //               <div className="space-y-4">
// //                  <div className="mb-6">
// //                     <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Profile Picture</label>
// //                     <div className="flex items-center gap-4">
// //                         <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-300 flex items-center justify-center relative group">
// //                             {resume.personal.photo ? <img src={resume.personal.photo} alt="Profile" className="w-full h-full object-cover" /> : <User className="text-slate-400" />}
// //                         </div>
// //                         <label className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-md text-xs font-bold cursor-pointer hover:bg-slate-50 flex items-center gap-2">
// //                              <Camera size={14}/> Upload <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
// //                         </label>
// //                     </div>
// //                 </div>
// //                 <Input label="Full Name" value={resume.personal.name} onChange={(v) => handlePersonalChange('name', v)} />
// //                 <Input label="Job Title" value={resume.personal.title} onChange={(v) => handlePersonalChange('title', v)} />
// //                 <Input label="Email" value={resume.personal.email} onChange={(v) => handlePersonalChange('email', v)} />
// //                 <Input label="Phone" value={resume.personal.phone} onChange={(v) => handlePersonalChange('phone', v)} />
// //                 <Input label="LinkedIn" value={resume.personal.linkedin} onChange={(v) => handlePersonalChange('linkedin', v)} />
// //                 <Input label="Location" value={resume.personal.location} onChange={(v) => handlePersonalChange('location', v)} />
// //                 <TextArea label="Summary" value={resume.personal.summary} onChange={(v) => handlePersonalChange('summary', v)} />
// //               </div>
// //             )}
            
// //             {/* SKILLS */}
// //             {activeSection === 'skills' && (
// //               <div className="space-y-6">
// //                 <TextArea label="Technical Skills" value={resume.skills.technical.join(', ')} onChange={(v) => handleSkillsChange('technical', v)} />
// //                 <TextArea label="Soft Skills" value={resume.skills.soft.join(', ')} onChange={(v) => handleSkillsChange('soft', v)} />
// //               </div>
// //             )}

// //             {/* LISTS */}
// //             {['experience', 'education', 'projects', 'languages', 'certifications', 'awards'].includes(activeSection) && (
// //               <div className="space-y-6">
// //                 {resume[activeSection].map((item) => (
// //                   <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative group">
// //                     <button onClick={() => removeListItem(activeSection, item.id)} className="absolute top-3 right-3 text-slate-300 hover:text-rose-500"><Trash2 size={16}/></button>
// //                     {activeSection === 'experience' && (<><Input label="Role" value={item.role} onChange={(v) => updateListItem('experience', item.id, 'role', v)} /><Input label="Company" value={item.company} onChange={(v) => updateListItem('experience', item.id, 'company', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('experience', item.id, 'date', v)} /><TextArea label="Description" value={item.desc} onChange={(v) => updateListItem('experience', item.id, 'desc', v)} /></>)}
// //                     {activeSection === 'education' && (<><Input label="School" value={item.school} onChange={(v) => updateListItem('education', item.id, 'school', v)} /><Input label="Degree" value={item.degree} onChange={(v) => updateListItem('education', item.id, 'degree', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('education', item.id, 'date', v)} /></>)}
// //                     {activeSection === 'projects' && (<><Input label="Project Name" value={item.name} onChange={(v) => updateListItem('projects', item.id, 'name', v)} /><TextArea label="Description" value={item.desc} onChange={(v) => updateListItem('projects', item.id, 'desc', v)} /></>)}
// //                     {activeSection === 'awards' && (<><Input label="Award Name" value={item.name} onChange={(v) => updateListItem('awards', item.id, 'name', v)} /><Input label="Issuer" value={item.issuer} onChange={(v) => updateListItem('awards', item.id, 'issuer', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('awards', item.id, 'date', v)} /></>)}
// //                     {activeSection === 'certifications' && (<><Input label="Certificate Name" value={item.name} onChange={(v) => updateListItem('certifications', item.id, 'name', v)} /><Input label="Issuer" value={item.issuer} onChange={(v) => updateListItem('certifications', item.id, 'issuer', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('certifications', item.id, 'date', v)} /></>)}
// //                     {activeSection === 'languages' && (<div className="grid grid-cols-2 gap-4"><Input label="Language" value={item.name} onChange={(v) => updateListItem('languages', item.id, 'name', v)} /><Input label="Level" value={item.level} onChange={(v) => updateListItem('languages', item.id, 'level', v)} /></div>)}
// //                   </div>
// //                 ))}
// //                 <button onClick={() => addListItem(activeSection)} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 font-bold hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all"> + Add Item </button>
// //               </div>
// //             )}
// //            </div>
// //         </div>

// //         {/* PREVIEW AREA (FIXED FOR OVERFLOW) */}
// //         <div className="flex-1 bg-slate-200 overflow-y-auto p-12 flex justify-center">
// //             {/* Added 'h-auto' to allow expansion beyond 297mm if content is long */}
// //             <div 
// //                 ref={previewRef} 
// //                 className="w-[210mm] min-h-[297mm] h-auto bg-white shadow-2xl origin-top scale-[0.85] transition-all duration-300"
// //             >
// //                 <ResumePreview data={resume} template={selectedTemplate} />
// //             </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Editor;

// import React, { useState, useRef } from 'react';
// import { 
//   Download, ChevronLeft, Trash2, User, Briefcase, 
//   GraduationCap, CheckCircle, Award, Globe, Layers,
//   Cpu, FileText, PanelLeftClose, PanelLeftOpen, Camera, X, LayoutGrid
// } from 'lucide-react';

// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import ResumePreview from "../resume/ResumePreview"; 
// import { TEMPLATES } from './TemplateGallery'; 

// // --- HELPER COMPONENTS ---
// const NavItem = ({ id, icon: Icon, label, active, onClick, isOpen }) => (
//   <button 
//     onClick={() => onClick(id)}
//     title={!isOpen ? label : ''} 
//     className={`
//       flex items-center gap-3 py-3 text-sm font-bold transition-all duration-200
//       ${isOpen ? 'px-4 w-full rounded-r-full mr-4' : 'px-0 w-full justify-center rounded-none'}
//       ${active === id 
//         ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-600' 
//         : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'}
//     `}
//   >
//     <Icon size={20} />
//     <span className={`whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
//       {label}
//     </span>
//   </button>
// );

// const Input = ({ label, value, onChange, placeholder }) => (
//   <div className="mb-4">
//     <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
//     <input 
//       value={value || ''}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all"
//     />
//   </div>
// );

// const TextArea = ({ label, value, onChange, placeholder }) => (
//   <div className="mb-4">
//     <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
//     <textarea 
//       value={value || ''}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all h-24 resize-none"
//     />
//   </div>
// );

// // --- MAIN EDITOR ---
// const Editor = ({ initialData, selectedTemplate, onChangeTemplate, onBack }) => {
//   const [activeSection, setActiveSection] = useState('personal');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
//   const previewRef = useRef(null);

//   // --- DATA INITIALIZATION ---
//   const initializeData = (data) => {
//     // Helper to ensure we get an array, even if data is missing or malformed
//     const getList = (arr) => Array.isArray(arr) ? arr : [];

//     const safeData = {
//       personal: { 
//         name: '', title: '', email: '', phone: '', location: '', 
//         summary: '', linkedin: '', photo: null,
//         ...(data?.personal || {}) 
//       },
//       experience: getList(data?.experience),
//       education: getList(data?.education),
//       skills: { 
//         technical: getList(data?.skills?.technical),
//         // FIX: Map 'soft' or 'core' to 'core' so templates can read it
//         core: getList(data?.skills?.core || data?.skills?.soft) 
//       },
//       projects: getList(data?.projects),
//       languages: getList(data?.languages),
//       certifications: getList(data?.certifications),
//       awards: getList(data?.awards)
//     };
    
//     // Assign unique IDs to everything to prevent key warnings
//     ['experience', 'education', 'projects', 'languages', 'certifications', 'awards'].forEach(key => {
//       safeData[key] = safeData[key].map(item => ({ ...item, id: item.id || Date.now() + Math.random() }));
//     });

//     return safeData;
//   };

//   const [resume, setResume] = useState(initializeData(initialData));

//   // --- HANDLERS ---
//   const handlePersonalChange = (field, value) => {
//     setResume(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         handlePersonalChange('photo', reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSkillsChange = (type, valueString) => {
//     const list = valueString.split(',').map(s => s.trim());
//     // FIX: Updates 'core' instead of 'soft'
//     setResume(prev => ({ ...prev, skills: { ...prev.skills, [type]: list } }));
//   };

//   const addListItem = (section) => {
//     const newItem = { id: Date.now(), title: '', name: '', date: '', desc: '', issuer: '', role: '', company: '' }; 
//     setResume(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
//   };

//   const updateListItem = (section, id, field, value) => {
//     setResume(prev => ({
//       ...prev,
//       [section]: prev[section].map(item => item.id === id ? { ...item, [field]: value } : item)
//     }));
//   };

//   const removeListItem = (section, id) => {
//     setResume(prev => ({ ...prev, [section]: prev[section].filter(item => item.id !== id) }));
//   };

//   // --- PDF GENERATION ---
//   const handleDownload = async () => {
//     const element = previewRef.current;
//     if (!element) return;

//     const canvas = await html2canvas(element, { scale: 2, useCORS: true });
//     const imgData = canvas.toDataURL('image/png');

//     const pdf = new jsPDF('p', 'mm', 'a4');
//     const pageWidth = pdf.internal.pageSize.getWidth();   
//     const pageHeight = pdf.internal.pageSize.getHeight(); 

//     const imgWidth = pageWidth; 
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
//     let heightLeft = imgHeight;
//     let position = 0;

//     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//     heightLeft -= pageHeight;

//     while (heightLeft > 0) {
//       position = heightLeft - imgHeight;
//       pdf.addPage();
//       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;
//     }

//     pdf.save(`Resume_${resume.personal.name || 'Export'}.pdf`);
//   };

//   return (
//     <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      
//       {/* TOP BAR */}
//       <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-50">
//         <div className="flex items-center gap-4">
//           <button onClick={onBack} className="p-2 rounded hover:bg-slate-100 text-slate-500"><ChevronLeft size={20}/></button>
//           <span className="font-bold text-slate-700 flex items-center gap-2"><FileText size={18} className="text-teal-600"/> Resume Editor</span>
//         </div>
//         <button onClick={handleDownload} className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md active:scale-95">
//           <Download size={16}/> Download PDF
//         </button>
//       </div>

//       <div className="flex-1 flex overflow-hidden">
        
//         {/* SIDEBAR */}
//         <div className={`bg-white border-r border-slate-200 py-6 overflow-y-auto shrink-0 transition-all duration-300 ease-in-out flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
//           <div className={`px-6 mb-6 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
//             {isSidebarOpen && <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest">Sections</h2>}
//             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-400 hover:text-teal-600 transition-colors p-1 rounded-md hover:bg-slate-100">
//                 {isSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={20} />}
//             </button>
//           </div>

//           <nav className="space-y-1 flex-1">
//             <NavItem id="templates" icon={LayoutGrid} label="Change Template" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <div className="my-4 border-t border-slate-100 mx-4"></div>
//             <NavItem id="personal" icon={User} label="Personal Details" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="experience" icon={Briefcase} label="Experience" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="education" icon={GraduationCap} label="Education" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="skills" icon={Cpu} label="Skills" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="projects" icon={Layers} label="Projects" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="certifications" icon={CheckCircle} label="Certifications" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="awards" icon={Award} label="Awards" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="languages" icon={Globe} label="Languages" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//           </nav>
//         </div>

//         {/* EDITOR FORM */}
//         <div className="w-[450px] bg-slate-50 border-r border-slate-200 p-8 overflow-y-auto shrink-0">
//            <div className="max-w-md mx-auto">
//             <h2 className="text-2xl font-bold text-slate-900 mb-6 capitalize">
//                 {activeSection === 'templates' ? 'Select Template' : activeSection}
//             </h2>

//             {/* TEMPLATE PICKER */}
//             {activeSection === 'templates' && (
//                 <div className="grid grid-cols-2 gap-4">
//                     {TEMPLATES.map(tpl => (
//                         <div key={tpl.id} onClick={() => onChangeTemplate(tpl.id)} className={`cursor-pointer rounded-xl border-2 overflow-hidden relative transition-all hover:scale-[1.02] ${selectedTemplate === tpl.id ? 'border-teal-600 ring-2 ring-teal-600/20' : 'border-slate-200 hover:border-teal-400'}`}>
//                             <div className="h-32 bg-slate-200 w-full flex items-center justify-center text-[10px] font-bold uppercase">{tpl.name}</div>
//                             <div className="p-3 bg-white"><span className="text-xs font-bold text-slate-700">{tpl.name}</span></div>
//                         </div>
//                     ))}
//                 </div>
//             )}
            
//             {/* PERSONAL */}
//             {activeSection === 'personal' && (
//               <div className="space-y-4">
//                  <div className="mb-6">
//                     <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Profile Picture</label>
//                     <div className="flex items-center gap-4">
//                         <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-300 flex items-center justify-center relative group">
//                             {resume.personal.photo ? <img src={resume.personal.photo} alt="Profile" className="w-full h-full object-cover" /> : <User className="text-slate-400" />}
//                         </div>
//                         <label className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-md text-xs font-bold cursor-pointer hover:bg-slate-50 flex items-center gap-2">
//                              <Camera size={14}/> Upload <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
//                         </label>
//                     </div>
//                 </div>
//                 <Input label="Full Name" value={resume.personal.name} onChange={(v) => handlePersonalChange('name', v)} />
//                 <Input label="Job Title" value={resume.personal.title} onChange={(v) => handlePersonalChange('title', v)} />
//                 <Input label="Email" value={resume.personal.email} onChange={(v) => handlePersonalChange('email', v)} />
//                 <Input label="Phone" value={resume.personal.phone} onChange={(v) => handlePersonalChange('phone', v)} />
//                 <Input label="LinkedIn" value={resume.personal.linkedin} onChange={(v) => handlePersonalChange('linkedin', v)} />
//                 <Input label="Location" value={resume.personal.location} onChange={(v) => handlePersonalChange('location', v)} />
//                 <TextArea label="Summary" value={resume.personal.summary} onChange={(v) => handlePersonalChange('summary', v)} />
//               </div>
//             )}
            
//             {/* SKILLS */}
//             {activeSection === 'skills' && (
//               <div className="space-y-6">
//                 {/* FIX: Using 'technical' and 'core' to match templates */}
//                 <TextArea label="Technical Skills" value={resume.skills.technical.join(', ')} onChange={(v) => handleSkillsChange('technical', v)} />
//                 <TextArea label="Core / Soft Skills" value={resume.skills.core.join(', ')} onChange={(v) => handleSkillsChange('core', v)} />
//               </div>
//             )}

//             {/* LISTS */}
//             {['experience', 'education', 'projects', 'languages', 'certifications', 'awards'].includes(activeSection) && (
//               <div className="space-y-6">
//                 {resume[activeSection].map((item) => (
//                   <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative group">
//                     <button onClick={() => removeListItem(activeSection, item.id)} className="absolute top-3 right-3 text-slate-300 hover:text-rose-500"><Trash2 size={16}/></button>
//                     {activeSection === 'experience' && (<><Input label="Role" value={item.role} onChange={(v) => updateListItem('experience', item.id, 'role', v)} /><Input label="Company" value={item.company} onChange={(v) => updateListItem('experience', item.id, 'company', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('experience', item.id, 'date', v)} /><TextArea label="Description" value={item.desc} onChange={(v) => updateListItem('experience', item.id, 'desc', v)} /></>)}
//                     {activeSection === 'education' && (<><Input label="School" value={item.school} onChange={(v) => updateListItem('education', item.id, 'school', v)} /><Input label="Degree" value={item.degree} onChange={(v) => updateListItem('education', item.id, 'degree', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('education', item.id, 'date', v)} /></>)}
//                     {activeSection === 'projects' && (<><Input label="Project Name" value={item.name} onChange={(v) => updateListItem('projects', item.id, 'name', v)} /><TextArea label="Description" value={item.desc} onChange={(v) => updateListItem('projects', item.id, 'desc', v)} /></>)}
//                     {activeSection === 'awards' && (<><Input label="Award Name" value={item.name} onChange={(v) => updateListItem('awards', item.id, 'name', v)} /><Input label="Issuer" value={item.issuer} onChange={(v) => updateListItem('awards', item.id, 'issuer', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('awards', item.id, 'date', v)} /></>)}
//                     {activeSection === 'certifications' && (<><Input label="Certificate Name" value={item.name} onChange={(v) => updateListItem('certifications', item.id, 'name', v)} /><Input label="Issuer" value={item.issuer} onChange={(v) => updateListItem('certifications', item.id, 'issuer', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('certifications', item.id, 'date', v)} /></>)}
//                     {activeSection === 'languages' && (<div className="grid grid-cols-2 gap-4"><Input label="Language" value={item.name} onChange={(v) => updateListItem('languages', item.id, 'name', v)} /><Input label="Level" value={item.level} onChange={(v) => updateListItem('languages', item.id, 'level', v)} /></div>)}
//                   </div>
//                 ))}
//                 <button onClick={() => addListItem(activeSection)} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 font-bold hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all"> + Add Item </button>
//               </div>
//             )}
//            </div>
//         </div>

//         {/* PREVIEW AREA */}
//         <div className="flex-1 bg-slate-200 overflow-y-auto p-12 flex justify-center">
//             <div 
//                 ref={previewRef} 
//                 className="w-[210mm] min-h-[297mm] h-auto bg-white shadow-2xl origin-top scale-[0.85] transition-all duration-300"
//             >
//                 <ResumePreview data={resume} template={selectedTemplate} />
//             </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Editor;

// import React, { useState, useRef } from 'react';
// import { 
//   Download, ChevronLeft, Trash2, User, Briefcase, 
//   GraduationCap, CheckCircle, Award, Globe, Layers,
//   Cpu, FileText, PanelLeftClose, PanelLeftOpen, Camera, X, LayoutGrid
// } from 'lucide-react';

// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import ResumePreview from "../resume/ResumePreview"; 
// import ResumeThumbnail from "../resume/ResumeThumbnail"; // <--- NEW IMPORT
// import { TEMPLATES } from './TemplateGallery'; 

// // --- HELPER COMPONENTS ---
// const NavItem = ({ id, icon: Icon, label, active, onClick, isOpen }) => (
//   <button 
//     onClick={() => onClick(id)}
//     title={!isOpen ? label : ''} 
//     className={`
//       flex items-center gap-3 py-3 text-sm font-bold transition-all duration-200
//       ${isOpen ? 'px-4 w-full rounded-r-full mr-4' : 'px-0 w-full justify-center rounded-none'}
//       ${active === id 
//         ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-600' 
//         : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'}
//     `}
//   >
//     <Icon size={20} />
//     <span className={`whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
//       {label}
//     </span>
//   </button>
// );

// const Input = ({ label, value, onChange, placeholder }) => (
//   <div className="mb-4">
//     <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
//     <input 
//       value={value || ''}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all"
//     />
//   </div>
// );

// const TextArea = ({ label, value, onChange, placeholder }) => (
//   <div className="mb-4">
//     <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
//     <textarea 
//       value={value || ''}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all h-24 resize-none"
//     />
//   </div>
// );

// // --- MAIN EDITOR ---
// const Editor = ({ initialData, selectedTemplate, onChangeTemplate, onBack }) => {
//   const [activeSection, setActiveSection] = useState('personal');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
//   const previewRef = useRef(null);

//   // --- DATA INITIALIZATION ---
//   const initializeData = (data) => {
//     const getList = (arr) => Array.isArray(arr) ? arr : [];
    
//     // Normalize skills to ensure 'core' and 'soft' are synced initially
//     const softSkills = getList(data?.skills?.soft || data?.skills?.core);

//     const safeData = {
//       personal: { 
//         name: '', title: '', email: '', phone: '', location: '', 
//         summary: '', linkedin: '', photo: null,
//         ...(data?.personal || {}) 
//       },
//       experience: getList(data?.experience),
//       education: getList(data?.education),
//       skills: { 
//         technical: getList(data?.skills?.technical),
//         soft: softSkills,
//         core: softSkills // Dual mapping for compatibility
//       },
//       projects: getList(data?.projects),
//       languages: getList(data?.languages),
//       certifications: getList(data?.certifications),
//       awards: getList(data?.awards)
//     };
    
//     ['experience', 'education', 'projects', 'languages', 'certifications', 'awards'].forEach(key => {
//       safeData[key] = safeData[key].map(item => ({ ...item, id: item.id || Date.now() + Math.random() }));
//     });

//     return safeData;
//   };

//   const [resume, setResume] = useState(initializeData(initialData));

//   // --- HANDLERS ---
//   const handlePersonalChange = (field, value) => {
//     setResume(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         handlePersonalChange('photo', reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSkillsChange = (type, valueString) => {
//     const list = valueString.split(',').map(s => s.trim());
//     if (type === 'soft' || type === 'core') {
//         // Update both to keep templates in sync
//         setResume(prev => ({ ...prev, skills: { ...prev.skills, soft: list, core: list } }));
//     } else {
//         setResume(prev => ({ ...prev, skills: { ...prev.skills, [type]: list } }));
//     }
//   };

//   const addListItem = (section) => {
//     const newItem = { id: Date.now(), title: '', name: '', date: '', desc: '', issuer: '', role: '', company: '' }; 
//     setResume(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
//   };

//   const updateListItem = (section, id, field, value) => {
//     setResume(prev => ({
//       ...prev,
//       [section]: prev[section].map(item => item.id === id ? { ...item, [field]: value } : item)
//     }));
//   };

//   const removeListItem = (section, id) => {
//     setResume(prev => ({ ...prev, [section]: prev[section].filter(item => item.id !== id) }));
//   };

//   // --- PDF GENERATION ---
//   const handleDownload = async () => {
//     const element = previewRef.current;
//     if (!element) return;

//     const canvas = await html2canvas(element, { scale: 2, useCORS: true });
//     const imgData = canvas.toDataURL('image/png');

//     const pdf = new jsPDF('p', 'mm', 'a4');
//     const pageWidth = pdf.internal.pageSize.getWidth();   
//     const pageHeight = pdf.internal.pageSize.getHeight(); 

//     const imgWidth = pageWidth; 
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
//     let heightLeft = imgHeight;
//     let position = 0;

//     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//     heightLeft -= pageHeight;

//     while (heightLeft > 0) {
//       position = heightLeft - imgHeight;
//       pdf.addPage();
//       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;
//     }

//     pdf.save(`Resume_${resume.personal.name || 'Export'}.pdf`);
//   };

//   return (
//     <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      
//       {/* TOP BAR */}
//       <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-50">
//         <div className="flex items-center gap-4">
//           <button onClick={onBack} className="p-2 rounded hover:bg-slate-100 text-slate-500"><ChevronLeft size={20}/></button>
//           <span className="font-bold text-slate-700 flex items-center gap-2"><FileText size={18} className="text-teal-600"/> Resume Editor</span>
//         </div>
//         <button onClick={handleDownload} className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md active:scale-95">
//           <Download size={16}/> Download PDF
//         </button>
//       </div>

//       <div className="flex-1 flex overflow-hidden">
        
//         {/* SIDEBAR */}
//         <div className={`bg-white border-r border-slate-200 py-6 overflow-y-auto shrink-0 transition-all duration-300 ease-in-out flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
//           <div className={`px-6 mb-6 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
//             {isSidebarOpen && <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest">Sections</h2>}
//             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-400 hover:text-teal-600 transition-colors p-1 rounded-md hover:bg-slate-100">
//                 {isSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={20} />}
//             </button>
//           </div>

//           <nav className="space-y-1 flex-1">
//             <NavItem id="templates" icon={LayoutGrid} label="Change Template" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <div className="my-4 border-t border-slate-100 mx-4"></div>
//             <NavItem id="personal" icon={User} label="Personal Details" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="experience" icon={Briefcase} label="Experience" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="education" icon={GraduationCap} label="Education" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="skills" icon={Cpu} label="Skills" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="projects" icon={Layers} label="Projects" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="certifications" icon={CheckCircle} label="Certifications" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="awards" icon={Award} label="Awards" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//             <NavItem id="languages" icon={Globe} label="Languages" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
//           </nav>
//         </div>

//         {/* EDITOR FORM AREA */}
//         <div className="w-[450px] bg-slate-50 border-r border-slate-200 p-8 overflow-y-auto shrink-0">
//            <div className="max-w-md mx-auto">
//             <h2 className="text-2xl font-bold text-slate-900 mb-6 capitalize">
//                 {activeSection === 'templates' ? 'Select Template' : activeSection}
//             </h2>

//             {/* --- LIVE TEMPLATE PREVIEW PICKER --- */}
//             {activeSection === 'templates' && (
//                 <div className="grid grid-cols-2 gap-4">
//                     {TEMPLATES.map(tpl => (
//                         <div 
//                             key={tpl.id} 
//                             onClick={() => onChangeTemplate(tpl.id)} 
//                             className={`
//                                 cursor-pointer rounded-xl border-2 overflow-hidden relative transition-all hover:scale-[1.02] group
//                                 ${selectedTemplate === tpl.id ? 'border-teal-600 ring-2 ring-teal-600/20' : 'border-slate-200 hover:border-teal-400'}
//                             `}
//                         >
//                             {/* LIVE PREVIEW CONTAINER */}
//                             <div className="h-40 w-full bg-slate-100 overflow-hidden relative">
//                                 <div className="absolute top-0 left-0 w-[400%] h-[400%] transform scale-[0.25] origin-top-left pointer-events-none select-none bg-white">
//                                     <ResumeThumbnail templateId={tpl.id} data={resume} />
//                                 </div>
//                                 {/* Hover overlay */}
//                                 <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors"></div>
//                             </div>
                            
//                             <div className="p-3 bg-white border-t border-slate-100">
//                                 <span className="text-xs font-bold text-slate-700 block truncate">{tpl.name}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
            
//             {/* PERSONAL */}
//             {activeSection === 'personal' && (
//               <div className="space-y-4">
//                  <div className="mb-6">
//                     <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Profile Picture</label>
//                     <div className="flex items-center gap-4">
//                         <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-300 flex items-center justify-center relative group">
//                             {resume.personal.photo ? <img src={resume.personal.photo} alt="Profile" className="w-full h-full object-cover" /> : <User className="text-slate-400" />}
//                         </div>
//                         <label className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-md text-xs font-bold cursor-pointer hover:bg-slate-50 flex items-center gap-2">
//                              <Camera size={14}/> Upload <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
//                         </label>
//                     </div>
//                 </div>
//                 <Input label="Full Name" value={resume.personal.name} onChange={(v) => handlePersonalChange('name', v)} />
//                 <Input label="Job Title" value={resume.personal.title} onChange={(v) => handlePersonalChange('title', v)} />
//                 <Input label="Email" value={resume.personal.email} onChange={(v) => handlePersonalChange('email', v)} />
//                 <Input label="Phone" value={resume.personal.phone} onChange={(v) => handlePersonalChange('phone', v)} />
//                 <Input label="LinkedIn" value={resume.personal.linkedin} onChange={(v) => handlePersonalChange('linkedin', v)} />
//                 <Input label="Location" value={resume.personal.location} onChange={(v) => handlePersonalChange('location', v)} />
//                 <TextArea label="Summary" value={resume.personal.summary} onChange={(v) => handlePersonalChange('summary', v)} />
//               </div>
//             )}
            
//             {/* SKILLS */}
//             {activeSection === 'skills' && (
//               <div className="space-y-6">
//                 <TextArea label="Technical Skills" value={resume.skills.technical.join(', ')} onChange={(v) => handleSkillsChange('technical', v)} />
//                 <TextArea label="Core / Soft Skills" value={resume.skills.core.join(', ')} onChange={(v) => handleSkillsChange('core', v)} />
//               </div>
//             )}

//             {/* LISTS */}
//             {['experience', 'education', 'projects', 'languages', 'certifications', 'awards'].includes(activeSection) && (
//               <div className="space-y-6">
//                 {resume[activeSection].map((item) => (
//                   <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative group">
//                     <button onClick={() => removeListItem(activeSection, item.id)} className="absolute top-3 right-3 text-slate-300 hover:text-rose-500"><Trash2 size={16}/></button>
//                     {activeSection === 'experience' && (<><Input label="Role" value={item.role} onChange={(v) => updateListItem('experience', item.id, 'role', v)} /><Input label="Company" value={item.company} onChange={(v) => updateListItem('experience', item.id, 'company', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('experience', item.id, 'date', v)} /><TextArea label="Description" value={item.desc} onChange={(v) => updateListItem('experience', item.id, 'desc', v)} /></>)}
//                     {activeSection === 'education' && (<><Input label="School" value={item.school} onChange={(v) => updateListItem('education', item.id, 'school', v)} /><Input label="Degree" value={item.degree} onChange={(v) => updateListItem('education', item.id, 'degree', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('education', item.id, 'date', v)} /></>)}
//                     {activeSection === 'projects' && (<><Input label="Project Name" value={item.name} onChange={(v) => updateListItem('projects', item.id, 'name', v)} /><TextArea label="Description" value={item.desc} onChange={(v) => updateListItem('projects', item.id, 'desc', v)} /></>)}
//                     {activeSection === 'awards' && (<><Input label="Award Name" value={item.name} onChange={(v) => updateListItem('awards', item.id, 'name', v)} /><Input label="Issuer" value={item.issuer} onChange={(v) => updateListItem('awards', item.id, 'issuer', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('awards', item.id, 'date', v)} /></>)}
//                     {activeSection === 'certifications' && (<><Input label="Certificate Name" value={item.name} onChange={(v) => updateListItem('certifications', item.id, 'name', v)} /><Input label="Issuer" value={item.issuer} onChange={(v) => updateListItem('certifications', item.id, 'issuer', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('certifications', item.id, 'date', v)} /></>)}
//                     {activeSection === 'languages' && (<div className="grid grid-cols-2 gap-4"><Input label="Language" value={item.name} onChange={(v) => updateListItem('languages', item.id, 'name', v)} /><Input label="Level" value={item.level} onChange={(v) => updateListItem('languages', item.id, 'level', v)} /></div>)}
//                   </div>
//                 ))}
//                 <button onClick={() => addListItem(activeSection)} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 font-bold hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all"> + Add Item </button>
//               </div>
//             )}
//            </div>
//         </div>

//         {/* PREVIEW AREA */}
//         <div className="flex-1 bg-slate-200 overflow-y-auto p-12 flex justify-center">
//             <div 
//                 ref={previewRef} 
//                 className="w-[210mm] min-h-[297mm] h-auto bg-white shadow-2xl origin-top scale-[0.85] transition-all duration-300"
//             >
//                 <ResumePreview data={resume} template={selectedTemplate} />
//             </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Editor;



import React, { useState, useRef } from 'react';
import { 
  Download, ChevronLeft, Trash2, User, Briefcase, 
  GraduationCap, CheckCircle, Award, Globe, Layers,
  Cpu, FileText, PanelLeftClose, PanelLeftOpen, Camera, X, LayoutGrid, Sparkles
} from 'lucide-react';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ResumePreview from "../resume/ResumePreview"; 
import ResumeThumbnail from "../resume/ResumeThumbnail"; 
import { TEMPLATES } from './TemplateGallery'; 

// --- NEW IMPORT FOR AI FEATURE ---
import AIEnhanceModal from './AIEnhanceModal'; 

// --- HELPER COMPONENTS ---
const NavItem = ({ id, icon: Icon, label, active, onClick, isOpen }) => (
  <button 
    onClick={() => onClick(id)}
    title={!isOpen ? label : ''} 
    className={`
      flex items-center gap-3 py-3 text-sm font-bold transition-all duration-200
      ${isOpen ? 'px-4 w-full rounded-r-full mr-4' : 'px-0 w-full justify-center rounded-none'}
      ${active === id 
        ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-600' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'}
    `}
  >
    <Icon size={20} />
    <span className={`whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
      {label}
    </span>
  </button>
);

const Input = ({ label, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
    <input 
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all"
    />
  </div>
);

const TextArea = ({ label, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
    <textarea 
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all h-24 resize-none"
    />
  </div>
);

// --- AI ENHANCEABLE TEXT AREA ---
const AIEnhanceableTextArea = ({ label, value, onChange, placeholder, onEnhanceClick }) => (
  <div className="mb-4 relative group">
    <div className="flex justify-between items-end mb-1.5">
      <label className="block text-xs font-bold text-slate-500 uppercase">{label}</label>
      
      {/* Sparkle Button (Only shows if there is text to enhance) */}
      {value && value.length > 10 && (
        <button 
          onClick={onEnhanceClick}
          className="text-[10px] font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-1 rounded border border-teal-100 hover:bg-teal-100 hover:shadow-sm transition-all flex items-center gap-1"
          title="Rewrite using AI"
        >
          <Sparkles size={10} /> Enhance with AI
        </button>
      )}
    </div>
    
    <textarea 
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all h-32 resize-none"
    />
  </div>
);

// --- MAIN EDITOR ---
const Editor = ({ initialData, selectedTemplate, onChangeTemplate, onBack }) => {
  const [activeSection, setActiveSection] = useState('personal');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  const [isFormOpen, setIsFormOpen] = useState(true); // State for hiding the form
  const previewRef = useRef(null);

  // --- AI MODAL STATE ---
  const [aiModalConfig, setAiModalConfig] = useState({
    isOpen: false,
    text: '',
    type: '',
    onApply: null
  });

  // --- DATA INITIALIZATION ---
  const initializeData = (data) => {
    const getList = (arr) => Array.isArray(arr) ? arr : [];
    
    // Normalize skills to ensure 'core' and 'soft' are synced initially
    const softSkills = getList(data?.skills?.soft || data?.skills?.core);

    const safeData = {
      personal: { 
        name: '', title: '', email: '', phone: '', location: '', 
        summary: '', linkedin: '', photo: null,
        ...(data?.personal || {}) 
      },
      experience: getList(data?.experience),
      education: getList(data?.education),
      skills: { 
        technical: getList(data?.skills?.technical),
        soft: softSkills,
        core: softSkills // Dual mapping for compatibility
      },
      projects: getList(data?.projects),
      languages: getList(data?.languages),
      certifications: getList(data?.certifications),
      awards: getList(data?.awards)
    };
    
    ['experience', 'education', 'projects', 'languages', 'certifications', 'awards'].forEach(key => {
      safeData[key] = safeData[key].map(item => ({ ...item, id: item.id || Date.now() + Math.random() }));
    });

    return safeData;
  };

  const [resume, setResume] = useState(initializeData(initialData));

  // --- HANDLERS ---
  const handlePersonalChange = (field, value) => {
    setResume(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handlePersonalChange('photo', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSkillsChange = (type, valueString) => {
    const list = valueString.split(',').map(s => s.trim());
    if (type === 'soft' || type === 'core') {
        // Update both to keep templates in sync
        setResume(prev => ({ ...prev, skills: { ...prev.skills, soft: list, core: list } }));
    } else {
        setResume(prev => ({ ...prev, skills: { ...prev.skills, [type]: list } }));
    }
  };

  const addListItem = (section) => {
    const newItem = { id: Date.now(), title: '', name: '', date: '', desc: '', issuer: '', role: '', company: '' }; 
    setResume(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
  };

  const updateListItem = (section, id, field, value) => {
    setResume(prev => ({
      ...prev,
      [section]: prev[section].map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const removeListItem = (section, id) => {
    setResume(prev => ({ ...prev, [section]: prev[section].filter(item => item.id !== id) }));
  };

  // --- PDF GENERATION ---
  const handleDownload = async () => {
    const element = previewRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();   
    const pageHeight = pdf.internal.pageSize.getHeight(); 

    const imgWidth = pageWidth; 
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`Resume_${resume.personal.name || 'Export'}.pdf`);
  };

  // --- AI ENHANCE HANDLER ---
  const openAIModal = (textToEnhance, type, applyCallback) => {
    setAiModalConfig({
      isOpen: true,
      text: textToEnhance,
      type: type,
      onApply: applyCallback
    });
  };

  return (
    <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-900 relative overflow-hidden">
      
      {/* AI ENHANCER MODAL OVERLAY */}
      <AIEnhanceModal 
        isOpen={aiModalConfig.isOpen}
        currentText={aiModalConfig.text}
        contextType={aiModalConfig.type}
        jobTitle={resume.personal.title || "Professional"}
        onClose={() => setAiModalConfig({ ...aiModalConfig, isOpen: false })}
        onSelect={(newText) => {
          if (aiModalConfig.onApply) aiModalConfig.onApply(newText);
        }}
      />

      {/* TOP BAR */}
      <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-40 relative">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 rounded hover:bg-slate-100 text-slate-500"><ChevronLeft size={20}/></button>
          <span className="font-bold text-slate-700 flex items-center gap-2"><FileText size={18} className="text-teal-600"/> Resume Editor</span>
        </div>
        <div className="flex items-center gap-3">
          {/* Hide/Show Editor Toggle Button */}
          <button 
            onClick={() => setIsFormOpen(!isFormOpen)} 
            className="bg-white border border-slate-200 text-slate-700 px-5 py-2 rounded-lg text-sm font-bold flex items-center hover:bg-slate-50 transition-all shadow-sm active:scale-95"
          >
            {isFormOpen ? 'Review Resume' : 'Edit Resume'}
          </button>
          <button onClick={handleDownload} className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md active:scale-95">
            <Download size={16}/> Download PDF
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        
        {/* SIDEBAR */}
        <div className={`bg-white border-r border-slate-200 py-6 overflow-y-auto shrink-0 transition-all duration-300 ease-in-out flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'} z-10 relative`}>
          <div className={`px-6 mb-6 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
            {isSidebarOpen && <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest">Sections</h2>}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-400 hover:text-teal-600 transition-colors p-1 rounded-md hover:bg-slate-100">
                {isSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={20} />}
            </button>
          </div>

          <nav className="space-y-1 flex-1">
            <NavItem id="templates" icon={LayoutGrid} label="Change Template" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
            <div className="my-4 border-t border-slate-100 mx-4"></div>
            <NavItem id="personal" icon={User} label="Personal Details" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
            <NavItem id="experience" icon={Briefcase} label="Experience" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
            <NavItem id="education" icon={GraduationCap} label="Education" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
            <NavItem id="skills" icon={Cpu} label="Skills" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
            <NavItem id="projects" icon={Layers} label="Projects" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
            <NavItem id="certifications" icon={CheckCircle} label="Certifications" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
            <NavItem id="awards" icon={Award} label="Awards" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
            <NavItem id="languages" icon={Globe} label="Languages" active={activeSection} onClick={setActiveSection} isOpen={isSidebarOpen} />
          </nav>
        </div>

        {/* EDITOR FORM AREA */}
        {/* Added dynamic width class logic here to open/close the form completely */}
        <div className={`bg-slate-50 border-r border-slate-200 overflow-y-auto shrink-0 z-0 relative transition-all duration-300 ease-in-out ${isFormOpen ? 'w-[450px] p-8 opacity-100' : 'w-0 p-0 opacity-0 border-none overflow-hidden'}`}>
           <div className="max-w-md mx-auto w-[386px]"> {/* Locked inner width so inputs don't squash when animating closed */}
            <h2 className="text-2xl font-bold text-slate-900 mb-6 capitalize">
                {activeSection === 'templates' ? 'Select Template' : activeSection}
            </h2>

            {/* --- LIVE TEMPLATE PREVIEW PICKER --- */}
            {activeSection === 'templates' && (
                <div className="grid grid-cols-2 gap-4">
                    {TEMPLATES.map(tpl => (
                        <div 
                            key={tpl.id} 
                            onClick={() => onChangeTemplate(tpl.id)} // This triggers the App.jsx state properly!
                            className={`
                                cursor-pointer rounded-xl border-2 overflow-hidden relative transition-all hover:scale-[1.02] group
                                ${selectedTemplate === tpl.id ? 'border-teal-600 ring-2 ring-teal-600/20' : 'border-slate-200 hover:border-teal-400'}
                            `}
                        >
                            {/* LIVE PREVIEW CONTAINER */}
                            <div className="h-40 w-full bg-slate-100 overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-[400%] h-[400%] transform scale-[0.25] origin-top-left pointer-events-none select-none bg-white">
                                    {/* Make sure Thumbnail receives the actual updated 'resume' state so previews are live */}
                                    <ResumeThumbnail templateId={tpl.id} data={resume} />
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors"></div>
                            </div>
                            
                            <div className="p-3 bg-white border-t border-slate-100">
                                <span className="text-xs font-bold text-slate-700 block truncate">{tpl.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {/* PERSONAL */}
            {activeSection === 'personal' && (
              <div className="space-y-4">
                 <div className="mb-6">
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Profile Picture</label>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-300 flex items-center justify-center relative group">
                            {resume.personal.photo ? <img src={resume.personal.photo} alt="Profile" className="w-full h-full object-cover" /> : <User className="text-slate-400" />}
                        </div>
                        <label className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-md text-xs font-bold cursor-pointer hover:bg-slate-50 flex items-center gap-2">
                             <Camera size={14}/> Upload <input type="file" className="hidden" accept="image/*" onChange={handlePhotoUpload} />
                        </label>
                    </div>
                </div>
                <Input label="Full Name" value={resume.personal.name} onChange={(v) => handlePersonalChange('name', v)} />
                <Input label="Job Title" value={resume.personal.title} onChange={(v) => handlePersonalChange('title', v)} />
                <Input label="Email" value={resume.personal.email} onChange={(v) => handlePersonalChange('email', v)} />
                <Input label="Phone" value={resume.personal.phone} onChange={(v) => handlePersonalChange('phone', v)} />
                <Input label="LinkedIn" value={resume.personal.linkedin} onChange={(v) => handlePersonalChange('linkedin', v)} />
                <Input label="Location" value={resume.personal.location} onChange={(v) => handlePersonalChange('location', v)} />
                <AIEnhanceableTextArea 
                  label="Professional Summary" 
                  value={resume.personal.summary} 
                  onChange={(v) => handlePersonalChange('summary', v)} 
                  onEnhanceClick={() => openAIModal(resume.personal.summary, "Professional Summary", (newText) => handlePersonalChange('summary', newText))}
                />
              </div>
            )}
            
            {/* SKILLS */}
            {activeSection === 'skills' && (
              <div className="space-y-6">
                <TextArea label="Technical Skills" value={resume.skills.technical.join(', ')} onChange={(v) => handleSkillsChange('technical', v)} />
                <TextArea label="Core / Soft Skills" value={resume.skills.core.join(', ')} onChange={(v) => handleSkillsChange('core', v)} />
              </div>
            )}

            {/* LISTS */}
            {['experience', 'education', 'projects', 'languages', 'certifications', 'awards'].includes(activeSection) && (
              <div className="space-y-6">
                {resume[activeSection].map((item) => (
                  <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative group">
                    <button onClick={() => removeListItem(activeSection, item.id)} className="absolute top-3 right-3 text-slate-300 hover:text-rose-500"><Trash2 size={16}/></button>
                    
                    {activeSection === 'experience' && (
                      <>
                        <Input label="Role" value={item.role} onChange={(v) => updateListItem('experience', item.id, 'role', v)} />
                        <Input label="Company" value={item.company} onChange={(v) => updateListItem('experience', item.id, 'company', v)} />
                        <Input label="Date" value={item.date} onChange={(v) => updateListItem('experience', item.id, 'date', v)} />
                        <AIEnhanceableTextArea 
                          label="Description (Bullet Points)" 
                          value={item.desc} 
                          onChange={(v) => updateListItem('experience', item.id, 'desc', v)}
                          onEnhanceClick={() => openAIModal(item.desc, "Work Experience Bullet Points", (newText) => updateListItem('experience', item.id, 'desc', newText))}
                        />
                      </>
                    )}
                    
                    {activeSection === 'education' && (<><Input label="School" value={item.school} onChange={(v) => updateListItem('education', item.id, 'school', v)} /><Input label="Degree" value={item.degree} onChange={(v) => updateListItem('education', item.id, 'degree', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('education', item.id, 'date', v)} /></>)}
                    
                    {activeSection === 'projects' && (
                      <>
                        <Input label="Project Name" value={item.name} onChange={(v) => updateListItem('projects', item.id, 'name', v)} />
                        <AIEnhanceableTextArea 
                          label="Project Description" 
                          value={item.desc} 
                          onChange={(v) => updateListItem('projects', item.id, 'desc', v)} 
                          onEnhanceClick={() => openAIModal(item.desc, "Project Details", (newText) => updateListItem('projects', item.id, 'desc', newText))}
                        />
                      </>
                    )}
                    
                    {activeSection === 'awards' && (<><Input label="Award Name" value={item.name} onChange={(v) => updateListItem('awards', item.id, 'name', v)} /><Input label="Issuer" value={item.issuer} onChange={(v) => updateListItem('awards', item.id, 'issuer', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('awards', item.id, 'date', v)} /></>)}
                    {activeSection === 'certifications' && (<><Input label="Certificate Name" value={item.name} onChange={(v) => updateListItem('certifications', item.id, 'name', v)} /><Input label="Issuer" value={item.issuer} onChange={(v) => updateListItem('certifications', item.id, 'issuer', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('certifications', item.id, 'date', v)} /></>)}
                    {activeSection === 'languages' && (<div className="grid grid-cols-2 gap-4"><Input label="Language" value={item.name} onChange={(v) => updateListItem('languages', item.id, 'name', v)} /><Input label="Level" value={item.level} onChange={(v) => updateListItem('languages', item.id, 'level', v)} /></div>)}
                  </div>
                ))}
                <button onClick={() => addListItem(activeSection)} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 font-bold hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all"> + Add Item </button>
              </div>
            )}
           </div>
        </div>

        {/* PREVIEW AREA */}
        <div className="flex-1 bg-slate-200 overflow-y-auto p-12 flex justify-center z-0 relative">
            <div 
                ref={previewRef} 
                className="w-[210mm] min-h-[297mm] h-auto bg-white shadow-2xl origin-top scale-[0.85] transition-all duration-300"
            >
                <ResumePreview data={resume} template={selectedTemplate} />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Editor;