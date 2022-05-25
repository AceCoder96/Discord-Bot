const keepAlive = require("./server")
const Database = require("@replit/database")
// const { Client } = require('discord.js');
// disbut(client);

// const { Intents, Client } = require('discord.js')
// const client = new Client({
  // intents: [
    // Intents.FLAGS.GUILDS,
    // Intents.FLAGS.GUILD_MESSAGES
  // ]
// })
const 	Discord = require('discord.js'),
		disbut = require('discord-buttons');


const client = new Discord.Client(); 
disbut(client);

const { Intents, Client } = require('discord.js')


const oldStateMap = new Map();

const db = new Database()
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
const command = require('./command')
const bot = new Discord.Client({disableEveryone: true});

const { MessageEmbed, MessageAttachment } = require('discord.js')

// const client = new Discord.Client({
//   intents: [
//       Discord.Intents.FLAGS.GUILDS,
//       Discord.Intents.FLAGS.GUILD_MESSAGES
//   ]
// });

// const client = new Discord.Client({intents: []});


const config = require("./config.json");


// const button = require("./button.js");


client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  // client.user.setActivity(`Down for maintenance, please bear with us.`);
  const chn = client.channels.cache.get('863047963031109703');
  const a = chn.send(`New guild joined: **${guild.name}** (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);

  const chn = client.channels.cache.get('863047963031109703');
  const a = chn.send(`I have been removed from: **${guild.name}** (id: ${guild.id})`);
});

 

client.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels.cache;

    channelLoop:
    for (let key in channels) {
        let c = channels[key];
        if (c[1].type === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
    channel.send(`Hi, <@${guild.owner.user.id}>! I believe you are the kickass owner of **${guild.name}**, thank you for having me here. Use !halp command to know more about me. :>`);
});

client.on("message", async message => {
  
  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  if(command === "ping") {
    
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
   


  if(command === "sayace") { 
    
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

  if(command === "dm") { 

		if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You don't have the permissions to use the command in this server.")
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
		if(!user) return message.channel.send(`You did not mention a user, or you gave an invalid id.`);
		if(!args.slice(1).join(" ")) return message.channel.send("You did not specify a message to be sent to the user.");
		user.user.send(args.slice(1).join(" ")).catch(() => message.channel.send("That user could not be DM'ed")).then(() => message.channel.send(`Sent your message to ${user.user.username}.`));
    }

    if(command === "feedback") { 

		const user = client.users.cache.get('245246594314665984')
    const chn = client.channels.cache.get('861295332767301703')
  
    const sayMessage = args.join(" ");

		if(!sayMessage) return message.channel.send("Please enter your feedback to be sent.");
    
    else { 

      const b = message.channel.send(`Your feedback has been recorded. Thank you for your input, mate.`);
      const c = chn.send(`Feedback from (${message.author}) **${message.author.username} **: ${sayMessage}.`)

    }

  
}

  
  

   if(command === "spam") {
		let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
		if(!user) return message.channel.send(`You did not mention a user to be spammed.`);
		if (user.user.id === "245246594314665984") return message.channel.send("HAHA, no.")
		if (user.user.id === "839522956312444948") return message.channel.send("No.")
    if (message.author.id === "745968636065218591") return message.channel.send("You can't use this command anymore because you are way too annoying, buzz off!")
    if (message.author.id === "336898324835598336") return message.channel.send("You have exceeded the number of times you can spam somebody in one million lifetimes.")
		
    else {
    message.channel.startTyping();
    message.channel.send(`Spamming... <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}> <@${user.user.id}>.`);
    }
    message.channel.stopTyping();
    }
  if(command === "info") {
    var guild = message.guild
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    const embed = new Discord.MessageEmbed()
    .setAuthor(guild.name, guild.iconURL())
    .addField("Name", guild.name, true)
    .addField("ID", guild.id, true)
    .addField("Owner", `${guild.owner.user.username}#${guild.owner.user.discriminator}`, true)
    .addField("Total | Humans | Bots", `${guild.members.cache.size} | ${guild.members.cache.filter(member => !member.user.bot).size} | ${guild.members.cache.filter(member => member.user.bot).size}`, true)
    .addField("Channels", guild.channels.cache.size, true)
    .addField("Roles", guild.roles.cache.size, true)
    .addField("Verification Level", message.guild.verificationLevel, true)
    .addField("MFA Level", guild.mfaLevel, true)
    .addField("Creation Date", `${message.guild.createdAt.toDateString()}`, true)
    .setThumbnail(guild.iconURL())

    .setFooter('Copyright © 2021,\ Ace Bot. All rights reserved.', 'https://media.discordapp.net/attachments/839523685912018947/859131487206113290/bot.png?width=164&height=164')
    .setTimestamp();
    message.channel.send(embed)
  }

  if(command === "panik") {
   
    const { member, mentions } = message
    const tag = `<@${member.id}>`
   
    const sayMessage = args.join(" ");
    const sayMessag = sayMessage.toUpperCase();
    //;
    const words = [
    'https://gfycat.com/conventionalaggressivedeviltasmanian',
    'https://gfycat.com/leadingcleargrayfox',
    'https://www.reactiongifs.us/wp-content/uploads/2018/07/IJnxZ3w.gif',
    'https://media.giphy.com/media/xT5LMVOuzD2vnQRvRS/giphy.gif',
    'https://media.giphy.com/media/UTw9wnoyP8Pcs/giphy.gif',
    'https://media.giphy.com/media/1qfKUnnWlaCfa0tq1d/giphy.gif',
    'https://media.giphy.com/media/L2wfaqVluXNOqwWNne/giphy.gif',
    'https://i.gifer.com/UReM.gif',
    'https://i.gifer.com/2GU.gif',
    'https://i.gifer.com/Nihi.gif',
    'https://i.gifer.com/27zv.gif',
    'https://media.giphy.com/media/HB03yGK1u1aYo/giphy.gif',
    'https://media.giphy.com/media/KmTnUKop0AfFm/giphy.gif',

    'https://media.giphy.com/media/yCaTRnb22xToY/giphy.gif',
      
    'https://media.giphy.com/media/3oz8y0bVTop31FYeZO/giphy.gif',
    
    'https://media.giphy.com/media/3o6Mbrzh9gP7ii8srC/giphy.gif',
      'https://media.giphy.com/media/l2Je6MAUX2EOSxyqk/giphy.gif',

      'https://media.giphy.com/media/3o6MbqQdDFPRAqvROE/giphy.gif',

      'https://media.giphy.com/media/ixYRj3H9HOzWE/giphy.gif',

      'https://media.giphy.com/media/18B36LZSbvGM0/giphy.gif',
      
      'https://media.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif',

      'https://media.giphy.com/media/xT5LMv81HGyoB3fTkQ/giphy.gif',

      'https://media.giphy.com/media/3orifc2wGbyhc8HI9W/giphy.gif',

      'https://media.giphy.com/media/xT5LMPFTSOpRyWaJ20/giphy.gif',


      'https://media.giphy.com/media/xT5LMX31WwcQmzp4dy/giphy.gif',


      'https://media.giphy.com/media/l0G18Sh1aw5vPMZ44/giphy.gif'
    ]
    let mywords = words[Math.floor(Math.random() * words.length)]
    
    if (!sayMessage) return message.channel.send(` Specify a location, you dummy ${tag}.`);


    else {
    message.channel.startTyping();
    const m = message.channel.send(" @here PANIK!! " + tag + " needs backup at **" + sayMessag + "!**")
    const n = message.channel.send(mywords)
    const r = message.channel.stopTyping(); }
    }

    


  if (command === "asl") {
    let [age, sex, location] = args;
    message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
    }
  if (command === "multiply") {
    let [number1, number2] = args;
    let product = [number1 * number2]
    if (number2) {
    message.reply(`${number1} * ${number2} = ${product}. `);}
    else {
      message.reply('Usage: !multiply [Number 1] [Number 2]');}
    }
  
  if (command === "subtract") {
    let [number1, number2] = args;
    let sub = [number1 - number2]
    if (number2) {
    message.reply(`${number1} - ${number2} = ${sub}. `);
    }
    else {
      message.reply('Usage: !subtract [Number 1] [Number 2]');}
    }

  
  if (command === "add") {
    let [number1, number2] = args;
    let result1 = parseInt(number1);
    let result2 = parseInt(number2);
    let sum = [result1 + result2];
    if (number2) {
    message.reply(`${number1} + ${number2} = ${sum}. `);
    }
    else {
      message.reply('Usage: !add [Number 1] [Number 2]');}
    }

  if (command === "heroin") {
    let [amount] = args;
    let division = [amount * 83]
    if (amount) {
    message.reply(`That would be $${division}. `);}
    else {
      message.reply(`!heroin [The amount you got]`)
    }
  }
  if (command === "weed") {
    let [amount] = args;
    let division = [amount * 80]
    if (amount) {
    message.reply(`That would be $${division}. `);}
    else {
      message.reply(`!weed [The amount you got]`)
    }
  }
  if (command === "meth") {
    let [amount] = args;
    let division = [amount * 83]
    if (amount) {
    message.reply(`That would be $${division}. `);}
    else {
      message.reply(`!meth [The amount you got]`)
    }
  }
  if (command === "divide") {
    let [number1, number2] = args;
    let division = [number1 / number2]
    if (number2) {
    message.reply(`${number1} / ${number2} = ${division}. `);}
    else {
      message.reply('Usage: !divide [Number 1] [Number 2]');}
    }

  if (command === "square") {
    let [number1] = args;
    let square = [number1 * number1]
    if (number1) {
    message.reply(`The square of ${number1} is ${square}. `);}
    else {
      message.reply('Usage: !square [Number]');}
    }
  if (command === "invite") {
    const inviteembed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setAuthor('Ace Bot by @Nicest#8128.','https://imgur.com/Bzmskv1','https://acebot.ace01234.repl.co/index.html',
       )
      .addField(':fire: INVITE LINK', `https://bit.ly/3dpyp7Y`, true)	    
      .setTimestamp(Date())
     
    message.author.send(inviteembed)
    message.reply("Check your DM's buddy.")
  }
  
  if (command === "cube") {
    let [number1] = args;
    let cube = [number1 * number1 * number1]
    if (number1) {
    message.reply(`The cube of ${number1} is ${cube}. `);}
    else {
      message.reply('Usage: !cube [Number]');}
    }
  if (command === "created") {
    message.channel.send('This server was created on: ' + message.guild.createdAt.toDateString());
}
  if (command === "root") {
    let [number1] = args;
    let root = Math.sqrt(number1);
    if (number1) {
    message.reply(`The square root of ${number1} is ${root}. `);}
    else {
      message.reply('Usage: !root [Number]');}
    }

    
  if (command === 'define') {
    const querystring = require('querystring');
		if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}

		const query = querystring.stringify({ term: args.join(' ') });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
			.then(response => response.json());
    // message.channel.send(list[0].definition);
     if (!list.length) {
		 return message.channel.send(`No results found for **${args.join(' ')}**.`);}
    else {
      const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

      const [answer] = list;
      const embed = new MessageEmbed()
        
        .setColor('#EFFF00')
        .setTitle(answer.word.charAt(0).toUpperCase() + answer.word.slice(1))
        .setURL(answer.permalink)
        .setThumbnail('https://cdn.discordapp.com/attachments/870678058166812743/870690820569833512/pngwing.com_5.png')
        .setAuthor('Ace Bot by @Nicest#8128.','https://cdn.discordapp.com/attachments/870678058166812743/870685143109615626/bot.png','https://acebot.ace01234.repl.co/index.html',
                )
        .addFields(
          { name: 'Definition', value: trim(answer.definition, 1024) },
          { name: 'Example', value: trim(answer.example, 1024) },
          //{ name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
        )
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`)
        

      message.channel.send(embed);
      }
  }
  	

    
  		
	if (command === 'tm') {
	

			run: async (client, message, args) => {
				const embed = new MessageEmbed()
				.setTitle("Test Embed")
				.setDescription("This is a test embed")
				.setColor("BLACK")
				.setFooter({ text: `Test Embed` })

				const row = new MessageActionRow().addComponents(
					new MessageButton()
					.setLabel("Button 1")
					.setStyle("SUCCESS") //green button
					.setCustomId("button1"), //this is very much required!

					new MessageButton()
					.setLabel("Button 2")
					.setStyle("DANGER") //red button
					.setCustomId("button2") //this is very much required!
				)

				return message.channel.send({ embeds: [embed], components: [row] })
				}
			}

			
    if(command === "8ball") {

    const { member, mentions } = message
    const tag = `<@${member.id}>`
   
    const sayMessage = args.join(" ");
    const sayMessag = sayMessage.toUpperCase();
    //;
    const words = [ 
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"]
    let mywords = words[Math.floor(Math.random() * words.length)]
    
    
    if (!sayMessage) return message.channel.send(`Usage: !8ball [Question]`);

    
    else {
    const n = message.channel.send(`${mywords}, **${message.author.username}**.`)}}
    
  
    
  if (command === 'cat') {
		const { link } = await fetch('https://some-random-api.ml/img/cat').then(response => response.json());
    const { fact } = await fetch('https://some-random-api.ml/facts/cat').then(response => response.json());
    message.channel.send(fact);
		message.channel.send(link);
    
	}
  if (command === 'koala') {
		const { link } = await fetch('https://some-random-api.ml/img/koala').then(response => response.json());
    const { fact } = await fetch('https://some-random-api.ml/facts/koala').then(response => response.json());
    message.channel.send(fact);
		message.channel.send(link);
    
	}
  if (command === 'dog') {
		const { link } = await fetch('https://some-random-api.ml/img/dog').then(response => response.json());
    const { fact } = await fetch('https://some-random-api.ml/facts/dog').then(response => response.json());
    message.channel.send(fact);
		message.channel.send(link);
    
	}
  if (command === 'panda') {
		const { link } = await fetch('https://some-random-api.ml/img/panda').then(response => response.json());
    const { fact } = await fetch('https://some-random-api.ml/facts/panda').then(response => response.json());
    message.channel.send(fact);
		message.channel.send(link);
    
	}
  if (command === 'fox') {
		const { link } = await fetch('https://some-random-api.ml/img/fox').then(response => response.json());
    const { fact } = await fetch('https://some-random-api.ml/facts/fox').then(response => response.json());
    message.channel.send(fact);
		message.channel.send(link);
    
	}
		if (command === 'tm') {
	

			run: async (client, message, args) => {
				const embed = new MessageEmbed()
				.setTitle("Test Embed")
				.setDescription("This is a test embed")
				.setColor("BLACK")
				.setFooter({ text: `Test Embed` })

				const row = new MessageActionRow().addComponents(
					new MessageButton()
					.setLabel("Button 1")
					.setStyle("SUCCESS") //green button
					.setCustomId("button1"), //this is very much required!

					new MessageButton()
					.setLabel("Button 2")
					.setStyle("DANGER") //red button
					.setCustomId("button2") //this is very much required!
				)

				return message.channel.send({ embeds: [embed], components: [row] })
				}
			}
  if (command === "halp") {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Visit our site for more info!')
    .setURL('https://acebot.ace01234.repl.co/index.html')
    .setImage('https://media.discordapp.net/attachments/839523685912018947/859131487206113290/bot.png?width=164&height=164')
    .setAuthor('Ace Bot by @Nicest#8128.','https://imgur.com/Bzmskv1','https://acebot.ace01234.repl.co/index.html',
                )
    
    .setThumbnail('https://cdn.discordapp.com/attachments/870678058166812743/870691992542273656/pngwing.com_6.png')
    .addFields(
      { name: '➼ Home:', value: 'https://acebot.ace01234.repl.co/index.html', inline: false },
      { name: '➼ Commands:', value: ' https://acebot.ace01234.repl.co/commands.html' },
      { name: '➼ FAQs:', value: ' https://acebot.ace01234.repl.co/faqs.html' },
      { name: '➼ Invite link:', value: 'https://bit.ly/3dpyp7Y', inline: false },
      
    )
    .setImage('https://media.discordapp.net/attachments/839523685912018947/861510690660679710/Screenshot_10.png?width=427&height=283')
    .setTimestamp()
    .setFooter('Copyright © 2021, Ace Bot. All rights reserved.', 'https://media.discordapp.net/attachments/839523685912018947/859131487206113290/bot.png?width=164&height=164');

  message.channel.send(exampleEmbed)}

  if(command === "beep") {
    message.channel.send("Beep").then((sentMessage) => sentMessage.edit("Boop!"))
  }
  


  if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if (command === 'updates') {
    const embed = new MessageEmbed()
      .setAuthor('Ace Bot by @Nicest#8128.','https://cdn.discordapp.com/attachments/870678058166812743/870685143109615626/bot.png','https://acebot.ace01234.repl.co/index.html',
               )
      .setColor('#EFFF00')
      .setTitle('Ace-Bot 1.5.2')
      .setURL('https://acebot.ace01234.repl.co/commands.html')
      .setThumbnail('https://cdna.artstation.com/p/assets/images/images/009/951/140/large/hugo-vuillemin-robot-002.jpg?1521737464')
      .addFields(
        { name: '!8ball [Question]', value: 'Returns a random response to agree or disagree with your opinion.'},
        { name: '!define [word]', value: 'Returns the Urban Dictionary defintion of the word supplied' },
        { name: '!dm [@User] [Message]', value: 'Sends a dm to the mentioned user without mentioning your name.' },
        { name: '!rps [rock | paper | scissors]', value: 'A pretty  simple rock, paper, scissors game.' },
        { name: '!feedback', value: 'Sends your feedback to the developer.'},
        { name: '!kik', value: 'Kicks the mentioned user from the guild.'},
        { name: '!ben', value: 'Bans the mentioned user from the guild.'},
        {name: '!add, !subtract, multiply, !divide', value: 'Returns the mathematical results.'},
        {name: '!insult [@User]', value: 'Returns a random insult to the mentioned user.'},
        {name: '!spam [@User]', value: 'Spams the shit out of the tagged user.'}
        )
      .setImage('https://media.discordapp.net/attachments/839523685912018947/861506442912727040/595980.jpg?width=607&height=342')
      .setTimestamp()
      .setFooter('Copyright © 2021,\ Ace Bot. All rights reserved.', 'https://media.discordapp.net/attachments/839523685912018947/859131487206113290/bot.png?width=164&height=164');

    message.channel.send(embed);
      }

  

  

	

      

	
  
  if(command === "purge") {
    
    const deleteCount = parseInt(args[0], 10);
   
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}
} );


// client.on("presenceUpdate", (oldMember, newMember) => {

// const serverID = '740986911983796234'

//   var memberCount = client.guilds.cache.get(serverID).memberCount;
//   //var online = client.guilds.cache.get(serverID).members.cache.filter(m => m.presence.status === 'online').size;
//  // var offline = client.guilds.cache.get(serverID).members.cache.filter(m => m.presence.status === 'offline').size;
//   //console.log(`Online: ${online}, Offline: ${offline}, Total: ${memberCount}`);
//   client.channels.cache.get('897879322671587328').setName(`Members: ${memberCount}`);
//  // client.channels.cache.get('897879322914861106').setName(`Online: ${online}`);
//   //client.channels.cache.get('897879409749536838').setName(`Offline: ${offline}`);

// });


client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`); 


// const channelId = '897872518000558121'

//   const updateMembers = (guild) => {
//     const channel = guild.channels.cache.get(channelId)
//     channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
//   }

//   client.on('guildMemberAdd', (member) => updateMembers(member.guild))
//   client.on('guildMemberRemove', (member) => updateMembers(member.guild))

//   const guild = client.guilds.cache.get('839523685912018944')
//   updateMembers(guild)

client.on("interactionCreate", async(interaction) => {
	if(interaction.customId == "button1") {
	  interaction.reply("You clicked the button 1!")
	} else if(interaction.customId == "button2") {
	  interaction.reply("You clicked the button 2!")
	}
  })

const activities = [
  "!halp command.",
  "703 users.",
  `${client.guilds.cache.size} servers`,
  "!updates for new commands.",
  "!halp for more info.",
  "Ace Bot v1.5.2",
  "!invite for invite link.",
  "!feedback [Message]",
  "Nicest#8128."
];
  setInterval(() => {
    
    const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
    const newActivity = activities[randomIndex];

    client.user.setActivity(newActivity, {type: "STREAMING", url:"https://twitch.tv/Strandable"});
  }, 3000)

  // client.user.setActivity("!updates for new commands, !halp for more info!", {type: "STREAMING", url:"https://twitch.tv/Strandable"});
  
  // command(client, 'kik', (message) => {
  //   const { member, mentions } = message

  //   const tag = `<@${member.id}>`
  //   const sayMessage = message.content

  //   if ( 
  //     member.hasPermission('ADMINISTRATOR') ||
  //     member.hasPermission('KICK_MEMBERS')
  //   ) {
  //     const target = mentions.users.first()
  //     if (target) {
  //       const targetMember = message.guild.members.cache.get(target.id)
  //       targetMember.kick()
  //       message.channel.send(`${tag} That user has been kicked.`)
  //     } else {
  //       message.channel.send(`${tag} Please specify someone to kick.`)
  //     }
  //   } else {
  //     message.channel.send(
  //       `${tag} You do not have permission to use this command.`
  //     )
  //   }
    
  // })


  // command(client, 'ben', (message) => {
  //   const { member, mentions } = message

  //   const tag = `<@${member.id}>`
  //   const sayMessage = message.content

  //   if (
  //     member.hasPermission('ADMINISTRATOR') ||
  //     member.hasPermission('BAN_MEMBERS')
  //   ) {
  //     const target = mentions.users.first()
  //     if (target) {
  //       const targetMember = message.guild.members.cache.get(target.id)
  //       targetMember.ban()
  //       message.channel.send(`${tag} That user has been banned.`)
  //     } else {
  //       message.channel.send(`${tag} Please specify someone to ban.`)
  //     }
  //   } else {
  //     message.channel.send(
  //       `${tag} You do not have permission to use this command.`
  //     )
  //   }
  // })

  command(client, 'insult', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`
    const words = [
     "is a lamentably inept heathen and a malodorous bug-eyed malodorous heathen.",
     "is a devilishly loathsome ninny and a gaudy halitosis-infested cause of wailing and gnashing of teeth.",
     "you devilishly dissolute barbarian and a gross bug-eyed blight upon society.",
     "is a deucedly repugnant degenerate and a flagrant blood-freezing malfunctioning little twerp.",
     "is a precociously foolish yokel and a putrid blood-freezing abomination to all the senses.",
     "is an egregiously offensive sloven and a decadent flesh-creeping proof that evolution can go in reverse.",
     "is an unutterably demented mouth breather and a myopic gossip-mongering nefarious vermin.",
     "is a lamentably lascivious sneak and a gross nostril-offending lamentable mistake by his parents.",
     "you are an unutterably witless sycophant and a decrepit bug-eyed piece of excrement attached to a dogs posterior.",
     "is a deucedly petty malefactor and a fiendish coma-inducing leach on humanity.",
     "is a conspicuously execrable dingleberry and a villainous acidly acrimonious toll on the nerves of those with good taste and decency.",
     "is a monstrously witless ignoramus and a fecal thick-headed parasite on the states resources.",
     "you are wickedly bantering sycophant and a dastardly maliciously malodorous malfunctioning little twerp.",
     "is a frightfully uncouth sycophant and a rotten all-befouling pulp of stultifying inanity.",
     "is a lamentably cretinous hemorrhoid and a monstrous chronically flatulent wretched horror to all who encounter you.",
     "is a piteously salacious simpleton and a malingering small-minded leaking carbuncle on the posterior of a Beauty Queen.",
     "is a piteously salacious simpleton and a malingering small-minded leaking carbuncle on the posterior of a Beauty Queen.",
     "is a miserably lecherous twit and a gross odiously suffocating tasteless amalgam of dross.",
     "is a dreadfully hideous libertine and a maniacal thick-headed gruesome vista to all eyes assaulted by the sight of you.",
     "is a piteously backward subhuman and a myopic maliciously malodorous nauseating assault on the senses.",
     "is an unconscionably repugnant dolt and a nefarious chronically flatulent assault on the ocular senses.",
     "is a miserably dissolute ignoramus and a depraved nostril-offending excrement stain on a Sumo Wrestlers underpants.",
     "is a cruelly vile dingleberry and a vapid air-polluting offense to all of good taste and decency."
      ]
    
    let mywords = words[Math.floor(Math.random() * words.length)]
    
    const target = mentions.users.first()
   
    if (!target) {
      message.channel.send(`${tag} all you had to do was to combine two words and you couldn't even do that right.`)
    } 
    else if (target.id === '245246594314665984') {
      message.channel.send(`${tag} ${mywords} (UNO reverse card)`);}
    
    else if (target.id === '839522956312444948') {
      message.channel.send(`${tag} I've got no flaws, I can not be insulted.`)
    } 
      
    else {
      message.channel.send(`${target} ${mywords}`)
    } 
    // else if (!target) {
    //   message.channel.send(`${tag} all you had to do was to combine two words and you couldn't even do that right.`)
    // } 
    })

  
  command(client, 'triggered', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`
    const sayMessage = message.content

    
    const target = mentions.users.first()
    if (target) {
      
      const targetMember = message.guild.members.cache.get(target.id)
      const link = `https://some-random-api.ml/canvas/triggered/?avatar=${target.avatarURL({ format: 'png' })}`;
      const attachment = new MessageAttachment(link, 'triggered.gif');
      
      const embed = new MessageEmbed()
      .setTitle(`Triggered ${target.username}.`)
      .attachFiles(attachment)
      .setImage('attachment://triggered.gif')
    message.channel.send(embed);
    }
      
    else {
      const link = `https://some-random-api.ml/canvas/triggered/?avatar=${message.author.avatarURL({ format: 'png' })}`;
      const attachment = new MessageAttachment(link, 'triggered.gif');
      //let attachment = new MessageAttachment(link, 'triggered.gif');
      const embed = new MessageEmbed()
      .setTitle(`Triggered ${message.author.username}.`)
      .attachFiles(attachment)
      .setImage('attachment://triggered.gif')
    message.channel.send(embed);
    }
      
  })
  command(client, 'listguilds', (message) => {  

      if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You don't have the permissions to use the command.")
      else {
        let clientGuilds = message.client.guilds.cache;
        let messageObj = Discord.Util.splitMessage(
            clientGuilds.map(g => '\`' + g.id + `\` **|** \`` + g.name + `\` **|** \`` + g.members.cache.size + '\`') || 'None'
        );
        if (messageObj.length == 1) {
            message.channel.send(messageObj[0]);
        } else {
            for (i = 0; messageObj.length < i; i++) {
                message.channel.send(messageObj[i]);
            }
        }
    }
    })
  command(client, 'wasted', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`
    const sayMessage = message.content

    // if (
    //   member.hasPermission('ADMINISTRATOR') ||
    //   member.hasPermission('KICK_MEMBERS')
    // ) {
    
    const target = mentions.users.first()
    if (target) {
      
      const targetMember = message.guild.members.cache.get(target.id)
      const link = `https://some-random-api.ml/canvas/wasted/?avatar=${target.avatarURL({ format: 'png' })}`;
      const attachment = new MessageAttachment(link, 'wasted.gif');
     
      const embed = new MessageEmbed()
      .setTitle(`Wasted ${target.username}.`)
      .attachFiles(attachment)
      .setImage('attachment://wasted.gif')
    message.channel.send(embed);
    }
      
    else {
      const link = `https://some-random-api.ml/canvas/wasted/?avatar=${message.author.avatarURL({ format: 'png' })}`;
      const attachment = new MessageAttachment(link, 'wasted.gif');
      
      const embed = new MessageEmbed()
      .setTitle(`Wasted ${message.author.username}.`)
      .attachFiles(attachment)
      .setImage('attachment://wasted.gif')
    message.channel.send(embed);
    }
      
    // } else {
    //   message.channel.send(
    //     `${tag} You do not have permission to use this command.`
    //   )
    // }
  })
  })





bot.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

bot.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 10) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.cache.find(channel => channel.name === "general").send("Welcome our new users!\n" + userlist);
    newUsers[guild.id].clear();
  }
});

bot.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});



client.on('message', message => {
    if (message.content === "/avatar") {
    const embed = new RichEmbed()
    .setTitle('Avatar!')
    .setAuthor("Your Avatar", message.author.avatarURL)
    .setImage(message.author.avatarURL)
    .setColor('RANDOM')
    .setDescription('Avatar URL')
   message.reply(embed)
  }
});

// client.on(client, message, args => {
// const Discord = require("discord.js");
// const ms = require("ms")
// module.exports = {
//   name: "hack",
//   aliases: ["hax"],
//   run: async(client, message, args) => {
//     const hacked = message.mentions.users.first();
//     const user = message.mentions.users.first();
//     if(user == client.users.cache.get(message.author.id))
//     {
//       return message.channel.send(" ok, You are hacked Pick someone else")
//     }
//             function wait(ms){
//             let start = new Date().getTime();
//             let end = start;
//             while(end < start + ms) {
//               end = new Date().getTime();
//            }
//          }

// if(!user)
// {
//   return message.reply("Who to hack? Please Mention him");
// }
// const prompt = await message.channel.send(`Hacking ${user ? hacked.username : hacked} now...`);
    
//    await wait(2700);
//      await  prompt.edit('Finding discord login...');
//      await wait(2700);
//      await  prompt.edit(`Found:\n**Email**: \`${hacked.username}***@gmail.com\`\n**Password**: \`*******\``);
//      await  wait(3700);
//      await  prompt.edit('Fetching dms');
//      await  wait(3700);
//      await prompt.edit('Listing most common words...');
//      await  wait(2700);
//      await  prompt.edit(`Injecting virus into discriminator #${hacked.discriminator}`);
//     await  wait(3700);
//      await  prompt.edit('Virus injected');
//      await  wait(3700);
    
//    await prompt.edit('Finding IP address');
//     await wait(5000);
//    await  prompt.edit('Spamming email...');
//    await wait(6700);
//    await  prompt.edit('Selling data to facebook...');
//   await   wait(3700);
//   let embed = new Discord.MessageEmbed()
//   .setDescription(`Hack of ${user ? hacked.username : hacked} is just completed`)
//   .setImage("https://media1.tenor.com/images/5ba5501d9ee356cc0c478daa57306c19/tenor.gif?itemid=20964053");
//   await prompt.delete
//    await  message.channel.send(embed);
    

//   }
// }})


const prefix = '!';
client.on('message', message => {

    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'rps') {
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);

        switch (choice) {
            case 'rock': {

                if (result === 'paper') return message.channel.send(`**__Rock__** 🪨 , **__Paper__** 📃 , **__Scissors__** ✂️ : \nYour choice: 🪨\nMy Choice: 📃\n**I won**! ${message.author}`); 
                else if (result === 'scissor') message.channel.send(`**__Rock__** 🪨 , **__Paper__** 📃 , **__Scissors__** ✂️️️ :\nYour choice: 🪨\nMy Choice: ** ✂️**\n**You won! ${message.author}**`);
                else return message.channel.send(`**__Rock__** 🪨 , **__Paper__** 📃 , **__Scissors__** ✂️ :\nYour choice: 🪨 \nMy Choice: 🪨\n**It's a tie!** ${message.author}, We had the same choice.`);
            
            }   

            
            case 'paper': {

               if (result === 'scissors') return message.channel.send(`**__Rock__** 🪨 , **__Paper__** 📃 , **__Scissors__** ✂️️ : \nYour choice: 📃\nMy Choice: ✂️\n**I won**! ${message.author}`); 
                else if (result === 'rock') message.channel.send(`**__Rock__** 🪨 , **__Paper__** 📃 , **__Scissors__** ✂️️️ :\nYour choice: 🪨\nMy Choice: ** ✂️**\n**You won! ${message.author}**`);
                else return message.channel.send(`**__Rock__** 🪨 , **__Paper__** 📃 , **__Scissors__** ✂️ :\nYour choice: 📃 \nMy Choice: 📃\n**It's a tie!** ${message.author}, We had the same choice.`);


              }


            case 'scissors': {
                if (result === 'rock') return message.channel.send(`**__Rock__** 🪨 , **__Paper__** 📃 , **__Scissors__** ✂️ : \nYour choice: ✂️\nMy Choice: 🪨\n**I won**! ${message.author}`); 
                else if (result === 'paper') message.channel.send(`**__Rock__** 🪨 , **__Paper__** 📃 , **__Scissors__** ✂️️️ :\nYour choice: ✂️\nMy Choice: ** 📃**\n**You won! ${message.author}**`);
                else return message.channel.send(`**__Rock__** 🪨 , **__Paper__** 📃 , **__Scissors__** ✂️ :\nYour choice: ✂️ \nMy Choice: ✂️\n**It's a tie!** ${message.author}, We had the same choice.`);
            }

            default: {
                return message.channel.send(`You dummy, Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
        }
    }
});
//const dm = require("./dm.js")


    setInterval(() => {
        const pfps = [
            "https://i.pinimg.com/originals/11/50/50/115050635187fcd9f151e9b81ae9867c.jpg",
            "https://wallpaperaccess.com/full/1673069.jpg",
            "https://i.ytimg.com/vi/ULshNXLLHP0/hqdefault.jpg",
            "https://cdna.artstation.com/p/assets/images/images/009/951/140/large/hugo-vuillemin-robot-002.jpg?1521737464",
            "https://talks.florian-rappl.de/BotFramework/pictures/cover.jpg",
            "https://i.pinimg.com/originals/7c/76/09/7c7609b69a1f529a22fb0a367476c743.jpg",
            "https://cdn.wallpapersafari.com/8/39/rqhBaS.jpg",
            "https://media.discordapp.net/attachments/839523685912018947/866641784377835520/bot.png?width=164&height=164",
            "https://cdn.wallpapersafari.com/81/68/szm5fh.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSBoJqBe2fLhQ2l3enspxVtsF1KBtrcJhK5tr8IdAUle7hIihl83_a9bmsdKURMmeJoo&usqp=CAU",
            "https://c4.wallpaperflare.com/wallpaper/552/402/446/celldweller-end-of-an-empire-throne-sci-fi-wallpaper-preview.jpg",
            "https://c4.wallpaperflare.com/wallpaper/513/1024/979/mechanism-robot-hand-cyborg-hd-wallpaper-preview.jpg",
            "https://cdna.artstation.com/p/assets/images/images/006/857/624/large/stefan-celic-sc-soldier.jpg?1501766707",

        ]

        let final;
        final = pfps[Math.floor(Math.random() * pfps.length)] // randomizing pfps

        client.user.setAvatar(final) // setting randomized pfp
    }, 1800000);


client.on('messageDelete', async message => {
	// Ignore direct messages
	if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
	const deletionLog = fetchedLogs.entries.first();

	if (!deletionLog) return console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

	const { executor, target } = deletionLog;

	if (target.id === message.author.id) {
		console.log(`A message by ${message.author.tag} was deleted by ${executor.tag}.`);
	} else {
		console.log(`A message by ${message.author.tag} was deleted, but we don't know by who.`);
	}
});


client.on('messageDelete', message => {
  var guild = message.guild
    if(!message.partial) {
        const channel = client.channels.cache.get('870678058166812743');
        if(channel) {
            const embed = new MessageEmbed()
                .setTitle('Deleted Message')
                .setColor('FF0000')
                .setURL('https://acebot.ace01234.repl.co/index.html')
                .setThumbnail('https://thumbs.dreamstime.com/b/recycle-bin-icon-isolated-black-background-trash-can-icon-recycle-bin-icon-isolated-black-background-trash-can-icon-simple-161242736.jpg')
                .setAuthor(guild.name, guild.iconURL())
                //.setAuthor('Ace Bot by @Nicest#8128.','https://cdn.discordapp.com/attachments/870678058166812743/870685143109615626/bot.png','https://acebot.ace01234.repl.co/index.html',
                //)
                .addField('Author: 🖊️', `${message.author.tag} `, false)
                .addField('Channel: 📺', `${message.channel.name} `, false)
                .addField('Server: 🔍', `${message.guild.name}  `, false)

                .setDescription(message.content)
                .setFooter('Copyright © 2021,\ Ace Bot. All rights reserved.', 'https://media.discordapp.net/attachments/839523685912018947/859131487206113290/bot.png?width=164&height=164')
                .setTimestamp();
            channel.send(embed);
        }
    }
});


client.on("messageCreate", async message => {
        if(message.guild){
            let channels = [ { id: "882339000315174923", delay: 15000 } ] //client.setups.get(message.guild.id, "autodelete")
            if(channels && channels.some(ch => ch.id == message.channel.id) && message.channel.type == "GUILD_TEXT" && message.channel.rateLimitPerUser && message.channel.rateLimitPerUser >= 2){
                setTimeout(() => {
                    try { 
                        if(!message.deleted) {
                            message.delete().catch(e=>{console.log(e);})
                        }
                    } catch(e){ console.log(e); }
                }, channels.find(ch => ch.id == message.channel.id).delay || 30000)
            }
        }
    })



let y = process.openStdin()
 y.addListener("data", res => {
   let x = res.toString().trim().split(/ +/g)
   client.channels.cache.get("881159166914330644").send(x.join(" "));
 });









// const config = {
//     token: "ODQwNTE5OTgzNDM5ODA2NDY1.YJZZPA.a19eD9ekdIcn111w6MFrbcXTCgo",
//     prefix: "!",
// 	adminID: "245246594314665984",
// 	embed_color: "#ffffff"
// };

client.on('ready', () => {
});

client.on('message', (message) => {

    if (message.author.bot || message.channel.type != "text") return;
    if (!message.content.startsWith(config.prefix)) return;
	
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift();

	if (command == "test") {

		for (var i = 1; i < 1000; i++) {
			const btn1 = new disbut.MessageButton()
				.setStyle('url')
				.setLabel('0') 
				.setURL('https://npmjs.com/discord-buttons')
				.setDisabled(false); 

			const row = new disbut.MessageActionRow();

			for (var k = 0; k < i; k++) {
				btn1.setLabel(`${k}`);
				row.addComponent(btn1);
			}
				
			message.channel.send(`RowsTest`, { component: row });
		}
	}

	if (command == "test2") {

		for (var i = 1; i < 1000; i++) {
			
			const btn1 = new disbut.MessageButton()
				.setStyle('url')
				.setLabel(`${i}`)
				.setURL('https://npmjs.com/discord-buttons')
				.setDisabled(false); 

			const row = new disbut.MessageActionRow()
					.addComponent(btn1);

			var rows = [];

			for (var k = 1; k <= i; k++) {
				rows.push(row);
			}

			message.channel.send(`RowsTest 2`, { components: rows });
		}
	}

	if (command == "button") {
		const btn = new disbut.MessageButton()
			.setStyle('red')
			.setID('click_to_function') 
			.setEmoji('785062885952192512')
			.setLabel('Red Button') 
			//.setURL('https://npmjs.com/discord-buttons') // Требуется .setStyle('url') и удаление .setID()
			.setDisabled(false); 

		const btn7 = new disbut.MessageButton()
			.setStyle('green')
			.setID('click_to_function1') 
			.setEmoji('👾')
			.setLabel('Green Button') 
			//.setURL('https://npmjs.com/discord-buttons') // Требуется .setStyle('url') и удаление .setID()
			.setDisabled(false);

		const btn8 = new disbut.MessageButton()
			.setStyle('PRIMARY')
			.setID('click_to_function2') 
			.setEmoji('🕵️‍♂️')
			.setLabel('Blue Button') 
			//.setURL('https://npmjs.com/discord-buttons') // Требуется .setStyle('url') и удаление .setID()
			.setDisabled(false);

		const row1 = new disbut.MessageActionRow()
			.addComponent(btn);
		const row2 = new disbut.MessageActionRow()
		
			.addComponent(btn7);
		const row3 = new disbut.MessageActionRow()
		
			.addComponent(btn8);
		
	
		message.channel.send(`Greetings salesman, what can I assist you with today?`, { component: [row1, row2, row3] });
	}

	if (command == "row") {
		const btn1 = new disbut.MessageButton()
			.setStyle('blurple')
			.setID('click_to_function_in_row') 
			.setEmoji("🍕")
			.setLabel('Button 1 in row') 
			.setDisabled(false); 
			
		const btn2 = new disbut.MessageButton()
			.setStyle('url')
			.setLabel('URL button in row') 
			.setURL('https://npmjs.com/discord-buttons')
			.setDisabled(false); 
			
		const row = new disbut.MessageActionRow()
			.addComponent(btn1)
			.addComponent(btn2);

		message.channel.send(`Demo Row of Buttons`, { component: row });
	}

	if (command == "rows") {
		const btn1 = new disbut.MessageButton()
			.setStyle('grey')
			.setID('click_to_function_in_row_1_2') 
			.setLabel('Button 1 in row 1') 
			.setDisabled(false); 
			
		const btn2 = new disbut.MessageButton()
			.setStyle('url')
			.setLabel('URL button in row 1') 
			.setURL('https://npmjs.com/discord-buttons')
			.setDisabled(false); 

		const btn12 = new disbut.MessageButton()
			.setStyle('green')
			.setID('click_to_function_in_row_2_2') 
			.setLabel('Button 1 in row 2') 
			.setDisabled(false); 
			
		const btn22 = new disbut.MessageButton()
			.setStyle('url')
			.setLabel('URL button in row 2') 
			.setURL('https://npmjs.com/discord-buttons')
			.setDisabled(false); 
			
		const row1 = new disbut.MessageActionRow()
			.addComponent(btn1)
			.addComponent(btn2);
		
		const row2 = new disbut.MessageActionRow()
			.addComponent(btn12)
			.addComponent(btn22);

		message.channel.send(`Demo Row of Buttons`, { components: [row1, row2] });

	}

});

client.on('clickButton', async (button) => {
	if (button.id == "click_to_function") {
		button.reply.send('Red Button Clicked! \n\nDummy text', { ephemeral: true });
	}
	else if (button.id == "click_to_function1") {
		button.reply.send('Green Button Clicked! \n\nDummy text', { ephemeral: true });
	}
	else if (button.id == "click_to_function2") {
		button.reply.send('Blue Button Clicked! \n\nDummy text', { ephemeral: true });
	}
	else if (button.id == "click_to_function_in_row") {
		button.reply.think(true);
		client.setTimeout(() => {
			const embed = new Discord.MessageEmbed()
				.setTitle("On Row first Button click");
			button.channel.send(embed)(true);
		}, 1000 * 2);
	} else if (button.id == "click_to_function_in_row_1_2") {
		button.reply.defer();
		button.message.channel.send('On Row 1 first Button click', { ephemeral: true });
	} else if (button.id == "click_to_function_in_row_2_2") {
		button.reply.send('On Row 2 first Button click');
	}
});









keepAlive()
client.login(config.token);