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
import { Loader2 } from 'lucide-react';

// --- LANDING COMPONENTS (The Dark UI) ---
// Adjust these paths if your file names are different
import ResumeBuilderLanding from './components/landing/ResumeBuilderLanding';
import ResumeSelection from './components/builder/ResumeSelection'; 
import ResumeUpload from './components/landing/ResumeUpload'; 
import JDUpload from './components/landing/JDUpload';

// --- NEW TARGETED RESUME COMPONENT ---
// Adjust path to where you saved TargetedResumeUI.jsx
import TargetedResumeUI from './components/resume/TargetedResumeUI';

// --- BUILDER COMPONENTS (The Clean UI) ---
import TemplateGallery from './components/builder/TemplateGallery';
import Editor from './components/builder/Editor';
import DataReview from './components/builder/DataReview';

// --- LOGIC ---
import { extractResumeData } from './services/groqService';
import { extractTextFromFile } from './utils/fileParser';

const App = () => {
  const [view, setView] = useState('landing');
  const [resumeData, setResumeData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [selectedMode, setSelectedMode] = useState(null); 
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  // 1. Navigation Helpers
  const handleBack = () => {
    // Note: If you want 'back' from gallery to always go to landing when no data exists, 
    // you might want to adjust this logic later. For now, keeping your original map.
    const history = {
      'builder': 'gallery',
      'gallery': 'landing', // Changed this so "Back" from Gallery goes to Landing instead of 'review' (since you can skip directly to gallery now)
      'review': 'upload', // Or 'tailor' depending on how they got here, but keeping original for now
      'upload': 'selection',
      'tailor': 'selection', // Added mapping for the new tailor view
      'selection': 'landing'
    };
    setView(history[view] || 'landing');
  };

  // 2. File Processing Logic (For Standard Upload)
  const handleResumeFile = async (file) => {
    if (!file) return;
    
    setIsAnalyzing(true);
    setLoadingMessage('Reading your resume...');
    
    try {
      // Step A: Extract Text
      const rawText = await extractTextFromFile(file);
      
      // Step B: AI Analysis
      setLoadingMessage('AI is extracting your profile...');
      const jsonData = await extractResumeData(rawText);
      
      if (jsonData) {
        setResumeData(jsonData);
        setView('review'); // Move to Review Screen
      }
    } catch (error) {
      alert("Error: " + error.message);
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 relative">
      
      {/* VIEW: LANDING */}
      {view === 'landing' && (
        <ResumeBuilderLanding 
          onStart={() => setView('selection')} 
          onFileSelect={(f) => { setSelectedMode('upload'); handleResumeFile(f); }} 
          onViewTemplates={() => setView('gallery')} 
        />
      )}

      {/* VIEW: SELECTION */}
      {view === 'selection' && (
        <ResumeSelection onSelect={(mode) => {
          setSelectedMode(mode);
          if (mode === 'scratch') { 
            setResumeData(null); 
            setView('gallery'); 
          } else if (mode === 'tailor') { 
            setView('tailor'); // Route to new Targeted Resume Engine
          } else { 
            setView('upload'); 
          }
        }} />
      )}

      {/* VIEW: UPLOAD (Dark UI) */}
      {view === 'upload' && (
        <ResumeUpload 
          onFileUpload={handleResumeFile} 
          onBack={handleBack} 
        />
      )}

      {/* VIEW: TAILOR (The New Job Alignment Engine) */}
      {view === 'tailor' && (
        <TargetedResumeUI 
          onCancel={handleBack}
          onComplete={(finalTailoredJson) => {
            // Once the 3-step AI finishes, save the data and send them to the review screen
            setResumeData(finalTailoredJson);
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
          onComplete={(data) => { setResumeData(data); setView('gallery'); }} 
        />
      )}

      {/* VIEW: GALLERY (Clean UI) */}
      {view === 'gallery' && (
        <TemplateGallery 
          onSelectTemplate={(tpl) => { setSelectedTemplate(tpl); setView('builder'); }} 
          onBack={handleBack} 
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
        />
      )}

      {/* GLOBAL LOADING OVERLAY (For Standard Upload only) */}
      {isAnalyzing && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-white">
          <Loader2 size={64} className="text-teal-400 animate-spin mb-6" />
          <h2 className="text-2xl font-bold">{loadingMessage}</h2>
          <p className="text-slate-400 mt-2">This usually takes about 10-15 seconds.</p>
        </div>
      )}
    </div>
  );
};

export default App;