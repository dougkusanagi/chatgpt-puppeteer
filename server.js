import express from "express";
import multer from "multer";
import send from "./chatgpt.js";

const app = express();
const port = process.env.PORT || 3000;

app.post("/", multer().none(), async (req, res) => {
  try {
    const message = req.body.message;
    const conversationId = req.body.conversationId ?? null;
    const messageId = req.body.messageId ?? null;
    const result = await send(message, conversationId, messageId);

    res.send({
      response: result.response,
      conversationId: result.conversationId,
      messageId: result.messageId,
    });
  } catch (error) {
    res.status(500).send("An error occurred.");
    console.error(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Chatgpt server is running on http://localhost:${port}`);
});
