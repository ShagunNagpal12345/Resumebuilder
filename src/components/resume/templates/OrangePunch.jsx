// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Award, Star, Zap, Globe, Heart, Layers, Cpu, CheckCircle, User } from 'lucide-react';

// const OrangePunch = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full h-full bg-[#FFFBF0] text-slate-800 shadow-2xl min-h-[1100px] font-sans flex overflow-hidden resume-preview-wrapper">
//       {/* ICON BAR */}
//       <div className="w-24 bg-[#F57C00] flex flex-col items-center py-12 gap-12 text-white shrink-0 shadow-2xl">
//         <div className="bg-white/20 p-4 rounded-3xl"><User size={28} strokeWidth={3}/></div>
//         <div className="bg-white/10 p-4 rounded-3xl"><Briefcase size={28}/></div>
//         <div className="bg-white/10 p-4 rounded-3xl"><Cpu size={28}/></div>
//         <div className="bg-white/10 p-4 rounded-3xl"><GraduationCap size={28}/></div>
//         <div className="bg-white/10 p-4 rounded-3xl"><Award size={28}/></div>
//         <div className="mt-auto opacity-50"><Zap size={24} fill="white"/></div>
//       </div>

//       <div className="flex-1 p-16 overflow-y-auto custom-scrollbar">
//         <header className="mb-16">
//           <h1 className="text-7xl font-black text-[#F57C00] tracking-tighter uppercase leading-none break-words mb-4">{personal.name || "Your Name"}</h1>
//           <p className="text-3xl font-bold text-slate-400 uppercase tracking-[0.2em] break-words leading-tight">{personal.title}</p>
//           <div className="flex flex-wrap gap-8 mt-10 text-[12px] font-black uppercase tracking-widest text-slate-500">
//             {personal.email && <div className="flex items-center gap-2 break-all"><Mail size={16}/> {personal.email}</div>}
//             {personal.phone && <div className="flex items-center gap-2"><Phone size={16}/> {personal.phone}</div>}
//             {personal.location && <div className="flex items-center gap-2 break-words"><MapPin size={16}/> {personal.location}</div>}
//             {personal.linkedin && <div className="flex items-center gap-2 break-all"><Linkedin size={16}/> {personal.linkedin}</div>}
//           </div>
//         </header>

//         {personal.summary && (
//           <section className="mb-20 max-w-4xl">
//             <h3 className="text-sm font-black uppercase tracking-[0.5em] text-slate-300 mb-8 border-l-4 border-orange-500 pl-6">Profile Snapshot</h3>
//             <p className="text-base text-slate-600 leading-relaxed font-medium whitespace-pre-wrap break-words italic px-6">{personal.summary}</p>
//           </section>
//         )}

//         <section className="mb-20">
//           <h3 className="text-sm font-black uppercase tracking-[0.5em] text-slate-300 mb-10 border-l-4 border-orange-500 pl-6">Skill Matrix</h3>
//           <div className="grid grid-cols-4 gap-4">
//             {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//               <div key={i} className="p-4 bg-white border-2 border-orange-100 rounded-2xl text-center text-[11px] font-black text-[#F57C00] uppercase shadow-sm break-words transition-all hover:scale-105">
//                 {s}
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="mb-20">
//           <h3 className="text-sm font-black uppercase tracking-[0.5em] text-[#F57C00] mb-12 border-b-8 border-orange-100 pb-4">Professional Log</h3>
//           <div className="space-y-16">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div className="experience-item group">
//                   <div className="flex justify-between items-baseline mb-3">
//                     <h4 className="text-3xl font-black text-slate-800 group-hover:text-[#F57C00] transition-colors break-words uppercase tracking-tighter leading-none">{exp.role}</h4>
//                     <span className="text-[12px] font-black text-slate-300 shrink-0 ml-8 tracking-widest">{exp.date}</span>
//                   </div>
//                   <div className="text-[14px] font-black uppercase text-[#F57C00] mb-6 tracking-[0.3em] break-words">{exp.company}</div>
//                   <p className="text-[15px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words text-justify italic">{exp.desc}</p>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </section>

//         <div className="grid grid-cols-2 gap-20 pb-20">
//             {education.length > 0 && (
//                 <section>
//                     <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-slate-300 mb-10 border-l-4 border-orange-500 pl-6 uppercase">Academics</h3>
//                     {education.map((edu, i) => (
//                         <React.Fragment key={i}>
//                             {edu.pageBreak && <div className="manual-page-break" />}
//                             <div className="mb-10 last:mb-0">
//                                 <div className="font-black text-xl text-slate-800 break-words leading-tight mb-2 uppercase tracking-tighter">{edu.degree}</div>
//                                 <div className="text-[12px] font-black text-[#F57C00] uppercase break-words tracking-widest leading-tight">{edu.school}</div>
//                                 <div className="text-[11px] font-black text-slate-300 mt-2">{edu.date}</div>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </section>
//             )}

//             {projects.length > 0 && (
//                 <section>
//                     <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-slate-300 mb-10 border-l-4 border-orange-500 pl-6 uppercase">Creations</h3>
//                     {projects.map((proj, i) => (
//                         <React.Fragment key={i}>
//                             {proj.pageBreak && <div className="manual-page-break" />}
//                             <div className="mb-10 last:mb-0 bg-white p-6 rounded-3xl border-2 border-orange-50 shadow-sm">
//                                 <h4 className="font-black text-slate-800 break-words uppercase text-sm mb-3 italic tracking-tight flex items-center gap-2"><Zap size={14} fill="#F57C00" className="text-[#F57C00]"/> {proj.name}</h4>
//                                 <p className="text-[13px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic">{proj.desc}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </section>
//             )}
//         </div>

//         <footer className="pt-16 border-t-4 border-orange-200 grid grid-cols-4 gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400 pb-10">
//             {awards.length > 0 && (
//                 <div>
//                     <div className="text-[#F57C00] mb-4 flex items-center gap-2"><Award size={14}/> Distinction</div>
//                     {awards.map((a, i) => <div key={i} className="mb-3 break-words leading-tight text-slate-800 uppercase tracking-tighter">🏆 {a.name}</div>)}
//                 </div>
//             )}
//             {certifications.length > 0 && (
//                 <div>
//                     <div className="text-[#F57C00] mb-4 flex items-center gap-2"><CheckCircle size={14}/> Badges</div>
//                     {certifications.map((c, i) => <div key={i} className="mb-2 break-words leading-tight uppercase">• {c.name}</div>)}
//                 </div>
//             )}
//             {languages.length > 0 && (
//                 <div>
//                     <div className="text-[#F57C00] mb-4 flex items-center gap-2"><Globe size={14}/> Tongues</div>
//                     {languages.map((l, i) => <div key={i} className="mb-1 break-words italic">{l.name} — {l.level}</div>)}
//                 </div>
//             )}
//             {volunteering.length > 0 && (
//                 <div className="text-right">
//                     <div className="text-[#F57C00] mb-4 flex items-center justify-end gap-2"><Heart size={14}/> Impact</div>
//                     {volunteering.map((v, i) => <div key={i} className="mb-2 break-words text-slate-800 font-black italic">{v.role} @ {v.org}</div>)}
//                 </div>
//             )}
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default OrangePunch;

import React from 'react';

const OrangePunch = ({ data }) => {
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
    <div className="font-sans text-slate-800 bg-white min-h-[1100px] border-t-[16px] border-orange-500">
      
      {/* HEADER */}
      <header className="p-10 pb-0 flex items-center justify-between">
          <div>
              <h1 className="text-5xl font-black uppercase text-slate-900 leading-none mb-2">{personal.name}</h1>
              <span className="bg-orange-500 text-white px-4 py-1 text-sm font-bold uppercase tracking-widest inline-block skew-x-[-10deg]">{personal.title}</span>
          </div>
          {personal.photo && (
              <img src={personal.photo} alt="Profile" className="w-28 h-28 object-cover border-4 border-slate-900 shadow-brutalism" />
          )}
      </header>

      {/* CONTACT STRIP */}
      <div className="mt-8 mx-10 border-y-2 border-slate-900 py-3 flex flex-wrap gap-8 font-bold text-sm">
          {personal.email && <div className="flex items-center gap-2"><span>✉</span> {personal.email}</div>}
          {personal.phone && <div className="flex items-center gap-2"><span>📞</span> {personal.phone}</div>}
          {personal.location && <div className="flex items-center gap-2"><span>📍</span> {personal.location}</div>}
      </div>

      <div className="p-10 grid grid-cols-12 gap-10">
          
          {/* LEFT COL */}
          <div className="col-span-8 space-y-12">
              
              {personal.summary && (
                  <section>
                      <h3 className="font-black text-2xl uppercase mb-4 flex items-center gap-2">
                          <span className="w-4 h-4 bg-orange-500"></span> About
                      </h3>
                      <p className="text-lg leading-relaxed font-medium text-slate-600">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="font-black text-2xl uppercase mb-8 flex items-center gap-2">
                          <span className="w-4 h-4 bg-orange-500"></span> Work
                      </h3>
                      <div className="space-y-10 border-l-4 border-slate-900 pl-6 ml-2">
                          {experience.map(exp => (
                              <div key={exp.id} className="relative">
                                  <div className="absolute -left-[34px] top-1.5 w-4 h-4 bg-white border-4 border-orange-500 rounded-full"></div>
                                  <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                                  <div className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">{exp.company} | {exp.date}</div>
                                  <p className="text-slate-600 leading-7 font-medium">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {projects.length > 0 && (
                  <section>
                      <h3 className="font-black text-2xl uppercase mb-6 flex items-center gap-2">
                          <span className="w-4 h-4 bg-orange-500"></span> Projects
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                          {projects.map(p => (
                              <div key={p.id} className="bg-orange-50 p-4 border-2 border-orange-100">
                                  <h4 className="font-bold text-slate-900">{p.name}</h4>
                                  <p className="text-xs text-slate-600 mt-1 font-medium">{p.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

          </div>

          {/* RIGHT COL */}
          <div className="col-span-4 space-y-10">
              
              <section>
                  <h3 className="font-black text-xl uppercase mb-4 border-b-4 border-slate-900 pb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-900 text-white text-xs font-bold uppercase">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="font-black text-xl uppercase mb-4 border-b-4 border-slate-900 pb-2">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-slate-900">{edu.school}</div>
                                  <div className="text-sm font-bold text-orange-600">{edu.degree}</div>
                                  <div className="text-xs font-bold text-slate-400 mt-1">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {languages.length > 0 && (
                  <section>
                      <h3 className="font-black text-xl uppercase mb-4 border-b-4 border-slate-900 pb-2">Languages</h3>
                      <div className="space-y-2 text-sm font-bold text-slate-600">
                          {languages.map(l => <div key={l.id}>{l.name} - {l.level}</div>)}
                      </div>
                  </section>
              )}

          </div>
      </div>
    </div>
  );
};

export default OrangePunch;