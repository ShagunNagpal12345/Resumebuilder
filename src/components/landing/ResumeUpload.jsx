// import React, { useState } from 'react';
// import { Upload, FileText, CheckCircle, Brain, Sparkles, ShieldCheck, Zap, Users, ArrowRight } from 'lucide-react';

// const ResumeUpload = ({ onFileUpload }) => { // <--- Receive Prop
//   const [file, setFileLocal] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFileLocal(selectedFile);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const droppedFile = e.dataTransfer.files[0];
//     if(droppedFile) { 
//         setFileLocal(droppedFile); 
//     }
//   };

//   const handleNext = () => {
//     if (file) {
//         onFileUpload(file); // <--- Pass file to Parent
//     }
//   };

//   // Mock Panelists representing "Who reads your resume"
//   const interviewers = [
//     { name: "ATS System", role: "Automated Gatekeeper", img: "https://images.unsplash.com/photo-1531297424005-06342e7f3947?auto=format&fit=crop&q=80&w=200", focus: "Keywords & Formatting" },
//     { name: "Senior Recruiter", role: "Talent Acquisition", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200", focus: "Relevance & Clarity" },
//     { name: "Hiring Manager", role: "Team Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", focus: "Skills & Impact" }
//   ];

//   return (
//     <div className="min-h-screen w-full bg-[#0f172a] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-teal-500/30">
      
//       {/* BACKGROUND FX */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
//       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
//       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

//       <div className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 py-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
//         {/* LEFT COLUMN */}
//         <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
//           <div className="space-y-6">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider">
//               <Sparkles size={12} /> CareerSense AI Parsing Engine
//             </div>
//             <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
//               Your Resume is <br/>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
//                 The Blueprint.
//               </span>
//             </h1>
//             <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
//               Upload your CV. Our AI analyzes your experience against industry standards to generate a professional, optimized resume instantly.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
//               <Users size={16} /> Optimized For
//             </h3>
//             <div className="grid sm:grid-cols-3 gap-5">
//               {interviewers.map((person, i) => (
//                 <div key={i} className="group relative bg-[#1e293b]/50 hover:bg-[#1e293b] border border-slate-700 hover:border-teal-500/50 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-teal-900/20">
//                   <div className="flex items-center gap-4 mb-3">
//                     <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-600 group-hover:border-teal-400 transition-colors shrink-0">
//                       <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
//                     </div>
//                     <div className="overflow-hidden">
//                       <div className="font-bold text-sm text-white group-hover:text-teal-400 transition-colors truncate">{person.name}</div>
//                       <div className="text-[10px] text-slate-400 uppercase font-medium truncate">{person.role}</div>
//                     </div>
//                   </div>
//                   <div className="text-xs text-slate-500 border-t border-slate-700/50 pt-3 flex items-center gap-1.5">
//                     <Zap size={12} className="text-teal-500" /> Focus: <span className="text-slate-300">{person.focus}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-8 text-slate-500 text-sm font-medium pt-4 border-t border-white/5">
//              <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-teal-500" /> Private & Encrypted</div>
//              <div className="flex items-center gap-2"><Brain size={18} className="text-teal-500" /> AI Powered Extraction</div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: UPLOAD ZONE */}
//         <div className="lg:col-span-5 flex flex-col justify-center">
//           <div className="bg-[#1e293b]/30 border border-slate-700 rounded-[32px] p-2 shadow-2xl relative overflow-hidden group backdrop-blur-sm">
//             <div className="absolute -inset-1 bg-gradient-to-tr from-teal-500/20 via-blue-500/20 to-emerald-500/20 rounded-[32px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            
//             <div className="relative bg-[#0b1120] rounded-[24px] p-8 md:p-12 h-full flex flex-col">
//                 <div className="mb-8 text-center md:text-left">
//                     <h2 className="text-3xl font-bold text-white mb-2">Upload Resume</h2>
//                     <p className="text-slate-400 text-sm">Upload PDF or DOCX to extract data.</p>
//                 </div>

//                 <div 
//                     onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
//                     onDragLeave={() => setIsDragging(false)}
//                     onDrop={handleDrop}
//                     className={`
//                         relative flex-1 min-h-[320px] rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer overflow-hidden
//                         ${file 
//                             ? 'border-teal-500/50 bg-teal-500/5' 
//                             : isDragging 
//                                 ? 'border-teal-400 bg-teal-500/10 scale-[1.02]' 
//                                 : 'border-slate-700 bg-slate-800/50 hover:border-slate-500 hover:bg-slate-800'
//                         }
//                     `}
//                 >
//                     <input 
//                         type="file" 
//                         accept=".pdf,.doc,.docx"
//                         onChange={handleFileChange}
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
//                     />
                    
//                     <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_100%)] bg-[size:20px_20px] pointer-events-none"></div>

//                     {file ? (
//                         <div className="relative z-10 animate-in zoom-in duration-300">
//                             <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-teal-500/20">
//                                 <FileText className="text-white w-10 h-10" />
//                             </div>
//                             <p className="font-bold text-white text-xl truncate max-w-[240px] mx-auto">{file.name}</p>
//                             <p className="text-teal-400 text-sm font-bold uppercase mt-2 tracking-wider flex items-center justify-center gap-2">
//                                 <CheckCircle size={16} /> Ready to Process
//                             </p>
//                             <span className="text-xs text-slate-500 mt-6 block opacity-70 group-hover:opacity-100 transition-opacity">Tap to change file</span>
//                         </div>
//                     ) : (
//                         <div className="relative z-10">
//                             <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 transition-all duration-300 ${isDragging ? 'bg-teal-500 text-white scale-110 shadow-lg shadow-teal-500/50' : 'bg-slate-800 text-slate-400 shadow-inner'}`}>
//                                 <Upload className="w-9 h-9" />
//                             </div>
//                             <p className="text-xl font-bold text-white mb-2">Drag & drop resume</p>
//                             <p className="text-slate-500 text-sm">or click to browse files</p>
//                         </div>
//                     )}
//                 </div>

//                 <button
//                     onClick={handleNext}
//                     disabled={!file}
//                     className={`
//                         w-full mt-8 py-5 rounded-2xl font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden
//                         ${file 
//                             ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-1' 
//                             : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'}
//                     `}
//                 >
//                     {file && <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-12 -translate-x-full"></div>}
//                     <span className="relative flex items-center gap-2">
//                         {file ? "Continue" : "Upload to Continue"}
//                         <ArrowRight size={20} />
//                     </span>
//                 </button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ResumeUpload;

import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, Brain, Sparkles, ShieldCheck, Zap, Users, ArrowRight } from 'lucide-react';

const ResumeUpload = ({ onFileUpload }) => { // <--- Receive Prop
  const [file, setFileLocal] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // --- HANDLER: FILE SELECTED VIA INPUT ---
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log("File selected via input:", selectedFile.name);
      setFileLocal(selectedFile);
    }
  };

  // --- HANDLER: DRAG OVER ---
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // --- HANDLER: DRAG LEAVE ---
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  // --- HANDLER: FILE DROPPED ---
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if(droppedFile) { 
        console.log("File dropped:", droppedFile.name);
        setFileLocal(droppedFile); 
    }
  };

  // --- HANDLER: SUBMIT TO PARENT ---
  const handleNext = () => {
    if (file) {
        console.log("Submitting file to App:", file.name);
        onFileUpload(file); // <--- Pass file to Parent (App.jsx)
    }
  };

  // Mock Panelists representing "Who reads your resume"
  const interviewers = [
    { 
      name: "ATS System", 
      role: "Automated Gatekeeper", 
      // Stable Unsplash image of a glowing server/tech system
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&fit=crop&q=80", 
      focus: "Keywords & Formatting" 
    },
    { 
      name: "Senior Recruiter", 
      role: "Talent Acquisition", 
      // Stable Pravatar image (Professional Woman)
      img: "https://i.pravatar.cc/200?img=47", 
      focus: "Relevance & Clarity" 
    },
    { 
      name: "Hiring Manager", 
      role: "Team Lead", 
      // Stable Pravatar image (Professional Man)
      img: "https://i.pravatar.cc/200?img=14", 
      focus: "Skills & Impact" 
    }
];

  return (
    <div className="min-h-screen w-full bg-[#0f172a] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-teal-500/30">
      
      {/* BACKGROUND FX */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 py-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
          <div className="space-y-6">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={12} /> CareerSense AI Parsing Engine
            </div> */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              Your Resume is <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                The Blueprint.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Upload your CV. Our AI analyzes your experience against industry standards to generate a professional, optimized resume instantly.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Users size={16} /> Optimized For
            </h3>
            <div className="grid sm:grid-cols-3 gap-5">
              {interviewers.map((person, i) => (
                <div key={i} className="group relative bg-[#1e293b]/50 hover:bg-[#1e293b] border border-slate-700 hover:border-teal-500/50 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-teal-900/20">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-600 group-hover:border-teal-400 transition-colors shrink-0">
                      <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-bold text-sm text-white group-hover:text-teal-400 transition-colors truncate">{person.name}</div>
                      <div className="text-[10px] text-slate-400 uppercase font-medium truncate">{person.role}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 border-t border-slate-700/50 pt-3 flex items-center gap-1.5">
                    <Brain size={12} className="text-teal-500" /> Focus: <span className="text-slate-300">{person.focus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-8 text-slate-500 text-sm font-medium pt-4 border-t border-white/5">
             <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-teal-500" /> Private & Encrypted</div>
             <div className="flex items-center gap-2"><Brain size={18} className="text-teal-500" /> AI Powered Extraction</div>
          </div>
        </div>

        {/* RIGHT COLUMN: UPLOAD ZONE */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="bg-[#1e293b]/30 border border-slate-700 rounded-[32px] p-2 shadow-2xl relative overflow-hidden group backdrop-blur-sm">
            <div className="absolute -inset-1 bg-gradient-to-tr from-teal-500/20 via-blue-500/20 to-emerald-500/20 rounded-[32px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-[#0b1120] rounded-[24px] p-8 md:p-12 h-full flex flex-col">
                <div className="mb-8 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-2">Upload Resume</h2>
                    <p className="text-slate-400 text-sm">Upload PDF or DOCX to extract data.</p>
                </div>

                <div 
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`
                        relative flex-1 min-h-[320px] rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer overflow-hidden
                        ${file 
                            ? 'border-teal-500/50 bg-teal-500/5' 
                            : isDragging 
                                ? 'border-teal-400 bg-teal-500/10 scale-[1.02]' 
                                : 'border-slate-700 bg-slate-800/50 hover:border-slate-500 hover:bg-slate-800'
                        }
                    `}
                >
                    <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    />
                    
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_100%)] bg-[size:20px_20px] pointer-events-none"></div>

                    {file ? (
                        <div className="relative z-10 animate-in zoom-in duration-300">
                            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-teal-500/20">
                                <FileText className="text-white w-10 h-10" />
                            </div>
                            <p className="font-bold text-white text-xl truncate max-w-[240px] mx-auto">{file.name}</p>
                            <p className="text-teal-400 text-sm font-bold uppercase mt-2 tracking-wider flex items-center justify-center gap-2">
                                <CheckCircle size={16} /> Ready to Process
                            </p>
                            <span className="text-xs text-slate-500 mt-6 block opacity-70 group-hover:opacity-100 transition-opacity">Tap to change file</span>
                        </div>
                    ) : (
                        <div className="relative z-10">
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 transition-all duration-300 ${isDragging ? 'bg-teal-500 text-white scale-110 shadow-lg shadow-teal-500/50' : 'bg-slate-800 text-slate-400 shadow-inner'}`}>
                                <Upload className="w-9 h-9" />
                            </div>
                            <p className="text-xl font-bold text-white mb-2">Drag & drop resume</p>
                            <p className="text-slate-500 text-sm">or click to browse files</p>
                        </div>
                    )}
                </div>

                <button
                    onClick={handleNext}
                    disabled={!file}
                    className={`
                        w-full mt-8 py-5 rounded-2xl font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden
                        ${file 
                            ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-1' 
                            : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'}
                    `}
                >
                    {file && <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-12 -translate-x-full"></div>}
                    <span className="relative flex items-center gap-2">
                        {file ? "Continue" : "Upload to Continue"}
                        <ArrowRight size={20} />
                    </span>
                </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeUpload;