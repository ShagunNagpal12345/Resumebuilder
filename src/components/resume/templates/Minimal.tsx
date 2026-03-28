// import React from 'react';

// const Minimal = ({ data }: any) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full h-full bg-white text-black min-h-[1100px] font-sans p-16 resume-preview-wrapper flex flex-col">
//       <header className="mb-12 border-b-[3px] border-black pb-8 shrink-0">
//         <h1 className="text-5xl font-black mb-2 break-words uppercase tracking-tighter">{personal.name || "YOUR NAME"}</h1>
//         <p className="text-2xl font-bold text-slate-700 break-words uppercase tracking-[0.3em] italic opacity-80">{personal.title}</p>
//         <div className="flex flex-wrap gap-x-8 gap-y-2 text-[12px] font-black mt-8 text-slate-500 uppercase tracking-widest">
//             {personal.email && <span className="break-all border-b border-slate-100 pb-1">{personal.email}</span>}
//             {personal.phone && <span className="border-b border-slate-100 pb-1">{personal.phone}</span>}
//             {personal.location && <span className="break-words border-b border-slate-100 pb-1">{personal.location}</span>}
//             {personal.linkedin && <span className="break-all text-black border-b border-black pb-1">{personal.linkedin}</span>}
//         </div>
//       </header>

//       <div className="space-y-16 flex-1">
//         {personal.summary && (
//             <section className="border-l-[12px] border-black pl-10 italic">
//                 <h2 className="text-[11px] font-black uppercase tracking-[0.5em] mb-4 text-slate-400">Professional Objective</h2>
//                 <p className="text-[14px] leading-relaxed text-slate-800 whitespace-pre-wrap break-words text-justify">"{personal.summary}"</p>
//             </section>
//         )}

//         <section>
//             <h2 className="text-[11px] font-black uppercase tracking-[0.6em] border-b border-slate-200 mb-10 pb-2 text-slate-300">Experience Record</h2>
//             <div className="space-y-12">
//                 {experience.map((exp: any, i: number) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item group">
//                             <div className="flex justify-between font-black text-xl mb-2 tracking-tight group-hover:underline decoration-4">
//                                 <span className="break-words uppercase">{exp.role}</span>
//                                 <span className="shrink-0 ml-10 text-[11px] font-bold tracking-[0.4em] italic text-slate-400">{exp.date}</span>
//                             </div>
//                             <div className="text-[12px] font-black italic mb-6 break-words text-slate-600 uppercase tracking-widest">{exp.company}</div>
//                             <p className="text-[14px] text-slate-800 leading-relaxed whitespace-pre-wrap break-words text-justify italic border-l border-slate-100 pl-6">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         {projects && projects.length > 0 && (
//             <section>
//                 <h2 className="text-[11px] font-black uppercase tracking-[0.6em] border-b border-slate-200 mb-10 pb-2 text-slate-300">Portfolio Highlights</h2>
//                 <div className="grid grid-cols-2 gap-12">
//                     {projects.map((proj: any, i: number) => (
//                         <React.Fragment key={i}>
//                             {proj.pageBreak && <div className="manual-page-break" />}
//                             <div className="project-item border-l-4 border-slate-50 pl-8 hover:border-black transition-colors">
//                                 <h4 className="font-black text-sm text-slate-900 mb-3 break-words uppercase tracking-tighter italic shadow-sm">{proj.name}</h4>
//                                 <p className="text-[12px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic">{proj.desc}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </section>
//         )}

//         <div className="grid grid-cols-2 gap-16 border-t border-slate-100 pt-16">
//             <section>
//                 <h2 className="text-[11px] font-black uppercase tracking-[0.4em] border-b border-black mb-8 pb-2">Academic History</h2>
//                 {education.map((edu: any, i: number) => (
//                     <React.Fragment key={i}>
//                         {edu.pageBreak && <div className="manual-page-break" />}
//                         <div className="education-item mb-8 text-[13px] font-black uppercase tracking-tighter italic shadow-sm">
//                             <div className="break-words">{edu.degree}</div>
//                             <div className="text-slate-400 mt-2 font-bold tracking-widest">{edu.school} | {edu.date}</div>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </section>

//             <section>
//                 <h2 className="text-[11px] font-black uppercase tracking-[0.4em] border-b border-black mb-8 pb-2">Technical Mastery</h2>
//                 <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-black uppercase tracking-widest leading-loose">
//                     {[...skills.core, ...skills.technical, ...skills.soft].map((s: string, i: number) => (
//                         <span key={i} className="text-black border-b border-slate-100 px-1">• {s}</span>
//                     ))}
//                 </div>
//             </section>
//         </div>

//         <div className="grid grid-cols-3 gap-12 pt-16 border-t-8 border-black">
//             {awards && awards.length > 0 && (
//                 <section>
//                     <h2 className="text-[9px] font-black uppercase tracking-[0.6em] text-slate-300 mb-6 italic">Distinction</h2>
//                     {awards.map((a: any, i: number) => <div key={i} className="text-[11px] font-black break-words uppercase mb-4 tracking-tighter leading-none">• {a.name} <span className="block text-[8px] italic opacity-40 mt-1">[{a.issuer}]</span></div>)}
//                 </section>
//             )}
//             {certifications && certifications.length > 0 && (
//                 <section>
//                     <h2 className="text-[9px] font-black uppercase tracking-[0.6em] text-slate-300 mb-6 italic">Credentials</h2>
//                     {certifications.map((c: any, i: number) => <div key={i} className="text-[11px] font-black break-words uppercase mb-4 border-b border-slate-50 pb-2 leading-none">{c.name}</div>)}
//                 </section>
//             )}
//             {languages && languages.length > 0 && (
//                 <section>
//                     <h2 className="text-[9px] font-black uppercase tracking-[0.6em] text-slate-300 mb-6 italic">Tongues</h2>
//                     {languages.map((l: any, i: number) => <div key={i} className="text-[11px] font-black break-words uppercase mb-3 italic tracking-widest text-slate-700">{l.name} [{l.level}]</div>)}
//                 </section>
//             )}
//             {volunteering && volunteering.length > 0 && (
//                 <section className="col-span-3 pt-6 border-t border-slate-50">
//                     <h2 className="text-[9px] font-black uppercase tracking-[0.6em] text-slate-300 mb-6 italic">Public Contributions</h2>
//                     <div className="grid grid-cols-2 gap-10">
//                         {volunteering.map((v: any, i: number) => <p key={i} className="text-[11px] font-black break-words uppercase italic text-slate-500 leading-tight tracking-tighter">• {v.role} @ {v.org} ({v.date})</p>)}
//                     </div>
//                 </section>
//             )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Minimal;

import React from 'react';

const Minimal = ({ data }) => {
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
    <div className="p-12 font-serif text-slate-900 bg-white min-h-[1100px]">
      {/* CENTERED HEADER */}
      <header className="text-center border-b border-slate-200 pb-8 mb-8">
        <h1 className="text-3xl font-normal uppercase tracking-widest mb-3">{personal.name}</h1>
        <p className="text-sm italic text-slate-500 mb-4">{personal.title}</p>
        <div className="text-xs text-slate-400 font-sans tracking-wide space-x-3">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>| {personal.phone}</span>}
          {personal.location && <span>| {personal.location}</span>}
          {personal.linkedin && <span>| {personal.linkedin}</span>}
        </div>
      </header>

      {/* SUMMARY */}
      {personal.summary && (
        <section className="mb-8 max-w-2xl mx-auto text-center">
            <p className="text-sm leading-7 text-slate-700">{personal.summary}</p>
        </section>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id || Math.random()} className="grid grid-cols-12 gap-4">
                <div className="col-span-3 text-right pr-4 border-r border-slate-100">
                    <p className="text-xs font-bold text-slate-900">{exp.date}</p>
                    <p className="text-xs text-slate-500 italic mt-1">{exp.company}</p>
                </div>
                <div className="col-span-9 pl-2">
                    <h3 className="font-bold text-sm text-slate-800 mb-2">{exp.role}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SKILLS & EDUCATION SPLIT */}
      <div className="grid grid-cols-2 gap-12">
          
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">Expertise</h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
                 {[...technical, ...soft].map((s, i) => (
                     <span key={i} className="text-sm text-slate-700 italic border-b border-slate-100 pb-0.5">{s}</span>
                 ))}
            </div>
          </section>

          {education.length > 0 && (
            <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">Education</h2>
                {education.map(edu => (
                    <div key={edu.id} className="mb-4">
                        <p className="font-bold text-sm">{edu.school}</p>
                        <p className="text-xs text-slate-600">{edu.degree}</p>
                    </div>
                ))}
            </section>
          )}
      </div>

      {/* FOOTER: CERTIFICATIONS & LANGS */}
      {(certifications.length > 0 || languages.length > 0) && (
          <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between">
             {certifications.length > 0 && (
                 <div className="text-xs text-slate-500">
                     <span className="font-bold text-slate-900 mr-2">Certified:</span>
                     {certifications.map(c => c.name).join(', ')}
                 </div>
             )}
             {languages.length > 0 && (
                 <div className="text-xs text-slate-500">
                     <span className="font-bold text-slate-900 mr-2">Languages:</span>
                     {languages.map(l => l.name).join(', ')}
                 </div>
             )}
          </div>
      )}

    </div>
  );
};

export default Minimal;