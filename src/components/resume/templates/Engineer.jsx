import React from 'react';
import FormattedTextBlock from '../FormattedTextBlock';

const Engineer = ({ data }) => {
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
    <div className="flex w-full min-h-[1100px] bg-white font-sans text-slate-800">
      
      {/* MAIN CONTENT */}
      <main className="w-[68%] p-10 pt-12">
          
          <header className="mb-10">
              <h1 className="text-4xl font-bold text-slate-900 mb-1">{personal.name}</h1>
              <p className="text-md text-blue-600 font-bold uppercase tracking-wide">{personal.title}</p>
              
              <div className="mt-3 flex gap-4 text-xs font-medium text-slate-500">
                  {personal.phone && <span>{personal.phone}</span>}
                  {personal.email && <span>{personal.email}</span>}
                  {personal.location && <span>{personal.location}</span>}
              </div>
          </header>

          {personal.summary && (
              <section className="mb-10 border-t border-slate-200 pt-6">
                  <h3 className="font-bold uppercase text-xs mb-3 text-slate-400">Summary</h3>
                  <FormattedTextBlock
                    text={personal.summary}
                    plainClassName="text-sm leading-relaxed whitespace-pre-wrap"
                    unorderedListClassName="ml-4 list-disc space-y-1 text-sm leading-relaxed"
                    orderedListClassName="ml-4 list-decimal space-y-1 text-sm leading-relaxed"
                  />
              </section>
          )}

          {experience.length > 0 && (
              <section className="mb-10 border-t border-slate-200 pt-6">
                  <h3 className="font-bold uppercase text-xs mb-6 text-slate-400">Experience</h3>
                  <div className="space-y-8">
                      {experience.map(exp => (
                          <div key={exp.id}>
                              <h4 className="font-bold text-lg text-slate-900">{exp.role}</h4>
                              <div className="text-xs font-bold text-blue-600 mb-2 uppercase">{exp.company} | {exp.date}</div>
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
              <section className="border-t border-slate-200 pt-6">
                  <h3 className="font-bold uppercase text-xs mb-4 text-slate-400">Education</h3>
                  {education.map(edu => (
                      <div key={edu.id} className="mb-3">
                          <div className="font-bold text-sm text-slate-900">{edu.school}</div>
                          <div className="text-xs text-slate-600">{edu.degree}</div>
                          <div className="text-xs text-slate-400">{edu.date}</div>
                      </div>
                  ))}
              </section>
          )}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="w-[32%] bg-white p-8 pt-12 border-l border-slate-200">
          
          <section className="mb-8">
              <h3 className="font-bold uppercase text-xs mb-4 border-b-2 border-slate-900 pb-1">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                  {technical.map((s, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded border border-slate-200">{s}</span>
                  ))}
              </div>
          </section>

          <section className="mb-8">
              <h3 className="font-bold uppercase text-xs mb-4 border-b-2 border-slate-900 pb-1">Strengths</h3>
              <div className="space-y-2">
                  {soft.map((s, i) => (
                      <div key={i} className="text-sm font-medium flex items-start gap-2">
                          <span className="text-blue-500 mt-1">⚡</span> {s}
                      </div>
                  ))}
              </div>
          </section>

          {awards.length > 0 && (
              <section className="mb-8">
                  <h3 className="font-bold uppercase text-xs mb-4 border-b-2 border-slate-900 pb-1">Achievements</h3>
                  <div className="space-y-3">
                      {awards.map(a => (
                          <div key={a.id}>
                              <div className="font-bold text-sm text-slate-800">{a.name}</div>
                              <div className="text-xs text-slate-500">{a.issuer}</div>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {projects.length > 0 && (
              <section>
                  <h3 className="font-bold uppercase text-xs mb-4 border-b-2 border-slate-900 pb-1">Projects</h3>
                  <div className="space-y-3">
                      {projects.map(p => (
                          <div key={p.id}>
                              <div className="font-bold text-sm text-slate-800">{p.name}</div>
                              <FormattedTextBlock
                                text={p.desc}
                                plainClassName="text-xs text-slate-500 leading-tight whitespace-pre-wrap"
                                unorderedListClassName="ml-4 list-disc space-y-1 text-xs text-slate-500 leading-tight"
                                orderedListClassName="ml-4 list-decimal space-y-1 text-xs text-slate-500 leading-tight"
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

export default Engineer;
