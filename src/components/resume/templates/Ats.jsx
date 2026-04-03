import React from 'react';
import FormattedTextBlock from '../FormattedTextBlock';
import PreviewEditableField from '../PreviewEditableField';

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
        <PreviewEditableField path="personal.name" label="Full Name" as="h1" className="text-3xl font-bold text-black uppercase tracking-tight mb-2">
          {personal.name || 'Your Name'}
        </PreviewEditableField>
        
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
            <FormattedTextBlock
              text={personal.summary}
              editablePath="personal.summary"
              editableLabel="Professional Summary"
              plainClassName="text-[11px] leading-relaxed text-black text-justify whitespace-pre-wrap"
              unorderedListClassName="pl-5 list-disc space-y-1 text-[11px] leading-relaxed text-black"
              orderedListClassName="pl-5 list-decimal space-y-1 text-[11px] leading-relaxed text-black"
            />
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
                      <div className="inline">
                        <PreviewEditableField path={`experience[${i}].role`} label="Experience Role" className="inline">
                          {exp.role}
                        </PreviewEditableField>
                        {exp.company ? (
                          <>
                            {', '}
                            <PreviewEditableField path={`experience[${i}].company`} label="Experience Company" className="inline">
                              {exp.company}
                            </PreviewEditableField>
                          </>
                        ) : null}
                      </div>
                      <PreviewEditableField path={`experience[${i}].date`} label="Experience Date" className="shrink-0">
                        {exp.date}
                      </PreviewEditableField>
                    </div>
                    <FormattedTextBlock
                      text={exp.desc}
                      editablePath={`experience[${i}].desc`}
                      editableLabel="Experience Description"
                      plainClassName="text-[11px] text-black leading-relaxed whitespace-pre-wrap"
                      unorderedListClassName="pl-5 list-disc space-y-1 text-[11px] text-black"
                      orderedListClassName="pl-5 list-decimal space-y-1 text-[11px] text-black"
                    />
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
                    <FormattedTextBlock
                      text={proj.desc}
                      editablePath={`projects[${i}].desc`}
                      editableLabel="Project Description"
                      plainClassName="text-[11px] text-black leading-relaxed whitespace-pre-wrap"
                      unorderedListClassName="pl-5 list-disc space-y-1 text-[11px] text-black"
                      orderedListClassName="pl-5 list-decimal space-y-1 text-[11px] text-black"
                    />
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
