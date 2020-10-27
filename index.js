const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzcwNjY4MzM0OTc4MTcwOTYw.X5g60Q.6-XTRuUff2PdbbSt_4NkyMjp0uI';

bot.on('ready', ()  =>{
    console.log('De Lilianne Bot is Nu online De Gaming Lion NL');
})

bot.on('message', msg=>{
    if(msg.content ===   "Hallo"){
        msg.reply('Hallo Mijn Vriend!');
    }
})

bot.login(token);