import React from 'react';
import { 
  Award, BookOpen, Briefcase, FileText, Gavel, 
  GraduationCap, Handshake, Landmark, Mail, MapPin, 
  Phone, Scale, ShieldAlert, Star, Trophy
} from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

// Swallowtail Ribbon Component
const Ribbon = ({ title, align = 'center' }) => {
  const isLeft = align === 'left';
  const isRight = align === 'right';
  const isCenter = align === 'center';
  
  // Custom clip-paths for the inward-cut ribbon tails
  const clipPath = isLeft 
    ? 'polygon(0 0, 100% 0, 92% 50%, 100% 100%, 0 100%)' 
    : isRight 
    ? 'polygon(8% 50%, 0 0, 100% 0, 100% 100%, 0 100%)' 
    : 'polygon(6% 50%, 0 0, 100% 0, 94% 50%, 100% 100%, 0 100%)';

  return (
    <div className="flex items-center w-full mb-5 mt-2 break-inside-avoid">
      {(isCenter || isRight) && <div className="h-[2px] bg-[#c09d58] flex-1" />}
      <div 
        className={`bg-[#152b52] text-white font-black uppercase tracking-[0.15em] text-[11px] py-1.5 px-6 shrink-0 shadow-sm
          ${isLeft ? 'pr-8' : ''} ${isRight ? 'pl-8' : ''}`}
        style={{ clipPath }}
      >
        {title}
      </div>
      {(isCenter || isLeft) && <div className="h-[2px] bg-[#c09d58] flex-1" />}
    </div>
  );
};

const LawyerTrialBoard = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    awards = [],
    certifications = [],
    projects = [],
  } = data || {};

  // Extract skills & areas
  const practiceAreas = [...(skills.core || []), ...(projects || []).map((item) => item.name)].filter(Boolean);
  const keySkills = [...(skills.soft || []), ...(skills.technical || [])].filter(Boolean);
  const memberships = certifications.length > 0 ? certifications : awards;

  return (
    <div className="bg-neutral-400 py-10 print:p-0 print:bg-white min-h-screen flex justify-center font-serif">
      
      {/* A4 Container: Outer Navy Border */}
      <div className="relative w-[210mm] min-h-[297mm] bg-[#152b52] p-2 shadow-2xl print:shadow-none flex flex-col">
        
        {/* Inner Cream Container with Gold Border */}
        <div className="relative w-full flex-1 bg-[#f4ead5] border-[3px] border-[#c09d58] p-6 flex flex-col z-10">
          
          {/* ==========================================
              HEADER: Navy Block + Overlapping Photo
          ========================================== */}
          <header className="relative w-full mb-6 break-inside-avoid">
            
            {/* Top Navy Block */}
            <div className="bg-[#152b52] w-full min-h-[140px] pl-[190px] pr-8 py-8 flex flex-col justify-center shadow-md relative overflow-hidden">
              <Scale size={140} className="absolute right-4 top-[-20px] text-[#c09d58] opacity-15 pointer-events-none" />
              <h1 className="text-[2.8rem] font-black leading-none tracking-tight text-white mb-2 relative z-10">
                {personal.name || 'Emma Roberts'}
              </h1>
              <div className="w-full h-px bg-[#c09d58] mb-2 opacity-60" />
              <div className="text-[1.1rem] font-bold uppercase tracking-[0.25em] text-[#c09d58] relative z-10">
                {personal.title || 'Trial Lawyer'}
              </div>
            </div>

            {/* Bottom Cream Info Block */}
            <div className="pl-[190px] pr-4 pt-6 pb-2 flex items-start gap-8">
              
              {/* Contact */}
              <div className="w-1/2 flex flex-col">
                <Ribbon title="Contact" align="left" />
                <div className="space-y-3 text-[11px] font-bold text-slate-800 font-sans tracking-wide">
                  {personal.phone && <div className="flex items-center gap-3"><Phone size={14} className="text-[#152b52]" />{personal.phone}</div>}
                  {personal.email && <div className="flex items-center gap-3 break-all"><Mail size={14} className="text-[#152b52]" />{personal.email}</div>}
                  {personal.location && <div className="flex items-center gap-3"><MapPin size={14} className="text-[#152b52]" />{personal.location}</div>}
                </div>
              </div>

              {/* Profile Summary */}
              <div className="w-1/2 flex flex-col border-l-2 border-[#c09d58]/30 pl-8 min-h-[100px]">
                <Ribbon title="Profile" align="left" />
                <div className="text-[11px] leading-[1.7] text-slate-800 font-medium font-sans">
                  {personal.summary || 'Experienced trial lawyer with a strong record of courtroom success, persuasive advocacy, and a deep commitment to justice.'}
                </div>
              </div>

            </div>

            {/* Absolute Overlapping Profile Photo */}
            <div className="absolute top-8 left-4 w-40 h-[220px] bg-white border-4 border-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] z-20 overflow-hidden">
              {personal.photo ? (
                <img src={personal.photo} alt="Profile" className="w-full h-full object-cover object-top" />
              ) : (
                <div className="w-full h-full bg-[#e3d5b8] flex flex-col items-center justify-center text-[#152b52]/50">
                  <Scale size={40} className="mb-2" />
                  <span className="text-[10px] font-black uppercase tracking-widest font-sans">Portrait</span>
                </div>
              )}
            </div>

          </header>

          <div className="w-full h-[3px] bg-[#152b52] mb-6 opacity-90" />

          {/* ==========================================
              THREE COLUMN SECTION
          ========================================== */}
          <div className="grid grid-cols-[1fr_1.1fr_1fr] gap-6 mb-8 items-start break-inside-avoid">
            
            {/* Education */}
            <section className="flex flex-col">
              <Ribbon title="Education" align="left" />
              <div className="space-y-5 px-2 mt-2">
                {education.map((item, index) => (
                  <article key={index} className="flex gap-4 items-start break-inside-avoid">
                    <div className="text-[#152b52] mt-1 shrink-0">
                      {index === 0 ? <BookOpen size={22} /> : <GraduationCap size={22} />}
                    </div>
                    <div className="font-sans">
                      <div className="text-[12px] font-black text-slate-900 leading-tight mb-1">{item.degree}</div>
                      <div className="text-[11px] text-slate-700 font-medium leading-tight">{item.school}</div>
                      <div className="text-[11px] text-slate-500 font-bold mt-0.5">{item.date}</div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Practice Areas */}
            <section className="flex flex-col">
              <Ribbon title="Practice Areas" align="center" />
              <div className="space-y-3 px-2 mt-2">
                {practiceAreas.map((item, index) => {
                  const icons = [Gavel, Landmark, ShieldAlert, Briefcase];
                  const Icon = icons[index % icons.length];
                  return (
                    <div key={index} className="flex items-center gap-4 bg-[#e8dcc4] px-4 py-2 rounded-sm border-b-2 border-[#d4c39e] break-inside-avoid">
                      <Icon size={16} className="text-[#c09d58] shrink-0" />
                      <div className="text-[11px] font-black text-[#152b52] font-sans tracking-wide leading-tight">{item}</div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Key Skills */}
            <section className="flex flex-col">
              <Ribbon title="Key Skills" align="right" />
              <div className="space-y-3 px-2 mt-2">
                {keySkills.map((item, index) => {
                  const icons = [Gavel, FileText, Handshake, Scale];
                  const Icon = icons[index % icons.length];
                  return (
                    <div key={index} className="flex items-center gap-4 bg-[#e8dcc4] px-4 py-2 rounded-sm border-b-2 border-[#d4c39e] break-inside-avoid">
                      <div className="w-6 h-6 rounded-full bg-[#152b52] flex items-center justify-center shrink-0">
                        <Icon size={12} className="text-white" />
                      </div>
                      <div className="text-[11px] font-black text-[#152b52] font-sans tracking-wide leading-tight">{item}</div>
                    </div>
                  );
                })}
              </div>
            </section>

          </div>

          <div className="w-full h-[3px] bg-[#152b52] mb-6 opacity-90" />

          {/* ==========================================
              EXPERIENCE SECTION
          ========================================== */}
          <section className="mb-8">
            <Ribbon title="Experience" align="center" />
            <div className="grid grid-cols-2 gap-8 mt-6">
              {experience.map((item, index) => (
                <article key={index} className="flex flex-col break-inside-avoid">
                  {/* Job Header */}
                  <div className="flex items-center gap-3 border-b-2 border-[#c09d58] pb-2 mb-3">
                    <div className="text-[#152b52]">
                      {index % 2 === 0 ? <Landmark size={24} /> : <Briefcase size={24} />}
                    </div>
                    <div className="flex-1 font-sans">
                      <div className="text-[14px] font-black text-slate-900 leading-tight">{item.role}</div>
                      <div className="text-[11px] font-bold text-slate-600 mt-1 flex justify-between">
                        <span>{item.company}</span>
                        <span className="text-[#c09d58]">{item.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Job Description Bullets */}
                  {item.desc && (
                    <div className="text-[11px] leading-[1.6] text-slate-800 font-medium font-sans space-y-1.5 pl-2">
                      {splitLines(item.desc).map((line, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c09d58] shrink-0 mt-1.5" />
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <div className="w-full h-[3px] bg-[#152b52] mb-6 opacity-90 mt-auto" />

          {/* ==========================================
              AWARDS & MEMBERSHIPS SECTION
          ========================================== */}
          <div className="grid grid-cols-2 gap-8 break-inside-avoid">
            
            <section className="flex flex-col">
              <Ribbon title="Awards" align="center" />
              <div className="space-y-4 px-4 mt-2">
                {awards.map((item, index) => (
                  <article key={index} className="flex items-center gap-4 break-inside-avoid">
                    <div className="text-[#c09d58] shrink-0">
                      {index === 0 ? <Trophy size={28} /> : <Star size={28} />}
                    </div>
                    <div className="font-sans flex-1">
                      <div className="text-[12px] font-black text-slate-900 leading-tight">{item.name}</div>
                      {item.issuer && <div className="text-[11px] text-slate-700 font-medium mt-0.5">{item.issuer}</div>}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="flex flex-col">
              <Ribbon title="Professional Memberships" align="center" />
              <div className="space-y-4 px-4 mt-2">
                {memberships.map((item, index) => (
                  <article key={index} className="flex items-center gap-4 break-inside-avoid">
                    <div className="w-10 h-10 rounded-full bg-[#152b52] flex items-center justify-center shrink-0">
                      {index % 2 === 0 ? <Scale size={18} className="text-white" /> : <Landmark size={18} className="text-white" />}
                    </div>
                    <div className="font-sans flex-1">
                      <div className="text-[12px] font-black text-slate-900 leading-tight">{item.name}</div>
                      {item.issuer && <div className="text-[11px] text-slate-700 font-medium mt-0.5">{item.issuer}</div>}
                    </div>
                  </article>
                ))}
              </div>
            </section>

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
              background-color: #152b52 !important; /* Outer Border */
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            /* Force the inner container to maintain background color during print */
            .bg-\\[\\#f4ead5\\] {
              background-color: #f4ead5 !important;
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

export default LawyerTrialBoard;