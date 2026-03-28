import React, { useState } from 'react';
import { 
  User, Briefcase, GraduationCap, Cpu, FileText, 
  CheckCircle2, ChevronRight, ArrowLeft, ArrowRight, Plus, Trash2, Zap, MapPin, Calendar, Globe, Award
} from 'lucide-react';
import { enhanceResumeData } from '../../services/groqService';

// --- CONFIGURATION ---
const STEPS = [
  { id: 'personal', label: 'Header', icon: User, description: "Let's start with your contact info." },
  { id: 'experience', label: 'Experience', icon: Briefcase, description: "Tell us about your work history." },
  { id: 'education', label: 'Education', icon: GraduationCap, description: "Where did you study?" },
  { id: 'skills', label: 'Skills', icon: Cpu, description: "What are your top strengths?" },
  { id: 'projects', label: 'Projects', icon: FileText, description: "Highlight key projects." },
  { id: 'summary', label: 'Summary', icon: FileText, description: "Your professional elevator pitch." },
];

// --- UI COMPONENTS ---
const SidebarItem = ({ step, index, activeIndex, onClick }) => {
  const isActive = index === activeIndex;
  const isCompleted = index < activeIndex;

  return (
    <button 
      onClick={() => onClick(index)}
      className="flex items-center gap-4 w-full text-left group"
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all shrink-0 z-10 ${isActive ? 'bg-white border-white text-blue-900' : isCompleted ? 'bg-green-500 border-green-500 text-white' : 'border-slate-500 text-slate-400 bg-transparent'}`}>
        {isCompleted ? <CheckCircle2 size={16} /> : <span className="text-xs font-bold">{index + 1}</span>}
      </div>
      <span className={`text-sm font-bold tracking-wide transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
        {step.label}
      </span>
    </button>
  );
};

const FormInput = ({ label, value, onChange, placeholder, half = false }) => (
  <div className={`${half ? 'col-span-1' : 'col-span-2'}`}>
    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">{label}</label>
    <input 
      value={value || ''} 
      onChange={(e) => onChange(e.target.value)} 
      placeholder={placeholder}
      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
    />
  </div>
);

const FormTextArea = ({ label, value, onChange, placeholder }) => (
  <div className="col-span-2">
    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">{label}</label>
    <textarea 
      value={value || ''} 
      onChange={(e) => onChange(e.target.value)} 
      placeholder={placeholder}
      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none h-32 resize-none"
    />
  </div>
);

// --- MAIN COMPONENT ---
const DataReview = ({ extractedData, onComplete }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(extractedData || {});
  const [isEnhancing, setIsEnhancing] = useState(false);

  const currentStep = STEPS[activeStep];

  // Helper to update nested state
  const updatePersonal = (field, value) => {
    setFormData(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
  };

  const updateList = (section, index, field, value) => {
    const newList = [...(formData[section] || [])];
    newList[index] = { ...newList[index], [field]: value };
    setFormData(prev => ({ ...prev, [section]: newList }));
  };

  const addListItem = (section) => {
    const defaults = {
      experience: { id: Date.now(), role: '', company: '', date: '', desc: '' },
      education: { id: Date.now(), degree: '', school: '', date: '' },
      projects: { id: Date.now(), name: '', desc: '' }
    };
    setFormData(prev => ({ ...prev, [section]: [...(prev[section] || []), defaults[section]] }));
  };

  const removeListItem = (section, index) => {
    const newList = [...formData[section]];
    newList.splice(index, 1);
    setFormData(prev => ({ ...prev, [section]: newList }));
  };

  const handleNext = async () => {
    if (activeStep < STEPS.length - 1) {
      setActiveStep(prev => prev + 1);
    } else {
      // Final Step: Enhance & Finish
      setIsEnhancing(true);
      try {
        const enhanced = await enhanceResumeData(formData);
        onComplete(enhanced);
      } catch (err) {
        console.error("Enhancement failed, using raw data", err);
        onComplete(formData);
      } finally {
        setIsEnhancing(false);
      }
    }
  };

  if (isEnhancing) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
            <div className="relative">
                <div className="w-24 h-24 border-4 border-blue-100 rounded-full animate-spin border-t-blue-600"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="text-blue-600 fill-blue-600 animate-pulse" size={32} />
                </div>
            </div>
            <h2 className="mt-8 text-2xl font-black text-slate-900">Polishing Your Profile</h2>
            <p className="text-slate-500 mt-2">Our AI is rewriting descriptions and fixing grammar...</p>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex font-sans text-slate-900">
      
      {/* --- LEFT SIDEBAR --- */}
      <aside className="w-72 bg-[#1e204d] text-white flex flex-col shrink-0 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="p-8 relative z-10">
            <div className="flex items-center gap-2 mb-12">
                <FileText className="text-blue-400" />
                <span className="font-bold text-lg tracking-tight">Review Data</span>
            </div>

            <div className="space-y-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-700 -z-0"></div>
                
                {STEPS.map((step, idx) => (
                    <SidebarItem 
                        key={step.id} 
                        step={step} 
                        index={idx} 
                        activeIndex={activeStep} 
                        onClick={setActiveStep} 
                    />
                ))}
            </div>
        </div>

        <div className="mt-auto p-8 border-t border-white/10 relative z-10">
            <p className="text-xs text-slate-400 leading-relaxed">
                Step {activeStep + 1} of {STEPS.length}:<br/>
                <span className="text-white font-bold">{currentStep.description}</span>
            </p>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50">
        
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 px-12 flex items-center justify-between shrink-0">
            <div>
                <h1 className="text-2xl font-black text-slate-900">{currentStep.label}</h1>
                <p className="text-sm text-slate-500">Review the extracted data below.</p>
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                AI Extracted • Needs Verification
            </div>
        </header>

        {/* Scrollable Form Area */}
        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
                
                {/* 1. PERSONAL INFO */}
                {activeStep === 0 && (
                    <div className="grid grid-cols-2 gap-6">
                        <FormInput label="Full Name" value={formData.personal?.name} onChange={(v) => updatePersonal('name', v)} placeholder="e.g. John Doe" />
                        <FormInput label="Job Title" value={formData.personal?.title} onChange={(v) => updatePersonal('title', v)} placeholder="e.g. Product Manager" />
                        
                        <div className="col-span-2 h-px bg-slate-100 my-2"></div>
                        
                        <FormInput label="Email" value={formData.personal?.email} onChange={(v) => updatePersonal('email', v)} placeholder="john@example.com" half />
                        <FormInput label="Phone" value={formData.personal?.phone} onChange={(v) => updatePersonal('phone', v)} placeholder="+1 555 000 0000" half />
                        <FormInput label="Location" value={formData.personal?.location} onChange={(v) => updatePersonal('location', v)} placeholder="New York, USA" />
                    </div>
                )}

                {/* 2. EXPERIENCE */}
                {activeStep === 1 && (
                    <div className="space-y-8">
                        {formData.experience?.map((exp, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group transition-all hover:shadow-md hover:border-blue-200">
                                <button onClick={() => removeListItem('experience', i)} className="absolute -top-3 -right-3 bg-white text-rose-500 p-2 rounded-full shadow-md border border-slate-100 opacity-0 group-hover:opacity-100 transition-all hover:bg-rose-50"><Trash2 size={16}/></button>
                                <div className="grid grid-cols-2 gap-6">
                                    <FormInput label="Job Title" value={exp.role} onChange={(v) => updateList('experience', i, 'role', v)} placeholder="e.g. Senior Analyst" />
                                    <FormInput label="Employer" value={exp.company} onChange={(v) => updateList('experience', i, 'company', v)} placeholder="e.g. Google" />
                                    <FormInput label="Date Range" value={exp.date} onChange={(v) => updateList('experience', i, 'date', v)} placeholder="e.g. 2020 - Present" />
                                    <FormTextArea label="Description" value={exp.desc} onChange={(v) => updateList('experience', i, 'desc', v)} placeholder="• Achievements..." />
                                </div>
                            </div>
                        ))}
                        <button onClick={() => addListItem('experience')} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                            <Plus size={20} /> Add Position
                        </button>
                    </div>
                )}

                {/* 3. EDUCATION */}
                {activeStep === 2 && (
                    <div className="space-y-8">
                        {formData.education?.map((edu, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group transition-all hover:shadow-md hover:border-blue-200">
                                <button onClick={() => removeListItem('education', i)} className="absolute -top-3 -right-3 bg-white text-rose-500 p-2 rounded-full shadow-md border border-slate-100 opacity-0 group-hover:opacity-100 transition-all hover:bg-rose-50"><Trash2 size={16}/></button>
                                <div className="grid grid-cols-2 gap-6">
                                    <FormInput label="School Name" value={edu.school} onChange={(v) => updateList('education', i, 'school', v)} placeholder="e.g. Harvard University" />
                                    <FormInput label="Degree" value={edu.degree} onChange={(v) => updateList('education', i, 'degree', v)} placeholder="e.g. Bachelors in Science" />
                                    <FormInput label="Graduation Date" value={edu.date} onChange={(v) => updateList('education', i, 'date', v)} placeholder="e.g. May 2019" />
                                </div>
                            </div>
                        ))}
                        <button onClick={() => addListItem('education')} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                            <Plus size={20} /> Add Education
                        </button>
                    </div>
                )}

                {/* 4. SKILLS */}
                {activeStep === 3 && (
                    <div className="space-y-6">
                        <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3 text-blue-800 text-sm mb-6">
                            <Zap className="shrink-0 mt-0.5" size={18}/>
                            <p>Our AI has grouped your skills. Please verify them below.</p>
                        </div>
                        <FormTextArea label="Technical Skills" value={formData.skills?.technical?.join(', ')} onChange={(v) => setFormData(prev => ({...prev, skills: {...prev.skills, technical: v.split(',')}}))} placeholder="Python, Java, React..." />
                        <FormTextArea label="Soft Skills" value={formData.skills?.core?.join(', ')} onChange={(v) => setFormData(prev => ({...prev, skills: {...prev.skills, core: v.split(',')}}))} placeholder="Leadership, Communication..." />
                    </div>
                )}

                {/* 5. PROJECTS */}
                {activeStep === 4 && (
                    <div className="space-y-8">
                        {formData.projects?.map((proj, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group">
                                <button onClick={() => removeListItem('projects', i)} className="absolute -top-3 -right-3 bg-white text-rose-500 p-2 rounded-full shadow-md border border-slate-100 opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16}/></button>
                                <div className="grid grid-cols-2 gap-6">
                                    <FormInput label="Project Name" value={proj.name} onChange={(v) => updateList('projects', i, 'name', v)} />
                                    <FormTextArea label="Details" value={proj.desc} onChange={(v) => updateList('projects', i, 'desc', v)} />
                                </div>
                            </div>
                        ))}
                        <button onClick={() => addListItem('projects')} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                            <Plus size={20} /> Add Project
                        </button>
                    </div>
                )}

                {/* 6. SUMMARY */}
                {activeStep === 5 && (
                    <div>
                        <div className="bg-emerald-50 p-6 rounded-2xl flex items-center gap-4 text-emerald-800 mb-8 border border-emerald-100">
                            <div className="bg-white p-3 rounded-full shadow-sm"><CheckCircle2 size={24} className="text-emerald-500"/></div>
                            <div>
                                <h3 className="font-bold text-lg">Almost Done!</h3>
                                <p className="text-sm opacity-80">Review your summary. On the next step, our AI will polish everything.</p>
                            </div>
                        </div>
                        <FormTextArea label="Professional Summary" value={formData.personal?.summary} onChange={(v) => updatePersonal('summary', v)} placeholder="Write a short summary of your career..." />
                    </div>
                )}

            </div>
        </div>

        {/* Footer Navigation */}
        <footer className="h-24 bg-white border-t border-slate-200 px-12 flex items-center justify-between shrink-0">
            <button 
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="px-8 py-3 rounded-full font-bold text-slate-500 border border-slate-300 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50 disabled:hover:bg-transparent transition-all"
            >
                Back
            </button>

            <button 
                onClick={handleNext}
                className="px-10 py-3 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-600/30 transition-all flex items-center gap-2"
            >
                {activeStep === STEPS.length - 1 ? (
                    <>Generate Resume <Zap size={18} fill="currentColor" className="text-yellow-300"/></>
                ) : (
                    <>Continue <ArrowRight size={18}/></>
                )}
            </button>
        </footer>

      </main>
    </div>
  );
};

export default DataReview;