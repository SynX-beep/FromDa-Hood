const emoji = require(`${process.cwd()}/botconfig/emojis.json`)
const { PerspectiveAPI } = require(`${process.cwd()}/botconfig/config.json`);
const Perspective = require('perspective-api-client');
const Discord = require('discord.js')
const perspective = new Perspective({ apiKey: PerspectiveAPI });

module.exports = client => {
    client.on("messageUpdate", async (oldMessage, newMessage) => {
        try {
            if (oldMessage.guild.id = "984847867581714483") {
            if (oldMessage.author && oldMessage.author.bot) return;
            if (newMessage.author && newMessage.author.bot) return;
            const chl = await client.channels.fetch('1052686214442004510')
            const MessageLog = client.channels.cache.find(channel => channel.id ==='1052686214442004510');
            const user = [
                "801480049853333505",//yusha
                "760227928843223060"//me
            ]
            const embed = new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setAuthor({ name: `Edited Message Detected`})
                //.setDescription(`\`\`\`Previous Msg: ${oldMessage}\`\`\`\`\`\`Edit: ${newMessage}\`\`\``)
                .setDescription(` **Author:** <@${newMessage.author.id}> - *${newMessage.author.tag}*\n**Date:** ${newMessage.createdAt}\n**Channel:** <#${newMessage.channel?.id}> - *${newMessage.channel?.name}*\n**Orignal Message:**\n\`\`\`\n${oldMessage}\n\`\`\`\n**Updated Message :**\n\n\`\`\`${newMessage}\n\`\`\``)
                .setFooter({ text: `Requested by ${newMessage.author.username}`, iconURL: newMessage.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }) })
                .setTimestamp()
                    
            //client.users.cache.get(user).send({embeds: [embed]})
            client.users.cache.get('801480049853333505').send({embeds: [embed]})
            client.users.cache.get('760227928843223060').send({embeds: [embed]})
            client.users.cache.get('796651874476228608').send({embeds: [embed]})
            chl.send({embeds: [embed]})
        }else return
            } catch (e) {
            }
        }
        )}


