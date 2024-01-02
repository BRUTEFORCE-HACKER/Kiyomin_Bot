const cron = require("node-cron");
module.exports.config = {
  name: "autogreet",
  version: "1.0.1",
  hasPermission: 1,
  credits: "test",
  usePrefix: true,
  description: "Automatic Greet",
  commandCategory: "General",
  cooldowns: 1
};

/*----GREET---*/
const morningGreeting = "Good morning {groupName}, have a nice day!";
const afternoonGreeting = "Good afternoon {groupName}, let's eat 🍛!";
const eveningGreeting = "Good evening {groupName}, don't forget to eat (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)!";

cron.schedule('0 7 * * *', function() {
api.getThreadList(100, null, ["INBOX"])
.then(function(threadList) {
threadList.forEach(function(thread) {
if (thread.isGroup){
const threadName = thread.name || "";
const greeting = morningGreeting.replace("{groupName}", threadName);
api.sendMessage(greeting, thread.threadID);
}
});
})
.catch(function(error) {
console.error('Failed to get Thread List:', error);
});
}, {
scheduled: true,
timezone: "Asia/Manila"
});
cron.schedule('2 15 * * *', function() {
api.getThreadList(100, null, ["INBOX"])
.then(function(threadList) {
threadList.forEach(function(thread) {
if (thread.isGroup){
const threadName = thread.name || "";
const greeting = afternoonGreeting.replace("{groupName}", threadName);
api.sendMessage(greeting, thread.threadID);
}
});
})
.catch(function(error) {
console.error('Failed to get Thread List:', error);
});
}, {
scheduled: true,
timezone: "Asia/Manila"
});
cron.schedule('0 18 * * *', function() {
api.getThreadList(100, null, ["INBOX"])
.then(function(threadList) {
threadList.forEach(function(thread){
if (thread.isGroup){
const threadName = thread.name || "";
const greeting = eveningGreeting.replace("{groupName}", threadName);
api.sendMessage(greeting, thread.threadID);
}
});
})
.catch(function(error) {
console.error('Failed to get Thread List:', error);
});
}, {
scheduled: true,
timezone: "Asia/Manila"
});
/*---END OF GREET---*/
