const botconfig = require(`./botconfig.json`);
const colors = require(`./colors.json`);
const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
    console.log(`${client.user.tag} is ready`);
});

client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("Channel_ID") //inja vared kon
    let targetchannel = 'Channel_ID' //inja vared kon
    if(welcomeChannel){

        let welcomeEmbed = new discord.MessageEmbed()

        if(member.user.bot){

            welcomeEmbed.setColor(colors.white)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`Hi <@${member.user.id}> Welcome to Bazam Lavat Server , But you must not forget that you are a bot`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username} `)
            welcomeChannel.send(welcomeEmbed)
        }else{
            welcomeEmbed.setColor(colors.purple)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`Hi <@${member.user.id}> Welcome to Bazam Lavat Server , Do not forget to visit ${member.guild.channels.cache.get(targetchannel).toString()} Channel , baby`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username}  I hope you have fun`)
            welcomeChannel.send(welcomeEmbed)
        }
    }else{
        console.log("Welcome Channel Yaft Nashod")
    }
})

client.on("ready", () => {
    function YousamPower() {
      let hungry = ["TEST 1" , "TEST 2", "TEST 3" ]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "STREAMING", url: "https://www.twitch.tv/shabake4"});
    }; setInterval(YousamPower, 2000)
});

client.login(botconfig.token);

