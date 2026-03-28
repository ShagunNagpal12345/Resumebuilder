// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle, Zap, ShieldCheck } from 'lucide-react';

// const NavySidebar = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SideHeading = ({ icon, title }) => (
//     <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-8">
//       <span className="text-blue-300/60">{icon}</span>
//       <h3 className="text-white font-black text-[11px] uppercase tracking-[0.4em]">{title}</h3>
//     </div>
//   );

//   return (
//     <div className="w-full flex bg-white min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper overflow-hidden">
//       <aside className="w-[35%] bg-[#004B8D] text-white p-14 flex flex-col gap-12 shrink-0 shadow-[inset_-20px_0_40px_rgba(0,0,0,0.1)]">
//         <div className="text-center">
//             {personal.photo && (
//               <div className="relative inline-block mb-10 group">
//                 <div className="absolute -inset-4 bg-blue-400/20 rounded-full blur-xl group-hover:bg-blue-400/30 transition-all duration-700"></div>
//                 <img src={personal.photo} className="w-44 h-44 rounded-full border-8 border-white/10 mx-auto object-cover relative z-10 shadow-2xl" alt="Profile" />
//               </div>
//             )}
//             <h2 className="text-4xl font-black uppercase tracking-tighter break-words leading-none mb-3 shadow-blue-900">{personal.name || "Your Name"}</h2>
//             <p className="text-sm font-bold text-blue-300 uppercase mt-2 tracking-[0.3em] break-words leading-tight italic opacity-80">{personal.title || "Strategic Lead"}</p>
//         </div>

//         <div className="space-y-12 flex-1">
//             <section>
//                 <SideHeading icon={<Globe size={16}/>} title="Direct Line" />
//                 <div className="space-y-6 text-[12px] font-bold uppercase tracking-[0.15em] text-blue-100">
//                   {personal.email && <div className="flex items-center gap-4 break-all leading-tight"><div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5"><Mail size={14} className="text-blue-300"/></div> {personal.email}</div>}
//                   {personal.phone && <div className="flex items-center gap-4 leading-tight"><div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5"><Phone size={14} className="text-blue-300"/></div> {personal.phone}</div>}
//                   {personal.location && <div className="flex items-center gap-4 break-words leading-tight"><div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5"><MapPin size={14} className="text-blue-300"/></div> {personal.location}</div>}
//                   {personal.linkedin && <div className="flex items-center gap-4 break-all leading-tight"><div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5"><Linkedin size={14} className="text-blue-300"/></div> {personal.linkedin}</div>}
//                 </div>
//             </section>

//             <section>
//                 <SideHeading icon={<Cpu size={16}/>} title="Competencies" />
//                 <div className="space-y-5">
//                     {[...skills.technical, ...skills.core, ...skills.soft].slice(0, 10).map((s, i) => (
//                         <div key={i} className="break-words group">
//                             <div className="flex justify-between text-[10px] mb-2 font-black uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"><span>{s}</span><span className="text-blue-400">92%</span></div>
//                             <div className="h-1 bg-white/10 rounded-full overflow-hidden border border-white/5"><div className="h-full bg-gradient-to-r from-blue-500 to-blue-300 w-[92%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div></div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {education.length > 0 && (
//                 <section>
//                     <SideHeading icon={<GraduationCap size={16}/>} title="Academic Base" />
//                     {education.map((edu, i) => (
//                         <div key={i} className="mb-8 last:mb-0 relative pl-6 border-l-2 border-white/10">
//                             <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-300 shadow-[0_0_10px_#93c5fd]"></div>
//                             <div className="font-black text-sm text-white break-words leading-tight uppercase mb-1 tracking-tighter">{edu.degree}</div>
//                             <div className="text-[11px] font-bold text-blue-200/60 break-words leading-tight italic">{edu.school}</div>
//                             <div className="text-[10px] text-blue-300/40 font-black mt-2 uppercase tracking-widest leading-none">{edu.date}</div>
//                         </div>
//                     ))}
//                 </section>
//             )}
//         </div>
//       </aside>

//       <main className="flex-1 p-16 bg-[#F8FAFC] space-y-16 flex flex-col relative">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40 blur-3xl pointer-events-none"></div>

//         {personal.summary && (
//             <section className="mb-12 relative">
//                 <h3 className="text-sm font-black uppercase text-slate-300 tracking-[0.6em] mb-10 italic flex items-center gap-4"><div className="w-12 h-px bg-slate-200"></div> Executive Summary</h3>
//                 <p className="text-[15px] text-slate-600 leading-[1.8] font-medium whitespace-pre-wrap break-words text-justify border-l-[12px] border-blue-100 pl-12 italic shadow-sm bg-white p-8 rounded-r-[3rem] shadow-slate-100">"{personal.summary}"</p>
//             </section>
//         )}

//         <section>
//             <h3 className="text-sm font-black uppercase text-[#004B8D] mb-12 border-l-[8px] border-[#004B8D] pl-6 tracking-[0.5em] uppercase italic leading-none">Professional record</h3>
//             <div className="space-y-16">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item group">
//                             <div className="flex justify-between items-baseline mb-4 border-b border-slate-100 pb-3">
//                                 <h4 className="font-black text-slate-900 text-2xl tracking-tighter break-words uppercase leading-none group-hover:text-[#004B8D] transition-colors">{exp.role}</h4>
//                                 <span className="text-[12px] font-black text-slate-300 shrink-0 ml-10 tracking-[0.4em] italic uppercase font-bold">{exp.date}</span>
//                             </div>
//                             <div className="text-[13px] font-black text-[#004B8D] uppercase mb-6 tracking-[0.3em] break-words leading-none italic flex items-center gap-3"><ShieldCheck size={16} className="opacity-40"/> {exp.company}</div>
//                             <p className="text-[15px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words text-justify font-medium italic pr-6">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         {projects.length > 0 && (
//             <section>
//                 <h3 className="text-sm font-black uppercase text-slate-300 mb-12 border-l-[8px] border-slate-200 pl-6 tracking-[0.5em] uppercase italic leading-none">Strategic Portfolio</h3>
//                 <div className="grid grid-cols-2 gap-12">
//                     {projects.map((p, i) => (
//                         <div key={i} className="project-item bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:border-[#004B8D]/20 transition-all hover:shadow-xl">
//                             <h4 className="font-black text-base text-slate-800 break-words uppercase mb-4 tracking-tighter italic leading-tight group-hover:text-[#004B8D] transition-colors flex items-center gap-3"><Zap size={16} className="text-blue-500 fill-blue-500 shrink-0"/> {p.name}</h4>
//                             <p className="text-[13px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words font-medium italic opacity-80 border-t border-slate-50 pt-4">{p.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         )}

//         <footer className="mt-auto pt-20 border-t-2 border-slate-100 grid grid-cols-3 gap-12 uppercase text-[10px] font-black tracking-[0.6em] text-slate-400 pb-10">
//             {awards.length > 0 && (
//                 <div className="space-y-4">
//                     <h4 className="text-[#004B8D] opacity-40 mb-6 tracking-[0.4em]">Honors_Log</h4>
//                     {awards.map((a, i) => <div key={i} className="mb-2 break-words text-slate-500 font-bold leading-tight">🏆 {a.name}</div>)}
//                 </div>
//             )}
//             {languages.length > 0 && (
//                 <div className="text-center space-y-4 border-x border-slate-50 px-8">
//                     <h4 className="text-[#004B8D] opacity-40 mb-6 tracking-[0.4em]">Glo_Mod</h4>
//                     {languages.map((l, i) => <div key={i} className="mb-2 break-words italic text-slate-400 font-black tracking-widest">{l.name} // {l.level}</div>)}
//                 </div>
//             )}
//             {certifications.length > 0 && (
//                 <div className="text-right space-y-4">
//                     <h4 className="text-[#004B8D] opacity-40 mb-6 tracking-[0.4em]">Cert_In</h4>
//                     {certifications.map((c, i) => <div key={i} className="mb-2 break-words leading-tight font-bold text-slate-400 border-b border-slate-50 pb-2">{c.name}</div>)}
//                 </div>
//             )}
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default NavySidebar;

import React from 'react';

const NavySidebar = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    languages = [],
    awards = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="flex w-full min-h-[1100px] bg-white font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-1/3 bg-slate-900 text-slate-300 p-8 flex flex-col">
         {/* Photo */}
         {personal.photo && (
            <div className="mb-8 flex justify-center">
                <img src={personal.photo} alt="Profile" className="w-32 h-32 rounded-full border-4 border-slate-700 object-cover" />
            </div>
         )}
         
         {/* Contact */}
         <div className="mb-8 space-y-3 text-xs">
            {personal.email && <div className="break-all font-medium text-white">{personal.email}</div>}
            {personal.phone && <div>{personal.phone}</div>}
            {personal.location && <div>{personal.location}</div>}
            {personal.linkedin && <div className="text-blue-400">{personal.linkedin}</div>}
         </div>

         {/* Education */}
         {education.length > 0 && (
             <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4">Education</h3>
                <div className="space-y-4">
                    {education.map(edu => (
                        <div key={edu.id}>
                            <div className="text-white font-bold text-sm">{edu.school}</div>
                            <div className="text-xs italic opacity-80">{edu.degree}</div>
                            <div className="text-[10px] opacity-60 mt-1">{edu.date}</div>
                        </div>
                    ))}
                </div>
             </div>
         )}

         {/* Skills */}
         <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
                {[...technical, ...soft].map((s, i) => (
                    <span key={i} className="bg-slate-800 px-2 py-1 rounded text-[10px] text-white">{s}</span>
                ))}
            </div>
         </div>

         {/* Languages */}
         {languages.length > 0 && (
             <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-4">Languages</h3>
                <ul className="text-xs space-y-1">
                    {languages.map(l => <li key={l.id}>{l.name} - {l.level}</li>)}
                </ul>
             </div>
         )}
      </aside>

      {/* MAIN CONTENT */}
      <main className="w-2/3 p-10 bg-white">
         <header className="mb-10">
            <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight leading-none mb-2">{personal.name}</h1>
            <p className="text-xl text-teal-600 font-medium">{personal.title}</p>
         </header>

         {personal.summary && (
            <div className="mb-10 text-sm leading-relaxed text-slate-600 border-l-4 border-teal-500 pl-4">
                {personal.summary}
            </div>
         )}

         {experience.length > 0 && (
             <section className="mb-10">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-900 rounded-full"></span> Experience
                </h2>
                <div className="space-y-8">
                    {experience.map(exp => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-bold text-base text-slate-800">{exp.role}</h3>
                                <span className="text-xs font-bold text-slate-400">{exp.date}</span>
                            </div>
                            <div className="text-sm font-semibold text-teal-600 mb-2">{exp.company}</div>
                            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                        </div>
                    ))}
                </div>
             </section>
         )}

         {/* Projects or Awards */}
         {projects.length > 0 && (
             <section>
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-900 rounded-full"></span> Projects
                </h2>
                <div className="grid grid-cols-1 gap-4">
                    {projects.map(proj => (
                        <div key={proj.id} className="bg-slate-50 p-4 rounded-lg">
                            <h4 className="font-bold text-sm text-slate-900">{proj.name}</h4>
                            <p className="text-xs text-slate-600 mt-1">{proj.desc}</p>
                        </div>
                    ))}
                </div>
             </section>
         )}
      </main>

    </div>
  );
};

export default NavySidebar;