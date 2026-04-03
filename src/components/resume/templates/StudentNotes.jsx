import React from 'react';
import { BookOpen, GraduationCap, Mail, MapPin, Phone, Star, StickyNote, Code2 } from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const NoteTitle = ({ label }) => (
  <div className="inline-block rounded-[12px] bg-[#fff6b7] px-4 py-1.5 text-[1.1rem] font-black uppercase tracking-[0.08em] text-[#1f2937] shadow-[0_4px_0_rgba(0,0,0,0.08)] mb-5 border border-amber-200/50">
    {label}
  </div>
);

const NoteCard = ({ title, children, className = '' }) => (
  <section className={`break-inside-avoid rounded-[26px] border-[2px] border-slate-200 bg-[rgba(255,255,255,0.95)] p-6 shadow-[0_12px_24px_rgba(15,23,42,0.06)] ${className}`}>
    <NoteTitle label={title} />
    {children}
  </section>
);

const StudentNotes = ({ data }) => {
  const {
    personal = {},
    education = [],
    experience = [],
    projects = [],
    skills = {},
    languages = [],
  } = data || {};

  const interests = [...(skills.soft || []), ...(skills.core || [])].filter(Boolean);
  const software = (skills.technical || []).filter(Boolean);
  
  // Use projects or fallback to skills for the TOC section
  const tocItems = projects.length > 0 ? projects : interests.slice(0, 6).map(name => ({ name }));

  return (
    <div className="bg-slate-200 py-10 print:p-0 print:bg-white min-h-screen flex justify-center font-sans">
      
      {/* A4 Container: min-h allows stretch, repeating background stretches down */}
      <div
        className="relative w-[210mm] min-h-[297mm] overflow-hidden bg-[#f8fafc] px-8 py-10 shadow-2xl print:shadow-none text-[#111827] flex flex-col"
        style={{
          backgroundImage:
            'linear-gradient(rgba(96,165,250,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.16) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        
        {/* ==========================================
            HEADER BANNER (Spans full width)
        ========================================== */}
        <section className="break-inside-avoid rounded-[32px] bg-white border-[2px] border-slate-200 px-8 py-8 shadow-[0_18px_28px_rgba(15,23,42,0.06)] mb-8 relative z-10">
          <div className="absolute top-4 right-6 text-slate-300 pointer-events-none">
            <Star size={40} className="fill-slate-100" />
          </div>
          <div className="text-[2.8rem] font-black leading-none tracking-tight">
            HEY! I am <span className="text-[#2563eb] underline decoration-[#fff6b7] decoration-8 underline-offset-[-4px]">{personal.name?.split(' ')[0] || 'Pooja'}</span>.
          </div>
          <div className="mt-3 text-[1.1rem] font-bold text-slate-500 uppercase tracking-widest">
            {personal.title || 'Student & Creator'}
          </div>
          <div className="mt-4 max-w-[85%] text-[13px] leading-[1.8] text-slate-700 font-medium">
            {personal.summary ||
              'I am a curious learner with a passion for design, storytelling, and building creative work that feels thoughtful and memorable.'}
          </div>
        </section>

        {/* ==========================================
            MAIN CONTENT (Two Column Flex Layout)
        ========================================== */}
        <div className="flex flex-row items-start gap-8 flex-1 pb-8 relative z-10">
          
          {/* LEFT COLUMN (55%) */}
          <div className="w-[55%] flex flex-col gap-8">
            
            {/* EDUCATION */}
            {education.length > 0 && (
              <NoteCard title="Education">
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <article key={index} className="break-inside-avoid relative pl-4 border-l-2 border-[#2563eb]/30">
                      <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#2563eb]" />
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <div className="text-[15px] font-black leading-tight text-slate-900">{item.school}</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-white bg-[#2563eb] px-2 py-1 rounded-md shrink-0">
                          {item.date}
                        </div>
                      </div>
                      <div className="text-[13px] font-bold text-slate-600">{item.degree}</div>
                    </article>
                  ))}
                </div>
              </NoteCard>
            )}

            {/* EXPERIENCE */}
            {experience.length > 0 && (
              <NoteCard title="Experience">
                <div className="space-y-8">
                  {experience.map((item, index) => (
                    <article key={index} className="break-inside-avoid">
                      <div className="text-[16px] font-black text-slate-900 leading-tight mb-1">{item.role}</div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#ef4444] bg-red-50 px-2 py-0.5 rounded">
                          {item.company}
                        </span>
                        {item.date && (
                          <span className="text-[10px] font-bold text-slate-500">• {item.date}</span>
                        )}
                      </div>
                      
                      {item.desc && (
                        <div className="text-[12px] leading-[1.7] text-slate-700 space-y-1.5 font-medium pl-2 border-l border-slate-200">
                          {splitLines(item.desc).map((line, i) => (
                            <p key={i}>• {line}</p>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </NoteCard>
            )}

            {/* TABLE OF CONTENTS (Projects) */}
            {tocItems.length > 0 && (
              <NoteCard title="Table of Contents">
                <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                  {tocItems.map((item, index) => (
                    <div key={index} className="break-inside-avoid flex gap-3 items-start">
                      <div className="text-[1.8rem] font-black text-slate-200 leading-none mt-1">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                      <div>
                        <div className="text-[12px] font-black uppercase tracking-[0.08em] text-slate-800 leading-tight mb-1">
                          {item.name}
                        </div>
                        {item.desc && (
                          <div className="text-[10px] text-slate-500 font-medium leading-tight line-clamp-3">
                            {item.desc}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </NoteCard>
            )}

          </div>

          {/* RIGHT COLUMN (45%) */}
          <div className="w-[45%] flex flex-col gap-8">
            
            {/* POLAROID PHOTO */}
            <section className="relative break-inside-avoid rounded-[28px] border-[2px] border-slate-200 bg-white p-4 shadow-[0_18px_28px_rgba(15,23,42,0.06)]">
              {/* Fake Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-8 w-16 rounded-sm bg-white/60 shadow-sm border border-slate-100 backdrop-blur-md rotate-[-2deg] z-20" />
              
              <div className="absolute right-4 top-4 rounded-md bg-[#ef4444] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white z-20 shadow-sm rotate-[3deg]">
                Hello
              </div>
              
              <div className="rounded-[20px] overflow-hidden border border-slate-100 bg-[#f8fafc] shadow-inner h-56 relative z-10">
                {personal.photo ? (
                  <img src={personal.photo} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center font-bold text-slate-300 text-xs tracking-widest">PHOTO</div>
                )}
              </div>
              
              <div className="mt-5 text-center text-[15px] font-black uppercase tracking-[0.14em] text-slate-900">
                {personal.name || 'Pooja Bansal'}
              </div>
            </section>

            {/* CONTACT */}
            <NoteCard title="Contact">
              <div className="space-y-4 text-[12px] font-bold text-slate-700">
                {personal.email && (
                  <div className="flex items-center gap-3 bg-red-50 p-2.5 rounded-xl border border-red-100">
                    <Mail size={16} className="text-[#ef4444] shrink-0" />
                    <span className="truncate">{personal.email}</span>
                  </div>
                )}
                {personal.phone && (
                  <div className="flex items-center gap-3 bg-blue-50 p-2.5 rounded-xl border border-blue-100">
                    <Phone size={16} className="text-[#2563eb] shrink-0" />
                    <span>{personal.phone}</span>
                  </div>
                )}
                {personal.location && (
                  <div className="flex items-center gap-3 bg-teal-50 p-2.5 rounded-xl border border-teal-100">
                    <MapPin size={16} className="text-[#0f766e] shrink-0" />
                    <span>{personal.location}</span>
                  </div>
                )}
              </div>
            </NoteCard>

            {/* SOFTWARE / TOOLS */}
            {software.length > 0 && (
              <NoteCard title="Software">
                <div className="grid grid-cols-3 gap-3">
                  {software.map((item, index) => (
                    <div key={index} className="rounded-2xl bg-slate-900 px-2 py-4 text-center shadow-md flex flex-col items-center justify-center break-inside-avoid">
                      <div className="text-[14px] font-black uppercase text-white mb-2">
                        {item.slice(0, 2)}
                      </div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider w-full truncate px-1">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </NoteCard>
            )}

            {/* INTERESTS / SOFT SKILLS */}
            {interests.length > 0 && (
              <NoteCard title="Interests">
                <div className="flex flex-wrap gap-2.5">
                  {interests.map((item, index) => (
                    <span key={index} className="bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold px-3 py-1.5 rounded-xl break-inside-avoid shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </NoteCard>
            )}

            {/* LANGUAGES */}
            {languages.length > 0 && (
              <NoteCard title="Languages">
                 <div className="space-y-3">
                    {languages.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                        <span className="font-black text-slate-800 text-[12px]">{item.name}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#f59e0b] bg-amber-50 px-2 py-1 rounded">
                          {item.level || 'Fluent'}
                        </span>
                      </div>
                    ))}
                 </div>
              </NoteCard>
            )}

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
              background-color: #f8fafc !important;
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

export default StudentNotes;