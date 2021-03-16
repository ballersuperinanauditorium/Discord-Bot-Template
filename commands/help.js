const Discord = require('discord.js');
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#FFA500')
	.setTitle('Hello, please help me I am under the water!')
	.setAuthor('Help Command')
	.setDescription('Here are the list of commands: \n``i-help : brings up this panel``\n ``i-about : more about the bot`` \n ``i-meme : brings up an indian meme`` \n ``i-rmeme : brings up a meme from reddit``')
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