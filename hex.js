
//const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton, MessageComponent, MessageActionRow } = require('discord.js')

module.exports = {
  name: "hex",
  description: "button",
  permissions: ["SEND_MESSAGES"],

  run: async (client, messages, args) => {

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('danger-button')
          .setLabel('Danger')
          .setStyle("DANGER"),
        new MessageButton()
          .setCustomId('danger-button')
          .setLabel('Danger')
          .setStyle("DANGER"),

        new MessageButton()
          .setCustomId('danger-button')
          .setLabel('Danger')
          .setStyle("DANGER"),
        )
        message.channel.send({ content: `*New button*`, components: [row] })

         //await interaction.reply({ ephemeral: true, content:'ClickButtons to Get Colors', components: [row] });  
  }
};
    
// // //      const row = new MessageActionRow()
// // //       .addComponents(
// // //         newMessageButton()
// // //           .setCustomId('danger-button')
// // //           .setLabel('Danger')
// // //           .setStyle("DANGER"),
// // //         newMessageButton()
// // //           .setCustomId('success-button')
// // //           .setLabel('Success')
// // //           .setStyle("SUCCESS"),
// // //         newMessageButton()
// // //           .setCustomId('pirmary-button')
// // //           .setLabel('Primary')
// // //           .setStyle("PRIMARY"),
// // //       );
        
// // //       await interaction.reply({ ephemeral: true, content:'ClickButtons to Get Colors', components: [row] });  
  
   
// // //   ),
// // // };node