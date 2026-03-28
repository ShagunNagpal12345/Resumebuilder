// import React, { useState } from 'react';
// import { Sparkles, FileText, Search, Languages, CheckCircle2, ArrowRight } from 'lucide-react';

// const AIFeatures = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const features = [
//     {
//       id: 0,
//       title: "AI Content Generation",
//       icon: <Sparkles size={20} />,
//       content: {
//         heading: "Write smarter, not harder.",
//         bullets: [
//           "Get suggestions based on your target job title",
//           "Match the tone and language recruiters expect",
//           "Control your input - get focused, relevant output"
//         ],
//         visual: (
//             <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 relative mt-10">
//                 <div className="absolute -top-4 left-6 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">+ Product Management</div>
//                 <div className="space-y-3">
//                     <div className="h-2 w-1/3 bg-slate-100 rounded-full"></div>
//                     <div className="h-2 w-full bg-slate-100 rounded-full"></div>
//                     <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-xs text-slate-600 leading-relaxed relative">
//                         <span className="bg-yellow-200 text-yellow-800 px-1 rounded mr-1">Product-oriented</span>
//                         Chief Technology Officer with more than 10 years of deep technical experience developing...
//                         <div className="absolute -right-2 -bottom-2 bg-white shadow-md border border-slate-100 p-2 rounded-lg flex gap-2">
//                             <button className="text-[10px] font-bold text-slate-400">Restore</button>
//                             <button className="text-[10px] font-bold text-teal-600">Approve</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//       }
//     },
//     {
//       id: 1,
//       title: "Smart Resume Parsing",
//       icon: <FileText size={20} />,
//       content: {
//         heading: "Import from anywhere.",
//         bullets: [
//           "Upload your old PDF resume or LinkedIn profile",
//           "Get instant parsing of sections like a modern ATS",
//           "Reformat messy layouts into clean, structured data"
//         ],
//         visual: (
//             <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 relative flex items-center justify-center h-48">
//                 <div className="absolute inset-0 bg-blue-50/50 rounded-xl"></div>
//                 <div className="bg-white p-4 rounded-lg shadow-md border border-slate-200 w-3/4 flex gap-4 items-center animate-pulse">
//                     <div className="w-12 h-12 bg-slate-100 rounded-full"></div>
//                     <div className="flex-1 space-y-2">
//                         <div className="h-2 bg-slate-100 rounded w-1/2"></div>
//                         <div className="h-2 bg-slate-100 rounded w-3/4"></div>
//                     </div>
//                     <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">Parsing...</div>
//                 </div>
//             </div>
//         )
//       }
//     },
//     {
//       id: 2,
//       title: "AI Skills Finder",
//       icon: <Search size={20} />,
//       content: {
//         heading: "Uncover hidden keywords.",
//         bullets: [
//           "Scan job descriptions for missing skills",
//           "Auto-suggest hard & soft skills based on role",
//           "Generate as many relevant skills as you need"
//         ],
//         visual: (
//             <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
//                 <div className="flex justify-between items-center mb-4">
//                     <span className="text-xs font-bold text-slate-400 uppercase">Tailored Skills</span>
//                     <div className="w-4 h-4 bg-red-100 rounded-full text-red-500 flex items-center justify-center text-[10px]">x</div>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                     {['Scrum', 'JIRA', 'SQL', 'Agile', 'Python', 'Tableau'].map(s => (
//                         <span key={s} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
//                             {s} <span className="text-green-500">+</span>
//                         </span>
//                     ))}
//                     <span className="bg-slate-100 text-slate-400 px-2 py-1 rounded text-xs border border-dashed border-slate-300">Add more...</span>
//                 </div>
//             </div>
//         )
//       }
//     },
//     {
//       id: 3,
//       title: "Multi-Language Translate",
//       icon: <Languages size={20} />,
//       content: {
//         heading: "Go global instantly.",
//         bullets: [
//           "Translate your resume instantly with one click",
//           "Preserve the original formatting perfectly",
//           "Choose from 30+ available languages"
//         ],
//         visual: (
//             <div className="flex gap-4">
//                 <div className="bg-white p-4 rounded-xl shadow-md border border-slate-100 w-1/2 opacity-50 scale-90">
//                     <div className="h-2 w-1/3 bg-slate-200 rounded mb-2"></div>
//                     <div className="h-1 w-full bg-slate-100 rounded mb-1"></div>
//                     <div className="h-1 w-2/3 bg-slate-100 rounded"></div>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl shadow-xl border-2 border-teal-500 w-1/2 relative">
//                     <div className="absolute -top-3 -right-3 bg-teal-500 text-white p-1 rounded-full"><Languages size={14}/></div>
//                     <div className="h-2 w-1/3 bg-teal-100 rounded mb-2"></div>
//                     <div className="h-1 w-full bg-slate-100 rounded mb-1"></div>
//                     <div className="h-1 w-2/3 bg-slate-100 rounded"></div>
//                     <div className="mt-2 text-[10px] text-teal-600 font-bold">Translated to German</div>
//                 </div>
//             </div>
//         )
//       }
//     }
//   ];

//   return (
//     <div className="py-24 bg-[#0f172a] text-white overflow-hidden relative">
      
//       {/* Background Glows */}
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-black mb-6">Fully equipped for the age of AI</h2>
//             <p className="text-slate-400 max-w-2xl mx-auto text-lg">
//                 Our AI Resume Builder helps you create resumes faster and smarter. Start with a job title, description, or custom prompt and get high-quality text tailored to the role.
//             </p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
//             {/* Left: Navigation Tabs */}
//             <div className="w-full lg:w-1/3 flex flex-col gap-2">
//                 {features.map((feature, idx) => (
//                     <button
//                         key={idx}
//                         onClick={() => setActiveTab(idx)}
//                         className={`text-left p-6 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
//                             activeTab === idx 
//                             ? 'bg-white/10 border border-white/10 shadow-lg' 
//                             : 'hover:bg-white/5 border border-transparent'
//                         }`}
//                     >
//                         <div className={`p-3 rounded-lg transition-colors ${activeTab === idx ? 'bg-teal-500 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-white'}`}>
//                             {feature.icon}
//                         </div>
//                         <span className={`font-bold text-lg ${activeTab === idx ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
//                             {feature.title}
//                         </span>
//                     </button>
//                 ))}
                
//                 <a href="#" className="mt-8 flex items-center gap-2 text-teal-400 font-bold hover:gap-4 transition-all">
//                     Explore All AI Features <ArrowRight size={18} />
//                 </a>
//             </div>

//             {/* Right: Interactive Visual Panel */}
//             <div className="w-full lg:w-2/3">
//                 <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] p-2 border border-white/10 shadow-2xl h-full min-h-[500px] relative overflow-hidden">
                    
//                     {/* Content Container */}
//                     <div className="bg-[#0b0f19] rounded-[1.5rem] w-full h-full p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
                        
//                         {/* Decorative Background Mesh */}
//                         <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-500/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />

//                         {/* Text Content */}
//                         <div className="mb-10 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeTab}">
//                             <h3 className="text-3xl font-bold text-white mb-6">{features[activeTab].content.heading}</h3>
//                             <ul className="space-y-4">
//                                 {features[activeTab].content.bullets.map((bullet, i) => (
//                                     <li key={i} className="flex items-center gap-3 text-slate-300">
//                                         <CheckCircle2 size={18} className="text-teal-500" /> {bullet}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Dynamic Visual Mockup */}
//                         <div className="relative z-10 animate-in zoom-in duration-700 key={activeTab + 'vis'}">
//                             {features[activeTab].content.visual}
//                         </div>

//                     </div>
//                 </div>
//             </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIFeatures;

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, FileText, Search, Languages, 
  CheckCircle2, ArrowRight, Wand2, ScanLine, 
  Target, Globe2, Bot
} from 'lucide-react';

const AIFeatures = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through features
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 5000); // Switch every 5 seconds
    return () => clearInterval(interval);
  }, [isPaused]);

  const features = [
    {
      id: 0,
      title: "AI Writer & Improver",
      desc: "Turn basic bullet points into executive-level achievements.",
      icon: <Wand2 size={24} />,
      color: "from-purple-500 to-indigo-500",
      content: {
        badge: "GPT-4 Powered",
        heading: "Banish writer's block forever.",
        description: "Don't know how to phrase your achievements? Just type a raw idea, and our AI rewrites it into powerful, action-oriented bullet points tailored to your industry.",
        stats: [
          { label: "Writing Speed", value: "10x Faster" },
          { label: "Tone Match", value: "Professional" }
        ],
        visual: (
            <div className="relative w-full h-full flex flex-col justify-center">
                {/* Simulated Chat Interface */}
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 shadow-2xl mb-4 transform translate-x-4">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center"><Bot size={16} /></div>
                        <div className="text-xs text-slate-400">AI Assistant</div>
                    </div>
                    <div className="text-sm text-slate-300 bg-slate-800 p-3 rounded-lg rounded-tl-none border border-slate-700">
                        I've rewritten your input to be more impactful:
                    </div>
                </div>

                {/* The "Transformation" Card */}
                <div className="bg-white rounded-xl p-6 shadow-xl border-l-4 border-purple-500 relative z-10 transform hover:scale-105 transition-transform duration-500">
                    <div className="mb-4">
                        <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Your Input</div>
                        <div className="text-xs text-slate-500 line-through decoration-red-400 decoration-2 opacity-60">
                            "I managed a team of people and we sold a lot of software."
                        </div>
                    </div>
                    <div>
                        <div className="text-[10px] uppercase font-bold text-purple-600 mb-1 flex items-center gap-1">
                            <Sparkles size={10} /> AI Enhanced
                        </div>
                        <div className="text-sm font-medium text-slate-800 leading-relaxed">
                            "Spearheaded a high-performance sales team of 15, driving a <span className="bg-green-100 text-green-800 px-1 rounded font-bold">40% YoY revenue increase</span> through strategic account management."
                        </div>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    </div>
                </div>
            </div>
        )
      }
    },
    {
      id: 1,
      title: "ATS Resume Scanner",
      desc: "Ensure your resume gets past the robots and to a human.",
      icon: <ScanLine size={24} />,
      color: "from-blue-500 to-cyan-500",
      content: {
        badge: "Smart Parsing",
        heading: "Beat the Applicant Tracking System.",
        description: "75% of resumes are rejected by ATS bots before a human sees them. Our system scans your formatting and keywords to ensure 100% readability.",
        stats: [
          { label: "Parse Rate", value: "99.8%" },
          { label: "Format Safety", value: "Verified" }
        ],
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Document */}
                <div className="w-48 h-64 bg-white rounded-lg shadow-2xl relative overflow-hidden flex flex-col items-center pt-6 px-4 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-slate-200 mb-2"></div>
                    <div className="w-full h-2 bg-slate-200 rounded"></div>
                    <div className="w-2/3 h-2 bg-slate-200 rounded"></div>
                    <div className="w-full h-px bg-slate-100 my-2"></div>
                    <div className="w-full space-y-2">
                        {[1,2,3,4].map(i => <div key={i} className="w-full h-1.5 bg-slate-100 rounded"></div>)}
                    </div>
                    
                    {/* Scanning Beam */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent h-1/2 w-full animate-[scan_2s_ease-in-out_infinite] border-b-2 border-blue-400"></div>
                </div>

                {/* Score Bubble */}
                <div className="absolute -right-4 top-1/2 bg-slate-900 text-white p-4 rounded-xl shadow-xl border border-slate-700">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">ATS Score</div>
                    <div className="text-3xl font-black text-blue-400">98<span className="text-sm text-slate-500">/100</span></div>
                </div>
            </div>
        )
      }
    },
    {
      id: 2,
      title: "Keyword Targeting",
      desc: "Instantly tailor your resume to specific job descriptions.",
      icon: <Target size={24} />,
      color: "from-emerald-500 to-green-500",
      content: {
        badge: "Job Match",
        heading: "Speak the recruiter's language.",
        description: "Paste a job description, and our AI analyzes it to find the critical 'hard skills' and 'keywords' you're missing. Add them with one click.",
        stats: [
          { label: "Keyword Match", value: "Instant" },
          { label: "Relevance", value: "High" }
        ],
        visual: (
            <div className="relative w-full h-full flex flex-col justify-center gap-4">
                {/* Job Description Snippet */}
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 opacity-50 scale-95 blur-[1px]">
                    <div className="text-[10px] text-slate-400 uppercase mb-2">Job Description Requirement</div>
                    <div className="text-xs text-slate-300">
                        Looking for a candidate proficient in <span className="text-white font-bold">React</span>, <span className="text-white font-bold">AWS</span>, and <span className="text-white font-bold">System Design</span>...
                    </div>
                </div>

                {/* Matching Interface */}
                <div className="bg-white p-5 rounded-xl shadow-xl border-t-4 border-emerald-500">
                    <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-slate-800 text-sm">Suggested Skills</span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">3 Found</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['React.js', 'AWS Lambda', 'System Architecture'].map((skill, i) => (
                            <div key={i} className="group cursor-pointer flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all">
                                <span className="text-xs font-bold text-slate-600 group-hover:text-emerald-700">{skill}</span>
                                <div className="w-4 h-4 rounded-full bg-white border border-slate-300 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500">
                                    <CheckCircle2 size={10} className="text-white opacity-0 group-hover:opacity-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
      }
    },
    {
      id: 3,
      title: "Global Translator",
      desc: "Apply to international jobs with 30+ supported languages.",
      icon: <Globe2 size={24} />,
      color: "from-orange-500 to-amber-500",
      content: {
        badge: "Localization",
        heading: "Your career, borders removed.",
        description: "Going global? Instantly translate your resume into German, French, Spanish, or 30+ other languages while maintaining perfect formatting.",
        stats: [
          { label: "Languages", value: "30+" },
          { label: "Layout", value: "Preserved" }
        ],
        visual: (
            <div className="relative w-full h-full flex items-center justify-center gap-6">
                {/* Source Card */}
                <div className="w-40 h-56 bg-white rounded-lg shadow-lg border border-slate-100 p-4 transform -rotate-6 transition-all duration-700">
                    <div className="absolute top-2 right-2 text-xl">🇺🇸</div>
                    <div className="w-16 h-2 bg-slate-800 rounded mb-4"></div>
                    <div className="space-y-2">
                        <div className="w-full h-1 bg-slate-200 rounded"></div>
                        <div className="w-2/3 h-1 bg-slate-200 rounded"></div>
                    </div>
                    <div className="mt-8 space-y-2">
                        <div className="w-10 h-2 bg-blue-100 rounded"></div>
                        <div className="w-full h-1 bg-slate-200 rounded"></div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 z-10">
                    <ArrowRight size={14} />
                </div>

                {/* Target Card */}
                <div className="w-40 h-56 bg-slate-900 rounded-lg shadow-2xl border border-slate-700 p-4 transform rotate-6 transition-all duration-700">
                    <div className="absolute top-2 right-2 text-xl">🇩🇪</div>
                    <div className="w-20 h-2 bg-white rounded mb-4"></div>
                    <div className="space-y-2">
                        <div className="w-full h-1 bg-slate-600 rounded"></div>
                        <div className="w-3/4 h-1 bg-slate-600 rounded"></div>
                    </div>
                    <div className="mt-8 space-y-2">
                        <div className="w-12 h-2 bg-orange-500 rounded"></div>
                        <div className="w-full h-1 bg-slate-600 rounded"></div>
                    </div>
                </div>
            </div>
        )
      }
    }
  ];

  return (
    <div className="py-24 bg-[#0f172a] text-white overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">
                Powered by GPT-4
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                The Resume Builder <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                    With a Brain.
                </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Stop staring at a blank page. Our AI assists you at every step—from writing summaries to optimizing keywords for higher pass rates.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            
            {/* Left: Navigation Panel */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
                {features.map((feature, idx) => (
                    <button
                        key={idx}
                        onClick={() => { setActiveTab(idx); setIsPaused(true); }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className={`text-left p-5 rounded-2xl transition-all duration-300 border relative overflow-hidden group ${
                            activeTab === idx 
                            ? 'bg-slate-800 border-slate-700 shadow-lg' 
                            : 'bg-transparent border-transparent hover:bg-slate-800/50'
                        }`}
                    >
                        {/* Progress Bar for Auto-play */}
                        {activeTab === idx && !isPaused && (
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 animate-[progress_5s_linear]" style={{ width: '100%' }}></div>
                        )}

                        <div className="flex items-start gap-4 relative z-10">
                            <div className={`p-3 rounded-xl transition-colors duration-300 ${
                                activeTab === idx ? `bg-gradient-to-br ${feature.color} text-white shadow-lg` : 'bg-slate-900 text-slate-500 group-hover:text-slate-300'
                            }`}>
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className={`font-bold text-lg mb-1 transition-colors ${activeTab === idx ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                                    {feature.title}
                                </h3>
                                <p className={`text-sm leading-snug transition-colors ${activeTab === idx ? 'text-slate-300' : 'text-slate-600 group-hover:text-slate-500'}`}>
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Right: Dynamic Visual Display */}
            <div className="w-full lg:w-2/3 h-[500px] lg:h-[600px] relative">
                
                {features.map((feature, idx) => (
                    <div 
                        key={idx}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                            activeTab === idx ? 'opacity-100 translate-y-0 scale-100 z-20' : 'opacity-0 translate-y-8 scale-95 z-10'
                        }`}
                    >
                        <div className="h-full bg-slate-900 rounded-[2.5rem] border border-slate-800 p-2 shadow-2xl relative overflow-hidden">
                            
                            {/* Inner Container */}
                            <div className="h-full bg-[#0B1120] rounded-[2rem] relative overflow-hidden flex flex-col">
                                
                                {/* Header of the Card */}
                                <div className="p-8 md:p-12 pb-0 relative z-20">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-4`}>
                                        <Sparkles size={12} className="text-teal-400" />
                                        {feature.content.badge}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                        {feature.content.heading}
                                    </h3>
                                    <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-8">
                                        {feature.content.description}
                                    </p>
                                    
                                    {/* Stats Row */}
                                    <div className="flex gap-8 border-t border-slate-800 pt-6">
                                        {feature.content.stats.map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-2xl font-black text-white">{stat.value}</div>
                                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Stage */}
                                <div className="flex-1 relative mt-8 md:mt-0 flex flex-col justify-end">
                                    <div className="w-full h-full bg-gradient-to-t from-slate-900/50 to-transparent absolute inset-0 z-10"></div>
                                    <div className="relative z-0 h-full w-full p-8 flex items-center justify-center">
                                        {/* Dynamic Visual Mockup */}
                                        {feature.content.visual}
                                    </div>
                                </div>

                                {/* Background Accents */}
                                <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${feature.color} opacity-10 blur-[100px] rounded-full pointer-events-none`}></div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
      </div>
      
      {/* Global CSS for scanning animation */}
      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default AIFeatures;