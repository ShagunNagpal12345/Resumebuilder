import React from 'react';

const Designer = ({ data }) => {
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
    <div className="p-10 font-sans text-slate-800 bg-white min-h-[1100px]">
      
      {/* HEADER WITH PHOTO */}
      <header className="flex justify-between items-start mb-12 border-b border-slate-100 pb-8">
          <div className="max-w-lg">
              <h1 className="text-5xl font-bold uppercase text-slate-900 mb-2 tracking-tighter">{personal.name}</h1>
              <p className="text-lg text-orange-500 font-medium mb-4">{personal.title}</p>
              <div className="text-xs font-medium text-slate-400 space-y-1">
                  {personal.email && <div>✉ {personal.email}</div>}
                  {personal.linkedin && <div>🔗 {personal.linkedin}</div>}
                  {personal.location && <div>📍 {personal.location}</div>}
              </div>
          </div>
          {personal.photo && (
              <img src={personal.photo} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-slate-100 shadow-md" />
          )}
      </header>

      <div className="grid grid-cols-12 gap-10">
          
          {/* MAIN COL */}
          <div className="col-span-8 space-y-10">
              
              {personal.summary && (
                  <section>
                      <h3 className="font-bold uppercase text-xs text-slate-400 mb-3 tracking-widest">About</h3>
                      <p className="text-sm leading-relaxed text-slate-700">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="font-bold uppercase text-xs text-slate-400 mb-6 tracking-widest">Experience</h3>
                      <div className="space-y-10 border-l-2 border-orange-100 pl-6">
                          {experience.map(exp => (
                              <div key={exp.id} className="relative">
                                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white border-2 border-orange-400 rounded-full"></div>
                                  <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                                  <div className="text-sm font-bold text-orange-500 mb-2">{exp.company}</div>
                                  <div className="text-xs font-medium text-slate-400 mb-3">{exp.date}</div>
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

              {projects.length > 0 && (
                  <section>
                      <h3 className="font-bold uppercase text-xs text-slate-400 mb-4 tracking-widest">Portfolio Highlights</h3>
                      <div className="grid grid-cols-1 gap-4">
                          {projects.map(p => (
                              <div key={p.id} className="bg-slate-50 p-4 rounded-lg">
                                  <div className="font-bold text-slate-900 text-sm">{p.name}</div>
                                  <div className="text-xs text-slate-500 mt-1">{p.desc}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* SIDEBAR */}
          <div className="col-span-4 space-y-10">
              
              {awards.length > 0 && (
                  <section>
                      <h3 className="font-bold uppercase text-xs text-slate-400 mb-4 tracking-widest">Achievements</h3>
                      <div className="space-y-4">
                          {awards.map(a => (
                              <div key={a.id} className="flex gap-3">
                                  <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                                  <div>
                                      <div className="font-bold text-sm text-slate-800">{a.name}</div>
                                      <div className="text-xs text-slate-500">{a.issuer}</div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              <section>
                  <h3 className="font-bold uppercase text-xs text-slate-400 mb-4 tracking-widest">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg shadow-sm">{s}</span>
                      ))}
                  </div>
              </section>

              {education.length > 0 && (
                  <section>
                      <h3 className="font-bold uppercase text-xs text-slate-400 mb-4 tracking-widest">Education</h3>
                      {education.map(edu => (
                          <div key={edu.id} className="mb-4">
                              <div className="font-bold text-sm text-slate-900">{edu.school}</div>
                              <div className="text-xs text-orange-500 font-medium">{edu.degree}</div>
                              <div className="text-[10px] text-slate-400 mt-1">{edu.date}</div>
                          </div>
                      ))}
                  </section>
              )}

          </div>

      </div>
    </div>
  );
};

export default Designer;