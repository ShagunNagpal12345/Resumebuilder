import React from 'react';
import FormattedTextBlock from '../FormattedTextBlock';
import PreviewEditableField from '../PreviewEditableField';

const SoftwareEngineer = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    awards = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="flex w-full min-h-[1100px] bg-white font-sans">
      
      {/* MAIN CONTENT (LEFT) */}
      <main className="w-[66%] p-10 pt-14">
          
          <header className="mb-10">
              <PreviewEditableField path="personal.name" label="Full Name" as="h1" className="text-5xl font-bold uppercase text-slate-800 tracking-tight mb-2">
                {personal.name}
              </PreviewEditableField>
              <PreviewEditableField path="personal.title" label="Job Title" as="p" className="text-xl text-teal-600 font-medium">
                {personal.title}
              </PreviewEditableField>
              
              <div className="flex gap-4 mt-4 text-xs font-bold text-slate-400">
                  {personal.phone && <span>{personal.phone}</span>}
                  {personal.email && <span>{personal.email}</span>}
                  {personal.linkedin && <span>{personal.linkedin}</span>}
              </div>
          </header>

          {personal.summary && (
              <section className="mb-10">
                  <h3 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-widest">Summary</h3>
                  <FormattedTextBlock
                    text={personal.summary}
                    editablePath="personal.summary"
                    editableLabel="Professional Summary"
                    plainClassName="text-sm text-slate-600 leading-6 whitespace-pre-wrap"
                    unorderedListClassName="ml-4 list-disc space-y-1 text-sm text-slate-600 leading-6"
                    orderedListClassName="ml-4 list-decimal space-y-1 text-sm text-slate-600 leading-6"
                  />
              </section>
          )}

          {experience.length > 0 && (
              <section className="mb-10">
                  <h3 className="text-xs font-bold uppercase text-slate-400 mb-6 tracking-widest">Professional Experience</h3>
                  <div className="space-y-8">
                      {experience.map((exp, index) => (
                          <div key={exp.id}>
                              <div className="flex justify-between items-baseline mb-1">
                                  <PreviewEditableField path={`experience[${index}].role`} label="Experience Role" as="h4" className="font-bold text-lg text-slate-900">
                                    {exp.role}
                                  </PreviewEditableField>
                                  <PreviewEditableField path={`experience[${index}].date`} label="Experience Date" className="text-xs font-bold text-slate-400">
                                    {exp.date}
                                  </PreviewEditableField>
                              </div>
                              <PreviewEditableField path={`experience[${index}].company`} label="Experience Company" as="div" className="text-sm font-bold text-teal-600 mb-2">
                                {exp.company}
                              </PreviewEditableField>
                              <FormattedTextBlock
                                text={exp.desc}
                                editablePath={`experience[${index}].desc`}
                                editableLabel="Experience Description"
                                plainClassName="text-sm text-slate-600 leading-6 whitespace-pre-wrap"
                                unorderedListClassName="ml-4 list-disc space-y-1 text-sm text-slate-600"
                                orderedListClassName="ml-4 list-decimal space-y-1 text-sm text-slate-600"
                              />
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {education.length > 0 && (
              <section>
                  <h3 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-widest">Education</h3>
                  {education.map(edu => (
                      <div key={edu.id} className="mb-4">
                          <div className="font-bold text-slate-900">{edu.school}</div>
                          <div className="text-sm text-teal-600">{edu.degree}</div>
                          <div className="text-xs text-slate-400 mt-1">{edu.date}</div>
                      </div>
                  ))}
              </section>
          )}
      </main>

      {/* RIGHT SIDEBAR - DARK TEAL */}
      <aside className="w-[34%] bg-[#00695c] text-white p-8 pt-12">
          {personal.photo && (
              <div className="mb-10 text-center">
                  <img src={personal.photo} alt="Profile" className="w-32 h-32 rounded-lg object-cover mx-auto border-4 border-teal-400/30" />
              </div>
          )}

          <div className="space-y-10">
              
              {awards.length > 0 && (
                  <section>
                      <h3 className="text-teal-200 font-bold uppercase text-xs mb-4 border-b border-teal-500 pb-1">Achievements</h3>
                      {awards.map(a => (
                          <div key={a.id} className="mb-3">
                              <div className="font-bold text-sm">{a.name}</div>
                              <div className="text-xs text-teal-100 opacity-80">{a.issuer}</div>
                          </div>
                      ))}
                  </section>
              )}

              <section>
                  <h3 className="text-teal-200 font-bold uppercase text-xs mb-4 border-b border-teal-500 pb-1">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                       {technical.map((s, i) => (
                          <span key={i} className="text-white font-mono bg-teal-800 px-2 py-1 rounded">{s}</span>
                       ))}
                  </div>
              </section>
              
              <section>
                  <h3 className="text-teal-200 font-bold uppercase text-xs mb-4 border-b border-teal-500 pb-1">Strengths</h3>
                  <div className="flex flex-col gap-2 text-sm">
                       {soft.map((s, i) => (
                          <div key={i} className="flex items-center gap-2">
                              <span className="text-teal-300">★</span> {s}
                          </div>
                       ))}
                  </div>
              </section>

          </div>
      </aside>

    </div>
  );
};

export default SoftwareEngineer;
