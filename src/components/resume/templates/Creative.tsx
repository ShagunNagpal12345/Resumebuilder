// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const Creative = ({ data }: any) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full flex bg-white min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper">
//       <aside className="w-[35%] bg-slate-900 text-white p-10 flex flex-col gap-10 shrink-0">
//         <div className="flex flex-col items-center text-center">
//             {personal.photo && (
//                 <div className="w-40 h-40 rounded-full border-8 border-slate-800 overflow-hidden mb-6 shadow-2xl">
//                     <img src={personal.photo} className="w-full h-full object-cover" alt="Profile" />
//                 </div>
//             )}
//             <h1 className="text-3xl font-black uppercase tracking-tight leading-none mb-2 break-words">{personal.name || "Your Name"}</h1>
//             <p className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] break-words italic">{personal.title}</p>
//         </div>

//         <div className="space-y-4 pt-6 border-t border-slate-800">
//             <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Contacts</h3>
//             {personal.email && <div className="flex items-center gap-3 text-[11px] font-bold text-slate-300 break-all leading-tight"><Mail size={14} className="text-blue-500 shrink-0"/> {personal.email}</div>}
//             {personal.phone && <div className="flex items-center gap-3 text-[11px] font-bold text-slate-300 leading-tight"><Phone size={14} className="text-blue-500 shrink-0"/> {personal.phone}</div>}
//             {personal.location && <div className="flex items-center gap-3 text-[11px] font-bold text-slate-300 break-words leading-tight"><MapPin size={14} className="text-blue-500 shrink-0"/> {personal.location}</div>}
//             {personal.linkedin && <div className="flex items-center gap-3 text-[11px] font-bold text-slate-300 break-all leading-tight"><Linkedin size={14} className="text-blue-500 shrink-0"/> {personal.linkedin}</div>}
//         </div>

//         <div>
//             <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Expertise</h3>
//             <div className="space-y-4">
//                 {[...skills.technical, ...skills.core, ...skills.soft].slice(0, 10).map((s: string, i: number) => (
//                     <div key={i} className="break-words">
//                         <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
//                             <span>{s}</span> <span className="text-blue-400 italic opacity-60">Mastery</span>
//                         </div>
//                         <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
//                             <div className="h-full bg-blue-500 w-[90%] shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>

//         {languages && languages.length > 0 && (
//             <div>
//                 <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Languages</h3>
//                 {languages.map((l: any, i: number) => (
//                     <div key={i} className="flex justify-between text-[10px] font-black uppercase mb-2 text-slate-300">
//                         <span className="break-words">{l.name}</span> <span className="text-blue-500 shrink-0 ml-2">{l.level}</span>
//                     </div>
//                 ))}
//             </div>
//         )}
//       </aside>

//       <main className="flex-1 p-14 bg-white space-y-12">
//         {personal.summary && (
//             <section>
//                 <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-300 mb-4 italic">Introduction</h2>
//                 <p className="text-xs text-slate-600 leading-relaxed font-medium text-justify whitespace-pre-wrap break-words italic">"{personal.summary}"</p>
//             </section>
//         )}

//         <section>
//             <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500 mb-8 flex items-center gap-3">
//                 <span className="h-px w-12 bg-blue-500"></span> Experience
//             </h2>
//             <div className="space-y-10 relative border-l border-slate-100 ml-2 pl-8">
//                 {experience.map((exp: any, i: number) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item relative">
//                             <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-500 shadow-sm"></div>
//                             <div className="flex justify-between items-baseline mb-2">
//                                 <h4 className="font-bold text-slate-900 break-words uppercase text-sm tracking-tight">{exp.role}</h4>
//                                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest shrink-0 ml-4 italic">{exp.date}</span>
//                             </div>
//                             <div className="text-[10px] font-black text-blue-500 uppercase mb-3 tracking-widest break-words leading-none">{exp.company}</div>
//                             <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         {projects && projects.length > 0 && (
//             <section>
//                 <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500 mb-8 flex items-center gap-3">
//                     <span className="h-px w-12 bg-blue-500"></span> Selected Projects
//                 </h2>
//                 <div className="grid grid-cols-1 gap-6">
//                     {projects.map((p: any, i: number) => (
//                         <React.Fragment key={i}>
//                             {p.pageBreak && <div className="manual-page-break" />}
//                             <div className="project-item bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
//                                 <h4 className="font-bold text-xs text-slate-800 break-words uppercase mb-2 tracking-tighter">{p.name}</h4>
//                                 <p className="text-[10px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic">{p.desc}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </section>
//         )}

//         <div className="grid grid-cols-2 gap-10">
//             {education && education.length > 0 && (
//                 <section>
//                     <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-6 border-b pb-2">Academics</h2>
//                     {education.map((edu: any, i: number) => (
//                         <React.Fragment key={i}>
//                             {edu.pageBreak && <div className="manual-page-break" />}
//                             <div className="mb-6 last:mb-0">
//                                 <div className="font-bold text-xs text-slate-800 mb-1 leading-tight break-words uppercase tracking-tighter">{edu.degree}</div>
//                                 <div className="text-[10px] font-bold text-blue-600 uppercase break-words leading-tight">{edu.school}</div>
//                                 <div className="text-[10px] text-slate-400 mt-1 uppercase font-black">{edu.date}</div>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </section>
//             )}

//             {volunteering && volunteering.length > 0 && (
//                 <section>
//                     <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-6 border-b pb-2">Impact</h2>
//                     {volunteering.map((v: any, i: number) => (
//                         <React.Fragment key={i}>
//                             {v.pageBreak && <div className="manual-page-break" />}
//                             <div className="mb-6 last:mb-0">
//                                 <div className="font-bold text-xs text-slate-800 mb-1 break-words uppercase tracking-tighter">{v.role}</div>
//                                 <div className="text-[10px] text-blue-500 uppercase break-words leading-tight font-black">{v.org}</div>
//                                 <div className="text-[9px] text-slate-400 mt-1 uppercase font-bold">{v.date}</div>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </section>
//             )}
//         </div>

//         {awards && awards.length > 0 && (
//             <section className="bg-blue-50/30 p-6 rounded-3xl border border-blue-100 shadow-inner">
//                 <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-4 flex items-center gap-2 tracking-widest">🏆 Distinctions</h2>
//                 <div className="grid grid-cols-2 gap-6">
//                     {awards.map((a: any, i: number) => <div key={i} className="text-[10px] font-bold break-words text-slate-700 uppercase tracking-tighter leading-tight">• {a.name} <span className="block text-[8px] text-slate-400 italic">[{a.issuer}]</span></div>)}
//                 </div>
//             </section>
//         )}

//         {certifications && certifications.length > 0 && (
//             <section className="pt-6 border-t border-slate-50">
//                 <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-4">Certifications</h2>
//                 <div className="flex flex-wrap gap-4">
//                     {certifications.map((c: any, i: number) => <div key={i} className="text-[10px] font-bold text-slate-500 break-words uppercase flex items-center gap-2 border border-slate-100 px-3 py-1 rounded-full"><CheckCircle size={10} className="text-blue-500"/> {c.name}</div>)}
//                 </div>
//             </section>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Creative;

import React from 'react';

const Creative = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = [],
    awards = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="font-sans text-slate-800 bg-white min-h-[1100px] grid grid-cols-12 h-full">
      
      {/* LEFT SIDEBAR (Accents) */}
      <div className="col-span-4 bg-purple-900 text-white p-8 flex flex-col gap-8">
         {/* Photo */}
         {personal.photo && (
            <div className="mb-2 flex justify-center">
                <img src={personal.photo} alt="Profile" className="w-32 h-32 rounded-full border-4 border-purple-400 object-cover shadow-lg" />
            </div>
         )}
         
         {/* Contact */}
         <div className="text-sm space-y-3 opacity-90">
             <h3 className="text-purple-300 font-black uppercase tracking-widest text-xs border-b border-purple-700 pb-2 mb-2">Contact</h3>
             {personal.email && <div className="break-all">{personal.email}</div>}
             {personal.phone && <div>{personal.phone}</div>}
             {personal.location && <div>{personal.location}</div>}
             {personal.linkedin && <div className="text-purple-300">{personal.linkedin}</div>}
         </div>

         {/* Education */}
         {education.length > 0 && (
             <div>
                 <h3 className="text-purple-300 font-black uppercase tracking-widest text-xs border-b border-purple-700 pb-2 mb-4">Education</h3>
                 <div className="space-y-4">
                     {education.map(edu => (
                         <div key={edu.id}>
                             <div className="font-bold text-sm">{edu.school}</div>
                             <div className="text-xs text-purple-200">{edu.degree}</div>
                             <div className="text-[10px] opacity-60">{edu.date}</div>
                         </div>
                     ))}
                 </div>
             </div>
         )}

         {/* Skills */}
         <div>
            <h3 className="text-purple-300 font-black uppercase tracking-widest text-xs border-b border-purple-700 pb-2 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
                {[...technical, ...soft].map((s, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-800 rounded text-xs border border-purple-700">{s}</span>
                ))}
            </div>
         </div>

         {/* Awards / Languages */}
         {(awards.length > 0 || languages.length > 0) && (
            <div>
                 <h3 className="text-purple-300 font-black uppercase tracking-widest text-xs border-b border-purple-700 pb-2 mb-4">Extras</h3>
                 <ul className="text-sm space-y-2">
                     {languages.map(l => <li key={l.id}>{l.name} <span className="opacity-50 text-xs">({l.level})</span></li>)}
                     {awards.map(a => <li key={a.id} className="italic text-purple-200">{a.name}</li>)}
                 </ul>
            </div>
         )}
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-span-8 p-10 bg-slate-50">
          <header className="mb-10 border-b-4 border-purple-900 pb-6">
              <h1 className="text-5xl font-black text-purple-900 uppercase tracking-tighter mb-2 leading-none">{personal.name}</h1>
              <p className="text-2xl text-slate-500 font-light">{personal.title}</p>
          </header>

          {personal.summary && (
              <section className="mb-10">
                  <p className="text-md leading-relaxed text-slate-700 font-medium">{personal.summary}</p>
              </section>
          )}

          {experience.length > 0 && (
              <section className="mb-10">
                  <h2 className="text-xl font-black text-purple-900 uppercase mb-6 flex items-center gap-3">
                      <span className="w-8 h-1 bg-purple-400"></span> Experience
                  </h2>
                  <div className="space-y-8">
                      {experience.map(exp => (
                          <div key={exp.id} className="bg-white p-6 rounded-r-xl border-l-4 border-purple-500 shadow-sm">
                              <div className="flex justify-between items-baseline mb-2">
                                  <h3 className="font-bold text-lg text-slate-900">{exp.role}</h3>
                                  <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2 py-1 rounded">{exp.date}</span>
                              </div>
                              <div className="text-sm font-bold text-slate-400 mb-3">{exp.company}</div>
                              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {projects.length > 0 && (
              <section>
                   <h2 className="text-xl font-black text-purple-900 uppercase mb-6 flex items-center gap-3">
                      <span className="w-8 h-1 bg-purple-400"></span> Projects
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                      {projects.map(p => (
                          <div key={p.id} className="bg-white p-4 rounded shadow-sm">
                              <h4 className="font-bold text-slate-800">{p.name}</h4>
                              <p className="text-xs text-slate-500 mt-2">{p.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>
          )}
      </div>
    </div>
  );
};

export default Creative;