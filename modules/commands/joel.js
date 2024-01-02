const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "joel",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Jasper Wu",
  description: "noprefix",
  usePrefix: false,
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["What can I do for you?","Yeah thats my name.","I'm Kiyomin hi!","Stop mentioning my name!",];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
     return api.sendMessage("️ Good Night, wifey", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm")) {
     return api.sendMessage(` Good morning ${name} `, threadID);
   };

  if ((event.body.toLowerCase() == "sagip lc") || (event.body.toLowerCase() == "lc")) {
     return api.sendMessage(`Sagip kona last chat sabi ni ${name} `, threadID);
   };




   if ((event.body.toLowerCase() == "may bot") || (event.body.toLowerCase() == "May bot")) {
     return api.sendMessage("Tanga kaba?", threadID);
   };

   if ((event.body.toLowerCase() == "jj") || (event.body.toLowerCase() == "JJ")) {
     return api.sendMessage("maoy!!", threadID);
   };
if ((event.body.toLowerCase() == "albert") || (event.body.toLowerCase() == "Albert")) {
     return api.sendMessage("buloy!!!", threadID);
   };

   if ((event.body.toLowerCase() == "HAHAHA") || (event.body.toLowerCase() == "hahaha")) {
     return api.sendMessage("PM, mas sasaya ka lalo", threadID);
   };
  mess = "{name}"

if ((event.body.toLowerCase() == "ulol") || (event.body.toLowerCase() == "ULOL")) {
     return api.sendMessage("tangina mo ah ulol kadin", threadID);
   };
  if ((event.body.toLowerCase() == "manyakol") || (event.body.toLowerCase() == "Manyakol")) {
     return api.sendMessage("MANYAKOL!!", threadID);
   };

  
   if ((event.body.toLowerCase() == "loveyou") || (event.body.toLowerCase() == "Loveyou")) {
     return api.sendMessage("Loveyoumore", threadID);
   };

   if ((event.body.toLowerCase() == "Prefix") || (event.body.toLowerCase() == "prefix")) {
     return api.sendMessage("「 "+global.config.BOTNAME+" Bot 」\n Prefix: » "+global.config.PREFIX+" «\nUse「 "+global.config.PREFIX+"help 」to show all bot commands.", threadID, messageID);
   };




   if ((event.body.toLowerCase() == "puke") || (event.body.toLowerCase() == "puke")) {
     return api.sendMessage(`manyakol mahilig sa puke si  ${name}`, threadID);
   };
   mess = "{name}"

  
   if ((event.body.toLowerCase() == "brb") || (event.body.toLowerCase() == "Brb")) {
     return api.sendMessage(`Tyt,loveu ${name}`, threadID);
   };
   mess = "{name}"

   if ((event.body.toLowerCase() == "shot") || (event.body.toLowerCase() == "Shot")) {
     return api.sendMessage(`shot daw sabi ni ${name}`, threadID);
   };
   mess = "{name}"

  if ((event.body.toLowerCase() == "sleepwell") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("Good night my love sleepwell "+name, threadID, messageID);
   };
   mess = "{name}"

  if ((event.body.toLowerCase() == "Codm") || (event.body.toLowerCase() == "codm")) {
     return api.sendMessage("Codm daw oh sabi ni, "+name, threadID, messageID);
   };
   mess = "{name}"


  if (event.body.indexOf("kiyomin") == 0 || (event.body.indexOf("Kiyomin") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }