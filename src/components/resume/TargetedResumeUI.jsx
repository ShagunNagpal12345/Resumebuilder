import React, { useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  Loader2,
  Target,
  UploadCloud,
  X,
} from 'lucide-react';
import { extractTextFromFile } from '../../utils/fileParser';
import { phase1_ExtractResume, phase2_AnalyzeJD, phase3_TailorResume } from '../../services/jobTailorService';

const TargetedResumeUI = ({ onComplete, onCancel }) => {
  const [file, setFile] = useState(null);
  const [jdText, setJdText] = useState('');
  const [status, setStatus] = useState('idle');
  const [progressMsg, setProgressMsg] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const validateAndSetFile = (selectedFile) => {
    if (selectedFile && (selectedFile.type === 'application/pdf' || selectedFile.name.endsWith('.docx'))) {
      setFile(selectedFile);
      return;
    }

    alert('Please upload a valid PDF or DOCX file.');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    validateAndSetFile(event.dataTransfer.files[0]);
  };

  const handleFileChange = (event) => {
    validateAndSetFile(event.target.files[0]);
  };

  const clearFile = (event) => {
    event.stopPropagation();
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleStartAlignment = async () => {
    if (!file) {
      alert('Please upload your base resume first.');
      return;
    }

    if (!jdText.trim()) {
      alert('Please paste the Job Description.');
      return;
    }

    setStatus('processing');

    try {
      setProgressMsg('Extracting text from document...');
      const rawResumeText = await extractTextFromFile(file);

      setProgressMsg('Phase 1: AI parsing your base profile...');
      const parsedResume = await phase1_ExtractResume(rawResumeText);

      setProgressMsg('Phase 2: Deep analyzing Job Description requirements...');
      const parsedJD = await phase2_AnalyzeJD(jdText);

      setProgressMsg('Phase 3: Tailoring bullet points and rewriting summary...');
      const finalTailoredResume = await phase3_TailorResume(parsedResume, parsedJD);

      setProgressMsg('Complete! Loading your targeted resume...');
      setTimeout(() => onComplete(finalTailoredResume), 1200);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setProgressMsg('An error occurred during the AI alignment process. Please try again.');
    }
  };

  let progressPct = 10;
  if (progressMsg.includes('Phase 1')) progressPct = 32;
  if (progressMsg.includes('Phase 2')) progressPct = 62;
  if (progressMsg.includes('Phase 3')) progressPct = 90;
  if (progressMsg.includes('Complete')) progressPct = 100;

  return (
    <div className="theme-app-shell relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 py-8 font-sans sm:p-6">
      <div className="theme-grid-overlay absolute inset-0 pointer-events-none" />
      <div className="pointer-events-none absolute -left-20 top-8 h-[320px] w-[320px] rounded-full bg-teal-400/12 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-10 right-[-4%] h-[340px] w-[340px] rounded-full bg-sky-300/16 blur-[120px]" />

      <div className="theme-section-glass relative z-10 w-full max-w-5xl rounded-[2.2rem] p-2 shadow-2xl">
        <div className="theme-section-surface rounded-[1.9rem] p-5 sm:p-8 md:p-10">
          <div className="mb-10 text-center">
            <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/20">
              <Target size={32} />
            </div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-teal-700">
              <CheckCircle2 size={12} />
              AI Job Alignment
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[color:var(--theme-text-primary)] md:text-4xl">
              Target Your Resume For The Role
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[color:var(--theme-text-secondary)]">
              Upload your base resume and paste the target job description. We will extract your profile, analyze the role, and generate a tailored draft before it enters the editor.
            </p>
          </div>

          {status === 'idle' || status === 'error' ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="theme-section-muted flex min-h-[320px] flex-col rounded-[1.75rem] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-teal-700">
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                  1. Base Resume
                </div>

                <div
                  className={`flex flex-1 cursor-pointer flex-col items-center justify-center rounded-[1.4rem] border-2 border-dashed p-6 text-center transition-all ${
                    file
                      ? 'border-teal-300 bg-teal-50/70'
                      : isDragging
                        ? 'border-teal-400 bg-teal-50 scale-[1.01]'
                        : 'border-[color:var(--theme-border-soft)] bg-white hover:border-teal-300 hover:bg-teal-50/40'
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {file ? (
                    <div className="relative flex flex-col items-center">
                      <button
                        type="button"
                        onClick={clearFile}
                        className="absolute right-[-18px] top-[-14px] rounded-lg bg-white p-1.5 text-[color:var(--theme-text-secondary)] shadow-sm transition-colors hover:bg-rose-50 hover:text-rose-500"
                        title="Remove file"
                      >
                        <X size={16} />
                      </button>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                        <FileText size={30} />
                      </div>
                      <p className="max-w-[220px] truncate text-sm font-bold text-[color:var(--theme-text-primary)]">{file.name}</p>
                      <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
                        <CheckCircle2 size={12} />
                        Ready for parsing
                      </p>
                    </div>
                  ) : (
                    <div className="pointer-events-none flex flex-col items-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--theme-accent-soft)] text-teal-700">
                        <UploadCloud size={30} />
                      </div>
                      <p className="text-sm font-bold text-[color:var(--theme-text-primary)]">Upload PDF or DOCX</p>
                      <p className="mt-2 text-xs text-[color:var(--theme-text-secondary)]">Drag and drop or click to browse</p>
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>

              <div className="theme-section-muted flex min-h-[320px] flex-col rounded-[1.75rem] p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    2. Target Job Description
                  </div>
                  {jdText ? (
                    <button
                      type="button"
                      onClick={() => setJdText('')}
                      className="text-xs font-semibold text-[color:var(--theme-text-secondary)] transition-colors hover:text-[color:var(--theme-text-primary)]"
                    >
                      Clear
                    </button>
                  ) : null}
                </div>

                <textarea
                  value={jdText}
                  onChange={(event) => setJdText(event.target.value)}
                  placeholder="Paste the full job description here, including responsibilities, requirements, and role context..."
                  className="custom-scrollbar flex-1 resize-none rounded-[1.4rem] border border-[color:var(--theme-border-soft)] bg-white px-4 py-4 text-sm leading-7 text-[color:var(--theme-text-primary)] outline-none transition-all placeholder:text-[color:var(--theme-text-muted)] focus:border-emerald-300 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>
            </div>
          ) : (
            <div className="py-16">
              <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-xl" />
                  <Loader2 size={64} className="relative z-10 animate-spin text-teal-600" />
                </div>

                <h3 className="text-2xl font-black text-[color:var(--theme-text-primary)]">Aligning Your Career Profile</h3>
                <p className="mt-3 text-sm font-semibold text-teal-700">{progressMsg}</p>

                <div className="mt-8 w-full rounded-full border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-subtle)] p-1">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>

                <div className="mt-5 grid w-full grid-cols-3 gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-[color:var(--theme-text-muted)]">
                  <span className={progressPct >= 32 ? 'text-teal-700' : ''}>Extraction</span>
                  <span className={progressPct >= 62 ? 'text-teal-700' : ''}>JD Analysis</span>
                  <span className={progressPct >= 90 ? 'text-teal-700' : ''}>AI Tailoring</span>
                </div>
              </div>
            </div>
          )}

          {status === 'error' ? (
            <div className="mt-8 flex items-start gap-3 rounded-[1.4rem] border border-rose-200 bg-rose-50 px-4 py-4 text-sm text-rose-700">
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              <p>{progressMsg}</p>
            </div>
          ) : null}

          {status !== 'processing' ? (
            <div className="mt-10 flex flex-col-reverse items-stretch justify-between gap-4 border-t border-[color:var(--theme-border-soft)] pt-8 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onCancel}
                className="theme-secondary-button rounded-full px-6 py-3 text-sm font-bold"
              >
                Back to Selection
              </button>

              <button
                type="button"
                onClick={handleStartAlignment}
                disabled={!file || !jdText.trim()}
                className={`rounded-full px-8 py-3.5 text-sm font-black uppercase tracking-[0.2em] transition-all ${
                  file && jdText.trim()
                    ? 'theme-primary-button hover:-translate-y-0.5'
                    : 'cursor-not-allowed border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-subtle)] text-[color:var(--theme-text-muted)]'
                }`}
              >
                <span className="flex items-center justify-center gap-3">
                  Initiate Alignment
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TargetedResumeUI;
