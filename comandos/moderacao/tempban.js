const Discord = require("discord.js");
const ms = require("ms");
const moment = require("moment");
const config = require("../../config.json");
module.exports.run = async (bot, message, args) => {
  if (!message.member) return;
  let member = message.guild.member(message.mentions.users.first());
 
        if(!member && !args[0]) {
            return message.channel.send("Indique um membro a ser expulso");
        }
 
        else if(!member && args[0]) {
            member = message.guild.members.get(args[0]);
 
            if(!member) {
                return message.channel.send(`${this.client.emotes.name.error} O usuário não está no servidor.`)
            };
        };
 
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition || member.hasPermission("ADMINISTRATOR") || member.id === message.guild.ownerID || member.id === message.author.id) {
            return message.channel.send(`Esta pessoa não pode ser banida. Verifique suas permissões e as da pessoa em questão para saber mais.`);
        }
 
        else if(!args.slice(1)[0] || args.slice(1)[0].match(/[1-7][min,h,d]/g)) {
            return message.channel.send(`Insira um horário válido. : min, h, d.`);
        };
 
        let reason = args.slice(2).join(" ");
 
        if(!reason) reason = "Banido";
 
        message.guild.ban(member, {
            days: 7,
            reason: reason
        });
 
        setTimeout(() => {
            message.guild.unban(member.user.id);
        }, ms(args.slice(1)[0]));
 
        const wait = await message.channel.send(`⚠ **${member.user.username}** foi banido por **${message.author.username}**, por : ${reason} !\n será desbanido em ${moment.utc(Date.now() + ms(args.slice(1)[0])).format("HH:MM:SS")}.`);
 
  bot.channels.get(`752654882498150474`).send(`⚠ **${member.user.username}** foi banido por **${message.author.username}**, por : ${reason} !\n será desbanido em ${moment.utc(Date.now() + ms(args.slice(1)[0])).format("HH:MM:SS")}.`)
    
};

module.exports.help = {
  name: "tempban",
  aliases: ["tban"],
  permission: "BAN_MEMBERS",
  category: "Moderação",
  description: "Bane esse merda",
  usage: "tempban @user 1s/m/h/d"
};
