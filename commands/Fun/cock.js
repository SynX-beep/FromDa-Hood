const Discord = module.require("discord.js");
const config = require('../../botconfig/config.json')
module.exports = {
  name: "cock",
  category: "Fun",
  description: "Chance of getting a Cock",
  disabled: "true",
  run: async (client, message, args) => {
    const disabled = "true"
    const disabledembed = new Discord.MessageEmbed()
      .setColor('#2f3136')
      .setAuthor({ name: `Command Disabled`})
      .setDescription(`Sorry <@${message.author.id}>, ${config.prefix}cock is Disabled`)
      .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }) })
       .setTimestamp()
      
    if (disabled == 'true'){
       return message.channel.send({embeds: [disabledembed]})
    
    }else{
      message.delete()
      var chance = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
      ];
      const img = [
        "",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061055916306341899/Cock_1.jpg",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061055916574785587/Cock_2.jpg",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061055916851605614/Cock_3.jpg",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061055917191340173/Cock_4.jpg",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061055917623357571/Cock_5.jpg",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061055918000840784/Cock_6.jpg",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061055918369947698/Cock_7.jpg",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061055918789374082/Cock_8.jpg",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061063933303197756/Cock_9.jpg",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061064328855437343/Cock_10.jpg",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061352454450589726/Cock_11.png",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061353229952233512/Cock_12.png",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061353615379410944/Cock_13.png",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061353797487697960/Cock_14.png",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061353953582915664/Cock_15.png",
        "https://cdn.discordapp.com/attachments/1061055851101704343/1061354220005118053/Cock_16.png"

      ]
      const randomIndexpick = Math.floor(Math.random() * (img.length - 1) + 1);
      var newimg = img[randomIndexpick];
      console.log(newimg)
      const embed = new Discord.MessageEmbed()
      .setColor('#2f3136')
      .setAuthor({ name: `Heres a Cock`})
      .setImage(`${newimg}`)
      .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }) })
      .setTimestamp()
      await message.channel.send({embeds: [embed]})
      //, files: [`./Cock ${newchance}.jpg`]
  }
  },
};
