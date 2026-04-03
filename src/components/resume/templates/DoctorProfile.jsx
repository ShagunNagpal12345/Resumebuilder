import React from 'react';
import { 
  Activity, Award, Building2, CheckCircle2, GraduationCap, Heart, 
  Mail, MapPin, Phone, Linkedin, Stethoscope, Microscope, 
  FileText, Users, ShieldPlus, Syringe, Laptop
} from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const SectionTitle = ({ children }) => (
  <div className="bg-[#124d63] text-white text-[12px] font-black uppercase tracking-widest px-5 py-2 w-full mb-6 rounded-r-full shadow-sm max-w-[90%] -ml-1 border-l-4 border-white">
    {children}
  </div>
);

// SVG Circular Donut Chart Component (Resized for better fit)
const DonutChart = ({ value, label, color }) => {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center break-inside-avoid">
      <div className="relative w-16 h-16 mb-2">
        <svg className="transform -rotate-90 w-16 h-16">
          <circle cx="32" cy="32" r={radius} stroke="#e2e8f0" strokeWidth="6" fill="transparent" />
          <circle 
            cx="32" 
            cy="32" 
            r={radius} 
            stroke={color} 
            strokeWidth="6" 
            fill="transparent" 
            strokeDasharray={circumference} 
            strokeDashoffset={strokeDashoffset} 
            strokeLinecap="round" 
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-[14px] font-black text-[#124d63] leading-none">{value}%</span>
        </div>
      </div>
      <div className="text-[9px] font-black uppercase tracking-widest text-slate-700 text-center leading-tight">
        {label}
      </div>
    </div>
  );
};

const DoctorProfile = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    awards = [],
  } = data || {};

  // Skills processing
  const clinicalSkills = [...(skills.core || []), ...(skills.soft || [])].filter(Boolean);
  const techTools = (skills.technical || []).filter(Boolean);

  const primarySpecialties = clinicalSkills.slice(0, 6); // Max 6 for the icon grid
  const secondaryProcedures = clinicalSkills.slice(6, 10);
  
  // Generating visual percentages for the donut charts
  const donutData = secondaryProcedures.length > 0 ? secondaryProcedures.map((skill, i) => ({
    label: skill,
    value: 90 - (i * 15) > 10 ? 90 - (i * 15) : 10,
    color: ['#0f766e', '#124d63', '#0ea5e9', '#64748b'][i % 4]
  })) : [
    { label: "Chronic Disease", value: 45, color: "#0f766e" },
    { label: "Preventive Care", value: 30, color: "#124d63" },
    { label: "Acute Care", value: 15, color: "#0ea5e9" },
    { label: "Minor Procs", value: 10, color: "#64748b" }
  ];

  return (
    <div className="bg-slate-200 py-10 print:p-0 print:bg-white min-h-screen flex justify-center font-sans">
      
      {/* A4 Container */}
      <div className="relative w-[210mm] min-h-[297mm] bg-[#f4f8fa] shadow-2xl print:shadow-none flex flex-col text-slate-800">
        
        {/* ==========================================
            TOP HEADER BANNER
        ========================================== */}
        <div className="bg-[#eef5f8] border-b-4 border-[#0f766e] flex justify-between items-start break-inside-avoid px-8 pt-8 pb-6">
          <div className="flex-1 pr-6">
            <h1 className="text-[2.8rem] font-black uppercase leading-tight tracking-tight text-[#124d63]">
              {personal.name || 'Dr. Ananya Rao, MD'}
            </h1>
            <div className="mt-1 text-[1rem] font-black uppercase tracking-widest text-[#0f766e]">
              {personal.title || 'Internal Medicine Physician'}
            </div>
            <div className="mt-3 text-[11px] font-bold text-slate-600 flex flex-wrap gap-2">
              <span>Compassionate Care</span> • 
              <span>Evidence-Based Medicine</span> • 
              <span>Lifelong Learner</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 min-w-[220px] shrink-0">
            <div className="space-y-2.5 text-[10px] font-semibold text-slate-600">
              {personal.phone && (
                <div className="flex items-center gap-3">
                  <div className="bg-[#0f766e] p-1 rounded-full"><Phone size={12} className="text-white" /></div>
                  {personal.phone}
                </div>
              )}
              {personal.email && (
                <div className="flex items-center gap-3 break-all">
                  <div className="bg-[#0f766e] p-1 rounded-full"><Mail size={12} className="text-white" /></div>
                  {personal.email}
                </div>
              )}
              {personal.location && (
                <div className="flex items-center gap-3">
                  <div className="bg-[#0f766e] p-1 rounded-full"><MapPin size={12} className="text-white" /></div>
                  {personal.location}
                </div>
              )}
              {personal.linkedin && (
                <div className="flex items-center gap-3 break-all">
                  <div className="bg-[#0f766e] p-1 rounded-full"><Linkedin size={12} className="text-white" /></div>
                  {personal.linkedin}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ==========================================
            ABOUT ME & METRICS
        ========================================== */}
        <div className="px-8 mt-6 flex gap-6 break-inside-avoid mb-6">
          {/* Profile Photo */}
          <div className="w-36 h-40 shrink-0 border-4 border-white shadow-md bg-white rounded-xl overflow-hidden">
            {personal.photo ? (
              <img src={personal.photo} alt="Profile" className="w-full h-full object-cover object-top" />
            ) : (
              <div className="w-full h-full bg-slate-200 flex items-center justify-center font-bold text-slate-400 text-[10px] tracking-widest">PHOTO</div>
            )}
          </div>
          
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-[#124d63] text-white font-black uppercase text-[11px] tracking-widest px-4 py-1.5">
              About Me
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <p className="text-[11px] leading-[1.7] text-slate-700 font-medium">
                {personal.summary || 'Dedicated and board-certified Internal Medicine Physician with 8+ years of experience providing comprehensive, patient-centered care. Passionate about preventive medicine, chronic disease management, and empowering patients.'}
              </p>
              
              {/* Metric Badges */}
              <div className="mt-4 flex flex-wrap justify-between items-center border-t border-slate-100 pt-3 gap-2">
                <div className="text-center flex flex-col items-center">
                  <Users size={20} className="text-[#0f766e] mb-1" />
                  <span className="text-[14px] font-black text-[#124d63] leading-none">10k+</span>
                  <span className="text-[8px] uppercase font-bold text-slate-500">Patients</span>
                </div>
                <div className="text-center flex flex-col items-center">
                  <Heart size={20} className="text-[#0f766e] mb-1" />
                  <span className="text-[14px] font-black text-[#124d63] leading-none">98%</span>
                  <span className="text-[8px] uppercase font-bold text-slate-500">Satisfaction</span>
                </div>
                <div className="text-center flex flex-col items-center">
                  <Activity size={20} className="text-[#0f766e] mb-1" />
                  <span className="text-[14px] font-black text-[#124d63] leading-none">8+</span>
                  <span className="text-[8px] uppercase font-bold text-slate-500">Years Exp</span>
                </div>
                <div className="text-center flex flex-col items-center">
                  <Award size={20} className="text-[#0f766e] mb-1" />
                  <span className="text-[14px] font-black text-[#124d63] leading-none">{Math.max(awards.length, 5)}</span>
                  <span className="text-[8px] uppercase font-bold text-slate-500">Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            MAIN CONTENT (Two Column Flex Layout)
        ========================================== */}
        <div className="px-8 flex flex-row items-start gap-6 flex-1 pb-8">
          
          {/* LEFT COLUMN (45%) */}
          <div className="w-[45%] flex flex-col gap-6">
            
            {/* CLINICAL EXPERTISE ICONS */}
            {primarySpecialties.length > 0 && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200 break-inside-avoid">
                <SectionTitle>Clinical Expertise</SectionTitle>
                <div className="grid grid-cols-3 gap-y-5 gap-x-2">
                  {primarySpecialties.map((item, index) => {
                    const icons = [Heart, Stethoscope, Microscope, Syringe, ShieldPlus, Activity];
                    const Icon = icons[index % icons.length];
                    return (
                      <div key={index} className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-[#0f766e] flex items-center justify-center text-white mb-2 shadow-sm">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <div className="text-[9px] font-black uppercase tracking-wide text-slate-700 leading-tight">
                          {item}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* SPECIALTIES & PROCEDURES DONUTS */}
            {donutData.length > 0 && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200 break-inside-avoid">
                <SectionTitle>Procedures</SectionTitle>
                <div className="grid grid-cols-2 gap-4">
                  {donutData.map((data, index) => (
                    <DonutChart key={index} label={data.label} value={data.value} color={data.color} />
                  ))}
                </div>
              </section>
            )}

            {/* EDUCATION */}
            {education.length > 0 && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200">
                <SectionTitle>Education</SectionTitle>
                <div className="space-y-4 px-2">
                  {education.map((item, index) => (
                    <article key={index} className="flex gap-3 break-inside-avoid items-start">
                      <div className="w-8 h-8 shrink-0 rounded bg-[#f4f8fa] text-[#124d63] flex items-center justify-center border border-slate-200">
                        <GraduationCap size={16} />
                      </div>
                      <div>
                        <div className="text-[11px] font-black uppercase text-slate-900 leading-tight mb-0.5">{item.degree}</div>
                        <div className="text-[10px] text-slate-600 font-medium leading-tight">{item.school}</div>
                        <div className="text-[9px] font-bold text-[#0f766e] mt-1">{item.date}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* TECHNOLOGY & TOOLS */}
            {techTools.length > 0 && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200 break-inside-avoid">
                <SectionTitle>Tech & Tools</SectionTitle>
                <div className="flex flex-wrap gap-2 px-2">
                  {techTools.map((tool, index) => (
                    <span key={index} className="bg-[#f4f8fa] border border-slate-200 text-slate-700 text-[9px] font-black uppercase px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* RIGHT COLUMN (55%) */}
          <div className="w-[55%] flex flex-col gap-6">
            
            {/* PROFESSIONAL EXPERIENCE TIMELINE */}
            {experience.length > 0 && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200">
                <SectionTitle>Experience</SectionTitle>
                <div className="border-l-[3px] border-[#e2e8f0] ml-3 mt-2 space-y-5">
                  {experience.map((item, index) => (
                    <article key={index} className="relative pl-5 break-inside-avoid">
                      {/* Safe Timeline Dot */}
                      <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-[#124d63] rounded-full outline outline-4 outline-white" />
                      
                      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                        <div className="font-black text-[#124d63] text-[13px] uppercase tracking-wide leading-tight">
                          {item.role}
                        </div>
                        <div className="text-[9px] font-black bg-[#eef5f8] text-[#124d63] px-2 py-0.5 rounded border border-[#124d63]/20 whitespace-nowrap">
                          {item.date}
                        </div>
                      </div>
                      
                      <div className="text-[11px] font-bold text-[#0f766e] mb-2 flex items-center gap-1.5">
                        <Building2 size={12} />
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

            {/* KEY ACHIEVEMENTS / PROJECTS */}
            {projects.length > 0 && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200">
                <SectionTitle>Key Achievements</SectionTitle>
                <div className="grid grid-cols-1 gap-3 px-2">
                  {projects.map((proj, index) => {
                    const icons = [Award, FileText, Users];
                    const Icon = icons[index % 3];
                    return (
                      <article key={index} className="bg-[#f4f8fa] border border-slate-200 rounded-lg p-3 flex items-start gap-3 break-inside-avoid shadow-sm">
                        <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center text-[#0ea5e9] shadow-sm border border-slate-100">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-[11px] font-black text-slate-800 uppercase leading-tight mb-1">
                            {proj.name}
                          </div>
                          <div className="text-[10px] text-slate-600 leading-[1.5] font-medium">
                            {proj.desc}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {/* CERTIFICATIONS & MEMBERSHIPS */}
            {(certifications.length > 0 || awards.length > 0) && (
              <section className="bg-white py-5 px-4 rounded-xl shadow-sm border border-slate-200">
                <SectionTitle>Certifications & Memberships</SectionTitle>
                <div className="space-y-3 px-2">
                  {[...certifications, ...awards].map((item, index) => (
                    <article key={index} className="flex items-start gap-3 break-inside-avoid">
                      <div className="mt-0.5 text-[#0f766e]">
                        <CheckCircle2 size={14} />
                      </div>
                      <div>
                        <div className="text-[11px] font-black uppercase text-slate-800 leading-tight">
                          {item.name}
                        </div>
                        <div className="text-[10px] font-medium text-slate-500 mt-0.5">
                          {item.issuer || item.date}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
            
            {/* PHILOSOPHY FOOTER */}
            <section className="bg-[#124d63] text-white p-5 rounded-xl shadow-md border border-slate-200 break-inside-avoid relative overflow-hidden mt-auto">
               <Heart size={80} className="absolute -bottom-4 -right-4 text-white/10" />
               <div className="text-[11px] font-black uppercase tracking-widest mb-2 border-b border-white/20 pb-2 inline-block">
                 Patient Care Philosophy
               </div>
               <p className="text-[11px] leading-[1.6] font-medium italic">
                 "Every patient is unique. I believe in listening, educating, and partnering with patients to achieve better health outcomes and improve quality of life."
               </p>
            </section>

          </div>
        </div>

        {/* BOTTOM BRANDING BANNER */}
        <div className="bg-[#0f4f63] text-white py-3 px-6 text-center text-[9px] font-black uppercase tracking-[0.25em] flex items-center justify-center gap-2 break-inside-avoid shadow-[0_-4px_10px_rgba(0,0,0,0.1)] relative z-20">
          <Activity size={12} className="text-[#0ea5e9] mr-1" />
          <span>Compassionate Care</span> <span className="text-[#0ea5e9] mx-1">•</span>
          <span>Continuous Learning</span> <span className="text-[#0ea5e9] mx-1">•</span>
          <span>Healthier Lives</span>
          <Heart size={12} className="text-[#0ea5e9] ml-1" />
        </div>

        {/* PRINT CSS */}
        <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              background-color: #f4f8fa !important;
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

export default DoctorProfile;