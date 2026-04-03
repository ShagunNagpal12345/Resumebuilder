import React from 'react';
import { 
  Activity, Award, BarChart3, Building2, CheckCircle2, GraduationCap, 
  Heart, Mail, MapPin, Phone, Users, Stethoscope, Microscope, Laptop, Syringe, ShieldPlus, Briefcase
} from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const SectionTitle = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-2 mb-4 bg-[#1e4a70] text-white px-4 py-1.5 rounded-full w-fit shadow-md border-2 border-white">
    {Icon && <Icon size={14} className="text-[#38bdf8]" />}
    <span className="text-[12px] font-black uppercase tracking-[0.1em] leading-none pt-0.5">{title}</span>
  </div>
);

const SkillBar = ({ label, value }) => (
  <div className="flex items-center justify-between gap-4 break-inside-avoid mb-3">
    <div className="flex items-center gap-2 w-1/2">
      <Stethoscope size={14} className="text-[#1e4a70] shrink-0" />
      <span className="text-[11px] font-bold text-slate-800 leading-tight">{label}</span>
    </div>
    <div className="flex-1 flex items-center gap-3">
      <div className="h-[8px] flex-1 rounded-full bg-slate-200 overflow-hidden shadow-inner">
        <div className="h-full rounded-full bg-[#1e4a70]" style={{ width: `${value}%` }} />
      </div>
      <span className="text-[12px] font-black text-slate-800 w-8 text-right">{value}%</span>
    </div>
  </div>
);

const PhysicianCareResume = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    awards = [],
  } = data || {};

  // Data processing
  const clinicalSkills = [...(skills.core || []), ...(skills.soft || [])].filter(Boolean);
  const technicalSkills = (skills.technical || []).filter(Boolean);
  const specialties = clinicalSkills.slice(0, 5);
  
  // Fake percentages for visual bars
  const skillBarData = clinicalSkills.slice(0, 5).map((skill, index) => ({
    label: skill,
    value: 95 - (index * 3) > 80 ? 95 - (index * 3) : 85
  }));

  const toolsList = technicalSkills.slice(0, 4);

  return (
    <div className="bg-slate-200 py-10 print:p-0 print:bg-white min-h-screen flex justify-center font-sans">
      
      {/* A4 Container: min-h allows stretch, background color spans all pages */}
      <div className="w-[210mm] min-h-[297mm] overflow-hidden bg-[#f0f7f8] shadow-2xl print:shadow-none text-slate-900 flex flex-col relative">
        
        {/* ==========================================
            TOP HEADER (Navy Blue)
        ========================================== */}
        <header className="bg-[#1e4a70] px-8 pt-8 pb-10 text-white relative z-10 flex gap-5 items-start shadow-md break-inside-avoid">
          
          {/* Profile Image */}
          <div className="w-36 h-40 shrink-0 rounded-xl overflow-hidden border-[4px] border-white shadow-lg bg-white relative z-20">
            {personal.photo ? (
              <img src={personal.photo} alt="Profile" className="w-full h-full object-cover object-top" />
            ) : (
              <div className="w-full h-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-400">PHOTO</div>
            )}
          </div>
          
          {/* Name & Titles (min-w-0 prevents it from pushing the contact box out of bounds) */}
          <div className="flex-1 min-w-0 pt-1">
            <h1 className="text-[2.4rem] font-black uppercase leading-tight tracking-tight break-words">
              {personal.name || 'DR. ANANYA PATEL, MD'}
            </h1>
            <div className="mt-2 text-[0.9rem] font-bold uppercase tracking-[0.2em] text-[#38bdf8] break-words leading-snug">
              {personal.title || 'PHYSICIAN • CAREGIVER • HEALER'}
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.14em]">
              <span className="rounded border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-2 py-1">Internal Medicine</span>
              <span className="rounded border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-2 py-1">Patient-Centered Care</span>
              <span className="rounded border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-2 py-1">Evidence-Based Practice</span>
            </div>
          </div>
          
          {/* Contact Box (Standard flex flow, NO absolute positioning) */}
          <div className="shrink-0 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden w-[250px] z-20">
            <div className="bg-[#103452] text-white text-[10px] font-black uppercase px-4 py-1.5 tracking-widest text-center">
              Contact
            </div>
            <div className="p-4 space-y-3 text-[11px] font-semibold text-slate-700">
              {personal.phone && <div className="flex items-center gap-3"><div className="bg-[#f0f7f8] p-1.5 rounded-full"><Phone size={12} className="text-[#1e4a70] shrink-0" /></div><span className="truncate">{personal.phone}</span></div>}
              {personal.email && <div className="flex items-center gap-3 break-all"><div className="bg-[#f0f7f8] p-1.5 rounded-full"><Mail size={12} className="text-[#1e4a70] shrink-0" /></div><span className="line-clamp-2">{personal.email}</span></div>}
              {personal.location && <div className="flex items-center gap-3"><div className="bg-[#f0f7f8] p-1.5 rounded-full"><MapPin size={12} className="text-[#1e4a70] shrink-0" /></div><span className="truncate">{personal.location}</span></div>}
            </div>
          </div>
        </header>

        {/* ==========================================
            PROFESSIONAL SUMMARY & SPECIALTIES
        ========================================== */}
        <div className="px-8 -mt-6 relative z-10 flex flex-col gap-6 break-inside-avoid mb-6 pl-[176px]">
          <section className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex items-start gap-4 relative">
             <div className="absolute top-2 right-4 opacity-10 pointer-events-none">
               <Activity size={70} />
             </div>
             <div className="shrink-0 mt-1">
               <div className="bg-[#1e4a70] text-white p-2 rounded-full shadow-inner">
                 <Users size={16} />
               </div>
             </div>
             <div className="flex-1">
               <div className="text-[13px] font-black text-[#1e4a70] uppercase tracking-wide mb-1.5 border-b border-slate-100 pb-1 inline-block">
                 Professional Summary
               </div>
               <p className="text-[11px] leading-[1.7] text-slate-700 font-medium">
                 {personal.summary || 'Compassionate and board-certified Internal Medicine Physician with 8+ years of experience providing high-quality, patient-centered care. Skilled in diagnosing and managing a wide range of acute and chronic conditions, with a strong focus on preventive care and patient education.'}
               </p>
             </div>
          </section>
        </div>

        {/* SPECIALTIES HORIZONTAL BAR */}
        {specialties.length > 0 && (
          <div className="px-8 mb-6 break-inside-avoid">
            <SectionTitle title="Specialties" icon={Heart} />
            <div className="grid grid-cols-5 gap-3">
              {specialties.map((item, index) => {
                const icons = [ShieldPlus, Activity, Heart, Users, Microscope];
                const Icon = icons[index % icons.length];
                return (
                  <div key={index} className="bg-white rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm border border-slate-200 h-full">
                    <div className="w-10 h-10 rounded-full bg-[#1e4a70] flex items-center justify-center text-white mb-2 shadow-inner">
                      <Icon size={18} />
                    </div>
                    <div className="text-[10px] font-bold text-slate-800 leading-tight">
                      {item}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==========================================
            TWO COLUMN MAIN CONTENT
        ========================================== */}
        <div className="px-8 flex flex-row items-start gap-6 flex-1 pb-8">
          
          {/* LEFT COLUMN (50%) */}
          <div className="w-[50%] flex flex-col gap-6">
            
            {/* CLINICAL SKILLS BARS */}
            {skillBarData.length > 0 && (
              <section className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 break-inside-avoid">
                <SectionTitle title="Clinical Skills" icon={Activity} />
                <div className="mt-4">
                  {skillBarData.map((item, index) => (
                    <SkillBar key={index} label={item.label} value={item.value} />
                  ))}
                </div>
              </section>
            )}

            {/* EXPERIENCE TIMELINE */}
            {experience.length > 0 && (
              <section className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <SectionTitle title="Experience" icon={Briefcase} />
                <div className="border-l-[3px] border-[#1e4a70] ml-3 mt-4 space-y-6">
                  {experience.map((item, index) => (
                    <article key={index} className="relative pl-6 break-inside-avoid">
                      {/* Safe Timeline Dot */}
                      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-4 border-[#1e4a70] rounded-full" />
                      
                      <div className="flex flex-col mb-1.5">
                        <div className="font-black text-[#1e4a70] text-[13px] uppercase tracking-wide leading-tight">
                          {item.role}
                        </div>
                        <div className="text-[11px] font-bold text-slate-600 mt-0.5">
                          {item.company}
                        </div>
                      </div>
                      
                      <div className="text-[10px] font-black bg-[#f0f7f8] text-[#1e4a70] px-2 py-0.5 rounded border border-[#1e4a70]/20 inline-block mb-2">
                        {item.date}
                      </div>
                      
                      {item.desc && (
                        <div className="text-[11px] text-slate-700 leading-[1.6] space-y-1 font-medium">
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
            
            {/* EDUCATION */}
            {education.length > 0 && (
              <section className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <SectionTitle title="Education" icon={GraduationCap} />
                <div className="space-y-4 mt-2">
                  {education.map((item, index) => (
                    <article key={index} className="flex gap-4 break-inside-avoid items-start border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                      <div className="w-10 h-10 shrink-0 border-2 border-[#1e4a70] rounded-full text-[#1e4a70] flex items-center justify-center bg-[#f0f7f8]">
                        <GraduationCap size={18} />
                      </div>
                      <div className="pt-0.5">
                        <div className="text-[12px] font-black uppercase text-[#1e4a70] leading-tight mb-1">{item.degree}</div>
                        <div className="text-[11px] text-slate-700 font-bold leading-tight">{item.school}</div>
                        <div className="text-[10px] font-medium text-slate-500 mt-0.5">Graduated: {item.date}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* RIGHT COLUMN (50%) */}
          <div className="w-[50%] flex flex-col gap-6">
            
            {/* TOOLS & TECHNOLOGIES */}
            {toolsList.length > 0 && (
              <section className="bg-[#e7f1f5] p-5 rounded-xl shadow-sm border border-slate-300 break-inside-avoid">
                <SectionTitle title="Tools & Technologies" icon={Laptop} />
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {toolsList.map((tool, index) => {
                    const icons = [Laptop, Activity, BarChart3, Users];
                    const Icon = icons[index % icons.length];
                    return (
                      <div key={index} className="bg-white rounded-lg p-3 flex flex-col items-center justify-center text-center shadow-sm border border-slate-200">
                        <div className="bg-[#f0f7f8] p-2 rounded-lg mb-2 text-[#1e4a70]">
                          <Icon size={20} />
                        </div>
                        <div className="text-[10px] font-black text-slate-800 leading-tight">
                          {tool}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* KEY ACHIEVEMENTS METRICS */}
            {projects.length > 0 && (
              <section className="bg-[#1e4a70] p-5 rounded-xl shadow-md text-white break-inside-avoid relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-10"><Award size={100} /></div>
                <div className="text-[12px] font-black uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-white/20 pb-2 relative z-10">
                  <Award size={16} className="text-[#38bdf8]" /> Key Achievements
                </div>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {projects.slice(0, 4).map((proj, index) => (
                    <div key={index} className="bg-white text-center p-3 rounded-lg shadow-sm flex flex-col items-center justify-center border-b-4 border-[#38bdf8]">
                      <div className="text-[20px] font-black text-[#1e4a70] leading-none mb-1">
                        {index === 0 ? '95%' : index === 1 ? '20%' : index === 2 ? '15%' : '1000+'}
                      </div>
                      <div className="text-[9px] font-black text-slate-800 uppercase tracking-wider leading-tight mb-1">
                        {proj.name}
                      </div>
                      <div className="text-[8px] text-slate-500 font-medium leading-tight">
                        {proj.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CERTIFICATIONS & AWARDS */}
            {(certifications.length > 0 || awards.length > 0) && (
              <section className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <SectionTitle title="Certifications & Licenses" icon={CheckCircle2} />
                <div className="space-y-3 mt-4">
                  {certifications.map((item, index) => (
                    <div key={`cert-${index}`} className="flex items-start gap-3 break-inside-avoid">
                      <div className="mt-0.5 text-[#38bdf8]">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <div className="text-[11px] font-black text-slate-800 leading-tight">
                          {item.name}
                        </div>
                        <div className="text-[10px] font-medium text-slate-600 mt-0.5">
                          {item.issuer || item.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {awards.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="text-[12px] font-black uppercase tracking-widest text-[#1e4a70] mb-3 flex items-center gap-2">
                      <Users size={16} /> Memberships
                    </div>
                    <ul className="space-y-2 text-[11px] text-slate-700 font-medium list-disc pl-5">
                      {awards.map((item, index) => (
                        <li key={`awd-${index}`} className="break-inside-avoid leading-tight">{item.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

          </div>
        </div>

        {/* BOTTOM BRANDING BANNER */}
        <div className="mt-auto bg-[#1e4a70] text-white py-3 px-6 text-center text-[11px] font-black uppercase tracking-[0.25em] flex items-center justify-center gap-2 break-inside-avoid shadow-[0_-4px_10px_rgba(0,0,0,0.1)] relative z-20">
          <span>Compassionate</span>
          <span className="text-[#38bdf8] mx-2">|</span>
          <span>Competent</span>
          <span className="text-[#38bdf8] mx-2">|</span>
          <span>Committed to Health & Healing</span>
        </div>

        {/* PRINT CSS */}
        <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              background-color: #f0f7f8 !important;
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

export default PhysicianCareResume;