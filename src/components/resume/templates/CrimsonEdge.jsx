// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const CrimsonEdge = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full flex bg-white min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper">
//       <div className="w-24 bg-[#D32F2F] flex flex-col items-center py-16 text-white font-black [writing-mode:vertical-rl] rotate-180 uppercase tracking-[0.6em] text-lg opacity-90 shrink-0 shadow-inner">
//         {personal.name || "RESUME"} • {personal.title || "PROFESSIONAL"}
//       </div>

//       <div className="flex-1 p-16 space-y-16 flex flex-col">
//         <header className="flex justify-between items-start mb-20 shrink-0 border-b-8 border-slate-50 pb-12">
//             <div>
//                 <h1 className="text-7xl font-black text-slate-900 leading-none uppercase tracking-tighter break-words mb-2">{personal.name || "Your Name"}</h1>
//                 <p className="text-3xl font-bold text-[#D32F2F] uppercase tracking-[0.3em] break-words leading-tight italic opacity-60">{personal.title}</p>
//             </div>
//             <div className="text-[11px] font-black text-[#D32F2F] uppercase text-right leading-relaxed shrink-0 ml-12 tracking-[0.2em] border-r-4 border-[#D32F2F] pr-6">
//                 {personal.email && <div className="break-all mb-1">{personal.email}</div>}
//                 {personal.phone && <div className="mb-1">{personal.phone}</div>}
//                 {personal.location && <div className="break-words mb-1">{personal.location}</div>}
//                 {personal.linkedin && <div className="break-all text-slate-400 mt-2 tracking-tighter">{personal.linkedin}</div>}
//             </div>
//         </header>

//         {personal.summary && (
//             <section className="mb-16 border-l-[12px] border-[#D32F2F] pl-10 bg-slate-50/50 py-8 rounded-r-[3rem] shadow-sm">
//                 <p className="text-base text-slate-600 leading-relaxed font-bold whitespace-pre-wrap break-words italic px-4 italic">"{personal.summary}"</p>
//             </section>
//         )}

//         <div className="grid grid-cols-12 gap-16 flex-1">
//             <div className="col-span-8 space-y-16">
//                 <section>
//                     <h3 className="text-sm font-black uppercase text-[#D32F2F] tracking-[0.5em] mb-12 border-b-4 border-red-50 pb-3 flex items-center gap-4"><Briefcase size={20}/> Professional Tenure</h3>
//                     <div className="space-y-16">
//                         {experience.map((exp, i) => (
//                             <React.Fragment key={i}>
//                                 {exp.pageBreak && <div className="manual-page-break" />}
//                                 <div className="experience-item group">
//                                     <div className="flex justify-between font-black text-slate-900 text-2xl mb-2 uppercase tracking-tighter leading-none transition-colors group-hover:text-[#D32F2F]">
//                                         <h4 className="break-words">{exp.role}</h4><span className="shrink-0 ml-10 text-[11px] text-slate-300 tracking-[0.4em] italic font-bold">{exp.date}</span>
//                                     </div>
//                                     <div className="text-[12px] font-black text-[#D32F2F] uppercase mb-6 tracking-[0.3em] break-words leading-none flex items-center gap-3"><div className="w-8 h-0.5 bg-[#D32F2F] shrink-0"></div> {exp.company}</div>
//                                     <p className="text-[15px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words text-justify font-medium">{exp.desc}</p>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </section>

//                 {projects.length > 0 && (
//                     <section>
//                         <h3 className="text-sm font-black uppercase text-slate-300 tracking-[0.5em] mb-10">Strategic Projects</h3>
//                         <div className="space-y-12">
//                             {projects.map((p, i) => (
//                                 <React.Fragment key={i}>
//                                     {p.pageBreak && <div className="manual-page-break" />}
//                                     <div className="project-item border-l-4 border-slate-100 pl-10 hover:border-[#D32F2F] transition-colors">
//                                         <h4 className="font-black text-xl text-slate-800 break-words uppercase mb-3 tracking-tighter leading-none italic">{p.name}</h4>
//                                         <p className="text-[14px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words font-medium opacity-80 italic">{p.desc}</p>
//                                     </div>
//                                 </React.Fragment>
//                             ))}
//                         </div>
//                     </section>
//                 )}
//             </div>

//             <aside className="col-span-4 space-y-16">
//                 <section>
//                     <h3 className="text-sm font-black uppercase text-[#D32F2F] tracking-[0.4em] mb-10">Expertise</h3>
//                     <div className="flex flex-wrap gap-3">
//                         {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//                             <span key={i} className="px-5 py-3 bg-slate-900 text-white text-[11px] font-black uppercase rounded-full break-words border-2 border-slate-800 shadow-xl">{s}</span>
//                         ))}
//                     </div>
//                 </section>

//                 {education.length > 0 && (
//                     <section>
//                         <h3 className="text-sm font-black uppercase text-[#D32F2F] tracking-[0.4em] mb-8">Academics</h3>
//                         {education.map((edu, i) => (
//                             <React.Fragment key={i}>
//                                 {edu.pageBreak && <div className="manual-page-break" />}
//                                 <div className="mb-10 last:mb-0 border-b border-slate-50 pb-6">
//                                     <div className="font-black text-lg text-slate-800 break-words leading-tight uppercase mb-2 tracking-tighter italic">{edu.degree}</div>
//                                     <div className="text-[11px] font-bold text-slate-400 break-words uppercase tracking-widest">{edu.school}</div>
//                                     <div className="text-[11px] text-[#D32F2F] font-black mt-3 uppercase tracking-[0.4em]">{edu.date}</div>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </section>
//                 )}

//                 {certifications.length > 0 && (
//                     <section>
//                         <h3 className="text-[12px] font-black uppercase text-slate-300 mb-6 tracking-[0.3em]">Credentials</h3>
//                         {certifications.map((c, i) => <div key={i} className="text-[11px] font-black text-slate-500 break-words mb-4 uppercase flex items-center gap-3"><CheckCircle size={14} className="text-[#D32F2F] shrink-0"/> {c.name}</div>)}
//                     </section>
//                 )}
//             </aside>
//         </div>

//         <footer className="mt-auto pt-16 border-t-8 border-slate-50 grid grid-cols-3 gap-12 uppercase text-[10px] font-black tracking-[0.5em] text-slate-300">
//             {awards.length > 0 && <div>{awards.map((a, i) => <p key={i} className="mb-3 break-words text-[#D32F2F]">🏆 {a.name}</p>)}</div>}
//             {languages.length > 0 && <div className="text-center">{languages.map((l, i) => <p key={i} className="mb-2 break-words italic text-slate-500 font-bold tracking-widest">{l.name} — {l.level}</p>)}</div>}
//             {volunteering.length > 0 && <div className="text-right">{volunteering.map((v, i) => <p key={i} className="mb-2 break-words text-slate-800 italic uppercase italic">{v.role} @ {v.org}</p>)}</div>}
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default CrimsonEdge;

import React from 'react';

const CrimsonEdge = ({ data }) => {
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
    <div className="flex w-full min-h-[1100px] bg-white font-sans">
      
      {/* SIDEBAR - RED */}
      <aside className="w-[30%] bg-[#8a1c22] text-rose-50 p-8 pt-12 flex flex-col gap-10">
         <div className="text-center">
            {personal.photo && (
                <img src={personal.photo} alt="Profile" className="w-28 h-28 rounded-full border-4 border-rose-900 object-cover mx-auto mb-6 shadow-xl" />
            )}
            <div className="space-y-3 text-xs font-medium">
                {personal.email && <div className="border-b border-rose-800 pb-2">{personal.email}</div>}
                {personal.phone && <div className="border-b border-rose-800 pb-2">{personal.phone}</div>}
                {personal.location && <div className="border-b border-rose-800 pb-2">{personal.location}</div>}
                {personal.linkedin && <div>{personal.linkedin}</div>}
            </div>
         </div>

         {education.length > 0 && (
             <div>
                <h3 className="text-white font-black uppercase text-xs mb-4 tracking-widest border-b-2 border-rose-500 pb-1">Education</h3>
                {education.map(edu => (
                    <div key={edu.id} className="mb-4">
                        <div className="font-bold text-white text-sm">{edu.school}</div>
                        <div className="text-xs text-rose-200">{edu.degree}</div>
                        <div className="text-[10px] opacity-60 mt-1">{edu.date}</div>
                    </div>
                ))}
             </div>
         )}

         <div>
            <h3 className="text-white font-black uppercase text-xs mb-4 tracking-widest border-b-2 border-rose-500 pb-1">Skills</h3>
            <div className="flex flex-col gap-2">
                {[...technical, ...soft].map((s, i) => (
                    <span key={i} className="text-xs font-medium">• {s}</span>
                ))}
            </div>
         </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="w-[70%] p-12 bg-white">
         <header className="mb-12 border-b-4 border-rose-900 pb-6">
            <h1 className="text-5xl font-black text-rose-900 uppercase tracking-tighter mb-1">{personal.name}</h1>
            <p className="text-2xl text-slate-400 font-light uppercase tracking-wide">{personal.title}</p>
         </header>

         {personal.summary && (
            <div className="mb-12 text-sm leading-relaxed text-slate-600 font-medium">
                {personal.summary}
            </div>
         )}

         {experience.length > 0 && (
             <section className="mb-12">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-rose-900"></span> Work Experience
                </h2>
                <div className="space-y-10">
                    {experience.map(exp => (
                        <div key={exp.id}>
                             <div className="flex justify-between items-end mb-1">
                                 <h3 className="font-bold text-xl text-slate-900">{exp.role}</h3>
                                 <span className="text-sm font-bold text-rose-700">{exp.date}</span>
                             </div>
                             <div className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wide">{exp.company}</div>
                             <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                        </div>
                    ))}
                </div>
             </section>
         )}

         {(certifications.length > 0 || languages.length > 0) && (
             <section className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                 {certifications.length > 0 && (
                     <div>
                         <h3 className="font-bold text-slate-900 uppercase text-sm mb-4">Certifications</h3>
                         {certifications.map(c => <div key={c.id} className="text-sm text-slate-600 mb-1">{c.name}</div>)}
                     </div>
                 )}
                 {languages.length > 0 && (
                     <div>
                         <h3 className="font-bold text-slate-900 uppercase text-sm mb-4">Languages</h3>
                         {languages.map(l => <div key={l.id} className="text-sm text-slate-600 mb-1">{l.name} - {l.level}</div>)}
                     </div>
                 )}
             </section>
         )}
      </main>
    </div>
  );
};

export default CrimsonEdge;