const Discord = module.require("discord.js");
const giphy = require("giphy-api")("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");

module.exports = {
  name: "gif",
  description: "Get gifs based on your search",
  category: "Fun",
  botPerms: ["EmbedLinks", "ManageMessages"],
  run: async (client, message, args) => {
    if (args.length === 0) {
      message.channel.send("No Search terms!");
      return;
    }
    if (args.length === 1) {
      term = args.toString();
    } else {
      term = args.join(" ");
    }
    giphy.search(term).then(function (res) {
      // Res contains gif data!
      let id = res.data[0].id;
      let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`;

      const embed = new Discord.MessageEmbed()
        .setTitle(`First result for \`${term}\` on GIPHY`)
        .setImage(msgurl)
        .setColor("#2f3136");
      message.channel.send({ embeds: [embed] });
    });

    message.delete();
  },
};
