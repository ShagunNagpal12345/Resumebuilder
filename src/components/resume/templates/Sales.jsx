import React from 'react';

const Sales = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    certifications = [],
    awards = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="flex w-full min-h-[1100px] bg-white font-sans text-slate-900">
      
      {/* MAIN CONTENT (Left) */}
      <main className="w-[68%] p-10 pt-12">
          
          <header className="mb-10">
              <h1 className="text-4xl font-bold text-slate-800 uppercase tracking-tight mb-1">{personal.name}</h1>
              <p className="text-lg text-blue-600 font-medium mb-4">{personal.title}</p>
              
              <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                  {personal.email && <span>{personal.email}</span>}
                  {personal.linkedin && <span>{personal.linkedin}</span>}
                  {personal.location && <span>{personal.location}</span>}
              </div>
          </header>

          {personal.summary && (
              <section className="mb-10">
                  <h3 className="text-xs font-bold uppercase border-b-2 border-slate-800 mb-3 pb-1">Summary</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{personal.summary}</p>
              </section>
          )}

          {experience.length > 0 && (
              <section className="mb-10">
                  <h3 className="text-xs font-bold uppercase border-b-2 border-slate-800 mb-6 pb-1">Experience</h3>
                  <div className="space-y-8">
                      {experience.map(exp => (
                          <div key={exp.id}>
                              <div className="flex justify-between items-baseline mb-1">
                                  <h4 className="font-bold text-lg text-slate-800">{exp.role}</h4>
                                  <span className="text-xs text-slate-500">{exp.date}</span>
                              </div>
                              <div className="text-sm font-bold text-blue-600 mb-2">{exp.company}</div>
                              <ul className="list-disc ml-4 text-sm text-slate-600 space-y-1">
                                  {exp.desc.split('\n').map((line, i) => (
                                      line.trim() && <li key={i}>{line}</li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {education.length > 0 && (
              <section>
                  <h3 className="text-xs font-bold uppercase border-b-2 border-slate-800 mb-4 pb-1">Education</h3>
                  {education.map(edu => (
                      <div key={edu.id} className="mb-3">
                          <div className="font-bold text-sm">{edu.school}</div>
                          <div className="text-xs text-slate-500 italic">{edu.degree}</div>
                      </div>
                  ))}
              </section>
          )}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="w-[32%] bg-slate-50 p-8 pt-12 border-l border-slate-100">
          
          <section className="mb-10">
              <h3 className="text-xs font-bold uppercase border-b-2 border-slate-800 mb-4 pb-1">Skills</h3>
              <div className="flex flex-col gap-2">
                  {[...technical, ...soft].map((s, i) => (
                      <div key={i} className="text-sm font-medium text-slate-700 bg-white px-3 py-2 rounded shadow-sm border border-slate-100">
                          {s}
                      </div>
                  ))}
              </div>
          </section>

          {certifications.length > 0 && (
              <section className="mb-10">
                  <h3 className="text-xs font-bold uppercase border-b-2 border-slate-800 mb-4 pb-1">Certification</h3>
                  <div className="space-y-4">
                      {certifications.map(c => (
                          <div key={c.id}>
                              <div className="font-bold text-blue-600 text-sm">{c.name}</div>
                              <div className="text-xs text-slate-500">{c.issuer}</div>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {awards.length > 0 && (
              <section className="mb-10">
                  <h3 className="text-xs font-bold uppercase border-b-2 border-slate-800 mb-4 pb-1">Achievements</h3>
                  <div className="space-y-4">
                      {awards.map(a => (
                          <div key={a.id} className="flex gap-3">
                              <span className="text-blue-500 text-lg">💎</span>
                              <div>
                                  <div className="font-bold text-sm text-slate-800">{a.name}</div>
                                  <div className="text-xs text-slate-500 leading-tight">{a.issuer}</div>
                              </div>
                          </div>
                      ))}
                  </div>
              </section>
          )}

      </aside>
    </div>
  );
};

export default Sales;