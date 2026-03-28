// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const OceanATS = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const BlockHeading = ({ title }) => (
//     <h3 className="text-sm font-black uppercase tracking-[0.5em] mb-6 bg-[#004B8D] text-white pl-6 py-2 rounded-[0.5rem] shadow-sm italic">
//         {title}
//     </h3>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans p-16 text-[#004B8D] resume-preview-wrapper flex flex-col">
//       <header className="border-b-[12px] border-[#004B8D] pb-10 mb-12 shrink-0 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-40 h-40 bg-[#004B8D]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
//         <h1 className="text-7xl font-black uppercase tracking-[0.1em] mb-4 break-words leading-none italic">{personal.name || "Your Name"}</h1>
//         <p className="text-3xl font-bold text-slate-400 uppercase tracking-[0.4em] break-words italic underline decoration-[#004B8D]/10 decoration-8 underline-offset-[20px]">{personal.title}</p>
//         <div className="flex flex-wrap gap-8 text-[12px] font-black mt-12 text-slate-600 uppercase tracking-[0.2em] italic">
//           {personal.email && <span className="break-all border-b border-slate-100 pb-1 flex items-center gap-2"><Mail size={14}/> {personal.email}</span>}
//           {personal.phone && <span className="border-b border-slate-100 pb-1 flex items-center gap-2"><Phone size={14}/> {personal.phone}</span>}
//           {personal.location && <span className="break-words border-b border-slate-100 pb-1 flex items-center gap-2"><MapPin size={14}/> {personal.location}</span>}
//           {personal.linkedin && <span className="break-all text-[#004B8D] border-b-2 border-[#004B8D]/20 pb-1 tracking-tighter flex items-center gap-2"><Linkedin size={14}/> Profile</span>}
//         </div>
//       </header>

//       <div className="space-y-16 flex-1">
//         {personal.summary && (
//           <section className="border-l-[24px] border-[#004B8D]/5 pl-10 py-4 italic rounded-r-[3rem] shadow-sm bg-slate-50/30">
//             <h2 className="text-[11px] font-black uppercase tracking-[0.6em] mb-6 text-slate-300 italic">Core Objective</h2>
//             <p className="text-[16px] leading-[1.8] text-slate-700 text-justify whitespace-pre-wrap break-words">"{personal.summary}"</p>
//           </section>
//         )}

//         <section>
//           <BlockHeading title="Experience Record" />
//           <div className="space-y-16">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div className="experience-item group">
//                   <div className="flex justify-between font-black text-3xl mb-3 tracking-tighter leading-none border-b-4 border-slate-50 pb-4 group-hover:border-[#004B8D]/10 transition-colors">
//                     <h4 className="break-words uppercase">{exp.role}</h4>
//                     <span className="shrink-0 ml-12 text-[12px] font-black tracking-[0.6em] italic text-slate-300 uppercase">{exp.date}</span>
//                   </div>
//                   <div className="text-[15px] font-black text-[#004B8D] uppercase mb-8 tracking-[0.4em] break-words leading-none italic flex items-center gap-6"><div className="w-12 h-px bg-[#004B8D] opacity-30"></div> {exp.company}</div>
//                   <p className="text-[16px] text-slate-600 leading-[1.8] whitespace-pre-wrap break-words text-justify italic font-medium px-12 border-l-4 border-slate-100 group-hover:border-[#004B8D] transition-colors">{exp.desc}</p>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </section>

//         <section>
//           <BlockHeading title="Key Projects" />
//           <div className="grid grid-cols-2 gap-16">
//             {projects.map((p, i) => (
//                 <React.Fragment key={i}>
//                     {p.pageBreak && <div className="manual-page-break" />}
//                     <div className="project-item border-l-8 border-[#004B8D]/5 pl-10 py-2 group hover:border-[#004B8D] transition-all">
//                         <h4 className="font-black text-xl text-slate-800 break-words uppercase mb-4 tracking-tighter italic border-b border-slate-50 pb-2 group-hover:text-[#004B8D] leading-none">{p.name}</h4>
//                         <p className="text-[14px] text-slate-400 leading-relaxed whitespace-pre-wrap break-words italic pr-4">{p.desc}</p>
//                     </div>
//                 </React.Fragment>
//             ))}
//           </div>
//         </section>

//         <div className="grid grid-cols-12 gap-16 border-t-8 border-slate-50 pt-16">
//           <div className="col-span-8 space-y-16">
//               <section>
//                 <h2 className="text-[11px] font-black uppercase tracking-[0.6em] mb-10 text-slate-300 italic flex items-center gap-6 leading-none"><div className="w-12 h-px bg-slate-100"></div> Academics</h2>
//                 <div className="space-y-10">
//                     {education.map((edu, i) => (
//                         <React.Fragment key={i}>
//                             {edu.pageBreak && <div className="manual-page-break" />}
//                             <div className="flex justify-between items-baseline border-b border-slate-50 pb-4 italic">
//                                 <div>
//                                     <div className="font-black text-xl text-slate-900 break-words tracking-tighter uppercase mb-1">{edu.degree}</div>
//                                     <div className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">{edu.school}</div>
//                                 </div>
//                                 <div className="text-[12px] font-black text-[#004B8D] uppercase tracking-[0.4em] ml-10 shrink-0">{edu.date}</div>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//               </section>

//               {volunteering.length > 0 && (
//                 <section>
//                     <h2 className="text-[11px] font-black uppercase tracking-[0.6em] mb-10 text-slate-300 italic flex items-center gap-6"><div className="w-12 h-px bg-slate-100"></div> Impact</h2>
//                     <div className="grid grid-cols-2 gap-10">
//                         {volunteering.map((v, i) => (
//                             <React.Fragment key={i}>
//                                 {v.pageBreak && <div className="manual-page-break" />}
//                                 <div className="mb-6 last:mb-0 border-b border-slate-50 pb-6 group">
//                                     <div className="font-black text-sm text-slate-700 break-words leading-tight uppercase mb-2 group-hover:text-[#004B8D] transition-colors tracking-widest">{v.role}</div>
//                                     <div className="text-[11px] font-black text-[#004B8D] uppercase mb-4 tracking-[0.3em]">{v.org} // {v.date}</div>
//                                     <p className="text-[12px] text-slate-400 italic whitespace-pre-wrap pr-4">{v.desc}</p>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </section>
//               )}
//           </div>

//           <aside className="col-span-4 space-y-16">
//                 <section>
//                     <h2 className="text-[11px] font-black uppercase tracking-[0.6em] mb-10 text-[#004B8D] border-b-2 border-[#004B8D]/10 pb-4 italic">Expertise</h2>
//                     <div className="flex flex-wrap gap-x-6 gap-y-4 text-[12px] font-black uppercase tracking-widest leading-none text-slate-800">
//                         {[...skills.core, ...skills.technical, ...skills.soft].map((s, i) => (
//                             <span key={i} className="border-b border-[#004B8D]/20 px-1 hover:border-[#004B8D] transition-all cursor-default">• {s}</span>
//                         ))}
//                     </div>
//                 </section>

//                 {certifications.length > 0 && (
//                     <section>
//                         <h2 className="text-[11px] font-black uppercase tracking-[0.6em] mb-8 text-[#004B8D] italic">Credentials</h2>
//                         <div className="space-y-4">
//                             {certifications.map((c, i) => <div key={i} className="text-[12px] font-bold text-slate-500 break-words uppercase tracking-tighter italic flex items-center gap-3 border-l border-slate-100 pl-4 py-2 hover:border-[#004B8D] transition-all group cursor-default"><CheckCircle size={14} className="text-slate-200 group-hover:text-[#004B8D] transition-colors"/> {c.name}</div>)}
//                         </div>
//                     </section>
//                 )}

//                 {languages.length > 0 && (
//                     <section>
//                         <h2 className="text-[11px] font-black uppercase tracking-[0.6em] mb-6 text-[#004B8D] italic">Tongues</h2>
//                         {languages.map((l, i) => <div key={i} className="text-[11px] font-black break-words uppercase mb-3 italic tracking-widest text-slate-400 border-b border-slate-50 pb-2">{l.name} — <span className="text-[#004B8D] opacity-40">{l.level}</span></div>)}
//                     </section>
//                 )}
//           </aside>
//         </div>

//         <footer className="mt-auto pt-20 border-t-[16px] border-slate-50 grid grid-cols-2 gap-20 pb-16 uppercase text-[10px] font-black tracking-[0.8em] text-slate-300 text-center italic leading-none">
//             {awards.length > 0 && <div className="col-span-2 border-b border-slate-50 pb-12 flex flex-wrap justify-center gap-16">{awards.map((a, i) => <span key={i}>🏅 {a.name} — <span className="text-[#004B8D] font-black opacity-30 tracking-[0.1em]">{a.issuer}</span></span>)}</div>}
//             <div className="col-span-2 pt-8 opacity-20 tracking-[1.5em] text-[9px]">Professional Record — Generated for {personal.name}</div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default OceanATS;

import React from 'react';

const OceanATS = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    certifications = [],
    awards = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="p-12 font-sans text-slate-900 bg-white min-h-[1100px]">
      
      {/* HEADER */}
      <header className="text-center mb-10">
          <h1 className="text-3xl font-bold uppercase tracking-wide text-blue-900 mb-2">{personal.name}</h1>
          <p className="text-lg text-slate-600 mb-4 font-medium">{personal.title}</p>
          
          <div className="flex justify-center gap-4 text-sm text-slate-600 flex-wrap">
              {personal.email && <span>{personal.email}</span>}
              {personal.phone && <span>| {personal.phone}</span>}
              {personal.location && <span>| {personal.location}</span>}
              {personal.linkedin && <span>| {personal.linkedin}</span>}
          </div>
      </header>

      {/* SUMMARY */}
      {personal.summary && (
          <section className="mb-8">
              <h3 className="text-md font-bold text-blue-900 uppercase border-b-2 border-blue-900 mb-3 pb-1">Professional Summary</h3>
              <p className="text-sm leading-relaxed text-slate-700">{personal.summary}</p>
          </section>
      )}

      {/* SKILLS */}
      <section className="mb-8">
          <h3 className="text-md font-bold text-blue-900 uppercase border-b-2 border-blue-900 mb-3 pb-1">Core Competencies</h3>
          <div className="text-sm text-slate-700">
              <div className="mb-1"><strong className="mr-2">Technical:</strong> {technical.join(', ')}</div>
              <div><strong className="mr-2">Professional:</strong> {soft.join(', ')}</div>
          </div>
      </section>

      {/* EXPERIENCE */}
      {experience.length > 0 && (
          <section className="mb-8">
              <h3 className="text-md font-bold text-blue-900 uppercase border-b-2 border-blue-900 mb-4 pb-1">Experience</h3>
              <div className="space-y-6">
                  {experience.map(exp => (
                      <div key={exp.id}>
                          <div className="flex justify-between items-baseline mb-1">
                              <h4 className="font-bold text-lg text-slate-900">{exp.role}</h4>
                              <span className="text-sm font-bold text-slate-500">{exp.date}</span>
                          </div>
                          <div className="text-sm font-bold text-blue-700 mb-2">{exp.company}</div>
                          <ul className="list-disc list-outside ml-4 text-sm text-slate-700 space-y-1">
                              {/* Attempt to split by newline if user typed paragraphs, otherwise just show text */}
                              {exp.desc.split('\n').map((line, i) => (
                                  line.trim() && <li key={i}>{line}</li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </section>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
          <section className="mb-8">
              <h3 className="text-md font-bold text-blue-900 uppercase border-b-2 border-blue-900 mb-4 pb-1">Education</h3>
              <div className="space-y-2">
                  {education.map(edu => (
                      <div key={edu.id} className="flex justify-between">
                          <div>
                              <div className="font-bold text-slate-900 text-sm">{edu.school}</div>
                              <div className="text-sm italic text-slate-600">{edu.degree}</div>
                          </div>
                          <div className="text-sm text-slate-500">{edu.date}</div>
                      </div>
                  ))}
              </div>
          </section>
      )}

      {/* AWARDS / CERTS */}
      {(awards.length > 0 || certifications.length > 0) && (
          <section>
              <h3 className="text-md font-bold text-blue-900 uppercase border-b-2 border-blue-900 mb-4 pb-1">Additional Information</h3>
              <ul className="text-sm text-slate-700 list-disc ml-4">
                  {certifications.map(c => <li key={c.id}><strong>Certification:</strong> {c.name} - {c.issuer}</li>)}
                  {awards.map(a => <li key={a.id}><strong>Award:</strong> {a.name}</li>)}
              </ul>
          </section>
      )}

    </div>
  );
};

export default OceanATS;