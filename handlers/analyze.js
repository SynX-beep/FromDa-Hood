const emoji = require(`${process.cwd()}/botconfig/emojis.json`)
const { PerspectiveAPI } = require(`${process.cwd()}/botconfig/config.json`);
const Perspective = require('perspective-api-client');
const perspective = new Perspective({ apiKey: PerspectiveAPI });
const Discord = require('discord.js')

module.exports = client => {
    client.on("messageCreate", async message => {
        try {
            if (message.channelId != "1024355193401397258") return;
            if (message.author && message.author.bot) return;
            const chl = await client.channels.fetch('1052686214442004510')
            const  user = message.author.id;
            const text = message.content;
            const result = await perspective.analyze(text);
            let obj = JSON.parse(JSON.stringify(result));
            console.log(JSON.stringify(result));
            const integer = `${obj.attributeScores.TOXICITY.summaryScore.value * 100}`
            if (integer >= 85){
            const embed = new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setAuthor({ name: `Toxicity Detected`})
                .setDescription(`**Author : ** <@${message.author?.id}> - *${message.author?.tag}*\n**Date : ** ${message.createdAt}\n**Channel : ** <#${message.channel?.id}> - *${message.channel?.name}*\n\n**Tocicity Level : **\n\`\`\`\n${obj.attributeScores.TOXICITY.summaryScore.value * 100}%\n\`\`\`**Message : **\n\`\`\`\n${message.content}\n\`\`\``)
                .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }) })
                .setTimestamp()
                    
                //client.users.cache.get(user).send({embeds: [embed]})
                client.users.cache.get(`760227928843223060`).send({embeds: [embed]})
                client.users.cache.get(`801480049853333505`).send({embeds: [embed]})
                client.users.cache.get('796651874476228608').send({embeds: [embed]})
                chl.send({embeds: [embed]})

            }
        } catch (e) {
        }
    }
    )}


