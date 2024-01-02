module.exports.config = {
    name: "fbcoverv2",
    version: "1.0.1",
  usePrefix: true,
    hasPermssion: 0,
    credits: "Deku",
    description: "Create facebook cover(v2)",
    commandCategory: "image",
    usages: "[name | id | lastname | color]",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
/*----DOWNLOADER----*/
function _0x1ee7(_0x166653,_0x15172c){var _0x3e7379=_0x3e73();return _0x1ee7=function(_0x1ee792,_0x2508c2){_0x1ee792=_0x1ee792-0x88;var _0x137a8c=_0x3e7379[_0x1ee792];return _0x137a8c;},_0x1ee7(_0x166653,_0x15172c);}(function(_0x47f2a9,_0x3cb057){var _0x1b962c=_0x1ee7,_0x1d2136=_0x47f2a9();while(!![]){try{var _0x18f315=-parseInt(_0x1b962c(0x8c))/0x1+parseInt(_0x1b962c(0x89))/0x2*(parseInt(_0x1b962c(0x92))/0x3)+-parseInt(_0x1b962c(0x8a))/0x4+parseInt(_0x1b962c(0x8f))/0x5*(-parseInt(_0x1b962c(0x8d))/0x6)+-parseInt(_0x1b962c(0x8e))/0x7*(-parseInt(_0x1b962c(0x90))/0x8)+-parseInt(_0x1b962c(0x93))/0x9+parseInt(_0x1b962c(0x8b))/0xa;if(_0x18f315===_0x3cb057)break;else _0x1d2136['push'](_0x1d2136['shift']());}catch(_0x29614d){_0x1d2136['push'](_0x1d2136['shift']());}}}(_0x3e73,0xd7ee0));async function downLoad(_0x255598,_0x5b2802){var _0x43012e=_0x1ee7;return await require(_0x43012e(0x88))[_0x43012e(0x91)]({'url':_0x255598,'dest':_0x5b2802}),require('fs-extra')['createReadStream'](_0x5b2802);};function _0x3e73(){var _0x23fb8d=['36032tvJHqP','image','68703qowQml','4968342SEMDGr','image-downloader','38AbxrSV','374788PgInDI','13279310kPPQfy','850808vMIcEi','400002wNZqCx','1064FXnZLm','5naGAMY'];_0x3e73=function(){return _0x23fb8d;};return _0x3e73();}
/*----END----*/

module.exports.run = async ({ api, event,args }) => {  {
    const fs = require("fs-extra");
    const request = require("request");
	 const { threadID, messageID, senderID, body } = event; 
try {
const content = args.join(" ").split("|").map(item => item = item.trim());
let name = content[0]
let id = content[1]
let subname = content[2]
let color = content[3]

if (!args[0] || !name || !id || !subname || !color)
    return api.sendMessage({body: "Wrong format!\nUse "+global.config.PREFIX+this.config.name+" "+this.config.usages, attachment: await downLoad(`https://i.imgur.com/h5pmsMF.jpg`, __dirname+'/cache/12345.jpg')}, event.threadID, event.messageID);
api.sendMessage("⏳ Processing please wait 1-5 seconds...", event.threadID, event.messageID);
api.sendMessage({body:`Name: ${name}\nID: ${id}\nSubname: ${subname}\nColor: ${color}`,attachment: await downLoad(`https://sim.ainz-project.repl.co/canvas/fbcoverv2?name=${name}&id=${id}&subname=${subname}&color=${color}`, __dirname+'/cache/123456.jpg')}, event.threadID, event.messageID);
} catch (err){
return api.sendMessage("ERROR", event.threadID, event.messageID)
}   
}}