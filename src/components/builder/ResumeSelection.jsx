// // import React from 'react';
// // import { 
// //   PenTool, 
// //   UploadCloud, 
// //   Cpu, 
// //   ArrowRight, 
// //   Zap, 
// //   Sparkles, 
// //   Target
// // } from 'lucide-react';

// // // --- REUSABLE FEATURE ROW ---
// // const FeatureItem = ({ text }) => (
// //   <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-1.5">
// //     <div className="w-1 h-1 rounded-full bg-teal-500 shadow-[0_0_6px_rgba(20,184,166,0.6)]"></div>
// //     <span className="tracking-wide">{text}</span>
// //   </div>
// // );

// // // --- SELECTION CARD COMPONENT ---
// // const SelectionCard = ({ title, subTitle, description, icon: Icon, onClick, badge, features = [] }) => (
// //   <div 
// //     onClick={onClick}
// //     className="group relative bg-[#1e293b]/40 border border-slate-700/50 hover:border-teal-500/50 rounded-[1.5rem] p-1 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-teal-900/20 backdrop-blur-sm flex flex-col h-full cursor-pointer"
// //   >
// //     {/* Hover Glow Effect */}
// //     <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/0 to-teal-500/5 group-hover:via-teal-500/10 rounded-[1.5rem] transition-all duration-500"></div>

// //     <div className="relative bg-[#0f1522]/90 rounded-[1.3rem] p-6 flex flex-col h-full overflow-hidden">
        
// //         {/* Background Decor Icon (Large Faded) */}
// //         <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 transform group-hover:scale-125 group-hover:rotate-12 pointer-events-none">
// //             <Icon size={120} />
// //         </div>

// //         {/* Header Section */}
// //         <div className="flex justify-between items-start mb-6 relative z-10">
// //             <div className={`p-3 rounded-xl border border-white/5 transition-all duration-500 group-hover:scale-110 shadow-inner bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-teal-900/50 group-hover:to-slate-900`}>
// //                 <Icon size={24} className="text-slate-400 group-hover:text-teal-400 transition-colors" />
// //             </div>
// //             {badge && (
// //                 <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-teal-500/20 flex items-center gap-1 animate-pulse">
// //                     <Sparkles size={8} /> {badge}
// //                 </span>
// //             )}
// //         </div>

// //         {/* Title & Description */}
// //         <div className="mb-6 relative z-10">
// //             <h3 className="text-xl font-black text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-400 transition-all duration-300">
// //                 {title}
// //             </h3>
// //             <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-3">{subTitle}</p>
// //             <p className="text-xs text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-3 group-hover:border-teal-500/50 transition-colors line-clamp-3">
// //                 {description}
// //             </p>
// //         </div>

// //         {/* AI Capabilities List */}
// //         <div className="mb-6 flex-grow relative z-10">
// //             <div className="text-[9px] font-bold text-slate-600 uppercase mb-3 flex items-center gap-2">
// //                 <Cpu size={12} className="text-teal-500" /> System Capabilities
// //             </div>
// //             <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800/50 group-hover:border-teal-500/20 transition-colors">
// //                 {features.map((f, i) => <FeatureItem key={i} text={f} />)}
// //             </div>
// //         </div>

// //         {/* Action Button */}
// //         <button 
// //           className="w-full py-3 rounded-lg font-bold text-[10px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all relative overflow-hidden bg-slate-800 text-slate-300 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal-500/25 z-10"
// //         >
// //             <span>Initialize Module</span>
// //             <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
// //         </button>

// //     </div>
// //   </div>
// // );

// // // --- MAIN PAGE COMPONENT ---
// // const ResumeSelection = ({ onSelect }) => {
// //   return (
// //     <div className="h-screen bg-[#0b0f19] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-teal-500/30">
      
// //       {/* --- BACKGROUND FX --- */}
// //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
// //       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
// //         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/5 blur-[100px] rounded-full animate-pulse"></div>
// //         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full animate-pulse delay-1000"></div>
// //       </div>

// //       <div className="relative z-10 w-full max-w-[1200px] flex flex-col h-full justify-center">
        
// //         {/* Header Section */}
// //         <div className="text-center mb-8 sm:mb-10 space-y-4">
// //           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md text-slate-300 text-[9px] font-black uppercase tracking-[0.2em] mb-1 shadow-xl">
// //             <Zap size={10} className="text-teal-400 fill-teal-400" /> CareerSense Engine Active
// //           </div>
// //           <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
// //             Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Path.</span>
// //           </h1>
// //           <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
// //             Select an initialization protocol below. Our AI agents will adapt their processing logic based on your source material.
// //           </p>
// //         </div>

// //         {/* Cards Grid */}
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 mb-8">
            
// //             {/* OPTION 1: BUILD FROM SCRATCH */}
// //             <SelectionCard 
// //               title="Build from Scratch"
// //               subTitle="Manual Construction"
// //               description="Start with a blank canvas. Use our step-by-step wizard to manually input your details."
// //               icon={PenTool}
// //               onClick={() => onSelect('scratch')} 
// //               features={[
// //                   "Step-by-Step Wizard",
// //                   "Real-time Preview",
// //                   "Drag & Drop Sections",
// //                   "PDF Export"
// //               ]}
// //             />

// //             {/* OPTION 2: UPDATE RESUME */}
// //             <SelectionCard 
// //               title="Update Resume"
// //               subTitle="AI Extraction"
// //               description="Upload your existing resume (PDF/Docx). Our AI will extract your data instantly."
// //               icon={UploadCloud}
// //               onClick={() => onSelect('upload')} 
// //               features={[
// //                   "PDF/Docx Parsing",
// //                   "Auto-fill Forms",
// //                   "Format Standardization",
// //                   "Instant Redesign"
// //               ]}
// //             />

// //             {/* OPTION 3: TAILOR TO JOB */}
// //             <SelectionCard 
// //               title="Targeted Resume"
// //               subTitle="Job Alignment Engine"
// //               description="Upload your Resume AND a Job Description. AI will rewrite your resume to match the role."
// //               icon={Target}
// //               badge="AI Recommended"
// //               onClick={() => onSelect('tailor')} 
// //               features={[
// //                   "Resume + JD Analysis",
// //                   "Keyword Optimization",
// //                   "Summary Rewriting",
// //                   "Match Score Calculation"
// //               ]}
// //             />

// //         </div>

// //         {/* Footer Note */}
// //         <div className="text-center">
// //             <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
// //                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Protected by End-to-End Encryption
// //             </p>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default ResumeSelection;

// import React from 'react';
// import { 
//   PenTool, 
//   UploadCloud, 
//   Cpu, 
//   ArrowRight, 
//   Zap, 
//   Sparkles, 
//   Target
// } from 'lucide-react';

// // --- REUSABLE FEATURE ROW ---
// const FeatureItem = ({ text }) => (
//   <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-1.5">
//     <div className="w-1 h-1 rounded-full bg-teal-500 shadow-[0_0_6px_rgba(20,184,166,0.6)]"></div>
//     <span className="tracking-wide">{text}</span>
//   </div>
// );

// // --- SELECTION CARD COMPONENT ---
// const SelectionCard = ({ title, subTitle, description, icon: Icon, onClick, badge, features = [] }) => (
//   <div 
//     onClick={onClick}
//     className="group relative bg-[#1e293b]/40 border border-slate-700/50 hover:border-teal-500/50 rounded-[1.5rem] p-1 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-teal-900/20 backdrop-blur-sm flex flex-col h-full cursor-pointer"
//   >
//     {/* Hover Glow Effect */}
//     <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/0 to-teal-500/5 group-hover:via-teal-500/10 rounded-[1.5rem] transition-all duration-500"></div>

//     <div className="relative bg-[#0f1522]/90 rounded-[1.3rem] p-6 flex flex-col h-full overflow-hidden">
        
//         {/* Background Decor Icon (Large Faded) */}
//         <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 transform group-hover:scale-125 group-hover:rotate-12 pointer-events-none">
//             <Icon size={120} />
//         </div>

//         {/* Header Section */}
//         <div className="flex justify-between items-start mb-6 relative z-10">
//             <div className={`p-3 rounded-xl border border-white/5 transition-all duration-500 group-hover:scale-110 shadow-inner bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-teal-900/50 group-hover:to-slate-900`}>
//                 <Icon size={24} className="text-slate-400 group-hover:text-teal-400 transition-colors" />
//             </div>
//             {badge && (
//                 <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-teal-500/20 flex items-center gap-1 animate-pulse">
//                     <Sparkles size={8} /> {badge}
//                 </span>
//             )}
//         </div>

//         {/* Title & Description */}
//         <div className="mb-6 relative z-10">
//             <h3 className="text-xl font-black text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-400 transition-all duration-300">
//                 {title}
//             </h3>
//             <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-3">{subTitle}</p>
//             <p className="text-xs text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-3 group-hover:border-teal-500/50 transition-colors line-clamp-3">
//                 {description}
//             </p>
//         </div>

//         {/* AI Capabilities List */}
//         <div className="mb-6 flex-grow relative z-10">
//             <div className="text-[9px] font-bold text-slate-600 uppercase mb-3 flex items-center gap-2">
//                 <Cpu size={12} className="text-teal-500" /> System Capabilities
//             </div>
//             <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800/50 group-hover:border-teal-500/20 transition-colors">
//                 {features.map((f, i) => <FeatureItem key={i} text={f} />)}
//             </div>
//         </div>

//         {/* Action Button */}
//         <button 
//           className="w-full py-3 rounded-lg font-bold text-[10px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all relative overflow-hidden bg-slate-800 text-slate-300 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal-500/25 z-10"
//         >
//             <span>Initialize Module</span>
//             <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
//         </button>

//     </div>
//   </div>
// );

// // --- MAIN PAGE COMPONENT ---
// const ResumeSelection = ({ onSelect }) => {
//   return (
//     <div className="h-screen bg-[#0b0f19] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-teal-500/30">
      
//       {/* --- BACKGROUND FX --- */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/5 blur-[100px] rounded-full animate-pulse"></div>
//         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 w-full max-w-[1200px] flex flex-col h-full justify-center">
        
//         {/* Header Section */}
//         <div className="text-center mb-8 sm:mb-10 space-y-4">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md text-slate-300 text-[9px] font-black uppercase tracking-[0.2em] mb-1 shadow-xl">
//             <Zap size={10} className="text-teal-400 fill-teal-400" /> CareerSense Engine Active
//           </div>
//           <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
//             Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Path.</span>
//           </h1>
//           <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
//             Select an initialization protocol below. Our AI agents will adapt their processing logic based on your source material.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 mb-8">
            
//             {/* OPTION 1: BUILD FROM SCRATCH */}
//             <SelectionCard 
//               title="Build from Scratch"
//               subTitle="Manual Construction"
//               description="Start with a blank canvas. Use our step-by-step wizard to manually input your details."
//               icon={PenTool}
//               onClick={() => onSelect('scratch')} 
//               features={[
//                   "Step-by-Step Wizard",
//                   "Real-time Preview",
//                   "Drag & Drop Sections",
//                   "PDF Export"
//               ]}
//             />

//             {/* OPTION 2: UPDATE RESUME */}
//             <SelectionCard 
//               title="Update Resume"
//               subTitle="AI Extraction"
//               description="Upload your existing resume (PDF/Docx). Our AI will extract your data instantly."
//               icon={UploadCloud}
//               onClick={() => onSelect('upload')} 
//               features={[
//                   "PDF/Docx Parsing",
//                   "Auto-fill Forms",
//                   "Format Standardization",
//                   "Instant Redesign"
//               ]}
//             />

//             {/* OPTION 3: TAILOR TO JOB */}
//             <SelectionCard 
//               title="Targeted Resume"
//               subTitle="Job Alignment Engine"
//               description="Upload your Resume AND a Job Description. AI will rewrite your resume to match the role."
//               icon={Target}
//               badge="AI Recommended"
//               onClick={() => onSelect('tailor')} 
//               features={[
//                   "Resume + JD Analysis",
//                   "Keyword Optimization",
//                   "Summary Rewriting",
//                   "Match Score Calculation"
//               ]}
//             />

//         </div>

//         {/* Footer Note */}
//         <div className="text-center">
//             <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
//                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Protected by End-to-End Encryption
//             </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ResumeSelection;

// import React from 'react';
// import { 
//   PenTool, 
//   UploadCloud, 
//   Cpu, 
//   ArrowRight, 
//   Zap, 
//   Sparkles, 
//   Target
// } from 'lucide-react';

// // --- REUSABLE FEATURE ROW ---
// const FeatureItem = ({ text }) => (
//   <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-1.5">
//     <div className="w-1 h-1 rounded-full bg-teal-500 shadow-[0_0_6px_rgba(20,184,166,0.6)]"></div>
//     <span className="tracking-wide">{text}</span>
//   </div>
// );

// // --- PRICING TIER BADGE ---
// const TierBadge = ({ tier }) => {
//   let styles = "";
//   switch (tier?.toLowerCase()) {
//     case 'free':
//       styles = "border-slate-600 text-slate-300 bg-slate-800/80 shadow-sm";
//       break;
//     case 'premium':
//       styles = "border-blue-500/40 text-blue-400 bg-blue-900/30 shadow-md shadow-blue-900/20";
//       break;
//     case 'exclusive':
//       styles = "border-amber-500/40 text-amber-400 bg-amber-900/30 shadow-md shadow-amber-900/20";
//       break;
//     default:
//       return null;
//   }
//   return (
//     <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border backdrop-blur-md ${styles}`}>
//       {tier}
//     </span>
//   );
// };

// // --- SELECTION CARD COMPONENT ---
// const SelectionCard = ({ title, subTitle, description, icon: Icon, onClick, badge, tier, features = [] }) => (
//   <div 
//     onClick={onClick}
//     className="group relative bg-[#1e293b]/40 border border-slate-700/50 hover:border-teal-500/50 rounded-[1.5rem] p-1 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-teal-900/20 backdrop-blur-sm flex flex-col h-full cursor-pointer"
//   >
//     {/* Hover Glow Effect */}
//     <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/0 to-teal-500/5 group-hover:via-teal-500/10 rounded-[1.5rem] transition-all duration-500"></div>

//     <div className="relative bg-[#0f1522]/90 rounded-[1.3rem] p-6 flex flex-col h-full overflow-hidden">
        
//         {/* Background Decor Icon (Large Faded) */}
//         <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 transform group-hover:scale-125 group-hover:rotate-12 pointer-events-none">
//             <Icon size={120} />
//         </div>

//         {/* Header Section */}
//         <div className="flex justify-between items-start mb-6 relative z-10">
//             <div className={`p-3 rounded-xl border border-white/5 transition-all duration-500 group-hover:scale-110 shadow-inner bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-teal-900/50 group-hover:to-slate-900`}>
//                 <Icon size={24} className="text-slate-400 group-hover:text-teal-400 transition-colors" />
//             </div>
            
//             <div className="flex flex-col items-end gap-2">
//                 {tier && <TierBadge tier={tier} />}
//                 {badge && (
//                     <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-teal-500/20 flex items-center gap-1 animate-pulse">
//                         <Sparkles size={8} /> {badge}
//                     </span>
//                 )}
//             </div>
//         </div>

//         {/* Title & Description */}
//         <div className="mb-6 relative z-10">
//             <h3 className="text-xl font-black text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-400 transition-all duration-300">
//                 {title}
//             </h3>
//             <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-3">{subTitle}</p>
//             <p className="text-xs text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-3 group-hover:border-teal-500/50 transition-colors line-clamp-3">
//                 {description}
//             </p>
//         </div>

//         {/* AI Capabilities List */}
//         <div className="mb-6 flex-grow relative z-10">
//             <div className="text-[9px] font-bold text-slate-600 uppercase mb-3 flex items-center gap-2">
//                 <Cpu size={12} className="text-teal-500" /> System Capabilities
//             </div>
//             <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800/50 group-hover:border-teal-500/20 transition-colors">
//                 {features.map((f, i) => <FeatureItem key={i} text={f} />)}
//             </div>
//         </div>

//         {/* Action Button */}
//         <button 
//           className="w-full py-3 rounded-lg font-bold text-[10px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all relative overflow-hidden bg-slate-800 text-slate-300 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal-500/25 z-10"
//         >
//             <span>Initialize Module</span>
//             <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
//         </button>

//     </div>
//   </div>
// );

// // --- MAIN PAGE COMPONENT ---
// const ResumeSelection = ({ onSelect }) => {
//   return (
//     <div className="h-screen bg-[#0b0f19] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-teal-500/30">
      
//       {/* --- BACKGROUND FX --- */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/5 blur-[100px] rounded-full animate-pulse"></div>
//         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 w-full max-w-[1200px] flex flex-col h-full justify-center">
        
//         {/* Header Section */}
//         <div className="text-center mb-8 sm:mb-10 space-y-4">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md text-slate-300 text-[9px] font-black uppercase tracking-[0.2em] mb-1 shadow-xl">
//             <Zap size={10} className="text-teal-400 fill-teal-400" /> CareerSense Engine Active
//           </div>
//           <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
//             Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Path.</span>
//           </h1>
//           <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
//             Select an initialization protocol below. Our AI agents will adapt their processing logic based on your source material.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 mb-8">
            
//             {/* OPTION 1: BUILD FROM SCRATCH */}
//             <SelectionCard 
//               title="Build from Scratch"
//               subTitle="Manual Construction"
//               description="Start with a blank canvas. Use our step-by-step wizard to manually input your details."
//               icon={PenTool}
//               tier="Free"
//               onClick={() => onSelect('scratch')} 
//               features={[
//                   "Step-by-Step Wizard",
//                   "Real-time Preview",
//                   "Drag & Drop Sections",
//                   "PDF Export"
//               ]}
//             />

//             {/* OPTION 2: UPDATE RESUME */}
//             <SelectionCard 
//               title="Update Resume"
//               subTitle="AI Extraction"
//               description="Upload your existing resume (PDF/Docx). Our AI will extract your data instantly."
//               icon={UploadCloud}
//               tier="Premium"
//               onClick={() => onSelect('upload')} 
//               features={[
//                   "PDF/Docx Parsing",
//                   "Auto-fill Forms",
//                   "Format Standardization",
//                   "Instant Redesign"
//               ]}
//             />

//             {/* OPTION 3: TAILOR TO JOB */}
//             <SelectionCard 
//               title="Targeted Resume"
//               subTitle="Job Alignment Engine"
//               description="Upload your Resume AND a Job Description. AI will rewrite your resume to match the role."
//               icon={Target}
//               tier="Exclusive"
//               badge="AI Recommended"
//               onClick={() => onSelect('tailor')} 
//               features={[
//                   "Resume + JD Analysis",
//                   "Keyword Optimization",
//                   "Summary Rewriting",
//                   "Match Score Calculation"
//               ]}
//             />

//         </div>

//         {/* Footer Note */}
//         <div className="text-center">
//             <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
//                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Protected by End-to-End Encryption
//             </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ResumeSelection;

import React, { useState } from 'react';
import { 
  PenTool, 
  UploadCloud, 
  Cpu, 
  ArrowRight, 
  Zap,
  Brain,
  Sparkles, 
  Target,
  PlayCircle,
  X,
  Maximize2,
  Minimize2,
  Youtube 
} from 'lucide-react';

// --- IMPORT VIDEOS ---
// Make sure these paths match exactly where your videos are located!
import resumeVideo from '../../assets/Resume.mp4';
import resumeJdVideo from '../../assets/Resume&JD.mp4';

// --- REUSABLE FEATURE ROW ---
const FeatureItem = ({ text }) => (
  <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-1.5">
    <div className="w-1 h-1 rounded-full bg-teal-500 shadow-[0_0_6px_rgba(20,184,166,0.6)]"></div>
    <span className="tracking-wide">{text}</span>
  </div>
);

// --- PRICING TIER BADGE ---
const TierBadge = ({ tier }) => {
  let styles = "";
  switch (tier?.toLowerCase()) {
    case 'free':
      styles = "border-slate-600 text-slate-300 bg-slate-800/80 shadow-sm";
      break;
    case 'premium':
      styles = "border-blue-500/40 text-blue-400 bg-blue-900/30 shadow-md shadow-blue-900/20";
      break;
    case 'exclusive':
      styles = "border-amber-500/40 text-amber-400 bg-amber-900/30 shadow-md shadow-amber-900/20";
      break;
    default:
      return null;
  }
  return (
    <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border backdrop-blur-md ${styles}`}>
      {tier}
    </span>
  );
};

// --- CUSTOM VIDEO MODAL ---
const VideoModal = ({ src, onClose }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  if (!src) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-6 bg-slate-900/90 backdrop-blur-md transition-all">
      <div 
        className={`relative bg-slate-950 border border-slate-800 shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 flex flex-col
          ${isMaximized ? 'w-full h-full' : 'w-full max-w-5xl aspect-video'}
        `}
      >
        {/* Custom Player Header */}
        <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2 text-teal-400">
            <PlayCircle size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Feature Demonstration</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMaximized(!isMaximized)} 
              className="text-slate-400 hover:text-white transition-colors"
              title={isMaximized ? "Minimize" : "Maximize"}
            >
              {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button 
              onClick={onClose} 
              className="text-slate-400 hover:text-rose-400 transition-colors bg-slate-800 hover:bg-rose-500/10 p-1.5 rounded-lg"
              title="Close Player"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Video Element */}
        <div className="flex-1 bg-black relative">
          <video 
            src={src} 
            controls 
            autoPlay 
            className="absolute inset-0 w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};


// --- SELECTION CARD COMPONENT ---
const SelectionCard = ({ title, subTitle, description, icon: Icon, onClick, badge, tier, features = [], onPlayVideo }) => (
  <div 
    onClick={onClick}
    className="group relative bg-[#1e293b]/40 border border-slate-700/50 hover:border-teal-500/50 rounded-[1.5rem] p-1 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-teal-900/20 backdrop-blur-sm flex flex-col h-full cursor-pointer"
  >
    {/* Hover Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/0 to-teal-500/5 group-hover:via-teal-500/10 rounded-[1.5rem] transition-all duration-500"></div>

    <div className="relative bg-[#0f1522]/90 rounded-[1.3rem] p-6 flex flex-col h-full overflow-hidden">
        
        {/* Background Decor Icon (Large Faded) */}
        <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 transform group-hover:scale-125 group-hover:rotate-12 pointer-events-none">
            <Icon size={120} />
        </div>

        {/* Header Section */}
        <div className="flex justify-between items-start mb-6 relative z-10">
            <div className={`p-3 rounded-xl border border-white/5 transition-all duration-500 group-hover:scale-110 shadow-inner bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-teal-900/50 group-hover:to-slate-900`}>
                <Icon size={24} className="text-slate-400 group-hover:text-teal-400 transition-colors" />
            </div>
            
            <div className="flex flex-col items-end gap-2">
                {tier && <TierBadge tier={tier} />}
                {badge && (
                    <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-teal-500/20 flex items-center gap-1 animate-pulse">
                        <Sparkles size={8} /> {badge}
                    </span>
                )}
            </div>
        </div>

        {/* Title & Description */}
        <div className="mb-4 relative z-10">
            <h3 className="text-xl font-black text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-400 transition-all duration-300">
                {title}
            </h3>
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-3">{subTitle}</p>
            <p className="text-xs text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-3 group-hover:border-teal-500/50 transition-colors line-clamp-3">
                {description}
            </p>
        </div>

        {/* --- FIXED YOUTUBE STYLE PLAY VIDEO BUTTON --- */}
        {onPlayVideo && (
            <div className="mb-6 relative z-20">
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    onPlayVideo(); 
                  }}
                  className="group/play w-fit flex items-center justify-center gap-2.5 text-[11px] font-black uppercase tracking-[0.15em] text-white bg-[#FF0000] hover:bg-[#FF3333] border border-red-500/50 px-4 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:-translate-y-0.5"
                >
                  {/* Removed fill="currentColor" and increased strokeWidth so the YouTube outline is crisp and beautiful */}
                  <Youtube size={20} strokeWidth={2.5} className="text-white drop-shadow-md group-hover/play:scale-110 transition-transform" /> 
                  How It Works
                </button>
            </div>
        )}
        {!onPlayVideo && <div className="mb-6 h-[42px]"></div>} {/* Spacer to keep cards perfectly aligned */}

        {/* AI Capabilities List */}
        <div className="mb-6 flex-grow relative z-10">
            <div className="text-[9px] font-bold text-slate-600 uppercase mb-3 flex items-center gap-2">
                <Cpu size={12} className="text-teal-500" /> System Capabilities
            </div>
            <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800/50 group-hover:border-teal-500/20 transition-colors">
                {features.map((f, i) => <FeatureItem key={i} text={f} />)}
            </div>
        </div>

        {/* Action Button */}
        <button 
          className="w-full py-3 rounded-lg font-bold text-[10px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all relative overflow-hidden bg-slate-800 text-slate-300 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal-500/25 z-10"
        >
            <span>Initialize Module</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
        </button>

    </div>
  </div>
);


// --- MAIN PAGE COMPONENT ---
const ResumeSelection = ({ onSelect }) => {
  // State to handle which video is currently playing
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <>
      <div className="h-screen bg-[#0b0f19] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-teal-500/30">
        
        {/* --- BACKGROUND FX --- */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/5 blur-[100px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] flex flex-col h-full justify-center">
          
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md text-slate-300 text-[9px] font-black uppercase tracking-[0.2em] mb-1 shadow-xl">
              <Brain size={10} className="text-teal-400 fill-teal-400" /> CareerSense Engine Active
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Path.</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
              Select an initialization protocol below. Our AI agents will adapt their processing logic based on your source material.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 mb-8">
              
              {/* OPTION 1: BUILD FROM SCRATCH */}
              <SelectionCard 
                title="Build from Scratch"
                subTitle="Manual Construction"
                description="Start with a blank canvas. Use our step-by-step wizard to manually input your details."
                icon={PenTool}
                tier="Free"
                onClick={() => onSelect('scratch')} 
                features={[
                    "Step-by-Step Wizard",
                    "Real-time Preview",
                    "Drag & Drop Sections",
                    "PDF Export"
                ]}
              />

              {/* OPTION 2: UPDATE RESUME */}
              <SelectionCard 
                title="Update Resume"
                subTitle="AI Extraction"
                description="Upload your existing resume (PDF/Docx). Our AI will extract your data instantly."
                icon={UploadCloud}
                tier="Premium"
                onPlayVideo={() => setPlayingVideo(resumeVideo)} // Trigger Video 1
                onClick={() => onSelect('upload')} 
                features={[
                    "PDF/Docx Parsing",
                    "Auto-fill Forms",
                    "Format Standardization",
                    "Instant Redesign"
                ]}
              />

              {/* OPTION 3: TAILOR TO JOB */}
              <SelectionCard 
                title="Targeted Resume"
                subTitle="Job Alignment Engine"
                description="Upload your Resume AND a Job Description. AI will rewrite your resume to match the role."
                icon={Target}
                tier="Exclusive"
                badge="AI Recommended"
                onPlayVideo={() => setPlayingVideo(resumeJdVideo)} // Trigger Video 2
                onClick={() => onSelect('tailor')} 
                features={[
                    "Resume + JD Analysis",
                    "Keyword Optimization",
                    "Summary Rewriting",
                    "Match Score Calculation"
                ]}
              />

          </div>

          {/* Footer Note */}
          <div className="text-center">
              <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Protected by End-to-End Encryption
              </p>
          </div>

        </div>
      </div>

      {/* Render the Video Modal if a video is currently selected */}
      <VideoModal src={playingVideo} onClose={() => setPlayingVideo(null)} />
    </>
  );
};

export default ResumeSelection;