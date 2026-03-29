import React, { useState, useEffect } from 'react';
import { MessageSquare, Loader2, X, AlertCircle, HelpCircle, Lightbulb } from 'lucide-react';
import { generateInterviewPrep } from '../../services/groqService'; 

const InterviewPrepModal = ({ isOpen, onClose, resumeData, jdText }) => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (!jdText || jdText.trim() === '') {
        setError("Please paste a Job Description in the Editor first to generate targeted interview questions.");
        return;
      }
      runPrep();
    }
  }, [isOpen]);

  const runPrep = async () => {
    setLoading(true);
    setError('');
    setResults(null);
    try {
      const data = await generateInterviewPrep(resumeData, jdText);
      setResults(data);
    } catch (err) {
      setError("Failed to generate Interview Prep. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shadow-inner">
              <MessageSquare size={20} />
            </div>
            <div>
              <h3 className="font-black text-slate-800 tracking-tight text-lg">AI Interview Coach</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Predicted Questions & Strategies</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 hover:bg-slate-200 p-2 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-white overflow-y-auto custom-scrollbar flex-1">
          {error ? (
            <div className="py-12 text-center text-rose-500 font-medium flex flex-col items-center gap-2">
              <AlertCircle size={32} className="mb-2" />
              {error}
            </div>
          ) : loading ? (
            <div className="py-20 flex flex-col items-center justify-center text-indigo-600">
              <div className="relative mb-6">
                 <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse"></div>
                 <Loader2 size={48} className="animate-spin relative z-10" />
              </div>
              <p className="font-bold text-sm uppercase tracking-widest text-slate-500">Analyzing Profile & Predicting Questions...</p>
            </div>
          ) : results?.questions ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {results.questions.map((q, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-black text-slate-800 mb-4 flex items-start gap-3">
                    <span className="text-indigo-500 mt-0.5">Q{i+1}.</span> 
                    {q.question}
                  </h4>
                  
                  <div className="space-y-4 ml-8">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 flex items-center gap-1.5">
                        <HelpCircle size={12}/> Why they ask this
                      </h5>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">{q.why_they_ask_this}</p>
                    </div>

                    <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                      <h5 className="text-[10px] font-black uppercase text-indigo-500 tracking-widest mb-1 flex items-center gap-1.5">
                        <Lightbulb size={12}/> Suggested STAR Strategy
                      </h5>
                      <p className="text-sm text-indigo-900 font-medium leading-relaxed">{q.suggested_strategy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InterviewPrepModal;