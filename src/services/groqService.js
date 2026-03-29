// import Groq from "groq-sdk";

// // --- API KEY 1: EXTRACTION ---
// const groqExtract = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY_1, dangerouslyAllowBrowser: true });

// // --- API KEY 2: ENHANCEMENT ---
// const groqEnhance = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY_2, dangerouslyAllowBrowser: true });

// // 1. EXTRACT DATA
// export const extractResumeData = async (rawText) => {
//   const prompt = `
//     You are an expert resume parser. Extract the following information from the text below and return it as a VALID JSON object matching this schema exactly. Do not add markdown formatting.
    
//     Schema:
//     {
//       "personal": { "name": "", "email": "", "phone": "", "location": "", "summary": "", "title": "" },
//       "experience": [{ "id": 1, "role": "", "company": "", "date": "", "desc": "bullet points here" }],
//       "education": [{ "id": 1, "degree": "", "school": "", "date": "" }],
//       "skills": { "technical": [], "soft": [], "core": [] },
//       "projects": [{ "id": 1, "name": "", "desc": "" }],
//       "certifications": [{ "id": 1, "name": "", "issuer": "", "date": "" }],
//       "languages": [{ "name": "", "level": "" }],
//       "awards": [{ "id": 1, "name": "", "issuer": "" }]
//     }

//     Resume Text:
//     ${rawText.substring(0, 15000)}
//   `;

//   // UPDATED MODEL HERE: changed from 'mixtral-8x7b-32768' to 'llama-3.3-70b-versatile'
//   const completion = await groqExtract.chat.completions.create({
//     messages: [{ role: "user", content: prompt }],
//     model: "llama-3.3-70b-versatile", 
//     temperature: 0,
//     response_format: { type: "json_object" }
//   });

//   return JSON.parse(completion.choices[0].message.content);
// };

// // 2. ENHANCE DATA
// export const enhanceResumeData = async (jsonData) => {
//   const prompt = `
//     You are a professional resume writer. Take this JSON resume data and polish it to industry standards.
    
//     1. Fix grammar and typos.
//     2. Rewrite experience bullet points to be "Action-Oriented" and "Result-Driven" (e.g., "Increased sales by 20%").
//     3. Add missing relevant skills based on the job titles found.
//     4. Make the professional summary punchy and impactful.
//     5. Return ONLY the updated JSON structure.

//     Current Data:
//     ${JSON.stringify(jsonData)}
//   `;

//   // Ensure this model is also valid. 'llama3-70b-8192' is usually safe, or use 'llama-3.3-70b-versatile' here too.
//   const completion = await groqEnhance.chat.completions.create({
//     messages: [{ role: "user", content: prompt }],
//     model: "llama-3.3-70b-versatile", 
//     temperature: 0.3,
//     response_format: { type: "json_object" }
//   });

//   return JSON.parse(completion.choices[0].message.content);
// };

// import Groq from "groq-sdk";

// // --- API KEY 1: EXTRACTION ---
// const groqExtract = new Groq({
//   apiKey: import.meta.env.VITE_GROQ_API_KEY_1,
//   dangerouslyAllowBrowser: true
// });

// // --- API KEY 2: ENHANCEMENT ---
// const groqEnhance = new Groq({
//   apiKey: import.meta.env.VITE_GROQ_API_KEY_2,
//   dangerouslyAllowBrowser: true
// });


// // ===============================
// // 1. EXTRACT DATA FROM RESUME
// // ===============================
// export const extractResumeData = async (rawText) => {
//   try {
//     const prompt = `
// You are an expert resume parser.

// Extract the following information from the resume text and return ONLY a VALID JSON object matching the schema exactly.

// Rules:
// - No markdown
// - No explanations
// - No extra fields
// - Fill missing fields with empty string "" or empty array []

// Schema:
// {
//   "personal": { "name": "","email": "", "phone": "", "location": "", "summary": "", "title": "" },
//   "experience": [{ "id": 1, "role": "", "company": "", "date": "", "desc": "bullet points here" }],
//   "education": [{ "id": 1, "degree": "", "school": "", "date": "" }],
//   "skills": { "technical": [], "soft": [], "core": [] },
//   "projects": [{ "id": 1, "name": "", "desc": "" }],
//   "certifications": [{ "id": 1, "name": "", "issuer": "", "date": "" }],
//   "languages": [{ "name": "", "level": "" }],
//   "awards": [{ "id": 1, "name": "", "issuer": "" }]
// }

// Resume Text:
// ${rawText.substring(0, 15000)}
// `;

//     const completion = await groqExtract.chat.completions.create({
//       messages: [{ role: "user", content: prompt }],
//       model: "llama-3.3-70b-versatile",
//       temperature: 0,
//       response_format: { type: "json_object" }
//     });

//     return JSON.parse(completion.choices[0].message.content);

//   } catch (error) {
//     console.error("Resume extraction failed:", error);
//     throw error;
//   }
// };



// // ===============================
// // 2. ENHANCE RESUME DATA
// // ===============================
// export const enhanceResumeData = async (jsonData) => {
//   try {
//     const prompt = `
// You are an elite resume strategist specializing in ATS-optimized resumes.

// Analyze the candidate profile and enhance the resume so it becomes highly competitive for modern hiring systems and recruiters.

// Instructions:

// 1. Understand the candidate
// - Identify the primary domain (Engineering, Data Science, Marketing, Product, etc.)
// - Infer likely target roles

// 2. Improve Professional Summary
// - 3–4 impactful sentences
// - Mention experience level, specialization, and strengths

// 3. Rewrite Experience
// Transform descriptions into strong bullet points using:

// Action Verb + Responsibility + Technology + Result

// Example:
// "Built a scalable ETL pipeline using Python and Airflow, reducing data processing time by 40%."

// 4. Improve Projects
// Highlight:
// - technologies used
// - impact
// - measurable outcome if possible

// 5. Improve Skills
// Add missing skills inferred from:
// - job titles
// - tools mentioned
// - projects

// Organize skills into:
// technical / core / soft

// 6. ATS Optimization
// Ensure resume includes important industry keywords naturally.

// 7. Maintain JSON Structure
// DO NOT change schema.
// DO NOT remove fields.
// ONLY enhance text.

// 8. Keep Information Realistic
// Do NOT invent companies, degrees, or fake achievements.

// Output Rules:
// Return ONLY valid JSON.
// No explanation.
// No markdown.

// Candidate Resume JSON:
// ${JSON.stringify(jsonData, null, 2)}
// `;

//     const completion = await groqEnhance.chat.completions.create({
//       messages: [{ role: "user", content: prompt }],
//       model: "llama-3.3-70b-versatile",
//       temperature: 0.3,
//       response_format: { type: "json_object" }
//     });

//     return JSON.parse(completion.choices[0].message.content);

//   } catch (error) {
//     console.error("Resume enhancement failed:", error);
//     throw error;
//   }
// };

// import Groq from "groq-sdk";

// // --- API KEY 1: EXTRACTION ---
// const groqExtract = new Groq({
//   apiKey: import.meta.env.VITE_GROQ_API_KEY_1,
//   dangerouslyAllowBrowser: true
// });

// // --- API KEY 2: ENHANCEMENT ---
// const groqEnhance = new Groq({
//   apiKey: import.meta.env.VITE_GROQ_API_KEY_2,
//   dangerouslyAllowBrowser: true
// });


// // ===============================
// // 1. EXTRACT DATA
// // ===============================
// export const extractResumeData = async (rawText) => {
//   const prompt = `
// You are an expert resume parser. Extract the following information from the text below and return it as a VALID JSON object matching this schema exactly.

// Do not add markdown formatting.

// Schema:
// {
//   "personal": { "name": "", "email": "", "phone": "", "location": "", "summary": "", "title": "" },
//   "experience": [{ "id": 1, "role": "", "company": "", "date": "", "desc": "bullet points here" }],
//   "education": [{ "id": 1, "degree": "", "school": "", "date": "" }],
//   "skills": { "technical": [], "soft": [], "core": [] },
//   "projects": [{ "id": 1, "name": "", "desc": "" }],
//   "certifications": [{ "id": 1, "name": "", "issuer": "", "date": "" }],
//   "languages": [{ "name": "", "level": "" }],
//   "awards": [{ "id": 1, "name": "", "issuer": "" }]
// }

// Resume Text:
// ${rawText.substring(0, 15000)}
// `;

//   const completion = await groqExtract.chat.completions.create({
//     messages: [{ role: "user", content: prompt }],
//     model: "llama-3.3-70b-versatile",
//     temperature: 0,
//     response_format: { type: "json_object" }
//   });

//   return JSON.parse(completion.choices[0].message.content);
// };



// // ===============================
// // 2. ENHANCE RESUME DATA
// // ===============================
// export const enhanceResumeData = async (jsonData) => {
//   try {
//     const prompt = `
// You are an elite resume strategist specializing in ATS-optimized resumes.

// Enhance the resume content while keeping the EXACT JSON schema.

// Instructions:

// 1. Improve Professional Summary
// - Make it concise and impactful (3–4 sentences)
// - Mention specialization and strengths.

// 2. Rewrite Experience Bullet Points
// Use:
// Action Verb + Task + Technology + Result

// Example:
// "Built scalable ETL pipelines using Python and Airflow, reducing processing time by 40%."

// IMPORTANT:
// Return bullet points as ONE STRING separated by "\\n".
// Do NOT return arrays.

// 3. Improve Projects
// Explain:
// - technologies used
// - impact
// - outcome

// 4. Improve Skills
// Add relevant missing skills inferred from job titles and projects.

// 5. ATS Optimization
// Ensure strong industry keywords appear naturally.

// 6. Maintain JSON Structure
// DO NOT change schema.
// DO NOT remove fields.
// ONLY enhance text.

// 7. Keep Information Realistic
// Do NOT invent companies or fake achievements.

// Output Rules:
// Return ONLY valid JSON.
// No explanation.
// No markdown.

// Candidate Resume JSON:
// ${JSON.stringify(jsonData, null, 2)}
// `;

//     const completion = await groqEnhance.chat.completions.create({
//       messages: [{ role: "user", content: prompt }],
//       model: "llama-3.3-70b-versatile",
//       temperature: 0.3,
//       response_format: { type: "json_object" }
//     });

//     const enhancedData = JSON.parse(completion.choices[0].message.content);

//     // ===============================
//     // NORMALIZE EXPERIENCE DESC
//     // ===============================
//     if (enhancedData.experience) {
//       enhancedData.experience = enhancedData.experience.map((exp) => ({
//         ...exp,
//         desc: Array.isArray(exp.desc)
//           ? exp.desc.join("\n")
//           : exp.desc || ""
//       }));
//     }

//     return enhancedData;

//   } catch (error) {
//     console.error("Resume enhancement failed:", error);
//     throw error;
//   }
// };



import Groq from "groq-sdk";

// --- API KEY 1: EXTRACTION ---
const groqExtract = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY_1,
  dangerouslyAllowBrowser: true
});

// --- API KEY 2: ENHANCEMENT ---
const groqEnhance = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY_2,
  dangerouslyAllowBrowser: true
});


// ===============================
// 1. EXTRACT DATA
// ===============================
export const extractResumeData = async (rawText) => {
  const prompt = `
You are an expert resume parser. Extract the following information from the text below and return it as a VALID JSON object matching this schema exactly.

Do not add markdown formatting.

Schema:
{
  "personal": { "name": "", "email": "", "phone": "", "location": "", "summary": "", "title": "" },
  "experience": [{ "id": 1, "role": "", "company": "", "date": "", "desc": "bullet points here" }],
  "education": [{ "id": 1, "degree": "", "school": "", "date": "" }],
  "skills": { "technical": [], "soft": [], "core": [] },
  "projects": [{ "id": 1, "name": "", "desc": "" }],
  "certifications": [{ "id": 1, "name": "", "issuer": "", "date": "" }],
  "languages": [{ "name": "", "level": "" }],
  "awards": [{ "id": 1, "name": "", "issuer": "" }]
}

Resume Text:
${rawText.substring(0, 15000)}
`;

  const completion = await groqExtract.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "llama-3.3-70b-versatile",
    temperature: 0,
    response_format: { type: "json_object" }
  });

  return JSON.parse(completion.choices[0].message.content);
};



// ===============================
// 2. ENHANCE RESUME DATA
// ===============================
export const enhanceResumeData = async (jsonData) => {
  try {
    const prompt = `
You are an elite resume strategist specializing in ATS-optimized resumes.

Enhance the resume content while keeping the EXACT JSON schema.

Instructions:

1. Improve Professional Summary
- Make it concise and impactful (3–4 sentences)
- Mention specialization and strengths.

2. Rewrite Experience Bullet Points
Use:
Action Verb + Task + Technology + Result

Example:
"Built scalable ETL pipelines using Python and Airflow, reducing processing time by 40%."

IMPORTANT:
Return bullet points as ONE STRING separated by "\\n".
Do NOT return arrays.

3. Improve Projects
Explain:
- technologies used
- impact
- outcome

4. Improve Skills
Add relevant missing skills inferred from job titles and projects.

5. ATS Optimization
Ensure strong industry keywords appear naturally.

6. Maintain JSON Structure
DO NOT change schema.
DO NOT remove fields.
ONLY enhance text.

7. Keep Information Realistic
Do NOT invent companies or fake achievements.

Output Rules:
Return ONLY valid JSON.
No explanation.
No markdown.

Candidate Resume JSON:
${JSON.stringify(jsonData, null, 2)}
`;

    const completion = await groqEnhance.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
      response_format: { type: "json_object" }
    });

    const enhancedData = JSON.parse(completion.choices[0].message.content);

    // ===============================
    // NORMALIZE EXPERIENCE DESC
    // ===============================
    if (enhancedData.experience) {
      enhancedData.experience = enhancedData.experience.map((exp) => ({
        ...exp,
        desc: Array.isArray(exp.desc)
          ? exp.desc.join("\n")
          : exp.desc || ""
      }));
    }

    return enhancedData;

  } catch (error) {
    console.error("Resume enhancement failed:", error);
    throw error;
  }
};


// ===============================
// 3. ENHANCE SPECIFIC TEXT (Variations)
// ===============================
export const generateTextVariations = async (currentText, contextType, jobTitle = "Professional") => {
  try {
    const prompt = `
You are an expert Resume Writer. The user wants to improve a specific piece of text from their resume.
Context: This text is for a "${contextType}" section for a "${jobTitle}" role.

Provide exactly 3 distinct, highly professional, ATS-optimized variations of this text.
- Make them action-oriented and impactful.
- Fix any grammar issues.
- CRITICAL: If the original text contains multiple bullet points or distinct lines, you MUST maintain them as separate bullet points in your variations. Do NOT merge them into a single paragraph.
- Format lists with a bullet symbol (•) and separate each point with a newline (\\n).
- Do NOT use markdown outside the JSON structure.

Return ONLY a valid JSON object matching this schema:
{
  "variations": [
    "Variation 1 text here...",
    "Variation 2 text here...",
    "Variation 3 text here..."
  ]
}

Original Text:
"${currentText}"
`;

    // Using the same enhancement client (API KEY 2)
    const completion = await groqEnhance.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
      temperature: 0.5, 
      response_format: { type: "json_object" }
    });

    const parsed = JSON.parse(completion.choices[0].message.content);
    return parsed.variations || [];

  } catch (error) {
    console.error("Text variation generation failed:", error);
    throw error;
  }
};