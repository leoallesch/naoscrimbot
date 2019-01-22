const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {

    const streamOptions = {seek: 2, volume: 1};
    let voiceChannelID = "537064784147906571";

    console.log("Starting voice command");

    if (voiceChannelID != null) {
        if (message.guild.channels.get(voiceChannelID)){
            let vc = message.guild.channels.get(voiceChannelID);
            console.log("Next stop, connection");

            vc.join().then(connection => {
                console.log("[VOICE CHANNEL] joined countdown channel");
                const stream = ytdl('https://www.youtube.com/watch?v=Ol-DOlq_U7Q', {filter: 'audioonly'});
                const dispatcher = connection.playStream(stream, streamOptions);

                dispatcher.on("end" , end => {
                    console.log("[VOICE CHANNEL] left countdown channel.");
                    vc.leave();
                });
            }).catch(err => {
                console.log(err);
            });
        }
    }


    message.channel.send("!start");

}

module.exports.help = {
    name: "count"
}