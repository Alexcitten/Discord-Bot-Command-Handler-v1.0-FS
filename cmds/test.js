const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL())
        .setTitle('Если этот текст Вы видите')
        .setDescription('То все работает! <3')
        .setColor('#2F3136')
        message.channel.send(embed)
}

module.exports.help = {
    name: 'test'
}
