const STORAGE_KEY = 'careersense_resume_repository_v1';
export const CAREER_POINTS_PER_USD = 50000;

const createId = (prefix) =>
  `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;

const createEmptyRepository = () => ({
  profile: {
    id: 'default-profile',
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    photo: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  analytics: {
    tokenUsage: [],
  },
  resumes: [],
});

const safeReadStorage = () => {
  if (typeof window === 'undefined') return createEmptyRepository();

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createEmptyRepository();

    const parsed = JSON.parse(raw);
    return {
      ...createEmptyRepository(),
      ...parsed,
      profile: {
        ...createEmptyRepository().profile,
        ...(parsed?.profile || {}),
      },
      analytics: {
        ...createEmptyRepository().analytics,
        ...(parsed?.analytics || {}),
        tokenUsage: Array.isArray(parsed?.analytics?.tokenUsage) ? parsed.analytics.tokenUsage : [],
      },
      resumes: Array.isArray(parsed?.resumes) ? parsed.resumes : [],
    };
  } catch (error) {
    console.warn('Unable to read resume repository', error);
    return createEmptyRepository();
  }
};

const safeWriteStorage = (repository) => {
  if (typeof window === 'undefined') return repository;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(repository));
  } catch (error) {
    console.warn('Unable to save resume repository', error);
  }

  return repository;
};

const toTrimmedString = (value) => (typeof value === 'string' ? value.trim() : '');

const mergeProfileField = (existingValue, nextValue) => {
  const trimmedNextValue = toTrimmedString(nextValue);
  return trimmedNextValue || existingValue || '';
};

const buildResumeTitle = (resumeData, templateId) => {
  const name = toTrimmedString(resumeData?.personal?.name);
  const title = toTrimmedString(resumeData?.personal?.title);

  if (name && title) return `${name} · ${title}`;
  if (name) return `${name} · Resume`;
  if (title) return `${title} Resume`;
  if (templateId) return `${templateId} Resume`;
  return 'Untitled Resume';
};

export const getResumeRepository = () => safeReadStorage();

const startOfDayKey = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString().slice(0, 10);
};

const startOfMonthKey = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
};

const formatDayLabel = (dateKey) => {
  if (!dateKey) return 'Unknown';

  try {
    return new Date(`${dateKey}T00:00:00`).toLocaleDateString([], {
      month: 'short',
      day: 'numeric',
    });
  } catch (error) {
    return dateKey;
  }
};

const formatMonthLabel = (monthKey) => {
  if (!monthKey) return 'Unknown';

  const [year, month] = monthKey.split('-');
  try {
    return new Date(Number(year), Number(month) - 1, 1).toLocaleDateString([], {
      month: 'short',
      year: 'numeric',
    });
  } catch (error) {
    return monthKey;
  }
};

const createUsageAccumulator = (key, label) => ({
  key,
  label,
  totalTokens: 0,
  promptTokens: 0,
  completionTokens: 0,
  calls: 0,
});

const aggregateUsage = (entries, getKey, getLabel, limit) => {
  const grouped = entries.reduce((map, entry) => {
    const key = getKey(entry.createdAt);
    if (!key) return map;

    if (!map.has(key)) {
      map.set(key, createUsageAccumulator(key, getLabel(key)));
    }

    const bucket = map.get(key);
    bucket.totalTokens += entry.totalTokens || 0;
    bucket.promptTokens += entry.promptTokens || 0;
    bucket.completionTokens += entry.completionTokens || 0;
    bucket.calls += 1;
    return map;
  }, new Map());

  return Array.from(grouped.values())
    .sort((left, right) => right.key.localeCompare(left.key))
    .slice(0, limit)
    .reverse();
};

const aggregateUsageByOperation = (entries) => {
  const grouped = entries.reduce((map, entry) => {
    const key = entry.operation || 'unknown_operation';
    if (!map.has(key)) {
      map.set(key, {
        operation: key,
        totalTokens: 0,
        promptTokens: 0,
        completionTokens: 0,
        calls: 0,
      });
    }

    const bucket = map.get(key);
    bucket.totalTokens += entry.totalTokens || 0;
    bucket.promptTokens += entry.promptTokens || 0;
    bucket.completionTokens += entry.completionTokens || 0;
    bucket.calls += 1;
    return map;
  }, new Map());

  return Array.from(grouped.values()).sort((left, right) => right.totalTokens - left.totalTokens);
};

const normalizeUsageNumber = (value) => {
  const number = Number(value || 0);
  return Number.isFinite(number) ? number : 0;
};

export const convertCareerPointsToUsd = (careerPoints = 0) =>
  normalizeUsageNumber(careerPoints) / CAREER_POINTS_PER_USD;

export const formatUsdAmount = (usdAmount = 0) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(Number(usdAmount || 0));

export const formatUsdFromCareerPoints = (careerPoints = 0) =>
  formatUsdAmount(convertCareerPointsToUsd(careerPoints));

export const getResumeProfile = () => safeReadStorage().profile;

export const getTokenUsageEntries = () =>
  [...(safeReadStorage().analytics?.tokenUsage || [])].sort(
    (left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime()
  );

export const recordAiTokenUsage = ({
  provider = 'groq',
  source = 'ai',
  operation = 'unknown_operation',
  model = '',
  usage = {},
  metadata = {},
}) => {
  const promptTokens = normalizeUsageNumber(usage?.prompt_tokens ?? usage?.input_tokens);
  const completionTokens = normalizeUsageNumber(usage?.completion_tokens ?? usage?.output_tokens);
  const totalTokens = normalizeUsageNumber(usage?.total_tokens) || promptTokens + completionTokens;

  if (!promptTokens && !completionTokens && !totalTokens) {
    return null;
  }

  const repository = safeReadStorage();
  const entry = {
    id: createId('usage'),
    createdAt: new Date().toISOString(),
    provider,
    source,
    operation,
    model: model || '',
    promptTokens,
    completionTokens,
    totalTokens,
    metadata,
  };

  const nextRepository = safeWriteStorage({
    ...repository,
    analytics: {
      ...repository.analytics,
      tokenUsage: [entry, ...(repository.analytics?.tokenUsage || [])],
    },
  });

  return nextRepository.analytics.tokenUsage[0] || entry;
};

export const getTokenUsageAnalytics = () => {
  const entries = getTokenUsageEntries();
  const now = new Date();
  const todayKey = startOfDayKey(now);
  const currentMonthKey = startOfMonthKey(now);

  const totalTokens = entries.reduce((sum, entry) => sum + (entry.totalTokens || 0), 0);
  const totalPromptTokens = entries.reduce((sum, entry) => sum + (entry.promptTokens || 0), 0);
  const totalCompletionTokens = entries.reduce((sum, entry) => sum + (entry.completionTokens || 0), 0);
  const totalCalls = entries.length;
  const todayTokens = entries
    .filter((entry) => startOfDayKey(entry.createdAt) === todayKey)
    .reduce((sum, entry) => sum + (entry.totalTokens || 0), 0);
  const currentMonthTokens = entries
    .filter((entry) => startOfMonthKey(entry.createdAt) === currentMonthKey)
    .reduce((sum, entry) => sum + (entry.totalTokens || 0), 0);

  return {
    totalTokens,
    totalPromptTokens,
    totalCompletionTokens,
    totalCalls,
    todayTokens,
    currentMonthTokens,
    averageTokensPerCall: totalCalls ? Math.round(totalTokens / totalCalls) : 0,
    dailyUsage: aggregateUsage(entries, startOfDayKey, formatDayLabel, 7),
    monthlyUsage: aggregateUsage(entries, startOfMonthKey, formatMonthLabel, 6),
    operationUsage: aggregateUsageByOperation(entries).slice(0, 8),
    recentUsage: entries.slice(0, 10),
  };
};

export const updateResumeProfile = (patch = {}) => {
  const repository = safeReadStorage();
  const nextProfile = {
    ...repository.profile,
    ...patch,
    updatedAt: new Date().toISOString(),
  };

  return safeWriteStorage({
    ...repository,
    profile: nextProfile,
  }).profile;
};

export const upsertProfileFromResume = (resumeData) => {
  const repository = safeReadStorage();
  const currentProfile = repository.profile || createEmptyRepository().profile;
  const personal = resumeData?.personal || {};
  const nextProfile = {
    ...currentProfile,
    name: mergeProfileField(currentProfile.name, personal.name),
    title: mergeProfileField(currentProfile.title, personal.title),
    email: mergeProfileField(currentProfile.email, personal.email),
    phone: mergeProfileField(currentProfile.phone, personal.phone),
    location: mergeProfileField(currentProfile.location, personal.location),
    linkedin: mergeProfileField(currentProfile.linkedin, personal.linkedin),
    photo: personal.photo || currentProfile.photo || null,
    updatedAt: new Date().toISOString(),
  };

  return safeWriteStorage({
    ...repository,
    profile: nextProfile,
  }).profile;
};

export const saveResumeRecord = ({
  resumeId,
  resumeData,
  selectedTemplate,
  mode = 'scratch',
  importMode = 'ai-enhanced',
  jdText = '',
}) => {
  const repository = safeReadStorage();
  const now = new Date().toISOString();
  const nextId = resumeId || createId('resume');
  const existingRecord = repository.resumes.find((record) => record.id === nextId);

  const nextRecord = {
    id: nextId,
    title: buildResumeTitle(resumeData, selectedTemplate),
    mode,
    importMode,
    selectedTemplate,
    createdAt: existingRecord?.createdAt || now,
    updatedAt: now,
    lastOpenedAt: now,
    lastPrintedAt: existingRecord?.lastPrintedAt || null,
    personalSnapshot: {
      name: toTrimmedString(resumeData?.personal?.name),
      title: toTrimmedString(resumeData?.personal?.title),
      email: toTrimmedString(resumeData?.personal?.email),
      phone: toTrimmedString(resumeData?.personal?.phone),
      location: toTrimmedString(resumeData?.personal?.location),
    },
    jdText: jdText || existingRecord?.jdText || '',
    resumeData,
    atsHistory: Array.isArray(existingRecord?.atsHistory) ? existingRecord.atsHistory : [],
    interviewPrepHistory: Array.isArray(existingRecord?.interviewPrepHistory) ? existingRecord.interviewPrepHistory : [],
  };

  const nextResumes = existingRecord
    ? repository.resumes.map((record) => (record.id === nextId ? nextRecord : record))
    : [nextRecord, ...repository.resumes];

  const nextRepository = safeWriteStorage({
    ...repository,
    resumes: nextResumes,
  });

  upsertProfileFromResume(resumeData);

  return nextRepository.resumes.find((record) => record.id === nextId);
};

export const getResumeRecord = (resumeId) => {
  if (!resumeId) return null;
  return safeReadStorage().resumes.find((record) => record.id === resumeId) || null;
};

export const listResumeRecords = () =>
  [...safeReadStorage().resumes].sort(
    (left, right) => new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime()
  );

export const deleteResumeRecord = (resumeId) => {
  const repository = safeReadStorage();
  const nextRepository = safeWriteStorage({
    ...repository,
    resumes: repository.resumes.filter((record) => record.id !== resumeId),
  });

  return nextRepository.resumes;
};

export const markResumePrinted = (resumeId) => {
  if (!resumeId) return null;

  const repository = safeReadStorage();
  const now = new Date().toISOString();
  const nextResumes = repository.resumes.map((record) =>
    record.id === resumeId
      ? { ...record, lastPrintedAt: now, updatedAt: now }
      : record
  );

  safeWriteStorage({
    ...repository,
    resumes: nextResumes,
  });

  return nextResumes.find((record) => record.id === resumeId) || null;
};

export const appendATSResult = ({ resumeId, jdText = '', result }) => {
  if (!resumeId || !result) return null;

  const repository = safeReadStorage();
  const sourceRecord = repository.resumes.find((record) => record.id === resumeId) || null;
  const entry = {
    id: createId('ats'),
    createdAt: new Date().toISOString(),
    jdText,
    result,
    resumeTitle: sourceRecord?.title || 'Saved Resume',
    selectedTemplate: sourceRecord?.selectedTemplate || '',
    resumeSnapshot: sourceRecord?.resumeData || null,
  };

  const nextResumes = repository.resumes.map((record) =>
    record.id === resumeId
      ? {
          ...record,
          jdText: jdText || record.jdText || '',
          updatedAt: entry.createdAt,
          atsHistory: [entry, ...(record.atsHistory || [])],
        }
      : record
  );

  safeWriteStorage({
    ...repository,
    resumes: nextResumes,
  });

  return entry;
};

export const appendInterviewPrepResult = ({ resumeId, jdText = '', result }) => {
  if (!resumeId || !result) return null;

  const repository = safeReadStorage();
  const sourceRecord = repository.resumes.find((record) => record.id === resumeId) || null;
  const entry = {
    id: createId('prep'),
    createdAt: new Date().toISOString(),
    jdText,
    result,
    resumeTitle: sourceRecord?.title || 'Saved Resume',
    selectedTemplate: sourceRecord?.selectedTemplate || '',
    resumeSnapshot: sourceRecord?.resumeData || null,
  };

  const nextResumes = repository.resumes.map((record) =>
    record.id === resumeId
      ? {
          ...record,
          jdText: jdText || record.jdText || '',
          updatedAt: entry.createdAt,
          interviewPrepHistory: [entry, ...(record.interviewPrepHistory || [])],
        }
      : record
  );

  safeWriteStorage({
    ...repository,
    resumes: nextResumes,
  });

  return entry;
};

export const getRepositoryStats = () => {
  const repository = safeReadStorage();
  const resumes = repository.resumes || [];
  const tokenUsage = repository.analytics?.tokenUsage || [];
  const totalCareerPoints = tokenUsage.reduce((count, entry) => count + (entry.totalTokens || 0), 0);
  const totalBillUsd = convertCareerPointsToUsd(totalCareerPoints);

  return {
    totalResumes: resumes.length,
    scratchCount: resumes.filter((record) => record.mode === 'scratch').length,
    uploadCount: resumes.filter((record) => record.mode === 'upload').length,
    tailorCount: resumes.filter((record) => record.mode === 'tailor').length,
    atsRuns: resumes.reduce((count, record) => count + (record.atsHistory?.length || 0), 0),
    interviewPrepRuns: resumes.reduce((count, record) => count + (record.interviewPrepHistory?.length || 0), 0),
    totalTokens: totalCareerPoints,
    totalCareerPoints,
    totalBillUsd,
    totalBillUsdFormatted: formatUsdAmount(totalBillUsd),
    totalAiCalls: tokenUsage.length,
  };
};
