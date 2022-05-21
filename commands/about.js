const Discord = require('discord.js');
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#FFA500')
	.setTitle('Put title')
	.setAuthor('Put your name here')
	.setDescription('Set a description')
        .setFooter('Put a footer');

module.exports.run = async (bot, message, args) => {
    message.reply(exampleEmbed);
}

module.exports.config = {
    name: "about",
    description: "about the bot",
    usage: "!about",
    accessableby: "Members",
    aliases: [""]
}
