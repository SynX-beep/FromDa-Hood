const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
  name: "animesearch",
  category: "utility",
  aliases: ["as"],
description: "Get info about an anime",
usage: "[command | Anime]",
run: async (client, message, args) => {
        const search = `${args}`;
        if(!search)
        return message.reply('Please add a search query if invalid command will not work.');

        malScraper.getInfoFromName(search)
          .then((data) => {
          const malEmbed = new Discord.MessageEmbed()
            .setAuthor({ name: `My Anime List search result for ${args}`.split(',').join(' ')})
            .setThumbnail(data.picture)
            .setColor('#2f3136') //I personally use bubblegum pink!
            .setDescription(`
            **English Title:** *${data.englishTitle},*
            **Japanese Title:** *${data.japaneseTitle},*
            **Type:** *${data.type},*
            **Episodes:** *${data.episodes},*
            **Rating:** *${data.rating},*
            **Aired:** *${data.aired},*
            **Score:** *${data.score},*
            **Score Stats:** *${data.scoreStats},*
            **Link:** *${data.url}*
            `);

            message.channel.send({ embeds: [malEmbed] });

          })
}
};
