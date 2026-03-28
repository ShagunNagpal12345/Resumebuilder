import React from 'react';

const Ats = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = []
  } = data || {};

  const SectionTitle = ({ title }) => (
    <h2 className="mb-2 mt-6 border-b-2 border-black pb-1 text-sm font-bold uppercase tracking-widest text-black">
      {title}
    </h2>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] bg-white p-16 shadow-lg resume-preview-wrapper flex flex-col font-sans">
      
      {/* HEADER */}
      <div className="mb-6 shrink-0 text-center">
        <h1 className="text-3xl font-bold text-black uppercase tracking-tight mb-2">{personal.name || 'Your Name'}</h1>
        
        <div className="text-xs text-black font-medium space-x-2 mb-1">
          {personal.location && <span>{personal.location} |</span>}
          {personal.phone && <span>{personal.phone} |</span>}
          {personal.email && <span>{personal.email}</span>}
        </div>
        {personal.linkedin && <div className="text-xs text-black font-medium">{personal.linkedin}</div>}
      </div>

      <div className="flex-1 space-y-2">
        
        {/* SUMMARY */}
        {personal.summary && (
          <section>
            <SectionTitle title="Professional Summary" />
            <p className="text-[11px] leading-relaxed text-black text-justify whitespace-pre-wrap">{personal.summary}</p>
          </section>
        )}

        {/* SKILLS */}
        {skills && Object.values(skills).flat().length > 0 && (
          <section>
            <SectionTitle title="Skills" />
            <p className="text-[11px] text-black leading-relaxed">
              {[...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])].join(', ')}
            </p>
          </section>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <section>
            <SectionTitle title="Experience" />
            <div className="space-y-4">
              {experience.map((exp, i) => (
                <React.Fragment key={exp.id || i}>
                  {exp.pageBreak && <div className="manual-page-break" />}
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-[12px] text-black mb-1">
                      <span>{exp.role}, {exp.company}</span>
                      <span className="shrink-0">{exp.date}</span>
                    </div>
                    <ul className="list-disc pl-5 text-[11px] text-black space-y-1">
                      {(exp.desc || '').split('\n').map((line, idx) => (
                        line.trim() && <li key={idx} className="leading-relaxed">{line}</li>
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <section>
            <SectionTitle title="Education" />
            <div className="space-y-3">
              {education.map((edu, i) => (
                <React.Fragment key={edu.id || i}>
                  {edu.pageBreak && <div className="manual-page-break" />}
                  <div className="flex justify-between items-baseline text-[12px] text-black mb-1">
                    <div>
                      <span className="font-bold">{edu.degree}</span>
                      <span>, {edu.school}</span>
                    </div>
                    <span className="shrink-0 font-bold">{edu.date}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {projects.length > 0 && (
          <section>
            <SectionTitle title="Projects" />
            <div className="space-y-3">
              {projects.map((proj, i) => (
                <React.Fragment key={proj.id || i}>
                  {proj.pageBreak && <div className="manual-page-break" />}
                  <div>
                    <div className="font-bold text-[12px] text-black mb-1">{proj.name}</div>
                    <p className="text-[11px] text-black leading-relaxed whitespace-pre-wrap">{proj.desc}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>
        )}

        {/* CERTIFICATIONS */}
        {certifications.length > 0 && (
          <section>
            <SectionTitle title="Certifications" />
            <div className="space-y-1 text-[11px] text-black">
              {certifications.map((cert, i) => (
                <div key={cert.id || i}>
                   <span className="font-bold">{cert.name}</span> - {cert.issuer}
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default Ats;