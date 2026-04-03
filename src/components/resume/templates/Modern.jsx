// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const Modern = ({ data }: any) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionHeader = ({ icon, title }: { icon: any, title: string }) => (
//     <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-2 mb-6 text-[#2D5A43]">
//       {icon}
//       <h3 className="font-black text-xs uppercase tracking-[0.2em]">{title}</h3>
//     </div>
//   );

//   return (
//     <div className="w-full h-full bg-white text-slate-800 min-h-[1100px] font-sans flex flex-col resume-preview-wrapper">
//       <header className="bg-[#2D5A43] text-white p-12 flex justify-between items-center shadow-lg">
//         <div className="flex items-center gap-8">
//             {personal.photo && <img src={personal.photo} alt="Profile" className="w-32 h-32 rounded-[2rem] border-4 border-[#3D7056] object-cover shadow-2xl"/>}
//             <div>
//                 <h1 className="text-5xl font-black uppercase tracking-tighter mb-2 break-words leading-none">{personal.name || "Your Name"}</h1>
//                 <p className="text-xl font-medium text-[#A5D6A7] uppercase tracking-[0.2em] break-words">{personal.title}</p>
//             </div>
//         </div>
//         <div className="text-right text-[10px] space-y-2 font-black uppercase tracking-[0.2em] opacity-80 shrink-0 ml-10">
//           {personal.email && <div className="flex items-center justify-end gap-2 break-all">{personal.email} <Mail size={14}/></div>}
//           {personal.phone && <div className="flex items-center justify-end gap-2">{personal.phone} <Phone size={14}/></div>}
//           {personal.location && <div className="flex items-center justify-end gap-2 break-words">{personal.location} <MapPin size={14}/></div>}
//           {personal.linkedin && <div className="flex items-center justify-end gap-2 text-[#A5D6A7] break-all">{personal.linkedin} <Linkedin size={14}/></div>}
//         </div>
//       </header>

//       <div className="p-12 space-y-12 flex-1">
//         {personal.summary && (
//           <section>
//             <SectionHeader icon={<User size={16}/>} title="Professional Summary" />
//             <p className="text-xs leading-relaxed text-slate-500 text-justify whitespace-pre-wrap break-words italic">{personal.summary}</p>
//           </section>
//         )}

//         <div className="grid grid-cols-12 gap-12">
//             <div className="col-span-8 space-y-12">
//                 <section>
//                     <SectionHeader icon={<Briefcase size={16}/>} title="Experience" />
//                     <div className="space-y-10">
//                         {experience.map((exp: any, i: number) => (
//                             <React.Fragment key={i}>
//                                 {exp.pageBreak && <div className="manual-page-break" />}
//                                 <div className="experience-item">
//                                     <div className="flex justify-between items-baseline mb-2">
//                                         <h4 className="font-bold text-sm text-slate-900 break-words uppercase tracking-tight">{exp.role}</h4>
//                                         <span className="text-[10px] font-black text-slate-400 uppercase shrink-0 ml-4">{exp.date}</span>
//                                     </div>
//                                     <div className="text-[10px] font-black text-[#2D5A43] mb-4 uppercase tracking-widest break-words flex items-center gap-2">
//                                         <div className="w-4 h-px bg-[#2D5A43]"></div> {exp.company}
//                                     </div>
//                                     <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap break-words">{exp.desc}</p>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </section>

//                 {projects.length > 0 && (
//                     <section>
//                         <SectionHeader icon={<Layers size={16}/>} title="Strategic Projects" />
//                         <div className="grid grid-cols-1 gap-8">
//                             {projects.map((proj: any, i: number) => (
//                                 <React.Fragment key={i}>
//                                     {proj.pageBreak && <div className="manual-page-break" />}
//                                     <div className="project-item bg-slate-50 p-6 rounded-3xl border border-slate-100 group hover:border-[#2D5A43]/20 transition-colors">
//                                         <h4 className="font-bold text-xs text-slate-800 mb-3 uppercase break-words tracking-tighter italic">{proj.name}</h4>
//                                         <p className="text-[11px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words">{proj.desc}</p>
//                                     </div>
//                                 </React.Fragment>
//                             ))}
//                         </div>
//                     </section>
//                 )}
//             </div>

//             <div className="col-span-4 space-y-12">
//                 <section>
//                     <SectionHeader icon={<Cpu size={16}/>} title="Expertise" />
//                     <div className="flex flex-wrap gap-2">
//                         {[...skills.technical, ...skills.core, ...skills.soft].map((s: string, i: number) => (
//                             <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase rounded-lg border border-slate-200 break-words shadow-sm">{s}</span>
//                         ))}
//                     </div>
//                 </section>

//                 {education.length > 0 && (
//                     <section>
//                         <SectionHeader icon={<GraduationCap size={16}/>} title="Education" />
//                         {education.map((edu: any, i: number) => (
//                             <React.Fragment key={i}>
//                                 {edu.pageBreak && <div className="manual-page-break" />}
//                                 <div className="mb-6 last:mb-0 border-l-4 border-slate-50 pl-4 group">
//                                     <div className="font-black text-[12px] text-slate-800 break-words uppercase leading-tight group-hover:text-[#2D5A43] transition-colors">{edu.degree}</div>
//                                     <div className="text-[10px] text-slate-400 mt-1 break-words font-bold uppercase">{edu.school}</div>
//                                     <div className="text-[9px] text-[#2D5A43] font-black mt-2 uppercase">{edu.date}</div>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </section>
//                 )}

//                 {certifications.length > 0 && (
//                     <section>
//                         <SectionHeader icon={<CheckCircle size={16}/>} title="Certifications" />
//                         {certifications.map((c: any, i: number) => (
//                             <div key={i} className="mb-4 text-[10px] font-bold italic text-slate-500">• {c.name}</div>
//                         ))}
//                     </section>
//                 )}
//             </div>
//         </div>

//         <footer className="grid grid-cols-2 gap-12 pt-10 border-t-4 border-slate-50">
//              {awards.length > 0 && (
//                  <section>
//                     <SectionHeader icon={<Award size={16}/>} title="Honors" />
//                     {awards.map((aw: any, i: number) => <div key={i} className="mb-3 break-words text-[11px] font-bold uppercase text-slate-600 tracking-tight">🏆 {aw.name} — <span className="text-slate-300">{aw.issuer}</span></div>)}
//                  </section>
//              )}
//              {volunteering.length > 0 && (
//                  <section>
//                     <SectionHeader icon={<Heart size={16}/>} title="Volunteering" />
//                     {volunteering.map((v: any, i: number) => (
//                         <div key={i} className="mb-4 last:mb-0">
//                             <div className="font-bold text-[11px] text-slate-800 uppercase italic tracking-tighter">{v.role} @ {v.org}</div>
//                             <p className="text-[10px] text-slate-400 mt-1 whitespace-pre-wrap break-words">{v.desc}</p>
//                         </div>
//                     ))}
//                  </section>
//              )}
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Modern;

import React from 'react';

import FormattedTextBlock from '../FormattedTextBlock';
import PreviewEditableField from '../PreviewEditableField';

const Modern = ({ data }) => {
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
    <div className="font-sans text-slate-800 bg-white min-h-[1100px] flex flex-col">
      
      {/* HEADER BLOCK - Solid Dark Blue/Slate */}
      <header className="bg-[#0f172a] text-white p-12 pt-16 pb-16">
          <PreviewEditableField path="personal.name" label="Full Name" as="h1" className="text-5xl font-black uppercase tracking-tight mb-2">
            {personal.name}
          </PreviewEditableField>
          <PreviewEditableField path="personal.title" label="Job Title" as="p" className="text-xl font-bold text-teal-400 tracking-wide uppercase mb-6">
            {personal.title}
          </PreviewEditableField>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
              {personal.phone && <span>{personal.phone}</span>}
              <span className="text-slate-600">|</span>
              {personal.email && <span>{personal.email}</span>}
              <span className="text-slate-600">|</span>
              {personal.location && <span>{personal.location}</span>}
          </div>
      </header>

      <div className="p-12 grid grid-cols-12 gap-12 flex-1">
          
          {/* LEFT COLUMN (Main Info) */}
          <div className="col-span-7 space-y-12">
              
              {/* PROFILE */}
              {personal.summary && (
                  <section>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Profile</h3>
                      <FormattedTextBlock
                        text={personal.summary}
                        editablePath="personal.summary"
                        editableLabel="Professional Summary"
                        plainClassName="text-sm leading-7 text-slate-700 font-medium text-justify whitespace-pre-wrap"
                        unorderedListClassName="ml-4 list-disc space-y-2 text-sm leading-7 text-slate-700 font-medium marker:text-slate-400"
                        orderedListClassName="ml-4 list-decimal space-y-2 text-sm leading-7 text-slate-700 font-medium marker:text-slate-400"
                      />
                  </section>
              )}

              {/* EXPERIENCE - With Timeline */}
              {experience.length > 0 && (
                  <section>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Experience</h3>
                      <div className="space-y-10 border-l-2 border-teal-500/20 pl-8 ml-2">
                          {experience.map((exp, index) => (
                              <div key={exp.id} className="relative">
                                  {/* Timeline Dot */}
                                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow-sm"></div>
                                  
                                  <div className="flex justify-between items-baseline mb-1">
                                      <PreviewEditableField path={`experience[${index}].role`} label="Experience Role" as="h4" className="font-bold text-lg text-slate-900">
                                        {exp.role}
                                      </PreviewEditableField>
                                      <PreviewEditableField path={`experience[${index}].date`} label="Experience Date" className="text-xs font-bold text-slate-400">
                                        {exp.date}
                                      </PreviewEditableField>
                                  </div>
                                  <PreviewEditableField path={`experience[${index}].company`} label="Experience Company" as="div" className="text-sm font-bold text-teal-600 mb-3">
                                    {exp.company}
                                  </PreviewEditableField>
                                  
                                  {/* Description List */}
                                  <FormattedTextBlock
                                    text={exp.desc}
                                    editablePath={`experience[${index}].desc`}
                                    editableLabel="Experience Description"
                                    plainClassName="text-sm text-slate-600 space-y-2 leading-relaxed whitespace-pre-wrap"
                                    unorderedListClassName="ml-4 list-disc space-y-2 text-sm text-slate-600 leading-relaxed marker:text-slate-400"
                                    orderedListClassName="ml-4 list-decimal space-y-2 text-sm text-slate-600 leading-relaxed marker:text-slate-400"
                                  />
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {/* PROJECTS (If needed) */}
              {projects.length > 0 && (
                  <section>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Projects</h3>
                      <div className="grid grid-cols-1 gap-6">
                          {projects.map((p, index) => (
                              <div key={p.id} className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                                  <PreviewEditableField path={`projects[${index}].name`} label="Project Name" as="h4" className="font-bold text-slate-900 text-sm mb-2">
                                    {p.name}
                                  </PreviewEditableField>
                                  <FormattedTextBlock
                                    text={p.desc}
                                    editablePath={`projects[${index}].desc`}
                                    editableLabel="Project Description"
                                    plainClassName="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap"
                                    unorderedListClassName="ml-4 list-disc space-y-1.5 text-sm text-slate-600 leading-relaxed"
                                    orderedListClassName="ml-4 list-decimal space-y-1.5 text-sm text-slate-600 leading-relaxed"
                                  />
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* RIGHT COLUMN (Sidebar) */}
          <div className="col-span-5 space-y-12">
              
              {/* SKILLS - Dark Chips */}
              <section>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="px-3 py-1.5 bg-[#0f172a] text-white text-[11px] font-bold rounded shadow-sm">
                              {s}
                          </span>
                      ))}
                  </div>
              </section>

              {/* EDUCATION */}
              {education.length > 0 && (
                  <section>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Education</h3>
                      <div className="space-y-6">
                          {education.map(edu => (
                              <div key={edu.id} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                                  <div className="font-bold text-slate-900 text-base">{edu.school}</div>
                                  <div className="text-sm text-teal-600 font-bold mt-1">{edu.degree}</div>
                                  <div className="text-xs text-slate-400 mt-1 font-medium">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {/* CERTIFICATIONS */}
              {certifications.length > 0 && (
                  <section>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Certified</h3>
                      <div className="space-y-4">
                          {certifications.map(c => (
                              <div key={c.id} className="flex items-start gap-3">
                                  <span className="text-teal-500 mt-0.5 text-lg">✓</span>
                                  <div>
                                      <div className="font-bold text-slate-800 text-sm leading-tight">{c.name}</div>
                                      <div className="text-xs text-slate-500 mt-1">{c.issuer}</div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

          </div>

      </div>
    </div>
  );
};

export default Modern;
