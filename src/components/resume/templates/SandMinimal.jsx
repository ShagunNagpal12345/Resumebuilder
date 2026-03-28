// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const SandMinimal = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionHeading = ({ title }) => (
//     <h3 className="text-[11px] font-black uppercase text-[#A79284] tracking-[0.5em] mb-12 text-center leading-none">
//         {title}
//     </h3>
//   );

//   return (
//     <div className="w-full bg-[#FAF9F6] min-h-[1100px] shadow-2xl font-sans p-16 text-slate-700 resume-preview-wrapper flex flex-col items-center">
//       <header className="text-center mb-20 max-w-4xl w-full border-b-2 border-[#E5E1DA] pb-16 shrink-0">
//         <h1 className="text-6xl font-light text-slate-900 tracking-tighter mb-4 break-words leading-none uppercase">{personal.name || "Your Name"}</h1>
//         <p className="text-lg font-bold text-[#A79284] uppercase tracking-[0.4em] mb-10 break-words italic">{personal.title}</p>
//         <div className="flex justify-center flex-wrap gap-8 text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none">
//             {personal.email && <span className="break-all flex items-center gap-2"><Mail size={12}/> {personal.email}</span>}
//             {personal.phone && <span className="flex items-center gap-2"><Phone size={12}/> {personal.phone}</span>}
//             {personal.location && <span className="break-words flex items-center gap-2"><MapPin size={12}/> {personal.location}</span>}
//             {personal.linkedin && <span className="break-all text-[#A79284] flex items-center gap-2 font-bold tracking-tighter"><Linkedin size={12}/> CONNECT</span>}
//         </div>
//       </header>

//       <div className="space-y-24 max-w-5xl w-full flex-1">
//         {personal.summary && (
//             <section className="text-center px-20 border-l border-r border-[#E5E1DA]">
//                 <h3 className="text-[10px] font-black uppercase text-[#A79284] tracking-[0.4em] mb-8 italic">Professional Abstract</h3>
//                 <p className="text-[15px] leading-loose italic text-slate-500 whitespace-pre-wrap break-words">"{personal.summary}"</p>
//             </section>
//         )}

//         <section>
//             <SectionHeading title="Experience Record" />
//             <div className="space-y-20">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item">
//                             <div className="flex justify-between font-black text-slate-800 text-xl mb-2 uppercase tracking-tighter italic border-b border-slate-100 pb-2">
//                                 <h4 className="break-words">{exp.role}</h4><span className="shrink-0 ml-10 text-[12px] opacity-40 font-bold tracking-[0.2em]">{exp.date}</span>
//                             </div>
//                             <div className="text-[12px] font-black text-[#A79284] uppercase mb-8 tracking-[0.3em] break-words flex items-center gap-4 italic"><div className="w-8 h-px bg-[#A79284] opacity-20"></div> {exp.company}</div>
//                             <p className="text-[15px] text-slate-500 leading-relaxed text-justify whitespace-pre-wrap break-words font-medium italic pr-12">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         <section>
//              <SectionHeading title="Technical Mastery" />
//              <p className="text-[13px] text-slate-400 font-bold leading-[2.5] text-center uppercase tracking-[0.3em] break-words px-16 border-y border-[#E5E1DA] py-8">
//                 {[...skills.core, ...skills.technical, ...skills.soft].join(' • ')}
//              </p>
//         </section>

//         <div className="grid grid-cols-2 gap-24">
//             {education.length > 0 && (
//                 <section>
//                     <h3 className="text-[10px] font-black uppercase text-[#A79284] tracking-[0.4em] mb-10 text-right border-r border-[#E5E1DA] pr-6">Academic Path</h3>
//                     <div className="space-y-10">
//                         {education.map((edu, i) => (
//                             <React.Fragment key={i}>
//                                 {edu.pageBreak && <div className="manual-page-break" />}
//                                 <div className="education-item text-right group">
//                                     <div className="font-black text-slate-800 text-sm mb-2 uppercase break-words italic group-hover:text-[#A79284] transition-colors">{edu.degree}</div>
//                                     <div className="text-[11px] font-black text-[#A79284] uppercase tracking-widest break-words leading-tight">{edu.school}</div>
//                                     <div className="text-[10px] text-slate-400 mt-2 font-bold tracking-widest uppercase">{edu.date}</div>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </section>
//             )}

//             {projects.length > 0 && (
//                 <section>
//                     <h3 className="text-[10px] font-black uppercase text-[#A79284] tracking-[0.4em] mb-10 border-l border-[#E5E1DA] pl-6">Case Portfolio</h3>
//                     <div className="space-y-10">
//                         {projects.map((p, i) => (
//                             <React.Fragment key={i}>
//                                 {p.pageBreak && <div className="manual-page-break" />}
//                                 <div className="project-item group">
//                                     <div className="font-black text-slate-800 text-sm mb-2 uppercase break-words italic group-hover:text-[#A79284] transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#A79284]/30 shrink-0"></div> {p.name}</div>
//                                     <p className="text-[12px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic pl-4 font-medium opacity-80">{p.desc}</p>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </section>
//             )}
//         </div>

//         <footer className="pt-20 border-t-2 border-[#E5E1DA] grid grid-cols-3 gap-16 uppercase text-[9px] font-black tracking-[0.4em] text-slate-300 text-center italic">
//             {awards.length > 0 && <div>{awards.map((a, i) => <p key={i} className="mb-2 break-words text-[#A79284] underline underline-offset-4 decoration-[#A79284]/20">🏆 {a.name}</p>)}</div>}
//             {languages.length > 0 && <div className="border-x border-[#E5E1DA]">{languages.map((l, i) => <p key={i} className="mb-1 break-words">{l.name} — {l.level}</p>)}</div>}
//             {volunteering.length > 0 && <div>{volunteering.slice(0, 2).map((v, i) => <p key={i} className="mb-1 break-words text-slate-800 font-bold uppercase">{v.role} @ {v.org}</p>)}</div>}
//             {certifications.length > 0 && (
//                 <div className="col-span-3 pt-12 flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all">
//                     {certifications.map((c, i) => <span key={i} className="border-b border-slate-100">{c.name}</span>)}
//                 </div>
//             )}
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default SandMinimal;

import React from 'react';

const SandMinimal = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    languages = [],
    awards = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="font-sans text-stone-700 bg-[#fdfcf8] min-h-[1100px] p-12">
      
      {/* HEADER */}
      <header className="text-center mb-12 border-b border-stone-200 pb-8">
          <h1 className="text-4xl font-serif text-stone-800 tracking-wide mb-2 uppercase">{personal.name}</h1>
          <p className="text-md text-stone-500 tracking-widest uppercase text-xs font-bold mb-6">{personal.title}</p>
          
          <div className="flex justify-center gap-6 text-xs font-bold text-stone-400 uppercase tracking-widest">
              {personal.phone && <span>{personal.phone}</span>}
              {personal.email && <span>{personal.email}</span>}
              {personal.location && <span>{personal.location}</span>}
          </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
          
          {/* LEFT: MAIN */}
          <div className="col-span-8 space-y-10">
              {personal.summary && (
                  <section>
                      <h3 className="text-stone-400 font-bold uppercase text-xs tracking-widest mb-3">Profile</h3>
                      <p className="text-stone-600 leading-7 text-sm">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="text-stone-400 font-bold uppercase text-xs tracking-widest mb-6">Work History</h3>
                      <div className="space-y-8">
                          {experience.map(exp => (
                              <div key={exp.id}>
                                  <div className="flex justify-between items-baseline mb-1">
                                      <h4 className="font-serif text-lg text-stone-800 font-bold">{exp.role}</h4>
                                      <span className="text-xs font-bold text-stone-400">{exp.date}</span>
                                  </div>
                                  <div className="text-sm font-bold text-stone-500 mb-2 uppercase">{exp.company}</div>
                                  <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* RIGHT: SIDEBAR */}
          <div className="col-span-4 space-y-10">
              
              {personal.photo && (
                  <img src={personal.photo} alt="Profile" className="w-32 h-32 rounded-full object-cover mx-auto grayscale opacity-80" />
              )}

              <section>
                  <h3 className="text-stone-400 font-bold uppercase text-xs tracking-widest mb-4 border-b border-stone-200 pb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="bg-stone-100 text-stone-600 px-2 py-1 text-xs rounded">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="text-stone-400 font-bold uppercase text-xs tracking-widest mb-4 border-b border-stone-200 pb-2">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-stone-800 text-sm">{edu.school}</div>
                                  <div className="text-xs text-stone-500 italic">{edu.degree}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {(awards.length > 0 || languages.length > 0) && (
                  <section>
                      <h3 className="text-stone-400 font-bold uppercase text-xs tracking-widest mb-4 border-b border-stone-200 pb-2">Extras</h3>
                      <ul className="text-sm text-stone-600 space-y-2">
                          {awards.map(a => <li key={a.id}>★ {a.name}</li>)}
                          {languages.map(l => <li key={l.id}>• {l.name}</li>)}
                      </ul>
                  </section>
              )}

          </div>
      </div>
    </div>
  );
};

export default SandMinimal;