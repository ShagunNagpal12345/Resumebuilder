import React from 'react';

const Artistic = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    languages = []
  } = data || {};

  const PRIMARY = '#1e1b4b'; // Deep Navy
  const ACCENT = '#f43f5e';  // Rose Red
  const HIGHLIGHT = '#fbbf24'; // Amber

  const SectionTitle = ({ title }) => (
    <div className="mb-4 flex items-center gap-3">
      <h2 className="text-sm font-extrabold uppercase tracking-widest" style={{ color: PRIMARY }}>{title}</h2>
      <div className="h-0.5 flex-1" style={{ borderTop: `2px dashed ${ACCENT}40` }}></div>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] overflow-hidden bg-white shadow-xl resume-preview-wrapper flex flex-col font-sans">
      
      {/* HEADER */}
      <div className="relative px-12 py-12 text-white shrink-0" style={{ background: PRIMARY }}>
        {/* Abstract Shapes */}
        <div className="absolute right-8 top-4 h-32 w-32 rounded-full opacity-20" style={{ backgroundColor: ACCENT }}></div>
        <div className="absolute right-24 bottom-2 h-16 w-16 rounded-full opacity-30" style={{ backgroundColor: HIGHLIGHT }}></div>
        <div className="absolute left-0 bottom-0 h-2 w-full" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${HIGHLIGHT})` }}></div>
        
        <div className="relative z-10 flex items-center gap-6">
          {personal.photo && (
            <div className="shrink-0 rounded-full p-1" style={{ border: `3px dashed ${HIGHLIGHT}` }}>
              <img src={personal.photo} alt="Profile" className="h-24 w-24 rounded-full object-cover"/>
            </div>
          )}
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight uppercase break-words">{personal.name || 'Your Name'}</h1>
            {personal.title && <p className="mt-2 text-lg font-bold uppercase tracking-widest" style={{ color: HIGHLIGHT }}>{personal.title}</p>}
            
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-bold text-white/80 uppercase tracking-widest">
              {personal.email && <span>{personal.email}</span>}
              {personal.phone && <span>{personal.phone}</span>}
              {personal.location && <span>{personal.location}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="p-12 flex-1 space-y-8">
        
        {personal.summary && (
          <section>
            <div className="rounded-xl p-5" style={{ border: `2px dashed ${ACCENT}30`, backgroundColor: `${PRIMARY}05` }}>
              <div className="text-xs leading-relaxed text-slate-700 italic font-medium whitespace-pre-wrap">{personal.summary}</div>
            </div>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <SectionTitle title="Experience" />
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <React.Fragment key={exp.id || i}>
                  {exp.pageBreak && <div className="manual-page-break" />}
                  <div className="relative rounded-xl p-5" style={{ border: `1px dashed ${ACCENT}40` }}>
                    <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full" style={{ backgroundColor: ACCENT }}></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-sm font-bold uppercase" style={{ color: PRIMARY }}>{exp.role}</h3>
                      <span className="shrink-0 rounded-full px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest" style={{ backgroundColor: ACCENT }}>{exp.date}</span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>{exp.company}</p>
                    <ul className="space-y-1.5">
                      {(exp.desc || '').split('\n').map((line, idx) => line.trim() && (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: HIGHLIGHT }}></span>
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

        <div className="grid grid-cols-2 gap-8">
          <div>
            {skills && Object.values(skills).flat().length > 0 && (
              <section className="mb-8">
                <SectionTitle title="Skills" />
                <div className="flex flex-wrap gap-2">
                  {[...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])].map((s, i) => (
                    <span key={i} className="flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest" style={{ backgroundColor: `${PRIMARY}10`, color: PRIMARY }}>
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: i % 2 === 0 ? ACCENT : HIGHLIGHT }}></span>
                      {s}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {languages.length > 0 && (
              <section>
                <SectionTitle title="Languages" />
                <div className="flex flex-wrap gap-3">
                  {languages.map((l, i) => (
                    <div key={l.id || i} className="flex items-center gap-2 rounded-full px-4 py-1.5" style={{ border: `2px dashed ${ACCENT}30` }}>
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: ACCENT }}></span>
                      <span className="text-[11px] font-bold uppercase" style={{ color: PRIMARY }}>{l.name}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">{l.level}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div>
            {education.length > 0 && (
              <section>
                <SectionTitle title="Education" />
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div key={edu.id || i} className="rounded-xl p-4" style={{ border: `1px dashed ${ACCENT}30` }}>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-[13px] font-bold uppercase" style={{ color: PRIMARY }}>{edu.degree}</h3>
                        <span className="text-[10px] text-slate-400 font-bold uppercase">{edu.date}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-bold">{edu.school}</p>
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

export default Artistic;