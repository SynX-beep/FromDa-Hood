const emoji = require(`${process.cwd()}/botconfig/emojis.json`)
const { PerspectiveAPI } = require(`${process.cwd()}/botconfig/config.json`);
const Perspective = require('perspective-api-client');
const Discord = require('discord.js')
const perspective = new Perspective({ apiKey: PerspectiveAPI });
module.exports = client => {
    client.on("messageCreate", async message => {
        const users = [
            "885258228898869339",
            "757931866971177042",
            "760227928843223060"
        ]
        const chl = await client.channels.fetch('1052686214442004510')
        const embed = new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setAuthor({ name: `Message Deleted`})
        .setDescription(`**Author : ** <@${message.author?.id}> - *${message.author?.tag}*\n**Date : ** ${message.createdAt}\n**Channel : ** <#${message.channel?.id}> - *${message.channel?.name}*\n\n**Deleted Message : **\n\`\`\`\n${message.content?.replace(/`/g, "'").substring(0, 1800)}\n\`\`\``)
        .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }) })
        .setTimestamp()
            
        try {
            if (message.author.id == "757931866971177042"){
                    console.log(`found message from ${message.author.tag}`)
                    setTimeout(function(){
                        console.log(`Deleted ${message.author.tag}'s message !`)
                        message.delete()
                        const embed1 = new Discord.MessageEmbed()
                        .setColor('#2f3136')
                        .setAuthor({ name: `Auto Message Delete`})
                        .setDescription(`**Author : ** <@${message.author?.id}> - *${message.author?.tag}*\n**Date : ** ${message.createdAt}\n**Channel : ** <#${message.channel?.id}> - *${message.channel?.name}*\n\n**Deleted Message : **\n\`\`\`\n${message.content?.replace(/`/g, "'").substring(0, 1800)}\n\`\`\``)
                        .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }) })
                        .setTimestamp()

                        chl.send({embeds: [embed1]})
                    },1000 * 2) // 1000 milliseconds multiplied by 10, therefore 10 second.
                
                } else if (message.author.id == "885258228898869339"){
                    console.log(`found message from ${message.author.tag}`)
                    setTimeout(function(){
                        console.log(`Deleted ${message.author.tag}'s message !`)
                        message.delete()
                        const embed2 = new Discord.MessageEmbed()
                        .setColor('#2f3136')
                        .setAuthor({ name: `Auto Message Delete`})
                        .setDescription(`**Author : ** <@${message.author?.id}> - *${message.author?.tag}*\n**Date : ** ${message.createdAt}\n**Channel : ** <#${message.channel?.id}> - *${message.channel?.name}*\n\n**Deleted Message : **\n\`\`\`\n${message.content?.replace(/`/g, "'").substring(0, 1800)}\n\`\`\``)
                        .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }) })
                        .setTimestamp()

                        chl.send({embeds: [embed2]})
                    },1000 * 2) // 1000 milliseconds multiplied by 10, therefore 10 second.
                
                }
                }catch (e) {
             }
    }
    )

}