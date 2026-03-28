import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Mosaic = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const PRIMARY = '#1e293b'; // Slate 800
  const TILE_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6']; // Blue, Emerald, Amber, Purple
  const TILE_BGS = ['#eff6ff', '#ecfdf5', '#fffbeb', '#f5f3ff'];

  // Helper to cycle colors
  const getTileColor = (idx) => TILE_COLORS[idx % TILE_COLORS.length];
  const getTileBg = (idx) => TILE_BGS[idx % TILE_BGS.length];

  let sectionIndex = 0;

  const SectionHeader = ({ title, color }) => (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-6 w-6 rounded shadow-sm flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
         <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }}></div>
      </div>
      <h2 className="text-sm font-black uppercase tracking-widest" style={{ color: color }}>{title}</h2>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] bg-white shadow-xl resume-preview-wrapper flex flex-col font-sans p-10">
      
      {/* HEADER TILE */}
      <div className="mb-8 rounded-3xl p-10 shadow-sm shrink-0" style={{ background: `linear-gradient(135deg, ${TILE_COLORS[0]}15, ${TILE_COLORS[3]}15)` }}>
        <div className="flex items-center gap-8">
          {personal.photo && (
            <img src={personal.photo} alt="Profile" className="h-32 w-32 shrink-0 rounded-2xl object-cover shadow-md bg-white p-1" style={{ border: `3px solid ${TILE_COLORS[0]}40` }}/>
          )}
          <div className="flex-1">
            <h1 className="text-5xl font-black tracking-tight uppercase break-words leading-none mb-2" style={{ color: PRIMARY }}>{personal.name || 'Your Name'}</h1>
            {personal.title && <p className="text-lg font-bold uppercase tracking-widest break-words" style={{ color: TILE_COLORS[3] }}>{personal.title}</p>}
            
            <div className="mt-5 flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-widest">
              {personal.email && <span className="rounded-full px-3 py-1.5 shadow-sm flex items-center gap-1.5 break-all" style={{ backgroundColor: getTileBg(1), color: getTileColor(1) }}><Mail size={12}/> {personal.email}</span>}
              {personal.phone && <span className="rounded-full px-3 py-1.5 shadow-sm flex items-center gap-1.5" style={{ backgroundColor: getTileBg(2), color: getTileColor(2) }}><Phone size={12}/> {personal.phone}</span>}
              {personal.location && <span className="rounded-full px-3 py-1.5 shadow-sm flex items-center gap-1.5 break-words" style={{ backgroundColor: getTileBg(3), color: getTileColor(3) }}><MapPin size={12}/> {personal.location}</span>}
              {personal.linkedin && <span className="rounded-full px-3 py-1.5 shadow-sm flex items-center gap-1.5 break-all" style={{ backgroundColor: getTileBg(0), color: getTileColor(0) }}><Linkedin size={12}/> {personal.linkedin}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* BODY SECTIONS */}
      <div className="flex-1 space-y-6">
        
        {/* SUMMARY */}
        {personal.summary && (() => {
          const color = getTileColor(sectionIndex);
          const bg = getTileBg(sectionIndex++);
          return (
            <section className="rounded-3xl p-8 shadow-sm" style={{ backgroundColor: bg }}>
              <SectionHeader title="Profile" color={color} />
              <div className="text-[13px] leading-relaxed text-slate-700 font-medium whitespace-pre-wrap break-words italic">
                {personal.summary}
              </div>
            </section>
          );
        })()}

        {/* EXPERIENCE */}
        {experience.length > 0 && (() => {
          const color = getTileColor(sectionIndex);
          const bg = getTileBg(sectionIndex++);
          return (
            <section className="rounded-3xl p-8 shadow-sm" style={{ backgroundColor: bg }}>
              <SectionHeader title="Experience" color={color} />
              <div className="space-y-4">
                {experience.map((exp, i) => (
                  <React.Fragment key={exp.id || i}>
                    {exp.pageBreak && <div className="manual-page-break" />}
                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-50">
                      <div className="flex justify-between items-baseline mb-2">
                        <div className="font-black text-[15px] uppercase tracking-tight break-words" style={{ color: PRIMARY }}>
                          {exp.role} <span style={{ color: color }}>| {exp.company}</span>
                        </div>
                        <span className="shrink-0 text-[10px] font-black uppercase tracking-widest text-slate-400">{exp.date}</span>
                      </div>
                      <ul className="ml-4 list-disc text-xs text-slate-600 space-y-1.5 marker:text-slate-300 font-medium leading-relaxed">
                        {(exp.desc || '').split('\n').map((line, idx) => line.trim() && <li key={idx}>{line}</li>)}
                      </ul>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </section>
          );
        })()}

        {/* PROJECTS */}
        {projects.length > 0 && (() => {
          const color = getTileColor(sectionIndex);
          const bg = getTileBg(sectionIndex++);
          return (
            <section className="rounded-3xl p-8 shadow-sm" style={{ backgroundColor: bg }}>
              <SectionHeader title="Projects" color={color} />
              <div className="grid grid-cols-2 gap-4">
                {projects.map((proj, i) => (
                  <React.Fragment key={proj.id || i}>
                    {proj.pageBreak && <div className="manual-page-break" />}
                    <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-50">
                      <h3 className="text-[13px] font-black uppercase tracking-widest mb-2 break-words" style={{ color: color }}>{proj.name}</h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium whitespace-pre-wrap break-words">{proj.desc}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </section>
          );
        })()}

        {/* 2-COLUMN BOTTOM GRID */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* EDUCATION */}
          {education.length > 0 && (() => {
            const color = getTileColor(sectionIndex);
            const bg = getTileBg(sectionIndex++);
            return (
              <section className="rounded-3xl p-8 shadow-sm" style={{ backgroundColor: bg }}>
                <SectionHeader title="Education" color={color} />
                <div className="space-y-3">
                  {education.map((edu, i) => (
                    <React.Fragment key={edu.id || i}>
                      {edu.pageBreak && <div className="manual-page-break" />}
                      <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-50">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="text-[13px] font-black uppercase break-words" style={{ color: PRIMARY }}>{edu.degree}</span>
                        </div>
                        <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1 break-words">{edu.school}</p>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{edu.date}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </section>
            );
          })()}

          {/* SKILLS & LANGUAGES COMBINED TILE */}
          {((skills && Object.values(skills).flat().length > 0) || languages.length > 0) && (() => {
            const color = getTileColor(sectionIndex);
            const bg = getTileBg(sectionIndex++);
            return (
              <section className="rounded-3xl p-8 shadow-sm space-y-8" style={{ backgroundColor: bg }}>
                
                {skills && Object.values(skills).flat().length > 0 && (
                  <div>
                    <SectionHeader title="Skills" color={color} />
                    <div className="flex flex-wrap gap-2">
                      {[...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])].map((s, i) => (
                        <span key={i} className="rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-sm break-words" style={{ backgroundColor: color }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {languages.length > 0 && (
                  <div>
                    <SectionHeader title="Languages" color={color} />
                    <div className="flex flex-wrap gap-2">
                      {languages.map((l, i) => (
                        <div key={l.id || i} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-slate-50">
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }}></span>
                          <span className="text-[11px] font-black uppercase tracking-widest break-words" style={{ color: PRIMARY }}>{l.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </section>
            );
          })()}
          
        </div>
      </div>
    </div>
  );
};

export default Mosaic;