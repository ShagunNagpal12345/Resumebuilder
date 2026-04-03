import React, { useState } from 'react';
import {
  ArrowRight,
  Brain,
  Cpu,
  Maximize2,
  Minimize2,
  PenTool,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Target,
  UploadCloud,
  X,
  Youtube,
} from 'lucide-react';
import resumeVideo from '../../assets/Resume.mp4';
import resumeJdVideo from '../../assets/Resume&JD.mp4';

const FeatureItem = ({ text }) => (
  <div className="flex items-center gap-2 text-[11px] text-[color:var(--theme-text-secondary)]">
    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
    <span>{text}</span>
  </div>
);

const TierBadge = ({ tier }) => {
  const styles = {
    free: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    premium: 'border-blue-200 bg-blue-50 text-blue-700',
    exclusive: 'border-amber-200 bg-amber-50 text-amber-700',
  };

  const className = styles[tier?.toLowerCase()];
  if (!className) return null;

  return (
    <span className={`rounded-full border px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.22em] ${className}`}>
      {tier}
    </span>
  );
};

const VideoModal = ({ src, onClose }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  if (!src) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[color:var(--theme-surface-glass)] p-4 backdrop-blur-md md:p-6">
      <div
        className={`theme-section-surface relative flex overflow-hidden rounded-[2rem] transition-all duration-300 ${
          isMaximized ? 'h-full w-full' : 'aspect-video w-full max-w-5xl'
        }`}
      >
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-subtle)] px-5 py-3">
          <div className="flex items-center gap-2 text-[color:var(--theme-accent)]">
            <PlayCircle size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--theme-text-secondary)]">
              Feature Demonstration
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMaximized((current) => !current)}
              className="rounded-lg p-1.5 text-[color:var(--theme-text-secondary)] transition-colors hover:bg-[color:var(--theme-surface-solid)] hover:text-[color:var(--theme-text-primary)]"
              title={isMaximized ? 'Minimize video' : 'Maximize video'}
            >
              {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-[color:var(--theme-surface-solid)] p-1.5 text-[color:var(--theme-text-secondary)] transition-colors hover:bg-rose-500/10 hover:text-rose-500"
              title="Close video"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="relative flex-1 bg-black pt-[58px]">
          <video src={src} controls autoPlay className="absolute inset-0 h-full w-full object-contain pt-[58px]" />
        </div>
      </div>
    </div>
  );
};

const SelectionCard = ({
  title,
  subTitle,
  description,
  icon: Icon,
  onClick,
  badge,
  tier,
  features,
  onPlayVideo,
}) => (
  <div
    onClick={onClick}
    className="theme-section-glass group relative flex h-full cursor-pointer flex-col rounded-[1.75rem] p-1 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--theme-border-strong)]"
  >
    <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-teal-500/0 via-teal-500/0 to-teal-500/5 transition-all duration-300 group-hover:via-teal-500/10" />

    <div className="theme-section-surface relative flex h-full flex-col overflow-hidden rounded-[1.5rem] p-6">
      <div className="absolute -right-6 -top-6 opacity-[0.04] text-[color:var(--theme-text-primary)] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.08]">
        <Icon size={132} />
      </div>

      <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
        <div className="rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-subtle)] p-3 shadow-sm transition-all duration-300 group-hover:border-teal-300 group-hover:bg-white">
          <Icon size={24} className="text-[color:var(--theme-accent)]" />
        </div>
        <div className="flex flex-col items-end gap-2">
          {tier ? <TierBadge tier={tier} /> : null}
          {badge ? (
            <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.22em] text-white shadow-lg shadow-teal-500/20">
              <Sparkles size={8} />
              {badge}
            </span>
          ) : null}
        </div>
      </div>

      <div className="relative z-10 mb-5">
        <h3 className="mb-1 text-xl font-black text-[color:var(--theme-text-primary)]">{title}</h3>
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--theme-text-muted)]">
          {subTitle}
        </p>
        <p className="border-l-2 border-[color:var(--theme-border-soft)] pl-3 text-sm leading-6 text-[color:var(--theme-text-secondary)]">
          {description}
        </p>
      </div>

      <div className="relative z-10 mb-5 min-h-[44px]">
        {onPlayVideo ? (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPlayVideo();
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] text-red-600 transition-all hover:-translate-y-0.5 hover:bg-red-100"
          >
            <Youtube size={18} strokeWidth={2.3} />
            Watch Demo
          </button>
        ) : null}
      </div>

      <div className="relative z-10 mb-6 flex-1">
        <div className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--theme-text-muted)]">
          <Cpu size={12} className="text-teal-500" />
          System Capabilities
        </div>
        <div className="rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-subtle)] p-4">
          <div className="space-y-2.5">
            {features.map((feature) => (
              <FeatureItem key={feature} text={feature} />
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="theme-secondary-button relative z-10 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-[10px] font-black uppercase tracking-[0.18em] transition-all group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal-500/20"
      >
        Initialize Module
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);

const ResumeSelection = ({ onSelect }) => {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <>
      <div className="theme-app-shell relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 py-10 font-sans selection:bg-teal-500/20 sm:p-6">
        <div className="theme-grid-overlay absolute inset-0" />
        <div className="pointer-events-none absolute -left-24 top-0 h-[340px] w-[340px] rounded-full bg-teal-400/12 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-12 right-0 h-[360px] w-[360px] rounded-full bg-sky-300/14 blur-[130px]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col justify-center">
          <div className="mb-8 text-center sm:mb-10">
            <div className="theme-section-glass mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.26em] text-[color:var(--theme-text-secondary)]">
              <Brain size={12} className="text-teal-500" />
              CareerSense Engine Active
            </div>
            <h1 className="text-4xl font-black tracking-tight text-[color:var(--theme-text-primary)] md:text-5xl">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-teal-500 to-emerald-400 bg-clip-text text-transparent">
                Path
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[color:var(--theme-text-secondary)] md:text-base">
              Pick how you want to start. Every path leads into the same live builder, but the import and AI workflow adapt to your source material.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <SelectionCard
              title="Build from Scratch"
              subTitle="Manual Construction"
              description="Start with a blank canvas and build your resume section by section with full control over the content."
              icon={PenTool}
              tier="Free"
              onClick={() => onSelect('scratch')}
              features={[
                'Step-by-step guided builder',
                'Live preview while editing',
                'Flexible section ordering',
                'PDF export ready',
              ]}
            />

            <SelectionCard
              title="Update Resume"
              subTitle="Exact Or AI Import"
              description="Upload an existing resume and decide whether to keep the wording exactly as written or open with an AI-strengthened draft."
              icon={UploadCloud}
              tier="Premium"
              onPlayVideo={() => setPlayingVideo(resumeVideo)}
              onClick={() => onSelect('upload')}
              features={[
                'Exact no-AI import option',
                'AI optimized content option',
                'Auto-filled editable sections',
                'Instant redesign into templates',
              ]}
            />

            <SelectionCard
              title="Targeted Resume"
              subTitle="Job Alignment Engine"
              description="Upload your resume and a job description to create a tailored version aligned to the role you want."
              icon={Target}
              tier="Exclusive"
              badge="AI Recommended"
              onPlayVideo={() => setPlayingVideo(resumeJdVideo)}
              onClick={() => onSelect('tailor')}
              features={[
                'Resume plus JD analysis',
                'Keyword optimization',
                'Summary and bullet alignment',
                'Role-focused final draft',
              ]}
            />
          </div>

          <div className="theme-section-glass mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-[2rem] px-6 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.24em] text-[color:var(--theme-text-muted)]">
                Builder Promise
              </div>
              <p className="mt-2 text-sm leading-6 text-[color:var(--theme-text-secondary)]">
                No matter which route you choose, everything stays editable later in the review and live editor.
              </p>
            </div>
            <div className="inline-flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--theme-text-secondary)]">
              <ShieldCheck size={14} className="text-emerald-500" />
              Protected by end-to-end encryption
            </div>
          </div>
        </div>
      </div>

      <VideoModal src={playingVideo} onClose={() => setPlayingVideo(null)} />
    </>
  );
};

export default ResumeSelection;
