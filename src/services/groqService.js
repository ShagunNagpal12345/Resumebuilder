import { applyResumeSourceCorrections } from "../utils/resumeSourceCorrections";
import { getOpenAIClient, OPENAI_MODEL } from "./openaiClient";
import { recordAiTokenUsage } from "./resumeRepositoryService";

const MAX_RESUME_TEXT_CHARS = 50000;
const prepareResumeTextForModel = (rawText = "") => rawText.slice(0, MAX_RESUME_TEXT_CHARS);

const recordOpenAICompletionUsage = (operation, completion, metadata = {}) => {
  recordAiTokenUsage({
    provider: 'openai',
    source: 'openaiService',
    operation,
    model: completion?.model || OPENAI_MODEL,
    usage: completion?.usage,
    metadata,
  });
};

// ===============================
// 1. EXTRACT DATA
// ===============================
export const extractResumeData = async (rawText) => {
  const openai = getOpenAIClient();
  const prompt = `
You are an expert resume parser. Extract the following information from the text below and return it as a VALID JSON object matching this schema exactly.

Do not add markdown formatting.
Process the full resume text, including later pages and final education sections.

Important parsing guidance:
- Section headings may appear as SUMMARY, PROFESSIONAL SUMMARY, FUNCTIONAL AREAS, TECHNICAL SKILLS, WORK EXPERIENCE, and EDUCATION.
- "FUNCTIONAL AREAS" should be treated as skill/expertise content, not summary text.
- Keep each work experience entry grouped correctly with its own company, title, dates, and bullets.
- Do not drop entries from later pages.
- Do not merge multiple jobs into one.

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
${prepareResumeTextForModel(rawText)}
`;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: OPENAI_MODEL,
    temperature: 0,
    response_format: { type: "json_object" }
  });

  recordOpenAICompletionUsage('extract_resume_data', completion, {
    variant: 'standard',
  });

  const parsedData = JSON.parse(completion.choices[0].message.content);
  return applyResumeSourceCorrections(parsedData, rawText);
};

// ===============================
// 1B. EXACT / VERBATIM EXTRACTION
// ===============================
export const extractResumeDataVerbatim = async (rawText) => {
  const openai = getOpenAIClient();
  const prompt = `
You are an expert resume parser performing STRUCTURE-ONLY extraction.

Your job is to map the resume into the JSON schema WITHOUT rewriting, improving, summarizing, correcting, or adding anything.

Critical rules:
- Preserve the candidate's original wording as closely as possible.
- Do NOT strengthen bullet points.
- Do NOT improve grammar.
- Do NOT add inferred skills, projects, companies, degrees, achievements, or missing details.
- Do NOT split one role into multiple roles unless the source clearly shows multiple separate jobs.
- Do NOT create extra company entries from bullet points.
- If one experience entry has many bullet points, keep them together in the SAME "desc" string separated by "\\n".
- Keep capitalization and phrasing from the source wherever possible.
- Only populate fields that are clearly present in the source.
- If a field is missing, use "" or [].

Return ONLY valid JSON matching this schema:
{
  "personal": { "name": "", "email": "", "phone": "", "location": "", "summary": "", "title": "", "linkedin": "" },
  "experience": [{ "id": 1, "role": "", "company": "", "date": "", "desc": "" }],
  "education": [{ "id": 1, "degree": "", "school": "", "date": "" }],
  "skills": { "technical": [], "soft": [], "core": [] },
  "projects": [{ "id": 1, "name": "", "desc": "" }],
  "certifications": [{ "id": 1, "name": "", "issuer": "", "date": "" }],
  "languages": [{ "id": 1, "name": "", "level": "" }],
  "awards": [{ "id": 1, "name": "", "issuer": "", "date": "" }],
  "volunteering": [{ "id": 1, "role": "", "org": "", "date": "", "desc": "" }]
}

Extra extraction guidance:
- "summary" should contain only the summary/objective/profile text from the resume, not invented text.
- If the resume has a separate "FUNCTIONAL AREAS" or expertise section, map it into skills/core rather than summary.
- If the resume contains a later "Professional Summary" heading that is actually career highlights or achievement bullets, do not let it swallow unrelated sections or duplicate later work experience entries.
- "skills" arrays should only contain skills literally present in the source text.
- Prefer grouping generic competency words into "core" and interpersonal skills into "soft" only when clearly listed that way; otherwise keep concrete tools/technologies in "technical" and place remaining listed skills in "core".
- For experience and projects, preserve bullet order.
- For awards, certifications, education, and volunteering, create one object per real entry from the source and do not duplicate lines across multiple objects.
- Process the full resume text, including later pages and the final education section.

Resume Text:
${prepareResumeTextForModel(rawText)}
`;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: OPENAI_MODEL,
    temperature: 0,
    response_format: { type: "json_object" }
  });

  recordOpenAICompletionUsage('extract_resume_data_verbatim', completion, {
    variant: 'verbatim',
  });

  const exactData = JSON.parse(completion.choices[0].message.content);

  if (exactData.experience) {
    exactData.experience = exactData.experience.map((exp, index) => ({
      id: exp.id || index + 1,
      role: exp.role || "",
      company: exp.company || "",
      date: exp.date || "",
      desc: Array.isArray(exp.desc) ? exp.desc.join("\n") : (exp.desc || ""),
    }));
  }

  if (exactData.projects) {
    exactData.projects = exactData.projects.map((project, index) => ({
      id: project.id || index + 1,
      name: project.name || "",
      desc: Array.isArray(project.desc) ? project.desc.join("\n") : (project.desc || ""),
    }));
  }

  if (exactData.volunteering) {
    exactData.volunteering = exactData.volunteering.map((item, index) => ({
      id: item.id || index + 1,
      role: item.role || "",
      org: item.org || "",
      date: item.date || "",
      desc: Array.isArray(item.desc) ? item.desc.join("\n") : (item.desc || ""),
    }));
  }

  return applyResumeSourceCorrections(exactData, rawText);
};

// ===============================
// 2. ENHANCE RESUME DATA
// ===============================
export const enhanceResumeData = async (jsonData) => {
  try {
    const openai = getOpenAIClient();
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

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: OPENAI_MODEL,
      temperature: 0.3,
      response_format: { type: "json_object" }
    });

    recordOpenAICompletionUsage('enhance_resume_data', completion);

    const enhancedData = JSON.parse(completion.choices[0].message.content);

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
    const openai = getOpenAIClient();
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

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: OPENAI_MODEL,
      temperature: 0.5,
      response_format: { type: "json_object" }
    });

    recordOpenAICompletionUsage('generate_text_variations', completion, {
      contextType,
      jobTitle,
    });

    const parsed = JSON.parse(completion.choices[0].message.content);
    return parsed.variations || [];

  } catch (error) {
    console.error("Text variation generation failed:", error);
    throw error;
  }
};

// ===============================
// 4. LIVE ATS SCORE & KEYWORD CHECKER
// ===============================
export const calculateATSScore = async (resumeData, jdText) => {
  try {
    const openai = getOpenAIClient();
    const prompt = `
You are an expert Applicant Tracking System (ATS) algorithm.
Compare the Candidate's Resume to the Target Job Description.

Analyze the match and return exactly this JSON structure:
{
  "score": 0,
  "feedback": "",
  "matched_keywords": [],
  "missing_keywords": []
}

Target Job Description:
"${jdText}"

Candidate Resume:
${JSON.stringify(resumeData)}
`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: OPENAI_MODEL,
      temperature: 0.1,
      response_format: { type: "json_object" }
    });

    recordOpenAICompletionUsage('calculate_ats_score', completion);

    return JSON.parse(completion.choices[0].message.content);
  } catch (error) {
    console.error("ATS Scoring failed:", error);
    throw error;
  }
};

// ===============================
// 5. TARGETED INTERVIEW PREP
// ===============================
export const generateInterviewPrep = async (resumeData, jdText) => {
  try {
    const openai = getOpenAIClient();
    const prompt = `
You are an elite Executive Interview Coach.
Based on the Candidate's Resume and the Target Job Description, predict the 5 most difficult or likely interview questions they will be asked.

Return exactly this JSON structure:
{
  "questions": [
    {
      "question": "The predicted interview question...",
      "why_they_ask_this": "Brief explanation of what the interviewer is actually looking for...",
      "suggested_strategy": "How the candidate should answer this using the STAR method based on their specific resume experience..."
    }
  ]
}

Target Job Description:
"${jdText}"

Candidate Resume:
${JSON.stringify(resumeData)}
`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: OPENAI_MODEL,
      temperature: 0.4,
      response_format: { type: "json_object" }
    });

    recordOpenAICompletionUsage('generate_interview_prep', completion);

    return JSON.parse(completion.choices[0].message.content);
  } catch (error) {
    console.error("Interview Prep generation failed:", error);
    throw error;
  }
};
