// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Award, Star, Cpu, Globe, Layers, Heart, CheckCircle } from 'lucide-react';

// const MintFresh = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full bg-[#F5FFFA] min-h-[1100px] shadow-2xl font-sans p-16 flex flex-col items-center resume-preview-wrapper">
//       <header className="text-center mb-20 max-w-4xl w-full border-b-[8px] border-[#2D5A43] pb-16 relative shadow-mint-50">
//         <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#2D5A43]/5 rounded-full blur-2xl"></div>
//         <h1 className="text-7xl font-black text-slate-900 tracking-tighter mb-4 lowercase break-words leading-none italic">{personal.name || "Your Name"}.</h1>
//         <p className="text-2xl font-bold text-[#2D5A43] uppercase tracking-[0.5em] mb-12 break-words leading-tight opacity-40 italic">{personal.title}</p>
        
//         <div className="flex justify-center flex-wrap gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-12">
//             {personal.email && <div className="flex items-center gap-3 break-all border-b border-[#2D5A43]/10 pb-1 shadow-sm"><Mail size={14} className="text-[#2D5A43]"/> {personal.email}</div>}
//             {personal.phone && <div className="flex items-center gap-3 border-b border-[#2D5A43]/10 pb-1 shadow-sm"><Phone size={14} className="text-[#2D5A43]"/> {personal.phone}</div>}
//             {personal.location && <div className="flex items-center gap-3 border-b border-[#2D5A43]/10 pb-1 shadow-sm opacity-50"><MapPin size={14}/> {personal.location}</div>}
//             {personal.linkedin && <div className="flex items-center gap-3 break-all font-black text-[#2D5A43] tracking-tighter"><Linkedin size={14}/> Connect</div>}
//         </div>

//         {personal.summary && (
//             <div className="pt-12 bg-white/50 p-10 rounded-[4rem] border-2 border-white shadow-xl">
//                 <p className="text-base leading-relaxed text-slate-500 italic whitespace-pre-wrap break-words px-16 italic font-medium italic">"{personal.summary}"</p>
//             </div>
//         )}
//       </header>

//       <div className="w-full max-w-5xl space-y-24">
//         <section>
//             <h3 className="text-center text-[12px] font-black uppercase text-[#2D5A43] tracking-[0.8em] mb-16 opacity-30 italic leading-none">Career Roadmap</h3>
//             <div className="space-y-20">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item text-center group">
//                             <h4 className="font-black text-slate-800 text-3xl mb-3 uppercase tracking-tighter break-words leading-none group-hover:scale-105 transition-transform duration-500">{exp.role}</h4>
//                             <div className="text-[12px] font-black text-[#2D5A43] uppercase mb-10 tracking-[0.4em] break-words italic flex items-center justify-center gap-6 opacity-60 italic"><div className="w-12 h-px bg-[#2D5A43]/20"></div> {exp.company} // {exp.date} <div className="w-12 h-px bg-[#2D5A43]/20"></div></div>
//                             <p className="text-[15px] text-slate-500 leading-relaxed max-w-3xl mx-auto whitespace-pre-wrap break-words italic font-medium italic border-x-4 border-[#2D5A43]/5 px-10">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         <section>
//             <h3 className="text-center text-[12px] font-black uppercase text-[#2D5A43] tracking-[0.8em] mb-16 opacity-30 italic">Mastery</h3>
//             <div className="flex flex-wrap justify-center gap-y-6 gap-x-12 text-[14px] font-bold text-slate-700 uppercase tracking-[0.3em] px-16">
//                 {[...skills.core, ...skills.technical, ...skills.soft].map((s, i) => (
//                     <span key={i} className="break-words border-b-4 border-transparent hover:border-[#2D5A43] transition-all pb-2 cursor-default italic shadow-mint-100">{s}</span>
//                 ))}
//             </div>
//         </section>

//         <div className="grid grid-cols-2 gap-24">
//             {education.length > 0 && (
//                 <section>
//                     <h3 className="text-[11px] font-black uppercase text-[#2D5A43] tracking-[0.5em] mb-12 border-b-4 border-[#2D5A43]/10 pb-6 flex items-center gap-4 italic"><GraduationCap size={20}/> Academic Base</h3>
//                     {education.map((edu, i) => (
//                         <React.Fragment key={i}>
//                             {edu.pageBreak && <div className="manual-page-break" />}
//                             <div className="mb-12 last:mb-0 border-r-4 border-[#2D5A43]/5 pr-10 text-right group">
//                                 <div className="font-black text-slate-800 text-lg mb-2 break-words uppercase tracking-tighter leading-tight italic group-hover:text-[#2D5A43] transition-colors shadow-sm">{edu.degree}</div>
//                                 <div className="text-[12px] font-bold text-slate-400 uppercase break-words leading-tight tracking-widest">{edu.school}</div>
//                                 <div className="text-[11px] font-black text-[#2D5A43] mt-3 uppercase tracking-[0.3em] opacity-40">{edu.date}</div>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </section>
//             )}

//             {projects.length > 0 && (
//                 <section>
//                     <h3 className="text-[11px] font-black uppercase text-[#2D5A43] tracking-[0.5em] mb-12 border-b-4 border-[#2D5A43]/10 pb-6 flex items-center gap-4 italic"><Layers size={20}/> creations</h3>
//                     {projects.map((p, i) => (
//                         <React.Fragment key={i}>
//                             {p.pageBreak && <div className="manual-page-break" />}
//                             <div className="mb-12 last:mb-0 bg-white p-8 rounded-[3.5rem] border-2 border-[#2D5A43]/5 shadow-xl shadow-mint-50 hover:shadow-[#2D5A43]/10 transition-shadow">
//                                 <div className="font-black text-slate-800 text-base mb-3 break-words uppercase tracking-tighter leading-none italic border-l-4 border-[#2D5A43] pl-6">{p.name}</div>
//                                 <p className="text-[12px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic font-medium px-6">{p.desc}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </section>
//             )}
//         </div>

//         <footer className="pt-20 border-t-8 border-[#2D5A43] border-opacity-5 grid grid-cols-3 gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 pb-16">
//             {awards.length > 0 && (
//                 <div>
//                     <div className="text-[#2D5A43] mb-8 opacity-30 tracking-[0.6em] italic">Honors</div>
//                     {awards.map((a, i) => <div key={i} className="mb-4 break-words leading-tight font-black text-slate-800 tracking-tighter uppercase border-b border-[#2D5A43]/10 pb-2 italic">🏆 {a.name}</div>)}
//                 </div>
//             )}
//             {certifications.length > 0 && (
//                 <div className="text-center">
//                     <div className="text-[#2D5A43] mb-8 opacity-30 tracking-[0.6em] italic">Badges</div>
//                     {certifications.map((c, i) => <div key={i} className="mb-3 break-words leading-tight italic font-bold text-slate-500 uppercase tracking-widest">• {c.name}</div>)}
//                 </div>
//             )}
//             {languages.length > 0 && (
//                 <div className="text-right">
//                     <div className="text-[#2D5A43] mb-8 opacity-30 tracking-[0.6em] italic">Tongues</div>
//                     {languages.map((l, i) => <div key={i} className="mb-2 break-words text-slate-800 font-black tracking-widest underline decoration-[#2D5A43]/20 decoration-4">{l.name} // {l.level}</div>)}
//                 </div>
//             )}
//             {volunteering.length > 0 && (
//                 <div className="col-span-3 pt-12 border-t border-white flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
//                     {volunteering.map((v, i) => <div key={i} className="text-[11px] font-black italic">{v.role} @ {v.org}</div>)}
//                 </div>
//             )}
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default MintFresh;

import React from 'react';

const MintFresh = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    awards = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="font-sans text-slate-700 bg-white min-h-[1100px]">
      
      {/* HEADER */}
      <header className="bg-teal-50 p-12 pb-16 flex items-center gap-8 border-b border-teal-100">
         {personal.photo && (
             <img src={personal.photo} alt="Profile" className="w-28 h-28 rounded-2xl object-cover shadow-sm" />
         )}
         <div>
             <h1 className="text-4xl font-black text-teal-800 tracking-tight mb-2">{personal.name}</h1>
             <p className="text-lg text-teal-600 font-medium mb-4">{personal.title}</p>
             <div className="flex gap-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                 {personal.phone && <span>{personal.phone}</span>}
                 {personal.email && <span>{personal.email}</span>}
                 {personal.location && <span>{personal.location}</span>}
             </div>
         </div>
      </header>

      <div className="px-12 -mt-8 grid grid-cols-12 gap-10 relative z-10">
          
          {/* LEFT CONTENT */}
          <div className="col-span-8 space-y-12 bg-white pt-8">
              
              {personal.summary && (
                  <section>
                      <h3 className="text-teal-500 font-bold uppercase tracking-widest text-xs mb-4">About</h3>
                      <p className="text-slate-600 leading-7">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="text-teal-500 font-bold uppercase tracking-widest text-xs mb-6">Experience</h3>
                      <div className="space-y-8 border-l-2 border-teal-100 pl-6">
                          {experience.map(exp => (
                              <div key={exp.id} className="relative">
                                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white border-2 border-teal-400 rounded-full"></div>
                                  <h4 className="font-bold text-xl text-slate-800">{exp.role}</h4>
                                  <div className="text-sm font-medium text-teal-600 mb-2">{exp.company} | {exp.date}</div>
                                  <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {projects.length > 0 && (
                  <section>
                      <h3 className="text-teal-500 font-bold uppercase tracking-widest text-xs mb-6">Key Projects</h3>
                      <div className="grid grid-cols-2 gap-4">
                          {projects.map(p => (
                              <div key={p.id} className="bg-teal-50/50 p-4 rounded-xl">
                                  <h4 className="font-bold text-slate-800 text-sm">{p.name}</h4>
                                  <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-4 space-y-10 pt-8">
              
              <section>
                  <h3 className="text-teal-500 font-bold uppercase tracking-widest text-xs mb-4">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full shadow-sm">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="text-teal-500 font-bold uppercase tracking-widest text-xs mb-4">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id} className="bg-slate-50 p-4 rounded-lg">
                                  <div className="font-bold text-slate-800 text-sm">{edu.school}</div>
                                  <div className="text-xs text-teal-600 font-medium">{edu.degree}</div>
                                  <div className="text-[10px] text-slate-400 mt-1">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {awards.length > 0 && (
                  <section>
                      <h3 className="text-teal-500 font-bold uppercase tracking-widest text-xs mb-4">Awards</h3>
                      <ul className="space-y-2">
                          {awards.map(a => (
                              <li key={a.id} className="text-sm text-slate-600 flex items-start gap-2">
                                  <span className="text-teal-400 mt-0.5">★</span> 
                                  <span>{a.name}</span>
                              </li>
                          ))}
                      </ul>
                  </section>
              )}

          </div>

      </div>
    </div>
  );
};

export default MintFresh;