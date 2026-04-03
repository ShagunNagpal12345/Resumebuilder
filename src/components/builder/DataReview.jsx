import React, { useMemo, useState } from 'react';
import {
  User,
  Briefcase,
  GraduationCap,
  Cpu,
  FileText,
  CheckCircle2,
  ArrowRight,
  Plus,
  Trash2,
  Zap,
  Brain,
  Layers,
} from 'lucide-react';
import BuilderProgress from './BuilderProgress';
import { getResumeInsights } from '../../utils/resumeInsights';

const STEPS = [
  { id: 'personal', label: 'Header', icon: User, description: "Let's start with your contact info." },
  { id: 'experience', label: 'Experience', icon: Briefcase, description: 'Check each role, company, and achievement.' },
  { id: 'education', label: 'Education', icon: GraduationCap, description: 'Make sure schools, degrees, and dates are accurate.' },
  { id: 'skills', label: 'Skills', icon: Cpu, description: 'Review the way your skills are grouped and presented.' },
  { id: 'projects', label: 'Projects', icon: Layers, description: 'Highlight the projects you want employers to notice.' },
  { id: 'summary', label: 'Summary', icon: FileText, description: 'Finish with the strongest version of your professional story.' },
];

const SidebarItem = ({ step, index, activeIndex, onClick }) => {
  const isActive = index === activeIndex;
  const isCompleted = index < activeIndex;
  const Icon = step.icon;

  return (
    <button
      onClick={() => onClick(index)}
      className={`group w-full rounded-2xl border px-4 py-4 text-left transition-all ${
        isActive
          ? 'border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-50 shadow-sm'
          : isCompleted
            ? 'border-emerald-200 bg-emerald-50/80'
            : 'border-slate-200 bg-white/75 hover:border-slate-300 hover:bg-white'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
            isActive
              ? 'bg-white text-teal-700 shadow-sm'
              : isCompleted
                ? 'bg-white text-emerald-600'
                : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
          }`}
        >
          {isCompleted ? <CheckCircle2 size={18} /> : <Icon size={18} />}
        </div>
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
              Step {index + 1}
            </span>
            {isActive && (
              <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.22em] text-teal-700">
                Active
              </span>
            )}
          </div>
          <div className={`text-sm font-bold ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>{step.label}</div>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">{step.description}</p>
        </div>
      </div>
    </button>
  );
};

const FormInput = ({ label, value, onChange, placeholder, half = false }) => (
  <div className={`${half ? 'col-span-1' : 'col-span-2'}`}>
    <label className="mb-2 ml-1 block text-xs font-black uppercase tracking-[0.22em] text-slate-500">{label}</label>
    <input
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 font-medium outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
    />
  </div>
);

const FormTextArea = ({ label, value, onChange, placeholder }) => (
  <div className="col-span-2">
    <label className="mb-2 ml-1 block text-xs font-black uppercase tracking-[0.22em] text-slate-500">{label}</label>
    <textarea
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="h-32 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 font-medium outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
    />
  </div>
);

const ReviewMetricCard = ({ label, value, helper }) => (
  <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 shadow-sm">
    <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">{label}</div>
    <div className="mt-2 text-2xl font-black tracking-tight text-slate-900">{value}</div>
    <div className="mt-1 text-xs leading-relaxed text-slate-500">{helper}</div>
  </div>
);

const normalizeSkillList = (value) =>
  (Array.isArray(value) ? value : [])
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter(Boolean);

const mergeSkillLists = (...lists) => {
  const seen = new Set();

  return lists
    .flatMap((list) => normalizeSkillList(list))
    .filter((item) => {
      const key = item.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
};

const DataReview = ({ extractedData, onComplete, importMode = 'ai-enhanced' }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(() => {
    const mergedCoreSkills = mergeSkillLists(extractedData?.skills?.core, extractedData?.skills?.soft);

    return {
      ...(extractedData || {}),
      skills: {
        ...(extractedData?.skills || {}),
        technical: normalizeSkillList(extractedData?.skills?.technical),
        core: mergedCoreSkills,
        soft: mergedCoreSkills,
      },
    };
  });

  const currentStep = STEPS[activeStep];
  const isVerbatimImport = importMode === 'verbatim';
  const completionLabel = isVerbatimImport ? 'Open Builder' : 'Continue to Templates';
  const insights = useMemo(() => getResumeInsights(formData), [formData]);

  const updatePersonal = (field, value) => {
    setFormData((prev) => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
  };

  const updateList = (section, index, field, value) => {
    const newList = [...(formData[section] || [])];
    newList[index] = { ...newList[index], [field]: value };
    setFormData((prev) => ({ ...prev, [section]: newList }));
  };

  const addListItem = (section) => {
    const defaults = {
      experience: { id: Date.now(), role: '', company: '', date: '', desc: '' },
      education: { id: Date.now(), degree: '', school: '', date: '' },
      projects: { id: Date.now(), name: '', desc: '' },
    };
    setFormData((prev) => ({ ...prev, [section]: [...(prev[section] || []), defaults[section]] }));
  };

  const removeListItem = (section, index) => {
    const newList = [...formData[section]];
    newList.splice(index, 1);
    setFormData((prev) => ({ ...prev, [section]: newList }));
  };

  const handleNext = () => {
    if (activeStep < STEPS.length - 1) {
      setActiveStep((prev) => prev + 1);
      return;
    }

    onComplete(formData);
  };

  const metricCards = [
    {
      label: 'Summary Lines',
      value: insights.summaryLines,
      helper: isVerbatimImport ? 'Imported line by line from your source.' : 'Captured into your editable profile.',
    },
    {
      label: 'Roles Found',
      value: insights.experienceCount,
      helper: 'Work experiences ready to review and refine.',
    },
    {
      label: 'Skills Captured',
      value: insights.totalSkillCount,
      helper: 'Technical and core skills grouped for templates.',
    },
    {
      label: 'Projects + Extras',
      value: insights.projectCount + insights.certificationCount + insights.awardCount,
      helper: 'Projects, certifications, and awards combined.',
    },
  ];

  return (
    <div className="theme-app-shell min-h-screen bg-[radial-gradient(circle_at_top,#f0fdfa,transparent_32%),linear-gradient(180deg,#eef5f7_0%,#f8fafc_40%,#f8fafc_100%)] font-sans text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col gap-6 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <BuilderProgress current="review" />

        <div className="grid gap-6 xl:grid-cols-[320px,1fr]">
          <aside className="xl:sticky xl:top-6 xl:self-start">
            <div className="theme-strong-panel overflow-hidden rounded-[2rem] shadow-2xl">
              <div className="border-b border-[color:var(--theme-strong-border)] px-6 py-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--theme-accent-soft)] text-[color:var(--theme-accent)]">
                    <FileText size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.28em] text-[color:var(--theme-accent)]">Import Review</div>
                    <div className="text-xl font-black tracking-tight text-[color:var(--theme-strong-text)]">Validate Your Resume</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[color:var(--theme-text-secondary)]">
                  {isVerbatimImport
                    ? 'We preserved your original wording. This is the best place to confirm structure before styling.'
                    : 'Your AI-strengthened draft is ready. Review the content and keep full control before choosing a template.'}
                </p>
              </div>

              <div className="px-6 py-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--theme-text-muted)]">Readiness</div>
                  <div className="rounded-full bg-[color:var(--theme-accent-soft)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--theme-accent)]">
                    {insights.readinessScore}% ready
                  </div>
                </div>
                <div className="mb-6 h-2 overflow-hidden rounded-full bg-[color:var(--theme-surface-subtle)]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 transition-all"
                    style={{ width: `${insights.readinessScore}%` }}
                  />
                </div>
                <div className="space-y-3">
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

              <div className="border-t border-[color:var(--theme-strong-border)] bg-white/30 px-6 py-5">
                <div className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--theme-text-muted)]">
                  Step {activeStep + 1} of {STEPS.length}
                </div>
                <div className="text-sm font-semibold text-[color:var(--theme-strong-text)]">{currentStep.description}</div>
              </div>
            </div>
          </aside>

          <main className="space-y-6">
            <section className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-sm shadow-slate-200/70 backdrop-blur sm:p-8">
              <div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr] xl:items-end">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] ${
                      isVerbatimImport
                        ? 'bg-teal-50 text-teal-700'
                        : 'bg-blue-50 text-blue-700'
                    }`}>
                      {isVerbatimImport ? 'Exact Import Mode' : 'AI Optimized Mode'}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                      Everything stays editable
                    </span>
                  </div>
                  <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                    Your resume is ready for a clean quality check.
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                    Review what we captured, adjust anything that needs attention, and then move into template styling with confidence.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50 p-5">
                  <div className="mb-2 flex items-center gap-2 text-sm font-black text-teal-800">
                    <Brain size={18} />
                    What this step protects
                  </div>
                  <p className="text-sm leading-relaxed text-teal-900/80">
                    Accurate review here means better template rendering, cleaner live editing, and fewer fixes later in the builder.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metricCards.map((card) => (
                  <ReviewMetricCard
                    key={card.label}
                    label={card.label}
                    value={card.value}
                    helper={card.helper}
                  />
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-slate-200/70 sm:p-8 lg:p-10">
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.28em] text-teal-600">Currently Editing</div>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">{currentStep.label}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Review the extracted content below and make any adjustments you want before moving forward.
                  </p>
                </div>
                <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-slate-500">
                  {activeStep + 1} / {STEPS.length}
                </div>
              </div>

              {activeStep === 0 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormInput label="Full Name" value={formData.personal?.name} onChange={(v) => updatePersonal('name', v)} placeholder="e.g. John Doe" />
                  <FormInput label="Job Title" value={formData.personal?.title} onChange={(v) => updatePersonal('title', v)} placeholder="e.g. Product Manager" />
                  <div className="col-span-1 h-px bg-slate-100 sm:col-span-2" />
                  <FormInput label="Email" value={formData.personal?.email} onChange={(v) => updatePersonal('email', v)} placeholder="john@example.com" half />
                  <FormInput label="Phone" value={formData.personal?.phone} onChange={(v) => updatePersonal('phone', v)} placeholder="+1 555 000 0000" half />
                  <FormInput label="Location" value={formData.personal?.location} onChange={(v) => updatePersonal('location', v)} placeholder="New York, USA" />
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-8">
                  {formData.experience?.map((exp, i) => (
                    <div
                      key={i}
                      className="group relative rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-6 transition-all hover:border-teal-200 hover:bg-white hover:shadow-md"
                    >
                      <button
                        onClick={() => removeListItem('experience', i)}
                        className="absolute -right-3 -top-3 rounded-full border border-slate-200 bg-white p-2 text-rose-500 opacity-0 shadow-md transition-all hover:bg-rose-50 group-hover:opacity-100"
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <FormInput label="Job Title" value={exp.role} onChange={(v) => updateList('experience', i, 'role', v)} placeholder="e.g. Senior Analyst" />
                        <FormInput label="Employer" value={exp.company} onChange={(v) => updateList('experience', i, 'company', v)} placeholder="e.g. Google" />
                        <FormInput label="Date Range" value={exp.date} onChange={(v) => updateList('experience', i, 'date', v)} placeholder="e.g. 2020 - Present" />
                        <FormTextArea label="Description" value={exp.desc} onChange={(v) => updateList('experience', i, 'desc', v)} placeholder="• Achievements..." />
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => addListItem('experience')}
                    className="flex w-full items-center justify-center gap-2 rounded-[1.5rem] border-2 border-dashed border-slate-200 py-4 font-bold text-slate-500 transition-all hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
                  >
                    <Plus size={20} /> Add Position
                  </button>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-8">
                  {formData.education?.map((edu, i) => (
                    <div
                      key={i}
                      className="group relative rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-6 transition-all hover:border-teal-200 hover:bg-white hover:shadow-md"
                    >
                      <button
                        onClick={() => removeListItem('education', i)}
                        className="absolute -right-3 -top-3 rounded-full border border-slate-200 bg-white p-2 text-rose-500 opacity-0 shadow-md transition-all hover:bg-rose-50 group-hover:opacity-100"
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <FormInput label="School Name" value={edu.school} onChange={(v) => updateList('education', i, 'school', v)} placeholder="e.g. Harvard University" />
                        <FormInput label="Degree" value={edu.degree} onChange={(v) => updateList('education', i, 'degree', v)} placeholder="e.g. Bachelors in Science" />
                        <FormInput label="Graduation Date" value={edu.date} onChange={(v) => updateList('education', i, 'date', v)} placeholder="e.g. May 2019" />
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => addListItem('education')}
                    className="flex w-full items-center justify-center gap-2 rounded-[1.5rem] border-2 border-dashed border-slate-200 py-4 font-bold text-slate-500 transition-all hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
                  >
                    <Plus size={20} /> Add Education
                  </button>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-start gap-3 rounded-[1.5rem] border border-teal-100 bg-gradient-to-r from-teal-50 to-emerald-50 p-4 text-sm text-teal-900">
                    <Brain className="mt-0.5 shrink-0" size={18} />
                    <p className="leading-relaxed">
                      {isVerbatimImport
                        ? 'We mapped the skills exactly from your uploaded resume. Review the grouping and rename any bucket if you want.'
                        : 'Your skills were grouped from the AI-optimized draft. Fine-tune the wording or regroup items before styling.'}
                    </p>
                  </div>
                  <FormTextArea
                    label="Technical Skills"
                    value={formData.skills?.technical?.join(', ')}
                    onChange={(v) => setFormData((prev) => ({
                      ...prev,
                      skills: {
                        ...prev.skills,
                        technical: v.split(',').map((item) => item.trim()).filter(Boolean),
                      },
                    }))}
                    placeholder="Python, Java, React..."
                  />
                  <FormTextArea
                    label="Core / Soft Skills"
                    value={formData.skills?.core?.join(', ')}
                    onChange={(v) => {
                      const nextSkills = v.split(',').map((item) => item.trim()).filter(Boolean);
                      setFormData((prev) => ({
                        ...prev,
                        skills: {
                          ...prev.skills,
                          core: nextSkills,
                          soft: nextSkills,
                        },
                      }));
                    }}
                    placeholder="Leadership, Communication..."
                  />
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-8">
                  {formData.projects?.map((proj, i) => (
                    <div
                      key={i}
                      className="group relative rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-6 transition-all hover:border-teal-200 hover:bg-white hover:shadow-md"
                    >
                      <button
                        onClick={() => removeListItem('projects', i)}
                        className="absolute -right-3 -top-3 rounded-full border border-slate-200 bg-white p-2 text-rose-500 opacity-0 shadow-md transition-all hover:bg-rose-50 group-hover:opacity-100"
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <FormInput label="Project Name" value={proj.name} onChange={(v) => updateList('projects', i, 'name', v)} />
                        <FormTextArea label="Details" value={proj.desc} onChange={(v) => updateList('projects', i, 'desc', v)} />
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => addListItem('projects')}
                    className="flex w-full items-center justify-center gap-2 rounded-[1.5rem] border-2 border-dashed border-slate-200 py-4 font-bold text-slate-500 transition-all hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
                  >
                    <Plus size={20} /> Add Project
                  </button>
                </div>
              )}

              {activeStep === 5 && (
                <div>
                  <div className="mb-8 flex items-center gap-4 rounded-[1.75rem] border border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 text-emerald-900">
                    <div className="rounded-full bg-white p-3 shadow-sm">
                      <CheckCircle2 size={24} className="text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Almost Done</h3>
                      <p className="mt-1 text-sm leading-relaxed opacity-80">
                        {isVerbatimImport
                          ? 'This draft keeps your original wording. Give the summary one last check, then move into the visual builder.'
                          : 'Your AI-improved draft is ready. Review the summary, then choose the template that fits your style.'}
                      </p>
                    </div>
                  </div>
                  <FormTextArea
                    label="Professional Summary"
                    value={formData.personal?.summary}
                    onChange={(v) => updatePersonal('summary', v)}
                    placeholder="Write a short summary of your career..."
                  />
                </div>
              )}

              <footer className="mt-10 flex flex-col-reverse items-stretch justify-between gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="w-full rounded-full border border-slate-300 px-8 py-3 font-bold text-slate-500 transition-all hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50 disabled:hover:bg-transparent sm:w-auto"
                >
                  Back
                </button>

                <button
                  onClick={handleNext}
                  className="theme-primary-button flex w-full items-center justify-center gap-2 rounded-full px-10 py-3 font-bold transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-600/25 sm:w-auto"
                >
                  {activeStep === STEPS.length - 1 ? (
                    <>
                      {completionLabel} <Zap size={18} fill="currentColor" className="text-yellow-200" />
                    </>
                  ) : (
                    <>
                      Continue <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </footer>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DataReview;
