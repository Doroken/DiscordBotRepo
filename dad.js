const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Rad Dad is running!'));

app.listen(port, () => console.log(`Radical Dadical listening at http://localhost:${port}`));

const Discord = require("discord.js");
const dadbot = new Discord.Client();
const { stripIndents } = require('common-tags');

dadbot.on("ready", () => {
  console.log("Logged in as your Radical Dadical.");
    dadbot.user.setActivity('Hi fellow kids!')
});

dadbot.on("message", (message) => 
  { 
    //debug logging
    //console.log(`Message received: "${message.content}" from ${message.author.username}`);
  

  if (message.channel.name == "vent" || message.channel.name == "vent-2" || message.channel.name == "vent-3") {
    return;
  }

 if (message.author.id === "313365972943896576") {
if (message.content.includes("Carl")) {
  message.channel.send("Conker! Go to your room!");  }
 }
 
  // Parse message content into arguments
const args = message.content.slice(0).trim().split(/ +/g);
 const word = args.shift().toLowerCase();
 
  
if (message.content.startsWith("I'm") || message.content.startsWith("i'm") || message.content.startsWith("I'M") || message.content.startsWith("i'M") || message.content.startsWith("I’m") || message.content.startsWith("i’m") || message.content.startsWith("I’M") || message.content.startsWith("i’M") ||  message.content.startsWith("im ") ||
message.content.startsWith("IM ") ||
message.content.startsWith("iM ") ||
message.content.startsWith("Im ") ||
message.content.startsWith("i " + "am") || message.content.startsWith("I " + "am")) {

  if (message.content.includes("dad") || message.content.includes("Dad") || message.content.includes("DAD"))   {
              message.channel.send(stripIndents`No you are not, ${message.author}. *I* am the father in this establishment, non gender specific offspring of mine.`);
                return;
            }

    if (args.length >= 5) {return;}

    const imtrigger = args.join(" ");
    message.channel.send(stripIndents`Hi ${imtrigger}, I'm dad!`);
  }
  
if (message.content.includes("not my real dad") || message.content.includes("not my real Dad")) {
  const Replies = [
    "You're right. Happy birthday, you're adopted!",
    "Wait, how did you find out you were adopted?",
    "GO TO YOUR ROOM.",
    "Hi adopted, I'm dad!\n...well, I'm not really your dad, I guess.",
    "And you're not my real child.",
    "Oh man dude, that wasn't very funky of you."    
    ]
  const Reply = Replies[Math.floor(Math.random() * Replies.length)];
    message.channel.send(Reply);
  } 
        
//if (message.content.startsWith("DAD!")) {
    //message.channel.send("DAD!", {files: ["https://cdn.discordapp.com/attachments/561733715290488837/561737003004067841/image0-6.jpg"] });
    //}



if (message.content.startsWith("pingall") || message.content.startsWith("dadping")) {
  let totalSeconds = (dadbot.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);

  const uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  const ping = dadbot.ping;

    message.reply(`Pong!\n\ **Rad Dad** - Repl.it.\n\Took ${ping}ms to respond.\n\Running for ${uptime}`);
    message.react("✔");
 }
  
    if (message.content.startsWith("dadallstar")) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `All Star - Smash Mouth`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAllStar.mp3');
        })
        .catch(stripIndents`No, I don't want to.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("You need to join a voice channel first!");
    }
}
  
  });

dadbot.login("process.env.SECRET");