var hiroshikim = "Kim Joseph DG Bien";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "mllogo",
  version: "1.0",
  hasPermssion: 0,
  credits: `${hiroshikim}`,
  description: "mlbb logo maker", // zien api credit
  commandCategory: "logo",
  usePrefix: true,
  usages: "mllogo <type> <name>",
  cooldowns: 2,
};
module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length === 1 && args[0].toLowerCase() === "list") {
    const logoTypes = [
      "fanny",
      "fanny2",
      "odette",
      "bane",
      "nana",
      "chou",
      "dyroth",
      "natalia",
      "selena",
      "chou2",
      "guin",
    ];

    const logoList = logoTypes.map(type => `- ${type}`).join('\n');
    return api.sendMessage(`Available hero logo types:\n${logoList}`, threadID, messageID);
  }

  if (args.length < 2) {
    return api.sendMessage(`Invalid command format! Use: mllogo <type> <name>\n\nType 'mllogo list' to see available hero logo types.`, threadID, messageID);
  }

  let type = args[0].toLowerCase();
  let name = args.slice(1).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "fanny":
      apiUrl = `https://gorelover.ziarein1002.repl.co/api/mlbb/fanny?apikey=ZIA&text=${name}`;
      message = "[ML] Logo created:";
      break;
    case "fanny2":
      apiUrl = `https://gorelover.ziarein1002.repl.co/api/mlbb/fanny2?apikey=ZIA&text=${name}`;
      message = "[ML] Logo created:";
      break;
    case "odette":
      apiUrl = `https://gorelover.ziarein1002.repl.co/api/mlbb/lunox?apikey=ZIA&text=${name}`;
      message = "[ML] Logo created:";
      break;
    case "bane":
      apiUrl = `https://gorelover.ziarein1002.repl.co/api/mlbb/bane?apikey=ZIA&text=${name}`;
      message = "[ML] Logo created:";
      break;
    case "nana":
      apiUrl = `https://gorelover.ziarein1002.repl.co/api/mlbb/nana?apikey=ZIA&text=${name}`;
      message = "[ML] Logo created:";
      break;
    case "chou":
      apiUrl = `https://gorelover.ziarein1002.repl.co/api/mlbb/chou?apikey=ZIA&text=${name}`;
      message = "[ML] Logo created:";
      break;
    case "dyroth":
      apiUrl = `https://gorelover.ziarein1002.repl.co/api/mlbb/dyroth?apikey=ZIA&text=${name}`;
      message = "[ML] Logo created:";
      break;
    case "natalia":
      apiUrl = `https://gorelover.ziarein1002.repl.co/api/mlbb/natalia?apikey=ZIA&text=${name}`;
      message = "[ML] Logo created:";
      break;
    case "selena":
      apiUrl = `https://gorelover.ziarein1002.repl.co/api/mlbb/selena?apikey=ZIA&text=${name}`;
      message = "[ML] Logo created:";
      break;
      case "guin":
      apiUrl = `https://gorelover.ziarein1002.repl.co/api/mlbb/guin?text=${name}&apikey=ZIA`;
      message = "[ML] Logo created:";
      break;
      case "chou2":
      apiUrl = `https://gorelover.ziarein1002.repl.co/api/mlbb/m4skin?text=${name}&apikey=ZIA`;
      message = "[ML] Logo created:";
      break;
    default:
      return api.sendMessage(`Invalid logo type!`, threadID, messageID);
  }

  api.sendMessage("Please wait...", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
