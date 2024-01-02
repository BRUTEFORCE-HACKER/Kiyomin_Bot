module.exports.config = {
  name: "fbcover",
  version: "2.0.0",
  hasPermission: 0,
  credits: "Kim Joseph DG Bien",
  description: "generate a custom Facebook cover.",
  commandCategory: "generate-image",
  usePrefix: true,
  cooldowns: 0,
  usage: "<blank>",
  dependencies: {
    "fs-extra": "",
    "request": "",
    "axios": ""
  }
};

module.exports.run = async function ({ api, args, event, permission, handleReply }) {
  const request = require('request');
  const fs = require("fs-extra");
  const axios = require("axios");
  const { threadID, messageID, senderID, body } = event;
  if (this.config.credits !== '\u004B\u0069\u006D\u0020\u004A\u006F\u0073\u0065\u0070\u0068\u0020\u0044\u0047\u0020\u0042\u0069\u0065\u006E') {
    console.log('\u005B\u0020\u0057\u0041\u0052\u0020\u005D\u0020\u00BB\u00BB\u0020\u0055\u0041\u0020\u00BB\u0020\u0055\u0079\u0020\u0068\u0061\u006C\u0061\u0020\u0073\u0069\u0020\u0069\u0064\u006F\u006C\u0020\u006E\u0061\u0067\u0020\u0063\u0068\u0061\u006E\u0067\u0065\u0020\u0063\u006F\u0064\u0065\u0020\u0048\u0041\u0048\u0041\u0043\u004F\u0044\u0045\u0020\u004D\u0057\u0041\u0050\u0053\u0053\u0021');
    return api.sendMessage('\u005B\u0020\u0057\u0041\u0052\u0020\u005D\u0020\u00BB\u00BB\u0020\u0055\u0041\u0020\u00BB\u0020\u0044\u0065\u0074\u0065\u0063\u0074\u0020\u0062\u006F\u0074\u0020\u006F\u0070\u0065\u0072\u0061\u0074\u0069\u006F\u006E\u0020\u006F\u006E\u0020\u0057\u0061\u006E\u0067\u002D\u004B\u0061\u0073\u0069\u006E\u0067\u0020\u0063\u006F\u0064\u0065\u0020\u006D\u006F\u0064\u0065', threadID, messageID);
  } else if (!args[0]) {
    api.sendMessage('\u0059\u006F\u0075\u0020\u0077\u0061\u006E\u0074\u0020\u0074\u006F\u0020\u0063\u006F\u006E\u0074\u0069\u006E\u0075\u0065\u003F\u0020\u0050\u006C\u0065\u0061\u0073\u0065\u0020\u0072\u0065\u0070\u006C\u0079\u0020\u0074\u006F\u0020\u0074\u0068\u0069\u0073\u0020\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u0020\u0061\u006E\u0064\u0020\u0073\u0070\u0065\u0063\u0069\u0066\u0079\u0020\u0079\u006F\u0075\u0072\u0020\u0070\u0072\u0069\u006D\u0061\u0072\u0079\u0020\u006E\u0061\u006D\u0065\u002E', threadID, function (err, info) {
      return global.client.handleReply.push({
        type: "characters",
        name: "fbcover",
        author: senderID,
        tenchinh: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
    }, messageID);
  }
};

if ((this.config.credits) != "Kim Joseph DG Bien") { return api.sendMessage(`[ WARNING ] - Detecting credits modules ${this.config.name} was changed to ${this.config.credits} by ADMINBOT ${global.config.BOTNAME} 😐 Stop immediately!!!`, event.threadID, event.messageID)}

module.exports.handleReply = async function ({ api, event, handleReply }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
  var info = await api.getUserInfo(event.senderID);
  var nameSender = info[event.senderID].name;
  var arraytag = [];
  arraytag.push({ id: event.senderID, tag: nameSender });
  if (handleReply.author != event.senderID) return;
  const {
    threadID,
    messageID,
    senderID
  } = event;
  
  switch (handleReply.type) {
    case "characters": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`Reply to this message enter your primary name`, threadID, function (err, info) {
        return global.client.handleReply.push({
          type: 'subname',
          name: 'fbcover',
          author: senderID,
          characters: event.body,
          messageID: info.messageID
        })
      }, messageID);
    }

    case "subname": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`You choose ${event.body} as your main name\n(Reply to this message enter your secondary name)`, threadID, function (err, info) {
        return global.client.handleReply.push({
          type: 'number',
          name: 'fbcover',
          author: senderID,
          characters: handleReply.characters,
          name_s: event.body,
          messageID: info.messageID
        })
      }, messageID);
    }

    case "number": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`You have selected "${event.body}" as your secondary name\n(Reply to this message with your phone number)`, threadID, function (err, info) {
        return global.client.handleReply.push({
          type: 'address',
          name: 'fbcover',
          author: senderID,
          characters: handleReply.characters,
          subname: event.body,
          name_s: handleReply.name_s,
          messageID: info.messageID
        })
      }, messageID);
    }

    case "address": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`You have selected "${event.body}" as your phone number\n(Reply to this message with your address)`, threadID, function (err, info) {
        return global.client.handleReply.push({
          type: 'email',
          name: 'fbcover',
          author: senderID,
          characters: handleReply.characters,
          subname: handleReply.subname,
          number: event.body,
          name_s: handleReply.name_s,
          messageID: info.messageID
        })
      }, messageID);
    }

    case "email": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`You have selected character "${event.body}" as an address.\n(Reply to this message with your email address)`, threadID, function (err, info) {
        return global.client.handleReply.push({
          type: 'color',
          name: 'fbcover',
          author: senderID,
          characters: handleReply.characters,
          subname: handleReply.subname,
          number: handleReply.number,
          address: event.body,
          name_s: handleReply.name_s,
          messageID: info.messageID
        })
      }, messageID);
    }

    case "color": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`You have chosen "${event.body}" as your email address.\nEnter your background color (note: enter the English name of the color - If you don't want to enter the color then enter "no")\n(Reply this message)`, threadID, function (err, info) {
        return global.client.handleReply.push({
          type: 'create',
          name: 'fbcover',
          author: senderID,
          characters: handleReply.characters,
          subname: handleReply.subname,
          number: handleReply.number,
          address: handleReply.address,
          email: event.body,
          name_s: handleReply.name_s,
          messageID: info.messageID
        })
      }, messageID)
    }
    case "create": {
      var char = handleReply.characters;
      var name = handleReply.name_s;
      var subname = handleReply.subname;
      var number = handleReply.number;
      var address = handleReply.address;
      var email = handleReply.email;
      var uid = event.senderID;
      var color = event.body;
      api.unsendMessage(handleReply.messageID);
      api.sendMessage(`Initializing...`, threadID, (err, info) => {
        setTimeout(() => {
          api.unsendMessage(info.messageID);
          var callback = () => api.sendMessage({ body: `Sender Name: ${nameSender}\nName: ${name}\nSub Name: ${subname}\nID: ${uid}\nColor: ${color}\nAddress: ${address}\nEmail: ${email}\nNumber: ${number}`, mentions: arraytag, attachment: fs.createReadStream(__dirname + "/cache/fbcover.png") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"), event.messageID);
          return request(encodeURI(`https://hiroshi-api.kimjosephdgbien.repl.co//fbcover/v1?name=${name}&uid=${uid}&address=${address}&email=${email}&subname=${subname}&sdt=${number}&color=${color}`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
        }, 1000);
      }, messageID);
    }
  }
    }