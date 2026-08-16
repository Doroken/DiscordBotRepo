const express = require('express');
const app = express();
const port = 6000;
  


app.get('/', (req, res) => res.send('Gex is running!'));

app.listen(port, () => console.log(`Gex listening at http://localhost:${port}`));

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "'";
client.on("ready", () => {
  client.user.setActivity("It's tail time!", { 
      type: "STREAMING", 
      url: "https://www.twitch.tv/gexenterthegecko" 
  });
//deprecating soon, use setActivity instead of setGame
  console.log("Logged in as Gex.");
  
});

client.on("message", (message) => {
if (message.author.bot) return;

if (message.content.startsWith("pingall") || message.content.startsWith("gexping")) {
  let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);

    const uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  const ping = client.ping;

    message.reply(`Pong!\n\ **GexBot** - Repl.it.\n\Took ${ping}ms to respond.\n\Running for ${uptime}`);
    message.react("✔");
 }
  
  const Chance =
  //current chance: 1/200
        [
          "1","2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "99", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", "190", "199", "192", "193", "194", "195", "196", "197", "198", "199", "200"
        ]
  const replyChance = Chance[Math.floor(Math.random() * Chance.length)];

  //debugging - prints selected number to channel
  //message.channel.send(replyChance);
  console.log(replyChance);

  if (replyChance == 3) {
const person = [
      "Adam Sandler",
      "Andrew Garfield",
      "Ariana Grande",
      "Arnold Schwarzenegger",
      "Barack Obama",
      "Ben Shapiro",
      "Bernie Sanders",
      "Bill Clinton",
      "Bill Gates",
      "Bill Nye",
      "Bob Ross",
      "Boy George",
      "Britney Spears",
      "Bruno Mars",
      "Cee-Lo Green",
      "Chris Pratt",
      "Daisy Ridley",
      "DaBaby",
      "Danny DeVito",
      "David Hasselhoff",
      "Debbie Ryan",
      "Demi Lovato",
      "DJ Khaled",
      "Dolly Parton",
      "Don Cheadle",
      "Donald Mustard",
      "Donald Trump",
      "Dr. Phil",
      "Drake",
      "Dwayne Johnson",
      "Eddie Murphy",
      "Ellen DeGeneres",
      "Elon Musk",
      "Eminem",
      "Emma Watson",
      "Freddy Fazbear",
      "Gabe Newell",
      "George Clooney",
      "George Lucas",
      "Gordon Ramsay",
      "Grace Jones",
      "Guy Fieri",
      "Hideo Kojima",
      "Hillary Clinton",
      "Homer Simpson",
      "Howie Mandel",
      "Hugh Jackman",
      "Ice Spice",
      "Jack Black",
      "Jackie Chan",
      "Jake Paul",
      "James Charles",
      "James Earl Jones",
      "Jay Leno",
      "Jeff Bezos",
      "Jerry Garcia",
      "Jerry Seinfeld",
      "Jesse Pinkman",
      "Jim Carrey",
      "Jim Davis",
      "JoJo Siwa",
      "John Cena",
      "Justin Bieber",
      "Kanye West",
      "Katy Perry",
      "Keanu Reeves",
      "Kevin Hart",
      "Kim Kardashian",
      "Lady Gaga",
      "LeBron James",
      "Lil Nas X",
      "Lin-Manuel Miranda",
      "Logan Paul",
      "Mariah Carrey",
      "Mark Hamill",
      "Mark Zuckerberg",
      "Markiplier",
      "Martha Stewart",
      "Masahiro Sakurai",
      "Matthew Mercer",
      "Megan Fox",
      "Mel Blanc",
      "Michael Jackson",
      "Michael Jordan",
      "Michelle Obama",
      "Mike Tyson",
      "Miley Cyrus",
      "Morgan Freeman",
      "Mr. Bean",
      "Mr. Beast",
      "Nicolas Cage",
      "Oprah Winfrey",
      "Paris Hilton",
      "P Diddy",
      "PewDiePie",
      "Peter Griffin",
      "Phil Swift",
      "Pokimane",
      "Post Malone",
      "Ray William Johnson",
      "Reggie Fils-Aimé",
      "Rick Astley",
      "Rip Taylor",
      "Robert Downey Jr.",
      "Rush Limbaugh",
      "Ryan Reynolds",
      "Samuel L. Jackson",
      "Saul Goodman",
      "Scarlett Johansson",
      "Scott Wozniak",
      "Selena Gomez",
      "Shaquille O’Neal",
      "Simon Cowell",
      "Snoop Dogg",
      "Steve Austin",
      "Steve Harvey",
      "Steve Irwin",
      "Steve Jobs",
      "Steven Spielberg",
      "Taylor Swift",
      "Ted Cruz",
      "Terry Crews",
      "The Jonas Brothers",
      "the Smash Mouth guy",
      "Tobey Maguire",
      "Todd Howard",
      "Tom Brady",
      "Tom Cruise",
      "Tom Fulp",
      "Tony Hawk",
      "Travis Scott",
      "Tyler Blevins",
      "Tyler Perry",
      "Vin Diesel",
      "Walter White",
      "Weird Al Yankovic",
      "William Shatner",
      "Will Ferrell",
      "Will Smith"

    ]
  const Person2 = person[Math.floor(Math.random() * person.length)];

    const special = [
      `Reminds me of Halloween at ${Person2}'s.`,
      `Note to self: don't drink the tap water at ${Person2}'s.`,
      `Captain, they are a bizarre alien race that find ${Person2} funny.`,
      `How did I get in ${Person2}’s head?`,
      `I feel like I’m trapped in ${Person2}’s pants!`,
      `${Person2}, is that you?`,
      `I’m lost in ${Person2}’s colon.`,
      `This place is bigger than ${Person2}’s bar tab.`,
      `I haven't seen blasts like this since taco night at ${Person2}’s house.`,
      `Don’t take career advice from ${Person2}.`,
      `Ah, to see the world as ${Person2} does.`,
      `I knew I shouldn’t have hired ${Person2} as my landscaper.`,
      `FedEx for ${Person2}!`,
      `Man, ${Person2} has let his place go.`,
      `All this technology and ${Person2} still can’t get a good hairpiece.`,
      `Scotty, beam me backstage at the ${Person2} concert.`

    ]
     const Special = special[Math.floor(Math.random() * special.length)]; 


    message.channel.send(`${Special}`);
    
    return;
  
  }

  
  
  if (replyChance == 2) {
    message.channel.send("It's tail time!");
    return;
  }

  if (replyChance == 1 || message.content.startsWith("It's tail time!") || message.content.startsWith("it's tail time!") || message.content.startsWith("It’s tail time!") || message.content.startsWith("it’s tail time!")) {
  
  const setup1 = [
    "This is worse than",
    "This is better than",
    "This feels like",
    "This reminds me of",
    "This is nothing like",
    "This is just like",
    "This is so much better than",
    "This is so much worse than",
    "This is like",
    "This makes me wish I was",
    "This is more exciting than",
    "This is cooler than",
    "Note to self: stop",
    "This is more boring than",
    "I'd rather be"
  ]
  const Setup1 = setup1[Math.floor(Math.random() * setup1.length)];
   
    
    
  const scenario1 = [
    "playing pool",
    "playing poker",
    "smoking crack",
    "playing minigolf",
    "making macaroni necklaces",
    "going to bingo night",
    "downloading pirated movies",
    "drinking tap water",
    "going to a luau",
    "getting trapped",
    "playing shuffleboard",
    "talking about my feelings",
    "playing piano",
    "reading the news",
    "scuba diving",
    "playing bumper cars",
    "dancing",
    "filing taxes",
    "pirating music",
    "spending the night",
    "sleeping",
    "building IKEA furniture",
    "googling symptoms",
    "pretending to understand art",
    "overwatering houseplants",
    "starting a podcast",
    "losing at trivia night",
    "burning microwave popcorn",
    "waiting for food deliveries",
    "eating grapes without buying them",
    "taking all the free samples",
    "borrowing sugar",
    "dine and dashing",
    "using the phone"
  ]
  const Scenario1 = scenario1[Math.floor(Math.random() * scenario1.length)];
    
    
  
  const person = [
    "Adam Sandler",
    "Andrew Garfield",
    "Ariana Grande",
    "Arnold Schwarzenegger",
    "Barack Obama",
    "Ben Shapiro",
    "Bernie Sanders",
    "Bill Clinton",
    "Bill Gates",
    "Bill Nye",
    "Bob Ross",
    "Boy George",
    "Britney Spears",
    "Bruno Mars",
    "Cee-Lo Green",
    "Chris Pratt",
    "Daisy Ridley",
    "DaBaby",
    "Danny DeVito",
    "David Hasselhoff",
    "Debbie Ryan",
    "Demi Lovato",
    "DJ Khaled",
    "Dolly Parton",
    "Don Cheadle",
    "Donald Mustard",
    "Donald Trump",
    "Dr. Phil",
    "Drake",
    "Dwayne Johnson",
    "Eddie Murphy",
    "Ellen DeGeneres",
    "Elon Musk",
    "Eminem",
    "Emma Watson",
    "Freddy Fazbear",
    "Gabe Newell",
    "George Clooney",
    "George Lucas",
    "Gordon Ramsay",
    "Grace Jones",
    "Guy Fieri",
    "Hideo Kojima",
    "Hillary Clinton",
    "Homer Simpson",
    "Howie Mandel",
    "Hugh Jackman",
    "Ice Spice",
    "Jack Black",
    "Jackie Chan",
    "Jake Paul",
    "James Charles",
    "James Earl Jones",
    "Jay Leno",
    "Jeff Bezos",
    "Jerry Garcia",
    "Jerry Seinfeld",
    "Jesse Pinkman",
    "Jim Carrey",
    "Jim Davis",
    "JoJo Siwa",
    "John Cena",
    "Justin Bieber",
    "Kanye West",
    "Katy Perry",
    "Keanu Reeves",
    "Kevin Hart",
    "Kim Kardashian",
    "Lady Gaga",
    "LeBron James",
    "Lil Nas X",
    "Lin-Manuel Miranda",
    "Logan Paul",
    "Mariah Carrey",
    "Mark Hamill",
    "Mark Zuckerberg",
    "Markiplier",
    "Martha Stewart",
    "Masahiro Sakurai",
    "Matthew Mercer",
    "Megan Fox",
    "Mel Blanc",
    "Michael Jackson",
    "Michael Jordan",
    "Michelle Obama",
    "Mike Tyson",
    "Miley Cyrus",
    "Morgan Freeman",
    "Mr. Bean",
    "Mr. Beast",
    "Nicolas Cage",
    "Oprah Winfrey",
    "Paris Hilton",
    "P Diddy",
    "PewDiePie",
    "Peter Griffin",
    "Phil Swift",
    "Pokimane",
    "Post Malone",
    "Ray William Johnson",
    "Reggie Fils-Aimé",
    "Rick Astley",
    "Rip Taylor",
    "Robert Downey Jr.",
    "Rush Limbaugh",
    "Ryan Reynolds",
    "Samuel L. Jackson",
    "Saul Goodman",
    "Scarlett Johansson",
    "Scott Wozniak",
    "Selena Gomez",
    "Shaquille O’Neal",
    "Simon Cowell",
    "Snoop Dogg",
    "Steve Austin",
    "Steve Harvey",
    "Steve Irwin",
    "Steve Jobs",
    "Steven Spielberg",
    "Taylor Swift",
    "Ted Cruz",
    "Terry Crews",
    "The Jonas Brothers",
    "the Smash Mouth guy",
    "Tobey Maguire",
    "Todd Howard",
    "Tom Brady",
    "Tom Cruise",
    "Tom Fulp",
    "Tony Hawk",
    "Travis Scott",
    "Tyler Blevins",
    "Tyler Perry",
    "Vin Diesel",
    "Walter White",
    "Weird Al Yankovic",
    "William Shatner",
    "Will Ferrell",
    "Will Smith"

]
   const Person = person[Math.floor(Math.random() * person.length)];
    
    
    
  const scenario2 = [
    `at ${Person}'s house.`,
    `in ${Person}'s backyard.`,
    `with ${Person}.`,
    `in ${Person}'s bathroom.`,
    `at ${Person}'s wedding.`,
    `in ${Person}'s tool shed.`,
    `on ${Person}'s private yacht.`,
    `on ${Person}'s front lawn.`,
    `on ${Person}'s roof.`,
    `on the roof of ${Person}'s car.`,
    `at ${Person}'s.`,
    `in ${Person}'s basement.`,
    `on ${Person}'s plane'.`,
    `in ${Person}'s bathtub.`,
    `behind ${Person}'s house.`,
    `in a dark alley with ${Person}.`,
    `in ${Person}'s closet.`,
    `under ${Person}'s bed.`,
    `at ${Person}'s party.`,
    `on ${Person}'s balcony.`,
    `in ${Person}'s garage.`,
    `in ${Person}'s driveway.`,
    `in ${Person}'s pool.`,
    `in ${Person}'s attic.`,
    `at ${Person}'s funeral.`,
    `on ${Person}'s livestream.`,
    `on ${Person}'s yacht.`,
    `in the bushes outside ${Person}'s mansion.`,
    `behind ${Person}'s shower curtain.`,
  ]
   const Scenario2 = scenario2[Math.floor(Math.random() * scenario2.length)]; 
    
    
  message.channel.send(`${Setup1} ${Scenario1} ${Scenario2}`);
  }
  
  else return;

 }
);
client.login("process.env.SECRET");