import React from 'react';
import { Mail, MapPin, Phone, QrCode, Sparkles } from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const highlight = (label) => (
  <span className="inline-block bg-[#fff200] px-3 py-1 text-[1rem] font-black tracking-tight text-black shadow-[0_3px_0_rgba(0,0,0,0.12)] uppercase">
    {label}
  </span>
);

const MotionDesignerBoard = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    projects = [],
    skills = {},
    languages = [],
  } = data || {};

  const expertise = [...(skills.core || []), ...(skills.soft || [])].filter(Boolean);
  const softwareSkills = (skills.technical || []).filter(Boolean);

  const pillColors = ['#fca5a5', '#fdba74', '#fde68a', '#86efac', '#93c5fd', '#c4b5fd'];

  return (
    <div className="bg-neutral-300 py-10 print:p-0 print:bg-white min-h-screen flex justify-center font-sans">
      {/* A4 Container: min-h allows stretch, browser handles physical page breaks */}
      <div
        className="w-[210mm] min-h-[297mm] bg-[#f1f0ea] px-8 py-10 shadow-2xl print:shadow-none text-[#161616]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      >
        {/* HEADER SECTION */}
        <header className="relative mb-10 flex items-start justify-between gap-6 break-inside-avoid">
          {/* Main Info Card */}
          <div className="relative flex-1 rounded-[22px] border-[3px] border-[#2b2b2b] bg-white p-5 shadow-[6px_8px_0_rgba(0,0,0,0.14)]">
            <div className="absolute -left-2 -top-3 h-10 w-4 rounded-full border-2 border-slate-400 bg-slate-100 shadow-sm" />
            
            <div className="grid grid-cols-[140px_1fr] gap-6 items-center">
              <div className="rounded-[18px] bg-[#ffe600] p-2 h-40">
                {personal.photo ? (
                  <img src={personal.photo} alt="Profile" className="h-full w-full rounded-[14px] object-cover" />
                ) : (
                  <div className="h-full w-full rounded-[14px] bg-[#141414] flex items-center justify-center text-white/50 text-xs font-bold uppercase">Photo</div>
                )}
              </div>
              
              <div className="flex flex-col">
                <h1 className="text-[2.2rem] font-black tracking-tight leading-none text-slate-900">{personal.name || 'Aravindh A'}</h1>
                <div className="mt-2 text-[1rem] font-black uppercase tracking-wider text-[#16a34a]">{personal.title || 'Motion Graphic & UI Designer'}</div>
                
                <p className="mt-3 max-w-[95%] text-[12px] leading-[1.6] text-slate-700 font-medium">
                  {personal.summary ||
                    'I create compelling visual stories, design systems, and multimedia experiences that make products and brands feel alive.'}
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] font-bold text-slate-700 uppercase tracking-wide">
                  {personal.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={12} className="text-black shrink-0" />
                      <span>{personal.phone}</span>
                    </div>
                  )}
                  {personal.email && (
                    <div className="flex items-center gap-2 break-all">
                      <Mail size={12} className="text-black shrink-0" />
                      <span>{personal.email}</span>
                    </div>
                  )}
                  {personal.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-black shrink-0" />
                      <span>{personal.location}</span>
                    </div>
                  )}
                  {personal.linkedin && (
                    <div className="flex items-center gap-2 break-all">
                      <QrCode size={12} className="text-black shrink-0" />
                      <span>{personal.linkedin}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Note */}
          <div className="w-[30%] shrink-0 rotate-[3deg] rounded-[18px] border border-[#d8a0aa] bg-[#fff3f4] px-5 py-4 shadow-lg flex flex-col justify-between">
            <div className="text-[13px] font-semibold italic text-[#be123c] leading-snug">
              "Building digital experiences that are intuitive, engaging, and beautifully in motion."
            </div>
            {languages.length > 0 && (
              <div className="mt-4 text-right text-[10px] font-black uppercase text-slate-600">
                Speaks: <span className="text-[#dc2626]">{languages.map(l => l.name).join(', ')}</span>
              </div>
            )}
          </div>
        </header>

        {/* MAIN CONTENT - Flex layout with items-start allows independent column pagination */}
        <div className="flex flex-row items-start gap-8">
          
          {/* LEFT COLUMN (Experience & Education) */}
          <div className="w-[55%] flex flex-col gap-10">
            {experience.length > 0 && (
              <section>
                <div className="break-inside-avoid mb-6">{highlight('Work Experiences')}</div>
                <div className="space-y-6 border-l-[3px] border-dashed border-slate-300 pl-6 ml-2">
                  {experience.map((item, index) => (
                    <article key={index} className="relative break-inside-avoid">
                      <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-slate-400 bg-white" />
                      
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-white px-2 py-0.5 rounded inline-block shadow-sm border border-slate-200 mb-2">
                        {item.date}
                      </div>
                      
                      <div className="text-[1.1rem] font-black leading-tight text-slate-900">{item.role}</div>
                      <div className="text-[0.9rem] font-bold text-[#16a34a] mb-2">{item.company}</div>
                      
                      {item.desc && (
                        <div className="space-y-1">
                          {splitLines(item.desc).map((line, lineIndex) => (
                            <div key={lineIndex} className="text-[11px] leading-[1.6] text-slate-700 font-medium flex gap-2">
                              <span className="text-slate-400">•</span>
                              <span>{line}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {education.length > 0 && (
              <section>
                <div className="break-inside-avoid mb-6">{highlight('Education')}</div>
                <div className="space-y-6 border-l-[3px] border-dashed border-slate-300 pl-6 ml-2">
                  {education.map((item, index) => (
                    <article key={index} className="relative break-inside-avoid">
                      <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-slate-400 bg-white" />
                      
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-white px-2 py-0.5 rounded inline-block shadow-sm border border-slate-200 mb-2">
                        {item.date}
                      </div>
                      
                      <div className="text-[1rem] font-black leading-tight text-slate-900">{item.school}</div>
                      <div className="text-[0.92rem] font-bold text-[#16a34a]">{item.degree}</div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* RIGHT COLUMN (Skills & Projects) */}
          <div className="w-[45%] flex flex-col gap-10">
            
            {expertise.length > 0 && (
              <section className="break-inside-avoid">
                <div className="mb-6">{highlight('Area of Expertise')}</div>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-full px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.08em] text-slate-800 shadow-sm border border-black/5"
                      style={{
                        backgroundColor: pillColors[index % pillColors.length],
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {softwareSkills.length > 0 && (
              <section className="break-inside-avoid">
                <div className="mb-6">{highlight('Software Skills')}</div>
                <div className="grid grid-cols-3 gap-3">
                  {softwareSkills.map((skill, index) => (
                    <div key={index} className="rounded-2xl border-2 border-slate-200 bg-white px-2 py-3 text-center shadow-sm flex flex-col items-center justify-center">
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-[10px] bg-slate-900 text-[12px] font-black uppercase text-white shadow-inner">
                        {skill.slice(0, 2)}
                      </div>
                      <div className="text-[9px] font-bold uppercase tracking-wider leading-tight text-slate-700">{skill}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {projects.length > 0 && (
              <section className="break-inside-avoid rounded-[24px] border-[3px] border-slate-200 bg-white/90 p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.18em] text-slate-800">
                  <Sparkles size={16} className="text-[#eab308]" />
                  Highlight Projects
                </div>
                <div className="space-y-5">
                  {projects.map((project, index) => (
                    <div key={index} className="break-inside-avoid">
                      <div className="text-[13px] font-black text-slate-900 uppercase tracking-wide">{project.name}</div>
                      <div className="mt-1.5 text-[11px] leading-[1.6] text-slate-700 font-medium">{project.desc}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
          </div>
        </div>

        {/* PRINT STYLES */}
        <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              background-color: #f1f0ea !important;
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

export default MotionDesignerBoard;