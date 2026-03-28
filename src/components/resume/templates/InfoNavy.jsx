import React from 'react';
import { Mail, Phone, MapPin, Linkedin, User, Database, Briefcase, GraduationCap, Award, Globe, Trophy, FolderGit2 } from 'lucide-react';

const InfoNavy = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = [],
    awards = [] // <-- Added awards here!
  } = data || {};
  
  const NAVY = '#1e293b';
  const TEAL = '#2dd4bf';
  const YELLOW = '#facc15';

  const SectionTitle = ({ title, bg, icon: Icon }) => (
    <h2 className="text-[12px] font-black uppercase tracking-[0.2em] text-white px-4 py-2 inline-flex items-center gap-2 rounded shadow-sm mb-5" style={{ backgroundColor: bg }}>
      {Icon && <Icon size={14} />} {title}
    </h2>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] bg-white shadow-xl resume-preview-wrapper font-sans flex flex-col">
      
      {/* =========================================
          PAGE 1: THE EXECUTIVE DASHBOARD
          ========================================= */}
      <div className="flex w-full min-h-[297mm] overflow-hidden">
        
        {/* LEFT SIDEBAR (NAVY) */}
        <div className="w-[33%] shrink-0 flex flex-col py-10 px-8 text-white" style={{ backgroundColor: NAVY }}>
          
          <div className="flex flex-col items-center border-b border-slate-700 pb-8 mb-8">
            {personal.photo && (
              <div className="mb-6 h-40 w-40 overflow-hidden rounded-full border-[4px] shadow-xl" style={{ borderColor: TEAL }}>
                <img src={personal.photo} alt="Profile" className="h-full w-full object-cover"/>
              </div>
            )}
            
            <div className="w-full space-y-4 text-center text-[10px] text-white/80 font-bold uppercase tracking-widest break-words">
               {personal.phone && <div className="flex items-center justify-center gap-2"><Phone size={12} color={TEAL}/> {personal.phone}</div>}
               {personal.email && <div className="flex items-center justify-center gap-2 break-all"><Mail size={12} color={TEAL}/> {personal.email}</div>}
               {personal.location && <div className="flex items-center justify-center gap-2"><MapPin size={12} color={TEAL}/> {personal.location}</div>}
               {personal.linkedin && <div className="flex items-center justify-center gap-2 break-all"><Linkedin size={12} color={TEAL}/> {personal.linkedin}</div>}
            </div>
          </div>

          <div className="flex-1 flex flex-col space-y-8">
            
            {/* EDUCATION */}
            {education.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4 text-teal-400">
                   <GraduationCap size={16}/> <h3 className="text-[11px] font-black uppercase tracking-widest text-white">Education</h3>
                </div>
                <div className="space-y-5 border-l-2 ml-2 pl-4" style={{ borderColor: TEAL }}>
                  {education.map((edu, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[21px] top-1 h-2 w-2 rounded-full" style={{ backgroundColor: YELLOW }}></div>
                      <h4 className="text-[11px] font-black uppercase text-teal-400 break-words">{edu.degree}</h4>
                      <p className="text-[10px] font-bold uppercase text-white/80 mt-1 break-words">{edu.school}</p>
                      <p className="text-[9px] font-bold uppercase text-white/50 tracking-widest mt-0.5">{edu.date}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CERTIFICATIONS */}
            {certifications.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4 text-teal-400">
                   <Award size={16}/> <h3 className="text-[11px] font-black uppercase tracking-widest text-white">Certifications</h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, i) => (
                    <div key={i} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                      <div className="text-[10px] font-black uppercase tracking-widest break-words" style={{ color: TEAL }}>{cert.name}</div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-white/60 mt-1 break-words">{cert.issuer}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* AWARDS (NEWLY ADDED) */}
            {awards.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4 text-teal-400">
                   <Trophy size={16}/> <h3 className="text-[11px] font-black uppercase tracking-widest text-white">Awards</h3>
                </div>
                <div className="space-y-4">
                  {awards.map((aw, i) => (
                    <div key={i} className="border-l-2 pl-3" style={{ borderColor: YELLOW }}>
                      <div className="text-[10px] font-black uppercase tracking-widest break-words text-white">{aw.name}</div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-white/50 mt-1 break-words">{aw.issuer}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* LANGUAGES (Conic Gradient Charts) */}
            {languages.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6 text-teal-400">
                   <Globe size={16}/> <h3 className="text-[11px] font-black uppercase tracking-widest text-white">Languages</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((l, i) => {
                      const pct = (l.level || '').toLowerCase().includes('native') || (l.level || '').toLowerCase().includes('fluent') ? 95 : 75;
                      return (
                        <div key={i} className="flex flex-col items-center text-center">
                          <div className="relative h-16 w-16 rounded-full flex items-center justify-center mb-3 shadow-lg" style={{ background: `conic-gradient(${YELLOW} ${pct}%, ${TEAL} 0)` }}>
                              <div className="absolute h-12 w-12 bg-slate-900 rounded-full flex items-center justify-center text-[10px] font-black text-white">{pct}%</div>
                          </div>
                          <span className="text-[10px] font-bold text-white uppercase tracking-widest break-words">{l.name}</span>
                        </div>
                      );
                  })}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* RIGHT MAIN AREA (PAGE 1) */}
        <div className="w-[67%] flex flex-col bg-slate-50/50">
          
          {/* HEADER */}
          <div className="px-10 py-12 shrink-0 shadow-md" style={{ backgroundColor: TEAL }}>
            <h1 className="text-5xl font-black text-white tracking-[0.15em] uppercase break-words leading-none mb-3">{personal.name || "Your Name"}</h1>
            <p className="text-[12px] font-black text-slate-800 uppercase tracking-[0.3em] break-words">{personal.title}</p>
          </div>

          <div className="flex-1 flex flex-col p-10 space-y-10">
            
            {/* SUMMARY */}
            {personal.summary && (
              <section>
                <SectionTitle title="Executive Summary" bg={NAVY} icon={User} />
                <p className="text-[12px] text-slate-600 leading-relaxed font-medium text-justify whitespace-pre-wrap px-1">{personal.summary}</p>
              </section>
            )}

            {/* SKILLS MULTI-GRID */}
            <div className="grid grid-cols-2 gap-8">
              
              <div className="space-y-8">
                {/* Core Expertise Bars */}
                {skills?.core?.length > 0 && (
                  <section>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-2 mb-4">Core Expertise</h3>
                    <div className="space-y-4">
                        {skills.core.map((s, i) => {
                          const width = Math.max(40, 100 - (i * 8)); 
                          return (
                              <div key={i} className="flex flex-col">
                                <span className="text-[10px] font-black uppercase text-slate-700 mb-1.5 break-words">{s}</span>
                                <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                                  <div className="h-full" style={{ width: `${width}%`, backgroundColor: i % 2 === 0 ? TEAL : YELLOW }}></div>
                                </div>
                              </div>
                          );
                        })}
                    </div>
                  </section>
                )}
              </div>

              <div className="space-y-8">
                {/* Software Skills Block */}
                {skills?.technical?.length > 0 && (
                  <section>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-2 mb-4">Technical Tools</h3>
                    <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                        <div className="h-16 w-16 rounded-full flex items-center justify-center shrink-0" style={{ background: `conic-gradient(${TEAL} 60%, ${YELLOW} 60% 85%, ${NAVY} 85%)` }}>
                          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center"><Database size={16} color={NAVY}/></div>
                        </div>
                        <ul className="text-[10px] font-bold text-slate-600 uppercase tracking-widest space-y-2 w-full break-words">
                          {skills.technical.slice(0, 6).map((s, i) => <li key={i}>• {s}</li>)}
                        </ul>
                    </div>
                  </section>
                )}

                {/* Soft Skills Pills */}
                {skills?.soft?.length > 0 && (
                  <section>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-2 mb-4">Personal Profile</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.soft.map((s, i) => (
                          <div key={i} className="flex items-center justify-between bg-white px-3 py-2 rounded-lg shadow-sm text-[9px] font-black uppercase text-white tracking-widest break-words" style={{ backgroundColor: TEAL }}>
                              {s} <div className="h-1.5 w-1.5 rounded-full bg-white opacity-50 ml-2"></div>
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
        <div className="flex w-full h-full flex-1">
          
          {/* Continuous Navy Sidebar (Empty/Decorative for Page 2) */}
          <div className="w-[33%] shrink-0 flex flex-col items-center py-12 px-6" style={{ backgroundColor: NAVY }}>
             <div className="sticky top-12 flex flex-col items-center text-teal-400 opacity-30">
               <Briefcase size={64} strokeWidth={1} />
               <div className="text-[10px] font-black uppercase tracking-[0.4em] mt-4 rotate-90 origin-left translate-x-4 w-40 text-center">Career Details</div>
             </div>
          </div>

          {/* Detailed Experience & Projects Right Column */}
          <div className="w-[67%] bg-slate-50/50 p-10 flex flex-col space-y-12">
            
            {/* WORK EXPERIENCE */}
            {experience.length > 0 && (
              <div>
                <SectionTitle title="Detailed Work Experience" bg={TEAL} icon={Briefcase} />
                
                <div className="mt-6 border-l-2 ml-4 space-y-10" style={{ borderColor: TEAL }}>
                  {experience.map((exp, i) => (
                    <React.Fragment key={exp.id || i}>
                      {exp.pageBreak && <div className="manual-page-break" />}
                      <div className="relative pl-8">
                        {/* Timeline Tracker */}
                        <div className="absolute -left-[10px] top-1.5 h-5 w-5 rounded-full border-[4px] border-white shadow-sm" style={{ backgroundColor: NAVY }}></div>
                        
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-[16px] font-black text-slate-800 uppercase tracking-tight break-words">{exp.role}</h3>
                              <p className="text-[12px] font-black text-teal-600 uppercase tracking-widest mt-1 break-words">{exp.company}</p>
                            </div>
                            <span className="shrink-0 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">{exp.date}</span>
                          </div>
                          
                          <div className="mt-5 text-[12px] text-slate-600 leading-loose font-medium">
                            <ul className="list-disc pl-5 space-y-2.5 marker:text-teal-400">
                              {(exp.desc || '').split('\n').map((line, idx) => line.trim() && <li key={idx}>{line}</li>)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* STRATEGIC PROJECTS (MOVED TO PAGE 2) */}
            {projects.length > 0 && (
              <div className="pt-4 border-t border-slate-200">
                <SectionTitle title="Strategic Projects" bg={NAVY} icon={FolderGit2} />
                
                <div className="mt-4 grid grid-cols-1 gap-6">
                  {projects.map((proj, i) => (
                    <React.Fragment key={proj.id || i}>
                      {proj.pageBreak && <div className="manual-page-break" />}
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
                        {/* Decorative side accent */}
                        <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: YELLOW }}></div>
                        <h3 className="text-[14px] font-black text-slate-800 uppercase tracking-tight mb-3 break-words">{proj.name}</h3>
                        <p className="text-[12px] text-slate-600 leading-relaxed font-medium whitespace-pre-wrap break-words">{proj.desc}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default InfoNavy;