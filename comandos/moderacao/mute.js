const Discord = require("discord.js");
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  if (!message.member) return;
  if(!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(`> Você não tem permissão para usar esse comando, ${message.author}.`);
  var user = message.mentions.members.first();
      if(!user){
       message.channel.send('> Por favor, mencione um usuário que esteja no servidor.');
       message.delete()
      return
      } else {
        message.channel.send("Se fode ae trouxa kkkj")
      }
  
};

module.exports.help = {
  name: "mute",
  aliases: ["silenciar"],
  permission: ["MANAGE_MESSAGES"],
  category: "Moderação",
  description: "Silencia esse merda",
  usage: "mute @user 1s/m/h/d"
};
// mano, agr que eu lembrei
// tenho que arrumar o comando de /help, ele ta falando com o prefixo do antigo bot
// eu posso ver isso kk