const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Uncle Grandpa is running!'));

app.listen(port, () => console.log(`Uncle Grandpa listening at http://localhost:${port}`));


const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "'";

client.on("ready", () => {
client.user.setActivity('Good mornin\'!')
//deprecating soon, use setActivity instead of setGame
client.user.setStatus('idle');
  console.log("Logged in as Uncle G.");
  
});

client.on("message", (message) => {

  if (message.channel.name == "vent" || message.channel.name == "vent-2" || message.channel.name == "vent-3") {
     return;
   }

if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


// message.channel.send("Good morning!");
  

 /* if (message.author.id === "entervictimhere") {
message.react("<:Troll:767871288529256480>");
 } */

if (message.content.startsWith("pingall") || message.content.startsWith("ugping")) {
  let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);

    const uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  const ping = client.ping;

    message.reply(`Pong!\n\ **Uncle Grandpa** - Repl.it.\n\Took ${ping}ms to respond.\n\Running for ${uptime}`);
    message.react("✔");
 }


const content = message.content.toLowerCase();

 
  
  if (content.includes("good mornin")) {
  message.channel.send("Good mornin'!");
  } else if (content.includes("good night")) {
  message.channel.send("# ***GOOD MORNING.***");
  }


    if (message.content.startsWith(prefix + "say")) {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }


if (content.includes("cuba") || content.includes("missile")) {
  message.channel.send({files: ["https://cdn.glitch.com/e5a9f928-1104-4b05-994a-c0ae68a1a228%2FZZNsowVpo3c-SD.jpg"]}),
  message.channel.send("Yo yo yo, it’s me, Uncle Grandpa\nG’mornin’.\nToday I’m here to tell y’all ‘bout the most gangsta’ missile crisis of all\nUh\n\nWell\nThe Cuban Missile Crisis was a thirteen day\nPeriod after a United States spy plane\nSpotted missiles in Cuba being built by the Soviets\nJFK saw ‘em but didn’t want nobody to know it\nAfter getting advised on the missiles, prolly for days\nJFK decided on a naval blockade\nSo the Soviets couldn’t bring in more supplies\nJFK ordered destruction of the missiles and sites\n\nOctober 22nd, JFK goes on tay-vay\nTells the public ‘bout the crisis in a televised way\nMr. Khrushchev’s response at the time was unsure\nBut US and Soviets both knew that this could mean war\nSo both countries decided they would end the ordeal\nSoviets dismantle missiles in exchange for a deal\nBy the United States that they wouldn’t invade Cuba\nAnd there was another deal that nobody knew a-\nbout where the US from Turkey removed their nukes\nAnd though the Cuban crisis ended the superpowers still duked\n\nThat’s the story of the missile crisis, like it or not\nAnd though the crisis was over, the arms race was not\nWord\nShoutouts to Giant Realistic Flying Tiger")
}

});
client.login("process.env.SECRET");