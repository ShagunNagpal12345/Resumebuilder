// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const AmberVisual = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionHeader = ({ icon, title }) => (
//     <h3 className="text-xs font-black uppercase text-[#F57C00] border-b-2 border-[#FFF8E1] pb-3 mb-8 tracking-[0.4em] flex items-center gap-3">
//         {icon} {title}
//     </h3>
//   );

//   return (
//     <div className="w-full flex bg-white min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper">
//       {/* SIDEBAR */}
//       <aside className="w-[30%] bg-[#FFF8E1] border-r border-[#FFE082] p-10 flex flex-col gap-10 shrink-0">
//         <div className="text-center">
//             {personal.photo && <img src={personal.photo} className="w-36 h-36 rounded-full border-4 border-white mx-auto object-cover mb-6 shadow-2xl" alt="Profile" />}
//             <h2 className="text-3xl font-black text-[#F57C00] uppercase tracking-tighter break-words leading-none">{personal.name || "Your Name"}</h2>
//             <p className="text-[11px] font-bold text-slate-400 uppercase mt-3 tracking-[0.2em] break-words leading-tight">{personal.title}</p>
//         </div>

//         <div className="space-y-4 text-[12px] font-bold uppercase text-slate-600 bg-white p-6 rounded-[2.5rem] shadow-xl border border-[#FFE082]">
//             {personal.email && <div className="flex items-center gap-3 break-all leading-tight"><Mail size={16} className="text-[#F57C00] shrink-0"/> {personal.email}</div>}
//             {personal.phone && <div className="flex items-center gap-3 leading-tight"><Phone size={16} className="text-[#F57C00] shrink-0"/> {personal.phone}</div>}
//             {personal.linkedin && <div className="flex items-center gap-3 break-all leading-tight"><Linkedin size={16} className="text-[#F57C00] shrink-0"/> {personal.linkedin}</div>}
//             {personal.location && <div className="flex items-center gap-3 break-words leading-tight"><MapPin size={16} className="text-[#F57C00] shrink-0"/> {personal.location}</div>}
//         </div>

//         <section>
//             <SectionHeader icon={<Cpu size={18}/>} title="Skills" />
//             <div className="space-y-6 px-2">
//                 {[...skills.technical, ...skills.core, ...skills.soft].slice(0, 10).map((s, i) => (
//                     <div key={i} className="break-words">
//                         <div className="flex justify-between text-[11px] mb-2 font-black uppercase tracking-tight"><span>{s}</span><span className="text-[#F57C00] opacity-40 italic">Expert</span></div>
//                         <div className="h-1.5 bg-white rounded-full overflow-hidden shadow-inner"><div className="h-full bg-[#FFB300] w-[90%] rounded-full shadow-md"></div></div>
//                     </div>
//                 ))}
//             </div>
//         </section>

//         {education.length > 0 && (
//             <section>
//                 <SectionHeader icon={<GraduationCap size={18}/>} title="Learning" />
//                 {education.map((edu, i) => (
//                     <div key={i} className="mb-8 last:mb-0 border-l-4 border-[#FFE082] pl-4">
//                         <div className="font-black text-[12px] text-slate-800 break-words leading-tight uppercase mb-2">{edu.degree}</div>
//                         <div className="text-[10px] font-black text-[#F57C00] uppercase break-words italic">{edu.school}</div>
//                         <div className="text-[9px] text-slate-400 mt-2 font-black uppercase">{edu.date}</div>
//                     </div>
//                 ))}
//             </section>
//         )}
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="flex-1 p-16 bg-white space-y-16">
//         {personal.summary && (
//             <section className="bg-[#FFF8E1] bg-opacity-30 p-10 rounded-[3rem] border-2 border-[#FFF8E1] shadow-inner">
//                 <h3 className="text-[12px] font-black uppercase text-[#F57C00] tracking-[0.5em] mb-6 flex items-center gap-3"><User size={18}/> Summary</h3>
//                 <p className="text-[15px] text-slate-600 leading-relaxed font-medium whitespace-pre-wrap break-words italic">{personal.summary}</p>
//             </section>
//         )}

//         <section>
//             <SectionHeader icon={<Briefcase size={20}/>} title="Experience" />
//             <div className="space-y-12">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item relative pl-12">
//                             <div className="absolute left-0 top-1 w-8 h-8 rounded-2xl bg-[#FFF8E1] border-4 border-[#FFB300] flex items-center justify-center shrink-0 shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform"><div className="w-2 h-2 bg-[#F57C00] rounded-full"></div></div>
//                             <div className="flex justify-between items-baseline mb-3">
//                                 <h4 className="font-black text-slate-900 text-xl break-words uppercase leading-none tracking-tight">{exp.role}</h4>
//                                 <span className="text-[12px] font-black text-slate-300 uppercase shrink-0 ml-8 tracking-widest">{exp.date}</span>
//                             </div>
//                             <div className="text-[12px] font-black text-[#F57C00] uppercase mb-6 tracking-[0.3em] break-words leading-none">{exp.company}</div>
//                             <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-wrap break-words text-justify">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         {projects.length > 0 && (
//             <section>
//                 <SectionHeader icon={<Layers size={20}/>} title="Strategic Projects" />
//                 <div className="grid grid-cols-2 gap-10">
//                     {projects.map((p, i) => (
//                         <React.Fragment key={i}>
//                             {p.pageBreak && <div className="manual-page-break" />}
//                             <div className="project-item group">
//                                 <h4 className="font-black text-[13px] text-slate-800 break-words uppercase mb-4 tracking-tighter flex items-center gap-3 transition-colors group-hover:text-[#F57C00]">
//                                     <div className="w-2 h-6 bg-[#F57C00] shrink-0 rounded-full"></div> {p.name}
//                                 </h4>
//                                 <p className="text-[11px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic border-l-2 border-slate-50 pl-4">{p.desc}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </section>
//         )}

//         <footer className="pt-16 border-t-4 border-[#FFF8E1] grid grid-cols-2 gap-12">
//             {awards.length > 0 && (
//                 <section>
//                     <h3 className="text-[12px] font-black uppercase text-[#F57C00] mb-6 tracking-[0.3em] flex items-center gap-3"><Award size={18}/> Awards</h3>
//                     {awards.map((a, i) => <div key={i} className="text-[11px] font-bold mb-4 break-words text-slate-600 tracking-tight leading-tight uppercase">🏆 {a.name} — <span className="text-slate-300 italic block mt-1">{a.issuer}</span></div>)}
//                 </section>
//             )}
//             {volunteering.length > 0 && (
//                 <section>
//                     <h3 className="text-[12px] font-black uppercase text-[#F57C00] mb-6 tracking-[0.5em] flex items-center gap-3"><Heart size={18}/> Service</h3>
//                     {volunteering.map((v, i) => <div key={i} className="text-[11px] font-bold mb-4 break-words text-slate-500 uppercase italic leading-tight border-b border-slate-50 pb-2">{v.role} @ {v.org} <div className="text-[9px] text-slate-300 not-italic mt-1 font-black">{v.date}</div></div>)}
//                 </section>
//             )}
//             {certifications.length > 0 && (
//                 <section className="col-span-2 pt-10 mt-6 border-t border-[#FFF8E1]">
//                     <div className="flex flex-wrap gap-x-8 gap-y-4">
//                         {certifications.map((c, i) => <div key={i} className="text-[10px] font-black uppercase text-slate-300 border-b-2 border-slate-50 pb-1 break-words italic tracking-widest">• {c.name} — {c.issuer}</div>)}
//                     </div>
//                 </section>
//             )}
//             {languages.length > 0 && (
//                 <section className="col-span-2">
//                     <div className="flex flex-wrap gap-8">
//                         {languages.map((l, i) => <div key={i} className="text-[11px] font-black uppercase text-slate-400"> {l.name}: <span className="text-[#F57C00]">{l.level}</span></div>)}
//                     </div>
//                 </section>
//             )}
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default AmberVisual;

import React from 'react';

const AmberVisual = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="font-sans text-slate-800 bg-white min-h-[1100px] flex flex-col">
      
      {/* HEADER */}
      <header className="bg-amber-400 p-12 flex gap-8 items-center text-slate-900">
         {personal.photo && (
             <img src={personal.photo} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md" />
         )}
         <div className="flex-1">
             <h1 className="text-4xl font-black uppercase tracking-tight mb-2">{personal.name}</h1>
             <p className="text-xl font-medium opacity-80">{personal.title}</p>
         </div>
      </header>
      
      {/* CONTACT BAR */}
      <div className="bg-amber-100 px-12 py-3 flex flex-wrap gap-6 text-sm font-bold text-amber-900 border-b border-amber-200">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
      </div>

      <div className="p-12 grid grid-cols-12 gap-12 flex-1">
          
          {/* LEFT CONTENT */}
          <div className="col-span-8 space-y-10">
              
              {personal.summary && (
                  <section>
                      <h3 className="text-amber-600 font-black uppercase tracking-widest text-sm mb-3">About</h3>
                      <p className="text-slate-700 leading-7">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="text-amber-600 font-black uppercase tracking-widest text-sm mb-6">Experience</h3>
                      <div className="space-y-8">
                          {experience.map(exp => (
                              <div key={exp.id} className="border-l-4 border-amber-200 pl-4">
                                  <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                                  <div className="text-sm font-bold text-amber-600 mb-2">{exp.company} | {exp.date}</div>
                                  <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {projects.length > 0 && (
                  <section>
                      <h3 className="text-amber-600 font-black uppercase tracking-widest text-sm mb-6">Projects</h3>
                      <div className="grid grid-cols-2 gap-4">
                          {projects.map(p => (
                              <div key={p.id} className="bg-amber-50 p-4 rounded-lg">
                                  <h4 className="font-bold text-slate-900 text-sm">{p.name}</h4>
                                  <p className="text-xs text-slate-600 mt-1">{p.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-4 space-y-10">
              
              <section>
                  <h3 className="text-amber-600 font-black uppercase tracking-widest text-sm mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="text-amber-600 font-black uppercase tracking-widest text-sm mb-4">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-slate-900">{edu.school}</div>
                                  <div className="text-sm text-slate-500">{edu.degree}</div>
                                  <div className="text-xs text-amber-500 mt-1">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {(certifications.length > 0 || languages.length > 0) && (
                  <section>
                      <h3 className="text-amber-600 font-black uppercase tracking-widest text-sm mb-4">Details</h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                          {certifications.map(c => <li key={c.id}><strong>Cert:</strong> {c.name}</li>)}
                          {languages.map(l => <li key={l.id}><strong>Lang:</strong> {l.name} ({l.level})</li>)}
                      </ul>
                  </section>
              )}
          </div>

      </div>
    </div>
  );
};

export default AmberVisual;