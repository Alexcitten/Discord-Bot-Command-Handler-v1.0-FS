const Discord = require('discord.js')
const fs = require('fs')
const bot = new Discord.Client({
	  disableMentions: 'everyone'
});
const config = require('./config.json')
bot.cmds = new Discord.Collection()

fs.readdirSync('./cmds/').filter(file => file.endsWith('.js')).forEach(file => {
    bot.cmds.set(require(`./cmds/${file}`).help.name, require(`./cmds/${file}`));
})


bot.on('message', async message => {
if (message.author.bot) return;
let botprefi = config.prefix;
let messageArray = message.content.split(' ');
let command = messageArray[0];
let args = messageArray.slice(1);
let command_file = bot.cmds.get(command.slice(botprefi.length).toLowerCase());
if (command_file) command_file.run(bot, message, args);

})

var prefix = "+";

bot.on('ready', () => {
    bot.user.setActivity("by Alexcitten", {
      type: "STREAMING",
      url: "https://www.twitch.tv/monstercat"
    });
    console.log(`${bot.user.tag} В сети`)
    });

    bot.login(config.token).catch(console.error);
