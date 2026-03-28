import React from 'react';

const Accounting = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    awards = [],
    languages = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="flex w-full min-h-[1100px] bg-white font-sans text-slate-800">
      
      {/* LEFT SIDEBAR - TEAL */}
      <aside className="w-[35%] bg-[#006064] text-white p-8 pt-12 flex flex-col gap-8">
          <div className="text-center">
              <h1 className="text-2xl font-bold uppercase tracking-wide mb-2">{personal.name}</h1>
          </div>

          {/* STRENGTHS / SKILLS */}
          <section>
              <h3 className="text-teal-200 font-bold uppercase text-xs mb-4 border-b border-teal-500 pb-1">Strengths</h3>
              <div className="space-y-3 text-sm">
                  {[...technical, ...soft].map((s, i) => (
                      <div key={i} className="flex items-start gap-2">
                          <span className="text-teal-300">★</span> {s}
                      </div>
                  ))}
              </div>
          </section>

          {/* AWARDS */}
          {awards.length > 0 && (
              <section>
                  <h3 className="text-teal-200 font-bold uppercase text-xs mb-4 border-b border-teal-500 pb-1">Awards</h3>
                  <div className="space-y-3">
                      {awards.map(a => (
                          <div key={a.id}>
                              <div className="font-bold text-sm">🏆 {a.name}</div>
                              <div className="text-xs text-teal-100 opacity-80 pl-5">{a.issuer}</div>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {/* LANGUAGES */}
          {languages.length > 0 && (
              <section>
                  <h3 className="text-teal-200 font-bold uppercase text-xs mb-4 border-b border-teal-500 pb-1">Languages</h3>
                  <ul className="text-sm space-y-1">
                      {languages.map(l => <li key={l.id}>{l.name} - {l.level}</li>)}
                  </ul>
              </section>
          )}
      </aside>

      {/* RIGHT CONTENT */}
      <main className="w-[65%] p-10 pt-12">
          
          <header className="mb-10 border-b border-slate-200 pb-6">
              <h2 className="text-lg text-teal-700 font-bold uppercase tracking-wide mb-1">{personal.title}</h2>
              <div className="text-xs text-slate-500 font-medium">
                  {personal.email} | {personal.location}
              </div>
          </header>

          {personal.summary && (
              <section className="mb-10">
                  <h3 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-widest">Summary</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{personal.summary}</p>
              </section>
          )}

          {experience.length > 0 && (
              <section className="mb-10">
                  <h3 className="text-xs font-bold uppercase text-slate-400 mb-6 tracking-widest">Experience</h3>
                  <div className="space-y-8">
                      {experience.map(exp => (
                          <div key={exp.id}>
                              <div className="flex justify-between items-baseline mb-1">
                                  <h4 className="font-bold text-lg text-slate-900">{exp.role}</h4>
                                  <span className="text-xs font-bold text-slate-500">{exp.date}</span>
                              </div>
                              <div className="text-sm font-bold text-teal-700 mb-2">{exp.company}</div>
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
                  <h3 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-widest">Education</h3>
                  {education.map(edu => (
                      <div key={edu.id} className="mb-3">
                          <div className="font-bold text-sm text-slate-900">{edu.school}</div>
                          <div className="text-xs text-slate-500">{edu.degree}</div>
                          <div className="text-[10px] text-slate-400">{edu.date}</div>
                      </div>
                  ))}
              </section>
          )}
      </main>
    </div>
  );
};

export default Accounting;