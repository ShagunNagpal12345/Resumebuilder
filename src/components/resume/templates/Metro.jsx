import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Metro = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const PRIMARY = '#1e293b'; // Slate 800
  const AMBER = '#f59e0b';   // Amber 500

  const SectionTitle = ({ title }) => (
    <div className="mb-6 flex items-center gap-0">
      <div className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-white shadow-md" style={{ backgroundColor: PRIMARY }}>
        {title}
      </div>
      <div className="h-1.5 flex-1 shadow-sm" style={{ backgroundColor: AMBER }}></div>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] bg-white shadow-xl resume-preview-wrapper flex flex-col font-sans">
      
      {/* HEADER */}
      <div className="p-12 shrink-0 bg-slate-50/50">
        <div className="flex items-center gap-8 mb-8">
          {personal.photo && <img src={personal.photo} alt="Profile" className="h-32 w-32 shrink-0 object-cover shadow-lg" style={{ border: `4px solid ${AMBER}` }}/>}
          <div className="min-w-0 flex-1">
            <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-3 break-words" style={{ color: PRIMARY }}>{personal.name || 'Your Name'}</h1>
            {personal.title && <p className="text-xl font-black uppercase tracking-widest break-words" style={{ color: AMBER }}>{personal.title}</p>}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-widest text-slate-600">
           {personal.email && <span className="px-3 py-1.5 shadow-sm break-all" style={{ backgroundColor: '#f8fafc', borderLeft: `3px solid ${AMBER}` }}><Mail size={12} className="inline mr-2 mb-0.5"/>{personal.email}</span>}
           {personal.phone && <span className="px-3 py-1.5 shadow-sm" style={{ backgroundColor: '#f8fafc', borderLeft: `3px solid ${AMBER}` }}><Phone size={12} className="inline mr-2 mb-0.5"/>{personal.phone}</span>}
           {personal.location && <span className="px-3 py-1.5 shadow-sm break-words" style={{ backgroundColor: '#f8fafc', borderLeft: `3px solid ${AMBER}` }}><MapPin size={12} className="inline mr-2 mb-0.5"/>{personal.location}</span>}
           {personal.linkedin && <span className="px-3 py-1.5 shadow-sm break-all" style={{ backgroundColor: '#f8fafc', borderLeft: `3px solid ${AMBER}` }}><Linkedin size={12} className="inline mr-2 mb-0.5"/>{personal.linkedin}</span>}
        </div>
      </div>
      
      {/* Metro Line separator */}
      <div className="h-2 w-full shadow-inner" style={{ backgroundColor: PRIMARY }}></div>

      {/* BODY */}
      <div className="p-12 flex-1 space-y-12">
        
        {personal.summary && (
          <section>
            <div className="border-l-4 pl-5 py-1 text-[13px] leading-relaxed text-slate-600 font-medium whitespace-pre-wrap break-words italic" style={{ borderColor: AMBER }}>
              {personal.summary}
            </div>
          </section>
        )}

        <div className="grid grid-cols-12 gap-12">
           <div className="col-span-7 space-y-12">
              {experience.length > 0 && (
                <section>
                  <SectionTitle title="Experience" />
                  <div className="space-y-8">
                    {experience.map((exp, i) => (
                      <React.Fragment key={exp.id || i}>
                        {exp.pageBreak && <div className="manual-page-break" />}
                        <div className="border-l-4 pl-5 py-1" style={{ borderColor: AMBER }}>
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-[15px] font-black uppercase tracking-tight break-words" style={{ color: PRIMARY }}>{exp.role}</h3>
                            <span className="shrink-0 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-sm" style={{ backgroundColor: PRIMARY }}>{exp.date}</span>
                          </div>
                          <p className="text-xs font-black uppercase tracking-widest mb-3 break-words" style={{ color: AMBER }}>{exp.company}</p>
                          <ul className="ml-4 list-square text-xs text-slate-600 space-y-1.5 marker:text-amber-500 font-medium">
                             {(exp.desc || '').split('\n').map((line, idx) => line.trim() && <li key={idx} className="leading-relaxed">{line}</li>)}
                          </ul>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              )}

              {projects.length > 0 && (
                <section>
                  <SectionTitle title="Projects" />
                  <div className="space-y-6">
                    {projects.map((proj, i) => (
                      <React.Fragment key={proj.id || i}>
                        {proj.pageBreak && <div className="manual-page-break" />}
                        <div className="border-l-4 pl-5 py-1" style={{ borderColor: AMBER }}>
                          <h3 className="text-[13px] font-black uppercase tracking-widest mb-2 break-words" style={{ color: PRIMARY }}>{proj.name}</h3>
                          <p className="text-[11px] text-slate-600 leading-relaxed font-medium whitespace-pre-wrap break-words">{proj.desc}</p>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              )}
           </div>

           <div className="col-span-5 space-y-12">
              {skills && Object.values(skills).flat().length > 0 && (
                <section>
                  <SectionTitle title="Skills" />
                  <div className="flex flex-wrap gap-2">
                     {[...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])].map((s, i) => (
                        <span key={i} className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-sm break-words" style={{ backgroundColor: AMBER }}>
                          {s}
                        </span>
                     ))}
                  </div>
                </section>
              )}

              {education.length > 0 && (
                <section>
                  <SectionTitle title="Education" />
                  <div className="space-y-6">
                    {education.map((edu, i) => (
                      <React.Fragment key={edu.id || i}>
                        {edu.pageBreak && <div className="manual-page-break" />}
                        <div className="border-l-4 pl-5 py-1" style={{ borderColor: AMBER }}>
                          <h3 className="text-[13px] font-black uppercase tracking-tight mb-1 break-words" style={{ color: PRIMARY }}>{edu.degree}</h3>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 break-words">{edu.school}</p>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{edu.date}</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              )}

              {certifications.length > 0 && (
                <section>
                  <SectionTitle title="Certificates" />
                  <div className="space-y-4">
                    {certifications.map((cert, i) => (
                       <div key={cert.id || i} className="border-l-4 pl-4 py-1" style={{ borderColor: AMBER }}>
                          <div className="text-[11px] font-black uppercase tracking-widest break-words" style={{ color: PRIMARY }}>{cert.name}</div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1 break-words">{cert.issuer}</div>
                       </div>
                    ))}
                  </div>
                </section>
              )}

              {languages.length > 0 && (
                <section>
                  <SectionTitle title="Languages" />
                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang, i) => (
                       <div key={lang.id || i} className="flex items-center gap-3 px-4 py-2 shadow-sm bg-slate-50" style={{ borderLeft: `3px solid ${AMBER}` }}>
                          <span className="text-[11px] font-black uppercase tracking-widest break-words" style={{ color: PRIMARY }}>{lang.name}</span>
                          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">{lang.level}</span>
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

export default Metro;