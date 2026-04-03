import React from 'react';
import { Mail, Phone, MapPin, Trophy, Heart, Gamepad2, Sword, ChevronRight } from 'lucide-react';

const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const GamerArena = ({ data }) => {
  const {
    personal = {},
    experience = [],
    skills = {},
    education = [],
    projects = [],
    awards = []
  } = data || {};

  const skillsList = [...(skills.technical || []), ...(skills.core || [])].filter(Boolean);

  return (
    <div className="bg-zinc-800 py-10 print:p-0 print:bg-white min-h-screen flex justify-center">
      {/* A4 Container */}
      <div className="bg-[#1a1a1a] shadow-2xl print:shadow-none w-[210mm] min-h-[297mm] flex flex-col font-mono text-white border-[8px] border-[#facc15] relative overflow-hidden">
        
        {/* TOP DECORATION: ICICLES & HUD */}
        <div className="absolute top-0 left-0 w-full flex justify-around opacity-40 pointer-events-none">
             {[...Array(6)].map((_, i) => (
                <div key={i} className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-cyan-400" />
             ))}
        </div>

        {/* HEADER / HUD */}
        <header className="p-10 pt-12 relative z-10 border-b-4 border-[#facc15]/30 bg-black/20">
          <div className="flex justify-between items-start mb-6">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-yellow-200 animate-pulse text-black font-black text-xs shadow-[0_0_10px_#facc15]">C</div>
                <span className="text-xl font-black text-[#facc15]">x{awards.length || 19}</span>
             </div>
             <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                   <Heart key={i} size={24} className="fill-red-600 text-red-400 drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]" />
                ))}
             </div>
          </div>

          <div className="flex gap-8 items-end">
            <div className="relative group">
              <div className="w-40 h-40 border-4 border-[#facc15] bg-zinc-900 overflow-hidden shadow-[4px_4px_0px_#854d0e]">
                {personal.photo ? (
                  <img src={personal.photo} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                ) : (
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center"><Gamepad2 size={48} className="text-zinc-600" /></div>
                )}
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#facc15] text-black px-4 py-1 text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_#000]">START</div>
            </div>

            <div className="flex-1">
                <h1 className="text-5xl font-black tracking-tight leading-none mb-2 drop-shadow-[3px_3px_0px_#4b5563]">
                    {personal.name || 'Richard Fred G.'}
                </h1>
                <p className="text-sm font-bold text-emerald-400 uppercase tracking-[0.3em]">{personal.title || 'Computer Science Student'}</p>
                <div className="mt-4 flex gap-4 text-[10px] text-zinc-400">
                   <div className="flex items-center gap-1"><MapPin size={10} /> {personal.location}</div>
                   <div className="flex items-center gap-1 text-[#facc15]"><Phone size={10} /> {personal.phone}</div>
                </div>
            </div>
          </div>
        </header>

        <main className="flex-1 grid grid-cols-12 gap-0 relative">
          
          {/* DECORATIVE CLOUDS */}
          <div className="absolute top-20 right-10 opacity-20 pointer-events-none">
             <div className="w-20 h-6 bg-white rounded-full relative shadow-[10px_10px_0_white]" />
          </div>

          {/* LEFT CONTENT (65%) */}
          <div className="col-span-8 p-10 space-y-12">
            
            <section className="break-inside-avoid">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white bg-zinc-800 inline-block px-3 py-1 mb-4 border-l-4 border-emerald-400">Personal Profile</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                {personal.summary}
              </p>
            </section>

            <section className="break-inside-avoid relative">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white bg-zinc-800 inline-block px-3 py-1 mb-8 border-l-4 border-emerald-400">Quest Log (Experience)</h2>
              <div className="space-y-10">
                {experience.map((exp, i) => (
                  <div key={i} className="relative group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors uppercase">{exp.role}</h3>
                      <span className="text-[10px] bg-zinc-800 px-2 py-1 text-zinc-500 font-bold">{exp.date}</span>
                    </div>
                    <p className="text-xs font-bold text-[#facc15] mb-3">{exp.company}</p>
                    <ul className="space-y-2">
                      {splitLines(exp.desc).map((line, li) => (
                        <li key={li} className="text-xs text-zinc-400 flex gap-2">
                           <ChevronRight size={14} className="text-emerald-500 shrink-0" /> {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR (35%) */}
          <aside className="col-span-4 bg-black/20 p-8 border-l-4 border-white/5 space-y-10">
            
            {/* PLATFORM BLOCK SECTION */}
            <section className="break-inside-avoid">
                <div className="bg-emerald-600 text-black text-[10px] font-black p-2 text-center uppercase border-b-4 border-emerald-900">Additional Info</div>
                <div className="bg-zinc-900 p-4 border-x border-b border-white/10 space-y-3">
                    {education.map((edu, i) => (
                        <div key={i} className="text-[10px]">
                            <p className="font-bold text-white uppercase">{edu.degree}</p>
                            <p className="text-zinc-500">{edu.school}</p>
                        </div>
                    ))}
                    <div className="pt-2 border-t border-white/5 space-y-1">
                        <div className="text-[10px] text-zinc-400">• Novice Chess Player</div>
                        <div className="text-[10px] text-zinc-400">• Athlete Mentality</div>
                    </div>
                </div>
            </section>

            <section className="break-inside-avoid">
                <div className="bg-blue-600 text-black text-[10px] font-black p-2 text-center uppercase border-b-4 border-blue-900">Skills / Games</div>
                <div className="bg-zinc-900 p-4 border-x border-b border-white/10 grid grid-cols-1 gap-2">
                    {skillsList.map((skill, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-zinc-300">
                            <span className="w-1.5 h-1.5 bg-blue-400 rotate-45" /> {skill}
                        </div>
                    ))}
                </div>
            </section>

            <section className="break-inside-avoid">
                <div className="bg-red-600 text-black text-[10px] font-black p-2 text-center uppercase border-b-4 border-red-900">Contact NPC</div>
                <div className="bg-zinc-900 p-4 border-x border-b border-white/10 space-y-4 text-[10px]">
                    <div className="flex items-center gap-3"><Mail size={12} className="text-red-400" /> <span className="truncate">{personal.email}</span></div>
                    <div className="flex items-center gap-3"><Phone size={12} className="text-red-400" /> {personal.phone}</div>
                    <div className="flex items-center gap-3"><Linkedin size={12} className="text-red-400" /> LinkedIn/User</div>
                </div>
            </section>

            {/* WARP PIPE DECORATION */}
            <div className="pt-10 flex justify-center opacity-40">
                <div className="w-16 h-20 bg-emerald-500 border-x-4 border-emerald-700 relative">
                    <div className="absolute top-0 -left-2 -right-2 h-6 bg-emerald-400 border-4 border-emerald-700" />
                </div>
            </div>
          </aside>
        </main>

        {/* BOTTOM FLOOR - GRASS BLOCKS */}
        <footer className="h-12 bg-[#22c55e] border-t-4 border-[#166534] flex">
           {[...Array(15)].map((_, i) => (
             <div key={i} className="flex-1 border-r border-[#166534]/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#4ade80]" />
                <div className="mt-4 ml-2 w-1 h-1 bg-[#166534] opacity-40" />
             </div>
           ))}
        </footer>

        {/* PRINT CSS */}
        <style jsx global>{`
          @media print {
            @page { size: A4; margin: 0; }
            body { background: white; -webkit-print-color-adjust: exact; }
            .break-inside-avoid { break-inside: avoid; }
          }
          @keyframes pulse-gold {
            0% { box-shadow: 0 0 5px #facc15; }
            50% { box-shadow: 0 0 20px #facc15; }
            100% { box-shadow: 0 0 5px #facc15; }
          }
        `}</style>
      </div>
    </div>
  );
};

// Mock icon because lucide doesn't have Linkedin in some versions, 
// using a basic placeholder or replace with standard lucide icon
const Linkedin = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default GamerArena;