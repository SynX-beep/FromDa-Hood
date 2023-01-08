const Discord = module.require("discord.js");
const fetch = require("node-fetch");


module.exports = {
  name: "googlep",
  description: "Search anything on google",
  aliases: ["googlepics", "pics"],
  botPerms: ["EmbedLinks"],
  run: async (client, message, args) => {
    const text1 = args.join(" ");
    const text2 = args.join("+");
    message.delete()
    const google = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`;
    if (!text2) {
      return message.channel.send("Enter some to search for");
    }
    const { body } = await fetch(`https://image.thum.io/get/width/1950/crop/700/noanimate/https://google.com/search?q=${text2}&sxsrf=ALiCzsYWeS8H95xDtvXCPBG2cnG3B2gfEg:1672174287415&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiPpp3T1pr8AhVIDOwKHbumCE8Q_AUoAXoECAEQAw&biw=1920&bih=947&dpr=1`)
    message.reply({
      embeds: [new Discord.MessageEmbed()
        .setAuthor({
            name: "Google",
            iconURL: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`
        })
      .setDescription(`**Searched for: **\n${text1} \n\n**Result: **\n[Here's What I found](https://google.com/search?q=${text2}&sxsrf=ALiCzsYWeS8H95xDtvXCPBG2cnG3B2gfEg:1672174287415&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiPpp3T1pr8AhVIDOwKHbumCE8Q_AUoAXoECAEQAw&biw=1920&bih=947&dpr=1)`)
      .setThumbnail(google)
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