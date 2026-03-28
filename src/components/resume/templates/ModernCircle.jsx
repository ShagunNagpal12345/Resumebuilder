// import React from 'react';

// const ModernCircle = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;
//   const initials = personal.name ? personal.name.split(' ').map(n => n[0]).join('') : 'DA';

//   const SectionTitle = ({ title }) => (
//     <div className="flex items-center gap-4 mb-6">
//       <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#1e3a8a] shrink-0">{title}</h3>
//       <div className="h-[1px] bg-slate-200 w-full"></div>
//     </div>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans p-16 resume-preview-wrapper flex flex-col items-center">
//       <header className="text-center mb-12 flex flex-col items-center shrink-0">
//         <div className="w-20 h-20 rounded-full border-2 border-[#1e3a8a] flex items-center justify-center text-3xl font-light text-[#1e3a8a] mb-6">
//           {initials}
//         </div>
//         <h1 className="text-5xl font-bold text-[#1e3a8a] tracking-tight uppercase mb-4">{personal.name}</h1>
//         <div className="text-xs font-bold text-slate-400 space-x-4 uppercase tracking-widest">
//            <span>{personal.email}</span>
//            <span className="opacity-30">|</span>
//            <span>{personal.phone}</span>
//            <span className="opacity-30">|</span>
//            <span>{personal.location}</span>
//         </div>
//       </header>

//       <div className="w-full space-y-12 flex-1">
//         {personal.summary && (
//           <section>
//             <SectionTitle title="Summary" />
//             <p className="text-xs leading-relaxed text-slate-600 px-10 italic text-center whitespace-pre-wrap">{personal.summary}</p>
//           </section>
//         )}

//         <section>
//           <SectionTitle title="Skills" />
//           <div className="grid grid-cols-2 gap-x-20 gap-y-2 px-10">
//             {[...skills.core, ...skills.technical, ...skills.soft].map((s, i) => (
//               <div key={i} className="text-xs text-slate-600 flex items-center gap-4">
//                 <div className="w-1 h-1 bg-slate-300 rounded-full"></div> {s}
//               </div>
//             ))}
//           </div>
//         </section>

//         <section>
//           <SectionTitle title="Experience" />
//           <div className="space-y-10 px-10">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div>
//                   <div className="flex justify-between items-baseline mb-1">
//                     <h4 className="font-bold text-slate-800 text-sm uppercase">{exp.company} | {exp.role}</h4>
//                     <span className="text-[10px] text-slate-400 italic">{exp.date}</span>
//                   </div>
//                   <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap">{exp.desc}</p>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </section>

//         {education.length > 0 && (
//           <section>
//             <SectionTitle title="Education" />
//             <div className="px-10 text-center italic text-xs text-slate-600 space-y-2">
//               {education.map((edu, i) => (
//                 <div key={i}>
//                   <span className="font-bold">{edu.school}</span>, {edu.degree}, {edu.date}
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ModernCircle;

import React from 'react';

const ModernCircle = ({ data }) => {
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
    <div className="font-sans text-slate-800 bg-white min-h-[1100px] relative overflow-hidden">
      
      {/* DECORATIVE CIRCLE */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-rose-50 rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-10 p-12">
        
        {/* HEADER */}
        <header className="flex flex-col mb-12 border-l-8 border-rose-500 pl-8">
            <h1 className="text-6xl font-black uppercase text-slate-900 leading-none">{personal.name?.split(' ')[0]}</h1>
            <h1 className="text-6xl font-black uppercase text-rose-500 leading-none mb-2">{personal.name?.split(' ').slice(1).join(' ')}</h1>
            <p className="text-2xl font-light text-slate-500 tracking-widest">{personal.title}</p>
        </header>

        <div className="grid grid-cols-12 gap-10">
            
            {/* LEFT COL */}
            <div className="col-span-8 space-y-12">
                {personal.summary && (
                    <section>
                        <p className="text-lg leading-relaxed text-slate-600 font-light italic">{personal.summary}</p>
                    </section>
                )}

                {experience.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-black uppercase text-rose-500 mb-6">Work History</h2>
                        <div className="space-y-10">
                            {experience.map(exp => (
                                <div key={exp.id}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                                    </div>
                                    <div className="pl-6">
                                        <div className="flex justify-between text-sm font-bold text-slate-400 uppercase mb-3 border-b border-slate-100 pb-1">
                                            <span>{exp.company}</span>
                                            <span>{exp.date}</span>
                                        </div>
                                        <p className="text-sm text-slate-600 leading-7">{exp.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                 {projects.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-black uppercase text-rose-500 mb-6">Projects</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {projects.map(p => (
                                <div key={p.id} className="bg-slate-50 p-6 rounded-2xl">
                                    <h4 className="font-bold text-slate-900 mb-1">{p.name}</h4>
                                    <p className="text-xs text-slate-500">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* RIGHT COL (Sidebar) */}
            <div className="col-span-4 space-y-10 pt-4">
                
                {/* PHOTO & CONTACT */}
                <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
                    {personal.photo && (
                        <div className="mb-6 flex justify-center">
                            <img src={personal.photo} alt="Profile" className="w-24 h-24 rounded-full border-4 border-rose-500 object-cover" />
                        </div>
                    )}
                    <div className="space-y-3 text-xs text-center font-medium opacity-80">
                        <div>{personal.email}</div>
                        <div>{personal.phone}</div>
                        <div>{personal.location}</div>
                    </div>
                </div>

                {/* SKILLS */}
                <section>
                    <h3 className="text-rose-500 font-black uppercase tracking-widest text-sm mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {[...technical, ...soft].map((s, i) => (
                            <span key={i} className="px-3 py-1 bg-rose-50 text-rose-600 text-xs font-bold rounded-full">{s}</span>
                        ))}
                    </div>
                </section>

                {/* EDUCATION */}
                {education.length > 0 && (
                    <section>
                        <h3 className="text-rose-500 font-black uppercase tracking-widest text-sm mb-4">Education</h3>
                        <div className="space-y-6">
                            {education.map(edu => (
                                <div key={edu.id}>
                                    <div className="font-bold text-slate-900">{edu.school}</div>
                                    <div className="text-sm text-slate-500">{edu.degree}</div>
                                    <div className="text-xs text-rose-400 mt-1">{edu.date}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
                
                 {/* AWARDS */}
                 {awards.length > 0 && (
                    <section>
                        <h3 className="text-rose-500 font-black uppercase tracking-widest text-sm mb-4">Honors</h3>
                        {awards.map(a => (
                            <div key={a.id} className="text-sm text-slate-600 mb-2 font-medium">
                                ★ {a.name}
                            </div>
                        ))}
                    </section>
                )}

            </div>
        </div>
      </div>
    </div>
  );
};

export default ModernCircle;