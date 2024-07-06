const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349158269047";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_58_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAwLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDk2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcxLFxuICAgICAgICA1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzLFxuICAgICAgICA0NixcbiAgICAgICAgMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDMzLFxuICAgICAgICAxNyxcbiAgICAgICAgNixcbiAgICAgICAgNDksXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMyxcbiAgICAgICAgNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgODUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDczLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmt5cEx0NWRMVHpML0o0ZzhOTS8wUU53b3RqMDlQWnhUOEZ3ZzBxa0lkOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidkpQTFpReFpRclNvZ1BXMUZ4eVRUQVwiLFxuICBcInBob25lSWRcIjogXCJiMWIyZTU0Mi0xNTc4LTQ4NDktYTg5My0wNTczMjJlYmU1NTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgMjEwLFxuICAgICAgMjMxLFxuICAgICAgMzAsXG4gICAgICAxNCxcbiAgICAgIDkzLFxuICAgICAgMjE1LFxuICAgICAgMjQwLFxuICAgICAgMSxcbiAgICAgIDE0MCxcbiAgICAgIDY2LFxuICAgICAgMTg5LFxuICAgICAgMTY0LFxuICAgICAgMzcsXG4gICAgICA1MyxcbiAgICAgIDg1LFxuICAgICAgMzEsXG4gICAgICAxMzAsXG4gICAgICA1NSxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAxMjksXG4gICAgICAyNDUsXG4gICAgICAxOCxcbiAgICAgIDU0LFxuICAgICAgOSxcbiAgICAgIDUxLFxuICAgICAgNTMsXG4gICAgICA0NixcbiAgICAgIDEyOCxcbiAgICAgIDAsXG4gICAgICAyNTQsXG4gICAgICA5NCxcbiAgICAgIDk0LFxuICAgICAgMjAwLFxuICAgICAgNzgsXG4gICAgICAyMzksXG4gICAgICAxNzAsXG4gICAgICAyNDcsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0dYVEoyN1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTgyNjkwNDc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODQ0NzM5MzY4NzU3MzM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeVVzc1FDRU9XYXBiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVZOTJEdHZROHBTUEdsV1BtYzZ1V3pPdVl4Uy93YzBTVW1Ualp4WkwxV0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibkRpSFJCTDBELzJuSmFVSEtMU3NFbkNBVk9UMkZjTkhwNFo0TUMvajVkaVNoT3BjdFRYdW5naEtIUTdJQ2lOVVN5cDJKelp5ZktzSFAySTFrRUpXQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWEpWTmF3bmJPZkJtb0MrRFd2amxaYlhudGYwcVhPZ3BhN1A5ZTh6R3FKVjdITHlqNzdDL0kvdWY5UisxOHpHYi8xMmVKbngrMFJHeXlIa1VzTlFJaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1ODI2OTA0NzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNzQyODBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
