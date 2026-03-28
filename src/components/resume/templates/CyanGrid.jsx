// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, Zap, CheckCircle } from 'lucide-react';

// const CyanGrid = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans p-10 resume-preview-wrapper">
//       <header className="flex flex-wrap gap-10 items-center mb-12 bg-cyan-50 p-10 rounded-[3rem] border border-cyan-100 shrink-0 shadow-sm">
//         {personal.photo && <img src={personal.photo} className="w-32 h-32 rounded-[2rem] border-4 border-white shadow-md object-cover" alt="Profile"/>}
//         <div>
//             <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-2 break-words leading-none">{personal.name || "Your Name"}</h1>
//             <p className="text-xl font-bold text-[#0097A7] uppercase tracking-[0.2em] break-words leading-tight italic">{personal.title}</p>
//             <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-4 border-t border-cyan-100 pt-4">
//                 {personal.email && <span className="break-all flex items-center gap-2"><Mail size={12}/> {personal.email}</span>}
//                 {personal.phone && <span className="flex items-center gap-2"><Phone size={12}/> {personal.phone}</span>}
//                 {personal.location && <span className="break-words flex items-center gap-2"><MapPin size={12}/> {personal.location}</span>}
//                 {personal.linkedin && <span className="break-all flex items-center gap-2 text-cyan-600 font-black"><Linkedin size={12}/> Profile</span>}
//             </div>
//         </div>
//       </header>

//       <div className="grid grid-cols-12 gap-10">
//         <main className="col-span-8 space-y-12">
//             {personal.summary && (
//                 <section>
//                     <h3 className="text-xs font-black uppercase text-[#0097A7] tracking-[0.3em] mb-4 flex items-center gap-2 border-l-4 border-cyan-400 pl-4">Introduction</h3>
//                     <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-wrap break-words font-medium italic px-4">"{personal.summary}"</p>
//                 </section>
//             )}

//             <section>
//                 <h3 className="text-xs font-black uppercase text-[#0097A7] tracking-[0.3em] mb-10 border-b-2 border-cyan-50 pb-2">Experience Flow</h3>
//                 <div className="space-y-10">
//                     {experience.map((exp, i) => (
//                         <React.Fragment key={i}>
//                             {exp.pageBreak && <div className="manual-page-break" />}
//                             <div className="experience-item bg-slate-50/50 p-6 rounded-[2rem] border border-slate-100 shadow-sm group hover:border-cyan-100 transition-colors">
//                                 <div className="flex justify-between items-baseline mb-3">
//                                     <h4 className="font-black text-slate-800 text-sm break-words uppercase tracking-tight leading-tight">{exp.role}</h4>
//                                     <span className="text-[9px] font-black text-slate-300 uppercase shrink-0 ml-6 tracking-widest italic">{exp.date}</span>
//                                 </div>
//                                 <div className="text-[10px] font-black text-cyan-600 uppercase mb-4 tracking-widest break-words leading-none flex items-center gap-2">
//                                     <div className="w-4 h-px bg-cyan-600"></div> {exp.company}
//                                 </div>
//                                 <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic">{exp.desc}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </section>

//             {projects && projects.length > 0 && (
//                 <section>
//                     <h3 className="text-xs font-black uppercase text-[#0097A7] tracking-[0.3em] mb-8 border-l-4 border-cyan-400 pl-4">Portfolio</h3>
//                     <div className="grid grid-cols-2 gap-8">
//                         {projects.map((p, i) => (
//                             <React.Fragment key={i}>
//                                 {p.pageBreak && <div className="manual-page-break" />}
//                                 <div className="project-item">
//                                     <h4 className="font-bold text-xs text-slate-800 break-words uppercase mb-2 tracking-tighter italic flex items-center gap-2"><Zap size={14} className="text-cyan-500"/> {p.name}</h4>
//                                     <p className="text-[10px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words border-l border-cyan-50 pl-3">{p.desc}</p>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </section>
//             )}
//         </main>

//         <aside className="col-span-4 space-y-10">
//             <section className="bg-slate-900 text-white p-8 rounded-[3rem] shadow-xl">
//                 <h3 className="text-[10px] font-black uppercase text-cyan-400 mb-6 flex items-center gap-2 tracking-[0.2em]"><Cpu size={14}/> Core Stack</h3>
//                 <div className="flex flex-wrap gap-2">
//                     {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//                         <span key={i} className="px-3 py-1.5 bg-slate-800 text-[10px] font-bold rounded-xl border border-slate-700 break-words lowercase shadow-sm transition-all hover:border-cyan-400">{s}</span>
//                     ))}
//                 </div>
//             </section>

//             {education && education.length > 0 && (
//                 <section className="px-4 border-r-2 border-cyan-50 mr-4">
//                     <h3 className="text-[10px] font-black uppercase text-[#0097A7] mb-6 tracking-[0.2em]">Academics</h3>
//                     {education.map((edu, i) => (
//                         <React.Fragment key={i}>
//                             {edu.pageBreak && <div className="manual-page-break" />}
//                             <div className="mb-6 last:mb-0">
//                                 <div className="font-bold text-[11px] text-slate-800 break-words leading-tight uppercase mb-1 italic">{edu.degree}</div>
//                                 <div className="text-[10px] font-bold text-slate-400 break-words uppercase tracking-tighter leading-tight">{edu.school}</div>
//                                 <div className="text-[9px] font-black text-cyan-600 mt-1 uppercase tracking-widest">{edu.date}</div>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </section>
//             )}

//             {certifications && certifications.length > 0 && (
//                 <section className="bg-cyan-50/50 p-6 rounded-[2rem] border border-cyan-100">
//                     <h3 className="text-[10px] font-black uppercase text-[#0097A7] mb-6 flex items-center gap-2"><CheckCircle size={14}/> Credentials</h3>
//                     {certifications.map((c, i) => (
//                         <div key={i} className="mb-4 last:mb-0 project-item">
//                             <div className="font-bold text-[10px] text-slate-800 break-words leading-tight mb-1 uppercase tracking-tighter">• {c.name}</div>
//                             <p className="text-[9px] text-slate-400 italic break-words">{c.issuer}</p>
//                         </div>
//                     ))}
//                 </section>
//             )}

//             {languages && languages.length > 0 && (
//                 <section className="px-4">
//                     <h3 className="text-[10px] font-black uppercase text-slate-300 mb-4 tracking-[0.2em]">Languages</h3>
//                     {languages.map((l, i) => <div key={i} className="text-[10px] font-bold text-slate-600 mb-1 uppercase italic tracking-tighter">{l.name} — <span className="text-cyan-500">{l.level}</span></div>)}
//                 </section>
//             )}
//         </aside>
//       </div>

//       <footer className="mt-12 pt-10 border-t-4 border-cyan-50 grid grid-cols-3 gap-10 uppercase text-[9px] font-black tracking-[0.3em] text-slate-300">
//             {awards && awards.length > 0 && <div>{awards.map((a, i) => <p key={i} className="mb-1 break-words text-cyan-600">🏆 {a.name}</p>)}</div>}
//             {volunteering && volunteering.length > 0 && <div className="text-right col-span-2 flex flex-wrap justify-end gap-6">{volunteering.slice(0, 3).map((v, i) => <p key={i} className="mb-1 break-words italic font-bold"> {v.role} @ {v.org}</p>)}</div>}
//       </footer>
//     </div>
//   );
// };

// export default CyanGrid;


import React from 'react';

const CyanGrid = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    languages = [],
    certifications = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="p-8 bg-slate-900 min-h-[1100px] font-sans text-slate-300">
      
      {/* HEADER */}
      <header className="bg-slate-800 p-8 border-l-4 border-cyan-400 mb-8 flex justify-between items-center">
          <div>
              <h1 className="text-4xl font-bold text-white uppercase tracking-wider mb-2">{personal.name}</h1>
              <p className="text-cyan-400 text-lg">{personal.title}</p>
          </div>
          <div className="text-right text-xs font-mono space-y-1 text-slate-400">
              {personal.email && <div>{personal.email}</div>}
              {personal.phone && <div>{personal.phone}</div>}
              {personal.linkedin && <div className="text-cyan-600">{personal.linkedin}</div>}
          </div>
      </header>

      <div className="grid grid-cols-3 gap-8">
          
          {/* MAIN COLUMN */}
          <div className="col-span-2 space-y-8">
              {personal.summary && (
                  <section className="bg-slate-800 p-6 rounded border border-slate-700">
                      <h3 className="text-cyan-400 font-bold uppercase text-xs mb-3">About</h3>
                      <p className="text-sm leading-relaxed">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section className="bg-slate-800 p-6 rounded border border-slate-700">
                      <h3 className="text-cyan-400 font-bold uppercase text-xs mb-6">Work History</h3>
                      <div className="space-y-8">
                          {experience.map(exp => (
                              <div key={exp.id}>
                                  <div className="flex justify-between mb-1">
                                      <h4 className="font-bold text-white text-lg">{exp.role}</h4>
                                      <span className="text-xs font-mono text-slate-500">{exp.date}</span>
                                  </div>
                                  <div className="text-sm text-cyan-600 mb-2">{exp.company}</div>
                                  <p className="text-sm leading-relaxed">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8">
              {personal.photo && (
                  <div className="bg-slate-800 p-2 rounded border border-slate-700">
                      <img src={personal.photo} alt="Profile" className="w-full h-auto rounded grayscale" />
                  </div>
              )}

              <section className="bg-slate-800 p-6 rounded border border-slate-700">
                  <h3 className="text-cyan-400 font-bold uppercase text-xs mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="text-xs bg-slate-900 border border-slate-700 px-2 py-1 rounded text-cyan-200">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section className="bg-slate-800 p-6 rounded border border-slate-700">
                      <h3 className="text-cyan-400 font-bold uppercase text-xs mb-4">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-white text-sm">{edu.school}</div>
                                  <div className="text-xs text-slate-500">{edu.degree}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
              
              {(certifications.length > 0 || languages.length > 0) && (
                  <section className="bg-slate-800 p-6 rounded border border-slate-700">
                      <h3 className="text-cyan-400 font-bold uppercase text-xs mb-4">Misc</h3>
                      <ul className="text-xs space-y-2">
                          {certifications.map(c => <li key={c.id}>• {c.name}</li>)}
                          {languages.map(l => <li key={l.id}>• {l.name}</li>)}
                      </ul>
                  </section>
              )}
          </div>

      </div>
    </div>
  );
};

export default CyanGrid;