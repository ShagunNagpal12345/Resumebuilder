// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Cpu, Award, Heart, Globe, Layers, CheckCircle } from 'lucide-react';

// const Classic = ({ data }) => {
//   const { personal, skills, experience, education, projects, certifications, languages, awards, volunteering } = data;

//   return (
//     <div className="w-full h-full bg-white text-black font-serif min-h-[1100px] p-16 resume-preview-wrapper flex flex-col">
//       <header className="text-center mb-12 border-b-4 border-double border-black pb-8 shrink-0">
//         <h1 className="text-5xl font-bold mb-3 uppercase tracking-wide break-words leading-none">{personal.name || "Your Name"}</h1>
//         <p className="text-xl font-medium text-slate-600 uppercase tracking-[0.2em] mb-6 italic">{personal.title}</p>
//         <div className="text-[11px] font-bold space-x-3 text-slate-700 uppercase tracking-widest flex flex-wrap justify-center items-center">
//             {personal.email && <span className="break-all">{personal.email}</span>}
//             <span className="opacity-30">|</span>
//             {personal.phone && <span>{personal.phone}</span>}
//             <span className="opacity-30">|</span>
//             {personal.location && <span className="break-words">{personal.location}</span>}
//             {personal.linkedin && <><span className="opacity-30">|</span> <span className="break-all">{personal.linkedin}</span></>}
//         </div>
//       </header>

//       <div className="space-y-12 flex-1">
//         {personal.summary && (
//             <section className="text-center px-12 italic">
//                 <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-wrap break-words">"{personal.summary}"</p>
//             </section>
//         )}

//         <section>
//             <h2 className="text-xs font-black uppercase tracking-[0.4em] border-b-2 border-black mb-8 pb-1 text-center">Work Experience</h2>
//             <div className="space-y-10">
//                 {experience.map((exp, i) => (
//                     <React.Fragment key={i}>
//                         {exp.pageBreak && <div className="manual-page-break" />}
//                         <div className="experience-item">
//                             <div className="flex justify-between font-bold text-base uppercase tracking-tight">
//                                 <span className="break-words">{exp.company} <span className="mx-2 font-light text-slate-400">/</span> <span className="italic font-medium text-slate-600">{exp.role}</span></span>
//                                 <span className="shrink-0 ml-10 text-xs italic font-medium">{exp.date}</span>
//                             </div>
//                             <p className="text-[13px] leading-relaxed text-justify whitespace-pre-wrap break-words mt-4 text-slate-700 italic font-medium px-4">{exp.desc}</p>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </section>

//         {education.length > 0 && (
//             <section>
//                 <h2 className="text-xs font-black uppercase tracking-[0.4em] border-b-2 border-black mb-6 pb-1 text-center">Education & Training</h2>
//                 {education.map((edu, i) => (
//                     <React.Fragment key={i}>
//                         {edu.pageBreak && <div className="manual-page-break" />}
//                         <div className="education-item mb-6 flex justify-between">
//                             <div className="font-bold text-sm uppercase tracking-tighter break-words italic">{edu.school} <span className="mx-2 opacity-20 font-light">|</span> <span className="font-normal text-slate-500">{edu.degree}</span></div>
//                             <div className="text-xs font-bold shrink-0 ml-4 italic">{edu.date}</div>
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </section>
//         )}

//         <div className="grid grid-cols-2 gap-16 pt-6">
//             <div className="space-y-12">
//                 {projects.length > 0 && (
//                     <section>
//                         <h2 className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-black mb-6 pb-1">Strategic Portfolio</h2>
//                         {projects.map((p, i) => (
//                             <React.Fragment key={i}>
//                                 {p.pageBreak && <div className="manual-page-break" />}
//                                 <div className="mb-6 last:mb-0">
//                                     <div className="font-black text-[13px] uppercase italic mb-2 tracking-tight">{p.name}</div>
//                                     <p className="text-[12px] text-slate-600 leading-relaxed whitespace-pre-wrap break-words">{p.desc}</p>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </section>
//                 )}

//                 {volunteering.length > 0 && (
//                     <section>
//                         <h2 className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-black mb-6 pb-1">Social Responsibility</h2>
//                         {volunteering.map((v, i) => (
//                             <div key={i} className="mb-4">
//                                 <div className="font-bold text-[13px] uppercase tracking-tighter">{v.role} @ {v.org}</div>
//                                 <div className="text-[11px] italic font-medium">{v.date}</div>
//                                 <p className="text-[12px] text-slate-600 mt-2 whitespace-pre-wrap">{v.desc}</p>
//                             </div>
//                         ))}
//                     </section>
//                 )}
//             </div>

//             <div className="space-y-12">
//                 <section>
//                     <h2 className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-black mb-6 pb-1">Expertise</h2>
//                     <div className="grid grid-cols-2 gap-y-2 text-[11px] font-bold uppercase tracking-widest leading-loose">
//                         {[...skills.core, ...skills.technical, ...skills.soft].map((s, i) => (
//                             <div key={i} className="flex items-center gap-2 break-words">• {s}</div>
//                         ))}
//                     </div>
//                 </section>

//                 {certifications.length > 0 && (
//                     <section>
//                         <h2 className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-black mb-6 pb-1">Credentials</h2>
//                         {certifications.map((c, i) => <div key={i} className="text-[11px] font-bold mb-2 uppercase italic leading-tight border-l-2 border-black pl-3">• {c.name} <span className="block text-[9px] font-normal text-slate-400 not-italic mt-0.5">{c.issuer}</span></div>)}
//                     </section>
//                 )}

//                 {awards.length > 0 && (
//                     <section>
//                         <h2 className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-black mb-6 pb-1">Honors</h2>
//                         {awards.map((a, i) => <div key={i} className="text-[11px] font-bold mb-2 uppercase tracking-tighter">🏆 {a.name} — <span className="italic font-medium text-slate-500">{a.issuer}</span></div>)}
//                     </section>
//                 )}

//                 {languages.length > 0 && (
//                     <section>
//                         <h2 className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-black mb-6 pb-1">Languages</h2>
//                         {languages.map((l, i) => <div key={i} className="text-[11px] font-bold uppercase mb-1 tracking-widest italic">{l.name} [{l.level}]</div>)}
//                     </section>
//                 )}
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Classic;

import React from 'react';

const Classic = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = [],
    awards = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="p-16 font-serif text-slate-900 bg-white min-h-[1100px] leading-relaxed">
      
      {/* HEADER */}
      <header className="text-center border-b-2 border-slate-800 pb-6 mb-8">
        <h1 className="text-4xl font-bold uppercase tracking-wide mb-2">{personal.name}</h1>
        <p className="text-lg italic text-slate-600 mb-4">{personal.title}</p>
        
        <div className="flex justify-center flex-wrap gap-4 text-sm text-slate-700 font-sans">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>• {personal.phone}</span>}
            {personal.location && <span>• {personal.location}</span>}
            {personal.linkedin && <span>• {personal.linkedin}</span>}
        </div>
      </header>

      {/* SUMMARY */}
      {personal.summary && (
        <section className="mb-8">
          <h3 className="font-bold uppercase text-sm border-b border-slate-300 mb-3 pb-1">Professional Summary</h3>
          <p className="text-sm text-justify">{personal.summary}</p>
        </section>
      )}

      {/* SKILLS */}
      <section className="mb-8">
          <h3 className="font-bold uppercase text-sm border-b border-slate-300 mb-3 pb-1">Core Competencies</h3>
          <div className="text-sm">
              <span className="font-bold mr-2">Technical:</span>
              {technical.join(', ')}
          </div>
          <div className="text-sm mt-1">
              <span className="font-bold mr-2">Professional:</span>
              {soft.join(', ')}
          </div>
      </section>

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h3 className="font-bold uppercase text-sm border-b border-slate-300 mb-4 pb-1">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id || Math.random()}>
                <div className="flex justify-between items-baseline font-sans mb-1">
                  <h4 className="font-bold text-md text-slate-900">{exp.role}</h4>
                  <span className="text-sm font-bold text-slate-500">{exp.date}</span>
                </div>
                <div className="text-sm italic font-bold text-slate-700 mb-2">{exp.company}</div>
                <p className="text-sm whitespace-pre-line">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
        <section className="mb-8">
          <h3 className="font-bold uppercase text-sm border-b border-slate-300 mb-4 pb-1">Education</h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id || Math.random()} className="flex justify-between items-start">
                <div>
                    <h4 className="font-bold text-slate-900">{edu.school}</h4>
                    <p className="text-sm italic">{edu.degree}</p>
                </div>
                <span className="text-sm font-sans text-slate-500">{edu.date}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EXTRAS */}
      {(certifications.length > 0 || awards.length > 0) && (
          <section>
              <h3 className="font-bold uppercase text-sm border-b border-slate-300 mb-4 pb-1">Additional Information</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                  {certifications.map(c => <li key={c.id}><strong>Certification:</strong> {c.name} ({c.issuer})</li>)}
                  {awards.map(a => <li key={a.id}><strong>Award:</strong> {a.name} - {a.issuer}</li>)}
                  {languages.map(l => <li key={l.id}><strong>Language:</strong> {l.name} ({l.level})</li>)}
              </ul>
          </section>
      )}

    </div>
  );
};

export default Classic;