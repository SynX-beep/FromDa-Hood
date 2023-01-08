const Discord = module.require("discord.js");
module.exports = {
  name: "dm",
  category: "Administration",
  description: "Dm someone",
  run: async (client, message, args, text) => {
    message.delete()
    mentiondm = message.mentions.users.first();
    if (mentiondm == null) return message.author.send('<:no:1007436622733774911> Please Ping Someone');
    mentionMessage = message.content.slice(27);
    mentiondm.send(mentionMessage);
    console.log(`${message.author.tag} Sent \`${mentionMessage}\` to ${mentiondm.tag}`)

    
  },
};
