// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const BrickFormal = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionTitle = ({ title }) => (
//     <h3 className="text-xl font-bold text-[#D32F2F] uppercase border-b-4 border-red-50 mb-8 pb-2 tracking-[0.3em] font-serif">{title}</h3>
//   );

//   return (
//     <div className="w-full bg-[#FDF8F8] min-h-[1100px] shadow-2xl font-serif p-16 text-slate-800 border-t-[24px] border-[#D32F2F] resume-preview-wrapper flex flex-col">
//       <header className="text-center mb-16 border-b-8 border-double border-red-100 pb-12 shrink-0">
//         <h1 className="text-6xl font-bold text-[#D32F2F] mb-4 break-words leading-none uppercase tracking-wide">{personal.name || "Your Name"}</h1>
//         <p className="text-2xl italic text-slate-500 mb-10 break-words uppercase tracking-[0.1em] font-medium">{personal.title}</p>
//         <div className="flex justify-center flex-wrap gap-10 text-[13px] font-bold text-slate-600 uppercase tracking-[0.2em]">
//             {personal.email && <span className="break-all border-b border-red-200 pb-1">{personal.email}</span>}
//             {personal.phone && <span className="border-b border-red-200 pb-1">{personal.phone}</span>}
//             {personal.location && <span className="break-words border-b border-red-200 pb-1">{personal.location}</span>}
//             {personal.linkedin && <span className="break-all border-b border-red-200 pb-1 text-red-800">{personal.linkedin}</span>}
//         </div>
//       </header>

//       <div className="space-y-20 flex-1">
//         {personal.summary && (
//             <section className="max-w-5xl mx-auto">
//                 <SectionTitle title="Executive Summary" />
//                 <p className="text-[15px] leading-loose text-slate-700 text-justify whitespace-pre-wrap break-words italic font-medium px-12 border-l-8 border-red-50">"{personal.summary}"</p>
//             </section>
//         )}

//         <section>
//             <SectionTitle title="Professional Tenure" />
//             <div className="space-y-16">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item">
//                             <div className="flex justify-between font-bold text-xl mb-3 uppercase tracking-tight border-b border-slate-100 pb-2">
//                                 <h4 className="break-words leading-none">{exp.role} <span className="text-red-800 mx-3 opacity-20">|</span> <span className="text-slate-400 italic font-medium">{exp.company}</span></h4>
//                                 <span className="italic text-slate-300 text-sm font-black shrink-0 ml-10 tracking-widest">{exp.date}</span>
//                             </div>
//                             <p className="text-[15px] text-slate-700 leading-relaxed text-justify whitespace-pre-wrap break-words mt-6 px-4 italic">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         <div className="grid grid-cols-12 gap-16 border-t-4 border-red-50 pt-16">
//             <div className="col-span-7 space-y-16">
//                 {projects.length > 0 && (
//                     <section>
//                         <SectionTitle title="Selected Works" />
//                         <div className="space-y-12">
//                             {projects.map((p, i) => (
//                                 <React.Fragment key={i}>
//                                     {p.pageBreak && <div className="manual-page-break" />}
//                                     <div className="project-item group">
//                                         <h4 className="font-black text-base text-slate-900 break-words uppercase italic mb-4 tracking-tighter border-l-4 border-red-800 pl-4 group-hover:text-red-800 transition-colors">{p.name}</h4>
//                                         <p className="text-sm text-slate-600 whitespace-pre-wrap break-words leading-relaxed italic px-4">{p.desc}</p>
//                                     </div>
//                                 </React.Fragment>
//                             ))}
//                         </div>
//                     </section>
//                 )}

//                 {volunteering.length > 0 && (
//                     <section>
//                         <SectionTitle title="Social Impact" />
//                         {volunteering.map((v, i) => (
//                             <div key={i} className="mb-6 last:mb-0 border-b border-red-50 pb-6 italic">
//                                 <div className="font-bold text-slate-800 uppercase tracking-tighter">{v.role} @ {v.org}</div>
//                                 <p className="text-[12px] text-red-800 font-black mb-2">{v.date}</p>
//                                 <p className="text-sm text-slate-500 whitespace-pre-wrap">{v.desc}</p>
//                             </div>
//                         ))}
//                     </section>
//                 )}
//             </div>

//             <aside className="col-span-5 space-y-16">
//                 <section>
//                     <SectionTitle title="Education" />
//                     {education.map((edu, i) => (
//                         <div key={i} className="mb-10 text-base font-bold border-r-4 border-red-50 pr-6 text-right">
//                             <div className="text-slate-900 break-words uppercase tracking-tighter leading-tight mb-2 italic shadow-sm">{edu.degree}</div>
//                             <div className="text-slate-400 text-[13px] italic font-medium break-words leading-none mb-2">{edu.school}</div>
//                             <div className="text-[12px] font-black text-red-800 tracking-[0.2em]">{edu.date}</div>
//                         </div>
//                     ))}
//                 </section>

//                 <section>
//                     <SectionTitle title="Expertise" />
//                     <p className="text-[13px] font-bold text-slate-700 leading-loose uppercase tracking-[0.15em] break-words text-justify italic px-4 border-l border-red-100">
//                         {[...skills.core, ...skills.technical, ...skills.soft].join(' • ')}
//                     </p>
//                 </section>

//                 {certifications.length > 0 && (
//                     <section>
//                         <SectionTitle title="Badges" />
//                         <div className="space-y-4 px-4">
//                             {certifications.map((c, i) => <div key={i} className="text-[13px] font-bold text-slate-500 break-words uppercase tracking-tighter border-b border-slate-50 pb-2">• {c.name} <span className="block text-[11px] italic text-red-200 mt-1 font-black">{c.issuer}</span></div>)}
//                         </div>
//                     </section>
//                 )}

//                 {languages.length > 0 && (
//                     <section>
//                         <SectionTitle title="Languages" />
//                         <div className="px-4 text-sm font-bold uppercase tracking-widest text-slate-600">
//                             {languages.map((l, i) => <div key={i} className="mb-2">{l.name} — {l.level}</div>)}
//                         </div>
//                     </section>
//                 )}
//             </aside>
//         </div>

//         <footer className="mt-auto pt-16 border-t-8 border-red-50 grid grid-cols-2 gap-12 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 italic text-center">
//             {awards.length > 0 && <div className="col-span-2 space-y-2 border-b border-red-50 pb-8 flex flex-wrap justify-center gap-10">{awards.map((a, i) => <p key={i} className="break-words text-red-800 font-black">🏅 {a.name} — {a.issuer}</p>)}</div>}
//             <div className="col-span-2 pt-6 opacity-20">Career Record — Generated for {personal.name} — Confidential</div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default BrickFormal;


import React from 'react';

const BrickFormal = ({ data }) => {
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
    <div className="font-serif text-slate-900 bg-white min-h-[1100px]">
      
      {/* HEADER BLOCK */}
      <header className="bg-[#8b2e2e] text-white p-12 mb-10">
         <h1 className="text-5xl font-bold uppercase tracking-wide mb-2">{personal.name}</h1>
         <p className="text-xl opacity-90 font-sans tracking-widest">{personal.title}</p>
         
         <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap gap-6 text-sm font-sans opacity-80">
             {personal.email && <span>{personal.email}</span>}
             {personal.phone && <span>{personal.phone}</span>}
             {personal.location && <span>{personal.location}</span>}
         </div>
      </header>

      <div className="px-12 pb-12">
          
          {personal.summary && (
              <section className="mb-10 border-b border-slate-200 pb-8">
                  <h3 className="font-sans font-bold uppercase text-[#8b2e2e] text-sm tracking-widest mb-3">Professional Profile</h3>
                  <p className="text-slate-700 leading-relaxed">{personal.summary}</p>
              </section>
          )}

          {/* TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-12 gap-12">
              
              <div className="col-span-8">
                  {experience.length > 0 && (
                      <section className="mb-10">
                          <h3 className="font-sans font-bold uppercase text-[#8b2e2e] text-sm tracking-widest mb-6">Experience</h3>
                          <div className="space-y-8">
                              {experience.map(exp => (
                                  <div key={exp.id}>
                                      <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                                      <div className="font-sans text-sm font-bold text-slate-500 mb-2 flex justify-between">
                                          <span>{exp.company}</span>
                                          <span>{exp.date}</span>
                                      </div>
                                      <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                                  </div>
                              ))}
                          </div>
                      </section>
                  )}

                  {projects.length > 0 && (
                      <section>
                          <h3 className="font-sans font-bold uppercase text-[#8b2e2e] text-sm tracking-widest mb-6">Key Projects</h3>
                          <ul className="space-y-4">
                              {projects.map(p => (
                                  <li key={p.id}>
                                      <strong className="block text-slate-900">{p.name}</strong>
                                      <span className="text-sm text-slate-600">{p.desc}</span>
                                  </li>
                              ))}
                          </ul>
                      </section>
                  )}
              </div>

              <div className="col-span-4 space-y-10">
                  <section>
                      <h3 className="font-sans font-bold uppercase text-[#8b2e2e] text-sm tracking-widest mb-4">Core Skills</h3>
                      <div className="flex flex-wrap gap-2 font-sans text-sm">
                          {[...technical, ...soft].map((s, i) => (
                              <span key={i} className="bg-slate-100 text-slate-700 px-2 py-1 rounded">{s}</span>
                          ))}
                      </div>
                  </section>

                  {education.length > 0 && (
                      <section>
                          <h3 className="font-sans font-bold uppercase text-[#8b2e2e] text-sm tracking-widest mb-4">Education</h3>
                          {education.map(edu => (
                              <div key={edu.id} className="mb-4">
                                  <div className="font-bold">{edu.school}</div>
                                  <div className="text-sm italic text-slate-600">{edu.degree}</div>
                                  <div className="text-xs text-slate-400 font-sans mt-1">{edu.date}</div>
                              </div>
                          ))}
                      </section>
                  )}

                  {certifications.length > 0 && (
                      <section>
                          <h3 className="font-sans font-bold uppercase text-[#8b2e2e] text-sm tracking-widest mb-4">Certifications</h3>
                          <ul className="text-sm space-y-2">
                              {certifications.map(c => <li key={c.id}>• {c.name}</li>)}
                          </ul>
                      </section>
                  )}
              </div>

          </div>
      </div>
    </div>
  );
};

export default BrickFormal;