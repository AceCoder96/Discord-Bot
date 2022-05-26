
const 	Discord = require('discord.js'),
		disbut = require('discord-buttons');// const 	Discord = require('discord.js'),
		// disbut = require('discord-buttons');
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


client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`); })

// const button = require("./button.js");


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
    channel.send(`Thank you so much for having me here :)`);
});

// client.on('message', (message) => {

//     if (message.author.bot || message.channel.type != "text") return;
//     if (!message.content.startsWith(config.prefix)) return;
	
//     const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
//     const command = args.shift();

	

	

client.on("message", async message => {
  
  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  if(command === "beep") {
    message.channel.send("Beep").then((sentMessage) => sentMessage.edit("Boop!"))
  }

if(command === "gif") {
   
    const { member, mentions } = message
    const tag = `<@${member.id}>`
   
    const sayMessage = args.join(" ");
    const sayMessag = sayMessage.toUpperCase();
    //;
    const words = [
		"https://media.giphy.com/media/PoPVLTYhfi5RNXr8tv/giphy.gif",
			"https://media.giphy.com/media/A8QD25mIAoZay8SJGH/giphy.gif",
			"https://media.giphy.com/media/xUWtXqfftB8Yf9josn/giphy.gif",
			"https://media.giphy.com/media/fl3M589JVfEijAPOzO/giphy.gif", //whenmoon
			"ttps://media.giphy.com/media/fiHZOSNIoZbd7u9kZz/giphy.gif", //verynice

			"https://media.giphy.com/media/RR9mOVRxVbWHbknoAB/giphy.gif", //stonks

"https://media.giphy.com/media/IEAdLLLSNPQvD6Ltuu/giphy.gif",   

"https://media.giphy.com/media/2xVpeLKbcQGnmjTn2z/giphy.gif", //itsano
"https://media.giphy.com/media/RDZoApDA2iTShe4Ctc/giphy.gif", //lol

"https://media.giphy.com/media/KHb9s8HGpVS5SchcBo/giphy.gif", //mood
"https://media.giphy.com/media/1CEhAkoslc6KA1nDG9/giphy.gif" //pumpit
			
			
			
			
    ]
    let gif = words[Math.floor(Math.random() * words.length)]
const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
    .setColor('BLUE')
    .setTitle(" ")
    .setDescription(`I was just harshly bonked!`)
    //.setTimestamp()
    //.setFooter("This is a footer")
    .setAuthor(" ") //and this its profile pic)
    //.addField("This is a field", "this is its description")
    .setImage(`${gif}`)
    //.setThumbnail("https://imgur.com/jnKZXKH")
    message.channel.send(embed)
      }
	
    
    // if (!sayMessage) return message.channel.send(` Specify a location, you dummy ${tag}.`);


    // else {
    // message.channel.startTyping();
    // const m = message.channel.send(" @here PANIK!! " + tag + " needs backup at **" + sayMessag + "!**")
    // const n = message.channel.send(mywords)
    // const r = message.channel.stopTyping(); }
    


if(command === "now") {



    const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
    .setColor('PURPLE')
    .setTitle(" ")
    .setDescription(`I was just harshly bonked!`)
    //.setTimestamp()
    //.setFooter("This is a footer")
    .setAuthor(" ") //and this its profile pic)
    //.addField("This is a field", "this is its description")
    .setImage("https://media.giphy.com/media/PoPVLTYhfi5RNXr8tv/giphy.gif")
    //.setThumbnail("https://imgur.com/jnKZXKH")
    message.channel.send(embed)
      }

  if(command === "celebrate") {



const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
.setColor(0x000000)
.setTitle(" ")
.setDescription(`I was just harshly bonked!`)
//.setTimestamp()
//.setFooter("This is a footer")
.setAuthor(" ") //and this its profile pic)
//.addField("This is a field", "this is its description")
.setImage("https://media.giphy.com/media/A8QD25mIAoZay8SJGH/giphy.gif")
//.setThumbnail("https://imgur.com/jnKZXKH")
message.channel.send(embed)
  }

  if(command === "yes") {



    const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
    .setColor('PURPLE')
    .setTitle(" ")
    .setDescription(`I was just harshly bonked!`)
    //.setTimestamp()
    //.setFooter("This is a footer")
    .setAuthor(" ") //and this its profile pic)
    //.addField("This is a field", "this is its description")
    .setImage("https://media.giphy.com/media/xUWtXqfftB8Yf9josn/giphy.gif")
    //.setThumbnail("https://imgur.com/jnKZXKH")
    message.channel.send(embed)
      }
  if(command === "whenmoon") {



    const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
    .setColor('PINK')
    .setTitle(" ")
    .setDescription(`I was just harshly bonked!`)
    //.setTimestamp()
    //.setFooter("This is a footer")
    .setAuthor(" ") //and this its profile pic)
    //.addField("This is a field", "this is its description")
    .setImage("https://media.giphy.com/media/fl3M589JVfEijAPOzO/giphy.gif")
    //.setThumbnail("https://imgur.com/jnKZXKH")
    message.channel.send(embed)
      }
      if(command === "verynice") {



        const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
        .setColor('BLUE')
        .setTitle(" ")
        .setDescription(`I was just harshly bonked!`)
        //.setTimestamp()
        //.setFooter("This is a footer")
        .setAuthor(" ") //and this its profile pic)
        //.addField("This is a field", "this is its description")
        .setImage("https://media.giphy.com/media/fiHZOSNIoZbd7u9kZz/giphy.gif")
        //.setThumbnail("https://imgur.com/jnKZXKH")
        message.channel.send(embed)
          }

          if(command === "stonks") {



            const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
            .setColor('RED')
            .setTitle(" ")
            .setDescription(`I was just harshly bonked!`)
            //.setTimestamp()
            //.setFooter("This is a footer")
            .setAuthor(" ") //and this its profile pic)
            //.addField("This is a field", "this is its description")
            .setImage("https://media.giphy.com/media/RR9mOVRxVbWHbknoAB/giphy.gif")
            //.setThumbnail("https://imgur.com/jnKZXKH")
            message.channel.send(embed)
              }

  if(command === "feelsgood") {



    const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
    .setColor('RED')
    .setTitle(" ")
    .setDescription(`I was just harshly bonked!`)
    //.setTimestamp()
    //.setFooter("This is a footer")
    .setAuthor(" ") //and this its profile pic)
    //.addField("This is a field", "this is its description")
    .setImage("https://media.giphy.com/media/IEAdLLLSNPQvD6Ltuu/giphy.gif")
    //.setThumbnail("https://imgur.com/jnKZXKH")
    message.channel.send(embed)
      }

      
      if(command === "itsano") {



        const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
        .setColor(0x000000)
        .setTitle(" ")
        .setDescription(`I was just harshly bonked!`)
        //.setTimestamp()
        //.setFooter("This is a footer")
        .setAuthor(" ") //and this its profile pic)
        //.addField("This is a field", "this is its description")
        .setImage("https://media.giphy.com/media/2xVpeLKbcQGnmjTn2z/giphy.gif")
        //.setThumbnail("https://imgur.com/jnKZXKH")
        message.channel.send(embed)
          }

  
          if(command === "lol") {



            const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
            .setColor('#EFFF00')
            .setTitle(" ")
            .setDescription(`I was just harshly bonked!`)
            //.setTimestamp()
            //.setFooter("This is a footer")
            .setAuthor(" ") //and this its profile pic)
            //.addField("This is a field", "this is its description")
            .setImage("https://media.giphy.com/media/RDZoApDA2iTShe4Ctc/giphy.gif")
            //.setThumbnail("https://imgur.com/jnKZXKH")
            message.channel.send(embed)
              }

              if(command === "mood") {



                const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
                .setColor('BLUE')
                .setTitle(" ")
                .setDescription(`I was just harshly bonked!`)
                //.setTimestamp()
                //.setFooter("This is a footer")
                .setAuthor(" ") //and this its profile pic)
                //.addField("This is a field", "this is its description")
                .setImage("https://media.giphy.com/media/KHb9s8HGpVS5SchcBo/giphy.gif")
                //.setThumbnail("https://imgur.com/jnKZXKH")
                message.channel.send(embed)
                  }
            
                  if(command === "pumpit") {



                    const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
                    .setColor('GREEN')
                    .setTitle(" ")
                    .setDescription(`I was just harshly bonked!`)
                    //.setTimestamp()
                    //.setFooter("This is a footer")
                    .setAuthor(" ") //and this its profile pic)
                    //.addField("This is a field", "this is its description")
                    .setImage("https://media.giphy.com/media/1CEhAkoslc6KA1nDG9/giphy.gif")
                    //.setThumbnail("https://imgur.com/jnKZXKH")
                    message.channel.send(embed)
                      }



if (command == "faq") {
	const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
		const btnOne = new disbut.MessageButton()
			.setStyle('PRIMARY')
			.setID('click_to_function_one') 
			.setEmoji('🕵️‍♂️')
			.setLabel('WHO ARE WE?') 
			//.setURL('https://npmjs.com/discord-buttons') // Требуется .setStyle('url') и удаление .setID()
			.setDisabled(false); 

		const btnTwo = new disbut.MessageButton()
			.setStyle('green')
			.setID('click_to_function_two') 
			.setEmoji('👾')
			.setLabel('HOW CAN I GET INVOLVED?') 
			//.setURL('https://npmjs.com/discord-buttons') // Требуется .setStyle('url') и удаление .setID()
			.setDisabled(false); 

		const btnThree = new disbut.MessageButton()
			.setStyle('PRIMARY')
			.setID('click_to_function_three') 
			.setEmoji('🕵️‍♂️')
			.setLabel('HOW DO I STAY SAFE?') 
			//.setURL('https://npmjs.com/discord-buttons') // Требуется .setStyle('url') и удаление .setID()
			.setDisabled(false); 
		// const btnFour = new disbut.MessageButton()
		// 	.setStyle('red')
		// 	.setID('click_to_function_four') 
		// 	.setEmoji('785062885952192512')
		// 	.setLabel('What else?') 
			//.setURL('https://npmjs.com/discord-buttons') // Требуется .setStyle('url') и удаление .setID()
			//.setDisabled(false); 

		const btnFive = new disbut.MessageButton()
			.setStyle('green')
			.setID('click_to_function_five') 
			.setEmoji('👾')
			.setLabel('CAN I BUY MORE THAN 1 SALESMAN?') 
			//.setURL('https://npmjs.com/discord-buttons') // Требуется .setStyle('url') и удаление .setID()
		// 	.setDisabled(false);

		const btnSix = new disbut.MessageButton()
			.setStyle('PRIMARY')
			.setID('click_to_function_six') 
			.setEmoji('🕵️‍♂️')
			.setLabel('CAN I RESELL?') 
			//.setURL('https://npmjs.com/discord-buttons') // Требуется .setStyle('url') и удаление .setID()
			.setDisabled(false);

		
		const row1 = new disbut.MessageActionRow()
			.addComponent(btnOne);
		const row2 = new disbut.MessageActionRow()
			.addComponent(btnTwo);
		const row3 = new disbut.MessageActionRow()
			.addComponent(btnThree);
		// const row4 = new disbut.MessageActionRow()
		// 	.addComponent(btnFour);
		const row5 = new disbut.MessageActionRow()
			.addComponent(btnFive);
		const row6 = new disbut.MessageActionRow()
			.addComponent(btnSix);
		
	
		message.channel.send(`Frequently asked questions:`, { component: [row1, row2, row3, row5, row6] });
	}


	

});

client.on('clickButton', async (button) => {
	if (button.id == "click_to_function_one") {
		button.reply.send('We are a growing team of industry professionals from the seven key corners of sales, marketing, engineering, cybersecurity, defi, crypto and gaming.', { ephemeral: true });
	}
	else if (button.id == "click_to_function_two") {
		button.reply.send(`Even just by reading through this list, I have news for you: you’ve entered 'Ether Corp.'! Hang onto your keyboard and ready yourself for the launch, Salesman!`, { ephemeral: true });
	}
		else if (button.id == "click_to_function_three") {
		button.reply.send('Oooo, this is a very smart question with an unchanging answer: NO ONE from the core team will ever DM you! Stay vigilant and be on the alert for scammers. If you come across one, flag and report them to mods immediately!', { ephemeral: true });
	}
	// else if (button.id == "click_to_function_four") {
	// 	button.reply.send('Ether Corp extends beyond traditional media, and includes: merch, airdrops, IRL events and more.', { ephemeral: true });
	// }
	else if (button.id == "click_to_function_five") {
		button.reply.send('Yes. Presale is limited to 5 NFT per Transaction/Wallet. Public sale will have a limit of 5 pieces per transaction. The maximum per wallet will be 20 NFTs. This will give everyone a fair chance at minting while minimizing bot interference.', { ephemeral: true });
	}
	else if (button.id == "click_to_function_six") {
		button.reply.send('Yes, you are able to resell on the OpenSea/Looksrare platforms at anytime you see fit.', { ephemeral: true });
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