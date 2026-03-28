import React from 'react';

const Academic = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = [],
    awards = [],
    volunteering = []
  } = data || {};

  const { core = [], technical = [], soft = [] } = skills;

  const SectionTitle = ({ title }) => (
    <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-800 border-b border-zinc-300 pb-0.5 mt-6">
      {title}
    </h2>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] bg-white p-12 shadow-lg resume-preview-wrapper flex flex-col" style={{ fontFamily: "'Computer Modern', 'CMU Serif', Georgia, 'Times New Roman', serif" }}>
      
      {/* HEADER */}
      <div className="mb-6 shrink-0 text-center">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-wide mb-1 uppercase">{personal.name || 'Your Name'}</h1>
        {personal.title && <p className="text-sm text-zinc-600 italic mb-2">{personal.title}</p>}
        
        <div className="flex flex-wrap justify-center gap-x-2 text-[11px] text-zinc-600">
          {personal.email && <span>{personal.email}</span>}
          {personal.email && personal.phone && <span>•</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.phone && personal.location && <span>•</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.location && personal.linkedin && <span>•</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
        </div>
      </div>

      <div className="flex-1 space-y-4">
        {/* SUMMARY */}
        {personal.summary && (
          <div>
            <SectionTitle title="Summary" />
            <p className="text-xs leading-relaxed text-zinc-700 text-justify indent-8 whitespace-pre-wrap">{personal.summary}</p>
          </div>
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <div>
            <SectionTitle title="Education" />
            <div className="space-y-3">
              {education.map((edu, i) => (
                <React.Fragment key={edu.id || i}>
                  {edu.pageBreak && <div className="manual-page-break" />}
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-zinc-900">{edu.degree}</span>
                      <span className="text-[10px] text-zinc-500 uppercase">{edu.date}</span>
                    </div>
                    <p className="text-[11px] text-zinc-700 italic">{edu.school}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <div>
            <SectionTitle title="Professional Experience" />
            <div className="space-y-5">
              {experience.map((exp, i) => (
                <React.Fragment key={exp.id || i}>
                  {exp.pageBreak && <div className="manual-page-break" />}
                  <div>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className="text-xs font-bold text-zinc-900">{exp.role}</span>
                      <span className="text-[10px] text-zinc-500 uppercase">{exp.date}</span>
                    </div>
                    <p className="text-[11px] text-zinc-700 italic mb-2">{exp.company}</p>
                    <ul className="list-disc pl-5 text-[11px] text-zinc-700 space-y-1 marker:text-zinc-400">
                      {(exp.desc || '').split('\n').map((line, idx) => (
                        line.trim() && <li key={idx} className="leading-relaxed">{line}</li>
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* PROJECTS */}
        {projects.length > 0 && (
          <div>
            <SectionTitle title="Selected Projects" />
            <div className="space-y-4">
              {projects.map((proj, i) => (
                <React.Fragment key={proj.id || i}>
                  {proj.pageBreak && <div className="manual-page-break" />}
                  <div>
                    <span className="text-xs font-bold text-zinc-900">{proj.name}</span>
                    <p className="text-[11px] text-zinc-700 leading-relaxed mt-1 whitespace-pre-wrap">{proj.desc}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* SKILLS */}
        {(() => {
          const allSkills = [...(core || []), ...(technical || []), ...(soft || [])];
          if (allSkills.length > 0) {
            return (
              <div>
                <SectionTitle title="Skills & Competencies" />
                <p className="text-[11px] text-zinc-700 leading-relaxed">{allSkills.join(' • ')}</p>
              </div>
            );
          }
          return null;
        })()}

        {/* CERTIFICATIONS & AWARDS */}
        {(certifications.length > 0 || awards.length > 0) && (
          <div>
            <SectionTitle title="Honors & Certifications" />
            <ul className="list-disc pl-5 text-[11px] text-zinc-700 space-y-1 marker:text-zinc-400">
              {certifications.map((cert, i) => <li key={`cert-${i}`}><span className="font-bold">{cert.name}</span> — {cert.issuer}</li>)}
              {awards.map((aw, i) => <li key={`aw-${i}`}><span className="font-bold">{aw.name}</span> — {aw.issuer}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Academic;