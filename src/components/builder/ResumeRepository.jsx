import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  BarChart3,
  BriefcaseBusiness,
  ChevronLeft,
  Coins,
  FileArchive,
  FileText,
  FolderOpen,
  MessageSquare,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Save,
  ScanLine,
  Trash2,
  UserRound,
} from 'lucide-react';
import {
  deleteResumeRecord,
  getRepositoryStats,
  getResumeProfile,
  getTokenUsageAnalytics,
  listResumeRecords,
  updateResumeProfile,
} from '../../services/resumeRepositoryService';
import ATSScoreModal from './ATSScoreModal';
import InterviewPrepModal from './InterviewPrepModal';

const MODE_LABELS = {
  scratch: 'From Scratch',
  upload: 'Using Old Resume',
  tailor: 'Resume + JD',
};

const OPERATION_LABELS = {
  extract_resume_data: 'Resume Extract',
  extract_resume_data_verbatim: 'Exact Import',
  enhance_resume_data: 'AI Enhance Resume',
  generate_text_variations: 'AI Rewrite',
  calculate_ats_score: 'ATS Score',
  generate_interview_prep: 'Interview Prep',
  tailor_phase_extract_resume: 'Extract Resume',
  tailor_phase_analyze_jd: 'Analyze JD',
  tailor_phase_rewrite_resume: 'Rewrite Resume',
};

const IMPORT_MODE_LABELS = {
  verbatim: 'Exact Import',
  'ai-enhanced': 'AI Optimized',
};

const AI_BRAND_LABEL = 'CareerSense AI';

const NAV_ITEMS = [
  {
    id: 'usage',
    label: 'My Usage',
    description: 'Career points + bill',
    icon: Coins,
  },
  {
    id: 'profile',
    label: 'My Profile',
    description: 'Profile + overview',
    icon: UserRound,
  },
  {
    id: 'resumes',
    label: 'Resumes',
    description: 'Saved library',
    icon: FolderOpen,
  },
  {
    id: 'history',
    label: 'Analysis History',
    description: 'ATS + interview history',
    icon: FileText,
  },
  {
    id: 'operations',
    label: 'Operation Analysis',
    description: 'AI flow breakdown',
    icon: BarChart3,
  },
  {
    id: 'career-points',
    label: 'Career Point Usage',
    description: 'Day + month usage',
    icon: Coins,
  },
];

const formatDateTime = (value) => {
  if (!value) return 'Not yet';

  try {
    return new Date(value).toLocaleString([], {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch (error) {
    return value;
  }
};

const formatNumber = (value) => new Intl.NumberFormat().format(Number(value || 0));

const getOperationLabel = (value) => OPERATION_LABELS[value] || value.replace(/_/g, ' ');

const StatCard = ({ label, value, hint, accentClassName = 'from-teal-500/15 to-emerald-500/5' }) => (
  <div className={`rounded-[1.5rem] border border-slate-200 bg-gradient-to-br ${accentClassName} p-5 shadow-sm shadow-slate-200/60`}>
    <div className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">{label}</div>
    <div className="mt-3 text-3xl font-black tracking-tight text-slate-900">{value}</div>
    <div className="mt-2 text-sm leading-relaxed text-slate-500">{hint}</div>
  </div>
);

const ProfileInput = ({ label, value, onChange, placeholder, type = 'text' }) => (
  <div className="space-y-1.5">
    <label className="block text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">{label}</label>
    <input
      type={type}
      value={value || ''}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition-all focus:border-teal-300 focus:ring-4 focus:ring-teal-100/80"
    />
  </div>
);

const RepositoryNavButton = ({ icon: Icon, label, description, count, isActive, isCollapsed, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    title={label}
    className={`flex w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left transition-all ${
      isActive
        ? 'border-teal-200 bg-teal-50 text-teal-800 shadow-sm'
        : 'border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:bg-teal-50/60 hover:text-teal-700'
    } ${isCollapsed ? 'justify-center px-2' : ''}`}
  >
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
        isActive ? 'bg-white text-teal-700 shadow-sm' : 'bg-slate-50 text-slate-500'
      }`}
    >
      <Icon size={18} />
    </div>

    {!isCollapsed && (
      <>
        <div className="min-w-0 flex-1 self-center">
          <div className="text-sm font-bold leading-snug whitespace-normal break-words">{label}</div>
          <div className="mt-1 text-xs leading-5 text-slate-400 whitespace-normal">{description}</div>
        </div>
        <div className="shrink-0 self-start rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-slate-500">
          {count}
        </div>
      </>
    )}
  </button>
);

const SectionCard = ({ eyebrow, title, description, actions = null, children }) => (
  <div className="rounded-[2rem] border border-slate-200 bg-white/92 p-5 shadow-sm shadow-slate-200/70 sm:p-6">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">{eyebrow}</div>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">{title}</h2>
        <p className="mt-2 text-sm leading-7 text-slate-500">{description}</p>
      </div>
      {actions}
    </div>
    <div className="mt-6">{children}</div>
  </div>
);

const ResumeRepository = ({ onBack, onOpenResume, onStartNew }) => {
  const [profileDraft, setProfileDraft] = useState(() => getResumeProfile());
  const [resumeRecords, setResumeRecords] = useState(() => listResumeRecords());
  const [stats, setStats] = useState(() => getRepositoryStats());
  const [tokenAnalytics, setTokenAnalytics] = useState(() => getTokenUsageAnalytics());
  const [saveState, setSaveState] = useState('idle');
  const [selectedAtsRecord, setSelectedAtsRecord] = useState(null);
  const [selectedInterviewRecord, setSelectedInterviewRecord] = useState(null);
  const [activeSection, setActiveSection] = useState('usage');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const refreshRepository = useCallback(() => {
    setProfileDraft(getResumeProfile());
    setResumeRecords(listResumeRecords());
    setStats(getRepositoryStats());
    setTokenAnalytics(getTokenUsageAnalytics());
  }, []);

  useEffect(() => {
    refreshRepository();
  }, [refreshRepository]);

  useEffect(() => {
    const intervalId = window.setInterval(refreshRepository, 15000);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refreshRepository();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [refreshRepository]);

  const handleProfileFieldChange = (field, value) => {
    setProfileDraft((previous) => ({
      ...previous,
      [field]: value,
    }));
    setSaveState('dirty');
  };

  const handleSaveProfile = () => {
    updateResumeProfile(profileDraft);
    setSaveState('saved');
    refreshRepository();
  };

  const handleDeleteResume = (resumeId) => {
    const confirmed = window.confirm('Delete this saved resume from My Repository?');
    if (!confirmed) return;

    deleteResumeRecord(resumeId);
    refreshRepository();
  };

  const recentActivity = useMemo(
    () =>
      resumeRecords
        .flatMap((record) => {
          const lastATS = record.atsHistory?.[0]
            ? {
                id: `${record.id}-ats-${record.atsHistory[0].id}`,
                type: 'ATS Scan',
                when: record.atsHistory[0].createdAt,
                title: record.title,
                detail: `${record.atsHistory[0].result?.score ?? '--'}% match`,
                record,
              }
            : null;
          const lastPrep = record.interviewPrepHistory?.[0]
            ? {
                id: `${record.id}-prep-${record.interviewPrepHistory[0].id}`,
                type: 'Interview Prep',
                when: record.interviewPrepHistory[0].createdAt,
                title: record.title,
                detail: `${record.interviewPrepHistory[0].result?.questions?.length || 0} questions`,
                record,
              }
            : null;

          return [lastATS, lastPrep].filter(Boolean);
        })
        .sort((left, right) => new Date(right.when).getTime() - new Date(left.when).getTime())
        .slice(0, 8),
    [resumeRecords]
  );

  const navItems = useMemo(
    () => [
      {
        ...NAV_ITEMS[0],
        count: stats.totalBillUsdFormatted,
      },
      {
        ...NAV_ITEMS[1],
        count: `${formatNumber(stats.totalResumes)} saved`,
      },
      {
        ...NAV_ITEMS[2],
        count: `${formatNumber(resumeRecords.length)} items`,
      },
      {
        ...NAV_ITEMS[3],
        count: `${formatNumber(stats.atsRuns + stats.interviewPrepRuns)} runs`,
      },
      {
        ...NAV_ITEMS[4],
        count: `${formatNumber(tokenAnalytics.operationUsage.length)} flows`,
      },
      {
        ...NAV_ITEMS[5],
        count: `${formatNumber(tokenAnalytics.totalTokens)} pts`,
      },
    ],
    [resumeRecords.length, stats, tokenAnalytics.operationUsage.length, tokenAnalytics.totalTokens]
  );

  const renderUsageSection = () => (
    <SectionCard
      eyebrow="My Usage"
      title="Career Points and total bill"
      description="A clean summary of your overall CareerSense AI usage across all saved work in your repository."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(240,249,255,0.98)_100%)] p-5 shadow-sm shadow-slate-200/60">
          <div className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Total Career Points used so far</div>
          <div className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-[2.5rem]">
            {formatNumber(stats.totalCareerPoints)}
          </div>
          <div className="mt-2 text-sm leading-7 text-slate-500">
            Every CareerSense AI request across resume extraction, ATS scans, interview prep, and tailoring is included in this total.
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-teal-200 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 p-5 text-white shadow-[0_24px_60px_-32px_rgba(13,148,136,0.8)]">
          <div className="text-[10px] font-black uppercase tracking-[0.24em] text-teal-100">Total Bill ($USD)</div>
          <div className="mt-3 text-3xl font-black tracking-tight sm:text-[2.5rem]">{stats.totalBillUsdFormatted}</div>
          <div className="mt-2 text-sm leading-7 text-teal-50/90">
            Current overall billed equivalent based on your total Career Point usage so far.
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="AI Requests"
          value={formatNumber(stats.totalAiCalls)}
          hint="Total CareerSense AI calls tracked in your repository."
          accentClassName="from-teal-500/15 to-emerald-500/5"
        />
        <StatCard
          label="Saved Resumes"
          value={formatNumber(stats.totalResumes)}
          hint="Resume versions currently stored in My Repository."
          accentClassName="from-sky-500/15 to-cyan-500/5"
        />
        <StatCard
          label="ATS Runs"
          value={formatNumber(stats.atsRuns)}
          hint="Stored ATS analyses tied to resume versions."
          accentClassName="from-amber-500/15 to-orange-500/5"
        />
        <StatCard
          label="Interview Prep"
          value={formatNumber(stats.interviewPrepRuns)}
          hint="Saved interview prep sessions available for later review."
          accentClassName="from-indigo-500/15 to-blue-500/5"
        />
      </div>
    </SectionCard>
  );

  const renderProfileSection = () => (
    <div className="space-y-6">
      <SectionCard
        eyebrow="My Profile"
        title="Profile area"
        description="This profile is auto-filled from uploaded resumes, then you can edit it anytime from here."
        actions={(
          <button
            type="button"
            onClick={handleSaveProfile}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-bold text-teal-700 shadow-sm transition-all hover:bg-teal-100"
          >
            <Save size={16} />
            {saveState === 'dirty' ? 'Save Profile' : 'Save Changes'}
          </button>
        )}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <ProfileInput label="Full Name" value={profileDraft.name} onChange={(value) => handleProfileFieldChange('name', value)} placeholder="Aanchal Agarwal" />
          <ProfileInput label="Job Title" value={profileDraft.title} onChange={(value) => handleProfileFieldChange('title', value)} placeholder="Business Analyst" />
          <ProfileInput label="Email" type="email" value={profileDraft.email} onChange={(value) => handleProfileFieldChange('email', value)} placeholder="name@email.com" />
          <ProfileInput label="Phone" value={profileDraft.phone} onChange={(value) => handleProfileFieldChange('phone', value)} placeholder="+91 98765 43210" />
          <ProfileInput label="Location" value={profileDraft.location} onChange={(value) => handleProfileFieldChange('location', value)} placeholder="Delhi, India" />
          <ProfileInput label="LinkedIn" value={profileDraft.linkedin} onChange={(value) => handleProfileFieldChange('linkedin', value)} placeholder="linkedin.com/in/yourprofile" />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">Updated {formatDateTime(profileDraft.updatedAt)}</span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
            {profileDraft.photo ? 'Photo synced from resume' : 'Photo not added yet'}
          </span>
        </div>
      </SectionCard>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          label="Total Resumes"
          value={stats.totalResumes}
          hint="Every saved version stays available for later editing and PDF export."
        />
        <StatCard
          label="From Scratch"
          value={stats.scratchCount}
          hint="Resumes started with a blank editor."
          accentClassName="from-sky-500/15 to-cyan-500/5"
        />
        <StatCard
          label="Using Old Resume"
          value={stats.uploadCount}
          hint="Resumes created by importing an existing resume."
          accentClassName="from-violet-500/15 to-fuchsia-500/5"
        />
        <StatCard
          label="Resume + JD"
          value={stats.tailorCount}
          hint="Targeted resumes created using resume plus job description."
          accentClassName="from-emerald-500/15 to-green-500/5"
        />
        <StatCard
          label="ATS Runs"
          value={stats.atsRuns}
          hint="Stored ATS scores with the exact resume and JD context."
          accentClassName="from-amber-500/15 to-orange-500/5"
        />
        <StatCard
          label="Interview Prep Runs"
          value={stats.interviewPrepRuns}
          hint="Saved AI interview prep sessions tied to resume versions."
          accentClassName="from-indigo-500/15 to-blue-500/5"
        />
      </div>
    </div>
  );

  const renderResumesSection = () => (
    <SectionCard
      eyebrow="Saved Library"
      title="All resumes"
      description="Open any saved resume later, keep editing it, and print/export when you need."
      actions={(
        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
          {resumeRecords.length} saved version{resumeRecords.length === 1 ? '' : 's'}
        </div>
      )}
    >
      <div className="space-y-4">
        {resumeRecords.length === 0 ? (
          <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50/80 px-6 py-12 text-center">
            <FolderOpen className="mx-auto h-10 w-10 text-slate-300" />
            <h3 className="mt-4 text-xl font-black tracking-tight text-slate-900">No saved resumes yet</h3>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              Once a user reaches the editor, their resume versions, ATS runs, and interview prep sessions will start showing up here automatically.
            </p>
          </div>
        ) : (
          resumeRecords.map((record) => {
            const latestAts = record.atsHistory?.[0]?.result?.score;

            return (
              <div key={record.id} className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.95)_100%)] p-5 shadow-sm shadow-slate-200/60">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate text-xl font-black tracking-tight text-slate-900">{record.title}</h3>
                      <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-teal-700">
                        {MODE_LABELS[record.mode] || 'Saved Resume'}
                      </span>
                      {record.mode === 'upload' && (
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                          {IMPORT_MODE_LABELS[record.importMode] || 'Imported'}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Template {record.selectedTemplate || 'Not selected'}</span>
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Updated {formatDateTime(record.updatedAt)}</span>
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Printed {formatDateTime(record.lastPrintedAt)}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenResume?.(record)}
                      className="theme-primary-button inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold shadow-md transition-all"
                    >
                      <FolderOpen size={16} />
                      Open Resume
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteResume(record.id)}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-bold text-rose-700 shadow-sm transition-all hover:bg-rose-100"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <UserRound size={13} />
                      Profile
                    </div>
                    <div className="mt-2 text-sm font-bold text-slate-800">{record.personalSnapshot?.name || 'No name yet'}</div>
                    <div className="mt-1 text-sm text-slate-500">{record.personalSnapshot?.title || 'No title yet'}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (record.atsHistory?.length) {
                        setSelectedAtsRecord(record);
                      }
                    }}
                    disabled={!record.atsHistory?.length}
                    className={`rounded-2xl border px-4 py-3 text-left transition-all ${
                      record.atsHistory?.length
                        ? 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-sm'
                        : 'cursor-default border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <ScanLine size={13} />
                      ATS History
                    </div>
                    <div className="mt-2 text-sm font-bold text-slate-800">{record.atsHistory?.length || 0} run{record.atsHistory?.length === 1 ? '' : 's'}</div>
                    <div className="mt-1 text-sm text-slate-500">
                      {latestAts !== undefined ? `Latest score ${latestAts}%` : 'No ATS scan yet'}
                    </div>
                    <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
                      {record.atsHistory?.length ? 'Click to view latest ATS details' : 'Run ATS scan in editor to store details'}
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (record.interviewPrepHistory?.length) {
                        setSelectedInterviewRecord(record);
                      }
                    }}
                    disabled={!record.interviewPrepHistory?.length}
                    className={`rounded-2xl border px-4 py-3 text-left transition-all ${
                      record.interviewPrepHistory?.length
                        ? 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/60 hover:shadow-sm'
                        : 'cursor-default border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <MessageSquare size={13} />
                      Interview Prep
                    </div>
                    <div className="mt-2 text-sm font-bold text-slate-800">{record.interviewPrepHistory?.length || 0} run{record.interviewPrepHistory?.length === 1 ? '' : 's'}</div>
                    <div className="mt-1 text-sm text-slate-500">
                      {(record.interviewPrepHistory?.[0]?.result?.questions?.length || 0) > 0
                        ? `${record.interviewPrepHistory[0].result.questions.length} questions last time`
                        : 'No prep session yet'}
                    </div>
                    <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600">
                      {record.interviewPrepHistory?.length ? 'Click to view latest interview prep' : 'Run interview prep in editor to store questions'}
                    </div>
                  </button>
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <BriefcaseBusiness size={13} />
                      JD Tracking
                    </div>
                    <div className="mt-2 text-sm font-bold text-slate-800">{record.jdText ? 'JD attached' : 'No JD stored'}</div>
                    <div className="mt-1 text-sm text-slate-500">
                      {record.jdText ? `${record.jdText.trim().split(/\s+/).length} words saved` : 'Attach a JD in the editor to store it'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </SectionCard>
  );

  const renderAnalysisHistorySection = () => (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
      <SectionCard
        eyebrow="Recent Activity"
        title="Analysis history"
        description="This shows the latest ATS and interview-prep actions tied to saved resume versions."
      >
        <div className="space-y-3">
          {recentActivity.length === 0 ? (
            <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center text-sm leading-7 text-slate-500">
              No ATS or interview prep activity yet. Once users run those tools, the history will appear here with the matching resume context.
            </div>
          ) : (
            recentActivity.map((activity) => (
              <button
                key={activity.id}
                type="button"
                onClick={() => {
                  if (activity.type === 'ATS Scan') {
                    setSelectedAtsRecord(activity.record);
                  } else {
                    setSelectedInterviewRecord(activity.record);
                  }
                }}
                className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
                  {activity.type === 'ATS Scan' ? <ScanLine size={12} /> : <MessageSquare size={12} />}
                  {activity.type}
                </div>
                <div className="mt-2 text-sm font-bold text-slate-900">{activity.title}</div>
                <div className="mt-1 text-sm text-slate-500">{activity.detail}</div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                  <FileText size={12} />
                  {formatDateTime(activity.when)}
                </div>
              </button>
            ))
          )}
        </div>
      </SectionCard>

      <div className="space-y-6">
        <StatCard
          label="ATS Runs"
          value={stats.atsRuns}
          hint="Saved ATS scans tied to exact resume and JD combinations."
          accentClassName="from-amber-500/15 to-orange-500/5"
        />
        <StatCard
          label="Interview Prep"
          value={stats.interviewPrepRuns}
          hint="Interview question sets and strategies stored for later review."
          accentClassName="from-indigo-500/15 to-blue-500/5"
        />
        <div className="rounded-[2rem] border border-slate-200 bg-white/92 p-5 shadow-sm shadow-slate-200/70">
          <div className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Quick Note</div>
          <h3 className="mt-2 text-xl font-black tracking-tight text-slate-900">Open any saved result instantly</h3>
          <p className="mt-2 text-sm leading-7 text-slate-500">
            The latest ATS result and interview prep run can both be reopened directly from here or from each resume card in the resumes section.
          </p>
        </div>
      </div>
    </div>
  );

  const renderOperationAnalysisSection = () => (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_360px]">
      <SectionCard
        eyebrow="AI Breakdown"
        title="Operation analysis"
        description="See which CareerSense AI-powered flows are consuming the most Career Points across My Repository."
      >
        <div className="space-y-3">
          {tokenAnalytics.operationUsage.length === 0 ? (
            <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center text-sm leading-7 text-slate-500">
              No CareerSense AI usage has been tracked yet.
            </div>
          ) : (
            tokenAnalytics.operationUsage.map((entry) => (
              <div key={entry.operation} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4">
                <div className="text-sm font-bold text-slate-900">{getOperationLabel(entry.operation)}</div>
                <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                  <span className="text-slate-500">{formatNumber(entry.calls)} call{entry.calls === 1 ? '' : 's'}</span>
                  <span className="font-black text-slate-900">{formatNumber(entry.totalTokens)} Career Points</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"
                    style={{
                      width: `${Math.max(8, tokenAnalytics.totalTokens ? (entry.totalTokens / tokenAnalytics.totalTokens) * 100 : 0)}%`,
                    }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </SectionCard>

      <SectionCard
        eyebrow="Recent AI Requests"
        title="Latest CareerSense AI calls"
        description="A quick view of the latest AI requests stored in this repository."
      >
        <div className="space-y-2">
          {tokenAnalytics.recentUsage.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-sm text-slate-500">
              No recent CareerSense AI requests yet.
            </div>
          ) : (
            tokenAnalytics.recentUsage.map((entry) => (
              <div key={entry.id} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-slate-900">{getOperationLabel(entry.operation)}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">{AI_BRAND_LABEL}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-sm font-black text-teal-700">{formatNumber(entry.totalTokens)}</div>
                    <div className="text-[11px] text-slate-400">Career Points</div>
                  </div>
                </div>
                <div className="mt-2 text-[11px] text-slate-500">{formatDateTime(entry.createdAt)}</div>
              </div>
            ))
          )}
        </div>
      </SectionCard>
    </div>
  );

  const renderCareerPointsSection = () => (
    <SectionCard
      eyebrow="Career Points Tracker"
      title="CareerSense AI Analytics"
      description="Live-tracked from CareerSense AI usage, so this shows the real Career Points spent across resume extraction, enhancement, ATS scans, interview prep, and resume-plus-JD tailoring."
      actions={(
        <div className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-teal-700">
          {formatNumber(tokenAnalytics.totalCalls)} CareerSense AI requests tracked
        </div>
      )}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Career Points"
          value={formatNumber(tokenAnalytics.totalTokens)}
          hint={`${formatNumber(tokenAnalytics.totalPromptTokens)} input + ${formatNumber(tokenAnalytics.totalCompletionTokens)} output Career Points`}
          accentClassName="from-teal-500/15 to-emerald-500/5"
        />
        <StatCard
          label="Today"
          value={formatNumber(tokenAnalytics.todayTokens)}
          hint="Career Points used in the current day."
          accentClassName="from-sky-500/15 to-cyan-500/5"
        />
        <StatCard
          label="This Month"
          value={formatNumber(tokenAnalytics.currentMonthTokens)}
          hint="Career Points used in the current month."
          accentClassName="from-indigo-500/15 to-blue-500/5"
        />
        <StatCard
          label="Avg / AI Request"
          value={formatNumber(tokenAnalytics.averageTokensPerCall)}
          hint="Average CareerSense Points consumed per AI request."
          accentClassName="from-amber-500/15 to-orange-500/5"
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/75 p-4">
          <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">Day Wise Usage</div>
          <div className="mt-3 space-y-2">
            {tokenAnalytics.dailyUsage.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-6 text-sm text-slate-500">
                No CareerSense AI usage yet.
              </div>
            ) : (
              tokenAnalytics.dailyUsage.map((entry) => (
                <div key={entry.key} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <div>
                    <div className="text-sm font-bold text-slate-900">{entry.label}</div>
                    <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      {formatNumber(entry.calls)} call{entry.calls === 1 ? '' : 's'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-teal-700">{formatNumber(entry.totalTokens)} Career Points</div>
                    <div className="mt-1 text-[11px] text-slate-400">
                      {formatNumber(entry.promptTokens)} input / {formatNumber(entry.completionTokens)} output
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/75 p-4">
          <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">Month Wise Usage</div>
          <div className="mt-3 space-y-2">
            {tokenAnalytics.monthlyUsage.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-6 text-sm text-slate-500">
                No CareerSense AI usage yet.
              </div>
            ) : (
              tokenAnalytics.monthlyUsage.map((entry) => (
                <div key={entry.key} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <div>
                    <div className="text-sm font-bold text-slate-900">{entry.label}</div>
                    <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      {formatNumber(entry.calls)} call{entry.calls === 1 ? '' : 's'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-indigo-700">{formatNumber(entry.totalTokens)} Career Points</div>
                    <div className="mt-1 text-[11px] text-slate-400">
                      {formatNumber(entry.promptTokens)} input / {formatNumber(entry.completionTokens)} output
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </SectionCard>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'usage':
        return renderUsageSection();
      case 'resumes':
        return renderResumesSection();
      case 'history':
        return renderAnalysisHistorySection();
      case 'operations':
        return renderOperationAnalysisSection();
      case 'career-points':
        return renderCareerPointsSection();
      case 'profile':
      default:
        return renderProfileSection();
    }
  };

  return (
    <div className="theme-app-shell min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <ATSScoreModal
        isOpen={Boolean(selectedAtsRecord)}
        onClose={() => setSelectedAtsRecord(null)}
        resumeData={selectedAtsRecord?.resumeData || null}
        jdText={selectedAtsRecord?.jdText || selectedAtsRecord?.atsHistory?.[0]?.jdText || ''}
        existingEntry={selectedAtsRecord?.atsHistory?.[0] || null}
        allowRerun={false}
      />
      <InterviewPrepModal
        isOpen={Boolean(selectedInterviewRecord)}
        onClose={() => setSelectedInterviewRecord(null)}
        resumeData={selectedInterviewRecord?.resumeData || null}
        jdText={selectedInterviewRecord?.jdText || selectedInterviewRecord?.interviewPrepHistory?.[0]?.jdText || ''}
        existingEntry={selectedInterviewRecord?.interviewPrepHistory?.[0] || null}
        allowRerun={false}
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white/92 p-5 shadow-sm shadow-slate-200/70 backdrop-blur sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={onBack}
                className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-500 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900"
              >
                <ChevronLeft size={20} />
              </button>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-teal-700">
                  <FileArchive size={12} />
                  My Repository
                </div>
                <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-[2.3rem]">
                  Your resumes, profile, and AI history
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                  Everything you save in CareerSense lives here, including profile details, saved resumes, analysis history, and Career Point usage across your AI-powered flows.
                </p>
              </div>
            </div>

            {onStartNew && (
              <button
                type="button"
                onClick={onStartNew}
                className="theme-primary-button inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold shadow-md transition-all"
              >
                <Plus size={16} />
                Create New Resume
              </button>
            )}
          </div>
        </div>

        <div className="xl:hidden">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSection(item.id)}
                className={`shrink-0 rounded-2xl border px-4 py-3 text-left transition-all ${
                  activeSection === item.id
                    ? 'border-teal-200 bg-teal-50 text-teal-800 shadow-sm'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                <div className="flex items-center gap-2 text-sm font-bold">
                  <item.icon size={16} />
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div
          className={`grid gap-6 ${
            sidebarCollapsed
              ? 'xl:grid-cols-[88px_minmax(0,1fr)]'
              : 'xl:grid-cols-[320px_minmax(0,1fr)]'
          }`}
        >
          <aside className="hidden xl:block">
            <div className="rounded-[2rem] border border-slate-200 bg-white/92 p-4 shadow-sm shadow-slate-200/70">
              <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'} gap-3`}>
                {!sidebarCollapsed && (
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Workspace Views</div>
                    <div className="mt-2 text-lg font-black tracking-tight text-slate-900">My Repository</div>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setSidebarCollapsed((previous) => !previous)}
                  title={sidebarCollapsed ? 'Expand sidebar' : 'Minimize sidebar'}
                  className="rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-500 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900"
                >
                  {sidebarCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {navItems.map((item) => (
                  <RepositoryNavButton
                    key={item.id}
                    icon={item.icon}
                    label={item.label}
                    description={item.description}
                    count={item.count}
                    isActive={activeSection === item.id}
                    isCollapsed={sidebarCollapsed}
                    onClick={() => setActiveSection(item.id)}
                  />
                ))}
              </div>

              {!sidebarCollapsed && (
                <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm leading-6 text-slate-500">
                  Click any view to focus just that area. Minimize the sidebar whenever you want more room for analysis, charts, or resume details.
                </div>
              )}
            </div>
          </aside>

          <div>{renderActiveSection()}</div>
        </div>
      </div>
    </div>
  );
};

export default ResumeRepository;
