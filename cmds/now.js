const Discord = require('discord.js');

module.exports.run = async (bot,message,args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
    
    let botmessage = args.join(" ");
    message.delete();

    const now = new Discord.RichEmbed()
        .setTitle("**MATCH STARTING IN NOW**")
        .setDescription("The next scrim game will start")
        .setFooter("Host " + message.author.username)
        .addField("Mode: ", botmessage)
        .addField("Instructions", "Please make sure your content is loaded, and ready up when the bot says go")
        .setTimestamp()
        .setColor("#1958d6");

    message.channel.send(now);

    }
    
  module.exports.help = {
    name: 'now'
  
  }