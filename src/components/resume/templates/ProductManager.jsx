import React from 'react';

const ProductManager = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    awards = []
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="p-12 font-sans text-slate-800 bg-white min-h-[1100px]">
      
      {/* HEADER */}
      <header className="mb-10 flex justify-between items-start">
          <div>
              <h1 className="text-4xl font-black uppercase tracking-tight text-slate-900 mb-1">{personal.name}</h1>
              <p className="text-lg text-indigo-600 font-bold">{personal.title}</p>
          </div>
          <div className="text-right text-xs font-medium text-slate-500 space-y-1">
              {personal.email && <div>{personal.email}</div>}
              {personal.phone && <div>{personal.phone}</div>}
              {personal.location && <div>{personal.location}</div>}
              {personal.linkedin && <div className="text-indigo-500">{personal.linkedin}</div>}
          </div>
      </header>

      <div className="grid grid-cols-12 gap-12">
          
          {/* LEFT COL */}
          <div className="col-span-8 space-y-10">
              
              {personal.summary && (
                  <section>
                      <h3 className="font-black text-sm uppercase border-b-4 border-slate-800 mb-4 pb-1">Summary</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{personal.summary}</p>
                  </section>
              )}

              {experience.length > 0 && (
                  <section>
                      <h3 className="font-black text-sm uppercase border-b-4 border-slate-800 mb-6 pb-1">Experience</h3>
                      <div className="space-y-8">
                          {experience.map(exp => (
                              <div key={exp.id}>
                                  <div className="flex justify-between items-baseline mb-1">
                                      <h4 className="font-bold text-lg text-slate-900">{exp.role}</h4>
                                      <span className="text-xs font-bold text-slate-400">{exp.date}</span>
                                  </div>
                                  <div className="text-sm font-bold text-indigo-600 mb-2 uppercase">{exp.company}</div>
                                  <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}
          </div>

          {/* RIGHT COL */}
          <div className="col-span-4 space-y-10">
              
              {awards.length > 0 && (
                  <section>
                      <h3 className="font-black text-sm uppercase border-b-4 border-slate-800 mb-4 pb-1">Achievements</h3>
                      <div className="space-y-3">
                          {awards.map(a => (
                              <div key={a.id} className="text-sm text-slate-600">
                                  <span className="text-indigo-500 mr-2">🏆</span> 
                                  <span className="font-bold">{a.name}</span>
                                  <p className="text-xs text-slate-400 ml-6">{a.issuer}</p>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

              <section>
                  <h3 className="font-black text-sm uppercase border-b-4 border-slate-800 mb-4 pb-1">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                      {[...technical, ...soft].map((s, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded">{s}</span>
                      ))}
                  </div>
              </section>

              {certifications.length > 0 && (
                  <section>
                      <h3 className="font-black text-sm uppercase border-b-4 border-slate-800 mb-4 pb-1">Certification</h3>
                      <div className="space-y-2">
                          {certifications.map(c => (
                              <div key={c.id}>
                                  <div className="font-bold text-indigo-600 text-sm">{c.name}</div>
                                  <div className="text-xs text-slate-500">{c.issuer}</div>
                              </div>
                          ))}
                      </div>
                  </section>
              )}

               {education.length > 0 && (
                  <section>
                      <h3 className="font-black text-sm uppercase border-b-4 border-slate-800 mb-4 pb-1">Education</h3>
                      {education.map(edu => (
                          <div key={edu.id} className="mb-3">
                              <div className="font-bold text-slate-900 text-sm">{edu.school}</div>
                              <div className="text-xs text-slate-500 italic">{edu.degree}</div>
                              <div className="text-[10px] text-slate-400">{edu.date}</div>
                          </div>
                      ))}
                  </section>
              )}
          </div>
      </div>
    </div>
  );
};

export default ProductManager;