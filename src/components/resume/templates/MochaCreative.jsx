// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle, Zap } from 'lucide-react';

// const MochaCreative = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SideHeading = ({ title }) => (
//     <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-white/50 mb-10 border-b border-white/10 pb-2 italic">{title}</h3>
//   );

//   return (
//     <div className="w-full flex bg-[#FAF9F6] min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper overflow-hidden">
//       <aside className="w-[32%] bg-[#A79284] text-white p-14 flex flex-col shrink-0 shadow-[24px_0_80px_rgba(167,146,132,0.2)] z-10 border-r-8 border-[#8E796C]/20">
//         <div className="rounded-[4.5rem] overflow-hidden aspect-square mb-12 shadow-2xl bg-white/10 p-4 border-2 border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-700 shadow-mocha-900">
//             {personal.photo ? (
//                 <img src={personal.photo} className="w-full h-full object-cover rounded-[4rem]" alt="Profile" />
//             ) : (
//                 <div className="w-full h-full flex items-center justify-center bg-[#8E796C] rounded-[4rem]"><User size={80} strokeWidth={1}/></div>
//             )}
//         </div>

//         <div className="space-y-16">
//             <section>
//                 <SideHeading title="Connection" />
//                 <div className="text-[12px] font-bold space-y-8">
//                     {personal.email && <div className="flex items-center gap-5 break-all leading-tight italic"><div className="w-10 h-10 rounded-[1.25rem] bg-white/10 flex items-center justify-center shrink-0 border border-white/10 shadow-lg"><Mail size={16}/></div> {personal.email}</div>}
//                     {personal.phone && <div className="flex items-center gap-5 leading-tight italic"><div className="w-10 h-10 rounded-[1.25rem] bg-white/10 flex items-center justify-center shrink-0 border border-white/10 shadow-lg"><Phone size={16}/></div> {personal.phone}</div>}
//                     {personal.location && <div className="flex items-center gap-5 break-words leading-tight opacity-60"><div className="w-10 h-10 rounded-[1.25rem] bg-white/5 flex items-center justify-center shrink-0"><MapPin size={16}/></div> {personal.location}</div>}
//                 </div>
//             </section>

//             <section>
//                 <SideHeading title="Competencies" />
//                 <div className="space-y-6">
//                     {[...skills.technical, ...skills.core, ...skills.soft].slice(0, 10).map((s, i) => (
//                         <div key={i} className="break-words group">
//                             <div className="flex justify-between text-[11px] font-black uppercase mb-2 tracking-widest opacity-80 group-hover:opacity-100 italic"><span>{s}</span><span className="text-white/30 tracking-tighter">Pro</span></div>
//                             <div className="h-0.5 bg-white/20 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-white w-[92%] shadow-[0_0_12px_white] transition-all duration-1000 group-hover:w-full"></div></div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {education.length > 0 && (
//                 <section>
//                     <SideHeading title="Academics" />
//                     {education.map((edu, i) => (
//                         <div key={i} className="mb-10 last:mb-0 border-l-4 border-white/20 pl-8 group">
//                             <p className="font-black text-[13px] break-words leading-tight uppercase mb-2 tracking-tighter shadow-mocha-200 italic group-hover:text-white transition-colors">{edu.degree}</p>
//                             <p className="opacity-60 text-[11px] break-words italic font-bold uppercase tracking-widest">{edu.school}</p>
//                             <p className="text-[10px] font-black mt-3 uppercase opacity-30 tracking-[0.4em] italic">{edu.date}</p>
//                         </div>
//                     ))}
//                 </section>
//             )}
//         </div>
//       </aside>

//       <main className="flex-1 p-24 space-y-24 flex flex-col relative">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A79284]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
//         <header className="mb-32 relative shrink-0">
//             <div className="absolute -left-12 top-0 w-2 h-40 bg-[#A79284] opacity-10 rounded-full shadow-sm"></div>
//             <h1 className="text-9xl font-black text-slate-900 tracking-tighter leading-[0.75] break-words mb-8 uppercase drop-shadow-2xl italic">{personal.name || "Your Name"}</h1>
//             <p className="text-4xl font-bold text-[#A79284] tracking-[0.5em] uppercase break-words leading-none italic opacity-80 ml-2 shadow-mocha-50 underline decoration-[#A79284]/10 decoration-8 underline-offset-[20px]">{personal.title}</p>
//         </header>

//         {personal.summary && (
//             <section className="mb-24">
//                 <p className="text-xl leading-[1.8] text-slate-500 font-medium whitespace-pre-wrap break-words text-justify italic border-l-[24px] border-[#A79284]/10 pl-16 py-6 shadow-mocha-50/50 bg-white/40 rounded-r-[5rem] shadow-xl">"{personal.summary}"</p>
//             </section>
//         )}

//         <section>
//             <h3 className="text-[12px] font-black uppercase tracking-[0.8em] text-slate-300 mb-16 border-b-4 border-slate-50 pb-4 flex items-center gap-6 italic">
//                 <Briefcase size={24} className="text-[#A79284] opacity-60"/> Career Chronology
//             </h3>
//             <div className="space-y-24 border-l-8 border-[#FAF9F6] ml-6 pl-16">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item relative group">
//                             <div className="absolute -left-[76px] top-1 w-10 h-10 rounded-[1.5rem] bg-white border-[6px] border-[#A79284] shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
//                             <div className="flex justify-between items-baseline mb-4 border-b border-slate-50 pb-2 group-hover:border-[#A79284]/20 transition-all">
//                                 <h4 className="font-black text-slate-900 uppercase text-3xl break-words tracking-tighter leading-none group-hover:text-[#A79284] transition-colors">{exp.role}</h4>
//                                 <span className="text-[13px] font-black text-slate-300 uppercase shrink-0 ml-12 tracking-[0.5em] italic opacity-60">{exp.date}</span>
//                             </div>
//                             <div className="text-[15px] font-black text-[#A79284] mb-8 uppercase tracking-[0.4em] break-words leading-none italic flex items-center gap-6"><div className="w-16 h-px bg-[#A79284] opacity-40"></div> {exp.company}</div>
//                             <p className="text-[16px] text-slate-500 leading-[1.8] whitespace-pre-wrap break-words text-justify italic font-medium pr-12">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         {projects.length > 0 && (
//             <section>
//                 <h3 className="text-[12px] font-black uppercase tracking-[0.8em] text-slate-300 mb-16 border-b-4 border-slate-50 pb-4 italic leading-none">Strategic Portfolio</h3>
//                 <div className="grid grid-cols-2 gap-16">
//                     {projects.map((p, i) => (
//                         <React.Fragment key={i}>
//                             {p.pageBreak && <div className="manual-page-break" />}
//                             <div className="project-item group bg-white p-10 rounded-[4.5rem] shadow-2xl shadow-mocha-50 border-2 border-transparent hover:border-[#A79284]/10 transition-all transform hover:-translate-y-2">
//                                 <h4 className="font-black text-xl text-slate-800 break-words uppercase mb-6 tracking-tighter italic border-b-4 border-[#A79284]/5 pb-4 transition-colors group-hover:text-[#A79284] flex items-center gap-4"><Zap size={20} className="text-[#A79284] fill-[#A79284]"/> {p.name}</h4>
//                                 <p className="text-[14px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic border-l-4 border-[#A79284]/10 pl-6 pr-4 opacity-80">{p.desc}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </section>
//         )}

//         <footer className="mt-auto pt-24 border-t-[12px] border-[#FAF9F6] grid grid-cols-3 gap-16 uppercase text-[11px] font-black tracking-[0.6em] text-slate-300 pb-16 italic">
//             {awards.length > 0 && <div className="space-y-4">{awards.map((a, i) => <p key={i} className="mb-2 break-words text-[#A79284] drop-shadow-xl font-black tracking-tighter border-l-4 border-mocha-100 pl-4 py-1">🏆 {a.name}</p>)}</div>}
//             {languages.length > 0 && <div className="text-center space-y-3 border-x-4 border-slate-50 px-10">{languages.map((l, i) => <p key={i} className="mb-2 break-words italic text-slate-500 font-bold tracking-widest shadow-sm bg-white py-1 rounded-full">{l.name} [{l.level}]</p>)}</div>}
//             {volunteering.length > 0 && <div className="text-right space-y-3 pr-4">{volunteering.slice(0, 3).map((v, i) => <p key={i} className="mb-2 break-words text-slate-800 italic font-bold tracking-tighter underline decoration-[#A79284]/20 decoration-4">{v.role} @ {v.org}</p>)}</div>}
//             {certifications.length > 0 && (
//                 <div className="col-span-3 pt-12 border-t border-slate-50 flex flex-wrap justify-center gap-12 opacity-60">
//                     {certifications.map((c, i) => <div key={i} className="text-[10px] flex items-center gap-3"><CheckCircle size={14} className="text-[#A79284]"/> {c.name} — {c.issuer}</div>)}
//                 </div>
//             )}
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default MochaCreative;

import React from 'react';

const MochaCreative = ({ data }) => {
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
    <div className="flex w-full min-h-[1100px] bg-[#fdfbf7] font-sans text-[#4a3b32]">
      
      {/* SIDEBAR - COFFEE COLOR */}
      <aside className="w-[32%] bg-[#4e342e] text-[#d7ccc8] p-8 flex flex-col gap-8">
         <div className="text-center">
            {personal.photo && (
                <img 
                  src={personal.photo} 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full border-4 border-[#8d6e63] object-cover mx-auto mb-6 shadow-lg" 
                />
            )}
            <h1 className="text-2xl font-black uppercase tracking-wide text-white mb-2 leading-none">{personal.name}</h1>
            <p className="text-xs uppercase tracking-widest text-[#a1887f] font-bold border-t border-[#6d4c41] pt-3 mt-3">{personal.title}</p>
         </div>

         <div className="space-y-4 text-xs font-medium opacity-90">
             {personal.email && (
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-[#8d6e63] font-bold">Email</span>
                    <span className="text-white">{personal.email}</span>
                </div>
             )}
             {personal.phone && (
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-[#8d6e63] font-bold">Phone</span>
                    <span className="text-white">{personal.phone}</span>
                </div>
             )}
             {personal.location && (
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-[#8d6e63] font-bold">Location</span>
                    <span className="text-white">{personal.location}</span>
                </div>
             )}
         </div>

         <section>
             <h3 className="text-white font-bold uppercase text-xs mb-4 border-b border-[#6d4c41] pb-1">Expertise</h3>
             <div className="flex flex-wrap gap-2">
                 {[...technical, ...soft].map((s, i) => (
                     <span key={i} className="text-[10px] bg-[#3e2723] px-2 py-1 rounded text-[#d7ccc8] border border-[#5d4037]">{s}</span>
                 ))}
             </div>
         </section>

         {education.length > 0 && (
             <section>
                 <h3 className="text-white font-bold uppercase text-xs mb-4 border-b border-[#6d4c41] pb-1">Education</h3>
                 {education.map(edu => (
                     <div key={edu.id} className="mb-4 last:mb-0">
                         <div className="font-bold text-white text-xs">{edu.school}</div>
                         <div className="text-[10px] text-[#a1887f]">{edu.degree}</div>
                         <div className="text-[10px] opacity-60 italic">{edu.date}</div>
                     </div>
                 ))}
             </section>
         )}
      </aside>

      {/* MAIN CONTENT */}
      <main className="w-[68%] p-12 bg-[#fffdf9]">
          
          {personal.summary && (
              <section className="mb-10 bg-[#efebe9] p-6 rounded-tl-[2rem] rounded-br-[2rem]">
                  <h3 className="text-[#3e2723] font-black uppercase text-sm mb-3 tracking-widest">About</h3>
                  <p className="text-[#5d4037] leading-relaxed text-sm">{personal.summary}</p>
              </section>
          )}

          {experience.length > 0 && (
              <section className="mb-10">
                  <h3 className="text-[#3e2723] font-black uppercase text-sm mb-6 tracking-widest border-b-2 border-[#d7ccc8] pb-2 inline-block">Experience</h3>
                  <div className="space-y-8">
                      {experience.map(exp => (
                          <div key={exp.id} className="relative pl-6 border-l-2 border-[#d7ccc8]">
                              <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-[#8d6e63] rounded-full"></div>
                              <h4 className="text-lg font-bold text-[#3e2723]">{exp.role}</h4>
                              <div className="flex justify-between text-sm font-bold text-[#8d6e63] mb-2">
                                  <span>{exp.company}</span>
                                  <span className="text-[#a1887f] text-xs uppercase">{exp.date}</span>
                              </div>
                              <p className="text-sm text-[#5d4037] leading-relaxed whitespace-pre-line">{exp.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {projects.length > 0 && (
              <section className="mb-10">
                  <h3 className="text-[#3e2723] font-black uppercase text-sm mb-6 tracking-widest border-b-2 border-[#d7ccc8] pb-2 inline-block">Projects</h3>
                  <div className="grid grid-cols-2 gap-4">
                      {projects.map(p => (
                          <div key={p.id} className="bg-white border border-[#efebe9] p-4 rounded shadow-sm">
                              <h4 className="font-bold text-[#3e2723] text-sm mb-1">{p.name}</h4>
                              <p className="text-xs text-[#6d4c41]">{p.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {(awards.length > 0 || certifications.length > 0 || languages.length > 0) && (
              <section className="grid grid-cols-2 gap-8 pt-6 border-t border-[#efebe9]">
                  {(awards.length > 0 || certifications.length > 0) && (
                      <div>
                          <h4 className="font-bold text-[#3e2723] text-xs uppercase mb-3">Achievements</h4>
                          <ul className="text-sm space-y-1 text-[#5d4037]">
                              {awards.map(a => <li key={a.id}>★ {a.name}</li>)}
                              {certifications.map(c => <li key={c.id}>✓ {c.name}</li>)}
                          </ul>
                      </div>
                  )}
                  {languages.length > 0 && (
                      <div>
                          <h4 className="font-bold text-[#3e2723] text-xs uppercase mb-3">Languages</h4>
                          <ul className="text-sm space-y-1 text-[#5d4037]">
                              {languages.map(l => <li key={l.id}>• {l.name}</li>)}
                          </ul>
                      </div>
                  )}
              </section>
          )}

      </main>

    </div>
  );
};

export default MochaCreative;