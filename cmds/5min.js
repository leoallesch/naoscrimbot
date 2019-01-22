const Discord = require('discord.js');

module.exports.run = async (bot,message,args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
    
    let botmessage = args.join(" ");
    message.delete();

    const ann60 = new Discord.RichEmbed()
        .setTitle("**MATCH STARTING IN 5 MINUTES**")
        .setDescription("The next scrim game will start in 5 MINUTES")
        .setFooter("Host " + message.author.username)
        .addField("Mode: ", botmessage)
        .addField("Instructions", "Please make sure your content is loaded")
        .setTimestamp()
        .setColor("#1958d6");

    message.channel.send(ann60);

    }
    
  module.exports.help = {
    name: '5min'
  
  }