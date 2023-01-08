const Discord = module.require("discord.js");
const fetch = require("node-fetch");


module.exports = {
  name: "screenshot",
  description: "Take screenshot of a web",
  aliases: ["ss"],
  botPerms: ["EmbedLinks"],
  run: async (client, message, args) => {
    const text1 = args.join(" ");
    const text2 = args.join("+");
    message.delete()
    if (!text2) {
      return message.channel.send("Enter some to search for");
    }

    const site = /^(https?:\/\/)/i.test(text2) ? text2 : `http://${text2}`


    const { body } = await fetch(`https://image.thum.io/get/width/1950/crop/700/noanimate/${site}`)
    message.reply({
      embeds: [new Discord.MessageEmbed()
        .setAuthor({
            name: `${text2}`
        })
      .setDescription(`**Searched for: **\n${text1} \n\n**Result: **\n[Here's What I found](${site})`)
      .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }) })
      .setColor("#2f3136")
      ],
      files: [ body ]
    })
    //message.channel.send({ embeds: [embed] });
  },
};
/*
        const link = `https://www.wikipedia.org/w/index.php?search=${search}&ns0=1`;
        const { body } = await fetch(`https://image.thum.io/get/width/1950/crop/700/noanimate/${link}`)
        message.channel.send({
          embeds: [new Discord.MessageEmbed()
            .setTitle(`Wikipedia Search`)
            .addFields(
                { name: `You Searched for:`, value: `${msg}`},
                { name: `Results:`, value: `[Here's What I found](${link})` },
            )
            .setImage(`attachment://screenshot.png`)
            .setColor("#2f3136")
            ],
            files: [ body ]*/