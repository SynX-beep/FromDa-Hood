const Discord = module.require("discord.js");

module.exports = {
  name: "slap",
  description: "Slaps a user",
  run: async (client, message, args) => {
    let member = message.mentions.members.first();
    if (!member) {
      return message.reply("You need to mention a user");
    }
    const embed = new Discord.MessageEmbed()
    .setDescription(message.author.username + " slapped :raised_back_of_hand: " + member.user.username + ", " + member.user.username + " is now in the hospital! :hospital:")
    .setColor("#2f3136");
    await message.reply({ embeds: [embed] });
  },
};
