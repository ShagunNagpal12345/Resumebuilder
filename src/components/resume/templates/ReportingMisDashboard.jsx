import React from 'react';
import { 
  BarChart3, Briefcase, Database, GraduationCap, 
  LineChart, Mail, MapPin, Phone, PieChart, Target, Award, Linkedin
} from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

// SVG Half-Circle Gauge Component
const Gauge = ({ value, label, color }) => {
  const dash = 126; // Math.PI * 40 (radius)
  const offset = dash - (dash * value) / 100;
  return (
    <div className="flex flex-col items-center break-inside-avoid">
      <div className="relative w-24 h-12">
        <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible drop-shadow-sm">
          {/* Background Track */}
          <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e2e8f0" strokeWidth="14" />
          {/* Value Track */}
          <path 
            d="M 10 50 A 40 40 0 0 1 90 50" 
            fill="none" 
            stroke={color} 
            strokeWidth="14" 
            strokeDasharray={dash} 
            strokeDashoffset={offset} 
            strokeLinecap="butt"
          />
        </svg>
        <div className="absolute bottom-0 left-0 w-full text-center text-[15px] font-black text-slate-800 leading-none">
          {value}%
        </div>
      </div>
      <div className="mt-2 text-[10px] font-bold uppercase tracking-wide text-slate-600 text-center leading-tight">
        {label}
      </div>
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ title }) => (
  <div className="bg-[#1a4b8c] text-white text-[12px] font-black uppercase tracking-widest px-4 py-1.5 w-full mb-5 shadow-sm rounded-r-md border-l-4 border-[#fbbd08]">
    {title}
  </div>
);

const ReportingMisDashboard = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    awards = [],
  } = data || {};

  // Extract and format names
  const nameParts = personal.name ? personal.name.split(' ') : ['JOHNATHAN', 'SMITH'];
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  // Skills processing
  const coreSkills = [...(skills.core || []), ...(skills.soft || [])].filter(Boolean);
  const technicalTools = (skills.technical || []).filter(Boolean);
  
  // Generating visual percentages for the gauges
  const gaugeData = coreSkills.map((skill, i) => ({
    label: skill,
    value: 90 - (i * 5) > 60 ? 90 - (i * 5) : 75 + (i % 3) * 5,
    color: ['#1a4b8c', '#fbbd08', '#0ea5e9', '#f97316'][i % 4]
  }));

  return (
    <div className="bg-slate-200 py-10 print:p-0 print:bg-white min-h-screen flex justify-center font-sans">
      
      {/* A4 Container: min-h allows infinite stretch. The background spans all pages. */}
      <div className="relative w-[210mm] min-h-[297mm] overflow-hidden bg-[#f4f7fb] shadow-2xl print:shadow-none flex flex-col">
        
        {/* ==========================================
            HEADER SECTION (Navy & Gold)
        ========================================== */}
        <header className="bg-[#1a4b8c] text-white pt-8 pb-16 px-8 relative break-inside-avoid shadow-md">
          {/* Abstract background chart decorations */}
          <div className="absolute right-10 bottom-4 opacity-20 pointer-events-none flex items-end gap-2">
            <div className="w-4 h-12 bg-white rounded-t-sm" />
            <div className="w-4 h-20 bg-white rounded-t-sm" />
            <div className="w-4 h-16 bg-[#fbbd08] rounded-t-sm" />
            <div className="w-4 h-24 bg-white rounded-t-sm" />
            <div className="w-12 h-12 rounded-full border-[4px] border-[#fbbd08] ml-4" />
          </div>

          <div className="flex justify-between items-start relative z-10">
            <div>
              <h1 className="text-[3rem] font-black uppercase leading-none tracking-tight drop-shadow-md">
                {firstName} <span className="text-[#fbbd08]">{lastName}</span>
              </h1>
              <div className="inline-block mt-2 text-[1rem] font-bold uppercase tracking-[0.2em] border-b-[3px] border-white pb-1 shadow-sm">
                {personal.title || 'Power BI Developer'}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="bg-[#12366b] p-4 rounded-xl shadow-inner border border-white/10 text-[11px] space-y-2.5 font-medium shrink-0 min-w-[200px]">
              <div className="text-[#fbbd08] font-black uppercase tracking-wider mb-1 text-[10px] border-b border-white/20 pb-1">Contact Info</div>
              {personal.phone && (
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-1.5 rounded-full"><Phone size={12} className="text-[#fbbd08]" /></div>
                  {personal.phone}
                </div>
              )}
              {personal.email && (
                <div className="flex items-center gap-3 break-all">
                  <div className="bg-white/10 p-1.5 rounded-full"><Mail size={12} className="text-[#fbbd08]" /></div>
                  {personal.email}
                </div>
              )}
              {personal.location && (
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-1.5 rounded-full"><MapPin size={12} className="text-[#fbbd08]" /></div>
                  {personal.location}
                </div>
              )}
              {personal.linkedin && (
                <div className="flex items-center gap-3 break-all">
                  <div className="bg-white/10 p-1.5 rounded-full"><Linkedin size={12} className="text-[#fbbd08]" /></div>
                  {personal.linkedin}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* OVERVIEW / SUMMARY (Overlapping Header) */}
        <div className="px-8 -mt-10 relative z-20 flex gap-6 break-inside-avoid mb-6">
          <div className="w-36 h-36 shrink-0 rounded-md border-[4px] border-white shadow-xl bg-white overflow-hidden">
            {personal.photo ? (
              <img src={personal.photo} alt="Profile" className="w-full h-full object-cover object-top" />
            ) : (
              <div className="w-full h-full bg-slate-200 flex items-center justify-center font-bold text-slate-400 text-xs">PHOTO</div>
            )}
          </div>
          
          <div className="pt-10 flex-1">
            <div className="bg-white p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-t-[5px] border-[#fbbd08] rounded-b-xl rounded-tr-xl relative">
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none opacity-10">
                <PieChart size={100} className="-mt-4 -mr-4 text-[#1a4b8c]" />
              </div>
              <div className="font-black text-[#1a4b8c] text-[15px] mb-1.5 uppercase tracking-wide">
                Overview <span className="text-slate-300 mx-2">•</span> BI Specialist
              </div>
              <div className="text-[12px] leading-[1.7] text-slate-600 font-medium">
                {personal.summary || 'Skilled in creating interactive dashboards, reports, and data solutions to drive business insights and operational efficiency.'}
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            MAIN CONTENT (Two Column Flex Layout)
        ========================================== */}
        <div className="px-8 flex flex-row items-start gap-8 flex-1 pb-8">
          
          {/* LEFT COLUMN */}
          <div className="w-[50%] flex flex-col gap-6">
            
            {/* SKILLS GAUGES */}
            {gaugeData.length > 0 && (
              <section className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 break-inside-avoid">
                <SectionHeader title="Skills" />
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 pt-2">
                  {gaugeData.map((skill, index) => (
                    <Gauge key={index} label={skill.label} value={skill.value} color={skill.color} />
                  ))}
                </div>
              </section>
            )}

            {/* EXPERIENCE TIMELINE */}
            {experience.length > 0 && (
              <section className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <SectionHeader title="Experience" />
                <div className="border-l-2 border-slate-300 ml-3 space-y-6 pt-2">
                  {experience.map((item, index) => (
                    <article key={index} className="relative pl-5 break-inside-avoid">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[11px] top-1 w-5 h-5 bg-white border-[4px] border-[#1a4b8c] rounded-full shadow-sm" />
                      
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <div className="font-black text-[#1a4b8c] text-[14px] uppercase tracking-wide leading-tight">
                          {item.role}
                        </div>
                        <div className="bg-slate-100 text-slate-600 text-[9px] px-2 py-1 rounded font-black uppercase tracking-widest whitespace-nowrap shadow-sm border border-slate-200">
                          {item.date}
                        </div>
                      </div>
                      
                      <div className="text-[11px] font-bold text-[#fbbd08] uppercase tracking-wider mb-2">
                        {item.company}
                      </div>
                      
                      {item.desc && (
                        <div className="text-[11px] text-slate-600 leading-[1.6] space-y-1 font-medium">
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

          </div>

          {/* RIGHT COLUMN */}
          <div className="w-[50%] flex flex-col gap-6">
            
            {/* TOOLS BAR CHARTS */}
            {technicalTools.length > 0 && (
              <section className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 break-inside-avoid">
                <SectionHeader title="Tools" />
                <div className="space-y-4 pt-2">
                  {technicalTools.map((tool, index) => {
                    const percentage = 95 - (index * 4) > 60 ? 95 - (index * 4) : 75;
                    const color = ['#fbbd08', '#1a4b8c', '#0ea5e9', '#22c55e', '#6366f1'][index % 5];
                    return (
                      <div key={index} className="flex items-center gap-3 break-inside-avoid">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-slate-100 text-slate-600 border border-slate-200">
                          {index % 3 === 0 ? <BarChart3 size={14} /> : index % 3 === 1 ? <Database size={14} /> : <LineChart size={14} />}
                        </div>
                        <div className="w-20 shrink-0 text-[11px] font-black uppercase text-slate-700 truncate pr-2">
                          {tool}
                        </div>
                        <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                          <div 
                            className="h-full rounded-full" 
                            style={{ width: `${percentage}%`, backgroundColor: color }} 
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* EDUCATION (Moved here, above Projects) */}
            {education.length > 0 && (
              <section className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <SectionHeader title="Education" />
                <div className="space-y-4 pt-2">
                  {education.map((item, index) => (
                    <article key={index} className="flex items-start gap-4 break-inside-avoid">
                      <div className="w-10 h-10 rounded-lg bg-[#f4f7fb] flex items-center justify-center text-[#1a4b8c] shrink-0 border border-slate-200">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <div className="font-black text-slate-800 text-[12px] uppercase">{item.degree}</div>
                        <div className="text-[11px] font-bold text-slate-500 mt-0.5">{item.school}</div>
                        <div className="text-[10px] font-bold text-[#fbbd08] mt-1">{item.date}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* PROJECT HIGHLIGHTS */}
            {projects.length > 0 && (
              <section className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <SectionHeader title="Project Highlights" />
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {projects.map((proj, index) => (
                    <article key={index} className="bg-[#f4f7fb] border border-slate-200 rounded-lg p-4 text-center flex flex-col items-center break-inside-avoid shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#1a4b8c]" />
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[#1a4b8c] mb-3 border border-slate-100 shrink-0">
                        {index % 2 === 0 ? <LineChart size={18} /> : <Target size={18} />}
                      </div>
                      <div className="text-[12px] font-black text-[#1a4b8c] uppercase leading-tight mb-2">
                        {proj.name}
                      </div>
                      <div className="text-[10px] text-slate-600 leading-[1.6] font-medium">
                        {proj.desc}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* CERTIFICATIONS & AWARDS */}
            {(certifications.length > 0 || awards.length > 0) && (
              <section className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <SectionHeader title="Certifications" />
                <div className="space-y-4 pt-2">
                  {[...certifications, ...awards].map((item, index) => (
                    <article key={index} className="flex items-center gap-4 bg-[#f4f7fb] border border-slate-200 p-3 rounded-lg break-inside-avoid">
                      <div className="w-10 h-10 shrink-0 bg-[#fbbd08] rounded flex items-center justify-center text-white shadow-sm">
                        <Award size={20} />
                      </div>
                      <div>
                        <div className="text-[11px] font-black uppercase text-slate-800 leading-tight">
                          {item.name}
                        </div>
                        <div className="text-[10px] font-medium text-slate-500 mt-1">
                          {item.issuer || item.date}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>

        {/* BOTTOM BRANDING BANNER */}
        <div className="mt-auto bg-[#1a4b8c] text-white py-3 text-center text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 break-inside-avoid shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
          <span>Data-Driven</span>
          <span className="text-[#fbbd08]">|</span>
          <span>Insight-Focused</span>
          <span className="text-[#fbbd08]">|</span>
          <span>Results-Oriented</span>
        </div>

        {/* PRINT CSS */}
        <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              background-color: #f4f7fb !important;
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

export default ReportingMisDashboard;