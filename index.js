// code taken from my mcdiscordchat repo.
const config = require("./config.json");
var mineflayer = require('mineflayer');
var bot = mineflayer.createBot({
  host: "mc.minehut.com", // Server IP for bot to connect to
  port: "25565",       // server port for bot to connect to
  username: config.username, // email for bot
  password: config.password,          // password for bot
  version: config.version, // version of server bot is trying to connect to
});
bot.on('login', () => {
  console.log(`[INFO] Minecraft bot is ready!`);
  if(config.debug_mode == "true"){
    console.log("[INFO] Starting in DEBUG MODE.")
  }
      bot.chat(config.joinmessage); 
      console.log(`[INFO] running ${config.joinmessage} in chat. (joining server)`)
    setTimeout(function(){
       bot.chat("/dl world world")
       console.log(`[INFO] running "/dl world world". This may take a few minutes.`)
       setTimeout(function(){
       bot.chat("/dl world world_the_end")
       console.log(`[INFO] running "/dl world world_the_end". This may take a few minutes.`)
       setTimeout(function(){
        bot.chat("/dl world world_nether")
        console.log(`[INFO] running "/dl world world_nether". This may take a few minutes.`)
       }, 60000);
      }, 60000);

      }, config.waittime);
});
bot.on('message', msg => { 
  if(config.debug_mode == "true"){
  console.log(`[DEBUG] ${msg.toString()}`)
  }
    });
    bot.chatAddPattern(/^Done! Download it here: ([^ ]*)$/, 'world', 'world message')
    bot.on('world', (link, user, reason, rawMessage, matches) => {
      console.log(`[INFO] world successfully downloaded. download it at ${link} `)
      return
    });
    bot.chatAddPattern(/^Failed to upload file.$/, 'fail', 'fail message')
    bot.on('fail', (link) => {
      console.log("[ERROR] Failed to upload file.")
    });
function bindEvents(bot) {

  bot.on('error', function(err) {
      console.log('[ERROR] Error attempting to reconnect: ' + err.errno + '.');
      process.exit(1)
      if (err.code == undefined) {
          console.log('[ERROR] Invalid credentials OR bot needs to wait because it relogged too quickly.');
      }
  });
}
bot.on('kicked', function(reason) {
  console.log("[ERROR] I got kicked for", reason, "lol");
  });

  bot.on('end', function() {
    console.log("[INFO] Bot has ended");
    process.exit(1)
});
bot.on('error', err => console.log(err));
