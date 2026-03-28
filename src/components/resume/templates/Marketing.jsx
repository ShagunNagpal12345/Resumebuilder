import React from 'react';

const Marketing = ({ data }) => {
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
      <aside className="w-[35%] bg-[#004d40] text-white p-8 pt-12 flex flex-col gap-10">
          <div className="text-center border-b border-teal-800 pb-8">
              <h1 className="text-3xl font-bold uppercase tracking-wide mb-2">{personal.name}</h1>
          </div>

          {/* STRENGTHS */}
          <section>
              <h3 className="text-teal-200 font-bold uppercase text-xs mb-4 border-b border-teal-600 pb-1">Strengths</h3>
              <div className="space-y-4">
                  {[...technical, ...soft].map((s, i) => (
                      <div key={i} className="flex items-start gap-2">
                          <span className="text-teal-300 mt-0.5">✦</span> 
                          <span className="text-sm font-medium">{s}</span>
                      </div>
                  ))}
              </div>
          </section>

          {/* ACHIEVEMENTS */}
          {awards.length > 0 && (
              <section>
                  <h3 className="text-teal-200 font-bold uppercase text-xs mb-4 border-b border-teal-600 pb-1">Achievements</h3>
                  <div className="space-y-4">
                      {awards.map(a => (
                          <div key={a.id}>
                              <div className="flex items-center gap-2 font-bold text-sm">
                                  <span className="text-teal-300">★</span> {a.name}
                              </div>
                              <div className="text-xs text-teal-100 opacity-80 pl-6 leading-tight">{a.issuer}</div>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {/* LANGUAGES */}
          {languages.length > 0 && (
              <section>
                  <h3 className="text-teal-200 font-bold uppercase text-xs mb-4 border-b border-teal-600 pb-1">Languages</h3>
                  <div className="space-y-2 text-sm">
                      {languages.map(l => (
                          <div key={l.id} className="flex justify-between">
                              <span>{l.name}</span>
                              <span className="text-teal-300 opacity-80">{l.level}</span>
                          </div>
                      ))}
                  </div>
              </section>
          )}
      </aside>

      {/* RIGHT CONTENT */}
      <main className="w-[65%] p-10 pt-12">
          
          <header className="mb-10 text-right">
              <h2 className="text-xl text-teal-700 font-bold uppercase tracking-tight mb-2">{personal.title}</h2>
              <div className="text-xs text-slate-500 font-medium space-x-3">
                  <span>{personal.phone}</span>
                  <span>|</span>
                  <span>{personal.email}</span>
                  <span>|</span>
                  <span>{personal.location}</span>
              </div>
          </header>

          {personal.summary && (
              <section className="mb-10">
                  <h3 className="text-xs font-black uppercase text-slate-400 mb-3 tracking-widest">Summary</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{personal.summary}</p>
              </section>
          )}

          {experience.length > 0 && (
              <section className="mb-10">
                  <h3 className="text-xs font-black uppercase text-slate-400 mb-6 tracking-widest">Experience</h3>
                  <div className="space-y-8">
                      {experience.map(exp => (
                          <div key={exp.id}>
                              <div className="flex justify-between items-baseline mb-1">
                                  <h4 className="font-bold text-lg text-slate-900">{exp.role}</h4>
                                  <span className="text-xs font-bold text-slate-500">{exp.date}</span>
                              </div>
                              <div className="text-sm font-bold text-teal-700 mb-2 uppercase">{exp.company}</div>
                              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {education.length > 0 && (
              <section>
                  <h3 className="text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Education</h3>
                  {education.map(edu => (
                      <div key={edu.id} className="flex justify-between mb-3 border-b border-slate-100 pb-2 last:border-0">
                          <div>
                              <div className="font-bold text-sm text-slate-900">{edu.degree}</div>
                              <div className="text-xs text-slate-500">{edu.school}</div>
                          </div>
                          <div className="text-xs text-teal-600 font-bold">{edu.date}</div>
                      </div>
                  ))}
              </section>
          )}
      </main>
    </div>
  );
};

export default Marketing;