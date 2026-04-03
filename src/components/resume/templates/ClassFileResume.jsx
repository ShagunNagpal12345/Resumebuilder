import React from 'react';
import { Code2, FolderGit2, Gamepad2, Globe, Languages, Mail, MapPin, Phone } from 'lucide-react';
import { PRINT_STYLE_BLOCK, mergeSkills, splitLines, take } from './creativeTemplateUtils';

const ClassFileResume = ({ data }) => {
  const {
    personal = {},
    experience = [],
    education = [],
    skills = {},
    certifications = [],
    projects = [],
    languages = [],
  } = data || {};

  const platformList = take([...(skills.core || []), ...(skills.soft || [])], 6);
  const softwareList = take(skills.technical || [], 8);

  const CodeTitle = ({ text }) => (
    <div className="mb-4 text-[1.02rem] font-black uppercase tracking-[0.08em] text-[#9adbf7]">
      {text}
    </div>
  );

  return (
    <div className="bg-neutral-300 py-10 print:p-0 print:bg-white min-h-screen flex justify-center">
      <div
        className="w-[210mm] min-h-[297mm] overflow-hidden bg-[#111315] text-white shadow-2xl print:shadow-none"
        style={{ fontFamily: '"IBM Plex Mono", "JetBrains Mono", monospace' }}
      >
        <div className="grid grid-cols-[0.33fr_0.67fr] min-h-[297mm]">
          <aside className="border-r border-white/8 bg-[#15181b] px-5 py-6">
            <div className="mb-6 text-[11px] text-white/30">&lt;img&gt;</div>
            <div className="overflow-hidden border border-[#9adbf7]/20 bg-black/30 p-2 shadow-lg">
              {personal.photo ? (
                <img src={personal.photo} alt="Profile" className="h-28 w-full object-cover" />
              ) : (
                <div className="h-28 w-full bg-slate-800" />
              )}
            </div>
            <div className="mt-2 text-[11px] text-white/30">&lt;/img&gt;</div>

            <div className="mt-6 space-y-5 text-[11px]">
              <section>
                <div className="mb-2 text-[#9adbf7]">public enum PLATFORMS {'{}'}</div>
                <div className="space-y-1 text-white/75">
                  {platformList.map((item, index) => (
                    <div key={index}>{item},</div>
                  ))}
                </div>
              </section>

              <section>
                <div className="mb-2 text-[#9adbf7]">public enum LOGICIELS {'{}'}</div>
                <div className="space-y-1 text-white/75">
                  {softwareList.map((item, index) => (
                    <div key={index}>{item},</div>
                  ))}
                </div>
              </section>

              <section>
                <div className="mb-2 text-[#9adbf7]">public enum MEDIA {'{}'}</div>
                <div className="space-y-1 break-all text-white/75">
                  {personal.linkedin && <div>{personal.linkedin}</div>}
                  {personal.email && <div>{personal.email}</div>}
                  <div>github.com/creator</div>
                </div>
              </section>

              <section>
                <div className="mb-2 text-[#9adbf7]">public enum LANGUES {'{}'}</div>
                <div className="space-y-1 text-white/75">
                  {take(languages, 3).map((item, index) => (
                    <div key={index}>
                      {item.name}: <span className="text-[#9adbf7]">{item.level || 'B2'}</span>,
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="mb-2 text-[#9adbf7]">public enum PROFIL {'{}'}</div>
                <div className="space-y-1 text-white/75">
                  {take(skills.soft || skills.core || [], 5).map((item, index) => (
                    <div key={index}>{item.toUpperCase()},</div>
                  ))}
                </div>
              </section>
            </div>
          </aside>

          <main className="px-7 py-6">
            <div className="mb-4 text-[11px] text-[#4ade80]">{'/// <summary>'}</div>
            <div className="space-y-1 text-[11px] leading-[1.7] text-white/75">
              {splitLines(personal.summary || 'Seeking an impactful engineering role where databases, backend logic, and practical product thinking come together.').slice(0, 5).map((line, index) => (
                <div key={index} className="text-[#4ade80]">{`/// ${line}`}</div>
              ))}
            </div>
            <div className="mt-1 text-[11px] text-[#4ade80]">{'/// </summary>'}</div>

            <section className="mt-6 break-inside-avoid">
              <CodeTitle text="public class INFORMATION" />
              <div className="space-y-2 text-[12px] leading-[1.7] text-white/80">
                <div><span className="text-[#9adbf7]">public string</span> NOM = <span className="text-[#fca5a5]">&quot;{personal.name || 'Pooja Bansal'}&quot;</span>;</div>
                <div><span className="text-[#9adbf7]">public string</span> TITRE = <span className="text-[#fca5a5]">&quot;{personal.title || 'Software / SQL Developer'}&quot;</span>;</div>
                {personal.email && <div><span className="text-[#9adbf7]">public string</span> EMAIL = <span className="text-[#fca5a5]">&quot;{personal.email}&quot;</span>;</div>}
                {personal.phone && <div><span className="text-[#9adbf7]">public string</span> TELEPHONE = <span className="text-[#fca5a5]">&quot;{personal.phone}&quot;</span>;</div>}
                {personal.location && <div><span className="text-[#9adbf7]">public string</span> POSITION = <span className="text-[#fca5a5]">&quot;{personal.location}&quot;</span>;</div>}
              </div>
            </section>

            <section className="mt-7 break-inside-avoid">
              <CodeTitle text="public partial class FORMATIONS : EcolesSuperieures" />
              <div className="space-y-4 text-[11px] leading-[1.75] text-white/80">
                {take(education, 3).map((item, index) => (
                  <div key={index} className="rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-4">
                    <div className="text-[#4ade80]">{'private void'} <span className="text-white">{`Y${index + 1}()`}</span> {'{'}</div>
                    <div className="pl-4 pt-2">
                      <div><span className="text-[#9adbf7]">var</span> Niveau = <span className="text-[#fca5a5]">&quot;{item.degree}&quot;</span>;</div>
                      <div><span className="text-[#9adbf7]">var</span> Date = <span className="text-[#fca5a5]">&quot;{item.date}&quot;</span>;</div>
                      <div><span className="text-[#9adbf7]">var</span> Type = <span className="text-[#fca5a5]">&quot;{item.school}&quot;</span>;</div>
                    </div>
                    <div className="pt-2 text-[#4ade80]">{'}'}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-7 break-inside-avoid">
              <CodeTitle text="public static class EXPERIENCES" />
              <div className="space-y-4 text-[11px] leading-[1.8] text-white/78">
                {take(experience, 3).map((item, index) => (
                  <div key={index} className="rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-4">
                    <div className="text-[#4ade80]">{'public void'} <span className="text-white">{`${item.role?.replace(/\s+/g, '') || `Role${index + 1}`}()`}</span> {'{'}</div>
                    <div className="pl-4 pt-2">
                      <div><span className="text-[#9adbf7]">var</span> Duree = <span className="text-[#fca5a5]">&quot;{item.date}&quot;</span>;</div>
                      <div><span className="text-[#9adbf7]">var</span> Type = <span className="text-[#fca5a5]">&quot;{item.company}&quot;</span>;</div>
                      {splitLines(item.desc).slice(0, 2).map((line, lineIndex) => (
                        <div key={lineIndex} className="text-[#4ade80]">{`// ${line}`}</div>
                      ))}
                    </div>
                    <div className="pt-2 text-[#4ade80]">{'}'}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-7 grid grid-cols-2 gap-5">
              <div className="break-inside-avoid rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-4">
                <CodeTitle text="public struct PROJETS" />
                <div className="space-y-2 text-[11px] text-white/78">
                  {take(projects, 3).map((item, index) => (
                    <div key={index}>
                      <span className="text-[#9adbf7]">string</span> {item.name?.replace(/\s+/g, '_') || `Project_${index + 1}`} = <span className="text-[#fca5a5]">&quot;{item.desc}&quot;</span>;
                    </div>
                  ))}
                </div>
              </div>

              <div className="break-inside-avoid rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-4">
                <CodeTitle text="public interface STACK" />
                <div className="space-y-2 text-[11px] text-white/78">
                  {mergeSkills(skills, 8).map((item, index) => (
                    <div key={index}>
                      <span className="text-[#9adbf7]">bool</span> {item.replace(/[^a-zA-Z0-9]/g, '') || `Skill${index + 1}`} = <span className="text-[#4ade80]">true</span>;
                    </div>
                  ))}
                  {take(certifications, 2).map((item, index) => (
                    <div key={`cert-${index}`} className="text-[#4ade80]">{`// ${item.name}`}</div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>

        <style jsx global>{PRINT_STYLE_BLOCK}</style>
      </div>
    </div>
  );
};

export default ClassFileResume;
