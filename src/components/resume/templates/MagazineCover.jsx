import React from 'react';
import { Mail, MapPin, Phone, PlayCircle } from 'lucide-react';
import { getNameParts, mergeSkills, PRINT_STYLE_BLOCK, splitLines } from './creativeTemplateUtils';

const MagazineCover = ({ data }) => {
  const {
    personal = {},
    experience = [],
    projects = [],
    skills = {},
    awards = [],
  } = data || {};

  const [firstName, lastName] = getNameParts(personal.name || 'Sumukh Mehta');
  const skillHighlights = mergeSkills(skills, 8);
  const lifestyleHighlights = [
    ...projects.map((project) => project.name),
    ...awards.map((award) => award.name),
  ].filter(Boolean).slice(0, 6);
  const role = personal.title || experience[0]?.role || 'Professional';
  const targetCompany = experience[0]?.company || 'The Industry';

  return (
    <div className="w-full min-h-[297mm] bg-white text-slate-900 font-sans flex flex-col">
      <div className="relative min-h-[297mm] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {personal.photo ? (
            <img
              src={personal.photo}
              alt="Profile Cover"
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div className="h-full w-full bg-neutral-300 flex items-center justify-center">
              <span className="text-neutral-500 font-bold uppercase tracking-widest text-sm bg-white/50 px-4 py-2 rounded">Photo Placement</span>
            </div>
          )}

          <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-white/95 via-white/60 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-[45%] bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-[297mm] flex-col p-10">
          <div className="flex justify-between items-start mb-6">
            <div className="flex flex-col">
              <div className="relative flex items-center -ml-2 mb-2 leading-none">
                <span className="text-[9rem] font-black tracking-tighter text-black z-20">C</span>
                <span className="text-[9rem] font-black tracking-tighter text-[#e11d20] -ml-6 z-10">V</span>
              </div>
              <div className="text-[8px] font-black uppercase tracking-[0.2em] text-black">
                Curriculum Vitae
              </div>
              <div className="text-[8px] font-black uppercase tracking-[0.2em] text-black mt-1">
                {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </div>
            </div>

            <div className="text-right mt-4">
              <div className="text-4xl font-black uppercase tracking-tighter text-black drop-shadow-md">Why</div>
              <div className="text-4xl font-black uppercase tracking-tighter text-[#e11d20] drop-shadow-md">Me?</div>
            </div>
          </div>

          <div className="w-[50%] space-y-10">
            <section className="break-inside-avoid">
              <div className="text-[3.5rem] font-black uppercase leading-[0.9] tracking-tighter text-[#222]">
                Special
                <br />
                Resume
                <br />
                <span className="text-[#e11d20]">Edition</span>
              </div>
            </section>

            <section className="break-inside-avoid">
              <div className="text-lg font-black uppercase leading-tight tracking-tight text-black">
                Will this
                <br />
                hard work
                <br />
                pay off?
              </div>
            </section>

            <section className="break-inside-avoid">
              <div className="text-sm font-black uppercase leading-tight tracking-tight text-black max-w-[80%]">
                Steps to succeed -
                <br />
                Hard Work,
                <br />
                Dedication
                <br />
                <span className="text-[#e11d20]">And Luck</span>
              </div>
            </section>
          </div>

          <div className="absolute right-10 top-[35%] flex flex-col items-end space-y-16 text-right w-[40%]">
            <section className="break-inside-avoid flex flex-col items-end">
              <div className="bg-[#e11d20] px-3 py-1 text-sm font-black uppercase tracking-widest text-white mb-3">
                Skills
              </div>
              <div className="space-y-1 text-sm font-black uppercase leading-tight tracking-wide text-black drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                {skillHighlights.length > 0 ? (
                  skillHighlights.map((skill, index) => <div key={`${skill}-${index}`}>{skill}</div>)
                ) : (
                  <>
                    <div>Problem Solver</div>
                    <div>Go Getter</div>
                    <div>Multi-Tasking</div>
                    <div>Relentless</div>
                  </>
                )}
              </div>
            </section>

            <section className="break-inside-avoid flex flex-col items-end">
              <div className="bg-[#e11d20] px-3 py-1 text-sm font-black uppercase tracking-widest text-white mb-3">
                CV Life
              </div>
              <div className="space-y-1 text-sm font-black uppercase leading-tight tracking-wide text-black drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                {lifestyleHighlights.length > 0 ? (
                  lifestyleHighlights.map((item, index) => <div key={`${item}-${index}`}>{item}</div>)
                ) : (
                  <>
                    <div>Fitness</div>
                    <div>Leadership</div>
                    <div>Travel</div>
                    <div>Creative</div>
                  </>
                )}
              </div>
            </section>
          </div>

          <div className="mt-auto pt-20 pb-8">
            <div className="flex flex-col leading-[0.85]">
              <div className="text-[6.5rem] font-light uppercase tracking-tighter text-[#e11d20]">
                {firstName}
              </div>
              {lastName ? (
                <div className="text-[6.5rem] font-black uppercase tracking-tighter text-white">
                  {lastName}
                </div>
              ) : null}
            </div>

            <div className="mt-6 max-w-[80%]">
              <div className="text-xl font-black uppercase leading-tight tracking-tight text-neutral-300">
                An inside look at the {role}
              </div>
              <div className="text-xl font-black uppercase leading-tight tracking-tight text-white">
                Who built a bespoke resume
                <br />
                <span className="text-[#e11d20]">To join {targetCompany}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 z-20 bg-[#111] px-10 py-3">
          <div className="flex items-center justify-between gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-white">
            {personal.email && (
              <div className="flex items-center gap-2 truncate">
                <Mail size={12} className="text-[#e11d20] shrink-0" />
                <span className="truncate">{personal.email}</span>
              </div>
            )}
            {personal.phone && (
              <div className="flex items-center gap-2 shrink-0">
                <Phone size={12} className="text-[#e11d20] shrink-0" />
                <span>{personal.phone}</span>
              </div>
            )}
            {personal.location && (
              <div className="flex items-center gap-2 truncate">
                <MapPin size={12} className="text-[#e11d20] shrink-0" />
                <span className="truncate">{personal.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative px-10 py-10 flex flex-col gap-12 bg-white">
        <header className="flex items-end border-b-[5px] border-black pb-3">
          {personal.photo ? (
            <img src={personal.photo} alt="Profile" className="w-16 h-16 object-cover object-top mr-6 grayscale" />
          ) : (
            <div className="w-16 h-16 bg-gray-200 mr-6 flex items-center justify-center text-[10px] font-bold text-gray-400 uppercase text-center leading-none">
              Photo
            </div>
          )}

          <div className="flex items-baseline">
            <div className="relative flex items-center mr-4 leading-none">
              <span className="text-[3rem] font-black tracking-tighter text-black z-20">C</span>
              <span className="text-[3rem] font-black tracking-tighter text-[#e11d20] -ml-2 z-10">V</span>
            </div>
            <h1 className="text-[4.5rem] font-serif font-normal uppercase tracking-widest text-black leading-none translate-y-2">
              Experience
            </h1>
          </div>
        </header>

        {experience.length > 0 && (
          <main className="grid grid-cols-2 gap-10">
            {experience.map((exp, index) => (
              <article
                key={exp.id || `${exp.role}-${exp.company}-${index}`}
                className="relative break-inside-avoid"
              >
                <div
                  className="absolute -top-12 -left-8 text-[12rem] font-serif text-gray-200/50 leading-none z-0 select-none pointer-events-none"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {index + 1}
                </div>

                <div className="relative z-10 pl-8 pt-6">
                  <div className="flex items-center gap-2 mb-1">
                    <PlayCircle size={16} strokeWidth={2.5} className="text-gray-500 shrink-0" />
                    <h3 className="text-xl font-black text-black uppercase tracking-wide break-words">
                      {exp.company}
                    </h3>
                  </div>

                  <h4 className="text-[15px] font-bold text-gray-800 leading-tight">{exp.role}</h4>

                  {exp.date && (
                    <div className="text-[13px] font-bold text-gray-500 mb-3 uppercase tracking-wider">
                      {exp.date}
                    </div>
                  )}

                  {exp.desc && (
                    <ul className="space-y-1">
                      {splitLines(exp.desc).map((line, lineIndex) => (
                        <li key={lineIndex} className="text-[13px] text-gray-600 leading-relaxed flex gap-2 font-medium">
                          <span className="text-gray-400 shrink-0">-</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </main>
        )}

        {(projects.length > 0 || awards.length > 0 || skillHighlights.length > 0) && (
          <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
            {projects.length > 0 && (
              <section className="break-inside-avoid">
                <h2 className="mb-4 text-[11px] font-black uppercase tracking-[0.25em] text-[#e11d20]">Projects</h2>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={`${project.name}-${index}`}>
                      <div className="text-sm font-black uppercase text-black leading-tight">{project.name}</div>
                      <div className="text-[12px] text-gray-600 leading-relaxed mt-1">{project.desc}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {awards.length > 0 && (
              <section className="break-inside-avoid">
                <h2 className="mb-4 text-[11px] font-black uppercase tracking-[0.25em] text-[#e11d20]">Awards</h2>
                <div className="space-y-3">
                  {awards.map((award, index) => (
                    <div key={`${award.name}-${index}`} className="text-[12px] text-gray-700 leading-relaxed">
                      <div className="font-black uppercase text-black">{award.name}</div>
                      {award.issuer ? <div>{award.issuer}</div> : null}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {skillHighlights.length > 0 && (
              <section className="break-inside-avoid">
                <h2 className="mb-4 text-[11px] font-black uppercase tracking-[0.25em] text-[#e11d20]">Strengths</h2>
                <div className="flex flex-wrap gap-2">
                  {skillHighlights.map((skill, index) => (
                    <span key={`${skill}-${index}`} className="border border-gray-300 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>

      <style jsx global>{PRINT_STYLE_BLOCK}</style>
    </div>
  );
};

export default MagazineCover;
