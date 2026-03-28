import React from 'react';
import { Mail, Phone, MapPin, Linkedin, CheckCircle, ChevronRight, Briefcase, GraduationCap, Code, Trophy, Globe, Award } from 'lucide-react';

const InfoExecutive = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = [],
    awards = []
  } = data || {};
  
  const DARK = '#1e3a8a';   // Blue 900
  const LIGHT = '#bfdbfe';  // Blue 200
  const AMBER = '#f59e0b';  // Amber 500

  // CSS 5-Dot Rating System Illusion
  const DotRating = ({ filled }) => (
    <div className="flex gap-1 mt-1.5 justify-center">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div key={dot} className="h-1.5 w-1.5 rounded-full shadow-sm" style={{ backgroundColor: dot <= filled ? AMBER : '#e2e8f0' }}></div>
      ))}
    </div>
  );

  const SectionHeader = ({ title }) => (
    <h3 className="text-[12px] font-black uppercase tracking-[0.2em] mb-5 flex items-center gap-2" style={{ color: DARK }}>
       <div className="h-5 w-5 rounded flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: AMBER }}>
         <CheckCircle size={12}/>
       </div>
       {title}
    </h3>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] bg-white shadow-xl resume-preview-wrapper flex flex-col font-sans">
      
      {/* =========================================
          PAGE 1: THE EXECUTIVE DASHBOARD
          ========================================= */}
      <div className="flex flex-col w-full min-h-[297mm] overflow-hidden">
        
        {/* HEADER */}
        <div className="px-12 py-12 border-b-8 flex items-center gap-8 bg-slate-50/80 shrink-0" style={{ borderColor: LIGHT }}>
          {personal.photo && (
            <img src={personal.photo} alt="Profile" className="h-32 w-32 rounded-full object-cover shadow-lg border-4 border-white"/>
          )}
          <div className="flex-1">
             <h1 className="text-5xl font-black tracking-tighter uppercase mb-2 break-words leading-none" style={{ color: DARK }}>{personal.name || "Your Name"}</h1>
             <h2 className="text-[12px] font-black uppercase tracking-[0.25em] break-words" style={{ color: AMBER }}>{personal.title}</h2>
          </div>
          <div className="space-y-2.5 text-[10px] font-bold text-slate-600 shrink-0 max-w-[220px] break-words bg-white p-4 rounded-xl shadow-sm border border-slate-100">
             {personal.phone && <div className="flex items-center gap-2"><Phone size={14} color={DARK}/> {personal.phone}</div>}
             {personal.email && <div className="flex items-center gap-2 break-all"><Mail size={14} color={DARK}/> {personal.email}</div>}
             {personal.location && <div className="flex items-center gap-2"><MapPin size={14} color={DARK}/> {personal.location}</div>}
             {personal.linkedin && <div className="flex items-center gap-2 break-all"><Linkedin size={14} color={DARK}/> {personal.linkedin}</div>}
          </div>
        </div>

        <div className="p-12 flex-1 flex flex-col space-y-10">
          
          {/* SUMMARY & EXPERTISE GRID */}
          <div className="grid grid-cols-12 gap-10">
             <div className="col-span-7 space-y-8">
                {personal.summary && (
                  <section>
                    <SectionHeader title="Profile Summary" />
                    <p className="text-[12px] leading-relaxed text-slate-600 font-medium text-justify whitespace-pre-wrap">{personal.summary}</p>
                  </section>
                )}

                {/* HORIZONTAL TIMELINE (Education) */}
                {education.length > 0 && (
                  <section>
                    <SectionHeader title="Education Timeline" />
                    <div className="flex flex-wrap w-full pt-4 relative gap-y-8">
                        <div className="absolute top-4 left-0 w-full h-1.5 rounded-full" style={{ backgroundColor: LIGHT }}></div>
                        {education.map((edu, i) => (
                          <div key={i} className="min-w-[120px] flex-1 relative pt-4 text-center px-2">
                              <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 h-4 w-4 rounded-full border-[3px] border-white shadow-sm" style={{ backgroundColor: DARK }}></div>
                              <div className="text-[10px] font-black uppercase mb-1.5" style={{ color: AMBER }}>{edu.date}</div>
                              <div className="text-[11px] font-black uppercase text-slate-800 leading-tight mb-1 break-words">{edu.degree}</div>
                              <div className="text-[9px] font-bold text-slate-500 uppercase break-words">{edu.school}</div>
                          </div>
                        ))}
                    </div>
                  </section>
                )}
             </div>
             
             <div className="col-span-5">
                {skills?.core?.length > 0 && (
                  <section>
                    <SectionHeader title="Areas of Expertise" />
                    
                    {/* Render first 8 as Icon Grid */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                        {skills.core.slice(0, 8).map((skill, i) => (
                          <div key={i} className="text-center">
                              <div className="h-10 w-10 mx-auto rounded-lg flex items-center justify-center text-white mb-2 shadow-sm" style={{ backgroundColor: DARK }}>
                                <ChevronRight size={18}/>
                              </div>
                              <div className="text-[9px] font-black text-slate-700 uppercase leading-tight h-6 break-words flex items-center justify-center">{skill}</div>
                              <DotRating filled={5 - (i % 2)} />
                          </div>
                        ))}
                    </div>

                    {/* Overflow wrapped in pills */}
                    {skills.core.length > 8 && (
                      <div className="flex flex-wrap justify-center gap-1.5 mt-5 pt-5 border-t border-slate-100">
                        {skills.core.slice(8).map((skill, i) => (
                          <span key={i} className="text-[9px] font-bold uppercase text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">{skill}</span>
                        ))}
                      </div>
                    )}
                  </section>
                )}
             </div>
          </div>

          <div className="grid grid-cols-12 gap-10 border-t border-slate-200 pt-10">
             
             {/* TECHNICAL BAR CHARTS */}
             <div className="col-span-7">
                {skills?.technical?.length > 0 && (
                  <section>
                      <SectionHeader title="Technology Snapshot" />
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        {skills.technical.map((s, i) => {
                            const blocks = Math.max(5, 10 - (i % 4)); // Randomize between 5 and 10 filled blocks
                            return (
                              <div key={i} className="flex flex-col gap-1">
                                  <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest break-words">{s}</span>
                                  <div className="flex gap-0.5 w-full">
                                    {[1,2,3,4,5,6,7,8,9,10].map(block => (
                                        <div key={block} className="h-2.5 flex-1 rounded-sm" style={{ backgroundColor: block <= blocks ? DARK : '#e2e8f0' }}></div>
                                    ))}
                                  </div>
                              </div>
                            );
                        })}
                      </div>
                  </section>
                )}
             </div>

             <div className="col-span-5 space-y-8">
                {skills?.soft?.length > 0 && (
                  <section>
                    <SectionHeader title="Development & Training" />
                    <ul className="space-y-2">
                       {skills.soft.map((s, i) => (
                         <li key={i} className="flex items-start gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-relaxed">
                           <span className="mt-1 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: AMBER }}></span>
                           {s}
                         </li>
                       ))}
                    </ul>
                  </section>
                )}

                {/* Combine Languages, Certs, Awards into small grid */}
                <div className="grid grid-cols-2 gap-6">
                  {languages.length > 0 && (
                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 border-b border-slate-100 pb-1">
                          <Globe size={12} className="inline mr-1" color={DARK}/> Languages
                        </h3>
                        <div className="space-y-2">
                          {languages.map((l, i) => (
                              <div key={i} className="text-[10px] font-black text-slate-700 uppercase break-words">
                                {l.name} <span className="text-[9px] text-slate-400">({l.level})</span>
                              </div>
                          ))}
                        </div>
                    </section>
                  )}

                  {certifications.length > 0 && (
                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 border-b border-slate-100 pb-1">
                          <Award size={12} className="inline mr-1" color={DARK}/> Licenses
                        </h3>
                        <div className="space-y-2">
                          {certifications.map((c, i) => (
                              <div key={i} className="text-[10px] font-black text-slate-700 uppercase leading-tight break-words">
                                {c.name}
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

      {/* =========================================
          PAGE 2+: DETAILED WORK EXPERIENCE & PROJECTS
          ========================================= */}
      {(experience.length > 0 || projects.length > 0) && (
        <div className="flex-1 w-full bg-slate-50/50 p-12 border-t-8" style={{ borderColor: LIGHT }}>
          
          {experience.length > 0 && (
            <section className="mb-12">
                <SectionHeader title="Milestones & Work Experience" />
                <div className="space-y-6">
                  {experience.map((exp, i) => (
                      <React.Fragment key={exp.id || i}>
                        {exp.pageBreak && <div className="manual-page-break" />}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                          {/* Decorative Side Line */}
                          <div className="absolute top-0 left-0 h-full w-2" style={{ backgroundColor: DARK }}></div>
                          
                          <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="text-[15px] font-black uppercase text-slate-800 tracking-tight break-words">{exp.role}</h4>
                                <div className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mt-1 break-words">
                                  {exp.company}
                                </div>
                              </div>
                              <span className="shrink-0 px-4 py-1.5 rounded bg-slate-100 text-[10px] font-black uppercase tracking-widest" style={{ color: AMBER }}>{exp.date}</span>
                          </div>
                          
                          <ul className="ml-5 list-disc text-[12px] text-slate-600 space-y-2 marker:text-blue-400 font-medium leading-relaxed">
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
                <SectionHeader title="Key Projects & Initiatives" />
                <div className="grid grid-cols-2 gap-6">
                  {projects.map((proj, i) => (
                      <React.Fragment key={proj.id || i}>
                        {proj.pageBreak && <div className="manual-page-break" />}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: AMBER }}></div>
                          <h4 className="text-[13px] font-black uppercase tracking-tight mb-2 break-words" style={{ color: DARK }}>{proj.name}</h4>
                          <div className="text-[11px] text-slate-600 font-medium leading-relaxed whitespace-pre-wrap break-words">{proj.desc}</div>
                        </div>
                      </React.Fragment>
                  ))}
                </div>
            </section>
          )}

        </div>
      )}
    </div>
  );
};

export default InfoExecutive;