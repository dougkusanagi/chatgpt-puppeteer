import { ChatGPTAPIBrowser } from "chatgpt-browser";
import execShellCommand from "./src/helpers/execShell.js";
import * as dotenv from "dotenv";
dotenv.config();

const translate = (keywords) =>
  `Translate this to Brazilian Portuguese: "${keywords}"`;

async function example() {
  const api = new ChatGPTAPIBrowser({
    email: process.env.OPENAI_EMAIL,
    password: process.env.OPENAI_PASSWORD,
  });

  await api.initSession();

  const result = await api.sendMessage(
    translate(
      "Mastering the Art of Back End Development: Best Practices and Tips"
    )
  );

  console.log(result.response);

  api.closeSession();

  // const resp = await execShellCommand("ls");
  // console.log(resp);
}

example();
