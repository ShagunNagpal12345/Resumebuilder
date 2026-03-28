import React, { useState } from 'react';
import { FileText, Search, Target, Briefcase, ArrowRight, Zap, CheckCircle2, AlertCircle, BarChart3 } from 'lucide-react';

const JDUpload = ({ onSubmit }) => { // <--- Receive Prop
  const [text, setTextLocal] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleAnalyze = () => {
    if (text.trim().length > 50) {
        onSubmit(text); // <--- Return text to Parent
    }
  };

  const analysisMetrics = [
    {
      title: "Keyword Matching",
      desc: "Checking resume vs job description...",
      icon: <Zap size={18} className="text-yellow-400" />,
      color: "border-yellow-500/20 bg-yellow-500/5 text-yellow-200"
    },
    {
      title: "Experience Gaps",
      desc: "Identifying missing seniority levels...",
      icon: <BarChart3 size={18} className="text-blue-400" />,
      color: "border-blue-500/20 bg-blue-500/5 text-blue-200"
    },
    {
      title: "Tailoring Suggestions",
      desc: "Rewriting summary for the role...",
      icon: <Target size={18} className="text-purple-400" />,
      color: "border-purple-500/20 bg-purple-500/5 text-purple-200"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#0f172a] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-indigo-500/30">
      
      {/* BACKGROUND FX */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 py-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* LEFT COLUMN: CONTEXT */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-10">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Search size={12} /> Phase 2: Context Injection
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Target the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Perfect Role.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Paste the job description below. Our AI will rewrite your resume sections to align with the specific keywords and requirements of this role.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Optimization Targets</p>
            {analysisMetrics.map((metric, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${metric.color} backdrop-blur-sm transition-all hover:scale-[1.02]`}>
                    <div className="p-2 bg-slate-900/50 rounded-lg">{metric.icon}</div>
                    <div>
                        <h4 className="font-bold text-sm">{metric.title}</h4>
                        <p className="text-xs opacity-70">{metric.desc}</p>
                    </div>
                    <div className="ml-auto">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: TEXT INPUT */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="bg-[#1e293b]/30 border border-slate-700 rounded-[32px] p-2 shadow-2xl relative overflow-hidden group backdrop-blur-sm">
            
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-[32px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-[#0b1120] rounded-[24px] p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-1">Job Description</h2>
                        <p className="text-slate-400 text-xs">Paste the full JD text here.</p>
                    </div>
                    <div className="bg-slate-800 p-2 rounded-lg text-slate-400">
                        <Briefcase size={20} />
                    </div>
                </div>

                {/* Text Area Wrapper */}
                <div className={`
                    flex-1 relative rounded-xl transition-all duration-300 border-2
                    ${isFocused ? 'border-indigo-500 bg-indigo-500/5' : 'border-slate-700 bg-slate-800/30'}
                `}>
                    <textarea 
                        className="w-full h-80 bg-transparent p-4 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none resize-none custom-scrollbar leading-relaxed"
                        placeholder="Paste Job Description here (e.g. 'We are looking for a Senior React Developer...')"
                        value={text}
                        onChange={(e) => setTextLocal(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    ></textarea>
                    
                    <div className="absolute bottom-4 right-4 text-xs font-medium px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-400">
                        {text.length > 50 ? (
                            <span className="text-green-400 flex items-center gap-1"><CheckCircle2 size={10} /> Valid Length</span>
                        ) : (
                            <span className="text-slate-500 flex items-center gap-1">Min 50 chars</span>
                        )}
                    </div>
                </div>

                <button
                    onClick={handleAnalyze}
                    disabled={text.trim().length < 50}
                    className={`
                        w-full mt-6 py-5 rounded-2xl font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden
                        ${text.trim().length >= 50 
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1' 
                            : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'}
                    `}
                >
                    {text.trim().length >= 50 && <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-12 -translate-x-full"></div>}
                    <span className="relative flex items-center gap-2">
                        Start AI Tailoring <ArrowRight size={20} />
                    </span>
                </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JDUpload;