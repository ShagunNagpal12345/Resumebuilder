import React from 'react';

const DataScientist = ({ data }) => {
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
    <div className="p-12 font-sans text-slate-900 bg-slate-50 min-h-[1100px] flex justify-center">
      
      {/* CARD CONTAINER */}
      <div className="bg-white w-full max-w-4xl shadow-xl rounded-[2rem] p-12 relative overflow-hidden">
        
        {/* HEADER */}
        <header className="mb-10 border-b border-slate-100 pb-8">
            <h1 className="text-4xl font-black uppercase tracking-tight mb-1">{personal.name}</h1>
            <p className="text-lg text-blue-600 font-bold mb-4">{personal.title}</p>
            
            <div className="flex flex-wrap gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                {personal.phone && <span>{personal.phone}</span>}
                {personal.email && <span>{personal.email}</span>}
                {personal.linkedin && <span>{personal.linkedin}</span>}
            </div>
        </header>

        <div className="grid grid-cols-12 gap-10">
            
            {/* MAIN CONTENT */}
            <div className="col-span-8 space-y-10">
                {personal.summary && (
                    <section>
                        <h3 className="font-bold uppercase text-xs border-b-2 border-slate-900 mb-3 pb-1 inline-block">Summary</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{personal.summary}</p>
                    </section>
                )}

                {experience.length > 0 && (
                    <section>
                        <h3 className="font-bold uppercase text-xs border-b-2 border-slate-900 mb-6 pb-1 inline-block">Experience</h3>
                        <div className="space-y-8">
                            {experience.map(exp => (
                                <div key={exp.id}>
                                    <h4 className="font-bold text-lg text-slate-900">{exp.role}</h4>
                                    <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-2">
                                        <span>{exp.company}</span> • <span>{exp.date}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">{exp.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* SIDEBAR (Right) */}
            <div className="col-span-4 space-y-10">
                
                <section>
                    <h3 className="font-bold uppercase text-xs border-b-2 border-slate-900 mb-4 pb-1 inline-block">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {technical.map((s, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg">{s}</span>
                        ))}
                    </div>
                </section>

                {awards.length > 0 && (
                    <section>
                        <h3 className="font-bold uppercase text-xs border-b-2 border-slate-900 mb-4 pb-1 inline-block">Accomplishments</h3>
                        <ul className="space-y-3">
                            {awards.map(a => (
                                <li key={a.id} className="text-sm text-slate-600 leading-snug">
                                    <strong className="block text-slate-900">{a.name}</strong>
                                    <span className="text-xs">{a.issuer}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <section>
                    <h3 className="font-bold uppercase text-xs border-b-2 border-slate-900 mb-4 pb-1 inline-block">Strengths</h3>
                    <div className="space-y-3">
                        {soft.map((s, i) => (
                             <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                 <span className="text-blue-500 mt-1">✈</span> {s}
                             </div>
                        ))}
                    </div>
                </section>

                {education.length > 0 && (
                     <section>
                        <h3 className="font-bold uppercase text-xs border-b-2 border-slate-900 mb-4 pb-1 inline-block">Education</h3>
                        {education.map(edu => (
                            <div key={edu.id} className="mb-3">
                                <div className="font-bold text-sm">{edu.school}</div>
                                <div className="text-xs text-slate-500">{edu.degree}</div>
                            </div>
                        ))}
                     </section>
                )}

            </div>
        </div>
      </div>
    </div>
  );
};

export default DataScientist;