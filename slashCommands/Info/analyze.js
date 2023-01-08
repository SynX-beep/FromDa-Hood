const { Client, CommandInteraction, MessageEmbed, MessageAttachment } = require("discord.js");
const embedconfig = require('../../botconfig/embed.json')
const fetch = require("node-fetch");
const { PerspectiveAPI } = require(`${process.cwd()}/botconfig/config.json`);
const Perspective = require('perspective-api-client');
const perspective = new Perspective({ apiKey: PerspectiveAPI });
const Discord = require('discord.js');
const internal = require("stream");


module.exports = {
    name: "analyze",
    description: "analyze toxicity in a message",
    type: 'CHAT_INPUT',
    ephemeral: true,
    UserPerms: [],
    BotPerms: [],
    OwnerOnly: false,
    options: [
		{"String": { name: "text", description: "The Text you want to Analyze", required: true }}, 
        
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const { member, channelId, guildId, applicationId, 
            commandName, deferred, replied, ephemeral, 
            options, id, createdTimestamp } = interaction; 
        let text = interaction.options.getString('text');




        try {
            const result = await perspective.analyze(text);
            let obj = JSON.parse(JSON.stringify(result));
            console.log(JSON.stringify(result));
            const toxic = `${obj.attributeScores.TOXICITY.summaryScore.value * 100}`
            /*const S_toxic = `${obj.attributeScores.SEVERE_TOXICITY.summaryScore.value * 100}`
            const insult = `${obj.attributeScores.INSULT.summaryScore.value * 100}`
            const profanity = `${obj.attributeScores.PROFANITY.summaryScore.value * 100}`
            const threat = `${obj.attributeScores.THREAT.summaryScore.value * 100}`
            const identity = `${obj.attributeScores.IDENTITY_ATTACK.summaryScore.value * 100}`*/
            const newtoxic = Math.round(obj.attributeScores.TOXICITY.summaryScore.value * 100)

            const embed = new Discord.MessageEmbed()
            .setColor("#2f3136")
            .setAuthor({ name: `Text Analyzer`})
            .setDescription(` **Your Message has Been **anal**yzed :**\n\`\`\`TOXICITY: ${newtoxic}%\`\`\``)//\`\`\`SEVERE_TOXICITY: ${S_toxic}%\`\`\`\`\`\`IDENTITY_ATTACK: ${identity}%\`\`\`\`\`\`INSULT: ${insult}%\`\`\`\`\`\`PROFANITY: ${profanity}%\`\`\`\`\`\`THREAT: ${threat}%\`\`\``
            .setTimestamp();

            interaction.reply({embeds: [embed], ephemeral: true})

        }catch(err) {
            interaction.reply({
                embeds: [ new MessageEmbed()
                    .setAuthor({ name: `Text Analyzer`})
                    .setDescription(`Error Occured ¯\_(ツ)_/¯ \n More info: \n ${err}`)
                    .setColor("#2f3136")

                ],
                ephemeral: true
                
            })
            console.log(err)
        }
    } 
};
