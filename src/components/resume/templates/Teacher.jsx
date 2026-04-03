import React from 'react';
import FormattedTextBlock from '../FormattedTextBlock';

const Teacher = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    certifications = [],
    projects = [] // Using projects for "Publications" or "Volunteering"
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="flex w-full min-h-[1100px] bg-white font-serif text-slate-800">
      
      {/* MAIN CONTENT */}
      <main className="w-[66%] p-10 pt-14">
          <header className="mb-10 border-b border-slate-200 pb-6">
              <h1 className="text-4xl font-bold uppercase text-slate-900 mb-2">{personal.name}</h1>
              <p className="text-lg text-slate-600 italic">{personal.title}</p>
              
              <div className="flex gap-6 mt-4 text-xs font-sans text-slate-400">
                  {personal.phone && <span>{personal.phone}</span>}
                  {personal.email && <span>{personal.email}</span>}
                  {personal.location && <span>{personal.location}</span>}
              </div>
          </header>

          {experience.length > 0 && (
              <section className="mb-10">
                  <h3 className="font-sans font-bold uppercase text-xs text-slate-400 mb-6 tracking-widest border-b border-slate-200 pb-1">Experience</h3>
                  <div className="space-y-8">
                      {experience.map(exp => (
                          <div key={exp.id}>
                              <h4 className="font-bold text-lg text-slate-800">{exp.role}</h4>
                              <div className="font-sans text-xs font-bold text-slate-500 mb-2">{exp.company} | {exp.date}</div>
                              <FormattedTextBlock
                                text={exp.desc}
                                plainClassName="text-sm text-slate-600 whitespace-pre-wrap"
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
                  <h3 className="font-sans font-bold uppercase text-xs text-slate-400 mb-4 tracking-widest border-b border-slate-200 pb-1">Education</h3>
                  {education.map(edu => (
                      <div key={edu.id} className="mb-4">
                          <div className="font-bold text-lg text-slate-900">{edu.degree}</div>
                          <div className="text-sm text-slate-600">{edu.school}</div>
                          <div className="font-sans text-xs text-slate-400 mt-1">{edu.date}</div>
                      </div>
                  ))}
              </section>
          )}
      </main>

      {/* SIDEBAR */}
      <aside className="w-[34%] bg-stone-50 p-8 pt-14 border-l border-stone-100 font-sans">
          
          {certifications.length > 0 && (
              <section className="mb-10">
                  <h3 className="font-bold uppercase text-xs text-slate-400 mb-4 tracking-widest border-b border-stone-200 pb-1">Certifications</h3>
                  <div className="space-y-4">
                      {certifications.map(c => (
                          <div key={c.id}>
                              <div className="font-bold text-sm text-slate-800">{c.name}</div>
                              <div className="text-xs text-slate-500">{c.issuer}</div>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          <section className="mb-10">
              <h3 className="font-bold uppercase text-xs text-slate-400 mb-4 tracking-widest border-b border-stone-200 pb-1">Skills</h3>
              <div className="flex flex-wrap gap-2">
                  {[...technical, ...soft].map((s, i) => (
                      <span key={i} className="bg-white border border-stone-200 px-2 py-1 text-xs rounded text-slate-600">{s}</span>
                  ))}
              </div>
          </section>

          {projects.length > 0 && (
              <section>
                  <h3 className="font-bold uppercase text-xs text-slate-400 mb-4 tracking-widest border-b border-stone-200 pb-1">Volunteering & Projects</h3>
                  <div className="space-y-4">
                      {projects.map(p => (
                          <div key={p.id}>
                              <div className="font-bold text-sm text-slate-800">{p.name}</div>
                              <FormattedTextBlock
                                text={p.desc}
                                plainClassName="text-xs text-slate-500 leading-snug whitespace-pre-wrap"
                                unorderedListClassName="ml-4 list-disc space-y-1 text-xs text-slate-500 leading-snug"
                                orderedListClassName="ml-4 list-decimal space-y-1 text-xs text-slate-500 leading-snug"
                              />
                          </div>
                      ))}
                  </div>
              </section>
          )}

      </aside>
    </div>
  );
};

export default Teacher;
