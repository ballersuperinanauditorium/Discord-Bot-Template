const Discord = require('discord.js');
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#FFA500')
	.setTitle('Help Command')
	.setAuthor('My Name')
	.setDescription('Here are the list of commands: "INSERT YOUR COMMANDS"')
	.setFooter('Imagine needing help');

    module.exports.run = async (bot, message, args) => {
        message.reply(exampleEmbed);
    }

    
module.exports.config = {
    name: "Help",
    description: "Answers help",
    usage: "!help",
    accessableby: "Members",
    aliases: [""]
}
