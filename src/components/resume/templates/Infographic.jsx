import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const Infographic = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = [],
    awards = [],
    volunteering = []
  } = data || {};

  // The vibrant color palette from the original infographic design
  const COLORS = ['#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899'];
  let sectionIndex = 0;

  // Dynamic Header Component that automatically increments the number and assigns a color
  const SectionHeader = ({ title, color, index }) => (
    <h2 className="mb-6 flex items-center gap-3 text-sm font-black uppercase tracking-[0.15em]">
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] text-white shadow-sm"
        style={{ backgroundColor: color }}
      >
        {index}
      </span>
      <span style={{ color: color }}>{title}</span>
    </h2>
  );

  return (
    <div className="w-full bg-white text-slate-800 min-h-[1100px] font-sans flex flex-col resume-preview-wrapper shadow-2xl relative overflow-hidden">
      
      {/* 1. HEADER SECTION - Modern Gradient from original code */}
      <div className="relative overflow-hidden px-12 py-16 shrink-0 bg-gradient-to-br from-blue-800 to-violet-600 shadow-md">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 flex items-center gap-8">
          {personal.photo && (
            <img 
              src={personal.photo} 
              alt="Profile" 
              className="h-32 w-32 shrink-0 rounded-full border-[3px] border-white/30 object-cover shadow-xl" 
            />
          )}
          <div>
            <h1 className="text-5xl font-bold text-white tracking-tight drop-shadow-sm break-words">{personal.name || "Your Name"}</h1>
            {personal.title && <p className="text-lg font-medium text-white/80 mt-1 break-words">{personal.title}</p>}
            
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-white/70">
              {personal.email && <span className="flex items-center gap-1.5 break-all"><Mail size={14}/> {personal.email}</span>}
              {personal.phone && <span className="flex items-center gap-1.5"><Phone size={14}/> {personal.phone}</span>}
              {personal.location && <span className="flex items-center gap-1.5 break-words"><MapPin size={14}/> {personal.location}</span>}
              {personal.linkedin && <span className="flex items-center gap-1.5 break-all"><Linkedin size={14}/> {personal.linkedin}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* 2. BODY SECTION */}
      <div className="p-12 flex-1 bg-white space-y-10">
        
        {/* SUMMARY */}
        {personal.summary && (
          <div className="mb-8">
            <SectionHeader title="Professional Summary" color={COLORS[sectionIndex % COLORS.length]} index={++sectionIndex} />
            <div 
              className="rounded-xl border-l-4 bg-slate-50 p-5 text-sm leading-relaxed text-slate-700 shadow-sm whitespace-pre-wrap break-words" 
              style={{ borderColor: COLORS[(sectionIndex - 1) % COLORS.length] }}
            >
              {personal.summary}
            </div>
          </div>
        )}

        {/* WORK EXPERIENCE */}
        {experience.length > 0 && (
          <div className="mb-8">
            <SectionHeader title="Work Experience" color={COLORS[sectionIndex % COLORS.length]} index={++sectionIndex} />
            <div className="space-y-6">
              {experience.map((exp, i) => {
                const currentColor = COLORS[(sectionIndex - 1) % COLORS.length];
                return (
                  <React.Fragment key={exp.id || i}>
                    {exp.pageBreak && <div className="manual-page-break" />}
                    <div className="rounded-xl border border-slate-100 p-5 shadow-sm bg-white">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1 gap-2">
                        <h3 className="text-base font-bold text-slate-800 break-words">{exp.role}</h3>
                        <span className="shrink-0 rounded-full px-3 py-1 text-[10px] font-bold text-white shadow-sm" style={{ backgroundColor: currentColor }}>
                          {exp.date}
                        </span>
                      </div>
                      <p className="text-sm font-medium mb-3 break-words" style={{ color: currentColor }}>{exp.company}</p>
                      <ul className="ml-4 list-disc text-sm text-slate-600 space-y-1.5 marker:text-slate-300">
                        {(exp.desc || '').split('\n').map((line, idx) => (
                          line.trim() && <li key={idx}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <div className="mb-8">
            <SectionHeader title="Education" color={COLORS[sectionIndex % COLORS.length]} index={++sectionIndex} />
            <div className="space-y-4">
              {education.map((edu, i) => (
                <React.Fragment key={edu.id || i}>
                  {edu.pageBreak && <div className="manual-page-break" />}
                  <div className="rounded-xl border border-slate-100 p-5 shadow-sm bg-white">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <div>
                        <span className="text-sm font-bold text-slate-800 break-words">{edu.degree}</span>
                        <span className="text-sm text-slate-500 break-words"> — {edu.school}</span>
                      </div>
                      <span className="shrink-0 text-xs font-medium text-slate-400">{edu.date}</span>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* SKILLS */}
        {(() => {
          const allSkills = [...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])];
          if (allSkills.length > 0) {
            const skillColor = COLORS[sectionIndex % COLORS.length];
            return (
              <div className="mb-8">
                <SectionHeader title="Skills & Expertise" color={skillColor} index={++sectionIndex} />
                <div className="flex flex-wrap gap-2 p-1">
                  {allSkills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="rounded-full px-4 py-1.5 text-xs font-medium text-white shadow-sm break-words" 
                      style={{ backgroundColor: COLORS[(sectionIndex + i) % COLORS.length] }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })()}

        {/* PROJECTS */}
        {projects.length > 0 && (
          <div className="mb-8">
            <SectionHeader title="Projects" color={COLORS[sectionIndex % COLORS.length]} index={++sectionIndex} />
            <div className="space-y-4">
              {projects.map((proj, i) => {
                const currentColor = COLORS[(sectionIndex - 1) % COLORS.length];
                return (
                  <React.Fragment key={proj.id || i}>
                    {proj.pageBreak && <div className="manual-page-break" />}
                    <div className="rounded-xl border border-slate-100 p-5 shadow-sm bg-white">
                      <h3 className="text-sm font-bold mb-2 break-words" style={{ color: currentColor }}>{proj.name}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap break-words">{proj.desc}</p>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}

        {/* GRID FOR MINOR SECTIONS (Certifications, Languages, Awards, Volunteering) */}
        <div className="grid grid-cols-2 gap-8 pt-4">
          
          {certifications.length > 0 && (
            <div>
              <SectionHeader title="Certifications" color={COLORS[sectionIndex % COLORS.length]} index={++sectionIndex} />
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={cert.id || i} className="rounded-lg border border-slate-100 p-4 shadow-sm bg-white">
                      <div className="text-sm font-bold break-words" style={{ color: COLORS[(sectionIndex - 1) % COLORS.length] }}>{cert.name}</div>
                      <div className="text-xs text-slate-500 mt-1 break-words">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {languages.length > 0 && (
            <div>
              <SectionHeader title="Languages" color={COLORS[sectionIndex % COLORS.length]} index={++sectionIndex} />
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, i) => (
                  <span 
                    key={lang.id || i} 
                    className="rounded-full px-3 py-1.5 text-xs font-medium text-white shadow-sm break-words" 
                    style={{ backgroundColor: COLORS[(sectionIndex + i) % COLORS.length] }}
                  >
                    {lang.name} — {lang.level}
                  </span>
                ))}
              </div>
            </div>
          )}

          {awards.length > 0 && (
            <div>
              <SectionHeader title="Awards" color={COLORS[sectionIndex % COLORS.length]} index={++sectionIndex} />
              <div className="space-y-3">
                {awards.map((aw, i) => (
                  <div key={aw.id || i} className="rounded-lg border border-slate-100 p-4 shadow-sm bg-white">
                    <div className="text-sm font-bold break-words flex gap-2" style={{ color: COLORS[(sectionIndex - 1) % COLORS.length] }}>
                      <span>🏆</span> <span>{aw.name}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1 break-words">{aw.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {volunteering.length > 0 && (
            <div>
              <SectionHeader title="Volunteering" color={COLORS[sectionIndex % COLORS.length]} index={++sectionIndex} />
              <div className="space-y-3">
                {volunteering.map((vol, i) => (
                  <div key={vol.id || i} className="rounded-lg border border-slate-100 p-4 shadow-sm bg-white">
                    <div className="text-sm font-bold break-words" style={{ color: COLORS[(sectionIndex - 1) % COLORS.length] }}>{vol.role}</div>
                    <div className="text-xs text-slate-500 mb-2 break-words">{vol.org}</div>
                    <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap break-words">{vol.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Infographic;