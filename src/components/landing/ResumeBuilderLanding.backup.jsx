// // import React, { useRef, useState } from 'react';
// // import { 
// //   Sparkles, ArrowRight, CheckCircle, Cpu, MousePointer2, 
// //   PenTool, Download, CheckCircle2, Star, Zap, Layout, FileText, HelpCircle,
// //   ChevronLeft, ChevronRight, UploadCloud, File, Monitor, Smartphone, Tablet, Briefcase, GraduationCap
// // } from 'lucide-react';

// // // --- SEO & FOOTER COMPONENTS ---
// // import Footer from './Footer'; 
// // import Navbar from './Navbar';
// // import SEO from '../SEO'; 

// // // --- IMPORT ANIMATIONS & VISUALS ---
// // import ResumeBuilder2 from './HeroAnimation'; 
// // import ResumeAnatomy from './ResumeAnatomy'; 

// // // --- IMPORT PREVIEW COMPONENT ---
// // import ResumePreview from "../resume/ResumePreview"; 
// // import AIFeatures from './AIFeatures'; // <--- Import
// // import ResumeExamples from './ResumeExamples'; // <--- Import New Component

// // // --- DUMMY DATA FOR LANDING PAGE PREVIEWS ---
// // const PREVIEW_DATA = {
// //     personal: {
// //       name: "Pooja Bansal",
// //       title: "Business Intelligence Leader",
// //       email: "p.bansal@careersense.com",
// //       phone: "+1 555 0199 283",
// //       location: "New York, USA",
// //       summary: "Results-oriented BI Manager with 7+ years of experience driving market share growth through data-driven strategies. Expert in translating complex datasets into actionable business insights, overseeing cross-functional teams, and implementing scalable data architecture."
// //     },
// //     experience: [
// //       { 
// //         id: 1, 
// //         role: "Senior BI Manager", 
// //         company: "Global Tech Solutions", 
// //         date: "2020 - Present", 
// //         desc: "• Led a team of 10 analysts to execute a global rebranding campaign, increasing customer engagement by 40%.\n• Designed and implemented an automated reporting system using Tableau, reducing manual data entry time by 15 hours per week.\n• Collaborated with C-suite executives to define KPIs, resulting in a 20% year-over-year revenue growth.", 
// //         pageBreak: false 
// //       },
// //       { 
// //         id: 2, 
// //         role: "Business Data Analyst", 
// //         company: "FinStream Corp", 
// //         date: "2017 - 2020", 
// //         desc: "• Analyzed consumer behavior patterns to identify new market opportunities, leading to a successful $2M product launch.\n• Developed complex SQL queries to consolidate data from disparate sources, ensuring 99.9% data accuracy for quarterly financial reports.", 
// //         pageBreak: false 
// //       }
// //     ],
// //     education: [
// //       { 
// //         id: 1, 
// //         degree: "MBA, Business Intelligence", 
// //         school: "Stern School of Business", 
// //         date: "2017", 
// //         pageBreak: false 
// //       },
// //       { 
// //         id: 2, 
// //         degree: "B.S. in Data Science", 
// //         school: "New York University", 
// //         date: "2015", 
// //         pageBreak: false 
// //       }
// //     ],
// //     skills: { 
// //       core: ["Brand Strategy", "SEO/SEM", "Market Analysis", "Strategic Planning", "Revenue Operations"], 
// //       technical: ["Google Analytics", "Tableau", "SQL", "Python", "PowerBI", "Jira"], 
// //       soft: ["Leadership", "Stakeholder Management", "Public Speaking", "Critical Thinking"] 
// //     },
// //     projects: [
// //       { 
// //         id: 1, 
// //         name: "Global Dashboard Initiative", 
// //         desc: "Architected a centralized BI dashboard integrating sales data from 12 international regions, providing real-time visibility into global performance metrics.", 
// //         pageBreak: false 
// //       }
// //     ],
// //     awards: [
// //       { id: 1, name: "Leadership Excellence Award", issuer: "Global Tech Solutions", pageBreak: false }
// //     ],
// //     certifications: [
// //       { id: 1, name: "Certified Business Intelligence Professional (CBIP)", issuer: "TDWI", date: "2019", pageBreak: false }
// //     ],
// //     languages: [
// //       { name: "English", level: "Native" },
// //       { name: "Spanish", level: "Conversational" }
// //     ],
// //     volunteering: [
// //       { id: 1, role: "Mentor", org: "Women in Data", date: "2021 - Present", desc: "Mentoring upcoming data analysts.", pageBreak: false }
// //     ]
// //   };

// // // --- FAQ DATA (Expanded) ---
// // const FAQ_DATA = [
// //   { q: "How do I use the Resume Builder app?", a: "Simply choose a template, auto-import your existing resume or start from scratch, and let our AI guide you through each section. Once done, download in your preferred format." },
// //   { q: "Do I need to download an app to use the resume builder on mobile?", a: "No downloads required! Our platform is fully responsive and works perfectly in your mobile browser (Chrome, Safari, etc.) on iOS and Android." },
// //   { q: "What makes Resume Builder the best resume tool?", a: "We combine recruiter-approved templates with advanced AI writing assistance and real-time ATS scoring to ensure your resume actually gets read." },
// //   { q: "What is the main purpose of a resume builder?", a: "To automate formatting, structure content professionally, and optimize keywords so you can focus on your achievements rather than margins and fonts." },
// //   { q: "What are the advantages of using a resume builder tool?", a: "You save hours of formatting time, avoid common design errors, get AI-suggested content, and ensure your document passes Applicant Tracking Systems (ATS)." },
// //   { q: "Does the mobile resume builder have the same features as desktop?", a: "Yes, you get full functionality on mobile, including AI writing, template switching, and PDF export." },
// //   { q: "Can resume builders help with ATS optimization?", a: "Absolutely. Our templates use standard headings and clean code structures that ATS software can easily parse, preventing your resume from being auto-rejected." },
// //   { q: "Is my information secure and compliant with data privacy laws?", a: "Yes, we use 256-bit encryption and strictly adhere to GDPR and CCPA regulations. Your data is yours alone." },
// //   { q: "Does Resume Builder have resume examples that I can look at?", a: "Yes, we offer a library of hundreds of resume examples across various industries to inspire your own writing." },
// //   { q: "What is an AI resume builder?", a: "It is a tool that uses artificial intelligence to generate role-specific bullet points, summaries, and skills based on your job title." },
// //   { q: "Should I download my new resume as a PDF or text file?", a: "PDF is best for emailing and uploading to preserve formatting. Text files are useful for copying content into online application forms." },
// //   { q: "Can I build my resume from my phone?", a: "Yes, our interface is optimized for touchscreens, allowing you to build, edit, and download resumes directly from your smartphone." },
// //   { q: "How can I use Resume Builder for free?", a: "You can build your resume and download a TXT version for free. Premium design downloads may require a subscription." },
// //   { q: "What is the cost of the Resume Builder tool?", a: "We offer a free tier and premium plans starting at a low monthly rate for unlimited PDF downloads and advanced AI features." },
// //   { q: "I can’t log into my account. What should I do?", a: "Ensure you are using the correct email. If you forgot your password, click the 'Forgot Password' link on the login screen to reset it." },
// //   { q: "How do I change my password?", a: "Log into your dashboard, go to 'Account Settings,' and select 'Change Password' under the Security tab." },
// //   { q: "Does Resume Builder provide customer support?", a: "Yes, our support team is available via email and live chat to assist you with any technical issues or billing questions." }
// // ];

// // const GOOGLE_REVIEWS = [
// //     { name: "David Chen", img: "https://i.pravatar.cc/150?img=68", date: "2 days ago", rating: 5, text: "Incredible AI suggestions. It rewrote my bullet points to be so much more impactful. Got a call back from Google within a week!" },
// //     { name: "Sarah Jenkins", img: "https://i.pravatar.cc/150?img=44", date: "3 days ago", rating: 5, text: "The templates are beautiful and professional. The ATS checker gave me confidence that my resume would actually be seen." },
// //     { name: "Michael O.", img: "https://i.pravatar.cc/150?img=12", date: "4 days ago", rating: 5, text: "Worth every penny for the premium download. The PDF quality is top-notch, and the cover letter builder is a huge time-saver." },
// //     { name: "Priya Sharma", img: "https://i.pravatar.cc/150?img=32", date: "1 week ago", rating: 5, text: "As a new grad, I was lost. This builder guided me through every section and helped me highlight my projects effectively. Highly recommended!" },
// //     { name: "Alex T.", img: "https://i.pravatar.cc/150?img=59", date: "2 weeks ago", rating: 4, text: "Great tool. The AI is very smart. Would love to see a few more creative templates, but the current ones are solid." }
// // ];

// // const SCROLLER_TEMPLATES = [
// //   // --- The Core / Basics ---
// //   { id: 'minimal', name: 'ATS Minimal' },
// //   { id: 'infographic', name: 'Infographic' },
// //   {id: 'info-navy', name : 'Full Infographic'},
// //   { id: 'professional', name: 'Clean Professional' },
// //   { id: 'developer', name: 'Dev Console' },
// //   { id: 'info-executive', name: 'Executive Grid'},
// //   { id: 'cyan-grid', name: 'Cyan Flux' },                   
// //   { id: 'classic', name: 'Ivy League' },
// //   { id: 'blue-frame', name: 'Blue Frame' },
// //   { id: 'amber-visual', name: 'Amber Visual' },
// //   { id: 'professional-columns', name: 'Prof. Columns' },               
// //   { id: 'tech', name: 'Terminal Dark' },
// //   { id: 'Architect', name: 'Architect Grid'},

// //   // --- Colorful & Creative ---
  
// //   { id: 'bubble-header', name: 'Bubble Header' },          // Playful / Header-focused
// //   { id: 'modern-circle', name: 'Modern Circle' },          // Trendy / Creative

// //   // --- Role-Specific (From your new templates) ---
// //   { id: 'software-engineer', name: 'Software Engineer' },  // Job Specific (Engineering)
// //   { id: 'business-analyst', name: 'Business Analyst' },    // Job Specific (Corporate)
// //   { id: 'designer', name: 'Creative Designer' },           // Job Specific (Creative)
// //   { id: 'medical', name: 'Medical Professional' },         // Job Specific (Healthcare)

// //   // --- Layout Variations (Framed, Sidebar, Centered) ---
  
// //   { id: 'centered-initials', name: 'Centered Initials' },
// //   { id: 'startup', name: 'Startup Gradient' },
  

// //   // --- Dark / Unique ---
// //   { id: 'berlin', name: 'Berlin Bold'}
// // ];

// // const EXAMPLE_CATEGORIES = [
// //     "Information Technology", "New Grad Nursing", "Healthcare", "Executive", 
// //     "Nursing Student", "Coaching", "Sales", "Project Manager", "Software Developer", "Marketing"
// // ];

// // const ResumeBuilderLanding = ({ onStart, onViewTemplates, onFileSelect }) => {
// //   const scrollRef = useRef(null);
// //   const reviewScrollRef = useRef(null);
// //   const [activeCategory, setActiveCategory] = useState("Information Technology");

// //   const scroll = (direction, ref) => {
// //     if(ref.current) {
// //         const { current } = ref;
// //         const scrollAmount = 350;
// //         current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
// //     }
// //   };

// //   return (
// //     <div className="flex-1 overflow-y-auto custom-scrollbar bg-white h-screen scroll-smooth font-sans text-slate-900">
      
// //       {/* 1. NAVBAR */}
// //       <Navbar onStart={onStart} />

// //       {/* 2. SEO META TAGS */}
// //       <SEO 
// //         title="Free AI Resume Builder | Create a Professional CV in Minutes - CareerSense"
// //         description="Build an ATS-friendly resume instantly with our AI-powered builder."
// //         keywords="resume builder, AI resume, CV maker"
// //       />

// //       {/* 3. HERO SECTION */}
// //       <div className="relative overflow-hidden bg-[#0f172a] text-white pt-32 pb-32 px-6">
// //         <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-600/10 blur-[120px] rounded-full pointer-events-none" />
// //         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
// //           <div>
// //             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-teal-500/30">
// //               <Sparkles size={12} /> #1 Rated AI Resume Builder
// //             </div>
// //             <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
// //               The Professional <br />
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Resume Builder</span>
// //             </h1>
// //             <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
// //               Use our professional field-tested resume templates that follow the exact "resume rules" employers look for. Easy to use and done within 15 minutes.
// //             </p>
            
// //             <div className="flex flex-col sm:flex-row gap-4 mb-10">
// //   {/* Primary Button - Starts the resume builder */}
// //   <button 
// //     onClick={onStart} 
// //     className="px-10 py-5 rounded-2xl bg-[#0d9488] text-white font-black text-sm uppercase tracking-widest hover:bg-[#0b7a6f] transition-all flex items-center justify-center gap-3"
// //   >
// //     Create My Resume <ArrowRight size={18} />
// //   </button>
  
// //   {/* Secondary Button - Navigates to the Template Gallery */}
// //   <button 
// //     onClick={onViewTemplates} 
// //     className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition flex items-center justify-center gap-3"
// //   >
// //     View Templates
// //   </button>
// // </div>

// //             <div className="flex items-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
// //               <div className="flex -space-x-3">
// //                 {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f172a] bg-slate-700 bg-cover" style={{backgroundImage: `url(https://i.pravatar.cc/100?img=${i+10})`}} />)}
// //               </div>
// //               <div className="flex flex-col">
// //                 <div className="flex text-yellow-500 mb-1">
// //                     {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
// //                 </div>
// //                 <span>Trusted by 45k+ Job Seekers</span>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="relative hidden lg:block perspective-1000 h-[600px] w-full">
// //              <ResumeBuilder2 />
// //           </div>
// //         </div>
// //       </div>

// //       {/* 4. LOGO STRIP */}
// //       <div className="border-b border-slate-100 bg-white py-10">
// //           <div className="max-w-7xl mx-auto px-6 text-center">
// //               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Candidates hired by top companies</p>
// //               <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
// //                   {['Google', 'Amazon', 'Microsoft', 'Spotify', 'Tesla', 'Netflix'].map(company => (
// //                       <span key={company} className="text-xl font-black text-slate-900 tracking-tighter">{company}</span>
// //                   ))}
// //               </div>
// //           </div>
// //       </div>

// //       {/* 5. IMPORT RESUME SECTION */}
// //       <div className="py-32 px-6 relative overflow-hidden">
// //           <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-teal-50 opacity-80" />
// //           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
// //               <div className="relative group perspective-1000">
// //                   <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
// //                   <div className="relative bg-white/60 backdrop-blur-xl border border-teal/50 rounded-[2.5rem] p-8 shadow-2xl">
// //                       <div className="bg-white rounded-2xl border border-slate-100 p-8 text-center shadow-inner">
// //                           <h3 className="text-xl font-bold text-slate-800 mb-2">Import Your Resume</h3>
// //                           <p className="text-slate-500 text-sm mb-8">Drag and drop or upload your existing resume to start.</p>
// //                           <div className="border-2 border-dashed border-slate-200 rounded-xl p-10 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 hover:border-teal-400 transition-colors cursor-pointer group/drop relative">
// //                                 <input 
// //                                     type="file" 
// //                                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50" 
// //                                     accept=".pdf,.docx,.doc,.txt"
// //                                     onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
// //                                 />
// //                                 <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4 group-hover/drop:scale-110 transition-transform">
// //                                     <UploadCloud size={32} />
// //                                 </div>
// //                                 <span className="text-sm font-bold text-slate-700">Drag and drop a file here</span>
// //                                 <button className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest pointer-events-none">Browse</button>
// //                           </div>
// //                       </div>
// //                   </div>
// //               </div>
// //               <div>
// //                   <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
// //                     Import Your Resume <br/>
// //                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Without Interrupting Your Day</span>
// //                   </h2>
// //                   <p className="text-lg text-slate-600 mb-8 leading-relaxed">
// //                     Already have a draft? Upload it to our platform in seconds from your preferred device.
// //                   </p>
// //                   <div className="relative inline-block">
// //                     <input 
// //                         type="file" 
// //                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50" 
// //                         accept=".pdf,.docx,.doc,.txt"
// //                         onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
// //                     />
// //                     <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold text-sm uppercase tracking-widest hover:shadow-lg transition-all">
// //                         Import My Resume
// //                     </button>
// //                   </div>
// //               </div>
// //           </div>
// //       </div>

// // {/* 6. RESUME EXAMPLES SECTION (New & Improved) */}
// //         <ResumeExamples onStart={onStart} />
// // {/* --- ADD AI FEATURES HERE (Option A) --- */}
// //         <AIFeatures />
// // {/* 7. ANATOMY SECTION */}
// //         <ResumeAnatomy />

// //       {/* 8. TEMPLATE SCROLLER */}
// //       <div className="py-24 bg-white border-b border-slate-200 overflow-hidden">
// //           <div className="max-w-[1600px] mx-auto px-6">
// //               <div className="flex justify-between items-end mb-16">
// //                   <div className="max-w-1xl">
// //                       <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Choose from our <span className="text-[#0d9488]">70+ Professional Templates</span></h2>
// //                       <p className="text-slate-500 text-lg">Designed by recruiters to pass ATS filters and impress hiring managers.</p>
// //                   </div>
// //                   <div className="flex gap-2">
// //                       <button onClick={() => scroll('left', scrollRef)} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"><ChevronLeft size={20}/></button>
// //                       <button onClick={() => scroll('right', scrollRef)} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"><ChevronRight size={20}/></button>
// //                   </div>
// //               </div>
// //               <div ref={scrollRef} className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
// //                   {SCROLLER_TEMPLATES.map((tpl) => (
// //                       <div key={tpl.id} className="snap-center shrink-0 w-[300px] group cursor-pointer" onClick={onStart}>
// //                           <div className="bg-white rounded-[2rem] shadow-sm border-[6px] border-white overflow-hidden relative aspect-[210/297] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
// //                               <div className="absolute inset-0 transform scale-[0.4] origin-top-left w-[250%] h-[250%] pointer-events-none bg-slate-50">
// //                                   <ResumePreview data={PREVIEW_DATA} template={tpl.id} />
// //                               </div>
// //                               <div className="absolute inset-0 bg-[#0d9488]/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4 z-10">
// //                                   <span className="text-white font-bold text-lg uppercase tracking-widest">Use Template</span>
// //                                   <div className="bg-white text-[#0d9488] p-3 rounded-full shadow-lg"><ArrowRight /></div>
// //                               </div>
// //                           </div>
// //                           <h3 className="text-center mt-6 font-bold text-slate-700 uppercase tracking-widest text-xs group-hover:text-[#0d9488] transition-colors">{tpl.name}</h3>
// //                       </div>
// //                   ))}
// //               </div>
// //           </div>
// //       </div>

// //       {/* 9. FEATURES GRID */}
// //       <div className="bg-slate-50 py-24 px-6 border-b border-slate-200">
// //          <div className="max-w-7xl mx-auto">
// //             <div className="grid md:grid-cols-2 gap-16 items-center">
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //                     <FeatureCard icon={Zap} title="AI-Powered Text" desc="Instantly generate bullet points for your role using our advanced AI algorithms." />
// //                     <FeatureCard icon={Layout} title="ATS Optimized" desc="Templates designed to pass Applicant Tracking Systems used by major companies." />
// //                     <FeatureCard icon={FileText} title="Real-time Preview" desc="See changes instantly as you edit. No more guessing how your document will look." />
// //                     <FeatureCard icon={CheckCircle2} title="Pre-written Examples" desc="Access thousands of pre-written examples for every job title and industry." />
// //                 </div>
// //                 <div>
// //                     <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Designed to get you <br/><span className="text-[#0d9488]">Hired Faster.</span></h2>
// //                     <p className="text-slate-500 mb-8 leading-relaxed text-lg">Most resumes never reach a human eye. Our platform ensures your resume is not only beautiful but technically optimized for the robots that read it first.</p>
// //                     <button onClick={onStart} className="px-8 py-4 rounded-xl bg-[#0f172a] text-white font-bold text-sm hover:bg-slate-800 transition shadow-lg">Start Building Now</button>
// //                 </div>
// //             </div>
// //          </div>
// //       </div>

// //       {/* 10. GOOGLE REVIEWS SECTION */}
// //       <div className="py-24 bg-white border-b border-slate-200 overflow-hidden" id="reviews">
// //           <div className="max-w-[1600px] mx-auto px-6">
// //               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
// //                   <div className="max-w-lg">
// //                     <div className="flex items-center gap-3 text-2xl font-black text-slate-900 mb-2">
// //                         <span>4.9</span>
// //                         <div className="flex text-yellow-500">
// //                             {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
// //                         </div>
// //                     </div>
// //                     <p className="text-lg text-slate-500">Based on <strong>1,250+ reviews</strong> from happy job seekers.</p>
// //                   </div>
// //                   <div className="flex items-center gap-6">
// //                       <button className="px-8 py-3 rounded-full bg-white text-slate-900 font-bold text-sm border-2 border-slate-200 hover:border-[#0d9488] hover:text-[#0d9488] transition-colors flex items-center gap-2">
// //                           Review us on Google
// //                       </button>
// //                       <div className="flex gap-2">
// //                           <button onClick={() => scroll('left', reviewScrollRef)} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"><ChevronLeft size={20}/></button>
// //                           <button onClick={() => scroll('right', reviewScrollRef)} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"><ChevronRight size={20}/></button>
// //                       </div>
// //                   </div>
// //               </div>
// //               <div ref={reviewScrollRef} className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
// //                   {GOOGLE_REVIEWS.map((review, i) => (
// //                       <div key={i} className="snap-start shrink-0 w-[350px] bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
// //                           <div className="flex items-center gap-4 mb-6">
// //                               <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
// //                                   <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
// //                               </div>
// //                               <div>
// //                                   <div className="font-bold text-slate-900 flex items-center gap-2">{review.name}</div>
// //                                   <div className="text-xs text-slate-500">{review.date}</div>
// //                               </div>
// //                           </div>
// //                           <div className="flex text-yellow-500 mb-4">
// //                               {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
// //                           </div>
// //                           <p className="text-slate-700 text-sm leading-relaxed">"{review.text}"</p>
// //                       </div>
// //                   ))}
// //               </div>
// //           </div>
// //       </div>

// //       {/* 11. FAQ SECTION */}
// //       <div className="py-24 px-6 max-w-7xl mx-auto">
// //           <h2 className="text-3xl font-black text-slate-900 mb-12 text-center uppercase tracking-tight">Frequently Asked Questions</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {FAQ_DATA.map((faq, i) => (
// //                   <details key={i} className="group bg-white p-6 rounded-2xl border border-slate-200 open:border-teal-500 transition-colors shadow-sm cursor-pointer h-fit">
// //                       <summary className="font-bold text-slate-900 flex items-start justify-between list-none gap-4">
// //                           <span className="text-sm leading-snug">{faq.q}</span>
// //                           <span className="transform group-open:rotate-180 transition-transform mt-1 text-slate-400">▼</span>
// //                       </summary>
// //                       <p className="text-slate-500 mt-4 leading-relaxed text-xs">{faq.a}</p>
// //                   </details>
// //               ))}
// //           </div>
// //       </div>

// //       {/* 12. FINAL CTA */}
// //       <div className="bg-teal-50 border-t border-teal-100 py-24 px-6 text-center">
// //           <div className="max-w-3xl mx-auto">
// //               <h2 className="text-4xl font-black text-slate-900 mb-6">Ready to land your dream job?</h2>
// //               <button onClick={onStart} className="px-12 py-6 rounded-full bg-[#0d9488] text-white font-black text-lg uppercase tracking-widest hover:bg-[#0b7a6f] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform flex items-center justify-center gap-3 mx-auto">
// //                 Create My Resume <ArrowRight size={20} />
// //               </button>
// //           </div>
// //       </div>

// //       {/* --- FOOTER --- */}
// //       <Footer />

// //     </div>
// //   );
// // };

// // const FeatureCard = ({ icon: Icon, title, desc }) => (
// //     <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-teal-200 transition-colors">
// //         <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-4"><Icon size={24} /></div>
// //         <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
// //         <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
// //     </div>
// // );

// // export default ResumeBuilderLanding;

// import React, { useRef, useState } from 'react';
// import { 
//   Sparkles, ArrowRight, CheckCircle, Cpu, MousePointer2, 
//   PenTool, Download, CheckCircle2, Star, Zap, Brain, Layout, FileText, HelpCircle,
//   ChevronLeft, ChevronRight, UploadCloud, File, Monitor, Smartphone, Tablet, Briefcase, GraduationCap, FolderOpen
// } from 'lucide-react';

// // --- SEO & FOOTER COMPONENTS ---
// import Footer from './Footer'; 
// import Navbar from './Navbar';
// import SEO from '../SEO'; 

// // --- IMPORT ANIMATIONS & VISUALS ---
// import ResumeBuilder2 from './HeroAnimation'; 
// import ResumeAnatomy from './ResumeAnatomy'; 

// // --- IMPORT PREVIEW COMPONENT ---
// import ResumePreview from "../resume/ResumePreview"; 
// import AIFeatures from './AIFeatures'; // <--- Import
// import ResumeExamples from './ResumeExamples'; // <--- Import New Component

// // --- IMPORT VIDEOS ---
// import resumeVideo from '../../assets/Resume.mp4';
// import resumeJdVideo from '../../assets/Resume&JD.mp4';
// import poojaImage from '../../assets/Pooja.png';

// // --- DUMMY DATA FOR LANDING PAGE PREVIEWS ---
// const PREVIEW_DATA = {
//     personal: {
//       name: "Pooja Bansal",
//       title: "Business Intelligence Leader",
//       email: "p.bansal@careersense.com",
//       phone: "+1 555 0199 283",
//       location: "New York, USA",
//       photo: poojaImage,
//       summary: "Results-oriented BI Manager with 7+ years of experience driving market share growth through data-driven strategies. Expert in translating complex datasets into actionable business insights, overseeing cross-functional teams, and implementing scalable data architecture."
//     },
//     experience: [
//       { 
//         id: 1, 
//         role: "Senior BI Manager", 
//         company: "Global Tech Solutions", 
//         date: "2020 - Present", 
//         desc: "• Led a team of 10 analysts to execute a global rebranding campaign, increasing customer engagement by 40%.\n• Designed and implemented an automated reporting system using Tableau, reducing manual data entry time by 15 hours per week.\n• Collaborated with C-suite executives to define KPIs, resulting in a 20% year-over-year revenue growth.", 
//         pageBreak: false 
//       },
//       { 
//         id: 2, 
//         role: "Business Data Analyst", 
//         company: "FinStream Corp", 
//         date: "2017 - 2020", 
//         desc: "• Analyzed consumer behavior patterns to identify new market opportunities, leading to a successful $2M product launch.\n• Developed complex SQL queries to consolidate data from disparate sources, ensuring 99.9% data accuracy for quarterly financial reports.", 
//         pageBreak: false 
//       }
//     ],
//     education: [
//       { 
//         id: 1, 
//         degree: "MBA, Business Intelligence", 
//         school: "Stern School of Business", 
//         date: "2017", 
//         pageBreak: false 
//       },
//       { 
//         id: 2, 
//         degree: "B.S. in Data Science", 
//         school: "New York University", 
//         date: "2015", 
//         pageBreak: false 
//       }
//     ],
//     skills: { 
//       core: ["Brand Strategy", "SEO/SEM", "Market Analysis", "Strategic Planning", "Revenue Operations"], 
//       technical: ["Google Analytics", "Tableau", "SQL", "Python", "PowerBI", "Jira"], 
//       soft: ["Leadership", "Stakeholder Management", "Public Speaking", "Critical Thinking"] 
//     },
//     projects: [
//       { 
//         id: 1, 
//         name: "Global Dashboard Initiative", 
//         desc: "Architected a centralized BI dashboard integrating sales data from 12 international regions, providing real-time visibility into global performance metrics.", 
//         pageBreak: false 
//       }
//     ],
//     awards: [
//       { id: 1, name: "Leadership Excellence Award", issuer: "Global Tech Solutions", pageBreak: false }
//     ],
//     certifications: [
//       { id: 1, name: "Certified Business Intelligence Professional (CBIP)", issuer: "TDWI", date: "2019", pageBreak: false }
//     ],
//     languages: [
//       { name: "English", level: "Native" },
//       { name: "Spanish", level: "Conversational" }
//     ],
//     volunteering: [
//       { id: 1, role: "Mentor", org: "Women in Data", date: "2021 - Present", desc: "Mentoring upcoming data analysts.", pageBreak: false }
//     ]
//   };

// // --- FAQ DATA (Expanded) ---
// const FAQ_DATA = [
//   { q: "How do I use the Resume Builder app?", a: "Simply choose a template, auto-import your existing resume or start from scratch, and let our AI guide you through each section. Once done, download in your preferred format." },
//   { q: "Do I need to download an app to use the resume builder on mobile?", a: "No downloads required! Our platform is fully responsive and works perfectly in your mobile browser (Chrome, Safari, etc.) on iOS and Android." },
//   { q: "What makes Resume Builder the best resume tool?", a: "We combine recruiter-approved templates with advanced AI writing assistance and real-time ATS scoring to ensure your resume actually gets read." },
//   { q: "What is the main purpose of a resume builder?", a: "To automate formatting, structure content professionally, and optimize keywords so you can focus on your achievements rather than margins and fonts." },
//   { q: "What are the advantages of using a resume builder tool?", a: "You save hours of formatting time, avoid common design errors, get AI-suggested content, and ensure your document passes Applicant Tracking Systems (ATS)." },
//   { q: "Does the mobile resume builder have the same features as desktop?", a: "Yes, you get full functionality on mobile, including AI writing, template switching, and PDF export." },
//   { q: "Can resume builders help with ATS optimization?", a: "Absolutely. Our templates use standard headings and clean code structures that ATS software can easily parse, preventing your resume from being auto-rejected." },
//   { q: "Is my information secure and compliant with data privacy laws?", a: "Yes, we use 256-bit encryption and strictly adhere to GDPR and CCPA regulations. Your data is yours alone." },
//   { q: "Does Resume Builder have resume examples that I can look at?", a: "Yes, we offer a library of hundreds of resume examples across various industries to inspire your own writing." },
//   { q: "What is an AI resume builder?", a: "It is a tool that uses artificial intelligence to generate role-specific bullet points, summaries, and skills based on your job title." },
//   { q: "Should I download my new resume as a PDF or text file?", a: "PDF is best for emailing and uploading to preserve formatting. Text files are useful for copying content into online application forms." },
//   { q: "Can I build my resume from my phone?", a: "Yes, our interface is optimized for touchscreens, allowing you to build, edit, and download resumes directly from your smartphone." },
//   { q: "How can I use Resume Builder for free?", a: "You can build your resume and download a TXT version for free. Premium design downloads may require a subscription." },
//   { q: "What is the cost of the Resume Builder tool?", a: "We offer a free tier and premium plans starting at a low monthly rate for unlimited PDF downloads and advanced AI features." },
//   { q: "I can’t log into my account. What should I do?", a: "Ensure you are using the correct email. If you forgot your password, click the 'Forgot Password' link on the login screen to reset it." },
//   { q: "How do I change my password?", a: "Log into your dashboard, go to 'Account Settings,' and select 'Change Password' under the Security tab." },
//   { q: "Does Resume Builder provide customer support?", a: "Yes, our support team is available via email and live chat to assist you with any technical issues or billing questions." }
// ];

// const GOOGLE_REVIEWS = [
//     { name: "David Chen", img: "https://i.pravatar.cc/150?img=68", date: "2 days ago", rating: 5, text: "Incredible AI suggestions. It rewrote my bullet points to be so much more impactful. Got a call back from Google within a week!" },
//     { name: "Sarah Jenkins", img: "https://i.pravatar.cc/150?img=44", date: "3 days ago", rating: 5, text: "The templates are beautiful and professional. The ATS checker gave me confidence that my resume would actually be seen." },
//     { name: "Michael O.", img: "https://i.pravatar.cc/150?img=12", date: "4 days ago", rating: 5, text: "Worth every penny for the premium download. The PDF quality is top-notch, and the cover letter builder is a huge time-saver." },
//     { name: "Priya Sharma", img: "https://i.pravatar.cc/150?img=32", date: "1 week ago", rating: 5, text: "As a new grad, I was lost. This builder guided me through every section and helped me highlight my projects effectively. Highly recommended!" },
//     { name: "Alex T.", img: "https://i.pravatar.cc/150?img=59", date: "2 weeks ago", rating: 4, text: "Great tool. The AI is very smart. Would love to see a few more creative templates, but the current ones are solid." }
// ];

// const SCROLLER_TEMPLATES = [
//   // --- The Core / Basics ---
//   { id: 'minimal', name: 'ATS Minimal' },
//   { id: 'infographic', name: 'Infographic' },
//   { id: 'motion-designer-board', name: 'Motion Designer Board' },
//   { id: 'magazine-cover', name: 'Magazine Cover' },
//   { id: 'lawyer-trial', name: 'Trial Lawyer' },
//   { id: 'youtube-creator', name: 'YouTube Creator' },
//   { id: 'professional', name: 'Clean Professional' },
//   { id: 'developer', name: 'Dev Console' },
//   { id: 'gamer-arena', name: 'Gamer Arena' },
//   { id: 'sql-terminal', name: 'SQL Terminal' },
//   { id: 'newspaper-editorial', name: 'Newspaper Editorial' },
//   { id: 'actor-spotlight', name: 'Actor Spotlight' },
//   { id: 'reporting-mis', name: 'Reporting MIS' },
//   { id: 'chartered-accountant', name: 'Chartered Accountant' },
//   { id: 'doctor-profile', name: 'Doctor Profile' },
//   { id: 'physician-care', name: 'Physician Care' },
//   { id: 'info-executive', name: 'Executive Grid'},
//   { id: 'cyan-grid', name: 'Cyan Flux' },
//   {id: 'info-navy', name : 'Full Infographic'},                   
//   { id: 'classic', name: 'Ivy League' },
//   { id: 'class-file-dark', name: 'Class File Dark' },
//   { id: 'blue-frame', name: 'Blue Frame' },
//   { id: 'amber-visual', name: 'Amber Visual' },
//   { id: 'professional-columns', name: 'Prof. Columns' },               
//   { id: 'tech', name: 'Terminal Dark' },
//   { id: 'Architect', name: 'Architect Grid'},
 
  
//   { id: 'bubble-header', name: 'Bubble Header' },          // Playful / Header-focused
//   { id: 'modern-circle', name: 'Modern Circle' },          // Trendy / Creative
  
//   { id: 'student-notes', name: 'Student Notes' },
//   { id: 'chalkboard-artist', name: 'Chalkboard Artist' },
//   { id: 'polaroid-portfolio', name: 'Polaroid Portfolio' },
//   { id: 'influencer-media-kit', name: 'Influencer Media Kit' },
  
//   { id: 'chef-menu', name: 'Chef Menu' },
//   { id: 'painter-canvas', name: 'Painter Canvas' },
  
//   { id: 'portfolio-showcase', name: 'Portfolio Showcase' },
//   { id: 'photographer-resume', name: 'Photographer Resume' },
  
  
  
//   // --- Specialty Career Templates ---
  

//   // --- Role-Specific (From your new templates) ---
//   { id: 'software-engineer', name: 'Software Engineer' },  // Job Specific (Engineering)
//   { id: 'business-analyst', name: 'Business Analyst' },    // Job Specific (Corporate)
//   { id: 'designer', name: 'Creative Designer' },           // Job Specific (Creative)
//   { id: 'medical', name: 'Medical Professional' },         // Job Specific (Healthcare)

//   // --- Layout Variations (Framed, Sidebar, Centered) ---
  
//   { id: 'centered-initials', name: 'Centered Initials' },
//   { id: 'startup', name: 'Startup Gradient' },
  

//   // --- Dark / Unique ---
//   { id: 'berlin', name: 'Berlin Bold'}
// ];

// const EXAMPLE_CATEGORIES = [
//     "Information Technology", "New Grad Nursing", "Healthcare", "Executive", 
//     "Nursing Student", "Coaching", "Sales", "Project Manager", "Software Developer", "Marketing"
// ];

// const AFTER_UPLOAD_ACTIONS = [
//   {
//     icon: FileText,
//     title: 'Review extracted content',
//     description: 'Check summary, experience, education, skills, projects, and more before the final design is locked in.',
//   },
//   {
//     icon: Layout,
//     title: 'Switch templates anytime',
//     description: 'Try different resume styles without re-entering your content.',
//   },
//   {
//     icon: Brain,
//     title: 'Improve content with AI',
//     description: 'Use AI when you want stronger summaries and bullet points, not as a forced rewrite.',
//   },
//   {
//     icon: Briefcase,
//     title: 'Tailor to a job description',
//     description: 'Generate a role-focused draft when you need your resume to match a specific opportunity.',
//   },
//   {
//     icon: FolderOpen,
//     title: 'Keep versions in My Repository',
//     description: 'Save resumes, ATS results, interview prep, and usage history in one workspace.',
//   },
//   {
//     icon: Download,
//     title: 'Export a polished PDF',
//     description: 'Download the final resume after the content and layout look right.',
//   },
// ];

// const ENTRY_PATHS = [
//   {
//     icon: PenTool,
//     title: 'Build from scratch',
//     description: 'Go straight into template selection and write each section yourself with full control.',
//     note: 'Best when you already know the structure you want.',
//   },
//   {
//     icon: UploadCloud,
//     title: 'Import an existing resume',
//     description: 'Upload a PDF or DOCX, then choose exact import or an AI-optimized starting draft.',
//     note: 'Best when you want to redesign or improve a resume you already have.',
//   },
//   {
//     icon: Briefcase,
//     title: 'Tailor to a job description',
//     description: 'Combine your resume with a target JD to create a role-focused version before editing.',
//     note: 'Best when you are applying to a specific opening and want better alignment.',
//   },
// ];

// const PRODUCT_NOTES = [
//   {
//     title: 'Supported files',
//     description: 'Upload PDF or DOCX files. The public landing page now matches the parser-supported formats in the app.',
//   },
//   {
//     title: 'Job description is optional',
//     description: 'You only need a JD for role tailoring, ATS match scans, and interview prep.',
//   },
//   {
//     title: 'AI output is still your draft',
//     description: 'Exact import preserves wording. AI-assisted output can be reviewed and edited before export.',
//   },
//   {
//     title: 'Current data handling',
//     description: 'Saved repository data lives in this browser workspace, and AI actions run only when you request them.',
//   },
// ];

// const ResumeBuilderLanding = ({ onStart, onViewTemplates, onFileSelect, onOpenRepository, onOpenPricing }) => {
//   const scrollRef = useRef(null);
//   const reviewScrollRef = useRef(null);
//   const [activeCategory, setActiveCategory] = useState("Information Technology");

//   const scroll = (direction, ref) => {
//     if(ref.current) {
//         const { current } = ref;
//         const scrollAmount = 350;
//         current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="theme-app-shell min-h-screen overflow-y-auto custom-scrollbar scroll-smooth font-sans text-slate-900">
      
//       {/* 1. NAVBAR */}
//       <Navbar onStart={onStart} onOpenRepository={onOpenRepository} onOpenPricing={onOpenPricing} currentPage="landing" />

//       {/* 2. SEO META TAGS */}
//       <SEO 
//         title="Free AI Resume Builder | Create a Professional CV in Minutes - CareerSense"
//         description="Build an ATS-friendly resume instantly with our AI-powered builder."
//         keywords="resume builder, AI resume, CV maker"
//       />

//       {/* 3. HERO SECTION */}
//       <div id="home" className="theme-hero-surface relative overflow-hidden px-4 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32 scroll-mt-28">
//         <div className="absolute top-0 right-0 h-full w-1/2 rounded-full bg-teal-400/15 blur-[120px] pointer-events-none" />
//         <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-sky-200/35 blur-[120px] pointer-events-none" />
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
//           <div>
//             {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-teal-500/30">
//               <Sparkles size={12} /> #1 Rated AI Resume Builder
//             </div> */}
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6 text-[color:var(--theme-text-primary)]">
//               The Professional <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Resume Builder</span>
//             </h1>
//             <p className="mb-8 max-w-xl text-base leading-relaxed text-[color:var(--theme-text-secondary)] sm:text-lg">
//               Use our professional field-tested resume templates that follow the exact "resume rules" employers look for. Easy to use and done within 15 minutes.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 mb-10">
//   {/* Primary Button - Starts the resume builder */}
//   <button 
//     onClick={onStart} 
//     className="theme-primary-button w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3"
//   >
//     Create My Resume <ArrowRight size={18} />
//   </button>
  
//   {/* Secondary Button - Navigates to the Template Gallery */}
//   <button 
//     onClick={onViewTemplates} 
//     className="theme-secondary-button w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition flex items-center justify-center gap-3"
//   >
//     View Templates
//   </button>
// </div>

//             <div className="flex flex-col items-start gap-4 text-xs font-bold uppercase tracking-widest text-[color:var(--theme-text-muted)] sm:flex-row sm:items-center sm:gap-6">
//               <div className="flex -space-x-3">
//                 {[1,2,3,4].map(i => <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 bg-cover shadow-sm" style={{backgroundImage: `url(https://i.pravatar.cc/100?img=${i+10})`}} />)}
//               </div>
//               <div className="flex flex-col">
//                 <div className="flex text-yellow-500 mb-1">
//                     {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
//                 </div>
//                 <span>Trusted by 45k+ Job Seekers</span>
//               </div>
//             </div>
//           </div>
//           <div className="relative hidden lg:block perspective-1000 h-[600px] w-full">
//              <ResumeBuilder2 />
//           </div>
//         </div>
//       </div>

//       {/* 4. ENTRY PATHS */}
//       <section className="relative overflow-hidden border-b border-slate-100 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
//         <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(148,226,212,0.22),transparent_68%)]" />
//         <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-teal-100/40 blur-[100px]" />
//         <div className="mx-auto max-w-7xl">
//           <div className="max-w-4xl">
//             <div className="inline-flex items-center gap-2 rounded-full border border-[#cfeee6] bg-[#f1fcf8] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-teal-700 shadow-[0_8px_22px_rgba(83,170,151,0.10)]">
//               <Sparkles size={13} />
//               Start Your Way
//             </div>
//             <h2 className="mt-5 max-w-4xl text-[2.35rem] font-black tracking-[-0.05em] text-slate-900 sm:text-[3.1rem] lg:text-[3.7rem] lg:leading-[0.98]">
//               Three clear ways to begin, one editable builder at the end.
//             </h2>
//             <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-slate-500 sm:text-[1.1rem]">
//               The app already supports different entry points. This section makes those three starting paths feel obvious before the first click.
//             </p>
//           </div>

//           <div className="mt-10 grid gap-6 lg:grid-cols-3">
//             {ENTRY_PATHS.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.title}
//                   className="group flex h-full flex-col rounded-[2rem] border border-[#dbece7] bg-white/95 p-5 shadow-[0_20px_55px_rgba(89,160,145,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bfe4db] hover:shadow-[0_28px_65px_rgba(89,160,145,0.16)]"
//                 >
//                   <div className="flex h-full flex-col rounded-[1.65rem] border border-slate-100 bg-white px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
//                     <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] bg-[#edf9f5] text-teal-600 shadow-[0_8px_20px_rgba(134,216,198,0.22)]">
//                       <Icon size={24} strokeWidth={2.2} />
//                     </div>
//                     <h3 className="mt-7 text-[1.5rem] font-black tracking-[-0.04em] text-slate-900">
//                       {item.title}
//                     </h3>
//                     <p className="mt-4 text-[1rem] font-medium leading-8 text-slate-500">
//                       {item.description}
//                     </p>
//                     <div className="mt-6 rounded-[1.2rem] border border-[#e6efec] bg-[#f8fbfa] px-4 py-4 text-[0.95rem] font-medium leading-7 text-slate-500">
//                       {item.note}
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 5. LOGO STRIP */}
//       <div className="border-b border-slate-100 bg-white py-10">
//           <div className="max-w-7xl mx-auto px-6 text-center">
//               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Candidates hired by top companies</p>
//               <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
//                   {['Google', 'Amazon', 'Microsoft', 'Spotify', 'Tesla', 'Netflix'].map(company => (
//                       <span key={company} className="text-xl font-black text-slate-900 tracking-tighter">{company}</span>
//                   ))}
//               </div>
//           </div>
//       </div>

//       {/* --- NEW: 6. HOW IT WORKS (VIDEO DEMOS - LIGHT THEME) --- */}
//       <div id="how-it-works" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-slate-50 relative overflow-hidden border-b border-slate-200 scroll-mt-28">
//           {/* Subtle background glow */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          
//           <div className="max-w-7xl mx-auto relative z-10">
//               <div className="text-center mb-12 sm:mb-16">
//                   {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-teal-100 shadow-sm">
//                      Feature Demonstration
//                   </div> */}
//                   <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
//                     How CareerSense Resume Builder <span className="text-[#0d9488]">works</span>
//                   </h2>
//                   <p className="text-base sm:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
//                     Watch how our AI-powered engine seamlessly transforms your existing profile or aligns it perfectly with your target job description.
//                   </p>
//               </div>

//               <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
//                   {/* Player 1 */}
//                   <div className="flex flex-col bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 hover:border-teal-300 transition-all duration-500 shadow-lg hover:shadow-xl group">
//                       <div className="h-16 flex items-center justify-center mb-6">
//                         <h3 className="text-lg font-bold text-slate-800 text-center leading-snug">
//                             Enhance resume using existing Resume
//                         </h3>
//                       </div>
//                       <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-black aspect-video group-hover:shadow-teal-900/10 transition-all duration-500">
//                           <video 
//                               src={resumeVideo} 
//                               controls 
//                               className="absolute inset-0 w-full h-full object-contain bg-black"
//                               preload="metadata"
//                           >
//                               Your browser does not support the video tag.
//                           </video>
//                       </div>
//                   </div>

//                   {/* Player 2 */}
//                   <div className="flex flex-col bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 hover:border-emerald-300 transition-all duration-500 shadow-lg hover:shadow-xl group">
//                       <div className="h-16 flex items-center justify-center mb-6">
//                         <h3 className="text-lg font-bold text-slate-800 text-center leading-snug">
//                             Customized Resume based on Job Requirements
//                         </h3>
//                       </div>
//                       <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-black aspect-video group-hover:shadow-emerald-900/10 transition-all duration-500">
//                           <video 
//                               src={resumeJdVideo} 
//                               controls 
//                               className="absolute inset-0 w-full h-full object-contain bg-black"
//                               preload="metadata"
//                           >
//                               Your browser does not support the video tag.
//                           </video>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>

//       {/* 7. IMPORT RESUME SECTION */}
//       <div id="import" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden scroll-mt-28">
//           <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-teal-50 opacity-80" />
//           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
//               <div className="relative group perspective-1000">
//                   <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
//                   <div className="theme-section-glass relative rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-8">
//                       <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-8 text-center shadow-inner">
//                           <h3 className="text-xl font-bold text-slate-800 mb-2">Import Your Resume</h3>
//                           <p className="text-slate-500 text-sm mb-8">Drag and drop or upload your existing resume to start.</p>
//                           <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 sm:p-10 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 hover:border-teal-400 transition-colors cursor-pointer group/drop relative">
//                                 <input 
//                                     type="file" 
//                                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50" 
//                                     accept=".pdf,.docx,.doc,.txt"
//                                     onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
//                                 />
//                                 <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4 group-hover/drop:scale-110 transition-transform">
//                                     <UploadCloud size={32} />
//                                 </div>
//                                 <span className="text-sm font-bold text-slate-700">Drag and drop a file here</span>
//                                 <button className="theme-primary-button mt-6 rounded-lg px-6 py-2 text-xs font-bold uppercase tracking-widest pointer-events-none">Browse</button>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div>
//                   <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
//                     Import Your Resume <br/>
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Without Interrupting Your Day</span>
//                   </h2>
//                   <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
//                     Already have a draft? Upload it to our platform in seconds from your preferred device.
//                   </p>
//                   <div className="relative inline-block">
//                     <input 
//                         type="file" 
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50" 
//                         accept=".pdf,.docx,.doc,.txt"
//                         onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
//                     />
//                     <button className="theme-primary-button w-full sm:w-auto px-8 sm:px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all">
//                         Import My Resume
//                     </button>
//                   </div>
//               </div>
//           </div>
//       </div>

// {/* 8. RESUME EXAMPLES SECTION (New & Improved) */}
//         <section id="examples" className="scroll-mt-28">
//           <ResumeExamples onStart={onStart} />
//         </section>
// {/* --- ADD AI FEATURES HERE (Option A) --- */}
//         <section id="features" className="scroll-mt-28">
//           <AIFeatures />
//         </section>
// {/* 9. ANATOMY SECTION */}
//         <section id="anatomy" className="scroll-mt-28">
//           <ResumeAnatomy />
//         </section>

//       {/* 10. TEMPLATE SCROLLER */}
//       <div id="templates" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden scroll-mt-28">
//           <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
//               <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-end mb-10 sm:mb-16">
//                   <div className="max-w-1xl">
//                       <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Choose from our <span className="text-[#0d9488]">70+ Professional Templates</span></h2>
//                       <p className="text-slate-500 text-base sm:text-lg">Explore ATS-friendly, modern, executive, and creative layouts, then switch styles without rebuilding the resume itself.</p>
//                   </div>
//                   <div className="flex gap-2 self-start sm:self-auto">
//                       <button onClick={() => scroll('left', scrollRef)} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"><ChevronLeft size={20}/></button>
//                       <button onClick={() => scroll('right', scrollRef)} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"><ChevronRight size={20}/></button>
//                   </div>
//               </div>
//               <div ref={scrollRef} className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//                   {SCROLLER_TEMPLATES.map((tpl) => (
//                       <div key={tpl.id} className="snap-center shrink-0 w-[260px] sm:w-[300px] group cursor-pointer" onClick={onViewTemplates}>
//                           <div className="bg-white rounded-[2rem] shadow-sm border-[6px] border-white overflow-hidden relative aspect-[210/297] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
//                               <div className="absolute inset-0 transform scale-[0.4] origin-top-left w-[250%] h-[250%] pointer-events-none bg-slate-50">
//                                   <ResumePreview data={PREVIEW_DATA} template={tpl.id} />
//                               </div>
//                               <div className="absolute inset-0 bg-[#0d9488]/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4 z-10">
//                                   <span className="text-white font-bold text-lg uppercase tracking-widest">Use Template</span>
//                                   <div className="bg-white text-[#0d9488] p-3 rounded-full shadow-lg"><ArrowRight /></div>
//                               </div>
//                           </div>
//                           <h3 className="text-center mt-6 font-bold text-slate-700 uppercase tracking-widest text-xs group-hover:text-[#0d9488] transition-colors">{tpl.name}</h3>
//                       </div>
//                   ))}
//               </div>
//           </div>
//       </div>

//       {/* 11. AFTER UPLOAD ACTIONS */}
//       <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(180deg,#f8fdfa_0%,#ffffff_72%)] px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
//         <div className="pointer-events-none absolute right-0 top-8 h-72 w-72 rounded-full bg-emerald-100/20 blur-[120px]" />
//         <div className="mx-auto max-w-[1320px]">
//           <div className="max-w-[960px]">
//             <h2 className="text-3xl sm:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">What you can actually do after the <span className="text-[#0d9488]">first upload.</span></h2>
//             <p className="text-slate-500 text-base sm:text-lg">The public page should answer this clearly. These are the core actions already reflected inside the current product flow.</p>
//           </div>

//           <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//             {AFTER_UPLOAD_ACTIONS.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.title}
//                   className="group rounded-[1.7rem] border border-[#e3efeb] bg-white px-5 py-5 shadow-[0_10px_28px_rgba(80,149,136,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9e8e0] hover:shadow-[0_16px_38px_rgba(80,149,136,0.10)] lg:min-h-[190px]"
//                 >
//                   <div className="flex h-11 w-11 items-center justify-center rounded-[0.95rem] bg-[#f1fbf7] text-teal-600 shadow-[0_6px_16px_rgba(134,216,198,0.16)]">
//                     <Icon size={20} strokeWidth={2.1} />
//                   </div>
//                   <h3 className="mt-5 text-[1.05rem] font-black leading-[1.3] tracking-[-0.03em] text-slate-900 sm:text-[1.1rem]">
//                     {item.title}
//                   </h3>
//                   <p className="mt-3 text-[0.9rem] font-medium leading-7 text-slate-500">
//                     {item.description}
//                   </p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 12. FEATURES GRID */}
//       <div className="bg-slate-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-b border-slate-200">
//          <div className="max-w-7xl mx-auto">
//             <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <FeatureCard icon={Brain} title="AI-Powered Text" desc="Instantly generate bullet points for your role using our advanced AI algorithms." />
//                     <FeatureCard icon={Layout} title="ATS Optimized" desc="Templates designed to pass Applicant Tracking Systems used by major companies." />
//                     <FeatureCard icon={FileText} title="Real-time Preview" desc="See changes instantly as you edit. No more guessing how your document will look." />
//                     <FeatureCard icon={CheckCircle2} title="Pre-written Examples" desc="Access thousands of pre-written examples for every job title and industry." />
//                 </div>
//                 <div>
//                     <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">Designed to get you <br/><span className="text-[#0d9488]">Hired Faster.</span></h2>
//                     <p className="text-slate-500 mb-8 leading-relaxed text-base sm:text-lg">Most resumes never reach a human eye. Our platform ensures your resume is not only beautiful but technically optimized for the robots that read it first.</p>
//                     <button onClick={onStart} className="theme-primary-button rounded-xl px-8 py-4 font-bold text-sm transition shadow-lg">Start Building Now</button>
//                 </div>
//             </div>
//          </div>
//       </div>
      

//       {/* 13. BEFORE YOU START */}
//       <section className="relative overflow-hidden border-b border-slate-100 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
//         <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(circle_at_bottom,rgba(148,226,212,0.16),transparent_72%)]" />
//         <div className="mx-auto max-w-7xl">
//           <div className="max-w-4xl">
            
//             <div className="max-w-[960px]">
//             <h2 className="text-3xl sm:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Important product details that should be visible before <span className="text-[#0d9488]"> conversion.</span></h2>
//             <p className="text-slate-500 text-base sm:text-lg">These notes set accurate expectations about supported files, optional job descriptions, editable AI output, and the current repository experience.</p>
//           </div>
//           </div>

//           <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
//             {PRODUCT_NOTES.map((item) => (
//               <article
//                 key={item.title}
//                 className="rounded-[1.8rem] border border-[#dbece7] bg-white px-6 py-6 shadow-[0_16px_40px_rgba(80,149,136,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bfe4db] hover:shadow-[0_24px_56px_rgba(80,149,136,0.12)]"
//               >
//                 <div className="text-[0.78rem] font-black uppercase tracking-[0.24em] text-teal-700">
//                   Current Product Note
//                 </div>
//                 <h3 className="mt-5 text-[1.35rem] font-black tracking-[-0.04em] text-slate-900">
//                   {item.title}
//                 </h3>
//                 <p className="mt-4 text-[0.98rem] font-medium leading-8 text-slate-500">
//                   {item.description}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 14. GOOGLE REVIEWS SECTION */}
//       <div className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden scroll-mt-28" id="reviews">
//           <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-6 sm:gap-8">
//                   <div className="max-w-lg">
//                     <div className="flex flex-wrap items-center gap-3 text-2xl font-black text-slate-900 mb-2">
//                         <span>4.9</span>
//                         <div className="flex text-yellow-500">
//                             {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
//                         </div>
//                     </div>
//                     <p className="text-base sm:text-lg text-slate-500">Based on <strong>1,250+ reviews</strong> from happy job seekers.</p>
//                   </div>
//                   <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full md:w-auto">
//                       <button className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-white text-slate-900 font-bold text-sm border-2 border-slate-200 hover:border-[#0d9488] hover:text-[#0d9488] transition-colors flex items-center justify-center gap-2">
//                           Review us on Google
//                       </button>
//                       <div className="flex gap-2 self-start sm:self-auto">
//                           <button onClick={() => scroll('left', reviewScrollRef)} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"><ChevronLeft size={20}/></button>
//                           <button onClick={() => scroll('right', reviewScrollRef)} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"><ChevronRight size={20}/></button>
//                       </div>
//                   </div>
//               </div>
//               <div ref={reviewScrollRef} className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//                   {GOOGLE_REVIEWS.map((review, i) => (
//                       <div key={i} className="snap-start shrink-0 w-[300px] sm:w-[350px] bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
//                           <div className="flex items-center gap-4 mb-6">
//                               <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
//                                   <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
//                               </div>
//                               <div>
//                                   <div className="font-bold text-slate-900 flex items-center gap-2">{review.name}</div>
//                                   <div className="text-xs text-slate-500">{review.date}</div>
//                               </div>
//                           </div>
//                           <div className="flex text-yellow-500 mb-4">
//                               {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
//                           </div>
//                           <p className="text-slate-700 text-sm leading-relaxed">"{review.text}"</p>
//                       </div>
//                   ))}
//               </div>
//           </div>
//       </div>

//       {/* 12. FAQ SECTION */}
//       <div id="faq" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-28">
//           <h2 className="text-3xl font-black text-slate-900 mb-10 sm:mb-12 text-center uppercase tracking-tight">Frequently Asked Questions</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {FAQ_DATA.map((faq, i) => (
//                   <details key={i} className="group bg-white p-6 rounded-2xl border border-slate-200 open:border-teal-500 transition-colors shadow-sm cursor-pointer h-fit">
//                       <summary className="font-bold text-slate-900 flex items-start justify-between list-none gap-4">
//                           <span className="text-sm leading-snug">{faq.q}</span>
//                           <span className="transform group-open:rotate-180 transition-transform mt-1 text-slate-400">▼</span>
//                       </summary>
//                       <p className="text-slate-500 mt-4 leading-relaxed text-xs">{faq.a}</p>
//                   </details>
//               ))}
//           </div>
//       </div>

//       {/* 13. FINAL CTA */}
//       <div className="bg-teal-50 border-t border-teal-100 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 text-center">
//           <div className="max-w-3xl mx-auto">
//               <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">Ready to land your dream job?</h2>
//               <button onClick={onStart} className="theme-primary-button mx-auto flex w-full sm:w-auto items-center justify-center gap-3 rounded-full px-8 sm:px-12 py-4 sm:py-6 font-black text-base sm:text-lg uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform">
//                 Create My Resume <ArrowRight size={20} />
//               </button>
//           </div>
//       </div>

//       {/* --- FOOTER --- */}
//       <Footer onStart={onStart} onOpenPricing={onOpenPricing} />

//     </div>
//   );
// };

// const FeatureCard = ({ icon: Icon, title, desc }) => (
//     <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-teal-200 transition-colors">
//         <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-4"><Icon size={24} /></div>
//         <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
//         <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
//     </div>
// );

// export default ResumeBuilderLanding;


import React, { useRef, useState } from 'react';
import { 
  Sparkles, ArrowRight, CheckCircle, Cpu, MousePointer2, 
  PenTool, Download, CheckCircle2, Star, Zap, Brain, Layout, FileText, HelpCircle,
  ChevronLeft, ChevronRight, UploadCloud, File, Monitor, Smartphone, Tablet, Briefcase, GraduationCap, FolderOpen
} from 'lucide-react';

// --- SEO & FOOTER COMPONENTS ---
import Footer from './Footer'; 
import Navbar from './Navbar';
import SEO from '../SEO'; 

// --- IMPORT ANIMATIONS & VISUALS ---
import ResumeBuilder2 from './HeroAnimation'; 
import ResumeAnatomy from './ResumeAnatomy'; 

// --- IMPORT PREVIEW COMPONENT ---
import ResumePreview from "../resume/ResumePreview"; 
import AIFeatures from './AIFeatures'; 
import ResumeExamples from './ResumeExamples'; 

// --- IMPORT VIDEOS ---
import resumeVideo from '../../assets/Resume.mp4';
import resumeJdVideo from '../../assets/Resume&JD.mp4';
import poojaImage from '../../assets/Pooja.png';

// --- DUMMY DATA FOR LANDING PAGE PREVIEWS ---
const PREVIEW_DATA = {
    personal: {
      name: "Pooja Bansal",
      title: "Business Intelligence Leader",
      email: "p.bansal@careersense.com",
      phone: "+1 555 0199 283",
      location: "New York, USA",
      photo: poojaImage,
      summary: "Results-oriented BI Manager with 7+ years of experience driving market share growth through data-driven strategies. Expert in translating complex datasets into actionable business insights, overseeing cross-functional teams, and implementing scalable data architecture."
    },
    experience: [
      { 
        id: 1, 
        role: "Senior BI Manager", 
        company: "Global Tech Solutions", 
        date: "2020 - Present", 
        desc: "• Led a team of 10 analysts to execute a global rebranding campaign, increasing customer engagement by 40%.\n• Designed and implemented an automated reporting system using Tableau, reducing manual data entry time by 15 hours per week.\n• Collaborated with C-suite executives to define KPIs, resulting in a 20% year-over-year revenue growth.", 
        pageBreak: false 
      },
      { 
        id: 2, 
        role: "Business Data Analyst", 
        company: "FinStream Corp", 
        date: "2017 - 2020", 
        desc: "• Analyzed consumer behavior patterns to identify new market opportunities, leading to a successful $2M product launch.\n• Developed complex SQL queries to consolidate data from disparate sources, ensuring 99.9% data accuracy for quarterly financial reports.", 
        pageBreak: false 
      }
    ],
    education: [
      { 
        id: 1, 
        degree: "MBA, Business Intelligence", 
        school: "Stern School of Business", 
        date: "2017", 
        pageBreak: false 
      },
      { 
        id: 2, 
        degree: "B.S. in Data Science", 
        school: "New York University", 
        date: "2015", 
        pageBreak: false 
      }
    ],
    skills: { 
      core: ["Brand Strategy", "SEO/SEM", "Market Analysis", "Strategic Planning", "Revenue Operations"], 
      technical: ["Google Analytics", "Tableau", "SQL", "Python", "PowerBI", "Jira"], 
      soft: ["Leadership", "Stakeholder Management", "Public Speaking", "Critical Thinking"] 
    },
    projects: [
      { 
        id: 1, 
        name: "Global Dashboard Initiative", 
        desc: "Architected a centralized BI dashboard integrating sales data from 12 international regions, providing real-time visibility into global performance metrics.", 
        pageBreak: false 
      }
    ],
    awards: [
      { id: 1, name: "Leadership Excellence Award", issuer: "Global Tech Solutions", pageBreak: false }
    ],
    certifications: [
      { id: 1, name: "Certified Business Intelligence Professional (CBIP)", issuer: "TDWI", date: "2019", pageBreak: false }
    ],
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Conversational" }
    ],
    volunteering: [
      { id: 1, role: "Mentor", org: "Women in Data", date: "2021 - Present", desc: "Mentoring upcoming data analysts.", pageBreak: false }
    ]
  };

// --- FAQ DATA ---
const FAQ_DATA = [
  { q: "How do I use the Resume Builder app?", a: "Simply choose a template, auto-import your existing resume or start from scratch, and let our AI guide you through each section. Once done, download in your preferred format." },
  { q: "Do I need to download an app to use the resume builder on mobile?", a: "No downloads required! Our platform is fully responsive and works perfectly in your mobile browser (Chrome, Safari, etc.) on iOS and Android." },
  { q: "What makes Resume Builder the best resume tool?", a: "We combine recruiter-approved templates with advanced AI writing assistance and real-time ATS scoring to ensure your resume actually gets read." },
  { q: "What is the main purpose of a resume builder?", a: "To automate formatting, structure content professionally, and optimize keywords so you can focus on your achievements rather than margins and fonts." },
  { q: "What are the advantages of using a resume builder tool?", a: "You save hours of formatting time, avoid common design errors, get AI-suggested content, and ensure your document passes Applicant Tracking Systems (ATS)." },
  { q: "Does the mobile resume builder have the same features as desktop?", a: "Yes, you get full functionality on mobile, including AI writing, template switching, and PDF export." },
  { q: "Can resume builders help with ATS optimization?", a: "Absolutely. Our templates use standard headings and clean code structures that ATS software can easily parse, preventing your resume from being auto-rejected." },
  { q: "Is my information secure and compliant with data privacy laws?", a: "Yes, we use 256-bit encryption and strictly adhere to GDPR and CCPA regulations. Your data is yours alone." },
  { q: "Does Resume Builder have resume examples that I can look at?", a: "Yes, we offer a library of hundreds of resume examples across various industries to inspire your own writing." },
  { q: "What is an AI resume builder?", a: "It is a tool that uses artificial intelligence to generate role-specific bullet points, summaries, and skills based on your job title." },
  { q: "Should I download my new resume as a PDF or text file?", a: "PDF is best for emailing and uploading to preserve formatting. Text files are useful for copying content into online application forms." },
  { q: "Can I build my resume from my phone?", a: "Yes, our interface is optimized for touchscreens, allowing you to build, edit, and download resumes directly from your smartphone." },
  { q: "How can I use Resume Builder for free?", a: "You can build your resume and download a TXT version for free. Premium design downloads may require a subscription." },
  { q: "What is the cost of the Resume Builder tool?", a: "We offer a free tier and premium plans starting at a low monthly rate for unlimited PDF downloads and advanced AI features." },
  { q: "I can’t log into my account. What should I do?", a: "Ensure you are using the correct email. If you forgot your password, click the 'Forgot Password' link on the login screen to reset it." },
  { q: "How do I change my password?", a: "Log into your dashboard, go to 'Account Settings,' and select 'Change Password' under the Security tab." },
  { q: "Does Resume Builder provide customer support?", a: "Yes, our support team is available via email and live chat to assist you with any technical issues or billing questions." }
];

const GOOGLE_REVIEWS = [
    { name: "David Chen", img: "https://i.pravatar.cc/150?img=68", date: "2 days ago", rating: 5, text: "Incredible AI suggestions. It rewrote my bullet points to be so much more impactful. Got a call back from Google within a week!" },
    { name: "Sarah Jenkins", img: "https://i.pravatar.cc/150?img=44", date: "3 days ago", rating: 5, text: "The templates are beautiful and professional. The ATS checker gave me confidence that my resume would actually be seen." },
    { name: "Michael O.", img: "https://i.pravatar.cc/150?img=12", date: "4 days ago", rating: 5, text: "Worth every penny for the premium download. The PDF quality is top-notch, and the cover letter builder is a huge time-saver." },
    { name: "Priya Sharma", img: "https://i.pravatar.cc/150?img=32", date: "1 week ago", rating: 5, text: "As a new grad, I was lost. This builder guided me through every section and helped me highlight my projects effectively. Highly recommended!" },
    { name: "Alex T.", img: "https://i.pravatar.cc/150?img=59", date: "2 weeks ago", rating: 4, text: "Great tool. The AI is very smart. Would love to see a few more creative templates, but the current ones are solid." }
];

const SCROLLER_TEMPLATES = [
  { id: 'minimal', name: 'ATS Minimal' },
  { id: 'infographic', name: 'Infographic' },
  { id: 'motion-designer-board', name: 'Motion Designer Board' },
  { id: 'magazine-cover', name: 'Magazine Cover' },
  { id: 'lawyer-trial', name: 'Trial Lawyer' },
  { id: 'youtube-creator', name: 'YouTube Creator' },
  { id: 'professional', name: 'Clean Professional' },
  { id: 'developer', name: 'Dev Console' },
  { id: 'gamer-arena', name: 'Gamer Arena' },
  { id: 'sql-terminal', name: 'SQL Terminal' },
  { id: 'newspaper-editorial', name: 'Newspaper Editorial' },
  { id: 'actor-spotlight', name: 'Actor Spotlight' },
  { id: 'reporting-mis', name: 'Reporting MIS' },
  { id: 'chartered-accountant', name: 'Chartered Accountant' },
  { id: 'doctor-profile', name: 'Doctor Profile' },
  { id: 'physician-care', name: 'Physician Care' },
  { id: 'info-executive', name: 'Executive Grid'},
  { id: 'cyan-grid', name: 'Cyan Flux' },
  { id: 'info-navy', name : 'Full Infographic'},                   
  { id: 'classic', name: 'Ivy League' },
  { id: 'class-file-dark', name: 'Class File Dark' },
  { id: 'blue-frame', name: 'Blue Frame' },
  { id: 'amber-visual', name: 'Amber Visual' },
  { id: 'professional-columns', name: 'Prof. Columns' },               
  { id: 'tech', name: 'Terminal Dark' },
  { id: 'Architect', name: 'Architect Grid'},
  { id: 'bubble-header', name: 'Bubble Header' },
  { id: 'modern-circle', name: 'Modern Circle' },
  { id: 'student-notes', name: 'Student Notes' },
  { id: 'chalkboard-artist', name: 'Chalkboard Artist' },
  { id: 'polaroid-portfolio', name: 'Polaroid Portfolio' },
  { id: 'influencer-media-kit', name: 'Influencer Media Kit' },
  { id: 'chef-menu', name: 'Chef Menu' },
  { id: 'painter-canvas', name: 'Painter Canvas' },
  { id: 'portfolio-showcase', name: 'Portfolio Showcase' },
  { id: 'photographer-resume', name: 'Photographer Resume' },
  { id: 'software-engineer', name: 'Software Engineer' },
  { id: 'business-analyst', name: 'Business Analyst' },
  { id: 'designer', name: 'Creative Designer' },
  { id: 'medical', name: 'Medical Professional' },
  { id: 'centered-initials', name: 'Centered Initials' },
  { id: 'startup', name: 'Startup Gradient' },
  { id: 'berlin', name: 'Berlin Bold'}
];

const AFTER_UPLOAD_ACTIONS = [
  {
    icon: FileText,
    title: 'Review extracted content',
    description: 'Check your summary, experience, education, and skills before the final design is locked in.',
  },
  {
    icon: Layout,
    title: 'Switch templates instantly',
    description: 'Try dozens of different resume styles seamlessly without ever re-entering your content.',
  },
  {
    icon: Brain,
    title: 'Enhance with AI',
    description: 'Use targeted AI generation for stronger summaries and bullet points that capture attention.',
  },
  {
    icon: Briefcase,
    title: 'Tailor to the Job Description',
    description: 'Generate a role-focused draft to ensure your resume perfectly aligns with specific opportunities.',
  },
  {
    icon: FolderOpen,
    title: 'Keep versions organized',
    description: 'Save your resumes, ATS results, and interview prep in one secure, unified workspace.',
  },
  {
    icon: Download,
    title: 'Export a flawless PDF',
    description: 'Download the final, pixel-perfect resume once the content and layout meet your standards.',
  },
];

const ENTRY_PATHS = [
  {
    icon: PenTool,
    title: 'Build from scratch',
    description: 'Go straight into template selection and craft each section yourself with absolute formatting control.',
    note: 'Perfect for first-time job seekers or complete career pivots.',
  },
  {
    icon: UploadCloud,
    title: 'Import an existing resume',
    description: 'Upload your old PDF or DOCX. Choose a direct import or an AI-optimized starting draft.',
    note: 'Ideal when you want a rapid redesign without retyping your history.',
  },
  {
    icon: Briefcase,
    title: 'Tailor to a job description',
    description: 'Combine your current resume with a target Job Description to generate a highly aligned variant.',
    note: 'Crucial for passing ATS filters on highly competitive applications.',
  },
];

const PRODUCT_NOTES = [
  {
    title: 'Broad File Support',
    description: 'Upload your existing PDF, DOCX, or TXT files. Our advanced parser will organize your data automatically.',
  },
  {
    title: 'JD Not Required',
    description: 'You only need a Job Description if you wish to utilize our advanced ATS match scans and role-tailoring features.',
  },
  {
    title: 'You Remain in Control',
    description: 'Direct imports preserve your exact wording. All AI-assisted suggestions remain fully editable drafts until you say so.',
  },
  {
    title: 'Secure Data Handling',
    description: 'Your saved repository data lives securely in your workspace, and AI actions only process the data you explicitly request.',
  },
];

const ResumeBuilderLanding = ({ onStart, onViewTemplates, onFileSelect, onOpenRepository, onOpenPricing }) => {
  const scrollRef = useRef(null);
  const reviewScrollRef = useRef(null);

  const scroll = (direction, ref) => {
    if(ref.current) {
        const { current } = ref;
        const scrollAmount = 350;
        current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="theme-app-shell min-h-screen overflow-y-auto custom-scrollbar scroll-smooth font-sans text-slate-900">
      
      {/* 1. NAVBAR */}
      <Navbar onStart={onStart} onOpenRepository={onOpenRepository} onOpenPricing={onOpenPricing} currentPage="landing" />

      {/* 2. SEO META TAGS */}
      <SEO 
        title="Free AI Resume Builder | Create a Professional CV in Minutes - CareerSense"
        description="Build an ATS-friendly resume instantly with our AI-powered builder."
        keywords="resume builder, AI resume, CV maker"
      />

      {/* 3. HERO SECTION */}
      <div id="home" className="theme-hero-surface relative overflow-hidden px-4 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32 scroll-mt-28">
        <div className="absolute top-0 right-0 h-full w-1/2 rounded-full bg-teal-400/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-sky-200/35 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6 text-[color:var(--theme-text-primary)]">
              The Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Resume Builder</span>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-[color:var(--theme-text-secondary)] sm:text-lg">
              Use our professional, field-tested resume templates that follow the exact rules employers look for. Easily construct an ATS-optimized profile in under 15 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {/* Primary Button */}
              <button 
                onClick={onStart} 
                className="theme-primary-button w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 hover:-translate-y-0.5"
              >
                Create My Resume <ArrowRight size={18} />
              </button>
              
              {/* Secondary Button */}
              <button 
                onClick={onViewTemplates} 
                className="theme-secondary-button w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 hover:bg-slate-100"
              >
                View Templates
              </button>
            </div>

            <div className="flex flex-col items-start gap-4 text-xs font-bold uppercase tracking-widest text-[color:var(--theme-text-muted)] sm:flex-row sm:items-center sm:gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 bg-cover shadow-sm" style={{backgroundImage: `url(https://i.pravatar.cc/100?img=${i+10})`}} />)}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-500 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <span>Trusted by 45k+ Job Seekers</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block perspective-1000 h-[600px] w-full">
             <ResumeBuilder2 />
          </div>
        </div>
      </div>

      {/* 4. ENTRY PATHS */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(148,226,212,0.22),transparent_68%)]" />
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-teal-100/40 blur-[100px]" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#cfeee6] bg-[#f1fcf8] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-teal-700 shadow-[0_8px_22px_rgba(83,170,151,0.10)]">
              <Sparkles size={13} />
              Start Your Way
            </div>
            <h2 className="mt-5 max-w-4xl text-[2.35rem] font-black tracking-[-0.05em] text-slate-900 sm:text-[3.1rem] lg:text-[3.7rem] lg:leading-[0.98]">
              Three clear ways to begin, one powerful builder at the end.
            </h2>
            <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-slate-500 sm:text-[1.1rem]">
              Select the path that best matches your current situation. Whether you are starting with a blank slate or updating a dusty PDF, our engine adapts to your exact workflow.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {ENTRY_PATHS.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group flex h-full flex-col rounded-[2rem] border border-[#dbece7] bg-white/95 p-5 shadow-[0_20px_55px_rgba(89,160,145,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bfe4db] hover:shadow-[0_28px_65px_rgba(89,160,145,0.16)]"
                >
                  <div className="flex h-full flex-col rounded-[1.65rem] border border-slate-100 bg-white px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] bg-[#edf9f5] text-teal-600 shadow-[0_8px_20px_rgba(134,216,198,0.22)]">
                      <Icon size={24} strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-7 text-[1.5rem] font-black tracking-[-0.04em] text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[1rem] font-medium leading-8 text-slate-500">
                      {item.description}
                    </p>
                    <div className="mt-6 rounded-[1.2rem] border border-[#e6efec] bg-[#f8fbfa] px-4 py-4 text-[0.95rem] font-medium leading-7 text-slate-500">
                      {item.note}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. LOGO STRIP */}
      <div className="border-b border-slate-100 bg-white py-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Candidates hired by top companies</p>
              <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                  {['Google', 'Amazon', 'Microsoft', 'Spotify', 'Tesla', 'Netflix'].map(company => (
                      <span key={company} className="text-xl font-black text-slate-900 tracking-tighter">{company}</span>
                  ))}
              </div>
          </div>
      </div>

      {/* 6. HOW IT WORKS */}
      <div id="how-it-works" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-slate-50 relative overflow-hidden border-b border-slate-200 scroll-mt-28">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                    How CareerSense Resume Builder <span className="text-[#0d9488]">works</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                    Watch how our AI-powered engine seamlessly transforms your existing profile or aligns it perfectly with your target job description.
                  </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
                  {/* Player 1 */}
                  <div className="flex flex-col bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 hover:border-teal-300 transition-all duration-500 shadow-lg hover:shadow-xl group">
                      <div className="h-16 flex items-center justify-center mb-6">
                        <h3 className="text-lg font-bold text-slate-800 text-center leading-snug">
                            Enhance using your existing Resume
                        </h3>
                      </div>
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-black aspect-video group-hover:shadow-teal-900/10 transition-all duration-500">
                          <video 
                              src={resumeVideo} 
                              controls 
                              className="absolute inset-0 w-full h-full object-contain bg-black"
                              preload="metadata"
                          >
                              Your browser does not support the video tag.
                          </video>
                      </div>
                  </div>

                  {/* Player 2 */}
                  <div className="flex flex-col bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 hover:border-emerald-300 transition-all duration-500 shadow-lg hover:shadow-xl group">
                      <div className="h-16 flex items-center justify-center mb-6">
                        <h3 className="text-lg font-bold text-slate-800 text-center leading-snug">
                            Customize for specific Job Requirements
                        </h3>
                      </div>
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-black aspect-video group-hover:shadow-emerald-900/10 transition-all duration-500">
                          <video 
                              src={resumeJdVideo} 
                              controls 
                              className="absolute inset-0 w-full h-full object-contain bg-black"
                              preload="metadata"
                          >
                              Your browser does not support the video tag.
                          </video>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* 7. IMPORT RESUME SECTION */}
      <div id="import" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden scroll-mt-28">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-teal-50 opacity-80" />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
              <div className="relative group perspective-1000">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="theme-section-glass relative rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-8">
                      <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-8 text-center shadow-inner">
                          <h3 className="text-xl font-bold text-slate-800 mb-2">Import Your Resume</h3>
                          <p className="text-slate-500 text-sm mb-8">Drag and drop or upload your existing resume to start.</p>
                          <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 sm:p-10 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 hover:border-teal-400 transition-colors cursor-pointer group/drop relative">
                                <input 
                                    type="file" 
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50" 
                                    accept=".pdf,.docx,.doc,.txt"
                                    onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
                                />
                                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4 group-hover/drop:scale-110 transition-transform">
                                    <UploadCloud size={32} />
                                </div>
                                <span className="text-sm font-bold text-slate-700">Drag and drop a file here</span>
                                <button className="theme-primary-button mt-6 rounded-lg px-6 py-2 text-xs font-bold uppercase tracking-widest pointer-events-none">Browse</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                    Import Your Resume <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Without Losing Your Momentum</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                    Already have a draft? Upload it to our platform in seconds from your preferred device and let our AI parser instantly organize your data into a fully editable format.
                  </p>
                  <div className="relative inline-block">
                    <input 
                        type="file" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50" 
                        accept=".pdf,.docx,.doc,.txt"
                        onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
                    />
                    <button className="theme-primary-button w-full sm:w-auto px-8 sm:px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all">
                        Import My Resume
                    </button>
                  </div>
              </div>
          </div>
      </div>

      {/* 8. RESUME EXAMPLES SECTION */}
      <section id="examples" className="scroll-mt-28">
        <ResumeExamples onStart={onStart} />
      </section>

      {/* 9. AI FEATURES SECTION */}
      <section id="features" className="scroll-mt-28">
        <AIFeatures />
      </section>

      {/* 10. ANATOMY SECTION */}
      <section id="anatomy" className="scroll-mt-28">
        <ResumeAnatomy />
      </section>

      {/* 11. TEMPLATE SCROLLER */}
      <div id="templates" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden scroll-mt-28">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-end mb-10 sm:mb-16">
                  <div className="max-w-xl">
                      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Choose from our <span className="text-[#0d9488]">70+ Professional Templates</span></h2>
                      <p className="text-slate-500 text-base sm:text-lg">Explore ATS-friendly, modern, executive, and creative layouts, then switch styles without ever needing to rebuild the resume itself.</p>
                  </div>
                  <div className="flex gap-2 self-start sm:self-auto">
                      <button onClick={() => scroll('left', scrollRef)} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"><ChevronLeft size={20}/></button>
                      <button onClick={() => scroll('right', scrollRef)} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"><ChevronRight size={20}/></button>
                  </div>
              </div>
              <div ref={scrollRef} className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {SCROLLER_TEMPLATES.map((tpl) => (
                      <div key={tpl.id} className="snap-center shrink-0 w-[260px] sm:w-[300px] group cursor-pointer" onClick={onViewTemplates}>
                          <div className="bg-white rounded-[2rem] shadow-sm border-[6px] border-white overflow-hidden relative aspect-[210/297] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                              <div className="absolute inset-0 transform scale-[0.4] origin-top-left w-[250%] h-[250%] pointer-events-none bg-slate-50">
                                  <ResumePreview data={PREVIEW_DATA} template={tpl.id} />
                              </div>
                              <div className="absolute inset-0 bg-[#0d9488]/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4 z-10">
                                  <span className="text-white font-bold text-lg uppercase tracking-widest">Use Template</span>
                                  <div className="bg-white text-[#0d9488] p-3 rounded-full shadow-lg"><ArrowRight /></div>
                              </div>
                          </div>
                          <h3 className="text-center mt-6 font-bold text-slate-700 uppercase tracking-widest text-xs group-hover:text-[#0d9488] transition-colors">{tpl.name}</h3>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* 12. AFTER UPLOAD ACTIONS */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-[linear-gradient(180deg,#f8fdfa_0%,#ffffff_72%)] px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="pointer-events-none absolute right-0 top-8 h-72 w-72 rounded-full bg-emerald-100/20 blur-[120px]" />
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-[960px]">
            <h2 className="text-3xl sm:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Complete your profile, <span className="text-[#0d9488]">command your career.</span></h2>
            <p className="text-slate-500 text-base sm:text-lg">Your workflow doesn't stop at data entry. Take advantage of our advanced editor suite to refine, tailor, and perfectly format your professional history.</p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {AFTER_UPLOAD_ACTIONS.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[1.7rem] border border-[#e3efeb] bg-white px-5 py-5 shadow-[0_10px_28px_rgba(80,149,136,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9e8e0] hover:shadow-[0_16px_38px_rgba(80,149,136,0.10)] lg:min-h-[190px]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[0.95rem] bg-[#f1fbf7] text-teal-600 shadow-[0_6px_16px_rgba(134,216,198,0.16)]">
                    <Icon size={20} strokeWidth={2.1} />
                  </div>
                  <h3 className="mt-5 text-[1.05rem] font-black leading-[1.3] tracking-[-0.03em] text-slate-900 sm:text-[1.1rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9rem] font-medium leading-7 text-slate-500">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. FEATURES GRID */}
      <div className="bg-slate-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-b border-slate-200">
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FeatureCard icon={Brain} title="AI-Powered Text" desc="Instantly generate impactful bullet points for your role using our advanced AI algorithms." />
                    <FeatureCard icon={Layout} title="ATS Optimized" desc="Templates meticulously designed to pass the Applicant Tracking Systems used by major companies." />
                    <FeatureCard icon={FileText} title="Real-time Preview" desc="See changes instantly as you edit. No more guessing how your final document will render." />
                    <FeatureCard icon={CheckCircle2} title="Pre-written Examples" desc="Access thousands of pre-written examples tailored for every job title and industry." />
                </div>
                <div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">Designed to get you <br/><span className="text-[#0d9488]">Hired Faster.</span></h2>
                    <p className="text-slate-500 mb-8 leading-relaxed text-base sm:text-lg">Most resumes never reach a human eye. Our platform ensures your resume is not only visually striking but technically optimized for the robots that read it first.</p>
                    <button onClick={onStart} className="theme-primary-button rounded-xl px-8 py-4 font-bold text-sm transition shadow-lg hover:-translate-y-0.5">Start Building Now</button>
                </div>
            </div>
         </div>
      </div>
      
      {/* 14. BEFORE YOU START */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(circle_at_bottom,rgba(148,226,212,0.16),transparent_72%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="max-w-[960px]">
              <h2 className="text-3xl sm:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Built with transparency <span className="text-[#0d9488]">and control.</span></h2>
              <p className="text-slate-500 text-base sm:text-lg">Everything you need to know about how CareerSense handles your data, processes your files, and utilizes AI generation.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PRODUCT_NOTES.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.8rem] border border-[#dbece7] bg-white px-6 py-6 shadow-[0_16px_40px_rgba(80,149,136,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bfe4db] hover:shadow-[0_24px_56px_rgba(80,149,136,0.12)]"
              >
                <div className="text-[0.78rem] font-black uppercase tracking-[0.24em] text-teal-700">
                  Platform Standard
                </div>
                <h3 className="mt-5 text-[1.35rem] font-black tracking-[-0.04em] text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-[0.98rem] font-medium leading-8 text-slate-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 15. GOOGLE REVIEWS SECTION */}
      <div className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden scroll-mt-28" id="reviews">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-6 sm:gap-8">
                  <div className="max-w-lg">
                    <div className="flex flex-wrap items-center gap-3 text-2xl font-black text-slate-900 mb-2">
                        <span>4.9</span>
                        <div className="flex text-yellow-500">
                            {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
                        </div>
                    </div>
                    <p className="text-base sm:text-lg text-slate-500">Based on <strong>1,250+ reviews</strong> from recently hired job seekers.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full md:w-auto">
                      <button className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-white text-slate-900 font-bold text-sm border-2 border-slate-200 hover:border-[#0d9488] hover:text-[#0d9488] transition-colors flex items-center justify-center gap-2">
                          Review us on Google
                      </button>
                      <div className="flex gap-2 self-start sm:self-auto">
                          <button onClick={() => scroll('left', reviewScrollRef)} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"><ChevronLeft size={20}/></button>
                          <button onClick={() => scroll('right', reviewScrollRef)} className="p-3 bg-white rounded-full shadow-md hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"><ChevronRight size={20}/></button>
                      </div>
                  </div>
              </div>
              <div ref={reviewScrollRef} className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {GOOGLE_REVIEWS.map((review, i) => (
                      <div key={i} className="snap-start shrink-0 w-[300px] sm:w-[350px] bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-4 mb-6">
                              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                                  <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                  <div className="font-bold text-slate-900 flex items-center gap-2">{review.name}</div>
                                  <div className="text-xs text-slate-500">{review.date}</div>
                              </div>
                          </div>
                          <div className="flex text-yellow-500 mb-4">
                              {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                          </div>
                          <p className="text-slate-700 text-sm leading-relaxed">"{review.text}"</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* 16. FAQ SECTION */}
      <div id="faq" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-28">
          <h2 className="text-3xl font-black text-slate-900 mb-10 sm:mb-12 text-center uppercase tracking-tight">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQ_DATA.map((faq, i) => (
                  <details key={i} className="group bg-white p-6 rounded-2xl border border-slate-200 open:border-teal-500 open:shadow-md transition-all shadow-sm cursor-pointer h-fit">
                      <summary className="font-bold text-slate-900 flex items-start justify-between list-none gap-4 outline-none">
                          <span className="text-sm leading-snug">{faq.q}</span>
                          <span className="transform group-open:rotate-180 transition-transform mt-1 text-teal-600">▼</span>
                      </summary>
                      <p className="text-slate-500 mt-4 leading-relaxed text-sm">{faq.a}</p>
                  </details>
              ))}
          </div>
      </div>

      {/* 17. FINAL CTA */}
      <div className="bg-teal-50 border-t border-teal-100 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">Ready to land your dream job?</h2>
              <button onClick={onStart} className="theme-primary-button mx-auto flex w-full sm:w-auto items-center justify-center gap-3 rounded-full px-8 sm:px-12 py-4 sm:py-6 font-black text-base sm:text-lg uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform">
                Create My Resume <ArrowRight size={20} />
              </button>
          </div>
      </div>

      {/* --- FOOTER --- */}
      <Footer onStart={onStart} onOpenPricing={onOpenPricing} />

    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-teal-200 transition-colors">
        <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-4"><Icon size={24} /></div>
        <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
);

export default ResumeBuilderLanding;