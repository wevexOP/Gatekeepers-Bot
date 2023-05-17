require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
}); 

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content === '!bing') {
        message.reply('Bong!');
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    
    if (interaction.commandName === 'hey') {
        interaction.reply('Hey, how are ya?');
    }
    if (interaction.commandName === 'anygamers') {
        interaction.reply('Where gamers?');
    }
    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number')?.value;
        const num2 = interaction.options.get('second-number')?.value;

        interaction.reply(`The sum is ${num1 + num2}.`)
    }
});

client.login(process.env.TOKEN);


