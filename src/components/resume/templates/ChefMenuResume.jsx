import React from 'react';
import { ChefHat, Mail, MapPin, Phone, UtensilsCrossed } from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const Section = ({ title, children }) => (
  <section className="break-inside-avoid rounded-[24px] border border-[#1f2937]/10 bg-white/90 p-5 shadow-[0_12px_20px_rgba(15,23,42,0.07)]">
    <div className="mb-4 flex items-center gap-2 text-[0.98rem] font-black uppercase tracking-[0.16em] text-[#991b1b]">
      <UtensilsCrossed size={15} />
      {title}
    </div>
    {children}
  </section>
);

const ChefMenuResume = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    certifications = [],
    awards = [],
    projects = [],
  } = data || {};

  // Combine all skills into a single specialty array
  const specialties = [
    ...(skills.core || []), 
    ...(skills.technical || []), 
    ...(skills.soft || [])
  ].filter(Boolean);

  return (
    <div className="bg-stone-300 py-10 print:p-0 print:bg-[#f7f0e5] min-h-screen flex justify-center font-sans">
      {/* A4 Container: min-h allows it to stretch, browser handles physical page breaks */}
      <div className="w-[210mm] min-h-[297mm] bg-[#f7f0e5] px-8 py-10 shadow-2xl print:shadow-none text-[#1f2937]">
        
        {/* HEADER */}
        <header className="break-inside-avoid rounded-[30px] border-[2px] border-[#991b1b] bg-white/90 px-6 py-6 shadow-[0_14px_24px_rgba(127,29,29,0.12)]">
          <div className="grid grid-cols-[150px_1fr] gap-6">
            <div className="overflow-hidden rounded-[26px] border-[3px] border-[#f59e0b] bg-[#fff7ed] p-2">
              {personal.photo ? (
                <img src={personal.photo} alt="Profile" className="h-40 w-full rounded-[20px] object-cover" />
              ) : (
                <div className="h-40 w-full rounded-[20px] bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-400 uppercase">
                  Photo
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[#991b1b]">
                <ChefHat size={26} />
                <span className="text-[0.9rem] font-black uppercase tracking-[0.28em]">Signature Menu</span>
              </div>
              <h1 className="mt-3 text-[2.8rem] font-black leading-none">{personal.name || 'Pooja Bansal'}</h1>
              <div className="mt-2 text-[1rem] font-semibold uppercase tracking-[0.18em] text-[#b45309]">
                {personal.title || 'Executive Chef'}
              </div>
              <p className="mt-4 max-w-[92%] text-[12px] leading-[1.8] text-slate-600 font-medium">
                {personal.summary ||
                  'Chef and culinary leader focused on memorable dining experiences, disciplined kitchen operations, and menus that balance craft with creativity.'}
              </p>
            </div>
          </div>
        </header>

        {/* MAIN TWO-COLUMN LAYOUT - items-start allows independent column flow for page breaks */}
        <div className="mt-7 grid grid-cols-[1.05fr_0.95fr] gap-7 items-start">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {experience.length > 0 && (
              <Section title="Kitchen Experience">
                <div className="space-y-6">
                  {experience.map((item, index) => (
                    <article key={index} className="break-inside-avoid">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <div className="text-[14px] font-black uppercase tracking-[0.08em] text-slate-900 leading-tight">{item.role}</div>
                          <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#991b1b]">{item.company}</div>
                        </div>
                        <div className="rounded-full bg-[#fef3c7] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#92400e] whitespace-nowrap">
                          {item.date}
                        </div>
                      </div>
                      {item.desc && (
                        <div className="mt-2 text-[11px] leading-[1.75] text-slate-600 space-y-1">
                          {splitLines(item.desc).map((line, i) => (
                            <p key={i}>• {line}</p>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </Section>
            )}

            {projects.length > 0 && (
              <Section title="Featured Menus & Projects">
                <div className="space-y-4">
                  {projects.map((item, index) => (
                    <article key={index} className="break-inside-avoid rounded-2xl border border-[#f59e0b]/25 bg-[#fff7ed] px-4 py-4">
                      <div className="text-[13px] font-black uppercase tracking-[0.08em] text-slate-900">{item.name}</div>
                      <div className="mt-2 text-[11px] leading-[1.7] text-slate-600">{item.desc}</div>
                    </article>
                  ))}
                </div>
              </Section>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            
            <Section title="Contact">
              <div className="space-y-3 text-[11px] font-semibold text-slate-600">
                {personal.phone && <div className="flex items-center gap-3"><Phone size={14} className="text-[#991b1b]" />{personal.phone}</div>}
                {personal.email && <div className="flex items-center gap-3 break-all"><Mail size={14} className="text-[#991b1b]" />{personal.email}</div>}
                {personal.location && <div className="flex items-center gap-3"><MapPin size={14} className="text-[#991b1b]" />{personal.location}</div>}
              </div>
            </Section>

            {specialties.length > 0 && (
              <Section title="Specialties">
                <div className="flex flex-wrap gap-2">
                  {specialties.map((item, index) => (
                    <div key={index} className="rounded-full bg-[#991b1b] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {(education.length > 0 || certifications.length > 0) && (
              <Section title="Training & Credentials">
                <div className="space-y-4 text-[11px] text-slate-600">
                  {education.map((item, index) => (
                    <div key={`edu-${index}`} className="break-inside-avoid">
                      <div className="font-black uppercase tracking-[0.08em] text-slate-900">{item.school}</div>
                      <div className="mt-1">{item.degree}</div>
                      <div className="mt-1 text-[#b45309] font-semibold">{item.date}</div>
                    </div>
                  ))}
                  
                  {certifications.length > 0 && education.length > 0 && <hr className="border-[#1f2937]/10" />}

                  {certifications.map((item, index) => (
                    <div key={`cert-${index}`} className="break-inside-avoid rounded-xl bg-[#fff7ed] px-3 py-3 border border-[#f59e0b]/20">
                      <div className="font-black uppercase tracking-[0.08em] text-slate-900">{item.name}</div>
                      <div className="mt-1">{item.issuer}</div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {awards.length > 0 && (
              <Section title="Awards">
                <div className="space-y-3 text-[11px] text-slate-600">
                  {awards.map((item, index) => (
                    <div key={index} className="break-inside-avoid rounded-xl bg-[#fff7ed] px-3 py-3 border border-[#f59e0b]/20">
                      <div className="font-black uppercase tracking-[0.08em] text-slate-900">{item.name}</div>
                      <div className="mt-1">{item.issuer || item.date}</div>
                    </div>
                  ))}
                </div>
              </Section>
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
              background-color: #f7f0e5 !important;
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

export default ChefMenuResume;