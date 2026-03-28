// import React from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const BubbleHeader = ({ data }) => {
//   const { personal, skills, experience, education, languages } = data;

//   const SectionTitle = ({ title }) => (
//     <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-6">
//       {title}
//     </h3>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper flex flex-col">
//       <header className="relative">
//         <div className="bg-[#3b82f6] p-12 text-white rounded-bl-[4rem]">
//           <h1 className="text-5xl font-bold mb-2">Hi, I'm {personal.name}.</h1>
//           <p className="text-xl font-medium opacity-90">{personal.title}</p>
//         </div>
//         <div className="bg-white p-6 flex flex-wrap gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest pl-12">
//           {personal.phone && <span className="flex items-center gap-2"><Phone size={14} className="text-[#3b82f6]"/> {personal.phone}</span>}
//           {personal.email && <span className="flex items-center gap-2"><Mail size={14} className="text-[#3b82f6]"/> {personal.email}</span>}
//           {personal.location && <span className="flex items-center gap-2"><MapPin size={14} className="text-[#3b82f6]"/> {personal.location}</span>}
//         </div>
//       </header>

//       <div className="p-16 space-y-12 flex-1">
//         {personal.summary && (
//           <section>
//             <SectionTitle title="Summary" />
//             <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-wrap">{personal.summary}</p>
//           </section>
//         )}

//         <section>
//           <SectionTitle title="Skills" />
//           <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-xs text-slate-600">
//             <ul className="space-y-2">
//               {skills.core.map((s, i) => <li key={i}>• {s}</li>)}
//             </ul>
//             <ul className="space-y-2">
//               {skills.technical.map((s, i) => <li key={i}>• {s}</li>)}
//             </ul>
//           </div>
//         </section>

//         <section>
//           <SectionTitle title="Experience" />
//           <div className="space-y-10">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div>
//                   <div className="flex justify-between font-bold text-sm text-slate-800 mb-1">
//                     <h4>{exp.role}</h4>
//                     <span className="text-slate-500 font-normal text-xs">{exp.date}</span>
//                   </div>
//                   <p className="text-xs font-bold text-[#3b82f6] mb-3 italic">{exp.company}</p>
//                   <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap">{exp.desc}</p>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </section>

//         {education.length > 0 && (
//           <section>
//             <SectionTitle title="Education and Training" />
//             <div className="space-y-6">
//               {education.map((edu, i) => (
//                 <div key={i} className="flex justify-between">
//                   <div>
//                     <p className="font-bold text-sm text-slate-800">{edu.degree}</p>
//                     <p className="text-xs text-slate-600 italic mt-1">{edu.school}</p>
//                   </div>
//                   <p className="text-xs text-slate-500 font-bold">{edu.date}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {languages.length > 0 && (
//           <section>
//             <SectionTitle title="Languages" />
//             <div className="grid grid-cols-2 gap-4 text-xs">
//               {languages.map((l, i) => (
//                 <div key={i} className="flex justify-between border-b border-slate-100 pb-2">
//                   <span className="font-bold text-slate-800">{l.name}</span>
//                   <span className="text-slate-600">{l.level}</span>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BubbleHeader;

import React from 'react';

const BubbleHeader = ({ data }) => {
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
    <div className="font-sans text-slate-700 bg-white min-h-[1100px]">
      
      {/* HEADER BUBBLES */}
      <div className="relative bg-indigo-50 p-12 pb-20 overflow-hidden text-center">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full blur-xl opacity-50"></div>
          <div className="absolute top-10 right-10 w-20 h-20 bg-pink-200 rounded-full blur-xl opacity-50"></div>

          <div className="relative z-10">
              {personal.photo && (
                  <img src={personal.photo} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-xl object-cover" />
              )}
              <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">{personal.name}</h1>
              <span className="inline-block bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">{personal.title}</span>
              
              <div className="flex justify-center gap-6 text-sm font-medium text-slate-500">
                  {personal.email && <span>{personal.email}</span>}
                  {personal.phone && <span>{personal.phone}</span>}
                  {personal.linkedin && <span>{personal.linkedin}</span>}
              </div>
          </div>
      </div>

      <div className="max-w-4xl mx-auto p-12 -mt-10 relative z-20 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
          
          {personal.summary && (
              <section className="mb-12 text-center">
                  <p className="text-lg text-slate-600 leading-relaxed font-light">{personal.summary}</p>
              </section>
          )}

          {/* SKILLS BUBBLES */}
          <section className="mb-12 text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">Expertise</h3>
              <div className="flex flex-wrap justify-center gap-2">
                  {[...technical, ...soft].map((s, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm font-bold border border-slate-100 shadow-sm">{s}</span>
                  ))}
              </div>
          </section>

          {/* EXPERIENCE */}
          {experience.length > 0 && (
              <section className="mb-12">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-6 text-center">Experience</h3>
                  <div className="space-y-10">
                      {experience.map(exp => (
                          <div key={exp.id} className="relative pl-8 border-l-2 border-indigo-100">
                              <span className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-4 border-indigo-400 rounded-full"></span>
                              <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                              <div className="text-sm font-bold text-indigo-600 mb-2">{exp.company} • {exp.date}</div>
                              <p className="text-sm text-slate-600 leading-relaxed">{exp.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          <div className="grid grid-cols-2 gap-10">
              {/* EDUCATION */}
              {education.length > 0 && (
                  <section>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-slate-900">{edu.school}</div>
                                  <div className="text-sm text-slate-500">{edu.degree}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
              
              {/* AWARDS / PROJECTS */}
              {(awards.length > 0 || projects.length > 0) && (
                  <section>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">Highlights</h3>
                      <ul className="space-y-3 text-sm text-slate-600">
                          {awards.map(a => <li key={a.id}>🏆 {a.name}</li>)}
                          {projects.map(p => <li key={p.id}>📂 {p.name}</li>)}
                      </ul>
                  </section>
              )}
          </div>

      </div>
    </div>
  );
};

export default BubbleHeader;