//ping every 5 minutes to keep it up
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

//discord
const Discord = require("discord.js");
const HELL = new Discord.Client();
HELL.on("ready", () => {
  console.log("Logged in as the Weeg.");
  HELL.user.setActivity('WALUIGI FOR SMASH OR RIOT!')
});

//here we go-
HELL.on("message", (message) => {
  
  //triggers
  if (message.content.includes("Smash Bros")) {
        message.channel.send("WALUIGI FOR SMASH OR RIOT!");
  }
    if (message.content.includes("Smash bros")) {
          message.channel.send("WALUIGI FOR SMASH OR RIOT!");
   }
    if (message.content.includes("smash bros")) {
          message.channel.send("WALUIGI FOR SMASH OR RIOT!");
   }
    if (message.content.includes("SMASH BROS")) {
          message.channel.send("WALUIGI FOR SMASH OR RIOT!");
   }
  
    if (message.content.includes("Smash")) {
       if (message.content.includes("smash mouth") || message.content.includes("Smash mouth") || message.content.includes("Smash Mouth") || message.content.includes("SMASH MOUTH") || message.content.includes("smash bros") || message.content.includes("Smash bros") || message.content.includes("Smash Bros") || message.content.includes("SMASH BROS")) return;
          message.channel.send("WALUIGI FOR SMASH OR RIOT!");
   }
  
    if (message.content.includes("smash")) {
        if (message.content.includes("smash mouth") || message.content.includes("Smash mouth") || message.content.includes("Smash Mouth") || message.content.includes("SMASH MOUTH") || message.content.includes("smash bros") || message.content.includes("Smash bros") || message.content.includes("Smash Bros") || message.content.includes("SMASH BROS")) return;
          message.channel.send("WALUIGI FOR SMASH OR RIOT!");
   }
  
    if (message.content.includes("SMASH")) {
       if (message.content.includes("smash mouth") || message.content.includes("Smash mouth") || message.content.includes("Smash Mouth") || message.content.includes("SMASH MOUTH") || message.content.includes("smash bros") || message.content.includes("Smash bros") || message.content.includes("Smash Bros") || message.content.includes("SMASH BROS")) return;
          message.channel.send("WALUIGI FOR SMASH OR RIOT!");
   }
  
    if (message.content.includes("SSB")) {
          message.channel.send("WALUIGI FOR SMASH OR RIOT!");
   }
  
    if (message.content.includes("ssb")) {
          message.channel.send("WALUIGI FOR SMASH OR RIOT!");
   }
  
    if (message.content.includes("smash mouth")) {
          message.channel.send("WAH! *I* want to be an all star!")
          message.channel.send("WALUIGI FOR SMASH MOUTH OR RIOT!");
   }
  
    if (message.content.includes("Smash mouth")) {
          message.channel.send("WAH! *I* want to be an all star!")
          message.channel.send("WALUIGI FOR SMASH MOUTH OR RIOT!");
   }
  
    if (message.content.includes("Smash Mouth")) {
          message.channel.send("WAH! *I* want to be an all star!")
          message.channel.send("WALUIGI FOR SMASH MOUTH OR RIOT!");
   }
  
    if (message.content.includes("SMASH MOUTH")) {
          message.channel.send("WAH! *I* want to be an all star!")
          message.channel.send("WALUIGI FOR SMASH MOUTH OR RIOT!");
   }
  
  //and now you do the loop de loop and pull
  if (message.content.startsWith("WALUIGI FOR SMASH OR RIOT!")) {
        message.channel.send("WALUIGI FOR SMASH OR RIOT!");
  }
    if (message.content.startsWith("WALUIGI FOR SMASH MOUTH OR RIOT!")) {
        message.channel.send("WALUIGI FOR SMASH MOUTH OR RIOT!");
  }
  
  //stop the madness
  if (message.content.startsWith("WEEG STOP")) {
            message.reply("ok")
    .then(message => HELL.destroy())
    .then(() => HELL.login(process.env.SECRET));
}
  
  //invite + source code commands for convenience; quick grab
  if (message.content.startsWith("Weeg invite")) {
        message.reply("SCRUBBEDFORGITHUB");
  }
  if (message.content.startsWith("Weeg source")) {
      message.reply("https://glitch.com/edit/#!/waluigi");
  }
});

HELL.login(process.env.SECRET);
//haha no bot token for u