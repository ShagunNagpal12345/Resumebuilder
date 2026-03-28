// import React from 'react';

// const RuleMinimalist = ({ data }) => {
//   const { personal, skills, experience, education, languages } = data;

//   const RuleHeader = ({ title }) => (
//     <div className="flex items-center gap-6 my-10 shrink-0">
//       <div className="h-[1px] bg-slate-800 flex-1"></div>
//       <h3 className="text-sm font-black uppercase tracking-[0.4em] text-[#1e3a8a] shrink-0 font-serif">{title}</h3>
//       <div className="h-[1px] bg-slate-800 flex-1"></div>
//     </div>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-serif p-16 text-slate-800 resume-preview-wrapper flex flex-col items-center">
//       <header className="text-center mb-6 shrink-0">
//         <h1 className="text-6xl font-light tracking-[0.2em] text-[#1e3a8a] uppercase mb-4">{personal.name || "Your Name"}</h1>
//         <div className="text-[11px] font-medium space-x-4 text-slate-500 uppercase tracking-widest">
//            <span>{personal.email}</span>
//            <span>|</span>
//            <span>{personal.phone}</span>
//            <span>|</span>
//            <span>{personal.location}</span>
//         </div>
//       </header>

//       <div className="w-full max-w-4xl flex-1">
//         {personal.summary && (
//           <section>
//             <RuleHeader title="Summary" />
//             <p className="text-xs leading-relaxed text-slate-600 text-center px-12 whitespace-pre-wrap italic font-sans">{personal.summary}</p>
//           </section>
//         )}

//         <section>
//           <RuleHeader title="Skills" />
//           <div className="grid grid-cols-2 gap-x-12 gap-y-2 px-12 font-sans">
//             <ul className="space-y-1 text-xs text-slate-600 list-disc">
//               {skills.core.slice(0, 5).map((s, i) => <li key={i}>{s}</li>)}
//             </ul>
//             <ul className="space-y-1 text-xs text-slate-600 list-disc">
//               {skills.technical.slice(0, 5).map((s, i) => <li key={i}>{s}</li>)}
//             </ul>
//           </div>
//         </section>

//         <section>
//           <RuleHeader title="Experience" />
//           <div className="space-y-10 px-12 font-sans text-center">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div className="mb-6">
//                   <h4 className="font-bold text-slate-800 text-xs uppercase mb-1">{exp.role} | {exp.company}</h4>
//                   <p className="text-[10px] text-slate-400 italic mb-3">{exp.date}</p>
//                   <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap">{exp.desc}</p>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </section>

//         {education.length > 0 && (
//           <section>
//             <RuleHeader title="Education" />
//             <div className="px-12 text-center text-xs text-slate-600 space-y-4 font-sans italic">
//               {education.map((edu, i) => (
//                 <div key={i}>
//                   <p className="font-bold uppercase not-italic">{edu.school}</p>
//                   <p>{edu.degree}, {edu.date}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RuleMinimalist;

import React from 'react';

const RuleMinimalist = ({ data }) => {
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
    <div className="p-12 font-sans text-slate-800 bg-white min-h-[1100px]">
      
      {/* HEADER */}
      <header className="mb-10 pb-6 border-b-4 border-slate-900 flex justify-between items-end">
          <div>
              <h1 className="text-5xl font-bold uppercase tracking-tighter mb-1">{personal.name}</h1>
              <p className="text-xl text-slate-500 tracking-wide font-light">{personal.title}</p>
          </div>
          <div className="text-right text-sm font-bold text-slate-400 space-y-1">
              {personal.email && <div>{personal.email}</div>}
              {personal.phone && <div>{personal.phone}</div>}
              {personal.location && <div>{personal.location}</div>}
          </div>
      </header>

      {/* SUMMARY */}
      {personal.summary && (
          <section className="mb-10">
              <h3 className="font-bold uppercase text-sm mb-3 tracking-widest">Profile</h3>
              <p className="text-slate-700 leading-7">{personal.summary}</p>
          </section>
      )}

      {/* SKILLS */}
      <section className="mb-10 py-6 border-y border-slate-200">
          <h3 className="font-bold uppercase text-sm mb-4 tracking-widest">Expertise</h3>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[...technical, ...soft].map((s, i) => (
                  <span key={i} className="text-sm font-medium text-slate-600 relative">
                      <span className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                      {s}
                  </span>
              ))}
          </div>
      </section>

      {/* EXPERIENCE */}
      {experience.length > 0 && (
          <section className="mb-10">
              <h3 className="font-bold uppercase text-sm mb-6 tracking-widest">Experience</h3>
              <div className="space-y-8">
                  {experience.map(exp => (
                      <div key={exp.id} className="grid grid-cols-12 gap-6">
                          <div className="col-span-3 text-slate-500 font-bold text-sm pt-1">{exp.date}</div>
                          <div className="col-span-9">
                              <h4 className="font-bold text-lg text-slate-900">{exp.role}</h4>
                              <div className="text-sm font-bold text-slate-400 mb-2 uppercase">{exp.company}</div>
                              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </section>
      )}

      {/* EDUCATION & PROJECTS */}
      <div className="grid grid-cols-2 gap-12 pt-6 border-t-4 border-slate-900">
          
          {education.length > 0 && (
              <section>
                  <h3 className="font-bold uppercase text-sm mb-4 tracking-widest">Education</h3>
                  {education.map(edu => (
                      <div key={edu.id} className="mb-4">
                          <div className="font-bold text-slate-900">{edu.school}</div>
                          <div className="text-sm text-slate-500 italic">{edu.degree}</div>
                      </div>
                  ))}
              </section>
          )}

          {(projects.length > 0 || certifications.length > 0) && (
              <section>
                  <h3 className="font-bold uppercase text-sm mb-4 tracking-widest">Additional</h3>
                  <div className="space-y-3">
                      {projects.map(p => (
                          <div key={p.id}>
                              <div className="font-bold text-sm text-slate-800">{p.name}</div>
                              <div className="text-xs text-slate-500">{p.desc}</div>
                          </div>
                      ))}
                      {certifications.map(c => (
                          <div key={c.id} className="text-sm text-slate-600">Cert: {c.name}</div>
                      ))}
                  </div>
              </section>
          )}

      </div>
    </div>
  );
};

export default RuleMinimalist;