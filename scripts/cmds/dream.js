module.exports = {
  config: {
    name: "dream",
    version: "1.0",
    aliase: ["Øđilon🐦🪶"],
    author: "Odiamus",
    countDown: 6,
    role: 0,
    shortDescription: {
      fr: "le rêve et le désir de maître" },
    longDescription: {
      fr: "Dans ce monde régit par diverses sciences,la technologie outre la justice/l'injustice et non par la magie,mon maître exprime son souhait" },
    category: "commandName",
    guide: {
      en: %1dream
    }
      },
  langs: {
    en: {
      dream: "my_dream",
      dreamWitheName: "may be your dream is also mine 😁 %1" } //English language 
    ,  fr: {
      souhait: "mon_vœu",
        souhaitAvecNom: "Peut-être ton rêve est aussi le mien 😁 %1 } //French language 
  }
  },
  onSart: async function ({ api, args, message, event, thredsData, usersData,dashBoardData,globalData,threadModel,userModel,dashBoardModel,globalModel,role,commandName,getLang })
{ message.reply("Hahaha je plaisantais 😅, en fait je m'en contre carré de ce monde , mon unique vœu est de me réincarner dans un monde régit par la magie où il y aurait des elfes très sexy. Ouais j'suis un obsédé, un maniaque")
}
  };
    
      
      
        
    
