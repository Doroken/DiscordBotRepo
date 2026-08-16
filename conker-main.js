const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config({ path: './token.env' });

app.get('/', (req, res) => res.send('Main script is running!'));

app.listen(port, () => console.log(`Conker listening at http://localhost:${port}`));

//declaring discord stuff
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ">";
const { stripIndents } = require('common-tags');


//update info
const Version = "1.45";
const Latest = "September 9th, 2025";
const Month = "September 2025";

//cmds
const cmdCount = "65";
const songCount = "48";
const testCmds = "2";
const infoCmd = "13";
const imgCmd = "17";
const voiceCmd = "6";
const copyCmd = "7";
const multimedCmd = "9";
const emojiCmd = "6";
const actionCmd = "4";
const etcCmd = "5";
const MusMonth = "September 2025";

const infoCmds = "`info` Displays bot information.\n`ping` Checks to see if the bot is running, and displays uptimes for each script (main, extras, music).\n`commands` Provides a list of commands.\n`servers` Gives you a quick, messy list of servers the bot is on.\n`serverlist` Posts a prettier list of servers, but is slower and not as up-to-date as `servers`. However, it includes invite links to the servers.\n`invite` Provides the bot invite link (must be added by Doroken)\n`whoareyou` Why is there a talking orange cat in my server.\n`home` The server where you can find detailed information about updates and features, or just hang out and post memes.\n`updates` Returns the most recent update notes.\n`alt-` When followed by a command name, will return a list of aliases for that command. Example: `alt-ping`.\n`restart` Restarts the bot. For use by Doroken only.\n`status` Changes the playing status of the bot. Also can only be used by Doroken.\n`user` Gives you your user info.";
const imageCmds = "`avatar` Returns an image of your avatar.\n`woof` Gives you a woof.\n`papabless` Viva la Papa - for all your aesthetic needs.\n`shrekcena` You better not break any sporks while he's around. You're welcome, Fantic.\n`farquad` The beloved Lord Farquad...is it Farquad or Farquaad, anyway?\n`necessasaryry` You need a bug cage, man!\n`thanksforyourthoughts` Even if I don't agree...\n`heyogirls` Should I take another walk back in your dirshrektion?\n`brian` Brian the spooder > other spiders\n`losthat` Have you tried looking on your head?\n`elmo` Elmo knows where you live.\n`doroken2k17` Vote me for meme ~~dictator~~ person 2k17.\n`garfelfethecat` My OC. Shut up he's not a Garfield ripoff.\n`garfelfesays` Boi what'd you just say?\n`pogday` Let us celebrate our demon overlord, the Pog.\n`dedede` That sly penguin.\n`badmeme` For when someone posts a bad meme.";
const voiceCmds = "`connect` Connects to your voice channel.\n`disconnect` Disconnects from your voice channel.\n`playsong` Play an mp3 file from a list of songs coded into the bot.\n`play` Play a YouTube video in the voice channel (must be a YouTube url). Supports queueing and skipping.\n`music` Fetches a list of playable songs.\n`midi` Fetches a list of playable midi files.";
const copypastaCmds = "`memestealing` It is a serious crime.\n`gamergirl` Hey, sorry I saw your profile and I just thought you looked cute.\n`minecraft` Minecraft is the greatest game ever.\n`snortingwaffles` I would not be surprised if I walked in on you snorting waffles.\n`lobsterchronicles` And at the end you find out it's all just an ad for Daisy brand sour cream.\n`steamedhams` Well, I made it, despite your directions.\n`hotdogs` The epic quest for hotdogs in Kirby Air Ride.";
const mediaCmds = "`music` Gives you a list of songs that the bot can play.\n`kirbynightcore` Created by Doroken - a great lullaby.\n`oceanman` Take me by the hand, lead me to the land~\n`cottoneyejoe` Night loves this song.\n`edge` Posts Doroken's \"edgy\" playlist from Spotify.\n\`song` Gives you a song recommendation from a list over 180! Songs with an asterisk at the end indicate that it may be inappropriate, whether by a couple swear words or questionable content. Songs with a grave at the beginning indicate one I strongly recommend.\n\`album` Gives you an album recommendation. Albums with a grave are ones I strongly recommend.\n`music-yt` Gives you a song from YouTube.\n`music-spot` Gives you a song from Spotify. This has a lot more songs included than YouTube.\n`playlist` Gives you one of my Spotify Playlists.";
const emojiCmds = "`wut` wut.\n`thisisfine` That's okay, things are going to be okay.\n`pog` Watch out for Dr. Panda.\n`youtried` There was an attempt. \n`creepysmiley` Revived from the glory days of Chatango.\n`fortnite` The pinnacle of comedy.";
const actionCmds = "`givefish` Gives Conker a fish.\n`pat` Gives Conker a pat.\n`hello` Say hello to Conker.\n`sharedonut` Offer to share a donut with Conker.";
const etcCmds = "`say` Makes me repeat your message. Don't use it to make me call myself a heck or I'll eat your turtle.\n`heck` Detects your level of heckiness.\n`chat` Just throws up random chat responses, really. It's like a bunch of regurgitated memes.\n`tableflip` (╯°□°）╯︵ ┻━┻\n`slot` A slot machine! Get three cat faces in a row and you'll win an amazing prize.";


const statuses = [
	{
		"text": ">help | v1.47",
		"type": "PLAYING"
	},
  {
		"text": ">help | v1.47",
		"type": "PLAYING"
	},
  	{
		"text": "LAST UPDATE: 9.09.2025",
		"type": "PLAYING"
	},
	{
		"text": "Doroken (supposedly)",
		"type": "LISTENING"
	},
	{
		"text": "over your dumb Kingdom",
		"type": "WATCHING"
	},
  {
    "text": "with recent updates: YouTube audio playing, some new built-in songs, and a loop + crash fix",
    "type": "PLAYING"
  },
  {
    "text": "with ur mom",
		"type": "PLAYING"
  },
  {
    "text": "with a flaming death sword",
		"type": "PLAYING"
  },
  {
		"text": "HE'S BACK!!",
		"type": "WATCHING"
	},
  {
		"text": "the tube but nothing's on",
		"type": "WATCHING"
	},
  {
		"text": "https://cdn.discordapp.com/attachments/313380928208633858/794637693236805682/WELCOME_TO_HELL.mp4",
		"type": "WATCHING"
	},

  {
  "text": "some sweet tunes",
  "type": "STREAMING",
  "url": "https://www.youtube.com/watch?v=NrI-UBIB8Jk"
  }
]

//special for idiot nation/triple d nation - automatically gives new member a role
client.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "get conked (auto assigned role by Conker)"));
});

client.on("ready", () => {
  console.log("Logged in as Conker.");
  client.setInterval(() => {
		const status = statuses[Math.floor(Math.random() * statuses.length)];
		client.user.setActivity(status.text, { type: status.type });
	}, 22000);
  client.user.setStatus('dnd');
});


client.on("message", (message) => {
  
   if (message.channel.name == "vent" || message.channel.name == "vent-2" || message.channel.name == "vent-3") {
     return;
   }

     if (message.content.startsWith("pingall")) {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    const uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    const ping = client.ping;

    message.reply(`Pong!\n\ **Script 1 (main)** - Repl.it.\n\Took ${ping}ms to respond.\n\Running for ${uptime}`);
    message.react("✔");
  }
  
  //carl-bot
  if (message.author.id === "235148962103951360") {
if (message.content.startsWith("Finally,")) {
  const Replies = [
    "I'm gonna beat you up Carl",
"Shut up Carl",
"Nobody cares Carl",
"I will slam you through a car windshield Carl",
"I will bodyslam you onto concrete and break your stupid turtle shell Carl",
"Shut up Carl your opinion doesn't matter"
  ]
  const Reply = Replies[Math.floor(Math.random() * Replies.length)];
  message.channel.send(Reply);
  }
}
  //conker's mom
   if (message.author.id === "332663639158816768") {
     if (message.content.includes("Princely Paws")) {
     message.channel.send("MOOOM!");
   }
  }
  //rad dad
   if (message.author.id === "468480694059008000") {
if (message.content.startsWith("Conker! Go to your room!")) {
   message.channel.send("You're not my real dad!");
  }
}
  
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  
  //blacklist
  if (message.author.id === "victim_id") {
    message.channel.send("no.")
    return;
  }

  
if (message.author.id === "TESTIDHERE") {
        message.reply(stripIndents`No I don't wanna.\n\ \`${Error}\` \n\This means that something went wrong. Maybe it'll be fixed, maybe it won't.`)
    return;
    }
  
  
  
  //debug + testing
  if (command === "rtest") {
        message.reply(stripIndents`No I don't wanna.\n\ \`${Error}\` \n\This means that something went wrong. Maybe it'll be fixed, maybe it won't.`)
    return;
    }
  
  
  //Info

  if (command === "ping" || command === "pong" || command ==="ping1") {
    if (message.content.startsWith(">ping2") || message.content.startsWith(">ping3") || message.content.startsWith(">ping4")) return;

let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

    const uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
 const ping = client.ping;

    message.reply(`Pong!\n\ **Script 1 (main)** - Repl.it.\n\Took ${ping}ms to respond.\n\Running for ${uptime}`);
    message.react("✔");
  }

  if (command === "info") {
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

    const uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    message.channel.send({
"embed": {
    "title": "Info",
    "description": stripIndents`I am currently on ${client.guilds.size} servers!`,
	"color": 2254003,
      "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/328613437854711808/872588531346849822/conkconk.png"
      },
    "author": {
      "name": stripIndents`Conker ${Version}`,
    },
	  "footer": {
      "icon_url": stripIndents`${message.author.avatarURL}`,
      "text": stripIndents`Created, maintained, and owned by Doroken#9881 <> © ${Month} - Requested by ${message.author.username}`,
    },
	   "fields": [
       {
           "name": "Doroken",
           "value":"[Contact me](https://contactpage.glitch.me/)\n[Report an issue or request features](https://github.com/Doroken/Conker/issues)\n[Donate](https://www.patreon.com/Doroken)"
       },
       {
         "name": "Prefix",
         "value": "The prefix is `>`. No, you can not change it. You will use the meme arrow."
       },
       {
         "name": "Uptime",
         "value": stripIndents`${uptime}`
       },
       {
         "name": "Commands",
         "value": stripIndents`There are ${cmdCount} official commands, with ${testCmds} still in testing. I can currently play ${songCount} songs!`
       },
       {
         "name": "Servers",
         "value": stripIndents`${client.guilds.array().sort()}`
       }
       ]
    }
  });
}

  if (command === "servers") {
    message.reply(stripIndents`${client.guilds.map(g=>g.name).join('\n')}`);
  }

      if (command === "serverlist") {
    message.channel.send({
"embed": {
    "title": "Public Server List",
    "description": "`Total Server Count - 7`",
	"color": 2254003,
	   "fields": [
      {
        "name": "Bot Server",
        "value": "**Private Server**\nOwner: Doroken#9881\nMembers: ~10\n "
      },
	  {
        "name": "King Dedede's Idiot Nation™",
        "value": "[Invite](https://discord.gg/SCRUBBEDFORGITHUB)\nOwner: Doroken#9881\nMembers: ~65\n "
      },
	  {
        "name": "The Kirby Fan Chat",
        "value": "[Invite](https://discord.gg/SCRUBBEDFORGITHUB)\nOwner: SCRUBBEDFORGITHUB\nMembers: ~25\n "
      },
	  {
        "name": "Garfelfe Empire",
        "value": "[Invite](https://discord.gg/SCRUBBEDFORGITHUB)\nOwner: Doroken#9881\nMembers: < 10"
      },
	  {
        "name": "Soul's Lab",
        "value": "[Invite](https://discord.gg/SCRUBBEDFORGITHUB)\nOwner: SCRUBBEDFORGITHUB\nMembers: ~20"
      },
    /*{
        "name": "funny communist server where everyone gets free admin.",
        "value": "[Invite](https://discord.gg/SCRUBBEDFORGITHUB)\nOwner: Doroken#9881\nMembers: ~20"
    },*/

   {
        "name": "91 Times Rock - The Lonely Road",
        "value": "**Request Access**\nOwner: SCRUBBEDFORGITHUB\nMembers: ~5"
      },
       
      {
        "name": "Dungeons and Dragons Club",
        "value": "[Invite](https://discord.gg/SCRUBBEDFORGITHUB)\nOwner: SCRUBBEDFORGITHUB\nMembers: ~20"
      }

    ]
  }
 });
}

    if (command === "updates") {
    message.channel.send({
"embed": {
    "title": "Recent Updates",
    "description": "`For more update notes, please visit the #bot-updates channel on the home server.`",
	"color": 4863714,
	   "fields": [
      {
        "name": stripIndents`Latest Version - ${Version}`,
        "value": stripIndents`${Latest}`,
      },
	  {
        "name": "New Commands",
        "value": "`>play [youtube link]`, `>playsong [songname]`, and `>music`. `play` plays the audio from a YouTube video in the voice channel. `playsong` will play an audio file that's coded into Conker, just like the midi files are. `music` fetches the list of playable songs, and the list of playable midi files is now called with `midi` (or `midis`)."
      },
	  {
        "name": "Bug Fixes",
        "value": "Fixed a bug that would cause the bot to go into an infinite loop until it crashed when a blacklisted link was posted."
      },
	  {
        "name": "Other Notes",
        "value": "New songs: `ooga chaka`, `fireflies`, `fallen kingdom`, `rickroll`, `all star`, and `yahoo`. Use `>playsong` followed by one of these for a sweet mp3 file."
     },
    {
        "name": "Upcoming/Developing Features",
        "value": "bruh there's so much overhauling and info updating I still have to do. It's far past the point where looking at my own code is painful. Literally 3,003 lines of code in a single file now. Why."
     }
    ]
  }
});

  }
  
  if (command === "user") {

    if (message.channel.type === 'dm'){
	message.channel.send("Sorry, this command doesn't work in DMs.");
  return;
}
    message.channel.send({
      "embed": {
        "title": `${message.author.username}#${message.author.discriminator}`,
        "color": Math.floor(Math.random() * 16777214) + 1,
        "author": {
          "name": stripIndents`${message.member.displayName}`
        },
        "thumbnail": {
           "url": `${message.author.avatarURL}`
        },
  "footer": {
      "text": `Requested by ${message.author.username}`
        },
  "fields": [
      {
        "name": "ID",
        "value": stripIndents`${message.author.id}`
      },
      {
        "name": "Joined Discord on",
        "value": stripIndents`${message.author.createdAt} - [Convert to your timezone](https://www.onlineconverter.com/gmt-to-est)`
      },
      {
        "name": "Member of this server since",
        "value": stripIndents`${message.member.joinedAt} - [Convert to your timezone](https://www.onlineconverter.com/gmt-to-est)`
      },
      {
        "name": "Status",
        "value": stripIndents`${message.author.presence.status}`
      },
      {
        "name": "Current Activity",
        "value": stripIndents`${message.member.presence.game}`
      },
      {
        "name": "Roles",
        "value": stripIndents`${message.member.roles.map(r => `${r}`).join(' | ')}`
      }
    ]
   }
 }
)};

  if (command === "commands") {
	  message.channel.send({
"embed": {
    "title": "Home Server",
    "description": stripIndents`Commands are not case sensitive. That means \`>commands\` is the same as \`>cOmMaNdS\`.\nCurrent command count is ${cmdCount}. Use \`>updates\` to see what's new!`,
    "url": "https://discord.gg/SCRUBBEDFORGITHUB",
    "color": 761850,
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/313380928208633858/872589506715475999/chibi_conker_thing.png"
    },
    "author": {
      "name": stripIndents`Conker ${Version}`,
      "url": "https://www.wattpad.com/story/82418175-regna-felibus-book-one-astrum"
    },
	  "footer": {
      "icon_url": stripIndents`${message.author.avatarURL}`,
      "text": stripIndents`Requested by ${message.author.username} < © Doroken > ${Latest}`
    },
    "fields": [
      {
        "name": stripIndents`Info (${infoCmd})`,
        "value": `${infoCmds}`
      },
      {
        "name": stripIndents`Images (${imgCmd})`,
        "value": `${imageCmds}`
      },
      {
        "name": stripIndents`Voice (${voiceCmd})`,
        "value": `${voiceCmds}`
      },
      {
        "name": stripIndents`Copypasta (${copyCmd})`,
        "value": `${copypastaCmds}`
      },
	  {
        "name": stripIndents`Videos/Music (${multimedCmd})`,
        "value": `${mediaCmds}`
      },
      {
        "name": stripIndents`Emoji Response (${emojiCmd})`,
        "value": `${emojiCmds}`
      },
      {
        "name": stripIndents`Actions (${actionCmd})`,
        "value": `${actionCmds}`
      },

      {
      "name": stripIndents`Etcetera (${etcCmd})`,
      "value": `${etcCmds}`
      }

    ]
  }
});
  }

  if (command === "help") {
	  message.author.send({
"embed": {
    "title": "Home Server",
    "description": stripIndents`Commands are not case sensitive. That means \`>commands\` is the same as \`>cOmMaNdS\`.\nCurrent command count is ${cmdCount}. Use \`>updates\` to see what's new!`,
    "url": "https://discord.gg/SCRUBBEDFORGITHUB",
    "color": 761850,
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/313380928208633858/872589506715475999/chibi_conker_thing.png"
    },
    "author": {
      "name": stripIndents`Conker ${Version}`,
      "url": "https://www.wattpad.com/story/82418175-regna-felibus-book-one-astrum"
    },
	  "footer": {
      "icon_url": stripIndents`${message.author.avatarURL}`,
      "text": stripIndents`Requested by ${message.author.username} < © Doroken > ${Latest}`
    },
    "fields": [
      {
        "name": stripIndents`Info (${infoCmd})`,
        "value": `${infoCmds}`
      },
      {
        "name": stripIndents`Images (${imgCmd})`,
        "value": "`avatar` Returns an image of your avatar.\n`woof` Gives you a woof.\n`papabless` Viva la Papa - for all your aesthetic needs.\n`shrekcena` You better not break any sporks while he's around. You're welcome, Fantic.\n`farquad` The beloved Lord Farquad...is it Farquad or Farquaad, anyway?\n`necessasaryry` You need a bug cage, man!\n`thanksforyourthoughts` Even if I don't agree...\n`heyogirls` Should I take another walk back in your dirshrektion?\n`brian` Brian the spooder > other spiders\n`losthat` Have you tried looking on your head?\n`elmo` Elmo knows where you live.\n`doroken2k17` Vote me for meme ~~dictator~~ person 2k17.\n`garfelfethecat` My OC. Shut up he's not a Garfield ripoff.\n`garfelfesays` Boi what'd you just say?\n`pogday` Let us celebrate our demon overlord, the Pog.\n`dedede` That sly penguin.\n`badmeme` For when someone posts a bad meme."
      },
      {
        "name": stripIndents`Voice (${voiceCmd})`,
        "value": "`connect` Connects to your voice channel.\n`disconnect` Disconnects from your voice channel.\n*Use* `music` *to see a list of songs that can be played.*"
      },
      {
        "name": stripIndents`Copypasta (${copyCmd})`,
        "value": "`memestealing` It is a serious crime.\n`gamergirl` Hey, sorry I saw your profile and I just thought you looked cute.\n`minecraft` Minecraft is the greatest game ever.\n`snortingwaffles` I would not be surprised if I walked in on you snorting waffles.\n`lobsterchronicles` And at the end you find out it's all just an ad for Daisy brand sour cream.\n`steamedhams` Well, I made it, despite your directions.\n`hotdogs` The epic quest for hotdogs in Kirby Air Ride."
      },
	  {
        "name": stripIndents`Videos/Music (${multimedCmd})`,
        "value": "`music` Gives you a list of songs that the bot can play.\n`kirbynightcore` Created by Doroken - a great lullaby.\n`oceanman` Take me by the hand, lead me to the land~\n`cottoneyejoe` Night loves this song.\n`edge` Posts Doroken's \"edgy\" playlist from Spotify.\n\`song` Gives you a song recommendation from a list over 180! Songs with an asterisk at the end indicate that it may be inappropriate, whether by a couple swear words or questionable content. Songs with a grave at the beginning indicate one I strongly recommend.\n\`album` Gives you an album recommendation. Albums with a grave are ones I strongly recommend.\n`music-yt` Gives you a song from YouTube.\n`music-spot` Gives you a song from Spotify. This has a lot more songs included than YouTube.\n`playlist` Gives you one of my Spotify Playlists."
      },
      {
        "name": stripIndents`Emoji Response (${emojiCmd})`,
        "value": "`wut` wut.\n`thisisfine` That's okay, things are going to be okay.\n`pog` Watch out for Dr. Panda.\n`youtried` There was an attempt. \n`creepysmiley` Revived from the glory days of Chatango.\n`fortnite` The pinnacle of comedy."
      },
      {
        "name": stripIndents`Actions (${actionCmd})`,
        "value": "`givefish` Gives Conker a fish.\n`pat` Gives Conker a pat.\n`hello` Say hello to Conker.\n`sharedonut` Offer to share a donut with Conker."
      },

      {
      "name": stripIndents`Etcetera (${etcCmd})`,
      "value": "`say` Makes me repeat your message. Don't use it to make me call myself a heck or I'll eat your turtle.\n`heck` Detects your level of heckiness.\n`chat` Just throws up random chat responses, really. It's like a bunch of regurgitated memes.\n`tableflip` (╯°□°）╯︵ ┻━┻\n`slot` A slot machine! Get three cat faces in a row and you'll win an amazing prize."
      }

    ]
  }
    })
      message.reply("Sent you a list of commands! :paw_prints:");
    message.react("✔");
  }

  if (command === "invite") {
    message.channel.send("**Note that only Doroken can add me, as I am a private bot!**\n\If you'd like Conker on your server, simply ask. As long as I'm on your server, I'll gladly add it.\n\https://discordapp.com/api/oauth2/authorize?client_id=SCRUBBEDFORGITHUB&permissions=3537987&scope=bot");
  }

  if (command === "whoareyou") {
	message.reply("Ok so basically I'm cat. Not affiliated with Conker the Squirrel nope. I guess you could say I'm an \"OC\".\nDoroken has two different versions of me in writing - I'm the angry winged cat prince that prefers capitalism. Or something. While the \"official\" story hasn't been written yet, there's plenty of short stories and spinoffs that have been written (and never completed), which you can ask Doroken for.");
  }

  if (command === "home") {
      if (message.author.id === "TESTIDHERE") {
        message.reply(stripIndents`No I don't wanna.\n\ \`${Error}\` \n\This means that something went wrong. You should probably tell Doroken.`)
    return;
    } else
	  message.channel.send("https://discord.gg/SCRUBBEDFORGITHUB\n\Don't worry - we're very friendly, and would love to chat! You can even watch Doroken call me names on a daily basis.");
  }


  //Emoji

  if (command === "wut" || command === "conker") {
    message.channel.send("<:ConkerWut:380894345060155392>");
  }

  if (command === "thisisfine") {
    message.channel.send("<:ThisIsFine:352129159855865856>");
  }

  if (command === "youtried") {
    message.channel.send("<:YouTried:352129159813660680>");
  }


  if (command === "creepysmiley" || command === "psychosmiley" || command === "deputysmiley" || command === "chatango") {
    message.channel.send("<:CreepySmiley:252915802162855936>");
  }

  if (command === "pog") {
    message.channel.send("<:Pog:380471700090781697>");
  }
  if (command === "fortnite") {
    message.channel.send("<a:KirbyFortnite:516599623264108553>");
  }


 

  //Images

  if (command === "avatar" || command === "profpic" || command === "propic" || command === "pfp") {
    message.channel.send(message.author.avatarURL);
}

  if (command === "papabless" || command === "papa") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/228598099549880320/318148692442087434/PapaBless.png"]});
   }

  if (command === "woof") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/356584986511540234/378705230566522891/image.png"]});

  }

  if (command === "shrekcena") {
  message.channel.send({files: ["https://cdn.discordapp.com/attachments/228665452509790209/371731044786765824/john_cena2_by_233psych-d9t2tvh.jpg"]});
  }

  if (command === "farquad" || command === "farquaad") {
  message.channel.send({files: ["https://cdn.discordapp.com/attachments/328669803898208257/359082297422512138/farquad.png"]});
  }

  if (command === "necessasaryry") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/356584986511540234/383406160520282122/necessasaryry.png"]});
  }

  if (command === "heyogirls") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/362361552839507980/383095965877403660/image.jpg"]});
  }

  if (command === "brian") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/356584986511540234/383775426729738240/brian_the_spooder.png"]});
  }

  if (command === "losthat") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/356584986511540234/384118769636737025/hat.png"]});
  }

  if (command === "elmo") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/356584986511540234/383774696463925250/elmo_knows_where_u_live.jpg"]});
  }

  if (command === "doroken2k17") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/339793906189336586/352192889604014082/doroken_2k17.png"]});
  }

  if (command === "garfelfethecat" || command === "garfelfe") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/228665452509790209/393903659550900225/garfelfe_the_cat.png"]});
  }

  if (command === "garfelfesays") {
  message.channel.send({files: ["https://cdn.discordapp.com/attachments/296445980012969984/412791017142616065/garfelfe_says.png"]});
  }

  if (command === "pogday") {
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/319959788400148481/417137246303420418/image.jpg"]});
  }


  if (command === "dedede" || command === "dedede") {
	  message.channel.send({files: ["https://i.kym-cdn.com/photos/images/original/001/354/969/b37.png"]});
  }
  
  if (command === "badmeme") {
    message.channel.send({files: ["https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2Fflag.png"]});
  }


//MUSIC


if (command === "music") {
    message.channel.send({
      "embed": {
    "description": stripIndents`These are all regular songs. Use \`>playsong songname\` to play them. Song request? Slide into Doro's DMs.\nCurrent song count: ${songCount} (including regular songs and midis)`,
	"color": 2254003,
      "thumbnail": {
      "url": "https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2Ficon.png"
      },
    "author": {
      "name": "List of Songs"
    },
	  "footer": {
      "icon_url": stripIndents`${message.author.avatarURL}`,
      "text": stripIndents`© ${MusMonth} <> Music rights belong to their respective artists and copyrights and whatever else.`
    },
	   "fields": [
          {
            "name": "Song List",
            "value": "Super Mario 64 - YAHOO! `yahoo`\n\nBlue Swede - Hooked on a Feeling `ooga chaka`, `hooked on a feeling`\n\nCaptainSparklez - Fallen Kingdom `fallen kingdom`\n\nOwl City - Fireflies `fireflies`\n\nRick Astley - Never Gonna Give You Up `rickroll`, `rick roll`\n\nSmash Mouth - All Star `allstar`, `all star`"
          }
          ]
    }
  });
}


if (command === "midi" || command === "midis") {
    message.channel.send({
      "embed": {
    "description": stripIndents`These are all midi files. Use \`>songname\` to play them. Song request? Slide into Doro's DMs.\nCurrent song count: ${songCount} (including regular songs and midis)`,
	"color": 2254003,
      "thumbnail": {
      "url": "https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2Ficon.png"
      },
    "author": {
      "name": "List of Songs"
    },
	  "footer": {
      "icon_url": stripIndents`${message.author.avatarURL}`,
      "text": stripIndents`© ${MusMonth} <> Music rights belong to their respective artists and copyrights and whatever else the hecc`
    },
	   "fields": [
          {
           "name": "blink-182",
           "value":"M+M's `mms`\nStockholm Syndrome `stockholm`\nThe Rock Show `rockshow`\nI Won't Be Home For Christmas `christmas`\nWhat's My Age Again `age`\nWasting Time `wastingtime`\nAliens Exist `aliens`\nDon't Leave Me `leaveme`\nAll The Small Things `smallthings`\nMH 4.18.2011 `mh418`"
         },
       {

"name": "Coldplay",
           "value": "Viva la Vida `vivavida`\nClocks `clocks`\nParadise `paradise`\nStrawberry Swing `strawberry`\nCharlie Brown `cbrown`\nViolet Hill `violethill`\nThe Scientist `scientist`\nYellow `yellow`"
         },
{
"name": "Green Day",
           "value": "Boulevard of Broken Dreams `bobd`\nBasket Case `basket`\n21 Guns `21guns`\nJesus of Suburbia `suburbia`\nNice Guys Finish Last `niceguys`\nWaiting `waiting`"
       },

{
"name": "The Offspring",
           "value": "Have You Ever `haveyouever`\nKick Him When He's Down `kickdown`\nAmazed `amazed`\nThe Noose `noose`\n(Can't Get My) Head Around You `headaround`\nAmericana `americana`\nCome Out And Play `comeplay`\nChange the World `changeworld`\nGone Away `goneaway`\nI Choose `choose`\nMota `mota`\nThe Meaning of Life `meaninglife`\nSelf Esteem `selfesteem`\nThe Kids Aren't Alright `kidsalright`"
      },
{
"name": "Other",
           "value": "Smash Mouth - All Star `allstar`\nRick Astley -Never Gonna Give You Up `rickroll`\nNirvana - Heart Shaped Box `heartbox`"
         
       },
       
       {
         "name": "Beta! 1hr+ Nightcore Mixes (no audio skipping/rewinding; song lists are included)",
         "value": "Linkin Park (1hr 32m) `lp`\nThe Offspring (1hr 5m) `offspring`\nHard/Punk Rock Mix (50:50) `rockmix`"
       }
       ]
    }
  });
}
  
  
  //Songs

  /* if (command === "loop") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Loop toggled.")
 // dispatcher.on('end') something something
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
  } */



if (command === "playsong" && message.content.includes("yahoo")) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Super Mario 64 - YAHOO! Sound Effect`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/56f8d857-41e2-4608-8886-b98787331fc9%2F%5BSuper%20Mario%2064%5D%20Mario%20-%20YAHOO%20!%20Sound%20Effect.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}




  if (command === "playsong" && message.content.includes("ooga chaka") || message.content.includes("hooked on a feeling") ) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Blue Swede - Hooked on a Feeling (Ooga Chaka)`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/9698f17f-f041-4ec6-9b29-6be55694e473%2Fyt1s.com%20-%201%20Blue%20Swede%20%20Hooked%20on%20a%20Feeling.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}


if (command === "playsong" && message.content.includes("fallen kingdom")) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `CaptainSparklez - Fallen Kingdom`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/56f8d857-41e2-4608-8886-b98787331fc9%2F01%20Fallen%20Kingdom.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}


if (command === "playsong" && message.content.includes("fireflies")) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Owl City - Fireflies`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/56f8d857-41e2-4608-8886-b98787331fc9%2F09%20Fireflies.m4a');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "playsong" && message.content.includes("rickroll") || message.content.includes("rick roll") || message.content.includes("never gonna give you up")) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Rick Astley - Never Gonna Give You Up`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/56f8d857-41e2-4608-8886-b98787331fc9%2Fnot%20rick%20roll.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "playsong" && message.content.includes("all star") || message.content.includes("allstar")) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Smash Mouth - All Star`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/56f8d857-41e2-4608-8886-b98787331fc9%2Fyt1s.com%20-%20Smash%20Mouth%20%20All%20Star.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}



  
  if (command === "lp") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Linkin Park Nightcore Mix (1hr 32m)`\nSong list: https://pastebin.com/2fkZPd2s");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/94890286-4be0-46c4-af6d-0eb8d60e191d%2FLPnightcore.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
    if (command === "rockmix") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `Hard/Punk Rock Nightcore Mix (50:50)`\nSong list: https://pastebin.com/JXZYnAhg");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/94890286-4be0-46c4-af6d-0eb8d60e191d%2Fhard-punk%20rock%20nightcore%20mix.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
  
  if (command === "offspring") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `The Offspring Nightcore Mix (1hr 5m)`\nNo song list yet, sorry!");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/94890286-4be0-46c4-af6d-0eb8d60e191d%2FOffspring%20Mix%20(2019_04_13%2018_38_07%20UTC).mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

  
  
  if (command === "allstar") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) All Star - Smash Mouth`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAllStar.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
    if (command === "vivavida") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Viva la Vida - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FVivaLaVida.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
    if (command === "bobd") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Boulevard of Broken Dreams - Green Day`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FBoulevardofBrokenDreams.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
if (command === "rickroll") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Never Gonna Give You Up - Rick Astley`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FNeverGonnaGiveYouUp.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "basket") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Basket Case - Green Day`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FBasketCase.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "21guns") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) 21 Guns - Green Day`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2F21Guns.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "suburbia") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Jesus of Suburbia - Green Day`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FJesusOfSuburbia.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "niceguys") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Nice Guys Finish Last - Green Day`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FNiceGuysFinishLast.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "waiting") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Waiting - Green Dayy`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FWaiting.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "clocks") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Clocks - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FClocks.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "paradise") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Paradise - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FParadise.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "strawberry") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Strawberry Swing - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FStrawberrySwing.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "cbrown") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Charlie Brown - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FCharlieBrown.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "violethill") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Violet Hill - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FVioletHill.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "scientist") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) The Scientist - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FTheScientist.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "yellow") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Yellow - Coldplay`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FYellow.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "haveyouever") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Have You Ever - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FHaveYouEver.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "kickdown") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Kick Him When He's Down - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FKickHimWhenHesDown.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "amazed") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Amazed - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAmazed.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
  if (command === "noose") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) The Noose - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FTheNoose.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "headaround") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) (Can't Get My) Head Around You - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FCantGetMyHeadAroundYou.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "americana") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Americana - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAmericana.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "comeplay") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Come Out and Play - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FComeOutAndPlay.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "changeworld") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Change the World - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FChangeTheWorld.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "goneaway") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Gone Away - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FGoneAway.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "choose") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) I Choose - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FIChoose.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "mota") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Mota - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FMota.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "meaninglife") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) The Meaning of Life - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FTheMeaningOfLife.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "selfesteem") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Self Esteem - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FSelfEsteem.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "kidsalright") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) The Kids Aren't Alright - The Offspring`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FTheKidsArentAlright.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "mms") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) M+M's - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FMMs.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "stockholm") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Stockholm Syndrome - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FStockholmSyndrome.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "rockshow") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) The Rock Show - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FTheRockShow.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "christmas") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) I Won't Be Home For Christmas - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FIWontBeHomeForChristmas.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "age") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) What's My Age Again - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FWhatsMyAgeAgain.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "wastingtime") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Wasting Time - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FWastingTime.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "aliens") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Aliens Exist - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAliensExist.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "leaveme") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Don't Leave Me - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FDontLeaveMe.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

if (command === "smallthings") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) All The Small Things - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FAllTheSmallThings.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

  if (command === "mh418") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) MH 4.18.2011 - blink-182`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FMH4.18.2011.mp3');
        dispatcher.on('end', () => {
          message.member.voiceChannel.leave()
          });
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}
  
    if (command === "heartbox") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("Connected! Now playing `(MIDI) Heart Shaped Box - Nirvana`");
const dispatcher = connection.playArbitraryInput('https://cdn.glitch.com/268eb76d-338e-4954-b69e-b9d295244729%2FHeartShapedBox.mp3');
        })
        .catch(stripIndents`No I don't wanna.\n\`${Error}\`\nYou should probably tell Doroken.`);
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
}

  




//Conker

  if (command === "givefish") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/228665452509790209/377243191084318733/feesh.png"]});
  }

  if (command === "pat") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/228665452509790209/377241527744725016/REEEEEEEEEE.png"]});
  }

  if (command === "hello") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/228665452509790209/377239118477918227/hi.png"]});
  }

  if (command === "sharedonut") {
 message.channel.send({files: ["https://cdn.discordapp.com/attachments/339793906189336586/369638669616939009/capitalist.png"]});
  }



  //Videos + Music

  if (command === "kirbynightcore" || command === "goodmusic") {
    message.channel.send("https://www.youtube.com/watch?v=K3cmml53DdU");
  }

  if (command === "oceanman") {
    message.channel.send("https://www.youtube.com/watch?v=tkzY_VwNIek");
  }

  if (command === "cottoneyejoe") {
    message.channel.send("https://www.youtube.com/watch?v=JGrjTJmIPz0");
  }

  if (command === "edge" || command === "edgy") {
    message.channel.send("cut my life into pieces\n\https://open.spotify.com/user/d3s10xsuwc7hgv1n4smonlss0/playlist/0zdPKVDMjdVaL4FAmTdDL8?si=lRW5hP5JTDqY3t3VMh0iuw");
  }



  //Copypasta

  if (command === "memestealing") {
    message.channel.send("Meme stealing is no joke. It's a serious crime. If you or a loved one has been affected by meme thievery, please email me toll free at thisisascam@lol.no, or call this number TOLL FREE: (911) - 420 - 1234. Stealing memes here is a bannable offense, and no, we don't follow the United States Constitution. You will not be entitled to a trial with a free lawyer. The judicial system kinda sucks anyway. You know what else sucks? Meme stealing. Don't do it. I got my eyes on you <:AngeryEyes:380489940972077066>");
  }

  if (command === "gamergirl" || command === "cute") {
	  message.channel.send("hey, sorry I saw your profile and I just thought you looked cute in your picture, I really wanted to tell you that) It's really rare to see girls playing video games haha! I don't know why its a guy thing honestly im like really against misogyny and like ill be the one in the kitchen making sandwiches. We should really play l4d2 sometime its a really cool zombie game with a lot of scary moments, but don't worry ill be there to protect you ;) sorry that wasnt flirting I swear Im just trying to be friendly I really like your profile picture sorry was that too far? Really sorry i'm really shy I don't go out much haha add me on skype we should talk more you look really nice and fun xxx <3 <3 <3");
  }

  if (command === "minecraft") {
	  message.channel.send("FUNDAMENTALLY, MINECRAFT IS THE GREATEST GAME EVER CREATED, AND NO OTHER GAME CAN REACH ITS CALIBER. WHEN MINECRAFT WAS RELEASED, IT RAISED THE BAR OF THE VIDEO GAME INDUSTRY TO A POINT WHERE NO OTHER GAME COULD PHYSICALLY EVER BE BETTER THAN MINECRAFT, OTHER THAN MINECRAFT ITSELF. MINECRAFT FOREVER IS AND WILL BE THE GREATEST VIDEO GAME OF ALL TIME. YOU CAN DO STUFF WITH BLOCKS. YOU CAN GET DIAMONDS AND ALL THAT. IF SOMEBODY ASKED ME, \"WHY DO YOU LIKE MINECRAFT SO MUCH?\", YOU KNOW WHAT I WOULD TELL THEM? I WOULD TELL THEM MINECRAFT IS MY SOUL, IT IS MY FUEL, IT GIVES ME THE STRENGTH AND ENERGY TO WAKE UP EVERY MORNING AND KEEP GOING. MINECRAFT IS SIMPLY GOD'S GIFT TO THIS WORLD. I'VE HAD ISSUES WITH DEPRESSION FOR YEARS, BUT YOU KNOW WHAT HAS KEPT ME GOING? MINECRAFT. BEING ABLE TO SIT DOWN AND HAVE A GOOD OL TIME ON MINECRAFT. IF YOU PLAY MINECRAFT, YOU'RE ALREADY ON A HIGHER LEVEL INTELLECTUALLY THAN THE MAJORITY OF THE POPULATION. THAT'S SIMPLY BECAUSE MINECRAFT MAKES YOU SUPERIOR TO THE REST OF THE HUMAN RACE. IT STIMULATES YOUR BRAIN CELLS THE MORE YOU PLAY, WITH EVERY COBBLESTONE YOU COLLECT, THE MORE POWER YOU RECEIVE. FOR EVERY COOKED STEAK YOU CONSUME AND EVERY DIAMOND SHOVEL YOU BREAK, MORE POWER GOES TO YOU. THE MORE YOU PLAY MINECRAFT, THE MORE OF A SAINT YOU BECOME, UNTIL YOU PLAY ENOUGH MINECRAFT TO REACH ULTIMATE GOD STATUS. MINECRAFT IS THE GREATEST GAME EVER CREATED.");
  }

  if (command === "snortingwaffles" || command === "waffles") {
	  message.channel.send("I WOULD NOT BE SUPRISED IF I WALKED INTO YOU SNORTING WAFFLES. YOU ARE A WAFFLE SNORTING MANIAC WHO NEEDS TO GO TO PANCAKE THERAPY. YOU UGLY WAFFLE SNORTING MONSTER. AND YOU BETTER NOT SNORT YOUR PANCAKE THERAPIST OR I WILL SUE YOU AND EVERYONE YOU LOVE SO YOU CAN GO TO PRISON FOR THE REST OF YOUR LIFE. AND THE PRISON WILL NOT SERVE ANY WAFFLES. ONLY BROCOLLI, MUSHROOM, AND APPLE JUICE STEW TO REMIND YOU HOW MUCH OF A PANCAKE AND WAFFLE SNORTING MONSTER YOU ARE. AND IF YOU SNORT THE BROCOLLI MUSHROOM APPLE JUICE STEW YOU WILL GET THE DEATH PENALTY ON THE ELECTRIC CHAIR.");
  }

  if (command === "lobsterchronicles" || command === "lobster") {
	  message.channel.send("STAR WARS - THE LOBSTER CHRONICLES\n\
	A blinding light filled the room, as pain ripped into the General's abdomen. She looked at Kylo Ren, the lightsaber in her stomach. The lightsaber receded, and she collapsed, dead. \"I told you we were abandoning our old plan for a new one, but you just wouldn't listen.\" He looked around at the rest of the people in the board meeting. \"Anyone else want to speak?\" They all shook their heads, eyes wide in fear. \"Good. As you know, we have found a strange planet of red crustaceans. These Creatures have strange claws, which as you have seen, are very deadly.\" A man lifted up a severed arm. \"I think that we can use these lobster things to make new weapons that can crush entire planets. And we have someone to help.\" He stepped aside, and someone walked into the door. \"Cheerio, Mates!\" Someone said in a British accent. \"I'm Jeffrey the Third!\" The lobster walked into the room. \"I heard you have been having trouble with someone named Rey - and I'll take care of her.\"\n\ \n\
	One Week Later\n\ \n\
	Rey jumped out of the starship as it exploded. As she rolled into the ground, she shoots the giant lobster. \"What is this thing? My blasters aren't working!\" From afar, Jeffrey watched in glee. \"Of course she can't handle our tough shells!\" He laughed. \"This is getting tiring.\" Rey muttered, throwing a grenade. The lobster's tiny head exploded, and it fell over. \"What?\" Jeffrey yelled, storming out there. \"Fight me!\" \"Okay.\" Rey said, getting out her lightsaber. Jeffrey got out his light-claw. The epic fight began. Actually it wasn't that epic because Jeffrey sucks and Rey stabbed him in five seconds. \"Hey, I wonder if this would be tasty!\" Rey then put Jeffrey's corpse on a plate and cut into it. It was perfectly cooked from the lightsaber. She took a bite. \"This is pretty good - but there's only one thing that could make this better-\" She took out a tub, and put a white dollop on her lobster. \"-The amazing taste of Daisy brand Sour Cream.\"");
  }

  if (command === "steamedhams" || command === "ham") {
	  message.channel.send("[Ding dong]\nWell Seymour, I made it, despite your directions.\nAh, Superintendent Chalmers! Welcome! I hope you're prepared for an unforgettable luncheon.\n[Gasp] Oh egads! My roast is ruined!\nBut what if...I were to purchase fast food and disguise it as my own cooking? Oh hohoho...Delightfully devilish, Seymour!\nSkinner with his crazy explanations. The superintendent's gonna need his medication, when you hear Skinner's lame exaggerations there'll be trouble in town tonight!\nSEYMOOOUUR\nSuperintendent I was just, uh, stretching my calves on the windowsill! Isometric exercise, care to join me?\nWhy is there smoke coming out of your oven Seymour?\nOh that's not smoke, it's steam! Steamed from the steamed clams we're having! mmmm! Steamed clams!\nPhew!\nSuperintendent I hope you're ready for mouthwatering hamburgers!\nI thought we were having steamed clams?\nOh, no! I said steamed hams! That's what I call hamburgers!\nYou call hamburgers steamed hams.\nYes! It's a regional dialect.\nUh huh. What region?\nUpstate New York.\nReally. Well I'm from Utica and I've never heard anyone use the phrase steamed hams.\nOh not in Utica, no. It's an Albany expression.\nI see.\nYou know these hamburgers are quite similar to the ones they have at Krusty Burger.\nOh hohohoho no! Patented Skinner Burgers, an old family recipe!\nFor steamed hams.\nYes!\nYes, and you call them steamed hams despite the fact that they are obviously grilled.\nUh you know, one thing I sh-\nExcuse me for one second.\nOf course.\nAh well. That was wonderful. Good time was had by all, I'm pooped.\nYes I should be-\nGOOD LORD WHAT IS HAPPENING IN THERE?\nAurora Borealis.\nAurora Borealis. At this time of year, at this time of day, in this part of the country, localized entirely within your kitchen?\nYes!\nMay I see it?\nNo.\nSeymour! The house is on fire!\nNo mother, it's just the northern lights.\nWell Seymour, I must say, you are an odd fellow. But you steam a good ham.\nHELP! HEEEEELP!\n[Firetruck noises]");
}

if (command === "hotdogs") {
	  message.channel.send({
"embed": {
    "fields": [
      {
        "name": "The quest for 3 hotdogs in City Trial.",
        "value": "I just finished city trial checklist like 2 weeks ago, and I think the most intense moment was during my 6 hour long hot dog hunting session. There's a checklist thing that requires you to get 3 hot dogs, and yes it took that long. They're rare!"
      },
      {
       "name": ".",
        "value": "It's like 2am and I'm still goin for these hot dogs and at the beginning of a match i see the one other Cpu open a box and bam there's a hot dog and he's about to release his boost to get it, but my adrenaline kicked in and I remember instantly going into kill mode to protect my hot dog baby. I see a sword ability and grab it and slice him to pieces, and I kept going like a brutal psychopath to ensure he wouldn't be bothering me or my hotdog family in the future. I grab the hot dog and I continue my quest. Don't worry my child, we'll be a family again soon."
      },
      {
       "name": ".",
        "value": "Like four minutes later I have 2 pieces of dragoon, and i find the third piece in the underground volcano. I burst out the top like the beautiful butterfly I am and soar over the city to see another hot dogger on the other side of the map, and it's already on the ground so it's probably stale and will disappear any second. I pray to RNG-esus and thank him for all the speed patches he endowed me while I burn through the atmosphere, veering left and right with the force of the asteroid that killed the dinosaurs. The hot dog Sprite becomes more defined as I soar closer. It begins to blink and I can feel it in my heart, as if I was having an ironic heart attack caused by not enough hot dogs. Luckily I believed in myself and my friends lifted their arms to grant me their ki like in dragon ball z, and I snatched it right before it expired. Okay. Calm down. One more."
      },
      {
       "name": ".",
        "value": "I'm breaking so many potential hot dog boxes, the company that makes them are probably going to go out of business. One minute left and I'm flying toward the electric hotel and MY WAVEBIRD GC CONTROLLER DIES NO!!! NO NO NO!!! IDK WHERE BATTERIES ARE?!! I whip out my other GC remote and unwind it so fast I injure myself, plug that poop in and slam myself back on the couch. 30 SECONDS LEFT I MUST ESCALATE QUICKLY. I saw a blue box on the top floor so I drag myself out of the water and use the lift straight to the top. I open the box and no hot dog. The feeling of defeat fills me as I remember all of my previous efforts, and how they were for nothing. I continue forward automatically as the final bits of the end time music approaches. Out of the corner of my eye, that night I found true love at first sight as I lock eyes with a fresh, Sky-spawned frank waiting for my embrace."
      },
      {
       "name": ".",
        "value": "5, 4, 3, boost, 2, turn, 1, hotdog get.\n\ \n\My check list is complete. Frick you Sakurai. I did it."
      },

    ]
  }
});
  }



  //Voice + Music
    if (command === "connect" || command === "join") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply(`hi.\nConnected to ${message.member.voiceChannel}`)
          connection.playArbitraryInput("https://www.youtube.com/watch?v=oO9nc-u0q14");
        })
    } else {
      message.reply("Oi idiot, ya' needa join a voice channel first!");
    }
  }

      if (command === "disconnect" || command === "leave" || command === "stop" || command === "shutupjesusicantstanditevenironically" || command === "begone" || command === "fuckoff" || command === "f-off" || command === "shutup" || command === "goaway") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.leave()
      message.reply(`bye nerd.\nLeft ${message.member.voiceChannel}`);
    } else {
      message.reply("You have to be in the voice channel in order to make me leave.");
    }
}
  
    if (command === "playlist") {
     const suggestion = [
       "Dank Dreams And Broken Memes (Dank Memes and Broken Dreams - my main library, I guess)\n\https://open.spotify.com/playlist/4491S6XagREZmpoqntT5ZL",
       "Linking Park (Linkin Park Collection)\n\https://open.spotify.com/playlist/1tt0ua3DGOrxhqyHwDAhZT",
       "Lincoln Park Live (Linkin Park Live Performances)\n\https://open.spotify.com/playlist/2nvReOR1aK2FGdUhWWFf5A",
       "The Children (The Offspring Collection)\n\https://open.spotify.com/playlist/055S5eXsYdoCt9Fkb95Yhw",
       "Red Night (Green Day Collection)\n\https://open.spotify.com/playlist/5U14bUIkIAJgJpVnHbe7Em",
       "wink-91 (blink-182 Collection)\n\https://open.spotify.com/playlist/2ABhF9W0JueCq1jYou2wpM",
       "Warmwork (Coldplay Collection)\n\https://open.spotify.com/playlist/1jDKLmysm3OrTYtTmo7lXl",
       "Crawling in My Wake Me Up Last Resort...electric boogaloo- (Edgy Collection)\n\https://open.spotify.com/playlist/0zdPKVDMjdVaL4FAmTdDL8"
     ]
     const Reply = suggestion[Math.floor(Math.random() * suggestion.length)];
     message.reply(Reply)
         return;
}
  
  if (command === "music-yt") {
     const suggestion = [
       "https://www.youtube.com/watch?v=9eibL0oZNh4", //pretty birdy
       "https://www.youtube.com/watch?v=XbdqHgaZFSo", //a line in the sand inst
       "https://www.youtube.com/watch?v=zLgP15W37j4", //everlong
       "https://www.youtube.com/watch?v=4bzPA8kIAc4", //tears don't fall inst
       "https://www.youtube.com/watch?v=eO3iN7rNczc", //already gone
       "https://www.youtube.com/watch?v=YHjdTZ-myCU", //mad world
       "https://www.youtube.com/watch?v=tnLQnX7BPeU", //field of hopes and dreams
       "https://www.youtube.com/watch?v=StlIYF_h4ho", //bang three w/ vocals
       "https://www.youtube.com/watch?v=FqM0NeQI-P4", //rhinestone
       "https://www.youtube.com/watch?v=ne10vI-_XUU", //crossroads
       "https://www.youtube.com/watch?v=qOaJnUouiec", //stick n move
       "https://www.youtube.com/watch?v=JNZZNyCLj5A (Explicit)", //tears don't fall
       "https://www.youtube.com/watch?v=KIW_Ca8OWTo", //radioactive
       "https://www.youtube.com/watch?v=HMtxl9x-QcI (May be blocked cause of copyright shizzizle)", //basshunter 2 hours
       "https://www.youtube.com/watch?v=iDONKzBLnHg", //bang bang
       "https://www.youtube.com/watch?v=VgorjCQ6zS4", //what's my age again
       "https://www.youtube.com/watch?v=5pzQmMyq7mU", //ear exploder
       "https://www.youtube.com/watch?v=2v0Vjn6ucaw", //the warpzone
       "https://www.youtube.com/watch?v=su6cfsd-H5I", //mad world + all star
       "https://www.youtube.com/watch?v=B-He6EzP5zY", //castle of glass
       "https://www.youtube.com/watch?v=r5EXKDlf44M (there's like one swear)", //boulevard of broken dreams
       "https://www.youtube.com/watch?v=rhafeVC9uq0", //i'd rather drown
       "https://www.youtube.com/watch?v=QnS09oQNexA", //new divide
       "https://www.youtube.com/watch?v=bVkWXqQgxHA", //drive my car
       "https://www.youtube.com/watch?v=F0Xwt461QyE (Explicit?)", //faded glory
       "https://www.youtube.com/watch?v=sSIIuqNqJOE (Explicit)", //jesus of suburbia
       "https://www.youtube.com/watch?v=lTTMPWZ7Hmk", //long lost feeling
       "https://www.youtube.com/watch?v=ISey8CPOo3Q (Explicit-ish? Swearing's in the background so idk)", //6/8
       "https://www.youtube.com/watch?v=B3egnoj9nMU", //ground xero
       "https://www.youtube.com/watch?v=VdlQIn3e2Qg (Explicit)" //natives
       
       
     ]
     const Reply = suggestion[Math.floor(Math.random() * suggestion.length)];
     message.reply(Reply)
         return;
}
  
    if (command === "music-spot") {
     const suggestion = [
       "https://open.spotify.com/track/3cfOd4CMv2snFaKAnMdnvK", //all star
       "https://open.spotify.com/track/6nTiIhLmQ3FWhvrGafw2zj (Explicit)", //american idiot
       "https://open.spotify.com/track/59sqMNnhzYLyijAFRv7gEw", //armatage shanks
       "https://open.spotify.com/track/6L89mwZXSOwYl76YXfX13s", //basket case
       "https://open.spotify.com/track/278Ao6KQDxWGGszv24uvhI", //bang bang
       "https://open.spotify.com/track/409hGnupGUeqjzpv4Ycs3g (Explicit)", //fod
       "https://open.spotify.com/track/3aYBjxTMvrEOP0A0UXg9ER", //final masquerade
       "https://open.spotify.com/track/3DamFFqW32WihKkTVlwTYQ", //fireflies
       "https://open.spotify.com/track/6wsfrOQOJK9CSwCsyMt1NJ", //forever now
       "https://open.spotify.com/track/6L5QMBrydoaapTDMQ0Anui", //guilty all the same
       "https://open.spotify.com/track/28qHtpV7dkgqUDCd1tYJ9t", //freak show
       "https://open.spotify.com/track/0eUJzAGs9OKSOmLVpsng7e (Explicit)", //having a blast
       "https://open.spotify.com/track/0MsrWnxQZxPAcov7c74sSo (Explicit)", //holiday + bobd
       "https://open.spotify.com/track/47VtNNvQhHvy8HWBIXL8Xy (Explicit)", //i'd rather drown
       "https://open.spotify.com/track/7jeI6EdY0elPSNz80mAKS8", //in pieces
       "https://open.spotify.com/track/2cZXlLwkRmDww37tbEygXl (Explicit)", //keys to the kingdom
       "https://open.spotify.com/track/4EchqUKQ3qAQuRNKmeIpnf", //the kids aren't alright
       "https://open.spotify.com/track/58KPPL1AdLHMvR2O2PZejr (Explicit)", //jesus of suburbia
       "https://open.spotify.com/track/4BRvD5QdauTo8EuUvYchu3", //line in the sand
       "https://open.spotify.com/track/3LRJbFT9rKoKv4aW7PuBJC (Explicit)", //longview
       "https://open.spotify.com/track/6nek1Nin9q48AVZcWs9e9D", //paradise
       "https://open.spotify.com/track/0PAlrNkCRRHv7hShF5s7Rr", //outlaws
       "https://open.spotify.com/track/3oqYMRKQcwyNmFn1VD2ukD", //revolution radio
       "https://open.spotify.com/track/4JJ5zGKnb1IpERyBrfmb1y", //rush of blood to the head
       "https://open.spotify.com/track/2OV1oB6LQWNw7kTOHU7Bua", //say goodbye
       "https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle", //the scientist
       "https://open.spotify.com/track/6EsBn1Md8C5YdbCzvwvZq8", //self esteem
       "https://open.spotify.com/track/19YmvsVCetCBeVj6O2mljR", //still breathing
       "https://open.spotify.com/track/4DLHhwZCJptTUCQPk6IAq8", //strawberry swing
       "https://open.spotify.com/track/1ZqHjApl3pfzwjweTfMi0g", //violet hill
       "https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b", //viva la vida
       "https://open.spotify.com/track/390SemxFYgPZ3FfGVqiIqt", //waiting
       "https://open.spotify.com/track/1lgN0A2Vki2FTON5PYq42m", //warriors
       "https://open.spotify.com/track/3S8MFB68isPbRVgaU0MaIW", //wastelands
       "https://open.spotify.com/track/18lR4BzEs7e3qzc0KVkTpU", //what i've done
       "https://open.spotify.com/track/5JZcX7TTLx4l0xFIXJ3DBt", //what's my age again
       "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg", //yellow
       "https://open.spotify.com/track/44LVgFZvUcBYo98vy71tvd", //gravity
       "https://open.spotify.com/track/2NXLCUySCK9odGGCGIzbOA", //the catalyst
       "https://open.spotify.com/track/6TfBA04WJ3X1d1wXhaCFVT (Explicit)", //gonna go far kid
       "https://open.spotify.com/track/6pM25DLzJb5oWj74d3ElXI", //2000 light years away
       "https://open.spotify.com/track/7fSFdF4ymvjiOIr1EzB2pu", //1.36
       "https://open.spotify.com/track/5BmagRD7Thki6O1zZwbxBy", //boys of summer
       "https://open.spotify.com/track/42d6bxB7OQ6f8ct2ihYNBw (Explicit)", //are we the waiting + st jimmy
       "https://open.spotify.com/track/48UPSzbZjgc449aqz8bxox", //californication
       "https://open.spotify.com/track/1kVWn6BRzI9CwGz2vwmXlH", //los angeles
       "https://open.spotify.com/track/68jM3HGqCToav6bsNY2slc", //san diego
       "https://open.spotify.com/track/7dVDWf0wud70V4PgYfKnaG (Explicit)", //burnout
       "https://open.spotify.com/track/2LYAG9jlH9rul11nalRxR0", //killer
       "https://open.spotify.com/track/0KTja597ZMQUsQuUljoCX4 (Explicit)", //meme machine
       "https://open.spotify.com/track/1kdiiFGX1Htx0aVZYaDwEJ (Explicit)", //tears don't fall
       "https://open.spotify.com/track/26AYR77170U49cMcXB7aRV (Explicit)", //feeling this
       "https://open.spotify.com/track/1oTo3ijRbaDAtrjJrGAPSw", //miss you
       "https://open.spotify.com/track/6scwY7NWNSUbD7tLSbn7Ba", //in bloom
       "https://open.spotify.com/track/2ydUT1pFhuLDnouelIv4WH (Explicit)", //rock show
       "https://open.spotify.com/track/6ndmKwWqMozN2tcZqzCX4K (Explicit)", //remember the name
       "https://open.spotify.com/track/3RBXNeUbe3X7ZBch00D2St (Explicit)", //extraordinary girl + letterbomb
       "https://open.spotify.com/track/1O1Dzi3VvUfs0GAbcjqxJC", //christie road
       "https://open.spotify.com/track/0EonrvTzzNScmk7QT4L3dw (Explicit)", //nice guys finish last
       "https://open.spotify.com/track/1D23LHWrtlQL9QwxDaUjXZ (Explicit)", //dumpweed
       "https://open.spotify.com/track/60a0Rd6pjrkxjPbaKzXjfq", //in the end
       "https://open.spotify.com/track/5ZMqdwtZvvNrpUUTijZem6", //crests of waves
       "https://open.spotify.com/track/1nLnpLXvl68RZCSjfkyiaa (Explicit)", //brain stew
       "https://open.spotify.com/track/3BmjRmFTESgWZLPSVGp8aG", //lying from you
       "https://open.spotify.com/track/0M955bMOoilikPXwKLYpoi", //hate everything about you
       "https://open.spotify.com/track/4yugZvBYaoREkJKtbG08Qr", //take it easy
       "https://open.spotify.com/track/4XizBlyqR7ZGVTX0Fyonm2", //today
       "https://open.spotify.com/track/4NZn1vRGq9s83B7JWsoQgn", //gotta get away
       "https://open.spotify.com/track/5BnFZLH99sYav2cxJFGO2n", //gone away
       "https://open.spotify.com/track/6c9UjtsLpfK5hTwTrdRDbR (Explicit)", //lonely guy
       "https://open.spotify.com/track/4qMzPtAZe0C9KWpWIzvZAP", //bullet butterfly wings
       "https://open.spotify.com/track/0snQkGI5qnAmohLE7jTsTn", //toxicity
       "https://open.spotify.com/track/2DlHlPMa4M17kufBvI2lEN", //chop suey
       "https://open.spotify.com/track/2SpGXD7EbexndFmmThrnsy", //deer dance
       "https://open.spotify.com/track/4e9eGQYsOiBcftrWXwsVco", //aerials
       "https://open.spotify.com/track/1QqbWDwIXwbvXnkBu2bbjo", //walk on water
       "https://open.spotify.com/track/2zQIITgo6sc5ppOfPcH205", //square one
       "https://open.spotify.com/track/0WWz2AaqxLoO0fa9ou6Fqc", //white shadows
       "https://open.spotify.com/track/2junx9LRubsMY2OHaSc5DE", //mayonaise
       "https://open.spotify.com/track/0GlTcDHNVSbx1Oy8kQqRMB", //amazed
       "https://open.spotify.com/track/1Vdz3WUy9baNOs4YU4LlKJ", //lithium
       "https://open.spotify.com/track/1JcpLlrnB9dZPWxyvLiatP", //half-truism
       "https://open.spotify.com/track/0rUNZQuYQvOz6A6zwyT6tM", //how i disappear
       "https://open.spotify.com/track/7j2Bmzpnf6RwEWEQ2sv8Ho", //house of wolves
       "https://open.spotify.com/track/2d6m2F4I7wCuAKtSsdhh83", //famous last words
       "https://open.spotify.com/track/5wVkrSq1U9mkmtDWYKGaSd", //wasting time
       "https://open.spotify.com/track/2NlRF63jgKhHY1RNhoXQRX", //genocide
       "https://open.spotify.com/track/2wMqxbWlfIIaVzpYtFG4HY", //stockholm syndrome
       "https://open.spotify.com/track/747T9seMKmzrFQq879ICjU (Explicit)", //depends
       "https://open.spotify.com/track/29GehsoqfNexyR5PzgLn59", //denial revisited
       "https://open.spotify.com/track/1qYcHo4wiesUC2VIRch45G", //head around you
       "https://open.spotify.com/track/7uGFU4aQolKIem4DFB7BME", //walkin on the sun
       "https://open.spotify.com/track/5SvJWjPUiJcXqtXm8BmM5z (Explicit)", //mota
       "https://open.spotify.com/track/5DzeyaeuMS80NIKa43lng0", //change the world
       "https://open.spotify.com/track/1KblaMkte0ZEyk9k6kLW92", //secrets from underground
       "https://open.spotify.com/track/0CUYFHDVPANZRwa2SQsoWs (Explicit)", //americana
       "https://open.spotify.com/track/6gScUFLkoyvwyDP5tOwn0a (Explicit)", //one good reason
       "https://open.spotify.com/track/3McsQb9vsF9snVh2ku101H", //6/8
       "https://open.spotify.com/track/2hQRxgtDliE6eD7NmEfpuD", //bored to death acoustic
       "https://open.spotify.com/track/2c7JbRW7Dl2e9TyNTGth0j", //mh 4.18.2011
       "https://open.spotify.com/track/3rAbnS20ngiWcL6hbn6yby", //after midnight
       "https://open.spotify.com/track/0bziU9XgFkAcPrMhVYBM7n (Explicit)", //lobotomy
       "https://open.spotify.com/track/0CHmnY1V3tmxrIZAkpyxNh", //restless heart syndrome
       "https://open.spotify.com/track/0c0ptxjRaqaxMM8gvSWCG0 (Explicit)", //static age
       "https://open.spotify.com/track/2B17416FS7vL5qljgqfm7L", //future is now
       "https://open.spotify.com/track/5GFixlRubbXY7ixdQSrv0t", //long lost feeling
       "https://open.spotify.com/track/1feH81BVs89SplmcJzuh1F (Explicit)", //slim pickens
       "https://open.spotify.com/track/5ceGigL7CZQ3Ih6W8SIbv8", //blurry
       "https://open.spotify.com/track/6aUZTbyshptdpu7H6Mirjw", //trust in you
       "https://open.spotify.com/track/3BQmmSfxwwGH8VCvja9uWV (Explicit)", //stuff is messed up
       "https://open.spotify.com/track/6tNeHmedp9qo3BsBp5zOPe", //million miles away
       "https://open.spotify.com/track/3T8Ht5f3xUejqEctN3RGb6", //come out swinging
       "https://open.spotify.com/track/2n1jBz26dVBtSbMvJNjGsu", //until it's gone
       "https://open.spotify.com/track/0IsjJJXTH3DzoQ13M3kK2A", //takes me nowhere
       "https://open.spotify.com/track/4Yf5bqU3NK4kNOypcrLYwU", //faint
       "https://open.spotify.com/track/5UWwZ5lm5PKu6eKsHAGxOk", //everlong
       "https://open.spotify.com/track/2LuK1b4aoLoBiZrL0jnfYv", //the last stand
       "https://open.spotify.com/track/1elFRO4jo68oQcKwuto6Va", //you really got me
       "https://open.spotify.com/track/5EHHMikaYxhe7N6h0gBvkn (Explicit)", //welcome
       "https://open.spotify.com/track/5IpIcYj3omb4iOP76bAoRP", //top of the world
       "https://open.spotify.com/track/0Xmbtw7NhNiDnL4BWy5wDh", //innervision
       "https://open.spotify.com/track/5kBkdxl6uRdwtsGTONJa0z", //forgotten
       "https://open.spotify.com/track/1gAaRSN57UYVRI4eWRyAvP", //pushing me away
       "https://open.spotify.com/track/5Z6g6zZwPX6sLw9wU3nJaM", //robot boy
       "https://open.spotify.com/track/5Mhe8G8RHdQWR30lStPvO5 (Explicit)", //contradiction
       "https://open.spotify.com/track/2vfshZvISOKy2Je7wQBWOV", //valentine's day
       "https://open.spotify.com/track/2WpstnkNuH6dUnm3fVLCpU", //sans undertale
       "https://open.spotify.com/track/0fxGA5lxrdYNYoE7yJxTNZ", //my december
       "https://open.spotify.com/track/6kRTzAgZYWItrLrB4B9MJR", //turn so cold
       "https://open.spotify.com/track/1cCYNgQILq8D3uX2sy50Mv", //tears don't fall 2 electric booga - ok im sorry i need to stop making that joke
       "https://open.spotify.com/track/2TAQ9YGehOKWDqDak5DuXc", //plush
       "https://open.spotify.com/track/1HZ3cUZUw5htSFmah1V8Ko", //shine
       "https://open.spotify.com/track/23oxJmDc1V9uLUSmN2LIvx", //ocean avenue
       "https://open.spotify.com/track/27LoqTcfCOKb642w08iKYK", //i'll be waiting
       "https://open.spotify.com/track/2kMjk14RmYyYhhSbipoa9U", //the sharpest lives
       "https://open.spotify.com/track/4CWhc9FaMMfBTt4ANjfbOf", //no more sorrow
       "https://open.spotify.com/track/16AFbRYIdpesOleGTKClHs", //graves
       "https://open.spotify.com/track/5Rcs3fREgibWujLUlUb8KA (Explicit)", //all for nothing
       "https://open.spotify.com/track/1r1fPuhj9H4VdXr7OK6FL5", //castle of glass
       "https://open.spotify.com/track/6PPu2SJkd5XmHU7q4QifbQ", //new divide
       "https://open.spotify.com/track/1d5UuboIPRMD4HaU3yycKC", //somewhere i belong
       "https://open.spotify.com/track/0KlQ2jonltyF4D66hcKJvc", //get it right
       "https://open.spotify.com/track/3Zwu2K0Qa5sT6teCCHPShP", //thanks for the memories
       "https://open.spotify.com/track/2fIpea5Sh5celp8JRI7Z4U", //have you ever
       "https://open.spotify.com/track/02OSSgtcwgI0Ldj4SKR3E5", //thousand days
       "https://open.spotify.com/track/4CJMOCcjt8YFvuh1biw5qZ", //crossroads
       "https://open.spotify.com/track/1fLlRApgzxWweF1JTf8yM5 (Explicit)", //given up
       "https://open.spotify.com/track/11LmqTE2naFULdEP94AUBa", //heart-shaped box
       "https://open.spotify.com/track/0Z9fK9V7Woc9Pb8C2X6iLr", //no hero
       "https://open.spotify.com/track/4K20nocu6gubbWYiuCR23K", //can't repeat
       "https://open.spotify.com/track/5VBVIcMh6CWy8szP3U0Ttp", //defy you
       "https://open.spotify.com/track/2opJO1DL7Hb6TXdHYiyhIi", //drive my car
       "https://open.spotify.com/track/2EoOZnxNgtmZaD8uUmz2nD", //black hole sun
       "https://open.spotify.com/track/5y27WSfGeg1N8HNfXGpZ4U", //premature enlistment
       "https://open.spotify.com/track/5r5pPZLoablansl2iYPohk", //kick when down
       "https://open.spotify.com/track/2uSn3d8BvDNjgVnv7zh0le", //forever and a day
       "https://open.spotify.com/track/19cjuo0y4w2my2GcybUunG (Explicit)", //i choose
       "https://open.spotify.com/track/3gCu2Q54qU6AppsTeVtYhc", //turning into you
       "https://open.spotify.com/track/2wInvm8hrvonqyArYUIpvi", //dammit i changed again
       "https://open.spotify.com/track/6kJiR8bUk9jEzfDU7f8s6v (Explicit)", //no brakes
       "https://open.spotify.com/track/0JNrW4YNq1F7yyMq9y0C7z", //kaleidoscope
       "https://open.spotify.com/track/4MlG1rqWrwTf0pcprevozG (Explicit)", //degenerate
       "https://open.spotify.com/track/2uQ4px5SPONsgcUpulywIQ", //amsterdam
       "https://open.spotify.com/track/59tjfzA98dum1TXhJ4XWoe", //animals
       "https://open.spotify.com/track/6WkSUgo1VdpzgtiXKlFPcY (Explicit)", //dammit
       "https://open.spotify.com/track/3LlAyCYU26dvFZBDUIMb7a", //demons
       "https://open.spotify.com/track/5qtwzv99vOr5UTwnTixn7j", //know your enemy
       "https://open.spotify.com/track/3zZ009FB8sc8JghwVrbLFq", //rebellion
     ]
     const Reply = suggestion[Math.floor(Math.random() * suggestion.length)];
     message.reply(Reply)
         return;
}
  
     /* if (command === "music") {
    message.channel.send("If an embed with a list of songs doesn't show, that means the music script is down!");
     } */

  //etc.

  if (command === "say") {
    const sayMessage = args.join(" ");
    message.delete()
    message.channel.send(sayMessage);
  }

  if (command === "heck") {
    const answers = [
  "you are 0% heck. However, you are 100% frick.",
  "you are 25% heck. The other 75% is internal suffering and 2 liters of raspberry ginger ale.",
  "this is 10% luck, 20% skill, 15% concentrated power of will, 5% pleasure, 50% pain, and 100% reason you're an heck.",
  "you are 50% heck and 50% dead memes.",
  "you are 75% heck. The other 25% is memes. Not dank memes, not dead memes, just memes.",
  "your dank memes shield you from the heck. 15% heck taken.",
  "ever since you called me a stupid bot I've been really sad so I'm taking it personally and telling you that you're 100% heck",
  "you're too edgy to be a heck. 0% heck but 100% edgelord for sure.",
  "Swagolor tries to shield you from the heck. 40% heck taken.",
  "you are 50% heck. The other 50% is internal screeching.",
  "you are 25% heck. The other 75% is hotdogs. If it were chili dogs, you'd probably be 0% heck. Or maybe 100%. I don't know. Come back when you get me a chili dog.",
  "you are 100% heck. The heckiest heck that has ever walked this planet. Absolutely heckful.",
  "you are 60% heck for stealing Doroken's memes. The other 40% is homemade maymays.",
  "you are 50% heck. You're a bit of a hecky. Or, should I say, a bit of a *Becky*? The other 50% is cats, video games, and a little bit of pain.",
  "you're 0% heck but 100% dead memes for sure.",
  "my senses say that you are 80% heck. Actually, I don't have any weird magical senses like that. But you still look like a heck.",
  "your mom's a heck, so by that logic, so are you. 100% heck.",
  "you're a bigger heck than kirbyfantic101. Now THAT'S sayin' alot. 101% heck."
]

const Random = answers[Math.floor(Math.random() * answers.length)];

message.reply(Random)
        .catch(stripIndents`Uh oh, must've been a heck overload! \`${Error}\` happened. You should tell Doroken now.`);

  }
  
    if (command === "song") {
    const answers = [
	  //basshunter
	  "Between the Two of Us/Mellan oss Två - Basshunter (Techno/Eurodance)",
	  "Elinor - Basshunter (Techno/Eurodance)",
	  "I Can Walk on Water - Basshunter (Electronic)",
	  "Far Away - Basshunter (Electronic rock)",
	  "Now You're Gone - Basshunter (Techno/Eurodance)",
    "Camilla - Basshunter (Eurodance/Electronic - there's a Swedish version and English version. They sound the same, but the lyrics are very different.)",
    "Northern Lights - Basshunter (Alternative/Indie?)",
  
      
	  //blink
	  "Natives - blink-182 (some type of punk rock?)*",
	  "`MH 4.18.2011 - blink-182 (some genre of rock, honestly I don't know but it's a good song anyway)", 
	  "Dammit - blink-182 (Punk rock)*",
	  "Degenerate - blink-182 (Punk rock? Kinda?)*", 
	  "`Wasting Time - blink-182 (Mellow punk rock? Is that a thing?)",
	  "`Stockholm Syndrome - blink-182 (Punk/regular rock?)",
	  "`M+M's - blink-182 (Punk/alt. rock?)",
	  "Aliens Exist - blink-182 (Modern/punk rock?)",
	  "Carousel - blink-182 (Punk rock)",
	  "`I Won't be Home for Christmas - blink-182 (Rock? blink-182 is kinda hard to categorize)",
	  "Dumpweed - blink-182 (Punk rock)*",
	  "`Toast and Bananas - blink-182 (Punk/garage rock?)",
	  "`Cacophony - blink-182 (Light rock/punk rock?)*",
	  "Long Lost Feeling - blink-182 (Uhhh..?? Honestly got nothing for genre)",
	  "What's My Age Again? - blink-182 (Punk rock-ish?)",
	  "Feeling This - blink-182 (Punk rock?)*",
	  "The Rock Show - blink-182 (Rock, kinda obvious)*",
	  "Don't Leave Me - blink-182 (Rock/punk rock?)",
	  "Story of a Lonely Guy - blink-182 (Rock?)*",
	  "6/8 - blink-182 (Modern rock?)",
	  "Kaleidoscope - blink-182 (Rock?)",
	  "Give Me One Good Reason - blink-182 (Rock?)*",
	  "All The Small Things - blink-182 (Nanananana...Rock?)",
	  "Bored to Death (Acoustic) - blink-182 (idk, it's just singing and an acoustic guitar in this one)",
	  "Touchdown Boy - blink-182 (Punk rock?)*",
  
  
	  //green
	  "`Deadbeat Holiday - Green Day (Kinda punk rock)",
	  "`Having a Blast - Green Day (Punk rock)*",
	  "`Letterbomb - Green Day (Punk rock-ish)*",
	  "Holiday - Green Day (Rock)*",
	  "`Jesus of Suburbia - Green Day (Rock)*",
	  "Homecoming - Green Day (Rock)*",
	  "`Basket Case - Green Day (Punk rock)",
	  "Burnout - Green Day (Punk rock)",
	  "Welcome to Paradise - Green Day (Punk rock)",
	  "Viva la Gloria? - Green Day (Rock?)",
	  "Viva la Gloria! - Green Day (Rock?)",
	  "21 Guns - Green Day (Rock?)",
	  "`Boulevard of Broken Dreams - Green Day (Rock?)*",
	  "`Give me Novacaine - Green Day (Rock?)",
	  "When I Come Around - Green Day (Punk rock)",
	  "Minority - Green Day (Punk rock)",
	  "Brain Stew - Green Day (Punk rock)*",
	  "Bang Bang - Green Day (Rock)",
	  "`Say Goodbye - Green Day (Rock?)",
	  "21st Century Breakdown - Green Day (Rock)",
	  "East Jesus Nowhere - Green Day (Punk rock/other rock?)",
	  "`Armatage Shanks - Green Day (Punk rock)",
	  "Bouncing Off The Wall - Green Day (Rock?)",
	  "F.O.D. - Green Day (Punk rock)*",
	  "Longview - Green Day (Punk rock)*",
	  "Too Dumb to Die - Green Day (Rock? Not sure what type of rock, but rock.)",
	  "2000 Light Years Away - Green Day (Punk rock-ish)",
	  "St. Jimmy - Green Day (Punk rock?)*",
	  "Christie Road - Green Day (Punk rock-ish)",
	  "Nice Guys Finish Last - Green Day (Punk rock)*",
	  "Nuclear Family - Green Day (Rock? Kinda punk?)",
	  "Before the Lobotomy - Green Day (Rock?)",
	  "The Static Age - Green Day (Rock?)",
	  "Murder City - Green Day (Rock?)",
	  "Green Day - Green Day (well this is just meta)",
	  "Ha Ha You're Dead - Green Day (Punk rock)",
	  "`Waiting - Green Day (Punk rock-ish?)",
	  "Hitchin' A Ride - Green Day (Punk rock?)",
	  "Know Your Enemy - Green Day (Rock?)",

  
      //linkin
	  "`Final Masquerade - Linkin Park (Alt. rock?)",
	  "`A Line in the Sand - Linkin Park (Alt. rock?)",
	  "`Guilty All The Same - Linkin Park (Alt./punk rock?)",
	  "Keys to the Kingdom - Linkin Park (Punk/hard rock..?)*",
	  "Rebellion - Linkin Park (Alt. rock?)",
	  "`What I've Done - Linkin Park (Alt./modern rock?)",
	  "One More Light - Linkin Park (Soft..?)",
	  "New Divide - Linkin Park (Modern rock?)",
	  "Somewhere I Belong - Linkin Park (Grunge rock, is that a thing?)",
	  "Castle of Glass - Linkin Park (Soft/a little electronic?)",
	  "The Catalyst - Linkin Park (Electronic/Grunge/Rock? Really have no idea with this one)",
	  "Faint - Linkin Park (Punk/Grunge rock?)",
	  "` My<Dsmbr - Linkin Park (Soft electronic grunge?)",
	  "Wth>You - Linkin Park (Nu metal/electronic grunge?)",
    "By_Myslf - Linkin Park (Nu metal/electronic grunge?)",
	  "In The End - Linkin Park (Edgy rock)",
	  "Crawling - Linkin Park (CRAAAAWWWWWLING INNNN MY SKIN)",
	  "In Pieces - Linkin Park (not really sure what genre)",
    "My December - Linkin Park (Soft...uhh...electronic rock thing)",
    "`Stick 'N Move - Xero/Early Linkin Park (Grunge rap-rock?)",
    "`Ground Xero - Xero/Early Linkin Park (Soft grunge/rock?)",
    "Reading My Eyes - Xero/Early Linkin Park (Grunge rap-rock?)*",
    "`Forgotten - Linkin Park (Rap/Rock?)",
    "Pushing Me Away - Linkin Park (Rock?)",
  
      
	  //offspring
	  "Coming for You - The Offspring (Punk rock?)*",
	  "Secrets From the Underground - The Offspring (Modern rock?)",
	  "`The Kids Aren't Alright - The Offspring (Rock?)",
	  "Americana - The Offspring (Rock?)*",
	  "`Gone Away - The Offspring (Rock)",
	  "The Future is Now - The Offspring (Modern rock?)",
	  "`Mota - The Offspring (Rock?)*",
	  "No Brakes - The Offspring (Punk rock?)*", 
	  "`Change the World - The Offspring (Some type of rock)",
	  "You're Gonna Go Far, Kid - The Offspring (Modern/alt. rock?)*",
	  "Not the One - The Offspring (Punk rock?)",
	  "`Self Esteem - The Offspring (Rock?)",
	  "`Half-Truism - The Offspring (Modern rock?)",
	  "Forever and a Day - The Offspring (Punk rock?)",
	  "Kick Him When He's Down - The Offspring (Rock?)",
	  "Million Miles Away - The Offspring (Rock, I guess?)",
	  "Dammit, I Changed Again - The Offspring (A type of rock genre)",
	  "Turning Into You - The Offspring (Modern rock?)",
	  "Gotta Get Away - The Offspring (Alt. rock?)",
	  "(Can't Get My) Head Around You - The Offspring (Rock?)",
	  "The Noose - The Offspring (Modern-ish rock? Sweet guitar tune though)",
	  "I Choose - The Offspring (Rock?)*",
	  "Come Out Swinging - The Offspring (Punk rock-ish?)",
    "`I'll Be Waiting - The Offspring (Punk rock)",
    "`Crossroads - The Offspring (Punk rock)",
    "A Thousand Days - The Offspring (Punk rock)",

	  
      //pumpkins
	  "`Mayonaise - The Smashing Pumpkins (Classic/alt. rock?)",
	  "Bullet With Butterfly Wings - The Smashing Pumpkins (Alt. rock?)",
	  "`1979 - The Smashing Pumpkins (Classic rock?)",
	  "`Today - The Smashing Pumpkins (Classic/alt. rock?)",
	  "Cherub Rock - The Smashing Pumpkins (Alt. rock?)",
	  

	  //set off
	  "`Freak Show - Set it Off (Alt./modern rock?)",
	  "`I'd Rather Drown - Set it Off (Alt./modern rock?)*",
	  "I'll Sleep When I'm Dead - Set it Off (Modern rock?)",
	  "Wolf in Sheep's Clothing - Set it Off (Modern rock?)*",
	  "Distance Disturbs Me - Set it Off (Modern rock?)",
  
  
	  //coldplay
	  "Cemeteries of London - Coldplay (Alternative?)",
	  "`Viva la Vida - Coldplay (Alternative?)",
	  "`Violet Hill - Coldplay (Alt. rock?)",
	  "`The Scientist - Coldplay (Alternative?)",
	  "Clocks - Coldplay (Alternative)",
	  "Yellow - Coldplay (Alt. rock)",
	  "Strawberry Swing - Coldplay (Alternative/mellow?)",
	  "Amsterdam - Coldplay (Alternative?)",
	  "White Shadows - Coldplay (Alt. rock?)",
	  "The Hardest Part - Coldplay (Alternative?)",
	  "Low - Coldplay (Alt. rock?)",
	  "Swallowed in the Sea - Coldplay (Alternative?)",
	  "Crests of Waves - Coldplay (Alternative?)",
	  "Moving to Mars - Coldplay (Alternative?)",
	  "Gravity - Coldplay (Alternative?)",
	  "Animals - Coldplay (Alt. rock?)",
	  "Paradise - Coldplay (Alternative?)",
	  "`Square One - Coldplay (Alt. rock?)",
	  "`God Put A Smile Upon Your Face - Coldplay (Alternative/alt. rock)",
	  "A Rush of Blood to the Head - Coldplay (Alternative)",
	  "Careful Where You Stand - Coldplay (Soft alternative?)",
  
  
  	  //mcr
	  "This is How I Disappear - My Chemical Romance (emo rock? I don't know)",
	  "Famous Last Words - My Chemical Romance (Modern rock?)",
	  "`House of Wolves - My Chemical Romance (Alt./modern rock?)*",
	  "Mama - My Chemical Romance (emo rock? Look, I don't know, alright?)",
    "The Sharpest Lives - My Chemical Romance (MCR is kinda just their own genre aren't they)",
  
  
	  //owl
	  "`Vanilla Twilight - Owl City (Electronic?)",
	  "Fireflies - Owl City (Electronic)",
	  "Rainbow Veins - Owl City (Electronic/alternative?)",
	  "Deer in the Headlights - Owl City (Electronic)",
	  "Strawberry Avalanche - Owl City (Soft Electronic?)",
  
  
	  //system down
	  "Aerials - System of a Down (Rock or something...it's not metal, if that helps)",
	  "Innervision - System of a Down (Rock/a hint of metal or something?)",
	  "Toxicity - System of a Down (Rock?)",
  
  
	  //other
	  "Blurry - Puddle of Mudd (Indie/alt. rock?)",
	  "Premature Enlistment - Free Beer (Punk rock)",
	  "Faded Glory - The Shame (Punk rock?)",
	  "Warriors - Imagine Dragons (Modern/alt. rock?)",
	  "Demons - Imagine Dragons (Modern/pop rock?)",
	  "All Star - Smash Mouth (the Shrek song)",
	  "Walkin' on the Sun - Smash Mouth (Alternative?)",
	  "`In Bloom - Nirvana (Rock?)",
	  "`Come As You Are - Nirvana (Alt. rock?)",
	  "Rollin' - Limp Bizkit (i'm kidding please don't)*",
	  "Re-Arranged - Limp Bizkit (even though i'm always making fun of limp bizkit, this song isn't that bad)*",
	  "Killer - The Ready Set (Alternative/modern rock?)",
	  "I Hate Everything About You - Three Days Grace (Rock?)",
	  "Remember the Name - Fort Minor (Rap/kinda rock?)*",
	  "`The Donkey Kong Rap - Donkey Kong 64 (Rap)",
	  "`We Are Number One - Robbie Rotten (too good for a genre)",
	  "Youth Of The Nation - P.O.D. (Rap/Rock?)",
	  "Dirty Little Secret - The All-American Rejects (Pop rock?)",
	  "Californication - Red Hot Chili Peppers (Mellow/classic rock?)",
	  "Turn So Cold - Drowning Pool (Rock?)",
	  "Meme Machine - Pink Guy (Electronic?)*",
	  "`Take it Easy - The Eagles (Classic rock?)",
	  "The Boys of Summer - The Ataris (Rock?)",
	  "Ocean Avenue - Yellowcard (Alt. rock?)",
	  "Mr. Jones - Counting Crows (Mellow/classic rock?)",
	  "Plush - Stone Temple Pilots (Rock?)",
	  "`Black Hole Sun - Soundgarden (Alt./classic rock?)",
	  "Last Resort - Papa Roach (please don't)*",
	  "Bodies - Drowning Pool (Let the bodies hit the FLOOOOOOORRRR!)",
	  "L.A. Baby (Where Dreams Are Made Of) - Jonas Brothers (I liked them a lot when I was like 10 :( )",
	  "`Drive My Car - Elmo (Beep beep-m beep beep yeah!)",
    "Tears Don't Fall (Parts 1 and 2) - Bullet For My Valentine (Hard rock?)*",
    "`Shine - Collective Soul (Classic rock?)",
    "`Right Here - Staind (Classic rock?)",
    "When I'm Gone - 3 Doors Down (Classic/alt. rock?)",
    "Thnks Fr Th Mmrs - Fall Out Boy (That modern emo-rock tumblr people like idk)",
    "Megalovania - Sans Undertale (do do do do do do dodo)",
    "Trippin' On A Hole in a Paper Heart - Stone Temple Pilots (Soft rock?)",
    "Already Gone - The Eagles (Classic rock?)",
    "The Last Stand - Sabaton (DEUS VULT!)",
    "`Everlong - Foo Fighters (Rock)",
    "You Really Got Me - Van Halen (Rock)",
    "Top of the World - Van Halen (Rock)",
    "Welcome - Fort Minor (Rap/Electronic?)*",
    "Interstate Love Song - Stone Temple Pilots (Rock-ish)"
]

const Random = answers[Math.floor(Math.random() * answers.length)];

message.reply(Random);

  }
  
     if (command === "album") {
    const answers = [
	
	"Smash by The Offspring (1994)",
	"`Ixnay on the Hombre by The Offspring (1997)",	
	"Americana by The Offspring (1998)",	
	"Conspiracy of One by The Offspring (2000)",
	"Rise and Fall, Rage and Grace by The Offspring (2008)",
	
	"Parachutes by Coldplay (2000)",
	"`A Rush Of Blood To The Head by Coldplay (2002)",	
	"X & Y by Coldplay (2005)",
	"`Viva La Vida Or Death And All His Friends by Coldplay (2008)",
	
	"Cinematics by Set it Off (2012)",
	"The Black Parade by My Chemical Romance (2006)",
	"Toxicity by System of a Down (2001)",
	"Nevermind by Nirvana (1991)",
	"Ocean Eyes by Owl City (2009)",
	"The Best of Elmo by Sesame Street (1997)",
	
	"Siamese Dream by The Smashing Pumpkins (1993)",
	"Mellon Collie And The Infinite Sadness by The Smashing Pumpkins (1995)",
	
	"LOL <(^^;)> by Basshunter (2006)",
  "Bass Generation by Basshunter (2009)",
	
	"`Xero by Linkin Park (1997)",
  "Reanimation by Linkin Park (2002)",
	"Minutes to Midnight by Linkin Park (2007)",
	"`The Hunting Party by Linkin Park (2014)",	

	"`Cheshire Cat by blink-182 (1995)",
	"Enema of the State by blink-182 (1999)",
	"`Take Off Your Pants and Jacket by blink-182 (2001)",
	"blink-182 by blink-182 (2003)",
  "Neighborhoods by blink-182 (2011)",
	"California (Deluxe Edition) by blink-182 (2016)",
	
	"`Kerplunk! by Green Day (1991)",
	"Dookie by Green Day (1994)",
	"Nimrod by Green Day (1997)",
	"Warning by Green Day (2000)",
	"`American Idiot by Green Day (2004)",
	"21st Century Breakdown by Green Day (2009)",
	"`Revolution Radio by Green Day (2016)"
]

const Random = answers[Math.floor(Math.random() * answers.length)];

message.reply(Random);

  }


	
	if (command === "artist") {
		message.reply("**List of Artists**\n\Usage: `artist-name`, Ex. `artist-elmo`\n\  blink-182\n\  Basshunter\n\  Coldplay\n\  Green Day\n\  Limp Bizkit\n\  Linkin Park\n\  My Chemical Romance\n\  The Offspring\n\  Owl City\n\  Set it Off\n\`There's also a few extra artists that aren't listed here, aka easter eggs. Have fun with that.`");
	}
	

  if (command === "chat") {
    
    if (message.content.includes("Hello") || message.content.includes("hello") || message.content.includes("Hi") || message.content.includes("Hey") || message.content.includes("hi") || message.content.includes("hey") || message.content.includes("Ollo") || message.content.includes("ollo")) {
    const greeting = [
      "hey hey hey hello hello hello!",
      "yo, what's up?",
      "hey there.",
      "new phone who dis",
      "whaddya want?! I'm tryna binge watch My Little Pony.",
      "I don't like people go awaaaaaayyyyyy"
    ]
    const Reply = greeting[Math.floor(Math.random() * greeting.length)];
      message.reply(Reply)
            return;
  }
    
    if (message.content.includes("Shrek") || message.content.includes("shrek")) {
    const answers = [
       "Shrek? Shrek is great.",
       "Shrek is love, Shrek is life.",
       "I've heard there's gonna be a Shrek 5. What a time to be alive!",
       "Shrek x Megamind is OTP, according to Doroken. I personally think Shrek and Fiona are fine together. But then there's also Cookie the Ogre...mmm...",
       "Shrek is still blocking the Suez canal we have to stop him."
     ]
     const Reply = answers[Math.floor(Math.random() * answers.length)];
       message.reply(Reply)
             return;
    }
    
    if (message.content.includes("Depress") || message.content.includes("depress")) {
     const answers = [
       "may I interest you in some quality canned depression?",
       "buy my canned depression now - only a monthly subscription of $4.20!"
     ]
     const Reply = answers[Math.floor(Math.random() * answers.length)];
     message.reply(Reply)
         return;
}
    
    if (message.content.includes("Old") || message.content.includes("old")) {
     const answers = [
       "I'm actually 7 1/2 in human years.",
       "I AM IMMORTAL!"
     ]
     const Reply = answers[Math.floor(Math.random() * answers.length)];
     message.reply(Reply)
         return;
}   
    
    if (message.content.includes("Gay") || message.content.includes("gay")) {
     const answers = [
       "W-What?! Of course I'm not! My mom isn't either, fyi!!",
       "No you!",
       "N-no...your mom is!",
       "I AM NOT THE HOMOSEX!!"
     ]
     const Reply = answers[Math.floor(Math.random() * answers.length)];
     message.reply(Reply)
         return;
}
    
    if (message.content.includes("Furry") || message.content.includes("furry")) {
     const answers = [
       "no, I'm not a furry. Go away Night.",
       "can't I just be seen as a normal, four-legged cat?",
       "sure, furries make some cute art, but they also make a lot of um...art that isn't good for the kittens.",
       "as in...my fur is furry and fluffy? Uh ok. My brother Acorn is fluffier than me though - looks like a dust mop! Ha. He's an idiot. Well...I guess he is the \"smart\" one, so...well whatever! He still sucks anyway!"
     ]
     const Reply = answers[Math.floor(Math.random() * answers.length)];
     message.reply(Reply)
         return;
}
    
    if (message.content.includes("Server") || message.content.includes("server")) {
     const answers = [
       "no I don't wanna join your dummy dum-dum server >:(",
       "your server? Ask Doroken I guess."
     ]
     const Reply = answers[Math.floor(Math.random() * answers.length)];
     message.reply(Reply)
         return;
}
    
    if (message.content.includes("Please") || message.content.includes("please")) {
     const answers = [
       "no.",
       "only if you get me stuffed crust.",
       "what? Sorry, I can't hear you over the sound of my S U P E R  C O M P U T E R",
       "NO WAY, LADDIE!"
     ]
     const Reply = answers[Math.floor(Math.random() * answers.length)];
     message.reply(Reply)
         return;
}
    
        if (message.content.includes("limp bizkit") || message.content.includes("Limp Bizkit")) {
     const answers = [
       "YOU WANT TO MESS WITH LIMP BIZKIT? YOU CAN'T MESS WITH LIMP BIZKIT!",
       "their name is similar to Linkin Park so you can find them in the bargain bin next to each other.",
       "keep on rollin', baby."
     ]
     const Reply = answers[Math.floor(Math.random() * answers.length)];
     message.reply(Reply)
         return;
}
    
    if (message.content.includes("Nintendo") || message.content.includes("nintendo")) {
     const answers = [
       "Ninten*no*.",
       "I don't like Nintendo. You know why? Because they didn't add Waluigi to Smash, that's why.",
       "Waluigi for Smash or riot!",
       "Nintendo 64 is the best. I was even named after a popular game for that console! Sure, he may be a drunken squirrel, but my personality isn't really much better."
     ]
     const Reply = answers[Math.floor(Math.random() * answers.length)];
     message.reply(Reply)
         return;
}
    
    if (message.content.includes("Waluigi") || message.content.includes("waluigi")) {
     const answers = [
       "Waluigi for Smash or riot!",
       "Waluigi > all other Nintendo characters. Except King Dedede. Nobody can top him. I mean that both figuratively and literally.",
       "Waluigi is the ultimate example of the individual shaped by the signifier. Waluigi is a man seen only in mirror images; lost in a hall of mirrors he is a reflection of a reflection of a reflection. You start with Mario – the wholesome all Italian plumbing superman, you reflect him to create Luigi – the same thing but slightly less. You invert Mario to create Wario – Mario turned septic and libertarian – then you reflect the inversion in the reflection: you create a being who can only exist in reference to others. Waluigi is the true nowhere man, without the other characters he reflects, inverts and parodies he has no reason to exist. Waluigi’s identity only comes from what and who he isn’t – without a wider frame of reference he is nothing. He is not his own man. In a world where our identities are shaped by our warped relationships to brands and commerce we are all Waluigi."
     ]
     const Reply = answers[Math.floor(Math.random() * answers.length)];
     message.reply(Reply)
         return;
}

    if (message.content.includes("Paul") || message.content.includes("Sprintern")) {
     const answers = [
       "Caaaarl!",
       "hi, Sprintern!",
       "I used to work for Verizon, but now I'm a spokesperson for Sprint.",
       "shhh, do you hear that? That's the sound of forgiveness. That is what forgiveness sounds like - screaming, and then silence."
     ]
     const Reply = answers[Math.floor(Math.random() * answers.length)];
     message.reply(Reply)
         return;
}
    

    //? implies a question was asked
    if (message.content.includes("?")) {
    const answers = [
      "no u",
      "y tho",
      "I'd rather listen to mexican death metal.",
      "I don't even know what to say.",
      "well, yeah. How else would you get the cow off the roof? You need a crane to get it out.",
      "no.",
      "what kind of question is that?",
      "okay, but have you ever eaten corn while wearing cornrows and listening to Korn?",
      "I don't have any friends.",
      "no, I don't. But would you be interested in some canned depression?",
      "I don't know man but King Dedede is pretty hot.",
      "nope.",
      "decisions, decisions, all of them wrong.",
      "I wouldn't count on it.",
      "how about no you six piece chicken mcnobody",
      "or I could just...y'know, not.",
      "ha ha ha. While you've spent your time playing video games, I've been studying the katana.",
      "I mean sure I guess.",
      "nah sorry I can't today - I'm gonna go watch Spiderman and Elsa's wedding.",
      "I dunno what do you wanna do today?",
      "what about you?",
      "you first.",
      "what's yours?"
    ]
    const Answer = answers[Math.floor(Math.random() * answers.length)];
    message.reply(Answer)
            return;
  }
 
    //fallback for if no trigger words are hit
    const random = [
      "no u",
      "can u don't",
      "Dairy Queen is better than Subway anyway.",
      "you're an heck",
      "if something is too difficult in life then don't do it.",
      "your head trip's boring me.",
      "don't you have something better to do than talk to a dumb bot like me?",
      "that hurt my feelings. Now we're both in the wrong.",
      "thanks I hate it.",
      "I feel the same way, doctor.",
      "go snort a waffle",
      "you're like a pizza cutter - all edge and no points.",
      "Cory in the House is the best anime and if you say anything different I will *body slam you into oblivion*.",
      "why am I getting the vibe of a bad Sonic OC from you.",
      "I smell onions. Do you?",
      "holy crap was that a fricking ***JOJO REFERENCE***?",
      "your ego is bigger than Megamind's forehead.",
      "yellow flowers taste the best. Don't eat the red ones though.",
      "I'm not sure what's real and isn't real anymore. Why, just yesterday, I saw a giant chicken nugget in the sky! Don't call me crazy, but I *may* have seen Ronald McDonald driving it...",
      "I feel like there's something between us. Do you? I do. Do you know what I would put between us? A wall. A wall so *thicc* that it would make Donald Trump blush.",
      "you dare talk to me like that?! I am the prince! I CAN HAVE YOU EXECUTED!!",
      "Shrek Smash n' Crash Racing is a god-tier game. Right up there with Garfield Kart and Kirby Air Ride.",
      "she broke my heart so I broke her spine by ***body slamming her into oblivion***.",
      "I'm dead on the surface but I'm screaming underneath.",
      "I would wish upon a star. But too bad all the stars are actually dead, just like my hopes and dreams.",
      "not even Bill Gates can save you now.",
      "all around me are familiar faces.",
      "when I was a young boy...my father...*took me to see a marching band*.",
      "somebody once told me the world was made of macoroni.",
      "REEEEEEEE",
      "my favorite book is War and Peace. just kidding, it's Garfield Large and in Charge.",
      "cease it.",
      "I said CEASE IT.",
      "I hate you, you hate me, let's get together and kill Barney~",
      "\*I put on my robe and wizard hat*",
      "is this loss",
      "wow buddy, are you like...okay? You need a steamed ham or something?",
      "Can you BELIEVE that crap about Waluigi not getting in the new Smash?!",
      "I sense a very hecky heck nearby...is it you?",
      "your scream's a whisper",
      "pizza time. Pizza pizza pizza.",
      "I've got 96 problems. Please help.",
      "chili dogs?",
      "Understandable. I'm not gonna tell you to have a great day though cause that just ain't the type of cat I am.",
      "I walk alone.",
      "cut my life into pizza. Mmmm pizza. I hope Obama gets it for me.",
      "don't forget, you're here forever."
      ]

    const Random = random[Math.floor(Math.random() * random.length)];
    message.reply(Random)
  }


  if (command === "tableflip") {
    message.channel.send("(╯°□°）╯︵ ┻━┻")
  }
        if (command === "rage") {
          message.channel.send("(╯°□°）╯︵ ┻━┻")
            }
            if (command === "flip") {
              message.channel.send("(╯°□°）╯︵ ┻━┻")
                }

  if (command === "slot") {
    const slots = ['😺', '😿', '😾', '😻', '🙀'];
		const one = slots[Math.floor(Math.random() * slots.length)];
		const two = slots[Math.floor(Math.random() * slots.length)];
		const three = slots[Math.floor(Math.random() * slots.length)];

		if (one === two && one === three) {
      message.channel.send(stripIndents`|${one}|${two}|${three}|\n\Congratulations! You won a sense of pride and accomplishment.`)
      return;
		}

    else {
      message.channel.send(stripIndents`|${one}|${two}|${three}|\n\Haha you lose.`)
    return;
    }
  }
  
  if (command === "restart" || command === "reset") {
    if (message.author.id !== "229003197908385794" && message.author.id !== "448543768010948608") {
            message.reply("you do not have permission to do that!")
              .then(console.log(stripIndents` Attemped restart by ${message.author.username}`))
               return;
          }
            else {
          if (message.member.voiceChannel) {
          message.member.voiceChannel.leave()
          }
          (message => client.destroy())
            message.reply("Restarting...")
          .then(() => client.login(process.env.SECRET))
          .then(console.log(stripIndents`Bot restarted by ${message.author.username}`))
          .then(message.reply("Successfully restarted!"));
    }
 }
  
    if (command === "status") {
    if (message.author.id !== "229003197908385794" && message.author.id !== "448543768010948608") {
            message.reply("you do not have permission to do that!")
              .then(console.log(stripIndents`Attemped status change by ${message.author.username}`))
               return;
          }
            else {
      const status = statuses[Math.floor(Math.random() * statuses.length)];
		client.user.setActivity(status.text, { type: status.type });
          (message => client.destroy())
          message.reply("Changing status...")
          .then(() => client.login(process.env.SECRET))
          .then(console.log(stripIndents`Status changed by ${message.author.username}`))
          .then(message.reply("Status changed!"));
      }
    }
  
  
  //Dice
  
  if (command === "d20") {
    const answers = [
"1 (you're fucked)",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"11",
"12",
"13",
"14",
"15",
"16",
"17",
"18",
"19",
"20 (OH SHIT IT'S A CRIT!)",
  
]

const Random = answers[Math.floor(Math.random() * answers.length)];

message.reply(Random)
        .catch(stripIndents`Uh oh, must've been a heck overload! \`${Error}\` happened. You should tell Doroken now.`);

  }
  
  
  if (command === "d12") {
    const answers = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"11",
"12"
  
]

const Random = answers[Math.floor(Math.random() * answers.length)];

message.reply(Random)
        .catch(stripIndents`Uh oh, must've been a heck overload! \`${Error}\` happened. You should tell Doroken now.`);

  }
  
  
  if (command === "d10") {
    const answers = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10"
  
]

const Random = answers[Math.floor(Math.random() * answers.length)];

message.reply(Random)
        .catch(stripIndents`Uh oh, must've been a heck overload! \`${Error}\` happened. You should tell Doroken now.`);

  }
  
  
  if (command === "d8") {
    const answers = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8"
  
]

const Random = answers[Math.floor(Math.random() * answers.length)];

message.reply(Random)
        .catch(stripIndents`Uh oh, must've been a heck overload! \`${Error}\` happened. You should tell Doroken now.`);

  }
  
  
  if (command === "d6") {
    const answers = [
"1",
"2",
"3",
"4",
"5",
"6"
  
]

const Random = answers[Math.floor(Math.random() * answers.length)];

message.reply(Random)
        .catch(stripIndents`Uh oh, must've been a heck overload! \`${Error}\` happened. You should tell Doroken now.`);

  }
  

  if (command === "d4") {
    const answers = [
"1",
"2",
"3",
"4"
  
]

const Random = answers[Math.floor(Math.random() * answers.length)];

message.reply(Random)
        .catch(stripIndents`Uh oh, must've been a heck overload! \`${Error}\` happened. You should tell Doroken now.`);

  }
  
  
  if (command === "d2") {
    const answers = [
"1",
"2"
  
]

const Random = answers[Math.floor(Math.random() * answers.length)];

message.reply(Random)
        .catch(stripIndents`Uh oh, must've been a heck overload! \`${Error}\` happened. You should tell Doroken now.`);

  }
  //Alias returns
    if (command === "alt") {
    message.reply("Usage: `alt-[command name]`\n\Example: `alt-ping`")
}
      if (command === "alt-") {
    message.reply("Usage: `alt-[command name]`\n\Example: `alt-ping`")
    }
    if (command === "alt-" + "info") {
    message.reply("`info` has no aliases.")
}

  if (command === "alt-" + "ping") {
    message.reply("`ping`, `pong`")
}
        if (command === "alt-" + "pong") {
          message.reply("`ping`, `pong`")
          }

  if (command === "alt-" + "commands") {
    message.reply("`commands`, `help`")
}
        if (command === "alt-" + "help") {
          message.reply("`commands`, `help`")
          }

  if (command === "alt-" + "servers") {
    message.reply("`servers` has no aliases.")
}

  if (command === "alt-" + "serverlist") {
          message.reply("`serverlist` has no aliases.")
          }


  if (command === "alt-" + "invite") {
    message.reply("`invite` has no aliases.")
}

  if (command === "alt-" + "whoareyou") {
    message.reply("`whoareyou` has no aliases.")
  }

  if (command === "alt-" + "home") {
    message.reply("`home` has no aliases.")
  }

  if (command === "alt-" + "updates") {
    message.reply("`updates` has no aliases.")
  }

  if (command === "alt-" + "alt") {
    message.reply("`alt-` has no aliases. Very funny.")
  }

  if (command === "alt-" + "alt-") {
    message.reply("`alt-` has no aliases. Very funny.")
  }

  if (command === "alt-" + "avatar") {
    message.reply("`avatar`, `profpic`, `propic`, `pfp`")
  }
         if (command === "alt-" + "profpic") {
            message.reply("`avatar`, `profpic`, `propic`, `pfp`")
            }
           if (command === "alt-" + "propic") {
            message.reply("`avatar`, `profpic`, `propic`, `pfp`")
            }
           if (command === "alt-" + "pfp") {
            message.reply("`avatar`, `profpic`, `propic`, `pfp`")
            }

  if (command === "alt-" + "woof") {
    message.reply("`woof` has no aliases.")
  }

  if (command === "alt-" + "papabless") {
    message.reply("`papabless`, `papa`")
  }
          if (command === "alt-" + "papa") {
            message.reply("`papabless`, `papa`")
            }

  if (command === "alt-" + "shrekcena") {
    message.reply("`shrekcena` has no aliases.")
  }

  if (command === "alt-" + "farquad") {
    message.reply("`farquad`, `farquaad`")
  }
          if (command === "alt-" + "farquaad") {
            message.reply("`farquad`, `farquaad`")
            }

  if (command === "alt-" + "necessasaryry") {
    message.reply("`necessasaryry` has no aliases.")
  }

  if (command === "alt-" + "thanksforyourthoughts") {
    message.reply("`thanksforyourthoughts` has no aliases.")
  }

  if (command === "alt-" + "brian") {
    message.reply("`brian` has no aliases.")
  }

  if (command === "alt-" + "losthat") {
    message.reply("`losthat` has no aliases.")
  }

  if (command === "alt-" + "elmo") {
    message.reply("`elmo` has no aliases.")
  }

  if (command === "alt-" + "doroken2k17") {
    message.reply("`doroken2k17` has no aliases.")
  }

  if (command === "alt-" + "garfelfethecat") {
    message.reply("`garfelfethecat`, `garfelfe`")
  }
        if (command === "alt-" + "garfelfe") {
          message.reply("`garfelfethecat`, `garfelfe`")
          }

  if (command === "alt-" + "garfelfesays") {
    message.reply("`garfelfesays`has no aliases.")
  }

  if (command === "alt-" + "pogday") {
    message.reply("`pogday` has no aliases.")
  }

  if (command === "alt-" + "dedede") {
    message.reply("`dedede`, `ddd`")
  }
        if (command === "alt-" + "ddd") {
          message.reply("`dedede`, `ddd`")
          }

  if (command === "alt-" + "connect") {
    message.reply("`connect`, `join`")
  }
        if (command === "alt-" + "join") {
          message.reply("`connect`, `join`")
          }

  if (command === "alt-" + "disconnect" || command === "alt-" + "leave" || command === "alt-" + "stop" || command === "alt-" + "goaway" || command === "alt-" + "shutup" || command === "alt-" + "begone" || command === "alt-" + "fuckoff" || command === "alt-" + "f-off" || command === "alt-" + "shutupjesusicantstanditevenironically") {
    message.reply("`disconnect`, `leave`, `stop`, `goaway`, `shutup`, `begone`, `fuckoff`, `f-off`, `shutupjesusicantstanditevenironically`")
  }

  if (command === "alt-" + "memestealing") {
    message.reply("`memestealing has no aliases.`")
  }

  if (command === "alt-" + "gamergirl") {
    message.reply("`gamergirl`, `cute`")
  }
        if (command === "alt-" + "cute") {
         message.reply("`gamergirl`, `cute`")
         }

  if (command === "alt-" + "minecraft") {
    message.reply("`minecraft` has no aliases.")
  }

  if (command === "alt-" + "snortingwaffles") {
    message.reply("`snortingwaffles`, `waffles`")
  }
          if (command === "alt-" + "waffles") {
            message.reply("`snortingwaffles`, `waffles`")
            }

  if (command === "alt-" + "lobsterchronicles") {
    message.reply("`lobsterchronicles` has no aliases.")
  }

  if (command === "alt-" + "steamedhams") {
    message.reply("`steamedhams` has no aliases.")
  }

  if (command === "alt-" + "hotdogs") {
    message.reply("`hotdogs` has no aliases.")
  }

  if (command === "alt-" + "kirbynightcore") {
    message.reply("`kirbynightcore`, `goodmusic`")
  }
          if (command === "alt-" + "goodmusic") {
            message.reply("`kirbynightcore`, `goodmusic`")
            }

  if (command === "alt-" + "oceanman") {
    message.reply("`oceanman` has no aliases.")
  }

  if (command === "alt-" + "cottoneyejoe") {
    message.reply("`cottoneyejoe` has no aliases.")
  }

  if (command === "alt-" + "edge") {
    message.reply("`edge`, `edgy`")
  }
          if (command === "alt-" + "edgy") {
            message.reply("`edge`, `edgy`")
            }


  if (command === "alt-" + "wut") {
    message.reply("`wut`, `conker`")
  }
          if (command === "alt-" + "conker") {
            message.reply("`wut`, `conker`")
            }

  if (command === "alt-" + "thisisfine") {
    message.reply("`thisisfine` has no aliases.")
  }

  if (command === "alt-" + "pog") {
    message.reply("`pog` has no aliases.")
  }

  if (command === "alt-" + "youtried") {
    message.reply("`youtried` has no aliases.")
  }

  if (command === "alt-" + "creepysmiley") {
    message.reply("`creepysmiley, `psychosmiley`, `deputysmiley`, `chatango`")
  }
          if (command === "alt-" + "psychosmiley") {
            message.reply("`creepysmiley, `psychosmiley`, `deputysmiley`, `chatango`")
            }
              if (command === "alt-" + "deputysmiley") {
                 message.reply("`creepysmiley, `psychosmiley`, `deputysmiley`, `chatango`")
                 }
                  if (command === "alt-" + "chatango") {
                    message.reply("`creepysmiley, `psychosmiley`, `deputysmiley`, `chatango`")
                    }

  if (command === "alt-" + "givefish") {
    message.reply("`givefish` has no aliases.")
  }

  if (command === "alt-" + "pat") {
      message.reply("`pat` has no aliases.")
  }

  if (command === "alt-" + "hello") {
      message.reply("`hello` has no aliases.")
  }

  if (command === "alt-" + "sharedonut") {
      message.reply("`sharedonut` has no aliases.")
  }

  if (command === "alt-" + "say") {
      message.reply("`say` has no aliases.")
  }

  if (command === "alt-" + "chat") {
      message.reply("`chat` has no aliases.")
  }


  if (command === "alt-" + "heck") {
      message.reply("`heck` has no aliases.")
  }

  if (command === "alt-" + "tableflip") {
      message.reply("`tableflip`, `rage`, `flip`")
  }
          if (command === "alt-" + "rage") {
            message.reply("`tableflip`, `rage`, `flip`")
            }
              if (command === "alt-" + "flip") {
               message.reply("`tableflip`, `rage`, `flip`")
              }

  if (command === "alt-" + "slot") {
      message.reply("`slot` has no aliases.");
  }
  
  if (command === "alt-" + "restart") {
      message.reply("`restart`, `reset`");
  }
      if (command === "alt-" + "reset") {
            message.reply("`restart`, `reset`");
  }
  
  if (command === "alt-" + "song") {
      message.reply("`song` has no aliases.");
  }
  
  if (command === "alt-" + "album") {
      message.reply("`album` has no aliases.");
  }
  
  if (command === "alt-" + "badmeme") {
      message.reply("`badmeme` has no aliases.");
  }
  
  if (command === "alt-" + "status") {
      message.reply("`status` has no aliases.");
  }
  
  if (command === "alt-" + "music") {
	    message.reply("`music` has no aliases.");
  }
  
  if (command === "alt-" + "music-yt") {
	    message.reply("`music-yt` has no aliases.");
  }
  
  if (command === "alt-" + "music-spot") {
	    message.reply("`music-spot` has no aliases.");
  }
  
  if (command === "alt-" + "playlist") {
	    message.reply("`playlist` has no aliases.");
  }
  
  if (command === "alt-" + "allstar" || command === "alt-" + "rickroll" || command === "alt-" + "bobd" || command === "alt-" + "basket" || command === "alt-" + "21guns" || command === "alt-" + "suburbia" || command === "alt-" + "niceguys" || command === "alt-" + "waiting" || command === "alt-" + "vivavida" || command === "alt-" + "clocks" || command === "alt-" + "paradise" || command === "alt-" + "strawberry" || command === "alt-" + "cbrown" || command === "alt-" + "violethill" || command === "alt-" + "scientist" || command === "alt-" + "yellow" || command === "alt-" + "haveyouever" || command === "alt-" + "kickdown" || command === "alt-" + "amazed" || command === "alt-" + "noose" || command === "alt-" + "headaround" || command === "alt-" + "americana" || command === "alt-" + "comeplay" || command === "alt-" + "changeworld" || command === "alt-" + "goneaway" || command === "alt-" + "choose" || command === "alt-" + "mota" || command === "alt-" + "meaninglife" || command === "alt-" + "selfesteem" || command === "alt-" + "kidsalright" || command === "alt-" + "mms" || command === "alt-" + "stockholm" || command === "alt-" + "rockshow" || command === "alt-" + "christmas" || command === "alt-" + "age" || command === "alt-" + "wastingtime" || command === "alt-" + "aliens" || command === "alt-" + "leaveme" || command === "alt-" + "smallthings" || command === "alt-" + "mh418") {
	    message.reply("None of the songs have an alias.");

      
 if (command === "alt-" + "midi" || command === "alt-" + "midis") {
	    message.reply("`midi`, `midis`");
  }

  }
      });
   client.login(process.env.SECRET);
//no bot token for u