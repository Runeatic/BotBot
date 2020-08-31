const Discord = require("discord.js")
const bot = new Discord.Client
const config = require("./config.json")
const token = config.token
const prefix = "!"

client.on('ready', () => {
    console.log('This bot is online!');
})

//Commands
client.on('message', message => {
    if (message.author.bot || !message.content.startsWith(PREFIX)) return;
    if (!message.guild) return;
    const args = message.content.toLowerCase().slice(PREFIX.length).split(" ");

    switch(args[0])
    {
        case "avatar":
            user = message.mentions.users.first() || message.author;
            if(!user) return message.reply("Please mention a user!");

            member = message.guild.member(user);
            if(!member) return message.reply("The mentioned user is not in this server!");

            message.channel.send(user.displayAvatarURL());
            break;
    }
})

//Turn on bot
bot.login(token)