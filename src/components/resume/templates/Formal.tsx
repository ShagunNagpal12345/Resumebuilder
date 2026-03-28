// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const Formal = ({ data }: any) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionTitle = ({ icon, title }: { icon: any, title: string }) => (
//     <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-300 mb-6 flex items-center gap-3 border-b border-slate-100 pb-2">
//         {icon} {title}
//     </h3>
//   );

//   return (
//     <div className="w-full flex bg-white min-h-[1100px] shadow-2xl font-sans border-[16px] border-slate-50 resume-preview-wrapper">
//       <div className="flex-1 bg-white p-12 flex flex-col">
//         <header className="mb-12 border-l-[12px] border-slate-800 pl-10 shrink-0">
//             <h1 className="text-6xl font-black text-slate-800 tracking-tighter mb-2 uppercase break-words leading-none">{personal.name || "Your Name"}</h1>
//             <p className="text-xl font-bold text-slate-400 uppercase tracking-[0.3em] break-words italic">{personal.title}</p>
//             <div className="flex flex-wrap gap-8 text-[11px] font-black uppercase text-slate-500 mt-6 border-t border-slate-100 pt-6 tracking-widest">
//                 {personal.email && <span className="break-all flex items-center gap-2 leading-none"><Mail size={12}/> {personal.email}</span>}
//                 {personal.phone && <span className="flex items-center gap-2 leading-none"><Phone size={12}/> {personal.phone}</span>}
//                 {personal.location && <span className="break-words flex items-center gap-2 leading-none"><MapPin size={12}/> {personal.location}</span>}
//                 {personal.linkedin && <span className="break-all flex items-center gap-2 leading-none text-slate-800"><Linkedin size={12}/> LinkedIn</span>}
//             </div>
//         </header>

//         {personal.summary && (
//             <section className="mb-12 border-b border-slate-50 pb-10">
//                 <SectionTitle icon={<User size={16}/>} title="Executive Summary" />
//                 <p className="text-xs leading-loose text-slate-600 text-justify whitespace-pre-wrap break-words italic px-10">"{personal.summary}"</p>
//             </section>
//         )}

//         <section className="mb-12">
//             <SectionTitle icon={<Briefcase size={16}/>} title="Professional Record" />
//             <div className="space-y-10">
//                 {experience.map((exp: any, i: number) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item">
//                             <div className="flex justify-between items-baseline mb-2">
//                                 <h4 className="font-bold text-slate-900 text-sm break-words uppercase tracking-tighter">{exp.role}</h4>
//                                 <span className="text-[10px] font-black text-slate-400 uppercase shrink-0 ml-10 italic tracking-widest">{exp.date}</span>
//                             </div>
//                             <div className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-[0.2em] break-words flex items-center gap-2 italic leading-none border-b border-slate-50 pb-2"><div className="w-6 h-0.5 bg-slate-200 shrink-0"></div> {exp.company}</div>
//                             <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap break-words text-justify italic font-medium px-4">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         <div className="grid grid-cols-2 gap-12 mb-12 border-t border-slate-50 pt-10">
//             {education && education.length > 0 && (
//                 <section>
//                     <SectionTitle icon={<GraduationCap size={16}/>} title="Academic Path" />
//                     {education.map((edu: any, i: number) => (
//                         <React.Fragment key={i}>
//                             {edu.pageBreak && <div className="manual-page-break" />}
//                             <div className="education-item mb-6 group">
//                                 <div className="font-black text-xs text-slate-800 break-words leading-tight uppercase italic tracking-tighter mb-1">{edu.degree}</div>
//                                 <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest break-words leading-tight border-l-2 border-slate-50 pl-4 py-1">{edu.school} | {edu.date}</div>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </section>
//             )}
//             <section>
//                 <SectionTitle icon={<Cpu size={16}/>} title="Competencies" />
//                 <div className="flex flex-wrap gap-2 px-2">
//                     {[...skills.core, ...skills.technical, ...skills.soft].map((s: string, i: number) => (
//                         <span key={i} className="px-3 py-1.5 bg-slate-50 text-[9px] font-black text-slate-500 uppercase rounded border border-slate-100 break-words shadow-sm tracking-tighter">{s}</span>
//                     ))}
//                 </div>
//             </section>
//         </div>

//         {projects && projects.length > 0 && (
//             <section className="mb-12 pt-6 border-t border-slate-50">
//                 <SectionTitle icon={<Layers size={16}/>} title="Strategic Initiatives" />
//                 <div className="grid grid-cols-2 gap-8">
//                     {projects.map((p: any, i: number) => (
//                         <React.Fragment key={i}>
//                             {p.pageBreak && <div className="manual-page-break" />}
//                             <div className="project-item border-l-4 border-slate-50 pl-6 group hover:border-slate-800 transition-colors">
//                                 <h4 className="font-bold text-xs text-slate-800 break-words uppercase mb-2 tracking-tighter italic shadow-sm leading-none">{p.name}</h4>
//                                 <p className="text-[10px] text-slate-500 leading-relaxed whitespace-pre-wrap break-words italic opacity-70">{p.desc}</p>
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </section>
//         )}

//         <footer className="mt-auto grid grid-cols-3 gap-10 pt-10 border-t border-slate-800 uppercase text-[9px] font-black tracking-[0.4em] text-slate-300">
//             {certifications && certifications.length > 0 && (
//                 <div>
//                     <h4 className="mb-6 border-b border-slate-50 pb-2">Badges</h4>
//                     {certifications.map((c: any, i: number) => <div key={i} className="mb-2 font-bold break-words italic">• {c.name}</div>)}
//                 </div>
//             )}
//             {languages && languages.length > 0 && (
//                 <div className="text-center">
//                     <h4 className="mb-6 border-b border-slate-50 pb-2">Tongues</h4>
//                     {languages.map((l: any, i: number) => <div key={i} className="mb-2 font-bold break-words tracking-tighter">{l.name} [{l.level}]</div>)}
//                 </div>
//             )}
//             {awards && awards.length > 0 && (
//                 <div className="text-right">
//                     <h4 className="mb-6 border-b border-slate-50 pb-2">Honors</h4>
//                     {awards.map((a: any, i: number) => <div key={i} className="mb-2 font-bold break-words italic">🏆 {a.name}</div>)}
//                 </div>
//             )}
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Formal;

import React from 'react';

const Formal = ({ data }) => {
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
    <div className="p-16 font-serif text-slate-900 bg-white min-h-[1100px] leading-relaxed">
      
      {/* HEADER */}
      <header className="border-b border-slate-300 pb-6 mb-8 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-2">{personal.name}</h1>
          <p className="text-md italic text-slate-600 mb-4 font-sans">{personal.title}</p>
          <div className="flex justify-center gap-6 text-sm text-slate-500 font-sans">
              {personal.email && <span>{personal.email}</span>}
              {personal.phone && <span>{personal.phone}</span>}
              {personal.location && <span>{personal.location}</span>}
          </div>
      </header>

      {/* SUMMARY */}
      {personal.summary && (
          <section className="mb-8">
              <h3 className="font-sans font-bold uppercase text-xs text-slate-400 border-b border-slate-200 mb-3 pb-1 tracking-widest">Profile</h3>
              <p className="text-sm text-justify leading-6">{personal.summary}</p>
          </section>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
          <section className="mb-8">
              <h3 className="font-sans font-bold uppercase text-xs text-slate-400 border-b border-slate-200 mb-4 pb-1 tracking-widest">Professional Experience</h3>
              <div className="space-y-6">
                  {experience.map(exp => (
                      <div key={exp.id}>
                          <div className="flex justify-between font-sans mb-1">
                              <h4 className="font-bold text-md text-slate-900">{exp.role}</h4>
                              <span className="text-sm font-bold text-slate-500">{exp.date}</span>
                          </div>
                          <div className="text-sm italic font-bold text-slate-700 mb-2">{exp.company}</div>
                          <p className="text-sm whitespace-pre-line text-slate-800">{exp.desc}</p>
                      </div>
                  ))}
              </div>
          </section>
      )}

      <div className="grid grid-cols-2 gap-12">
          
          {/* EDUCATION */}
          {education.length > 0 && (
              <section>
                  <h3 className="font-sans font-bold uppercase text-xs text-slate-400 border-b border-slate-200 mb-4 pb-1 tracking-widest">Education</h3>
                  {education.map(edu => (
                      <div key={edu.id} className="mb-3">
                          <div className="font-bold">{edu.school}</div>
                          <div className="text-sm italic text-slate-600">{edu.degree}</div>
                          <div className="text-xs text-slate-400 font-sans mt-1">{edu.date}</div>
                      </div>
                  ))}
              </section>
          )}

          {/* SKILLS */}
          <section>
              <h3 className="font-sans font-bold uppercase text-xs text-slate-400 border-b border-slate-200 mb-4 pb-1 tracking-widest">Competencies</h3>
              <div className="text-sm">
                  <p className="mb-2"><strong className="font-sans text-xs uppercase mr-2">Tech:</strong> {technical.join(', ')}</p>
                  <p><strong className="font-sans text-xs uppercase mr-2">Soft:</strong> {soft.join(', ')}</p>
              </div>
          </section>

      </div>

      {/* EXTRAS */}
      {(projects.length > 0 || awards.length > 0) && (
          <section className="mt-8 border-t border-slate-200 pt-6">
              <h3 className="font-sans font-bold uppercase text-xs text-slate-400 mb-3 tracking-widest">Additional</h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm list-disc list-inside">
                  {projects.map(p => <li key={p.id}>Project: {p.name}</li>)}
                  {awards.map(a => <li key={a.id}>Award: {a.name}</li>)}
              </ul>
          </section>
      )}

    </div>
  );
};

export default Formal;