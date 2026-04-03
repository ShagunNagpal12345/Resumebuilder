
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



// import React, { useState, useRef } from 'react';
// import { 
//   Download, ChevronLeft, Trash2, User, Briefcase, 
//   GraduationCap, CheckCircle, Award, Globe, Layers,
//   Cpu, FileText, PanelLeftClose, PanelLeftOpen, Camera, X, LayoutGrid, Sparkles
// } from 'lucide-react';

// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import ResumePreview from "../resume/ResumePreview"; 
// import ResumeThumbnail from "../resume/ResumeThumbnail"; 
// import { TEMPLATES } from './TemplateGallery'; 

// // --- NEW IMPORT FOR AI FEATURE ---
// import AIEnhanceModal from './AIEnhanceModal'; 

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

// // --- AI ENHANCEABLE TEXT AREA ---
// const AIEnhanceableTextArea = ({ label, value, onChange, placeholder, onEnhanceClick }) => (
//   <div className="mb-4 relative group">
//     <div className="flex justify-between items-end mb-1.5">
//       <label className="block text-xs font-bold text-slate-500 uppercase">{label}</label>
      
//       {/* Sparkle Button (Only shows if there is text to enhance) */}
//       {value && value.length > 10 && (
//         <button 
//           onClick={onEnhanceClick}
//           className="text-[10px] font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-1 rounded border border-teal-100 hover:bg-teal-100 hover:shadow-sm transition-all flex items-center gap-1"
//           title="Rewrite using AI"
//         >
//           <Sparkles size={10} /> Enhance with AI
//         </button>
//       )}
//     </div>
    
//     <textarea 
//       value={value || ''}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all h-32 resize-none"
//     />
//   </div>
// );

// // --- MAIN EDITOR ---
// const Editor = ({ initialData, selectedTemplate, onChangeTemplate, onBack }) => {
//   const [activeSection, setActiveSection] = useState('personal');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
//   const [isFormOpen, setIsFormOpen] = useState(true); // State for hiding the form
//   const previewRef = useRef(null);

//   // --- AI MODAL STATE ---
//   const [aiModalConfig, setAiModalConfig] = useState({
//     isOpen: false,
//     text: '',
//     type: '',
//     onApply: null
//   });

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

//   // --- AI ENHANCE HANDLER ---
//   const openAIModal = (textToEnhance, type, applyCallback) => {
//     setAiModalConfig({
//       isOpen: true,
//       text: textToEnhance,
//       type: type,
//       onApply: applyCallback
//     });
//   };

//   return (
//     <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-900 relative overflow-hidden">
      
//       {/* AI ENHANCER MODAL OVERLAY */}
//       <AIEnhanceModal 
//         isOpen={aiModalConfig.isOpen}
//         currentText={aiModalConfig.text}
//         contextType={aiModalConfig.type}
//         jobTitle={resume.personal.title || "Professional"}
//         onClose={() => setAiModalConfig({ ...aiModalConfig, isOpen: false })}
//         onSelect={(newText) => {
//           if (aiModalConfig.onApply) aiModalConfig.onApply(newText);
//         }}
//       />

//       {/* TOP BAR */}
//       <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-40 relative">
//         <div className="flex items-center gap-4">
//           <button onClick={onBack} className="p-2 rounded hover:bg-slate-100 text-slate-500"><ChevronLeft size={20}/></button>
//           <span className="font-bold text-slate-700 flex items-center gap-2"><FileText size={18} className="text-teal-600"/> Resume Editor</span>
//         </div>
//         <div className="flex items-center gap-3">
//           {/* Hide/Show Editor Toggle Button */}
//           <button 
//             onClick={() => setIsFormOpen(!isFormOpen)} 
//             className="bg-white border border-slate-200 text-slate-700 px-5 py-2 rounded-lg text-sm font-bold flex items-center hover:bg-slate-50 transition-all shadow-sm active:scale-95"
//           >
//             {isFormOpen ? 'Review Resume' : 'Edit Resume'}
//           </button>
//           <button onClick={handleDownload} className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md active:scale-95">
//             <Download size={16}/> Download PDF
//           </button>
//         </div>
//       </div>

//       <div className="flex-1 flex overflow-hidden">
        
//         {/* SIDEBAR */}
//         <div className={`bg-white border-r border-slate-200 py-6 overflow-y-auto shrink-0 transition-all duration-300 ease-in-out flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'} z-10 relative`}>
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
//         {/* Added dynamic width class logic here to open/close the form completely */}
//         <div className={`bg-slate-50 border-r border-slate-200 overflow-y-auto shrink-0 z-0 relative transition-all duration-300 ease-in-out ${isFormOpen ? 'w-[450px] p-8 opacity-100' : 'w-0 p-0 opacity-0 border-none overflow-hidden'}`}>
//            <div className="max-w-md mx-auto w-[386px]"> {/* Locked inner width so inputs don't squash when animating closed */}
//             <h2 className="text-2xl font-bold text-slate-900 mb-6 capitalize">
//                 {activeSection === 'templates' ? 'Select Template' : activeSection}
//             </h2>

//             {/* --- LIVE TEMPLATE PREVIEW PICKER --- */}
//             {activeSection === 'templates' && (
//                 <div className="grid grid-cols-2 gap-4">
//                     {TEMPLATES.map(tpl => (
//                         <div 
//                             key={tpl.id} 
//                             onClick={() => onChangeTemplate(tpl.id)} // This triggers the App.jsx state properly!
//                             className={`
//                                 cursor-pointer rounded-xl border-2 overflow-hidden relative transition-all hover:scale-[1.02] group
//                                 ${selectedTemplate === tpl.id ? 'border-teal-600 ring-2 ring-teal-600/20' : 'border-slate-200 hover:border-teal-400'}
//                             `}
//                         >
//                             {/* LIVE PREVIEW CONTAINER */}
//                             <div className="h-40 w-full bg-slate-100 overflow-hidden relative">
//                                 <div className="absolute top-0 left-0 w-[400%] h-[400%] transform scale-[0.25] origin-top-left pointer-events-none select-none bg-white">
//                                     {/* Make sure Thumbnail receives the actual updated 'resume' state so previews are live */}
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
//                 <AIEnhanceableTextArea 
//                   label="Professional Summary" 
//                   value={resume.personal.summary} 
//                   onChange={(v) => handlePersonalChange('summary', v)} 
//                   onEnhanceClick={() => openAIModal(resume.personal.summary, "Professional Summary", (newText) => handlePersonalChange('summary', newText))}
//                 />
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
                    
//                     {activeSection === 'experience' && (
//                       <>
//                         <Input label="Role" value={item.role} onChange={(v) => updateListItem('experience', item.id, 'role', v)} />
//                         <Input label="Company" value={item.company} onChange={(v) => updateListItem('experience', item.id, 'company', v)} />
//                         <Input label="Date" value={item.date} onChange={(v) => updateListItem('experience', item.id, 'date', v)} />
//                         <AIEnhanceableTextArea 
//                           label="Description (Bullet Points)" 
//                           value={item.desc} 
//                           onChange={(v) => updateListItem('experience', item.id, 'desc', v)}
//                           onEnhanceClick={() => openAIModal(item.desc, "Work Experience Bullet Points", (newText) => updateListItem('experience', item.id, 'desc', newText))}
//                         />
//                       </>
//                     )}
                    
//                     {activeSection === 'education' && (<><Input label="School" value={item.school} onChange={(v) => updateListItem('education', item.id, 'school', v)} /><Input label="Degree" value={item.degree} onChange={(v) => updateListItem('education', item.id, 'degree', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('education', item.id, 'date', v)} /></>)}
                    
//                     {activeSection === 'projects' && (
//                       <>
//                         <Input label="Project Name" value={item.name} onChange={(v) => updateListItem('projects', item.id, 'name', v)} />
//                         <AIEnhanceableTextArea 
//                           label="Project Description" 
//                           value={item.desc} 
//                           onChange={(v) => updateListItem('projects', item.id, 'desc', v)} 
//                           onEnhanceClick={() => openAIModal(item.desc, "Project Details", (newText) => updateListItem('projects', item.id, 'desc', newText))}
//                         />
//                       </>
//                     )}
                    
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
//         <div className="flex-1 bg-slate-200 overflow-y-auto p-12 flex justify-center z-0 relative">
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
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { 
  Download, ChevronLeft, Trash2, User, Briefcase, 
  GraduationCap, CheckCircle, Award, Globe, Layers,
  Cpu, FileText, PanelLeftClose, PanelLeftOpen, Camera, X, Eye, LayoutGrid, Sparkles, Target, ScanLine, MessageSquare, PencilLine, Scissors, ZoomIn, ZoomOut, Maximize2, RotateCcw, Save, FolderOpen
} from 'lucide-react';

import ResumePreview from "../resume/ResumePreview";
import ResumeThumbnail from "../resume/ResumeThumbnail"; 
import { TEMPLATES } from './TemplateGallery'; 
import poojaImage from '../../assets/Pooja.png';
import BuilderProgress from './BuilderProgress';
import ThemeToggleButton from '../ui/ThemeToggleButton';

// --- IMPORTS FOR AI FEATURES ---
import AIEnhanceModal from './AIEnhanceModal'; 
import ATSScoreModal from './ATSScoreModal'; 
import InterviewPrepModal from './InterviewPrepModal'; 
import { normalizeDocumentSettings } from '../resume/ResumePreview';
import { findResumeContentSurface } from '../resume/templateSurfaceUtils';
import {
  detectListMode,
  formatTextWithListMode,
  getListInsertion,
  getModePlaceholder,
  LIST_MODES,
  stripListPrefix,
} from '../../utils/listTextFormatting';
import { getResumeInsights, getTemplateRecommendations } from '../../utils/resumeInsights';
import {
  appendATSResult,
  appendInterviewPrepResult,
  getResumeRecord,
  markResumePrinted,
  saveResumeRecord,
} from '../../services/resumeRepositoryService';

const DESKTOP_PREVIEW_SCALE = 0.85;
const A4_PREVIEW_WIDTH_PX = 794;
const FONT_OPTIONS = [
  { value: 'inter', label: 'Modern Sans' },
  { value: 'rubik', label: 'Rubik' },
  { value: 'manrope', label: 'Manrope' },
  { value: 'source', label: 'Humanist Sans' },
  { value: 'lora', label: 'Lora' },
  { value: 'georgia', label: 'Classic Serif' },
  { value: 'garamond', label: 'Editorial Serif' },
  { value: 'mono', label: 'Technical Mono' },
];
const LIST_MODE_OPTIONS = [
  { value: LIST_MODES.PLAIN, label: 'None' },
  { value: LIST_MODES.BULLET, label: 'Bullets' },
  { value: LIST_MODES.NUMBER, label: 'Numbers' },
];
const SECTION_COPY = {
  document: {
    heading: 'Shape the final look',
    description: 'Tune typography, spacing, and page rhythm while keeping the live preview aligned with export.',
  },
  templates: {
    heading: 'Switch visual direction',
    description: 'Compare template personalities without losing any of your content or formatting decisions.',
  },
  'target-jd': {
    heading: 'Align to the job',
    description: 'Paste the role description here to unlock ATS scoring and interview prep against your target position.',
  },
  personal: {
    heading: 'Refine the first impression',
    description: 'Tighten your header and summary so the resume opens with clarity and confidence.',
  },
  experience: {
    heading: 'Strengthen your experience',
    description: 'Edit roles, dates, and achievements while checking how the story flows in the live preview.',
  },
  education: {
    heading: 'Keep your credentials clean',
    description: 'Confirm schools, degrees, and dates so the education section stays crisp and scan-friendly.',
  },
  skills: {
    heading: 'Organize your strengths',
    description: 'Group technical and core skills in a way that matches the role and reads quickly.',
  },
  projects: {
    heading: 'Show proof of impact',
    description: 'Use projects to reinforce the experience section with tangible examples and outcomes.',
  },
  certifications: {
    heading: 'Support your expertise',
    description: 'Add certifications that strengthen credibility without overcrowding the page.',
  },
  awards: {
    heading: 'Highlight standout wins',
    description: 'Feature recognitions that make your profile more memorable and more credible.',
  },
  languages: {
    heading: 'Add range and fluency',
    description: 'Show language coverage clearly, especially for global and client-facing roles.',
  },
};
const SECTION_STATUS_META = {
  complete: {
    label: 'Ready',
    dotClassName: 'bg-emerald-500',
    pillClassName: 'border border-emerald-100 bg-emerald-50 text-emerald-700',
  },
  progress: {
    label: 'Needs Work',
    dotClassName: 'bg-amber-500',
    pillClassName: 'border border-amber-100 bg-amber-50 text-amber-700',
  },
  empty: {
    label: 'Empty',
    dotClassName: 'bg-slate-300',
    pillClassName: 'border border-slate-200 bg-slate-100 text-slate-500',
  },
};

const getTrimmedText = (value) => (typeof value === 'string' ? value.trim() : '');

const getFilledFieldCount = (entry, fields) =>
  fields.reduce((count, field) => count + (getTrimmedText(entry?.[field]) ? 1 : 0), 0);

const getListCompletionStatus = (items, fields) => {
  if (!Array.isArray(items) || items.length === 0) return 'empty';

  const filledItems = items.filter((item) => getFilledFieldCount(item, fields) > 0);
  if (!filledItems.length) return 'empty';

  const isComplete = filledItems.every((item) => getFilledFieldCount(item, fields) === fields.length);
  return isComplete ? 'complete' : 'progress';
};

const normalizeSkillItems = (value) =>
  (Array.isArray(value) ? value : [])
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter(Boolean);

const mergeSkillItems = (...lists) => {
  const seen = new Set();

  return lists
    .flatMap((list) => normalizeSkillItems(list))
    .filter((item) => {
      const key = item.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
};

const parseDataPath = (path = '') =>
  String(path)
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .filter(Boolean);

const getValueAtPath = (source, path) =>
  parseDataPath(path).reduce((current, segment) => current?.[segment], source);

const setValueAtPath = (source, path, value) => {
  const segments = parseDataPath(path);
  if (!segments.length) return source;

  const rootClone = Array.isArray(source) ? [...source] : { ...(source || {}) };
  let targetCursor = rootClone;
  let sourceCursor = source;

  for (let index = 0; index < segments.length - 1; index += 1) {
    const segment = segments[index];
    const nextSource = sourceCursor?.[segment];
    const nextSegment = segments[index + 1];
    const nextClone = Array.isArray(nextSource)
      ? [...nextSource]
      : nextSource && typeof nextSource === 'object'
        ? { ...nextSource }
        : /^\d+$/.test(nextSegment)
          ? []
          : {};

    targetCursor[segment] = nextClone;
    targetCursor = nextClone;
    sourceCursor = nextSource;
  }

  const finalSegment = segments[segments.length - 1];
  const existingValue = sourceCursor?.[finalSegment];
  targetCursor[finalSegment] = Array.isArray(existingValue)
    ? String(value).split(',').map((item) => item.trim()).filter(Boolean)
    : value;

  return rootClone;
};

const normalizeEditableText = (value = '') => {
  const raw = String(value ?? '');
  const cleanedLines = raw
    .split('\n')
    .map((line) => stripListPrefix(line).trim())
    .filter(Boolean);
  const normalizedSource = cleanedLines.length ? cleanedLines.join(' ') : raw;

  return normalizedSource.replace(/\s+/g, ' ').trim().toLowerCase();
};

const pushEditableDescriptor = (target, path, label, value, multiline = false) => {
  const normalizedValue = normalizeEditableText(value);
  if (!normalizedValue) return;

  target.push({
    path,
    label,
    value,
    normalizedValue,
    multiline,
  });
};

const buildEditableFieldDescriptors = (resume) => {
  const descriptors = [];

  pushEditableDescriptor(descriptors, 'personal.name', 'Full Name', resume?.personal?.name);
  pushEditableDescriptor(descriptors, 'personal.title', 'Job Title', resume?.personal?.title);
  pushEditableDescriptor(descriptors, 'personal.email', 'Email', resume?.personal?.email);
  pushEditableDescriptor(descriptors, 'personal.phone', 'Phone', resume?.personal?.phone);
  pushEditableDescriptor(descriptors, 'personal.location', 'Location', resume?.personal?.location);
  pushEditableDescriptor(descriptors, 'personal.linkedin', 'LinkedIn', resume?.personal?.linkedin);
  pushEditableDescriptor(descriptors, 'personal.summary', 'Professional Summary', resume?.personal?.summary, true);

  (resume?.experience || []).forEach((item, index) => {
    pushEditableDescriptor(descriptors, `experience[${index}].role`, 'Experience Role', item?.role);
    pushEditableDescriptor(descriptors, `experience[${index}].company`, 'Experience Company', item?.company);
    pushEditableDescriptor(descriptors, `experience[${index}].date`, 'Experience Date', item?.date);
    pushEditableDescriptor(descriptors, `experience[${index}].desc`, 'Experience Description', item?.desc, true);
  });

  (resume?.education || []).forEach((item, index) => {
    pushEditableDescriptor(descriptors, `education[${index}].degree`, 'Education Degree', item?.degree);
    pushEditableDescriptor(descriptors, `education[${index}].school`, 'Education School', item?.school);
    pushEditableDescriptor(descriptors, `education[${index}].date`, 'Education Date', item?.date);
  });

  (resume?.projects || []).forEach((item, index) => {
    pushEditableDescriptor(descriptors, `projects[${index}].name`, 'Project Name', item?.name);
    pushEditableDescriptor(descriptors, `projects[${index}].desc`, 'Project Description', item?.desc, true);
  });

  (resume?.certifications || []).forEach((item, index) => {
    pushEditableDescriptor(descriptors, `certifications[${index}].name`, 'Certification Name', item?.name);
    pushEditableDescriptor(descriptors, `certifications[${index}].issuer`, 'Certification Issuer', item?.issuer);
    pushEditableDescriptor(descriptors, `certifications[${index}].date`, 'Certification Date', item?.date);
  });

  (resume?.awards || []).forEach((item, index) => {
    pushEditableDescriptor(descriptors, `awards[${index}].name`, 'Award Name', item?.name);
    pushEditableDescriptor(descriptors, `awards[${index}].issuer`, 'Award Issuer', item?.issuer);
    pushEditableDescriptor(descriptors, `awards[${index}].date`, 'Award Date', item?.date);
  });

  (resume?.languages || []).forEach((item, index) => {
    pushEditableDescriptor(descriptors, `languages[${index}].name`, 'Language', item?.name);
    pushEditableDescriptor(descriptors, `languages[${index}].level`, 'Language Level', item?.level);
  });

  (resume?.volunteering || []).forEach((item, index) => {
    pushEditableDescriptor(descriptors, `volunteering[${index}].role`, 'Volunteering Role', item?.role);
    pushEditableDescriptor(descriptors, `volunteering[${index}].org`, 'Volunteering Organization', item?.org);
    pushEditableDescriptor(descriptors, `volunteering[${index}].date`, 'Volunteering Date', item?.date);
    pushEditableDescriptor(descriptors, `volunteering[${index}].desc`, 'Volunteering Description', item?.desc, true);
  });

  ['technical', 'core'].forEach((group) => {
    (resume?.skills?.[group] || []).forEach((item, index) => {
      pushEditableDescriptor(
        descriptors,
        `skills.${group}[${index}]`,
        group === 'technical' ? 'Technical Skill' : 'Core Skill',
        item
      );
    });
  });

  return descriptors.sort((a, b) => b.normalizedValue.length - a.normalizedValue.length);
};

const EDITABLE_PREVIEW_SELECTOR = 'h1,h2,h3,h4,h5,h6,p,span,div,li,ul,ol';

const findBestEditableElementMatch = (candidates, descriptor) => {
  let bestMatch = null;

  candidates.forEach((element) => {
    const elementText = normalizeEditableText(element.innerText || element.textContent || '');
    if (!elementText) return;

    let score = null;

    if (elementText === descriptor.normalizedValue) {
      score = elementText.length;
    } else if (
      elementText.includes(descriptor.normalizedValue) &&
      elementText.length <= descriptor.normalizedValue.length + 24
    ) {
      score = 1000 + (elementText.length - descriptor.normalizedValue.length);
    }

    if (score === null) return;

    score += element.childElementCount * 20;
    score += element.querySelectorAll('*').length;

    if (!bestMatch || score < bestMatch.score) {
      bestMatch = { element, score };
    }
  });

  return bestMatch?.element || null;
};

const autoAnnotatePreviewEditableFields = (container, resume) => {
  const previewSurface = getPreviewMeasurementRoot(container);
  if (!(previewSurface instanceof HTMLElement)) return;

  previewSurface.querySelectorAll('[data-auto-edit-path="true"]').forEach((node) => {
    node.removeAttribute('data-edit-path');
    node.removeAttribute('data-edit-label');
    node.removeAttribute('data-edit-multiline');
    node.removeAttribute('data-auto-edit-path');
  });

  const descriptors = buildEditableFieldDescriptors(resume);
  if (!descriptors.length) return;

  const candidates = Array.from(previewSurface.querySelectorAll(EDITABLE_PREVIEW_SELECTOR))
    .filter((node) => node instanceof HTMLElement)
    .filter((element) => {
      if (!(element instanceof HTMLElement)) return false;
      if (element.dataset.editPath) return false;
      if (element.closest('[data-edit-path]')) return false;
      if (element.classList.contains('manual-page-break')) return false;

      const text = normalizeEditableText(element.innerText || element.textContent || '');
      if (!text) return false;

      return element.childElementCount <= 12;
    });

  const usedElements = new Set();

  descriptors.forEach((descriptor) => {
    const availableCandidates = candidates.filter((element) => !usedElements.has(element));
    const bestMatch = findBestEditableElementMatch(availableCandidates, descriptor);
    if (!(bestMatch instanceof HTMLElement)) return;

    bestMatch.dataset.editPath = descriptor.path;
    bestMatch.dataset.editLabel = descriptor.label;
    bestMatch.dataset.editMultiline = descriptor.multiline ? 'true' : 'false';
    bestMatch.dataset.autoEditPath = 'true';
    usedElements.add(bestMatch);
  });
};
const A4_RATIO = 297 / 210;
const blockSelector = [
  '.manual-page-break',
  'header',
  'main > *',
  'aside > *',
  'article > *',
  '.experience-item',
  '.project-item',
  '.education-item',
  '.volunteering-item',
  '[data-pdf-block]',
  '[class*="space-y-"] > *',
  '[class*="grid-cols-"] > *',
  'section',
  'ul > li',
  'ol > li',
].join(', ');

const getPreviewMeasurementRoot = (container) => {
  if (!(container instanceof HTMLElement)) return null;
  return findResumeContentSurface(container) || container;
};

const getPageHeightPx = (width) => Math.floor(width * A4_RATIO);
const getPreviewTemplateData = (data, templateId) => {
  const templateMeta = TEMPLATES.find((template) => template.id === templateId);

  if (!templateMeta?.hasHeadshot || data?.personal?.photo) {
    return data;
  }

  return {
    ...data,
    personal: {
      ...data.personal,
      photo: poojaImage,
    },
  };
};

const waitForEmbeddedAssets = async (root) => {
  const imagePromises = Array.from(root.querySelectorAll('img')).map((img) => {
    if (img.complete) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      img.addEventListener('load', resolve, { once: true });
      img.addEventListener('error', resolve, { once: true });
    });
  });

  const fontPromise = document.fonts?.ready ?? Promise.resolve();

  await Promise.all([
    fontPromise,
    ...imagePromises,
    new Promise((resolve) => window.requestAnimationFrame(() => window.requestAnimationFrame(resolve))),
  ]);
};

const collectSemanticBlocks = (root, scale = 1) => {
  const rootRect = root.getBoundingClientRect();

  return Array.from(root.querySelectorAll(blockSelector))
    .map((node) => {
      const rect = node.getBoundingClientRect();
      return {
        node,
        top: Math.max(0, Math.round((rect.top - rootRect.top) * scale)),
        bottom: Math.max(0, Math.round((rect.bottom - rootRect.top) * scale)),
        height: Math.max(0, Math.round(rect.height * scale)),
        isManualBreak: node.classList.contains('manual-page-break'),
      };
    })
    .filter((block) => block.bottom > block.top)
    .sort((a, b) => a.top - b.top);
};

const applyPrintPageBreaks = (root, breakPoints = []) => {
  if (!root || !breakPoints.length) return;

  root.querySelectorAll('[data-codex-print-break="true"]').forEach((node) => node.remove());
  const semanticBlocks = collectSemanticBlocks(root, 1);

  breakPoints
    .map((value) => Math.round(value))
    .filter((value, index, values) => value > 0 && (index === 0 || value > values[index - 1]))
    .forEach((breakPoint) => {
      const targetBlock = semanticBlocks.find(
        (block) =>
          !block.isManualBreak &&
          ((block.top >= breakPoint) || (block.top < breakPoint && block.bottom > breakPoint))
      );

      if (!targetBlock?.node?.parentElement) return;

      const marker = document.createElement('div');
      marker.className = 'manual-page-break';
      marker.dataset.codexPrintBreak = 'true';
      targetBlock.node.parentElement.insertBefore(marker, targetBlock.node);
    });
};

const calculatePageBreaks = (root, pageHeightPx, manualBreaks = [], scale = 1, explicitContentHeight) => {
  if (!root || !pageHeightPx) return [];

  const contentHeight = explicitContentHeight || Math.round(root.scrollHeight * scale);
  const minPageFill = Math.floor(pageHeightPx * 0.6);
  const significantBlockHeight = Math.floor(32 * scale);
  const maxEarlyBreakGap = Math.floor(pageHeightPx * 0.18);
  const semanticBlocks = collectSemanticBlocks(root, scale);
  const sortedManualBreaks = [...manualBreaks]
    .map((value) => Math.round(value))
    .filter((value) => value > Math.floor(pageHeightPx * 0.35) && value < contentHeight - 1)
    .sort((a, b) => a - b);

  const pickAutomaticPageEnd = (pageStart, pageTargetEnd) => {
    const blocksInRange = semanticBlocks.filter(
      (block) => block.bottom > pageStart && block.top < pageTargetEnd
    );

    const nextBlockStart = [...blocksInRange]
      .filter(
        (block) =>
          !block.isManualBreak &&
          block.height >= significantBlockHeight &&
          block.top > pageStart + minPageFill &&
          pageTargetEnd - block.top <= maxEarlyBreakGap &&
          block.top < pageTargetEnd
      )
      .sort((a, b) => b.top - a.top)[0];

    if (nextBlockStart) {
      return nextBlockStart.top;
    }

    const crossingBlock = blocksInRange.find(
      (block) => !block.isManualBreak && block.top < pageTargetEnd && block.bottom > pageTargetEnd
    );

    if (crossingBlock && crossingBlock.top - pageStart >= minPageFill) {
      return crossingBlock.top;
    }

    const templateBreak = blocksInRange.find(
      (block) => block.isManualBreak && block.top - pageStart >= Math.floor(pageHeightPx * 0.35)
    );

    if (templateBreak) {
      return templateBreak.top;
    }

    const candidateBlock = [...blocksInRange]
      .reverse()
      .find(
        (block) =>
          block.height >= significantBlockHeight &&
          block.bottom <= pageTargetEnd &&
          block.bottom - pageStart >= minPageFill
      );

    return candidateBlock ? candidateBlock.bottom : pageTargetEnd;
  };

  const pageBreaks = [];
  let pageStart = 0;

  while (pageStart + 1 < contentHeight) {
    const pageTargetEnd = Math.min(pageStart + pageHeightPx, contentHeight);
    if (pageTargetEnd >= contentHeight) break;

    const nextManualBreak = sortedManualBreaks.find(
      (point) =>
        point > pageStart + Math.floor(pageHeightPx * 0.35) &&
        point < Math.min(contentHeight, pageStart + Math.floor(pageHeightPx * 1.35))
    );

    const chosenEnd = nextManualBreak || pickAutomaticPageEnd(pageStart, pageTargetEnd);
    const safeEnd = Math.min(Math.max(chosenEnd, pageStart + 1), contentHeight);

    if (safeEnd >= contentHeight) break;

    pageBreaks.push(safeEnd);
    pageStart = safeEnd;
  }

  return pageBreaks;
};

// --- HELPER COMPONENTS ---
const NavItem = ({ id, icon: Icon, label, active, onClick, isOpen, status = 'empty' }) => {
  const statusMeta = SECTION_STATUS_META[status] || SECTION_STATUS_META.empty;

  return (
    <button 
      onClick={() => onClick(id)}
      title={!isOpen ? `${label} · ${statusMeta.label}` : ''} 
      className={`
        relative flex items-center gap-3 py-3 text-sm font-bold transition-all duration-200
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
      {isOpen ? (
        <span className={`ml-auto rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.18em] ${statusMeta.pillClassName}`}>
          {statusMeta.label}
        </span>
      ) : (
        <span className={`absolute right-[16px] top-[10px] h-2.5 w-2.5 rounded-full ring-2 ring-white ${statusMeta.dotClassName}`} />
      )}
    </button>
  );
};

const WorkspaceIconButton = ({
  icon: Icon,
  label,
  onClick,
  active = false,
  disabled = false,
  className = '',
}) => (
  <div className={`group relative ${className}`}>
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active || undefined}
      aria-disabled={disabled}
      onClick={() => {
        if (!disabled) {
          onClick?.();
        }
      }}
      className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 ${
        disabled
          ? 'cursor-not-allowed border-slate-200 bg-slate-100/90 text-slate-300'
          : active
            ? 'border-teal-200 bg-teal-50 text-teal-700 shadow-sm shadow-teal-100/80 hover:-translate-y-0.5'
            : 'border-slate-200 bg-white text-slate-600 shadow-sm shadow-slate-200/70 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700'
      }`}
    >
      <Icon size={17} />
    </button>
    <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-solid)] px-2.5 py-1.5 text-[11px] font-bold text-[color:var(--theme-text-primary)] opacity-0 shadow-lg transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100">
      {label}
    </div>
  </div>
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

const SpacingControl = ({
  label,
  value,
  onChange,
  min = 0,
  max = 200,
  step = 4,
  suffix = 'px',
  displayValue,
  leftLabel,
  rightLabel,
}) => (
  <div className="mb-4">
    <div className="flex items-center justify-between mb-2">
      <label className="block text-xs font-bold text-slate-500 uppercase">{label}</label>
      <span className="text-xs font-bold text-teal-700">{displayValue || `${value}${suffix}`}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value || 0}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-teal-600"
    />
    {(leftLabel || rightLabel) && (
      <div className="mt-1 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    )}
  </div>
);

const SelectControl = ({ label, value, onChange, options }) => (
  <div className="mb-4">
    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const ListModePicker = ({ mode, onChange }) => (
  <div className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1">
    {LIST_MODE_OPTIONS.map((option) => (
      <button
        key={option.value}
        type="button"
        onClick={() => onChange(option.value)}
        className={`rounded-md px-2.5 py-1 text-[10px] font-black uppercase tracking-widest transition-all ${
          mode === option.value
            ? 'bg-white text-teal-700 shadow-sm'
            : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        {option.label}
      </button>
    ))}
  </div>
);

const useLongTextListMode = (value, formattingDefault) => {
  const [listMode, setListMode] = useState(() => (
    (value || '').trim() ? detectListMode(value) : formattingDefault
  ));

  useEffect(() => {
    if ((value || '').trim()) {
      setListMode(detectListMode(value));
    }
  }, [value]);

  return [listMode, setListMode];
};

// --- STANDARD TEXT AREA ---
const TextArea = ({
  label,
  value,
  onChange,
  placeholder,
  formattingEnabled = false,
  formattingDefault = LIST_MODES.PLAIN,
}) => {
  const [listMode, setListMode] = useLongTextListMode(value, formattingDefault);

  const handleModeChange = (nextMode) => {
    setListMode(nextMode);

    if (!(value || '').trim()) {
      return;
    }

    const nextValue = formatTextWithListMode(value, nextMode);
    if (nextValue !== value) {
      onChange(nextValue);
    }
  };

  const handleKeyDown = (e) => {
    if (formattingEnabled && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const textarea = e.target;
      const cursorPosition = textarea.selectionStart;
      const selectionEnd = textarea.selectionEnd;
      const textBefore = (value || '').substring(0, cursorPosition);
      const textAfter = (value || '').substring(selectionEnd);
      const insertion = getListInsertion(value, cursorPosition, listMode);
      const nextValue = textBefore + insertion + textAfter;
      onChange(nextValue);

      window.requestAnimationFrame(() => {
        const nextCursor = cursorPosition + insertion.length;
        textarea.selectionStart = nextCursor;
        textarea.selectionEnd = nextCursor;
      });
    }
  };

  const handleChange = (e) => {
    let nextValue = e.target.value;

    if (
      formattingEnabled &&
      !(value || '').trim() &&
      nextValue.trim() &&
      detectListMode(nextValue) === LIST_MODES.PLAIN &&
      listMode !== LIST_MODES.PLAIN
    ) {
      nextValue = formatTextWithListMode(nextValue, listMode);
    }

    onChange(nextValue);
  };

  return (
    <div className="mb-4">
      <div className="mb-1.5 flex flex-wrap items-end justify-between gap-3">
        <label className="block text-xs font-bold text-slate-500 uppercase">{label}</label>
        {formattingEnabled ? <ListModePicker mode={listMode} onChange={handleModeChange} /> : null}
      </div>
      <textarea 
        value={value || ''}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={formattingEnabled ? getModePlaceholder(listMode, placeholder) : placeholder}
        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all h-24 resize-none custom-scrollbar"
      />
      {formattingEnabled ? (
        <p className="mt-2 text-[11px] font-semibold text-slate-400">Press Enter to continue the selected format. Use Shift + Enter for a plain line break.</p>
      ) : null}
    </div>
  );
};

// --- AI ENHANCEABLE TEXT AREA ---
const AIEnhanceableTextArea = ({
  label,
  value,
  onChange,
  placeholder,
  onEnhanceClick,
  formattingEnabled = false,
  formattingDefault = LIST_MODES.PLAIN,
}) => {
  const [listMode, setListMode] = useLongTextListMode(value, formattingDefault);

  const handleModeChange = (nextMode) => {
    setListMode(nextMode);

    if (!(value || '').trim()) {
      return;
    }

    const nextValue = formatTextWithListMode(value, nextMode);
    if (nextValue !== value) {
      onChange(nextValue);
    }
  };

  const handleKeyDown = (e) => {
    if (formattingEnabled && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const textarea = e.target;
      const cursorPosition = textarea.selectionStart;
      const selectionEnd = textarea.selectionEnd;
      const textBefore = (value || '').substring(0, cursorPosition);
      const textAfter = (value || '').substring(selectionEnd);
      const insertion = getListInsertion(value, cursorPosition, listMode);
      const nextValue = textBefore + insertion + textAfter;
      onChange(nextValue);

      window.requestAnimationFrame(() => {
        const nextCursor = cursorPosition + insertion.length;
        textarea.selectionStart = nextCursor;
        textarea.selectionEnd = nextCursor;
      });
    }
  };

  const handleChange = (e) => {
    let nextValue = e.target.value;

    if (
      formattingEnabled &&
      !(value || '').trim() &&
      nextValue.trim() &&
      detectListMode(nextValue) === LIST_MODES.PLAIN &&
      listMode !== LIST_MODES.PLAIN
    ) {
      nextValue = formatTextWithListMode(nextValue, listMode);
    }

    onChange(nextValue);
  };

  return (
    <div className="mb-4 relative group">
      <div className="mb-1.5 flex flex-wrap items-end justify-between gap-3">
        <label className="block text-xs font-bold text-slate-500 uppercase">{label}</label>
        <div className="flex flex-wrap items-center justify-end gap-2">
          {formattingEnabled ? <ListModePicker mode={listMode} onChange={handleModeChange} /> : null}
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
      </div>
      
      <textarea 
        value={value || ''}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={formattingEnabled ? getModePlaceholder(listMode, placeholder || 'Describe your work...') : placeholder}
        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all h-32 resize-none custom-scrollbar"
      />
      {formattingEnabled ? (
        <p className="mt-2 text-[11px] font-semibold text-slate-400">Press Enter to continue the selected format. Use Shift + Enter for a plain line break.</p>
      ) : null}
    </div>
  );
};


// --- MAIN EDITOR ---
// Note: added the 'mode' prop here
const Editor = ({
  initialData,
  selectedTemplate,
  onChangeTemplate,
  onBack,
  mode,
  importMode = 'ai-enhanced',
  initialJDText = '',
  resumeRecordId = null,
  onResumeRecordChange,
  onWorkspaceSnapshotChange,
  onOpenRepository,
}) => {
  const [activeSection, setActiveSection] = useState('personal');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  const [isFormOpen, setIsFormOpen] = useState(true); 
  const [mobileWorkspaceView, setMobileWorkspaceView] = useState('edit');
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);
  const previewRef = useRef(null);
  const previewStageRef = useRef(null);
  const printRootRef = useRef(null);
  const tempPrintRootRef = useRef(null);
  const dragCleanupRef = useRef(null);
  const previousDocumentTitleRef = useRef('');
  const autosaveTimerRef = useRef(null);
  const hasMountedAutosaveRef = useRef(false);
  const persistedResumeIdRef = useRef(resumeRecordId || null);

  // --- NEW STATE: TARGET JOB DESCRIPTION ---
  const [jdText, setJdText] = useState(initialJDText || '');
  const [manualPageBreaks, setManualPageBreaks] = useState([]);
  const [previewPageBreaks, setPreviewPageBreaks] = useState([]);
  const [previewMetrics, setPreviewMetrics] = useState({ pageHeight: 0, contentHeight: 0 });
  const [selectedPageBreakPosition, setSelectedPageBreakPosition] = useState(null);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [isPreviewEditMode, setIsPreviewEditMode] = useState(false);
  const [activePreviewField, setActivePreviewField] = useState(null);
  const [previewZoomLevel, setPreviewZoomLevel] = useState(1);
  const [autosaveState, setAutosaveState] = useState('saved');
  const [lastSavedAt, setLastSavedAt] = useState(() => new Date());
  const [persistedResumeId, setPersistedResumeId] = useState(resumeRecordId || null);

  // --- AI MODAL STATES ---
  const [aiModalConfig, setAiModalConfig] = useState({ isOpen: false, text: '', type: '', onApply: null });
  const [isAtsModalOpen, setIsAtsModalOpen] = useState(false);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [latestAtsEntry, setLatestAtsEntry] = useState(null);
  const [latestInterviewEntry, setLatestInterviewEntry] = useState(null);
  const exportPreviewRef = useRef(null);

  // --- DATA INITIALIZATION ---
  const initializeData = (data) => {
    const getList = (arr) => Array.isArray(arr) ? arr : [];
    
    // Normalize skills to ensure 'core' and 'soft' stay aligned even if one side is empty.
    const syncedCoreSkills = mergeSkillItems(data?.skills?.core, data?.skills?.soft);

    const safeData = {
      personal: { 
        name: '', title: '', email: '', phone: '', location: '', 
        summary: '', linkedin: '', photo: null,
        ...(data?.personal || {}) 
      },
      experience: getList(data?.experience),
      education: getList(data?.education),
      skills: { 
        technical: normalizeSkillItems(data?.skills?.technical),
        soft: syncedCoreSkills,
        core: syncedCoreSkills,
      },
      layoutSpacing: {
        personal: Number(data?.layoutSpacing?.personal || 0),
        experience: Number(data?.layoutSpacing?.experience || 0),
        education: Number(data?.layoutSpacing?.education || 0),
      },
      documentSettings: normalizeDocumentSettings(data?.documentSettings),
      projects: getList(data?.projects),
      languages: getList(data?.languages),
      certifications: getList(data?.certifications),
      awards: getList(data?.awards),
      volunteering: getList(data?.volunteering),
    };
    
    ['experience', 'education', 'projects', 'languages', 'certifications', 'awards', 'volunteering'].forEach(key => {
      safeData[key] = safeData[key].map(item => ({ ...item, id: item.id || Date.now() + Math.random() }));
    });

    return safeData;
  };

  const [resume, setResume] = useState(initializeData(initialData));
  const documentSettings = useMemo(
    () => normalizeDocumentSettings(resume.documentSettings),
    [resume.documentSettings]
  );
  const previewPages = useMemo(() => {
    const boundaries = [0, ...previewPageBreaks, previewMetrics.contentHeight || 0]
      .map((value) => Math.max(0, Math.round(value)))
      .filter((value, index, values) => index === 0 || value >= values[index - 1]);

    if (boundaries.length <= 1) {
      return [{
        start: 0,
        end: previewMetrics.contentHeight || previewMetrics.pageHeight || 0,
        visibleHeight: previewMetrics.contentHeight || previewMetrics.pageHeight || 0,
      }];
    }

    return boundaries.slice(0, -1).map((start, index) => {
      const end = boundaries[index + 1];
      return {
        start,
        end,
        visibleHeight: Math.max(0, end - start),
      };
    });
  }, [previewMetrics.contentHeight, previewMetrics.pageHeight, previewPageBreaks]);
  const isMobileLayout = viewportWidth < 1024;
  const mobileWorkspaceTabs = useMemo(
    () => [
      { id: 'sections', label: 'Sections', icon: LayoutGrid },
      { id: 'edit', label: 'Edit', icon: PencilLine },
      { id: 'preview', label: 'Preview', icon: Eye },
    ],
    []
  );
  const basePreviewScale = isMobileLayout
    ? Math.min(
        0.72,
        Math.max(0.34, (viewportWidth - 40) / A4_PREVIEW_WIDTH_PX)
      )
    : DESKTOP_PREVIEW_SCALE;
  const previewScale = Number((basePreviewScale * previewZoomLevel).toFixed(3));
  const previewZoomPercent = Math.round(previewScale * 100);
  const resumeInsights = useMemo(() => getResumeInsights(resume), [resume]);
  const rankedTemplates = useMemo(
    () => getTemplateRecommendations(resume, TEMPLATES, mode),
    [mode, resume]
  );
  const selectedTemplateMeta = useMemo(
    () => TEMPLATES.find((template) => template.id === selectedTemplate) || TEMPLATES[0],
    [selectedTemplate]
  );
  const selectedTemplateRecommendation = useMemo(
    () => rankedTemplates.find((template) => template.id === selectedTemplate) || null,
    [rankedTemplates, selectedTemplate]
  );
  const selectedTemplateRank = useMemo(() => {
    const index = rankedTemplates.findIndex((template) => template.id === selectedTemplate);
    return index >= 0 ? index + 1 : null;
  }, [rankedTemplates, selectedTemplate]);
  const sectionOverview = useMemo(() => {
    const base = SECTION_COPY[activeSection] || {
      heading: activeSection,
      description: 'Keep the resume clean, readable, and tailored to your target role.',
    };

    const counts = {
      personal: {
        primaryLabel: 'Summary Lines',
        primaryValue: resumeInsights.summaryLines,
        secondaryLabel: 'Profile Fields',
        secondaryValue: `${resumeInsights.personalFields}/5`,
      },
      experience: {
        primaryLabel: 'Roles',
        primaryValue: resumeInsights.experienceCount,
        secondaryLabel: 'Pages',
        secondaryValue: previewPages.length,
      },
      education: {
        primaryLabel: 'Schools',
        primaryValue: resumeInsights.educationCount,
        secondaryLabel: 'Readiness',
        secondaryValue: `${resumeInsights.readinessScore}%`,
      },
      skills: {
        primaryLabel: 'Skill Items',
        primaryValue: resumeInsights.totalSkillCount,
        secondaryLabel: 'Technical',
        secondaryValue: resumeInsights.technicalSkillCount,
      },
      projects: {
        primaryLabel: 'Projects',
        primaryValue: resumeInsights.projectCount,
        secondaryLabel: 'Supporting Items',
        secondaryValue: resumeInsights.projectCount + resumeInsights.certificationCount + resumeInsights.awardCount,
      },
      certifications: {
        primaryLabel: 'Certificates',
        primaryValue: resumeInsights.certificationCount,
        secondaryLabel: 'Readiness',
        secondaryValue: `${resumeInsights.readinessScore}%`,
      },
      awards: {
        primaryLabel: 'Awards',
        primaryValue: resumeInsights.awardCount,
        secondaryLabel: 'Readiness',
        secondaryValue: `${resumeInsights.readinessScore}%`,
      },
      languages: {
        primaryLabel: 'Languages',
        primaryValue: resumeInsights.languageCount,
        secondaryLabel: 'Pages',
        secondaryValue: previewPages.length,
      },
      document: {
        primaryLabel: 'Template',
        primaryValue: selectedTemplateMeta?.name || 'Resume',
        secondaryLabel: 'Pages',
        secondaryValue: previewPages.length,
      },
      templates: {
        primaryLabel: 'Best Fit',
        primaryValue: selectedTemplateMeta?.name || 'Resume',
        secondaryLabel: 'Rank',
        secondaryValue: selectedTemplateRank ? `#${selectedTemplateRank}` : '--',
      },
      'target-jd': {
        primaryLabel: 'JD Status',
        primaryValue: jdText.trim() ? 'Loaded' : 'Missing',
        secondaryLabel: 'ATS + Prep',
        secondaryValue: jdText.trim() ? 'Ready' : 'Locked',
      },
    };

    return {
      ...base,
      ...(counts[activeSection] || {
        primaryLabel: 'Readiness',
        primaryValue: `${resumeInsights.readinessScore}%`,
        secondaryLabel: 'Pages',
        secondaryValue: previewPages.length,
      }),
    };
  }, [
    activeSection,
    jdText,
    previewPages.length,
    resumeInsights,
    selectedTemplateMeta,
    selectedTemplateRank,
  ]);
  const sectionStatusMap = useMemo(() => {
    const personalFilledFields = [
      resume.personal?.name,
      resume.personal?.title,
      resume.personal?.email,
      resume.personal?.phone,
      resume.personal?.location,
      resume.personal?.summary,
    ].filter((value) => getTrimmedText(value)).length;

    return {
      document: 'complete',
      templates: selectedTemplate ? 'complete' : 'progress',
      'target-jd': mode === 'tailor' ? (jdText.trim() ? 'complete' : 'empty') : 'complete',
      personal: personalFilledFields >= 5 ? 'complete' : personalFilledFields > 0 ? 'progress' : 'empty',
      experience: getListCompletionStatus(resume.experience, ['role', 'company', 'date', 'desc']),
      education: getListCompletionStatus(resume.education, ['school', 'degree', 'date']),
      skills:
        resumeInsights.totalSkillCount === 0
          ? 'empty'
          : resumeInsights.technicalSkillCount > 0 && (resume.skills.core?.length || 0) > 0
            ? 'complete'
            : 'progress',
      projects: getListCompletionStatus(resume.projects, ['name', 'desc']),
      certifications: getListCompletionStatus(resume.certifications, ['name', 'issuer', 'date']),
      awards: getListCompletionStatus(resume.awards, ['name', 'issuer', 'date']),
      languages: getListCompletionStatus(resume.languages, ['name', 'level']),
    };
  }, [
    jdText,
    mode,
    resume.awards,
    resume.certifications,
    resume.education,
    resume.experience,
    resume.personal?.email,
    resume.personal?.location,
    resume.personal?.name,
    resume.personal?.phone,
    resume.personal?.summary,
    resume.personal?.title,
    resume.projects,
    resume.skills.core,
    resumeInsights.technicalSkillCount,
    resumeInsights.totalSkillCount,
    resume.languages,
    selectedTemplate,
  ]);
  const criticalSectionGaps = useMemo(
    () => ['personal', 'experience', 'skills'].filter((key) => sectionStatusMap[key] !== 'complete').length,
    [sectionStatusMap]
  );
  const exportChecklist = useMemo(
    () => [
      {
        key: 'pages',
        label: `${previewPages.length} page${previewPages.length === 1 ? '' : 's'} mapped`,
        pass: previewPages.length > 0,
      },
      {
        key: 'sections',
        label: criticalSectionGaps === 0 ? 'Core sections filled' : `${criticalSectionGaps} section${criticalSectionGaps === 1 ? '' : 's'} to review`,
        pass: criticalSectionGaps === 0,
      },
      {
        key: 'a4',
        label: previewMetrics.pageHeight ? 'A4 ready' : 'Sizing preview',
        pass: Boolean(previewMetrics.pageHeight),
      },
    ],
    [criticalSectionGaps, previewMetrics.pageHeight, previewPages.length]
  );
  const autosaveLabel = useMemo(() => {
    if (autosaveState === 'saving') return 'Saving to repository...';
    return `Saved ${lastSavedAt.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
  }, [autosaveState, lastSavedAt]);
  const workspaceSnapshot = useMemo(
    () => JSON.stringify({ resume, jdText, manualPageBreaks, selectedTemplate }),
    [jdText, manualPageBreaks, resume, selectedTemplate]
  );
  const persistWorkspaceToRepository = useCallback(() => {
    const savedRecord = saveResumeRecord({
      resumeId: persistedResumeIdRef.current,
      resumeData: resume,
      selectedTemplate,
      mode: mode || 'scratch',
      importMode,
      jdText,
    });

    if (savedRecord?.id) {
      persistedResumeIdRef.current = savedRecord.id;
      setPersistedResumeId(savedRecord.id);
      onResumeRecordChange?.(savedRecord.id);
    }

    onWorkspaceSnapshotChange?.({
      resume,
      jdText,
      selectedTemplate,
      resumeRecordId: savedRecord?.id || persistedResumeIdRef.current,
    });

    return savedRecord;
  }, [importMode, jdText, mode, onResumeRecordChange, onWorkspaceSnapshotChange, resume, selectedTemplate]);

  const handleSectionSelect = useCallback(
    (sectionId) => {
      setActiveSection(sectionId);
      if (isMobileLayout) {
        setMobileWorkspaceView('edit');
        setIsSidebarOpen(true);
        setIsFormOpen(true);
      }
    },
    [isMobileLayout]
  );

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
        setResume(prev => ({ ...prev, skills: { ...prev.skills, soft: list, core: list } }));
    } else {
        setResume(prev => ({ ...prev, skills: { ...prev.skills, [type]: list } }));
    }
  };

  const handleLayoutSpacingChange = (section, value) => {
    setResume((prev) => ({
      ...prev,
      layoutSpacing: {
        ...prev.layoutSpacing,
        [section]: value,
      },
    }));
  };

  const handleDocumentSettingChange = (field, value) => {
    setResume((prev) => ({
      ...prev,
      documentSettings: {
        ...normalizeDocumentSettings(prev.documentSettings),
        [field]: value,
      },
    }));
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

  const syncPreviewBreaks = useCallback(async (manualBreakOverrides = manualPageBreaks) => {
    const exportRoot = getPreviewMeasurementRoot(
      exportPreviewRef.current?.firstElementChild ||
      exportPreviewRef.current ||
      previewRef.current
    );
    if (!(exportRoot instanceof HTMLElement)) return [];

    await waitForEmbeddedAssets(exportRoot);

    const pageHeight = getPageHeightPx(exportRoot.offsetWidth);
    const contentHeight = exportRoot.scrollHeight;
    const breaks = calculatePageBreaks(exportRoot, pageHeight, manualBreakOverrides, 1, contentHeight);

    setPreviewMetrics({ pageHeight, contentHeight });
    setPreviewPageBreaks(breaks);
    return breaks;
  }, [manualPageBreaks]);

  useEffect(() => {
    const updatePreviewBreaks = () => {
      syncPreviewBreaks();
    };

    const frameId = window.requestAnimationFrame(updatePreviewBreaks);
    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updatePreviewBreaks) : null;
    const observedNodes = [
      getPreviewMeasurementRoot(previewRef.current),
      getPreviewMeasurementRoot(exportPreviewRef.current?.firstElementChild || exportPreviewRef.current),
    ].filter(Boolean);
    observedNodes.forEach((node) => resizeObserver?.observe(node));
    window.addEventListener('resize', updatePreviewBreaks);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updatePreviewBreaks);
    };
  }, [resume, selectedTemplate, isPreviewModalOpen, syncPreviewBreaks]);

  useEffect(() => {
    return () => {
      if (dragCleanupRef.current) {
        dragCleanupRef.current();
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobileLayout) return;

    setIsSidebarOpen(true);
    setIsFormOpen(true);
  }, [isMobileLayout]);

  useEffect(() => {
    persistedResumeIdRef.current = resumeRecordId || null;
    setPersistedResumeId(resumeRecordId || null);
  }, [resumeRecordId]);

  useEffect(() => {
    if (!persistedResumeId) {
      setLatestAtsEntry(null);
      setLatestInterviewEntry(null);
      return;
    }

    const record = getResumeRecord(persistedResumeId);
    setLatestAtsEntry(record?.atsHistory?.[0] || null);
    setLatestInterviewEntry(record?.interviewPrepHistory?.[0] || null);
  }, [persistedResumeId]);

  useEffect(() => {
    if (!hasMountedAutosaveRef.current) {
      hasMountedAutosaveRef.current = true;
      persistWorkspaceToRepository();
      setAutosaveState('saved');
      setLastSavedAt(new Date());
      return undefined;
    }

    setAutosaveState('saving');

    if (autosaveTimerRef.current) {
      window.clearTimeout(autosaveTimerRef.current);
    }

    autosaveTimerRef.current = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem('resume_builder_workspace_snapshot', workspaceSnapshot);
        persistWorkspaceToRepository();
      } catch (error) {
        console.warn('Unable to cache editor snapshot', error);
      }
      setAutosaveState('saved');
      setLastSavedAt(new Date());
      autosaveTimerRef.current = null;
    }, 280);

    return () => {
      if (autosaveTimerRef.current) {
        window.clearTimeout(autosaveTimerRef.current);
      }
    };
  }, [persistWorkspaceToRepository, workspaceSnapshot]);

  useEffect(() => () => {
    if (autosaveTimerRef.current) {
      window.clearTimeout(autosaveTimerRef.current);
    }
  }, []);

  useEffect(() => {
    const previewSurface = previewRef.current;
    if (!(previewSurface instanceof HTMLElement)) return;

    autoAnnotatePreviewEditableFields(previewSurface, resume);

    previewSurface.querySelectorAll('[data-edit-path]').forEach((node) => {
      if (!(node instanceof HTMLElement)) return;
      node.removeAttribute('data-preview-edit-active');
      if (isPreviewEditMode) {
        node.setAttribute('title', node.dataset.editLabel ? `Click to edit: ${node.dataset.editLabel}` : 'Click to edit');
      } else {
        node.removeAttribute('title');
      }
    });

    if (!isPreviewEditMode || !activePreviewField?.path) return;

    previewSurface.querySelectorAll('[data-edit-path]').forEach((node) => {
      if (node instanceof HTMLElement && node.dataset.editPath === activePreviewField.path) {
        node.dataset.previewEditActive = 'true';
      }
    });
  }, [activePreviewField, isPreviewEditMode, resume, selectedTemplate]);

  useEffect(() => {
    const handleAfterPrint = () => {
      if (persistedResumeIdRef.current) {
        markResumePrinted(persistedResumeIdRef.current);
      }
      setIsPrinting(false);
      if (previousDocumentTitleRef.current) {
        document.title = previousDocumentTitleRef.current;
        previousDocumentTitleRef.current = '';
      }
      if (tempPrintRootRef.current) {
        tempPrintRootRef.current.remove();
        tempPrintRootRef.current = null;
      }
      if (printRootRef.current) {
        printRootRef.current.innerHTML = '';
        printRootRef.current.removeAttribute('style');
      }
    };

    window.addEventListener('afterprint', handleAfterPrint);
    return () => window.removeEventListener('afterprint', handleAfterPrint);
  }, []);

  const clampPageBreak = (value, index, breakSet) => {
    const { pageHeight, contentHeight } = previewMetrics;
    const minGap = Math.floor(pageHeight * 0.35);
    const min = index === 0 ? Math.floor(pageHeight * 0.45) : breakSet[index - 1] + minGap;
    const max = index === breakSet.length - 1
      ? contentHeight - Math.floor(pageHeight * 0.2)
      : breakSet[index + 1] - minGap;

    return Math.min(Math.max(value, min), max);
  };

  const getSuggestedManualBreakPosition = () => {
    const { pageHeight, contentHeight } = previewMetrics;
    if (!pageHeight || !contentHeight) return null;

    if (selectedPageBreakPosition !== null) {
      return selectedPageBreakPosition;
    }

    const existingBreaks = manualPageBreaks.length ? [...manualPageBreaks] : [...previewPageBreaks];
    const boundaries = [0, ...existingBreaks, contentHeight];
    const minGap = Math.floor(pageHeight * 0.35);
    let bestCandidate = null;
    let largestSegment = 0;

    for (let index = 0; index < boundaries.length - 1; index += 1) {
      const segmentStart = boundaries[index];
      const segmentEnd = boundaries[index + 1];
      const segmentHeight = segmentEnd - segmentStart;

      if (segmentHeight <= minGap * 2 || segmentHeight <= largestSegment) continue;

      largestSegment = segmentHeight;
      bestCandidate = Math.round(segmentStart + (segmentHeight / 2));
    }

    return bestCandidate;
  };

  const handleAddPageBreak = () => {
    if (!previewMetrics.pageHeight) return;

    const sourceBreaks = manualPageBreaks.length ? [...manualPageBreaks] : [...previewPageBreaks];
    const nextBreak = getSuggestedManualBreakPosition();
    if (nextBreak === null) return;
    const clampedBreak = Math.min(
      Math.max(nextBreak, Math.floor(previewMetrics.pageHeight * 0.45)),
      previewMetrics.contentHeight - Math.floor(previewMetrics.pageHeight * 0.2)
    );

    if (clampedBreak > Math.floor(previewMetrics.pageHeight * 0.45)) {
      const nextBreaks = [...sourceBreaks, clampedBreak]
        .map((value) => Math.round(value))
        .sort((a, b) => a - b)
        .filter((value, index, arr) => index === 0 || Math.abs(value - arr[index - 1]) > 8);

      setManualPageBreaks(nextBreaks);
      setSelectedPageBreakPosition(null);
      syncPreviewBreaks(nextBreaks);
    }
  };

  const handleResetPageBreaks = () => {
    setManualPageBreaks([]);
    setSelectedPageBreakPosition(null);
    syncPreviewBreaks([]);
  };

  const adjustPreviewZoom = (direction) => {
    setPreviewZoomLevel((current) => {
      const next = direction === 'in' ? current + 0.1 : current - 0.1;
      return Number(Math.min(1.45, Math.max(0.75, next)).toFixed(2));
    });
  };

  const resetPreviewZoom = () => {
    setPreviewZoomLevel(1);
  };

  const togglePreviewEditMode = () => {
    setIsPreviewEditMode((prev) => {
      const next = !prev;
      if (!next) {
        setActivePreviewField(null);
      }
      return next;
    });
  };

  const handlePreviewClick = (event) => {
    if (isPreviewEditMode) {
      return;
    }

    const previewSurface = getPreviewMeasurementRoot(previewRef.current);
    if (!previewSurface || !previewMetrics.pageHeight) return;

    const previewRect = previewSurface.getBoundingClientRect();
    const pointerY = (event.clientY - previewRect.top) / previewScale;
    const minY = Math.floor(previewMetrics.pageHeight * 0.45);
    const maxY = previewMetrics.contentHeight - Math.floor(previewMetrics.pageHeight * 0.2);

    if (pointerY >= minY && pointerY <= maxY) {
      setSelectedPageBreakPosition(Math.round(pointerY));
    }
  };

  const handlePreviewEditableClick = (event) => {
    if (!isPreviewEditMode) return;

    const previewSurface = previewRef.current;
    if (!(previewSurface instanceof HTMLElement)) return;

    const target = event.target instanceof HTMLElement
      ? event.target.closest('[data-edit-path]')
      : null;

    if (!(target instanceof HTMLElement) || !previewSurface.contains(target)) {
      setActivePreviewField(null);
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const fieldPath = target.dataset.editPath;
    if (!fieldPath) return;

    setActivePreviewField({
      path: fieldPath,
      label: target.dataset.editLabel || 'Resume Text',
      multiline: target.dataset.editMultiline === 'true',
    });
  };

  const handlePreviewFieldChange = (nextValue) => {
    if (!activePreviewField?.path) return;

    setResume((prev) => setValueAtPath(prev, activePreviewField.path, nextValue));
  };

  const activePreviewFieldValue = activePreviewField?.path
    ? getValueAtPath(resume, activePreviewField.path)
    : '';

  const handlePageBreakDragStart = (index, event) => {
    event.preventDefault();
    event.stopPropagation();

    const initialBreaks = manualPageBreaks.length ? [...manualPageBreaks] : [...previewPageBreaks];
    if (!initialBreaks.length) return;

    setManualPageBreaks(initialBreaks);

    const handlePointerMove = (moveEvent) => {
      const previewSurface = getPreviewMeasurementRoot(previewRef.current);
      if (!previewSurface) return;

      const previewRect = previewSurface.getBoundingClientRect();
      const pointerY = (moveEvent.clientY - previewRect.top) / previewScale;

      setManualPageBreaks((currentBreaks) => {
        const breakSet = currentBreaks.length ? [...currentBreaks] : [...initialBreaks];
        breakSet[index] = clampPageBreak(pointerY, index, breakSet);
        syncPreviewBreaks(breakSet);
        return breakSet;
      });
    };

    const handlePointerUp = () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      dragCleanupRef.current = null;
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    dragCleanupRef.current = handlePointerUp;
  };

  const handleOpenPreview = async () => {
    await new Promise((resolve) => window.requestAnimationFrame(() => window.requestAnimationFrame(resolve)));
    await syncPreviewBreaks();
    setIsPreviewModalOpen(true);
  };

  const buildPrintClone = () => {
    if (!exportPreviewRef.current) return null;

    const sourceNode = getPreviewMeasurementRoot(
      exportPreviewRef.current.firstElementChild || exportPreviewRef.current
    );
    if (!(sourceNode instanceof HTMLElement)) return null;
    const printClone = sourceNode.cloneNode(true);
    printClone.classList.add('codex-print-document');
    printClone.style.width = '210mm';
    printClone.style.minHeight = '297mm';
    printClone.style.height = 'auto';
    printClone.style.transform = 'none';
    printClone.style.boxShadow = 'none';
    printClone.style.background = '#ffffff';
    printClone.style.overflow = 'visible';
    printClone.querySelectorAll('[data-codex-spacer="true"]').forEach((node) => {
      node.style.display = 'block';
    });

    return printClone;
  };

  const ensureTempPrintRoot = () => {
    if (tempPrintRootRef.current && document.body.contains(tempPrintRootRef.current)) {
      tempPrintRootRef.current.innerHTML = '';
      return tempPrintRootRef.current;
    }

    const tempRoot = document.createElement('div');
    tempRoot.className = 'codex-print-root is-active';
    document.body.appendChild(tempRoot);
    tempPrintRootRef.current = tempRoot;
    return tempRoot;
  };

  // --- PDF / PRINT GENERATION ---
  const handleDownload = async () => {
    const sourceClone = buildPrintClone();
    if (!sourceClone) return;

    const printRoot = ensureTempPrintRoot();
    printRoot.innerHTML = '';

    Object.assign(printRoot.style, {
      display: 'block',
      position: 'fixed',
      left: '0',
      top: '0',
      width: '100%',
      background: '#ffffff',
      visibility: 'hidden',
      opacity: '0',
      pointerEvents: 'none',
      zIndex: '2147483647',
      overflow: 'visible',
    });

    try {
      await waitForEmbeddedAssets(sourceClone);
      sourceClone.classList.add('codex-print-document--continuous');
      sourceClone.style.width = '210mm';
      sourceClone.style.maxWidth = '210mm';
      sourceClone.style.minHeight = 'auto';
      sourceClone.style.height = 'auto';
      sourceClone.style.margin = '0 auto';
      sourceClone.style.transform = 'none';
      sourceClone.style.position = 'relative';
      sourceClone.style.left = '0';
      sourceClone.style.top = '0';
      sourceClone.style.overflow = 'visible';

      sourceClone.querySelectorAll('.manual-page-break').forEach((node) => {
        node.style.display = 'none';
        node.style.breakBefore = 'auto';
        node.style.pageBreakBefore = 'auto';
      });

      printRoot.appendChild(sourceClone);

      await waitForEmbeddedAssets(printRoot);

      previousDocumentTitleRef.current = document.title;
      document.title = `${(resume.personal.name || 'Resume').trim() || 'Resume'} PDF`;
      setIsPrinting(true);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          window.print();
        });
      });
    } catch (error) {
      console.error('PDF export failed', error);
      setIsPrinting(false);
      if (previousDocumentTitleRef.current) {
        document.title = previousDocumentTitleRef.current;
        previousDocumentTitleRef.current = '';
      }
      if (tempPrintRootRef.current) {
        tempPrintRootRef.current.remove();
        tempPrintRootRef.current = null;
      }
      if (printRootRef.current) {
        printRootRef.current.innerHTML = '';
        printRootRef.current.removeAttribute('style');
      }
    }
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

  // Check if JD is required for action
  const handleATSClick = () => {
    if (!jdText.trim()) {
      setActiveSection('target-jd');
      setIsFormOpen(true);
      if (isMobileLayout) {
        setMobileWorkspaceView('edit');
      }
    } else {
      persistWorkspaceToRepository();
      setIsAtsModalOpen(true);
    }
  };
  const handleInterviewClick = () => {
    if (!jdText.trim()) {
      setActiveSection('target-jd');
      setIsFormOpen(true);
      if (isMobileLayout) {
        setMobileWorkspaceView('edit');
      }
    } else {
      persistWorkspaceToRepository();
      setIsInterviewModalOpen(true);
    }
  };
  const handleSaveResume = () => {
    setAutosaveState('saving');
    persistWorkspaceToRepository();
    setAutosaveState('saved');
    setLastSavedAt(new Date());
  };

  return (
    <div className="h-[100dvh] min-h-[100dvh] max-h-[100dvh] bg-[radial-gradient(circle_at_top,#ecfeff,transparent_24%),linear-gradient(180deg,#eef5f7_0%,#f8fafc_44%,#f8fafc_100%)] flex flex-col font-sans text-slate-900 relative overflow-hidden">
      <style>{`
        .preview-edit-mode [data-edit-path] {
          cursor: text;
          border-radius: 0.4rem;
          text-decoration-line: underline;
          text-decoration-style: dotted;
          text-decoration-color: rgba(13, 148, 136, 0.45);
          text-underline-offset: 0.18em;
          transition: outline-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease, transform 0.15s ease;
        }

        .preview-edit-mode [data-edit-path]:hover {
          position: relative;
          outline: 2px solid rgba(13, 148, 136, 0.55);
          outline-offset: 2px;
          box-shadow: 0 0 0 4px rgba(13, 148, 136, 0.12);
          background-color: rgba(240, 253, 250, 0.78);
          transform: translateY(-1px);
        }

        .preview-edit-mode [data-edit-path]:hover::after {
          content: 'Click to edit';
          position: absolute;
          left: 50%;
          bottom: calc(100% + 0.45rem);
          transform: translateX(-50%);
          border-radius: 999px;
          background: rgba(2, 6, 23, 0.92);
          color: white;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.14em;
          padding: 0.3rem 0.55rem;
          text-transform: uppercase;
          white-space: nowrap;
          pointer-events: none;
          z-index: 50;
        }

        .preview-edit-mode [data-preview-edit-active="true"] {
          outline: 2px solid rgba(13, 148, 136, 0.95);
          outline-offset: 2px;
          box-shadow: 0 0 0 5px rgba(13, 148, 136, 0.16);
          background-color: rgba(240, 253, 250, 0.72);
          text-decoration-color: rgba(13, 148, 136, 0.8);
        }
      `}</style>
      <div ref={printRootRef} className={`codex-print-root ${isPrinting ? 'is-active' : ''}`} />
      
      {/* --- ALL MODALS OVERLAYS --- */}
      <AIEnhanceModal 
        isOpen={aiModalConfig.isOpen}
        currentText={aiModalConfig.text}
        contextType={aiModalConfig.type}
        jobTitle={resume.personal.title || "Professional"}
        onClose={() => setAiModalConfig({ ...aiModalConfig, isOpen: false })}
        onSelect={(newText) => { if (aiModalConfig.onApply) aiModalConfig.onApply(newText); }}
      />
      <ATSScoreModal 
        isOpen={isAtsModalOpen} 
        onClose={() => setIsAtsModalOpen(false)} 
        resumeData={resume} 
        jdText={jdText} 
        existingEntry={latestAtsEntry}
        onResults={(result) => {
          const savedRecord = persistWorkspaceToRepository();
          if (savedRecord?.id) {
            const entry = appendATSResult({
              resumeId: savedRecord.id,
              jdText,
              result,
            });
            setLatestAtsEntry(entry);
          }
        }}
      />
      <InterviewPrepModal 
        isOpen={isInterviewModalOpen} 
        onClose={() => setIsInterviewModalOpen(false)} 
        resumeData={resume} 
        jdText={jdText} 
        existingEntry={latestInterviewEntry}
        onResults={(result) => {
          const savedRecord = persistWorkspaceToRepository();
          if (savedRecord?.id) {
            const entry = appendInterviewPrepResult({
              resumeId: savedRecord.id,
              jdText,
              result,
            });
            setLatestInterviewEntry(entry);
          }
        }}
      />
      {isPreviewModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-[color:var(--theme-surface-glass)] backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
          <div className="theme-section-surface w-full max-w-7xl h-[92vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <div className="min-h-16 bg-[color:var(--theme-surface-solid)] border-b border-[color:var(--theme-border-soft)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 sm:px-6 py-4 shrink-0">
              <div className="font-bold text-slate-800 flex items-center gap-2">
                <Eye size={18} className="text-teal-600" /> A4 Print Preview
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownload}
                  className="theme-primary-button px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <Download size={16} /> Print / Save PDF
                </button>
                <button
                  onClick={() => setIsPreviewModalOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-10">
              <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
                <div className="w-full max-w-3xl rounded-2xl border border-teal-100 bg-teal-50 px-4 py-3 text-sm text-teal-800">
                  This export now uses the browser print engine, so when you choose <strong>Save as PDF</strong> you get a real PDF with selectable text instead of a flattened image.
                </div>
                {previewPages.map((page, index) => {
                  const totalPages = previewPages.length;
                  const isLastPage = index === totalPages - 1;

                  return (
                    <div key={`preview-page-${index}`} className="w-full flex flex-col items-center gap-3">
                      <div className="text-xs font-black uppercase tracking-[0.28em] text-slate-500">
                        Page {index + 1} of {totalPages}
                      </div>
                      <div className="relative w-[210mm] h-[297mm] max-w-full overflow-hidden rounded-md bg-white shadow-2xl">
                        <div
                          className="absolute left-0 top-0 w-[210mm] max-w-full overflow-hidden"
                          style={{ height: `${Math.max(0, page.visibleHeight)}px` }}
                        >
                          <div
                            className="absolute left-0 top-0 w-[210mm] max-w-full"
                            style={{ transform: `translateY(-${page.start}px)` }}
                          >
                            <ResumePreview data={resume} template={selectedTemplate} />
                          </div>
                        </div>
                      </div>
                      {!isLastPage && (
                        <div className="rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-amber-700">
                          Actual page break after page {index + 1}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOP BAR */}
      <div className="shrink-0 border-b border-slate-200/80 bg-white/85 px-4 py-3 backdrop-blur sm:px-6">
        <div className="mx-auto w-full">
          <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/95 px-4 py-4 shadow-sm shadow-slate-200/70 sm:px-5 sm:py-5">
            <div className="grid gap-4">
              <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between xl:flex-nowrap">
                <div className="flex min-w-0 shrink-0 items-center gap-3">
                  <button
                    onClick={() => {
                      handleSaveResume();
                      onBack();
                    }}
                    className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-500 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <h1 className="truncate text-[1.55rem] font-black tracking-tight text-slate-900 leading-none">Editor Workspace</h1>
                    <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                      {selectedTemplateMeta?.name || 'Template'}
                    </span>
                    {selectedTemplateRank && (
                      <span className="shrink-0 rounded-full border border-teal-100 bg-teal-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-teal-700">
                        Recommended #{selectedTemplateRank}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex min-w-0 flex-1 items-center gap-1.5 xl:flex-nowrap xl:justify-end">
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] ${
                    autosaveState === 'saving'
                      ? 'border border-amber-200 bg-amber-50 text-amber-700'
                      : 'border border-emerald-100 bg-emerald-50 text-emerald-700'
                  }`}>
                    {autosaveLabel}
                  </span>
                  <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                    {resumeInsights.readinessScore}% ready
                  </span>
                  <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                    {previewPages.length} page{previewPages.length === 1 ? '' : 's'}
                  </span>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] ${
                    isPreviewEditMode
                      ? 'border border-teal-100 bg-teal-50 text-teal-700'
                      : 'border border-slate-200 bg-white text-slate-500'
                  }`}>
                    {isPreviewEditMode ? 'Live Edit On' : 'Live Edit Off'}
                  </span>
                  {exportChecklist.map((item) => (
                    <span
                      key={item.key}
                      className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] ${
                        item.pass
                          ? 'border border-emerald-100 bg-emerald-50 text-emerald-700'
                          : 'border border-amber-100 bg-amber-50 text-amber-700'
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${item.pass ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      {item.label}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end xl:shrink-0">
                  <ThemeToggleButton
                    iconOnly
                    className="!border-blue-200 !bg-white !shadow-sm hover:!border-blue-400 !text-teal-700"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between xl:flex-nowrap">
                <div className="flex min-w-0 items-center gap-2 xl:flex-nowrap">
                  {!isMobileLayout && (
                    <BuilderProgress current="edit" inline showCounter={false} className="min-w-0 shrink-0" />
                  )}
                  {isMobileLayout && (
                    <div className="grid w-full grid-cols-3 gap-2">
                      {mobileWorkspaceTabs.map(({ id, label, icon: Icon }) => {
                        const isActive = mobileWorkspaceView === id;

                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => setMobileWorkspaceView(id)}
                            className={`flex items-center justify-center gap-1.5 rounded-xl border px-2.5 py-2 text-[11px] font-black uppercase tracking-[0.14em] transition-all sm:gap-2 sm:px-3 ${
                              isActive
                                ? 'border-teal-200 bg-teal-50 text-teal-700 shadow-sm'
                                : 'border-slate-200 bg-white text-slate-500'
                            }`}
                          >
                            <Icon size={14} />
                            <span>{label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {mode === 'tailor' && (
                    <div className="flex items-center gap-2 xl:flex-nowrap">
                      <button
                        onClick={handleATSClick}
                        className="flex shrink-0 items-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-[0.85rem] font-bold text-blue-700 transition-all hover:bg-blue-100 hover:shadow-sm whitespace-nowrap"
                        title="Scan resume against Job Description"
                      >
                        <ScanLine size={16} /> ATS Scan
                      </button>
                      <button
                        onClick={handleInterviewClick}
                        className="flex shrink-0 items-center gap-2 rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-[0.85rem] font-bold text-indigo-700 transition-all hover:bg-indigo-100 hover:shadow-sm whitespace-nowrap"
                        title="Generate Interview Questions"
                      >
                        <MessageSquare size={16} /> AI Interview Prep
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 xl:shrink-0 xl:flex-nowrap xl:justify-end">
                  <button
                    onClick={handleSaveResume}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl border border-teal-200 bg-teal-50 px-4 py-2.5 text-[0.85rem] font-bold text-teal-700 shadow-sm transition-all hover:bg-teal-100 active:scale-95 whitespace-nowrap sm:w-auto xl:shrink-0"
                  >
                    <Save size={16} />
                    {persistedResumeId ? 'Update Resume' : 'Save Resume'}
                  </button>
                  {onOpenRepository && (
                    <button
                      onClick={() => {
                        handleSaveResume();
                        onOpenRepository();
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-[0.85rem] font-bold text-slate-600 shadow-sm transition-all hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 active:scale-95 whitespace-nowrap sm:w-auto xl:shrink-0"
                    >
                      <FolderOpen size={16} />
                      My Repository
                    </button>
                  )}
                  <button
                    onClick={handleDownload}
                    className="theme-primary-button flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-[0.85rem] font-bold shadow-md transition-all active:scale-95 whitespace-nowrap sm:w-auto xl:shrink-0"
                  >
                    <Download size={16} /> Print / Save PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden flex flex-col lg:flex-row lg:h-full">
        {isMobileLayout && (
          <div className="border-b border-slate-200/80 bg-white/92 px-4 py-3 shadow-sm lg:hidden">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">Mobile Workspace</div>
                <div className="mt-1 text-sm font-bold text-slate-900">
                  {mobileWorkspaceView === 'sections'
                    ? 'Choose a section'
                    : mobileWorkspaceView === 'edit'
                      ? `Editing ${sectionOverview.heading}`
                      : 'Preview and export'}
                </div>
              </div>
              <div className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-teal-700">
                {mobileWorkspaceView}
              </div>
            </div>
          </div>
        )}
        
        {/* SIDEBAR */}
        <div className={`bg-white/85 border-b lg:border-b-0 lg:border-r border-slate-200/80 py-4 lg:py-5 overflow-y-auto overscroll-y-contain shrink-0 min-h-0 lg:h-full transition-all duration-300 ease-in-out flex flex-col backdrop-blur z-10 relative ${isMobileLayout ? (mobileWorkspaceView === 'sections' ? 'flex-1 w-full' : 'hidden') : isSidebarOpen ? 'w-full lg:w-64' : 'w-full lg:w-20'}`}>
          <div className={`px-6 mb-6 flex items-center ${(isMobileLayout || isSidebarOpen) ? 'justify-between' : 'justify-center'}`}>
            {(isMobileLayout || isSidebarOpen) && <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest">Sections</h2>}
            {!isMobileLayout && (
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-400 hover:text-teal-600 transition-colors p-1 rounded-md hover:bg-slate-100">
                  {isSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={20} />}
              </button>
            )}
          </div>

          {isSidebarOpen && !isMobileLayout && (
            <div className="theme-strong-panel mx-4 mb-4 rounded-[1.5rem] px-4 py-4 shadow-xl shadow-slate-900/10">
              <div className="mb-2 text-[10px] font-black uppercase tracking-[0.24em] text-[color:var(--theme-accent)]">Workspace Snapshot</div>
              <div className="text-base font-black tracking-tight text-[color:var(--theme-strong-text)]">{selectedTemplateMeta?.name || 'Template selected'}</div>
              <p className="mt-1.5 text-xs leading-relaxed text-[color:var(--theme-text-secondary)]">
                {selectedTemplateRecommendation?.reasons?.[0] || 'A balanced layout for editing and export.'}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-solid)] px-3 py-2.5">
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--theme-text-muted)]">Readiness</div>
                  <div className="mt-1 text-lg font-black text-[color:var(--theme-text-primary)]">{resumeInsights.readinessScore}%</div>
                </div>
                <div className="rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-solid)] px-3 py-2.5">
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--theme-text-muted)]">Pages</div>
                  <div className="mt-1 text-lg font-black text-[color:var(--theme-text-primary)]">{previewPages.length}</div>
                </div>
              </div>
            </div>
          )}

          <nav className={`space-y-1 flex-1 ${isMobileLayout ? 'grid grid-cols-2 sm:grid-cols-3 gap-1 px-2 pb-4' : ''}`}>
            <NavItem id="document" icon={FileText} label="Document Style" active={activeSection} onClick={handleSectionSelect} isOpen={isMobileLayout ? true : isSidebarOpen} status={sectionStatusMap.document} />
            <NavItem id="templates" icon={LayoutGrid} label="Change Template" active={activeSection} onClick={handleSectionSelect} isOpen={isMobileLayout ? true : isSidebarOpen} status={sectionStatusMap.templates} />
            <div className={`my-4 border-t border-slate-100 mx-4 ${isMobileLayout ? 'col-span-full' : ''}`}></div>
            
            {/* TARGET JD NAV ITEM: ONLY SHOW IN TAILOR MODE */}
            {mode === 'tailor' && (
               <NavItem id="target-jd" icon={Target} label="Target Job (JD)" active={activeSection} onClick={handleSectionSelect} isOpen={isMobileLayout ? true : isSidebarOpen} status={sectionStatusMap['target-jd']} />
            )}
            
            <NavItem id="personal" icon={User} label="Personal Details" active={activeSection} onClick={handleSectionSelect} isOpen={isMobileLayout ? true : isSidebarOpen} status={sectionStatusMap.personal} />
            <NavItem id="experience" icon={Briefcase} label="Experience" active={activeSection} onClick={handleSectionSelect} isOpen={isMobileLayout ? true : isSidebarOpen} status={sectionStatusMap.experience} />
            <NavItem id="education" icon={GraduationCap} label="Education" active={activeSection} onClick={handleSectionSelect} isOpen={isMobileLayout ? true : isSidebarOpen} status={sectionStatusMap.education} />
            <NavItem id="skills" icon={Cpu} label="Skills" active={activeSection} onClick={handleSectionSelect} isOpen={isMobileLayout ? true : isSidebarOpen} status={sectionStatusMap.skills} />
            <NavItem id="projects" icon={Layers} label="Projects" active={activeSection} onClick={handleSectionSelect} isOpen={isMobileLayout ? true : isSidebarOpen} status={sectionStatusMap.projects} />
            <NavItem id="certifications" icon={CheckCircle} label="Certifications" active={activeSection} onClick={handleSectionSelect} isOpen={isMobileLayout ? true : isSidebarOpen} status={sectionStatusMap.certifications} />
            <NavItem id="awards" icon={Award} label="Awards" active={activeSection} onClick={handleSectionSelect} isOpen={isMobileLayout ? true : isSidebarOpen} status={sectionStatusMap.awards} />
            <NavItem id="languages" icon={Globe} label="Languages" active={activeSection} onClick={handleSectionSelect} isOpen={isMobileLayout ? true : isSidebarOpen} status={sectionStatusMap.languages} />
          </nav>
        </div>

        {/* EDITOR FORM AREA */}
        <div className={`bg-transparent lg:border-r border-slate-200/80 overflow-y-auto overscroll-y-contain custom-scrollbar shrink-0 min-h-0 lg:h-full z-0 relative transition-all duration-300 ease-in-out ${isMobileLayout ? (mobileWorkspaceView === 'edit' ? 'flex-1 w-full p-4 sm:p-5' : 'hidden') : isFormOpen ? 'w-full lg:w-[430px] p-4 sm:p-5 lg:p-6 opacity-100' : 'w-full lg:w-[92px] p-3 sm:p-4 lg:p-3 opacity-100'}`}>
          {isMobileLayout || isFormOpen ? (
            <div className="mx-auto w-full max-w-[420px] pb-6"> 
              <div className="mb-5 rounded-[1.5rem] border border-slate-200/80 bg-white/92 p-4 shadow-sm shadow-slate-200/70">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-teal-700">
                      <Sparkles size={12} />
                      Active Section
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                      {sectionOverview.primaryLabel}: {sectionOverview.primaryValue}
                    </span>
                  </div>
                  {isMobileLayout ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setMobileWorkspaceView('sections')}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 transition-all hover:border-teal-200 hover:text-teal-700"
                      >
                        Sections
                      </button>
                      <button
                        type="button"
                        onClick={() => setMobileWorkspaceView('preview')}
                        className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-teal-700 transition-all hover:bg-teal-100"
                      >
                        Preview
                      </button>
                    </div>
                  ) : (
                    <WorkspaceIconButton
                      icon={PanelLeftClose}
                      label="Minimize editor"
                      onClick={() => setIsFormOpen(false)}
                      className="shrink-0"
                    />
                  )}
                </div>
                <h2 className="text-[1.65rem] font-black tracking-tight text-slate-900 leading-tight">{sectionOverview.heading}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{sectionOverview.description}</p>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-2.5">
                    <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">{sectionOverview.primaryLabel}</div>
                    <div className="mt-1 text-lg font-black tracking-tight text-slate-900">{sectionOverview.primaryValue}</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-2.5">
                    <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">{sectionOverview.secondaryLabel}</div>
                    <div className="mt-1 text-lg font-black tracking-tight text-slate-900">{sectionOverview.secondaryValue}</div>
                  </div>
                </div>
              </div>

              {activeSection === 'document' && (
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Typography & Spacing</div>
                    <SelectControl
                      label="Font Family"
                      value={resume.documentSettings?.fontFamily || 'inter'}
                      onChange={(value) => handleDocumentSettingChange('fontFamily', value)}
                      options={FONT_OPTIONS}
                    />
                    <SpacingControl
                      label="Page Margin"
                      value={resume.documentSettings?.pageMargin || 0}
                      min={0}
                      max={64}
                      step={4}
                      onChange={(value) => handleDocumentSettingChange('pageMargin', value)}
                      leftLabel="Narrow"
                      rightLabel="Wide"
                    />
                    <SpacingControl
                      label="Section Spacing"
                      value={resume.documentSettings?.sectionSpacing || 28}
                      min={12}
                      max={56}
                      step={4}
                      onChange={(value) => handleDocumentSettingChange('sectionSpacing', value)}
                      leftLabel="Compact"
                      rightLabel="Airy"
                    />
                    <SpacingControl
                      label="Font Size"
                      value={Math.round((resume.documentSettings?.fontScale || 1) * 100)}
                      min={85}
                      max={125}
                      step={5}
                      suffix="%"
                      displayValue={`${Math.round((resume.documentSettings?.fontScale || 1) * 100)}%`}
                      onChange={(value) => handleDocumentSettingChange('fontScale', Number((value / 100).toFixed(2)))}
                      leftLabel="Small"
                      rightLabel="Large"
                    />
                    <SpacingControl
                      label="Line Height"
                      value={Math.round((resume.documentSettings?.lineHeight || 1.5) * 100)}
                      min={100}
                      max={180}
                      step={5}
                      suffix="%"
                      displayValue={`${(resume.documentSettings?.lineHeight || 1.5).toFixed(2)}`}
                      onChange={(value) => handleDocumentSettingChange('lineHeight', Number((value / 100).toFixed(2)))}
                      leftLabel="Dense"
                      rightLabel="Spacious"
                    />
                  </div>

                  <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 text-sm text-teal-800 leading-relaxed">
                    These controls affect the live preview, the download preview, and the exported PDF together, so what you review is much closer to the final A4 download.
                  </div>

                  <div className="theme-strong-panel rounded-2xl p-5">
                    <div className="mb-3 text-xs font-black uppercase tracking-widest text-[color:var(--theme-accent)]">Design Notes</div>
                    <p className="text-sm leading-relaxed text-[color:var(--theme-text-secondary)]">
                      Each template now keeps its own professional visual identity while sharing a cleaner typography system, better spacing rules, and more reliable A4 export behavior.
                    </p>
                  </div>
                </div>
              )}

              {/* --- TARGET JOB DESCRIPTION AREA --- */}
              {activeSection === 'target-jd' && (
                  <div className="space-y-4">
                    <div className="bg-teal-50 border border-teal-100 p-4 rounded-xl mb-6 text-sm text-teal-800 leading-relaxed">
                      Paste the description of the job you are applying for here. This allows the AI to calculate your <strong>ATS Match Score</strong> and generate customized <strong>Interview Prep</strong> questions!
                    </div>
                    <div className="mb-4">
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Job Description</label>
                      <textarea 
                        value={jdText}
                        onChange={(e) => setJdText(e.target.value)}
                        placeholder="Paste full job description here..."
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 outline-none transition-all h-[400px] resize-none custom-scrollbar"
                      />
                    </div>
                  </div>
              )}

              {/* --- LIVE TEMPLATE PREVIEW PICKER --- */}
              {activeSection === 'templates' && (
                  <div className="space-y-4">
                      <div className="rounded-2xl border border-teal-100 bg-gradient-to-r from-teal-50 to-emerald-50 p-4 text-sm text-teal-900">
                        {selectedTemplateRecommendation?.reasons?.[0] || 'Switch templates freely. Your content, spacing, and live preview settings stay with you.'}
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {rankedTemplates.map(tpl => (
                          <div 
                              key={tpl.id} 
                              onClick={() => onChangeTemplate(tpl.id)} 
                              className={`
                                  cursor-pointer rounded-[1.5rem] border-2 overflow-hidden relative transition-all hover:scale-[1.02] group bg-white
                                  ${selectedTemplate === tpl.id ? 'border-teal-600 ring-2 ring-teal-600/20' : 'border-slate-200 hover:border-teal-400'}
                              `}
                          >
                              <div className="h-40 w-full bg-slate-100 overflow-hidden relative">
                                  <div className="absolute top-0 left-0 w-[400%] h-[400%] transform scale-[0.25] origin-top-left pointer-events-none select-none bg-white">
                                      <ResumeThumbnail templateId={tpl.id} data={getPreviewTemplateData(resume, tpl.id)} />
                                  </div>
                                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors"></div>
                              </div>
                              
                              <div className="p-3 bg-white border-t border-slate-100">
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="text-xs font-bold text-slate-700 block truncate">{tpl.name}</span>
                                    {selectedTemplateRank && tpl.id === selectedTemplate && (
                                      <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.22em] text-teal-700">
                                        Active
                                      </span>
                                    )}
                                  </div>
                                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500 line-clamp-2">
                                    {tpl.reasons?.[0] || 'A balanced, editable layout for your content.'}
                                  </p>
                              </div>
                          </div>
                      ))}
                      </div>
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
                    formattingEnabled
                    formattingDefault={LIST_MODES.PLAIN}
                    placeholder="Write a paragraph or use separate lines if you prefer."
                    onEnhanceClick={() => openAIModal(resume.personal.summary, "Professional Summary", (newText) => handlePersonalChange('summary', newText))}
                  />
                  <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                    <div className="text-xs font-black uppercase tracking-widest text-teal-700 mb-3">Layout Space</div>
                    <p className="text-sm text-teal-800 mb-4">Add empty space after the header so the rest of the resume moves down without changing the template style.</p>
                    <SpacingControl
                      label="Empty Space After Personal Details"
                      value={resume.layoutSpacing?.personal || 0}
                      onChange={(value) => handleLayoutSpacingChange('personal', value)}
                    />
                  </div>
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
                            label="Description" 
                            value={item.desc} 
                            onChange={(v) => updateListItem('experience', item.id, 'desc', v)}
                            formattingEnabled
                            formattingDefault={LIST_MODES.BULLET}
                            placeholder="Add achievements as bullets, numbers, or plain lines."
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
                            formattingEnabled
                            formattingDefault={LIST_MODES.PLAIN}
                            placeholder="Describe the project in a paragraph or switch to bullets or numbers."
                            onEnhanceClick={() => openAIModal(item.desc, "Project Details", (newText) => updateListItem('projects', item.id, 'desc', newText))}
                          />
                        </>
                      )}
                      
                      {activeSection === 'awards' && (<><Input label="Award Name" value={item.name} onChange={(v) => updateListItem('awards', item.id, 'name', v)} /><Input label="Issuer" value={item.issuer} onChange={(v) => updateListItem('awards', item.id, 'issuer', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('awards', item.id, 'date', v)} /></>)}
                      {activeSection === 'certifications' && (<><Input label="Certificate Name" value={item.name} onChange={(v) => updateListItem('certifications', item.id, 'name', v)} /><Input label="Issuer" value={item.issuer} onChange={(v) => updateListItem('certifications', item.id, 'issuer', v)} /><Input label="Date" value={item.date} onChange={(v) => updateListItem('certifications', item.id, 'date', v)} /></>)}
                      {activeSection === 'languages' && (<div className="grid grid-cols-1 gap-4 sm:grid-cols-2"><Input label="Language" value={item.name} onChange={(v) => updateListItem('languages', item.id, 'name', v)} /><Input label="Level" value={item.level} onChange={(v) => updateListItem('languages', item.id, 'level', v)} /></div>)}
                    </div>
                  ))}
                  {activeSection === 'experience' && (
                    <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                      <div className="text-xs font-black uppercase tracking-widest text-teal-700 mb-3">Layout Space</div>
                      <p className="text-sm text-teal-800 mb-4">Insert empty space before the experience section to push everything below it downward.</p>
                      <SpacingControl
                        label="Empty Space Before Experience"
                        value={resume.layoutSpacing?.experience || 0}
                        onChange={(value) => handleLayoutSpacingChange('experience', value)}
                      />
                    </div>
                  )}
                  {activeSection === 'education' && (
                    <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                      <div className="text-xs font-black uppercase tracking-widest text-teal-700 mb-3">Layout Space</div>
                      <p className="text-sm text-teal-800 mb-4">Insert empty space before the education section to move that section lower in the template.</p>
                      <SpacingControl
                        label="Empty Space Before Education"
                        value={resume.layoutSpacing?.education || 0}
                        onChange={(value) => handleLayoutSpacingChange('education', value)}
                      />
                    </div>
                  )}
                  <button onClick={() => addListItem(activeSection)} className="w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 font-bold hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all"> + Add Item </button>
                </div>
              )}
             </div>
          ) : (
            <div className="mx-auto flex h-full w-full max-w-[92px] lg:max-w-none">
              <div className="flex w-full items-center justify-between gap-4 rounded-[1.5rem] border border-slate-200/80 bg-white/92 px-4 py-3 shadow-sm shadow-slate-200/70 lg:flex-col lg:justify-start lg:gap-4 lg:px-3 lg:py-5">
                <WorkspaceIconButton
                  icon={PanelLeftOpen}
                  label="Open editor"
                  onClick={() => setIsFormOpen(true)}
                  className="shrink-0"
                />
                <div className="min-w-0 lg:text-center">
                  <div className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Editor</div>
                  <div className="mt-1 text-sm font-bold text-slate-700 lg:hidden">Open editing panel</div>
                  <div className="mt-1 hidden text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 lg:block [writing-mode:vertical-rl] [text-orientation:mixed]">
                    Open panel
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

	        {/* PREVIEW AREA */}
	        <div className={`min-h-0 lg:h-full bg-[linear-gradient(180deg,rgba(226,232,240,0.55)_0%,rgba(241,245,249,0.9)_100%)] overflow-y-auto overscroll-y-contain custom-scrollbar p-4 sm:p-5 lg:p-7 justify-center z-0 relative ${isMobileLayout ? (mobileWorkspaceView === 'preview' ? 'flex flex-1 w-full overflow-x-auto' : 'hidden') : 'flex flex-1'}`}>
	            <div className="flex flex-col items-center w-full">
                <div className="mb-4 w-full max-w-[820px] rounded-[1.5rem] border border-slate-200/80 bg-white/92 p-4 shadow-sm shadow-slate-200/70 backdrop-blur">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.28em] text-teal-600">Live Canvas</div>
                      <div className="mt-1.5 text-[1.65rem] font-black tracking-tight text-slate-900 leading-tight">
                        {selectedTemplateMeta?.name || 'Resume Preview'}
                      </div>
                      <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-500">
                        {isPreviewEditMode
                          ? 'Click highlighted text in the resume to edit it directly. Changes update the real form instantly.'
                          : 'Use this preview to judge spacing, scan flow, and page endings before you export.'}
                      </p>
                    </div>
                    <div className="flex w-full flex-col items-start gap-3 lg:w-auto lg:items-end">
                      <div className="flex w-full flex-wrap items-center gap-2 lg:justify-end">
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                          A4 Preview
                        </span>
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                          {previewZoomPercent}% zoom
                        </span>
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                          {previewPages.length} page{previewPages.length === 1 ? '' : 's'}
                        </span>
                        <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] ${
                          manualPageBreaks.length > 0
                            ? 'border border-amber-200 bg-amber-50 text-amber-700'
                            : 'border border-teal-100 bg-teal-50 text-teal-700'
                        }`}>
                          {manualPageBreaks.length > 0 ? `${manualPageBreaks.length} manual breaks` : 'Auto page flow'}
                        </span>
                      </div>
                      <div className="flex w-full flex-wrap items-center gap-2 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-1.5 lg:w-auto">
                        <WorkspaceIconButton
                          icon={PencilLine}
                          label={isPreviewEditMode ? 'Turn off live edit' : 'Turn on live edit'}
                          onClick={togglePreviewEditMode}
                          active={isPreviewEditMode}
                        />
                        <WorkspaceIconButton
                          icon={ZoomOut}
                          label="Zoom out"
                          onClick={() => adjustPreviewZoom('out')}
                          disabled={previewZoomLevel <= 0.75}
                        />
                        <WorkspaceIconButton
                          icon={Maximize2}
                          label="Fit canvas"
                          onClick={resetPreviewZoom}
                          active={previewZoomLevel === 1}
                        />
                        <WorkspaceIconButton
                          icon={ZoomIn}
                          label="Zoom in"
                          onClick={() => adjustPreviewZoom('in')}
                          disabled={previewZoomLevel >= 1.45}
                        />
                        <WorkspaceIconButton
                          icon={Eye}
                          label="Open preview"
                          onClick={handleOpenPreview}
                        />
                        <WorkspaceIconButton
                          icon={Scissors}
                          label={
                            previewMetrics.pageHeight && previewMetrics.contentHeight > previewMetrics.pageHeight
                              ? 'Add page break'
                              : 'Page break unavailable'
                          }
                          onClick={handleAddPageBreak}
                          disabled={!previewMetrics.pageHeight || previewMetrics.contentHeight <= previewMetrics.pageHeight}
                        />
                        {manualPageBreaks.length > 0 && (
                          <WorkspaceIconButton
                            icon={RotateCcw}
                            label="Reset page breaks"
                            onClick={handleResetPageBreaks}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-2.5 text-xs leading-relaxed text-slate-600">
                    {isPreviewEditMode
                      ? 'Live edit is active. Hover highlighted text to see the edit hint, then click any section you want to update directly.'
                      : isMobileLayout
                        ? 'Preview your resume here, then use Print / Save PDF when the layout looks right.'
                        : selectedTemplateRecommendation?.reasons?.[0] || 'This preview reflects the same content, spacing, and print behavior used for your final PDF.'}
                  </div>
                </div>
                {isPreviewEditMode && activePreviewField && (
                  <div className="mb-4 w-full max-w-[820px] rounded-2xl border border-teal-200 bg-white/95 p-4 shadow-lg backdrop-blur">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.24em] text-teal-600">Live Edit</div>
                        <div className="text-sm font-bold text-slate-900">{activePreviewField.label}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActivePreviewField(null)}
                        className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                      >
                        Close
                      </button>
                    </div>
                    {activePreviewField.multiline ? (
                      <textarea
                        value={typeof activePreviewFieldValue === 'string' ? activePreviewFieldValue : ''}
                        onChange={(event) => handlePreviewFieldChange(event.target.value)}
                        className="h-28 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                      />
                    ) : (
                      <input
                        value={typeof activePreviewFieldValue === 'string' ? activePreviewFieldValue : ''}
                        onChange={(event) => handlePreviewFieldChange(event.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                      />
                    )}
                  </div>
                )}
		            <div
                ref={previewStageRef}
                className={`relative origin-top transition-all duration-300 ${isPreviewEditMode ? 'preview-edit-mode' : ''}`}
                style={{ transform: `scale(${previewScale})`, transformOrigin: 'top center' }}
              >
		                <div
		                    ref={previewRef}
		                    className="relative w-[210mm] min-h-[297mm] h-auto bg-white shadow-2xl transition-all duration-300 overflow-visible"
		                    onClick={isPreviewEditMode ? handlePreviewEditableClick : handlePreviewClick}
		                >
		                    <ResumePreview data={resume} template={selectedTemplate} />
                      <div className="absolute inset-0 pointer-events-none z-20">
                        {selectedPageBreakPosition !== null && (
                          <div
                            className="absolute left-0 right-0"
                            style={{ top: `${selectedPageBreakPosition}px` }}
                          >
                            <div className="relative -translate-y-1/2">
                              <div className="border-t-2 border-dashed border-amber-500" />
                              <div className="absolute left-4 top-0 -translate-y-1/2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-700 shadow-md">
                                New Break Position
                              </div>
                            </div>
                          </div>
                        )}
                        {previewPageBreaks.map((pageBreak, index) => (
                          <div
                            key={`${pageBreak}-${index}`}
                            className="absolute left-0 right-0"
                            style={{ top: `${pageBreak}px` }}
                          >
                            <div className="relative -translate-y-1/2">
                              <div className="border-t-2 border-dashed border-teal-500/80" />
                              <button
                                type="button"
                                onMouseDown={(event) => handlePageBreakDragStart(index, event)}
                                onClick={(event) => event.stopPropagation()}
                                className={`absolute right-4 top-0 -translate-y-1/2 pointer-events-auto rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-md cursor-row-resize ${
                                  manualPageBreaks.length > 0
                                    ? 'border-amber-200 bg-amber-50 text-amber-700'
                                    : 'border-teal-200 bg-white text-teal-700'
                                }`}
                              >
                                {manualPageBreaks.length > 0 ? `Page ${index + 1} ends here` : `Auto end of page ${index + 1}`}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
		                </div>
	              </div>
	            </div>
	        </div>

      </div>

      <div ref={exportPreviewRef} className="pointer-events-none fixed -left-[10000px] top-0 z-[-1] w-[210mm]">
        <ResumePreview data={resume} template={selectedTemplate} />
      </div>
    </div>
  );
};

export default Editor;
