# Discord Bot Repo
Repo archive for my Discord bots I've made. No longer actively maintained and occasionally run from my computer when I remember to start them up. Rather simple and dumb personal use bots for laughs among small servers and friend groups. Decided to throw them up here for anyone who was curious about the (admittedly very messy) source code.

_________________

## Conker

> My main bot. Started as a hobby and passion project in 2018 and continued into the early 2020s.

3 scripts (main, extras, yt-mus)

`main` handles all the commands and built-in music. 3008 lines, d.js v11.5.1

`extras` handles chat replies. 552 lines, d.js v11.5.1

`yt-mus` handles YouTube audio playing in voice channels. 162 lines, d.js v12.5.3

**Dependencies**

    common-tags (used for stripIndents)
    
    express (used for periodic pinging to make sure the bot doesn't go down)
    
    ffmpeg, ffmpeg-static, fluent-ffmpeg (ffmpeg library for music playing; compatible with repl.it)
    
    opusscript (opus engine for ffmpeg)
    
    ytdl-core (YouTube)
_________________

## Rad Dad

> The infamous "Hi hungry, I'm dad!" type bot. But this one's a cool dad, because he smokes weed and has a Goku skateboard. You could even call him a Radical Dadical.


## Gex

> It's tail time! Has a random chance of saying a Gex-style quote, following the format of "This is [adjective] like [activity] with [celebrity]."

## Uncle Grandpa

> Happily replies to "good morning", and angrily replies to "good night". Also will rap about the Cuban Missile Crisis if anyone mentions Cuba or missiles.


## Conker's Mom

> Created solely to yell at one particular friend who kicked Conker from our server as a joke.

## Waluigi

> Created to wreck havoc whenever anyone mentioned Smash Brothers, back during the "Waluigi for Smash" craze upon Smash Ultimate's release. And Smash Mouth, apparently.

**Dependencies**

    "common-tags": "^1.8.2",
    "discord.js": "^11.6.4",
    "express": "^5.1.0",
    "ffmpeg": "^0.0.4",
    "node-fetch": "^3.3.2"
_________________


