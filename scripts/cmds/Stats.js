const { getStreamFromURL } = require("fb-watchman");

module.exports = {
  config: {
    name: "stats",
    aliases: ["time"],
    version: "1.0",
    author: "ODIAMUS",
    role: 0,
    shortDescription: {
      en: "stats",
    },
    longDescription: {
      en: "shows stats of bot.",
    },
    category: "system",
    guide: {
      en: "Use {p}stats to see stats of bot.",
    },
  },

  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();

      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const uptimeString = `${hours}HRS ${minutes}MIN ${seconds}SEC`;

      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour12: true,
      });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "My day",
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "Not smooth throw your router, buddy";
      if (ping < 400) {
        pingStatus = "Smooth like your tiny pussy";
      }

      // Assuming global.utils.getStreamFromURL(img) is correctly defined
      const imgURL= "https://i.ibb.co/NnSmNPz/image.jpg";
      const attachment = await global.utils.getStreamFromURL(imgURL); api.sendMessage({
        body: `Odiamus \────────\

☃️ | Ma course |☃️﹞\  
${uptimeString}

\──────── \

📅 | Date﹞: 

☃️☞︎︎︎${date}☜︎︎︎☃️

\────────\n Temp: 

𖤍☞︎︎︎${time}☜︎︎︎𖤍

\──────── \

👑 | 𝘛𝘰𝘵𝘢𝘭 𝘜𝘴𝘦𝘳𝘴﹞\allUsers.length}\──────── \

🏢 | 𝘛𝘰𝘵𝘢𝘭 𝘛𝘩𝘳𝘦𝘢𝘥𝘴﹞\llThreads.length}\| 𝐀𝐈𝐍𝐄 ﹞: 

❄️${ping}❄️MS❄️
\──────── \

 Status:
 
${pingStatus}`,
        attachment: attachment,
      }, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
