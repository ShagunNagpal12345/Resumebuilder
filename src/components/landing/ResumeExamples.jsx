// // // import React, { useState } from 'react';
// // // import { 
// // //   Code, Database, BarChart3, Users, Calculator, 
// // //   PenTool, GraduationCap, Building2, ShoppingBag, Wrench 
// // // } from 'lucide-react';

// // // const CATEGORIES = [
// // //   { id: 'bi', label: 'Business Intelligence', icon: BarChart3, color: 'text-emerald-600', bg: 'bg-emerald-100' },
// // //   { id: 'data', label: 'Data Scientist', icon: Database, color: 'text-purple-600', bg: 'bg-purple-100' },
// // //   { id: 'pm', label: 'Product Manager', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
// // //   { id: 'dev', label: 'Software Engineer', icon: Code, color: 'text-indigo-600', bg: 'bg-indigo-100' },
// // //   { id: 'sales', label: 'Sales Executive', icon: ShoppingBag, color: 'text-pink-600', bg: 'bg-pink-100' },
// // //   { id: 'teacher', label: 'Teacher', icon: GraduationCap, color: 'text-yellow-600', bg: 'bg-yellow-100' },
// // //   { id: 'eng', label: 'Engineer', icon: Wrench, color: 'text-orange-600', bg: 'bg-orange-100' },
// // //   { id: 'acc', label: 'Accounting', icon: Calculator, color: 'text-teal-600', bg: 'bg-teal-100' },
// // //   { id: 'design', label: 'Designer', icon: PenTool, color: 'text-cyan-600', bg: 'bg-cyan-100' },
// // //   { id: 'marketing', label: 'Marketing', icon: Building2, color: 'text-red-600', bg: 'bg-red-100' },
// // // ];

// // // const EXAMPLE_CONTENT = {
// // //   bi: {
// // //     name: "POOJA BANSAL",
// // //     role: "Business Intelligence Leader",
// // //     summary: "Strategic BI Manager with 7+ years of experience transforming raw data into actionable business insights. Proven track record in optimizing operational efficiency by 40%.",
// // //     exp: [
// // //         { role: "Senior BI Manager", company: "Global Tech Solutions", date: "2020 - Present", desc: "Led a team of 10 analysts to execute a global rebranding campaign." },
// // //         { role: "Data Analyst", company: "FinStream Corp", date: "2017 - 2020", desc: "Developed complex SQL queries to consolidate data from disparate sources." }
// // //     ],
// // //     skills: ['Tableau', 'SQL', 'Python', 'Leadership'],
// // //     awards: ["Best Innovation Award (2022)", "Top Performer Q3 (2021)"],
// // //     certs: ["Certified BI Professional", "Google Data Analytics"],
// // //     education: { degree: "MBA", school: "Stern School of Business" }
// // //   },
// // //   data: {
// // //     name: "ALEX CHEN",
// // //     role: "Senior Data Scientist",
// // //     summary: "Expert in machine learning and predictive modeling. Built recommendation engines that increased user engagement by 25%.",
// // //     exp: [
// // //         { role: "Lead Data Scientist", company: "AI Innovations", date: "2019 - Present", desc: "Deployed 5 production ML models using Python and TensorFlow." },
// // //         { role: "Junior Analyst", company: "DataCorp", date: "2016 - 2019", desc: "Cleaned and visualized large datasets for executive reporting." }
// // //     ],
// // //     skills: ['Python', 'TensorFlow', 'Machine Learning', 'Big Data'],
// // //     awards: ["Kaggle Competition Winner", "Employee of the Month"],
// // //     certs: ["AWS Certified Machine Learning", "Deep Learning Specialization"],
// // //     education: { degree: "M.S. Data Science", school: "Stanford University" }
// // //   },
// // //   pm: {
// // //     name: "SARAH MILLER",
// // //     role: "Product Manager",
// // //     summary: "Results-oriented Product Manager with 5+ years of experience driving product lifecycles from conception to launch. Skilled in agile methodologies and cross-functional team leadership.",
// // //     exp: [
// // //         { role: "Product Manager", company: "TechStart", date: "2018 - Present", desc: "Launched 3 successful mobile apps with over 1M downloads." },
// // //         { role: "Associate PM", company: "Innovate Inc.", date: "2015 - 2018", desc: "Collaborated with engineering and design teams to define product requirements." }
// // //     ],
// // //     skills: ['Agile', 'Scrum', 'JIRA', 'Product Strategy'],
// // //     awards: ["Product of the Year 2020", "Leadership Excellence"],
// // //     certs: ["PMP Certification", "Certified Scrum Master"],
// // //     education: { degree: "B.S. Business", school: "University of California" }
// // //   },
// // //   dev: {
// // //     name: "DAVID LEE",
// // //     role: "Senior Software Engineer",
// // //     summary: "Full-stack developer with expertise in React, Node.js, and cloud technologies. Passionate about building scalable and efficient web applications.",
// // //     exp: [
// // //         { role: "Senior Engineer", company: "WebSolutions", date: "2019 - Present", desc: "Architected and implemented a microservices-based backend system." },
// // //         { role: "Software Developer", company: "CodeCrafters", date: "2016 - 2019", desc: "Developed responsive frontend interfaces using React and Redux." }
// // //     ],
// // //     skills: ['React', 'Node.js', 'AWS', 'Docker'],
// // //     awards: ["Hackathon Winner 2018", "Open Source Contributor"],
// // //     certs: ["AWS Solutions Architect", "MongoDB Certified Developer"],
// // //     education: { degree: "B.S. Computer Science", school: "MIT" }
// // //   },
// // //   sales: {
// // //     name: "JESSICA WONG",
// // //     role: "Sales Executive",
// // //     summary: "High-performing sales professional with a proven track record of exceeding quotas. Skilled in relationship building, negotiation, and closing deals.",
// // //     exp: [
// // //         { role: "Sales Manager", company: "Global Sales Corp", date: "2020 - Present", desc: "Managed a team of 10 sales representatives and increased revenue by 30%." },
// // //         { role: "Sales Representative", company: "BestDeals Ltd.", date: "2017 - 2020", desc: "Consistently exceeded monthly sales targets by 15%." }
// // //     ],
// // //     skills: ['Salesforce', 'Negotiation', 'CRM', 'Communication'],
// // //     awards: ["Top Salesperson 2019", "President's Club Member"],
// // //     certs: ["Inbound Sales Certification", "Negotiation Mastery"],
// // //     education: { degree: "B.A. Marketing", school: "NYU" }
// // //   },
// // //   teacher: {
// // //     name: "MICHAEL BROWN",
// // //     role: "High School Teacher",
// // //     summary: "Dedicated educator with a passion for inspiring students. Experienced in curriculum development and classroom management.",
// // //     exp: [
// // //         { role: "History Teacher", company: "Lincoln High School", date: "2015 - Present", desc: "Developed and implemented engaging lesson plans for diverse student populations." },
// // //         { role: "Substitute Teacher", company: "City School District", date: "2013 - 2015", desc: "Provided instructional support across various subjects and grade levels." }
// // //     ],
// // //     skills: ['Curriculum Design', 'Classroom Management', 'Mentoring', 'Public Speaking'],
// // //     awards: ["Teacher of the Year 2018", "Community Service Award"],
// // //     certs: ["State Teaching License", "Special Education Certification"],
// // //     education: { degree: "M.Ed. Education", school: "Boston College" }
// // //   },
// // //   eng: {
// // //     name: "EMILY DAVIS",
// // //     role: "Mechanical Engineer",
// // //     summary: "Creative and analytical mechanical engineer with experience in product design and manufacturing. Proficient in CAD software and finite element analysis.",
// // //     exp: [
// // //         { role: "Design Engineer", company: "AutoParts Inc.", date: "2018 - Present", desc: "Designed and optimized automotive components for improved performance and durability." },
// // //         { role: "Manufacturing Engineer", company: "TechMfg", date: "2016 - 2018", desc: "Implemented process improvements that reduced production costs by 10%." }
// // //     ],
// // //     skills: ['SolidWorks', 'AutoCAD', 'FEA', 'Project Management'],
// // //     awards: ["Engineering Excellence Award", "Patent Holder"],
// // //     certs: ["Professional Engineer (PE)", "Six Sigma Green Belt"],
// // //     education: { degree: "B.S. Mechanical Engineering", school: "Georgia Tech" }
// // //   },
// // //   acc: {
// // //     name: "ROBERT WILSON",
// // //     role: "Certified Public Accountant",
// // //     summary: "Detail-oriented CPA with expertise in financial reporting, tax preparation, and auditing. Committed to ensuring accuracy and compliance.",
// // //     exp: [
// // //         { role: "Senior Accountant", company: "Financial Services LLP", date: "2019 - Present", desc: "Managed financial audits for diverse clients and prepared complex tax returns." },
// // //         { role: "Staff Accountant", company: "Local Firm", date: "2016 - 2019", desc: "Assisted with monthly close processes and reconciled general ledger accounts." }
// // //     ],
// // //     skills: ['GAAP', 'Tax Preparation', 'Auditing', 'Excel'],
// // //     awards: ["Top Auditor 2020", "Client Service Award"],
// // //     certs: ["CPA License", "Certified Internal Auditor"],
// // //     education: { degree: "M.S. Accounting", school: "University of Illinois" }
// // //   },
// // //   design: {
// // //     name: "OLIVIA TAYLOR",
// // //     role: "Senior Graphic Designer",
// // //     summary: "Creative and versatile graphic designer with a strong portfolio of branding and marketing materials. Proficient in Adobe Creative Suite.",
// // //     exp: [
// // //         { role: "Lead Designer", company: "Creative Agency", date: "2020 - Present", desc: "Led the design team in creating visual identities for major brands." },
// // //         { role: "Graphic Designer", company: "PrintShop", date: "2017 - 2020", desc: "Designed marketing collateral, brochures, and social media graphics." }
// // //     ],
// // //     skills: ['Photoshop', 'Illustrator', 'InDesign', 'Typography'],
// // //     awards: ["Design Excellence 2019", "Best Branding Campaign"],
// // //     certs: ["Adobe Certified Expert", "UX Design Certificate"],
// // //     education: { degree: "B.F.A. Graphic Design", school: "RISD" }
// // //   },
// // //   marketing: {
// // //     name: "DANIEL GARCIA",
// // //     role: "Marketing Manager",
// // //     summary: "Strategic marketing professional with experience in digital marketing, content creation, and social media management. Proven ability to drive brand awareness and lead generation.",
// // //     exp: [
// // //         { role: "Marketing Manager", company: "TechStartup", date: "2019 - Present", desc: "Developed and executed comprehensive marketing campaigns that increased website traffic by 50%." },
// // //         { role: "Social Media Specialist", company: "MediaGroup", date: "2016 - 2019", desc: "Managed social media accounts for multiple clients and grew follower base by 20%." }
// // //     ],
// // //     skills: ['SEO', 'Content Marketing', 'Google Analytics', 'Social Media'],
// // //     awards: ["Marketing Campaign of the Year", "Rising Star Award"],
// // //     certs: ["Google Ads Certification", "HubSpot Content Marketing"],
// // //     education: { degree: "B.A. Communications", school: "USC" }
// // //   },
// // //   default: {
// // //     name: "JORDAN SMITH",
// // //     role: "Senior Professional",
// // //     summary: "Dedicated professional with over 8 years of experience in the industry. Skilled in leadership, project management, and strategic planning.",
// // //     exp: [
// // //         { role: "Senior Manager", company: "Market Leaders Inc.", date: "2018 - Present", desc: "Oversaw daily operations and managed a team of 15 employees." },
// // //         { role: "Specialist", company: "Growth Co.", date: "2015 - 2018", desc: "Implemented new strategies that increased productivity by 20%." }
// // //     ],
// // //     skills: ['Leadership', 'Project Management', 'Strategy', 'Communication'],
// // //     awards: ["Employee of the Year", "Leadership Award"],
// // //     certs: ["Project Management Professional", "Six Sigma Black Belt"],
// // //     education: { degree: "M.B.A.", school: "Harvard Business School" }
// // //   }
// // // };

// // // const ResumeExamples = ({ onStart }) => {
// // //   const [activeTab, setActiveTab] = useState('bi');
// // //   const activeContent = EXAMPLE_CONTENT[activeTab] || EXAMPLE_CONTENT.default;

// // //   return (
// // //     <div className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      
// // //       {/* Decorative Arrow Line (CSS/SVG simulation) */}
// // //       <svg className="absolute top-1/3 left-[28%] w-64 h-64 text-slate-300 hidden xl:block pointer-events-none" viewBox="0 0 200 200">
// // //          <path d="M20,150 C50,200 150,200 180,150" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
// // //          <defs>
// // //             <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
// // //               <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
// // //             </marker>
// // //          </defs>
// // //       </svg>

// // //       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        
// // //         {/* LEFT SIDE: Heading & Categories */}
// // //         <div className="lg:col-span-5 space-y-8 relative z-10">
// // //           <div>
// // //             <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
// // //               Resume examples <br />
// // //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
// // //                 tailored for your job.
// // //               </span>
// // //             </h2>
// // //             <p className="text-lg text-slate-500 leading-relaxed mb-8">
// // //               Our Certified Professional Résumé Writers have created over 1,700 in-depth guides and reviewed 10,000+ resumes across U.S. industries.
// // //             </p>
// // //             <button onClick={onStart} className="text-teal-600 font-bold text-lg hover:underline flex items-center gap-2 group">
// // //               Browse all examples <span className="group-hover:translate-x-1 transition-transform">→</span>
// // //             </button>
// // //           </div>

// // //           <div className="grid grid-cols-2 gap-3">
// // //             {CATEGORIES.map((cat) => (
// // //               <button
// // //                 key={cat.id}
// // //                 onClick={() => setActiveTab(cat.id)}
// // //                 className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 group text-left ${
// // //                   activeTab === cat.id 
// // //                     ? 'bg-white shadow-xl ring-1 ring-slate-100 scale-[1.02]' 
// // //                     : 'hover:bg-white hover:shadow-md'
// // //                 }`}
// // //               >
// // //                 <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${cat.bg} ${cat.color}`}>
// // //                   <cat.icon size={20} />
// // //                 </div>
// // //                 <span className={`text-sm font-bold leading-tight ${activeTab === cat.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
// // //                   {cat.label}
// // //                 </span>
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* RIGHT SIDE: Resume Preview Card */}
// // //         <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            
// // //             {/* The Resume Document */}
// // //             <div className="bg-white w-full max-w-xl aspect-[210/297] rounded-[20px] shadow-2xl border border-slate-100 p-8 md:p-12 relative overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 key={activeTab}">
                
// // //                 {/* Header */}
// // //                 <div className="border-b-2 border-slate-900 pb-6 mb-8 text-center"> {/* Centered header for classic look */}
// // //                     <h3 className="text-3xl font-black text-slate-900 uppercase tracking-wider mb-2">{activeContent.name}</h3>
// // //                     <p className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-4">{activeContent.role}</p>
// // //                     <div className="text-[10px] text-slate-500 flex justify-center gap-3">
// // //                         <span>+1 555 0199 283</span> • <span>New York, USA</span> • <span>linkedin.com/in/profile</span>
// // //                     </div>
// // //                 </div>

// // //                 {/* Body - Adjusted Grid for more sections */}
// // //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
// // //                     {/* Left Column (Skills, Education, Certs) */}
// // //                     <div className="col-span-1 space-y-6 border-r border-slate-100 pr-4"> {/* Added border for separation */}
                        
// // //                         {/* Skills */}
// // //                         <div>
// // //                             <h4 className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 mb-3">Skills</h4>
// // //                             <div className="flex flex-wrap gap-2">
// // //                                 {activeContent.skills.map(s => (
// // //                                     <span key={s} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] font-bold">{s}</span>
// // //                                 ))}
// // //                             </div>
// // //                         </div>

// // //                         {/* Education */}
// // //                         <div>
// // //                             <h4 className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 mb-3">Education</h4>
// // //                             <div className="text-[10px] text-slate-600">
// // //                                 <p className="font-bold text-slate-900">{activeContent.education.degree}</p>
// // //                                 <p>{activeContent.education.school}</p>
// // //                                 <p className="text-slate-400">2012 - 2016</p>
// // //                             </div>
// // //                         </div>

// // //                         {/* Certifications */}
// // //                         <div>
// // //                             <h4 className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 mb-3">Certifications</h4>
// // //                             <ul className="text-[10px] text-slate-600 space-y-1 list-disc ml-3">
// // //                                 {activeContent.certs.map((c, i) => (
// // //                                     <li key={i}>{c}</li>
// // //                                 ))}
// // //                             </ul>
// // //                         </div>
// // //                     </div>

// // //                     {/* Right Column (Summary, Experience, Awards) */}
// // //                     <div className="col-span-2 space-y-6">
                        
// // //                         {/* Summary */}
// // //                         <div>
// // //                             <h4 className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 mb-3">Summary</h4>
// // //                             <p className="text-[11px] text-slate-600 leading-relaxed text-justify">
// // //                                 {activeContent.summary}
// // //                             </p>
// // //                         </div>

// // //                         {/* Experience */}
// // //                         <div>
// // //                             <h4 className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 mb-3">Experience</h4>
// // //                             <div className="space-y-5">
// // //                                 {activeContent.exp.map((job, i) => (
// // //                                     <div key={i}>
// // //                                         <div className="flex justify-between items-baseline mb-1">
// // //                                             <span className="font-bold text-slate-900 text-xs">{job.role}</span>
// // //                                             <span className="text-[10px] text-slate-400">{job.date}</span>
// // //                                         </div>
// // //                                         <div className="text-[10px] text-teal-600 font-bold mb-1">{job.company}</div>
// // //                                         <p className="text-[10px] text-slate-600 leading-relaxed">
// // //                                             {job.desc}
// // //                                         </p>
// // //                                     </div>
// // //                                 ))}
// // //                             </div>
// // //                         </div>

// // //                         {/* Awards */}
// // //                         <div>
// // //                             <h4 className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 mb-3">Awards</h4>
// // //                             <div className="grid grid-cols-2 gap-2">
// // //                                 {activeContent.awards.map((a, i) => (
// // //                                     <div key={i} className="flex items-center gap-2 text-[10px] text-slate-600">
// // //                                         <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>
// // //                                         {a}
// // //                                     </div>
// // //                                 ))}
// // //                             </div>
// // //                         </div>

// // //                     </div>
// // //                 </div>

// // //                 {/* Floating "Use This Template" Button */}
// // //                 <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
// // //                     <button onClick={onStart} className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-teal-700 hover:scale-105 transition-all">
// // //                         Use This Template
// // //                     </button>
// // //                 </div>
// // //             </div>

// // //             {/* Background Glow for visual depth */}
// // //             <div className="absolute top-20 right-10 w-96 h-96 bg-teal-400/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
// // //         </div>

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ResumeExamples;

// // import React, { useState } from 'react';
// // import { 
// //   Code, Database, BarChart3, Users, Calculator, 
// //   PenTool, GraduationCap, Building2, ShoppingBag, Wrench 
// // } from 'lucide-react';

// // const CATEGORIES = [
// //   { id: 'bi', label: 'Business Intelligence', icon: BarChart3, color: 'text-emerald-600', bg: 'bg-emerald-100' },
// //   { id: 'data', label: 'Data Scientist', icon: Database, color: 'text-purple-600', bg: 'bg-purple-100' },
// //   { id: 'pm', label: 'Product Manager', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
// //   { id: 'dev', label: 'Software Engineer', icon: Code, color: 'text-indigo-600', bg: 'bg-indigo-100' },
// //   { id: 'sales', label: 'Sales Executive', icon: ShoppingBag, color: 'text-pink-600', bg: 'bg-pink-100' },
// //   { id: 'teacher', label: 'Teacher', icon: GraduationCap, color: 'text-yellow-600', bg: 'bg-yellow-100' },
// //   { id: 'eng', label: 'Engineer', icon: Wrench, color: 'text-orange-600', bg: 'bg-orange-100' },
// //   { id: 'acc', label: 'Accounting', icon: Calculator, color: 'text-teal-600', bg: 'bg-teal-100' },
// //   { id: 'design', label: 'Designer', icon: PenTool, color: 'text-cyan-600', bg: 'bg-cyan-100' },
// //   { id: 'marketing', label: 'Marketing', icon: Building2, color: 'text-red-600', bg: 'bg-red-100' },
// // ];

// // const EXAMPLE_CONTENT = {
// //   bi: {
// //     name: "POOJA BANSAL",
// //     role: "Business Intelligence Leader",
// //     summary: "Strategic BI Manager with 7+ years of experience transforming raw data into actionable business insights. Proven track record in optimizing operational efficiency by 40%.",
// //     exp: [
// //         { role: "Senior BI Manager", company: "Global Tech Solutions", date: "2020 - Present", desc: "Led a team of 10 analysts to execute a global rebranding campaign." },
// //         { role: "Data Analyst", company: "FinStream Corp", date: "2017 - 2020", desc: "Developed complex SQL queries to consolidate data from disparate sources." }
// //     ],
// //     skills: ['Tableau', 'SQL', 'Python', 'Leadership'],
// //     awards: ["Best Innovation Award (2022)", "Top Performer Q3 (2021)"],
// //     certs: ["Certified BI Professional", "Google Data Analytics"],
// //     education: { degree: "MBA", school: "Stern School of Business" }
// //   },
// //   data: {
// //     name: "ALEX CHEN",
// //     role: "Senior Data Scientist",
// //     summary: "Expert in machine learning and predictive modeling. Built recommendation engines that increased user engagement by 25%.",
// //     exp: [
// //         { role: "Lead Data Scientist", company: "AI Innovations", date: "2019 - Present", desc: "Deployed 5 production ML models using Python and TensorFlow." },
// //         { role: "Junior Analyst", company: "DataCorp", date: "2016 - 2019", desc: "Cleaned and visualized large datasets for executive reporting." }
// //     ],
// //     skills: ['Python', 'TensorFlow', 'Machine Learning', 'Big Data'],
// //     awards: ["Kaggle Competition Winner", "Employee of the Month"],
// //     certs: ["AWS Certified Machine Learning", "Deep Learning Specialization"],
// //     education: { degree: "M.S. Data Science", school: "Stanford University" }
// //   },
// //   pm: {
// //     name: "SARAH MILLER",
// //     role: "Product Manager",
// //     summary: "Results-oriented Product Manager with 5+ years of experience driving product lifecycles from conception to launch. Skilled in agile methodologies and cross-functional team leadership.",
// //     exp: [
// //         { role: "Product Manager", company: "TechStart", date: "2018 - Present", desc: "Launched 3 successful mobile apps with over 1M downloads." },
// //         { role: "Associate PM", company: "Innovate Inc.", date: "2015 - 2018", desc: "Collaborated with engineering and design teams to define product requirements." }
// //     ],
// //     skills: ['Agile', 'Scrum', 'JIRA', 'Product Strategy'],
// //     awards: ["Product of the Year 2020", "Leadership Excellence"],
// //     certs: ["PMP Certification", "Certified Scrum Master"],
// //     education: { degree: "B.S. Business", school: "University of California" }
// //   },
// //   dev: {
// //     name: "DAVID LEE",
// //     role: "Senior Software Engineer",
// //     summary: "Full-stack developer with expertise in React, Node.js, and cloud technologies. Passionate about building scalable and efficient web applications.",
// //     exp: [
// //         { role: "Senior Engineer", company: "WebSolutions", date: "2019 - Present", desc: "Architected and implemented a microservices-based backend system." },
// //         { role: "Software Developer", company: "CodeCrafters", date: "2016 - 2019", desc: "Developed responsive frontend interfaces using React and Redux." }
// //     ],
// //     skills: ['React', 'Node.js', 'AWS', 'Docker'],
// //     awards: ["Hackathon Winner 2018", "Open Source Contributor"],
// //     certs: ["AWS Solutions Architect", "MongoDB Certified Developer"],
// //     education: { degree: "B.S. Computer Science", school: "MIT" }
// //   },
// //   sales: {
// //     name: "JESSICA WONG",
// //     role: "Sales Executive",
// //     summary: "High-performing sales professional with a proven track record of exceeding quotas. Skilled in relationship building, negotiation, and closing deals.",
// //     exp: [
// //         { role: "Sales Manager", company: "Global Sales Corp", date: "2020 - Present", desc: "Managed a team of 10 sales representatives and increased revenue by 30%." },
// //         { role: "Sales Representative", company: "BestDeals Ltd.", date: "2017 - 2020", desc: "Consistently exceeded monthly sales targets by 15%." }
// //     ],
// //     skills: ['Salesforce', 'Negotiation', 'CRM', 'Communication'],
// //     awards: ["Top Salesperson 2019", "President's Club Member"],
// //     certs: ["Inbound Sales Certification", "Negotiation Mastery"],
// //     education: { degree: "B.A. Marketing", school: "NYU" }
// //   },
// //   teacher: {
// //     name: "MICHAEL BROWN",
// //     role: "High School Teacher",
// //     summary: "Dedicated educator with a passion for inspiring students. Experienced in curriculum development and classroom management.",
// //     exp: [
// //         { role: "History Teacher", company: "Lincoln High School", date: "2015 - Present", desc: "Developed and implemented engaging lesson plans for diverse student populations." },
// //         { role: "Substitute Teacher", company: "City School District", date: "2013 - 2015", desc: "Provided instructional support across various subjects and grade levels." }
// //     ],
// //     skills: ['Curriculum Design', 'Classroom Management', 'Mentoring', 'Public Speaking'],
// //     awards: ["Teacher of the Year 2018", "Community Service Award"],
// //     certs: ["State Teaching License", "Special Education Certification"],
// //     education: { degree: "M.Ed. Education", school: "Boston College" }
// //   },
// //   eng: {
// //     name: "EMILY DAVIS",
// //     role: "Mechanical Engineer",
// //     summary: "Creative and analytical mechanical engineer with experience in product design and manufacturing. Proficient in CAD software and finite element analysis.",
// //     exp: [
// //         { role: "Design Engineer", company: "AutoParts Inc.", date: "2018 - Present", desc: "Designed and optimized automotive components for improved performance and durability." },
// //         { role: "Manufacturing Engineer", company: "TechMfg", date: "2016 - 2018", desc: "Implemented process improvements that reduced production costs by 10%." }
// //     ],
// //     skills: ['SolidWorks', 'AutoCAD', 'FEA', 'Project Management'],
// //     awards: ["Engineering Excellence Award", "Patent Holder"],
// //     certs: ["Professional Engineer (PE)", "Six Sigma Green Belt"],
// //     education: { degree: "B.S. Mechanical Engineering", school: "Georgia Tech" }
// //   },
// //   acc: {
// //     name: "ROBERT WILSON",
// //     role: "Certified Public Accountant",
// //     summary: "Detail-oriented CPA with expertise in financial reporting, tax preparation, and auditing. Committed to ensuring accuracy and compliance.",
// //     exp: [
// //         { role: "Senior Accountant", company: "Financial Services LLP", date: "2019 - Present", desc: "Managed financial audits for diverse clients and prepared complex tax returns." },
// //         { role: "Staff Accountant", company: "Local Firm", date: "2016 - 2019", desc: "Assisted with monthly close processes and reconciled general ledger accounts." }
// //     ],
// //     skills: ['GAAP', 'Tax Preparation', 'Auditing', 'Excel'],
// //     awards: ["Top Auditor 2020", "Client Service Award"],
// //     certs: ["CPA License", "Certified Internal Auditor"],
// //     education: { degree: "M.S. Accounting", school: "University of Illinois" }
// //   },
// //   design: {
// //     name: "OLIVIA TAYLOR",
// //     role: "Senior Graphic Designer",
// //     summary: "Creative and versatile graphic designer with a strong portfolio of branding and marketing materials. Proficient in Adobe Creative Suite.",
// //     exp: [
// //         { role: "Lead Designer", company: "Creative Agency", date: "2020 - Present", desc: "Led the design team in creating visual identities for major brands." },
// //         { role: "Graphic Designer", company: "PrintShop", date: "2017 - 2020", desc: "Designed marketing collateral, brochures, and social media graphics." }
// //     ],
// //     skills: ['Photoshop', 'Illustrator', 'InDesign', 'Typography'],
// //     awards: ["Design Excellence 2019", "Best Branding Campaign"],
// //     certs: ["Adobe Certified Expert", "UX Design Certificate"],
// //     education: { degree: "B.F.A. Graphic Design", school: "RISD" }
// //   },
// //   marketing: {
// //     name: "DANIEL GARCIA",
// //     role: "Marketing Manager",
// //     summary: "Strategic marketing professional with experience in digital marketing, content creation, and social media management. Proven ability to drive brand awareness and lead generation.",
// //     exp: [
// //         { role: "Marketing Manager", company: "TechStartup", date: "2019 - Present", desc: "Developed and executed comprehensive marketing campaigns that increased website traffic by 50%." },
// //         { role: "Social Media Specialist", company: "MediaGroup", date: "2016 - 2019", desc: "Managed social media accounts for multiple clients and grew follower base by 20%." }
// //     ],
// //     skills: ['SEO', 'Content Marketing', 'Google Analytics', 'Social Media'],
// //     awards: ["Marketing Campaign of the Year", "Rising Star Award"],
// //     certs: ["Google Ads Certification", "HubSpot Content Marketing"],
// //     education: { degree: "B.A. Communications", school: "USC" }
// //   },
// //   default: {
// //     name: "JORDAN SMITH",
// //     role: "Senior Professional",
// //     summary: "Dedicated professional with over 8 years of experience in the industry. Skilled in leadership, project management, and strategic planning.",
// //     exp: [
// //         { role: "Senior Manager", company: "Market Leaders Inc.", date: "2018 - Present", desc: "Oversaw daily operations and managed a team of 15 employees." },
// //         { role: "Specialist", company: "Growth Co.", date: "2015 - 2018", desc: "Implemented new strategies that increased productivity by 20%." }
// //     ],
// //     skills: ['Leadership', 'Project Management', 'Strategy', 'Communication'],
// //     awards: ["Employee of the Year", "Leadership Award"],
// //     certs: ["Project Management Professional", "Six Sigma Black Belt"],
// //     education: { degree: "M.B.A.", school: "Harvard Business School" }
// //   }
// // };

// // const ResumeExamples = ({ onStart }) => {
// //   const [activeTab, setActiveTab] = useState('bi');
// //   const activeContent = EXAMPLE_CONTENT[activeTab] || EXAMPLE_CONTENT.default;

// //   return (
// //     <div className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      
// //       {/* Decorative Arrow Line (CSS/SVG simulation) */}
// //       <svg className="absolute top-1/3 left-[28%] w-64 h-64 text-slate-300 hidden xl:block pointer-events-none" viewBox="0 0 200 200">
// //          <path d="M20,150 C50,200 150,200 180,150" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
// //          <defs>
// //             <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
// //               <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
// //             </marker>
// //          </defs>
// //       </svg>

// //       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        
// //         {/* LEFT SIDE: Heading & Categories */}
// //         <div className="lg:col-span-5 space-y-8 relative z-10">
// //           <div>
// //             <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
// //               Resume examples <br />
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
// //                 tailored for your job.
// //               </span>
// //             </h2>
// //             <p className="text-lg text-slate-500 leading-relaxed mb-8">
// //               Our Certified Professional Résumé Writers have created over 1,700 in-depth guides and reviewed 10,000+ resumes across U.S. industries.
// //             </p>
// //             <button onClick={onStart} className="text-teal-600 font-bold text-lg hover:underline flex items-center gap-2 group">
// //               Browse all examples <span className="group-hover:translate-x-1 transition-transform">→</span>
// //             </button>
// //           </div>

// //           <div className="grid grid-cols-2 gap-3">
// //             {CATEGORIES.map((cat) => (
// //               <button
// //                 key={cat.id}
// //                 onClick={() => setActiveTab(cat.id)}
// //                 className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 group text-left ${
// //                   activeTab === cat.id 
// //                     ? 'bg-white shadow-xl ring-1 ring-slate-100 scale-[1.02]' 
// //                     : 'hover:bg-white hover:shadow-md'
// //                 }`}
// //               >
// //                 <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${cat.bg} ${cat.color}`}>
// //                   <cat.icon size={20} />
// //                 </div>
// //                 <span className={`text-sm font-bold leading-tight ${activeTab === cat.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
// //                   {cat.label}
// //                 </span>
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* RIGHT SIDE: Resume Preview Card */}
// //         <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            
// //             {/* The Resume Document */}
// //             <div className="bg-white w-full max-w-xl aspect-[210/297] rounded-[20px] shadow-2xl border border-slate-100 p-8 md:p-12 relative overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 key={activeTab}">
                
// //                 {/* Header */}
// //                 <div className="border-b-2 border-slate-900 pb-6 mb-8 text-center"> {/* Centered header for classic look */}
// //                     <h3 className="text-3xl font-black text-slate-900 uppercase tracking-wider mb-2">{activeContent.name}</h3>
// //                     <p className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-4">{activeContent.role}</p>
// //                     <div className="text-[10px] text-slate-500 flex justify-center gap-3">
// //                         <span>+1 555 0199 283</span> • <span>New York, USA</span> • <span>linkedin.com/in/profile</span>
// //                     </div>
// //                 </div>

// //                 {/* Body - Adjusted Grid for more sections */}
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
// //                     {/* Left Column (Skills, Education, Certs) */}
// //                     <div className="col-span-1 space-y-6 border-r border-slate-100 pr-4"> {/* Added border for separation */}
                        
// //                         {/* Skills */}
// //                         <div>
// //                             <h4 className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 mb-3">Skills</h4>
// //                             <div className="flex flex-wrap gap-2">
// //                                 {activeContent.skills.map(s => (
// //                                     <span key={s} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] font-bold">{s}</span>
// //                                 ))}
// //                             </div>
// //                         </div>

// //                         {/* Education */}
// //                         <div>
// //                             <h4 className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 mb-3">Education</h4>
// //                             <div className="text-[10px] text-slate-600">
// //                                 <p className="font-bold text-slate-900">{activeContent.education.degree}</p>
// //                                 <p>{activeContent.education.school}</p>
// //                                 <p className="text-slate-400">2012 - 2016</p>
// //                             </div>
// //                         </div>

// //                         {/* Certifications */}
// //                         <div>
// //                             <h4 className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 mb-3">Certifications</h4>
// //                             <ul className="text-[10px] text-slate-600 space-y-1 list-disc ml-3">
// //                                 {activeContent.certs.map((c, i) => (
// //                                     <li key={i}>{c}</li>
// //                                 ))}
// //                             </ul>
// //                         </div>
// //                     </div>

// //                     {/* Right Column (Summary, Experience, Awards) */}
// //                     <div className="col-span-2 space-y-6">
                        
// //                         {/* Summary */}
// //                         <div>
// //                             <h4 className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 mb-3">Summary</h4>
// //                             <p className="text-[11px] text-slate-600 leading-relaxed text-justify">
// //                                 {activeContent.summary}
// //                             </p>
// //                         </div>

// //                         {/* Experience */}
// //                         <div>
// //                             <h4 className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 mb-3">Experience</h4>
// //                             <div className="space-y-5">
// //                                 {activeContent.exp.map((job, i) => (
// //                                     <div key={i}>
// //                                         <div className="flex justify-between items-baseline mb-1">
// //                                             <span className="font-bold text-slate-900 text-xs">{job.role}</span>
// //                                             <span className="text-[10px] text-slate-400">{job.date}</span>
// //                                         </div>
// //                                         <div className="text-[10px] text-teal-600 font-bold mb-1">{job.company}</div>
// //                                         <p className="text-[10px] text-slate-600 leading-relaxed">
// //                                             {job.desc}
// //                                         </p>
// //                                     </div>
// //                                 ))}
// //                             </div>
// //                         </div>

// //                         {/* Awards */}
// //                         <div>
// //                             <h4 className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 mb-3">Awards</h4>
// //                             <div className="grid grid-cols-2 gap-2">
// //                                 {activeContent.awards.map((a, i) => (
// //                                     <div key={i} className="flex items-center gap-2 text-[10px] text-slate-600">
// //                                         <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>
// //                                         {a}
// //                                     </div>
// //                                 ))}
// //                             </div>
// //                         </div>

// //                     </div>
// //                 </div>

// //                 {/* Floating "Use This Template" Button */}
// //                 <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
// //                     <button onClick={onStart} className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-teal-700 hover:scale-105 transition-all">
// //                         Use This Template
// //                     </button>
// //                 </div>
// //             </div>

// //             {/* Background Glow for visual depth */}
// //             <div className="absolute top-20 right-10 w-96 h-96 bg-teal-400/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default ResumeExamples;

// import React, { useState } from 'react';
// import { 
//   Code, Database, BarChart3, Users, Calculator, 
//   PenTool, GraduationCap, Building2, ShoppingBag, Wrench 
// } from 'lucide-react';
// import ResumePreview from '../resume/ResumePreview'; // Import the actual renderer

// const CATEGORIES = [
//   { id: 'bi', templateId: 'business-analyst', label: 'Business Intelligence', icon: BarChart3, color: 'text-emerald-600', bg: 'bg-emerald-100' },
//   { id: 'data', templateId: 'data-scientist', label: 'Data Scientist', icon: Database, color: 'text-purple-600', bg: 'bg-purple-100' },
//   { id: 'pm', templateId: 'product-manager', label: 'Product Manager', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
//   { id: 'dev', templateId: 'software-engineer', label: 'Software Engineer', icon: Code, color: 'text-indigo-600', bg: 'bg-indigo-100' },
//   { id: 'sales', templateId: 'sales', label: 'Sales Executive', icon: ShoppingBag, color: 'text-pink-600', bg: 'bg-pink-100' },
//   { id: 'teacher', templateId: 'teacher', label: 'Teacher', icon: GraduationCap, color: 'text-yellow-600', bg: 'bg-yellow-100' },
//   { id: 'eng', templateId: 'engineer', label: 'Engineer', icon: Wrench, color: 'text-orange-600', bg: 'bg-orange-100' },
//   { id: 'acc', templateId: 'accounting', label: 'Accounting', icon: Calculator, color: 'text-teal-600', bg: 'bg-teal-100' },
//   { id: 'design', templateId: 'designer', label: 'Designer', icon: PenTool, color: 'text-cyan-600', bg: 'bg-cyan-100' },
//   { id: 'marketing', templateId: 'marketing', label: 'Marketing', icon: Building2, color: 'text-red-600', bg: 'bg-red-100' },
// ];

// // Content adapted to match the Editor's data structure
// const EXAMPLE_CONTENT = {
//   bi: {
//     personal: { name: "POOJA BANSAL", title: "Business Intelligence Leader", email: "p.bansal@example.com", phone: "+1 234 567 890", location: "New York, USA", summary: "Strategic BI Manager with 7+ years of experience transforming raw data into actionable business insights. Proven track record in optimizing operational efficiency by 40%." },
//     experience: [
//       { id: 1, role: "Senior BI Manager", company: "Global Tech Solutions", date: "2020 - Present", desc: "Led a team of 10 analysts to execute a global rebranding campaign.\nImplemented Tableau dashboards increasing visibility by 40%." },
//       { id: 2, role: "Data Analyst", company: "FinStream Corp", date: "2017 - 2020", desc: "Developed complex SQL queries to consolidate data from disparate sources." }
//     ],
//     skills: { technical: ['Tableau', 'SQL', 'Python', 'PowerBI'], soft: ['Leadership', 'Communication'] },
//     awards: [{ id: 1, name: "Best Innovation Award", issuer: "2022" }],
//     certifications: [{ id: 1, name: "Certified BI Professional", issuer: "TDWI" }],
//     education: [{ id: 1, degree: "MBA", school: "Stern School of Business", date: "2016" }]
//   },
//   data: {
//     personal: { name: "ALEX CHEN", title: "Senior Data Scientist", email: "alex.c@example.com", phone: "+1 555 019 283", location: "San Francisco, CA", summary: "Expert in machine learning and predictive modeling. Built recommendation engines that increased user engagement by 25%." },
//     experience: [
//       { id: 1, role: "Lead Data Scientist", company: "AI Innovations", date: "2019 - Present", desc: "Deployed 5 production ML models using Python and TensorFlow.\nReduced churn by 15% via predictive modeling." },
//       { id: 2, role: "Junior Analyst", company: "DataCorp", date: "2016 - 2019", desc: "Cleaned and visualized large datasets for executive reporting." }
//     ],
//     skills: { technical: ['Python', 'TensorFlow', 'Machine Learning', 'Big Data'], soft: ['Problem Solving'] },
//     awards: [{ id: 1, name: "Kaggle Competition Winner", issuer: "2021" }],
//     certifications: [{ id: 1, name: "AWS Certified Machine Learning", issuer: "AWS" }],
//     education: [{ id: 1, degree: "M.S. Data Science", school: "Stanford University", date: "2016" }]
//   },
//   pm: {
//     personal: { name: "SARAH MILLER", title: "Product Manager", email: "s.miller@example.com", phone: "+1 987 654 321", location: "Austin, TX", summary: "Results-oriented Product Manager with 5+ years of experience driving product lifecycles from conception to launch. Skilled in agile methodologies." },
//     experience: [
//       { id: 1, role: "Product Manager", company: "TechStart", date: "2018 - Present", desc: "Launched 3 successful mobile apps with over 1M downloads.\nManaged backlog and roadmap for core products." },
//       { id: 2, role: "Associate PM", company: "Innovate Inc.", date: "2015 - 2018", desc: "Collaborated with engineering and design teams to define product requirements." }
//     ],
//     skills: { technical: ['Agile', 'Scrum', 'JIRA', 'Product Strategy'], soft: ['Team Leadership'] },
//     awards: [{ id: 1, name: "Product of the Year", issuer: "2020" }],
//     certifications: [{ id: 1, name: "PMP Certification", issuer: "PMI" }],
//     education: [{ id: 1, degree: "B.S. Business", school: "University of California", date: "2015" }]
//   },
//   dev: {
//     personal: { name: "DAVID LEE", title: "Senior Software Engineer", email: "david.dev@example.com", phone: "+1 444 555 666", location: "Seattle, WA", summary: "Full-stack developer with expertise in React, Node.js, and cloud technologies. Passionate about building scalable and efficient web applications." },
//     experience: [
//       { id: 1, role: "Senior Engineer", company: "WebSolutions", date: "2019 - Present", desc: "Architected and implemented a microservices-based backend system.\nMentored 3 junior developers." },
//       { id: 2, role: "Software Developer", company: "CodeCrafters", date: "2016 - 2019", desc: "Developed responsive frontend interfaces using React and Redux." }
//     ],
//     skills: { technical: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript'], soft: ['Mentoring'] },
//     awards: [{ id: 1, name: "Hackathon Winner", issuer: "2018" }],
//     certifications: [{ id: 1, name: "AWS Solutions Architect", issuer: "Amazon" }],
//     education: [{ id: 1, degree: "B.S. Computer Science", school: "MIT", date: "2016" }]
//   },
//   sales: {
//     personal: { name: "JESSICA WONG", title: "Sales Executive", email: "jess.wong@example.com", phone: "+1 222 333 444", location: "Chicago, IL", summary: "High-performing sales professional with a proven track record of exceeding quotas. Skilled in relationship building, negotiation, and closing deals." },
//     experience: [
//       { id: 1, role: "Sales Manager", company: "Global Sales Corp", date: "2020 - Present", desc: "Managed a team of 10 sales representatives and increased revenue by 30%." },
//       { id: 2, role: "Sales Representative", company: "BestDeals Ltd.", date: "2017 - 2020", desc: "Consistently exceeded monthly sales targets by 15%." }
//     ],
//     skills: { technical: ['Salesforce', 'CRM', 'HubSpot'], soft: ['Negotiation', 'Communication'] },
//     awards: [{ id: 1, name: "Top Salesperson", issuer: "2019" }],
//     certifications: [{ id: 1, name: "Inbound Sales", issuer: "HubSpot" }],
//     education: [{ id: 1, degree: "B.A. Marketing", school: "NYU", date: "2017" }]
//   },
//   teacher: {
//     personal: { name: "MICHAEL BROWN", title: "High School Teacher", email: "m.brown@edu.com", phone: "+1 111 222 333", location: "Boston, MA", summary: "Dedicated educator with a passion for inspiring students. Experienced in curriculum development and classroom management." },
//     experience: [
//       { id: 1, role: "History Teacher", company: "Lincoln High School", date: "2015 - Present", desc: "Developed and implemented engaging lesson plans for diverse student populations." },
//       { id: 2, role: "Substitute Teacher", company: "City School District", date: "2013 - 2015", desc: "Provided instructional support across various subjects and grade levels." }
//     ],
//     skills: { technical: ['Curriculum Design', 'LMS'], soft: ['Classroom Management', 'Public Speaking'] },
//     awards: [{ id: 1, name: "Teacher of the Year", issuer: "2018" }],
//     certifications: [{ id: 1, name: "State Teaching License", issuer: "State Board" }],
//     education: [{ id: 1, degree: "M.Ed. Education", school: "Boston College", date: "2013" }]
//   },
//   eng: {
//     personal: { name: "EMILY DAVIS", title: "Mechanical Engineer", email: "e.davis@eng.com", phone: "+1 777 888 999", location: "Detroit, MI", summary: "Creative and analytical mechanical engineer with experience in product design and manufacturing. Proficient in CAD software and finite element analysis." },
//     experience: [
//       { id: 1, role: "Design Engineer", company: "AutoParts Inc.", date: "2018 - Present", desc: "Designed and optimized automotive components for improved performance and durability." },
//       { id: 2, role: "Manufacturing Engineer", company: "TechMfg", date: "2016 - 2018", desc: "Implemented process improvements that reduced production costs by 10%." }
//     ],
//     skills: { technical: ['SolidWorks', 'AutoCAD', 'FEA'], soft: ['Project Management'] },
//     awards: [{ id: 1, name: "Engineering Excellence", issuer: "2021" }],
//     certifications: [{ id: 1, name: "Professional Engineer (PE)", issuer: "NSPE" }],
//     education: [{ id: 1, degree: "B.S. Mechanical Engineering", school: "Georgia Tech", date: "2016" }]
//   },
//   acc: {
//     personal: { name: "ROBERT WILSON", title: "Certified Public Accountant", email: "r.wilson@cpa.com", phone: "+1 999 000 111", location: "Chicago, IL", summary: "Detail-oriented CPA with expertise in financial reporting, tax preparation, and auditing. Committed to ensuring accuracy and compliance." },
//     experience: [
//       { id: 1, role: "Senior Accountant", company: "Financial Services LLP", date: "2019 - Present", desc: "Managed financial audits for diverse clients and prepared complex tax returns." },
//       { id: 2, role: "Staff Accountant", company: "Local Firm", date: "2016 - 2019", desc: "Assisted with monthly close processes and reconciled general ledger accounts." }
//     ],
//     skills: { technical: ['GAAP', 'Tax Preparation', 'Auditing', 'Excel'], soft: ['Attention to Detail'] },
//     awards: [{ id: 1, name: "Top Auditor", issuer: "2020" }],
//     certifications: [{ id: 1, name: "CPA License", issuer: "AICPA" }],
//     education: [{ id: 1, degree: "M.S. Accounting", school: "University of Illinois", date: "2016" }]
//   },
//   design: {
//     personal: { name: "OLIVIA TAYLOR", title: "Senior Graphic Designer", email: "olivia.t@design.com", phone: "+1 555 123 456", location: "Los Angeles, CA", summary: "Creative and versatile graphic designer with a strong portfolio of branding and marketing materials. Proficient in Adobe Creative Suite." },
//     experience: [
//       { id: 1, role: "Lead Designer", company: "Creative Agency", date: "2020 - Present", desc: "Led the design team in creating visual identities for major brands." },
//       { id: 2, role: "Graphic Designer", company: "PrintShop", date: "2017 - 2020", desc: "Designed marketing collateral, brochures, and social media graphics." }
//     ],
//     skills: { technical: ['Photoshop', 'Illustrator', 'InDesign', 'Figma'], soft: ['Creativity', 'Typography'] },
//     awards: [{ id: 1, name: "Design Excellence", issuer: "2019" }],
//     certifications: [{ id: 1, name: "Adobe Certified Expert", issuer: "Adobe" }],
//     education: [{ id: 1, degree: "B.F.A. Graphic Design", school: "RISD", date: "2017" }]
//   },
//   marketing: {
//     personal: { name: "DANIEL GARCIA", title: "Marketing Manager", email: "d.garcia@marketing.com", phone: "+1 333 222 111", location: "Miami, FL", summary: "Strategic marketing professional with experience in digital marketing, content creation, and social media management." },
//     experience: [
//       { id: 1, role: "Marketing Manager", company: "TechStartup", date: "2019 - Present", desc: "Developed and executed comprehensive marketing campaigns that increased website traffic by 50%." },
//       { id: 2, role: "Social Media Specialist", company: "MediaGroup", date: "2016 - 2019", desc: "Managed social media accounts for multiple clients and grew follower base by 20%." }
//     ],
//     skills: { technical: ['SEO', 'Google Analytics', 'Content Marketing'], soft: ['Creativity'] },
//     awards: [{ id: 1, name: "Marketing Campaign of the Year", issuer: "2021" }],
//     certifications: [{ id: 1, name: "Google Ads Certification", issuer: "Google" }],
//     education: [{ id: 1, degree: "B.A. Communications", school: "USC", date: "2016" }]
//   }
// };

// const ResumeExamples = ({ onStart }) => {
//   const [activeTab, setActiveTab] = useState('bi');
  
//   // Get content and determine which template to render
//   const activeContent = EXAMPLE_CONTENT[activeTab];
//   const activeTemplateId = CATEGORIES.find(c => c.id === activeTab)?.templateId || 'professional';

//   return (
//     <div className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      
//       {/* Decorative Arrow Line (CSS/SVG simulation) */}
//       <svg className="absolute top-1/3 left-[28%] w-64 h-64 text-slate-300 hidden xl:block pointer-events-none" viewBox="0 0 200 200">
//          <path d="M20,150 C50,200 150,200 180,150" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
//          <defs>
//             <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
//               <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
//             </marker>
//          </defs>
//       </svg>

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        
//         {/* LEFT SIDE: Heading & Categories */}
//         <div className="lg:col-span-5 space-y-8 relative z-10">
//           <div>
//             <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
//               Resume examples <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
//                 tailored for your job.
//               </span>
//             </h2>
//             <p className="text-lg text-slate-500 leading-relaxed mb-8">
//               Our Certified Professional Résumé Writers have created over 1,700 in-depth guides and reviewed 10,000+ resumes across U.S. industries.
//             </p>
//             <button onClick={onStart} className="text-teal-600 font-bold text-lg hover:underline flex items-center gap-2 group">
//               Browse all examples <span className="group-hover:translate-x-1 transition-transform">→</span>
//             </button>
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             {CATEGORIES.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveTab(cat.id)}
//                 className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 group text-left ${
//                   activeTab === cat.id 
//                     ? 'bg-white shadow-xl ring-1 ring-slate-100 scale-[1.02]' 
//                     : 'hover:bg-white hover:shadow-md'
//                 }`}
//               >
//                 <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${cat.bg} ${cat.color}`}>
//                   <cat.icon size={20} />
//                 </div>
//                 <span className={`text-sm font-bold leading-tight ${activeTab === cat.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
//                   {cat.label}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE: Dynamic Resume Preview Card */}
//         <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            
//             {/* The Resume Document Container */}
//             <div className="bg-white w-full max-w-[500px] h-[700px] rounded-[20px] shadow-2xl border border-slate-100 relative overflow-hidden transition-all duration-500 group">
                
//                 {/* KEY FIX: We use a scaling transform to fit the A4 ResumePreview 
//                    into this smaller card container without scrollbars.
//                 */}
//                 <div className="w-[210mm] h-[297mm] origin-top-left transform scale-[0.6] sm:scale-[0.55] lg:scale-[0.60] p-0 bg-white pointer-events-none select-none">
//                     {/* Render the ACTUAL template component via ResumePreview */}
//                     <ResumePreview 
//                         data={activeContent} 
//                         template={activeTemplateId} 
//                     />
//                 </div>

//                 {/* Floating "Use This Template" Overlay */}
//                 <div className="absolute inset-0 bg-slate-900/0 hover:bg-slate-900/10 transition-colors duration-300 flex items-end justify-center pb-8">
//                     <button onClick={onStart} className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-teal-700 hover:scale-105 transition-all transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
//                         Use This Template
//                     </button>
//                 </div>
//             </div>

//             {/* Background Glow for visual depth */}
//             <div className="absolute top-20 right-10 w-96 h-96 bg-teal-400/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ResumeExamples;

import React, { useState } from 'react';
import { 
  Code, Database, BarChart3, Users, Calculator, 
  PenTool, GraduationCap, Building2, ShoppingBag, Wrench 
} from 'lucide-react';
import ResumePreview from '../resume/ResumePreview'; 

const CATEGORIES = [
  { id: 'bi', templateId: 'business-analyst', label: 'Business Intelligence', icon: BarChart3, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { id: 'data', templateId: 'data-scientist', label: 'Data Scientist', icon: Database, color: 'text-purple-600', bg: 'bg-purple-100' },
  { id: 'pm', templateId: 'product-manager', label: 'Product Manager', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
  { id: 'dev', templateId: 'software-engineer', label: 'Software Engineer', icon: Code, color: 'text-indigo-600', bg: 'bg-indigo-100' },
  { id: 'sales', templateId: 'sales', label: 'Sales Executive', icon: ShoppingBag, color: 'text-pink-600', bg: 'bg-pink-100' },
  { id: 'teacher', templateId: 'teacher', label: 'Teacher', icon: GraduationCap, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  { id: 'eng', templateId: 'engineer', label: 'Engineer', icon: Wrench, color: 'text-orange-600', bg: 'bg-orange-100' },
  { id: 'acc', templateId: 'accounting', label: 'Accounting', icon: Calculator, color: 'text-teal-600', bg: 'bg-teal-100' },
  { id: 'design', templateId: 'designer', label: 'Designer', icon: PenTool, color: 'text-cyan-600', bg: 'bg-cyan-100' },
  { id: 'marketing', templateId: 'marketing', label: 'Marketing', icon: Building2, color: 'text-red-600', bg: 'bg-red-100' },
];

const EXAMPLE_CONTENT = {
  bi: {
    personal: { name: "POOJA BANSAL", title: "Business Intelligence Lead", email: "p.bansal@analytics.com", phone: "+1 212 555 0199", location: "New York, NY", summary: "Senior Business Intelligence Analyst with 8+ years of experience in data visualization, ETL processes, and strategic reporting. Expert in transforming complex datasets into actionable insights that drive revenue growth and operational efficiency. Proven track record of leading cross-functional teams to automate reporting systems, reducing manual effort by 40%." },
    experience: [
      { id: 1, role: "Lead BI Analyst", company: "Global Tech Solutions", date: "2020 - Present", desc: "• Spearheaded the migration of legacy reporting systems to Tableau, increasing report adoption by 150% across the organization.\n• Developed and maintained 20+ executive dashboards tracking KPIs for sales, marketing, and finance departments.\n• Led a team of 5 analysts to optimize SQL queries, reducing data retrieval time by 60%.\n• Collaborated with C-suite stakeholders to define data governance policies." },
      { id: 2, role: "Senior Data Analyst", company: "FinStream Corp", date: "2017 - 2020", desc: "• Designed predictive models to forecast quarterly revenue with 95% accuracy.\n• Automated weekly financial reporting using Python and SQL, saving 15 hours of manual work per week.\n• Conducted A/B testing on marketing campaigns, resulting in a 20% increase in conversion rates." },
      { id: 3, role: "Junior Analyst", company: "DataFlow Inc.", date: "2015 - 2017", desc: "• Assisted in the cleaning and preprocessing of large datasets for downstream analysis.\n• Created ad-hoc reports for the sales team to identify underperforming regions." }
    ],
    skills: { technical: ['Tableau', 'PowerBI', 'SQL (Advanced)', 'Python (Pandas)', 'ETL', 'Snowflake'], soft: ['Strategic Planning', 'Team Leadership', 'Stakeholder Management'] },
    awards: [{ id: 1, name: "Best Innovation Award 2022", issuer: "Global Tech" }, { id: 2, name: "Top Performer Q3 2021", issuer: "Global Tech" }],
    projects: [{ id: 1, name: "Enterprise Data Warehouse", desc: "Led the design and implementation of a centralized data warehouse integrating 5 disparate data sources." }],
    certifications: [{ id: 1, name: "Certified BI Professional", issuer: "TDWI" }, { id: 2, name: "Tableau Desktop Specialist", issuer: "Tableau" }],
    education: [{ id: 1, degree: "Master of Business Administration (MBA)", school: "Stern School of Business", date: "2015" }]
  },
  data: {
    personal: { name: "ALEX CHEN", title: "Senior Data Scientist", email: "alex.c@datascience.com", phone: "+1 415 555 0283", location: "San Francisco, CA", summary: "Ph.D. educated Data Scientist with expertise in Machine Learning, Deep Learning, and Natural Language Processing. Passionate about building scalable AI solutions that solve real-world problems. Published author with 3 papers in top-tier journals and a contributor to open-source ML libraries." },
    experience: [
      { id: 1, role: "Principal Data Scientist", company: "AI Innovations Lab", date: "2019 - Present", desc: "• Architected and deployed a recommendation engine serving 10M+ users, increasing engagement by 25%.\n• Mentored junior data scientists and established best practices for code review and model versioning.\n• Utilized TensorFlow and PyTorch to build NLP models for sentiment analysis of customer feedback.\n• Reduced model inference time by 30% through optimization techniques." },
      { id: 2, role: "Data Scientist", company: "RetailMetrics", date: "2016 - 2019", desc: "• Developed churn prediction models that helped the retention team save $2M in annual revenue.\n• Implemented computer vision algorithms for automated inventory checking in warehouses.\n• Conducted exploratory data analysis to identify key drivers of customer lifetime value." },
      { id: 3, role: "Research Assistant", company: "Stanford AI Lab", date: "2014 - 2016", desc: "• Conducted novel research in reinforcement learning algorithms.\n• Published findings in NeurIPS and ICML conferences." }
    ],
    skills: { technical: ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'AWS SageMaker', 'Docker'], soft: ['Problem Solving', 'Research', 'Mentoring'] },
    awards: [{ id: 1, name: "Kaggle Grandmaster", issuer: "Kaggle" }, { id: 2, name: "Best Paper Award", issuer: "ICML 2016" }],
    projects: [{ id: 1, name: "AutoML Framework", desc: "Built an internal tool to automate model selection and hyperparameter tuning for standard regression tasks." }],
    certifications: [{ id: 1, name: "AWS Certified Machine Learning", issuer: "AWS" }],
    education: [{ id: 1, degree: "Ph.D. in Computer Science", school: "Stanford University", date: "2016" }]
  },
  pm: {
    personal: { name: "SARAH MILLER", title: "Group Product Manager", email: "s.miller@product.com", phone: "+1 512 555 9876", location: "Austin, TX", summary: "Customer-centric Product Manager with a decade of experience in SaaS and B2B platforms. Skilled in roadmap planning, agile methodologies, and user research. Proven ability to bridge the gap between technical teams and business stakeholders to deliver high-impact products." },
    experience: [
      { id: 1, role: "Group Product Manager", company: "TechStart SaaS", date: "2018 - Present", desc: "• Define and execute the product vision for the company's flagship enterprise suite, generating $50M ARR.\n• Launch 3 successful mobile apps with over 1M downloads combined, maintaining a 4.8-star rating.\n• Lead a cross-functional team of 15 (Engineering, Design, QA) in 2-week agile sprints.\n• Conducted 50+ user interviews to identify pain points and prioritize backlog items." },
      { id: 2, role: "Product Manager", company: "Innovate Inc.", date: "2015 - 2018", desc: "• Increased user retention by 20% through the gamification of the user onboarding process.\n• Managed the integration of 3rd party APIs, expanding the platform's ecosystem.\n• Created comprehensive PRDs and user stories to guide development efforts." },
      { id: 3, role: "Business Analyst", company: "Consulting Group", date: "2013 - 2015", desc: "• Analyzed market trends and competitor strategies to inform product positioning.\n• Facilitated requirements gathering workshops with key clients." }
    ],
    skills: { technical: ['JIRA', 'Confluence', 'Figma', 'Amplitude', 'SQL'], soft: ['Product Strategy', 'Agile/Scrum', 'User Empathy'] },
    awards: [{ id: 1, name: "Product of the Year 2020", issuer: "SaaS Awards" }],
    projects: [{ id: 1, name: "Project Horizon", desc: "Led the complete UX redesign of the legacy web portal, resulting in a 40% drop in support tickets." }],
    certifications: [{ id: 1, name: "PMP Certification", issuer: "PMI" }, { id: 2, name: "Certified Scrum Product Owner", issuer: "Scrum Alliance" }],
    education: [{ id: 1, degree: "B.S. Business Administration", school: "University of California, Berkeley", date: "2013" }]
  },
  dev: {
    personal: { name: "DAVID LEE", title: "Senior Full Stack Engineer", email: "david.dev@code.com", phone: "+1 206 555 4433", location: "Seattle, WA", summary: "Full-stack developer with 6+ years of experience architecting scalable web applications. Expert in the React ecosystem, Node.js, and Cloud Infrastructure (AWS). Passionate about code quality, performance optimization, and developer experience." },
    experience: [
      { id: 1, role: "Senior Software Engineer", company: "CloudScale Systems", date: "2019 - Present", desc: "• Architected and implemented a microservices-based backend using Node.js and gRPC, handling 10k+ RPS.\n• Migrated the frontend monolith to a Next.js micro-frontend architecture, improving build times by 70%.\n• Mentored 4 junior developers, conducting code reviews and pair programming sessions.\n• Implemented CI/CD pipelines using GitHub Actions to automate testing and deployment." },
      { id: 2, role: "Software Developer", company: "WebSolutions Agency", date: "2016 - 2019", desc: "• Developed responsive, accessible frontend interfaces for e-commerce clients using React and Redux.\n• Integrated Stripe and PayPal payment gateways, processing $1M+ in monthly transactions.\n• Optimized database queries in PostgreSQL, reducing average endpoint latency by 200ms." },
      { id: 3, role: "Junior Web Developer", company: "StartUp Hub", date: "2015 - 2016", desc: "• Built and maintained landing pages using HTML, CSS, and jQuery.\n• Assisted in the migration of on-premise servers to AWS EC2 instances." }
    ],
    skills: { technical: ['React', 'TypeScript', 'Node.js', 'AWS (Lambda, S3)', 'Docker', 'GraphQL'], soft: ['System Design', 'Mentoring', 'Code Review'] },
    awards: [{ id: 1, name: "Internal Hackathon Winner", issuer: "2021" }],
    projects: [{ id: 1, name: "Open Source UI Lib", desc: "Maintainer of a popular React component library with 1k+ stars on GitHub." }],
    certifications: [{ id: 1, name: "AWS Certified Solutions Architect", issuer: "Amazon" }],
    education: [{ id: 1, degree: "B.S. Computer Science", school: "MIT", date: "2015" }]
  },
  sales: {
    personal: { name: "JESSICA WONG", title: "Regional Sales Director", email: "jess.wong@sales.com", phone: "+1 312 555 2211", location: "Chicago, IL", summary: "Dynamic Sales Director with a history of exceeding multi-million dollar quotas in the SaaS industry. Expert in consultative selling, territory management, and building high-performance sales teams. Skilled in negotiation and CRM management." },
    experience: [
      { id: 1, role: "Regional Sales Director", company: "Global SaaS Corp", date: "2020 - Present", desc: "• Manage a territory of 15 enterprise accounts, generating $8M in annual recurring revenue (ARR).\n• Lead and coach a team of 10 Account Executives, helping 80% of the team hit quota in 2022.\n• Negotiated and closed the company's largest deal to date ($1.5M TCV) with a Fortune 500 retailer.\n• Implemented a new sales methodology (MEDDIC) that shortened the sales cycle by 20%." },
      { id: 2, role: "Senior Account Executive", company: "BestDeals Ltd.", date: "2017 - 2020", desc: "• Consistently exceeded monthly sales targets by 120% for 3 consecutive years.\n• Generated $500k in new pipeline per quarter through cold calling and networking events.\n• Collaborated with the marketing team to refine sales collateral and case studies." },
      { id: 3, role: "Sales Development Rep", company: "StartUp Inc.", date: "2015 - 2017", desc: "• Conducted 50+ cold calls per day to qualify leads for the senior sales team.\n• Achieved 'Rookie of the Year' award for setting the most qualified meetings." }
    ],
    skills: { technical: ['Salesforce', 'HubSpot', 'LinkedIn Sales Nav', 'Outreach.io'], soft: ['Negotiation', 'Public Speaking', 'Closing'] },
    awards: [{ id: 1, name: "President's Club 2021", issuer: "Global SaaS" }, { id: 2, name: "Top Closer Q4 2019", issuer: "BestDeals" }],
    certifications: [{ id: 1, name: "Inbound Sales Certification", issuer: "HubSpot" }],
    education: [{ id: 1, degree: "B.A. Marketing", school: "New York University", date: "2015" }]
  },
  teacher: {
    personal: { name: "MICHAEL BROWN", title: "Senior History Teacher", email: "m.brown@education.org", phone: "+1 617 555 8899", location: "Boston, MA", summary: "Dedicated educator with 10+ years of experience in curriculum development and classroom instruction. Passionate about making history accessible and engaging for diverse student populations. Strong focus on integrating technology into the classroom to enhance learning outcomes." },
    experience: [
      { id: 1, role: "Head of History Dept.", company: "Lincoln High School", date: "2018 - Present", desc: "• Oversee the history curriculum for grades 9-12, ensuring alignment with state standards.\n• Mentor 5 junior teachers and conduct quarterly performance observations.\n• Introduced a digital learning initiative, integrating Chromebooks and interactive maps into lessons.\n• Organized the annual 'Living History' fair, involving 200+ students and community members." },
      { id: 2, role: "History Teacher", company: "Westside Middle School", date: "2014 - 2018", desc: "• Developed and implemented engaging lesson plans for World History and Civics.\n• Improved standardized test scores by 15% over a 2-year period through targeted after-school tutoring.\n• Managed a classroom of 30+ students, maintaining a positive and inclusive learning environment." },
      { id: 3, role: "Substitute Teacher", company: "Boston Public Schools", date: "2012 - 2014", desc: "• Provided long-term sub coverage for English and History classes across the district.\n• Adapted quickly to different classroom dynamics and lesson plans." }
    ],
    skills: { technical: ['Google Classroom', 'Canvas LMS', 'Zoom', 'SmartBoard'], soft: ['Classroom Mgmt', 'Curriculum Design', 'Public Speaking'] },
    awards: [{ id: 1, name: "Teacher of the Year 2019", issuer: "Lincoln High" }],
    projects: [{ id: 1, name: "After-School Debate Club", desc: "Founded and coached the school's first debate team, winning regional finals in 2021." }],
    certifications: [{ id: 1, name: "State Teaching License (MA)", issuer: "DESE" }, { id: 2, name: "Special Education", issuer: "Professional Dev" }],
    education: [{ id: 1, degree: "Master of Education (M.Ed.)", school: "Boston College", date: "2012" }]
  },
  eng: {
    personal: { name: "EMILY DAVIS", title: "Senior Mechanical Engineer", email: "e.davis@engineering.com", phone: "+1 313 555 7788", location: "Detroit, MI", summary: "Innovative Mechanical Engineer with extensive experience in automotive product design and manufacturing processes. Proficient in 3D CAD modeling, FEA analysis, and rapid prototyping. Committed to designing efficient, sustainable, and cost-effective solutions." },
    experience: [
      { id: 1, role: "Lead Design Engineer", company: "AutoParts Global", date: "2018 - Present", desc: "• Lead the design and development of next-generation electric vehicle battery casings.\n• Utilized SolidWorks and ANSYS to perform thermal and structural simulations, optimizing part weight by 12%.\n• Coordinate with manufacturing teams to ensure designs are DFM (Design for Manufacturing) compliant.\n• Managed a budget of $500k for prototyping and testing phases." },
      { id: 2, role: "Manufacturing Engineer", company: "TechMfg Solutions", date: "2016 - 2018", desc: "• Designed fixtures and jigs to streamline the assembly line, reducing cycle time by 15 seconds per unit.\n• Investigated root causes of production failures using Six Sigma methodologies.\n• Implemented a preventative maintenance schedule that reduced machine downtime by 20%." },
      { id: 3, role: "Junior Engineer", company: "Precision Gears", date: "2014 - 2016", desc: "• Assisted senior engineers in drafting technical drawings and BOMs (Bill of Materials).\n• Conducted quality control inspections on incoming raw materials." }
    ],
    skills: { technical: ['SolidWorks', 'AutoCAD', 'ANSYS', 'GD&T', 'MATLAB'], soft: ['Project Management', 'Problem Solving', 'Creativity'] },
    awards: [{ id: 1, name: "Engineering Excellence Award", issuer: "SAE International" }, { id: 2, name: "Patent Holder", issuer: "US Patent Office" }],
    projects: [{ id: 1, name: "EV Thermal Management System", desc: "Designed a liquid cooling system for high-performance EV battery packs." }],
    certifications: [{ id: 1, name: "Professional Engineer (PE)", issuer: "NSPE" }, { id: 2, name: "Six Sigma Green Belt", issuer: "ASQ" }],
    education: [{ id: 1, degree: "B.S. Mechanical Engineering", school: "Georgia Institute of Technology", date: "2014" }]
  },
  acc: {
    personal: { name: "ROBERT WILSON", title: "Certified Public Accountant", email: "r.wilson@finance.com", phone: "+1 312 555 9900", location: "Chicago, IL", summary: "Detail-oriented CPA with 8 years of experience in financial reporting, tax planning, and forensic auditing. Proven ability to streamline accounting processes and ensure compliance with GAAP/IFRS standards. Trusted advisor to corporate clients on fiscal strategy." },
    experience: [
      { id: 1, role: "Audit Manager", company: "Financial Services LLP", date: "2019 - Present", desc: "• Manage financial audits for a portfolio of 15 mid-market clients with revenues exceeding $50M.\n• Supervise a team of 4 auditors, reviewing workpapers and ensuring audit quality.\n• Identified $200k in tax savings for a manufacturing client through R&D tax credit analysis.\n• Prepare consolidated financial statements in accordance with US GAAP." },
      { id: 2, role: "Senior Accountant", company: "Midwest Accounting Firm", date: "2016 - 2019", desc: "• Managed the full-cycle accounting process for 20 small business clients.\n• Reconciled general ledger accounts and prepared monthly variance analysis reports.\n• Assisted in the implementation of NetSuite ERP, migrating data from QuickBooks." },
      { id: 3, role: "Staff Accountant", company: "Local Tax Pros", date: "2014 - 2016", desc: "• Prepared individual and corporate tax returns during busy seasons.\n• Processed accounts payable and receivable for internal operations." }
    ],
    skills: { technical: ['QuickBooks', 'NetSuite', 'Excel (Advanced)', 'SAP', 'Tax Research'], soft: ['Attention to Detail', 'Integrity', 'Analytical Skills'] },
    awards: [{ id: 1, name: "Top Auditor 2020", issuer: "Financial Services LLP" }],
    projects: [{ id: 1, name: "ERP Implementation", desc: "Key stakeholder in the successful migration of firm-wide financial data to SAP." }],
    certifications: [{ id: 1, name: "Certified Public Accountant (CPA)", issuer: "AICPA" }, { id: 2, name: "Certified Internal Auditor", issuer: "IIA" }],
    education: [{ id: 1, degree: "M.S. Accounting", school: "University of Illinois", date: "2014" }]
  },
  design: {
    personal: { name: "OLIVIA TAYLOR", title: "Senior Product Designer", email: "olivia.design@creative.com", phone: "+1 213 555 7890", location: "Los Angeles, CA", summary: "Award-winning Product Designer with a passion for creating intuitive and visually stunning user experiences. Expert in the end-to-end design process, from user research and wireframing to high-fidelity prototyping and design systems. Proficient in Figma and Adobe Creative Suite." },
    experience: [
      { id: 1, role: "Senior Product Designer", company: "Creative Tech Agency", date: "2020 - Present", desc: "• Lead the design of a new fintech mobile app, achieving a 4.9-star rating on the App Store.\n• Establish and maintain the company's design system, improving design-to-dev handoff speed by 50%.\n• Facilitate design sprints and workshops with stakeholders to align on product vision.\n• Mentor 2 junior designers on UI principles and prototyping techniques." },
      { id: 2, role: "UI/UX Designer", company: "PrintShop Digital", date: "2017 - 2020", desc: "• Redesigned the e-commerce checkout flow, reducing cart abandonment by 15%.\n• Created high-fidelity prototypes in Figma for user testing and stakeholder presentations.\n• Designed marketing collateral, including social media assets and email templates." },
      { id: 3, role: "Graphic Design Intern", company: "Studio 54", date: "2016 - 2017", desc: "• Assisted in logo design and branding projects for local startups.\n• Edited photos and prepared assets for web and print." }
    ],
    skills: { technical: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'HTML/CSS'], soft: ['User Empathy', 'Creativity', 'Visual Storytelling'] },
    awards: [{ id: 1, name: "Best App Design 2021", issuer: "Awwwards" }, { id: 2, name: "Behance Featured", issuer: "2019" }],
    projects: [{ id: 1, name: "Eco-Friendly Dashboard", desc: "Designed a dashboard for tracking household carbon footprint." }],
    certifications: [{ id: 1, name: "Google UX Design Certificate", issuer: "Coursera" }],
    education: [{ id: 1, degree: "B.F.A. Graphic Design", school: "Rhode Island School of Design", date: "2017" }]
  },
  marketing: {
    personal: { name: "DANIEL GARCIA", title: "Digital Marketing Manager", email: "d.garcia@marketing.com", phone: "+1 305 555 1234", location: "Miami, FL", summary: "Data-driven Marketing Manager with 7 years of experience in digital strategy, SEO/SEM, and content marketing. Proven ability to scale brand awareness and drive lead generation through multi-channel campaigns. Skilled in analyzing campaign metrics to optimize ROI." },
    experience: [
      { id: 1, role: "Marketing Manager", company: "TechStartup Inc.", date: "2019 - Present", desc: "• Manage a $500k annual marketing budget, allocating spend across Google Ads, LinkedIn, and Facebook.\n• Developed an SEO strategy that increased organic website traffic by 150% in 12 months.\n• Launch and manage email marketing automation sequences using HubSpot, achieving a 25% open rate.\n• Coordinate product launches with sales and product teams to ensure consistent messaging." },
      { id: 2, role: "Social Media Specialist", company: "MediaGroup Agency", date: "2016 - 2019", desc: "• Managed social media accounts for 5 major consumer brands, growing total follower count by 200k.\n• Created viral video content for TikTok and Instagram Reels, generating 1M+ views.\n• Influencer marketing coordination, partnering with 20+ micro-influencers." },
      { id: 3, role: "Content Writer", company: "Freelance", date: "2015 - 2016", desc: "• Wrote blog posts and whitepapers for B2B technology clients.\n• Optimized content for search engines using keyword research tools." }
    ],
    skills: { technical: ['Google Analytics', 'Google Ads', 'HubSpot', 'SEO/SEM', 'Canva'], soft: ['Creativity', 'Copywriting', 'Analytics'] },
    awards: [{ id: 1, name: "Marketing Campaign of the Year", issuer: "AMA" }],
    projects: [{ id: 1, name: "Viral Brand Challenge", desc: "Executed a hashtag challenge on TikTok that generated 500k user-generated videos." }],
    certifications: [{ id: 1, name: "Google Ads Certification", issuer: "Google" }, { id: 2, name: "HubSpot Content Marketing", issuer: "HubSpot" }],
    education: [{ id: 1, degree: "B.A. Communications", school: "University of Southern California", date: "2016" }]
  }
};

const ResumeExamples = ({ onStart }) => {
  const [activeTab, setActiveTab] = useState('bi');
  
  // Get content and determine which template to render
  const activeContent = EXAMPLE_CONTENT[activeTab];
  // Map category IDs to specific Template IDs
  const activeTemplateId = CATEGORIES.find(c => c.id === activeTab)?.templateId || 'professional';

  return (
    <div className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      
      {/* Decorative Arrow Line */}
      {/* <svg className="absolute top-1/3 left-[28%] w-64 h-64 text-slate-300 hidden xl:block pointer-events-none" viewBox="0 0 200 200">
         <path d="M20,150 C50,200 150,200 180,150" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
         <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
            </marker>
         </defs>
      </svg> */}

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT SIDE: Heading & Categories */}
        <div className="lg:col-span-5 space-y-8 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Resume examples <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
                tailored for your job.
              </span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Our Certified Professional Résumé Writers have created over 1,700 in-depth guides and reviewed 10,000+ resumes across U.S. industries.
            </p>
            <button onClick={onStart} className="text-teal-600 font-bold text-lg hover:underline flex items-center gap-2 group">
              Browse all examples <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 group text-left ${
                  activeTab === cat.id 
                    ? 'bg-white shadow-xl ring-1 ring-slate-100 scale-[1.02]' 
                    : 'hover:bg-white hover:shadow-md'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${cat.bg} ${cat.color}`}>
                  <cat.icon size={20} />
                </div>
                <span className={`text-sm font-bold leading-tight ${activeTab === cat.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Dynamic Resume Preview Card */}
        <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            
            {/* The Resume Document Container */}
            <div className="bg-white w-full max-w-[500px] h-[700px] rounded-[20px] shadow-2xl border border-slate-100 relative overflow-hidden transition-all duration-500 group">
                
                {/* Using ResumePreview to render the ACTUAL template. 
                   Scaled down to fit the card container.
                */}
                <div className="w-[210mm] h-[297mm] origin-top-left transform scale-[0.6] sm:scale-[0.55] lg:scale-[0.60] p-0 bg-white pointer-events-none select-none">
                    <ResumePreview 
                        data={activeContent} 
                        template={activeTemplateId} 
                    />
                </div>

                {/* Floating "Use This Template" Overlay */}
                <div className="absolute inset-0 bg-slate-900/0 hover:bg-slate-900/10 transition-colors duration-300 flex items-end justify-center pb-8">
                    <button onClick={onStart} className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-teal-700 hover:scale-105 transition-all transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                        Use This Template
                    </button>
                </div>
            </div>

            {/* Background Glow for visual depth */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-teal-400/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </div>

      </div>
    </div>
  );
};

export default ResumeExamples;