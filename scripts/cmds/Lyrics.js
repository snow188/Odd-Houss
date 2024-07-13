const axios = require('axios');

module.exports = {
  name: 'lyrics',
  description: 'Fetches lyrics for a given song',
  nashPrefix: false,
  async execute(api, event, args, prefix) {
    if (!args.length) {
      return api.sendMessage(`Usage: ${prefix}lyrics <song name>`, event.threadID);
    }

    const songName = args.join(' ');
    const url = `https://itsaryan.onrender.com/api/lyrics?songName=${encodeURIComponent(songName)}`;

    try {
      const response = await axios.get(url);
      const { lyrics } = response.data;

      if (!lyrics) {
        return api.sendMessage(`No lyrics found for "${songName}".`, event.threadID);
      }

      let message = `═✿═╡ Lyrics for "${songName}" ╞═✿═\n\n${lyrics}`;
      api.sendMessage(message, event.threadID);
    } catch (error) {
      console.error('Error fetching lyrics:', error);
      api.sendMessage('An error occurred while fetching the lyrics.', event.threadID);
    }
  },
};