// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, CheckCircle } from 'lucide-react';

// const PointerBanner = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionRow = ({ title, children }) => (
//     <div className="grid grid-cols-12 gap-8 mb-10 group">
//       <div className="col-span-3">
//         <h3 className="text-xs font-black uppercase tracking-widest text-slate-800 border-b-2 border-slate-800 pb-1 inline-block">
//           {title}
//         </h3>
//       </div>
//       <div className="col-span-9">
//         {children}
//       </div>
//     </div>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper flex flex-col">
//       {/* HEADER BAND */}
//       <header className="bg-[#2d4a8a] p-10 text-white relative shrink-0 flex items-center gap-10">
//         {personal.photo && (
//           <img src={personal.photo} className="w-32 h-32 rounded-sm border-2 border-white/20 object-cover" alt="Profile" />
//         )}
//         <div className="flex-1">
//           <h1 className="text-6xl font-bold uppercase tracking-tighter leading-none mb-4">{personal.name || "Your Name"}</h1>
//           <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest opacity-80">
//             {personal.location && <span className="flex items-center gap-2"><MapPin size={12}/> {personal.location}</span>}
//             {personal.phone && <span className="flex items-center gap-2"><Phone size={12}/> {personal.phone}</span>}
//             {personal.email && <span className="flex items-center gap-2 break-all"><Mail size={12}/> {personal.email}</span>}
//           </div>
//         </div>
//         {/* Triangle Pointer */}
//         <div className="absolute -bottom-4 left-44 text-[#2d4a8a]">
//           <svg width="30" height="20" viewBox="0 0 30 20">
//             <path d="M0 0 L15 15 L30 0 Z" fill="currentColor" />
//           </svg>
//         </div>
//       </header>

//       <div className="p-16 space-y-4 flex-1">
//         {personal.summary && (
//           <SectionRow title="Summary">
//             <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-wrap italic">{personal.summary}</p>
//           </SectionRow>
//         )}

//         <SectionRow title="Skills">
//           <div className="grid grid-cols-2 gap-x-12 gap-y-1">
//             {[...skills.core, ...skills.technical].map((s, i) => (
//               <div key={i} className="text-xs text-slate-600 flex items-center gap-3">
//                 <span className="text-[#2d4a8a] text-lg leading-none">•</span> {s}
//               </div>
//             ))}
//           </div>
//         </SectionRow>

//         <SectionRow title="Experience">
//           <div className="space-y-8">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div>
//                   <div className="flex justify-between items-baseline mb-1">
//                     <h4 className="font-black text-slate-800 text-xs uppercase">{exp.role}, {exp.date}</h4>
//                   </div>
//                   <p className="text-[11px] font-black text-slate-900 mb-2 italic uppercase tracking-tight">{exp.company}</p>
//                   <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap">• {exp.desc}</p>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </SectionRow>

//         {education.length > 0 && (
//           <SectionRow title="Education">
//             {education.map((edu, i) => (
//               <div key={i} className="mb-4 last:mb-0">
//                 <p className="text-xs font-bold text-slate-700 uppercase italic">{edu.school}</p>
//                 <p className="text-xs text-slate-500">{edu.degree}, {edu.date}</p>
//               </div>
//             ))}
//           </SectionRow>
//         )}

//         {languages.length > 0 && (
//           <SectionRow title="Languages">
//             <div className="space-y-4">
//               {languages.map((l, i) => (
//                 <div key={i}>
//                   <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
//                     <span>{l.name}: {l.level}</span>
//                   </div>
//                   <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
//                     <div className="h-full bg-[#2d4a8a] w-[75%]"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </SectionRow>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PointerBanner;

import React from 'react';

const PointerBanner = ({ data }) => {
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
    <div className="font-sans text-slate-700 bg-white min-h-[1100px]">
      
      {/* POINTER HEADER */}
      <div className="bg-sky-600 text-white p-10 pb-16 relative clip-path-pointer">
          <div className="flex justify-between items-start max-w-4xl mx-auto">
              <div>
                  <h1 className="text-5xl font-bold uppercase tracking-wide mb-2">{personal.name}</h1>
                  <p className="text-xl text-sky-200 font-medium">{personal.title}</p>
              </div>
              {personal.photo && (
                  <img src={personal.photo} alt="Profile" className="w-24 h-24 rounded-full border-4 border-sky-400 object-cover" />
              )}
          </div>
      </div>

      <div className="px-12 -mt-6 mb-12 flex justify-center gap-6 text-sm font-bold text-slate-500 bg-white/80 backdrop-blur max-w-2xl mx-auto py-3 rounded-full shadow-lg border border-slate-100">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
      </div>

      <div className="px-12 grid grid-cols-12 gap-10">
          
          {/* MAIN COLUMN */}
          <div className="col-span-8 space-y-10">
              {personal.summary && (
                  <section>
                      <h3 className="text-sky-600 font-bold uppercase text-sm mb-3 tracking-widest">About Me</h3>
                      <p className="text-slate-600 leading-7">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="text-sky-600 font-bold uppercase text-sm mb-6 tracking-widest">Experience</h3>
                      <div className="space-y-8">
                          {experience.map(exp => (
                              <div key={exp.id} className="group">
                                  <h4 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">{exp.role}</h4>
                                  <div className="flex justify-between text-sm font-bold text-slate-400 mb-2 border-b border-slate-100 pb-1">
                                      <span>{exp.company}</span>
                                      <span>{exp.date}</span>
                                  </div>
                                  <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* SIDEBAR COLUMN */}
          <div className="col-span-4 space-y-10 border-l border-slate-100 pl-8">
              
              <section>
                  <h3 className="text-sky-600 font-bold uppercase text-sm mb-4 tracking-widest">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="px-2 py-1 bg-sky-50 text-sky-700 text-xs font-bold rounded">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="text-sky-600 font-bold uppercase text-sm mb-4 tracking-widest">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-slate-900 text-sm">{edu.school}</div>
                                  <div className="text-xs text-slate-500">{edu.degree}</div>
                                  <div className="text-[10px] text-slate-400 mt-1">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {(awards.length > 0 || certifications.length > 0) && (
                  <section>
                      <h3 className="text-sky-600 font-bold uppercase text-sm mb-4 tracking-widest">Achievements</h3>
                      <ul className="text-sm space-y-2 text-slate-600">
                          {awards.map(a => <li key={a.id}>★ {a.name}</li>)}
                          {certifications.map(c => <li key={c.id}>✓ {c.name}</li>)}
                      </ul>
                  </section>
              )}

          </div>

      </div>
    </div>
  );
};

export default PointerBanner;