module.exports.config = {
  name: 'adminnoti',
  version: '1.0.0',
  hasPermission: 2,
  credits: 'Rickciel',
  usePrefix: true,
  description: 'Send a notification to group chats',
  commandCategory: 'Admin',
  usages: 'newsendnoti [message] or newsendnoti [groupID] [message]',
  cooldowns: 3,
};
//this command doesn't support picture so yesh it's just message 
const activeNotices = {};

module.exports.run = async function ({ api, event, args }) {
  const joel = "100074830335198";
   if (!joel.includes(event.senderID))
   return api.sendMessage("Joel Comendador is the only one who has the permission to use this command.", event.threadID, event.messageID);
  if (args.length === 0) {
    await api.sendMessage('Please provide a message to send as a notification.', event.threadID);
    return;
  }

  let targetThreads = [];

  if (args.length > 1) {
    const groupID = args.shift();
    targetThreads.push(groupID);
  } else {
    const threadList = await api.getThreadList(10, null, ['INBOX']);
    for (const thread of threadList) {
      if (thread.isGroup) {
        targetThreads.push(thread.threadID);
      }
    }
  }

  const message = args.join(' ');
  const notification = `*Message from Joel(admin)*\nMessage - ${message}\n\nReply to this message if you want to chat with admin`;

  for (const threadID of targetThreads) {
    await api.sendMessage(notification, threadID);
    activeNotices[threadID] = { message, adminID: event.senderID, userResponses: {} };
  }

  await api.sendMessage('Notification sent to selected group chats.', event.threadID);
};

module.exports.handleEvent = async function ({ api, event }) {
  if (event.type === 'message_reply' && activeNotices[event.threadID]) {
    const adminID = activeNotices[event.threadID].adminID;
    const senderID = event.senderID;
    const senderName = (await api.getUserInfo(senderID))[senderID].name;
    const responseMessage = `User responded to the notice\nMessage - ${event.body}\nUser - ${senderName}\nUser ID - [${senderID}]\nGroup ID - [${event.threadID}]`;
    await api.sendMessage(responseMessage, adminID);
    activeNotices[event.threadID].userResponses[senderID] = event.body;
  }
};

module.exports.handleAdminResponse = async function ({ api, event, args }) {
  const threadID = args[0];
  const userResponseID = args[1];

  if (activeNotices[threadID]?.userResponses[userResponseID]) {
    const adminName = (await api.getUserInfo(event.senderID))[event.senderID].name;
    const adminResponse = args.slice(2).join(' ');
    const adminReplyMessage = `Admin ${adminName} replied to you\n\nMessage - ${adminResponse}\nADMIN - ${adminName}\nADMIN ID - ${event.senderID}\nGroup ID - [${threadID}]`;
    await api.sendMessage(adminReplyMessage, userResponseID);
  }
};
