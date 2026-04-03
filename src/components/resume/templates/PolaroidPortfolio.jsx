import React from 'react';
import { Briefcase, GraduationCap, Mail, MapPin, Phone, Sparkles, Award } from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

// We add an optional `avoidBreak` prop so short panels stay intact, 
// while long panels (like Experience) can split across pages if needed.
const Panel = ({ title, color = '#2563eb', children, avoidBreak = false }) => (
  <section className={`rounded-[22px] border border-slate-200 bg-white/95 p-5 shadow-[0_14px_22px_rgba(15,23,42,0.08)] ${avoidBreak ? 'break-inside-avoid' : ''}`}>
    <div 
      className="inline-block rounded-md px-4 py-1.5 text-[0.95rem] font-black uppercase tracking-[0.1em] text-white break-inside-avoid mb-4" 
      style={{ backgroundColor: color }}
    >
      {title}
    </div>
    <div className="space-y-4">{children}</div>
  </section>
);

const PolaroidPortfolio = ({ data }) => {
  const {
    personal = {},
    education = [],
    experience = [],
    skills = {},
    projects = [],
    certifications = [],
    awards = [], // Destructured awards here
  } = data || {};

  const skillCloud = [...(skills.core || []), ...(skills.soft || [])].filter(Boolean);
  const softwareCloud = (skills.technical || []).filter(Boolean);

  return (
    <div className="bg-neutral-300 py-10 print:p-0 print:bg-white min-h-screen flex justify-center font-sans">
      {/* A4 Container: min-h allows stretch, browser handles physical page breaks */}
      <div className="w-[210mm] min-h-[297mm] overflow-hidden bg-[#f8f3e8] px-8 py-10 shadow-2xl print:shadow-none text-[#172554] flex flex-col">
        
        {/* MAIN LAYOUT - Flex row with items-start allows columns to paginate independently */}
        <div className="flex flex-row items-start gap-8 flex-1">
          
          {/* ==========================================
              LEFT COLUMN (42%)
          ========================================== */}
          <aside className="w-[42%] flex flex-col gap-6 shrink-0">
            
            {/* Polaroid Profile Card */}
            <section className="relative break-inside-avoid rounded-[28px] bg-white/95 px-5 pb-6 pt-8 shadow-[0_18px_28px_rgba(15,23,42,0.08)] border border-slate-200">
              <div className="absolute left-8 top-[-18px] h-10 w-10 rounded-full border-4 border-slate-300 bg-white shadow-md" />
              <div className="mx-auto w-[75%] rotate-[-3deg] rounded-[18px] border border-slate-200 bg-white p-3 shadow-lg">
                {personal.photo ? (
                  <img src={personal.photo} alt="Profile" className="h-48 w-full rounded-[12px] object-cover" />
                ) : (
                  <div className="h-48 w-full rounded-[12px] bg-slate-100 flex items-center justify-center text-[10px] font-bold uppercase text-slate-400">Photo</div>
                )}
                <div className="mt-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">creative badge</div>
              </div>
              <div className="mt-6 text-center text-[1.6rem] font-black leading-none text-slate-900 tracking-tight">
                {personal.name || 'Quang Hai'}
              </div>
              <div className="mt-2 text-center text-[0.9rem] font-black uppercase tracking-[0.18em] text-[#2563eb]">
                {personal.title || 'Graphic Designer'}
              </div>
            </section>

            {/* Contact */}
            <Panel title="Contact" color="#1d4ed8" avoidBreak>
              <div className="space-y-3 text-[12px] font-semibold text-slate-700">
                {personal.phone && (
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-[#2563eb]" />
                    <span>{personal.phone}</span>
                  </div>
                )}
                {personal.email && (
                  <div className="flex items-center gap-3 break-all">
                    <Mail size={14} className="text-[#2563eb]" />
                    <span>{personal.email}</span>
                  </div>
                )}
                {personal.location && (
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-[#2563eb]" />
                    <span>{personal.location}</span>
                  </div>
                )}
              </div>
            </Panel>

            {/* Skills */}
            {skillCloud.length > 0 && (
              <Panel title="Skill" color="#fde047" avoidBreak>
                <div className="flex flex-wrap gap-2">
                  {skillCloud.map((item, index) => (
                    <div key={index} className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.08em] text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </Panel>
            )}

            {/* Software */}
            {softwareCloud.length > 0 && (
              <Panel title="Software" color="#f59e0b" avoidBreak>
                <div className="grid grid-cols-3 gap-3">
                  {softwareCloud.map((item, index) => (
                    <div key={index} className="rounded-xl bg-slate-900 px-2 py-3 text-center flex flex-col items-center justify-center shadow-inner">
                      <div className="text-[12px] font-black uppercase text-white mb-1">
                        {item.slice(0, 2)}
                      </div>
                      <div className="text-[8px] font-bold uppercase tracking-wider text-slate-400 truncate w-full px-1">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            )}

            {/* Education (Moved to Left Column) */}
            {education.length > 0 && (
              <Panel title="Education" color="#fde047">
                <div className="space-y-5">
                  {education.map((item, index) => (
                    <article key={index} className="break-inside-avoid relative pl-4 border-l-2 border-[#fde047]/50">
                      <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-[#fde047]" />
                      <div className="text-[13px] font-black text-slate-900 leading-tight">{item.school}</div>
                      <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-600">{item.degree}</div>
                      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#2563eb]">{item.date}</div>
                    </article>
                  ))}
                </div>
              </Panel>
            )}

            {/* Certifications (Moved to Left Column) */}
            {certifications.length > 0 && (
              <Panel title="Certifications" color="#1d4ed8" avoidBreak>
                <div className="space-y-4">
                  {certifications.map((item, index) => (
                    <article key={index} className="break-inside-avoid bg-slate-50 border border-slate-100 p-3 rounded-xl">
                      <div className="text-[11px] font-black uppercase tracking-wide text-slate-900 leading-tight mb-1">{item.name}</div>
                      <div className="text-[10px] text-slate-600 font-medium">{item.issuer}</div>
                    </article>
                  ))}
                </div>
              </Panel>
            )}

            {/* Awards (Added to Left Column) */}
            {awards.length > 0 && (
              <Panel title="Awards" color="#f59e0b" avoidBreak>
                <div className="space-y-4">
                  {awards.map((item, index) => (
                    <article key={index} className="break-inside-avoid flex items-center gap-3 bg-slate-50 border border-slate-100 p-3 rounded-xl">
                      <Award size={18} className="text-[#f59e0b] shrink-0" />
                      <div>
                        <div className="text-[11px] font-black uppercase tracking-wide text-slate-900 leading-tight mb-1">{item.name}</div>
                        <div className="text-[10px] text-slate-600 font-medium">{item.issuer || item.date}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </Panel>
            )}

          </aside>

          {/* ==========================================
              RIGHT COLUMN (58%)
          ========================================== */}
          <main className="w-[58%] flex flex-col gap-6">
            
            {/* About Me */}
            {personal.summary && (
              <Panel title="About Me" color="#2563eb" avoidBreak>
                <p className="text-[12px] leading-[1.8] text-slate-700 font-medium">
                  {personal.summary}
                </p>
              </Panel>
            )}

            {/* Experience */}
            {experience.length > 0 && (
              <Panel title="Experience" color="#60a5fa">
                <div className="space-y-6">
                  {experience.map((item, index) => (
                    <article key={index} className="break-inside-avoid relative pl-4 border-l-2 border-[#60a5fa]/30">
                      <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-[#60a5fa]" />
                      <div className="text-[13px] font-black text-slate-900 uppercase tracking-wide leading-tight">{item.role}</div>
                      <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#f59e0b]">{item.company}</div>
                      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">{item.date}</div>
                      
                      {item.desc && (
                        <div className="mt-2 text-[11px] leading-[1.65] text-slate-700 space-y-1 font-medium">
                          {splitLines(item.desc).map((line, i) => (
                            <p key={i}>• {line}</p>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </Panel>
            )}

            {/* Projects (Changed to Single Column) */}
            {projects.length > 0 && (
              <Panel title="Projects" color="#1d4ed8">
                <div className="space-y-5">
                  {projects.map((item, index) => (
                    <article key={index} className="break-inside-avoid bg-slate-50 border border-slate-100 p-4 rounded-xl">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="text-[13px] font-black text-slate-900 uppercase tracking-wide">{item.name}</div>
                        <Sparkles size={16} className="text-[#f59e0b] shrink-0" />
                      </div>
                      <div className="text-[11px] leading-[1.65] text-slate-700 font-medium">{item.desc}</div>
                    </article>
                  ))}
                </div>
              </Panel>
            )}

          </main>
        </div>

        {/* PRINT STYLES */}
        <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              background-color: #f8f3e8 !important;
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
    </div>
  );
};

export default PolaroidPortfolio;