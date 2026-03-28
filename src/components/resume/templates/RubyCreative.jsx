// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const RubyCreative = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionHeader = ({ icon, title }) => (
//     <div className="flex items-center gap-3 border-b-2 border-red-50 pb-3 mb-8">
//       <span className="text-[#D32F2F]">{icon}</span>
//       <h3 className="text-[#D32F2F] font-black text-xs uppercase tracking-[0.3em]">{title}</h3>
//     </div>
//   );

//   return (
//     <div className="w-full h-full bg-white text-slate-800 shadow-2xl min-h-[1100px] font-sans pb-10 resume-preview-wrapper">
//       <header className="bg-[#D32F2F] text-white p-12 text-center shadow-lg">
//         <h1 className="text-6xl font-black uppercase tracking-tighter mb-2 break-words leading-none">{personal.name || "Your Name"}</h1>
//         <p className="text-2xl font-bold opacity-90 tracking-[0.25em] break-words uppercase italic">{personal.title}</p>
//         <div className="flex justify-center flex-wrap gap-8 mt-8 text-[11px] font-black uppercase tracking-widest opacity-80 border-t border-white/20 pt-6">
//           {personal.email && <div className="flex items-center gap-2 break-all"><Mail size={14}/> {personal.email}</div>}
//           {personal.phone && <div className="flex items-center gap-2"><Phone size={14}/> {personal.phone}</div>}
//           {personal.location && <div className="flex items-center gap-2 break-words"><MapPin size={14}/> {personal.location}</div>}
//           {personal.linkedin && <div className="flex items-center gap-2 break-all"><Linkedin size={14}/> {personal.linkedin}</div>}
//         </div>
//       </header>

//       <div className="p-12 space-y-16">
//         {personal.summary && (
//           <section className="max-w-4xl mx-auto border-b-2 border-red-50 pb-12">
//             <p className="text-base leading-relaxed text-slate-500 text-center whitespace-pre-wrap break-words italic px-12">"{personal.summary}"</p>
//           </section>
//         )}

//         <div className="grid grid-cols-12 gap-12">
//           <div className="col-span-8 space-y-16">
//             <section>
//               <SectionHeader icon={<Briefcase size={20}/>} title="Professional Journey" />
//               <div className="space-y-12">
//                 {experience.map((exp, i) => (
//                   <React.Fragment key={i}>
//                     {exp.pageBreak && <div className="manual-page-break" />}
//                     <div className="experience-item relative pl-10 border-l-4 border-red-50">
//                       <div className="absolute -left-[10px] top-1 w-4 h-4 rounded-full bg-[#D32F2F] shadow-[0_0_10px_rgba(211,47,47,0.4)]"></div>
//                       <div className="flex justify-between items-baseline mb-2">
//                         <h4 className="font-black text-slate-900 text-xl break-words uppercase tracking-tight leading-none">{exp.role}</h4>
//                         <span className="text-[11px] font-black text-slate-300 uppercase shrink-0 ml-6 tracking-widest italic">{exp.date}</span>
//                       </div>
//                       <div className="text-[12px] font-black text-[#D32F2F] uppercase mb-4 tracking-[0.2em] break-words">{exp.company}</div>
//                       <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-wrap break-words text-justify italic">{exp.desc}</p>
//                     </div>
//                   </React.Fragment>
//                 ))}
//               </div>
//             </section>

//             {projects.length > 0 && (
//               <section>
//                 <SectionHeader icon={<Layers size={20}/>} title="Strategic Initiatives" />
//                 <div className="grid grid-cols-2 gap-8">
//                   {projects.map((proj, i) => (
//                     <React.Fragment key={i}>
//                       {proj.pageBreak && <div className="manual-page-break" />}
//                       <div className="project-item bg-red-50/20 p-6 rounded-3xl border-2 border-red-50 shadow-sm transition-transform hover:scale-[1.02]">
//                         <h4 className="font-black text-sm text-slate-800 mb-3 uppercase break-words leading-tight tracking-tighter italic border-b border-red-100 pb-2">{proj.name}</h4>
//                         <p className="text-[11px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic">{proj.desc}</p>
//                       </div>
//                     </React.Fragment>
//                   ))}
//                 </div>
//               </section>
//             )}
//           </div>

//           <aside className="col-span-4 space-y-16">
//             <section>
//               <SectionHeader icon={<Cpu size={20}/>} title="Expertise" />
//               <div className="flex flex-wrap gap-2">
//                 {[...skills.technical, ...skills.core, ...skills.soft].map((s, i) => (
//                   <span key={i} className="px-3 py-1.5 bg-[#D32F2F] text-white text-[10px] font-black uppercase rounded-lg shadow-md break-words border border-[#B71C1C]">{s}</span>
//                 ))}
//               </div>
//             </section>

//             {education.length > 0 && (
//                 <section>
//                     <SectionHeader icon={<GraduationCap size={20}/>} title="Academic Base" />
//                     {education.map((edu, i) => (
//                         <div key={i} className="mb-8 last:mb-0 border-r-4 border-red-50 pr-4 text-right">
//                             <div className="font-black text-sm text-slate-800 break-words leading-tight uppercase tracking-tighter mb-1">{edu.degree}</div>
//                             <div className="text-[11px] font-bold text-slate-400 break-words">{edu.school}</div>
//                             <div className="text-[10px] font-black text-[#D32F2F] mt-2 italic uppercase tracking-widest">{edu.date}</div>
//                         </div>
//                     ))}
//                 </section>
//             )}

//             {languages.length > 0 && (
//                 <section>
//                     <SectionHeader icon={<Globe size={20}/>} title="Tongues" />
//                     <div className="space-y-3">
//                         {languages.map((l, i) => (
//                           <div key={i} className="flex justify-between text-[11px] font-black uppercase mb-1 border-b border-red-50 pb-1">
//                             <span className="break-words text-slate-600">{l.name}</span>
//                             <span className="text-[#D32F2F] opacity-60 tracking-widest">{l.level}</span>
//                           </div>
//                         ))}
//                     </div>
//                 </section>
//             )}
//           </aside>
//         </div>

//         <footer className="pt-16 border-t-4 border-red-50 grid grid-cols-2 gap-16">
//              {awards.length > 0 && (
//                  <section>
//                     <SectionHeader icon={<Award size={20}/>} title="Recognition" />
//                     {awards.map((aw, i) => <div key={i} className="text-[12px] font-black mb-4 break-words text-slate-600 uppercase tracking-tighter border-l-4 border-red-100 pl-4 py-1">🏆 {aw.name} — <span className="text-slate-300 font-bold italic">{aw.issuer}</span></div>)}
//                  </section>
//              )}
//              {volunteering.length > 0 && (
//                  <section>
//                     <SectionHeader icon={<Heart size={20}/>} title="Social Impact" />
//                     {volunteering.map((v, i) => (
//                         <div key={i} className="mb-4 last:mb-0 bg-slate-50 p-4 rounded-2xl border border-slate-100">
//                             <div className="text-[11px] font-black text-slate-800 break-words uppercase tracking-tight italic leading-tight mb-1">{v.role} @ {v.org}</div>
//                             <p className="text-[10px] text-slate-500 whitespace-pre-wrap break-words italic">{v.desc}</p>
//                         </div>
//                     ))}
//                  </section>
//              )}
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default RubyCreative;

import React from 'react';

const RubyCreative = ({ data }) => {
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
      
      {/* SIDEBAR - RUBY */}
      <aside className="w-[30%] bg-[#9d174d] text-pink-50 p-8 pt-12 flex flex-col gap-10">
         <div className="text-center">
            {personal.photo && (
                <img src={personal.photo} alt="Profile" className="w-28 h-28 rounded-full border-4 border-pink-200/20 object-cover mx-auto mb-6 shadow-xl" />
            )}
            <h1 className="text-2xl font-black uppercase tracking-wide text-white mb-2 leading-none">{personal.name}</h1>
            <p className="text-xs uppercase tracking-widest text-pink-300 font-bold">{personal.title}</p>
         </div>

         <div className="space-y-4 text-xs font-medium opacity-90">
             {personal.email && <div className="border-b border-pink-800 pb-2">{personal.email}</div>}
             {personal.phone && <div className="border-b border-pink-800 pb-2">{personal.phone}</div>}
             {personal.location && <div className="border-b border-pink-800 pb-2">{personal.location}</div>}
         </div>

         <section>
             <h3 className="text-white font-bold uppercase text-xs mb-4 border-b-2 border-pink-400 pb-1 inline-block">Skills</h3>
             <div className="flex flex-wrap gap-2">
                 {[...technical, ...soft].map((s, i) => (
                     <span key={i} className="text-[10px] bg-pink-900/50 px-2 py-1 rounded border border-pink-800">{s}</span>
                 ))}
             </div>
         </section>

         {education.length > 0 && (
             <section>
                 <h3 className="text-white font-bold uppercase text-xs mb-4 border-b-2 border-pink-400 pb-1 inline-block">Education</h3>
                 {education.map(edu => (
                     <div key={edu.id} className="mb-4">
                         <div className="font-bold text-white text-xs">{edu.school}</div>
                         <div className="text-[10px] text-pink-200">{edu.degree}</div>
                     </div>
                 ))}
             </section>
         )}
      </aside>

      {/* MAIN CONTENT */}
      <main className="w-[70%] p-12 bg-white">
          
          {personal.summary && (
              <section className="mb-12">
                  <h3 className="text-pink-900 font-black uppercase text-3xl mb-4 opacity-10">Profile</h3>
                  <p className="text-slate-600 leading-relaxed font-medium -mt-8 relative z-10">{personal.summary}</p>
              </section>
          )}

          {experience.length > 0 && (
              <section className="mb-12">
                  <h3 className="text-pink-900 font-black uppercase text-3xl mb-8 opacity-10">Experience</h3>
                  <div className="space-y-10 -mt-10 relative z-10">
                      {experience.map(exp => (
                          <div key={exp.id} className="pl-6 border-l-2 border-pink-100">
                              <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                              <div className="flex justify-between text-sm font-bold text-pink-700 mb-2">
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
              <section>
                  <h3 className="text-pink-900 font-black uppercase text-3xl mb-6 opacity-10">Highlights</h3>
                  <div className="grid grid-cols-2 gap-8 -mt-8 relative z-10">
                      {awards.length > 0 && (
                          <div>
                              <h4 className="font-bold text-slate-900 text-sm mb-2">Awards</h4>
                              {awards.map(a => <div key={a.id} className="text-sm text-slate-600 mb-1">★ {a.name}</div>)}
                          </div>
                      )}
                      {languages.length > 0 && (
                          <div>
                              <h4 className="font-bold text-slate-900 text-sm mb-2">Languages</h4>
                              {languages.map(l => <div key={l.id} className="text-sm text-slate-600 mb-1">🗣 {l.name}</div>)}
                          </div>
                      )}
                  </div>
              </section>
          )}

      </main>

    </div>
  );
};

export default RubyCreative;