const Discord = module.require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "wiki",
  description: "Get Search Results from Wikipedia",
  botPerms: ["EmbedLinks"],
    run: async (client, message, args) => {
        const search = args.join("_");
        const msg = args.join(" ");
        message.delete()
        if (!msg) {
            return message.channel.send("You need to enter some text to search for");
        }
        const link = `https://www.wikipedia.org/w/index.php?search=${search}&ns0=1`;
        const { body } = await fetch(`https://image.thum.io/get/width/1950/crop/700/noanimate/${link}`)
        message.reply({
          embeds: [new Discord.MessageEmbed()
            .setTitle(`Wikipedia Search`)
            .addFields(
                { name: `You Searched for:`, value: `${msg}`},
                { name: `Results:`, value: `[Here's What I found](${link})` },
            )
            .setImage(`attachment://screenshot.png`)
            .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }) })
            .setColor("#2f3136")
            ],
            files: [ body ]
          })
          
        

    //message.channel.send({ embeds: [embed] });
  },
};
