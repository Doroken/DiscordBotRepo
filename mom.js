//NEEDS NEW TOKEN! 5/19/22

//is SUPPOSED to keep the bot running by pinging every 5 minutes...wound up using uptime robot anyway so this is basically useless now
//apps running for more than 12 hours are forcibly stopped. so I guess this does work by keeping it up for longer than 5 minutes? still haven't tested it without this code.
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//declaring discord stuff
const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');

//update info
const Version = "1.0";
const Latest = "May 20th 2020";


//special for idiot nation/triple d nation - automatically gives new member the members role
client.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Waddle Dees"));
});

client.on("ready", () => {
  console.log("Logged in as Conker's mom.");
  client.user.setActivity("You said WHAT to my son?");
});

client.on("message", (message) => {
  
  if (message.channel.name == "vent" || message.channel.name == "vent-2" || message.channel.name == "vent-3") {
     return;
   }
  
    if (message.content.startsWith(">ping3") || message.content.startsWith("pingall")) {
      let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);

    const uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    message.reply(`Pong!\n\ **Conker's Mom** - Glitch. (formerly Conker script 3; mention)\n\ ${uptime}`);
    message.react("✔");
  }
  
if (message.author.id === "SCRUBBEDFORGITHUB") {
  const Replies = [
"You did WHAT to my son?",
"MH4 you grape juice drinking misogynist!",
"I had to come all the way down here for YOU?",
"Lick my son one more time. I DARE YOU!",
"I can have you thrown in the dungeon for touching my Princely Paws!",
"Don't talk while I'm talking, Mister!"
  ]
  const Reply = Replies[Math.floor(Math.random() * Replies.length)];
  message.channel.send(Reply);
  }

});
   client.login(process.env.SECRET);
//no bot token for u

