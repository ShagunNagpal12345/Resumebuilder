import React from 'react';
import { 
  Award, Clapperboard, Contact, Guitar, Mail, Mic2, 
  Phone, Theater, Trophy, Star, Camera, Globe, MapPin, Film, GraduationCap
} from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

// Theatrical Ribbon Component
const Ribbon = ({ children, align = "center" }) => {
  const alignmentClass = align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center";
  
  return (
    <div className={`flex ${alignmentClass} mb-5 mt-2`}>
      <div className="relative inline-flex items-center bg-[linear-gradient(180deg,#d4af37,#aa7c11)] px-8 py-2 text-[13px] font-black uppercase tracking-widest text-[#2a1f18] shadow-[0_4px_10px_rgba(0,0,0,0.5)] border-y border-[#fceabb]/40">
        {/* Left Ribbon Tail */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[16px] border-y-transparent border-r-[16px] border-r-[#8b6508]" />
        {/* Right Ribbon Tail */}
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[16px] border-y-transparent border-l-[16px] border-l-[#8b6508]" />
        
        {children}
      </div>
    </div>
  );
};

// Simple Red Ribbon for Left Column
const RedRibbon = ({ children }) => (
  <div className="flex justify-start mb-5 mt-2 -ml-2">
    <div className="relative inline-flex items-center bg-[linear-gradient(180deg,#b22222,#800000)] px-6 py-1.5 text-[12px] font-black uppercase tracking-widest text-[#f8e6c0] shadow-md border-y border-red-400/30">
      {/* Left Fold */}
      <div className="absolute -left-2 top-0 w-2 h-full bg-[#5c0000] skew-y-[30deg] origin-bottom-left -z-10" />
      {/* Right Tail */}
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[14px] border-y-transparent border-l-[14px] border-l-[#b22222]" />
      
      {children}
    </div>
  </div>
);

const ActorSpotlight = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    awards = [],
    projects = [],
  } = data || {};

  const stageSkills = [...(skills.core || []), ...(skills.soft || [])].filter(Boolean);
  const hobbies = [...(skills.technical || []), ...(projects || []).map((item) => item.name)].filter(Boolean);
  
  // Separate film/TV vs Theater if possible (fallback logic)
  const filmRoles = experience;
  const theaterRoles = projects.length > 0 ? projects : experience.slice(1);

  return (
    <div className="bg-neutral-800 py-10 print:p-0 print:bg-white min-h-screen flex justify-center font-serif">
      
      {/* A4 Container: Background spans all pages */}
      <div className="relative w-[210mm] min-h-[297mm] overflow-hidden bg-[#242424] shadow-2xl print:shadow-none text-[#e0d6c8] flex flex-col border-[6px] border-[#1a1a1a]">
        
        {/* TEXTURE BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none opacity-40 z-0 mix-blend-overlay" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
        />
        
        {/* RED CURTAINS (Top Decor) */}
        <div className="absolute top-0 left-0 w-32 h-64 bg-gradient-to-r from-[#800000] via-[#b22222] to-[#800000] shadow-[10px_0_20px_rgba(0,0,0,0.5)] rounded-br-full z-10 opacity-80 border-r-4 border-black/30" />
        <div className="absolute top-0 right-0 w-32 h-64 bg-gradient-to-l from-[#800000] via-[#b22222] to-[#800000] shadow-[-10px_0_20px_rgba(0,0,0,0.5)] rounded-bl-full z-10 opacity-80 border-l-4 border-black/30" />

        {/* ==========================================
            HEADER: PHOTO & NAME
        ========================================== */}
        <header className="relative z-20 flex flex-col items-center pt-8 pb-6 bg-gradient-to-b from-transparent via-[#242424]/80 to-[#242424] break-inside-avoid">
          
          {/* Circular Cinematic Profile Photo */}
          <div className="w-56 h-56 rounded-full overflow-hidden border-[6px] border-[#242424] shadow-[0_0_40px_rgba(0,0,0,0.8)] relative z-30 bg-[#1a1a1a]">
            {personal.photo ? (
              <img src={personal.photo} alt="Profile" className="w-full h-full object-cover object-top" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-white/30">
                <Camera size={40} className="mb-2" />
                <span className="text-xs uppercase tracking-widest font-sans font-bold">Headshot</span>
              </div>
            )}
            {/* Inner vignette shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.7)] pointer-events-none" />
          </div>

          {/* Name & Title */}
          <div className="text-center mt-4 relative z-30">
            <h1 className="text-[3.5rem] font-black uppercase tracking-widest text-[#fdf6e3] leading-none" style={{ textShadow: '2px 4px 10px rgba(0,0,0,0.8)' }}>
              {personal.name || 'JASON MILLER'}
            </h1>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="h-px w-16 bg-[linear-gradient(90deg,transparent,#d4af37)]" />
              <h2 className="text-[1.2rem] font-black uppercase tracking-[0.3em] text-[#d4af37]" style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.8)' }}>
                {personal.title || 'ACTOR'}
              </h2>
              <div className="h-px w-16 bg-[linear-gradient(270deg,transparent,#d4af37)]" />
            </div>
          </div>
        </header>

        {/* Separator Line */}
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#800000] to-transparent relative z-20 opacity-80 mb-6" />

        {/* ==========================================
            MAIN CONTENT (FLEX LAYOUT)
        ========================================== */}
        <div className="px-8 flex flex-row items-start gap-8 relative z-20 flex-1 pb-10 font-sans">
          
          {/* LEFT COLUMN (30%) - Red Ribbons */}
          <div className="w-[30%] flex flex-col gap-6 shrink-0 border-r border-white/10 pr-6">
            
            {/* CONTACT */}
            <section className="break-inside-avoid">
              <RedRibbon>Contact</RedRibbon>
              <div className="space-y-4 text-[11px] font-medium text-[#d3c5b4]">
                {personal.phone && (
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-[#d4af37]" />
                    <span>{personal.phone}</span>
                  </div>
                )}
                {personal.email && (
                  <div className="flex items-center gap-3 break-all">
                    <Mail size={14} className="text-[#d4af37]" />
                    <span>{personal.email}</span>
                  </div>
                )}
                {personal.location && (
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-[#d4af37]" />
                    <span>{personal.location}</span>
                  </div>
                )}
                {personal.linkedin && (
                  <div className="flex items-center gap-3 break-all">
                    <Globe size={14} className="text-[#d4af37]" />
                    <span>{personal.linkedin}</span>
                  </div>
                )}
              </div>
            </section>

            {/* SKILLS */}
            {stageSkills.length > 0 && (
              <section className="break-inside-avoid mt-2">
                <RedRibbon>Skills</RedRibbon>
                <div className="space-y-4">
                  {stageSkills.map((item, index) => {
                    const icons = [Theater, Mic2, Clapperboard, Star];
                    const Icon = icons[index % icons.length];
                    return (
                      <div key={index} className="flex items-center gap-3 text-[12px] font-bold text-[#e0d6c8] border-b border-white/5 pb-2 last:border-0">
                        <Icon size={16} className="text-[#d4af37]" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* PHYSICAL STATS (Optional extra standard actor detail) */}
            <section className="break-inside-avoid mt-2">
               <RedRibbon>Details</RedRibbon>
               <div className="grid grid-cols-2 gap-y-3 text-[11px] font-medium text-[#d3c5b4]">
                 <div><span className="text-[#d4af37] font-bold block mb-0.5">Height</span> 6'1"</div>
                 <div><span className="text-[#d4af37] font-bold block mb-0.5">Weight</span> 180 lbs</div>
                 <div><span className="text-[#d4af37] font-bold block mb-0.5">Hair</span> Brown</div>
                 <div><span className="text-[#d4af37] font-bold block mb-0.5">Eyes</span> Hazel</div>
               </div>
            </section>

          </div>

          {/* MIDDLE COLUMN (35%) - Gold Ribbons */}
          <div className="w-[35%] flex flex-col gap-6 shrink-0 border-r border-white/10 pr-6">
            
            {/* ABOUT ME */}
            {personal.summary && (
              <section className="break-inside-avoid">
                <Ribbon align="center">About Me</Ribbon>
                <div className="text-[12px] leading-[1.8] text-[#d3c5b4] text-center font-medium mt-2">
                  {personal.summary}
                </div>
                <div className="flex justify-center gap-1 mt-4 text-[#d4af37] opacity-60">
                  <Star size={10} className="fill-current" />
                  <Star size={12} className="fill-current" />
                  <Star size={10} className="fill-current" />
                </div>
              </section>
            )}

            {/* EDUCATION / TRAINING */}
            {education.length > 0 && (
              <section className="break-inside-avoid mt-2">
                <Ribbon align="center">Training</Ribbon>
                <div className="space-y-5 mt-4">
                  {education.map((item, index) => (
                    <article key={index} className="text-center flex flex-col items-center">
                      <GraduationCap size={20} className="text-[#666] mb-2" />
                      <div className="text-[13px] font-black text-[#fdf6e3] leading-tight mb-1">{item.school}</div>
                      <div className="text-[11px] font-bold text-[#d4af37] leading-tight">{item.degree}</div>
                      {item.date && <div className="text-[10px] text-white/50 mt-1">{item.date}</div>}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* AWARDS */}
            {awards.length > 0 && (
              <section className="break-inside-avoid mt-2">
                <Ribbon align="center">Awards</Ribbon>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {awards.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-2 shadow-[inset_0_0_10px_rgba(212,175,55,0.1)]">
                        {index === 0 ? <Trophy size={20} className="fill-[#d4af37]/20" /> : <Award size={20} />}
                      </div>
                      <div className="text-[11px] font-bold text-[#e0d6c8] leading-tight line-clamp-3">{item.name}</div>
                      {item.date && <div className="text-[9px] text-white/40 mt-1">{item.date}</div>}
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* RIGHT COLUMN (35%) - Dark Ribbons / Roles */}
          <div className="w-[35%] flex flex-col gap-6">
            
            {/* FILM & TV ROLES */}
            {filmRoles.length > 0 && (
              <section className="break-inside-avoid">
                <div className="flex justify-center mb-5 mt-2">
                  <div className="bg-[#1a1a1a] border-y border-[#333] px-6 py-2 text-[12px] font-black uppercase tracking-widest text-[#fdf6e3] shadow-md">
                    Film & TV Roles
                  </div>
                </div>
                <div className="space-y-4">
                  {filmRoles.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 break-inside-avoid">
                      <Film size={16} className="text-[#666] shrink-0 mt-0.5" />
                      <div className="flex flex-col w-full">
                        <div className="flex justify-between items-baseline gap-2 border-b border-white/10 pb-1 mb-1">
                          <span className="text-[12px] font-bold text-[#fdf6e3] truncate">{item.company || 'Production'}</span>
                          <span className="text-[11px] text-[#d4af37] font-medium whitespace-nowrap">{item.role}</span>
                        </div>
                        {item.desc && (
                           <div className="text-[10px] text-[#a0978b] leading-tight line-clamp-2">{splitLines(item.desc).join(', ')}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* THEATER */}
            {theaterRoles.length > 0 && (
              <section className="break-inside-avoid mt-2">
                <div className="flex justify-center mb-5 mt-2">
                  <div className="bg-[#1a1a1a] border-y border-[#333] px-6 py-2 text-[12px] font-black uppercase tracking-widest text-[#fdf6e3] shadow-md">
                    Theater
                  </div>
                </div>
                <div className="space-y-4">
                  {theaterRoles.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 break-inside-avoid">
                      <Theater size={16} className="text-[#666] shrink-0 mt-0.5" />
                      <div className="flex flex-col w-full">
                        <div className="flex justify-between items-baseline gap-2 border-b border-white/10 pb-1 mb-1">
                          <span className="text-[12px] font-bold text-[#fdf6e3] truncate">{item.name}</span>
                          <span className="text-[11px] text-[#d4af37] font-medium whitespace-nowrap">{item.role || 'Role'}</span>
                        </div>
                        {item.desc && (
                           <div className="text-[10px] text-[#a0978b] leading-tight line-clamp-2">{splitLines(item.desc).join(', ')}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* HOBBIES / INTERESTS */}
            {hobbies.length > 0 && (
              <section className="break-inside-avoid mt-auto pb-4">
                <Ribbon align="center">Interests</Ribbon>
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  {hobbies.map((item, index) => (
                    <div key={index} className="bg-[#1a1a1a] border border-[#333] px-3 py-1.5 rounded text-[10px] font-bold text-[#a0978b] uppercase tracking-wider">
                      {item}
                    </div>
                  ))}
                </div>
              </section>
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
              background-color: #242424 !important;
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

export default ActorSpotlight;