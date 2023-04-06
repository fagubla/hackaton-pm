require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
const ChatGptController = require("./controller/chatGpt.controller");

// Allow cors
const cors = require("cors");
app.use(cors());

app.post("/ask-to-chat-gpt", ChatGptController.askToChatGpt);

app.listen(3000, () => console.log("Server running on port 3000 --"));
