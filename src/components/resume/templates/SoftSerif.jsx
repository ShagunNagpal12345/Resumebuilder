// import React from 'react';

// const SoftSerif = ({ data }) => {
//   const { personal, skills, experience, education, languages } = data;

//   const RuleTitle = ({ title }) => (
//     <div className="flex items-center gap-6 my-8 shrink-0">
//       <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-800 shrink-0 font-serif">{title}</h3>
//       <div className="h-[1px] bg-slate-200 w-full"></div>
//     </div>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-serif p-16 text-slate-800 resume-preview-wrapper flex flex-col">
//       <header className="text-center mb-6 shrink-0">
//         <h1 className="text-6xl font-light text-slate-900 tracking-tight mb-2 uppercase">{personal.name || "Your Name"}</h1>
//         <div className="text-[11px] font-sans font-bold text-slate-400 space-x-4 uppercase tracking-widest">
//            <span>{personal.location}</span>
//            <span>|</span>
//            <span>{personal.phone}</span>
//            <span>|</span>
//            <span>{personal.email}</span>
//         </div>
//       </header>

//       <div className="w-full space-y-4 flex-1">
//         {personal.summary && (
//           <section>
//             <RuleTitle title="Summary" />
//             <p className="text-xs leading-loose text-slate-600 px-12 italic font-sans whitespace-pre-wrap">{personal.summary}</p>
//           </section>
//         )}

//         <section>
//           <RuleTitle title="Skills" />
//           <div className="grid grid-cols-3 gap-8 px-12 font-sans">
//             {[...skills.core, ...skills.technical, ...skills.soft].slice(0, 12).map((s, i) => (
//               <div key={i} className="text-[10px] font-bold text-slate-600 uppercase flex items-center gap-3">
//                 <div className="w-1 h-1 bg-slate-800 rounded-full"></div> {s}
//               </div>
//             ))}
//           </div>
//         </section>

//         <section>
//           <RuleTitle title="Experience" />
//           <div className="space-y-12 px-12 font-sans">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div>
//                   <div className="flex justify-between items-baseline mb-1">
//                     <h4 className="font-black text-slate-900 text-xs uppercase tracking-tight">{exp.role}</h4>
//                     <span className="text-[10px] text-slate-400 font-bold uppercase">{exp.date}</span>
//                   </div>
//                   <p className="text-[11px] font-black text-[#1e3a8a] mb-3 italic">{exp.company}</p>
//                   <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap text-justify italic">{exp.desc}</p>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </section>

//         {education.length > 0 && (
//           <section>
//             <RuleTitle title="Education" />
//             <div className="px-12 font-sans space-y-4">
//               {education.map((edu, i) => (
//                 <div key={i} className="flex justify-between">
//                   <div className="text-xs">
//                     <p className="font-bold text-slate-800 uppercase">{edu.school}</p>
//                     <p className="text-slate-500 italic mt-1">{edu.degree}</p>
//                   </div>
//                   <span className="text-[10px] font-bold text-slate-400 uppercase">{edu.date}</span>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SoftSerif;

import React from 'react';

const SoftSerif = ({ data }) => {
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
    <div className="p-16 font-sans text-slate-700 bg-white min-h-[1100px]">
      
      {/* HEADER */}
      <header className="mb-16">
          <h1 className="text-5xl font-serif text-slate-900 mb-2">{personal.name}</h1>
          <div className="flex justify-between items-end border-b border-slate-200 pb-4">
              <p className="text-xl text-slate-500 font-serif italic">{personal.title}</p>
              <div className="text-right text-xs font-bold text-slate-400 uppercase tracking-widest space-y-1">
                  {personal.email && <div>{personal.email}</div>}
                  {personal.phone && <div>{personal.phone}</div>}
                  {personal.location && <div>{personal.location}</div>}
              </div>
          </div>
      </header>

      <div className="grid grid-cols-12 gap-12">
          
          {/* LEFT COL */}
          <div className="col-span-8 space-y-12">
              {personal.summary && (
                  <section>
                      <h3 className="font-serif text-xl text-slate-900 mb-4 italic">About</h3>
                      <p className="text-slate-600 leading-7">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="font-serif text-xl text-slate-900 mb-6 italic">Experience</h3>
                      <div className="space-y-10">
                          {experience.map(exp => (
                              <div key={exp.id}>
                                  <h4 className="text-lg font-bold text-slate-800 mb-1">{exp.role}</h4>
                                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3 font-medium">
                                      <span className="uppercase tracking-wide">{exp.company}</span>
                                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                      <span>{exp.date}</span>
                                  </div>
                                  <p className="text-sm text-slate-600 leading-relaxed">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* RIGHT COL */}
          <div className="col-span-4 space-y-12">
              <section>
                  <h3 className="font-serif text-xl text-slate-900 mb-4 italic">Skills</h3>
                  <div className="flex flex-col gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="text-sm border-b border-slate-50 pb-1">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="font-serif text-xl text-slate-900 mb-4 italic">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-slate-800">{edu.school}</div>
                                  <div className="text-sm text-slate-500">{edu.degree}</div>
                                  <div className="text-xs text-slate-400 mt-1">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {(awards.length > 0 || languages.length > 0) && (
                  <section>
                      <h3 className="font-serif text-xl text-slate-900 mb-4 italic">More</h3>
                      <ul className="text-sm space-y-2 text-slate-600">
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

export default SoftSerif;