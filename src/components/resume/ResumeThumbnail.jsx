// import React from 'react';
// import ResumePreview from './ResumePreview';

// const ResumeThumbnail = ({ data, templateId }) => {
//   return (
//     <div className="w-full h-full overflow-hidden relative bg-white pointer-events-none select-none">
//       {/* A4 Aspect Ratio Container 
//           We scale the entire A4 page (210mm) down to fit the card width.
//           Standard Card width is ~300px, so a scale of ~0.15 to 0.2 works best.
//       */}
//       <div 
//         className="absolute top-0 left-0 origin-top-left"
//         style={{ 
//           width: '210mm', 
//           height: '397mm', 
//           transform: 'scale(0.18)', // Adjust this number to fit your card size
//         }}
//       >
//         <ResumePreview data={data} template={templateId} />
//       </div>
      
//       {/* Overlay to prevent interaction and add a slight gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 z-10" />
//     </div>
//   );
// };

// export default ResumeThumbnail;

import React, { useRef, useState, useEffect } from 'react';
import ResumePreview from './ResumePreview';

const ResumeThumbnail = ({ data, templateId }) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // Standard A4 width in pixels at 96 DPI is approximately 794px (210mm)
        // We calculate the scale ratio to fit the container width
        const standardA4Width = 794; 
        const newScale = containerWidth / standardA4Width;
        setScale(newScale);
      }
    };

    // Calculate immediately
    handleResize();

    // Recalculate on window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full overflow-hidden relative bg-white pointer-events-none select-none"
    >
      {/* 1. transform-origin-top-left: Anchors the resume to the top-left corner.
          2. We scale based on the ratio of "Current Container Width" / "A4 Width".
      */}
      <div 
        className="origin-top-left shadow-sm"
        style={{ 
          width: '210mm', // Physical A4 width
          minHeight: '297mm', // Physical A4 height
          transform: `scale(${scale})`, 
        }}
      >
        <ResumePreview data={data} template={templateId} />
      </div>
      
      {/* Overlay to prevent interaction (optional, keeps it as a thumbnail) */}
      <div className="absolute inset-0 bg-transparent z-10" />
    </div>
  );
};

export default ResumeThumbnail;