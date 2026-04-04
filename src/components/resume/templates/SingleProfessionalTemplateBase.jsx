import React from 'react';
import FormattedTextBlock from '../FormattedTextBlock';
import PreviewEditableField from '../PreviewEditableField';

const VARIANTS = {
  'career-launch': {
    accent: '#0f766e',
    accentSoft: '#ecfeff',
    accentStrong: '#115e59',
    ink: '#0f172a',
    muted: '#64748b',
    border: '#ccfbf1',
    headerMode: 'split',
    showPhoto: true,
    showMetrics: false,
    sectionMode: 'card',
    summaryMode: 'panel',
    experienceMode: 'compact',
    eyebrow: 'Career Launch',
    strapline: 'Best for graduates, interns, and first-time job seekers building a polished first impression.',
    order: ['summary', 'skills', 'education', 'projects', 'experience', 'certifications', 'awards', 'languages', 'volunteering'],
    metrics: ['Education', 'Projects', 'Skills'],
  },
  'associate-prime': {
    accent: '#2563eb',
    accentSoft: '#eff6ff',
    accentStrong: '#1d4ed8',
    ink: '#111827',
    muted: '#64748b',
    border: '#bfdbfe',
    headerMode: 'stacked',
    showPhoto: true,
    showMetrics: true,
    sectionMode: 'card',
    summaryMode: 'quote',
    experienceMode: 'timeline',
    eyebrow: 'Associate Prime',
    strapline: 'Structured for analysts, associates, and operators who need a sharp one-column resume with clear progression.',
    order: ['summary', 'experience', 'projects', 'education', 'skills', 'certifications', 'awards', 'languages', 'volunteering'],
    metrics: ['Roles', 'Projects', 'Skills'],
  },
  'consulting-line': {
    accent: '#334155',
    accentSoft: '#f8fafc',
    accentStrong: '#0f172a',
    ink: '#0f172a',
    muted: '#64748b',
    border: '#cbd5e1',
    headerMode: 'center',
    showPhoto: false,
    showMetrics: true,
    sectionMode: 'line',
    summaryMode: 'minimal',
    experienceMode: 'timeline',
    eyebrow: 'Consulting Line',
    strapline: 'Text-first, concise, and recruiter-friendly for consultants, analysts, and strategic problem-solvers.',
    order: ['summary', 'experience', 'skills', 'projects', 'education', 'certifications', 'awards', 'languages', 'volunteering'],
    metrics: ['Experience', 'Capabilities', 'Education'],
  },
  'leadership-signature': {
    accent: '#7c2d12',
    accentSoft: '#fff7ed',
    accentStrong: '#9a3412',
    ink: '#111827',
    muted: '#6b7280',
    border: '#fed7aa',
    headerMode: 'split',
    showPhoto: false,
    showMetrics: true,
    sectionMode: 'card',
    summaryMode: 'panel',
    experienceMode: 'impact',
    eyebrow: 'Leadership Signature',
    strapline: 'Built for managers and directors who need authority, clarity, and strong business storytelling.',
    order: ['summary', 'experience', 'skills', 'education', 'projects', 'certifications', 'awards', 'languages', 'volunteering'],
    metrics: ['Leadership Roles', 'Major Skills', 'Credentials'],
  },
  'boardroom-one': {
    accent: '#1e3a8a',
    accentSoft: '#eff6ff',
    accentStrong: '#1e40af',
    ink: '#0f172a',
    muted: '#64748b',
    border: '#bfdbfe',
    headerMode: 'stacked',
    showPhoto: false,
    showMetrics: true,
    sectionMode: 'line',
    summaryMode: 'quote',
    experienceMode: 'impact',
    eyebrow: 'Boardroom One',
    strapline: 'A disciplined executive format for VPs, GMs, and commercial leaders who want every page to read decisively.',
    order: ['summary', 'experience', 'skills', 'certifications', 'projects', 'education', 'awards', 'languages', 'volunteering'],
    metrics: ['Executive Roles', 'Key Skills', 'Projects'],
  },
  'ceo-brief': {
    accent: '#b45309',
    accentSoft: '#fffbeb',
    accentStrong: '#92400e',
    ink: '#111827',
    muted: '#6b7280',
    border: '#fde68a',
    headerMode: 'center',
    showPhoto: false,
    showMetrics: true,
    sectionMode: 'card',
    summaryMode: 'minimal',
    experienceMode: 'impact',
    eyebrow: 'CEO Brief',
    strapline: 'A premium single-column narrative for founders, CEOs, and CXOs who need a clean board-level document.',
    order: ['summary', 'experience', 'skills', 'awards', 'certifications', 'projects', 'education', 'languages', 'volunteering'],
    metrics: ['Leadership Scope', 'Strategic Skills', 'Highlights'],
  },
};

const SECTION_TITLES = {
  summary: 'Professional Summary',
  experience: 'Experience',
  projects: 'Selected Projects',
  education: 'Education',
  skills: 'Core Skills',
  certifications: 'Certifications',
  awards: 'Awards & Recognition',
  languages: 'Languages',
  volunteering: 'Leadership & Service',
};

const getAllSkills = (skills = {}) => [
  ...(skills.core || []),
  ...(skills.technical || []),
  ...(skills.soft || []),
].filter(Boolean);

const hasContent = (sectionId, data) => {
  switch (sectionId) {
    case 'summary':
      return Boolean(data.personal?.summary?.trim());
    case 'experience':
      return Boolean(data.experience?.length);
    case 'projects':
      return Boolean(data.projects?.length);
    case 'education':
      return Boolean(data.education?.length);
    case 'skills':
      return Boolean(getAllSkills(data.skills).length);
    case 'certifications':
      return Boolean(data.certifications?.length);
    case 'awards':
      return Boolean(data.awards?.length);
    case 'languages':
      return Boolean(data.languages?.length);
    case 'volunteering':
      return Boolean(data.volunteering?.length);
    default:
      return false;
  }
};

const cardShell = (config) =>
  config.sectionMode === 'line'
    ? 'border-t pt-5'
    : 'rounded-[26px] border px-5 py-5 shadow-[0_16px_42px_rgba(15,23,42,0.05)]';

const renderSectionHeader = (title, config) => (
  <div className="mb-4 flex items-center justify-between gap-3">
    <div className="flex items-center gap-3">
      <div
        className="h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: config.accent }}
      />
      <h3
        className="text-[11px] font-black uppercase tracking-[0.28em]"
        style={{ color: config.accentStrong }}
      >
        {title}
      </h3>
    </div>
    <div
      className="h-px flex-1"
      style={{ backgroundColor: config.sectionMode === 'line' ? config.border : 'transparent' }}
    />
  </div>
);

const renderContactRow = (personal, config) => {
  const items = [
    { path: 'personal.email', label: 'Email', value: personal.email },
    { path: 'personal.phone', label: 'Phone', value: personal.phone },
    { path: 'personal.location', label: 'Location', value: personal.location },
    { path: 'personal.linkedin', label: 'LinkedIn', value: personal.linkedin },
  ].filter((item) => item.value);

  if (!items.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <PreviewEditableField
          key={item.path}
          path={item.path}
          label={item.label}
          className="rounded-full border px-3 py-1.5 text-[11px] font-semibold"
          style={{ borderColor: config.border, backgroundColor: config.accentSoft, color: config.ink }}
        >
          {item.value}
        </PreviewEditableField>
      ))}
    </div>
  );
};

const renderHeader = (data, config) => {
  const personal = data.personal || {};

  if (config.headerMode === 'center') {
    return (
      <header
        className="rounded-[28px] border px-8 py-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
        style={{ borderColor: config.border, background: `linear-gradient(180deg, ${config.accentSoft}, #ffffff 58%)` }}
      >
        <div
          className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em]"
          style={{ backgroundColor: '#ffffff', color: config.accentStrong, border: `1px solid ${config.border}` }}
        >
          {config.eyebrow}
        </div>
        <PreviewEditableField
          path="personal.name"
          label="Full Name"
          as="h1"
          className="mt-5 text-[40px] font-black uppercase leading-none tracking-[0.02em] text-slate-900 break-words"
        >
          {personal.name || 'Your Name'}
        </PreviewEditableField>
        {personal.title ? (
          <PreviewEditableField
            path="personal.title"
            label="Job Title"
            as="p"
            className="mt-3 text-[13px] font-black uppercase tracking-[0.26em]"
            style={{ color: config.accent }}
          >
            {personal.title}
          </PreviewEditableField>
        ) : null}
        {renderContactRow(personal, config)}
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-6" style={{ color: config.muted }}>
          {config.strapline}
        </p>
      </header>
    );
  }

  if (config.headerMode === 'stacked') {
    return (
      <header
        className="overflow-hidden rounded-[30px] border shadow-[0_20px_56px_rgba(15,23,42,0.06)]"
        style={{ borderColor: config.border }}
      >
        <div className="px-8 py-3 text-[10px] font-black uppercase tracking-[0.32em]" style={{ backgroundColor: config.accent, color: '#ffffff' }}>
          {config.eyebrow}
        </div>
        <div className="flex items-start gap-5 px-8 py-7" style={{ background: `linear-gradient(180deg, ${config.accentSoft}, #ffffff 62%)` }}>
          {config.showPhoto && personal.photo ? (
            <img
              src={personal.photo}
              alt={personal.name || 'Profile'}
              className="h-24 w-24 rounded-[28px] border object-cover shadow-sm"
              style={{ borderColor: config.border }}
            />
          ) : null}
          <div className="min-w-0 flex-1">
            <PreviewEditableField
              path="personal.name"
              label="Full Name"
              as="h1"
              className="text-[38px] font-black uppercase leading-none tracking-[0.02em] text-slate-900 break-words"
            >
              {personal.name || 'Your Name'}
            </PreviewEditableField>
            {personal.title ? (
              <PreviewEditableField
                path="personal.title"
                label="Job Title"
                as="p"
                className="mt-3 text-[13px] font-black uppercase tracking-[0.22em]"
                style={{ color: config.accentStrong }}
              >
                {personal.title}
              </PreviewEditableField>
            ) : null}
            {renderContactRow(personal, config)}
            <p className="mt-4 max-w-3xl text-sm leading-6" style={{ color: config.muted }}>
              {config.strapline}
            </p>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className="rounded-[30px] border px-8 py-7 shadow-[0_20px_56px_rgba(15,23,42,0.06)]"
      style={{ borderColor: config.border, background: `linear-gradient(135deg, ${config.accentSoft}, #ffffff 55%)` }}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <div
            className="inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em]"
            style={{ backgroundColor: '#ffffff', color: config.accentStrong, border: `1px solid ${config.border}` }}
          >
            {config.eyebrow}
          </div>
          <PreviewEditableField
            path="personal.name"
            label="Full Name"
            as="h1"
            className="mt-5 text-[40px] font-black uppercase leading-none tracking-[0.02em] text-slate-900 break-words"
          >
            {data.personal?.name || 'Your Name'}
          </PreviewEditableField>
          {personal.title ? (
            <PreviewEditableField
              path="personal.title"
              label="Job Title"
              as="p"
              className="mt-3 text-[13px] font-black uppercase tracking-[0.22em]"
              style={{ color: config.accent }}
            >
              {personal.title}
            </PreviewEditableField>
          ) : null}
          {renderContactRow(personal, config)}
          <p className="mt-4 max-w-3xl text-sm leading-6" style={{ color: config.muted }}>
            {config.strapline}
          </p>
        </div>
        {config.showPhoto && personal.photo ? (
          <img
            src={personal.photo}
            alt={personal.name || 'Profile'}
            className="h-24 w-24 rounded-[28px] border object-cover shadow-sm"
            style={{ borderColor: config.border }}
          />
        ) : null}
      </div>
    </header>
  );
};

const renderMetrics = (data, config) => {
  if (!config.showMetrics) return null;

  const skillsCount = getAllSkills(data.skills).length;
  const metrics = [
    { label: config.metrics[0], value: data.experience?.length || data.education?.length || 0 },
    { label: config.metrics[1], value: config.metrics[1].includes('Project') ? data.projects?.length || 0 : skillsCount },
    {
      label: config.metrics[2],
      value: config.metrics[2].includes('Skill')
        ? skillsCount
        : (data.certifications?.length || data.education?.length || data.projects?.length || 0),
    },
  ];

  return (
    <section className="grid grid-cols-3 gap-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-[22px] border px-4 py-4"
          style={{ borderColor: config.border, backgroundColor: config.accentSoft }}
        >
          <div className="text-[10px] font-black uppercase tracking-[0.24em]" style={{ color: config.accentStrong }}>
            {metric.label}
          </div>
          <div className="mt-2 text-[28px] font-black text-slate-900">{metric.value}</div>
        </div>
      ))}
    </section>
  );
};

const renderSummary = (data, config) => {
  if (!hasContent('summary', data)) return null;

  const className = config.summaryMode === 'quote'
    ? 'rounded-[26px] border px-6 py-6 italic shadow-[0_16px_42px_rgba(15,23,42,0.05)]'
    : config.summaryMode === 'minimal'
      ? 'border-l-[3px] pl-5'
      : 'rounded-[26px] border px-6 py-6 shadow-[0_16px_42px_rgba(15,23,42,0.05)]';

  return (
    <section
      className={className}
      style={{
        borderColor: config.summaryMode === 'minimal' ? config.accent : config.border,
        backgroundColor: config.summaryMode === 'minimal' ? 'transparent' : config.accentSoft,
      }}
      data-section-id="summary"
      data-pdf-block
    >
      {config.summaryMode !== 'minimal' ? renderSectionHeader(SECTION_TITLES.summary, config) : null}
      <FormattedTextBlock
        text={data.personal.summary}
        editablePath="personal.summary"
        editableLabel="Professional Summary"
        plainClassName="text-sm leading-7 text-slate-700 whitespace-pre-wrap"
        unorderedListClassName="space-y-2 pl-5 text-sm leading-7 text-slate-700 list-disc"
        orderedListClassName="space-y-2 pl-5 text-sm leading-7 text-slate-700 list-decimal"
      />
    </section>
  );
};

const renderSkills = (data, config) => {
  const skills = getAllSkills(data.skills);
  if (!skills.length) return null;

  return (
    <section
      className={cardShell(config)}
      style={config.sectionMode === 'line' ? { borderColor: config.border } : { borderColor: config.border, backgroundColor: '#ffffff' }}
      data-section-id="skills"
      data-pdf-block
    >
      {renderSectionHeader(SECTION_TITLES.skills, config)}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="rounded-full border px-3 py-1.5 text-[11px] font-semibold"
            style={{ borderColor: config.border, backgroundColor: config.accentSoft, color: config.ink }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

const renderExperience = (data, config) => {
  if (!hasContent('experience', data)) return null;

  return (
    <section
      className={cardShell(config)}
      style={config.sectionMode === 'line' ? { borderColor: config.border } : { borderColor: config.border, backgroundColor: '#ffffff' }}
      data-section-id="experience"
      data-pdf-block
    >
      {renderSectionHeader(SECTION_TITLES.experience, config)}
      <div className="space-y-5">
        {(data.experience || []).map((item, index) => (
          <FragmentWithBreak key={item.id || `exp-${index}`} breakBefore={item.pageBreak}>
            <div
              className={
                config.experienceMode === 'impact'
                  ? 'rounded-[22px] border px-5 py-5'
                  : config.experienceMode === 'timeline'
                    ? 'border-l-[3px] pl-5'
                    : ''
              }
              style={{
                borderColor: config.experienceMode === 'compact' ? 'transparent' : config.border,
                backgroundColor: config.experienceMode === 'impact' ? config.accentSoft : 'transparent',
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <PreviewEditableField
                    path={`experience[${index}].role`}
                    label="Experience Role"
                    as="h4"
                    className="text-[15px] font-black uppercase tracking-[0.08em] text-slate-900"
                  >
                    {item.role}
                  </PreviewEditableField>
                  {item.company ? (
                    <PreviewEditableField
                      path={`experience[${index}].company`}
                      label="Experience Company"
                      as="p"
                      className="mt-1 text-[12px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: config.accentStrong }}
                    >
                      {item.company}
                    </PreviewEditableField>
                  ) : null}
                </div>
                {item.date ? (
                  <PreviewEditableField
                    path={`experience[${index}].date`}
                    label="Experience Date"
                    className="text-[11px] font-semibold whitespace-nowrap"
                    style={{ color: config.muted }}
                  >
                    {item.date}
                  </PreviewEditableField>
                ) : null}
              </div>
              <FormattedTextBlock
                text={item.desc}
                editablePath={`experience[${index}].desc`}
                editableLabel="Experience Description"
                plainClassName="mt-3 text-sm leading-6 text-slate-700 whitespace-pre-wrap"
                unorderedListClassName="mt-3 space-y-1.5 pl-5 text-sm leading-6 text-slate-700 list-disc"
                orderedListClassName="mt-3 space-y-1.5 pl-5 text-sm leading-6 text-slate-700 list-decimal"
              />
            </div>
          </FragmentWithBreak>
        ))}
      </div>
    </section>
  );
};

const renderEducation = (data, config) => {
  if (!hasContent('education', data)) return null;

  return (
    <section
      className={cardShell(config)}
      style={config.sectionMode === 'line' ? { borderColor: config.border } : { borderColor: config.border, backgroundColor: '#ffffff' }}
      data-section-id="education"
      data-pdf-block
    >
      {renderSectionHeader(SECTION_TITLES.education, config)}
      <div className="space-y-4">
        {(data.education || []).map((item, index) => (
          <FragmentWithBreak key={item.id || `edu-${index}`} breakBefore={item.pageBreak}>
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <PreviewEditableField
                    path={`education[${index}].degree`}
                    label="Education Degree"
                    as="h4"
                    className="text-sm font-bold text-slate-900"
                  >
                    {item.degree}
                  </PreviewEditableField>
                  {item.school ? (
                    <PreviewEditableField
                      path={`education[${index}].school`}
                      label="Education School"
                      as="p"
                      className="mt-1 text-sm text-slate-700"
                    >
                      {item.school}
                    </PreviewEditableField>
                  ) : null}
                </div>
                {item.date ? (
                  <PreviewEditableField
                    path={`education[${index}].date`}
                    label="Education Date"
                    className="text-[11px] font-semibold whitespace-nowrap"
                    style={{ color: config.muted }}
                  >
                    {item.date}
                  </PreviewEditableField>
                ) : null}
              </div>
            </div>
          </FragmentWithBreak>
        ))}
      </div>
    </section>
  );
};

const renderProjects = (data, config) => {
  if (!hasContent('projects', data)) return null;

  return (
    <section
      className={cardShell(config)}
      style={config.sectionMode === 'line' ? { borderColor: config.border } : { borderColor: config.border, backgroundColor: '#ffffff' }}
      data-section-id="projects"
      data-pdf-block
    >
      {renderSectionHeader(SECTION_TITLES.projects, config)}
      <div className="space-y-4">
        {(data.projects || []).map((item, index) => (
          <FragmentWithBreak key={item.id || `proj-${index}`} breakBefore={item.pageBreak}>
            <div className="rounded-[20px] border px-4 py-4" style={{ borderColor: config.border, backgroundColor: config.accentSoft }}>
              <PreviewEditableField
                path={`projects[${index}].name`}
                label="Project Name"
                as="h4"
                className="text-sm font-bold text-slate-900"
              >
                {item.name}
              </PreviewEditableField>
              <FormattedTextBlock
                text={item.desc}
                editablePath={`projects[${index}].desc`}
                editableLabel="Project Description"
                plainClassName="mt-2 text-sm leading-6 text-slate-700 whitespace-pre-wrap"
                unorderedListClassName="mt-2 space-y-1.5 pl-5 text-sm leading-6 text-slate-700 list-disc"
                orderedListClassName="mt-2 space-y-1.5 pl-5 text-sm leading-6 text-slate-700 list-decimal"
              />
            </div>
          </FragmentWithBreak>
        ))}
      </div>
    </section>
  );
};

const renderSimpleListSection = (sectionId, items, config) => {
  if (!items?.length) return null;

  return (
    <section
      className={cardShell(config)}
      style={config.sectionMode === 'line' ? { borderColor: config.border } : { borderColor: config.border, backgroundColor: '#ffffff' }}
      data-section-id={sectionId}
      data-pdf-block
    >
      {renderSectionHeader(SECTION_TITLES[sectionId], config)}
      <div className="space-y-3">
        {items.map((item, index) => {
          if (sectionId === 'languages') {
            return (
              <div key={item.id || `${sectionId}-${index}`} className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-slate-900">{item.name}</span>
                <span className="text-sm" style={{ color: config.muted }}>{item.level}</span>
              </div>
            );
          }

          if (sectionId === 'volunteering') {
            return (
              <FragmentWithBreak key={item.id || `${sectionId}-${index}`} breakBefore={item.pageBreak}>
                <div>
                  <PreviewEditableField
                    path={`volunteering[${index}].role`}
                    label="Volunteering Role"
                    as="h4"
                    className="text-sm font-bold text-slate-900"
                  >
                    {item.role}
                  </PreviewEditableField>
                  <p className="text-sm text-slate-700">{[item.org, item.date].filter(Boolean).join(' • ')}</p>
                  <FormattedTextBlock
                    text={item.desc}
                    editablePath={`volunteering[${index}].desc`}
                    editableLabel="Volunteering Description"
                    plainClassName="mt-2 text-sm leading-6 text-slate-700 whitespace-pre-wrap"
                    unorderedListClassName="mt-2 space-y-1.5 pl-5 text-sm leading-6 text-slate-700 list-disc"
                    orderedListClassName="mt-2 space-y-1.5 pl-5 text-sm leading-6 text-slate-700 list-decimal"
                  />
                </div>
              </FragmentWithBreak>
            );
          }

          return (
            <div key={item.id || `${sectionId}-${index}`}>
              <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
              <p className="text-sm text-slate-700">{[item.issuer, item.date].filter(Boolean).join(' • ')}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const FragmentWithBreak = ({ breakBefore, children }) => (
  <>
    {breakBefore ? <div className="manual-page-break" /> : null}
    {children}
  </>
);

const SECTION_RENDERERS = {
  summary: renderSummary,
  experience: renderExperience,
  projects: renderProjects,
  education: renderEducation,
  skills: renderSkills,
  certifications: (data, config) => renderSimpleListSection('certifications', data.certifications || [], config),
  awards: (data, config) => renderSimpleListSection('awards', data.awards || [], config),
  languages: (data, config) => renderSimpleListSection('languages', data.languages || [], config),
  volunteering: (data, config) => renderSimpleListSection('volunteering', data.volunteering || [], config),
};

const SingleProfessionalTemplateBase = ({ data, variant }) => {
  const config = VARIANTS[variant] || VARIANTS['career-launch'];
  const safeData = {
    personal: {},
    experience: [],
    education: [],
    projects: [],
    skills: { technical: [], core: [], soft: [] },
    certifications: [],
    awards: [],
    languages: [],
    volunteering: [],
    ...data,
  };

  const orderedSections = config.order.filter((sectionId) => hasContent(sectionId, safeData));

  return (
    <div
      className="min-h-[1100px] bg-white px-8 py-8 shadow-lg"
      style={{
        fontFamily: 'var(--resume-font-family)',
        lineHeight: 'var(--resume-line-height)',
      }}
    >
      <div className="space-y-5">
        {renderHeader(safeData, config)}
        {renderMetrics(safeData, config)}
        {orderedSections.map((sectionId) => SECTION_RENDERERS[sectionId]?.(safeData, config)).filter(Boolean)}
      </div>
    </div>
  );
};

export default SingleProfessionalTemplateBase;
