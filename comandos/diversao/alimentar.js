const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (message.mentions.users.first()) {
    var user = message.mentions.users.first();
  } else {
    var user = message.author;
  }
  const alimento = new Discord.RichEmbed()
	.setColor('#ffcc00')
	.setDescription(`${message.author} acaba de alimentar Janio!!`)
	.setImage('https://media.tenor.com/images/1598d478b70d16d1cdbe9cc894205c8c/tenor.gif');

  message.channel.send(alimento);
};

module.exports.help = {
  name: "alimentar",
  aliases: ["alimento"],
  category: "Diversão",
  description: "Alimente o nosso querido Janio!!",
  usage: "alimentar"
};
