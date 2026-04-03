import React from 'react';
import { Phone, Mail, Send } from 'lucide-react';

const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const skillList = (skills = {}) => [
  ...(skills.core || []),
  ...(skills.technical || []),
  ...(skills.soft || []),
].filter(Boolean);

const scoreForIndex = (index, base = 8) => Math.max(6, Math.min(10, base + (index % 3)));

// Custom component for the vintage notched black labels
const SectionLabel = ({ children }) => (
  <div className="relative mb-6 mt-4 break-inside-avoid">
    {/* Background Line */}
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t-[3px] border-[#eceae3] print:border-gray-200" />
    </div>
    {/* Label */}
    <div className="relative flex justify-center">
      <div 
        className="bg-[#222] text-[#f4f1eb] px-10 py-1.5 text-[13px] font-bold uppercase tracking-[0.2em]"
        style={{ clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)' }}
      >
        {children}
      </div>
    </div>
  </div>
);

const ScoreBar = ({ label, score }) => (
  <div className="mb-4 text-sm font-sans font-bold">
    <div className="mb-1">{label}</div>
    <div className="flex items-center gap-2">
      <div className="flex-1 h-[6px] bg-transparent">
        <div className="h-full bg-[#222]" style={{ width: `${(score / 10) * 100}%` }} />
      </div>
      <div className="w-10 text-right">{score}/10</div>
    </div>
  </div>
);

const NewspaperEditorial = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    certifications = [],
    languages = [],
    skills = {},
  } = data || {};

  const scores = skillList(skills).slice(0, 4);

  return (
    <div className="bg-neutral-200 py-10 print:p-0 print:bg-white min-h-screen flex justify-center">
      {/* A4 Container */}
      <div className="bg-[#f4f1eb] shadow-2xl print:shadow-none w-[210mm] min-h-[297mm] font-serif text-[#222] p-10 border border-gray-300 relative overflow-hidden">
        
        {/* HEADER */}
        <header className="text-center mb-4">
          <h1 
            className="text-[4.5rem] font-black uppercase tracking-tighter leading-none mb-4" 
            style={{ textShadow: '4px 4px 0px #d5d1c8', fontFamily: 'Georgia, serif' }}
          >
            {personal.name || 'Richard Sanchez'}
          </h1>
          
          <div 
            className="bg-[#222] text-white text-xl font-bold uppercase tracking-[0.4em] py-2 mx-4"
            style={{ clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)' }}
          >
            {personal.title || 'Chief Editor'}
          </div>

          <div className="mt-4 border-y-[3px] border-[#222] py-2 flex justify-between items-center px-4 font-sans font-bold text-xs uppercase tracking-wider">
            <div className="text-left leading-tight">
              Contact<br/>Information
            </div>
            <div className="flex items-center gap-6">
              {personal.phone && <span className="flex items-center gap-1.5"><Phone size={14} className="fill-[#222] text-[#222]"/> {personal.phone}</span>}
              {personal.email && <span className="flex items-center gap-1.5"><Mail size={14} className="fill-[#222] text-white"/> {personal.email}</span>}
              {personal.location && <span className="flex items-center gap-1.5"><Send size={14} className="fill-[#222] text-[#222]"/> {personal.location}</span>}
            </div>
          </div>
        </header>

        {/* TOP GRID: Summary | Photo | Education */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          
          {/* Column 1: Summary */}
          <div className="col-span-4">
            <SectionLabel>Career Summary</SectionLabel>
            {personal.summary && (
              <p className="text-[13px] leading-[1.8] text-justify font-medium">
                {personal.summary}
              </p>
            )}
          </div>

          {/* Column 2: Photo */}
          <div className="col-span-4 flex flex-col items-center pt-2">
            <div className="w-full h-56 border border-black p-1 bg-white">
              {personal.photo ? (
                <img src={personal.photo} alt="Profile" className="w-full h-full object-cover grayscale-[20%]" />
              ) : (
                <div className="w-full h-full bg-[#e6e3da] flex items-center justify-center font-bold text-xs uppercase text-gray-500">Photo Here</div>
              )}
            </div>
          </div>

          {/* Column 3: Education */}
          <div className="col-span-4">
            <div 
              className="bg-[#222] text-white p-5 h-full"
              style={{ clipPath: 'polygon(15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px), 0 15px)' }}
            >
              <h3 className="text-center font-bold tracking-[0.15em] uppercase mb-4 text-sm">Education</h3>
              <div className="w-full border-t border-white/30 mb-5" />
              
              <div className="space-y-6">
                {education.slice(0, 2).map((edu, index) => (
                  <div key={index} className="text-center break-inside-avoid">
                    <div className="text-[13px] font-bold mb-1 leading-snug">{edu.degree}</div>
                    <div className="text-xs text-gray-300 font-sans mb-2">{edu.school}</div>
                    <div className="text-[11px] font-bold uppercase tracking-wider">GPA {scoreForIndex(index + 3)}.8</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM GRID: Experiences & Languages | Certs & Skills */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Left Side (8 cols) */}
          <div className="col-span-8">
            <SectionLabel>Experiences</SectionLabel>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <article key={index} className="break-inside-avoid">
                  <div className="border border-[#222] px-3 py-1.5 flex justify-between items-center font-bold text-[13px] bg-white mb-4 shadow-[3px_3px_0px_#222]">
                    <span className="uppercase">{exp.role}{exp.company ? `, ${exp.company}` : ''}</span>
                    <span>{exp.date}</span>
                  </div>
                  <div className="space-y-2">
                    {splitLines(exp.desc).map((line, lineIndex) => (
                      <div key={lineIndex} className="border-l-[4px] border-[#222] pl-3 py-0.5 text-[13px] text-justify leading-relaxed font-medium text-gray-800">
                        {line}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {languages.length > 0 && (
              <div className="mt-8 break-inside-avoid">
                <SectionLabel>Languages</SectionLabel>
                <div className="grid grid-cols-2 gap-8">
                  {languages.map((language, index) => (
                    <ScoreBar key={index} label={language.name} score={scoreForIndex(index + 7)} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side (4 cols) */}
          <div className="col-span-4 flex flex-col">
            <SectionLabel>Certifications</SectionLabel>
            <div className="space-y-4 mb-6">
              {certifications.slice(0, 3).map((cert, index) => (
                <div key={index} className="text-[13px] leading-snug break-inside-avoid">
                  <span className="font-bold">{cert.name}</span>
                  {cert.issuer && <div className="text-gray-600 font-sans text-xs mt-1">{cert.issuer}</div>}
                </div>
              ))}
            </div>

            <SectionLabel>Skills</SectionLabel>
            <div className="space-y-1 mb-8 break-inside-avoid">
              {scores.map((skill, index) => (
                <ScoreBar key={index} label={skill} score={scoreForIndex(index)} />
              ))}
            </div>

            <div className="mt-auto break-inside-avoid">
              <SectionLabel>Reference</SectionLabel>
              <div className="text-center text-[13px] font-bold uppercase tracking-wider mt-2">
                Available upon request
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @media print {
          @page { size: A4; margin: 0; }
          body { 
            background: white; 
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
          }
          .break-inside-avoid { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
};

export default NewspaperEditorial;