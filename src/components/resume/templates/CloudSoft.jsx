// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, Zap, CheckCircle } from 'lucide-react';

// const CloudSoft = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full h-full bg-[#F0F9FF] min-h-[1100px] shadow-2xl font-sans p-10 resume-preview-wrapper flex flex-col">
//         <div className="bg-white rounded-[4rem] shadow-xl p-12 flex-1 border border-blue-50 flex flex-col">
//             <header className="mb-12 border-b-4 border-blue-50 pb-12 flex justify-between items-end shrink-0">
//                 <div>
//                     <h1 className="text-7xl font-black text-[#0369A1] tracking-tighter leading-[0.8] mb-4 break-words lowercase">{personal.name || "Your Name"}.</h1>
//                     <p className="text-2xl font-bold text-blue-300 uppercase tracking-[0.4em] break-words italic leading-tight">{personal.title}</p>
//                 </div>
//                 <div className="text-right text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] space-y-2 shrink-0 ml-12 border-r-8 border-blue-100 pr-6">
//                     {personal.email && <div className="break-all">{personal.email}</div>}
//                     {personal.phone && <div>{personal.phone}</div>}
//                     {personal.location && <div className="break-words">{personal.location}</div>}
//                     {personal.linkedin && <div className="break-all text-blue-200">{personal.linkedin}</div>}
//                 </div>
//             </header>

//             <div className="flex-1 space-y-16">
//                 {personal.summary && (
//                     <section className="bg-blue-50/20 p-10 rounded-[3.5rem] border-2 border-blue-50 relative">
//                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0369A1] text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-lg">Professional Summary</div>
//                         <p className="text-[15px] font-medium text-slate-500 italic leading-relaxed text-center px-12 whitespace-pre-wrap break-words">"{personal.summary}"</p>
//                     </section>
//                 )}

//                 <div className="grid grid-cols-12 gap-16">
//                     <div className="col-span-8 space-y-16">
//                         <section>
//                             <h3 className="text-[11px] font-black text-blue-200 uppercase tracking-[0.6em] text-center mb-12 flex items-center justify-center gap-6"><div className="w-12 h-px bg-blue-100"></div> Career Journey <div className="w-12 h-px bg-blue-100"></div></h3>
//                             <div className="space-y-10">
//                                 {experience.map((exp, i) => (
//                                     <React.Fragment key={i}>
//                                         {exp.pageBreak && <div className="manual-page-break" />}
//                                         <div className="experience-item bg-white p-8 rounded-[3rem] border-4 border-blue-50 shadow-sm group hover:border-blue-200 transition-all hover:shadow-2xl">
//                                             <div className="flex justify-between items-center mb-4">
//                                                 <h4 className="font-black text-[#0369A1] text-2xl break-words tracking-tighter leading-none">{exp.role}</h4>
//                                                 <span className="text-[11px] font-bold text-blue-300 uppercase shrink-0 ml-8 italic">{exp.date}</span>
//                                             </div>
//                                             <div className="text-[12px] font-black text-blue-200 uppercase mb-6 tracking-widest break-words leading-none border-l-4 border-blue-500 pl-4">{exp.company}</div>
//                                             <p className="text-[14px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words text-justify italic">{exp.desc}</p>
//                                         </div>
//                                     </React.Fragment>
//                                 ))}
//                             </div>
//                         </section>

//                         {projects.length > 0 && (
//                             <section>
//                                 <h3 className="text-[11px] font-black text-blue-200 uppercase tracking-[0.6em] text-center mb-12">Key Initiatives</h3>
//                                 <div className="grid grid-cols-1 gap-8">
//                                     {projects.map((proj, i) => (
//                                         <React.Fragment key={i}>
//                                             {proj.pageBreak && <div className="manual-page-break" />}
//                                             <div className="project-item bg-blue-50/40 p-8 rounded-[3rem] border-2 border-blue-100">
//                                                 <h4 className="font-black text-[#0369A1] text-lg uppercase mb-3 break-words tracking-tight flex items-center gap-3 italic">
//                                                     <Zap size={18} fill="currentColor" className="text-blue-500"/> {proj.name}
//                                                 </h4>
//                                                 <p className="text-[13px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words font-medium italic pr-6">{proj.desc}</p>
//                                             </div>
//                                         </React.Fragment>
//                                     ))}
//                                 </div>
//                             </section>
//                         )}
//                     </div>

//                     <div className="col-span-4 space-y-16">
//                         <section>
//                             <h3 className="text-[11px] font-black text-blue-200 uppercase tracking-[0.4em] mb-10 border-b-2 border-blue-50 pb-2">Mastery</h3>
//                             <div className="flex flex-wrap gap-2 px-2">
//                                 {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//                                     <span key={i} className="px-4 py-2 bg-blue-50 text-[#0369A1] text-[11px] font-black uppercase rounded-[1.25rem] break-words border border-blue-100 shadow-sm transition-transform hover:scale-110">{s}</span>
//                                 ))}
//                             </div>
//                         </section>

//                         {education.length > 0 && (
//                             <section>
//                                 <h3 className="text-[11px] font-black text-blue-200 uppercase tracking-[0.4em] mb-10 border-b-2 border-blue-50 pb-2">Academic Base</h3>
//                                 {education.map((edu, i) => (
//                                     <div key={i} className="mb-10 last:mb-0 border-l-[6px] border-blue-100 pl-6 group">
//                                         <div className="font-black text-[14px] text-[#0369A1] break-words uppercase leading-tight mb-2 group-hover:text-blue-500 transition-colors italic tracking-tighter">{edu.degree}</div>
//                                         <div className="text-[11px] font-bold text-slate-400 break-words leading-tight">{edu.school}</div>
//                                         <div className="text-[10px] text-blue-200 font-black mt-3 uppercase tracking-widest">{edu.date}</div>
//                                     </div>
//                                 ))}
//                             </section>
//                         )}

//                         {certifications.length > 0 && (
//                             <section>
//                                 <h3 className="text-[11px] font-black text-blue-200 uppercase tracking-[0.4em] mb-8 border-b-2 border-blue-50 pb-2">Certifications</h3>
//                                 {certifications.map((c, i) => (
//                                     <div key={i} className="mb-4 text-[11px] font-black text-slate-500 break-words uppercase flex items-center gap-3 group">
//                                         <CheckCircle size={14} className="text-blue-200 group-hover:text-blue-500 transition-colors shrink-0" /> {c.name}
//                                     </div>
//                                 ))}
//                             </section>
//                         )}

//                         {languages.length > 0 && (
//                             <section>
//                                 <h3 className="text-[11px] font-black text-blue-200 uppercase tracking-[0.4em] mb-6 border-b-2 border-blue-50 pb-2">Tongues</h3>
//                                 {languages.map((l, i) => (
//                                     <div key={i} className="flex justify-between text-[11px] font-black uppercase text-[#0369A1] mb-2 tracking-widest italic opacity-70">
//                                         <span className="break-words">{l.name}</span> <span className="opacity-30">{l.level}</span>
//                                     </div>
//                                 ))}
//                             </section>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             <footer className="mt-auto pt-16 border-t-8 border-blue-50 grid grid-cols-2 gap-16 shrink-0 pb-6">
//                 {awards.length > 0 && (
//                     <div>
//                         <h4 className="text-[10px] font-black text-blue-200 uppercase tracking-[0.6em] mb-6 pl-4 border-l-4 border-blue-500">Distinctions</h4>
//                         {awards.map((a, i) => <div key={i} className="text-[12px] font-black text-slate-400 break-words mb-3 uppercase tracking-tighter leading-tight shadow-blue-50 transition-colors hover:text-[#0369A1]">🏆 {a.name} — <span className="text-blue-200 italic font-medium">[{a.issuer}]</span></div>)}
//                     </div>
//                 )}
//                 {volunteering.length > 0 && (
//                     <div className="text-right">
//                         <h4 className="text-[10px] font-black text-blue-200 uppercase tracking-[0.6em] mb-6 pr-4 border-r-4 border-blue-500">Public Service</h4>
//                         {volunteering.map((v, i) => <div key={i} className="text-[12px] font-black text-slate-400 break-words mb-3 uppercase tracking-tighter leading-tight italic"> {v.role} @ {v.org} <div className="text-[9px] text-blue-100 font-bold not-italic mt-1">[{v.date}]</div></div>)}
//                     </div>
//                 )}
//             </footer>
//         </div>
//     </div>
//   );
// };

// export default CloudSoft;

import React from 'react';

const CloudSoft = ({ data }) => {
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
    <div className="font-sans text-slate-600 bg-slate-50 min-h-[1100px] p-10 flex gap-8">
      
      {/* MAIN CARD */}
      <div className="bg-white rounded-[2rem] p-10 shadow-sm flex-1 space-y-10">
          
          <header>
              <h1 className="text-4xl font-bold text-slate-800 mb-1">{personal.name}</h1>
              <p className="text-lg text-sky-500 font-medium">{personal.title}</p>
              {personal.summary && <p className="mt-4 text-sm leading-6">{personal.summary}</p>}
          </header>

          {experience.length > 0 && (
              <section>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-6">Experience</h3>
                  <div className="space-y-8">
                      {experience.map(exp => (
                          <div key={exp.id} className="relative pl-6 border-l-2 border-sky-100">
                              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-sky-300"></div>
                              <h4 className="font-bold text-slate-800 text-lg">{exp.role}</h4>
                              <div className="text-sm font-medium text-sky-500 mb-2">{exp.company} | {exp.date}</div>
                              <p className="text-sm">{exp.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {projects.length > 0 && (
              <section>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-6">Projects</h3>
                  <div className="grid grid-cols-2 gap-4">
                      {projects.map(p => (
                          <div key={p.id} className="bg-sky-50 rounded-xl p-4">
                              <div className="font-bold text-slate-800 text-sm">{p.name}</div>
                              <div className="text-xs mt-1">{p.desc}</div>
                          </div>
                      ))}
                  </div>
              </section>
          )}

      </div>

      {/* SIDEBAR CARD */}
      <div className="w-1/3 space-y-6">
          
          <div className="bg-white rounded-[2rem] p-8 shadow-sm text-center">
              {personal.photo && (
                  <img src={personal.photo} alt="Profile" className="w-24 h-24 mx-auto rounded-full object-cover mb-4 shadow-inner" />
              )}
              <div className="space-y-2 text-xs font-medium text-slate-500">
                  {personal.email && <div className="bg-slate-50 py-1 px-2 rounded-lg">{personal.email}</div>}
                  {personal.phone && <div className="bg-slate-50 py-1 px-2 rounded-lg">{personal.phone}</div>}
                  {personal.location && <div className="bg-slate-50 py-1 px-2 rounded-lg">{personal.location}</div>}
              </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm">
               <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">Skills</h3>
               <div className="flex flex-wrap gap-2">
                   {[...technical, ...soft].map((s, i) => (
                       <span key={i} className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-bold">{s}</span>
                   ))}
               </div>
          </div>

          {education.length > 0 && (
              <div className="bg-white rounded-[2rem] p-8 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">Education</h3>
                  <div className="space-y-4">
                      {education.map(edu => (
                          <div key={edu.id}>
                              <div className="font-bold text-slate-800 text-sm">{edu.school}</div>
                              <div className="text-xs text-sky-500">{edu.degree}</div>
                          </div>
                      ))}
                  </div>
              </div>
          )}

      </div>
    </div>
  );
};

export default CloudSoft;