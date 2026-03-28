import React from 'react';

const Coder = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const DARK = '#0d1117';
  const BLUE = '#58a6ff';
  const GREEN = '#3fb950';
  const BORDER = '#21262d';

  const allSkills = [...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])];

  const MainSectionTitle = ({ title }) => (
    <h2 className="mb-2 text-xs font-bold" style={{ color: DARK }}>
      <span style={{ color: GREEN }}>&gt; </span>
      <span className="uppercase tracking-wider">{title}</span>
    </h2>
  );

  const SidebarSectionTitle = ({ title }) => (
    <h2 className="mb-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: BLUE }}>
      &gt; {title}
    </h2>
  );

  return (
    <div className="mx-auto flex w-full max-w-[210mm] min-h-[1100px] overflow-hidden bg-white shadow-lg resume-preview-wrapper" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
      
      {/* SIDEBAR */}
      <div className="w-[32%] shrink-0 p-5 flex flex-col" style={{ backgroundColor: DARK }}>
        <div className="mb-4 flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]"></div>
          <span className="ml-2 text-[10px]" style={{ color: '#484f58' }}>~/whoami</span>
        </div>

        <div className="mb-5">
          {personal.photo && (
            <div className="mx-auto mb-3 h-20 w-20 overflow-hidden rounded-lg">
              <img src={personal.photo} alt="Profile" className="h-full w-full object-cover"/>
            </div>
          )}
          <h1 className="text-lg font-bold break-words leading-tight" style={{ color: GREEN }}>{personal.name || 'Your Name'}</h1>
          {personal.title && <p className="mt-0.5 text-xs break-words" style={{ color: BLUE }}>// {personal.title}</p>}
        </div>

        <div className="mb-5 space-y-1.5 text-[11px]" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '12px' }}>
          {personal.email && (
            <div className="flex items-start gap-2 break-all">
              <span style={{ color: GREEN }}>$</span><span style={{ color: '#8b949e' }}>{personal.email}</span>
            </div>
          )}
          {personal.phone && (
            <div className="flex items-start gap-2 break-words">
              <span style={{ color: GREEN }}>$</span><span style={{ color: '#8b949e' }}>{personal.phone}</span>
            </div>
          )}
          {personal.location && (
            <div className="flex items-start gap-2 break-words">
              <span style={{ color: GREEN }}>$</span><span style={{ color: '#8b949e' }}>{personal.location}</span>
            </div>
          )}
          {personal.linkedin && (
            <div className="flex items-start gap-2 break-all">
              <span style={{ color: GREEN }}>$</span><span style={{ color: '#8b949e' }}>{personal.linkedin}</span>
            </div>
          )}
        </div>

        {allSkills.length > 0 && (
          <div className="mb-5" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '12px' }}>
            <SidebarSectionTitle title="Skills" />
            <div>
              <div className="mt-1 flex flex-wrap gap-1">
                {allSkills.map((skill, i) => (
                  <span key={i} className="rounded-sm px-1.5 py-0.5 text-[9px] font-medium break-words" style={{ backgroundColor: '#161b22', color: BLUE, border: `1px solid ${BORDER}` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {languages.length > 0 && (
          <div className="mb-5" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '12px' }}>
            <SidebarSectionTitle title="Languages" />
            <div className="space-y-1">
              {languages.map((l, i) => (
                <div key={l.id || i} className="flex items-center justify-between text-[10px] break-words">
                  <span style={{ color: '#c9d1d9' }}>{l.name}</span>
                  <span style={{ color: '#484f58' }}>{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {certifications.length > 0 && (
          <div className="mb-5" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '12px' }}>
            <SidebarSectionTitle title="Certifications" />
            <div className="space-y-1.5">
              {certifications.map((cert, i) => (
                <div key={cert.id || i}>
                  <p className="text-[10px] font-semibold break-words" style={{ color: '#c9d1d9' }}>{cert.name}</p>
                  <p className="text-[9px] break-words" style={{ color: '#484f58' }}>
                    {cert.issuer}{cert.issuer && cert.date ? ` (${cert.date})` : cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 bg-white">
        
        {personal.summary && (
          <div className="mb-5">
            <MainSectionTitle title="Summary" />
            <div className="border-l-2 pl-4" style={{ borderColor: BORDER }}>
              <div className="text-sm leading-relaxed text-zinc-600 whitespace-pre-wrap break-words">{personal.summary}</div>
            </div>
          </div>
        )}

        {experience.length > 0 && (
          <div className="mb-5">
            <MainSectionTitle title="Experience" />
            <div className="border-l-2 pl-4 space-y-4" style={{ borderColor: BORDER }}>
              {experience.map((exp, i) => (
                <React.Fragment key={exp.id || i}>
                  {exp.pageBreak && <div className="manual-page-break" />}
                  <div>
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-sm font-bold break-words" style={{ color: DARK }}>{exp.role}</span>
                        {exp.company && <span className="text-sm break-words" style={{ color: BLUE }}> @ {exp.company}</span>}
                      </div>
                      <span className="shrink-0 rounded px-2 py-0.5 text-[10px] font-medium tracking-wide" style={{ backgroundColor: '#f6f8fa', color: '#57606a' }}>
                        {exp.date}
                      </span>
                    </div>
                    <ul className="mt-1 space-y-0.5">
                      {(exp.desc || '').split('\n').map((line, idx) => line.trim() && (
                        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 leading-relaxed">
                          <span className="mt-1 shrink-0 text-xs" style={{ color: GREEN }}>$</span>
                          <span className="break-words">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div className="mb-5">
            <MainSectionTitle title="Education" />
            <div className="border-l-2 pl-4 space-y-3" style={{ borderColor: BORDER }}>
              {education.map((edu, i) => (
                <React.Fragment key={edu.id || i}>
                  {edu.pageBreak && <div className="manual-page-break" />}
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-sm font-bold break-words" style={{ color: DARK }}>{edu.school}</h3>
                      <span className="shrink-0 text-xs text-zinc-400 tracking-wide">{edu.date}</span>
                    </div>
                    <p className="text-sm text-zinc-600 break-words">{edu.degree}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {projects.length > 0 && (
          <div className="mb-5">
            <MainSectionTitle title="Projects" />
            <div className="border-l-2 pl-4 space-y-3" style={{ borderColor: BORDER }}>
              {projects.map((proj, i) => (
                <React.Fragment key={proj.id || i}>
                  {proj.pageBreak && <div className="manual-page-break" />}
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-sm font-bold break-words" style={{ color: BLUE }}>{proj.name}</h3>
                    </div>
                    <div className="mt-1 text-sm text-zinc-600 whitespace-pre-wrap break-words leading-relaxed">{proj.desc}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Coder;