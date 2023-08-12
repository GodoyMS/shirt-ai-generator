
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const config = {
  development: {
    backendUrl: "https://shirt-ai-generator-backend.onrender.com/api/v1/dalle",
  },
  production: {
    backendUrl: "https://devswag.onrender.com/api/v1/dalle",
  },
  apikeyOpenAI:apiKey
};

export default config;
