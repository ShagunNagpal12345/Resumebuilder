import React from 'react';
import { 
  Bell, CheckCircle2, ChevronDown, Download, Maximize, 
  MessageSquare, MoreHorizontal, Play, RectangleHorizontal, 
  Settings, Share2, SkipForward, ThumbsDown, ThumbsUp, Volume2 
} from 'lucide-react';

// Inline utilities for standalone stability
const splitLines = (text = '') =>
  text.split('\n').map((line) => line.replace(/^•\s*/, '').trim()).filter(Boolean);

const YoutubeCreatorResume = ({ data }) => {
  const {
    personal = {},
    experience = [],
    projects = [],
    skills = {},
    awards = [],
    certifications = [],
    education = [],
  } = data || {};

  // Flatten skills to use as YouTube "Hashtags"
  const hashtags = [
    ...(skills.core || []),
    ...(skills.technical || []),
  ].filter(Boolean).slice(0, 5).map(s => `#${s.replace(/\s+/g, '')}`);

  const softSkills = (skills.soft || []).filter(Boolean);

  return (
    <div className="bg-neutral-200 py-10 print:p-0 print:bg-white min-h-screen flex justify-center font-sans">
      
      {/* A4 Container: min-h allows infinite stretch, browser handles page breaks */}
      <div className="w-[210mm] min-h-[297mm] overflow-hidden bg-white px-6 py-8 shadow-2xl print:shadow-none text-[#0f0f0f] flex flex-col">
        
        {/* ==========================================
            1. THE VIDEO PLAYER (Stays dark!)
        ========================================== */}
        <section className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-black/5 flex flex-col justify-end group break-inside-avoid shadow-sm">
          
          {/* Video "Content" (Profile Photo or Fallback) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#181818]">
            {personal.photo ? (
              <img src={personal.photo} alt="Profile" className="w-full h-full object-cover opacity-90" />
            ) : (
              <div className="text-4xl font-black tracking-widest text-white/30 uppercase">Video Not Available</div>
            )}
          </div>

          {/* Player Gradient Overlay for controls */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10" />

          {/* YouTube Controls */}
          <div className="relative z-20 px-4 pb-2 w-full opacity-90 group-hover:opacity-100 transition-opacity">
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-white/30 rounded cursor-pointer relative mb-3 flex items-center">
              {/* Buffered */}
              <div className="absolute left-0 h-full w-[85%] bg-white/40 rounded" />
              {/* Played */}
              <div className="absolute left-0 h-full w-[65%] bg-[#ff0000] rounded" />
              {/* Scrubber Dot */}
              <div className="absolute left-[65%] w-3 h-3 bg-[#ff0000] rounded-full -translate-x-1/2" />
            </div>

            {/* Bottom Control Icons */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <Play size={20} className="fill-white" />
                <SkipForward size={20} className="fill-white" />
                <Volume2 size={20} className="fill-white" />
                <div className="text-[12px] font-medium tracking-wide ml-2">
                  1:42 / 10:28
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Settings size={18} />
                <RectangleHorizontal size={20} />
                <Maximize size={18} />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            2. VIDEO TITLE & ACTION BAR
        ========================================== */}
        <section className="mt-4 break-inside-avoid">
          {/* Hashtags */}
          <div className="text-[#065fd4] text-[12px] font-medium mb-1">
            {hashtags.join(' ')}
          </div>
          
          {/* Video Title */}
          <h1 className="text-[1.4rem] font-bold leading-tight text-[#0f0f0f] mb-2">
            {personal.name || 'Your Name'} — {personal.title || 'Professional Title'} (Full Resume)
          </h1>

          {/* Channel Bar & Actions */}
          <div className="flex items-center justify-between mt-3 flex-wrap gap-4">
            
            {/* Channel Info */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-red-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                {personal.name ? personal.name.charAt(0) : 'C'}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[15px]">{personal.name || 'Creator Name'}</span>
                  <CheckCircle2 size={13} className="text-white fill-[#606060]" />
                </div>
                <span className="text-[12px] text-[#606060]">
                  {(awards.length * 12 + 150)}K subscribers
                </span>
              </div>
              
              {/* Subscribe Button */}
              <div className="flex items-center gap-2 ml-4">
                <div className="bg-[#0f0f0f] text-white px-4 py-2 rounded-full text-[13px] font-bold tracking-wide">
                  Subscribe
                </div>
                <div className="bg-[#f2f2f2] text-[#0f0f0f] p-2 rounded-full flex items-center justify-center hover:bg-[#e5e5e5]">
                  <Bell size={18} />
                </div>
              </div>
            </div>

            {/* Like / Share Actions */}
            <div className="flex items-center gap-2 text-[13px] font-bold text-[#0f0f0f]">
              <div className="flex items-center bg-[#f2f2f2] rounded-full overflow-hidden border border-transparent">
                <div className="flex items-center gap-2 px-4 py-2 hover:bg-[#e5e5e5] cursor-pointer border-r border-black/10">
                  <ThumbsUp size={16} /> <span>14K</span>
                </div>
                <div className="px-4 py-2 hover:bg-[#e5e5e5] cursor-pointer">
                  <ThumbsDown size={16} />
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-[#f2f2f2] px-4 py-2 rounded-full hover:bg-[#e5e5e5] cursor-pointer">
                <Share2 size={16} /> <span>Share</span>
              </div>
              
              <div className="flex items-center gap-2 bg-[#f2f2f2] px-4 py-2 rounded-full hover:bg-[#e5e5e5] cursor-pointer">
                <Download size={16} /> <span>Download</span>
              </div>

              <div className="w-9 h-9 rounded-full bg-[#f2f2f2] flex items-center justify-center hover:bg-[#e5e5e5] cursor-pointer">
                <MoreHorizontal size={16} />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            3. DESCRIPTION BOX
        ========================================== */}
        <section className="mt-4 bg-[#f2f2f2] rounded-xl p-3 text-[13px] break-inside-avoid hover:bg-[#e5e5e5] transition-colors cursor-pointer">
          <div className="font-bold mb-1 flex gap-2 text-[#0f0f0f]">
            <span>2.8M views</span>
            <span>Premiered {new Date().getFullYear()}</span>
            {personal.location && <span className="text-[#606060] font-medium">• {personal.location}</span>}
          </div>
          <p className="leading-[1.6] whitespace-pre-wrap text-[#0f0f0f]">
            {personal.summary || 'Welcome to my professional portfolio! In this video, we break down my career history, major projects, and the core skills I bring to the table. Hit that subscribe button if you want to collaborate!'}
          </p>
          <div className="mt-3 font-bold uppercase tracking-wider text-[11px] text-[#606060]">Show more</div>
        </section>

        {/* ==========================================
            4. MAIN CONTENT GRID (Comments vs Up Next)
        ========================================== */}
        <div className="mt-6 grid grid-cols-[1fr_320px] gap-8 items-start flex-1">
          
          {/* LEFT COLUMN: "Comments" (Experience & Education) */}
          <div className="flex flex-col">
            
            {/* Comment Count Header */}
            <div className="text-[18px] font-bold mb-6 flex items-center gap-6 break-inside-avoid">
              <span>{experience.length + education.length} Comments</span>
              <div className="flex items-center gap-2 text-[14px] font-bold text-[#0f0f0f]">
                <ListIcon /> Sort by
              </div>
            </div>

            <div className="space-y-6">
              {/* EXPERIENCE "COMMENTS" */}
              {experience.map((item, index) => (
                <article key={index} className="flex gap-4 break-inside-avoid">
                  {/* Channel Avatar (Company Initial) */}
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0 mt-1">
                    {item.company ? item.company.charAt(0) : 'W'}
                  </div>
                  
                  {/* Comment Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-[13px] mb-1">
                      <span className="font-bold text-[#0f0f0f]">
                        @{item.company?.replace(/\s+/g, '') || 'Company'}
                      </span>
                      <span className="text-[#606060] text-[12px]">{item.date}</span>
                    </div>
                    
                    <div className="text-[14px] font-bold text-[#0f0f0f] mb-1">
                      {item.role}
                    </div>
                    
                    {item.desc && (
                      <div className="text-[13px] text-[#0f0f0f] leading-[1.6] space-y-1 mb-2">
                        {splitLines(item.desc).map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    )}
                    
                    {/* Comment Actions */}
                    <div className="flex items-center gap-4 text-[#0f0f0f] text-[13px] font-bold">
                      <div className="flex items-center gap-1.5 cursor-pointer hover:bg-[#f2f2f2] px-2 py-1 -ml-2 rounded-full">
                        <ThumbsUp size={14} className="stroke-[2.5]" /> <span>{Math.floor(Math.random() * 50) + 10}</span>
                      </div>
                      <div className="cursor-pointer hover:bg-[#f2f2f2] px-2 py-1 rounded-full">
                        <ThumbsDown size={14} className="stroke-[2.5]" />
                      </div>
                      <div className="cursor-pointer px-2 py-1 rounded-full hover:bg-[#f2f2f2]">Reply</div>
                    </div>
                  </div>
                </article>
              ))}

              {/* EDUCATION "COMMENTS" */}
              {education.map((item, index) => (
                <article key={`edu-${index}`} className="flex gap-4 break-inside-avoid pt-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold shrink-0 mt-1">
                    {item.school ? item.school.charAt(0) : 'E'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-[13px] mb-1">
                      <span className="font-bold text-[#0f0f0f]">@{item.school?.replace(/\s+/g, '') || 'University'}</span>
                      <span className="text-[#606060] text-[12px]">{item.date}</span>
                    </div>
                    <div className="text-[14px] font-bold text-[#0f0f0f] mb-1">
                      {item.degree}
                    </div>
                    
                    {/* Comment Actions */}
                    <div className="flex items-center gap-4 text-[#0f0f0f] text-[13px] font-bold mt-2">
                      <div className="flex items-center gap-1.5 cursor-pointer hover:bg-[#f2f2f2] px-2 py-1 -ml-2 rounded-full">
                        <ThumbsUp size={14} className="stroke-[2.5]" /> <span>{Math.floor(Math.random() * 200) + 50}</span>
                      </div>
                      <div className="cursor-pointer hover:bg-[#f2f2f2] px-2 py-1 rounded-full">
                        <ThumbsDown size={14} className="stroke-[2.5]" />
                      </div>
                      <div className="cursor-pointer px-2 py-1 rounded-full hover:bg-[#f2f2f2]">Reply</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: "Up Next" (Projects, Certifications, Contact) */}
          <div className="flex flex-col gap-4">
            
            {/* Filter Pills */}
            <div className="flex gap-2 overflow-hidden break-inside-avoid pb-2">
              <span className="bg-[#0f0f0f] text-white px-3 py-1.5 rounded-lg text-[13px] font-bold whitespace-nowrap">All</span>
              <span className="bg-[#f2f2f2] text-[#0f0f0f] px-3 py-1.5 rounded-lg text-[13px] font-bold whitespace-nowrap hover:bg-[#e5e5e5] cursor-pointer">Projects</span>
              <span className="bg-[#f2f2f2] text-[#0f0f0f] px-3 py-1.5 rounded-lg text-[13px] font-bold whitespace-nowrap hover:bg-[#e5e5e5] cursor-pointer">Related</span>
            </div>

            {/* PROJECT "THUMBNAILS" */}
            {projects.map((project, index) => (
              <div key={index} className="flex gap-2 group cursor-pointer break-inside-avoid">
                {/* Fake Video Thumbnail */}
                <div className="w-[140px] h-[80px] rounded-lg bg-[#f2f2f2] shrink-0 relative overflow-hidden border border-black/5">
                  <div className="absolute inset-0 flex flex-wrap opacity-40 p-1 overflow-hidden bg-slate-200">
                    <span className="text-[8px] font-mono leading-none break-all text-[#606060]">{project.desc}</span>
                  </div>
                  <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-bold text-white">
                    {Math.floor(Math.random() * 10) + 2}:{Math.floor(Math.random() * 40) + 10}
                  </div>
                </div>
                {/* Video Meta */}
                <div className="flex flex-col pt-0.5">
                  <div className="text-[13px] font-bold text-[#0f0f0f] leading-tight line-clamp-2 mb-1 group-hover:text-[#065fd4]">
                    {project.name}
                  </div>
                  <div className="text-[12px] text-[#606060] leading-tight mb-0.5 font-medium">
                    {personal.name?.split(' ')[0] || 'Creator'} Channel
                  </div>
                  <div className="text-[11px] text-[#606060] leading-tight line-clamp-2">
                    {project.desc}
                  </div>
                </div>
              </div>
            ))}

            {/* CERTIFICATIONS AS SHORTS */}
            {certifications.length > 0 && (
              <div className="mt-4 break-inside-avoid border-t border-black/10 pt-4">
                <div className="flex items-center gap-2 mb-4">
                  <Play className="text-[#ff0000] fill-[#ff0000]" size={18} />
                  <span className="font-bold text-[16px] text-[#0f0f0f]">Shorts / Certs</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="aspect-[9/16] rounded-xl bg-slate-100 p-3 flex flex-col justify-end relative overflow-hidden border border-black/5">
                       {/* Light mode shorts usually have an image, we'll use a soft gradient */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
                       <div className="relative z-20">
                         <div className="text-[12px] font-bold text-white leading-tight mb-1 line-clamp-3">{cert.name}</div>
                         <div className="text-[10px] font-medium text-white/90">{cert.issuer}</div>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CONTACT / ABOUT SIDEBAR */}
            <div className="mt-4 border-t border-black/10 pt-4 space-y-2 text-[12px] text-[#606060] break-inside-avoid">
              <div className="font-bold text-[#0f0f0f] mb-2 text-[14px]">About Channel</div>
              {personal.email && <div><span className="font-bold text-[#0f0f0f]">Email:</span> {personal.email}</div>}
              {personal.phone && <div><span className="font-bold text-[#0f0f0f]">Phone:</span> {personal.phone}</div>}
              {softSkills.length > 0 && <div><span className="font-bold text-[#0f0f0f]">Tags:</span> {softSkills.join(', ')}</div>}
            </div>

          </div>
        </div>

        {/* PRINT CSS */}
        <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              background-color: white !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .break-inside-avoid {
              break-inside: avoid;
              page-break-inside: avoid;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

// Simple custom SVG for YouTube "Sort" icon
const ListIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 6H3V5H21V6ZM15 11H3V12H15V11ZM9 17H3V18H9V17Z" fill="currentColor"/>
  </svg>
);

export default YoutubeCreatorResume;