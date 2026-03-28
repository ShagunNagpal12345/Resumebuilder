// import React from 'react';
// import { 
//   Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, 
//   Cpu, Award, User, Heart, Globe, Layers, CheckCircle 
// } from 'lucide-react';

// const Professional = ({ data }) => {
//   // Destructure all possible fields from the data object
//   const { 
//     personal, skills, experience, education, 
//     projects, certifications, languages, awards, volunteering 
//   } = data;

//   // Helper component for section headers to ensure consistency
//   const SectionHeader = ({ icon, title }) => (
//     <div className="flex items-center gap-2 border-b-2 border-slate-100 pb-2 mb-4">
//       <span className="text-[#0A66C2]">{icon}</span>
//       <h3 className="text-[#0A66C2] font-black text-xs uppercase tracking-[0.2em]">{title}</h3>
//     </div>
//   );

//   return (
//     <div className="w-full h-full bg-white text-slate-800 min-h-[1100px] font-sans flex flex-col">
      
//       {/* HEADER SECTION */}
//       <header className="p-10 border-b-[6px] border-[#0A66C2] flex justify-between items-center bg-white">
//         <div className="flex gap-6 items-center">
//           {personal.photo && (
//             <img 
//               src={personal.photo} 
//               alt="Profile" 
//               className="w-28 h-28 rounded-full border-4 border-slate-50 shadow-md object-cover" 
//             />
//           )}
//           <div>
//             <h1 className="text-4xl font-black text-[#0A66C2] uppercase tracking-tighter leading-none mb-1 break-words">
//               {personal.name || "Your Name"}
//             </h1>
//             <p className="text-xl font-bold text-slate-400 uppercase tracking-widest break-words">
//               {personal.title || "Professional Title"}
//             </p>
//           </div>
//         </div>
        
//         <div className="text-right text-[11px] font-bold text-slate-500 space-y-1 shrink-0 ml-6 uppercase tracking-wider">
//           {personal.email && <div className="flex items-center justify-end gap-2 break-all">{personal.email} <Mail size={12}/></div>}
//           {personal.phone && <div className="flex items-center justify-end gap-2">{personal.phone} <Phone size={12}/></div>}
//           {personal.location && <div className="flex items-center justify-end gap-2 break-words">{personal.location} <MapPin size={12}/></div>}
//           {personal.linkedin && <div className="flex items-center justify-end gap-2 text-[#0A66C2] break-all">{personal.linkedin} <Linkedin size={12}/></div>}
//         </div>
//       </header>

//       {/* MAIN BODY GRID */}
//       <div className="p-10 grid grid-cols-12 gap-10 flex-1">
        
//         {/* LEFT COLUMN: Main Career Content */}
//         <div className="col-span-8 space-y-10">
          
//           {/* Summary Section */}
//           {personal.summary && (
//             <section>
//               <SectionHeader icon={<User size={16}/>} title="Professional Profile" />
//               <p className="text-xs leading-relaxed text-slate-600 text-justify whitespace-pre-wrap break-words italic">
//                 {personal.summary}
//               </p>
//             </section>
//           )}

//           {/* Experience Section (Handles Multiple Entries) */}
//           {experience && experience.length > 0 && (
//             <section>
//               <SectionHeader icon={<Briefcase size={16}/>} title="Work Experience" />
//               <div className="space-y-8">
//                 {experience.map((exp, i) => (
//                   <React.Fragment key={exp.id || i}>
//                     {/* Manual Page Break Logic */}
//                     {exp.pageBreak && <div className="manual-page-break" />}
                    
//                     <div className="experience-item">
//                       <div className="flex justify-between items-baseline mb-1">
//                         <h4 className="font-bold text-slate-900 text-sm break-words uppercase">
//                           {exp.role || "Position"}
//                         </h4>
//                         <span className="text-[10px] font-black text-slate-400 shrink-0 ml-4">
//                           {exp.date || "Timeline"}
//                         </span>
//                       </div>
//                       <div className="text-[11px] font-black text-[#0A66C2] uppercase mb-2 break-words">
//                         {exp.company || "Company Name"}
//                       </div>
//                       <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap break-words">
//                         {exp.desc}
//                       </p>
//                     </div>
//                   </React.Fragment>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Projects Section (Handles Multiple Entries) */}
//           {projects && projects.length > 0 && (
//             <section>
//               <SectionHeader icon={<Layers size={16}/>} title="Key Projects" />
//               <div className="space-y-6">
//                 {projects.map((proj, i) => (
//                   <React.Fragment key={proj.id || i}>
//                     {proj.pageBreak && <div className="manual-page-break" />}
//                     <div className="project-item bg-slate-50 p-4 rounded-xl border border-slate-100">
//                       <h4 className="font-bold text-xs text-slate-800 mb-1 break-words uppercase">
//                         {proj.name || "Project Name"}
//                       </h4>
//                       <p className="text-[10px] text-slate-500 whitespace-pre-wrap break-words leading-relaxed">
//                         {proj.desc}
//                       </p>
//                     </div>
//                   </React.Fragment>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Volunteering Section */}
//           {volunteering && volunteering.length > 0 && (
//             <section>
//               <SectionHeader icon={<Heart size={16}/>} title="Volunteering & Impact" />
//               <div className="space-y-4">
//                 {volunteering.map((v, i) => (
//                   <div key={v.id || i} className="text-[11px] border-l-2 border-slate-100 pl-4">
//                     <span className="font-bold text-slate-800 break-words">{v.role}</span>
//                     <span className="text-slate-400 mx-2">@</span>
//                     <span className="text-[#0A66C2] font-bold break-words">{v.org}</span>
//                     <p className="text-[10px] text-slate-500 mt-1 whitespace-pre-wrap break-words">{v.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}
//         </div>

//         {/* RIGHT COLUMN: Skills & Education */}
//         <div className="col-span-4 space-y-10">
          
//           {/* Skills Section */}
//           <section>
//             <SectionHeader icon={<Cpu size={16}/>} title="Expertise" />
//             <div className="flex flex-wrap gap-2">
//               {[...skills.core, ...skills.technical, ...skills.soft].map((s, i) => (
//                 <span 
//                   key={i} 
//                   className="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[9px] font-bold rounded shadow-sm break-words uppercase"
//                 >
//                   {s}
//                 </span>
//               ))}
//             </div>
//           </section>

//           {/* Education Section (Handles Multiple Entries) */}
//           {education && education.length > 0 && (
//             <section>
//               <SectionHeader icon={<GraduationCap size={16}/>} title="Education" />
//               <div className="space-y-6">
//                 {education.map((edu, i) => (
//                   <React.Fragment key={edu.id || i}>
//                     {edu.pageBreak && <div className="manual-page-break" />}
//                     <div className="education-item">
//                       <div className="font-black text-[11px] text-slate-800 break-words uppercase leading-tight">
//                         {edu.degree || "Degree"}
//                       </div>
//                       <div className="text-[10px] text-slate-500 font-bold mt-1 break-words">
//                         {edu.school || "University"}
//                       </div>
//                       <div className="text-[9px] text-[#0A66C2] font-black mt-1">
//                         {edu.date}
//                       </div>
//                     </div>
//                   </React.Fragment>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Awards Section */}
//           {awards && awards.length > 0 && (
//             <section>
//               <SectionHeader icon={<Award size={16}/>} title="Honors & Awards" />
//               <div className="space-y-4">
//                 {awards.map((a, i) => (
//                   <div key={a.id || i} className="text-[10px] flex gap-3">
//                     <span className="text-amber-500">🏆</span>
//                     <div>
//                       <div className="font-bold text-slate-800 break-words uppercase">{a.name}</div>
//                       <div className="text-slate-400 italic break-words">{a.issuer}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Certifications Section */}
//           {certifications && certifications.length > 0 && (
//             <section>
//               <SectionHeader icon={<CheckCircle size={16}/>} title="Certifications" />
//               <ul className="space-y-3">
//                 {certifications.map((c, i) => (
//                   <li key={c.id || i} className="text-[10px] font-bold">
//                     <div className="text-slate-800 break-words uppercase leading-tight">• {c.name}</div>
//                     <div className="text-[#0A66C2] text-[9px] ml-3">{c.issuer}</div>
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           )}

//           {/* Languages Section */}
//           {languages && languages.length > 0 && (
//             <section>
//               <SectionHeader icon={<Globe size={16}/>} title="Languages" />
//               <div className="space-y-2">
//                 {languages.map((l, i) => (
//                   <div key={i} className="flex justify-between text-[10px] font-bold uppercase tracking-tight">
//                     <span className="text-slate-700">{l.name}</span>
//                     <span className="text-slate-400 italic font-medium">{l.level}</span>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}
//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer className="p-6 bg-slate-50 border-t border-slate-100 text-center">
//         <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">
//           Executive Career Record — {personal.name}
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Professional;


import React from 'react';

const Professional = ({ data }) => {
  // Safe Data Access
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    languages = [],
    certifications = [], // NEW
    awards = []          // NEW
  } = data || {};

  const { technical = [], soft = [] } = skills;

  return (
    <div className="p-10 font-sans text-slate-800 bg-white min-h-[1100px]">
      {/* HEADER */}
      <header className="border-b-2 border-slate-800 pb-6 mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-slate-900">{personal.name || 'Your Name'}</h1>
          <p className="text-xl text-slate-600 mt-1 font-medium">{personal.title || 'Professional Title'}</p>
          
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-sm text-slate-500 font-medium">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>• {personal.phone}</span>}
            {personal.location && <span>• {personal.location}</span>}
            {personal.linkedin && <span>• {personal.linkedin}</span>}
          </div>
        </div>
        {/* Photo Support */}
        {personal.photo && (
            <img src={personal.photo} alt="Profile" className="w-24 h-24 rounded-full object-cover border-2 border-slate-200" />
        )}
      </header>

      {/* SUMMARY */}
      {personal.summary && (
        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Professional Summary</h3>
          <p className="text-sm leading-relaxed text-slate-700">{personal.summary}</p>
        </section>
      )}

      {/* SKILLS */}
      <section className="mb-8">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Core Competencies</h3>
        <div className="flex flex-wrap gap-2">
            {[...technical, ...soft].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded">{skill}</span>
            ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id || Math.random()}>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-lg text-slate-900">{exp.role}</h4>
                  <span className="text-sm font-bold text-slate-400">{exp.date}</span>
                </div>
                <div className="text-sm font-semibold text-teal-700 mb-2">{exp.company}</div>
                <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-8">
          {/* EDUCATION */}
          {education.length > 0 && (
            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id || Math.random()}>
                    <h4 className="font-bold text-slate-900">{edu.school}</h4>
                    <p className="text-sm text-slate-600">{edu.degree}</p>
                    <p className="text-xs text-slate-400 mt-1">{edu.date}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* NEW: CERTIFICATIONS & AWARDS & LANGUAGES */}
          <div className="space-y-6">
            {certifications.length > 0 && (
                <section>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Certifications</h3>
                    {certifications.map(item => (
                        <div key={item.id} className="mb-2">
                            <p className="font-bold text-sm text-slate-800">{item.name}</p>
                            <p className="text-xs text-slate-500">{item.issuer} • {item.date}</p>
                        </div>
                    ))}
                </section>
            )}
             {awards.length > 0 && (
                <section>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Awards</h3>
                    {awards.map(item => (
                        <div key={item.id} className="mb-2">
                            <p className="font-bold text-sm text-slate-800">{item.name}</p>
                            <p className="text-xs text-slate-500">{item.issuer}</p>
                        </div>
                    ))}
                </section>
            )}
             {languages.length > 0 && (
                <section>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Languages</h3>
                    <div className="text-sm text-slate-700">
                        {languages.map(l => l.name).join(' • ')}
                    </div>
                </section>
            )}
          </div>
      </div>
    </div>
  );
};

export default Professional;