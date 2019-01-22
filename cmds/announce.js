const Discord = require('discord.js');

module.exports.run = async (bot,message,args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
    
    let botmessage = args.join(" ");

    const annEmbed = new Discord.RichEmbed()
        .setTitle("**ANNOUNCEMENT**")
        .setDescription(botmessage)
        .setFooter("Announcement by " + message.author.username)
        .setTimestamp()
        .setColor("#1958d6");

    message.channel.send(annEmbed);

    }
    
  module.exports.help = {
    name: 'announce'
  
  }