// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, User, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const AccentGrid = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   const SectionTitle = ({ title }) => (
//     <h3 className="text-xs font-black uppercase text-[#1e3a8a] tracking-[0.3em] mb-6 border-b border-slate-100 pb-2 italic">
//         {title}
//     </h3>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans p-16 text-slate-800 resume-preview-wrapper flex flex-col">
//       <header className="mb-12 shrink-0">
//         <h1 className="text-6xl font-black text-[#1e3a8a] tracking-tighter uppercase mb-4 break-words leading-none">{personal.name || "Your Name"}</h1>
//         <div className="flex flex-wrap gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-50 pt-4">
//             {personal.location && <span className="flex items-center gap-2"><MapPin size={12}/> {personal.location}</span>}
//             {personal.phone && <span className="flex items-center gap-2"><Phone size={12}/> {personal.phone}</span>}
//             {personal.email && <span className="flex items-center gap-2 break-all"><Mail size={12}/> {personal.email}</span>}
//         </div>
//       </header>

//       <div className="grid grid-cols-12 gap-16 flex-1">
//         <main className="col-span-8 space-y-12">
//           {personal.summary && (
//             <section>
//               <SectionTitle title="Summary" />
//               <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-wrap italic">"{personal.summary}"</p>
//             </section>
//           )}

//           <section>
//             <SectionTitle title="Experience" />
//             <div className="space-y-10">
//               {experience.map((exp, i) => (
//                 <React.Fragment key={i}>
//                   {exp.pageBreak && <div className="manual-page-break" />}
//                   <div className="experience-item">
//                     <div className="flex justify-between items-baseline mb-1">
//                       <h4 className="font-bold text-slate-900 text-sm uppercase">{exp.role}</h4>
//                       <span className="text-[10px] font-bold text-[#1e3a8a]">{exp.date}</span>
//                     </div>
//                     <p className="text-[11px] font-black text-slate-400 uppercase mb-3 tracking-tighter">{exp.company}</p>
//                     <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-wrap">{exp.desc}</p>
//                   </div>
//                 </React.Fragment>
//               ))}
//             </div>
//           </section>

//           {projects.length > 0 && (
//             <section>
//               <SectionTitle title="Selected Projects" />
//               <div className="grid grid-cols-2 gap-8">
//                 {projects.map((p, i) => (
//                   <div key={i} className="project-item border-l-2 border-slate-50 pl-4">
//                     <h4 className="font-bold text-[11px] text-slate-800 uppercase mb-1">{p.name}</h4>
//                     <p className="text-[10px] text-slate-500 leading-relaxed italic">{p.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}
//         </main>

//         <aside className="col-span-4 space-y-12">
//           <section>
//             <SectionTitle title="Skills" />
//             <div className="flex flex-wrap gap-2">
//               {[...skills.core, ...skills.technical, ...skills.soft].map((s, i) => (
//                 <span key={i} className="px-2 py-1 bg-slate-50 text-slate-600 text-[9px] font-bold uppercase rounded border border-slate-100">{s}</span>
//               ))}
//             </div>
//           </section>

//           {education.length > 0 && (
//             <section>
//               <SectionTitle title="Education" />
//               {education.map((edu, i) => (
//                 <div key={i} className="mb-6 last:mb-0">
//                   <p className="font-bold text-xs text-slate-700 uppercase">{edu.school}</p>
//                   <p className="text-[11px] text-slate-500 italic mt-1">{edu.degree}</p>
//                   <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">{edu.date}</p>
//                 </div>
//               ))}
//             </section>
//           )}

//           {languages.length > 0 && (
//             <section>
//               <SectionTitle title="Languages" />
//               {languages.map((l, i) => (
//                 <div key={i} className="mb-2 text-[11px] font-bold text-slate-600 uppercase italic">
//                   {l.name} — {l.level}
//                 </div>
//               ))}
//             </section>
//           )}
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default AccentGrid;

import React from 'react';

const AccentGrid = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="p-10 font-sans text-slate-800 bg-white min-h-[1100px] border-t-8 border-indigo-600">
      
      {/* HEADER */}
      <header className="flex justify-between items-start mb-12">
        <div>
            <h1 className="text-5xl font-bold text-slate-900 tracking-tighter uppercase mb-2">{personal.name}</h1>
            <p className="text-xl text-indigo-600 font-medium">{personal.title}</p>
        </div>
        <div className="text-right text-sm font-medium text-slate-500 space-y-1">
            {personal.email && <div>{personal.email}</div>}
            {personal.phone && <div>{personal.phone}</div>}
            {personal.location && <div>{personal.location}</div>}
            {personal.linkedin && <div className="text-indigo-500">{personal.linkedin}</div>}
        </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
          
          {/* MAIN CONTENT */}
          <div className="col-span-8 space-y-10">
              
              {personal.summary && (
                  <section>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                          <span className="w-4 h-0.5 bg-indigo-600"></span> Profile
                      </h3>
                      <p className="text-slate-700 leading-7 text-sm">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                          <span className="w-4 h-0.5 bg-indigo-600"></span> Experience
                      </h3>
                      <div className="space-y-8">
                          {experience.map(exp => (
                              <div key={exp.id} className="group">
                                  <div className="flex justify-between items-baseline mb-1">
                                      <h4 className="font-bold text-lg text-slate-900 group-hover:text-indigo-700 transition-colors">{exp.role}</h4>
                                      <span className="text-xs font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded">{exp.date}</span>
                                  </div>
                                  <div className="text-sm font-bold text-slate-500 mb-2">{exp.company}</div>
                                  <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {projects.length > 0 && (
                  <section>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                          <span className="w-4 h-0.5 bg-indigo-600"></span> Projects
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                          {projects.map(p => (
                              <div key={p.id} className="bg-slate-50 p-4 border border-slate-100 rounded">
                                  <h4 className="font-bold text-sm text-slate-800">{p.name}</h4>
                                  <p className="text-xs text-slate-500 mt-2">{p.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* SIDEBAR */}
          <div className="col-span-4 space-y-10">
              {personal.photo && (
                  <div className="mb-6">
                      <img src={personal.photo} alt="Profile" className="w-full h-auto rounded shadow-lg border border-slate-200" />
                  </div>
              )}

              <section>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-200 pb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="bg-indigo-50 text-indigo-700 px-2 py-1 text-xs font-bold rounded">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-200 pb-2">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold text-slate-900 text-sm">{edu.school}</div>
                                  <div className="text-xs text-slate-500">{edu.degree}</div>
                                  <div className="text-[10px] text-slate-400 mt-1">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {(certifications.length > 0 || languages.length > 0) && (
                  <section>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-200 pb-2">Extras</h3>
                      <ul className="space-y-2 text-xs text-slate-600">
                          {certifications.map(c => <li key={c.id}><strong>Cert:</strong> {c.name}</li>)}
                          {languages.map(l => <li key={l.id}><strong>Lang:</strong> {l.name} ({l.level})</li>)}
                      </ul>
                  </section>
              )}
          </div>

      </div>
    </div>
  );
};

export default AccentGrid;