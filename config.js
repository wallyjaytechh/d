//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "https://i.imgur.com/PGHTuIr.mp4";
global.video = "https://i.imgur.com/PGHTuIr.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wallyjay123@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "2348144317152@s.whatsapp.net,2348155763709@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://wallyjaytech_941w_user:YDJqpd0Z4X14JS0X67doaiPT7Jy7rVtp@dpg-cqrqa3o8fa8c73d8nsvg-a.oregon-postgres.render.com/wallyjaytech_941w";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Wallyjaytechh/WALLYJAYTECH-MD";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/FTuAbXCgwPLDt96BK7bm5P";
global.website = process.env.GURL || "https://chat.whatsapp.com/FTuAbXCgwPLDt96BK7bm5P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/wallyjaytech";
global.sudo = process.env.SUDO || "2348144317152,2348155763709";
global.owner = process.env.OWNER_NUMBER || "2348144317152";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://graph.org/file/99c8f663a3df96a5a54de.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "2348054984935";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU1pOUROb2NIamlTOW1IQ25vRnlXei9qUElQZGZzbmtpNTY3ZzVkQ2syND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEZwY0hnMzkySWgxNlVsL09XaFNoeXowbmh4UnNHbHljN21zR3VxWk5XND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQkwxbXlUd0ZIcXR3bWFWVk1CWXBGS1hIa0RsUWZreVVlT292V0EwSzFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEdlhmZldCeHFwYkV4dWljZENQRjhxN0FNd2djY0NYeEVrajVOOUh2VVFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVPbjRQRHVyaGdMSDRaU1NjRVJDWmdEOEJQVktTTHlLOW5Zb01MK0tURUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt1ZndrV25LcE5LQU4wYUFEV1M2NGJSUW94NGtmRTRTbVgyQUtBNlE5Mjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkh5dFd0YkFvZFJSU2p4bEUyNU9kcTJQVWpYMXNwdVVGUFl5SmxoTnJXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHdpUDlVa1hBcjFDSmFUdUZDWnVocE96NnBDVmpZQlh6djVHdm1YU2RBdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5YUWZEc2xtYWc1dUVwTVhzUWk3aXM4YmtkS2VlZVgvV3k5NHFIVHR6UFZocmlnaUxMQ0lmZlFHbXdLMmZaeDl2RzAzQlFyWldLR3haY0VPWnRVOUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MSwiYWR2U2VjcmV0S2V5IjoiRzM2dTVJSk9OR2xJTWNqZldMVStOeHZnYjVRd3hXRW14YnVvWUhzVzFycz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOUVzaVhmRGtSTzI1VEd1NHhuaWNUdyIsInBob25lSWQiOiJhYTU5ZWUzZS1lODFiLTRhNzgtYWVkZS1jNjg3YjY2YWZhODkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTZ6eTFUTmM0VXRMOXRnMGV2c2tsbXZUNjI4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhvazFVWXJjVFA1UWFqNVZBK016SFdIRkZzZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJXWldaQ0FCUCIsIm1lIjp7ImlkIjoiMjM0ODE0NDMxNzE1Mjo2M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0NyLzV3Q0VQVzV3TFlHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ0Y0eVZEVWxZcE4xd0hnK1hLaG1UZFNWMFpOMmJVV2h1WUNMSlNsbUYzND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVSsvRVhNZCszdmVzT25MUWVCOWZZSTRFUVMzM0U1M1NYOERjRnExNHB6djNtZVBza0xmWUx1blVxRnEzUUVOQnE2R3o5OG5xc2NOVnlDd1ExN2NiQVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImtGc1QrUEd4RlNLZ0wxckwxR0FuZEtHZnB3THZUZlIzN3IyMkp4V3VyRkUrbUhHVkdhTnBGb1MvU0paNGhFWVRZcmRNbHBkdVdrUVlqaSthaVhNL0NBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE0NDMxNzE1Mjo2M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRaGVNbFExSldLVGRjQjRQbHlvWmszVWxkR1RkbTFGb2JtQWl5VXBaaGQrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0OTE0OTQ2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUloQiJ9"
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0",
  caption: process.env.CAPTION || "`INVENTED BY WALLY JAY TECH™`",
  author: process.env.PACK_AUTHER || "WALLYJAYTECH-MD",
  packname: process.env.PACK_NAME || "Wally Jay Tech",
  botname: process.env.BOT_NAME || "WALLYJAYTECH-MD",
  ownername: process.env.OWNER_NAME || "WALLY JAY TECH",
  errorChat: process.env.ERROR_CHAT || "Sorry Dear, I'm unable To Process Your Request. Contact My Founder To Fix The Problem, Thank You ♥",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "5NcxjXcNs2CA2frKwDVM815b",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-5FsMazBDiCvuNDIJBsxcuCjziowdQHPNJbHONPzEMcT3BlbkFJL_dkSnnxtnXUfO8u5cqqe7au4ySLN7cM8pEZJYcf4A",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WALLYJAYTECH-MD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
