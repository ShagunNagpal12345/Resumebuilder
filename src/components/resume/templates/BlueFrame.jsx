// import React from 'react';

// const BlueFrame = ({ data }) => {
//   const { personal, skills, experience, education, projects, languages, volunteering } = data;

//   const SectionTitle = ({ title }) => (
//     <h3 className="text-sm font-bold text-[#1e3a8a] uppercase tracking-widest mb-4">
//       {title}
//     </h3>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans p-8 resume-preview-wrapper flex flex-col">
//       <div className="border-[12px] border-[#1e3a8a] p-10 flex-1 flex flex-col">
//         <header className="flex justify-between items-start mb-12">
//           <div className="text-[11px] font-bold text-slate-600 space-y-1">
//             {personal.email && <div>{personal.email}</div>}
//             {personal.phone && <div>{personal.phone}</div>}
//             {personal.location && <div>{personal.location}</div>}
//           </div>
//           <div>
//             <h1 className="text-5xl font-normal text-[#1e3a8a] tracking-tight uppercase break-words">{personal.name}</h1>
//           </div>
//         </header>

//         <div className="grid grid-cols-12 gap-12 flex-1">
//           {/* Left Column */}
//           <aside className="col-span-4 space-y-10">
//             <section>
//               <SectionTitle title="Skills" />
//               <ul className="space-y-1.5 text-xs text-slate-600">
//                 {[...skills.core, ...skills.technical].map((s, i) => (
//                   <li key={i}>• {s}</li>
//                 ))}
//               </ul>
//             </section>

//             {education.length > 0 && (
//               <section>
//                 <SectionTitle title="Education" />
//                 {education.map((edu, i) => (
//                   <div key={i} className="mb-4 text-xs last:mb-0">
//                     <p className="font-bold text-slate-700">{edu.degree}</p>
//                     <p className="text-slate-600 italic">{edu.school}</p>
//                     <p className="text-slate-500 mt-1">{edu.date}</p>
//                   </div>
//                 ))}
//               </section>
//             )}

//             {languages.length > 0 && (
//               <section>
//                 <SectionTitle title="Languages" />
//                 <ul className="space-y-1.5 text-xs text-slate-600">
//                   {languages.map((l, i) => (
//                     <li key={i}>• {l.name} <span className="opacity-60">({l.level})</span></li>
//                   ))}
//                 </ul>
//               </section>
//             )}
//           </aside>

//           {/* Right Column */}
//           <main className="col-span-8 space-y-10">
//             {personal.summary && (
//               <section>
//                 <SectionTitle title="Summary" />
//                 <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-wrap">{personal.summary}</p>
//               </section>
//             )}

//             <section>
//               <SectionTitle title="Experience" />
//               <div className="space-y-8">
//                 {experience.map((exp, i) => (
//                   <React.Fragment key={i}>
//                     {exp.pageBreak && <div className="manual-page-break" />}
//                     <div>
//                       <h4 className="font-bold text-slate-800 text-sm">{exp.company}</h4>
//                       <div className="flex justify-between text-xs text-[#1e3a8a] font-bold mt-1 mb-3">
//                         <span>{exp.role}</span>
//                         <span>{exp.date}</span>
//                       </div>
//                       <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap">{exp.desc}</p>
//                     </div>
//                   </React.Fragment>
//                 ))}
//               </div>
//             </section>

//             {projects.length > 0 && (
//               <section>
//                 <SectionTitle title="Projects" />
//                 <div className="space-y-6">
//                   {projects.map((p, i) => (
//                     <div key={i}>
//                       <h4 className="font-bold text-slate-800 text-sm mb-2">{p.name}</h4>
//                       <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap">{p.desc}</p>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlueFrame;

import React from 'react';

const BlueFrame = ({ data }) => {
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
    <div className="p-6 bg-white min-h-[1100px] flex">
      
      {/* FRAME */}
      <div className="border-4 border-blue-900 w-full h-full p-8 flex flex-col">
        
        {/* HEADER */}
        <header className="border-b-4 border-blue-900 pb-6 mb-8 flex justify-between items-center">
            <div>
                <h1 className="text-5xl font-bold uppercase tracking-tighter text-blue-900">{personal.name}</h1>
                <p className="text-xl text-slate-500 tracking-wide mt-1">{personal.title}</p>
            </div>
            {personal.photo && (
                <img src={personal.photo} alt="Profile" className="w-24 h-24 object-cover border-2 border-blue-900 p-1" />
            )}
        </header>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-600 mb-10 pb-6 border-b border-slate-200">
            {personal.email && <div>✉ {personal.email}</div>}
            {personal.phone && <div>📞 {personal.phone}</div>}
            {personal.location && <div>📍 {personal.location}</div>}
            {personal.linkedin && <div>🔗 {personal.linkedin}</div>}
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-12 gap-8 flex-1">
            
            {/* LEFT COLUMN */}
            <div className="col-span-8 space-y-10">
                {personal.summary && (
                    <section>
                        <h3 className="text-lg font-bold uppercase text-blue-900 mb-2">Profile</h3>
                        <p className="text-slate-700 leading-relaxed">{personal.summary}</p>
                    </section>
                )}

                {experience.length > 0 && (
                    <section>
                        <h3 className="text-lg font-bold uppercase text-blue-900 mb-4">Experience</h3>
                        <div className="space-y-6">
                            {experience.map(exp => (
                                <div key={exp.id}>
                                    <h4 className="font-bold text-lg text-slate-800">{exp.role}</h4>
                                    <div className="flex justify-between text-sm text-blue-600 font-bold mb-2">
                                        <span>{exp.company}</span>
                                        <span>{exp.date}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 whitespace-pre-line">{exp.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-span-4 space-y-10 border-l border-slate-200 pl-6">
                
                <section>
                    <h3 className="text-md font-bold uppercase text-blue-900 mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-x-2 gap-y-1">
                        {[...technical, ...soft].map((s, i) => (
                            <span key={i} className="text-sm text-slate-700 font-medium">• {s}</span>
                        ))}
                    </div>
                </section>

                {education.length > 0 && (
                    <section>
                        <h3 className="text-md font-bold uppercase text-blue-900 mb-4">Education</h3>
                        {education.map(edu => (
                            <div key={edu.id} className="mb-4">
                                <div className="font-bold text-slate-800 text-sm">{edu.school}</div>
                                <div className="text-xs text-slate-500">{edu.degree}</div>
                            </div>
                        ))}
                    </section>
                )}

                {(awards.length > 0 || languages.length > 0) && (
                    <section>
                        <h3 className="text-md font-bold uppercase text-blue-900 mb-4">Misc</h3>
                        <div className="text-sm text-slate-600 space-y-2">
                            {awards.map(a => <div key={a.id}>🏆 {a.name}</div>)}
                            {languages.map(l => <div key={l.id}>🗣 {l.name}</div>)}
                        </div>
                    </section>
                )}

            </div>

        </div>

      </div>
    </div>
  );
};

export default BlueFrame;