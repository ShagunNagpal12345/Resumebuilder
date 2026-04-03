import OpenAI from 'openai';

export const OPENAI_MODEL = 'gpt-4o-mini';

let cachedClient = null;

export const getOpenAIClient = () => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('Missing VITE_OPENAI_API_KEY. Add your OpenAI API key to the .env file.');
  }

  if (!cachedClient) {
    cachedClient = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true,
    });
  }

  return cachedClient;
};
