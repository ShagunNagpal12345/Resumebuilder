import React from 'react';

const BusinessAnalyst = ({ data }) => {
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
    <div className="flex w-full min-h-[1100px] bg-white font-sans text-slate-800">
      
      {/* LEFT SIDEBAR - FOREST GREEN */}
      <aside className="w-[35%] bg-[#2e7d32] text-white p-8 flex flex-col gap-8">
         <div className="text-center mb-4">
             <h1 className="text-3xl font-bold uppercase tracking-wide leading-none mb-2">{personal.name}</h1>
         </div>

         {/* ACHIEVEMENTS (Mapped from Awards) */}
         {awards.length > 0 && (
             <section>
                 <h3 className="text-green-200 font-bold uppercase tracking-widest text-xs mb-4 border-b border-green-600 pb-1">Achievements</h3>
                 <div className="space-y-4">
                     {awards.map(a => (
                         <div key={a.id}>
                             <div className="font-bold text-sm">{a.name}</div>
                             <div className="text-xs text-green-100">{a.issuer}</div>
                         </div>
                     ))}
                 </div>
             </section>
         )}

         {/* SKILLS */}
         <section>
             <h3 className="text-green-200 font-bold uppercase tracking-widest text-xs mb-4 border-b border-green-600 pb-1">Skills</h3>
             <div className="flex flex-wrap gap-2 text-xs">
                 {[...technical, ...soft].map((s, i) => (
                     <span key={i} className="bg-green-800 px-2 py-1 rounded border border-green-700">{s}</span>
                 ))}
             </div>
         </section>

         {/* CERTIFICATIONS */}
         {certifications.length > 0 && (
             <section>
                 <h3 className="text-green-200 font-bold uppercase tracking-widest text-xs mb-4 border-b border-green-600 pb-1">Certification</h3>
                 <div className="space-y-3">
                     {certifications.map(c => (
                         <div key={c.id}>
                             <div className="font-bold text-sm">{c.name}</div>
                             <div className="text-xs text-green-100">{c.issuer}</div>
                         </div>
                     ))}
                 </div>
             </section>
         )}

         {/* PROJECTS */}
         {projects.length > 0 && (
             <section>
                 <h3 className="text-green-200 font-bold uppercase tracking-widest text-xs mb-4 border-b border-green-600 pb-1">Projects</h3>
                 <div className="space-y-3">
                     {projects.map(p => (
                         <div key={p.id}>
                             <div className="font-bold text-sm">{p.name}</div>
                             <div className="text-[10px] text-green-100 leading-tight">{p.desc}</div>
                         </div>
                     ))}
                 </div>
             </section>
         )}
      </aside>

      {/* RIGHT CONTENT */}
      <main className="w-[65%] p-10 bg-white">
          
          {/* HEADER INFO */}
          <div className="mb-8 text-sm text-slate-500 font-medium flex flex-wrap gap-4 border-b border-slate-200 pb-6">
              {personal.title && <span className="text-green-700 font-bold uppercase">{personal.title}</span>}
              <span>|</span>
              {personal.email && <span>{personal.email}</span>}
              <span>|</span>
              {personal.location && <span>{personal.location}</span>}
          </div>

          {personal.summary && (
              <section className="mb-10">
                  <h3 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-3">Summary</h3>
                  <p className="text-slate-700 leading-relaxed text-sm">{personal.summary}</p>
              </section>
          )}

          {experience.length > 0 && (
              <section className="mb-10">
                  <h3 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-6">Experience</h3>
                  <div className="space-y-8">
                      {experience.map(exp => (
                          <div key={exp.id}>
                              <div className="flex justify-between items-baseline mb-1">
                                  <h4 className="font-bold text-lg text-slate-800">{exp.role}</h4>
                                  <span className="text-xs font-bold text-slate-400">{exp.date}</span>
                              </div>
                              <div className="text-sm font-bold text-green-700 mb-2 uppercase">{exp.company}</div>
                              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                          </div>
                      ))}
                  </div>
              </section>
          )}

          {education.length > 0 && (
              <section>
                  <h3 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">Education</h3>
                  {education.map(edu => (
                      <div key={edu.id} className="mb-3">
                          <div className="font-bold text-slate-800 text-sm">{edu.school}</div>
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

export default BusinessAnalyst;