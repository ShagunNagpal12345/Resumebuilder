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
