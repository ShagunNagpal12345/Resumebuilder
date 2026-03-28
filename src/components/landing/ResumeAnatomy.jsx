import React, { useState } from 'react';

const ResumeAnatomy = () => {
  const [activePoint, setActivePoint] = useState(null);

  // Resume-specific hotspots
  const points = [
    {
      id: 1,
      top: '4%',
      left: '-20px',
      title: 'Professional Header',
      content: 'Clear name, title, and clickable contact links (LinkedIn/Portfolio). No full address needed, just City/State.'
    },
    {
      id: 2,
      top: '15%',
      left: '-20px',
      title: 'The "Hook" Summary',
      content: '3-4 lines summarizing your years of experience, key industries, and top 2 achievements. Ditch the "Objective".'
    },
    {
      id: 3,
      top: '26%',
      left: '-20px',
      title: 'Skills Section',
      content: 'ATS scanners look here first. List hard skills (tools, languages) relevant to the job description.'
    },
    {
      id: 4,
      top: '40%',
      left: '-20px',
      title: 'Action-Oriented Bullets',
      content: 'Start with strong verbs (Led, Built). Use the "X-Y-Z formula": Achieved [X] measured by [Y], by doing [Z].'
    },
    {
      id: 5,
      top: '55%',
      left: '-20px',
      title: 'Quantifiable Results',
      content: 'Numbers pop. "Increased revenue by 20%" is far stronger than "Responsible for sales".'
    },
    {
      id: 6,
      top: '70%',
      left: '-20px',
      title: 'Strategic Projects',
      content: 'Highlight specific initiatives where you applied your skills. This proves you can solve complex problems.'
    },
    {
      id: 7,
      top: '82%',
      left: '-20px',
      title: 'Education',
      content: 'Keep it brief. Degree, School, and Date. If you are experienced, move this to the bottom.'
    },
    {
      id: 8,
      top: '92%',
      left: '-20px',
      title: 'Awards & Certifications',
      content: 'External validation creates trust. List relevant certifications (PMP, AWS) and honors.'
    }
  ];

  // Helper to apply highlight styles
  const getHighlightClass = (id) => {
    if (activePoint === id) {
      // Highlight: Active
      return "bg-teal-50 ring-2 ring-teal-200 rounded-lg px-2 -mx-2 transition-all duration-300 shadow-sm relative z-10";
    }
    if (activePoint !== null && activePoint !== id) {
      // Blur: Inactive
      return "opacity-30 blur-[1px] transition-all duration-300";
    }
    // Default
    return "transition-all duration-300";
  };

  return (
    <div className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-teal-600 uppercase tracking-widest mb-3">Expert Advice</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-4">The Anatomy of a Winning Resume</h3>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Hover over the numbers to unlock the secrets of an ATS-friendly resume. Our builder ensures you hit every one of these points automatically.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Document Container (A4 Aspect Ratio) */}
          <div className="relative w-full max-w-3xl bg-white shadow-2xl rounded-sm border border-slate-200 aspect-[210/297] p-8 md:p-12 transform transition-all duration-500 hover:shadow-teal-100/50 font-sans text-slate-800 text-[10px] md:text-xs leading-relaxed">
            
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-[0.03] pointer-events-none"></div>

            {/* --- ACTUAL RESUME CONTENT --- */}
            
            {/* 1. Header Area */}
            <div className={`mb-5 text-center ${getHighlightClass(1)}`}>
              <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-1">POOJA BANSAL</h1>
              <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-2">Senior Product Manager</p>
              <div className="flex justify-center gap-3 text-slate-400 font-medium">
                <span>(555) 123-4567</span> • <span>POOJA@careerSENSE.com</span> • <span>linkedin.com/in/POOJA</span> • <span>New York, NY</span>
              </div>
              <div className="h-1 w-full bg-slate-100 mt-4 rounded-full"></div>
            </div>

            {/* 2. Summary */}
            <div className={`mb-5 ${getHighlightClass(2)}`}>
              <h4 className="text-teal-700 font-bold uppercase text-[10px] tracking-widest border-b border-teal-100 pb-1 mb-2">Professional Summary</h4>
              <p className="text-slate-600 text-justify">
                Results-oriented Product Manager with <strong>7+ years of experience</strong> driving product strategy for SaaS platforms. Proven track record of increasing user retention by <strong>25%</strong> through data-driven feature optimization. Expert in Agile methodologies, cross-functional leadership, and go-to-market execution.
              </p>
            </div>

            {/* 3. Skills */}
            <div className={`mb-5 ${getHighlightClass(3)}`}>
              <h4 className="text-teal-700 font-bold uppercase text-[10px] tracking-widest border-b border-teal-100 pb-1 mb-2">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {['Product Strategy', 'Agile/Scrum', 'Jira & Confluence', 'Data Analysis (SQL)', 'A/B Testing', 'Stakeholder Management', 'Roadmapping'].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-slate-100 rounded text-slate-700 font-bold text-[9px]">{skill}</span>
                ))}
              </div>
            </div>

            {/* 4. Experience (Highlights Bullets) */}
            <div className={`mb-5 ${getHighlightClass(4)}`}>
              <h4 className="text-teal-700 font-bold uppercase text-[10px] tracking-widest border-b border-teal-100 pb-1 mb-3">Professional Experience</h4>
              
              {/* Role 1 */}
              <div className="mb-4">
                <div className="flex justify-between font-bold text-slate-900 mb-1">
                    <span>Senior Product Manager</span>
                    <span>2020 - Present</span>
                </div>
                <div className="text-slate-500 italic mb-2">TechFlow Solutions</div>
                <ul className="list-disc ml-4 space-y-1 text-slate-600">
                    <li><strong>Spearheaded</strong> the launch of the "Analytics V2" module, resulting in a <strong>$1.5M increase</strong> in ARR within Q1.</li>
                    <li>Led a cross-functional team of 15 engineers and designers to reduce technical debt by 40%.</li>
                    {/* 5. Quantifiable Results Highlight */}
                    <li className={`${activePoint === 5 ? 'bg-yellow-100 ring-2 ring-yellow-200 rounded px-1' : ''} ${getHighlightClass(5)}`}>
                        Implemented new user onboarding flow, boosting activation rates by <strong>22%</strong> year-over-year.
                    </li>
                </ul>
              </div>

              {/* Role 2 */}
              <div>
                <div className="flex justify-between font-bold text-slate-900 mb-1">
                    <span>Product Owner</span>
                    <span>2017 - 2020</span>
                </div>
                <div className="text-slate-500 italic mb-2">CreativePulse Inc.</div>
                <ul className="list-disc ml-4 space-y-1 text-slate-600">
                    <li>Managed product roadmap for 3 enterprise clients valued at $500k+.</li>
                    <li>Reduced churn by 15% through proactive customer feedback loops.</li>
                </ul>
              </div>
            </div>

            {/* 6. Key Projects */}
            <div className={`mb-5 ${getHighlightClass(6)}`}>
              <h4 className="text-teal-700 font-bold uppercase text-[10px] tracking-widest border-b border-teal-100 pb-1 mb-2">Key Projects</h4>
              <div className="mb-2">
                <div className="flex justify-between font-bold text-slate-900 text-[10px]">
                    <span>AI-Driven Recommendation Engine</span>
                    <span className="italic font-normal text-slate-400">2023</span>
                </div>
                <p className="text-slate-600 mt-1">
                   Led the development of a machine learning model to suggest personalized content, increasing daily active users (DAU) by 18%.
                </p>
              </div>
            </div>

            {/* 7. Education */}
            <div className={`mb-5 ${getHighlightClass(7)}`}>
              <h4 className="text-teal-700 font-bold uppercase text-[10px] tracking-widest border-b border-teal-100 pb-1 mb-2">Education</h4>
              <div className="flex justify-between font-bold text-slate-900">
                  <span>MBA, Business Administration</span>
                  <span>2016</span>
              </div>
              <div className="text-slate-500 mb-1">Stern School of Business, NY</div>
            </div>

            {/* 8. Awards & Certifications */}
            <div className={`${getHighlightClass(8)}`}>
              <h4 className="text-teal-700 font-bold uppercase text-[10px] tracking-widest border-b border-teal-100 pb-1 mb-2">Awards & Certifications</h4>
              <div className="grid grid-cols-2 gap-4">
                  <div>
                      <div className="font-bold text-slate-900">Certified Scrum Product Owner (CSPO)</div>
                      <div className="text-slate-500 text-[9px]">Scrum Alliance • 2018</div>
                  </div>
                  <div>
                      <div className="font-bold text-slate-900">Innovator of the Year</div>
                      <div className="text-slate-500 text-[9px]">TechFlow Internal Awards • 2022</div>
                  </div>
              </div>
            </div>


            {/* --- INTERACTIVE HOTSPOTS --- */}
            {points.map((p) => (
              <div
                key={p.id}
                className="absolute z-20 group"
                style={{ top: p.top, left: p.left }}
                onMouseEnter={() => setActivePoint(p.id)}
                onMouseLeave={() => setActivePoint(null)}
              >
                {/* Number Circle */}
                <div className={`
                  w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center 
                  text-sm md:text-base font-bold shadow-lg cursor-pointer transition-all duration-300
                  ${activePoint === p.id 
                    ? 'bg-teal-600 text-white scale-110 ring-4 ring-teal-100' 
                    : 'bg-white text-teal-600 border-2 border-teal-100 hover:border-teal-600 hover:scale-105'}
                `}>
                  {p.id}
                </div>

                {/* Tooltip Content */}
                <div className={`
                  absolute left-14 top-1/2 -translate-y-1/2 w-64 md:w-80 bg-white p-5 rounded-xl shadow-2xl border border-teal-50 
                  transition-all duration-300 origin-left z-30 pointer-events-none font-sans
                  ${activePoint === p.id ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 -translate-x-4 hidden'}
                `}>
                  {/* Tooltip Arrow */}
                  <div className="absolute top-1/2 -left-2 w-4 h-4 bg-white border-l border-b border-teal-50 transform rotate-45 -translate-y-1/2"></div>
                  
                  <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded text-xs">#{p.id}</span> {p.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {p.content}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnatomy;