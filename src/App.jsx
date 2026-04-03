// import React, { useState } from 'react';
// import { Loader2 } from 'lucide-react';

// // --- LANDING COMPONENTS (The Dark UI) ---
// // Adjust these paths if your file names are different
// import ResumeBuilderLanding from './components/landing/ResumeBuilderLanding';
// import ResumeSelection from './components/builder/ResumeSelection'; 
// import ResumeUpload from './components/landing/ResumeUpload'; 
// import JDUpload from './components/landing/JDUpload';

// // --- BUILDER COMPONENTS (The Clean UI) ---
// import TemplateGallery from './components/builder/TemplateGallery';
// import Editor from './components/builder/Editor';
// import DataReview from './components/builder/DataReview';

// // --- LOGIC ---
// import { extractResumeData } from './services/groqService';
// import { extractTextFromFile } from './utils/fileParser';

// const App = () => {
//   const [view, setView] = useState('landing');
//   const [resumeData, setResumeData] = useState(null);
//   const [selectedTemplate, setSelectedTemplate] = useState('professional');
//   const [selectedMode, setSelectedMode] = useState(null); 
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [loadingMessage, setLoadingMessage] = useState('');

//   // 1. Navigation Helpers
//   const handleBack = () => {
//     // Note: If you want 'back' from gallery to always go to landing when no data exists, 
//     // you might want to adjust this logic later. For now, keeping your original map.
//     const history = {
//       'builder': 'gallery',
//       'gallery': 'landing', // Changed this so "Back" from Gallery goes to Landing instead of 'review' (since you can skip directly to gallery now)
//       'review': 'upload',
//       'upload': 'selection',
//       'selection': 'landing'
//     };
//     setView(history[view] || 'landing');
//   };

//   // 2. File Processing Logic
//   const handleResumeFile = async (file) => {
//     if (!file) return;
    
//     setIsAnalyzing(true);
//     setLoadingMessage('Reading your resume...');
    
//     try {
//       // Step A: Extract Text
//       const rawText = await extractTextFromFile(file);
      
//       // Step B: AI Analysis
//       setLoadingMessage('AI is extracting your profile...');
//       const jsonData = await extractResumeData(rawText);
      
//       if (jsonData) {
//         setResumeData(jsonData);
//         setView('review'); // Move to Review Screen
//       }
//     } catch (error) {
//       alert("Error: " + error.message);
//       console.error(error);
//     } finally {
//       setIsAnalyzing(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-900 relative">
      
//       {/* VIEW: LANDING */}
//       {view === 'landing' && (
//         <ResumeBuilderLanding 
//           onStart={() => setView('selection')} 
//           onFileSelect={(f) => { setSelectedMode('upload'); handleResumeFile(f); }} 
//           onViewTemplates={() => setView('gallery')} // <--- ADDED THIS FIXED PROP!
//         />
//       )}

//       {/* VIEW: SELECTION */}
//       {view === 'selection' && (
//         <ResumeSelection onSelect={(mode) => {
//           setSelectedMode(mode);
//           if (mode === 'scratch') { setResumeData(null); setView('gallery'); }
//           else { setView('upload'); }
//         }} />
//       )}

//       {/* VIEW: UPLOAD (Dark UI) */}
//       {view === 'upload' && (
//         <ResumeUpload 
//           onFileUpload={handleResumeFile} 
//           onBack={handleBack} 
//         />
//       )}

//       {/* VIEW: JD UPLOAD (Optional) */}
//       {view === 'jd-upload' && (
//         <JDUpload onSubmit={() => {}} onBack={handleBack} />
//       )}

//       {/* VIEW: REVIEW DATA (Clean UI) */}
//       {view === 'review' && (
//         <DataReview 
//           extractedData={resumeData} 
//           onComplete={(data) => { setResumeData(data); setView('gallery'); }} 
//         />
//       )}

//       {/* VIEW: GALLERY (Clean UI) */}
//       {view === 'gallery' && (
//         <TemplateGallery 
//           onSelectTemplate={(tpl) => { setSelectedTemplate(tpl); setView('builder'); }} 
//           onBack={handleBack} 
//         />
//       )}

//       {/* VIEW: EDITOR (Clean UI) */}
//       {view === 'builder' && (
//         <Editor 
//           initialData={resumeData} 
//           selectedTemplate={selectedTemplate}
//           onChangeTemplate={setSelectedTemplate}
//           onBack={handleBack}
//         />
//       )}

//       {/* GLOBAL LOADING OVERLAY */}
//       {isAnalyzing && (
//         <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-white">
//           <Loader2 size={64} className="text-teal-400 animate-spin mb-6" />
//           <h2 className="text-2xl font-bold">{loadingMessage}</h2>
//           <p className="text-slate-400 mt-2">This usually takes about 10-15 seconds.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { Loader2 } from 'lucide-react';

// // --- LANDING COMPONENTS (The Dark UI) ---
// // Adjust these paths if your file names are different
// import ResumeBuilderLanding from './components/landing/ResumeBuilderLanding';
// import ResumeSelection from './components/builder/ResumeSelection'; 
// import ResumeUpload from './components/landing/ResumeUpload'; 
// import JDUpload from './components/landing/JDUpload';

// // --- NEW TARGETED RESUME COMPONENT ---
// // Adjust path to where you saved TargetedResumeUI.jsx
// import TargetedResumeUI from './components/resume/TargetedResumeUI';

// // --- BUILDER COMPONENTS (The Clean UI) ---
// import TemplateGallery from './components/builder/TemplateGallery';
// import Editor from './components/builder/Editor';
// import DataReview from './components/builder/DataReview';

// // --- LOGIC ---
// import { extractResumeData } from './services/groqService';
// import { extractTextFromFile } from './utils/fileParser';

// const App = () => {
//   const [view, setView] = useState('landing');
//   const [resumeData, setResumeData] = useState(null);
//   const [selectedTemplate, setSelectedTemplate] = useState('professional');
//   const [selectedMode, setSelectedMode] = useState(null); 
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [loadingMessage, setLoadingMessage] = useState('');

//   // 1. Navigation Helpers
//   const handleBack = () => {
//     // Note: If you want 'back' from gallery to always go to landing when no data exists, 
//     // you might want to adjust this logic later. For now, keeping your original map.
//     const history = {
//       'builder': 'gallery',
//       'gallery': 'landing', // Changed this so "Back" from Gallery goes to Landing instead of 'review' (since you can skip directly to gallery now)
//       'review': 'upload', // Or 'tailor' depending on how they got here, but keeping original for now
//       'upload': 'selection',
//       'tailor': 'selection', // Added mapping for the new tailor view
//       'selection': 'landing'
//     };
//     setView(history[view] || 'landing');
//   };

//   // 2. File Processing Logic (For Standard Upload)
//   const handleResumeFile = async (file) => {
//     if (!file) return;
    
//     setIsAnalyzing(true);
//     setLoadingMessage('Reading your resume...');
    
//     try {
//       // Step A: Extract Text
//       const rawText = await extractTextFromFile(file);
      
//       // Step B: AI Analysis
//       setLoadingMessage('AI is extracting your profile...');
//       const jsonData = await extractResumeData(rawText);
      
//       if (jsonData) {
//         setResumeData(jsonData);
//         setView('review'); // Move to Review Screen
//       }
//     } catch (error) {
//       alert("Error: " + error.message);
//       console.error(error);
//     } finally {
//       setIsAnalyzing(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-900 relative">
      
//       {/* VIEW: LANDING */}
//       {view === 'landing' && (
//         <ResumeBuilderLanding 
//           onStart={() => setView('selection')} 
//           onFileSelect={(f) => { setSelectedMode('upload'); handleResumeFile(f); }} 
//           onViewTemplates={() => setView('gallery')} 
//         />
//       )}

//       {/* VIEW: SELECTION */}
//       {view === 'selection' && (
//         <ResumeSelection onSelect={(mode) => {
//           setSelectedMode(mode);
//           if (mode === 'scratch') { 
//             setResumeData(null); 
//             setView('gallery'); 
//           } else if (mode === 'tailor') { 
//             setView('tailor'); // Route to new Targeted Resume Engine
//           } else { 
//             setView('upload'); 
//           }
//         }} />
//       )}

//       {/* VIEW: UPLOAD (Dark UI) */}
//       {view === 'upload' && (
//         <ResumeUpload 
//           onFileUpload={handleResumeFile} 
//           onBack={handleBack} 
//         />
//       )}

//       {/* VIEW: TAILOR (The New Job Alignment Engine) */}
//       {view === 'tailor' && (
//         <TargetedResumeUI 
//           onCancel={handleBack}
//           onComplete={(finalTailoredJson) => {
//             // Once the 3-step AI finishes, save the data and send them to the review screen
//             setResumeData(finalTailoredJson);
//             setView('review'); 
//           }}
//         />
//       )}

//       {/* VIEW: JD UPLOAD (Optional) */}
//       {view === 'jd-upload' && (
//         <JDUpload onSubmit={() => {}} onBack={handleBack} />
//       )}

//       {/* VIEW: REVIEW DATA (Clean UI) */}
//       {view === 'review' && (
//         <DataReview 
//           extractedData={resumeData} 
//           onComplete={(data) => { setResumeData(data); setView('gallery'); }} 
//         />
//       )}

//       {/* VIEW: GALLERY (Clean UI) */}
//       {view === 'gallery' && (
//         <TemplateGallery 
//           onSelectTemplate={(tpl) => { setSelectedTemplate(tpl); setView('builder'); }} 
//           onBack={handleBack} 
//         />
//       )}

//       {/* VIEW: EDITOR (Clean UI) */}
//       {view === 'builder' && (
//         <Editor 
//           initialData={resumeData} 
//           selectedTemplate={selectedTemplate}
//           onChangeTemplate={setSelectedTemplate}
//           onBack={handleBack}
//         />
//       )}

//       {/* GLOBAL LOADING OVERLAY (For Standard Upload only) */}
//       {isAnalyzing && (
//         <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-white">
//           <Loader2 size={64} className="text-teal-400 animate-spin mb-6" />
//           <h2 className="text-2xl font-bold">{loadingMessage}</h2>
//           <p className="text-slate-400 mt-2">This usually takes about 10-15 seconds.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { FolderOpen, Loader2 } from 'lucide-react';

// --- LANDING COMPONENTS (The Dark UI) ---
// Adjust these paths if your file names are different
import ResumeBuilderLanding from './components/landing/ResumeBuilderLanding';
import PricingPage from './components/landing/PricingPage';
import ResumeSelection from './components/builder/ResumeSelection'; 
import ResumeUpload from './components/landing/ResumeUpload'; 
import JDUpload from './components/landing/JDUpload';

// --- NEW TARGETED RESUME COMPONENT ---
// Adjust path to where you saved TargetedResumeUI.jsx
import TargetedResumeUI from './components/resume/TargetedResumeUI';

// --- BUILDER COMPONENTS (The Clean UI) ---
import ResumeImportOptions from './components/builder/ResumeImportOptions';
import TemplateGallery from './components/builder/TemplateGallery';
import Editor from './components/builder/Editor';
import DataReview from './components/builder/DataReview';
import ResumeRepository from './components/builder/ResumeRepository';
import ThemeToggleButton from './components/ui/ThemeToggleButton';

// --- LOGIC ---
import { enhanceResumeData, extractResumeData, extractResumeDataVerbatim } from './services/groqService';
import { upsertProfileFromResume } from './services/resumeRepositoryService';
import { extractTextFromFile } from './utils/fileParser';
import { scrollToLandingSection } from './components/landing/scrollToLandingSection';

const App = () => {
  const [view, setView] = useState('landing');
  const [resumeData, setResumeData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [selectedMode, setSelectedMode] = useState(null); 
  const [resumeImportMode, setResumeImportMode] = useState('ai-enhanced');
  const [pendingResumeFile, setPendingResumeFile] = useState(null);
  const [resumeUploadSource, setResumeUploadSource] = useState('upload');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [activeResumeRecordId, setActiveResumeRecordId] = useState(null);
  const [currentJDText, setCurrentJDText] = useState('');
  const [repositoryReturnView, setRepositoryReturnView] = useState('landing');
  const [builderReturnView, setBuilderReturnView] = useState('gallery');

  const resetRepositoryTracking = () => {
    setActiveResumeRecordId(null);
    setCurrentJDText('');
    setBuilderReturnView('gallery');
  };

  const openRepository = (returnView = view) => {
    setRepositoryReturnView(returnView);
    setView('repository');
  };

  const navigateToLandingSection = (sectionId = 'top') => {
    setView('landing');

    window.setTimeout(() => {
      scrollToLandingSection(sectionId);
    }, 80);
  };

  // 1. Navigation Helpers
  const handleBack = () => {
    if (view === 'repository') {
      setView(repositoryReturnView || 'landing');
      return;
    }

    if (view === 'builder') {
      setView(builderReturnView || 'gallery');
      return;
    }

    if (view === 'upload-options') {
      setPendingResumeFile(null);
      setView(resumeUploadSource === 'landing' ? 'landing' : 'upload');
      return;
    }

    // Note: If you want 'back' from gallery to always go to landing when no data exists, 
    // you might want to adjust this logic later. For now, keeping your original map.
    const history = {
      'builder': 'gallery',
      'gallery': 'landing', // Changed this so "Back" from Gallery goes to Landing instead of 'review' (since you can skip directly to gallery now)
      'review': 'upload', // Or 'tailor' depending on how they got here, but keeping original for now
      'upload': 'selection',
      'pricing': 'landing',
      'tailor': 'selection', // Added mapping for the new tailor view
      'selection': 'landing'
    };
    setView(history[view] || 'landing');
  };

  const openResumeImportOptions = (file, source = 'upload') => {
    if (!file) return;

    setSelectedMode('upload');
    resetRepositoryTracking();
    setPendingResumeFile(file);
    setResumeUploadSource(source);
    setView('upload-options');
  };

  // 2. File Processing Logic (For Standard Upload)
  const handleResumeImport = async (importMode) => {
    if (!pendingResumeFile) return;

    setResumeImportMode(importMode);
    setIsAnalyzing(true);
    setLoadingMessage('Reading your resume...');
    
    try {
      // Step A: Extract Text
      const rawText = await extractTextFromFile(pendingResumeFile);

      let jsonData = null;

      if (importMode === 'verbatim') {
        setLoadingMessage('Extracting your resume without rewriting the content...');
        jsonData = await extractResumeDataVerbatim(rawText);
      } else {
        setLoadingMessage('AI is extracting your profile...');
        const extractedData = await extractResumeData(rawText);
        setLoadingMessage('AI is strengthening your resume content...');
        jsonData = await enhanceResumeData(extractedData);
      }
      
      if (jsonData) {
        upsertProfileFromResume(jsonData);
        setResumeData(jsonData);
        setCurrentJDText('');
        setView('review'); // Move to Review Screen
      }
    } catch (error) {
      alert("Error: " + error.message);
      console.error(error);
    } finally {
      setPendingResumeFile(null);
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="theme-app-shell min-h-screen font-sans text-slate-900 relative">
      {view !== 'landing' && view !== 'builder' && view !== 'pricing' && (
        <div className="fixed right-4 top-4 z-[9998] flex items-center gap-2 sm:right-6 sm:top-6">
          {view !== 'repository' && view !== 'builder' && (
            <button
              type="button"
              onClick={() => openRepository(view)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-600 shadow-sm shadow-slate-200/70 transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
            >
              <FolderOpen size={14} />
              <span className="hidden sm:inline">My Repository</span>
            </button>
          )}
          <ThemeToggleButton />
        </div>
      )}
      
      {/* VIEW: LANDING */}
      {view === 'landing' && (
        <ResumeBuilderLanding 
          onStart={() => {
            resetRepositoryTracking();
            setResumeData(null);
            setSelectedMode(null);
            setView('selection');
          }} 
          onFileSelect={(f) => openResumeImportOptions(f, 'landing')} 
          onViewTemplates={() => {
            resetRepositoryTracking();
            setResumeData(null);
            setSelectedMode('scratch');
            setResumeImportMode('ai-enhanced');
            setView('gallery');
          }}
          onOpenRepository={() => openRepository('landing')}
          onOpenPricing={() => setView('pricing')}
        />
      )}

      {view === 'pricing' && (
        <PricingPage
          onStart={() => {
            resetRepositoryTracking();
            setResumeData(null);
            setSelectedMode(null);
            setView('selection');
          }}
          onOpenRepository={() => openRepository('pricing')}
          onOpenHome={() => navigateToLandingSection('top')}
          onOpenPricing={() => setView('pricing')}
          onNavigateLandingSection={navigateToLandingSection}
          onViewTemplates={() => {
            resetRepositoryTracking();
            setResumeData(null);
            setSelectedMode('scratch');
            setResumeImportMode('ai-enhanced');
            setView('gallery');
          }}
        />
      )}

      {/* VIEW: SELECTION */}
      {view === 'selection' && (
        <ResumeSelection onSelect={(mode) => {
          setSelectedMode(mode);
          if (mode === 'scratch') { 
            resetRepositoryTracking();
            setResumeImportMode('ai-enhanced');
            setResumeData(null); 
            setView('gallery'); 
          } else if (mode === 'tailor') { 
            resetRepositoryTracking();
            setResumeImportMode('ai-enhanced');
            setView('tailor'); // Route to new Targeted Resume Engine
          } else { 
            resetRepositoryTracking();
            setView('upload'); 
          }
        }} />
      )}

      {/* VIEW: UPLOAD (Dark UI) */}
      {view === 'upload' && (
        <ResumeUpload 
          onFileUpload={(file) => openResumeImportOptions(file, 'upload')} 
          onBack={handleBack} 
        />
      )}

      {/* VIEW: IMPORT OPTIONS */}
      {view === 'upload-options' && (
        <ResumeImportOptions
          file={pendingResumeFile}
          onBack={handleBack}
          onSelectOption={handleResumeImport}
        />
      )}

      {/* VIEW: TAILOR (The New Job Alignment Engine) */}
      {view === 'tailor' && (
        <TargetedResumeUI 
          onCancel={handleBack}
          onComplete={(finalTailoredJson, jdText) => {
            // Once the 3-step AI finishes, save the data and send them to the review screen
            setResumeImportMode('ai-enhanced');
            upsertProfileFromResume(finalTailoredJson);
            setResumeData(finalTailoredJson);
            setCurrentJDText(jdText || '');
            setView('review'); 
          }}
        />
      )}

      {/* VIEW: JD UPLOAD (Optional) */}
      {view === 'jd-upload' && (
        <JDUpload onSubmit={() => {}} onBack={handleBack} />
      )}

      {/* VIEW: REVIEW DATA (Clean UI) */}
      {view === 'review' && (
        <DataReview 
          extractedData={resumeData} 
          importMode={resumeImportMode}
          onComplete={(data) => {
            upsertProfileFromResume(data);
            setResumeData(data);
            setView('gallery');
          }} 
        />
      )}

      {/* VIEW: GALLERY (Clean UI) */}
      {view === 'gallery' && (
        <TemplateGallery 
          resumeData={resumeData}
          mode={selectedMode}
          onSelectTemplate={(tpl) => {
            setBuilderReturnView('gallery');
            setSelectedTemplate(tpl);
            setView('builder');
          }} 
          onBack={handleBack} 
        />
      )}

      {view === 'repository' && (
        <ResumeRepository
          onBack={handleBack}
          onStartNew={() => {
            resetRepositoryTracking();
            setResumeData(null);
            setSelectedMode(null);
            setView('selection');
          }}
          onOpenResume={(record) => {
            setResumeData(record.resumeData || null);
            setSelectedTemplate(record.selectedTemplate || 'professional');
            setSelectedMode(record.mode || 'scratch');
            setResumeImportMode(record.importMode || 'ai-enhanced');
            setCurrentJDText(record.jdText || '');
            setActiveResumeRecordId(record.id);
            setBuilderReturnView('repository');
            setView('builder');
          }}
        />
      )}

      {/* VIEW: EDITOR (Clean UI) */}
      {view === 'builder' && (
        <Editor 
          initialData={resumeData} 
          selectedTemplate={selectedTemplate}
          onChangeTemplate={setSelectedTemplate}
          onBack={handleBack}
          mode={selectedMode} // <--- ADDED RESTRICTION PROP HERE
          importMode={resumeImportMode}
          initialJDText={currentJDText}
          resumeRecordId={activeResumeRecordId}
          onResumeRecordChange={setActiveResumeRecordId}
          onOpenRepository={() => openRepository('builder')}
          onWorkspaceSnapshotChange={({ resume, jdText, selectedTemplate: nextTemplate }) => {
            setResumeData(resume);
            setCurrentJDText(jdText || '');
            if (nextTemplate) {
              setSelectedTemplate(nextTemplate);
            }
          }}
        />
      )}

      {/* GLOBAL LOADING OVERLAY (For Standard Upload only) */}
      {isAnalyzing && (
        <div className="fixed inset-0 z-[9999] bg-[color:var(--theme-surface-glass)] backdrop-blur-xl flex flex-col items-center justify-center text-[color:var(--theme-text-primary)]">
          <div className="theme-section-surface rounded-[2rem] px-10 py-10 text-center">
            <Loader2 size={64} className="mx-auto mb-6 animate-spin text-[color:var(--theme-accent)]" />
            <h2 className="text-2xl font-bold">{loadingMessage}</h2>
            <p className="mt-2 text-[color:var(--theme-text-secondary)]">This usually takes about 10-15 seconds.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
