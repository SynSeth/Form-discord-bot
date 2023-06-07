(async()=>{
    // default imports
    const events = require('events');
    const { exec } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const { 
        MessageEmbed, 
        MessageButton, 
        MessageActionRow, 
        Intents, 
        Permissions, 
        MessageSelectMenu 
    }= require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    const os = require("os-utils");
    let URL = require('url')
    let DIG = require("discord-image-generation")
    let canvas = require("discord-canvas") 
    let https = require("https")
    const synchronizeSlashCommands = require('@frostzzone/discord-sync-commands');
    const Database  = require("easy-json-database")
    
    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire:null,
        joiningMember:null,
        reply:null,
        player:null,
        manager:null,
        Inviter:null,
        message:null,
        notifer:null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if (!require('./package.json').dependencies['discord.js'].startsWith("^13.")) {
      let file = JSON.parse(fs.readFileSync('package.json'))
      file.dependencies['discord.js'] = '^13.15.1'
      fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
      exec('npm i')
      throw new Error("Seems you arent using v13 please re-run or run `npm i discord.js@13.12.0`");
    }

    // check if discord-logs is v2
    if (!require('./package.json').dependencies['discord-logs'].startsWith("^2.")) {
      let file = JSON.parse(fs.readFileSync('package.json'))
      file.dependencies['discord-logs'] = '^2.0.0'
      fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
      exec('npm i')
      throw new Error("discord-logs must be 2.0.0. please re-run or if that fails run `npm i discord-logs@2.0.0` then re-run");
    }

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION", 
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function (err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code
    

    // blockly code
    var prefix, member_xp, member_level, message_cooldown, member_xp_needed, message_per_minute, db_xp, db_level;
    
    function mathRandomInt(a, b) {
      if (a > b) {
        // Swap a and b to ensure a is smaller.
        var c = a;
        a = b;
        b = c;
      }
      return Math.floor(Math.random() * (b - a + 1) + a);
    }
    
    
    s4d.client.on('ready', async () => {
      prefix = '!';
   
    
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      // U can replace delete with smth else
      if (((s4dmessage.content) || '').startsWith((String(prefix) + 'gay') || '')) {
        (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Gay().getImage(((s4dmessage.mentions.members.first()).displayAvatarURL({format:"png"})))), "image.png"))]});
      }
      // U can replace batslap with smth else
      if (((s4dmessage.content) || '').startsWith((String(prefix) + 'kiss') || '')) {
        (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Kiss().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})),((s4dmessage.mentions.members.first()).displayAvatarURL({format:"png"})))), "image.png"))]});
      }
      if (((s4dmessage.content) || '').startsWith((String(prefix) + 'triggered') || '')) {
        (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Triggered().getImage(((s4dmessage.mentions.members.first()).displayAvatarURL({format:"png"})))), "image.gif"))]});
      }
      // U can replace delete with smth else
      if (((s4dmessage.content) || '').startsWith((String(prefix) + 'hitler') || '')) {
        (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Hitler().getImage(((s4dmessage.mentions.members.first()).displayAvatarURL({format:"png"})))), "image.png"))]});
      }
      // U can replace delete with smth else
      if (((s4dmessage.content) || '').startsWith((String(prefix) + 'jail') || '')) {
        (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Jail().getImage(((s4dmessage.mentions.members.first()).displayAvatarURL({format:"png"})))), "image.png"))]});
      }
      // U can replace delete with smth else
      if (((s4dmessage.content) || '').startsWith((String(prefix) + 'tatoo') || '')) {
        (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Tatoo().getImage(((s4dmessage.mentions.members.first()).displayAvatarURL({format:"png"})))), "image.png"))]});
      }
      // U can replace delete with smth else
      if (((s4dmessage.content) || '').startsWith((String(prefix) + 'facepalm') || '')) {
        (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Facepalm().getImage(((s4dmessage.mentions.members.first()).displayAvatarURL({format:"png"})))), "image.png"))]});
      }
      // U can replace delete with smth else
      if (((s4dmessage.content) || '').startsWith((String(prefix) + 'beautiful') || '')) {
        (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Beautiful().getImage(((s4dmessage.mentions.members.first()).displayAvatarURL({format:"png"})))), "image.png"))]});
      }
      // U can replace delete with smth else
      if (((s4dmessage.content) || '').startsWith((String(prefix) + 'bobross') || '')) {
        (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Bobross().getImage(((s4dmessage.mentions.members.first()).displayAvatarURL({format:"png"})))), "image.png"))]});
        // U can replace delete with smth else
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'discordblack') || '')) {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.DiscordBlack().getImage(((s4dmessage.mentions.members.first()).displayAvatarURL({format:"png"})))), "image.png"))]});
        }
        // U can replace delete with smth else
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'ad') || '')) {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Ad().getImage(((s4dmessage.mentions.members.first()).displayAvatarURL({format:"png"})))), "image.png"))]});
        }
      }
    
    });
    
    const levels = new Database('./levels.json')
    await s4d.client.login('BOT TOKEN HERE').catch((e) => {
            const tokenInvalid = true;
            const tokenError = e;
            if (e.toString().toLowerCase().includes("token")) {
                throw new Error("An invalid bot token was provided!")
            } else {
                throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
            }
        });
    
    synchronizeSlashCommands(s4d.client, [
      {
          name: 'level',
      		description: 'View your or another person\'s level',
      		options: [
              {
            type: 6,
        	name: 'user',
            required: false,
        	description: 'The person that you want to see the level of',
            choices: [
    
            ]
        },
          ]
      },
    ],{
        debug: false,
    
    });
    
    s4d.client.on('interactionCreate', async (interaction) => {
            let member = interaction.guild.members.cache.get(interaction.member.user.id)
              if ((interaction.commandName) == 'level') {
        try {
          member_xp = levels.get(String(([(interaction.options.getMember('user')).id,'-',(interaction.guild).id,'-xp'].join(''))));
          member_level = levels.get(String(([(interaction.options.getMember('user')).id,'-',(interaction.guild).id,'-level'].join(''))));
          member_xp_needed = (member_level + 1) * (member_level + 1) * 100 - member_xp;
          interaction.reply({content:' ',files:[{attachment:(await new canvas.RankCard()  .setUsername(((interaction.options.getMember('user')).nickname == null ? (interaction.options.getMember('user')).user.username : (interaction.options.getMember('user')).nickname)).setRankName(((interaction.guild).name)).setAvatar(((interaction.options.getMember('user')).displayAvatarURL({format:"png"}))).setXP("current",member_xp).setXP("needed",member_xp_needed).setLevel(member_level).setBackground('https://i.pinimg.com/564x/76/94/3a/76943a096e799de91140ec4563c4b4fc.jpg').setAddon("Rank",false).toAttachment()).toBuffer()}]});
    
        } catch (err) {
          member_xp = levels.get(String(([(interaction.member).id,'-',(interaction.guild).id,'-xp'].join(''))));
          member_level = levels.get(String(([(interaction.member).id,'-',(interaction.guild).id,'-level'].join(''))));
          member_xp_needed = (member_level + 1) * (member_level + 1) * 100 - member_xp;
          interaction.reply({content:' ',files:[{attachment:(await new canvas.RankCard()  .setUsername(((interaction.member).nickname == null ? (interaction.member).user.username : (interaction.member).nickname)).setRankName(((interaction.guild).name)).setAvatar(((interaction.member).displayAvatarURL({format:"png"}))).setXP("current",member_xp).setXP("needed",member_xp_needed).setLevel(member_level).setBackground(`https://i.pinimg.com/564x/76/94/3a/76943a096e799de91140ec4563c4b4fc.jpg
            `).setAddon("Rank",false).toAttachment()).toBuffer()}]});
    
        }}
    
        });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if (!((s4dmessage.author).bot)) {
    
            /*
            Anti-spam xp system
            */
           if (message_per_minute == 0 || message_per_minute == null) {
          message_cooldown = (Math.floor(new Date().getTime()/1000)) + 60;
          console.log(message_cooldown);
        }
        if (message_cooldown > (Math.floor(new Date().getTime()/1000))) {
          message_per_minute = (typeof message_per_minute === 'number' ? message_per_minute : 0) + 1;
          if (message_per_minute > 15) {
            return
          }
        } else if (message_cooldown <= (Math.floor(new Date().getTime()/1000))) {
          message_per_minute = 0;
        }
        console.log(message_per_minute);
        db_xp = [(s4dmessage.author).id,'-',(s4dmessage.guild).id,'-xp'].join('');
        db_level = [(s4dmessage.author).id,'-',(s4dmessage.guild).id,'-level'].join('');
    
            /*
            Actual leveling system
            */
           if (!levels.has(String(db_xp))) {
          levels.set(String(db_xp), 0);
        } else if (!levels.has(String(db_level))) {
          levels.set(String(db_level), 0);
        }
        member_xp = levels.get(String(db_xp));
        member_level = levels.get(String(db_level));
        member_xp = (typeof member_xp === 'number' ? member_xp : 0) + mathRandomInt(10, 25);
        levels.set(String(db_xp), member_xp);
        // Example:
        // XP needed for level 2: 2 x 2 x 100 = 400 (xp)
        //
        if (member_xp > (member_level + 1) * (member_level + 1) * 100) {
          member_level = member_level + 1;
          member_xp_needed = (member_level + 1) * (member_level + 1) * 100 - member_xp;
          s4dmessage.channel.send({content:String((['Congrats ',s4dmessage.author,', you\'ve leveled up to ',member_level,'. You need ',member_xp_needed,' xp to get to level ',member_level + 1].join('')))});
          levels.set(String(db_level), member_level);
        }
      }
    
    });
    
    return s4d
})();
