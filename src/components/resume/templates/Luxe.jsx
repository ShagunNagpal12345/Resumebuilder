import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Luxe = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const GOLD = '#d4af37';
  const TEXT = '#000000';
  const BG = '#fafaf9';

  const SectionTitle = ({ title }) => (
    <div className="mb-6 flex items-center gap-4">
      <div className="h-px flex-1 shadow-sm" style={{ backgroundColor: GOLD }}></div>
      <h2 className="shrink-0 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: GOLD }}>{title}</h2>
      <div className="h-px flex-1 shadow-sm" style={{ backgroundColor: GOLD }}></div>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] shadow-2xl resume-preview-wrapper flex flex-col" style={{ fontFamily: "Georgia, serif", backgroundColor: BG }}>
      
      {/* HEADER */}
      <div className="p-16 pb-10 border-b-2 shrink-0 text-center" style={{ borderColor: GOLD }}>
        {personal.photo && <img src={personal.photo} alt="Profile" className="mx-auto mb-6 h-28 w-28 rounded-full border-[3px] object-cover shadow-lg" style={{ borderColor: GOLD }}/>}
        <h1 className="text-4xl font-bold tracking-widest uppercase mb-3 break-words" style={{ color: TEXT, letterSpacing: "0.15em" }}>{personal.name || 'Your Name'}</h1>
        {personal.title && <p className="text-sm font-bold tracking-[0.25em] uppercase" style={{ color: GOLD }}>{personal.title}</p>}
        
        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <div className="h-px w-20 shadow-sm" style={{ backgroundColor: GOLD }}></div>
          <div className="h-2.5 w-2.5 rotate-45 shadow-sm" style={{ backgroundColor: GOLD }}></div>
          <div className="h-px w-20 shadow-sm" style={{ backgroundColor: GOLD }}></div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-widest font-bold" style={{ color: '#78716c' }}>
           {personal.email && <span className="flex items-center gap-1.5 break-all"><Mail size={12}/> {personal.email}</span>}
           {personal.phone && <span className="flex items-center gap-1.5"><Phone size={12}/> {personal.phone}</span>}
           {personal.location && <span className="flex items-center gap-1.5 break-words"><MapPin size={12}/> {personal.location}</span>}
           {personal.linkedin && <span className="flex items-center gap-1.5 break-all"><Linkedin size={12}/> {personal.linkedin}</span>}
        </div>
      </div>

      {/* BODY */}
      <div className="p-16 pt-10 flex-1 space-y-10">
        
        {personal.summary && (
          <section>
            <div className="text-center text-[13px] italic leading-relaxed whitespace-pre-wrap break-words" style={{ color: '#44403c' }}>
              {personal.summary}
            </div>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <SectionTitle title="Experience" />
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <React.Fragment key={exp.id || i}>
                  {exp.pageBreak && <div className="manual-page-break" />}
                  <div className="border-l-2 pl-5 py-1" style={{ borderColor: GOLD }}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-[15px] font-bold uppercase tracking-wider break-words" style={{ color: TEXT }}>{exp.role}</h3>
                      <span className="shrink-0 text-[10px] font-bold italic uppercase tracking-widest" style={{ color: '#a8a29e' }}>{exp.date}</span>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-widest mb-3 break-words" style={{ color: GOLD }}>{exp.company}</p>
                    <ul className="space-y-2">
                      {(exp.desc || '').split('\n').map((line, idx) => line.trim() && (
                        <li key={idx} className="flex items-start gap-3 text-[13px] leading-relaxed" style={{ color: '#44403c' }}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45" style={{ backgroundColor: GOLD }}></span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-12">
           <div>
              {education.length > 0 && (
                <section className="mb-10">
                  <SectionTitle title="Education" />
                  <div className="space-y-6">
                    {education.map((edu, i) => (
                      <React.Fragment key={edu.id || i}>
                        {edu.pageBreak && <div className="manual-page-break" />}
                        <div className="border-l-2 pl-5 py-1" style={{ borderColor: GOLD }}>
                          <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-[13px] font-bold uppercase tracking-wider break-words" style={{ color: TEXT }}>{edu.degree}</h3>
                            <span className="shrink-0 text-[9px] font-bold italic uppercase tracking-widest" style={{ color: '#a8a29e' }}>{edu.date}</span>
                          </div>
                          <p className="text-[10px] font-bold uppercase tracking-widest break-words" style={{ color: GOLD }}>{edu.school}</p>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              )}

              {skills && Object.values(skills).flat().length > 0 && (
                <section>
                  <SectionTitle title="Expertise" />
                  <div className="border-l-2 pl-5 py-1" style={{ borderColor: GOLD }}>
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] leading-loose break-words" style={{ color: '#44403c' }}>
                       {[...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])].join(' • ')}
                    </div>
                  </div>
                </section>
              )}
           </div>

           <div>
              {projects.length > 0 && (
                <section className="mb-10">
                  <SectionTitle title="Projects" />
                  <div className="space-y-6">
                    {projects.map((proj, i) => (
                      <React.Fragment key={proj.id || i}>
                        {proj.pageBreak && <div className="manual-page-break" />}
                        <div className="border-l-2 pl-5 py-1" style={{ borderColor: GOLD }}>
                          <h3 className="text-[13px] font-bold uppercase tracking-wider mb-2 break-words" style={{ color: TEXT }}>{proj.name}</h3>
                          <p className="text-[11px] leading-relaxed whitespace-pre-wrap break-words italic" style={{ color: '#44403c' }}>{proj.desc}</p>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              )}

              {certifications.length > 0 && (
                <section className="mb-10">
                  <SectionTitle title="Honors" />
                  <div className="space-y-4">
                    {certifications.map((cert, i) => (
                       <div key={cert.id || i} className="border-l-2 pl-4 py-0.5" style={{ borderColor: GOLD }}>
                          <div className="text-[11px] font-bold uppercase tracking-wider break-words" style={{ color: TEXT }}>{cert.name}</div>
                          <div className="text-[9px] font-bold italic uppercase tracking-widest mt-1 break-words" style={{ color: '#a8a29e' }}>{cert.issuer}</div>
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

export default Luxe;