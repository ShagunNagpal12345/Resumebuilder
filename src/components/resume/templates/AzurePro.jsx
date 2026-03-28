// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const AzurePro = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionHeader = ({ title }) => (
//     <h3 className="text-sm font-black uppercase text-[#2A7BBF] tracking-[0.5em] mb-10 text-center border-b-2 border-blue-50 pb-4">
//         {title}
//     </h3>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans pb-10 resume-preview-wrapper">
//       <header className="bg-[#2A7BBF] p-16 text-white text-center shadow-lg">
//         <h1 className="text-6xl font-black tracking-tighter uppercase mb-4 break-words leading-none">{personal.name || "Your Name"}</h1>
//         <p className="text-2xl font-bold text-blue-100 uppercase tracking-[0.3em] mb-10 break-words">{personal.title}</p>
//         <div className="flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase tracking-widest">
//             {personal.email && <div className="flex items-center gap-2 break-all border-b border-blue-400 pb-1"><Mail size={14}/> {personal.email}</div>}
//             {personal.phone && <div className="flex items-center gap-2 border-b border-blue-400 pb-1"><Phone size={14}/> {personal.phone}</div>}
//             {personal.location && <div className="flex items-center gap-2 border-b border-blue-400 pb-1"><MapPin size={14}/> {personal.location}</div>}
//             {personal.linkedin && <div className="flex items-center gap-2 break-all border-b border-blue-400 pb-1"><Linkedin size={14}/> {personal.linkedin}</div>}
//         </div>
//       </header>

//       <div className="p-16 space-y-16">
//         {personal.summary && (
//             <section className="text-center border-b border-slate-100 pb-12 max-w-5xl mx-auto">
//                 <p className="text-sm leading-relaxed text-slate-500 font-medium whitespace-pre-wrap break-words px-12 italic">"{personal.summary}"</p>
//             </section>
//         )}

//         <section>
//             <SectionHeader title="Experience Record" />
//             <div className="space-y-12">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item border-l-4 border-[#2A7BBF] pl-10 relative">
//                             <div className="absolute -left-[10px] top-1 w-4 h-4 bg-white border-4 border-[#2A7BBF] rounded-full"></div>
//                             <div className="flex justify-between items-baseline mb-2">
//                                 <h4 className="font-black text-slate-900 text-xl tracking-tight break-words uppercase leading-none">{exp.role}</h4>
//                                 <span className="text-xs font-black text-slate-300 shrink-0 ml-8 italic">{exp.date}</span>
//                             </div>
//                             <div className="text-[13px] font-black text-[#2A7BBF] uppercase mb-4 tracking-widest break-words italic">{exp.company}</div>
//                             <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap break-words text-justify">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         <div className="grid grid-cols-12 gap-16 pt-12 border-t border-slate-100">
//             <div className="col-span-8 space-y-16">
//                 {projects.length > 0 && (
//                     <section>
//                         <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#2A7BBF] mb-8 border-l-4 border-[#2A7BBF] pl-4">Strategic Projects</h3>
//                         <div className="space-y-10">
//                             {projects.map((p, i) => (
//                                 <React.Fragment key={i}>
//                                     {p.pageBreak && <div className="manual-page-break" />}
//                                     <div className="project-item">
//                                         <h4 className="font-bold text-sm text-slate-800 break-words uppercase mb-2 tracking-tight">{p.name}</h4>
//                                         <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic">{p.desc}</p>
//                                     </div>
//                                 </React.Fragment>
//                             ))}
//                         </div>
//                     </section>
//                 )}

//                 {volunteering.length > 0 && (
//                     <section>
//                         <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#2A7BBF] mb-8 border-l-4 border-[#2A7BBF] pl-4">Social Contributions</h3>
//                         {volunteering.map((v, i) => (
//                             <div key={i} className="mb-6 last:mb-0">
//                                 <div className="font-bold text-xs text-slate-800 uppercase">{v.role} @ {v.org}</div>
//                                 <p className="text-[11px] text-slate-400 mt-1 uppercase font-bold">{v.date}</p>
//                                 <p className="text-[11px] text-slate-500 mt-2 whitespace-pre-wrap">{v.desc}</p>
//                             </div>
//                         ))}
//                     </section>
//                 )}
//             </div>

//             <aside className="col-span-4 space-y-12">
//                 <section>
//                     <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#2A7BBF] mb-6">Expertise</h3>
//                     <div className="flex flex-wrap gap-2">
//                         {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//                             <span key={i} className="px-3 py-1.5 bg-blue-50 text-[#2A7BBF] text-[10px] font-bold uppercase rounded shadow-sm break-words border border-blue-100">{s}</span>
//                         ))}
//                     </div>
//                 </section>

//                 {education.length > 0 && (
//                     <section>
//                         <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#2A7BBF] mb-6">Education</h3>
//                         {education.map((edu, i) => (
//                             <div key={i} className="mb-6 last:mb-0">
//                                 <div className="font-bold text-xs text-slate-800 break-words leading-tight uppercase mb-1">{edu.degree}</div>
//                                 <div className="text-[10px] text-slate-400 break-words font-medium">{edu.school} | {edu.date}</div>
//                             </div>
//                         ))}
//                     </section>
//                 )}

//                 {certifications.length > 0 && (
//                     <section>
//                         <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#2A7BBF] mb-6">Certifications</h3>
//                         {certifications.map((c, i) => (
//                             <div key={i} className="text-[10px] font-bold text-slate-500 mb-2 uppercase">• {c.name}</div>
//                         ))}
//                     </section>
//                 )}

//                 {languages.length > 0 && (
//                     <section>
//                         <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#2A7BBF] mb-6">Languages</h3>
//                         {languages.map((l, i) => <div key={i} className="text-[10px] font-bold text-slate-500 mb-1 uppercase italic">{l.name}: {l.level}</div>)}
//                     </section>
//                 )}
//             </aside>
//         </div>

//         <footer className="pt-12 border-t border-slate-100 grid grid-cols-3 gap-10 uppercase text-[9px] font-black tracking-widest text-slate-300">
//             {awards.length > 0 && (
//                 <div className="col-span-3 text-center flex flex-wrap justify-center gap-8 border-b pb-8 border-slate-50">
//                     {awards.map((a, i) => <div key={i} className="break-words text-slate-500 font-black">🏆 {a.name} ({a.issuer})</div>)}
//                 </div>
//             )}
//             <div className="col-span-3 text-center opacity-30 pt-4">Executive Tenure Document — {personal.name} — Confidential</div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default AzurePro;

import React from 'react';

const AzurePro = ({ data }) => {
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
    <div className="flex w-full min-h-[1100px] bg-white font-sans">
      
      {/* SIDEBAR - BLUE */}
      <aside className="w-1/3 bg-blue-800 text-blue-50 p-8 flex flex-col gap-8">
         <div className="text-center">
            {personal.photo && (
                <img src={personal.photo} alt="Profile" className="w-32 h-32 rounded-full border-4 border-blue-600 object-cover mx-auto mb-4" />
            )}
            <h1 className="text-2xl font-bold uppercase tracking-wide text-white mb-2">{personal.name}</h1>
            <p className="text-sm text-blue-200 uppercase tracking-widest">{personal.title}</p>
         </div>

         <div className="space-y-3 text-xs opacity-90 border-t border-blue-700 pt-6">
            {personal.email && <div className="flex gap-2">✉ {personal.email}</div>}
            {personal.phone && <div className="flex gap-2">📞 {personal.phone}</div>}
            {personal.location && <div className="flex gap-2">📍 {personal.location}</div>}
            {personal.linkedin && <div className="flex gap-2">🔗 {personal.linkedin}</div>}
         </div>

         {education.length > 0 && (
             <div>
                <h3 className="text-white font-bold uppercase text-sm border-b border-blue-600 pb-2 mb-4">Education</h3>
                {education.map(edu => (
                    <div key={edu.id} className="mb-4">
                        <div className="font-bold text-white text-sm">{edu.school}</div>
                        <div className="text-xs text-blue-200">{edu.degree}</div>
                        <div className="text-[10px] opacity-60">{edu.date}</div>
                    </div>
                ))}
             </div>
         )}

         <div>
            <h3 className="text-white font-bold uppercase text-sm border-b border-blue-600 pb-2 mb-4">Expertise</h3>
            <div className="flex flex-wrap gap-2">
                {[...technical, ...soft].map((s, i) => (
                    <span key={i} className="text-xs bg-blue-700 px-2 py-1 rounded">{s}</span>
                ))}
            </div>
         </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="w-2/3 p-10 bg-white">
         
         {personal.summary && (
            <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight mb-4 border-b-2 border-blue-100 pb-2">Profile</h2>
                <p className="text-sm leading-relaxed text-slate-600">{personal.summary}</p>
            </section>
         )}

         {experience.length > 0 && (
             <section className="mb-10">
                <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight mb-6 border-b-2 border-blue-100 pb-2">Work History</h2>
                <div className="space-y-8">
                    {experience.map(exp => (
                        <div key={exp.id}>
                             <div className="flex justify-between items-baseline mb-1">
                                 <h3 className="font-bold text-lg text-slate-800">{exp.role}</h3>
                                 <span className="text-xs font-bold text-blue-600">{exp.date}</span>
                             </div>
                             <div className="text-sm font-semibold text-slate-500 mb-2 uppercase">{exp.company}</div>
                             <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                        </div>
                    ))}
                </div>
             </section>
         )}

         {(projects.length > 0 || awards.length > 0) && (
             <section>
                 <h2 className="text-xl font-bold text-blue-900 uppercase tracking-tight mb-6 border-b-2 border-blue-100 pb-2">Highlights</h2>
                 <div className="grid grid-cols-1 gap-4">
                     {projects.map(p => (
                         <div key={p.id} className="bg-slate-50 p-4 rounded border-l-4 border-blue-500">
                             <h4 className="font-bold text-sm text-slate-800">{p.name}</h4>
                             <p className="text-xs text-slate-500">{p.desc}</p>
                         </div>
                     ))}
                     {awards.map(a => (
                         <div key={a.id} className="text-sm text-slate-600 font-medium flex items-center gap-2">
                             <span className="text-blue-500">★</span> {a.name} - {a.issuer}
                         </div>
                     ))}
                 </div>
             </section>
         )}
      </main>
    </div>
  );
};

export default AzurePro;