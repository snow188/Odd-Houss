 module.exports = {
 config: {
 name: "hello", 
 version: "1.0", 
 author: "odiamus", 
 countDown: 5, 
 role: 2, 
 shortDescription: {
 en: "this is short description of command"
 }, 
 longDescription: {
 en: "this is long description of command"
 },
 category: "categoryName",
 guide: {
 en: "this is guide of command"
 } 
 },

 langs: {
 en: {
 hello: "hello_world",
 helloWithName: "hello, your facebook id is %1"
 } // English language
 },


 onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
 message.reply("hello my friends world")

 }
};
