// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, Zap, CheckCircle } from 'lucide-react';

// const TealInnovator = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans p-16 resume-preview-wrapper flex flex-col">
//       <header className="flex justify-between items-start mb-20 shrink-0 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0097A7]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
//         <div className="border-l-[16px] border-[#0097A7] pl-10 group">
//           <h1 className="text-7xl font-black text-slate-900 leading-none uppercase tracking-tighter break-words italic transition-colors group-hover:text-[#0097A7]">{personal.name || "Your Name"}</h1>
//           <p className="text-2xl font-bold text-[#0097A7] uppercase tracking-[0.3em] mt-4 break-words italic opacity-70 underline decoration-[#0097A7]/10 decoration-8 underline-offset-[16px]">{personal.title}</p>
//         </div>
//         <div className="text-right text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 space-y-3 shrink-0 ml-16 italic border-r-4 border-slate-50 pr-6">
//           {personal.email && <p className="break-all border-b border-slate-50 pb-1">{personal.email}</p>}
//           {personal.phone && <p className="border-b border-slate-100 pb-1">{personal.phone}</p>}
//           {personal.location && <p className="opacity-60">{personal.location}</p>}
//           {personal.linkedin && <p className="text-[#0097A7] mt-4 font-black">LinkedIn Profile</p>}
//         </div>
//       </header>

//       <div className="grid grid-cols-12 gap-16 flex-1">
//         {/* HORIZONTAL SKILL BAR */}
//         <div className="col-span-12 bg-[#0097A7] p-10 rounded-[4rem] text-white flex flex-wrap justify-around items-center gap-8 shrink-0 shadow-xl shadow-[#0097A7]/20 border-[8px] border-white ring-8 ring-[#0097A7]/5 mb-10">
//             {[...skills.technical, ...skills.core].slice(0, 5).map((s, i) => (
//                 <div key={i} className="text-center px-6 border-x border-white/10 last:border-0 group cursor-default">
//                     <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-2 opacity-50 italic group-hover:opacity-100 transition-opacity">Tech Core</div>
//                     <div className="font-black text-xl break-words tracking-tighter group-hover:scale-110 transition-transform duration-500">{s}</div>
//                 </div>
//             ))}
//         </div>

//         <div className="col-span-8 space-y-20 border-r border-slate-50 pr-12">
//             {personal.summary && (
//                 <section>
//                     <p className="text-lg leading-[1.8] text-slate-500 font-medium whitespace-pre-wrap break-words text-justify italic border-l-8 border-slate-100 pl-10 py-2 shadow-sm rounded-r-[3rem] bg-[#FAF9F6]/50">"{personal.summary}"</p>
//                 </section>
//             )}

//             <section>
//                 <h3 className="text-sm font-black uppercase tracking-[0.6em] text-[#0097A7] mb-12 flex items-center gap-6 leading-none italic border-b border-slate-50 pb-4">
//                     <Briefcase size={22} className="opacity-30"/> Professional Logic
//                 </h3>
//                 <div className="space-y-16">
//                     {experience.map((exp, i) => (
//                         <React.Fragment key={i}>
//                             {exp.pageBreak && <div className="manual-page-break" />}
//                             <div className="experience-item group">
//                                 <div className="flex justify-between font-black text-slate-800 mb-2 uppercase tracking-tighter leading-none border-b-4 border-slate-50 pb-3 group-hover:border-[#0097A7]/10 transition-colors">
//                                     <h4 className="break-words text-2xl">{exp.role}</h4><span className="shrink-0 ml-12 font-black text-[12px] text-slate-300 tracking-[0.5em] italic">{exp.date}</span>
//                                 </div>
//                                 <div className="text-[13px] font-black uppercase text-[#0097A7] mb-6 tracking-[0.3em] break-words italic leading-none flex items-center gap-4 italic"><div className="w-10 h-px bg-[#0097A7] opacity-30"></div> {exp.company}</div>
//                                 <p className="text-[16px] text-slate-500 leading-[1.8] whitespace-pre-wrap break-words text-justify italic font-medium pr-10">{exp.desc}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </section>
//         </div>

//         <div className="col-span-4 space-y-20">
//             {projects.length > 0 && (
//                 <section>
//                     <h3 className="text-[11px] font-black uppercase text-[#0097A7] mb-10 flex items-center gap-4 tracking-[0.4em] italic leading-none border-b border-slate-100 pb-3"><Zap size={18} className="opacity-30"/> Innovations</h3>
//                     <div className="space-y-10">
//                         {projects.map((p, i) => (
//                             <React.Fragment key={i}>
//                                 {p.pageBreak && <div className="manual-page-break" />}
//                                 <div className="project-item bg-[#FAF9F6] p-8 rounded-[3.5rem] border border-slate-100 group hover:border-[#0097A7]/30 transition-all shadow-xl shadow-slate-200/50">
//                                     <h4 className="font-black text-base text-slate-800 break-words uppercase mb-4 tracking-tighter leading-none italic group-hover:text-[#0097A7]">{p.name}</h4>
//                                     <p className="text-[13px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic font-medium opacity-80">{p.desc}</p>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </section>
//             )}

//             {education.length > 0 && (
//                 <section>
//                     <h3 className="text-[11px] font-black uppercase text-[#0097A7] mb-10 tracking-[0.4em] flex items-center gap-4 italic leading-none border-b border-slate-100 pb-3"><GraduationCap size={18} className="opacity-30"/> Academics</h3>
//                     {education.map((edu, i) => (
//                         <React.Fragment key={i}>
//                             {edu.pageBreak && <div className="manual-page-break" />}
//                             <div className="mb-10 last:mb-0 border-l-4 border-slate-100 pl-8 group">
//                                 <div className="font-black text-lg text-slate-800 break-words leading-tight uppercase mb-2 group-hover:text-[#0097A7] transition-colors italic tracking-tighter">{edu.degree}</div>
//                                 <div className="text-[12px] font-bold text-slate-400 break-words uppercase tracking-widest leading-tight">{edu.school}</div>
//                                 <div className="text-[10px] text-[#0097A7] font-black mt-4 uppercase tracking-[0.4em]">{edu.date}</div>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </section>
//             )}

//             {certifications.length > 0 && (
//                 <section className="bg-[#E0F7FA] p-8 rounded-[4rem] border-[6px] border-white shadow-2xl shadow-cyan-100">
//                     <h3 className="text-[11px] font-black uppercase text-[#006064] mb-8 flex items-center gap-4 italic border-b border-[#006064]/10 pb-3 tracking-[0.3em]"><Award size={18}/> Credentials</h3>
//                     <div className="space-y-4">
//                         {certifications.map((c, i) => (
//                             <div key={i} className="text-[11px] font-bold text-[#006064] break-words uppercase tracking-widest leading-tight italic flex items-center gap-3"><CheckCircle size={14} className="opacity-30 shrink-0"/> {c.name}</div>
//                         ))}
//                     </div>
//                 </section>
//             )}
//         </div>
//       </div>

//       <footer className="mt-24 pt-16 border-t-[12px] border-slate-50 grid grid-cols-3 gap-20 font-bold uppercase text-[10px] tracking-[0.8em] text-slate-200 text-center italic leading-none">
//             {awards.length > 0 && <div className="space-y-3">{awards.map((a, i) => <p key={i} className="mb-1 break-words text-[#0097A7] font-black drop-shadow-sm tracking-tighter uppercase underline decoration-[#0097A7]/10 underline-offset-8">🏆 {a.name}</p>)}</div>}
//             {languages.length > 0 && <div className="border-x-2 border-slate-50 px-10 space-y-2">{languages.map((l, i) => <p key={i} className="mb-1 break-words italic text-slate-400 font-bold tracking-widest">{l.name} // {l.level}</p>)}</div>}
//             {volunteering.length > 0 && <div className="space-y-3 pr-6">{volunteering.slice(0, 3).map((v, i) => <p key={i} className="mb-1 break-words text-slate-800 italic font-black tracking-tighter opacity-40">{v.role} @ {v.org}</p>)}</div>}
//       </footer>
//     </div>
//   );
// };

// export default TealInnovator;

import React from 'react';

const TealInnovator = ({ data }) => {
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
    <div className="p-10 font-sans text-slate-700 bg-white min-h-[1100px]">
      
      {/* HEADER */}
      <header className="flex gap-8 mb-12">
          <div className="w-2 bg-teal-500"></div>
          <div className="flex-1">
              <h1 className="text-5xl font-bold uppercase text-slate-900 tracking-tighter mb-2">{personal.name}</h1>
              <div className="flex justify-between items-end border-b-2 border-slate-100 pb-4">
                  <p className="text-xl text-teal-600 font-medium">{personal.title}</p>
                  <div className="text-right text-xs font-bold text-slate-400 uppercase tracking-widest space-y-1">
                      {personal.email && <div>{personal.email}</div>}
                      {personal.phone && <div>{personal.phone}</div>}
                      {personal.location && <div>{personal.location}</div>}
                  </div>
              </div>
          </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
          
          {/* MAIN COL */}
          <div className="col-span-8 space-y-10">
              {personal.summary && (
                  <section>
                      <h3 className="bg-teal-50 text-teal-800 font-bold uppercase text-xs px-3 py-1 inline-block mb-4 rounded">Profile</h3>
                      <p className="text-slate-600 leading-7 text-sm">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="bg-teal-50 text-teal-800 font-bold uppercase text-xs px-3 py-1 inline-block mb-6 rounded">Experience</h3>
                      <div className="space-y-8">
                          {experience.map(exp => (
                              <div key={exp.id}>
                                  <div className="flex justify-between items-baseline mb-1">
                                      <h4 className="font-bold text-lg text-slate-900">{exp.role}</h4>
                                      <span className="text-xs font-bold text-slate-400">{exp.date}</span>
                                  </div>
                                  <div className="text-sm font-bold text-teal-600 mb-2 uppercase">{exp.company}</div>
                                  <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {projects.length > 0 && (
                  <section>
                      <h3 className="bg-teal-50 text-teal-800 font-bold uppercase text-xs px-3 py-1 inline-block mb-6 rounded">Projects</h3>
                      <div className="grid grid-cols-2 gap-4">
                          {projects.map(p => (
                              <div key={p.id} className="border border-slate-100 p-4 rounded hover:border-teal-200 transition-colors">
                                  <h4 className="font-bold text-sm text-slate-800">{p.name}</h4>
                                  <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* SIDEBAR */}
          <div className="col-span-4 space-y-10">
              <section>
                  <h3 className="text-teal-800 font-bold uppercase text-xs mb-4">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold border-l-2 border-teal-500">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="text-teal-800 font-bold uppercase text-xs mb-4">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-slate-900 text-sm">{edu.school}</div>
                                  <div className="text-xs text-teal-600 font-medium">{edu.degree}</div>
                                  <div className="text-[10px] text-slate-400 mt-1">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {awards.length > 0 && (
                  <section>
                      <h3 className="text-teal-800 font-bold uppercase text-xs mb-4">Awards</h3>
                      <ul className="text-sm text-slate-600 space-y-2">
                          {awards.map(a => <li key={a.id}>★ {a.name}</li>)}
                      </ul>
                  </section>
              )}
          </div>

      </div>
    </div>
  );
};

export default TealInnovator;