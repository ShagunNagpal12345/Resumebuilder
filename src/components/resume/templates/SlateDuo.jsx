// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const SlateDuo = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full flex bg-white min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper">
//       <aside className="w-[35%] bg-[#2D2E2E] text-white p-14 flex flex-col gap-12 shrink-0 shadow-inner border-r-8 border-[#1a1a1a]/10">
//         <div className="text-center">
//             {personal.photo ? (
//                 <img src={personal.photo} className="w-44 h-44 rounded-full border-8 border-[#3d3e3e] mx-auto object-cover shadow-2xl mb-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500" alt="Profile" />
//             ) : (
//                 <div className="w-36 h-36 bg-[#3d3e3e] rounded-full mx-auto mb-8 flex items-center justify-center text-slate-500 shadow-inner"><User size={64} strokeWidth={1}/></div>
//             )}
//             <h2 className="text-3xl font-black text-center uppercase tracking-tighter break-words leading-none mb-3 italic">{personal.name || "Your Name"}</h2>
//             <p className="text-[11px] text-center text-slate-400 font-black uppercase tracking-[0.4em] break-words leading-tight italic underline decoration-[#3d3e3e] decoration-4 underline-offset-[12px]">{personal.title}</p>
//         </div>

//         <div className="space-y-6 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 border-t border-[#3d3e3e] pt-12 leading-relaxed italic">
//           {personal.email && <div className="flex items-center gap-4 break-all"><Mail size={16} className="text-white shrink-0"/> {personal.email}</div>}
//           {personal.phone && <div className="flex items-center gap-4 leading-tight"><Phone size={16} className="text-white shrink-0"/> {personal.phone}</div>}
//           {personal.location && <div className="flex items-center gap-4 break-words opacity-50"><MapPin size={16} className="text-white shrink-0"/> {personal.location}</div>}
//           {personal.linkedin && <div className="flex items-center gap-4 break-all"><Linkedin size={16} className="text-white shrink-0"/> Portfolio Link</div>}
//         </div>

//         <div>
//             <h4 className="text-[10px] font-black uppercase text-white mb-10 tracking-[0.5em] flex items-center gap-3 border-b border-[#3d3e3e] pb-3 italic"><Cpu size={18}/> Mastery</h4>
//             <div className="space-y-5">
//                 {[...skills.technical, ...skills.core, ...skills.soft].slice(0, 10).map((s, i) => (
//                     <div key={i} className="break-words group">
//                         <div className="flex justify-between text-[9px] mb-2 font-black uppercase tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity"><span>{s}</span><span>92%</span></div>
//                         <div className="h-0.5 bg-[#3d3e3e] rounded-full overflow-hidden shadow-inner"><div className="h-full bg-white w-[92%] shadow-[0_0_8px_white]"></div></div>
//                     </div>
//                 ))}
//             </div>
//         </div>

//         {education.length > 0 && (
//             <div>
//                 <h4 className="text-[10px] font-black uppercase text-white mb-8 tracking-[0.5em] flex items-center gap-3 border-b border-[#3d3e3e] pb-3 italic"><GraduationCap size={18}/> Academics</h4>
//                 {education.map((edu, i) => (
//                     <div key={i} className="mb-8 last:mb-0 border-l-2 border-white/5 pl-6 group">
//                         <div className="font-black text-[12px] text-white leading-tight break-words uppercase tracking-tighter italic group-hover:text-blue-100 transition-colors shadow-sm">{edu.degree}</div>
//                         <div className="text-[10px] text-slate-500 mt-2 break-words italic font-medium tracking-widest">{edu.school}</div>
//                         <div className="text-[9px] text-slate-600 mt-3 font-black uppercase tracking-[0.4em]">{edu.date}</div>
//                     </div>
//                 ))}
//             </div>
//         )}

//         {languages.length > 0 && (
//             <div>
//                 <h4 className="text-[10px] font-black uppercase text-white mb-6 tracking-[0.5em] italic">Tongues</h4>
//                 {languages.map((l, i) => (
//                     <div key={i} className="flex justify-between text-[11px] font-black uppercase mb-3 opacity-40 hover:opacity-100 transition-opacity border-b border-white/5 pb-1 cursor-default">
//                         <span className="break-words">{l.name}</span> <span className="shrink-0 tracking-tighter font-black opacity-30">[{l.level}]</span>
//                     </div>
//                 ))}
//             </div>
//         )}
//       </aside>

//       <main className="flex-1 p-20 bg-[#F8FAFC] space-y-20 flex flex-col overflow-y-auto">
//         {personal.summary && (
//             <section className="mb-6 relative">
//                 <h3 className="text-sm font-black uppercase text-slate-300 tracking-[0.6em] mb-10 italic flex items-center gap-6 leading-none"><div className="w-12 h-px bg-slate-200"></div> Introduction</h3>
//                 <p className="text-[16px] text-slate-600 leading-[1.8] font-medium whitespace-pre-wrap break-words text-justify border-l-[16px] border-slate-200 pl-12 italic shadow-sm bg-white p-10 rounded-r-[4rem] shadow-slate-100">"{personal.summary}"</p>
//             </section>
//         )}

//         <section>
//           <h3 className="text-sm font-black uppercase text-slate-400 tracking-[0.5em] mb-12 flex items-center gap-4 italic border-b border-slate-100 pb-4">Work History</h3>
//           <div className="space-y-16">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div className="experience-item bg-white p-10 rounded-[4rem] shadow-2xl shadow-slate-100 border border-slate-100 group hover:border-slate-300 transition-all hover:scale-[1.01] transform duration-500">
//                     <div className="flex justify-between items-baseline mb-4 border-b border-slate-50 pb-4">
//                         <h4 className="font-black text-slate-900 break-words uppercase text-2xl tracking-tighter leading-none transition-colors group-hover:text-slate-500 italic">{exp.role}</h4>
//                         <span className="text-[11px] font-black text-slate-300 italic shrink-0 ml-10 tracking-[0.5em] italic uppercase font-bold">{exp.date}</span>
//                     </div>
//                     <div className="text-[13px] font-black text-[#2D2E2E] uppercase mb-8 tracking-[0.4em] break-words leading-none italic flex items-center gap-4 italic font-bold leading-none"><CheckCircle size={16} className="opacity-20"/> {exp.company}</div>
//                     <p className="text-[16px] text-slate-500 leading-[1.8] whitespace-pre-wrap break-words text-justify font-medium italic pr-12">{exp.desc}</p>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </section>

//         {projects.length > 0 && (
//             <section>
//                 <h3 className="text-sm font-black uppercase text-slate-300 tracking-[0.6em] mb-10 italic flex items-center gap-6 leading-none">Portfolio Initiatives</h3>
//                 <div className="grid grid-cols-2 gap-12">
//                     {projects.map((p, i) => (
//                         <React.Fragment key={i}>
//                             {p.pageBreak && <div className="manual-page-break" />}
//                             <div className="project-item group">
//                                 <h4 className="font-black text-base text-slate-800 break-words uppercase mb-4 tracking-tighter italic border-b border-slate-100 pb-2 transition-colors group-hover:text-slate-400 flex items-center gap-4 italic leading-none"><Layers size={18} className="opacity-20"/> {p.name}</h4>
//                                 <p className="text-[13px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic border-l-2 border-slate-200 pl-6 pr-4 opacity-80 font-medium">{p.desc}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </section>
//         )}

//         <footer className="mt-auto pt-24 border-t-8 border-slate-50 grid grid-cols-2 gap-20 pb-12 uppercase text-[11px] font-black tracking-[0.8em] text-slate-300 text-center italic leading-none">
//             {awards.length > 0 && <div className="col-span-2 border-b border-slate-50 pb-12 flex flex-wrap justify-center gap-16">{awards.map((a, i) => <span key={i}>🏆 {a.name} // <span className="opacity-30 tracking-[0.2em]">{a.issuer}</span></span>)}</div>}
//             {volunteering.length > 0 && <div className="col-span-2 pt-6 flex flex-wrap justify-center gap-10 opacity-60 uppercase font-black">{volunteering.slice(0, 3).map((v, i) => <span key={i}>{v.role} @ {v.org}</span>)}</div>}
//             <div className="col-span-2 pt-12 opacity-10 tracking-[1.5em] text-[9px]">Confidential Record — Produced for {personal.name}</div>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default SlateDuo;

import React from 'react';

const SlateDuo = ({ data }) => {
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
    <div className="flex w-full min-h-[1100px] font-sans">
      
      {/* LEFT DARK COLUMN */}
      <aside className="w-[35%] bg-slate-800 text-slate-300 p-10 flex flex-col gap-10">
          <div>
              <h1 className="text-4xl font-bold text-white uppercase tracking-tight leading-none mb-4">{personal.name}</h1>
              <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">{personal.title}</p>
          </div>

          <div className="space-y-4 text-xs font-medium border-t border-slate-700 pt-6">
              {personal.email && <div className="flex gap-2 text-white">✉ {personal.email}</div>}
              {personal.phone && <div className="flex gap-2 text-white">📞 {personal.phone}</div>}
              {personal.location && <div className="flex gap-2 text-white">📍 {personal.location}</div>}
              {personal.linkedin && <div className="flex gap-2 text-blue-400">🔗 {personal.linkedin}</div>}
          </div>

          <section>
              <h3 className="text-slate-500 font-black uppercase text-xs tracking-widest mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                  {[...technical, ...soft].map((s, i) => (
                      <span key={i} className="bg-slate-900 text-slate-200 px-2 py-1 text-xs rounded border border-slate-700">{s}</span>
                  ))}
              </div>
          </section>

          {education.length > 0 && (
              <section>
                  <h3 className="text-slate-500 font-black uppercase text-xs tracking-widest mb-4">Education</h3>
                  {education.map(edu => (
                      <div key={edu.id} className="mb-4">
                          <div className="font-bold text-white text-sm">{edu.school}</div>
                          <div className="text-xs text-slate-400">{edu.degree}</div>
                          <div className="text-[10px] text-slate-500 mt-1">{edu.date}</div>
                      </div>
                  ))}
              </section>
          )}
      </aside>

      {/* RIGHT LIGHT COLUMN */}
      <main className="w-[65%] p-12 bg-white text-slate-800">
          
          {personal.summary && (
              <section className="mb-12">
                  <h3 className="text-slate-900 font-bold uppercase tracking-widest text-lg mb-4 border-b-2 border-slate-900 pb-1">Profile</h3>
                  <p className="text-slate-600 leading-relaxed">{personal.summary}</p>
              </section>
          )}

          {experience.length > 0 && (
              <section className="mb-12">
                  <h3 className="text-slate-900 font-bold uppercase tracking-widest text-lg mb-6 border-b-2 border-slate-900 pb-1">Experience</h3>
                  <div className="space-y-8">
                      {experience.map(exp => (
                          <div key={exp.id}>
                              <div className="flex justify-between items-baseline mb-1">
                                  <h4 className="text-xl font-bold text-slate-800">{exp.role}</h4>
                                  <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">{exp.date}</span>
                              </div>
                              <div className="text-sm font-bold text-blue-600 mb-2">{exp.company}</div>
                              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {(projects.length > 0 || certifications.length > 0) && (
              <section>
                  <h3 className="text-slate-900 font-bold uppercase tracking-widest text-lg mb-6 border-b-2 border-slate-900 pb-1">Additional</h3>
                  <div className="grid grid-cols-1 gap-4">
                      {projects.map(p => (
                          <div key={p.id} className="bg-slate-50 p-4 rounded border-l-4 border-slate-800">
                              <div className="font-bold text-sm text-slate-900">{p.name}</div>
                              <div className="text-xs text-slate-500 mt-1">{p.desc}</div>
                          </div>
                      ))}
                      {certifications.map(c => (
                          <div key={c.id} className="text-sm text-slate-600 font-medium">
                              ✓ {c.name} - {c.issuer}
                          </div>
                      ))}
                  </div>
              </section>
          )}
      </main>

    </div>
  );
};

export default SlateDuo;