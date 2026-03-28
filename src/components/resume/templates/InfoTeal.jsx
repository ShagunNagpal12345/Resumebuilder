import React from 'react';
import { Mail, Phone, MapPin, Linkedin, User, Briefcase, GraduationCap, Code, Award, Trophy, Globe, FolderGit2 } from 'lucide-react';

const InfoTeal = ({ data }) => {
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
  
  const TEAL = '#0f766e';
  
  // Safely colorizes the second word of the title if it exists
  const SectionHeader = ({ title }) => {
    const words = title.split(' ');
    return (
      <h2 className="text-[13px] font-black uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2 text-slate-800 text-center">
        {words.map((word, i) => (
           <span key={i} style={{ color: i === 1 ? TEAL : '#1e293b' }}>{word}</span>
        ))}
      </h2>
    );
  };

  return (
    <div className="mx-auto w-full max-w-[210mm] bg-white shadow-xl resume-preview-wrapper flex flex-col font-sans">
      
      {/* =========================================
          PAGE 1: THE EXECUTIVE DASHBOARD
          ========================================= */}
      <div className="flex flex-col w-full min-h-[297mm] overflow-hidden">
        
        {/* HEADER */}
        <div className="p-10 flex items-center gap-8 bg-slate-50/50 border-b border-slate-200 shrink-0">
          {personal.photo && (
            <img src={personal.photo} alt="Profile" className="h-28 w-28 rounded-full object-cover shadow-md border-[4px] border-white"/>
          )}
          <div className="flex-1">
             <h1 className="text-5xl font-light uppercase tracking-widest text-slate-800 mb-2 break-words leading-none">{personal.name || "Your Name"}</h1>
             <p className="text-[13px] font-black uppercase tracking-[0.2em] break-words" style={{ color: TEAL }}>{personal.title}</p>
          </div>
          <div className="space-y-2.5 text-[10px] font-bold text-slate-500 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 shrink-0 max-w-[200px] break-words">
             {personal.phone && <div className="flex items-center gap-2"><Phone size={14} color={TEAL}/> {personal.phone}</div>}
             {personal.location && <div className="flex items-center gap-2"><MapPin size={14} color={TEAL}/> {personal.location}</div>}
             {personal.email && <div className="flex items-center gap-2 break-all"><Mail size={14} color={TEAL}/> {personal.email}</div>}
             {personal.linkedin && <div className="flex items-center gap-2 break-all"><Linkedin size={14} color={TEAL}/> {personal.linkedin}</div>}
          </div>
        </div>

        <div className="flex-1 flex">
          {/* LEFT COLUMN */}
          <div className="w-[55%] p-10 pr-8 border-r border-slate-100 space-y-10">
             
             {personal.summary && (
               <section>
                  <SectionHeader title="Profile Summary" />
                  <ul className="space-y-2.5">
                     {personal.summary.split('. ').map((sentence, idx) => sentence.trim() && (
                        <li key={idx} className="flex items-start gap-2.5 text-[12px] text-slate-600 font-medium leading-relaxed">
                           <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: TEAL }}></span>
                           {sentence}.
                        </li>
                     ))}
                  </ul>
               </section>
             )}

             {education.length > 0 && (
               <section>
                  <SectionHeader title="Education & Credentials" />
                  <div className="space-y-5">
                    {education.map((edu, i) => (
                      <div key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                         <div className="flex justify-between items-start mb-2">
                           <h3 className="text-[13px] font-black text-slate-800 uppercase tracking-tight break-words">{edu.degree}</h3>
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-2 py-1 rounded shadow-sm shrink-0">{edu.date}</span>
                         </div>
                         <p className="text-[11px] font-bold uppercase tracking-widest text-teal-600 break-words">{edu.school}</p>
                      </div>
                    ))}
                  </div>
               </section>
             )}

             <div className="grid grid-cols-2 gap-6">
                {certifications.length > 0 && (
                  <section>
                     <h2 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2 text-slate-800 border-b border-slate-100 pb-2">
                        <Award size={14} color={TEAL}/> Certifications
                     </h2>
                     <div className="space-y-4">
                       {certifications.map((cert, i) => (
                         <div key={i} className="text-center">
                            <div className="text-[10px] font-black text-slate-800 uppercase tracking-tight break-words">{cert.name}</div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 break-words">{cert.issuer}</div>
                         </div>
                       ))}
                     </div>
                  </section>
                )}

                {awards.length > 0 && (
                  <section>
                     <h2 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2 text-slate-800 border-b border-slate-100 pb-2">
                        <Trophy size={14} color={TEAL}/> Awards
                     </h2>
                     <div className="space-y-4">
                       {awards.map((aw, i) => (
                         <div key={i} className="text-center">
                            <div className="text-[10px] font-black text-slate-800 uppercase tracking-tight break-words">{aw.name}</div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 break-words">{aw.issuer}</div>
                         </div>
                       ))}
                     </div>
                  </section>
                )}
             </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-[45%] p-10 pl-8 space-y-12 bg-slate-50/30">
             
             {/* CSS Circular Graphic Layout */}
             {skills?.core?.length > 0 && (
               <section>
                  <SectionHeader title="Key Skills" />
                  <div className="relative h-48 w-full flex items-center justify-center">
                     {/* Center Circle */}
                     <div className="absolute h-16 w-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10" style={{ backgroundColor: TEAL }}>
                        <User size={24} color="white"/>
                     </div>
                     {/* Orbiting Skills (up to 8 in circle to prevent overlapping mess) */}
                     {skills.core.slice(0, 8).map((skill, i) => {
                        const angle = (i * 360) / Math.min(skills.core.length, 8);
                        const transform = `rotate(${angle}deg) translate(85px) rotate(-${angle}deg)`;
                        return (
                           <div key={i} className="absolute text-[9px] font-black text-slate-700 uppercase tracking-tight text-center w-24 leading-tight break-words" style={{ transform }}>
                              {skill}
                           </div>
                        );
                     })}
                     <div className="absolute h-[140px] w-[140px] rounded-full border-[10px] border-slate-100 opacity-50"></div>
                  </div>
                  
                  {/* Overflow Skills wrapped safely below */}
                  {skills.core.length > 8 && (
                     <div className="flex flex-wrap justify-center gap-2 mt-6">
                       {skills.core.slice(8).map((s, i) => (
                          <span key={i} className="text-[9px] font-black uppercase text-slate-500 bg-white px-2 py-1 rounded shadow-sm border border-slate-100">{s}</span>
                       ))}
                     </div>
                  )}
               </section>
             )}

             {/* Technical Bars */}
             {skills?.technical?.length > 0 && (
               <section>
                  <SectionHeader title="Technical Proficiency" />
                  <div className="space-y-4">
                     {skills.technical.map((s, i) => {
                        const width = Math.max(30, 100 - (i * 7)); // Ensure it never goes to 0
                        return (
                           <div key={i} className="flex flex-col gap-1 text-[11px]">
                              <span className="font-black text-slate-700 uppercase tracking-widest break-words">{s}</span>
                              <div className="h-2 w-full rounded-full overflow-hidden bg-slate-100">
                                 <div className="h-full rounded-full opacity-80" style={{ width: `${width}%`, backgroundColor: TEAL }}></div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </section>
             )}

             {/* Soft Skills */}
             {skills?.soft?.length > 0 && (
                <section>
                   <SectionHeader title="Interpersonal" />
                   <div className="flex flex-wrap justify-center gap-2">
                      {skills.soft.map((s, i) => (
                         <span key={i} className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-sm break-words" style={{ backgroundColor: TEAL }}>
                           {s}
                         </span>
                      ))}
                   </div>
                </section>
             )}

             {/* Languages */}
             {languages.length > 0 && (
               <section>
                  <SectionHeader title="Languages" />
                  <div className="flex flex-wrap justify-center gap-3">
                     {languages.map((l, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                           <Globe size={14} color={TEAL}/>
                           <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest break-words">{l.name}</span>
                           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">({l.level})</span>
                        </div>
                     ))}
                  </div>
               </section>
             )}
          </div>
        </div>
      </div>

      {/* =========================================
          PAGE 2+: DETAILED WORK EXPERIENCE & PROJECTS
          ========================================= */}
      {(experience.length > 0 || projects.length > 0) && (
        <div className="flex-1 w-full bg-slate-50/50 p-12 border-t border-slate-200">
           
           {experience.length > 0 && (
             <div className="max-w-5xl mx-auto mb-16">
                <div className="flex items-center justify-center gap-3 mb-8 text-slate-800">
                   <Briefcase size={20} color={TEAL} />
                   <h2 className="text-[16px] font-black uppercase tracking-[0.2em]">Professional Experience</h2>
                </div>
                
                <div className="space-y-8 border-l-2 ml-4 pl-6" style={{ borderColor: TEAL }}>
                  {experience.map((exp, i) => (
                    <React.Fragment key={exp.id || i}>
                       {exp.pageBreak && <div className="manual-page-break" />}
                       <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                          {/* Timeline Dot */}
                          <div className="absolute -left-[35px] top-8 h-4 w-4 rounded-full border-[4px] border-white shadow-md" style={{ backgroundColor: TEAL }}></div>
                          
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-[16px] font-black text-slate-800 uppercase tracking-tight break-words">{exp.role}</h3>
                              <p className="text-[12px] font-black uppercase tracking-widest mt-1 break-words" style={{ color: TEAL }}>{exp.company}</p>
                            </div>
                            <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 shrink-0">{exp.date}</span>
                          </div>
                          
                          <div className="mt-4 text-[12px] text-slate-600 leading-loose font-medium">
                            <ul className="list-disc pl-5 space-y-2.5 marker:text-teal-500">
                              {(exp.desc || '').split('\n').map((line, idx) => line.trim() && <li key={idx}>{line}</li>)}
                            </ul>
                          </div>
                       </div>
                    </React.Fragment>
                  ))}
                </div>
             </div>
           )}

           {projects.length > 0 && (
             <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-8 text-slate-800">
                   <FolderGit2 size={20} color={TEAL} />
                   <h2 className="text-[16px] font-black uppercase tracking-[0.2em]">Projects & Initiatives</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {projects.map((proj, i) => (
                    <React.Fragment key={proj.id || i}>
                       {proj.pageBreak && <div className="manual-page-break" />}
                       <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                          <h3 className="text-[14px] font-black uppercase tracking-tight mb-3 break-words" style={{ color: TEAL }}>{proj.name}</h3>
                          <p className="text-[12px] text-slate-600 leading-relaxed font-medium whitespace-pre-wrap break-words">{proj.desc}</p>
                       </div>
                    </React.Fragment>
                  ))}
                </div>
             </div>
           )}

        </div>
      )}

    </div>
  );
};

export default InfoTeal;