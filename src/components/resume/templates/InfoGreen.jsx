import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Code, User, Target, Briefcase, GraduationCap, Award, Globe, Trophy } from 'lucide-react';

const InfoGreen = ({ data }) => {
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
  
  const GREEN = '#10b981';

  return (
    <div className="mx-auto w-full max-w-[210mm] bg-white shadow-xl resume-preview-wrapper flex flex-col font-sans relative">
      
      {/* =========================================
          PAGE 1: THE EXECUTIVE DASHBOARD
          ========================================= */}
      <div className="flex flex-col w-full min-h-[297mm] overflow-hidden relative">
        
        {/* HEADER */}
        <div className="p-12 pb-20 text-white shrink-0 flex justify-between items-start" style={{ backgroundColor: GREEN }}>
          <div className="w-[45%] pr-4">
             <h1 className="text-5xl font-black tracking-widest uppercase mb-3 leading-none break-words">{personal.name || "Your Name"}</h1>
             <p className="text-[11px] font-bold uppercase tracking-[0.3em] bg-white/20 inline-block px-3 py-1.5 rounded break-words">{personal.title}</p>
          </div>
          <div className="w-[45%] space-y-2.5 text-[10px] font-bold tracking-widest uppercase text-right pl-6 border-l-2 border-white/30 break-words">
             {personal.phone && <div className="flex items-center justify-end gap-2"><Phone size={14}/> {personal.phone}</div>}
             {personal.email && <div className="flex items-center justify-end gap-2 break-all"><Mail size={14}/> {personal.email}</div>}
             {personal.location && <div className="flex items-center justify-end gap-2"><MapPin size={14}/> {personal.location}</div>}
             {personal.linkedin && <div className="flex items-center justify-end gap-2 break-all"><Linkedin size={14}/> {personal.linkedin}</div>}
          </div>
        </div>

        {/* FLOATING PHOTO */}
        {personal.photo && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full border-[6px] border-white shadow-xl bg-white overflow-hidden z-20">
             <div className="h-full w-full rounded-full border-4 border-emerald-500 overflow-hidden">
                <img src={personal.photo} alt="Profile" className="h-full w-full object-cover"/>
             </div>
          </div>
        )}

        {/* PAGE 1 CONTENT (2-COLUMNS) */}
        <div className="flex-1 flex mt-4">
          
          {/* LEFT COLUMN */}
          <div className="w-[45%] p-10 pt-16 border-r-4 border-slate-50 space-y-10">
             
             {personal.summary && (
               <section>
                  <h2 className="text-[13px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 text-slate-800">
                     <User size={16} color={GREEN}/> Profile Summary
                  </h2>
                  <p className="text-[11.5px] leading-relaxed text-slate-600 font-medium text-justify italic whitespace-pre-wrap px-1">{personal.summary}</p>
               </section>
             )}

             {skills?.core?.length > 0 && (
               <section>
                  <h2 className="text-[13px] font-black uppercase tracking-[0.2em] mb-5 flex items-center gap-2 text-slate-800">
                     <Target size={16} color={GREEN}/> Core Expertise
                  </h2>
                  <div className="flex flex-wrap gap-2">
                     {skills.core.map((s, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-100 break-words">
                          {s}
                        </span>
                     ))}
                  </div>
               </section>
             )}

             {skills?.technical?.length > 0 && (
               <section>
                  <h2 className="text-[13px] font-black uppercase tracking-[0.2em] mb-5 flex items-center gap-2 text-slate-800">
                     <Code size={16} color={GREEN}/> Technical Skills
                  </h2>
                  <div className="space-y-3">
                     {skills.technical.map((s, i) => {
                        const width = Math.max(30, 100 - (i * 6));
                        return (
                           <div key={i} className="flex flex-col">
                              <span className="text-[10px] font-black uppercase text-slate-500 mb-1 break-words">{s}</span>
                              <div className="h-2 w-full bg-slate-100 rounded-sm overflow-hidden">
                                 <div className="h-full rounded-sm opacity-80" style={{ width: `${width}%`, backgroundColor: GREEN }}></div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </section>
             )}

             {skills?.soft?.length > 0 && (
               <section>
                  <h2 className="text-[13px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 text-slate-800">
                     <User size={16} color={GREEN}/> Interpersonal
                  </h2>
                  <div className="flex flex-wrap gap-2">
                     {skills.soft.map((s, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-sm break-words" style={{ backgroundColor: GREEN }}>
                          {s}
                        </span>
                     ))}
                  </div>
               </section>
             )}

          </div>

          {/* RIGHT COLUMN */}
          <div className="w-[55%] p-10 pt-16 space-y-10 bg-slate-50/30">
             
             {education.length > 0 && (
               <section>
                  <h2 className="text-[13px] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2 text-slate-800">
                     <GraduationCap size={16} color={GREEN}/> Education
                  </h2>
                  <div className="space-y-5 border-l-2 ml-2 pl-5" style={{ borderColor: GREEN }}>
                    {education.map((edu, i) => (
                      <React.Fragment key={edu.id || i}>
                         {edu.pageBreak && <div className="manual-page-break" />}
                         <div className="relative">
                            <div className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-white" style={{ backgroundColor: GREEN }}></div>
                            <h3 className="text-[13px] font-black uppercase text-emerald-600 break-words">{edu.degree}</h3>
                            <p className="text-[11px] font-bold text-slate-600 uppercase tracking-widest mt-1 break-words">{edu.school}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{edu.date}</p>
                         </div>
                      </React.Fragment>
                    ))}
                  </div>
               </section>
             )}

             {projects.length > 0 && (
               <section>
                  <h2 className="text-[13px] font-black uppercase tracking-[0.2em] mb-5 flex items-center gap-2 text-slate-800">
                     <Code size={16} color={GREEN}/> Major Initiatives
                  </h2>
                  <div className="grid grid-cols-1 gap-5">
                     {projects.map((proj, i) => (
                        <React.Fragment key={proj.id || i}>
                           {proj.pageBreak && <div className="manual-page-break" />}
                           <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                              <h3 className="text-[12px] font-black text-emerald-600 uppercase tracking-tight mb-2 break-words">{proj.name}</h3>
                              <p className="text-[11px] text-slate-600 leading-relaxed font-medium whitespace-pre-wrap break-words">{proj.desc}</p>
                           </div>
                        </React.Fragment>
                     ))}
                  </div>
               </section>
             )}

             <div className="grid grid-cols-2 gap-6">
                {certifications.length > 0 && (
                  <section>
                     <h2 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 text-slate-800 border-b border-slate-200 pb-2">
                        <Award size={14} color={GREEN}/> Certifications
                     </h2>
                     <div className="space-y-4">
                       {certifications.map((cert, i) => (
                          <div key={cert.id || i} className="border-l-2 pl-3" style={{ borderColor: GREEN }}>
                             <div className="text-[10px] font-black uppercase tracking-tight text-slate-800 break-words">{cert.name}</div>
                             <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-1 break-words">{cert.issuer}</div>
                          </div>
                       ))}
                     </div>
                  </section>
                )}

                {awards.length > 0 && (
                  <section>
                     <h2 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 text-slate-800 border-b border-slate-200 pb-2">
                        <Trophy size={14} color={GREEN}/> Awards
                     </h2>
                     <div className="space-y-4">
                       {awards.map((aw, i) => (
                          <div key={aw.id || i} className="border-l-2 pl-3" style={{ borderColor: GREEN }}>
                             <div className="text-[10px] font-black uppercase tracking-tight text-slate-800 break-words">{aw.name}</div>
                             <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-1 break-words">{aw.issuer}</div>
                          </div>
                       ))}
                     </div>
                  </section>
                )}
             </div>

             {languages.length > 0 && (
               <section>
                  <h2 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 text-slate-800 border-b border-slate-200 pb-2">
                     <Globe size={14} color={GREEN}/> Languages
                  </h2>
                  <div className="flex flex-wrap gap-3">
                     {languages.map((l, i) => (
                        <div key={l.id || i} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                           <span className="h-2 w-2 rounded-full" style={{ backgroundColor: GREEN }}></span>
                           <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest break-words">{l.name}</span>
                           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{l.level}</span>
                        </div>
                     ))}
                  </div>
               </section>
             )}
          </div>
        </div>
      </div>

      {/* =========================================
          PAGE 2+: DETAILED WORK EXPERIENCE
          ========================================= */}
      {experience.length > 0 && (
        <div className="flex-1 w-full bg-slate-50/50 p-10 pt-12 border-t-4 border-emerald-500">
           <h2 className="text-[15px] font-black uppercase tracking-[0.2em] mb-8 flex items-center justify-center gap-3 text-slate-800">
              <Briefcase size={20} color={GREEN}/> Work Experience History
           </h2>
           
           <div className="max-w-4xl mx-auto space-y-8">
              {experience.map((exp, i) => (
                <React.Fragment key={exp.id || i}>
                   {exp.pageBreak && <div className="manual-page-break" />}
                   <div className="relative pl-8 border-l-2" style={{ borderColor: GREEN }}>
                      {/* Timeline Dot */}
                      <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-[4px] border-white shadow-sm" style={{ backgroundColor: GREEN }}></div>
                      
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                         <div className="flex justify-between items-start mb-2">
                            <div>
                               <h3 className="text-[16px] font-black uppercase text-emerald-600 tracking-tight break-words">{exp.role}</h3>
                               <div className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mt-1 break-words">{exp.company}</div>
                            </div>
                            <span className="shrink-0 bg-slate-100 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">{exp.date}</span>
                         </div>
                         <div className="mt-5 text-[12px] text-slate-600 leading-loose font-medium">
                            <ul className="list-disc pl-5 space-y-2.5 marker:text-emerald-400">
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

    </div>
  );
};

export default InfoGreen;