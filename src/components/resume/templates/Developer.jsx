import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Developer = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = []
  } = data || {};

  const DARK = '#282c34';
  const GREEN = '#98c379';
  const BLUE = '#61afef';
  const ORANGE = '#e5c07b';

  const SectionTitle = ({ title }) => (
    <h2 className="mb-4 text-sm font-bold uppercase tracking-widest" style={{ color: ORANGE }}>
      &gt; {title}
    </h2>
  );

  return (
    <div className="mx-auto w-full max-w-[210mm] min-h-[1100px] bg-white shadow-lg resume-preview-wrapper flex flex-col" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
      
      {/* HEADER */}
      <div className="px-12 py-10 shrink-0" style={{ background: DARK }}>
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded-full bg-[#ff5f56]"></div>
          <div className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e]"></div>
          <div className="h-3.5 w-3.5 rounded-full bg-[#27c93f]"></div>
          <span className="ml-3 text-xs text-zinc-500 font-bold">~/resume.json</span>
        </div>
        
        <div className="flex items-center gap-8">
          {personal.photo && <img src={personal.photo} alt="Profile" className="h-28 w-28 shrink-0 rounded-2xl object-cover border-4" style={{ borderColor: '#3e4451' }}/>}
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-tighter break-words leading-none mb-2" style={{ color: GREEN }}>{personal.name || 'Your Name'}</h1>
            {personal.title && <p className="text-sm font-bold uppercase tracking-widest break-words" style={{ color: BLUE }}>// {personal.title}</p>}
            
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-400 font-bold uppercase tracking-wider">
              {personal.email && <span className="flex items-center gap-2 break-all"><Mail size={14}/> {personal.email}</span>}
              {personal.phone && <span className="flex items-center gap-2"><Phone size={14}/> {personal.phone}</span>}
              {personal.location && <span className="flex items-center gap-2 break-words"><MapPin size={14}/> {personal.location}</span>}
              {personal.linkedin && <span className="flex items-center gap-2 break-all"><Linkedin size={14}/> {personal.linkedin}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="p-12 flex-1 space-y-10 bg-slate-50/50">
        
        {personal.summary && (
          <section>
             <SectionTitle title="Summary" />
             <div className="border-l-2 pl-4" style={{ borderColor: '#3e4451' }}>
                <p className="text-xs leading-relaxed text-zinc-600 whitespace-pre-wrap font-medium break-words">{personal.summary}</p>
             </div>
          </section>
        )}

        {experience.length > 0 && (
          <section>
             <SectionTitle title="Experience" />
             <div className="border-l-2 pl-4 space-y-8" style={{ borderColor: '#3e4451' }}>
                {experience.map((exp, i) => (
                  <React.Fragment key={exp.id || i}>
                    {exp.pageBreak && <div className="manual-page-break" />}
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <div className="font-bold text-sm uppercase break-words" style={{ color: DARK }}>
                          {exp.role} <span style={{ color: BLUE }}>@ {exp.company}</span>
                        </div>
                        <span className="shrink-0 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest" style={{ background: '#f0f0f0', color: '#636d83' }}>{exp.date}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {(exp.desc || '').split('\n').map((line, idx) => line.trim() && (
                          <li key={idx} className="flex items-start gap-2 text-[11px] text-zinc-600 leading-relaxed font-medium">
                            <span className="mt-1 shrink-0 text-xs font-black" style={{ color: GREEN }}>$</span>
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

        <div className="grid grid-cols-2 gap-12">
            <div>
                {education.length > 0 && (
                  <section className="mb-10">
                     <SectionTitle title="Education" />
                     <div className="border-l-2 pl-4 space-y-5" style={{ borderColor: '#3e4451' }}>
                        {education.map((edu, i) => (
                          <React.Fragment key={edu.id || i}>
                            {edu.pageBreak && <div className="manual-page-break" />}
                            <div>
                               <div className="flex justify-between items-baseline mb-1">
                                  <span className="text-xs font-bold uppercase break-words" style={{ color: DARK }}>{edu.degree}</span>
                                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{edu.date}</span>
                               </div>
                               <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest break-words">{edu.school}</p>
                            </div>
                          </React.Fragment>
                        ))}
                     </div>
                  </section>
                )}

                {skills && Object.values(skills).flat().length > 0 && (
                  <section>
                    <SectionTitle title="Skills" />
                    <div className="border-l-2 pl-4 space-y-4" style={{ borderColor: '#3e4451' }}>
                       <div className="text-[11px] leading-relaxed text-zinc-600 font-bold uppercase tracking-wider break-words">
                          {[...(skills.core || []), ...(skills.technical || []), ...(skills.soft || [])].join(' | ')}
                       </div>
                    </div>
                  </section>
                )}
            </div>

            <div>
                {projects.length > 0 && (
                  <section className="mb-10">
                     <SectionTitle title="Projects" />
                     <div className="border-l-2 pl-4 space-y-6" style={{ borderColor: '#3e4451' }}>
                        {projects.map((proj, i) => (
                          <React.Fragment key={proj.id || i}>
                            {proj.pageBreak && <div className="manual-page-break" />}
                            <div>
                               <h3 className="text-xs font-bold uppercase tracking-widest mb-1 break-words" style={{ color: DARK }}>{proj.name}</h3>
                               <p className="text-[11px] leading-relaxed text-zinc-600 whitespace-pre-wrap break-words">{proj.desc}</p>
                            </div>
                          </React.Fragment>
                        ))}
                     </div>
                  </section>
                )}

                {certifications.length > 0 && (
                  <section>
                     <SectionTitle title="Certifications" />
                     <div className="border-l-2 pl-4 space-y-3" style={{ borderColor: '#3e4451' }}>
                        {certifications.map((cert, i) => (
                           <div key={cert.id || i} className="text-[11px] font-bold uppercase tracking-widest break-words">
                             <span style={{ color: DARK }}>{cert.name}</span>
                             <span className="text-zinc-400 ml-2">— {cert.issuer}</span>
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

export default Developer;