import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Card = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const PRIMARY = '#18181b';
  const ACCENT = '#6366f1';
  const CARD_BG = '#fafafa';

  const SectionTitle = ({ title }) => (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-6 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }}></div>
      <h2 className="text-sm font-black uppercase tracking-widest" style={{ color: PRIMARY }}>{title}</h2>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] bg-white shadow-xl resume-preview-wrapper flex flex-col font-sans">
      
      {/* HEADER */}
      <div className="p-12 mb-4 shrink-0 text-center border-b-4 border-slate-50">
        {personal.photo && <img src={personal.photo} alt="Profile" className="mx-auto mb-5 h-28 w-28 rounded-full object-cover shadow-md" style={{ border: `4px solid ${ACCENT}` }}/>}
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2" style={{ color: PRIMARY }}>{personal.name || 'Your Name'}</h1>
        {personal.title && <p className="mt-1 text-sm font-bold uppercase tracking-widest" style={{ color: ACCENT }}>{personal.title}</p>}
        
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
           {personal.email && <span className="flex items-center gap-1.5 break-all"><Mail size={14}/> {personal.email}</span>}
           {personal.phone && <span className="flex items-center gap-1.5"><Phone size={14}/> {personal.phone}</span>}
           {personal.location && <span className="flex items-center gap-1.5 break-words"><MapPin size={14}/> {personal.location}</span>}
           {personal.linkedin && <span className="flex items-center gap-1.5 break-all"><Linkedin size={14}/> {personal.linkedin}</span>}
        </div>
      </div>

      {/* BODY */}
      <div className="p-12 pt-0 flex-1 space-y-8">
        
        {personal.summary && (
          <section className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: CARD_BG, border: '1px solid #e4e4e7' }}>
            <SectionTitle title="Profile" />
            <div className="text-[13px] leading-relaxed text-zinc-600 font-medium whitespace-pre-wrap break-words italic">{personal.summary}</div>
          </section>
        )}

        {experience.length > 0 && (
          <section className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: CARD_BG, border: '1px solid #e4e4e7' }}>
            <SectionTitle title="Experience" />
            <div className="space-y-4">
              {experience.map((exp, i) => (
                <React.Fragment key={exp.id || i}>
                  {exp.pageBreak && <div className="manual-page-break" />}
                  <div className="rounded-xl bg-white p-5 shadow-sm" style={{ border: '1px solid #f4f4f5' }}>
                    <div className="flex justify-between items-baseline mb-2">
                      <div className="font-black text-sm uppercase tracking-tight break-words" style={{ color: PRIMARY }}>
                        {exp.role} <span style={{ color: ACCENT }}>| {exp.company}</span>
                      </div>
                      <span className="shrink-0 text-[10px] font-black uppercase tracking-widest text-zinc-400">{exp.date}</span>
                    </div>
                    <ul className="ml-4 list-disc text-[13px] text-zinc-600 space-y-1.5 marker:text-zinc-300 font-medium leading-relaxed">
                      {(exp.desc || '').split('\n').map((line, idx) => line.trim() && <li key={idx}>{line}</li>)}
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-8">
          <div>
            {education.length > 0 && (
              <section className="rounded-2xl p-6 shadow-sm mb-8" style={{ backgroundColor: CARD_BG, border: '1px solid #e4e4e7' }}>
                <SectionTitle title="Education" />
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <React.Fragment key={edu.id || i}>
                      {edu.pageBreak && <div className="manual-page-break" />}
                      <div className="rounded-xl bg-white p-5 shadow-sm" style={{ border: '1px solid #f4f4f5' }}>
                        <div className="flex justify-between items-baseline mb-1.5">
                          <span className="text-[13px] font-black uppercase break-words" style={{ color: PRIMARY }}>{edu.degree}</span>
                          <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-zinc-400">{edu.date}</span>
                        </div>
                        <p className="text-[11px] font-bold text-zinc-600 uppercase tracking-widest break-words">{edu.school}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </section>
            )}

            {skills && Object.values(skills).flat().length > 0 && (
              <section className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: CARD_BG, border: '1px solid #e4e4e7' }}>
                <SectionTitle title="Skills" />
                <div className="flex flex-wrap gap-2">
                  {[...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])].map((s, i) => (
                    <span key={i} className="rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-sm break-words" style={{ backgroundColor: ACCENT }}>
                      {s}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div>
            {projects.length > 0 && (
              <section className="rounded-2xl p-6 shadow-sm mb-8" style={{ backgroundColor: CARD_BG, border: '1px solid #e4e4e7' }}>
                <SectionTitle title="Projects" />
                <div className="space-y-4">
                  {projects.map((proj, i) => (
                    <React.Fragment key={proj.id || i}>
                      {proj.pageBreak && <div className="manual-page-break" />}
                      <div className="rounded-xl bg-white p-5 shadow-sm" style={{ border: '1px solid #f4f4f5' }}>
                        <h3 className="text-xs font-black uppercase tracking-widest mb-2 break-words" style={{ color: ACCENT }}>{proj.name}</h3>
                        <p className="text-[11px] text-zinc-600 leading-relaxed font-medium whitespace-pre-wrap break-words">{proj.desc}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </section>
            )}

            {languages.length > 0 && (
              <section className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: CARD_BG, border: '1px solid #e4e4e7' }}>
                <SectionTitle title="Languages" />
                <div className="flex flex-wrap gap-3">
                  {languages.map((l, i) => (
                    <div key={l.id || i} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm" style={{ border: '1px solid #e4e4e7' }}>
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: ACCENT }}></span>
                      <span className="text-[10px] font-black uppercase tracking-widest break-words" style={{ color: PRIMARY }}>{l.name}</span>
                    </div>
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

export default Card;