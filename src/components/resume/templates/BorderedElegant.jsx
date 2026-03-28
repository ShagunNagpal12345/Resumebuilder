// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const BorderedElegant = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans p-8 resume-preview-wrapper flex flex-col">
//       {/* Thick Outer Border */}
//       <div className="border-[12px] border-[#1e3a8a] p-10 flex-1 flex flex-col">
//         <header className="flex justify-between items-start mb-10 border-b border-slate-100 pb-8">
//           <div>
//             <h1 className="text-6xl font-light text-slate-800 tracking-tight break-words leading-none">{personal.name || "Your Name"}</h1>
//           </div>
//           <div className="text-[11px] font-bold text-slate-600 space-y-1 shrink-0 ml-10 text-right">
//             {personal.email && <div className="break-all">{personal.email}</div>}
//             {personal.phone && <div>{personal.phone}</div>}
//             {personal.location && <div className="break-words italic">{personal.location}</div>}
//           </div>
//         </header>

//         <div className="grid grid-cols-12 gap-10 flex-1">
//           {/* Left Column */}
//           <aside className="col-span-4 border-r border-slate-200 pr-8 space-y-10">
//             <section>
//               <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Skills</h3>
//               <ul className="space-y-1 text-xs text-slate-600">
//                 {[...skills.core, ...skills.technical, ...skills.soft].map((s, i) => (
//                   <li key={i} className="flex items-start gap-2">• {s}</li>
//                 ))}
//               </ul>
//             </section>

//             {education.length > 0 && (
//               <section>
//                 <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Education</h3>
//                 {education.map((edu, i) => (
//                   <div key={i} className="mb-4 text-xs">
//                     <p className="font-bold text-slate-700">{edu.degree}</p>
//                     <p className="text-slate-500 italic">{edu.school}</p>
//                     <p className="text-[10px] text-slate-400 mt-1">{edu.date}</p>
//                   </div>
//                 ))}
//               </section>
//             )}

//             {languages.length > 0 && (
//               <section>
//                 <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Languages</h3>
//                 {languages.map((l, i) => (
//                   <div key={i} className="mb-3">
//                     <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1">
//                       <span>{l.name}</span>
//                       <span className="opacity-50">{l.level}</span>
//                     </div>
//                     <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
//                       <div className="h-full bg-[#1e3a8a] w-[80%]"></div>
//                     </div>
//                   </div>
//                 ))}
//               </section>
//             )}
//           </aside>

//           {/* Right Column */}
//           <main className="col-span-8 space-y-10">
//             {personal.summary && (
//               <section>
//                 <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4 border-b border-slate-100 pb-1">Summary</h3>
//                 <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-wrap break-words">{personal.summary}</p>
//               </section>
//             )}

//             <section>
//               <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-100 pb-1">Experience</h3>
//               <div className="space-y-8">
//                 {experience.map((exp, i) => (
//                   <React.Fragment key={i}>
//                     {exp.pageBreak && <div className="manual-page-break" />}
//                     <div>
//                       <div className="flex justify-between items-baseline mb-1">
//                         <h4 className="font-bold text-slate-800 text-sm break-words uppercase">{exp.company} — {exp.role}</h4>
//                         <span className="text-[10px] font-bold text-slate-400 shrink-0 ml-4">{exp.date}</span>
//                       </div>
//                       <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap break-words italic">{exp.desc}</p>
//                     </div>
//                   </React.Fragment>
//                 ))}
//               </div>
//             </section>

//             {projects.length > 0 && (
//               <section>
//                 <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4 border-b border-slate-100 pb-1">Interests</h3>
//                 <ul className="grid grid-cols-2 gap-2 text-xs text-slate-600">
//                   {projects.map((p, i) => <li key={i}>• {p.name}</li>)}
//                 </ul>
//               </section>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BorderedElegant;

import React from 'react';

const BorderedElegant = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    languages = [],
    certifications = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="p-8 bg-white min-h-[1100px] flex justify-center">
      <div className="w-full border-2 border-slate-800 p-8 h-full">
        
        {/* HEADER */}
        <header className="flex justify-between items-center border-b-2 border-slate-800 pb-8 mb-8">
            <div className="flex-1">
                <h1 className="text-4xl font-serif font-bold uppercase tracking-widest text-slate-900">{personal.name}</h1>
                <p className="text-md uppercase tracking-widest mt-2 text-slate-500">{personal.title}</p>
            </div>
            {personal.photo && (
                <div className="w-24 h-24 border-2 border-slate-800 p-1">
                    <img src={personal.photo} className="w-full h-full object-cover grayscale" alt="Profile" />
                </div>
            )}
        </header>

        <div className="grid grid-cols-12 gap-8">
            
            {/* LEFT SIDEBAR */}
            <div className="col-span-4 border-r border-slate-200 pr-8 space-y-8">
                
                {/* CONTACT */}
                <section>
                    <h3 className="font-bold text-xs uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">Contact</h3>
                    <div className="text-xs space-y-2 text-slate-600 font-medium">
                        {personal.phone && <div>{personal.phone}</div>}
                        {personal.email && <div className="break-words">{personal.email}</div>}
                        {personal.location && <div>{personal.location}</div>}
                        {personal.linkedin && <div>{personal.linkedin}</div>}
                    </div>
                </section>

                {/* SKILLS */}
                <section>
                    <h3 className="font-bold text-xs uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">Skills</h3>
                    <div className="flex flex-col gap-2 text-xs text-slate-600">
                        {[...technical, ...soft].map((s, i) => <span key={i} className="border-b border-slate-100 pb-1">{s}</span>)}
                    </div>
                </section>

                {/* EDUCATION */}
                {education.length > 0 && (
                    <section>
                        <h3 className="font-bold text-xs uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">Education</h3>
                        <div className="space-y-4">
                            {education.map(edu => (
                                <div key={edu.id}>
                                    <div className="font-bold text-sm text-slate-900">{edu.school}</div>
                                    <div className="text-xs text-slate-500 italic">{edu.degree}</div>
                                    <div className="text-[10px] text-slate-400 mt-1">{edu.date}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-span-8 space-y-8">
                
                {/* SUMMARY */}
                {personal.summary && (
                    <section>
                        <h3 className="font-bold text-xs uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">Profile</h3>
                        <p className="text-sm leading-7 text-slate-700">{personal.summary}</p>
                    </section>
                )}

                {/* EXPERIENCE */}
                {experience.length > 0 && (
                    <section>
                        <h3 className="font-bold text-xs uppercase tracking-widest border-b border-slate-800 pb-2 mb-6">Experience</h3>
                        <div className="space-y-8">
                            {experience.map(exp => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-lg text-slate-900">{exp.role}</h4>
                                        <span className="text-xs font-bold text-slate-400">{exp.date}</span>
                                    </div>
                                    <div className="text-sm font-bold text-slate-500 uppercase mb-2">{exp.company}</div>
                                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
                 
                 {/* CERTIFICATIONS */}
                 {certifications.length > 0 && (
                    <section>
                        <h3 className="font-bold text-xs uppercase tracking-widest border-b border-slate-800 pb-2 mb-3">Certifications</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {certifications.map(c => (
                                <div key={c.id} className="text-sm text-slate-600">
                                    <span className="font-bold text-slate-800">{c.name}</span> - {c.issuer}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
      </div>
    </div>
  );
};

export default BorderedElegant;