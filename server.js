import express from "express";
import multer from "multer";
import send from "./chatgpt.js";

const app = express();
const port = process.env.PORT || 3000;
const upload = multer();

app.post("/", upload.none(), async (req, res) => {
  try {
    const message = req.body.message;
    const result = await send(message);
    res.send(result);
  } catch (error) {
    res.status(500).send("An error occurred.");
    console.error(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Chatgpt server is running on http://localhost:${port}`);
});
