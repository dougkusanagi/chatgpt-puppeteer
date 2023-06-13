import { ChatGPTAPIBrowser } from "chatgpt-browser";
import env from "dotenv";
env.config();

async function send(message, conversationId = null, messageId = null) {
  const api = new ChatGPTAPIBrowser({
    email: process.env.OPENAI_EMAIL,
    password: process.env.OPENAI_PASSWORD,
  });

  let options = {};
  if (conversationId && messageId) {
    options = {
      conversationId,
      parentMessageId: messageId,
    };
  }

  await api.initSession();
  const result = await api.sendMessage(message, options);

  api.closeSession();
  return result;
}

export default send;
