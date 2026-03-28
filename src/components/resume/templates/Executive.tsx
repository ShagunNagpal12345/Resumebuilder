// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const Executive = ({ data }: any) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full h-full bg-white text-slate-900 font-serif min-h-[1100px] p-16 resume-preview-wrapper flex flex-col">
//       <header className="text-center border-b-2 border-slate-900 pb-10 mb-12 shrink-0 shadow-sm">
//         <h1 className="text-6xl font-bold tracking-tight mb-4 uppercase break-words leading-none">{personal.name || "Your Name"}</h1>
//         <p className="text-2xl font-medium text-slate-500 uppercase tracking-[0.3em] mb-8 break-words italic">{personal.title}</p>
        
//         <div className="flex flex-wrap justify-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
//             {personal.email && <span className="flex items-center gap-2 break-all border-b border-slate-100 pb-1"><Mail size={12}/> {personal.email}</span>}
//             {personal.phone && <span className="flex items-center gap-2 border-b border-slate-100 pb-1"><Phone size={12}/> {personal.phone}</span>}
//             {personal.location && <span className="flex items-center gap-2 border-b border-slate-100 pb-1 break-words"><MapPin size={12}/> {personal.location}</span>}
//             {personal.linkedin && <span className="flex items-center gap-2 text-slate-900 border-b border-slate-900 pb-1 break-all uppercase tracking-tighter"><Linkedin size={12}/> Professional Profile</span>}
//         </div>
//       </header>

//       <div className="flex-1 flex flex-col space-y-16">
//         {personal.summary && (
//             <section className="mb-6 max-w-5xl mx-auto">
//                 <p className="text-[15px] leading-loose text-slate-700 italic text-center px-12 whitespace-pre-wrap break-words font-medium">"{personal.summary}"</p>
//             </section>
//         )}

//         <section>
//             <h3 className="text-sm font-black uppercase tracking-[0.4em] text-slate-900 mb-10 border-b border-slate-200 pb-3 text-center">Professional Record</h3>
//             <div className="space-y-12">
//                 {experience.map((exp: any, i: number) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item">
//                             <div className="flex justify-between items-end mb-3 border-b border-slate-50 pb-2">
//                                 <div className="max-w-[70%]">
//                                     <h4 className="font-bold text-xl text-slate-900 break-words leading-tight tracking-tight uppercase">{exp.role}</h4>
//                                     <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1 break-words italic">{exp.company}</p>
//                                 </div>
//                                 <span className="text-xs font-bold text-slate-400 italic shrink-0 ml-10 mb-1 tracking-widest">{exp.date}</span>
//                             </div>
//                             <p className="text-sm text-slate-600 leading-relaxed text-justify whitespace-pre-wrap break-words italic px-6">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         <div className="grid grid-cols-12 gap-16 border-t-2 border-slate-50 pt-16">
//             <div className="col-span-8 space-y-16">
//                 {projects && projects.length > 0 && (
//                     <section>
//                         <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-8 border-l-4 border-slate-900 pl-6 uppercase">Key Initiatives</h3>
//                         <div className="space-y-10">
//                             {projects.map((p: any, i: number) => (
//                                 <React.Fragment key={i}>
//                                     {p.pageBreak && <div className="manual-page-break" />}
//                                     <div className="project-item mb-4">
//                                         <div className="font-bold text-sm text-slate-800 break-words mb-2 uppercase tracking-tight italic border-b border-slate-50 pb-1 flex items-center gap-2"><Layers size={14}/> {p.name}</div>
//                                         <p className="text-[13px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic px-4">{p.desc}</p>
//                                     </div>
//                                 </React.Fragment>
//                             ))}
//                         </div>
//                     </section>
//                 )}

//                 {volunteering && volunteering.length > 0 && (
//                     <section>
//                         <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-8 border-l-4 border-slate-900 pl-6 uppercase">Philanthropy</h3>
//                         <div className="grid grid-cols-2 gap-8">
//                             {volunteering.map((v: any, i: number) => (
//                                 <div key={i} className="mb-4 text-sm border-r border-slate-50 pr-4">
//                                     <div className="font-bold text-slate-800 break-words uppercase italic">{v.role} @ {v.org}</div>
//                                     <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">{v.date}</div>
//                                     <p className="text-[12px] text-slate-500 mt-3 whitespace-pre-wrap">{v.desc}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 )}
//             </div>

//             <aside className="col-span-4 space-y-16">
//                 {education && education.length > 0 && (
//                     <section>
//                         <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-8 border-b border-slate-200 pb-2 uppercase">Education</h3>
//                         {education.map((edu: any, i: number) => (
//                             <React.Fragment key={i}>
//                                 {edu.pageBreak && <div className="manual-page-break" />}
//                                 <div className="education-item mb-6 text-right">
//                                     <div className="font-bold text-sm text-slate-800 break-words leading-tight uppercase italic">{edu.degree}</div>
//                                     <div className="text-xs text-slate-500 mt-1 break-words font-medium uppercase tracking-tighter">{edu.school}</div>
//                                     <div className="text-[10px] text-slate-300 font-black mt-2 uppercase tracking-widest">{edu.date}</div>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </section>
//                 )}
                
//                 <section>
//                     <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-8 border-b border-slate-200 pb-2 uppercase">Expertise</h3>
//                     <div className="grid grid-cols-1 gap-y-2 text-[11px] font-bold text-slate-600 uppercase tracking-widest">
//                         {[...skills.core, ...skills.technical, ...skills.soft].map((s: string, i: number) => (
//                             <div key={i} className="flex items-center gap-3 break-words border-l-2 border-slate-100 pl-4 py-1 italic">
//                                 <div className="w-1 h-1 bg-slate-900 shrink-0"></div> {s}
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {certifications && certifications.length > 0 && (
//                     <section>
//                         <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-6 border-b border-slate-50 pb-2">Certifications</h4>
//                         {certifications.map((c: any, i: number) => <div key={i} className="text-[11px] font-bold text-slate-700 break-words mb-3 leading-tight uppercase italic flex items-center gap-3"><CheckCircle size={12} className="text-slate-200"/> {c.name}</div>)}
//                     </section>
//                 )}
//             </aside>
//         </div>
//       </div>

//       <footer className="mt-auto pt-16 border-t-8 border-slate-50 grid grid-cols-3 gap-10 text-center text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase italic">
//             {awards && awards.length > 0 && <div className="col-span-3 border-b border-slate-50 pb-10 flex flex-wrap justify-center gap-12">{awards.map((a: any, i: number) => <span key={i}>🏆 {a.name} ({a.issuer})</span>)}</div>}
//             {languages && languages.length > 0 && <div className="col-span-3 pt-6 flex flex-wrap justify-center gap-10 opacity-60 uppercase font-black">{languages.map((l: any, i: number) => <span key={i}>{l.name} — {l.level}</span>)}</div>}
//       </footer>
//     </div>
//   );
// };

// export default Executive;

import React from 'react';

const Executive = ({ data }) => {
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
    <div className="p-12 font-serif text-slate-900 bg-white min-h-[1100px]">
      
      {/* CENTERED HEADER */}
      <header className="text-center border-b-2 border-slate-900 pb-6 mb-8">
        <h1 className="text-4xl font-bold uppercase tracking-widest text-slate-900 mb-2">{personal.name}</h1>
        <p className="text-md uppercase tracking-wide text-slate-500 font-sans mb-4">{personal.title}</p>
        
        <div className="flex justify-center flex-wrap gap-4 text-sm font-sans text-slate-600">
           {personal.phone && <span>{personal.phone}</span>}
           {personal.email && <span>{personal.email}</span>}
           {personal.location && <span>{personal.location}</span>}
           {personal.linkedin && <span>{personal.linkedin}</span>}
        </div>
      </header>

      {/* SUMMARY */}
      {personal.summary && (
        <section className="mb-10 text-center max-w-3xl mx-auto">
            <p className="text-sm leading-7 text-slate-800">{personal.summary}</p>
        </section>
      )}

      {/* SKILLS ROW */}
      <section className="mb-10 bg-slate-50 p-4 border-y border-slate-200">
          <h3 className="text-center text-xs font-bold uppercase font-sans text-slate-400 mb-3 tracking-widest">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-sans font-medium text-slate-700">
              {[...technical, ...soft].map((s, i) => <span key={i}>{s}</span>)}
          </div>
      </section>

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <section className="mb-10">
           <h2 className="text-lg font-bold uppercase border-b border-slate-300 pb-2 mb-6 font-sans text-slate-800">Professional Experience</h2>
           <div className="space-y-8">
               {experience.map(exp => (
                   <div key={exp.id}>
                       <div className="flex justify-between items-baseline mb-1 font-sans">
                           <h3 className="font-bold text-lg text-slate-900">{exp.role}</h3>
                           <span className="text-sm font-bold text-slate-500">{exp.date}</span>
                       </div>
                       <div className="text-md italic text-slate-600 mb-3 font-serif">{exp.company}</div>
                       <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line font-sans">{exp.desc}</p>
                   </div>
               ))}
           </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-10">
          {/* EDUCATION */}
          {education.length > 0 && (
              <section>
                 <h2 className="text-md font-bold uppercase border-b border-slate-300 pb-2 mb-4 font-sans text-slate-800">Education</h2>
                 {education.map(edu => (
                     <div key={edu.id} className="mb-4">
                         <div className="font-bold text-slate-900">{edu.school}</div>
                         <div className="text-sm italic text-slate-600">{edu.degree}</div>
                         <div className="text-xs text-slate-400 font-sans mt-1">{edu.date}</div>
                     </div>
                 ))}
              </section>
          )}

          {/* CERTIFICATIONS / PROJECTS */}
          {(certifications.length > 0 || projects.length > 0) && (
               <section>
                  <h2 className="text-md font-bold uppercase border-b border-slate-300 pb-2 mb-4 font-sans text-slate-800">Additional</h2>
                  <div className="space-y-4">
                      {certifications.map(c => (
                          <div key={c.id}>
                              <div className="font-bold text-sm text-slate-900">{c.name}</div>
                              <div className="text-xs text-slate-500 font-sans">{c.issuer} • {c.date}</div>
                          </div>
                      ))}
                      {projects.map(p => (
                          <div key={p.id}>
                              <div className="font-bold text-sm text-slate-900">{p.name}</div>
                              <div className="text-xs text-slate-500 font-sans truncate">{p.desc}</div>
                          </div>
                      ))}
                  </div>
               </section>
          )}
      </div>

    </div>
  );
};

export default Executive;