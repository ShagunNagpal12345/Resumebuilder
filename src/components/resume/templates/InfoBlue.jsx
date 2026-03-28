import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Target, Lightbulb, Zap, Shield, Briefcase, GraduationCap, Award, Globe, Code, Trophy, FolderGit2 } from 'lucide-react';

const InfoBlue = ({ data }) => {
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
  
  const BLUE = '#1d4ed8'; // Royal Blue

  // Helper to convert language text to a percentage width for the progress bar
  const getLangPct = (level) => {
    const l = (level || '').toLowerCase();
    if (l.includes('native') || l.includes('fluent')) return '95%';
    if (l.includes('advanced') || l.includes('proficient')) return '80%';
    if (l.includes('intermediate')) return '60%';
    return '40%';
  };

  const softSkillsIcons = [<Target size={24}/>, <Lightbulb size={24}/>, <Zap size={24}/>, <Shield size={24}/>];

  return (
    <div className="mx-auto flex w-full max-w-[210mm] overflow-hidden bg-white shadow-xl resume-preview-wrapper font-sans flex-col relative">
      
      {/* =========================================
          PAGE 1: THE EXECUTIVE DASHBOARD
          ========================================= */}
      <div className="flex w-full min-h-[297mm] overflow-hidden">
        
        {/* LEFT SIDEBAR (BLUE) */}
        <div className="w-[33%] shrink-0 text-white flex flex-col py-12 px-6" style={{ backgroundColor: BLUE }}>
          
          <div className="flex flex-col items-center mb-10 border-b border-blue-400/30 pb-10">
            {personal.photo && (
              <div className="mb-6 h-36 w-36 overflow-hidden rounded-full border-[5px] border-white shadow-xl">
                <img src={personal.photo} alt="Profile" className="h-full w-full object-cover"/>
              </div>
            )}
            
            <div className="w-full space-y-4 text-center text-[10px] text-white/90 font-bold uppercase tracking-widest break-words">
               {personal.phone && <div className="flex items-center justify-center gap-2"><Phone size={12}/> {personal.phone}</div>}
               {personal.email && <div className="flex items-center justify-center gap-2 break-all"><Mail size={12}/> {personal.email}</div>}
               {personal.location && <div className="flex items-center justify-center gap-2 break-words"><MapPin size={12}/> {personal.location}</div>}
               {personal.linkedin && <div className="flex items-center justify-center gap-2 break-all"><Linkedin size={12}/> {personal.linkedin}</div>}
            </div>
          </div>

          <div className="flex-1 flex flex-col space-y-12">
            
            {/* EDUCATION */}
            {education.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                   <GraduationCap size={16} className="text-blue-300"/> 
                   <h3 className="text-[12px] font-black uppercase tracking-widest text-white">Education</h3>
                </div>
                <div className="space-y-5 border-l-2 border-blue-400 ml-2 pl-4">
                  {education.map((edu, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[21px] top-1 h-2 w-2 rounded-full bg-white"></div>
                      <h4 className="text-[12px] font-black uppercase text-blue-200 break-words leading-tight">{edu.degree}</h4>
                      <p className="text-[10px] font-bold uppercase text-white/90 mt-1 break-words">{edu.school}</p>
                      <p className="text-[9px] font-bold uppercase text-blue-300 tracking-widest mt-0.5">{edu.date}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Infographic Soft Skills (Dynamic to array length) */}
            {skills?.soft?.length > 0 && (
              <section className="w-full space-y-6 pt-4">
                <h3 className="text-[12px] font-black uppercase tracking-widest text-white text-center mb-6 border-b border-blue-400/30 pb-4">Core Strengths</h3>
                <div className="grid grid-cols-2 gap-y-8 gap-x-2">
                  {skills.soft.map((s, i) => (
                    <div key={i} className="flex flex-col items-center text-center px-1">
                      <div className="h-12 w-12 rounded-full border-[3px] border-white flex items-center justify-center mb-3 shadow-md bg-white/10">
                        {softSkillsIcons[i % softSkillsIcons.length]}
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest leading-tight break-words">{s}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* RIGHT MAIN AREA (PAGE 1) */}
        <div className="w-[67%] flex flex-col bg-slate-50/50">
          
          {/* HEADER */}
          <div className="px-10 py-12 shrink-0 bg-white shadow-sm border-b border-slate-100 text-center">
             <h1 className="text-5xl font-black uppercase tracking-tighter mb-3 break-words leading-none" style={{ color: BLUE }}>{personal.name || "Your Name"}</h1>
             <p className="text-[13px] font-black text-slate-800 uppercase tracking-[0.25em] break-words">{personal.title}</p>
          </div>

          <div className="flex-1 flex flex-col p-10 space-y-10">
            
            {/* SUMMARY */}
            {personal.summary && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-7 w-7 rounded-lg flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: BLUE }}>
                    <Target size={14}/>
                  </div>
                  <h2 className="text-[13px] font-black uppercase tracking-widest text-slate-800">Profile Summary</h2>
                </div>
                <p className="text-[12px] text-slate-600 leading-relaxed font-medium text-justify whitespace-pre-wrap px-2">{personal.summary}</p>
              </section>
            )}

            <div className="grid grid-cols-2 gap-8">
              {/* CORE EXPERTISE */}
              {skills?.core?.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="h-7 w-7 rounded-lg flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: BLUE }}>
                      <Lightbulb size={14}/>
                    </div>
                    <h2 className="text-[13px] font-black uppercase tracking-widest text-slate-800">Expertise</h2>
                  </div>
                  <div className="space-y-3">
                    {skills.core.map((s, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white p-2.5 rounded-lg shadow-sm border border-slate-100">
                        <div className="mt-1 h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: BLUE }}></div>
                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest break-words">{s}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* TECHNICAL SKILLS */}
              {skills?.technical?.length > 0 && (
                 <section>
                   <div className="flex items-center gap-2 mb-5">
                     <div className="h-7 w-7 rounded-lg flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: BLUE }}>
                       <Code size={14}/>
                     </div>
                     <h2 className="text-[13px] font-black uppercase tracking-widest text-slate-800">Technical</h2>
                   </div>
                   <div className="space-y-4 bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                     {skills.technical.map((s, i) => {
                         const width = Math.max(40, 100 - (i * 8)); 
                         return (
                           <div key={i} className="flex flex-col gap-1.5">
                             <div className="flex justify-between text-[9px] font-black text-slate-600 uppercase tracking-widest">
                               <span className="break-words">{s}</span>
                             </div>
                             <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                               <div className="h-full rounded-full" style={{ width: `${width}%`, backgroundColor: BLUE }}></div>
                             </div>
                           </div>
                         );
                     })}
                   </div>
                 </section>
              )}
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
              {/* LANGUAGES */}
              {languages.length > 0 && (
                 <section>
                   <div className="flex items-center gap-2 mb-5">
                     <div className="h-7 w-7 rounded-lg flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: BLUE }}>
                       <Globe size={14}/>
                     </div>
                     <h2 className="text-[13px] font-black uppercase tracking-widest text-slate-800">Languages</h2>
                   </div>
                   <div className="space-y-4">
                     {languages.map((l, i) => (
                       <div key={i}>
                         <div className="flex justify-between text-[10px] font-black text-slate-700 uppercase mb-1.5 break-words">
                           <span>{l.name} <span className="text-[9px] font-bold text-slate-400">({l.level})</span></span>
                         </div>
                         <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                           <div className="h-full rounded-full" style={{ width: getLangPct(l.level), backgroundColor: BLUE }}></div>
                         </div>
                       </div>
                     ))}
                   </div>
                 </section>
              )}

              {/* CERTIFICATIONS & AWARDS */}
              <div className="space-y-8">
                {certifications.length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 mb-4 text-slate-800">
                       <Award size={16} color={BLUE}/> <h3 className="text-[12px] font-black uppercase tracking-widest">Licenses</h3>
                    </div>
                    <div className="space-y-3 border-l-2 pl-3" style={{ borderColor: BLUE }}>
                      {certifications.map((cert, i) => (
                         <div key={i}>
                            <div className="text-[10px] font-black uppercase tracking-tight text-slate-800 break-words">{cert.name}</div>
                            <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mt-0.5 break-words">{cert.issuer}</div>
                         </div>
                      ))}
                    </div>
                  </section>
                )}

                {awards.length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 mb-4 text-slate-800">
                       <Trophy size={16} color={BLUE}/> <h3 className="text-[12px] font-black uppercase tracking-widest">Awards</h3>
                    </div>
                    <div className="space-y-3 border-l-2 pl-3" style={{ borderColor: BLUE }}>
                      {awards.map((aw, i) => (
                         <div key={i}>
                            <div className="text-[10px] font-black uppercase tracking-tight text-slate-800 break-words">{aw.name}</div>
                            <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mt-0.5 break-words">{aw.issuer}</div>
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
        <div className="flex-1 w-full bg-slate-50/50 p-12 border-t-4" style={{ borderColor: BLUE }}>
           
           {experience.length > 0 && (
             <div className="max-w-5xl mx-auto mb-16">
                <div className="flex items-center gap-3 mb-8 text-slate-800">
                   <div className="h-10 w-10 rounded-xl flex items-center justify-center text-white shadow-md" style={{ backgroundColor: BLUE }}>
                     <Briefcase size={20}/>
                   </div>
                   <h2 className="text-[18px] font-black uppercase tracking-[0.2em]">Professional Experience</h2>
                </div>
                
                <div className="space-y-8 border-l-[3px] ml-5 pl-8" style={{ borderColor: BLUE }}>
                  {experience.map((exp, i) => (
                    <React.Fragment key={exp.id || i}>
                       {exp.pageBreak && <div className="manual-page-break" />}
                       <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                          {/* Timeline Dot */}
                          <div className="absolute -left-[45px] top-8 h-6 w-6 rounded-full border-[5px] border-white shadow-md" style={{ backgroundColor: BLUE }}></div>
                          
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-[16px] font-black text-slate-800 uppercase tracking-tight break-words">{exp.role}</h3>
                              <p className="text-[12px] font-black uppercase tracking-widest mt-1 break-words" style={{ color: BLUE }}>{exp.company}</p>
                            </div>
                            <span className="shrink-0 text-[11px] font-black text-blue-700 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">{exp.date}</span>
                          </div>
                          
                          <div className="mt-5 text-[12px] text-slate-600 leading-loose font-medium">
                            <ul className="list-disc pl-5 space-y-2.5 marker:text-blue-500">
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
                <div className="flex items-center gap-3 mb-8 text-slate-800">
                   <div className="h-10 w-10 rounded-xl flex items-center justify-center text-white shadow-md" style={{ backgroundColor: BLUE }}>
                     <FolderGit2 size={20}/>
                   </div>
                   <h2 className="text-[18px] font-black uppercase tracking-[0.2em]">Strategic Projects</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-6 ml-5">
                  {projects.map((proj, i) => (
                    <React.Fragment key={proj.id || i}>
                       {proj.pageBreak && <div className="manual-page-break" />}
                       <div className="bg-white p-8 rounded-3xl shadow-sm border-t-[5px]" style={{ borderColor: BLUE }}>
                          <h3 className="text-[14px] font-black uppercase tracking-tight mb-3 break-words text-slate-800">{proj.name}</h3>
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

export default InfoBlue;