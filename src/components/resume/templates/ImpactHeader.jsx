// import React from 'react';

// const ImpactHeader = ({ data }) => {
//   const { personal, skills, experience, education, projects } = data;

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper flex flex-col">
//       <header className="bg-slate-900 text-white p-12 shrink-0">
//         <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-4">{personal.name || "Your Name"}</h1>
//         <div className="flex flex-wrap gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-800 pt-6">
//            <span>{personal.location}</span>
//            <span className="text-[#1e3a8a]">•</span>
//            <span>{personal.phone}</span>
//            <span className="text-[#1e3a8a]">•</span>
//            <span className="break-all">{personal.email}</span>
//         </div>
//       </header>

//       <div className="p-16 space-y-12 flex-1">
//         {personal.summary && (
//           <section>
//             <h3 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-4 italic">Introduction</h3>
//             <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-wrap text-justify italic">{personal.summary}</p>
//           </section>
//         )}

//         <section>
//           <h3 className="text-xs font-black uppercase tracking-widest text-[#1e3a8a] border-b-2 border-slate-50 pb-2 mb-8">Professional Tenures</h3>
//           <div className="space-y-12">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div className="experience-item group">
//                   <div className="flex justify-between items-baseline mb-2">
//                     <h4 className="font-bold text-slate-900 text-sm uppercase italic">{exp.role}</h4>
//                     <span className="text-[10px] font-bold text-slate-400 uppercase">{exp.date}</span>
//                   </div>
//                   <p className="text-[11px] font-black text-slate-900 mb-4 uppercase tracking-tighter underline decoration-[#1e3a8a] decoration-2 underline-offset-4">{exp.company}</p>
//                   <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap italic">• {exp.desc}</p>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </section>

//         <div className="grid grid-cols-12 gap-12 pt-8 border-t border-slate-50">
//           <div className="col-span-4 space-y-10">
//             <section>
//               <h3 className="text-xs font-black uppercase tracking-widest text-[#1e3a8a] mb-6">Expertise</h3>
//               <div className="flex flex-wrap gap-2">
//                 {[...skills.core, ...skills.technical].map((s, i) => (
//                   <span key={i} className="px-3 py-1 bg-slate-900 text-white text-[9px] font-bold uppercase rounded-full shadow-sm">{s}</span>
//                 ))}
//               </div>
//             </section>

//             {education.length > 0 && (
//               <section>
//                 <h3 className="text-xs font-black uppercase tracking-widest text-[#1e3a8a] mb-6">Academics</h3>
//                 {education.map((edu, i) => (
//                   <div key={i} className="mb-6 last:mb-0 italic border-l-2 border-slate-100 pl-4">
//                     <p className="font-bold text-xs text-slate-800 uppercase">{edu.school}</p>
//                     <p className="text-[10px] text-slate-500 mt-1 uppercase">{edu.degree}, {edu.date}</p>
//                   </div>
//                 ))}
//               </section>
//             )}
//           </div>

//           <div className="col-span-8">
//             {projects.length > 0 && (
//               <section>
//                 <h3 className="text-xs font-black uppercase tracking-widest text-[#1e3a8a] mb-8">Selected Works</h3>
//                 <div className="space-y-8">
//                   {projects.map((p, i) => (
//                     <div key={i} className="project-item">
//                       <h4 className="font-bold text-[11px] text-slate-800 uppercase italic mb-1">{p.name}</h4>
//                       <p className="text-[10px] text-slate-500 leading-relaxed whitespace-pre-wrap font-medium">{p.desc}</p>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImpactHeader;


import React from 'react';

const ImpactHeader = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    awards = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="font-sans text-slate-900 bg-white min-h-[1100px] flex flex-col">
      
      {/* MASSIVE HEADER */}
      <header className="bg-slate-900 text-white p-16 pb-24 clip-path-slant-bottom">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-2">{personal.name}</h1>
          <p className="text-2xl font-light text-slate-400 mb-8">{personal.title}</p>
          
          <div className="flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
              {personal.phone && <span>{personal.phone}</span>}
              {personal.email && <span>{personal.email}</span>}
              {personal.location && <span>{personal.location}</span>}
          </div>
      </header>

      <div className="px-16 -mt-10 grid grid-cols-12 gap-12 flex-1">
          
          {/* MAIN CONTENT */}
          <div className="col-span-8 space-y-12">
              
              {personal.summary && (
                  <section>
                      <h3 className="font-black text-2xl uppercase mb-4 border-b-4 border-slate-900 inline-block">Profile</h3>
                      <p className="text-lg leading-relaxed font-medium text-slate-600">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="font-black text-2xl uppercase mb-8 border-b-4 border-slate-900 inline-block">Experience</h3>
                      <div className="space-y-10">
                          {experience.map(exp => (
                              <div key={exp.id}>
                                  <div className="flex justify-between items-baseline mb-1">
                                      <h4 className="text-2xl font-bold text-slate-900">{exp.role}</h4>
                                      <span className="text-sm font-bold bg-slate-900 text-white px-3 py-1">{exp.date}</span>
                                  </div>
                                  <div className="text-lg font-bold text-slate-400 mb-4 uppercase">{exp.company}</div>
                                  <p className="text-slate-600 leading-7">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* SIDEBAR */}
          <div className="col-span-4 space-y-12 pt-8">
              {personal.photo && (
                  <img src={personal.photo} alt="Profile" className="w-40 h-40 object-cover shadow-2xl border-4 border-white -mt-32 relative z-10" />
              )}

              <section>
                  <h3 className="font-bold uppercase tracking-widest text-slate-400 mb-4">Expertise</h3>
                  <div className="flex flex-col gap-2 font-bold text-lg">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="border-l-4 border-slate-900 pl-3">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="font-bold uppercase tracking-widest text-slate-400 mb-4">Education</h3>
                      <div className="space-y-6">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-xl">{edu.school}</div>
                                  <div className="text-slate-500">{edu.degree}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {(projects.length > 0 || awards.length > 0) && (
                  <section>
                      <h3 className="font-bold uppercase tracking-widest text-slate-400 mb-4">Highlights</h3>
                      <ul className="space-y-2 font-medium text-slate-700">
                          {projects.map(p => <li key={p.id}>• {p.name}</li>)}
                          {awards.map(a => <li key={a.id}>★ {a.name}</li>)}
                      </ul>
                  </section>
              )}
          </div>
      </div>
    </div>
  );
};

export default ImpactHeader;