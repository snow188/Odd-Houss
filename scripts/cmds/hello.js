module.export = {
  config: {
    name: "kirito",
    version: "1.0",
    author: "odiamus",
      countDown: 5,
    role: 2 ,
    shortDescription: {
      en: "this is short description of cmd"
    },
    longDescription: {
      en: "this is long description of cmd"
    },
    category: "owner",
    guide:{
      en:"this is guide of cmd" 
    }
  },
  
   lang: {
     en: {
       hello: "hello_world",
         helloWithName: "hello your facebook id is %1" } // English language
   },


  onStart:async function ({ api,args,message,event,threadsData,usersData,dashBoardData,globalData,threadModel,userModel,dashBoardModel,globalModel,role,commandName,getLang })
  { message.reply("hello my friends world")
   }
};
  
      
      
    
