const getList = (value) => (Array.isArray(value) ? value : []);

const normalizeText = (value) => (typeof value === 'string' ? value.trim() : '');

const normalizeSkillItems = (value) =>
  getList(value)
    .map((item) => normalizeText(item))
    .filter(Boolean);

const mergeUniqueItems = (...lists) => {
  const seen = new Set();

  return lists
    .flatMap((list) => normalizeSkillItems(list))
    .filter((item) => {
      const key = item.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
};

const countNonEmptyLines = (value) =>
  normalizeText(value)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean).length;

const WORD_REGEX = /[a-zA-Z][a-zA-Z0-9'+-]*/g;
const FIRST_PERSON_WORDS = new Set(['i', 'me', 'my', 'mine', 'we', 'our', 'ours']);
const STRONG_VERBS = new Set([
  'achieved', 'accelerated', 'analyzed', 'architected', 'automated', 'built', 'captured',
  'created', 'delivered', 'designed', 'developed', 'drove', 'elevated', 'engineered',
  'executed', 'expanded', 'generated', 'improved', 'implemented', 'increased', 'launched',
  'led', 'managed', 'optimized', 'orchestrated', 'owned', 'reduced', 'scaled', 'spearheaded',
  'streamlined', 'transformed', 'won',
]);
const WEAK_VERB_PATTERNS = [
  /^responsible\b/,
  /^worked\b/,
  /^helped\b/,
  /^assisted\b/,
  /^supported\b/,
  /^involved\b/,
  /^participated\b/,
  /^handled\b/,
  /^tasked\b/,
  /^was\b/,
  /^were\b/,
  /^did\b/,
  /^used\b/,
];

const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));

const countWords = (value) => (normalizeText(value).match(WORD_REGEX) || []).length;

const average = (values) => {
  if (!values.length) return 0;
  return values.reduce((total, value) => total + value, 0) / values.length;
};

const stripLinePrefix = (value = '') =>
  value
    .replace(/^\s*(?:[-*•]+|\d+[.)]|[a-z][.)])\s*/i, '')
    .trim();

const splitContentLines = (value = '') =>
  normalizeText(value)
    .split(/\r?\n+/)
    .map(stripLinePrefix)
    .map((line) => line.trim())
    .filter(Boolean);

const splitSummaryUnits = (value = '') => {
  const trimmed = normalizeText(value);
  if (!trimmed) return [];

  const explicitLines = splitContentLines(trimmed);
  if (explicitLines.length > 1) return explicitLines;

  return trimmed
    .split(/(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter(Boolean);
};

const getLineWords = (value = '') => (stripLinePrefix(value).toLowerCase().match(WORD_REGEX) || []);

const scoreSummaryWordRange = (count) => {
  if (count === 0) return 0;
  if (count < 15) return 35;
  if (count < 30) return 70;
  if (count <= 120) return 100;
  if (count <= 170) return 74;
  return 52;
};

const scoreSkillRange = (count) => {
  if (count === 0) return 0;
  if (count < 4) return 35;
  if (count < 8) return 68;
  if (count <= 18) return 100;
  if (count <= 28) return 86;
  return 74;
};

const scoreLineWordRange = (count) => {
  if (count === 0) return 0;
  if (count < 6) return 34;
  if (count < 9) return 66;
  if (count <= 28) return 100;
  if (count <= 40) return 78;
  return 56;
};

const buildResumeScore = ({
  resumeData,
  personalFields,
  experienceCount,
  educationCount,
  projectCount,
  certificationCount,
  awardCount,
  languageCount,
  summaryLines,
  totalSkillCount,
  readinessScore,
}) => {
  const summaryText = normalizeText(resumeData?.personal?.summary);
  const summaryWords = countWords(summaryText);
  const summaryUnits = splitSummaryUnits(summaryText);

  const experienceLines = getList(resumeData?.experience).flatMap((item) => splitContentLines(item?.desc));
  const projectLines = getList(resumeData?.projects).flatMap((item) => splitContentLines(item?.desc));
  const volunteeringLines = getList(resumeData?.volunteering).flatMap((item) => splitContentLines(item?.desc));
  const actionableLines = [...experienceLines, ...projectLines, ...volunteeringLines];
  const allNarrativeLines = [...summaryUnits, ...actionableLines];
  const rawSkills = [
    ...getList(resumeData?.skills?.technical),
    ...getList(resumeData?.skills?.core),
    ...getList(resumeData?.skills?.soft),
  ]
    .map((item) => normalizeText(item))
    .filter(Boolean);
  const uniqueSkillCount = new Set(rawSkills.map((item) => item.toLowerCase())).size;
  const duplicateSkillCount = Math.max(0, rawSkills.length - uniqueSkillCount);

  const hasAnyContent = Boolean(
    personalFields ||
    summaryWords ||
    experienceCount ||
    educationCount ||
    projectCount ||
    certificationCount ||
    awardCount ||
    languageCount ||
    totalSkillCount
  );

  if (!hasAnyContent) {
    const zeroBreakdown = [
      { key: 'coverage', label: 'Coverage', score: 0 },
      { key: 'repetition', label: 'Repetition', score: 0 },
      { key: 'verbs', label: 'Verb Strength', score: 0 },
      { key: 'depth', label: 'Length & Depth', score: 0 },
      { key: 'consistency', label: 'Consistency', score: 0 },
    ];

    return {
      resumeScore: 0,
      resumeScoreLabel: 'Start Building',
      resumeScoreTip: 'Start adding your resume details to unlock the live score.',
      resumeScoreBreakdown: zeroBreakdown,
    };
  }

  const coverageScore = Math.round(clamp(
    (
      (Math.min(100, (personalFields / 5) * 100) * 1.1) +
      (scoreSummaryWordRange(summaryWords) * 0.9) +
      (experienceCount === 0 ? 0 : Math.min(100, 42 + (experienceCount * 11) + (experienceLines.length * 3.5))) * 1.4 +
      (educationCount === 0 ? 0 : 100) * 0.85 +
      (scoreSkillRange(totalSkillCount) * 1.0) +
      ((projectCount + certificationCount + awardCount + languageCount) === 0
        ? 0
        : Math.min(100, 38 + ((projectCount + certificationCount + awardCount + languageCount) * 18))) * 0.75
    ) / 6
  ));

  const normalizedLines = allNarrativeLines
    .map((line) => line.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim())
    .filter((line) => line.length >= 10);
  const lineCounts = normalizedLines.reduce((accumulator, line) => {
    accumulator.set(line, (accumulator.get(line) || 0) + 1);
    return accumulator;
  }, new Map());
  const duplicateLineCount = [...lineCounts.values()].reduce(
    (total, count) => total + Math.max(0, count - 1),
    0
  );
  const starterWords = actionableLines
    .map((line) => getLineWords(line)[0])
    .filter(Boolean);
  const starterCounts = starterWords.reduce((accumulator, starter) => {
    accumulator.set(starter, (accumulator.get(starter) || 0) + 1);
    return accumulator;
  }, new Map());
  const dominantStarterRatio = starterWords.length
    ? Math.max(...starterCounts.values()) / starterWords.length
    : 0;
  const repetitionPenalty =
    Math.min(40, duplicateLineCount * 18) +
    Math.min(22, duplicateSkillCount * 7) +
    (starterWords.length >= 4 ? Math.max(0, dominantStarterRatio - 0.45) * 65 : 0);
  const repetitionScore = Math.round(clamp(100 - repetitionPenalty));

  const verbLines = actionableLines.length ? actionableLines : summaryUnits;
  const weakVerbCount = verbLines.filter((line) => WEAK_VERB_PATTERNS.some((pattern) => pattern.test(stripLinePrefix(line).toLowerCase()))).length;
  const strongVerbCount = verbLines.filter((line) => STRONG_VERBS.has(getLineWords(line)[0])).length;
  const actionVerbScore = verbLines.length
    ? Math.round(clamp(
        34 +
        ((strongVerbCount / verbLines.length) * 52) -
        ((weakVerbCount / verbLines.length) * 44) +
        Math.min(12, strongVerbCount * 2)
      ))
    : 0;

  const actionableWordCounts = actionableLines.map((line) => countWords(line)).filter(Boolean);
  const bulletsPerRole = experienceCount ? actionableLines.length / experienceCount : 0;
  const lengthDepthScore = Math.round(clamp(
    (
      scoreSummaryWordRange(summaryWords) * 0.9 +
      scoreLineWordRange(Math.round(average(actionableWordCounts))) * 1.1 +
      (experienceCount === 0
        ? 0
        : bulletsPerRole < 1.2
          ? 34
          : bulletsPerRole < 2
            ? 66
            : bulletsPerRole <= 5
              ? 100
              : 84) * 1.15 +
      scoreSkillRange(totalSkillCount) * 0.85
    ) / 4
  ));

  const capitalizationScore = allNarrativeLines.length
    ? Math.round((allNarrativeLines.filter((line) => /^[A-Z0-9]/.test(stripLinePrefix(line))).length / allNarrativeLines.length) * 100)
    : 0;
  const punctuationFlags = allNarrativeLines
    .map((line) => stripLinePrefix(line))
    .filter(Boolean)
    .map((line) => /[.!?]$/.test(line));
  const punctuationMean = punctuationFlags.length ? average(punctuationFlags.map((flag) => (flag ? 1 : 0))) : 0;
  const punctuationConsistency = punctuationFlags.length
    ? Math.round(clamp(100 - (Math.min(punctuationMean, 1 - punctuationMean) * 200)))
    : 0;
  const pronounCount = (normalizeText([summaryText, ...actionableLines].join(' ')).toLowerCase().match(WORD_REGEX) || [])
    .filter((word) => FIRST_PERSON_WORDS.has(word)).length;
  const pronounScore = clamp(100 - (pronounCount * 18));
  const languageConsistencyScore = Math.round(clamp(
    (capitalizationScore + punctuationConsistency + pronounScore) / 3
  ));

  const resumeScoreBreakdown = [
    { key: 'coverage', label: 'Coverage', score: coverageScore },
    { key: 'repetition', label: 'Repetition', score: repetitionScore },
    { key: 'verbs', label: 'Verb Strength', score: actionVerbScore },
    { key: 'depth', label: 'Length & Depth', score: lengthDepthScore },
    { key: 'consistency', label: 'Consistency', score: languageConsistencyScore },
  ];

  const resumeScore = Math.round(clamp(
    (coverageScore * 0.3) +
    (repetitionScore * 0.15) +
    (actionVerbScore * 0.2) +
    (lengthDepthScore * 0.2) +
    (languageConsistencyScore * 0.15)
  ));

  const lowestAreas = [...resumeScoreBreakdown].sort((a, b) => a.score - b.score);
  const weakestArea = lowestAreas[0];
  const resumeScoreTip = weakestArea?.key === 'coverage'
    ? 'Add more core resume content so the score can evaluate real depth and structure.'
    : weakestArea?.key === 'repetition'
      ? 'Reduce repeated phrases and vary bullet openings so the resume reads with more freshness.'
      : weakestArea?.key === 'verbs'
        ? 'Replace weak sentence starters with stronger action verbs to improve impact.'
        : weakestArea?.key === 'depth'
          ? 'Add more concrete results, fuller bullet depth, and tighter summary detail.'
          : 'Keep punctuation, sentence style, and voice consistent across the full resume.';

  const resumeScoreLabel = resumeScore >= 85
    ? 'Strong'
    : resumeScore >= 70
      ? 'Competitive'
      : resumeScore >= 55
        ? 'Improving'
        : 'Needs Work';

  return {
    resumeScore,
    resumeScoreLabel,
    resumeScoreTip: readinessScore === 0 && resumeScore > 0
      ? 'Add the missing core sections to turn this into a complete, competitive resume.'
      : resumeScoreTip,
    resumeScoreBreakdown,
  };
};

export const getResumeInsights = (resumeData = {}) => {
  const experienceCount = getList(resumeData?.experience).length;
  const educationCount = getList(resumeData?.education).length;
  const projectCount = getList(resumeData?.projects).length;
  const certificationCount = getList(resumeData?.certifications).length;
  const awardCount = getList(resumeData?.awards).length;
  const languageCount = getList(resumeData?.languages).length;
  const summaryLines = countNonEmptyLines(resumeData?.personal?.summary);

  const technicalSkills = normalizeSkillItems(resumeData?.skills?.technical);
  const coreSkills = mergeUniqueItems(resumeData?.skills?.core, resumeData?.skills?.soft);
  const allSkills = mergeUniqueItems(technicalSkills, coreSkills);

  const personalFields = [
    resumeData?.personal?.name,
    resumeData?.personal?.title,
    resumeData?.personal?.email,
    resumeData?.personal?.phone,
    resumeData?.personal?.location,
  ].filter((value) => normalizeText(value)).length;

  const completedSections = [
    personalFields >= 3,
    experienceCount > 0,
    educationCount > 0,
    allSkills.length > 0,
    summaryLines > 0,
    projectCount > 0 || certificationCount > 0 || awardCount > 0 || languageCount > 0,
  ].filter(Boolean).length;

  return {
    personalFields,
    summaryLines,
    experienceCount,
    educationCount,
    projectCount,
    certificationCount,
    awardCount,
    languageCount,
    technicalSkillCount: technicalSkills.length,
    coreSkillCount: coreSkills.length,
    totalSkillCount: allSkills.length,
    hasPhoto: Boolean(resumeData?.personal?.photo),
    completedSections,
    totalSections: 6,
    readinessScore: Math.round((completedSections / 6) * 100),
    ...buildResumeScore({
      resumeData,
      personalFields,
      experienceCount,
      educationCount,
      projectCount,
      certificationCount,
      awardCount,
      languageCount,
      summaryLines,
      totalSkillCount: allSkills.length,
      readinessScore: Math.round((completedSections / 6) * 100),
    }),
  };
};

export const getTemplateRecommendations = (resumeData, templates = [], mode = 'scratch') => {
  const insights = getResumeInsights(resumeData);
  const weightedTemplates = templates.map((template) => {
    let score = template.recommended ? 12 : 0;
    const reasons = [];

    if (mode === 'tailor' && template.columns === '1' && !template.hasHeadshot && template.graphics === 'Low') {
      score += 45;
      reasons.push('ATS-friendly and easy to scan for targeted applications.');
    }

    if (insights.experienceCount >= 5 && template.columns === '1') {
      score += 20;
      reasons.push('Single-column flow handles longer experience sections cleanly.');
    }

    if (insights.totalSkillCount >= 12 && mode !== 'tailor' && template.columns === '2') {
      score += 15;
      reasons.push('Two-column structure helps organize a skill-heavy resume.');
    }

    if (insights.projectCount >= 2 && mode !== 'tailor' && template.graphics === 'High') {
      score += 10;
      reasons.push('Adds more visual structure for projects and highlights.');
    }

    if (insights.hasPhoto && mode !== 'tailor' && template.hasHeadshot) {
      score += 8;
      reasons.push('Supports a polished photo-led personal brand layout.');
    }

    if (insights.summaryLines >= 6 && template.columns === '1') {
      score += 8;
      reasons.push('Gives your summary more breathing room without crowding the page.');
    }

    if (!resumeData && template.recommended) {
      reasons.push('Great default starting point for most professional resumes.');
    }

    if (reasons.length === 0) {
      reasons.push(template.recommended
        ? 'Strong all-around choice for a professional resume.'
        : 'Balanced layout with a clean presentation.');
    }

    return {
      ...template,
      score,
      reasons,
    };
  });

  return weightedTemplates.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};
