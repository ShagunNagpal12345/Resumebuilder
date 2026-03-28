import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Berlin = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const BLUE = '#2563eb';
  const YELLOW = '#eab308';
  const RED_B = '#dc2626';
  const TEXT = '#18181b';

  const SectionTitle = ({ title }) => (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-6 w-6 rounded-full shadow-sm" style={{ backgroundColor: BLUE }}></div>
      <h2 className="text-sm font-extrabold uppercase tracking-widest" style={{ color: TEXT }}>{title}</h2>
      <div className="ml-auto h-1 w-16 shadow-sm" style={{ backgroundColor: YELLOW }}></div>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] overflow-hidden bg-white shadow-xl resume-preview-wrapper flex flex-col font-sans">
      
      {/* HEADER */}
      <div className="relative px-12 py-12 text-white shrink-0 shadow-lg" style={{ backgroundColor: '#000000' }}>
        <div className="absolute right-10 top-6 h-24 w-24 rounded-full border-4" style={{ borderColor: YELLOW, opacity: 0.6 }}></div>
        <div className="absolute right-28 bottom-4 h-10 w-10 shadow-lg" style={{ backgroundColor: RED_B, opacity: 0.7 }}></div>
        <div className="absolute right-8 bottom-8 h-16 w-4 shadow-lg" style={{ backgroundColor: BLUE, opacity: 0.7 }}></div>
        
        <div className="relative flex items-center gap-8">
          {personal.photo && (
            <div className="shrink-0 border-[5px] p-1 shadow-2xl bg-white/5" style={{ borderColor: YELLOW }}>
              <img src={personal.photo} alt="Profile" className="h-28 w-28 object-cover"/>
            </div>
          )}
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter drop-shadow-md break-words leading-none mb-2">{personal.name || 'Your Name'}</h1>
            {personal.title && <p className="text-lg font-bold tracking-widest uppercase break-words" style={{ color: YELLOW }}>{personal.title}</p>}
            
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-bold text-white/80 uppercase tracking-widest">
              {personal.email && <span className="flex items-center gap-2 break-all"><Mail size={14}/> {personal.email}</span>}
              {personal.phone && <span className="flex items-center gap-2"><Phone size={14}/> {personal.phone}</span>}
              {personal.location && <span className="flex items-center gap-2 break-words"><MapPin size={14}/> {personal.location}</span>}
              {personal.linkedin && <span className="flex items-center gap-2 break-all"><Linkedin size={14}/> {personal.linkedin}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="p-12 flex-1 space-y-10">
        
        {personal.summary && (
          <section>
            <div className="border-l-[5px] pl-5 py-1" style={{ borderColor: BLUE }}>
              <div className="text-[13px] leading-relaxed text-zinc-700 font-medium whitespace-pre-wrap break-words italic">{personal.summary}</div>
            </div>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <SectionTitle title="Experience" />
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <React.Fragment key={exp.id || i}>
                  {exp.pageBreak && <div className="manual-page-break" />}
                  <div className="border-l-[5px] pl-5 py-1" style={{ borderColor: YELLOW }}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-base font-black uppercase tracking-tight break-words" style={{ color: TEXT }}>{exp.role}</h3>
                      <span className="shrink-0 text-[10px] font-black uppercase tracking-widest" style={{ color: BLUE }}>{exp.date}</span>
                    </div>
                    <p className="text-[11px] font-black uppercase tracking-widest mb-3 break-words" style={{ color: BLUE }}>{exp.company}</p>
                    <ul className="space-y-1.5">
                      {(exp.desc || '').split('\n').map((line, idx) => line.trim() && (
                        <li key={idx} className="flex items-start gap-3 text-xs text-zinc-600 font-medium leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: RED_B }}></span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-10">
          <div>
            {education.length > 0 && (
              <section className="mb-10">
                <SectionTitle title="Education" />
                <div className="space-y-5">
                  {education.map((edu, i) => (
                    <React.Fragment key={edu.id || i}>
                      {edu.pageBreak && <div className="manual-page-break" />}
                      <div className="border-l-[5px] pl-5 py-1" style={{ borderColor: BLUE }}>
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="text-[13px] font-black uppercase break-words" style={{ color: TEXT }}>{edu.degree}</h3>
                          <span className="shrink-0 text-[10px] font-black uppercase tracking-widest" style={{ color: BLUE }}>{edu.date}</span>
                        </div>
                        <p className="text-[11px] font-black uppercase tracking-widest break-words" style={{ color: YELLOW }}>{edu.school}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </section>
            )}

            {skills && Object.values(skills).flat().length > 0 && (
              <section>
                <SectionTitle title="Skills" />
                <div className="flex flex-wrap gap-2">
                  {[...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])].map((s, i) => (
                    <span key={i} className="border-2 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest break-words" style={{ borderColor: BLUE, color: TEXT }}>
                      {s}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div>
            {projects.length > 0 && (
              <section className="mb-10">
                <SectionTitle title="Projects" />
                <div className="space-y-6">
                  {projects.map((proj, i) => (
                    <React.Fragment key={proj.id || i}>
                      {proj.pageBreak && <div className="manual-page-break" />}
                      <div className="border-l-[5px] pl-5 py-1" style={{ borderColor: YELLOW }}>
                        <h3 className="text-[13px] font-black uppercase tracking-widest mb-2 break-words" style={{ color: BLUE }}>{proj.name}</h3>
                        <p className="text-[11px] text-zinc-600 leading-relaxed font-medium whitespace-pre-wrap break-words">{proj.desc}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </section>
            )}

            <div className="space-y-8">
              {certifications.length > 0 && (
                <section>
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 border-b-2 border-slate-100 pb-2">Certifications</h3>
                  <div className="space-y-3">
                    {certifications.map((c, i) => (
                      <div key={c.id || i} className="flex justify-between items-baseline">
                        <div className="text-[11px] font-black uppercase tracking-widest break-words" style={{ color: TEXT }}>
                          {c.name} <span className="text-zinc-400">— {c.issuer}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {languages.length > 0 && (
                <section>
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 border-b-2 border-slate-100 pb-2">Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((l, i) => (
                      <div key={l.id || i} className="flex items-center gap-2 border-2 px-4 py-2" style={{ borderColor: BLUE }}>
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: YELLOW }}></span>
                        <span className="text-[11px] font-black uppercase tracking-widest break-words" style={{ color: TEXT }}>{l.name}</span>
                        <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{l.level}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berlin;