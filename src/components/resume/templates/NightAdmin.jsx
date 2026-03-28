// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const NightAdmin = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionHeader = ({ icon, title }) => (
//     <h3 className="text-[11px] font-black uppercase text-white tracking-[0.5em] mb-10 border-b border-slate-800 pb-3 flex items-center gap-4 italic shadow-lg">
//         {icon && <span className="text-indigo-400">{icon}</span>} {title}
//     </h3>
//   );

//   return (
//     <div className="w-full bg-[#111827] text-slate-300 min-h-[1100px] shadow-2xl font-sans p-16 flex flex-col resume-preview-wrapper overflow-hidden">
//       <header className="border-b-8 border-slate-800 pb-12 mb-12 flex justify-between items-end shrink-0 shadow-2xl">
//         <div className="flex gap-10 items-center">
//           {personal.photo && <img src={personal.photo} className="w-32 h-32 rounded-3xl border-4 border-slate-800 object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-3 hover:rotate-0 transition-transform duration-500" alt="Profile" />}
//           <div>
//             <h1 className="text-6xl font-black text-white uppercase tracking-tighter mb-2 break-words leading-none italic shadow-indigo-900">{personal.name || "Your Name"}</h1>
//             <p className="text-2xl font-bold text-indigo-400 uppercase tracking-[0.5em] break-words leading-tight italic opacity-70 underline underline-offset-[16px] decoration-indigo-900 decoration-8">{personal.title}</p>
//           </div>
//         </div>
//         <div className="text-[11px] font-black text-right text-slate-500 uppercase space-y-3 shrink-0 ml-12 tracking-[0.25em] border-r-4 border-indigo-500 pr-6">
//           {personal.email && <div className="break-all border-b border-slate-800 pb-1">{personal.email}</div>}
//           {personal.phone && <div className="border-b border-slate-800 pb-1">{personal.phone}</div>}
//           {personal.location && <div className="break-words italic">{personal.location}</div>}
//         </div>
//       </header>

//       <div className="grid grid-cols-12 gap-16 flex-1">
//         <main className="col-span-8 space-y-16">
//           {personal.summary && (
//               <section className="border-l-[16px] border-indigo-500 pl-10 bg-slate-900/60 p-10 rounded-r-[4rem] shadow-2xl">
//                 <p className="text-[16px] leading-[1.8] text-slate-400 whitespace-pre-wrap break-words text-justify italic font-medium">"{personal.summary}"</p>
//               </section>
//           )}

//           <section>
//             <SectionHeader icon={<Briefcase size={20}/>} title="Career Tenures" />
//             <div className="space-y-16">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item relative group border-l-2 border-slate-800 pl-10 ml-2">
//                             <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#111827] border-4 border-indigo-500 shadow-[0_0_15px_#6366f1] group-hover:scale-150 transition-transform duration-500"></div>
//                             <div className="flex justify-between text-white font-black text-2xl mb-2 uppercase tracking-tighter leading-none transition-colors group-hover:text-indigo-400">
//                                 <h4 className="break-words">{exp.role}</h4>
//                                 <span className="shrink-0 ml-12 text-[12px] text-slate-500 font-bold italic tracking-[0.4em]">{exp.date}</span>
//                             </div>
//                             <div className="text-[14px] font-black text-indigo-500 uppercase mb-8 tracking-[0.4em] break-words leading-none flex items-center gap-4 italic"><div className="w-12 h-px bg-indigo-900 opacity-50"></div> {exp.company}</div>
//                             <p className="text-[15px] leading-[1.8] text-slate-400 whitespace-pre-wrap break-words text-justify italic font-medium pr-10">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//           </section>

//           {projects.length > 0 && (
//               <section>
//                 <SectionHeader icon={<Layers size={20}/>} title="Strategic Deployments" />
//                 <div className="grid grid-cols-2 gap-10">
//                     {projects.map((proj, i) => (
//                         <div key={i} className="bg-slate-900/80 p-8 rounded-[3.5rem] border-2 border-slate-800 group hover:border-indigo-900 transition-all shadow-2xl shadow-black transform hover:-translate-y-2">
//                             <h4 className="font-black text-base text-indigo-400 mb-4 uppercase tracking-[0.2em] break-words italic border-b border-slate-800 pb-2 flex items-center gap-3"><CheckCircle size={14}/> {proj.name}</h4>
//                             <p className="text-[13px] text-slate-500 whitespace-pre-wrap break-words leading-relaxed font-medium italic opacity-80">{proj.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//               </section>
//           )}
//         </main>

//         <aside className="col-span-4 space-y-20 shrink-0">
//             <section>
//                 <SectionHeader icon={<Cpu size={20}/>} title="Stack" />
//                 <div className="flex flex-wrap gap-3 px-2">
//                     {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//                         <span key={i} className="bg-slate-900 px-4 py-2 rounded-xl text-[10px] font-black text-slate-400 border-2 border-slate-800 break-words lowercase hover:text-white hover:border-indigo-500 transition-all shadow-2xl uppercase tracking-widest">{s}</span>
//                     ))}
//                 </div>
//             </section>

//             {education.length > 0 && (
//                 <section>
//                     <SectionHeader icon={<GraduationCap size={20}/>} title="Base" />
//                     {education.map((edu, i) => (
//                         <div key={i} className="mb-10 last:mb-0 border-l-4 border-slate-800 pl-8 group">
//                             <div className="font-black text-lg text-slate-100 leading-tight break-words uppercase tracking-tighter mb-2 italic group-hover:text-indigo-400 transition-colors shadow-indigo-950">{edu.degree}</div>
//                             <div className="text-[12px] text-indigo-800 font-bold break-words uppercase tracking-widest italic">{edu.school}</div>
//                             <div className="text-[10px] text-slate-600 mt-4 font-black uppercase tracking-[0.4em]">{edu.date}</div>
//                         </div>
//                     ))}
//                 </section>
//             )}

//             {certifications.length > 0 && (
//                 <section>
//                     <SectionHeader title="Badges" />
//                     {certifications.map((c, i) => (
//                         <div key={i} className="mb-4 text-[11px] font-black border-b border-slate-900 pb-3 italic">
//                             <div className="text-slate-100 break-words uppercase leading-tight">• {c.name}</div>
//                             <div className="text-indigo-950 break-words uppercase text-[9px] mt-2 font-bold tracking-widest">{c.issuer}</div>
//                         </div>
//                     ))}
//                 </section>
//             )}

//             {languages.length > 0 && (
//                 <section>
//                     <SectionHeader title="Tongues" />
//                     {languages.map((l, i) => (
//                         <div key={i} className="flex justify-between text-[11px] mb-3 font-black uppercase tracking-[0.3em] text-slate-500 italic border-b border-slate-900 pb-1 group hover:text-indigo-400 cursor-default">
//                             <span className="break-words">{l.name}</span> <span className="text-indigo-400 opacity-20 group-hover:opacity-100">{l.level}</span>
//                         </div>
//                     ))}
//                 </section>
//             )}
//         </aside>
//       </div>

//       <footer className="mt-auto pt-20 border-t-8 border-slate-800 grid grid-cols-2 gap-20 font-black uppercase text-[11px] tracking-[0.8em] text-slate-700 italic text-center">
//             {awards.length > 0 && (
//                 <div className="col-span-2 flex flex-wrap justify-center gap-12 border-b-2 border-slate-900 pb-12 shadow-inner">
//                     {awards.map((a, i) => <div key={i} className="break-words text-indigo-500 transition-colors hover:text-white cursor-default shadow-black drop-shadow-2xl">🏅 {a.name}</div>)}
//                 </div>
//             )}
//             <div className="col-span-2 pt-6 opacity-10 tracking-[1em] text-[9px]">Confidential Document — Generated for {personal.name} — No Reproduction permitted</div>
//       </footer>
//     </div>
//   );
// };

// export default NightAdmin;

import React from 'react';

const NightAdmin = ({ data }) => {
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
    <div className="flex w-full min-h-[1100px] bg-white font-sans text-slate-900">
      
      {/* SIDEBAR - DARK */}
      <aside className="w-[280px] bg-[#1a1c23] text-slate-300 p-6 flex flex-col gap-8 flex-shrink-0">
          
          <div className="text-center pb-6 border-b border-slate-700">
              {personal.photo ? (
                  <img src={personal.photo} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-slate-600 object-cover" />
              ) : (
                  <div className="w-24 h-24 rounded-full bg-slate-800 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-slate-500">
                      {personal.name?.charAt(0)}
                  </div>
              )}
              <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Contact</h3>
              <div className="text-[10px] space-y-1 opacity-70">
                  <div>{personal.email}</div>
                  <div>{personal.phone}</div>
                  <div>{personal.location}</div>
              </div>
          </div>

          <section>
              <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                  {[...technical, ...soft].map((s, i) => (
                      <span key={i} className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-200 border border-slate-700">{s}</span>
                  ))}
              </div>
          </section>

          {education.length > 0 && (
              <section>
                  <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-4">Education</h3>
                  <div className="space-y-4">
                      {education.map(edu => (
                          <div key={edu.id}>
                              <div className="text-slate-200 text-xs font-bold">{edu.school}</div>
                              <div className="text-[10px] text-slate-500">{edu.degree}</div>
                              <div className="text-[10px] text-slate-600">{edu.date}</div>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {languages.length > 0 && (
              <section>
                  <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-4">Languages</h3>
                  <ul className="text-xs space-y-1">
                      {languages.map(l => <li key={l.id}>{l.name} - {l.level}</li>)}
                  </ul>
              </section>
          )}

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 bg-[#f4f5f7]">
          
          <header className="mb-10">
              <h1 className="text-4xl font-black uppercase text-slate-800 tracking-tight">{personal.name}</h1>
              <div className="inline-block bg-slate-800 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded mt-2">{personal.title}</div>
          </header>

          {personal.summary && (
              <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-8">
                  <h3 className="text-xs font-black uppercase text-slate-400 mb-2">About</h3>
                  <p className="text-sm text-slate-600 leading-6">{personal.summary}</p>
              </section>
          )}

          {experience.length > 0 && (
              <section className="mb-8">
                  <h3 className="text-xs font-black uppercase text-slate-400 mb-4 pl-1">Work History</h3>
                  <div className="space-y-4">
                      {experience.map(exp => (
                          <div key={exp.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                              <div className="flex justify-between items-center mb-2">
                                  <h4 className="font-bold text-lg text-slate-800">{exp.role}</h4>
                                  <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">{exp.date}</span>
                              </div>
                              <div className="text-sm text-indigo-600 font-bold mb-3">{exp.company}</div>
                              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {projects.length > 0 && (
              <section>
                  <h3 className="text-xs font-black uppercase text-slate-400 mb-4 pl-1">Projects</h3>
                  <div className="grid grid-cols-2 gap-4">
                      {projects.map(p => (
                          <div key={p.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                              <h4 className="font-bold text-sm text-slate-800">{p.name}</h4>
                              <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>
          )}
      </main>

    </div>
  );
};

export default NightAdmin;