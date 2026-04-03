import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  User,
  Database,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Trophy,
  FolderGit2,
} from 'lucide-react';
import { PRINT_STYLE_BLOCK, splitLines } from './creativeTemplateUtils';

const NAVY = '#1e293b';
const TEAL = '#5eead4';
const TEAL_DARK = '#14b8a6';
const YELLOW = '#fbbf24';

const getLanguagePercent = (level = '') => {
  const normalized = level.toLowerCase();
  if (normalized.includes('native') || normalized.includes('fluent')) return 95;
  if (normalized.includes('advanced') || normalized.includes('proficient')) return 82;
  if (normalized.includes('intermediate')) return 65;
  return 48;
};

const getSkillMeter = (index) => Math.max(48, 92 - (index * 8));

const SectionPill = ({ title, icon: Icon, tone = 'navy' }) => (
  <div
    className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-sm"
    style={{ backgroundColor: tone === 'teal' ? TEAL_DARK : NAVY }}
  >
    {Icon ? <Icon size={14} /> : null}
    <span>{title}</span>
  </div>
);

const SidebarTitle = ({ title, icon: Icon }) => (
  <div className="mb-4 flex items-center gap-2 text-teal-300">
    {Icon ? <Icon size={15} /> : null}
    <h3 className="text-[11px] font-black uppercase tracking-[0.22em] text-white">{title}</h3>
  </div>
);

const InfoNavy = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    projects = [],
    certifications = [],
    languages = [],
    awards = [],
  } = data || {};

  const coreSkills = (skills?.core || []).filter(Boolean);
  const technicalSkills = (skills?.technical || []).filter(Boolean);
  const softSkills = (skills?.soft || []).filter(Boolean);
  const hasSecondPage = softSkills.length > 0 || experience.length > 0 || projects.length > 0 || awards.length > 0;

  return (
    <div className="w-full min-h-[297mm] overflow-hidden bg-white font-sans text-slate-900">
      <section className="flex w-full min-h-[297mm] overflow-hidden">
        <aside
          className="w-[31%] shrink-0 px-7 py-8 text-white"
          style={{ background: `linear-gradient(180deg, ${NAVY} 0%, #111827 100%)` }}
        >
          <div className="flex h-full flex-col">
            <div className="mb-8 border-b border-white/10 pb-8">
              {personal.photo ? (
                <div
                  className="mx-auto mb-6 h-36 w-36 overflow-hidden rounded-full border-[4px] shadow-xl"
                  style={{ borderColor: TEAL }}
                >
                  <img src={personal.photo} alt="Profile" className="h-full w-full object-cover" />
                </div>
              ) : null}

              <div className="space-y-3 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">
                {personal.phone ? (
                  <div className="flex items-center justify-center gap-2 break-words">
                    <Phone size={12} color={TEAL} />
                    <span>{personal.phone}</span>
                  </div>
                ) : null}
                {personal.email ? (
                  <div className="flex items-center justify-center gap-2 break-all">
                    <Mail size={12} color={TEAL} />
                    <span>{personal.email}</span>
                  </div>
                ) : null}
                {personal.location ? (
                  <div className="flex items-center justify-center gap-2 break-words">
                    <MapPin size={12} color={TEAL} />
                    <span>{personal.location}</span>
                  </div>
                ) : null}
                {personal.linkedin ? (
                  <div className="flex items-center justify-center gap-2 break-all">
                    <Linkedin size={12} color={TEAL} />
                    <span>{personal.linkedin}</span>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex-1 space-y-8">
              {education.length > 0 ? (
                <section className="break-inside-avoid">
                  <SidebarTitle title="Education" icon={GraduationCap} />
                  <div className="space-y-4 border-l-2 pl-4" style={{ borderColor: TEAL_DARK }}>
                    {education.map((edu, index) => (
                      <div key={`${edu.degree}-${edu.school}-${index}`} className="relative">
                        <div
                          className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: YELLOW }}
                        />
                        <div className="text-[11px] font-black uppercase leading-tight text-teal-300 break-words">
                          {edu.degree}
                        </div>
                        <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/85 break-words">
                          {edu.school}
                        </div>
                        {edu.date ? (
                          <div className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-white/45">
                            {edu.date}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {certifications.length > 0 ? (
                <section className="break-inside-avoid">
                  <SidebarTitle title="Certifications" icon={Award} />
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div
                        key={`${cert.name}-${cert.issuer}-${index}`}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <div className="text-[10px] font-black uppercase tracking-[0.16em] text-teal-300 break-words">
                          {cert.name}
                        </div>
                        {cert.issuer ? (
                          <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/55 break-words">
                            {cert.issuer}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {languages.length > 0 ? (
                <section className="break-inside-avoid">
                  <SidebarTitle title="Languages" icon={Globe} />
                  <div className="grid grid-cols-2 gap-4">
                    {languages.map((language, index) => {
                      const percent = getLanguagePercent(language.level);
                      return (
                        <div key={`${language.name}-${index}`} className="flex flex-col items-center text-center">
                          <div
                            className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-full"
                            style={{
                              background: `conic-gradient(${YELLOW} ${percent}%, ${TEAL_DARK} ${percent}% 100%)`,
                            }}
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-[10px] font-black text-white">
                              {percent}%
                            </div>
                          </div>
                          <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white break-words">
                            {language.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </aside>

        <main className="flex w-[69%] flex-col bg-slate-50/70">
          <header
            className="shrink-0 px-10 py-10 shadow-sm"
            style={{ background: `linear-gradient(135deg, ${TEAL_DARK} 0%, ${TEAL} 100%)` }}
          >
            <h1 className="break-words text-[42px] font-black uppercase leading-none tracking-[0.12em] text-white">
              {personal.name || 'Your Name'}
            </h1>
            {personal.title ? (
              <p className="mt-3 break-words text-[12px] font-black uppercase tracking-[0.32em] text-slate-900/80">
                {personal.title}
              </p>
            ) : null}
          </header>

          <div className="flex-1 px-10 py-8">
            <div className="space-y-8">
              {personal.summary ? (
                <section className="break-inside-avoid">
                  <SectionPill title="Executive Summary" icon={User} />
                  <div className="mt-4 rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
                    <p className="whitespace-pre-wrap text-[12px] font-medium leading-relaxed text-slate-600">
                      {personal.summary}
                    </p>
                  </div>
                </section>
              ) : null}

              <div className="grid grid-cols-2 gap-7">
                {coreSkills.length > 0 ? (
                  <section className="break-inside-avoid">
                    <div className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">
                      Core Expertise
                    </div>
                    <div className="space-y-4">
                      {coreSkills.map((skill, index) => (
                        <div key={`${skill}-${index}`}>
                          <div className="mb-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-slate-700 break-words">
                            {skill}
                          </div>
                          <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${getSkillMeter(index)}%`,
                                backgroundColor: index % 2 === 0 ? TEAL_DARK : YELLOW,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}

                {technicalSkills.length > 0 ? (
                  <section className="break-inside-avoid">
                    <div className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">
                      Technical Tools
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
                      <div className="mb-5 flex items-center gap-4">
                        <div
                          className="flex h-16 w-16 items-center justify-center rounded-full shrink-0"
                          style={{
                            background: `conic-gradient(${TEAL} 0 60%, ${YELLOW} 60% 83%, ${NAVY} 83% 100%)`,
                          }}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                            <Database size={16} color={NAVY} />
                          </div>
                        </div>
                        <p className="text-[11px] font-medium leading-relaxed text-slate-500">
                          A structured toolset built for reporting, automation, dashboarding, and data storytelling.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {technicalSkills.map((skill, index) => (
                          <span
                            key={`${skill}-${index}`}
                            className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-600 break-words"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>
                ) : null}
              </div>
            </div>
          </div>
        </main>
      </section>

      {hasSecondPage ? <div className="manual-page-break" aria-hidden="true" /> : null}

      {hasSecondPage ? (
        <section className="flex w-full min-h-[297mm] overflow-hidden">
          <aside
            className="w-[31%] shrink-0 px-7 py-8 text-white"
            style={{ background: `linear-gradient(180deg, ${NAVY} 0%, #111827 100%)` }}
          >
            <div className="flex h-full flex-col items-center justify-between">
              <div className="mt-12 flex flex-col items-center text-center text-teal-300/35">
                <Briefcase size={70} strokeWidth={1.2} />
                <div className="mt-8 text-[11px] font-black uppercase tracking-[0.55em] [writing-mode:vertical-rl]">
                  Career Details
                </div>
              </div>

              {awards.length > 0 ? (
                <section className="w-full break-inside-avoid">
                  <SidebarTitle title="Recognition" icon={Trophy} />
                  <div className="space-y-3">
                    {awards.map((award, index) => (
                      <div key={`${award.name}-${index}`} className="border-l-2 pl-3" style={{ borderColor: YELLOW }}>
                        <div className="text-[10px] font-black uppercase tracking-[0.14em] text-white break-words">
                          {award.name}
                        </div>
                        {award.issuer ? (
                          <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/55 break-words">
                            {award.issuer}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </section>
              ) : (
                <div className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-6 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                  Structured detail page for deeper experience and project highlights
                </div>
              )}
            </div>
          </aside>

          <main className="w-[69%] bg-slate-50/70 px-10 py-8">
            <div className="space-y-8">
              {softSkills.length > 0 ? (
                <section className="break-inside-avoid">
                  <SectionPill title="Personal Profile" icon={User} />
                  <div className="mt-4 flex flex-wrap gap-3">
                    {softSkills.map((skill, index) => (
                      <div
                        key={`${skill}-${index}`}
                        className="flex items-center gap-2 rounded-xl px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-sm break-words"
                        style={{ backgroundColor: TEAL }}
                      >
                        <span>{skill}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {experience.length > 0 ? (
                <section>
                  <SectionPill title="Detailed Work Experience" icon={Briefcase} tone="teal" />
                  <div className="ml-4 mt-6 space-y-8 border-l-2 pl-7" style={{ borderColor: TEAL }}>
                    {experience.map((exp, index) => (
                      <React.Fragment key={exp.id || `${exp.role}-${exp.company}-${index}`}>
                        {exp.pageBreak ? <div className="manual-page-break" /> : null}
                        <article className="break-inside-avoid relative">
                          <div
                            className="absolute -left-[37px] top-7 h-5 w-5 rounded-full border-[4px] border-white shadow-sm"
                            style={{ backgroundColor: NAVY }}
                          />
                          <div className="rounded-[28px] border border-slate-200 bg-white px-7 py-6 shadow-sm">
                            <div className="mb-3 flex items-start justify-between gap-4">
                              <div>
                                <h3 className="break-words text-[17px] font-black uppercase leading-tight tracking-tight text-slate-800">
                                  {exp.role}
                                </h3>
                                {exp.company ? (
                                  <div className="mt-1 break-words text-[12px] font-black uppercase tracking-[0.16em] text-teal-600">
                                    {exp.company}
                                  </div>
                                ) : null}
                              </div>
                              {exp.date ? (
                                <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                                  {exp.date}
                                </span>
                              ) : null}
                            </div>
                            <ul className="space-y-2.5 pl-5 text-[12px] font-medium leading-relaxed text-slate-600 marker:text-teal-400 list-disc">
                              {splitLines(exp.desc).map((line, lineIndex) => (
                                <li key={lineIndex}>{line}</li>
                              ))}
                            </ul>
                          </div>
                        </article>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              ) : null}

              {projects.length > 0 ? (
                <section className="border-t border-slate-200 pt-8">
                  <SectionPill title="Strategic Projects" icon={FolderGit2} />
                  <div className="mt-5 grid grid-cols-1 gap-5">
                    {projects.map((project, index) => (
                      <React.Fragment key={project.id || `${project.name}-${index}`}>
                        {project.pageBreak ? <div className="manual-page-break" /> : null}
                        <article className="break-inside-avoid relative overflow-hidden rounded-[28px] border border-slate-200 bg-white px-7 py-6 shadow-sm">
                          <div className="absolute inset-y-0 left-0 w-2" style={{ backgroundColor: YELLOW }} />
                          <h3 className="mb-3 break-words text-[14px] font-black uppercase tracking-[0.08em] text-slate-800">
                            {project.name}
                          </h3>
                          <p className="whitespace-pre-wrap text-[12px] font-medium leading-relaxed text-slate-600">
                            {project.desc}
                          </p>
                        </article>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </main>
        </section>
      ) : null}

      <style jsx global>{PRINT_STYLE_BLOCK}</style>
    </div>
  );
};

export default InfoNavy;
