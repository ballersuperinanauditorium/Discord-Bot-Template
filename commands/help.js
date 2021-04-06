const Discord = require('discord.js');
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#FFA500')
	.setTitle('Hello, please help me I am under the water!')
	.setAuthor('Help Command')
	.setDescription('Here are the list of commands: INSERT YOUR COMMANDS')
	.setFooter('bruh u need help?');

    module.exports.run = async (bot, message, args) => {
        message.reply(exampleEmbed);
    }

    
module.exports.config = {
    name: "Help",
    description: "Answers help",
    usage: "i-help",
    accessableby: "Members",
    aliases: [""]
}
