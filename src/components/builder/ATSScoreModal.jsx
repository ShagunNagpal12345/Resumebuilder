import React, { useState, useEffect } from 'react';
import { ScanLine, Loader2, X, CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';
import { calculateATSScore } from '../../services/groqService'; 

const ATSScoreModal = ({ isOpen, onClose, resumeData, jdText }) => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (!jdText || jdText.trim() === '') {
        setError("Please paste a Job Description in the Editor first to calculate your match score.");
        return;
      }
      runScan();
    }
  }, [isOpen]);

  const runScan = async () => {
    setLoading(true);
    setError('');
    setResults(null);
    try {
      const data = await calculateATSScore(resumeData, jdText);
      setResults(data);
    } catch (err) {
      setError("Failed to run ATS Scan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-inner">
              <ScanLine size={20} />
            </div>
            <div>
              <h3 className="font-black text-slate-800 tracking-tight text-lg">Live ATS Scan</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Job Match Analysis</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 hover:bg-slate-200 p-2 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 bg-white min-h-[300px] flex flex-col justify-center">
          {error ? (
            <div className="text-center text-rose-500 font-medium flex flex-col items-center gap-2">
              <AlertCircle size={32} className="mb-2" />
              {error}
            </div>
          ) : loading ? (
            <div className="flex flex-col items-center justify-center text-blue-600">
              <div className="relative mb-6">
                 <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
                 <Loader2 size={48} className="animate-spin relative z-10" />
              </div>
              <p className="font-bold text-sm uppercase tracking-widest text-slate-500">Scanning Resume against JD...</p>
            </div>
          ) : results ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Score Display */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className={`${results.score >= 80 ? 'text-emerald-500' : results.score >= 60 ? 'text-amber-500' : 'text-rose-500'}`} strokeDasharray={`${results.score}, 100`} strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="text-4xl font-black text-slate-800">{results.score}</div>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed max-w-md">{results.feedback}</p>
              </div>

              {/* Keywords Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50/50 border border-emerald-100 p-5 rounded-2xl">
                  <h4 className="text-xs font-black uppercase text-emerald-700 tracking-widest mb-3 flex items-center gap-2"><CheckCircle2 size={14}/> Matched Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {results.matched_keywords?.length > 0 ? results.matched_keywords.map((kw, i) => (
                      <span key={i} className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-md border border-emerald-200">{kw}</span>
                    )) : <span className="text-xs text-slate-500 italic">No matches found.</span>}
                  </div>
                </div>

                <div className="bg-rose-50/50 border border-rose-100 p-5 rounded-2xl">
                  <h4 className="text-xs font-black uppercase text-rose-700 tracking-widest mb-3 flex items-center gap-2"><TrendingUp size={14}/> Missing Skills to Add</h4>
                  <div className="flex flex-wrap gap-2">
                    {results.missing_keywords?.length > 0 ? results.missing_keywords.map((kw, i) => (
                      <span key={i} className="bg-white text-rose-600 text-[10px] font-bold px-2.5 py-1 rounded-md border border-rose-200 shadow-sm">{kw}</span>
                    )) : <span className="text-xs text-slate-500 italic">You hit all the keywords!</span>}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ATSScoreModal;