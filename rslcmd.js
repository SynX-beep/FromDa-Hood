require('dotenv').config();

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = 'MTAyNTQ4NTQ4ODE3MTI3NDM0MQ.G3_ZUp.8Ur7q0rLCuwOT2qsNn8St4ySFfH7eATBP8tupY';
const clientId = '1025485488171274341';
const guildId = '1052686214442004510';
    
const rest = new REST({ version: '9' }).setToken(token);
rest.get(Routes.applicationGuildCommands(clientId, guildId))
    .then(data => {
        const promises = [];
        for (const command of data) {
            const deleteUrl = `${Routes.applicationGuildCommands(clientId, guildId)}/${command.id}`;
            promises.push(rest.delete(deleteUrl));
        }
        return Promise.all(promises);
    });
