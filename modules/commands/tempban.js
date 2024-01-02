const moment = require("moment-timezone");
const axios = require("axios");

module.exports.config = {
    name: "Tempbanuser",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "JOHN RÉ PORAS",
    description: "Temporarily ban a user from the group for a specified duration.",
    commandCategory: "Settings",
  usePrefix: true,
    usages: "/Tempbanuser [id] [duration: Xs, Xm, Xh, Xd]",
    cooldowns: 5
};

module.exports.run = async function ({ api, args, event }) {
    const { messageID, threadID, senderID } = event;
    const info = await api.getThreadInfo(threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('❌ I have no rights to perform the tempbanuser in this group.', threadID, messageID);
    const fs = require("fs-extra");

    if (!fs.existsSync(__dirname + `/cache/tempbans.json`)) {
        const data = { tempbans: {} };
        fs.writeFileSync(__dirname + `/cache/tempbans.json`, JSON.stringify(data));
    }
    const tempbans = JSON.parse(fs.readFileSync(__dirname + `/cache/tempbans.json`));

    const userID = args[0];
    if (!userID || isNaN(userID)) return api.sendMessage("❌ Please provide a valid Facebook ID to temporarily ban the user.", threadID, messageID);

    if (tempbans.tempbans.hasOwnProperty(threadID) && tempbans.tempbans[threadID][userID]) {
        return api.sendMessage("⚠️ You are temporarily banned from using me. If you believe this is a mistake or need further assistance, please contact my owner.", threadID, messageID);
    }

    if (!args[1] || !args[1].match(/^\d+[s,m,h,d]$/)) return api.sendMessage("❌ Invalid duration. Please use a valid format: Xs (seconds), Xm (minutes), Xh (hours), or Xd (days).", threadID, messageID);

    const duration = args[1];
    const durationValue = parseInt(duration);
    const durationUnit = duration.charAt(duration.length - 1);

    const validUnits = ['s', 'm', 'h', 'd'];
    if (!validUnits.includes(durationUnit) || isNaN(durationValue)) return api.sendMessage("❌ Invalid duration format. Please use a valid format: Xs (seconds), Xm (minutes), Xh (hours), or Xd (days).", threadID, messageID);

    const reason = args.slice(2).join(" ");
    if (!reason) return api.sendMessage("❌ Please provide a reason for the temporary ban.", threadID, messageID);

    const timestamp = moment().unix();
    const endTime = moment().add(durationValue, durationUnit).unix();

    if (!tempbans.tempbans.hasOwnProperty(threadID)) {
        tempbans.tempbans[threadID] = {};
    }

    tempbans.tempbans[threadID][userID] = {
        endTime: endTime,
        reason: reason
    };

    fs.writeFileSync(__dirname + `/cache/tempbans.json`, JSON.stringify(tempbans, null, 2));

    api.sendMessage({
        body: `🚫 User with ID ${userID} has been temporarily banned from the group for ${duration}. Reason: ${reason}`,
    }, threadID, messageID);

    setTimeout(() => {
        if (tempbans.tempbans[threadID][userID] && tempbans.tempbans[threadID][userID].endTime === endTime) {
            delete tempbans.tempbans[threadID][userID];
            fs.writeFileSync(__dirname + `/cache/tempbans.json`, JSON.stringify(tempbans, null, 2));
            api.unbanUser(threadID, userID);
        }
    }, (endTime - timestamp) * 1000);
};