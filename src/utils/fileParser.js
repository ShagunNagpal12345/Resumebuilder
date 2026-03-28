// // // import * as pdfjsLib from 'pdfjs-dist';
// // // import mammoth from 'mammoth';

// // // // Initialize PDF.js worker
// // // pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// // // export const extractTextFromFile = async (file) => {
// // //   const fileType = file.type;

// // //   if (fileType === "application/pdf") {
// // //     return await extractPdfText(file);
// // //   } else if (
// // //     fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || 
// // //     fileType === "application/msword"
// // //   ) {
// // //     return await extractDocxText(file);
// // //   } else {
// // //     throw new Error("Unsupported file type. Please upload PDF or DOCX.");
// // //   }
// // // };

// // // const extractPdfText = async (file) => {
// // //   const arrayBuffer = await file.arrayBuffer();
// // //   const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
// // //   let text = "";

// // //   for (let i = 1; i <= pdf.numPages; i++) {
// // //     const page = await pdf.getPage(i);
// // //     const content = await page.getTextContent();
// // //     const strings = content.items.map((item) => item.str);
// // //     text += strings.join(" ") + "\n";
// // //   }
// // //   return text;
// // // };

// // // const extractDocxText = async (file) => {
// // //   const arrayBuffer = await file.arrayBuffer();
// // //   const result = await mammoth.extractRawText({ arrayBuffer });
// // //   return result.value;
// // // };

// // import * as pdfjsLib from 'pdfjs-dist';
// // import mammoth from 'mammoth';

// // // Set worker explicitly for Vite
// // pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// // export const extractTextFromFile = async (file) => {
// //   console.log("Starting extraction for:", file.name); // Debug Log

// //   try {
// //     const fileType = file.type;

// //     if (fileType === "application/pdf") {
// //       return await extractPdfText(file);
// //     } else if (
// //       fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || 
// //       fileType === "application/msword"
// //     ) {
// //       return await extractDocxText(file);
// //     } else {
// //       // Fallback based on extension if mime-type fails
// //       if (file.name.endsWith('.pdf')) return await extractPdfText(file);
// //       if (file.name.endsWith('.docx')) return await extractDocxText(file);

// //       throw new Error("Unsupported file type. Please upload PDF or DOCX.");
// //     }
// //   } catch (error) {
// //     console.error("Extraction Error:", error);
// //     throw error;
// //   }
// // };

// // const extractPdfText = async (file) => {
// //   const arrayBuffer = await file.arrayBuffer();
// //   const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
// //   let text = "";

// //   // Extract text from all pages
// //   for (let i = 1; i <= pdf.numPages; i++) {
// //     const page = await pdf.getPage(i);
// //     const content = await page.getTextContent();
// //     const strings = content.items.map((item) => item.str);
// //     text += strings.join(" ") + "\n";
// //   }
// //   return text;
// // };

// // const extractDocxText = async (file) => {
// //   const arrayBuffer = await file.arrayBuffer();
// //   const result = await mammoth.extractRawText({ arrayBuffer });
// //   return result.value;
// // };

// import * as pdfjsLib from 'pdfjs-dist';
// import mammoth from 'mammoth';

// // Standard worker setup for Vite
// pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// export const extractTextFromFile = async (file) => {
//   if (!file) throw new Error("No file provided");

//   try {
//     const fileType = file.type;
    
//     // Handle PDF
//     if (fileType === "application/pdf") {
//       const arrayBuffer = await file.arrayBuffer();
//       const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
//       let text = "";
//       for (let i = 1; i <= pdf.numPages; i++) {
//         const page = await pdf.getPage(i);
//         const content = await page.getTextContent();
//         text += content.items.map((item) => item.str).join(" ") + "\n";
//       }
//       return text;
//     } 
//     // Handle Word (DOCX)
//     else if (
//       fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || 
//       file.name.endsWith('.docx')
//     ) {
//       const arrayBuffer = await file.arrayBuffer();
//       const result = await mammoth.extractRawText({ arrayBuffer });
//       return result.value;
//     } 
//     else {
//       throw new Error("Unsupported format. Please use PDF or DOCX.");
//     }
//   } catch (err) {
//     console.error("File parsing error:", err);
//     throw new Error("Failed to read file content.");
//   }
// };



import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";
import Tesseract from "tesseract.js";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.js?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

export const extractTextFromFile = async (file) => {
  if (!file) throw new Error("No file provided");

  try {
    const fileType = file.type;

    // ===============================
    // HANDLE PDF FILES
    // ===============================
    if (fileType === "application/pdf") {

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {

        const page = await pdf.getPage(i);
        const content = await page.getTextContent();

        // Get text items with coordinates
        const items = content.items.map((item) => ({
          text: item.str,
          x: item.transform[4],
          y: item.transform[5]
        }));

        // Sort top-to-bottom then left-to-right
        items.sort((a, b) => {
          if (Math.abs(a.y - b.y) > 5) return b.y - a.y;
          return a.x - b.x;
        });

        let pageText = "";
        let lastY = null;

        for (const item of items) {

          // detect line breaks
          if (lastY !== null && Math.abs(item.y - lastY) > 8) {
            pageText += "\n";
          }

          pageText += item.text + " ";
          lastY = item.y;
        }

        text += pageText + "\n";
      }

      // ===============================
      // OCR FALLBACK FOR IMAGE PDFs
      // ===============================
      if (text.replace(/\s/g, "").length < 50) {

        console.log("Using OCR fallback...");

        const { data } = await Tesseract.recognize(file, "eng");

        text = data.text;
      }

      // ===============================
      // CLEAN BROKEN TEXT
      // ===============================
      text = text
        .replace(/-\n/g, "")              // remove hyphen breaks
        .replace(/\n{3,}/g, "\n\n")       // normalize spacing
        .replace(/([a-z])\n([a-z])/gi, "$1 $2") // fix broken sentences
        .replace(/\s{2,}/g, " ")
        .trim();

      return text;
    }

    // ===============================
    // HANDLE DOCX FILES
    // ===============================
    else if (
      fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.name.endsWith(".docx")
    ) {

      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });

      return result.value
        .replace(/\n{3,}/g, "\n\n")
        .replace(/\s{2,}/g, " ")
        .trim();
    }

    // ===============================
    // UNSUPPORTED FILE
    // ===============================
    else {
      throw new Error("Unsupported format. Please upload PDF or DOCX.");
    }

  } catch (err) {
    console.error("File parsing error:", err);
    throw new Error("Failed to read file content.");
  }
};