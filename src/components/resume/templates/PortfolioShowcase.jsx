import React from 'react';
import { Briefcase, FolderKanban, GraduationCap, Award } from 'lucide-react';
import { getNameParts, mergeSkills, PRINT_STYLE_BLOCK, splitLines } from './creativeTemplateUtils';

const PortfolioShowcase = ({ data }) => {
  const {
    personal = {},
    experience = [],
    projects = [],
    education = [],
    skills = {},
    certifications = [],
    languages = [],
    awards = [],
  } = data || {};

  const [firstName, lastName] = getNameParts(personal.name || 'John Doe');
  const allSkills = mergeSkills(skills, 24);

  return (
    <div className="w-full min-h-[297mm] bg-[#1e293b] text-white font-sans flex overflow-hidden">
      <aside className="w-[35%] bg-[#0f172a] p-8 flex flex-col border-r border-white/5 shrink-0">
        <div className="rounded-3xl overflow-hidden bg-slate-800 border border-white/10 shadow-xl mb-8">
          {personal.photo ? (
            <img src={personal.photo} alt="Profile" className="h-64 w-full object-cover" />
          ) : (
            <div className="h-64 w-full bg-gradient-to-br from-indigo-500 to-emerald-400 opacity-80" />
          )}
        </div>

        <section className="space-y-4 text-xs text-slate-300 mb-10">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-4">Contact</h2>
          {personal.email && <div className="break-all leading-relaxed">{personal.email}</div>}
          {personal.phone && <div className="leading-relaxed">{personal.phone}</div>}
          {personal.location && <div className="leading-relaxed">{personal.location}</div>}
          {personal.linkedin && <div className="break-all leading-relaxed">{personal.linkedin}</div>}
        </section>

        {allSkills.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-6">Expertise</h2>
            <div className="space-y-4">
              {allSkills.map((skill, index) => {
                const level = 60 + ((index * 9) % 35);
                return (
                  <div key={`${skill}-${index}`} className="break-inside-avoid">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider mb-2 gap-3">
                      <span className="leading-tight">{skill}</span>
                      <span className="text-slate-500 shrink-0">{level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${level}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section className="mb-10 break-inside-avoid">
            <div className="flex items-center gap-2 mb-6 text-emerald-400">
              <GraduationCap size={16} />
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em]">Education</h2>
            </div>
            <div className="space-y-5">
              {education.map((edu, index) => (
                <div key={`${edu.degree}-${edu.school}-${index}`} className="break-inside-avoid">
                  <div className="text-sm font-bold text-white leading-tight">{edu.degree}</div>
                  <div className="text-xs text-emerald-400/80 mt-1 leading-relaxed">{edu.school}</div>
                  <div className="text-[10px] text-slate-500 mt-1">{edu.date}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {(languages.length > 0 || certifications.length > 0 || awards.length > 0) && (
          <section className="mt-auto pt-6 border-t border-slate-800 space-y-6">
            {languages.length > 0 && (
              <div>
                <h4 className="text-[10px] font-black uppercase text-slate-500 mb-4 tracking-widest">Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang, index) => (
                    <div key={`${lang.name}-${index}`} className="text-[11px] font-bold text-white bg-slate-800 px-3 py-1 rounded-full border border-white/5">
                      {lang.name} <span className="text-emerald-400 ml-1 opacity-70">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {certifications.length > 0 && (
              <div>
                <h4 className="text-[10px] font-black uppercase text-slate-500 mb-4 tracking-widest">Certifications</h4>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={`${cert.name}-${index}`} className="text-[11px] font-medium text-slate-300 leading-relaxed">
                      • {cert.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {awards.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4 text-emerald-400">
                  <Award size={16} />
                  <h4 className="text-[10px] font-black uppercase tracking-widest">Awards</h4>
                </div>
                <div className="space-y-2">
                  {awards.map((award, index) => (
                    <div key={`${award.name}-${index}`} className="text-[11px] text-slate-300 leading-relaxed">
                      <span className="font-bold text-white">{award.name}</span>
                      {award.issuer ? <span className="text-slate-400"> · {award.issuer}</span> : null}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </aside>

      <main className="w-[65%] p-10 flex flex-col">
        <header className="mb-10 break-inside-avoid">
          <h1 className="text-5xl font-black tracking-tighter text-white uppercase leading-none">
            {firstName}
            {lastName ? (
              <>
                <br />
                <span className="text-emerald-400">{lastName}</span>
              </>
            ) : null}
          </h1>
          <div className="h-1 w-20 bg-emerald-400 mt-4 mb-4" />
          <p className="text-xl font-medium text-slate-400 break-words">{personal.title}</p>
        </header>

        {personal.summary && (
          <section className="mb-12 break-inside-avoid">
            <p className="text-sm leading-relaxed text-slate-300 italic">"{personal.summary}"</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={18} className="text-emerald-400" />
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Experience History</h2>
            </div>
            <div className="space-y-10">
              {experience.map((exp, index) => (
                <div key={`${exp.role}-${exp.company}-${index}`} className="relative pl-6 border-l border-slate-700 break-inside-avoid">
                  <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-base font-bold leading-tight">{exp.role}</h3>
                    <span className="text-[10px] font-bold py-1 px-2 bg-slate-800 rounded text-slate-400 uppercase shrink-0">{exp.date}</span>
                  </div>
                  <div className="text-sm text-emerald-400 font-semibold mb-3 break-words">{exp.company}</div>
                  <ul className="space-y-2">
                    {splitLines(exp.desc).map((line, lineIndex) => (
                      <li key={lineIndex} className="text-xs text-slate-400 leading-relaxed flex gap-2">
                        <span className="text-emerald-400">•</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-8">
              <FolderKanban size={18} className="text-emerald-400" />
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div key={`${project.name}-${index}`} className="p-4 rounded-2xl bg-white/5 border border-white/10 break-inside-avoid">
                  <div className="text-xs font-bold mb-2 text-emerald-400 uppercase tracking-wide">{project.name}</div>
                  <p className="text-[11px] text-slate-400 leading-snug whitespace-pre-wrap">{project.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <style jsx global>{PRINT_STYLE_BLOCK}</style>
    </div>
  );
};

export default PortfolioShowcase;
