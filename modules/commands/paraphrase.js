const axios = require('axios');

module.exports.config = {
  name: 'paraphrase',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'Blue',
  usePrefix: true,
  description: 'Paraphrase a given sentence.',
  commandCategory: 'Text',
  usages: ['/paraphrase [sentence]'],
  cooldowns: 5,
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const { threadID, messageID } = event;

  if (event.body.startsWith('/paraphrase')) {
    const sentence = args.join(' ');

    if (!sentence) {
      api.sendMessage('Please provide a sentence to paraphrase.', threadID, messageID);
      return;
    }

    try {
      const apiUrl = `https://api.kenliejugarap.com/gptgo/?text=${encodeURIComponent(sentence)}`;
      const response = await axios.get(apiUrl);

      const paraphrasedSentence = response.data.paraphrased_text;

      api.sendMessage(`Paraphrased sentence: ${paraphrasedSentence}`, threadID, messageID);
    } catch (error) {
      console.error(error);
      api.sendMessage('Failed to paraphrase the sentence. Please try again later.', threadID, messageID);
    }
  }
};