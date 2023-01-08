const { Client, CommandInteraction, MessageEmbed, MessageAttachment } = require("discord.js");
const embedconfig = require('../../botconfig/embed.json')
const fetch = require("node-fetch");


module.exports = {
    name: "screenshot",
    description: "Take's screenshot from the site you send",
    type: 'CHAT_INPUT',
    ephemeral: true,
    UserPerms: [],
    BotPerms: [],
    OwnerOnly: false,
    options: [
		{"String": { name: "url", description: "The url you want to take screenshot from", required: true }}, 
        {"StringChoices": { name: "show_others", description: "Do you want to Show Others your Screenshot or No", required: true, choices: [["Yes", "yes"], ["No", "no"]] }}, //here the second array input MUST BE A STRING // TO USE IN THE CODE: interacton.getString("what_ping")
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
        let url = interaction.options.getString('url');
        const option = interaction.options.getString("show_others")




        try {
            if (url.length < 8)
            return interaction.followUp(`"https is too short to reach - 8 limit"`)

            const site = /^(https?:\/\/)/i.test(url) ? url : `http://${url}`


            const { body } = await fetch(`https://image.thum.io/get/width/1950/crop/700/noanimate/${site}`)

            /*if ( === [`pornhub.com`,`gay.pornhub.com`]){
                return interaction?.reply('https://tenor.com/view/haram-heisenberg-gif-25690597');
            }*/

            //if (interaction.options.getString('url') = `pornhub.com`,'gay.com'){
              //  return interaction?.reply(`https://tenor.com/view/haram-heisenberg-gif-25690597`)

            //}
            if (option == 'yes') {
                interaction.reply({
                    embeds: [ new MessageEmbed()
                        .addField(`✔ Screenshotted!`, `🔰 [The site](${site})`)
                        .setImage(`attachment://screenshot.png`)
                        .setColor(embedconfig.color)
    
                    ],
                    files: [ body ],
                    ephemeral: false
                })
            } else if (option == 'no')  {
                interaction.reply({
                    embeds: [ new MessageEmbed()
                        .addField(`✔ Screenshotted!`, `🔰 [The site](${site})`)
                        .setImage(`attachment://screenshot.png`)
                        .setColor(embedconfig.color)
    
                    ],
                    files: [ body ],
                    ephemeral: true
                })
            }
        } catch(err) {
            interaction.reply(`❌ Error: ${err}`)
        }
    },
};
