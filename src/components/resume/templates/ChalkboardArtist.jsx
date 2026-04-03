import React from 'react';
import { Brush, Mail, MapPin, Music4, Phone, Palette, Sparkles, Heart } from 'lucide-react';

// Utility function to cleanly split description lines
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const ChalkboardArtist = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    languages = [],
    projects = [],
  } = data || {};

  const artisticSkills = [...(skills.core || []), ...(skills.soft || [])].filter(Boolean);
  const softwareSkills = (skills.technical || []).filter(Boolean);
  const pasiones = projects.length > 0 ? projects.map((item) => item.name) : artisticSkills;

  return (
    <div className="bg-slate-300 py-10 print:p-0 print:bg-[#262626] min-h-screen flex justify-center font-sans">
      
      {/* A4 Container: min-h allows it to stretch, single flex column for natural page breaking */}
      <div className="relative w-[210mm] min-h-[297mm] bg-[#262626] shadow-2xl print:shadow-none flex flex-col text-white px-8 py-10 gap-8">
        
        {/* =========================================
            TOP SECTION: 2-COLUMN LAYOUT
        ========================================= */}
        <div className="flex flex-row items-start gap-8 w-full">
          
          {/* LEFT COLUMN (40%) */}
          <aside className="w-[40%] flex flex-col gap-6 shrink-0">
            
            {/* Photo & Identity */}
            <section className="break-inside-avoid rounded-[26px] border border-white/20 bg-black/20 p-5">
              <div className="mx-auto w-[85%] rotate-[-4deg] rounded-[18px] border-2 border-white/50 p-3">
                {personal.photo ? (
                  <img src={personal.photo} alt="Profile" className="h-40 w-full rounded-[10px] object-cover grayscale-[20%]" />
                ) : (
                  <div className="h-40 w-full rounded-[10px] bg-white/10 flex items-center justify-center text-xs font-bold uppercase text-white/40 tracking-widest">
                    Photo
                  </div>
                )}
              </div>
              <div className="mt-6 text-center">
                <div className="text-[1.8rem] font-black tracking-tight text-white leading-none mb-2 break-words">
                  {personal.name || 'Ginette Cedeño'}
                </div>
                <div className="text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[#fcd34d] break-words">
                  {personal.title || 'Painter & Visual Artist'}
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <section className="break-inside-avoid rounded-[20px] border border-white/20 bg-[#fcd34d]/10 p-5">
              <div className="mb-4 flex items-center gap-2 text-[0.9rem] font-black lowercase text-white">
                <Sparkles size={16} className="text-[#fcd34d]" />
                contacto
              </div>
              <div className="flex flex-col gap-3 text-[10px] font-semibold text-slate-200">
                {personal.email && <div className="flex items-center gap-3 break-all"><Mail size={14} className="text-[#fde047] shrink-0" />{personal.email}</div>}
                {personal.phone && <div className="flex items-center gap-3"><Phone size={14} className="text-[#60a5fa] shrink-0" />{personal.phone}</div>}
                {personal.location && <div className="flex items-center gap-3"><MapPin size={14} className="text-[#c084fc] shrink-0" />{personal.location}</div>}
              </div>
            </section>

            {/* Artistic Skills */}
            {artisticSkills.length > 0 && (
              <section className="break-inside-avoid rounded-[20px] border border-white/20 p-5">
                <div className="text-[0.9rem] font-black lowercase tracking-wide text-white mb-4 flex items-center gap-2">
                  <Palette size={16} className="text-[#fb7185]" />
                  habilidades
                </div>
                <div className="space-y-4">
                  {artisticSkills.slice(0, 6).map((item, index) => (
                    <div key={index}>
                      <div className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-200 truncate">{item}</div>
                      <div className="h-[4px] bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${62 + (index * 6) % 38}%`,
                            backgroundColor: ['#fde047', '#60a5fa', '#c084fc', '#fb7185'][index % 4],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Software Skills */}
            {softwareSkills.length > 0 && (
              <section className="break-inside-avoid rounded-[20px] border border-white/20 p-5">
                <div className="text-[0.9rem] font-black lowercase tracking-wide text-white mb-4 flex items-center gap-2">
                  <Brush size={16} className="text-[#38bdf8]" />
                  software
                </div>
                <div className="space-y-4">
                  {softwareSkills.slice(0, 6).map((item, index) => (
                    <div key={index}>
                      <div className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-200 truncate">{item}</div>
                      <div className="h-[4px] bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${58 + (index * 7) % 42}%`,
                            backgroundColor: ['#38bdf8', '#fb7185', '#f59e0b', '#4ade80'][index % 4],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </aside>

          {/* RIGHT COLUMN (60%) */}
          <div className="w-[60%] flex flex-col gap-6">
            
            {/* Summary / Intro */}
            {personal.summary && (
              <section className="break-inside-avoid rounded-[26px] border border-white/20 bg-black/20 p-6 shadow-inner">
                <div className="text-[2.2rem] font-black lowercase tracking-tight text-white leading-none">hola!</div>
                <div className="mt-1 text-[1.1rem] font-light lowercase text-slate-300">
                  can i tell my story with design?
                </div>
                <p className="mt-4 text-[12px] leading-[1.8] text-slate-200 font-medium">
                  {personal.summary}
                </p>
              </section>
            )}

            {/* Education */}
            {education.length > 0 && (
              <section className="rounded-[24px] border border-white/20 p-6 break-inside-avoid">
                <div className="mb-5 flex items-center gap-2 text-[1rem] font-black lowercase text-white">
                  <Brush size={18} className="text-[#60a5fa]" />
                  educacion
                </div>
                <div className="space-y-5">
                  {education.map((item, index) => (
                    <article key={index} className="break-inside-avoid relative pl-4 border-l-2 border-[#60a5fa]/50">
                      <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-[#60a5fa]" />
                      <div className="text-[12px] font-black uppercase text-white leading-tight mb-1">{item.school}</div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-300 mb-1.5">{item.degree}</div>
                      <div className="text-[9px] font-black uppercase tracking-[0.18em] text-[#fcd34d] bg-white/5 px-2 py-0.5 inline-block rounded">{item.date}</div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Languages */}
            {languages.length > 0 && (
              <section className="rounded-[24px] border border-white/20 p-6 break-inside-avoid">
                <div className="mb-5 flex items-center gap-2 text-[1rem] font-black lowercase text-white">
                  <Music4 size={18} className="text-[#c084fc]" />
                  idiomas
                </div>
                <div className="space-y-3">
                  {languages.map((item, index) => (
                    <div key={index} className="rounded-xl border border-white/10 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-200 flex justify-between items-center bg-white/5">
                      <span>{item.name}</span>
                      <span className="text-[#c084fc] font-black">{item.level}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Passions / Interests */}
            {pasiones.length > 0 && (
              <section className="break-inside-avoid rounded-[24px] border border-white/20 p-6">
                <div className="text-[1rem] font-black lowercase tracking-wide text-white mb-4 flex items-center gap-2">
                  <Heart size={18} className="text-[#fb7185]" />
                  pasiones
                </div>
                <div className="flex flex-wrap gap-3 text-[10px] font-bold uppercase text-slate-200">
                  {pasiones.slice(0, 8).map((item, index) => (
                    <div key={index} className="rounded-xl border border-white/10 px-3 py-2 text-center bg-white/5">
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>

        {/* =========================================
            BOTTOM SECTION: 1-COLUMN (FULL WIDTH)
        ========================================= */}
        <div className="w-full flex flex-col gap-8">
          
          {/* EXPERIENCE (Full Width) */}
          {experience.length > 0 && (
            <section className="rounded-[26px] border border-white/20 p-6 w-full">
              <div className="mb-6 flex items-center gap-2 text-[1.1rem] font-black lowercase text-white">
                <Palette size={20} className="text-[#fcd34d]" />
                trayectoria / experience
              </div>
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <article key={index} className="break-inside-avoid border-l-2 border-white/10 pl-5 relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#fcd34d] shadow-[0_0_8px_rgba(252,211,77,0.6)]" />
                    
                    <div className="flex flex-col mb-3">
                      <div className="text-[14px] font-black uppercase tracking-[0.12em] text-white leading-tight mb-1">{item.role}</div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#fcd34d]">{item.company}</span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                          {item.date}
                        </span>
                      </div>
                    </div>
                    
                    {item.desc && (
                      <div className="text-[11px] leading-[1.7] text-slate-300 font-medium space-y-1.5 border-l border-white/5 pl-3">
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

          {/* PROJECTS (Full Width, 2-Column Grid inside) */}
          {projects.length > 0 && (
            <section className="rounded-[26px] border border-white/20 p-6 w-full break-inside-avoid">
              <div className="mb-6 flex items-center gap-2 text-[1.1rem] font-black lowercase text-white">
                <Brush size={20} className="text-[#4ade80]" />
                proyectos / projects
              </div>
              {/* Because it's full width, we can display projects side-by-side! */}
              <div className="grid grid-cols-2 gap-5">
                {projects.map((project, index) => (
                  <article key={index} className="bg-white/5 p-4 rounded-xl border border-white/10 break-inside-avoid hover:bg-white/10 transition-colors">
                    <div className="text-[13px] font-black uppercase tracking-wider text-[#4ade80] mb-2">{project.name}</div>
                    <p className="text-[11px] text-slate-300 leading-[1.7] font-medium">{project.desc}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* PRINT STYLES */}
        <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              background-color: #262626 !important;
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

export default ChalkboardArtist;