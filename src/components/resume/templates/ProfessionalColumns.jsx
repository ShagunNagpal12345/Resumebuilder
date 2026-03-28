// import React from 'react';

// const ProfessionalColumns = ({ data }) => {
//   const { personal, skills, experience, education, languages } = data;

//   const BlockTitle = ({ title }) => (
//     <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1e3a8a] mb-6 border-b-2 border-slate-900 pb-1">
//         {title}
//     </h3>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans p-16 text-slate-800 resume-preview-wrapper flex flex-col">
//       <header className="mb-10 shrink-0">
//         <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase mb-4 leading-none">{personal.name || "Your Name"}</h1>
//         <div className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] space-y-1 border-l-4 border-[#1e3a8a] pl-6 italic">
//            <p>{personal.location}</p>
//            <p>{personal.phone}</p>
//            <p className="break-all">{personal.email}</p>
//         </div>
//       </header>

//       <div className="space-y-12 flex-1">
//         {personal.summary && (
//           <section>
//             <BlockTitle title="Summary" />
//             <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-wrap">{personal.summary}</p>
//           </section>
//         )}

//         <section>
//           <BlockTitle title="Experience" />
//           <div className="space-y-10">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div>
//                   <div className="flex justify-between items-baseline mb-2">
//                     <h4 className="font-black text-slate-900 text-sm uppercase">{exp.role}</h4>
//                     <span className="text-[10px] font-black text-slate-400">{exp.date}</span>
//                   </div>
//                   <p className="text-[11px] font-black text-[#1e3a8a] mb-2 uppercase tracking-widest">{exp.company}</p>
//                   <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap italic">• {exp.desc}</p>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </section>

//         <div className="grid grid-cols-2 gap-16">
//           <section>
//             <BlockTitle title="Skills" />
//             <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-xs text-slate-600">
//               {[...skills.core, ...skills.technical].map((s, i) => (
//                 <div key={i} className="flex items-center gap-2 italic">• {s}</div>
//               ))}
//             </div>
//           </section>

//           <section>
//             <BlockTitle title="Education" />
//             {education.map((edu, i) => (
//               <div key={i} className="mb-4 last:mb-0">
//                 <p className="font-bold text-xs text-slate-800 uppercase">{edu.school}</p>
//                 <p className="text-[11px] text-slate-500 italic">{edu.degree}, {edu.date}</p>
//               </div>
//             ))}
//           </section>
//         </div>

//         {languages.length > 0 && (
//           <section>
//             <BlockTitle title="Languages" />
//             <div className="grid grid-cols-3 gap-6">
//               {languages.map((l, i) => (
//                 <div key={i} className="border-l-2 border-slate-100 pl-4">
//                   <p className="text-[11px] font-black text-slate-800 uppercase">{l.name}</p>
//                   <p className="text-[10px] text-slate-500 italic mt-1">{l.level}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfessionalColumns;

import React from 'react';

const ProfessionalColumns = ({ data }) => {
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
    <div className="p-10 bg-slate-50 min-h-[1100px] font-sans text-slate-800">
      
      {/* HEADER CARD */}
      <header className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 mb-8 flex justify-between items-center">
          <div>
              <h1 className="text-3xl font-bold uppercase tracking-tight text-slate-900 mb-1">{personal.name}</h1>
              <p className="text-lg text-teal-600 font-medium">{personal.title}</p>
          </div>
          <div className="text-right text-xs text-slate-500 space-y-1 font-medium">
              {personal.email && <div>{personal.email}</div>}
              {personal.phone && <div>{personal.phone}</div>}
              {personal.location && <div>{personal.location}</div>}
              {personal.linkedin && <div>{personal.linkedin}</div>}
          </div>
      </header>

      <div className="grid grid-cols-2 gap-8">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8">
              
              {personal.summary && (
                  <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                      <h3 className="text-xs font-black uppercase text-slate-400 mb-3 tracking-widest">Profile</h3>
                      <p className="text-sm leading-relaxed text-slate-700">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                      <h3 className="text-xs font-black uppercase text-slate-400 mb-6 tracking-widest">Work History</h3>
                      <div className="space-y-6">
                          {experience.map(exp => (
                              <div key={exp.id}>
                                  <h4 className="font-bold text-slate-900">{exp.role}</h4>
                                  <div className="flex justify-between text-xs font-bold text-teal-600 mb-2">
                                      <span>{exp.company}</span>
                                      <span>{exp.date}</span>
                                  </div>
                                  <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
              
              <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded border border-slate-200">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                      <h3 className="text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Education</h3>
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

              {(projects.length > 0 || languages.length > 0) && (
                  <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                      <h3 className="text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Additional</h3>
                      <div className="space-y-4">
                          {projects.length > 0 && (
                              <div>
                                  <h4 className="text-xs font-bold text-teal-600 mb-2">Projects</h4>
                                  {projects.map(p => <div key={p.id} className="text-xs mb-1 font-medium">• {p.name}</div>)}
                              </div>
                          )}
                          {languages.length > 0 && (
                              <div>
                                  <h4 className="text-xs font-bold text-teal-600 mb-2">Languages</h4>
                                  {languages.map(l => <div key={l.id} className="text-xs mb-1 font-medium">• {l.name}</div>)}
                              </div>
                          )}
                      </div>
                  </section>
              )}

          </div>

      </div>
    </div>
  );
};

export default ProfessionalColumns;