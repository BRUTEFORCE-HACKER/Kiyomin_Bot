module.exports.config = {
    name: "out",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Kanichi",
    description: "Leave the group",
    usePrefix: true,
    commandCategory: "Admin",
    usages: "out [id]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
  const pogi = "100074830335198";
   if (!pogi.includes(event.senderID))
   return api.sendMessage("Joel Comendador is the only one who has the permission to use this command.", event.threadID, event.messageID);
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
  }