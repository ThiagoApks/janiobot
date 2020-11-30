const Discord = require("discord.js");
const config = require("../../config.json");
module.exports.run = async (bot, message, args) => {
  if (!message.member) return;
  if (message.member.hasPermission("KICK_MEMBERS")) {
    if (message.members.mentions.first()) {
      try {
        message.members.mentions.first().kick();
      } catch {
        message.reply(
          "Kkk, sem permissao" +
            message.members.mentions.first()
        );
      }
    }
  } else {
    
message.channel.send("Sem permissao, amigo")
  }
};

module.exports.help = {
  name: "kick",
  aliases: ["expulsar", "kickar", "flw"],
  permission: "KICK_MEMBERS",
  category: "Moderação",
  description: "Expulsa esse merda",
  usage: "kick @user"
};
