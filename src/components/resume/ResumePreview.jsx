import React, { useLayoutEffect, useMemo, useRef } from 'react';
import * as Templates from './templates';
import UniversalTemplateRenderer from './UniversalTemplateRenderer';
import { markResumeContentSurface } from './templateSurfaceUtils';

const DEFAULT_DOCUMENT_SETTINGS = {
  pageMargin: 0,
  sectionSpacing: 28,
  fontScale: 1,
  lineHeight: 1.5,
  fontFamily: 'inter',
};

const FONT_FAMILY_MAP = {
  inter: 'Inter, "Helvetica Neue", Arial, sans-serif',
  rubik: '"Rubik", "Inter", "Helvetica Neue", Arial, sans-serif',
  manrope: '"Manrope", "Inter", "Helvetica Neue", Arial, sans-serif',
  source: '"Source Sans 3", "Helvetica Neue", Arial, sans-serif',
  lora: '"Lora", Georgia, "Times New Roman", serif',
  georgia: 'Georgia, "Times New Roman", serif',
  garamond: 'Garamond, Baskerville, "Times New Roman", serif',
  mono: '"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',
};

const TEMPLATE_COMPONENT_MAP = {
  'actor-spotlight': Templates.ActorSpotlight,
  professional: Templates.Professional,
  Ats: Templates.Ats,
  minimal: Templates.Minimal,
  classic: Templates.Classic,
  formal: Templates.Formal,
  Academic: Templates.Academic,
  'ocean-ats': Templates.OceanATS,
  'software-engineer': Templates.SoftwareEngineer,
  'data-scientist': Templates.DataScientist,
  'sql-terminal': Templates.SqlTerminalResume,
  tech: Templates.Tech,
  developer: Templates.Developer,
  'class-file-dark': Templates.ClassFileResume,
  coder: Templates.Coder,
  'cyan-grid': Templates.CyanGrid,
  'accent-grid': Templates.AccentGrid,
  engineer: Templates.Engineer,
  executive: Templates.Executive,
  'business-analyst': Templates.BusinessAnalyst,
  'chartered-accountant': Templates.CharteredAccountantBoard,
  'reporting-mis': Templates.ReportingMisDashboard,
  'indigo-elite': Templates.IndigoElite,
  luxe: Templates.Luxe,
  'product-manager': Templates.ProductManager,
  accounting: Templates.Accounting,
  sales: Templates.Sales,
  'impact-header': Templates.ImpactHeader,
  'chef-menu': Templates.ChefMenuResume,
  'modern-gold': Templates.ModernGold,
  'professional-columns': Templates.ProfessionalColumns,
  'chalkboard-artist': Templates.ChalkboardArtist,
  'motion-designer-board': Templates.MotionDesignerBoard,
  'magazine-cover': Templates.MagazineCover,
  'influencer-media-kit': Templates.InfluencerMediaKit,
  'portfolio-showcase': Templates.PortfolioShowcase,
  'polaroid-portfolio': Templates.PolaroidPortfolio,
  'bordered-elegant': Templates.BorderedElegant,
  'rule-minimalist': Templates.RuleMinimalist,
  designer: Templates.Designer,
  creative: Templates.Creative,
  marketing: Templates.Marketing,
  Artistic: Templates.Artistic,
  startup: Templates.Startup,
  infographic: Templates.Infographic,
  metro: Templates.Metro,
  'gamer-arena': Templates.GamerArena,
  'newspaper-editorial': Templates.NewspaperEditorial,
  'photographer-resume': Templates.PhotographerResume,
  'painter-canvas': Templates.PainterCanvas,
  'student-notes': Templates.StudentNotes,
  'youtube-creator': Templates.YoutubeCreatorResume,
  berlin: Templates.Berlin,
  'amber-visual': Templates.AmberVisual,
  skyline: Templates.Skyline,
  'mocha-creative': Templates.MochaCreative,
  'bubble-header': Templates.BubbleHeader,
  Mosaic: Templates.Mosaic,
  modern: Templates.Modern,
  japanese: Templates.Japanese,
  card: Templates.Card,
  'cloud-soft': Templates.CloudSoft,
  'soft-serif': Templates.SoftSerif,
  'sand-minimal': Templates.SandMinimal,
  'marine-clean': Templates.MarineClean,
  'mint-fresh': Templates.MintFresh,
  'sunset-slim': Templates.SunsetSlim,
  'doctor-profile': Templates.DoctorProfile,
  'lawyer-trial': Templates.LawyerTrialBoard,
  'physician-care': Templates.PhysicianCareResume,
  medical: Templates.Medical,
  Architect: Templates.Architect,
  teacher: Templates.Teacher,
  'teal-innovator': Templates.TealInnovator,
  'navy-sidebar': Templates.NavySidebar,
  'forest-sidebar': Templates.ForestSidebar,
  'slate-duo': Templates.SlateDuo,
  'crimson-sidebar': Templates.CrimsonEdge,
  'ruby-creative': Templates.RubyCreative,
  'orange-punch': Templates.OrangePunch,
  'blue-frame': Templates.BlueFrame,
  'brick-formal': Templates.BrickFormal,
  'pointer-banner': Templates.PointerBanner,
  'block-branding': Templates.BlockBranding,
  'modern-circle': Templates.ModernCircle,
  'centered-initials': Templates.CenteredInitials,
  'azure-pro': Templates.AzurePro,
  'night-admin': Templates.NightAdmin,
  'marine-compact': Templates.MarineCompact,
  'info-blue': Templates.InfoBlue,
  'info-executive': Templates.InfoExecutive,
  'info-teal': Templates.InfoTeal,
  'info-green': Templates.InfoGreen,
  'info-navy': Templates.InfoNavy,
  'career-launch': Templates.CareerLaunch,
  'associate-prime': Templates.AssociatePrime,
  'consulting-line': Templates.ConsultingLine,
  'leadership-signature': Templates.LeadershipSignature,
  'boardroom-one': Templates.BoardroomOne,
  'ceo-brief': Templates.CeoBrief,
};

export const normalizeDocumentSettings = (settings = {}) => ({
  ...DEFAULT_DOCUMENT_SETTINGS,
  sectionOrder: ['summary', 'experience', 'projects', 'education', 'skills', 'certifications', 'awards', 'languages', 'volunteering'],
  ...settings,
});

const ResumePreview = ({ data, template }) => {
  const surfaceRef = useRef(null);
  const documentSettings = useMemo(
    () => normalizeDocumentSettings(data?.documentSettings),
    [data?.documentSettings]
  );

  const documentStyle = {
    '--resume-page-margin': `${documentSettings.pageMargin}px`,
    '--resume-section-gap': `${documentSettings.sectionSpacing}px`,
    '--resume-font-scale': documentSettings.fontScale,
    '--resume-line-height': documentSettings.lineHeight,
    '--resume-font-family': FONT_FAMILY_MAP[documentSettings.fontFamily] || FONT_FAMILY_MAP.inter,
  };

  const SelectedTemplate = TEMPLATE_COMPONENT_MAP[template] || Templates.Professional;

  useLayoutEffect(() => {
    if (!surfaceRef.current) return;
    markResumeContentSurface(surfaceRef.current);
  }, [data, template]);

  return (
    <div className="resume-page-shell" style={documentStyle}>
      <div className="resume-page-shell__content">
        <div className="resume-preview-wrapper min-h-full h-auto w-full">
          <div
            ref={surfaceRef}
            className="resume-template-surface"
            data-template-id={template || 'professional'}
          >
            {SelectedTemplate ? (
              <SelectedTemplate data={data} />
            ) : (
              <UniversalTemplateRenderer
                data={data}
                template={template}
                documentSettings={documentSettings}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
