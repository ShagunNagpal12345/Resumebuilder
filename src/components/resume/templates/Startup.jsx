import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Startup = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const PURPLE = '#6366f1';
  const CYAN = '#06b6d4';

  const SectionTitle = ({ title }) => (
    <h2 className="mb-5 text-sm font-extrabold uppercase tracking-[0.2em]" style={{ color: PURPLE }}>
      {title}
    </h2>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] overflow-hidden bg-white shadow-xl resume-preview-wrapper flex flex-col font-sans">
      
      {/* HEADER */}
      <div className="relative px-12 py-12 text-white shrink-0 shadow-lg" style={{ background: `linear-gradient(135deg, ${PURPLE}, ${CYAN})` }}>
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)" }}></div>
        
        <div className="relative flex items-center gap-8">
          {personal.photo && <img src={personal.photo} alt="Profile" className="shrink-0 rounded-3xl border-4 border-white/30 object-cover shadow-xl" style={{ height: "6.5rem", width: "6.5rem" }}/>}
          <div>
            <h1 className="text-5xl font-black tracking-tighter uppercase drop-shadow-md break-words leading-none mb-2">{personal.name || 'Your Name'}</h1>
            {personal.title && <p className="text-lg font-bold text-white/90 uppercase tracking-widest break-words">{personal.title}</p>}
            
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-bold text-white/80 uppercase tracking-widest">
              {personal.email && <span className="flex items-center gap-1.5 break-all"><Mail size={14}/> {personal.email}</span>}
              {personal.phone && <span className="flex items-center gap-1.5"><Phone size={14}/> {personal.phone}</span>}
              {personal.location && <span className="flex items-center gap-1.5 break-words"><MapPin size={14}/> {personal.location}</span>}
              {personal.linkedin && <span className="flex items-center gap-1.5 break-all"><Linkedin size={14}/> {personal.linkedin}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="p-12 flex-1 space-y-10">
        
        {personal.summary && (
          <section>
            <div className="text-[13px] leading-relaxed text-slate-600 font-medium whitespace-pre-wrap break-words">
              {personal.summary}
            </div>
          </section>
        )}

        <div className="grid grid-cols-12 gap-10">
           <div className="col-span-7 space-y-10">
              {experience.length > 0 && (
                <section>
                  <SectionTitle title="Experience" />
                  <div className="space-y-6">
                    {experience.map((exp, i) => (
                      <React.Fragment key={exp.id || i}>
                        {exp.pageBreak && <div className="manual-page-break" />}
                        <div className="pl-5 py-1" style={{ borderLeftWidth: "4px", borderLeftStyle: "solid", borderColor: CYAN }}>
                          <div className="flex justify-between items-baseline mb-1.5">
                            <h3 className="text-[15px] font-black text-slate-800 uppercase tracking-tight break-words">{exp.role}</h3>
                            <span className="shrink-0 rounded-full px-3 py-1 text-[10px] font-black text-white uppercase tracking-widest shadow-sm" style={{ background: PURPLE }}>{exp.date}</span>
                          </div>
                          <p className="text-[11px] font-black uppercase tracking-widest mb-3 break-words" style={{ color: CYAN }}>{exp.company}</p>
                          <ul className="ml-4 list-disc text-xs text-slate-600 space-y-1.5 marker:text-cyan-400 font-medium leading-relaxed">
                            {(exp.desc || '').split('\n').map((line, idx) => line.trim() && <li key={idx}>{line}</li>)}
                          </ul>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              )}

              {projects.length > 0 && (
                <section>
                  <SectionTitle title="Projects" />
                  <div className="space-y-6">
                    {projects.map((proj, i) => (
                      <React.Fragment key={proj.id || i}>
                        {proj.pageBreak && <div className="manual-page-break" />}
                        <div className="pl-5 py-1" style={{ borderLeftWidth: "4px", borderLeftStyle: "solid", borderColor: PURPLE }}>
                          <h3 className="text-[13px] font-black uppercase tracking-widest mb-2 break-words text-slate-800">{proj.name}</h3>
                          <p className="text-[11px] text-slate-600 leading-relaxed font-medium whitespace-pre-wrap break-words">{proj.desc}</p>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              )}
           </div>

           <div className="col-span-5 space-y-10">
              {skills && Object.values(skills).flat().length > 0 && (
                <section>
                  <SectionTitle title="Skills" />
                  <div className="flex flex-wrap gap-2">
                    {[...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])].map((s, i) => (
                      <span key={i} className="rounded-full border-2 px-3 py-1 text-[10px] font-black uppercase tracking-widest break-words" style={{ borderColor: PURPLE, color: PURPLE }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {education.length > 0 && (
                <section>
                  <SectionTitle title="Education" />
                  <div className="space-y-5">
                    {education.map((edu, i) => (
                      <React.Fragment key={edu.id || i}>
                        {edu.pageBreak && <div className="manual-page-break" />}
                        <div className="pl-4 py-1" style={{ borderLeftWidth: "3px", borderLeftStyle: "solid", borderColor: CYAN }}>
                          <h3 className="text-[12px] font-black text-slate-800 uppercase tracking-widest mb-1 break-words">{edu.degree}</h3>
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 break-words">{edu.school}</div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{edu.date}</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              )}

              {certifications.length > 0 && (
                <section>
                  <SectionTitle title="Certifications" />
                  <div className="space-y-4">
                    {certifications.map((cert, i) => (
                       <div key={cert.id || i} className="pl-4 py-1" style={{ borderLeftWidth: "3px", borderLeftStyle: "solid", borderColor: PURPLE }}>
                          <div className="text-[11px] font-black uppercase tracking-widest break-words text-slate-800">{cert.name}</div>
                          <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-1 break-words">{cert.issuer}</div>
                       </div>
                    ))}
                  </div>
                </section>
              )}

              {languages.length > 0 && (
                <section>
                  <SectionTitle title="Languages" />
                  <div className="flex flex-wrap gap-2">
                    {languages.map((l, i) => (
                       <span key={l.id || i} className="rounded-full border-2 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest break-words" style={{ borderColor: CYAN, color: CYAN }}>
                         {l.name} — {l.level}
                       </span>
                    ))}
                  </div>
                </section>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Startup;