const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  config: {
    name: "dalle3",
    aliases: ["dalle"],
    version: "1.0",
    author: "JARiF",
    countDown: 15,
    role: 0,
    shortDescription: "Generate images by Dalle3",
    longDescription: "Generate images by Dalle3",
    category: "MEDIA",
    guide: {
      en: "{pn} prompt"
    }
  },

  onStart: async function ({ api, message, args }) {
    try {
      const p = args.join(" ");

      const w = await message.reply("Please wait...");

      //const cookieString = await fs.readFile('dallekey.json', 'utf-8');
       //const cookie = JSON.parse(cookieString);

      const data2 = {
        prompt: p,
        cookie: "14cPQTHxFV37GDdKI6prtdnTmoCNVGXeGW9s1r1MQ32xfezsu1Jjei8Z6Q_A1BkPt4OJY26JmPe3KBDPGyV3ErsY-ZVDfF69yZxkWX4zv6sZVDv5-WF42fZ-Zs9UWt4suSc3Fxx_raVky5g9zMDfykMWIjASbrUQwu5meDEgR2R_Tylj1Y7jbnEZOQTH8zaZ49Iwb8E3yQSxxMX8cxPyjGUSPMJ6Y4Io5m7XIXeWhAsc"


      };

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post('https://project-dallee3.onrender.com/dalle', data2, config);

      if (response.status === 200) {
        const imageUrls = response.data.image_urls.filter(url => !url.endsWith('.svg'));
        const imgData = [];

        for (let i = 0; i < imageUrls.length; i++) {
          const imgResponse = await axios.get(imageUrls[i], { responseType: 'arraybuffer' });
          const imgPath = path.join(__dirname, 'cache', `${i + 1}.jpg`);
          await fs.outputFile(imgPath, imgResponse.data);
          imgData.push(fs.createReadStream(imgPath));
        }

        await api.unsendMessage(w.messageID);

        await message.reply({
          body: `✅ | Generated`,
          attachment: imgData
        });
      } else {
        throw new Error("Non-200 status code received");
      }
    } catch (error) {
      return message.reply("Redirect failed! Most probably bad prompt.");
    }
  }
}
