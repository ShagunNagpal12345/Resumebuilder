// import React, { useState, useRef } from 'react';
// import { UploadCloud, Target, ArrowRight, CheckCircle, Loader2, FileText, AlertCircle } from 'lucide-react';
// import { extractTextFromFile } from '../../services/fileParser'; // Adjust path if needed
// import { phase1_ExtractResume, phase2_AnalyzeJD, phase3_TailorResume } from '../../services/jobTailorService'; // Adjust path if needed

// const TargetedResumeUI = ({ onComplete, onCancel }) => {
//   const [file, setFile] = useState(null);
//   const [jdText, setJdText] = useState('');
//   const [status, setStatus] = useState('idle'); // idle, processing, error
//   const [progressMsg, setProgressMsg] = useState('');
//   const fileInputRef = useRef(null);

//   const handleFileChange = (e) => {
//     const selected = e.target.files[0];
//     if (selected && (selected.type === "application/pdf" || selected.name.endsWith(".docx"))) {
//       setFile(selected);
//     } else {
//       alert("Please upload a valid PDF or DOCX file.");
//     }
//   };

//   const handleStartAlignment = async () => {
//     if (!file) return alert("Please upload your resume first.");
//     if (!jdText.trim()) return alert("Please paste the Job Description.");

//     setStatus('processing');
    
//     try {
//       // Step 0: Read File
//       setProgressMsg('Extracting text from your document...');
//       const rawResumeText = await extractTextFromFile(file);

//       // Step 1: Parse Resume
//       setProgressMsg('Phase 1: AI parsing your resume data...');
//       const parsedResume = await phase1_ExtractResume(rawResumeText);

//       // Step 2: Parse JD
//       setProgressMsg('Phase 2: Deep analyzing Job Description requirements...');
//       const parsedJD = await phase2_AnalyzeJD(jdText);

//       // Step 3: Tailor Resume
//       setProgressMsg('Phase 3: Tailoring bullet points and rewriting summary...');
//       const finalTailoredResume = await phase3_TailorResume(parsedResume, parsedJD);

//       setProgressMsg('Complete! Loading your targeted resume...');
      
//       // Pass the fully tailored data back to your main Resume Builder
//       setTimeout(() => onComplete(finalTailoredResume), 1000);

//     } catch (error) {
//       console.error(error);
//       setStatus('error');
//       setProgressMsg('An error occurred during the AI alignment process. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0b0f19] flex flex-col items-center justify-center p-6 relative font-sans text-white">
//       {/* Background FX */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

//       <div className="relative z-10 w-full max-w-4xl bg-[#1e293b]/40 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
        
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 mb-4 shadow-lg shadow-teal-500/20">
//             <Target size={32} className="text-white" />
//           </div>
//           <h2 className="text-3xl font-black mb-2">Job Alignment Engine</h2>
//           <p className="text-slate-400 text-sm max-w-lg mx-auto">Upload your base resume and paste the target job description. Our 3-node AI system will automatically rewrite your profile to match the role.</p>
//         </div>

//         {status === 'idle' || status === 'error' ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
//             {/* Left Box: File Upload */}
//             <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-700/50 flex flex-col">
//               <h3 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">1. Base Resume</h3>
//               <div 
//                 className={`flex-1 border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-6 transition-all ${file ? 'border-teal-500 bg-teal-500/5' : 'border-slate-600 hover:border-teal-500/50 hover:bg-slate-800'}`}
//                 onClick={() => fileInputRef.current.click()}
//               >
//                 {file ? (
//                   <>
//                     <FileText size={40} className="text-teal-400 mb-3" />
//                     <p className="font-bold text-sm text-white">{file.name}</p>
//                     <p className="text-xs text-slate-400 mt-1">Click to change file</p>
//                   </>
//                 ) : (
//                   <>
//                     <UploadCloud size={40} className="text-slate-400 mb-3" />
//                     <p className="font-bold text-sm text-slate-300">Upload PDF or DOCX</p>
//                     <p className="text-xs text-slate-500 mt-1">Drag & drop or click to browse</p>
//                   </>
//                 )}
//                 <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.docx" className="hidden" />
//               </div>
//             </div>

//             {/* Right Box: Job Description */}
//             <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-700/50 flex flex-col">
//               <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">2. Target Job Description</h3>
//               <textarea 
//                 className="flex-1 w-full bg-slate-950/50 border border-slate-700 rounded-xl p-4 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
//                 placeholder="Paste the full job description here (responsibilities, requirements, about the role)..."
//                 value={jdText}
//                 onChange={(e) => setJdText(e.target.value)}
//               ></textarea>
//             </div>

//           </div>
//         ) : (
//           // PROCESSING STATE
//           <div className="py-12 flex flex-col items-center justify-center">
//             <Loader2 size={48} className="text-teal-400 animate-spin mb-6" />
//             <h3 className="text-xl font-bold text-white mb-2">Aligning Your Career Profile</h3>
//             <p className="text-sm text-teal-400 font-mono">{progressMsg}</p>
            
//             {/* Visual Progress Steps */}
//             <div className="flex gap-4 mt-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
//                <span className={progressMsg.includes('Phase 1') || progressMsg.includes('Phase 2') || progressMsg.includes('Phase 3') || progressMsg.includes('Complete') ? 'text-white' : ''}>Extraction</span>
//                <span>➔</span>
//                <span className={progressMsg.includes('Phase 2') || progressMsg.includes('Phase 3') || progressMsg.includes('Complete') ? 'text-white' : ''}>JD Analysis</span>
//                <span>➔</span>
//                <span className={progressMsg.includes('Phase 3') || progressMsg.includes('Complete') ? 'text-white' : ''}>AI Tailoring</span>
//             </div>
//           </div>
//         )}

//         {status === 'error' && (
//           <div className="mt-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3 text-sm">
//              <AlertCircle size={16} /> {progressMsg}
//           </div>
//         )}

//         {/* Action Buttons */}
//         {status !== 'processing' && (
//           <div className="mt-8 flex justify-between items-center">
//             <button onClick={onCancel} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
//               ← Back to Selection
//             </button>
//             <button 
//               onClick={handleStartAlignment}
//               disabled={!file || !jdText.trim()}
//               className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:shadow-lg hover:shadow-teal-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Initiate Alignment <ArrowRight size={16} />
//             </button>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default TargetedResumeUI;

import React, { useState, useRef } from 'react';
import { UploadCloud, Target, ArrowRight, Loader2, FileText, AlertCircle, X, CheckCircle2 } from 'lucide-react';
import { extractTextFromFile } from '../../utils/fileParser';
import { phase1_ExtractResume, phase2_AnalyzeJD, phase3_TailorResume } from '../../services/jobTailorService'; 

const TargetedResumeUI = ({ onComplete, onCancel }) => {
  const [file, setFile] = useState(null);
  const [jdText, setJdText] = useState('');
  const [status, setStatus] = useState('idle'); // idle, processing, error
  const [progressMsg, setProgressMsg] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // --- DRAG AND DROP HANDLERS ---
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    validateAndSetFile(selected);
  };

  const validateAndSetFile = (selectedFile) => {
    if (selectedFile && (selectedFile.type === "application/pdf" || selectedFile.name.endsWith(".docx"))) {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid PDF or DOCX file.");
    }
  };

  const clearFile = (e) => {
    e.stopPropagation(); // Prevent opening the file dialog
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // --- AI ALIGNMENT PROCESS ---
  const handleStartAlignment = async () => {
    if (!file) return alert("Please upload your base resume first.");
    if (!jdText.trim()) return alert("Please paste the Job Description.");

    setStatus('processing');
    
    try {
      // Step 0: Read File
      setProgressMsg('Extracting text from document...');
      const rawResumeText = await extractTextFromFile(file);

      // Step 1: Parse Resume
      setProgressMsg('Phase 1: AI parsing your base profile...');
      const parsedResume = await phase1_ExtractResume(rawResumeText);

      // Step 2: Parse JD
      setProgressMsg('Phase 2: Deep analyzing Job Description requirements...');
      const parsedJD = await phase2_AnalyzeJD(jdText);

      // Step 3: Tailor Resume
      setProgressMsg('Phase 3: Tailoring bullet points and rewriting summary...');
      const finalTailoredResume = await phase3_TailorResume(parsedResume, parsedJD);

      setProgressMsg('Complete! Loading your targeted resume...');
      
      // Pass the fully tailored data back to your main Resume Builder
      setTimeout(() => onComplete(finalTailoredResume), 1200);

    } catch (error) {
      console.error(error);
      setStatus('error');
      setProgressMsg('An error occurred during the AI alignment process. Please try again.');
    }
  };

  // Calculate Progress Bar Width
  let progressPct = 10;
  if (progressMsg.includes('Phase 1')) progressPct = 30;
  if (progressMsg.includes('Phase 2')) progressPct = 60;
  if (progressMsg.includes('Phase 3')) progressPct = 90;
  if (progressMsg.includes('Complete')) progressPct = 100;

  return (
    <div className="min-h-screen bg-[#0b0f19] flex flex-col items-center justify-center p-6 relative font-sans text-white selection:bg-teal-500/30">
      
      {/* Background FX */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl bg-[#1e293b]/40 border border-slate-700/50 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 mb-6 shadow-lg shadow-teal-500/20">
            <Target size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Job Alignment Engine</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Upload your base resume and paste the target job description. Our 3-node AI system will extract your data, analyze the employer's needs, and rewrite your profile to match.
          </p>
        </div>

        {status === 'idle' || status === 'error' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Box: File Upload */}
            <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-700/50 flex flex-col h-[350px]">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-xs font-bold uppercase tracking-widest text-teal-400 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span> 1. Base Resume
                 </h3>
              </div>
              
              <div 
                className={`flex-1 border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-6 transition-all cursor-pointer relative overflow-hidden group
                  ${isDragging ? 'border-teal-400 bg-teal-500/10 scale-[1.02]' : ''}
                  ${file ? 'border-teal-500/50 bg-teal-500/5' : 'border-slate-600 hover:border-teal-500/50 hover:bg-slate-800'}
                `}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
              >
                {file ? (
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <FileText size={32} className="text-teal-400" />
                    </div>
                    <p className="font-bold text-sm text-white truncate max-w-[200px]">{file.name}</p>
                    <p className="text-xs text-teal-500 mt-2 font-medium flex items-center gap-1"><CheckCircle2 size={12}/> Ready for parsing</p>
                    
                    <button 
                      onClick={clearFile}
                      className="absolute top-4 right-4 p-1.5 bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 rounded-lg transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-slate-700 transition-colors">
                      <UploadCloud size={32} className="text-slate-400 group-hover:text-teal-400 transition-colors" />
                    </div>
                    <p className="font-bold text-sm text-slate-300 mb-1">Upload PDF or DOCX</p>
                    <p className="text-xs text-slate-500">Drag & drop or click to browse</p>
                  </div>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.docx" className="hidden" />
              </div>
            </div>

            {/* Right Box: Job Description */}
            <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-700/50 flex flex-col h-[350px]">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 2. Target Job Description
                 </h3>
                 {jdText && (
                   <button onClick={() => setJdText('')} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Clear</button>
                 )}
              </div>
              <textarea 
                className="flex-1 w-full bg-slate-950/50 border border-slate-700 rounded-xl p-4 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none shadow-inner"
                placeholder="Paste the full job description here (responsibilities, requirements, about the role)..."
                value={jdText}
                onChange={(e) => setJdText(e.target.value)}
              ></textarea>
            </div>

          </div>
        ) : (
          // PROCESSING STATE
          <div className="py-16 flex flex-col items-center justify-center">
            
            <div className="relative mb-8">
               <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full animate-pulse"></div>
               <Loader2 size={64} className="text-teal-400 animate-spin relative z-10" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Aligning Your Career Profile</h3>
            <p className="text-sm text-teal-400 font-mono mb-8">{progressMsg}</p>
            
            {/* Progress Bar */}
            <div className="w-full max-w-md bg-slate-800 rounded-full h-2 mb-6 overflow-hidden border border-slate-700">
               <div 
                 className="bg-gradient-to-r from-teal-500 to-emerald-400 h-2 rounded-full transition-all duration-500 ease-out" 
                 style={{ width: `${progressPct}%` }}
               ></div>
            </div>
            
            {/* Visual Progress Steps */}
            <div className="flex justify-between w-full max-w-md text-[10px] font-bold text-slate-500 uppercase tracking-widest">
               <span className={progressPct >= 30 ? 'text-teal-400 transition-colors' : ''}>Extraction</span>
               <span className={progressPct >= 60 ? 'text-teal-400 transition-colors' : ''}>JD Analysis</span>
               <span className={progressPct >= 90 ? 'text-teal-400 transition-colors' : ''}>AI Tailoring</span>
            </div>

          </div>
        )}

        {status === 'error' && (
          <div className="mt-8 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3 text-sm animate-in fade-in slide-in-from-bottom-4">
             <AlertCircle size={20} className="shrink-0" /> 
             <p>{progressMsg}</p>
          </div>
        )}

        {/* Action Buttons */}
        {status !== 'processing' && (
          <div className="mt-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 border-t border-slate-800/50 pt-8">
            <button onClick={onCancel} className="text-slate-400 hover:text-white text-sm font-medium transition-colors w-full sm:w-auto text-center">
              ← Back to Selection
            </button>
            <button 
              onClick={handleStartAlignment}
              disabled={!file || !jdText.trim()}
              className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              Initiate Alignment <ArrowRight size={18} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default TargetedResumeUI;