const Discord = require('discord.js');
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#FFA500')
	.setTitle('Put title')
	.setAuthor('by videogamehover ', 'https://lh3.googleusercontent.com/a-/AOh14Ghn-t2X4i6h6q4EDSNRq52CwMfOhmv-VaQ_Ou3-eg=s600-k-no-rp-mo', 'https://www.youtube.com/channel/UC6bYYwrw9kukEMYzgkrdZmw')
	.setDescription('Set a description')
        .setFooter('Put a footer');

module.exports.run = async (bot, message, args) => {
    message.reply(exampleEmbed);
}

module.exports.config = {
    name: "about",
    description: "about the bot",
    usage: "i-about",
    accessableby: "Members",
    aliases: [""]
}
