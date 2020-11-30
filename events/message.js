const config = require("../config.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const manutencao = config.manutencao;
const dono = config.ownerID;
const Usuario = require("../database/models/User.js")
const fs = require("fs")
const guildConf = require("../guildconfig.json")

module.exports = {
    name: "message",
    run: async (bot, message) =>{
        if(!guildConf[message.guild.id]) {
          guildConf[message.guild.id] = {
          prefix: config.prefix
        }
          fs.writeFile('./guildconfig.json', JSON.stringify(guildConf, null, 2), (err) => {
            if (err) console.log(err)
        })
        }
        if(message.content.includes("naruto") ) return message.channel.send("Naruto é uma bosta.")
        if(message.content.startsWith(guildConf[message.guild.id].prefix) && manutencao === "true" && message.author.id != dono) return message.channel.send("Em manutenção"); 
        else {
          if(message.author.bot) return;
        
        let prefix = guildConf[message.guild.id].prefix;
        if (message.author.bot) return;
        if (!message.guild) return;
        if(!message.content.toLowerCase().startsWith(prefix)) return;

        // If message.member is uncached, cache it.
        if (!message.member) message.member = await message.guild.fetchMember(message);

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        
        if (cmd.length === 0) return;
        
        // Get the command
        let command = bot.commands.get(cmd);
        // If none is found, try to find it by alias
        if (!command) command = bot.commands.get(bot.aliases.get(cmd));
        if(!command) return message.channel.send("Use d.ajuda!")
        // If a command is finally found, run the command
        if (command) 
            command.run(bot, message, args);
        }
        
    }
}