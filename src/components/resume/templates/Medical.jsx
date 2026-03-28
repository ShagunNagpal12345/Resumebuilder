import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Medical = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const TEAL_800 = '#115e59';
  const TEAL_500 = '#0d9488';
  const TEAL_50 = '#f0fdfa';

  const SectionTitle = ({ title }) => (
    <h2 className="mb-4 inline-block rounded-full px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-sm" style={{ backgroundColor: TEAL_500 }}>
      {title}
    </h2>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] bg-white shadow-lg resume-preview-wrapper flex flex-col font-sans">
      
      {/* HEADER */}
      <div className="p-12 mb-2 border-b-4 shrink-0 bg-slate-50/50" style={{ borderColor: TEAL_500 }}>
        <div className="flex items-center gap-8">
          {personal.photo && <img src={personal.photo} alt="Profile" className="h-28 w-28 shrink-0 rounded-full object-cover shadow-md" style={{ border: `4px solid ${TEAL_500}` }}/>}
          <div className="flex-1">
            <h1 className="text-5xl font-black uppercase tracking-tighter break-words leading-none mb-2" style={{ color: TEAL_800 }}>{personal.name || 'Your Name'}</h1>
            {personal.title && <p className="text-sm font-bold uppercase tracking-widest break-words" style={{ color: TEAL_500 }}>{personal.title}</p>}
            
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-widest text-slate-500">
               {personal.email && <span className="flex items-center gap-2 break-all"><Mail size={14}/> {personal.email}</span>}
               {personal.phone && <span className="flex items-center gap-2"><Phone size={14}/> {personal.phone}</span>}
               {personal.location && <span className="flex items-center gap-2 break-words"><MapPin size={14}/> {personal.location}</span>}
               {personal.linkedin && <span className="flex items-center gap-2 break-all"><Linkedin size={14}/> {personal.linkedin}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="p-12 pt-6 flex-1 space-y-10">
        
        {personal.summary && (
          <section>
            <SectionTitle title="Professional Profile" />
            <p className="text-xs leading-relaxed text-slate-600 font-medium whitespace-pre-wrap break-words italic px-2">{personal.summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <SectionTitle title="Clinical & Work Experience" />
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <React.Fragment key={exp.id || i}>
                  {exp.pageBreak && <div className="manual-page-break" />}
                  <div className="rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md" style={{ borderColor: `${TEAL_500}40`, backgroundColor: TEAL_50 }}>
                    <div className="flex justify-between items-baseline mb-2">
                      <div className="font-black text-[13px] uppercase tracking-tight break-words" style={{ color: TEAL_800 }}>
                        {exp.role} <span className="text-slate-500 font-bold tracking-widest">| {exp.company}</span>
                      </div>
                      <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest" style={{ color: TEAL_500 }}>{exp.date}</span>
                    </div>
                    <ul className="ml-4 list-disc text-xs text-slate-600 space-y-1.5 marker:text-teal-300 font-medium">
                      {(exp.desc || '').split('\n').map((line, idx) => line.trim() && <li key={idx} className="leading-relaxed">{line}</li>)}
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-12 gap-8">
           <div className="col-span-7 space-y-10">
             {education.length > 0 && (
                <section>
                   <SectionTitle title="Education" />
                   <div className="space-y-4">
                     {education.map((edu, i) => (
                        <React.Fragment key={edu.id || i}>
                          {edu.pageBreak && <div className="manual-page-break" />}
                          <div className="rounded-xl border p-5 shadow-sm" style={{ borderColor: `${TEAL_500}40`, backgroundColor: TEAL_50 }}>
                             <div className="flex justify-between items-baseline mb-1">
                                <span className="text-[13px] font-black uppercase break-words" style={{ color: TEAL_800 }}>{edu.degree}</span>
                                <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest" style={{ color: TEAL_500 }}>{edu.date}</span>
                             </div>
                             <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 break-words">{edu.school}</div>
                          </div>
                        </React.Fragment>
                     ))}
                   </div>
                </section>
             )}

             {projects.length > 0 && (
                <section>
                   <SectionTitle title="Research & Projects" />
                   <div className="space-y-4">
                     {projects.map((proj, i) => (
                        <React.Fragment key={proj.id || i}>
                          {proj.pageBreak && <div className="manual-page-break" />}
                          <div className="rounded-xl border p-5 shadow-sm" style={{ borderColor: `${TEAL_500}40`, backgroundColor: TEAL_50 }}>
                             <h3 className="text-xs font-black uppercase tracking-widest mb-2 break-words" style={{ color: TEAL_800 }}>{proj.name}</h3>
                             <p className="text-[11px] text-slate-600 leading-relaxed whitespace-pre-wrap font-medium break-words italic">{proj.desc}</p>
                          </div>
                        </React.Fragment>
                     ))}
                   </div>
                </section>
             )}
           </div>

           <div className="col-span-5 space-y-10">
              {skills && Object.values(skills).flat().length > 0 && (
                <section>
                   <SectionTitle title="Core Competencies" />
                   <div className="flex flex-wrap gap-2 px-1">
                      {[...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])].map((s, i) => (
                         <span key={i} className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-sm break-words" style={{ backgroundColor: TEAL_500 }}>
                           {s}
                         </span>
                      ))}
                   </div>
                </section>
              )}

              {certifications.length > 0 && (
                <section>
                   <SectionTitle title="Licenses & Certs" />
                   <div className="space-y-3 px-1">
                      {certifications.map((cert, i) => (
                         <div key={cert.id || i} className="border-l-2 pl-3" style={{ borderColor: TEAL_500 }}>
                            <div className="text-[11px] font-black uppercase tracking-tight break-words" style={{ color: TEAL_800 }}>{cert.name}</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1 break-words">{cert.issuer}</div>
                         </div>
                      ))}
                   </div>
                </section>
              )}

              {languages.length > 0 && (
                <section>
                   <SectionTitle title="Languages" />
                   <div className="space-y-2 px-1">
                      {languages.map((lang, i) => (
                         <div key={lang.id || i} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest border-b border-slate-100 pb-2 break-words">
                            <span style={{ color: TEAL_800 }}>{lang.name}</span>
                            <span className="text-slate-500">{lang.level}</span>
                         </div>
                      ))}
                   </div>
                </section>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Medical;