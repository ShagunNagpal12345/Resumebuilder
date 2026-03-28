// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Cpu, TerminalSquare, Code2, Award, ShieldCheck, Layers, Heart, GraduationCap } from 'lucide-react';

// const Tech = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionTitle = ({ icon, title }) => (
//     <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-100 mb-6 flex items-center gap-3 pb-2 border-b-2 border-cyan-900">
//         <span className="text-cyan-400">{icon}</span> {title}
//     </h3>
//   );

//   return (
//     <div className="w-full h-full bg-[#0F172A] text-slate-300 font-mono min-h-[1100px] flex flex-col resume-preview-wrapper">
//       <header className="bg-slate-900 p-12 border-b-8 border-cyan-500 shrink-0">
//         <div className="flex justify-between items-start">
//             <div className="space-y-2">
//                 <h1 className="text-5xl font-black tracking-tighter uppercase break-words leading-none text-white">{personal.name || "USER_NAME"}</h1>
//                 <p className="text-cyan-400 text-xl break-words before:content-['>_'] uppercase tracking-widest font-bold">
//                     {personal.title}
//                 </p>
//             </div>
//             {personal.photo && <img src={personal.photo} className="w-28 h-28 rounded-2xl border-2 border-cyan-500 object-cover shadow-2xl" alt="Profile"/>}
//         </div>

//         <div className="grid grid-cols-2 gap-4 text-[10px] font-bold text-slate-400 mt-8 pt-6 border-t border-slate-800 uppercase tracking-widest">
//             {personal.email && <div className="flex items-center gap-2 break-all text-cyan-200"><Mail size={12}/> {personal.email}</div>}
//             {personal.phone && <div className="flex items-center gap-2"><Phone size={12}/> {personal.phone}</div>}
//             {personal.linkedin && <div className="flex items-center gap-2 break-all"><Linkedin size={12}/> {personal.linkedin}</div>}
//             {personal.location && <div className="flex items-center gap-2 break-words"><MapPin size={12}/> {personal.location}</div>}
//         </div>
//       </header>

//       <main className="p-12 space-y-12 flex-1">
//         {personal.summary && (
//             <section className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
//                 <p className="text-xs leading-relaxed text-slate-400 whitespace-pre-wrap break-words italic">{personal.summary}</p>
//             </section>
//         )}

//         <section>
//             <SectionTitle icon={<Cpu size={18}/>} title="Technical_Stack" />
//             <div className="flex flex-wrap gap-2">
//                 {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//                     <span key={i} className="px-3 py-1.5 bg-slate-900 text-cyan-400 border-l-4 border-cyan-500 shadow-sm text-[10px] font-black uppercase rounded-r-lg break-words">
//                         {s}
//                     </span>
//                 ))}
//             </div>
//         </section>

//         <section>
//             <SectionTitle icon={<Code2 size={18}/>} title="Experience.log" />
//             <div className="space-y-10">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={exp.id || i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item border-l-2 border-slate-700 pl-8 relative py-2">
//                             <div className="absolute -left-[6px] top-4 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div>
//                             <div className="flex justify-between items-baseline mb-2">
//                                 <h4 className="font-black text-lg text-white break-words tracking-tight">{exp.role}</h4>
//                                 <span className="text-[10px] text-cyan-600 bg-cyan-950 px-3 py-1 rounded shrink-0 ml-4 uppercase font-bold">{exp.date}</span>
//                             </div>
//                             <div className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">{exp.company}</div>
//                             <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-wrap break-words">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         <div className="grid grid-cols-2 gap-12">
//             <section>
//                 <SectionTitle icon={<TerminalSquare size={18}/>} title="Projects.init()" />
//                 <div className="space-y-6">
//                     {projects.map((proj, i) => (
//                         <React.Fragment key={proj.id || i}>
//                             {proj.pageBreak && <div className="manual-page-break" />}
//                             <div className="project-item bg-slate-900/50 text-slate-300 p-6 rounded-3xl border border-slate-800">
//                                 <h4 className="font-black text-cyan-400 text-xs mb-3 break-words uppercase">{proj.name}</h4>
//                                 <p className="text-[10px] leading-relaxed font-medium whitespace-pre-wrap break-words text-slate-400">{proj.desc}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </section>

//             <div className="space-y-12">
//                 <section>
//                     <SectionTitle icon={<GraduationCap size={18}/>} title="Academic_Path" />
//                     {education.map((edu, i) => (
//                         <div key={i} className="mb-6 font-mono border-l border-slate-800 pl-4">
//                             <div className="font-black text-xs text-white break-words uppercase mb-1">{edu.degree}</div>
//                             <div className="text-[10px] text-cyan-600 font-bold mb-1 uppercase tracking-tighter">{edu.school}</div>
//                             <div className="text-[10px] text-slate-500">{edu.date}</div>
//                         </div>
//                     ))}
//                 </section>

//                 {certifications.length > 0 && (
//                     <section>
//                         <SectionTitle icon={<ShieldCheck size={18}/>} title="Certifications" />
//                         {certifications.map((c, i) => (
//                             <div key={i} className="mb-4 bg-slate-900 p-4 rounded-xl border border-slate-800 text-[10px] font-bold">
//                                 <div className="text-white break-words uppercase mb-1">• {c.name}</div>
//                                 <div className="text-cyan-700 break-words ml-3 uppercase">{c.issuer}</div>
//                             </div>
//                         ))}
//                     </section>
//                 )}
//             </div>
//         </div>

//         <footer className="grid grid-cols-2 gap-12 pt-10 border-t border-slate-800 font-mono uppercase text-[9px] font-black tracking-widest text-slate-500">
//             {awards.length > 0 && (
//                 <div>
//                     <div className="text-cyan-600 mb-4 tracking-[0.4em]">🏆 Distinction_Log</div>
//                     {awards.map((a, i) => <div key={i} className="mb-2 break-words italic">{a.name} // {a.issuer}</div>)}
//                 </div>
//             )}
//             {volunteering.length > 0 && (
//                 <div className="text-right">
//                     <div className="text-cyan-600 mb-4 tracking-[0.4em]">🤝 Impact_Module</div>
//                     {volunteering.map((v, i) => <div key={i} className="mb-2 break-words">{v.role} @ {v.org}</div>)}
//                 </div>
//             )}
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default Tech;

import React from 'react';

const Tech = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    languages = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="font-mono text-slate-300 bg-[#1e1e1e] min-h-[1100px] p-10">
      
      {/* HEADER */}
      <header className="border-b border-green-500/30 pb-6 mb-8">
        <div className="flex justify-between items-end">
            <div>
                <h1 className="text-4xl font-bold text-green-400 mb-2 tracking-tighter">{`> ${personal.name || 'USER'}`}</h1>
                <p className="text-lg text-slate-400">{personal.title}</p>
            </div>
            {personal.photo && (
                <img src={personal.photo} alt="Profile" className="w-20 h-20 rounded border border-green-500/50 object-cover" />
            )}
        </div>
        
        <div className="mt-6 flex flex-wrap gap-4 text-xs text-green-600/80">
            {personal.email && <span>email: "{personal.email}"</span>}
            {personal.phone && <span>phone: "{personal.phone}"</span>}
            {personal.linkedin && <span>git/in: "{personal.linkedin}"</span>}
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
          
          {/* MAIN COLUMN */}
          <div className="col-span-8 space-y-10">
              
              {/* EXPERIENCE */}
              {experience.length > 0 && (
                  <section>
                      <h3 className="text-green-500 font-bold uppercase mb-4 text-sm">// EXPERIENCE</h3>
                      <div className="space-y-8 border-l border-slate-700 pl-6">
                          {experience.map(exp => (
                              <div key={exp.id} className="relative">
                                  <span className="absolute -left-[29px] top-1.5 w-3 h-3 bg-[#1e1e1e] border border-green-500 rounded-full"></span>
                                  <div className="flex justify-between items-baseline mb-1">
                                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                                      <span className="text-xs text-slate-500">{exp.date}</span>
                                  </div>
                                  <div className="text-sm text-green-400/80 mb-2">@ {exp.company}</div>
                                  <p className="text-xs text-slate-400 leading-relaxed opacity-90">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {/* PROJECTS */}
              {projects.length > 0 && (
                  <section>
                      <h3 className="text-green-500 font-bold uppercase mb-4 text-sm">// PROJECTS</h3>
                      <div className="grid grid-cols-1 gap-4">
                          {projects.map(p => (
                              <div key={p.id} className="bg-[#252525] p-4 border border-slate-700 hover:border-green-500/50 transition-colors">
                                  <h4 className="font-bold text-sm text-white mb-1">{p.name}</h4>
                                  <p className="text-xs text-slate-500">{p.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* SIDEBAR */}
          <div className="col-span-4 space-y-8">
              
              {/* SKILLS */}
              <section>
                  <h3 className="text-green-500 font-bold uppercase mb-4 text-sm">// STACK</h3>
                  <div className="flex flex-wrap gap-2">
                      {technical.map((s, i) => <span key={i} className="bg-green-900/20 text-green-400 px-2 py-1 text-[10px] border border-green-500/20">{s}</span>)}
                  </div>
              </section>

               {/* EDUCATION */}
               {education.length > 0 && (
                  <section>
                      <h3 className="text-green-500 font-bold uppercase mb-4 text-sm">// EDUCATION</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="text-white font-bold text-sm">{edu.school}</div>
                                  <div className="text-xs text-slate-500">{edu.degree}</div>
                                  <div className="text-[10px] text-slate-600 mt-1">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {/* LANGUAGES */}
               {languages.length > 0 && (
                  <section>
                      <h3 className="text-green-500 font-bold uppercase mb-4 text-sm">// LANGS</h3>
                      <ul className="text-xs space-y-1">
                          {languages.map(l => <li key={l.id} className="text-slate-400"><span className="text-green-600">const</span> {l.name} = "{l.level}";</li>)}
                      </ul>
                  </section>
              )}

          </div>
      </div>
    </div>
  );
};

export default Tech;