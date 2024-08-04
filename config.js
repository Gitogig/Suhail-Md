const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="israniofficial7@gmail.com "
global.location="Rajasthan,India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916350073966";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_26_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAzMixcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDksXG4gICAgICAgIDgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDc1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDczLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgODIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI2LFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDQyLFxuICAgICAgICA1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN0ZBODA0NTdiUjlZemRPWno4RktEanFQcHYzZk9WZ0RrTkQ0SzFUUmozcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0ODY5OTUyNzQ0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEExRTVFQjM2QjY2MkY4RUNDNDg2NzFEODcwN0M4Q0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNzg4NzU3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDg2OTk1Mjc0NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZBMzVFOTY1OTY1QkMyRkM1NzZENkUzRTUxQzFENEYxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc4ODc1OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ4Njk5NTI3NDQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NzVFOTU5QzQ4NUZGNUMyOTQ4MEM0QkQ2OTE5NEI0MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI3ODg3NjJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicHllSDRHX0FSZFNsUk83VXFZTkpSd1wiLFxuICBcInBob25lSWRcIjogXCI4MjU0YzRhYy1jNDZlLTQyNDYtOThjZi1jNmVmZmJkOGJjMWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAyNDksXG4gICAgICA1LFxuICAgICAgMTgsXG4gICAgICA2OSxcbiAgICAgIDEwMCxcbiAgICAgIDEwMyxcbiAgICAgIDI0NSxcbiAgICAgIDkyLFxuICAgICAgMTMwLFxuICAgICAgMjEyLFxuICAgICAgMTE1LFxuICAgICAgMjMzLFxuICAgICAgMTEzLFxuICAgICAgNzQsXG4gICAgICAxNjQsXG4gICAgICAxMzAsXG4gICAgICA4NCxcbiAgICAgIDQyLFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgNjksXG4gICAgICAxMDQsXG4gICAgICAxOTMsXG4gICAgICAyMzQsXG4gICAgICAyMTIsXG4gICAgICAxNzcsXG4gICAgICAxMTMsXG4gICAgICAxMSxcbiAgICAgIDMzLFxuICAgICAgMjQ4LFxuICAgICAgODYsXG4gICAgICAxNDUsXG4gICAgICAzMSxcbiAgICAgIDEyMCxcbiAgICAgIDY3LFxuICAgICAgMTAzLFxuICAgICAgMTkwLFxuICAgICAgMTQyLFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0VBTFY2SFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ4Njk5NTI3NDQ5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHUk9VUCBNQU5BR0VSIEJPVCBUMytcIixcbiAgICBcImxpZFwiOiBcIjI0OTYwNjgwNTkyMTkwMzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDODdzZ0JFSTdYdnJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaG1mdkVRSmFtbEZna3hNRS9ZMkNHM2dQVTNJeGJIOUhUQ2NIRTVHenBYdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJINE1HcEhMcUFOckdrMVg3Q2VBK3BIejNXM0k2cndjWCtoZ1Q1akxlSDVaUWZRN3poQ3d5ZUNqQXM3STh0TDhsempPN216cnRDWDM1N3ZpaDg4ZUZCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUTVBQeG1jcUVVWXlMdHZFK0l4dnZnUUVyT0lQZmZFNzIwaGt1b1Z1eWVxUkR5d2ZDZ2ZlUU5ONWFaZnhCL2dUcm9nREV0MG9LaVdXWEZtS0ZVMEVnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0ODY5OTUyNzQ0OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3ODg3NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFMlhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUyWC5qc29uIjogIntcImtleURhdGFcIjpcIldMeW9EY09DM0VZM0dXcTdsZFZQMTVZcG1WMThnOFJJdVBvRnR3VW5PN2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDIxMjQwMzY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI3ODg3NTg0MDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Group Manager T3+ Bot",
  ownername:process.env.OWNER_NAME|| "ISRANI COMMUNICATIONS PVT LTD ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
