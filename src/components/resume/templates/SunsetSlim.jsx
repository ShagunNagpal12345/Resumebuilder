// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const SunsetSlim = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionHeader = ({ icon, title }) => (
//     <h3 className="text-[13px] font-black uppercase text-[#F57C00] tracking-[0.6em] mb-12 pb-3 border-b-4 border-orange-50 flex items-center gap-4">
//         {icon} {title}
//     </h3>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper">
//       {/* SLIM HEADER */}
//       <header className="bg-[#F57C00] p-12 text-white flex justify-between items-center shrink-0 border-b-[12px] border-[#E65100] shadow-xl">
//         <div className="flex-1 pr-12">
//             <h1 className="text-6xl font-black tracking-tighter uppercase break-words leading-none mb-3">{personal.name || "Your Name"}</h1>
//             <p className="text-2xl font-bold text-orange-100 uppercase tracking-[0.4em] break-words italic opacity-70 leading-tight">{personal.title}</p>
//         </div>
//         <div className="text-[12px] font-black uppercase tracking-[0.3em] text-orange-50 text-right shrink-0 space-y-2">
//             {personal.email && <div className="break-all border-b border-orange-400 pb-1">{personal.email}</div>}
//             {personal.phone && <div className="border-b border-orange-400 pb-1">{personal.phone}</div>}
//             {personal.location && <div className="break-words">{personal.location}</div>}
//             {personal.linkedin && <div className="break-all">{personal.linkedin}</div>}
//         </div>
//       </header>

//       <main className="p-16 max-w-6xl mx-auto space-y-16">
//         {personal.summary && (
//             <section className="border-b-2 border-orange-50 pb-16">
//                 <p className="text-base text-slate-500 leading-relaxed whitespace-pre-wrap break-words text-justify italic font-medium px-20 border-l-8 border-[#F57C00]">"{personal.summary}"</p>
//             </section>
//         )}

//         <section>
//             <SectionHeader icon={<Briefcase size={20}/>} title="Work Journey" />
//             <div className="space-y-16">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item group">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h4 className="font-black text-slate-900 text-3xl break-words uppercase tracking-tighter group-hover:text-[#F57C00] transition-colors leading-none">{exp.role}</h4>
//                                 <span className="text-[12px] font-black text-slate-300 uppercase shrink-0 ml-10 tracking-[0.4em] italic">{exp.date}</span>
//                             </div>
//                             <div className="text-[14px] font-black text-orange-400 uppercase mb-6 tracking-[0.3em] break-words leading-none border-l-4 border-orange-500 pl-4">{exp.company}</div>
//                             <p className="text-[15px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic font-medium">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         <div className="grid grid-cols-12 gap-16">
//             <div className="col-span-8 space-y-16">
//                 {projects.length > 0 && (
//                     <section>
//                         <SectionHeader icon={<Layers size={20}/>} title="Creations" />
//                         <div className="space-y-10">
//                             {projects.map((p, i) => (
//                                 <React.Fragment key={i}>
//                                     {p.pageBreak && <div className="manual-page-break" />}
//                                     <div className="project-item border-l-4 border-orange-100 pl-10">
//                                         <h4 className="font-black text-xl text-[#F57C00] break-words uppercase mb-3 tracking-tighter leading-none">{p.name}</h4>
//                                         <p className="text-[14px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic font-medium">{p.desc}</p>
//                                     </div>
//                                 </React.Fragment>
//                             ))}
//                         </div>
//                     </section>
//                 )}

//                 {volunteering.length > 0 && (
//                     <section>
//                         <SectionHeader icon={<Heart size={20}/>} title="Public Impact" />
//                         <div className="grid grid-cols-2 gap-10">
//                             {volunteering.map((v, i) => (
//                                 <div key={i} className="mb-6 last:mb-0 border-b border-orange-50 pb-6">
//                                     <div className="font-black text-sm text-slate-800 break-words leading-tight uppercase mb-2 italic tracking-tighter">{v.role}</div>
//                                     <div className="text-[11px] font-black text-orange-400 break-words uppercase tracking-[0.2em]">{v.org} // {v.date}</div>
//                                     <p className="text-[11px] text-slate-400 mt-3 whitespace-pre-wrap break-words leading-relaxed">{v.desc}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 )}
//             </div>

//             <aside className="col-span-4 space-y-16">
//                 <section>
//                     <h3 className="text-[13px] font-black uppercase text-slate-300 tracking-[0.5em] mb-10 border-b-4 border-orange-50 pb-3">Competencies</h3>
//                     <div className="flex flex-wrap gap-2">
//                         {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//                             <span key={i} className="px-3 py-2 bg-orange-50 text-orange-600 text-[11px] font-black uppercase rounded-xl break-words border border-orange-100 shadow-sm transition-transform hover:scale-105">{s}</span>
//                         ))}
//                     </div>
//                 </section>

//                 {education.length > 0 && (
//                     <section>
//                         <h3 className="text-[13px] font-black uppercase text-slate-300 mb-10 border-b-4 border-orange-50 pb-3">Academic Base</h3>
//                         {education.map((edu, i) => (
//                             <div key={i} className="mb-8 last:mb-0">
//                                 <div className="font-black text-[14px] text-slate-800 break-words leading-tight uppercase mb-2 tracking-tighter">{edu.degree}</div>
//                                 <div className="text-[12px] font-black text-orange-400 break-words leading-tight italic">{edu.school}</div>
//                                 <div className="text-[11px] text-slate-300 mt-2 font-black tracking-widest uppercase">{edu.date}</div>
//                             </div>
//                         ))}
//                     </section>
//                 )}

//                 {languages.length > 0 && (
//                     <section>
//                         <h3 className="text-[13px] font-black uppercase text-slate-300 mb-8 border-b-4 border-orange-50 pb-3">Tongues</h3>
//                         {languages.map((l, i) => (
//                             <div key={i} className="flex justify-between text-[12px] font-black uppercase mb-4 text-slate-600 border-b-2 border-orange-50 pb-2">
//                                 <span className="break-words">{l.name}</span> <span className="text-orange-300 shrink-0 ml-6 tracking-tighter italic">{l.level}</span>
//                             </div>
//                         ))}
//                     </section>
//                 )}
//             </aside>
//         </div>

//         <footer className="pt-16 border-t-[12px] border-orange-50 grid grid-cols-2 gap-16 pb-16">
//             {awards.length > 0 && (
//                 <div>
//                     <h4 className="text-[13px] font-black uppercase text-slate-300 mb-8 tracking-[0.5em] border-l-8 border-orange-400 pl-6 uppercase">Honors Log</h4>
//                     <div className="space-y-4">
//                         {awards.map((a, i) => <div key={i} className="text-[13px] font-black text-slate-600 break-words uppercase tracking-tighter italic leading-none">• {a.name} <span className="text-orange-200 block text-[10px] not-italic mt-2 font-black tracking-[0.3em]">{a.issuer}</span></div>)}
//                     </div>
//                 </div>
//             )}
//             {certifications.length > 0 && (
//                 <div className="text-right">
//                     <h4 className="text-[13px] font-black uppercase text-slate-300 mb-8 tracking-[0.5em] border-r-8 border-orange-400 pr-6 uppercase">Badges Init</h4>
//                     {certifications.map((c, i) => <div key={i} className="text-[13px] font-black text-slate-400 break-words uppercase mb-3 tracking-tighter leading-none border-b border-orange-50 pb-3">{c.name} <span className="text-orange-200 block text-[10px] mt-2 italic font-bold">[{c.issuer}]</span></div>)}
//                 </div>
//             )}
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default SunsetSlim;

import React from 'react';

const SunsetSlim = ({ data }) => {
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
    <div className="font-sans text-slate-800 bg-white min-h-[1100px]">
      
      {/* GRADIENT HEADER */}
      <header className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-8">
          <div className="flex justify-between items-center">
              <div>
                  <h1 className="text-4xl font-bold uppercase tracking-tight">{personal.name}</h1>
                  <p className="text-lg opacity-90 font-medium">{personal.title}</p>
              </div>
              <div className="text-right text-xs font-bold opacity-80">
                  <div>{personal.email}</div>
                  <div>{personal.phone}</div>
                  <div>{personal.location}</div>
              </div>
          </div>
      </header>

      <div className="p-8 grid grid-cols-12 gap-8">
          
          {/* LEFT COL */}
          <div className="col-span-8 space-y-8">
              {personal.summary && (
                  <section>
                      <h3 className="text-pink-600 font-bold uppercase text-xs mb-2">Profile</h3>
                      <p className="text-sm text-slate-700 leading-snug">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="text-pink-600 font-bold uppercase text-xs mb-4">Experience</h3>
                      <div className="space-y-6">
                          {experience.map(exp => (
                              <div key={exp.id} className="pb-4 border-b border-slate-100 last:border-0">
                                  <div className="flex justify-between font-bold text-sm mb-1">
                                      <span className="text-slate-900">{exp.role}</span>
                                      <span className="text-slate-400 text-xs">{exp.date}</span>
                                  </div>
                                  <div className="text-xs font-bold text-orange-600 mb-2 uppercase">{exp.company}</div>
                                  <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* RIGHT COL */}
          <div className="col-span-4 space-y-8 bg-slate-50 p-6 rounded-lg h-fit">
              <section>
                  <h3 className="text-pink-600 font-bold uppercase text-xs mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-1">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="px-2 py-1 bg-white border border-slate-200 text-[10px] font-bold text-slate-600 rounded">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="text-pink-600 font-bold uppercase text-xs mb-3">Education</h3>
                      <div className="space-y-3">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-xs">{edu.school}</div>
                                  <div className="text-[10px] text-slate-500">{edu.degree}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {(certifications.length > 0 || languages.length > 0) && (
                  <section>
                      <h3 className="text-pink-600 font-bold uppercase text-xs mb-3">Extras</h3>
                      <ul className="text-xs space-y-1 text-slate-600">
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

export default SunsetSlim;