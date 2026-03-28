// import React from 'react';

// const BlockBranding = ({ data }) => {
//   const { personal, skills, experience, education, projects } = data;
//   const initials = personal.name ? personal.name.split(' ').map(n => n[0]).join('') : 'DA';

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper flex flex-col">
//       <header className="bg-[#2d4a8a] p-10 text-white flex items-center gap-10 shrink-0">
//         <div className="w-20 h-20 border-2 border-white flex items-center justify-center text-3xl font-bold">
//           {initials}
//         </div>
//         <div>
//           <h1 className="text-6xl font-bold uppercase tracking-tighter leading-none mb-2">{personal.name}</h1>
//           <div className="text-xs opacity-80 font-bold uppercase tracking-widest">
//             {personal.location} | {personal.email} | {personal.phone}
//           </div>
//         </div>
//       </header>

//       <div className="p-12 space-y-12 flex-1">
//         {personal.summary && (
//           <section>
//             <h3 className="text-[#2d4a8a] font-black uppercase text-xs tracking-widest border-b-2 border-slate-100 pb-2 mb-4">Summary</h3>
//             <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-wrap">{personal.summary}</p>
//           </section>
//         )}

//         <section>
//           <h3 className="text-[#2d4a8a] font-black uppercase text-xs tracking-widest border-b-2 border-slate-100 pb-2 mb-6">Skills</h3>
//           <div className="grid grid-cols-2 gap-4 text-xs text-slate-600">
//             {[...skills.core, ...skills.technical].map((s, i) => (
//               <div key={i} className="flex items-center gap-3">
//                  <div className="w-1 h-1 bg-[#2d4a8a] rounded-full"></div> {s}
//               </div>
//             ))}
//           </div>
//         </section>

//         <section>
//           <h3 className="text-[#2d4a8a] font-black uppercase text-xs tracking-widest border-b-2 border-slate-100 pb-2 mb-8">Experience</h3>
//           <div className="space-y-10">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div className="flex">
//                   <div className="w-32 shrink-0 text-[10px] font-bold text-slate-400 pt-1 uppercase">{exp.date}</div>
//                   <div className="flex-1">
//                     <h4 className="font-bold text-slate-800 text-sm uppercase">{exp.role}</h4>
//                     <p className="text-[11px] font-black text-[#2d4a8a] mb-2">{exp.company}</p>
//                     <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap">{exp.desc}</p>
//                   </div>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default BlockBranding;

import React from 'react';

const BlockBranding = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="flex w-full min-h-[1100px] bg-white font-sans text-slate-800">
      
      {/* LEFT BRAND BLOCK */}
      <aside className="w-[35%] bg-slate-900 text-white p-10 flex flex-col justify-between">
          <div>
              {personal.photo && (
                  <img src={personal.photo} alt="Profile" className="w-32 h-32 object-cover border-4 border-white/20 mb-8" />
              )}
              <h1 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4">{personal.name}</h1>
              <p className="text-xl text-slate-400 font-medium mb-12">{personal.title}</p>
              
              <div className="space-y-6 text-sm font-medium opacity-90">
                  {personal.email && (
                      <div>
                          <span className="block text-xs text-slate-500 uppercase tracking-widest mb-1">Email</span>
                          {personal.email}
                      </div>
                  )}
                  {personal.phone && (
                      <div>
                          <span className="block text-xs text-slate-500 uppercase tracking-widest mb-1">Phone</span>
                          {personal.phone}
                      </div>
                  )}
                  {personal.location && (
                      <div>
                          <span className="block text-xs text-slate-500 uppercase tracking-widest mb-1">Location</span>
                          {personal.location}
                      </div>
                  )}
              </div>
          </div>

          <div className="mt-12 space-y-8">
              <section>
                  <h3 className="text-slate-500 font-black uppercase tracking-widest text-xs mb-4">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="bg-slate-800 px-2 py-1 text-xs font-bold border-l-2 border-white">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="text-slate-500 font-black uppercase tracking-widest text-xs mb-4">Education</h3>
                      {education.map(edu => (
                          <div key={edu.id} className="mb-4 last:mb-0">
                              <div className="font-bold text-white">{edu.school}</div>
                              <div className="text-xs text-slate-400">{edu.degree}</div>
                          </div>
                      ))}
                  </section>
              )}
          </div>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="w-[65%] p-12 bg-slate-50">
          
          {personal.summary && (
              <section className="mb-12">
                  <h2 className="text-2xl font-black uppercase text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center text-xs">01</span> Profile
                  </h2>
                  <p className="text-slate-600 leading-relaxed font-medium">{personal.summary}</p>
              </section>
          )}

          {experience.length > 0 && (
              <section className="mb-12">
                  <h2 className="text-2xl font-black uppercase text-slate-900 mb-8 flex items-center gap-3">
                      <span className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center text-xs">02</span> Experience
                  </h2>
                  <div className="space-y-10 border-l-2 border-slate-200 pl-8 ml-3">
                      {experience.map(exp => (
                          <div key={exp.id} className="relative">
                              <div className="absolute -left-[39px] top-1.5 w-4 h-4 bg-slate-900 rounded-full border-4 border-slate-50"></div>
                              <div className="flex justify-between items-baseline mb-1">
                                  <h3 className="font-bold text-xl text-slate-900">{exp.role}</h3>
                                  <span className="text-sm font-bold text-slate-400">{exp.date}</span>
                              </div>
                              <div className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">{exp.company}</div>
                              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {(projects.length > 0 || certifications.length > 0 || languages.length > 0) && (
              <section>
                   <h2 className="text-2xl font-black uppercase text-slate-900 mb-6 flex items-center gap-3">
                      <span className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center text-xs">03</span> Additional
                  </h2>
                  <div className="grid grid-cols-2 gap-8">
                      {projects.length > 0 && (
                          <div>
                              <h3 className="font-bold uppercase text-xs text-slate-400 mb-3">Projects</h3>
                              {projects.map(p => <div key={p.id} className="text-sm font-bold mb-1">• {p.name}</div>)}
                          </div>
                      )}
                      {certifications.length > 0 && (
                          <div>
                              <h3 className="font-bold uppercase text-xs text-slate-400 mb-3">Certified</h3>
                              {certifications.map(c => <div key={c.id} className="text-sm font-bold mb-1">• {c.name}</div>)}
                          </div>
                      )}
                  </div>
              </section>
          )}

      </main>
    </div>
  );
};

export default BlockBranding;