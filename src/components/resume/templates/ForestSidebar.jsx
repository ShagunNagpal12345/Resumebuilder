// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const ForestSidebar = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionHeader = ({ icon, title, light = false }) => (
//     <div className={`flex items-center gap-2 border-b pb-2 mb-6 ${light ? 'border-[#3D7056] text-[#A5D6A7]' : 'border-slate-100 text-[#2D5A43]'}`}>
//       {icon}
//       <h3 className="font-black text-xs uppercase tracking-[0.2em]">{title}</h3>
//     </div>
//   );

//   return (
//     <div className="w-full flex bg-white min-h-[1100px] shadow-2xl font-sans resume-preview-wrapper">
//       {/* SIDEBAR */}
//       <aside className="w-[32%] bg-[#2D5A43] text-white p-10 flex flex-col gap-10 shrink-0">
//         <div className="text-center">
//             {personal.photo && <img src={personal.photo} className="w-32 h-32 rounded-3xl border-4 border-[#3D7056] mx-auto object-cover mb-6 shadow-lg" />}
//             <h2 className="text-2xl font-black uppercase tracking-tighter break-words leading-tight">{personal.name || "Your Name"}</h2>
//             <p className="text-[10px] font-bold text-[#A5D6A7] uppercase tracking-[0.2em] mt-2 break-words leading-tight">{personal.title}</p>
//         </div>

//         <div className="space-y-4 text-[10px] font-bold uppercase tracking-widest border-t border-[#3D7056] pt-8">
//             {personal.email && <div className="flex items-center gap-3 break-all"><Mail size={14} className="shrink-0"/> {personal.email}</div>}
//             {personal.phone && <div className="flex items-center gap-3"><Phone size={14} className="shrink-0"/> {personal.phone}</div>}
//             {personal.location && <div className="flex items-center gap-3 break-words"><MapPin size={14} className="shrink-0"/> {personal.location}</div>}
//             {personal.linkedin && <div className="flex items-center gap-3 break-all"><Linkedin size={14} className="shrink-0"/> {personal.linkedin}</div>}
//         </div>

//         <section>
//             <SectionHeader icon={<Cpu size={14}/>} title="Expertise" light />
//             <div className="flex flex-wrap gap-2">
//                 {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//                     <span key={i} className="px-2 py-1 bg-[#3D7056] text-white text-[9px] rounded font-bold break-words border border-[#447a5d] uppercase">{s}</span>
//                 ))}
//             </div>
//         </section>

//         {education.length > 0 && (
//             <section>
//                 <SectionHeader icon={<GraduationCap size={14}/>} title="Education" light />
//                 {education.map((edu, i) => (
//                     <React.Fragment key={i}>
//                         {edu.pageBreak && <div className="manual-page-break" />}
//                         <div className="mb-6 last:mb-0">
//                             <div className="font-black text-[11px] text-white leading-tight break-words uppercase">{edu.degree}</div>
//                             <div className="text-[10px] text-[#A5D6A7] mt-1 break-words font-bold">{edu.school}</div>
//                             <div className="text-[9px] text-[#447a5d] font-black uppercase">{edu.date}</div>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </section>
//         )}

//         {languages.length > 0 && (
//             <section>
//                 <SectionHeader icon={<Globe size={14}/>} title="Languages" light />
//                 {languages.map((l, i) => (
//                     <div key={i} className="flex justify-between text-[10px] mb-2 font-bold uppercase tracking-tighter">
//                         <span className="break-words">{l.name}</span>
//                         <span className="opacity-60">{l.level}</span>
//                     </div>
//                 ))}
//             </section>
//         )}
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="flex-1 p-12 bg-white space-y-12">
//         {personal.summary && (
//             <section>
//                 <SectionHeader icon={<User size={16}/>} title="Professional Profile" />
//                 <p className="text-xs text-slate-500 leading-relaxed text-justify whitespace-pre-wrap break-words italic">{personal.summary}</p>
//             </section>
//         )}

//         <section>
//             <SectionHeader icon={<Briefcase size={16}/>} title="Experience" />
//             <div className="space-y-10">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item">
//                             <div className="flex justify-between font-bold text-slate-900 mb-1 text-sm tracking-tight uppercase">
//                                 <h4 className="break-words">{exp.role}</h4>
//                                 <span className="shrink-0 ml-6 text-[10px] text-slate-400 font-black">{exp.date}</span>
//                             </div>
//                             <div className="text-[10px] font-black text-[#2D5A43] uppercase mb-4 tracking-widest break-words">{exp.company}</div>
//                             <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap break-words">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         {projects.length > 0 && (
//             <section>
//                 <SectionHeader icon={<Layers size={16}/>} title="Featured Projects" />
//                 <div className="grid grid-cols-2 gap-8">
//                     {projects.map((p, i) => (
//                         <React.Fragment key={i}>
//                             {p.pageBreak && <div className="manual-page-break" />}
//                             <div className="project-item">
//                                 <h4 className="font-bold text-xs text-slate-800 break-words uppercase mb-2 tracking-tight">{p.name}</h4>
//                                 <p className="text-[10px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic">{p.desc}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </section>
//         )}

//         <div className="grid grid-cols-2 gap-10 pt-10 border-t border-slate-100">
//             {awards.length > 0 && (
//                 <section>
//                     <SectionHeader icon={<Award size={16}/>} title="Awards" />
//                     {awards.map((a, i) => <div key={i} className="text-[10px] font-bold mb-3 break-words text-slate-600 uppercase">🏆 {a.name} — <span className="text-slate-400">{a.issuer}</span></div>)}
//                 </section>
//             )}
//             {volunteering.length > 0 && (
//                 <section>
//                     <SectionHeader icon={<Heart size={16}/>} title="Volunteering" />
//                     {volunteering.map((v, i) => (
//                         <div key={i} className="mb-4 last:mb-0">
//                             <div className="text-[10px] font-bold text-slate-800 uppercase break-words">{v.role} @ {v.org}</div>
//                             <p className="text-[9px] text-slate-500 mt-1 whitespace-pre-wrap break-words">{v.desc}</p>
//                         </div>
//                     ))}
//                 </section>
//             )}
//         </div>

//         {certifications.length > 0 && (
//             <section className="pt-8 border-t border-slate-50">
//                 <SectionHeader icon={<CheckCircle size={16}/>} title="Certifications" />
//                 <div className="grid grid-cols-3 gap-4">
//                     {certifications.map((c, i) => (
//                         <div key={i} className="text-[9px] font-bold text-slate-400 break-words uppercase leading-tight">• {c.name}</div>
//                     ))}
//                 </div>
//             </section>
//         )}
//       </main>
//     </div>
//   );
// };

// export default ForestSidebar;

import React from 'react';

const ForestSidebar = ({ data }) => {
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
    <div className="flex w-full min-h-[1100px] bg-white font-sans">
      
      {/* SIDEBAR - GREEN */}
      <aside className="w-[35%] bg-[#143d29] text-emerald-50 p-8 flex flex-col gap-8">
         {personal.photo && (
            <div className="flex justify-center">
                <img src={personal.photo} alt="Profile" className="w-32 h-32 rounded-full border-4 border-emerald-600 object-cover shadow-xl" />
            </div>
         )}
         
         <div className="space-y-4 text-sm opacity-90">
            {personal.email && <div className="border-b border-emerald-800 pb-2">{personal.email}</div>}
            {personal.phone && <div className="border-b border-emerald-800 pb-2">{personal.phone}</div>}
            {personal.location && <div className="border-b border-emerald-800 pb-2">{personal.location}</div>}
            {personal.linkedin && <div className="text-emerald-300">{personal.linkedin}</div>}
         </div>

         {education.length > 0 && (
             <div>
                <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">Education</h3>
                {education.map(edu => (
                    <div key={edu.id} className="mb-4">
                        <div className="font-bold text-white">{edu.school}</div>
                        <div className="text-xs text-emerald-200">{edu.degree}</div>
                        <div className="text-[10px] opacity-60 mt-1">{edu.date}</div>
                    </div>
                ))}
             </div>
         )}

         <div>
            <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
                {[...technical, ...soft].map((s, i) => (
                    <span key={i} className="text-xs bg-emerald-900/50 px-2 py-1 rounded border border-emerald-800">{s}</span>
                ))}
            </div>
         </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="w-[65%] p-10 bg-[#fdfdfd]">
         <header className="mb-12 border-b-2 border-emerald-100 pb-6">
            <h1 className="text-5xl font-serif text-[#143d29] mb-2 leading-none">{personal.name}</h1>
            <p className="text-xl text-emerald-700 font-sans tracking-wide">{personal.title}</p>
         </header>

         {personal.summary && (
            <div className="mb-10 text-sm leading-relaxed text-slate-700 italic">
                {personal.summary}
            </div>
         )}

         {experience.length > 0 && (
             <section className="mb-10">
                <h2 className="text-xl font-serif text-[#143d29] mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span> Work History
                </h2>
                <div className="space-y-8 border-l border-emerald-100 pl-6 ml-1">
                    {experience.map(exp => (
                        <div key={exp.id} className="relative">
                             <span className="absolute -left-[29px] top-1.5 w-3 h-3 bg-white border-2 border-emerald-500 rounded-full"></span>
                             <h3 className="font-bold text-lg text-slate-800">{exp.role}</h3>
                             <div className="flex justify-between text-sm mb-2 text-emerald-700 font-medium">
                                 <span>{exp.company}</span>
                                 <span>{exp.date}</span>
                             </div>
                             <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                        </div>
                    ))}
                </div>
             </section>
         )}

         {(awards.length > 0 || languages.length > 0) && (
             <section className="grid grid-cols-2 gap-4">
                 {awards.length > 0 && (
                     <div>
                         <h2 className="text-md font-serif text-[#143d29] mb-3">Awards</h2>
                         {awards.map(a => <div key={a.id} className="text-sm text-slate-600 mb-1">• {a.name}</div>)}
                     </div>
                 )}
                 {languages.length > 0 && (
                     <div>
                         <h2 className="text-md font-serif text-[#143d29] mb-3">Languages</h2>
                         {languages.map(l => <div key={l.id} className="text-sm text-slate-600 mb-1">• {l.name} - {l.level}</div>)}
                     </div>
                 )}
             </section>
         )}
      </main>

    </div>
  );
};

export default ForestSidebar;