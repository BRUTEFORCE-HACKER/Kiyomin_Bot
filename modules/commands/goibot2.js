const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot2",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Remod by Prince Sanel",
  description: "goibot",
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
  var tl = ["putanginamo ka", "wag kapo mag mura ",
            "tanginamo weh di nga", "ang sakit mopo🥺", "🥰", "ano suntukan nalang", "mass putangimo ka😘", "-1 ka sa langit", "Don't mura me uwu." ];
  var rand = tl[Math.floor(Math.random() * tl.length)];
  var tl1 = ["Yes i'm gay.", "I'm gayy", "I love being gay."];
  var rand1 = tl1[Math.floor(Math.random() * tl1.length)];
  var tl2 = [`Yes I am ${global.config.BOTNAME}`, "Why??"];
  var rand2 = tl2[Math.floor(Math.random() * tl2.length)];
  if ((event.body.toLowerCase() == "Laro") || (event.body.toLowerCase() == "laro")) {
     return api.sendMessage("️sige laro ikaw taya", threadID, messageID);
   };

 if ((event.body.toLowerCase() == "Codm") || (event.body.toLowerCase() == "codm")) {
     return api.sendMessage("Codm daw oh sabi ni, "+name, threadID, messageID);
   };
   mess = "{name}"

     if ((event.body.toLowerCase() == "Lestat") || (event.body.toLowerCase() == "lestat")) {
     return api.sendMessage("racer broom broom", threadID, messageID);
   };

       if ((event.body.toLowerCase() == "Lorraine") || (event.body.toLowerCase() == "lorraine")) {
     return api.sendMessage("for lagumbay", threadID, messageID);
   };

       if ((event.body.toLowerCase() == "Mark") || (event.body.toLowerCase() == "mark")) {
     return api.sendMessage("single always", threadID, messageID);
   };

       if ((event.body.toLowerCase() == "Raymund") || (event.body.toLowerCase() == "raymund")) {
     return api.sendMessage("manyakol!", threadID, messageID);
   };

  
   if ((event.body.toLowerCase() == "puke") || (event.body.toLowerCase() == "Puke")) {
     return api.sendMessage("puke ka ng puke adik ka siguro sa puke", threadID, messageID);
   };

  
   if ((event.body.toLowerCase() == "Prefix") || (event.body.toLowerCase() == "prefix")) {
     return api.sendMessage("「 "+global.config.BOTNAME+" Bot 」\n Prefix: » "+global.config.PREFIX+" «\nUse「 "+global.config.PREFIX+"help 」to show all bot commands.", threadID, messageID);
   };
   
   
   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "Lol")) {
     return api.sendMessage("ulol bobo gago putangimo charot.", threadID, messageID);
   };

  
   
   
   if ((event.body.toLowerCase() == "angelica")) {
     return api.sendMessage("Sobrang ganda nyan kaya mahal na mahal ko yan eh.", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i love u") || (event.body.toLowerCase() == "I love u")) {
     return api.sendMessage("i love me🖕🏾", threadID, messageID);
   };
   
   
if ((event.body.toLowerCase() == "Pogi") || (event.body.toLowerCase() == "pogi")) {
     return api.sendMessage("juwel pogi", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "ulol") || (event.body.toLowerCase() == "Ulol")) {
     return api.sendMessage("ulol kadin tanginamo", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "amen") || (event.body.toLowerCase() == "Amen")) {
     return api.sendMessage("AMEN!!", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "bold") || (event.body.toLowerCase() == "Bold")) {
     return api.sendMessage("Meron si joel sa telegram madami", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "Albert") || (event.body.toLowerCase() == "albert")) {
     return api.sendMessage("Buloy", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "Review") || (event.body.toLowerCase() == "review")) {
     return api.sendMessage("uso ayun?", threadID, messageID);
   };

      if ((event.body.toLowerCase() == "JJ") || (event.body.toLowerCase() == "jj")) {
     return api.sendMessage("maoy!", threadID, messageID);
   };


  if ((event.body.toLowerCase() == "John Jay") || (event.body.toLowerCase() == "john jay")) {
     return api.sendMessage("wag ka magulo miss niyan si roneth", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "mam Sapin") || (event.body.toLowerCase() == "mam sapin")) {
     return api.sendMessage("YUMMY!!", threadID, messageID);
   };

  
   if ((event.body.toLowerCase() == "Joel") || (event.body.toLowerCase() == "joel")) {
     return api.sendMessage("That's my admin/owner.", threadID, messageID);
   };
   
   if ((event.body.indexOf(`${global.config.BOTNAME}`) == 0)) {
   	return api.sendMessage(rand2, threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "sino") || (event.body.toLowerCase() == "Sino")) {
     return api.sendMessage("sino ba talaga yun para sakin🥺, "+name, threadID, messageID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("putangimo") == 0 || (event.body.indexOf("Putangimo") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }