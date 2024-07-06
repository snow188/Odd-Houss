const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "Odiamus",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["100080855610572"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("Only Odiamus Lonon can use this command ", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("Which file do you need, Master (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠) ?", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`Not found [✖]: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
