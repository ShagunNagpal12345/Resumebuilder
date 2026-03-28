// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const Skyline = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full flex bg-[#F0F7FF] min-h-[1100px] shadow-2xl font-sans p-8 resume-preview-wrapper flex flex-col">
//       <div className="bg-white rounded-[3rem] w-full flex overflow-hidden border border-blue-100 shadow-xl flex-1">
//         {/* SIDEBAR */}
//         <aside className="w-[32%] bg-[#2A7BBF] text-white p-12 flex flex-col gap-10 shrink-0 shadow-inner">
//           <div className="text-center">
//             {personal.photo && <img src={personal.photo} className="w-36 h-36 rounded-[2.5rem] border-4 border-white/20 mx-auto object-cover mb-8 shadow-2xl" alt="Profile"/>}
//             <h2 className="text-3xl font-black uppercase tracking-tighter break-words leading-none italic">{personal.name || "Your Name"}</h2>
//             <div className="h-1 w-12 bg-white/20 mx-auto mt-6 rounded-full shadow-sm"></div>
//           </div>

//           <div className="space-y-6 text-[11px] font-bold uppercase tracking-[0.2em] border-t border-white/10 pt-10 leading-tight">
//             {personal.email && <div className="flex items-center gap-4 break-all"><div className="bg-white/10 p-2 rounded-xl"><Mail size={16}/></div> {personal.email}</div>}
//             {personal.phone && <div className="flex items-center gap-4"><div className="bg-white/10 p-2 rounded-xl"><Phone size={16}/></div> {personal.phone}</div>}
//             {personal.location && <div className="flex items-center gap-4 break-words"><div className="bg-white/10 p-2 rounded-xl"><MapPin size={16}/></div> {personal.location}</div>}
//             {personal.linkedin && <div className="flex items-center gap-4 break-all opacity-80"><div className="bg-white/10 p-2 rounded-xl"><Linkedin size={16}/></div> Portfolio</div>}
//           </div>

//           <section>
//             <h4 className="text-[11px] font-black uppercase text-blue-100 mb-8 tracking-[0.4em] flex items-center gap-3 italic"><Cpu size={18}/> Skill Log</h4>
//             <div className="space-y-5">
//               {[...skills.technical, ...skills.core].slice(0, 10).map((s, i) => (
//                 <div key={i} className="break-words">
//                   <div className="flex justify-between text-[10px] mb-2 font-black uppercase tracking-widest italic opacity-90"><span>{s}</span><span>85%</span></div>
//                   <div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-white w-[85%] shadow-[0_0_8px_white]"></div></div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {education.length > 0 && (
//             <section>
//                 <h4 className="text-[11px] font-black uppercase text-blue-100 mb-8 tracking-[0.4em] flex items-center gap-3 italic"><GraduationCap size={18}/> Academics</h4>
//                 {education.map((edu, i) => (
//                     <div key={i} className="mb-6 last:mb-0 border-l-2 border-white/10 pl-6 group">
//                         <p className="font-black text-[12px] break-words uppercase leading-tight italic group-hover:text-blue-100 transition-colors">{edu.degree}</p>
//                         <p className="opacity-60 text-[11px] break-words font-medium mt-1">{edu.school}</p>
//                         <p className="text-[9px] font-black mt-2 uppercase opacity-40">{edu.date}</p>
//                     </div>
//                 ))}
//             </section>
//           )}

//           {languages.length > 0 && (
//             <section>
//                 <h4 className="text-[11px] font-black uppercase text-blue-100 mb-6 tracking-[0.4em] italic">Languages</h4>
//                 {languages.map((l, i) => <div key={i} className="flex justify-between text-[11px] mb-3 font-bold uppercase border-b border-white/5 pb-1 opacity-80"><span>{l.name}</span><span className="opacity-40 italic tracking-widest">{l.level}</span></div>)}
//             </section>
//           )}
//         </aside>

//         {/* MAIN BODY */}
//         <main className="flex-1 p-16 bg-white space-y-20 overflow-y-auto">
//           <header className="mb-10">
//             <h1 className="text-5xl font-black text-slate-800 uppercase tracking-tighter break-words italic leading-none">{personal.title || "STRATEGIC LEAD"}</h1>
//             {personal.summary && (
//                 <div className="mt-8 border-l-[12px] border-blue-50 pl-10 py-6 bg-slate-50/50 rounded-r-[3rem] shadow-sm">
//                     <p className="text-base text-slate-500 leading-relaxed italic whitespace-pre-wrap break-words italic font-medium">"{personal.summary}"</p>
//                 </div>
//             )}
//           </header>

//           <section>
//             <h3 className="flex items-center gap-4 text-[#2A7BBF] font-black uppercase text-sm mb-12 tracking-[0.5em] italic border-b border-blue-50 pb-4 leading-none"><Briefcase size={20}/> Professional Log</h3>
//             <div className="space-y-16 relative border-l-4 border-blue-50 pl-12 ml-4">
//               {experience.map((exp, i) => (
//                 <React.Fragment key={i}>
//                   {exp.pageBreak && <div className="manual-page-break" />}
//                   <div className="experience-item relative group">
//                     <div className="absolute -left-[61px] top-1 w-8 h-8 rounded-full bg-white border-4 border-[#2A7BBF] shadow-xl group-hover:scale-125 transition-transform duration-500"></div>
//                     <div className="flex justify-between items-baseline mb-3">
//                         <h4 className="font-black text-slate-900 break-words text-2xl uppercase tracking-tighter leading-none group-hover:text-[#2A7BBF] transition-colors">{exp.role}</h4>
//                         <span className="text-[11px] font-black text-blue-400 uppercase shrink-0 ml-10 tracking-[0.4em] italic leading-none">{exp.date}</span>
//                     </div>
//                     <div className="text-[12px] font-black text-slate-400 uppercase mb-8 tracking-[0.3em] leading-none flex items-center gap-4 italic"><div className="w-8 h-px bg-blue-100 shrink-0"></div> {exp.company}</div>
//                     <p className="text-[15px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words text-justify italic font-medium pr-10">{exp.desc}</p>
//                   </div>
//                 </React.Fragment>
//               ))}
//             </div>
//           </section>

//           {projects.length > 0 && (
//             <section>
//               <h3 className="text-[#2A7BBF] font-black uppercase text-sm mb-10 tracking-[0.5em] flex items-center gap-4 italic leading-none"><Layers size={20}/> Creations</h3>
//               <div className="grid grid-cols-2 gap-10">
//                 {projects.map((proj, i) => (
//                   <React.Fragment key={i}>
//                     {proj.pageBreak && <div className="manual-page-break" />}
//                     <div className="project-item bg-blue-50/20 p-8 rounded-[3rem] border border-blue-50 group hover:border-[#2A7BBF]/20 transition-all">
//                       <h4 className="font-black text-sm text-slate-800 mb-4 uppercase break-words tracking-tighter italic border-b border-blue-50 pb-2 transition-colors group-hover:text-[#2A7BBF]">{proj.name}</h4>
//                       <p className="text-[12px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic font-medium opacity-80 pr-4">{proj.desc}</p>
//                     </div>
//                   </React.Fragment>
//                 ))}
//               </div>
//             </section>
//           )}

//           <div className="grid grid-cols-2 gap-16 pt-12 border-t-8 border-blue-50">
//              {awards.length > 0 && (
//                  <section>
//                     <h3 className="text-[#2A7BBF] font-black uppercase text-[12px] mb-8 tracking-[0.4em] flex items-center gap-4 italic"><Award size={18}/> Recognition</h3>
//                     {awards.map((aw, i) => <div key={i} className="mb-4 break-words text-[12px] font-black text-slate-600 uppercase tracking-tighter border-l-4 border-blue-100 pl-4 py-1 italic">🏆 {aw.name} // <span className="text-slate-300 font-bold">{aw.issuer}</span></div>)}
//                  </section>
//              )}
//              {volunteering.length > 0 && (
//                  <section>
//                     <h3 className="text-[#2A7BBF] font-black uppercase text-[12px] mb-8 tracking-[0.4em] flex items-center gap-4 italic"><Heart size={18}/> Impact</h3>
//                     {volunteering.map((v, i) => <div key={i} className="mb-4 last:mb-0 border-b border-blue-50 pb-3 italic text-[12px] font-medium text-slate-500 underline decoration-blue-100 decoration-4 underline-offset-8 pr-4 break-words font-black uppercase tracking-widest">{v.role} @ {v.org}</div>)}
//                  </section>
//              )}
//           </div>

//           {certifications.length > 0 && (
//             <section className="pt-10 border-t border-slate-50 flex flex-wrap gap-12 justify-center opacity-40 grayscale hover:grayscale-0 transition-all">
//                  {certifications.map((c, i) => (
//                     <div key={i} className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><CheckCircle size={14} className="text-[#2A7BBF]"/> {c.name}</div>
//                  ))}
//             </section>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Skyline;

import React from 'react';

const Skyline = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="font-sans text-slate-800 bg-white min-h-[1100px]">
      
      {/* HEADER GRAPHIC */}
      <header className="bg-sky-600 text-white p-12 pb-24 clip-path-skyline relative">
         <div className="relative z-10 flex gap-6 items-center">
             {personal.photo && (
                <img src={personal.photo} alt="Profile" className="w-28 h-28 rounded-xl border-4 border-white/30 object-cover shadow-2xl" />
             )}
             <div>
                <h1 className="text-5xl font-black uppercase tracking-tight">{personal.name}</h1>
                <p className="text-xl opacity-90 font-medium">{personal.title}</p>
             </div>
         </div>
      </header>

      {/* FLOATING CONTACT BAR */}
      <div className="mx-12 -mt-12 bg-white p-4 shadow-lg rounded-lg relative z-20 flex flex-wrap gap-6 justify-center text-sm font-bold text-sky-800 border border-slate-100">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
      </div>

      <div className="p-12 grid grid-cols-12 gap-10">
          
          {/* LEFT COL */}
          <div className="col-span-8 space-y-10">
              {personal.summary && (
                  <section>
                      <h3 className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-3 border-b-2 border-sky-100 pb-1 w-full">About Me</h3>
                      <p className="text-slate-700 leading-7">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-6 border-b-2 border-sky-100 pb-1 w-full">Experience</h3>
                      <div className="space-y-8">
                          {experience.map(exp => (
                              <div key={exp.id}>
                                  <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                                  <div className="flex items-center gap-2 text-sm font-bold text-sky-500 mb-2">
                                      <span>{exp.company}</span> • <span>{exp.date}</span>
                                  </div>
                                  <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

               {projects.length > 0 && (
                  <section>
                      <h3 className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-6 border-b-2 border-sky-100 pb-1 w-full">Projects</h3>
                      <div className="grid grid-cols-2 gap-4">
                          {projects.map(p => (
                              <div key={p.id} className="bg-sky-50 p-4 rounded-lg">
                                  <div className="font-bold text-slate-900">{p.name}</div>
                                  <div className="text-xs text-slate-600 mt-1">{p.desc}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* RIGHT COL */}
          <div className="col-span-4 space-y-10">
              <section>
                  <h3 className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-4 border-b-2 border-sky-100 pb-1 w-full">Skills</h3>
                  <div className="flex flex-col gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="text-sm font-medium text-slate-700 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span> {s}
                          </span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-4 border-b-2 border-sky-100 pb-1 w-full">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-slate-900">{edu.school}</div>
                                  <div className="text-sm text-sky-600">{edu.degree}</div>
                                  <div className="text-xs text-slate-400">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {certifications.length > 0 && (
                  <section>
                      <h3 className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-4 border-b-2 border-sky-100 pb-1 w-full">Certified</h3>
                      {certifications.map(c => (
                          <div key={c.id} className="mb-2">
                              <div className="font-bold text-sm text-slate-800">{c.name}</div>
                              <div className="text-xs text-slate-500">{c.issuer}</div>
                          </div>
                      ))}
                  </section>
              )}
          </div>

      </div>
    </div>
  );
};

export default Skyline;