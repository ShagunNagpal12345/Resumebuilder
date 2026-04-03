import React from 'react';
import { BarChart3, Briefcase, Globe, Heart, Mail, Sparkles, Users } from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const RingStat = ({ label, value, color }) => (
  <div className="rounded-[24px] bg-white/90 px-6 py-4 shadow-md flex flex-col items-center min-w-[120px]">
    <div className="flex h-16 w-16 items-center justify-center rounded-full border-[6px]" style={{ borderColor: color }}>
      <span className="text-[13px] font-black text-slate-900">{value}</span>
    </div>
    <div className="mt-3 text-center text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">{label}</div>
  </div>
);

const Panel = ({ icon: Icon, title, children }) => (
  <section className="break-inside-avoid rounded-[26px] bg-white/90 p-6 shadow-[0_16px_24px_rgba(15,23,42,0.06)] border border-slate-100">
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white shadow-md">
        <Icon size={20} />
      </div>
      <div className="text-[1.05rem] font-black uppercase tracking-[0.12em] text-slate-800 leading-tight">{title}</div>
    </div>
    {children}
  </section>
);

const InfluencerMediaKit = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    awards = [],
    certifications = [],
    languages = [],
  } = data || {};

  const contentPillars = [...(skills.core || []), ...(skills.technical || [])].filter(Boolean);
  const sponsors = projects.length > 0 
    ? projects.map((item) => item.name) 
    : awards.map((item) => item.name);
  const softSkills = (skills.soft || []).filter(Boolean);

  return (
    <div className="bg-slate-200 py-10 print:p-0 print:bg-white min-h-screen flex justify-center font-sans">
      {/* A4 Container */}
      <div className="w-[210mm] min-h-[297mm] overflow-hidden bg-white px-8 py-8 shadow-2xl print:shadow-none text-slate-900 relative flex flex-col">
        
        {/* TOP GRADIENT DECORATION */}
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_100%)] pointer-events-none z-0" />

        {/* HEADER / HERO SECTION */}
        <header className="relative z-10 flex flex-col items-center pt-4 pb-8 break-inside-avoid">
          {/* Profile Photo with Decorative Rings */}
          <div className="relative mb-6">
            <div className="absolute inset-[-16px] rounded-full border-[12px] border-[#dbeafe]" />
            <div className="absolute inset-[-24px] rounded-full border-[10px] border-[#38bdf8] border-r-transparent border-b-[#f59e0b]" />
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-[8px] border-white shadow-[0_18px_32px_rgba(37,99,235,0.16)] bg-slate-100 flex items-center justify-center">
              {personal.photo ? (
                <img src={personal.photo} alt="Profile" className="h-full w-full object-cover" />
              ) : (
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Photo</span>
              )}
            </div>
          </div>

          <div className="text-center max-w-[80%]">
            <h1 className="text-[3rem] font-black leading-none text-slate-900 tracking-tight">
              {personal.name || 'Jessica Amber'}
            </h1>
            <div className="mt-3 text-[1rem] font-bold uppercase tracking-[0.2em] text-slate-500">
              {personal.title || 'Influencer & Brand Storyteller'}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <RingStat label="Followers" value="245K" color="#2563eb" />
            <RingStat label="Engagement" value="8.6%" color="#06b6d4" />
            <RingStat label="Partners" value={`${Math.max(sponsors.length, 12)}`} color="#f59e0b" />
          </div>
        </header>

        {/* MAIN TWO-COLUMN CONTENT */}
        <div className="relative z-10 grid grid-cols-[1fr_1fr] gap-8 items-start flex-1">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            {personal.summary && (
              <Panel icon={Users} title="Profile">
                <p className="text-[12px] leading-[1.8] text-slate-600 font-medium">
                  {personal.summary}
                </p>
              </Panel>
            )}

            {contentPillars.length > 0 && (
              <Panel icon={Sparkles} title="Content Pillars">
                <div className="flex flex-wrap gap-2.5">
                  {contentPillars.map((item, index) => (
                    <span key={index} className="rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.1em]">
                      {item}
                    </span>
                  ))}
                </div>
              </Panel>
            )}

            {softSkills.length > 0 && (
              <Panel icon={Heart} title="Superpowers">
                <div className="space-y-4">
                  {softSkills.map((item, index) => (
                    <div key={index}>
                      <div className="mb-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-slate-600">{item}</div>
                      <div className="h-[5px] rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${65 + (index * 7) % 35}%`,
                            background: ['#2563eb', '#06b6d4', '#f59e0b', '#fb7185'][index % 4],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            )}

            {languages.length > 0 && (
              <Panel icon={Globe} title="Audience Locales">
                <div className="space-y-3 text-[11px] font-semibold text-slate-600">
                  {languages.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                      <span className="font-bold text-slate-800">{item.name}</span>
                      <span className="text-slate-400 uppercase tracking-wider text-[9px]">{item.level}</span>
                    </div>
                  ))}
                </div>
              </Panel>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">
            
            {experience.length > 0 && (
              <Panel icon={Briefcase} title="Campaign Work">
                <div className="space-y-6">
                  {experience.map((item, index) => (
                    <article key={index} className="break-inside-avoid">
                      <div className="text-[13px] font-black uppercase tracking-[0.08em] text-slate-900 leading-tight">{item.role}</div>
                      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#2563eb]">
                        {item.company} {item.date ? `• ${item.date}` : ''}
                      </div>
                      {item.desc && (
                        <div className="mt-2 text-[11px] leading-[1.7] text-slate-600 space-y-1">
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

            {sponsors.length > 0 && (
              <Panel icon={Heart} title="Brand Fits & Collabs">
                <div className="grid grid-cols-2 gap-3">
                  {sponsors.map((item, index) => (
                    <div key={index} className="rounded-2xl bg-slate-50 border border-slate-100 px-3 py-4 text-center text-[10px] font-black uppercase tracking-[0.12em] text-slate-700 break-inside-avoid shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </Panel>
            )}

            {(education.length > 0 || certifications.length > 0) && (
              <Panel icon={BarChart3} title="Credentials">
                <div className="space-y-4 text-[11px] text-slate-600">
                  {education.map((item, index) => (
                    <div key={`edu-${index}`} className="break-inside-avoid border-l-2 border-[#38bdf8] pl-3">
                      <div className="font-black uppercase tracking-[0.1em] text-slate-900">{item.school}</div>
                      <div className="mt-1 font-medium text-slate-700">{item.degree}</div>
                      <div className="mt-1 text-[9px] uppercase tracking-widest text-slate-400">{item.date}</div>
                    </div>
                  ))}
                  
                  {certifications.map((item, index) => (
                    <div key={`cert-${index}`} className="break-inside-avoid rounded-xl bg-slate-50 border border-slate-100 px-4 py-3 mt-4">
                      <div className="font-black uppercase tracking-[0.1em] text-slate-900">{item.name}</div>
                      <div className="mt-1 text-slate-500 font-medium">{item.issuer}</div>
                    </div>
                  ))}
                </div>
              </Panel>
            )}
          </div>
        </div>

        {/* FOOTER / CONTACT TRAY */}
        <div className="relative z-10 mt-10 mb-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-[2rem] bg-slate-900 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl break-inside-avoid mx-auto w-fit max-w-full">
          {personal.email && (
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-[#38bdf8]" />
              {personal.email}
            </span>
          )}
          <span className="text-slate-400">•</span>
          <span>Instagram / YouTube / TikTok</span>
          <span className="text-slate-400">•</span>
          <span className="text-[#f59e0b]">Partnerships Ready</span>
        </div>

        {/* PRINT CSS */}
        <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              background-color: white !important;
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

export default InfluencerMediaKit;