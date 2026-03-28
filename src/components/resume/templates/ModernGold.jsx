// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const ModernGold = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SideHeader = ({ title }) => (
//     <h3 className="text-xs font-black uppercase text-white tracking-[0.4em] mb-6 border-b border-white/20 pb-2">{title}</h3>
//   );

//   return (
//     <div className="w-full flex bg-white min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper">
//       <aside className="w-[30%] bg-[#A79284] text-white p-12 flex flex-col gap-12 shrink-0 shadow-inner">
//         <div className="text-center">
//             {personal.photo && <img src={personal.photo} className="w-36 h-36 rounded-full border-4 border-white/20 mx-auto object-cover mb-8 shadow-2xl" alt="Profile"/>}
//             <h1 className="text-3xl font-black uppercase leading-none break-words tracking-tighter">{personal.name || "Your Name"}</h1>
//             <div className="h-1 w-12 bg-white/30 mx-auto mt-6 rounded-full"></div>
//         </div>

//         <div className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-white/80">
//           {personal.email && <div className="flex items-center gap-4 break-all leading-tight"><Mail size={16}/> {personal.email}</div>}
//           {personal.phone && <div className="flex items-center gap-4 leading-tight"><Phone size={16}/> {personal.phone}</div>}
//           {personal.location && <div className="flex items-center gap-4 break-words leading-tight"><MapPin size={16}/> {personal.location}</div>}
//         </div>

//         <section>
//             <SideHeader title="Mastery" />
//             <div className="flex flex-wrap gap-2">
//                 {[...skills.technical, ...skills.core].map((s, i) => (
//                     <span key={i} className="bg-white/10 px-2 py-1 rounded text-[9px] font-black uppercase border border-white/10">{s}</span>
//                 ))}
//             </div>
//         </section>

//         {education.length > 0 && (
//             <section>
//                 <SideHeader title="Academic" />
//                 {education.map((edu, i) => (
//                     <div key={i} className="mb-6 last:mb-0 border-l-2 border-white/20 pl-4 italic">
//                         <div className="font-black text-[12px] break-words uppercase tracking-tighter leading-tight mb-1 shadow-mocha-900">{edu.degree}</div>
//                         <div className="opacity-60 text-[10px] break-words">{edu.school} | {edu.date}</div>
//                     </div>
//                 ))}
//             </section>
//         )}

//         {languages.length > 0 && (
//             <section>
//                 <SideHeader title="Tongues" />
//                 {languages.map((l, i) => <div key={i} className="flex justify-between text-[11px] font-bold uppercase opacity-60 mb-2 border-b border-white/10 pb-1 italic"><span className="break-words">{l.name}</span><span className="shrink-0">{l.level}</span></div>)}
//             </section>
//         )}
//       </aside>

//       <main className="flex-1 p-16 space-y-16 bg-[#FAF9F6] flex flex-col">
//         <header className="mb-10 shrink-0">
//             <p className="text-2xl font-bold text-[#A79284] uppercase tracking-[0.4em] break-words italic opacity-70 mb-4">{personal.title}</p>
//             {personal.summary && (
//                 <div className="border-l-[12px] border-[#A79284]/20 pl-10 py-4 shadow-sm bg-white rounded-r-[3rem]">
//                     <p className="text-[15px] leading-relaxed text-slate-500 font-medium whitespace-pre-wrap break-words text-justify italic">"{personal.summary}"</p>
//                 </div>
//             )}
//         </header>

//         <section>
//           <h2 className="text-[#A79284] font-black text-xs uppercase tracking-[0.5em] mb-12 border-b-2 border-[#A79284]/10 pb-3 flex items-center gap-4 italic"><Briefcase size={18}/> Professional Ledger</h2>
//           <div className="space-y-12">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div className="experience-item group">
//                     <div className="flex justify-between font-black text-slate-800 text-xl mb-2 tracking-tighter uppercase group-hover:text-[#A79284] transition-colors leading-none">
//                         <h4 className="break-words">{exp.role}</h4>
//                         <span className="shrink-0 ml-10 text-[11px] text-slate-300 tracking-[0.4em] italic">{exp.date}</span>
//                     </div>
//                     <div className="text-[12px] font-black text-[#A79284] uppercase mb-6 tracking-[0.3em] break-words leading-none italic">{exp.company}</div>
//                     <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic font-medium pr-8">{exp.desc}</p>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </section>

//         {projects.length > 0 && (
//             <section>
//                 <h2 className="text-[#A79284] font-black text-xs uppercase tracking-[0.5em] mb-10 italic border-l-4 border-[#A79284] pl-4">Signature Cases</h2>
//                 <div className="grid grid-cols-2 gap-10">
//                     {projects.map((p, i) => (
//                         <div key={i} className="project-item bg-white p-8 rounded-[3.5rem] shadow-xl shadow-mocha-50 border border-slate-50 transition-transform hover:scale-105">
//                             <h4 className="font-black text-sm text-slate-800 break-words uppercase mb-4 tracking-tighter italic border-b border-slate-50 pb-2 flex items-center gap-3"><Layers size={14} className="text-[#A79284]"/> {p.name}</h4>
//                             <p className="text-[11px] text-slate-400 leading-relaxed whitespace-pre-wrap break-words italic">{p.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         )}

//         <footer className="mt-auto pt-16 border-t border-slate-100 grid grid-cols-3 gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 italic">
//             {awards.length > 0 && <div>{awards.map((a, i) => <p key={i} className="mb-2 break-words text-[#A79284] font-black underline decoration-mocha-100 underline-offset-4 tracking-tighter italic shadow-mocha-50">🏆 {a.name}</p>)}</div>}
//             {volunteering.length > 0 && <div className="text-center">{volunteering.slice(0, 2).map((v, i) => <p key={i} className="mb-2 break-words italic font-bold text-slate-400 shadow-sm">{v.role} @ {v.org}</p>)}</div>}
//             {certifications.length > 0 && <div className="text-right">{certifications.map((c, i) => <p key={i} className="mb-2 break-words italic shadow-sm uppercase">• {c.name}</p>)}</div>}
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default ModernGold;

import React from 'react';

const ModernGold = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    certifications = [],
    awards = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="font-serif text-slate-800 bg-white min-h-[1100px]">
      
      {/* HEADER */}
      <header className="bg-slate-900 text-yellow-500 p-12 text-center">
          <h1 className="text-5xl font-bold uppercase tracking-widest mb-2">{personal.name}</h1>
          <p className="text-white font-sans tracking-[0.2em] uppercase text-sm">{personal.title}</p>
          
          <div className="mt-8 flex justify-center gap-6 text-xs font-sans text-slate-400 uppercase tracking-widest">
              {personal.phone && <span>{personal.phone}</span>}
              {personal.email && <span>{personal.email}</span>}
              {personal.location && <span>{personal.location}</span>}
          </div>
      </header>

      <div className="p-12">
          
          {personal.summary && (
              <section className="mb-10 text-center max-w-3xl mx-auto border-b border-slate-200 pb-8">
                  <p className="text-lg text-slate-600 italic leading-relaxed">{personal.summary}</p>
              </section>
          )}

          <div className="grid grid-cols-12 gap-10">
              
              {/* LEFT COL */}
              <div className="col-span-4 border-r border-slate-200 pr-8 space-y-10">
                  <section>
                      <h3 className="font-sans font-bold text-xs uppercase text-yellow-600 mb-4 tracking-widest">Expertise</h3>
                      <div className="space-y-2">
                          {[...technical, ...soft].map((s, i) => (
                              <div key={i} className="text-sm border-b border-slate-100 pb-1">{s}</div>
                          ))}
                      </div>
                  </section>

                  {education.length > 0 && (
                      <section>
                          <h3 className="font-sans font-bold text-xs uppercase text-yellow-600 mb-4 tracking-widest">Education</h3>
                          {education.map(edu => (
                              <div key={edu.id} className="mb-4">
                                  <div className="font-bold text-slate-900">{edu.school}</div>
                                  <div className="text-sm italic text-slate-500">{edu.degree}</div>
                              </div>
                          ))}
                      </section>
                  )}
                  
                  {awards.length > 0 && (
                      <section>
                          <h3 className="font-sans font-bold text-xs uppercase text-yellow-600 mb-4 tracking-widest">Honors</h3>
                          {awards.map(a => (
                              <div key={a.id} className="text-sm text-slate-600 mb-2">★ {a.name}</div>
                          ))}
                      </section>
                  )}
              </div>

              {/* RIGHT COL */}
              <div className="col-span-8 space-y-10">
                  {experience.length > 0 && (
                      <section>
                          <h3 className="font-sans font-bold text-xs uppercase text-yellow-600 mb-6 tracking-widest">Professional Experience</h3>
                          <div className="space-y-8">
                              {experience.map(exp => (
                                  <div key={exp.id}>
                                      <div className="flex justify-between items-baseline mb-1">
                                          <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                                          <span className="font-sans text-xs font-bold text-slate-400">{exp.date}</span>
                                      </div>
                                      <div className="text-md italic text-slate-500 mb-3">{exp.company}</div>
                                      <p className="text-sm leading-7 text-slate-600">{exp.desc}</p>
                                  </div>
                              ))}
                          </div>
                      </section>
                  )}

                  {certifications.length > 0 && (
                      <section>
                          <h3 className="font-sans font-bold text-xs uppercase text-yellow-600 mb-4 tracking-widest">Certifications</h3>
                          <div className="grid grid-cols-2 gap-4">
                              {certifications.map(c => (
                                  <div key={c.id} className="bg-slate-50 p-3 rounded">
                                      <div className="font-bold text-sm">{c.name}</div>
                                      <div className="text-xs text-slate-500">{c.issuer}</div>
                                  </div>
                              ))}
                          </div>
                      </section>
                  )}
              </div>

          </div>
      </div>
    </div>
  );
};

export default ModernGold;