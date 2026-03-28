// // import React from 'react';
// // import * as Tpl from './templates'; 

// // const ResumePreview = ({ data, template }) => {
// //   const templatesMap = {
// //     'accent-grid': Tpl.AccentGrid,
// //     'amber-visual': Tpl.AmberVisual,
// //     'azure-pro': Tpl.AzurePro,
// //     'block-branding': Tpl.BlockBranding,
// //     'blue-frame': Tpl.BlueFrame,
// //     'bordered-elegant': Tpl.BorderedElegant,
// //     'brick-formal': Tpl.BrickFormal,
// //     'bubble-header': Tpl.BubbleHeader,
// //     'centered-initials': Tpl.CenteredInitials,
// //     'classic': Tpl.Classic,
// //     'cloud-soft': Tpl.CloudSoft,
// //     'creative': Tpl.Creative,
// //     'crimson-sidebar': Tpl.CrimsonEdge,
// //     'cyan-grid': Tpl.CyanGrid,
// //     'executive': Tpl.Executive,
// //     'forest-sidebar': Tpl.ForestSidebar,
// //     'formal': Tpl.Formal,
// //     'impact-header': Tpl.ImpactHeader,
// //     'indigo-elite': Tpl.IndigoElite,
// //     'marine-clean': Tpl.MarineClean,
// //     'marine-compact': Tpl.MarineCompact,
// //     'minimal': Tpl.Minimal,
// //     'mint-fresh': Tpl.MintFresh,
// //     'mocha-creative': Tpl.MochaCreative,
// //     'modern': Tpl.Modern,
// //     'modern-circle': Tpl.ModernCircle,
// //     'modern-gold': Tpl.ModernGold,
// //     'navy-sidebar': Tpl.NavySidebar,
// //     'night-admin': Tpl.NightAdmin,
// //     'ocean-ats': Tpl.OceanATS,
// //     'orange-punch': Tpl.OrangePunch,
// //     'pointer-banner': Tpl.PointerBanner,
// //     'professional': Tpl.Professional,
// //     'professional-columns': Tpl.ProfessionalColumns,
// //     'ruby-creative': Tpl.RubyCreative,
// //     'rule-minimalist': Tpl.RuleMinimalist,
// //     'sand-minimal': Tpl.SandMinimal,
// //     'skyline': Tpl.Skyline,
// //     'slate-duo': Tpl.SlateDuo,
// //     'soft-serif': Tpl.SoftSerif,
// //     'sunset-slim': Tpl.SunsetSlim,
// //     'teal-innovator': Tpl.TealInnovator,
// //     'tech': Tpl.Tech
// //   };

// //   // Fallback to Tpl.Professional if the template ID is not found
// //   const SelectedTemplate = templatesMap[template] || Tpl.Professional;

// //   return (
// //     <div className="resume-preview-wrapper min-h-full">
// //       <SelectedTemplate data={data} />
// //     </div>
// //   );
// // };

// // export default ResumePreview;


// import React from 'react';
// import { Mail, Phone, MapPin, Linkedin, Globe, Github } from 'lucide-react';

// const ResumePreview = ({ data, template = 'professional' }) => {
//   // --- 1. SAFE DATA ACCESS (Crash Proofing) ---
//   const {
//     personal = {},
//     experience = [],
//     education = [],
//     skills = { technical: [], soft: [] },
//     projects = [],
//     languages = [],
//     certifications = []
//   } = data || {};

//   const theme = {
//     professional: { bg: 'bg-white', text: 'text-slate-800', accent: 'text-teal-700', border: 'border-teal-700', headerBg: 'bg-white', headerText: 'text-slate-900' },
//     modern:       { bg: 'bg-slate-50', text: 'text-slate-700', accent: 'text-blue-600', border: 'border-blue-600', headerBg: 'bg-slate-900', headerText: 'text-white' },
//     creative:     { bg: 'bg-white', text: 'text-slate-800', accent: 'text-purple-600', border: 'border-purple-600', headerBg: 'bg-purple-50', headerText: 'text-purple-900' },
//   }[template] || { bg: 'bg-white', text: 'text-slate-800', accent: 'text-teal-700', border: 'border-teal-700' };

//   // --- 2. RENDER HELPERS ---
//   const SectionTitle = ({ title }) => (
//     <h3 className={`uppercase font-bold text-sm tracking-widest border-b-2 mb-4 mt-6 pb-1 ${theme.accent} ${theme.border}`}>
//       {title}
//     </h3>
//   );

//   return (
//     <div className={`w-full h-full min-h-[1100px] p-8 md:p-12 text-sm leading-relaxed font-sans ${theme.bg} ${theme.text} shadow-2xl`}>
      
//       {/* --- HEADER --- */}
//       <header className={`-mx-12 -mt-12 p-12 mb-8 ${theme.headerBg} ${theme.headerText} ${template === 'modern' ? 'text-center' : ''}`}>
//         <h1 className="text-4xl font-extrabold tracking-tight uppercase mb-2">{personal.name || 'Your Name'}</h1>
//         <p className={`text-lg font-medium opacity-90 tracking-widest ${template === 'professional' ? theme.accent : ''}`}>{personal.title || 'Professional Title'}</p>
        
//         <div className={`flex flex-wrap gap-4 mt-6 text-xs font-bold opacity-80 ${template === 'modern' ? 'justify-center' : ''}`}>
//           {personal.email && <div className="flex items-center gap-1"><Mail size={12}/> {personal.email}</div>}
//           {personal.phone && <div className="flex items-center gap-1"><Phone size={12}/> {personal.phone}</div>}
//           {personal.location && <div className="flex items-center gap-1"><MapPin size={12}/> {personal.location}</div>}
//           {personal.linkedin && <div className="flex items-center gap-1"><Linkedin size={12}/> {personal.linkedin}</div>}
//         </div>
//       </header>

//       {/* --- SUMMARY --- */}
//       {personal.summary && (
//         <div className="mb-6">
//           <p className="italic opacity-80">{personal.summary}</p>
//         </div>
//       )}

//       <div className="grid grid-cols-12 gap-8">
        
//         {/* --- LEFT COLUMN (Main Content) --- */}
//         <div className="col-span-8">
          
//           {/* EXPERIENCE */}
//           {experience.length > 0 && (
//             <section>
//               <SectionTitle title="Experience" />
//               <div className="space-y-6">
//                 {experience.map((exp) => (
//                   <div key={exp.id || Math.random()} className="relative pl-4 border-l-2 border-slate-200">
//                     <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-300"></div>
//                     <div className="flex justify-between items-baseline mb-1">
//                       <h4 className="font-bold text-base">{exp.role}</h4>
//                       <span className="text-xs font-bold opacity-50 whitespace-nowrap">{exp.date}</span>
//                     </div>
//                     <div className={`text-xs font-bold uppercase mb-2 ${theme.accent}`}>{exp.company}</div>
//                     <p className="whitespace-pre-line text-xs opacity-80">{exp.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* PROJECTS */}
//           {projects.length > 0 && (
//             <section>
//               <SectionTitle title="Key Projects" />
//               <div className="grid grid-cols-1 gap-4">
//                 {projects.map((proj) => (
//                   <div key={proj.id || Math.random()} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
//                     <h4 className="font-bold text-sm mb-1">{proj.name}</h4>
//                     <p className="text-xs opacity-70">{proj.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}
//         </div>

//         {/* --- RIGHT COLUMN (Sidebar) --- */}
//         <div className="col-span-4 space-y-8">
          
//           {/* SKILLS */}
//           {(skills.technical?.length > 0 || skills.soft?.length > 0) && (
//             <section>
//               <SectionTitle title="Skills" />
              
//               {skills.technical?.length > 0 && (
//                 <div className="mb-4">
//                   <h5 className="text-xs font-bold uppercase opacity-50 mb-2">Technical</h5>
//                   <div className="flex flex-wrap gap-2">
//                     {skills.technical.map((s, i) => (
//                       <span key={i} className="px-2 py-1 bg-slate-100 rounded text-xs font-semibold">{s}</span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {skills.soft?.length > 0 && (
//                 <div>
//                   <h5 className="text-xs font-bold uppercase opacity-50 mb-2">Core Competencies</h5>
//                   <ul className="space-y-1">
//                     {skills.soft.map((s, i) => (
//                       <li key={i} className="text-xs flex items-center gap-2">
//                         <span className={`w-1 h-1 rounded-full ${theme.bg === 'bg-slate-900' ? 'bg-white' : 'bg-slate-400'}`}></span> {s}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </section>
//           )}

//           {/* EDUCATION */}
//           {education.length > 0 && (
//             <section>
//               <SectionTitle title="Education" />
//               <div className="space-y-4">
//                 {education.map((edu) => (
//                   <div key={edu.id || Math.random()}>
//                     <h4 className="font-bold text-sm">{edu.school}</h4>
//                     <div className="text-xs">{edu.degree}</div>
//                     <div className="text-[10px] font-bold opacity-50 uppercase mt-1">{edu.date}</div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* LANGUAGES */}
//           {languages.length > 0 && (
//             <section>
//               <SectionTitle title="Languages" />
//               <ul className="space-y-2">
//                 {languages.map((lang, i) => (
//                   <li key={i} className="flex justify-between text-xs border-b border-slate-100 pb-1">
//                     <span>{lang.name}</span>
//                     <span className="opacity-50 font-bold">{lang.level}</span>
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumePreview;

// import React from 'react';
// import * as Tpl from './templates'; 

// const ResumePreview = ({ data, template }) => {
//   const templatesMap = {
//     'accent-grid': Tpl.AccentGrid,
//     'amber-visual': Tpl.AmberVisual,
//     'azure-pro': Tpl.AzurePro,
//     'block-branding': Tpl.BlockBranding,
//     'blue-frame': Tpl.BlueFrame,
//     'bordered-elegant': Tpl.BorderedElegant,
//     'brick-formal': Tpl.BrickFormal,
//     'bubble-header': Tpl.BubbleHeader,
//     'centered-initials': Tpl.CenteredInitials,
//     'classic': Tpl.Classic,
//     'cloud-soft': Tpl.CloudSoft,
//     'creative': Tpl.Creative,
//     'crimson-sidebar': Tpl.CrimsonEdge,
//     'cyan-grid': Tpl.CyanGrid,
//     'executive': Tpl.Executive,
//     'forest-sidebar': Tpl.ForestSidebar,
//     'formal': Tpl.Formal,
//     'impact-header': Tpl.ImpactHeader,
//     'indigo-elite': Tpl.IndigoElite,
//     'marine-clean': Tpl.MarineClean,
//     'marine-compact': Tpl.MarineCompact,
//     'minimal': Tpl.Minimal,
//     'mint-fresh': Tpl.MintFresh,
//     'mocha-creative': Tpl.MochaCreative,
//     'modern': Tpl.Modern,
//     'modern-circle': Tpl.ModernCircle,
//     'modern-gold': Tpl.ModernGold,
//     'navy-sidebar': Tpl.NavySidebar,
//     'night-admin': Tpl.NightAdmin,
//     'ocean-ats': Tpl.OceanATS,
//     'orange-punch': Tpl.OrangePunch,
//     'pointer-banner': Tpl.PointerBanner,
//     'professional': Tpl.Professional,
//     'professional-columns': Tpl.ProfessionalColumns,
//     'ruby-creative': Tpl.RubyCreative,
//     'rule-minimalist': Tpl.RuleMinimalist,
//     'sand-minimal': Tpl.SandMinimal,
//     'skyline': Tpl.Skyline,
//     'slate-duo': Tpl.SlateDuo,
//     'soft-serif': Tpl.SoftSerif,
//     'sunset-slim': Tpl.SunsetSlim,
//     'teal-innovator': Tpl.TealInnovator,
//     'tech': Tpl.Tech
//   };

//   const SelectedTemplate = templatesMap[template] || Tpl.Professional;

//   return (
//     // Changed class to allow height to grow (removed fixed h-full)
//     <div className="resume-preview-wrapper min-h-full h-auto w-full">
//       <SelectedTemplate data={data} />
//     </div>
//   );
// };

// export default ResumePreview;


// import React from 'react';
// import * as Tpl from './templates'; 

// const ResumePreview = ({ data, template }) => {
//   const templatesMap = {
//     // --- STANDARD TEMPLATES ---
//     'accent-grid': Tpl.AccentGrid,
//     'info-blue': Tpl.InfoBlue,
//     'info-executive': Tpl.InfoExecutive,
//     'info-teal': Tpl.InfoTeal,
//     'info-green': Tpl.InfoGreen,
//     'info-navy': Tpl.InfoNavy,
//     'Mosaic' : Tpl.Mosaic,
//     'Infographic' : Tpl.Infographic,
//     'Academic': Tpl.Academic,
//     'Architect': Tpl.Architect,
//     'Artistic': Tpl.Artistic,
//     'Ats': Tpl.Ats,
//     'coder': Tpl.Coder,
//     'Creative2' : Tpl.Creative2,
//     'developer': Tpl.Developer,
//     'infographic': Tpl.Infographic,
//     'medical': Tpl.Medical,
//     'metro': Tpl.Metro,
//     'amber-visual': Tpl.AmberVisual,
//     'azure-pro': Tpl.AzurePro,
//     'block-branding': Tpl.BlockBranding,
//     'blue-frame': Tpl.BlueFrame,
//     'bordered-elegant': Tpl.BorderedElegant,
//     'brick-formal': Tpl.BrickFormal,
//     'bubble-header': Tpl.BubbleHeader,
//     'centered-initials': Tpl.CenteredInitials,
//     'classic': Tpl.Classic,
//     'cloud-soft': Tpl.CloudSoft,
//     'creative': Tpl.Creative,
//     'crimson-sidebar': Tpl.CrimsonEdge,
//     'cyan-grid': Tpl.CyanGrid,
//     'executive': Tpl.Executive,
//     'forest-sidebar': Tpl.ForestSidebar,
//     'formal': Tpl.Formal,
//     'impact-header': Tpl.ImpactHeader,
//     'indigo-elite': Tpl.IndigoElite,
//     'marine-clean': Tpl.MarineClean,
//     'marine-compact': Tpl.MarineCompact,
//     'minimal': Tpl.Minimal,
//     'mint-fresh': Tpl.MintFresh,
//     'mocha-creative': Tpl.MochaCreative,
//     'modern': Tpl.Modern,
//     'modern-circle': Tpl.ModernCircle,
//     'modern-gold': Tpl.ModernGold,
//     'navy-sidebar': Tpl.NavySidebar,
//     'night-admin': Tpl.NightAdmin,
//     'ocean-ats': Tpl.OceanATS,
//     'orange-punch': Tpl.OrangePunch,
//     'pointer-banner': Tpl.PointerBanner,
//     'professional': Tpl.Professional,
//     'professional-columns': Tpl.ProfessionalColumns,
//     'ruby-creative': Tpl.RubyCreative,
//     'rule-minimalist': Tpl.RuleMinimalist,
//     'sand-minimal': Tpl.SandMinimal,
//     'skyline': Tpl.Skyline,
//     'slate-duo': Tpl.SlateDuo,
//     'soft-serif': Tpl.SoftSerif,
//     'sunset-slim': Tpl.SunsetSlim,
//     'teal-innovator': Tpl.TealInnovator,
//     'tech': Tpl.Tech,
//     'berlin': Tpl.Berlin,
//     'card': Tpl.Card,
//     'japanese': Tpl.Japanese,
//     'luxe': Tpl.Luxe,
//     'startup': Tpl.Startup,

//     // --- NEW ROLE-BASED TEMPLATES ---
//     'accounting': Tpl.Accounting,
//     'business-analyst': Tpl.BusinessAnalyst,
//     'data-scientist': Tpl.DataScientist,
//     'designer': Tpl.Designer,
//     'engineer': Tpl.Engineer,
//     'marketing': Tpl.Marketing,
//     'product-manager': Tpl.ProductManager,
//     'sales': Tpl.Sales,
//     'software-engineer': Tpl.SoftwareEngineer,
//     'teacher': Tpl.Teacher
//   };

//   // Fallback to Professional if template ID is missing
//   const SelectedTemplate = templatesMap[template] || Tpl.Professional;

//   return (
//     // Changed class to allow height to grow (removed fixed h-full)
//     <div className="resume-preview-wrapper min-h-full h-auto w-full">
//       <SelectedTemplate data={data} />
//     </div>
//   );
// };

// export default ResumePreview;


import React from 'react';
import * as Tpl from './templates'; 

const ResumePreview = ({ data, template }) => {
  const templatesMap = {
    // --- 1. ATS & TRADITIONAL ---
    'academic': Tpl.Academic,
    'ats': Tpl.Ats,
    'classic': Tpl.Classic,
    'formal': Tpl.Formal,
    'minimal': Tpl.Minimal,
    'ocean-ats': Tpl.OceanATS,
    'professional': Tpl.Professional,

    // --- 2. TECH, DATA & DEVELOPMENT ---
    'accent-grid': Tpl.AccentGrid,
    'coder': Tpl.Coder,
    'cyan-grid': Tpl.CyanGrid,
    'data-scientist': Tpl.DataScientist,
    'developer': Tpl.Developer,
    'engineer': Tpl.Engineer,
    'software-engineer': Tpl.SoftwareEngineer,
    'tech': Tpl.Tech,

    // --- 3. EXECUTIVE & CORPORATE ---
    'accounting': Tpl.Accounting,
    'bordered-elegant': Tpl.BorderedElegant,
    'business-analyst': Tpl.BusinessAnalyst,
    'executive': Tpl.Executive,
    'impact-header': Tpl.ImpactHeader,
    'indigo-elite': Tpl.IndigoElite,
    'luxe': Tpl.Luxe,
    'modern-gold': Tpl.ModernGold,
    'product-manager': Tpl.ProductManager,
    'professional-columns': Tpl.ProfessionalColumns,
    'rule-minimalist': Tpl.RuleMinimalist,
    'sales': Tpl.Sales,

    // --- 4. CREATIVE, MARKETING & DESIGN ---
    'amber-visual': Tpl.AmberVisual,
    'artistic': Tpl.Artistic,
    'berlin': Tpl.Berlin,
    'bubble-header': Tpl.BubbleHeader,
    'creative': Tpl.Creative,
    'creative2' : Tpl.Creative2,
    'designer': Tpl.Designer,
    'infographic': Tpl.Infographic,
    'marketing': Tpl.Marketing,
    'metro': Tpl.Metro,
    'mocha-creative': Tpl.MochaCreative,
    'skyline': Tpl.Skyline,
    'startup': Tpl.Startup,

    // --- 5. MODERN MINIMALIST & CLEAN ---
    'card': Tpl.Card,
    'cloud-soft': Tpl.CloudSoft,
    'japanese': Tpl.Japanese,
    'marine-clean': Tpl.MarineClean,
    'mint-fresh': Tpl.MintFresh,
    'modern': Tpl.Modern,
    'sand-minimal': Tpl.SandMinimal,
    'soft-serif': Tpl.SoftSerif,
    'sunset-slim': Tpl.SunsetSlim,

    // --- 6. SPECIALIZED INDUSTRY ---
    'architect': Tpl.Architect,
    'medical': Tpl.Medical,
    'teacher': Tpl.Teacher,

    // --- 7. BOLD ACCENTS & SIDEBARS ---
    'blue-frame': Tpl.BlueFrame,
    'brick-formal': Tpl.BrickFormal,
    'crimson-sidebar': Tpl.CrimsonEdge,
    'forest-sidebar': Tpl.ForestSidebar,
    'navy-sidebar': Tpl.NavySidebar,
    'orange-punch': Tpl.OrangePunch,
    'ruby-creative': Tpl.RubyCreative,
    'slate-duo': Tpl.SlateDuo,
    'teal-innovator': Tpl.TealInnovator,

    // --- 8. UNIQUE HEADERS ---
    'azure-pro': Tpl.AzurePro,
    'block-branding': Tpl.BlockBranding,
    'centered-initials': Tpl.CenteredInitials,
    'marine-compact': Tpl.MarineCompact,
    'modern-circle': Tpl.ModernCircle,
    'night-admin': Tpl.NightAdmin,
    'pointer-banner': Tpl.PointerBanner,

    // --- 9. HIGH VISUAL & INFOGRAPHIC ---
    'info-blue': Tpl.InfoBlue,
    'info-executive': Tpl.InfoExecutive,
    'info-green': Tpl.InfoGreen,
    'info-navy': Tpl.InfoNavy,
    'info-teal': Tpl.InfoTeal,
    'mosaic': Tpl.Mosaic
  };

  // Fallback to Professional if template ID is missing
  const SelectedTemplate = templatesMap[template] || Tpl.Professional;

  return (
    // Changed class to allow height to grow (removed fixed h-full)
    <div className="resume-preview-wrapper min-h-full h-auto w-full">
      <SelectedTemplate data={data} />
    </div>
  );
};

export default ResumePreview;