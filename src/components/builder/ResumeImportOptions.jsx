import React from 'react';
import { ArrowLeft, ArrowRight, Brain, FileText, ShieldCheck, Sparkles } from 'lucide-react';

const OptionCard = ({ title, subtitle, description, icon: Icon, accentClasses, features, onClick }) => (
  <button
    onClick={onClick}
    className="theme-section-glass group relative rounded-[2rem] p-1 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--theme-border-strong)]"
  >
    <div className="theme-section-surface h-full rounded-[1.7rem] p-7 sm:p-8">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className={`inline-flex rounded-2xl border p-3 shadow-lg ${accentClasses}`}>
          <Icon size={24} />
        </div>
        <span className="rounded-full border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-subtle)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--theme-text-secondary)]">
          {subtitle}
        </span>
      </div>

      <h2 className="text-2xl font-black text-[color:var(--theme-text-primary)] tracking-tight mb-3">{title}</h2>
      <p className="text-sm leading-7 text-[color:var(--theme-text-secondary)] mb-6">{description}</p>

      <div className="space-y-3 mb-8">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm text-[color:var(--theme-text-secondary)]">
            <ShieldCheck size={16} className="text-teal-400 shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="theme-primary-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.2em] transition-all group-hover:gap-3">
        Choose This Import
        <ArrowRight size={16} />
      </div>
    </div>
  </button>
);

const ResumeImportOptions = ({ file, onBack, onSelectOption }) => {
  const fileName = file?.name || 'Uploaded Resume';

  return (
    <div className="theme-app-shell min-h-screen px-4 py-8 sm:px-6 sm:py-10 font-sans relative overflow-hidden">
      <div className="theme-grid-overlay absolute inset-0 pointer-events-none" />
      <div className="absolute -top-24 left-[-10%] w-[420px] h-[420px] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 right-[-10%] w-[420px] h-[420px] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--theme-text-secondary)] transition-colors hover:text-[color:var(--theme-text-primary)]"
        >
          <ArrowLeft size={14} />
          Back
        </button>

        <div className="mb-10 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-teal-700">
            <Sparkles size={12} />
            Resume Import Mode
          </div>
          <h1 className="mb-4 text-4xl sm:text-5xl font-black tracking-tight text-[color:var(--theme-text-primary)]">
            Choose How We Process
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">
              {fileName}
            </span>
          </h1>
          <p className="text-base sm:text-lg leading-8 text-[color:var(--theme-text-secondary)]">
            You can either keep the resume wording exactly as it appears in the uploaded file, or let AI create a stronger version before the fields open for manual editing.
          </p>
        </div>

        <div className="theme-section-glass mb-10 flex flex-col gap-2 rounded-[1.7rem] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <div className="mb-1 text-[10px] font-black uppercase tracking-[0.24em] text-[color:var(--theme-text-muted)]">Selected File</div>
            <div className="text-sm sm:text-base font-bold text-[color:var(--theme-text-primary)]">{fileName}</div>
          </div>
          <div className="text-xs text-[color:var(--theme-text-secondary)]">
            Both options take you to the same editor afterward.
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <OptionCard
            title="Exact Import"
            subtitle="No AI Rewrite"
            description="We extract your resume into the form fields as closely as possible to the original wording and line structure. Nothing gets strengthened or rewritten by AI."
            icon={FileText}
            accentClasses="border-emerald-200 bg-emerald-50 text-emerald-700"
            features={[
              'Keeps your original resume wording',
              'Best for redesigning layout without changing content',
              'You can still edit every field manually afterward',
            ]}
            onClick={() => onSelectOption('verbatim')}
          />

          <OptionCard
            title="AI Optimized Import"
            subtitle="Smarter Rewrite"
            description="AI extracts the resume details, improves the summary and bullet points, and gives you a stronger draft before you make your own manual edits."
            icon={Brain}
            accentClasses="border-blue-200 bg-blue-50 text-blue-700"
            features={[
              'Improves bullet points and summary automatically',
              'Best when you want stronger content fast',
              'You can review and change everything manually afterward',
            ]}
            onClick={() => onSelectOption('ai-enhanced')}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeImportOptions;
