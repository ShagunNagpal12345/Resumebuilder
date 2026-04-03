import React from 'react';
import { Brush, Droplets, Frame, Mail, MapPin, Palette, Phone } from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const strokeColors = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#a855f7'];

const PainterCanvas = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    languages = [],
  } = data || {};

  const mediums = [...(skills.core || []), ...(skills.soft || [])].filter(Boolean);
  const tools = (skills.technical || []).filter(Boolean);

  return (
    <div className="bg-stone-300 py-10 print:p-0 print:bg-white min-h-screen flex justify-center font-sans">
      {/* A4 Container: min-h allows it to stretch down infinitely, browser handles page breaks */}
      <div className="relative w-[210mm] min-h-[297mm] overflow-hidden bg-[#fbf7ef] px-8 py-10 shadow-2xl print:shadow-none text-[#1f2937] flex flex-col">
        
        {/* Decorative Background Blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-60 z-0 overflow-hidden">
          <div className="absolute left-6 top-8 h-32 w-32 rounded-full bg-[#fee2e2] blur-3xl" />
          <div className="absolute right-14 top-40 h-40 w-40 rounded-[40px] bg-[#dbeafe] blur-3xl" />
          <div className="absolute bottom-1/4 left-10 h-32 w-52 rounded-[50px] bg-[#dcfce7] blur-3xl" />
          <div className="absolute bottom-16 right-12 h-32 w-32 rounded-full bg-[#ede9fe] blur-3xl" />
        </div>

        {/* MAIN LAYOUT - Flex row with items-start allows columns to paginate independently */}
        <div className="relative z-10 flex flex-row items-start gap-8 flex-1">
          
          {/* LEFT COLUMN (42%) */}
          <aside className="w-[42%] flex flex-col gap-6">
            
            {/* Header / Profile Card */}
            <section className="break-inside-avoid rounded-[30px] border border-slate-200 bg-white/90 p-5 shadow-[0_18px_28px_rgba(15,23,42,0.06)]">
              <div className="overflow-hidden rounded-[24px] border-[6px] border-white shadow-sm bg-stone-100">
                {personal.photo ? (
                  <img src={personal.photo} alt="Profile" className="h-56 w-full object-cover" />
                ) : (
                  <div className="h-56 w-full flex items-center justify-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Photo
                  </div>
                )}
              </div>
              <div className="mt-5 text-[2rem] font-black leading-none text-slate-900 tracking-tight">
                {personal.name || 'Clara Cynthia Jaya'}
              </div>
              <div className="mt-2 text-[0.96rem] font-bold uppercase tracking-[0.16em] text-[#ef4444]">
                {personal.title || 'Painter & Illustrator'}
              </div>
            </section>

            {/* About Me */}
            {personal.summary && (
              <section className="break-inside-avoid rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-[0_18px_28px_rgba(15,23,42,0.06)]">
                <div className="mb-3 flex items-center gap-2 text-[0.96rem] font-black uppercase tracking-[0.14em] text-slate-900">
                  <Palette size={16} className="text-[#ef4444]" />
                  About Me
                </div>
                <p className="text-[12px] leading-[1.8] text-slate-700 font-medium">
                  {personal.summary}
                </p>
              </section>
            )}

            {/* Mediums / Soft Skills */}
            {mediums.length > 0 && (
              <section className="break-inside-avoid rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-[0_18px_28px_rgba(15,23,42,0.06)]">
                <div className="mb-4 flex items-center gap-2 text-[0.96rem] font-black uppercase tracking-[0.14em] text-slate-900">
                  <Droplets size={16} className="text-[#3b82f6]" />
                  Mediums
                </div>
                <div className="space-y-4">
                  {mediums.map((item, index) => (
                    <div key={index} className="break-inside-avoid">
                      <div className="mb-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-slate-700">{item}</div>
                      <div className="h-[6px] rounded-full bg-slate-100 overflow-hidden">
                        <div 
                          className="h-full rounded-full" 
                          style={{ width: `${65 + (index * 7) % 35}%`, backgroundColor: strokeColors[index % strokeColors.length] }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tools / Technical Skills */}
            {tools.length > 0 && (
              <section className="break-inside-avoid rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-[0_18px_28px_rgba(15,23,42,0.06)]">
                <div className="mb-4 flex items-center gap-2 text-[0.96rem] font-black uppercase tracking-[0.14em] text-slate-900">
                  <Palette size={16} className="text-[#a855f7]" />
                  Tools
                </div>
                <div className="space-y-4">
                  {tools.map((item, index) => (
                    <div key={index} className="break-inside-avoid">
                      <div className="mb-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-slate-700">{item}</div>
                      <div className="h-[6px] rounded-full bg-slate-100 overflow-hidden">
                        <div 
                          className="h-full rounded-full" 
                          style={{ width: `${60 + (index * 9) % 40}%`, backgroundColor: strokeColors[(index + 2) % strokeColors.length] }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </aside>

          {/* RIGHT COLUMN (58%) */}
          <main className="w-[58%] flex flex-col gap-6">
            
            {/* Experience */}
            {experience.length > 0 && (
              <section className="rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-[0_18px_28px_rgba(15,23,42,0.06)]">
                <div className="mb-6 flex items-center gap-2 text-[1rem] font-black uppercase tracking-[0.14em] text-slate-900">
                  <Brush size={18} className="text-[#f59e0b]" />
                  Experience
                </div>
                <div className="space-y-6">
                  {experience.map((item, index) => (
                    <article key={index} className="break-inside-avoid border-l-2 border-slate-100 pl-4 relative">
                      <div 
                        className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full" 
                        style={{ backgroundColor: strokeColors[index % strokeColors.length] }} 
                      />
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <div className="text-[14px] font-black uppercase tracking-[0.08em] text-slate-900 leading-tight">{item.role}</div>
                          <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: strokeColors[index % strokeColors.length] }}>
                            {item.company}
                          </div>
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100 whitespace-nowrap">
                          {item.date}
                        </div>
                      </div>
                      {item.desc && (
                        <div className="mt-2 text-[11px] leading-[1.75] text-slate-700 space-y-1">
                          {splitLines(item.desc).map((line, i) => (
                            <p key={i}>• {line}</p>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {education.length > 0 && (
              <section className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-[0_18px_28px_rgba(15,23,42,0.06)]">
                <div className="mb-5 flex items-center gap-2 text-[1rem] font-black uppercase tracking-[0.14em] text-slate-900">
                  <Frame size={18} className="text-[#22c55e]" />
                  Education
                </div>
                <div className="space-y-5">
                  {education.map((item, index) => (
                    <article key={index} className="break-inside-avoid border-l-2 border-[#22c55e]/30 pl-4 relative">
                       <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-[#22c55e]" />
                      <div className="text-[13px] font-black text-slate-900 leading-tight">{item.school}</div>
                      <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-600">{item.degree}</div>
                      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#22c55e]">{item.date}</div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Works / Projects */}
            {projects.length > 0 && (
              <section className="rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-[0_18px_28px_rgba(15,23,42,0.06)]">
                <div className="mb-5 text-[1rem] font-black uppercase tracking-[0.14em] text-slate-900">
                  Featured Works
                </div>
                <div className="space-y-4">
                  {projects.map((item, index) => (
                    <article key={index} className="break-inside-avoid rounded-2xl bg-slate-50 border border-slate-100 px-4 py-4">
                      <div className="text-[13px] font-black uppercase tracking-[0.08em] text-slate-900">{item.name}</div>
                      <div className="mt-2 text-[11px] leading-[1.75] text-slate-700 font-medium">{item.desc}</div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Contact & Languages */}
            <section className="break-inside-avoid rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-[0_18px_28px_rgba(15,23,42,0.06)] mt-auto">
              
              {languages.length > 0 && (
                <div className="mb-6 pb-5 border-b border-slate-200 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  <span className="text-slate-900 mr-2">Languages:</span> 
                  {languages.map((item) => item.name).join(' • ')}
                </div>
              )}

              <div className="flex flex-col gap-3 text-[11px] font-semibold text-slate-700">
                {personal.phone && (
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-red-50 text-[#ef4444]"><Phone size={14} /></div>
                    {personal.phone}
                  </div>
                )}
                {personal.email && (
                  <div className="flex items-center gap-3 break-all">
                    <div className="p-1.5 rounded-full bg-blue-50 text-[#3b82f6]"><Mail size={14} /></div>
                    {personal.email}
                  </div>
                )}
                {personal.location && (
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-green-50 text-[#22c55e]"><MapPin size={14} /></div>
                    {personal.location}
                  </div>
                )}
              </div>
            </section>

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
              background-color: #fbf7ef !important;
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

export default PainterCanvas;