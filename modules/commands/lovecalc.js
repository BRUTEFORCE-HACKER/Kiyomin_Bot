const axios = require('axios');

module.exports.config = {
  name: 'lovecalculator',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'rickciel',
  usePrefix: true,
  description: 'Calculate the love percentage between two names',
  commandCategory: 'Fun',
  usages: 'lovecalculator [name1] + [name2]',
  cooldowns: 3,
};

module.exports.run = async function ({ api, event, args }) {
  if (args.length !== 3) {
    await api.sendMessage('Please provide exactly two names separated by "+".', event.threadID);
    return;
  }

  const [fname, sname] = args.join(' ').split(' + ');

  await api.sendMessage('Calculating, please wait...', event.threadID);

  const options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {
      sname,
      fname,
    },
    headers: {
      'X-RapidAPI-Key': '483e4d5122msh3ec8fff218f0d05p17d178jsncac3bde307ed',
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data;

    const resultMessage = `Love Calculator Result:\n${data.fname} + ${data.sname}\nPercentage: ${data.percentage}%\nResult: ${data.result}`;

    await api.sendMessage(resultMessage, event.threadID);
  } catch (error) {
    console.error(error);
    await api.sendMessage('An error occurred while processing your request.', event.threadID);
  }
};
