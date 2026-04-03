import React from 'react';
import { Mail, MapPin, Phone, QrCode } from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const SqlTerminalResume = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    awards = [],
    certifications = [],
    volunteering = [],
    languages = [],
  } = data || {};

  const lineNumbers = Array.from({ length: 240 }, (_, index) => index + 1);

  // Flatten skills for the terminal look
  const mergedSkills = [
    ...(skills.core || []),
    ...(skills.technical || []),
    ...(skills.soft || [])
  ].filter(Boolean);

  const competitionItems = [
    ...awards.map((item) => item.name),
    ...certifications.map((item) => item.name),
  ].filter(Boolean);

  const Section = ({ title, children }) => (
    <section className="break-inside-avoid mb-6">
      <div className="mb-2 text-[0.85rem] font-black lowercase tracking-[0.06em] text-[#f59e0b]">
        . {title}
      </div>
      <div className="pl-1">{children}</div>
    </section>
  );

  return (
    <div
      className="relative w-full min-h-[297mm] overflow-hidden bg-[#272637] text-white flex flex-col font-sans"
      style={{ fontFamily: '"IBM Plex Mono", "JetBrains Mono", monospace' }}
    >
        
        {/* RESTORED: THE FAKE LINE NUMBERS GUTTER */}
        <div className="absolute inset-y-0 left-0 w-10 border-r border-white/6 bg-[#222131] z-0" />
        <div className="absolute inset-y-0 left-0 w-10 pt-8 text-right text-[10px] leading-[1.7] text-white/20 z-0 overflow-hidden">
          {lineNumbers.map((number) => (
            <div key={number} className="pr-3">
              {number}
            </div>
          ))}
        </div>

        {/* Content Container - margin left makes room for the gutter */}
        <div className="relative z-10 ml-10 px-6 py-8 flex flex-col flex-1">
          
          {/* HEADER AREA */}
          <div className="mb-8 flex items-start justify-between gap-6 break-inside-avoid">
            <div>
              <div className="flex items-center gap-2 text-[2.5rem] font-black tracking-tight text-[#7dd3fc] leading-none mb-3">
                <span>&lt;</span>
                <span className="text-[#fb923c]">CV</span>
                <span>&gt;</span>
              </div>
              <h1 className="text-[1.8rem] font-black text-white leading-tight">{personal.name || 'Hamza Ibraheem'}</h1>
              <div className="mt-1 text-[0.95rem] font-semibold text-[#7dd3fc]/80">{personal.title || 'SQL / Data Engineer'}</div>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-black/20 p-3 shadow-lg flex flex-col items-center shrink-0">
              {personal.photo ? (
                <div className="h-24 w-24 rounded-[14px] overflow-hidden border border-[#7dd3fc]/40 bg-[#1c1b29]">
                  <img src={personal.photo} alt="Profile" className="w-full h-full object-cover grayscale" />
                </div>
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-[14px] border border-[#7dd3fc]/40 bg-[#1c1b29] text-[#7dd3fc]">
                  <QrCode size={50} />
                </div>
              )}
              
              <div className="mt-3 space-y-1 text-[10px] font-semibold text-white/70 w-full">
                {personal.phone && <div className="flex items-center gap-2"><Phone size={12} className="text-[#fb923c]" />{personal.phone}</div>}
                {personal.email && <div className="flex items-center gap-2 break-all"><Mail size={12} className="text-[#fb923c]" />{personal.email}</div>}
                {personal.location && <div className="flex items-center gap-2"><MapPin size={12} className="text-[#fb923c]" />{personal.location}</div>}
              </div>
            </div>
          </div>

          {/* MAIN COLUMNS - Flex layout allows smooth multi-page printing */}
          <div className="flex flex-row items-start gap-8 flex-1">
            
            {/* LEFT COLUMN (55%) */}
            <div className="w-[55%] flex flex-col gap-2">
              
              {personal.summary && (
                <Section title="about me">
                  <p className="text-[11px] leading-[1.7] text-white/80 font-medium">
                    {personal.summary}
                  </p>
                </Section>
              )}

              {experience.length > 0 && (
                <Section title="work experience">
                  <div className="space-y-5">
                    {experience.map((item, index) => (
                      <article key={index} className="break-inside-avoid">
                        <div className="flex items-start justify-between gap-4 text-[11px] mb-1.5">
                          <div>
                            <div className="font-black text-white uppercase tracking-wider">{item.role}</div>
                            <div className="mt-0.5 text-[#7dd3fc] font-bold">{item.company}</div>
                          </div>
                          <div className="font-bold text-[#fb923c] whitespace-nowrap bg-white/5 px-2 py-0.5 rounded">{item.date}</div>
                        </div>
                        {item.desc && (
                          <div className="text-[10px] leading-[1.7] text-white/70 space-y-1">
                            {splitLines(item.desc).map((line, i) => (
                              <div key={i} className="flex gap-2">
                                <span className="text-[#fb923c]/50">#</span>
                                <span>{line}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </Section>
              )}
            </div>

            {/* RIGHT COLUMN (45%) */}
            <div className="w-[45%] flex flex-col gap-2">

              {/* MOVED EDUCATION TO RIGHT COLUMN */}
              {education.length > 0 && (
                <Section title="education">
                  <div className="space-y-4">
                    {education.map((item, index) => (
                      <article key={index} className="flex items-start justify-between gap-4 text-[11px] break-inside-avoid">
                        <div>
                          <div className="font-black text-white">{item.school}</div>
                          <div className="mt-0.5 text-white/70">{item.degree}</div>
                        </div>
                        <div className="font-bold text-[#fb923c] bg-white/5 px-2 py-0.5 rounded whitespace-nowrap">{item.date}</div>
                      </article>
                    ))}
                  </div>
                </Section>
              )}
              
              {projects.length > 0 && (
                <Section title="projects">
                  <div className="space-y-3 text-[11px] text-white/80">
                    {projects.map((item, index) => (
                      <div key={index} className="break-inside-avoid border border-white/10 bg-white/5 p-3 rounded-md">
                        <div className="font-black text-[#7dd3fc] mb-1 text-[12px]">{item.name}</div>
                        <div className="leading-[1.6] text-white/70">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {mergedSkills.length > 0 && (
                <Section title="skills">
                  <div className="text-[11px] leading-[2] text-white/80">
                    {mergedSkills.map((skill, index) => (
                      <span key={index} className="inline-block mr-2 mb-2 bg-[#fb923c]/10 text-[#fb923c] px-2 py-0.5 rounded font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Section>
              )}

              {competitionItems.length > 0 && (
                <Section title="competitions & certs">
                  <div className="space-y-2 text-[11px] leading-[1.6] text-white/80">
                    {competitionItems.map((item, index) => (
                      <div key={index} className="break-inside-avoid flex gap-2">
                        <span className="text-[#7dd3fc]">&gt;</span> {item}
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {volunteering.length > 0 && (
                <Section title="volunteer work">
                  <div className="space-y-3 text-[11px] leading-[1.6] text-white/80">
                    {volunteering.map((item, index) => (
                      <div key={index} className="break-inside-avoid">
                        <span className="font-black text-white block mb-0.5">{item.role}</span>
                        <span className="text-[#7dd3fc]">
                          {item.org ? `@ ${item.org}` : ''} {item.date ? `[${item.date}]` : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {languages.length > 0 && (
                <Section title="languages">
                  <div className="text-[11px] leading-[1.8] text-white/80">
                     {languages.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-white/5 pb-1 mb-1 last:border-0">
                        <span className="font-bold text-white">{item.name}</span>
                        <span className="text-[#fb923c]">{item.level}</span>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-[2.5rem] font-black tracking-tight text-[#7dd3fc] break-inside-avoid leading-none">
            <span>&lt;/</span>
            <span className="text-[#fb923c]">CV</span>
            <span>&gt;</span>
          </div>

        </div>

        {/* PRINT CSS */}
        <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              background-color: #272637 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .break-inside-avoid {
              break-inside: avoid;
              page-break-inside: avoid;
            }
          }
        `}</style>
    </div>
  );
};

export default SqlTerminalResume;
