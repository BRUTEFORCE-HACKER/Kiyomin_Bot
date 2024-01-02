module.exports = async ({ api }) => {
  const logger = require('./utils/log');
  const cron = require('node-cron');
  const fs = require('fs');
  const yandeva = {
    autoRestart: {
      status: true,
      time: 30, //40 minutes
      note: 'To avoid problems, enable periodic bot restarts'
    },
    accpetPending: {
      status: false,
      time: 30, //30 minutes
      note: 'Approve waiting messages after a certain time'
    }
  }
  function autoRestart(config) {
    if (config.status) {
      setInterval(async () => {
        logger(`Start rebooting the system!`, "[ Auto Restart ]")
        process.exit(1)
      }, config.time * 60 * 1000)
    }
  }
  function accpetPending(config) {
    if (config.status) {
      setInterval(async () => {
        const list = [
          ...(await api.getThreadList(1, null, ['PENDING'])),
          ...(await api.getThreadList(1, null, ['OTHER']))
        ];
        if (list[0]) {
          api.sendMessage('You have been approved for the queue. (This is an automated message)', list[0].threadID);
        }
      }, config.time * 60 * 1000)
    }
  }
  autoRestart(yandeva.autoRestart)
  accpetPending(yandeva.accpetPending)

  cron.schedule('0 */2 * * *', () => {
    api.getThreadList(25, null, ['INBOX'], async (err, data) => {
      if (err) return console.error("Error [Thread List Cron]: " + err);
      let i = 0;
      let j = 0;

      async function message(thread) {
        try {
          api.sendMessage(`✦ Hi! I'm Kiyomin!\n✦ I'm developed by Joel Comendador\n✦ This is an automated message every 2 hours.`, thread.threadID, (err) => { if (err) return });
        } catch (error) {
          console.error("Error sending a message:", error);
        }
      }

      while (j < 30 && i < data.length) {
        if (data[i].isGroup && data[i].name != data[i].threadID) {
          await message(data[i]);
          j++;
        }
        i++;
      }
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });

  cron.schedule('0 */6 * * *', () => {
    api.getThreadList(25, null, ['INBOX'], async (err, data) => {
      if (err) return console.error("Error [Thread List Cron]: " + err);
      let i = 0;
      let j = 0;

      async function message(thread) {
        try {
          api.sendMessage(`✦ Hi! ✦\n\n✦ Its me kiyomin this is automated message every 6 hours ✦ `, thread.threadID, (err) => { if (err) return });
        } catch (error) {
          console.error("Error sending a message:", error);
        }
      }

      while (j < 30 && i < data.length) {
        if (data[i].isGroup && data[i].name != data[i].threadID) {
          await message(data[i]);
          j++;
        }
        i++;
      }
    });
  }, {
    scheduled: true,
    timezone: "Asia/Manila"
  });
};

