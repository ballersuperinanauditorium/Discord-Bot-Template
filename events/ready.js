//this is the code for when the bot is ready
//ok fine ill shut up

module.exports = (client) => {
  console.log(`${client.config.botName} is online.`);
	client.user.setActivity(client.config.activityStatus, { type: client.config.activityType })
};
