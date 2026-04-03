import React from 'react';
import { 
  Award, BarChart3, Briefcase, Building2, Calculator, 
  CheckCircle2, GraduationCap, Mail, MapPin, Phone, 
  LineChart, PieChart, ShieldCheck, Target, Linkedin,
  FileSpreadsheet, Database
} from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center justify-center break-inside-avoid">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2e6d68] text-white mb-2 shadow-inner">
      <Icon size={24} />
    </div>
    <div className="text-[22px] font-black leading-none text-[#1b3b4f] mb-0.5">{value}</div>
    <div className="text-[9px] font-black uppercase tracking-wider text-slate-500 text-center leading-tight">{label}</div>
  </div>
);

const SectionTitle = ({ title }) => (
  <div className="bg-[#1b3b4f] text-white text-[12px] font-black uppercase tracking-widest px-5 py-2 w-full mb-6 shadow-sm rounded-r-md border-l-4 border-[#2e6d68]">
    {title}
  </div>
);

const CharteredAccountantBoard = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    certifications = [],
    awards = [],
    projects = [],
  } = data || {};

  // Extract and format names
  const nameParts = personal.name ? personal.name.split(' ') : ['DANIEL', 'PATEL, CA'];
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  // Skills Processing
  const coreCompetencies = [...(skills.core || []), ...(skills.soft || [])].filter(Boolean);
  const techTools = (skills.technical || []).filter(Boolean);
  const services = projects.length > 0 ? projects.map(p => p.name) : coreCompetencies.slice(4, 8);

  return (
    <div className="bg-slate-200 py-10 print:p-0 print:bg-white min-h-screen flex justify-center font-sans">
      
      {/* A4 Container */}
      <div className="relative w-[210mm] min-h-[297mm] overflow-hidden bg-[#eaf4f4] shadow-2xl print:shadow-none flex flex-col">
        
        {/* ==========================================
            HEADER SECTION
        ========================================== */}
        <header className="pt-8 pb-14 px-8 relative break-inside-avoid">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-[#d0e5e5] rounded-bl-[100px] opacity-50 z-0" />
          
          <div className="flex justify-between items-start relative z-10">
            <div>
              <h1 className="text-[3.2rem] font-black uppercase leading-none tracking-tight text-[#1b3b4f]">
                {firstName} <span className="text-[#2e6d68]">{lastName}</span>
              </h1>
              <div className="inline-block mt-2 text-[1.1rem] font-bold uppercase tracking-widest text-[#2e6d68]">
                {personal.title || 'CHARTERED ACCOUNTANT'}
              </div>
              <div className="mt-3 text-[11px] font-black uppercase text-slate-600 flex gap-2 tracking-wider">
                <span>Financial Expertise</span> • 
                <span>Audit & Taxation</span> • 
                <span>Strategic Advisory</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200 text-[10px] space-y-2.5 font-medium shrink-0 min-w-[220px] relative z-20">
              {personal.phone && (
                <div className="flex items-center gap-3">
                  <div className="bg-[#2e6d68] p-1.5 rounded-full"><Phone size={12} className="text-white" /></div>
                  {personal.phone}
                </div>
              )}
              {personal.email && (
                <div className="flex items-center gap-3 break-all">
                  <div className="bg-[#2e6d68] p-1.5 rounded-full"><Mail size={12} className="text-white" /></div>
                  {personal.email}
                </div>
              )}
              {personal.location && (
                <div className="flex items-center gap-3">
                  <div className="bg-[#2e6d68] p-1.5 rounded-full"><MapPin size={12} className="text-white" /></div>
                  {personal.location}
                </div>
              )}
              {personal.linkedin && (
                <div className="flex items-center gap-3 break-all">
                  <div className="bg-[#2e6d68] p-1.5 rounded-full"><Linkedin size={12} className="text-white" /></div>
                  {personal.linkedin}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* OVERVIEW / METRICS */}
        <div className="px-8 -mt-8 relative z-20 flex gap-6 break-inside-avoid mb-6">
          <div className="w-40 h-48 shrink-0 rounded-xl border-[4px] border-white shadow-xl bg-white overflow-hidden">
            {personal.photo ? (
              <img src={personal.photo} alt="Profile" className="w-full h-full object-cover object-top" />
            ) : (
              <div className="w-full h-full bg-slate-200 flex items-center justify-center font-bold text-slate-400 text-xs">PHOTO</div>
            )}
          </div>
          
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-[#1b3b4f] p-5 shadow-md rounded-xl text-white relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10"><LineChart size={100} /></div>
              <div className="font-black text-[13px] mb-2 uppercase tracking-widest border-b border-white/20 pb-2 inline-block">
                About Me
              </div>
              <div className="text-[11px] leading-[1.7] text-[#eaf4f4] font-medium">
                {personal.summary || 'Results-driven Chartered Accountant with 9+ years of experience in accounting, audit, tax, and financial consulting. Proficient in financial analysis, risk management, and strategic planning. Committed to delivering accurate financial solutions and driving business success.'}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex justify-around items-center">
              <StatCard icon={Briefcase} value="150M+" label="Managed Assets" />
              <div className="w-px h-12 bg-slate-200" />
              <StatCard icon={CheckCircle2} value="250+" label="Annual Audits" />
              <div className="w-px h-12 bg-slate-200" />
              <StatCard icon={Target} value="92%" label="Client Retention" />
              <div className="w-px h-12 bg-slate-200" />
              <StatCard icon={Award} value="9+" label="Years Experience" />
            </div>
          </div>
        </div>

        {/* ==========================================
            MAIN CONTENT
        ========================================== */}
        <div className="px-8 flex flex-row items-start gap-8 flex-1 pb-8">
          
          {/* LEFT COLUMN (45%) */}
          <div className="w-[45%] flex flex-col gap-6">
            
            {/* EDUCATION (Moved Up) */}
            {education.length > 0 && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200 break-inside-avoid">
                <SectionTitle title="Education" />
                <div className="space-y-4 px-3">
                  {education.map((item, index) => (
                    <article key={index} className="flex items-start gap-4 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                      <div className="w-10 h-10 rounded-lg bg-[#eaf4f4] flex items-center justify-center text-[#2e6d68] shrink-0 border border-[#2e6d68]/20">
                        <GraduationCap size={20} />
                      </div>
                      <div className="pt-0.5">
                        <div className="font-black text-slate-800 text-[11px] uppercase leading-tight mb-1">{item.degree}</div>
                        <div className="text-[11px] font-bold text-slate-500 leading-tight">{item.school}</div>
                        {item.date && <div className="text-[9px] font-black uppercase tracking-widest text-[#2e6d68] mt-1">{item.date}</div>}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* CORE COMPETENCIES */}
            {coreCompetencies.length > 0 && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200 break-inside-avoid">
                <SectionTitle title="Core Competencies" />
                <div className="grid grid-cols-2 gap-3 px-2">
                  {coreCompetencies.slice(0, 6).map((item, index) => {
                    const icons = [BarChart3, ShieldCheck, Calculator, Building2, LineChart, Target];
                    const Icon = icons[index % icons.length];
                    return (
                      <div key={index} className="flex items-center gap-3 bg-[#f7fbfb] border border-slate-200 rounded-lg p-2.5">
                        <div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center text-[#2e6d68] shrink-0">
                          <Icon size={16} />
                        </div>
                        <div className="text-[10px] font-black uppercase text-slate-800 leading-tight">
                          {item}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* SERVICES OFFERED */}
            {services.length > 0 && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200 break-inside-avoid">
                <SectionTitle title="Services Offered" />
                <div className="flex items-center gap-4 px-2">
                  <div className="w-24 h-24 shrink-0 rounded-full border-[6px] border-white shadow-md relative bg-[conic-gradient(#1b3b4f_0_35%,#2e6d68_35%_65%,#f59e0b_65%_85%,#94a3b8_85%_100%)] flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full shadow-inner" />
                  </div>
                  <div className="flex-1 space-y-3">
                    {services.slice(0, 4).map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-sm shadow-sm" 
                          style={{ backgroundColor: ['#1b3b4f', '#2e6d68', '#f59e0b', '#94a3b8'][index] }}
                        />
                        <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wide">
                          {service}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* TECHNOLOGY & TOOLS (Moved Below Services) */}
            {techTools.length > 0 && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200 break-inside-avoid">
                <SectionTitle title="Technology & Tools" />
                <div className="flex flex-wrap gap-3 px-2">
                  {techTools.map((tool, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                       <div className="w-10 h-10 rounded-lg bg-[#f7fbfb] border border-slate-200 shadow-sm flex items-center justify-center text-[#2e6d68]">
                         {index % 3 === 0 ? <FileSpreadsheet size={18} /> : index % 3 === 1 ? <Database size={18} /> : <PieChart size={18} />}
                       </div>
                       <span className="text-[9px] font-black uppercase text-slate-700 text-center w-12 break-words leading-tight">{tool}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CERTIFICATIONS / MEMBERSHIPS (Moved to Left Column) */}
            {(certifications.length > 0 || awards.length > 0) && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200 break-inside-avoid">
                <SectionTitle title="Certifications" />
                <div className="space-y-3 px-2">
                  {[...certifications, ...awards].map((item, index) => (
                    <article key={index} className="flex items-center gap-3 bg-[#f7fbfb] p-3 rounded-lg border border-slate-100">
                      <div className="w-8 h-8 shrink-0 bg-[#2e6d68] rounded flex items-center justify-center text-white shadow-sm">
                        <Award size={16} />
                      </div>
                      <div>
                        <div className="text-[11px] font-black uppercase text-[#1b3b4f] leading-tight">
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

          {/* RIGHT COLUMN (55%) - Exclusively Experience now */}
          <div className="w-[55%] flex flex-col gap-6">
            
            {/* PROFESSIONAL EXPERIENCE TIMELINE */}
            {experience.length > 0 && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200 h-full flex flex-col">
                <SectionTitle title="Professional Experience" />
                <div className="border-l-2 border-[#d0e5e5] ml-[52px] mt-4 space-y-8 flex-1">
                  {experience.map((item, index) => (
                    <article key={index} className="relative pl-6 break-inside-avoid">
                      {/* Timeline Year Badge */}
                      <div className="absolute -left-[64px] top-0 w-[52px] h-[52px] bg-white rounded-full border-[3px] border-[#2e6d68] flex items-center justify-center text-[10px] font-black uppercase text-[#1b3b4f] text-center shadow-sm z-10 leading-tight">
                        {item.date?.split('-')[0] || item.date || 'Pres'}
                      </div>
                      
                      <div className="font-black text-[#1b3b4f] text-[14px] uppercase tracking-wide leading-tight pt-1">
                        {item.role}
                      </div>
                      <div className="text-[12px] font-bold text-[#f59e0b] mt-1 mb-3 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                        {item.company}
                      </div>
                      
                      {item.desc && (
                        <div className="text-[12px] text-slate-600 leading-[1.7] space-y-1.5 font-medium pr-2">
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

            {/* CLIENT SERVICE PHILOSOPHY (Kept at bottom right to balance if needed, or you can request to move it) */}
            <section className="bg-[#1b3b4f] text-white p-5 rounded-xl shadow-md border border-slate-200 break-inside-avoid relative overflow-hidden mt-auto">
               <div className="text-[11px] font-black uppercase tracking-widest mb-3 border-b border-white/20 pb-2 inline-block text-[#f59e0b]">
                 Client Service Philosophy
               </div>
               <p className="text-[11px] leading-[1.7] font-medium italic text-slate-200">
                 "Precision and integrity are at the heart of everything I do. My mission is to provide insightful, tailored financial guidance to help clients achieve their financial goals and ensure their success."
               </p>
            </section>

          </div>
        </div>

        {/* BOTTOM BRANDING BANNER */}
        <div className="mt-auto bg-[#1b3b4f] text-white py-4 px-6 text-center text-[11px] font-black uppercase tracking-[0.25em] flex items-center justify-center gap-4 break-inside-avoid shadow-[0_-4px_10px_rgba(0,0,0,0.1)] relative z-20">
          <span>Accurate.</span>
          <span className="text-[#f59e0b]">•</span>
          <span>Insightful.</span>
          <span className="text-[#f59e0b]">•</span>
          <span>Trusted.</span>
        </div>

        {/* PRINT CSS */}
        <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              background-color: #eaf4f4 !important;
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

export default CharteredAccountantBoard;