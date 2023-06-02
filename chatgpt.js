import { ChatGPTAPIBrowser } from "chatgpt-browser";
import env from "dotenv";
env.config();

async function send(text) {
  const api = new ChatGPTAPIBrowser({
    email: process.env.OPENAI_EMAIL,
    password: process.env.OPENAI_PASSWORD,
  });

  await api.initSession();
  const result = await api.sendMessage(text);
  api.closeSession();
  return result.response;
}

export default send;
