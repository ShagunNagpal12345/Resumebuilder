import React from 'react';
import { Award, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { PRINT_STYLE_BLOCK, splitLines } from './creativeTemplateUtils';

const formatYearRange = (dateStr = '') => {
  const years = dateStr.match(/\d{4}/g);
  if (years && years.length >= 2) return `${years[0]}-${years[years.length - 1].slice(-2)}`;
  if (years && years.length === 1) return years[0];
  return dateStr.substring(0, 7) || '2024';
};

const getSkillLevel = (index) => 65 + ((index * 13) % 30);

const PhotographerResume = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    awards = [],
    projects = [],
  } = data || {};

  const specialties = [
    ...(skills.core || []),
    ...projects.map((project) => project.name),
    ...(skills.soft || []),
  ].filter(Boolean);

  const softwareSkills = skills.technical || [];
  const personalSkills = [...(skills.soft || []), ...(skills.core || [])].filter(Boolean);

  return (
    <div className="relative w-full min-h-[297mm] bg-[#181818] text-white overflow-hidden flex font-sans">
      <div className="absolute right-0 top-0 bottom-0 w-[70%] z-0">
        {personal.photo ? (
          <img src={personal.photo} alt="Background" className="h-full w-full object-cover object-center grayscale opacity-30 mix-blend-overlay" />
        ) : (
          <div className="h-full w-full bg-neutral-800 opacity-50" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-[#181818]/80 to-[#181818]/40" />
      </div>

      <aside className="w-[30%] bg-[#121212] z-10 px-6 py-8 flex flex-col border-r border-[#333] shrink-0">
        <div className="flex justify-end gap-3 mb-8 w-full">
          <h2
            className="text-[1.8rem] text-[#f59e0b] font-light tracking-[0.1em] m-0 p-0"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontFamily: 'Georgia, serif' }}
          >
            {personal.name || 'Chris Walker'}
          </h2>
          <h1
            className="text-[2.8rem] font-black uppercase tracking-[0.15em] text-white leading-none m-0 p-0"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {personal.title || 'Photographer'}
          </h1>
        </div>

        {specialties.length > 0 && (
          <section className="mb-8 break-inside-avoid">
            <div className="space-y-4 text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold ml-1">
              {specialties.map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b] shrink-0" />
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-auto space-y-5 text-[10px] text-neutral-400 break-inside-avoid font-medium tracking-wider">
          {personal.phone && (
            <div className="flex items-start gap-3">
              <Phone size={14} className="text-[#f59e0b] shrink-0 mt-0.5" />
              <div>
                <div className="text-neutral-500 uppercase tracking-widest text-[8px] mb-0.5">Mobile</div>
                <div className="text-white/90">{personal.phone}</div>
              </div>
            </div>
          )}
          {personal.email && (
            <div className="flex items-start gap-3 break-all">
              <Mail size={14} className="text-[#f59e0b] shrink-0 mt-0.5" />
              <div>
                <div className="text-neutral-500 uppercase tracking-widest text-[8px] mb-0.5">Email</div>
                <div className="text-white/90">{personal.email}</div>
              </div>
            </div>
          )}
          {personal.linkedin && (
            <div className="flex items-start gap-3 break-all">
              <Globe size={14} className="text-[#f59e0b] shrink-0 mt-0.5" />
              <div>
                <div className="text-neutral-500 uppercase tracking-widest text-[8px] mb-0.5">Website</div>
                <div className="text-white/90">{personal.linkedin}</div>
              </div>
            </div>
          )}
          {personal.location && (
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-[#f59e0b] shrink-0 mt-0.5" />
              <div>
                <div className="text-neutral-500 uppercase tracking-widest text-[8px] mb-0.5">Location</div>
                <div className="text-white/90">{personal.location}</div>
              </div>
            </div>
          )}
        </section>
      </aside>

      <main className="w-[70%] z-10 px-10 py-8 flex flex-col">
        <header className="mb-6 break-inside-avoid">
          <h2 className="text-2xl font-light uppercase tracking-widest text-white leading-tight">
            Let&apos;s Know
            <br />
            <span className="font-black text-[#f59e0b]">Some About Me</span>
          </h2>
          <p className="mt-4 text-[11px] leading-[1.8] text-neutral-300 font-medium max-w-[95%]">
            {personal.summary || 'Creative visual storyteller with a strong editorial eye, commercial instinct, and a portfolio built around high-impact imagery.'}
          </p>
        </header>

        <div className="w-full h-[1px] bg-gradient-to-r from-[#f59e0b] to-transparent mb-6 opacity-60" />

        {experience.length > 0 && (
          <section className="mb-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#f59e0b] mb-6">My Experience</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={`${item.role}-${item.company}-${index}`} className="flex gap-5 items-start break-inside-avoid">
                  <div className="w-20 text-3xl font-black text-white/90 shrink-0 leading-none tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>
                    {formatYearRange(item.date)}
                  </div>
                  <div className="pt-0.5 flex-1">
                    <div className="text-[13px] font-bold uppercase tracking-widest text-white leading-tight mb-0.5">
                      {item.role}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#f59e0b] mb-2">
                      {item.company || 'Studio / Agency'}
                    </div>
                    <div className="space-y-1.5">
                      {splitLines(item.desc).map((line, lineIndex) => (
                        <div key={lineIndex} className="text-[11px] leading-[1.7] text-neutral-400 font-medium flex gap-2">
                          <span className="text-[#f59e0b]/70">•</span>
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="w-full h-[1px] bg-gradient-to-r from-[#f59e0b] to-transparent mb-6 opacity-60" />

        {education.length > 0 && (
          <section className="mb-6 break-inside-avoid">
            <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#f59e0b] mb-6">My Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={`${item.degree}-${item.school}-${index}`} className="flex gap-5 items-start break-inside-avoid">
                  <div className="w-20 text-3xl font-black text-white/90 shrink-0 leading-none tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>
                    {formatYearRange(item.date)}
                  </div>
                  <div className="pt-0.5">
                    <div className="text-[13px] font-bold uppercase tracking-widest text-white leading-tight mb-0.5">
                      {item.degree}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#f59e0b]">
                      {item.school}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {awards.length > 0 && (
          <>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#f59e0b] to-transparent mb-6 opacity-60" />
            <section className="mb-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#f59e0b] mb-5">My Awards</h3>
              <div className="grid grid-cols-2 gap-y-5 gap-x-6">
                {awards.map((item, index) => (
                  <div key={`${item.name}-${index}`} className="flex gap-3 items-start break-inside-avoid">
                    <Award size={20} strokeWidth={1.5} className="text-[#f59e0b] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-white leading-tight mb-1">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-medium">
                        By {item.issuer || 'Academy'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {(softwareSkills.length > 0 || personalSkills.length > 0) && (
          <div className="grid grid-cols-2 gap-8 pt-2 mt-6">
            {softwareSkills.length > 0 && (
              <section className="break-inside-avoid">
                <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#f59e0b] mb-5">Software Skills</h3>
                <div className="space-y-4">
                  {softwareSkills.map((skill, index) => {
                    const level = getSkillLevel(index);
                    return (
                      <div key={`${skill}-${index}`} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded border border-neutral-600 bg-neutral-800/50 flex items-center justify-center text-[10px] font-bold uppercase text-white shadow-inner shrink-0">
                          {skill.substring(0, 2)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">{skill}</span>
                            <span className="text-[10px] text-[#f59e0b] font-black">{level}%</span>
                          </div>
                          <div className="h-1 bg-neutral-800 rounded-full overflow-hidden shadow-inner">
                            <div className="h-full bg-[#f59e0b]" style={{ width: `${level}%` }} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {personalSkills.length > 0 && (
              <section className="break-inside-avoid">
                <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#f59e0b] mb-5">Personal Skills</h3>
                <div className="space-y-4">
                  {personalSkills.map((skill, index) => {
                    const level = getSkillLevel(index + 3);
                    return (
                      <div key={`${skill}-${index}`}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">{skill}</span>
                        </div>
                        <div className="flex gap-1.5 h-1.5">
                          {[...Array(5)].map((_, stepIndex) => (
                            <div
                              key={stepIndex}
                              className={`flex-1 rounded-sm ${stepIndex < Math.ceil(level / 20) ? 'bg-[#f59e0b]' : 'bg-neutral-800'}`}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      <style jsx global>{PRINT_STYLE_BLOCK}</style>
    </div>
  );
};

export default PhotographerResume;
