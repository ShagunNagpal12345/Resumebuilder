import React from 'react';

const Architect = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const PRIMARY = '#1e3a5f';
  const ACCENT = '#1d4ed8';
  const GRID = '#dbeafe';

  const SectionHeader = ({ title }) => (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-2.5 w-2.5 rotate-45" style={{ backgroundColor: ACCENT }}></div>
      <h2 className="text-sm font-bold uppercase tracking-[0.15em]" style={{ fontFamily: "JetBrains Mono, Consolas, monospace", color: PRIMARY }}>{title}</h2>
      <div className="h-px flex-1 opacity-30" style={{ backgroundColor: PRIMARY }}></div>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] bg-white p-12 shadow-lg resume-preview-wrapper flex flex-col" style={{ fontFamily: "Inter, sans-serif", backgroundImage: `linear-gradient(${GRID} 1px, transparent 1px), linear-gradient(90deg, ${GRID} 1px, transparent 1px)`, backgroundSize: "40px 40px" }}>
      
      {/* HEADER */}
      <div className="mb-8 border-b-2 pb-6 shrink-0" style={{ borderColor: PRIMARY }}>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-wider" style={{ fontFamily: "JetBrains Mono, Consolas, monospace", color: PRIMARY }}>{personal.name || 'Your Name'}</h1>
            {personal.title && <p className="mt-2 text-sm font-bold uppercase tracking-widest" style={{ color: ACCENT }}>{personal.title}</p>}
          </div>
          <div className="shrink-0 border-l-2 pl-4 text-right space-y-1" style={{ borderColor: ACCENT }}>
            {personal.email && <p className="text-[11px] font-medium text-slate-500">{personal.email}</p>}
            {personal.phone && <p className="text-[11px] font-medium text-slate-500">{personal.phone}</p>}
            {personal.location && <p className="text-[11px] font-medium text-slate-500">{personal.location}</p>}
            {personal.linkedin && <p className="text-[11px] font-medium text-slate-500">{personal.linkedin}</p>}
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-8 bg-white/80 p-6 rounded-2xl backdrop-blur-sm border border-slate-100 shadow-sm">
        
        {personal.summary && (
          <section>
            <div className="border-l-2 pl-4 text-xs leading-relaxed text-slate-600 font-medium whitespace-pre-wrap" style={{ borderColor: ACCENT }}>
              {personal.summary}
            </div>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <SectionHeader title="Experience" />
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <React.Fragment key={exp.id || i}>
                  {exp.pageBreak && <div className="manual-page-break" />}
                  <div className="border-l-2 pl-4" style={{ borderColor: ACCENT }}>
                    <div className="flex justify-between items-baseline mb-1">
                      <div>
                        <span className="text-sm font-bold uppercase" style={{ color: PRIMARY }}>{exp.role}</span>
                        <span className="text-xs font-bold" style={{ color: ACCENT }}> | {exp.company}</span>
                      </div>
                      <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider" style={{ fontFamily: "JetBrains Mono, Consolas, monospace", color: PRIMARY, backgroundColor: GRID }}>{exp.date}</span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {(exp.desc || '').split('\n').map((line, idx) => line.trim() && (
                        <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45" style={{ backgroundColor: ACCENT }}></span>
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

        <div className="grid grid-cols-2 gap-10">
          <div>
            {skills && Object.values(skills).flat().length > 0 && (
              <section className="mb-8">
                <SectionHeader title="Skills" />
                <div className="border-l-2 pl-4 space-y-2" style={{ borderColor: ACCENT }}>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "JetBrains Mono, Consolas, monospace", color: PRIMARY }}>Technical & Core</p>
                  <div className="flex flex-wrap gap-1.5">
                    {[...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])].map((s, i) => (
                      <span key={i} className="px-1.5 py-0.5 text-[10px] font-bold" style={{ backgroundColor: GRID, color: ACCENT, fontFamily: "JetBrains Mono, Consolas, monospace" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {education.length > 0 && (
              <section>
                <SectionHeader title="Education" />
                <div className="space-y-4 border-l-2 pl-4" style={{ borderColor: ACCENT }}>
                  {education.map((edu, i) => (
                    <div key={edu.id || i}>
                      <div className="text-xs font-bold uppercase" style={{ color: PRIMARY }}>{edu.degree}</div>
                      <div className="text-[11px] font-bold" style={{ color: ACCENT }}>{edu.school}</div>
                      <div className="text-[10px] mt-1" style={{ fontFamily: "JetBrains Mono, Consolas, monospace", color: '#6b7280' }}>{edu.date}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div>
            {projects.length > 0 && (
              <section>
                <SectionHeader title="Projects" />
                <div className="space-y-4">
                  {projects.map((proj, i) => (
                    <div key={proj.id || i} className="border-l-2 pl-4" style={{ borderColor: ACCENT }}>
                      <div className="text-xs font-bold uppercase mb-1" style={{ color: PRIMARY }}>{proj.name}</div>
                      <p className="text-[11px] text-slate-600 leading-relaxed whitespace-pre-wrap">{proj.desc}</p>
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

export default Architect;