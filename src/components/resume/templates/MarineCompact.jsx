// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const MarineCompact = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionHeader = ({ title }) => (
//     <h3 className="text-xs font-black uppercase text-[#0097A7] border-l-[8px] border-[#0097A7] pl-6 mb-10 tracking-[0.5em] leading-none italic shadow-sm">
//         {title}
//     </h3>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans flex flex-col resume-preview-wrapper">
//       <header className="bg-[#0097A7] p-12 text-white flex justify-between items-center shrink-0 border-b-[16px] border-[#006064] shadow-2xl relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
//         <div>
//           <h1 className="text-6xl font-black uppercase tracking-tighter break-words leading-none mb-2 drop-shadow-xl">{personal.name || "Your Name"}</h1>
//           <p className="text-2xl font-bold opacity-70 uppercase tracking-[0.4em] break-words italic leading-none">{personal.title}</p>
//         </div>
//         <div className="text-[11px] font-black text-right space-y-2 uppercase tracking-[0.3em] shrink-0 ml-12 italic">
//           {personal.email && <div className="break-all border-b border-white/30 pb-1">{personal.email}</div>}
//           {personal.phone && <div className="border-b border-white/30 pb-1">{personal.phone}</div>}
//           {personal.location && <div className="opacity-50">{personal.location}</div>}
//         </div>
//       </header>

//       <div className="flex-1 p-16 space-y-20">
//         {personal.summary && (
//             <section className="max-w-5xl mx-auto border-b-2 border-slate-50 pb-16">
//                 <p className="text-base text-slate-500 leading-relaxed whitespace-pre-wrap break-words text-justify italic font-medium px-16 border-l-8 border-[#0097A7]/20">"{personal.summary}"</p>
//             </section>
//         )}

//         <section>
//             <SectionHeader title="Professional Ledger" />
//             <div className="space-y-16">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item group">
//                             <div className="flex justify-between font-black text-slate-900 text-2xl mb-2 uppercase tracking-tighter group-hover:text-[#0097A7] transition-colors leading-none">
//                                 <h4 className="break-words">{exp.role}</h4>
//                                 <span className="shrink-0 ml-10 text-[11px] font-black text-slate-300 italic tracking-[0.3em]">{exp.date}</span>
//                             </div>
//                             <p className="text-[13px] font-black text-[#0097A7] uppercase mb-6 tracking-[0.4em] break-words leading-none border-l-4 border-orange-500 pl-4 shadow-teal-50 italic">{exp.company}</p>
//                             <p className="text-[15px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         <div className="grid grid-cols-12 gap-16">
//             <div className="col-span-8 space-y-16">
//                 {projects.length > 0 && (
//                     <section>
//                         <h3 className="text-[11px] font-black uppercase text-slate-300 mb-10 tracking-[0.6em] border-l-4 border-slate-100 pl-6">Signature Projects</h3>
//                         <div className="space-y-12">
//                             {projects.map((p, i) => (
//                                 <React.Fragment key={i}>
//                                     {p.pageBreak && <div className="manual-page-break" />}
//                                     <div className="project-item border-l-2 border-[#0097A7]/20 pl-8 group hover:border-[#0097A7] transition-all">
//                                         <h4 className="font-black text-lg text-[#0097A7] break-words uppercase mb-3 tracking-tighter italic leading-none">{p.name}</h4>
//                                         <p className="text-[14px] text-slate-400 leading-relaxed whitespace-pre-wrap break-words italic">{p.desc}</p>
//                                     </div>
//                                 </React.Fragment>
//                             ))}
//                         </div>
//                     </section>
//                 )}

//                 {volunteering.length > 0 && (
//                     <section>
//                         <h3 className="text-[11px] font-black uppercase text-slate-300 mb-8 tracking-[0.6em]">Impact</h3>
//                         <div className="grid grid-cols-2 gap-10">
//                             {volunteering.map((v, i) => (
//                                 <div key={i} className="mb-6 last:mb-0 border-b border-slate-50 pb-6 italic">
//                                     <div className="font-black text-[13px] text-slate-800 break-words leading-tight uppercase mb-2 italic tracking-tighter shadow-sm">{v.role}</div>
//                                     <div className="text-[11px] font-black text-[#0097A7] break-words uppercase tracking-[0.2em]">{v.org} | {v.date}</div>
//                                     <p className="text-[11px] text-slate-400 mt-4 whitespace-pre-wrap break-words italic">{v.desc}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 )}
//             </div>

//             <aside className="col-span-4 space-y-16">
//                 <section>
//                     <h3 className="text-[12px] font-black uppercase text-slate-300 mb-10 tracking-[0.6em] italic">Expertise</h3>
//                     <div className="flex flex-wrap gap-2">
//                         {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//                             <span key={i} className="px-3 py-2 bg-slate-50 text-[#006064] text-[10px] font-black uppercase rounded-xl break-words border-2 border-slate-100 shadow-sm transition-transform hover:scale-110">{s}</span>
//                         ))}
//                     </div>
//                 </section>

//                 {education.length > 0 && (
//                     <section>
//                         <h3 className="text-[12px] font-black uppercase text-slate-300 mb-10 tracking-[0.6em] italic">Learning</h3>
//                         {education.map((edu, i) => (
//                             <div key={i} className="mb-10 last:mb-0 border-r-4 border-slate-50 pr-6 text-right">
//                                 <div className="font-black text-[15px] text-slate-800 break-words leading-tight uppercase mb-2 tracking-tighter shadow-teal-50 italic">{edu.degree}</div>
//                                 <div className="text-[11px] font-black text-[#0097A7] break-words leading-tight italic">{edu.school}</div>
//                                 <div className="text-[10px] text-slate-400 mt-3 uppercase font-black tracking-widest">{edu.date}</div>
//                             </div>
//                         ))}
//                     </section>
//                 )}

//                 {languages.length > 0 && (
//                     <section>
//                         <h3 className="text-[12px] font-black uppercase text-slate-300 mb-8 border-b-4 border-slate-50 pb-2 italic">Tongues</h3>
//                         {languages.map((l, i) => (
//                             <div key={i} className="flex justify-between text-[11px] font-black uppercase mb-4 text-slate-600 border-b border-slate-50 pb-2 italic group hover:text-[#0097A7] transition-all cursor-default">
//                                 <span className="break-words">{l.name}</span> <span className="text-slate-300 shrink-0 ml-6 tracking-[0.3em] opacity-40">{l.level}</span>
//                             </div>
//                         ))}
//                     </section>
//                 )}
//             </aside>
//         </div>

//         <footer className="pt-20 border-t-[16px] border-slate-50 grid grid-cols-2 gap-20 pb-12 uppercase text-[11px] font-black tracking-[0.8em] text-slate-300 text-center italic">
//             {awards.length > 0 && <div className="col-span-2 border-b border-slate-50 pb-10 flex flex-wrap justify-center gap-12">{awards.map((a, i) => <span key={i} className="text-[#0097A7] shadow-teal-50 drop-shadow-sm">🏆 {a.name}</span>)}</div>}
//             <div className="col-span-2 pt-6 opacity-30">Executive Career Record — {personal.name} — Confidential</div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default MarineCompact;

import React from 'react';

const MarineCompact = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    languages = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="p-8 font-sans text-slate-800 bg-white min-h-[1100px] text-sm">
      
      {/* HEADER */}
      <header className="border-b-2 border-teal-600 pb-4 mb-6 flex items-end justify-between">
          <div>
              <h1 className="text-3xl font-bold uppercase text-slate-900 leading-none">{personal.name}</h1>
              <p className="text-teal-700 font-bold mt-1">{personal.title}</p>
          </div>
          <div className="text-right text-xs font-medium text-slate-500">
              <div>{personal.email}</div>
              <div>{personal.phone}</div>
              <div>{personal.location}</div>
          </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
          
          {/* LEFT: MAIN */}
          <div className="col-span-8 space-y-6">
              {personal.summary && (
                  <section>
                      <h3 className="font-bold text-teal-700 uppercase text-xs mb-2 border-b border-slate-200 pb-1">Professional Summary</h3>
                      <p className="text-xs leading-5 text-slate-700">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="font-bold text-teal-700 uppercase text-xs mb-4 border-b border-slate-200 pb-1">Experience</h3>
                      <div className="space-y-4">
                          {experience.map(exp => (
                              <div key={exp.id}>
                                  <div className="flex justify-between items-baseline">
                                      <h4 className="font-bold text-sm text-slate-900">{exp.role}</h4>
                                      <span className="text-xs font-bold text-slate-400">{exp.date}</span>
                                  </div>
                                  <div className="text-xs font-bold text-teal-600 mb-1">{exp.company}</div>
                                  <p className="text-xs text-slate-600 leading-snug whitespace-pre-line">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {projects.length > 0 && (
                  <section>
                      <h3 className="font-bold text-teal-700 uppercase text-xs mb-3 border-b border-slate-200 pb-1">Projects</h3>
                      <div className="grid grid-cols-2 gap-3">
                          {projects.map(p => (
                              <div key={p.id} className="bg-slate-50 p-2 border border-slate-100 rounded">
                                  <div className="font-bold text-xs">{p.name}</div>
                                  <div className="text-[10px] text-slate-500 mt-1">{p.desc}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* RIGHT: SIDEBAR */}
          <div className="col-span-4 space-y-6">
              {personal.photo && (
                  <img src={personal.photo} alt="Profile" className="w-24 h-24 object-cover border border-slate-200 p-1" />
              )}

              <section>
                  <h3 className="font-bold text-teal-700 uppercase text-xs mb-2 border-b border-slate-200 pb-1">Skills</h3>
                  <div className="flex flex-wrap gap-1">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="px-2 py-0.5 bg-teal-50 text-teal-800 text-[10px] font-bold rounded border border-teal-100">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="font-bold text-teal-700 uppercase text-xs mb-2 border-b border-slate-200 pb-1">Education</h3>
                      <div className="space-y-2">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-xs text-slate-900">{edu.school}</div>
                                  <div className="text-[10px] text-slate-500">{edu.degree}</div>
                                  <div className="text-[10px] text-slate-400">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {languages.length > 0 && (
                  <section>
                      <h3 className="font-bold text-teal-700 uppercase text-xs mb-2 border-b border-slate-200 pb-1">Languages</h3>
                      <ul className="text-xs space-y-1">
                          {languages.map(l => <li key={l.id}>• {l.name}</li>)}
                      </ul>
                  </section>
              )}
          </div>

      </div>
    </div>
  );
};

export default MarineCompact;