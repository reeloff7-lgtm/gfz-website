import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import http from "http";

dotenv.config();

// Environment variables
const BOT_TOKEN = process.env.BOT_TOKEN; // your bot token
const GROUP_CHAT_ID = process.env.GROUP_CHAT_ID; // group where logs go
const GROUP_INVITE_LINK = process.env.GROUP_INVITE_LINK; // your group invite link

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// When user clicks link with ?start=OrderID
bot.onText(/\/start (.+)/, (msg, match) => {
  const orderId = match[1];
  const chatId = msg.chat.id;

  // Create user display (username if exists, otherwise clickable first name)
  const userDisplay = msg.from.username
    ? `@${msg.from.username}`
    : `[${msg.from.first_name}](tg://user?id=${msg.from.id})`;

  // Buyer side
  bot.sendMessage(
    chatId,
    `✅ Hi ${msg.from.first_name || "there"}! I’ve received your Order ID: ${orderId}\n\n` +
      `Please upload your payment screenshot here.\n\n` +
      `👉 Also join our group for ORDER COMPLETION updates & support: ${GROUP_INVITE_LINK}`,
  );

  // Send to group (log)
  if (GROUP_CHAT_ID) {
    bot.sendMessage(
      GROUP_CHAT_ID,
      `📦 New Order!\n\n` +
        `Order ID: ${orderId}\n` +
        `👤 User: ${userDisplay}\n` +
        `🆔 Telegram ID: ${msg.from.id}\n` +
        `💬 Name: ${msg.from.first_name || ""} ${msg.from.last_name || ""}`,
      { parse_mode: "Markdown" },
    );
  }
});

// If user sends photo
bot.on("photo", (msg) => {
  const chatId = msg.chat.id;

  // Tell buyer
  bot.sendMessage(chatId, "📸 Got your screenshot! We’ll verify soon.");

  // Forward screenshot to group
  if (GROUP_CHAT_ID) {
    bot.forwardMessage(GROUP_CHAT_ID, chatId, msg.message_id);
  }
});

// Debug: log chat info
bot.on("message", (msg) => {
  console.log("Chat info:", msg.chat);
});

// Fake server so platform thinks we're alive
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => res.end("Bot running")).listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
