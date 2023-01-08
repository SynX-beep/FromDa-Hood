const emoji = require(`${process.cwd()}/botconfig/emojis.json`)
const { PerspectiveAPI } = require(`${process.cwd()}/botconfig/config.json`);
const Perspective = require('perspective-api-client');
const Discord = require('discord.js')
const perspective = new Perspective({ apiKey: PerspectiveAPI });


module.exports = client => {
    client.on("messageDelete", async message => {
        try {
           // const MessageLog =  messageDelete.guild.channels.find(x => x.name === "deleted-msges")
            if (message.guildId = "984847867581714483"){
            const chl = await client.channels.fetch('1052686214442004510')
            if (message.author && message.author.bot) return;
            const user = [
                "801480049853333505",//yusha
                "760227928843223060"//me
            ]
            const embed = new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setAuthor({ name: `Deleted Message Detected`})
                .setDescription(`**Author : ** <@${message.author?.id}> - *${message.author?.tag}*\n**Date : ** ${message.createdAt}\n**Channel : ** <#${message.channel?.id}> - *${message.channel?.name}*\n\n**Deleted Message : **\n\`\`\`\n${message.content?.replace(/`/g, "'").substring(0, 1800)}\n\`\`\``)
                .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }) })
                .setTimestamp()
                    
            //client.users.cache.get(user).send({embeds: [embed]})
            client.users.cache.get('801480049853333505').send({embeds: [embed]})
            client.users.cache.get('760227928843223060').send({embeds: [embed]})
            //client.users.cache.get('796651874476228608').send({embeds: [embed]})
            chl.send({embeds: [embed]})
        }else return

            } catch (e) {
            }
        }
        )}


