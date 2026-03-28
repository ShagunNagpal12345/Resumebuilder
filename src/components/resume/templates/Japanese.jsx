import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Japanese = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const PRIMARY = '#1c1917';
  const ACCENT = '#a8a29e';

  const SectionTitle = ({ title }) => (
    <div className="mb-6 flex items-center gap-3">
      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }}></span>
      <h2 className="text-xs font-medium uppercase tracking-[0.3em]" style={{ color: ACCENT }}>{title}</h2>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] bg-white shadow-xl resume-preview-wrapper flex flex-col font-sans">
      
      {/* HEADER */}
      <div className="p-16 pb-8 text-center shrink-0">
        {personal.photo && <img src={personal.photo} alt="Profile" className="mx-auto mb-6 h-20 w-20 rounded-full object-cover shadow-sm" style={{ border: `1px solid ${ACCENT}` }}/>}
        <h1 className="text-4xl font-light tracking-widest uppercase mb-3 break-words" style={{ color: PRIMARY }}>{personal.name || 'Your Name'}</h1>
        {personal.title && <p className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: ACCENT }}>{personal.title}</p>}
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[10px] font-medium uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
           {personal.email && <span className="flex items-center gap-1.5 break-all"><Mail size={12}/> {personal.email}</span>}
           {personal.phone && <span className="flex items-center gap-1.5"><Phone size={12}/> {personal.phone}</span>}
           {personal.location && <span className="flex items-center gap-1.5 break-words"><MapPin size={12}/> {personal.location}</span>}
           {personal.linkedin && <span className="flex items-center gap-1.5 break-all"><Linkedin size={12}/> {personal.linkedin}</span>}
        </div>
      </div>
      
      <div className="mx-16 mb-12 h-px" style={{ backgroundColor: ACCENT, opacity: 0.3 }}></div>

      {/* BODY */}
      <div className="px-16 pb-16 flex-1 space-y-12">
        
        {personal.summary && (
          <section>
            <div className="text-[13px] font-light leading-loose text-justify whitespace-pre-wrap break-words" style={{ color: '#57534e' }}>
              {personal.summary}
            </div>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <SectionTitle title="Experience" />
            <div className="space-y-10">
              {experience.map((exp, i) => (
                <React.Fragment key={exp.id || i}>
                  {exp.pageBreak && <div className="manual-page-break" />}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-[15px] font-medium uppercase tracking-wide break-words" style={{ color: PRIMARY }}>{exp.role}</h3>
                      <span className="shrink-0 text-[10px] font-light uppercase tracking-widest" style={{ color: ACCENT }}>{exp.date}</span>
                    </div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] mb-4 break-words" style={{ color: ACCENT }}>{exp.company}</p>
                    <ul className="space-y-2.5">
                      {(exp.desc || '').split('\n').map((line, idx) => line.trim() && (
                        <li key={idx} className="flex items-start gap-4 text-[13px] font-light leading-relaxed" style={{ color: '#57534e' }}>
                          <span className="mt-2.5 inline-block h-px w-4 shrink-0" style={{ backgroundColor: ACCENT }}></span>
                          {line}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 h-px w-full" style={{ backgroundColor: ACCENT, opacity: 0.15 }}></div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-12 gap-12">
           <div className="col-span-7 space-y-12">
              {education.length > 0 && (
                <section>
                  <SectionTitle title="Education" />
                  <div className="space-y-8">
                    {education.map((edu, i) => (
                      <React.Fragment key={edu.id || i}>
                        {edu.pageBreak && <div className="manual-page-break" />}
                        <div>
                          <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-[13px] font-medium uppercase tracking-wide break-words" style={{ color: PRIMARY }}>{edu.degree}</h3>
                            <span className="shrink-0 text-[10px] font-light uppercase tracking-widest" style={{ color: ACCENT }}>{edu.date}</span>
                          </div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.2em] break-words" style={{ color: ACCENT }}>{edu.school}</p>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              )}

              {projects.length > 0 && (
                <section>
                  <SectionTitle title="Projects" />
                  <div className="space-y-8">
                    {projects.map((proj, i) => (
                      <React.Fragment key={proj.id || i}>
                        {proj.pageBreak && <div className="manual-page-break" />}
                        <div>
                          <h3 className="text-[13px] font-medium uppercase tracking-wide mb-2 break-words" style={{ color: PRIMARY }}>{proj.name}</h3>
                          <p className="text-[11px] font-light leading-loose whitespace-pre-wrap break-words" style={{ color: '#57534e' }}>{proj.desc}</p>
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
                  <div className="text-[11px] font-light leading-loose uppercase tracking-[0.2em] break-words" style={{ color: '#57534e' }}>
                     {[...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])].join(' • ')}
                  </div>
                </section>
              )}

              {certifications.length > 0 && (
                <section>
                  <SectionTitle title="Certifications" />
                  <div className="space-y-5">
                    {certifications.map((cert, i) => (
                       <div key={cert.id || i}>
                          <div className="text-[11px] font-medium uppercase tracking-widest break-words mb-1" style={{ color: PRIMARY }}>{cert.name}</div>
                          <div className="text-[9px] font-light uppercase tracking-[0.2em] break-words" style={{ color: ACCENT }}>{cert.issuer}</div>
                       </div>
                    ))}
                  </div>
                </section>
              )}

              {languages.length > 0 && (
                <section>
                  <SectionTitle title="Languages" />
                  <div className="space-y-3">
                    {languages.map((lang, i) => (
                       <div key={lang.id || i} className="text-[11px] font-medium uppercase tracking-widest break-words">
                          <span style={{ color: PRIMARY }}>{lang.name}</span>
                          <span style={{ color: ACCENT }}> — {lang.level}</span>
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

export default Japanese;