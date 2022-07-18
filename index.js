require("dotenv").config();
const oneLinerJoke = require("one-liner-joke");

let random = () => Math.floor(Math.random() * 3);

const { Client, Message } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("guildMemberAdd", (member) => {
  member.send(`Welcome! We are happy to see you!`);
});

client.on("message", (msg) => {
  // PING PONG
  if (msg.content === "!ping") {
    return msg.reply("Pong!");
  }
  // ROCK PAPER SCISSORS
  if (
    msg.content === "!rock" ||
    msg.content === "!paper" ||
    msg.content === "!scissors"
  ) {
    let arr = ["rock", "paper", "scissors"];
    return msg.reply(arr[random()]);
  }
  // ANIMALS
  if (msg.content === "!dog") return msg.reply("Woof");
  if (msg.content === "!cat") return msg.reply("Meow");
  if (msg.content === "!cow") return msg.reply("Moo");
  if (msg.content === "!bird") return msg.reply("Tweet");

  // ROSIE
  // ADD TO README
  if (msg.content === "!rosie") return msg.reply("That's me...");
  if (msg.content === "!hello")
    return msg.reply("Hi, how are you doing today?");
  if (msg.content.includes("!good")) return msg.reply("Very good!");
  if (msg.content.includes("!okay")) return msg.reply("Just okay???");
  if (msg.content === "!bad")
    return msg.reply("Hope it goes from bad to great in no time...");
  if (msg.content === "!bye") return msg.reply("Later Gator");
  if (msg.content === "!howareyou") return msg.reply("Fully charged!");

  // JOKE
  if (msg.content === "!joke") {
    let getRandomJoke = oneLinerJoke.getRandomJokeWithTag("stupid", {
      exclude_tags: ["dirty", "racist", "marriage", "sex"],
    });
    return msg.reply(getRandomJoke.body);
  }

  // HELP

  if (msg.content.includes("help"))
    return msg.reply("HELP IS ALWAYS NEEDED, HELP HELP HELP EACH OTHER!");

  // BLOCK UGLY
  if (msg.content.includes("shit") || msg.content.includes("fuck"))
    return msg.reply("Im gonna wash it with soap");
});
client.login(`${process.env.BOT_KEY}`);
