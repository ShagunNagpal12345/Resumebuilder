// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const MarineClean = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans flex flex-col">
//       {/* HEADER */}
//       <header className="bg-[#0097A7] p-10 text-white flex justify-between items-center shrink-0">
//         <div>
//           <h1 className="text-4xl font-black uppercase tracking-tight break-words leading-none mb-1">{personal.name}</h1>
//           <p className="text-lg font-bold opacity-80 uppercase tracking-widest break-words leading-tight">{personal.title}</p>
//         </div>
//         <div className="text-[10px] font-bold text-right space-y-1 uppercase tracking-widest shrink-0 ml-10">
//           {personal.email && <div className="flex items-center justify-end gap-2 break-all">{personal.email} <Mail size={12}/></div>}
//           {personal.phone && <div className="flex items-center justify-end gap-2">{personal.phone} <Phone size={12}/></div>}
//           {personal.location && <div className="flex items-center justify-end gap-2 break-words">{personal.location} <MapPin size={12}/></div>}
//           {personal.linkedin && <div className="flex items-center justify-end gap-2 break-all">{personal.linkedin} <Linkedin size={12}/></div>}
//         </div>
//       </header>

//       <div className="flex-1 p-10 grid grid-cols-12 gap-10">
//         {/* LEFT COLUMN */}
//         <main className="col-span-8 space-y-10">
//           {personal.summary && (
//             <section>
//               <h3 className="text-xs font-black uppercase text-[#0097A7] border-l-4 border-[#0097A7] pl-3 mb-4 tracking-widest uppercase">Professional Abstract</h3>
//               <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap break-words text-justify">{personal.summary}</p>
//             </section>
//           )}

//           <section>
//             <h3 className="text-xs font-black uppercase text-[#0097A7] border-l-4 border-[#0097A7] pl-3 mb-8 tracking-widest uppercase">Experience History</h3>
//             <div className="space-y-10">
//               {experience.map((exp, i) => (
//                 <React.Fragment key={i}>
//                   {exp.pageBreak && <div className="manual-page-break" />}
//                   <div className="experience-item">
//                     <div className="flex justify-between font-bold text-slate-900 text-sm mb-1 uppercase tracking-tight">
//                       <h4 className="break-words">{exp.role}</h4>
//                       <span className="shrink-0 ml-4 font-black text-slate-400 text-[10px]">{exp.date}</span>
//                     </div>
//                     <p className="text-[10px] font-black text-[#0097A7] uppercase mb-4 break-words">{exp.company}</p>
//                     <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic">{exp.desc}</p>
//                   </div>
//                 </React.Fragment>
//               ))}
//             </div>
//           </section>

//           {projects.length > 0 && (
//             <section>
//               <h3 className="text-xs font-black uppercase text-[#0097A7] border-l-4 border-[#0097A7] pl-3 mb-6 tracking-widest uppercase">Key Initiatives</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 {projects.map((p, i) => (
//                   <React.Fragment key={i}>
//                     {p.pageBreak && <div className="manual-page-break" />}
//                     <div className="project-item">
//                       <h4 className="font-bold text-xs text-slate-800 break-words mb-1 uppercase">{p.name}</h4>
//                       <p className="text-[10px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words">{p.desc}</p>
//                     </div>
//                   </React.Fragment>
//                 ))}
//               </div>
//             </section>
//           )}
//         </main>

//         {/* RIGHT COLUMN */}
//         <aside className="col-span-4 space-y-10">
//           <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
//             <h3 className="text-xs font-black uppercase text-[#0097A7] mb-6 flex items-center gap-2"><Cpu size={14}/> Technical Skills</h3>
//             <div className="flex flex-wrap gap-2">
//               {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//                 <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-600 break-words uppercase tracking-tighter">
//                   <CheckCircle size={10} className="text-[#0097A7] shrink-0" /> {s}
//                 </div>
//               ))}
//             </div>
//           </section>

//           {education.length > 0 && (
//             <section>
//               <h3 className="text-xs font-black uppercase text-[#0097A7] mb-6">Learning Path</h3>
//               {education.map((edu, i) => (
//                 <React.Fragment key={i}>
//                   {edu.pageBreak && <div className="manual-page-break" />}
//                   <div className="education-item mb-4">
//                     <div className="font-bold text-[11px] text-slate-800 leading-tight break-words uppercase">{edu.degree}</div>
//                     <div className="text-[10px] text-slate-500 mt-1 break-words leading-tight">{edu.school} | {edu.date}</div>
//                   </div>
//                 </React.Fragment>
//               ))}
//             </section>
//           )}

//           {certifications.length > 0 && (
//             <section>
//               <h3 className="text-xs font-black uppercase text-[#0097A7] mb-6">Credentials</h3>
//               {certifications.map((c, i) => (
//                 <div key={i} className="mb-3 text-[10px] font-bold">
//                   <div className="text-slate-800 break-words leading-tight uppercase">{c.name}</div>
//                   <div className="text-[#0097A7] break-words uppercase text-[9px]">{c.issuer}</div>
//                 </div>
//               ))}
//             </section>
//           )}

//           {volunteering.length > 0 && (
//             <section>
//               <h3 className="text-xs font-black uppercase text-[#0097A7] mb-4">Public Service</h3>
//               {volunteering.map((v, i) => (
//                 <div key={i} className="mb-3 text-[10px] break-words">
//                   <div className="font-bold text-slate-700 leading-tight uppercase">{v.role}</div>
//                   <div className="text-slate-400 italic font-bold">{v.org} | {v.date}</div>
//                 </div>
//               ))}
//             </section>
//           )}
//         </aside>
//       </div>

//       <footer className="bg-slate-50 p-6 border-t border-slate-100 grid grid-cols-2 gap-10">
//         {awards.length > 0 && (
//           <div>
//             <h4 className="text-[10px] font-black uppercase text-slate-300 mb-3 tracking-[0.3em]">Honors</h4>
//             {awards.map((a, i) => <div key={i} className="text-[10px] font-bold text-slate-500 break-words mb-1">🏆 {a.name}</div>)}
//           </div>
//         )}
//         {languages.length > 0 && (
//           <div className="text-right">
//             <h4 className="text-[10px] font-black uppercase text-slate-300 mb-3 tracking-[0.3em]">Languages</h4>
//             {languages.map((l, i) => <div key={i} className="text-[10px] font-bold text-slate-500 break-words mb-1">{l.name} — {l.level}</div>)}
//           </div>
//         )}
//       </footer>
//     </div>
//   );
// };

// export default MarineClean;

import React from 'react';

const MarineClean = ({ data }) => {
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
    <div className="font-sans text-slate-600 bg-white min-h-[1100px] p-12 border-t-[20px] border-cyan-500">
      
      {/* HEADER */}
      <header className="flex justify-between items-end border-b border-slate-100 pb-8 mb-10">
          <div>
              <h1 className="text-5xl font-light text-slate-900 mb-2 tracking-tight">{personal.name}</h1>
              <p className="text-xl text-cyan-600 font-medium uppercase tracking-widest">{personal.title}</p>
          </div>
          <div className="text-right text-sm font-medium text-slate-400 space-y-1">
              {personal.email && <div>{personal.email}</div>}
              {personal.phone && <div>{personal.phone}</div>}
              {personal.location && <div>{personal.location}</div>}
          </div>
      </header>

      <div className="grid grid-cols-12 gap-12">
          
          {/* LEFT COL */}
          <div className="col-span-8 space-y-12">
              {personal.summary && (
                  <section>
                      <h3 className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-4">Profile</h3>
                      <p className="leading-7">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-8">Work Experience</h3>
                      <div className="space-y-10">
                          {experience.map(exp => (
                              <div key={exp.id}>
                                  <div className="flex justify-between items-baseline mb-1">
                                      <h4 className="text-xl font-bold text-slate-800">{exp.role}</h4>
                                      <span className="text-sm font-mono text-slate-400">{exp.date}</span>
                                  </div>
                                  <div className="text-sm font-bold text-cyan-500 mb-3">{exp.company}</div>
                                  <p className="text-sm leading-relaxed whitespace-pre-line">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

               {projects.length > 0 && (
                  <section>
                      <h3 className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-6">Key Projects</h3>
                      <div className="grid grid-cols-2 gap-6">
                          {projects.map(p => (
                              <div key={p.id}>
                                  <h4 className="font-bold text-slate-800 text-sm">{p.name}</h4>
                                  <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* RIGHT COL */}
          <div className="col-span-4 space-y-10">
              {personal.photo && (
                  <img src={personal.photo} alt="Profile" className="w-32 h-32 rounded-full object-cover mb-4 grayscale hover:grayscale-0 transition-all" />
              )}

              <section>
                  <h3 className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="text-sm font-medium border-b border-cyan-100 pb-0.5">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-4">Education</h3>
                      <div className="space-y-6">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-slate-800">{edu.school}</div>
                                  <div className="text-sm text-cyan-500">{edu.degree}</div>
                                  <div className="text-xs text-slate-400 mt-1">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {awards.length > 0 && (
                  <section>
                      <h3 className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-4">Awards</h3>
                      <ul className="space-y-2 text-sm">
                          {awards.map(a => <li key={a.id}>★ {a.name}</li>)}
                      </ul>
                  </section>
              )}
          </div>

      </div>
    </div>
  );
};

export default MarineClean;