// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const IndigoElite = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionHeader = ({ icon, title }) => (
//     <h3 className="text-sm font-black uppercase text-[#004B8D] tracking-[0.4em] mb-10 pb-2 border-b-2 border-blue-50 flex items-center gap-4 italic">
//         {icon} {title}
//     </h3>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans pb-10 resume-preview-wrapper">
//       <header className="bg-[#004B8D] p-16 text-white flex justify-between items-end border-b-8 border-[#003A6F] shadow-xl">
//         <div>
//           <h1 className="text-6xl font-black uppercase tracking-tighter break-words leading-none mb-4">{personal.name || "Your Name"}</h1>
//           <p className="text-2xl font-bold text-blue-200 uppercase tracking-[0.2em] break-words italic">{personal.title}</p>
//         </div>
//         <div className="text-[11px] font-black uppercase tracking-[0.2em] space-y-2 text-right shrink-0 ml-10">
//           {personal.email && <div className="break-all italic">{personal.email} <Mail size={14} className="inline ml-2 text-blue-200"/></div>}
//           {personal.phone && <div>{personal.phone} <Phone size={14} className="inline ml-2 text-blue-200"/></div>}
//           {personal.location && <div className="break-words opacity-60">{personal.location} <MapPin size={14} className="inline ml-2 text-blue-200"/></div>}
//         </div>
//       </header>

//       <div className="p-16">
//         {personal.summary && (
//             <section className="mb-12 border-l-[16px] border-[#004B8D] pl-10 bg-slate-50 p-8 rounded-r-3xl">
//                 <p className="text-[15px] leading-relaxed text-slate-500 font-medium whitespace-pre-wrap break-words italic">"{personal.summary}"</p>
//             </section>
//         )}

//         <div className="grid grid-cols-12 gap-16">
//             <div className="col-span-8 space-y-12">
//                 <section>
//                     <SectionHeader icon={<Briefcase size={20}/>} title="Professional History" />
//                     <div className="space-y-12">
//                         {experience.map((exp, i) => (
//                             <React.Fragment key={i}>
//                                 {exp.pageBreak && <div className="manual-page-break" />}
//                                 <div className="experience-item border-l border-slate-100 pl-8 relative">
//                                     <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#004B8D]"></div>
//                                     <div className="flex justify-between font-bold text-slate-900 text-xl tracking-tight mb-1 uppercase italic leading-none">
//                                         <h4 className="break-words">{exp.role}</h4>
//                                         <span className="shrink-0 ml-6 text-[11px] text-slate-400 font-black tracking-widest">{exp.date}</span>
//                                     </div>
//                                     <div className="text-[13px] font-black text-[#004B8D] uppercase mb-6 tracking-widest break-words leading-none">{exp.company}</div>
//                                     <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic">{exp.desc}</p>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </section>

//                 {projects.length > 0 && (
//                     <section>
//                         <SectionHeader icon={<Layers size={20}/>} title="Strategic Portfolio" />
//                         <div className="space-y-10">
//                             {projects.map((proj, i) => (
//                                 <React.Fragment key={i}>
//                                     {proj.pageBreak && <div className="manual-page-break" />}
//                                     <div className="project-item bg-blue-50/30 p-6 rounded-2xl border border-blue-50">
//                                         <h4 className="font-black text-slate-800 break-words text-base uppercase mb-3 tracking-tight italic">{proj.name}</h4>
//                                         <p className="text-[13px] text-slate-500 whitespace-pre-wrap break-words italic">{proj.desc}</p>
//                                     </div>
//                                 </React.Fragment>
//                             ))}
//                         </div>
//                     </section>
//                 )}
//             </div>

//             <aside className="col-span-4 space-y-16">
//                 <section>
//                     <h3 className="text-xs font-black uppercase text-[#004B8D] mb-8 tracking-widest border-b pb-2 italic">Competencies</h3>
//                     <div className="flex flex-wrap gap-2">
//                         {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//                             <span key={i} className="px-3 py-1.5 bg-blue-50 text-[#004B8D] text-[10px] font-black uppercase rounded-lg break-words border border-blue-100 shadow-sm">{s}</span>
//                         ))}
//                     </div>
//                 </section>

//                 {education.length > 0 && (
//                     <section>
//                         <h3 className="text-xs font-black uppercase text-[#004B8D] mb-8 tracking-widest border-b pb-2 italic">Academics</h3>
//                         {education.map((edu, i) => (
//                             <div key={i} className="mb-8 last:mb-0 border-l-4 border-blue-50 pl-4">
//                                 <div className="font-black text-[13px] text-slate-800 break-words leading-tight uppercase mb-1">{edu.degree}</div>
//                                 <div className="text-[11px] text-slate-400 break-words font-bold italic">{edu.school}</div>
//                                 <div className="text-[10px] text-[#004B8D] font-black mt-2 uppercase tracking-widest">{edu.date}</div>
//                             </div>
//                         ))}
//                     </section>
//                 )}

//                 {certifications.length > 0 && (
//                     <section>
//                         <h3 className="text-xs font-black uppercase text-[#004B8D] mb-6 border-b pb-2 italic">Credentials</h3>
//                         {certifications.map((c, i) => <div key={i} className="text-[11px] font-black text-slate-400 break-words mb-3 uppercase flex items-center gap-3 italic"><CheckCircle size={14} className="text-blue-200 shrink-0"/> {c.name}</div>)}
//                     </section>
//                 )}

//                 {languages.length > 0 && (
//                     <section>
//                         <h3 className="text-xs font-black uppercase text-[#004B8D] mb-4 tracking-widest border-b pb-2 italic">Languages</h3>
//                         {languages.map((l, i) => (
//                             <div key={i} className="flex justify-between text-[11px] font-black uppercase mb-2 italic">
//                                 <span className="break-words text-slate-600">{l.name}</span> <span className="text-[#004B8D] tracking-tighter opacity-40">{l.level}</span>
//                             </div>
//                         ))}
//                     </section>
//                 )}
//             </aside>
//         </div>
//       </div>

//       <footer className="pt-10 border-t-8 border-slate-50 grid grid-cols-2 gap-16 px-16 pb-10 uppercase text-[10px] font-black tracking-[0.5em] text-slate-300">
//             {awards.length > 0 && <div>{awards.map((a, i) => <p key={i} className="mb-2 break-words text-[#004B8D] italic">🏆 {a.name}</p>)}</div>}
//             {volunteering.length > 0 && <div className="text-right">{volunteering.slice(0, 2).map((v, i) => <p key={i} className="mb-2 break-words italic text-slate-800 font-bold underline decoration-[#004B8D] decoration-2">{v.role} @ {v.org}</p>)}</div>}
//       </footer>
//     </div>
//   );
// };

// export default IndigoElite;

import React from 'react';

const IndigoElite = ({ data }) => {
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
    <div className="font-sans text-slate-700 bg-white min-h-[1100px]">
      
      {/* HEADER */}
      <header className="bg-indigo-900 text-white p-12 flex justify-between items-center">
          <div>
              <h1 className="text-5xl font-bold uppercase tracking-tight mb-2">{personal.name}</h1>
              <p className="text-xl text-indigo-300 font-medium tracking-wide">{personal.title}</p>
          </div>
          <div className="text-right text-sm font-medium text-indigo-200 space-y-1">
              {personal.phone && <div>{personal.phone}</div>}
              {personal.email && <div>{personal.email}</div>}
              {personal.location && <div>{personal.location}</div>}
          </div>
      </header>

      <div className="p-12 grid grid-cols-12 gap-10">
          
          {/* MAIN COLUMN */}
          <div className="col-span-8 space-y-10">
              
              {personal.summary && (
                  <section>
                      <h3 className="text-indigo-900 font-bold uppercase tracking-widest text-xs mb-4 border-b-2 border-indigo-100 pb-1 w-20">Profile</h3>
                      <p className="text-lg leading-relaxed text-slate-600 font-light">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="text-indigo-900 font-bold uppercase tracking-widest text-xs mb-8 border-b-2 border-indigo-100 pb-1 w-20">Experience</h3>
                      <div className="space-y-10">
                          {experience.map(exp => (
                              <div key={exp.id}>
                                  <div className="flex justify-between items-baseline mb-1">
                                      <h4 className="text-2xl font-bold text-slate-800">{exp.role}</h4>
                                      <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{exp.date}</span>
                                  </div>
                                  <div className="text-md font-medium text-slate-500 mb-4 uppercase tracking-wide">{exp.company}</div>
                                  <p className="text-slate-600 leading-relaxed">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* SIDEBAR */}
          <div className="col-span-4 space-y-10">
              {personal.photo && (
                  <img src={personal.photo} alt="Profile" className="w-full h-auto rounded-lg shadow-lg mb-4" />
              )}

              <section>
                  <h3 className="text-indigo-900 font-bold uppercase tracking-widest text-xs mb-4">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="px-3 py-2 bg-slate-50 text-slate-700 text-xs font-bold border-l-4 border-indigo-500 shadow-sm">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="text-indigo-900 font-bold uppercase tracking-widest text-xs mb-4">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id} className="border-l-2 border-indigo-200 pl-4">
                                  <div className="font-bold text-slate-900">{edu.school}</div>
                                  <div className="text-sm text-indigo-600">{edu.degree}</div>
                                  <div className="text-xs text-slate-400 mt-1">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {(certifications.length > 0 || languages.length > 0) && (
                  <section>
                      <h3 className="text-indigo-900 font-bold uppercase tracking-widest text-xs mb-4">Additional</h3>
                      <div className="space-y-2 text-sm text-slate-600">
                          {certifications.map(c => <div key={c.id}>• {c.name}</div>)}
                          {languages.map(l => <div key={l.id}>• {l.name} ({l.level})</div>)}
                      </div>
                  </section>
              )}
          </div>

      </div>
    </div>
  );
};

export default IndigoElite;