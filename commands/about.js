const Discord = require('discord.js');
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#FFA500')
	.setTitle('About the Indian Bot')
	.setAuthor('by videogamehover ', 'https://lh3.googleusercontent.com/a-/AOh14Ghn-t2X4i6h6q4EDSNRq52CwMfOhmv-VaQ_Ou3-eg=s600-k-no-rp-mo', 'https://www.youtube.com/channel/UC6bYYwrw9kukEMYzgkrdZmw')
	.setDescription('Sup Bots. I\'m Josh, and I created this bot to humorize people in all ways. ')
	.setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMi0n5wkkrEJPQMGcGhyoabRJSRS3KTveVA&usqp=CAU')
	.setFooter('Coded using javascript');

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