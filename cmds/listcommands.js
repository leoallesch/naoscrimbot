const Discord = require('discord.js');

module.exports.run = async (bot,message,args) => {
    

    const ann30 = new Discord.RichEmbed()
        .setTitle("**List of commands**")
        .addField("!count", "Starts the scrim game")
        .addField("!stop", "Stops the scrim game")
        .addField("!5min", "Sends announcement that game starts in 5 minutes. Usage : !5min <gamemode>")
        .addField("!60s", "Sends announcement that game starts in 1 minute. Usage : !60s <gamemode>")
        .addField("!30s", "Sends announcement that game starts in 30 seconds. Usage : !30s <gamemode>")
        .addField("!now", "Sends announcement that game is starting. Usage: !now <gamemode>")
        .addField("!announce", "Usage: !announce <announcement>.")
        .setColor("#1958d6");

    message.channel.send(ann30);

    }
    
  module.exports.help = {
    name: 'listcommands'
  
  }