// import React from 'react';

// const CenteredInitials = ({ data }) => {
//   const { personal, skills, experience, education, languages } = data;
//   const initials = personal.name ? personal.name.split(' ').map(n => n[0]).join('') : '';

//   const SectionTitle = ({ title }) => (
//     <h3 className="text-sm font-bold text-[#1e3a8a] uppercase mb-6 pb-2 border-b border-slate-200">
//       {title}
//     </h3>
//   );

//   return (
//     <div className="w-full bg-white min-h-[1100px] shadow-2xl font-sans p-16 resume-preview-wrapper flex flex-col items-center">
//       <header className="text-center mb-12">
//         <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#1e3a8a] flex items-center justify-center text-2xl font-bold text-[#1e3a8a] mb-6">
//           {initials}
//         </div>
//         <h1 className="text-4xl font-bold text-[#1e3a8a] uppercase mb-3 tracking-wide">{personal.name}</h1>
//         <div className="text-xs text-slate-600 space-x-3">
//           {personal.email && <span>{personal.email}</span>}
//           <span className="opacity-40">|</span>
//           {personal.phone && <span>{personal.phone}</span>}
//           <span className="opacity-40">|</span>
//           {personal.location && <span>{personal.location}</span>}
//         </div>
//       </header>

//       <div className="w-full space-y-12 flex-1 max-w-3xl">
//         {personal.summary && (
//           <section>
//             <SectionTitle title="Summary" />
//             <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-wrap">{personal.summary}</p>
//           </section>
//         )}

//         <section>
//           <SectionTitle title="Skills" />
//           <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-xs text-slate-600">
//             <ul className="space-y-2">
//               {skills.core.map((s, i) => <li key={i}>• {s}</li>)}
//             </ul>
//             <ul className="space-y-2">
//               {skills.technical.map((s, i) => <li key={i}>• {s}</li>)}
//             </ul>
//           </div>
//         </section>

//         <section>
//           <SectionTitle title="Experience" />
//           <div className="space-y-10">
//             {experience.map((exp, i) => (
//               <React.Fragment key={i}>
//                 {exp.pageBreak && <div className="manual-page-break" />}
//                 <div>
//                   <div className="flex justify-between font-bold text-sm text-slate-800 mb-1">
//                     <h4>{exp.company}</h4>
//                     <span>{exp.date}</span>
//                   </div>
//                   <p className="text-xs font-bold text-[#1e3a8a] mb-3">{exp.role}</p>
//                   <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap">{exp.desc}</p>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </section>

//         {education.length > 0 && (
//           <section>
//             <SectionTitle title="Education and Training" />
//             <div className="space-y-6">
//               {education.map((edu, i) => (
//                 <div key={i}>
//                   <p className="font-bold text-sm text-slate-800">{edu.school}</p>
//                   <p className="text-xs text-[#1e3a8a] font-bold mt-1">{edu.degree}</p>
//                   <p className="text-xs text-slate-500 mt-1">{edu.date}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {languages.length > 0 && (
//           <section>
//             <SectionTitle title="Languages" />
//             <div className="flex flex-wrap gap-8 text-xs text-slate-600">
//               {languages.map((l, i) => (
//                 <div key={i}><span className="font-bold">{l.name}:</span> {l.level}</div>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CenteredInitials;

import React from 'react';

const CenteredInitials = ({ data }) => {
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

  // Helper to get initials
  const getInitials = (name) => {
    if (!name) return 'ME';
    const parts = name.split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div className="p-16 font-serif text-slate-800 bg-white min-h-[1100px] flex flex-col items-center">
      
      {/* INITIALS LOGO */}
      <div className="w-24 h-24 bg-slate-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-8 shadow-xl">
          {personal.photo ? (
              <img src={personal.photo} alt="Profile" className="w-full h-full object-cover rounded-full border-2 border-slate-900" />
          ) : (
              <span>{getInitials(personal.name)}</span>
          )}
      </div>

      {/* HEADER */}
      <header className="text-center mb-12 max-w-2xl">
        <h1 className="text-4xl font-normal uppercase tracking-[0.2em] mb-3">{personal.name}</h1>
        <p className="text-md italic text-slate-500 mb-6">{personal.title}</p>
        
        <div className="flex justify-center flex-wrap gap-6 text-xs font-sans font-bold text-slate-400 uppercase tracking-widest border-t border-b border-slate-100 py-3">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.location && <span>{personal.location}</span>}
        </div>
      </header>

      {/* SUMMARY */}
      {personal.summary && (
        <section className="mb-12 text-center max-w-3xl">
          <p className="text-md leading-8 text-slate-600 font-light">{personal.summary}</p>
        </section>
      )}

      {/* TWO COLUMNS */}
      <div className="grid grid-cols-2 gap-16 w-full">
          
          {/* LEFT */}
          <div className="space-y-12 text-right">
              {experience.length > 0 && (
                  <section>
                      <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">Experience</h3>
                      <div className="space-y-8">
                          {experience.map(exp => (
                              <div key={exp.id}>
                                  <h4 className="font-bold text-lg">{exp.role}</h4>
                                  <div className="text-sm italic text-slate-500 mb-2">{exp.company} • {exp.date}</div>
                                  <p className="text-sm text-slate-600 leading-relaxed font-sans text-right pl-8">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {projects.length > 0 && (
                  <section>
                       <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">Projects</h3>
                       <div className="space-y-4">
                           {projects.map(p => (
                               <div key={p.id}>
                                   <div className="font-bold">{p.name}</div>
                                   <div className="text-xs text-slate-500 font-sans">{p.desc}</div>
                               </div>
                           ))}
                       </div>
                  </section>
              )}
          </div>

          {/* RIGHT */}
          <div className="space-y-12 text-left">
              <section>
                  <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">Expertise</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 font-sans text-sm font-medium text-slate-700">
                      {[...technical, ...soft].map((s, i) => <span key={i} className="border-b border-slate-200 pb-0.5">{s}</span>)}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">Education</h3>
                      <div className="space-y-4">
                          {education.map(edu => (
                              <div key={edu.id}>
                                  <div className="font-bold">{edu.school}</div>
                                  <div className="text-sm italic text-slate-500">{edu.degree}</div>
                                  <div className="text-xs text-slate-400 font-sans mt-1">{edu.date}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              {(certifications.length > 0 || languages.length > 0) && (
                  <section>
                      <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">Details</h3>
                      <ul className="space-y-2 text-sm font-sans text-slate-600">
                          {certifications.map(c => <li key={c.id}>• {c.name}</li>)}
                          {languages.map(l => <li key={l.id}>• {l.name} ({l.level})</li>)}
                      </ul>
                  </section>
              )}
          </div>
      </div>
    </div>
  );
};

export default CenteredInitials;