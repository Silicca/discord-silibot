// Require the necessary discord.js classes
const fs = require('node:fs');
const discord = require('discord.js');
//const config = require('./config.json'); use this for dev only
const token = process.env.TOKEN;

// Create a new client instance
const client = new discord.Client({ intents: [
    discord.Intents.FLAGS.GUILDS,
    discord.Intents.FLAGS.GUILD_MESSAGES,
    discord.Intents.FLAGS.GUILD_MEMBERS,
    discord.Intents.FLAGS.GUILD_PRESENCES,
    discord.Intents.FLAGS.DIRECT_MESSAGES,
    discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING]
});

// Use the events files
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
		client.once(event.name, (...args) => event.execute(client, ...args));
	} else {
		client.on(event.name, (...args) => event.execute(discord, client, ...args));
	}
}

// Login to Discord with your client's token
client.login(token);
console.log('Connected!');