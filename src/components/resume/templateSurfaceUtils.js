const getClassText = (element) => {
  if (!(element instanceof HTMLElement)) return '';
  return typeof element.className === 'string' ? element.className : '';
};

const SURFACE_CLASS_MARKERS = [
  'w-[210mm]',
  'max-w-[210mm]',
  'min-h-[297mm]',
  'h-[297mm]',
  'min-h-[1100px]',
  'resume-preview-wrapper',
];

export const looksLikeResumeSurface = (element) => {
  if (!(element instanceof HTMLElement)) return false;

  const classText = getClassText(element);
  if (SURFACE_CLASS_MARKERS.some((marker) => classText.includes(marker))) {
    return true;
  }

  const inlineWidth = element.style?.width || '';
  const inlineMinHeight = element.style?.minHeight || '';
  return inlineWidth.includes('210mm') || inlineMinHeight.includes('297mm');
};

export const findResumeContentSurface = (container) => {
  if (!(container instanceof HTMLElement)) return null;

  const taggedSurface = container.querySelector('[data-resume-content-surface="true"]');
  if (taggedSurface instanceof HTMLElement) {
    return taggedSurface;
  }

  if (looksLikeResumeSurface(container)) {
    return container;
  }

  const descendants = Array.from(container.querySelectorAll('*'));
  return descendants.find((node) => looksLikeResumeSurface(node)) || container;
};

export const markResumeContentSurface = (container) => {
  if (!(container instanceof HTMLElement)) return null;

  container
    .querySelectorAll('[data-resume-content-surface], [data-resume-outer-shell]')
    .forEach((node) => {
      node.removeAttribute('data-resume-content-surface');
      node.removeAttribute('data-resume-outer-shell');
    });

  const templateRoot = container.firstElementChild instanceof HTMLElement
    ? container.firstElementChild
    : null;

  if (!templateRoot) return null;

  const printableSurface = findResumeContentSurface(templateRoot);
  if (!(printableSurface instanceof HTMLElement)) return null;

  printableSurface.dataset.resumeContentSurface = 'true';

  if (printableSurface !== templateRoot) {
    templateRoot.dataset.resumeOuterShell = 'true';
  }

  return printableSurface;
};
