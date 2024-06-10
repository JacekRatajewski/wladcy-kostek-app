import { config } from './assets/config';
import { cards } from './assets/cards';

import {
  Client,
  EmbedBuilder,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
  SlashCommandRoleOption,
} from 'discord.js';
import { RollService, rollCommand } from './commands/roll';
import { commands as cardCommands } from './commands/cards';

let cached_cards = [...cards];

const commands = [rollCommand, ...cardCommands];

const rest = new REST({ version: '10' }).setToken(config.DISCORD_TOKEN);

const installCommands = async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(config.APP_ID), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
};

installCommands();
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'add_card') {
    const cardName = interaction.options.getString('card');
    const _card = cards.find((card) => card.name === cardName);
    cached_cards.push(_card);
  }

  if (interaction.commandName === 'reset_cards') {
    cached_cards = [...cards];
  }

  if (interaction.commandName === 'card') {
    const result = new RollService(`1d${cached_cards.length}`).roll()[0];
    const card = cached_cards.splice(result + 1, 1)[0];
    const embededCard = new EmbedBuilder()
      .setTitle(`${card.name}`)
      .setDescription(card.description);
    if (
      card.additionalRoll &&
      (card.additionalRollModifier === true ||
        card.additionalRollModifier === false)
    ) {
      const result = new RollService(`${card.additionalRoll}`).roll()[0];
      embededCard.setFooter({
        text: `PUNKTY OSKAROWE: ${
          card.additionalRollModifier ? '+' : '-'
        }${result}`,
      });
    }
    embededCard.setColor(0x5d5fef);
    await interaction.channel.send({ embeds: [embededCard] });
  }

  if (interaction.commandName === 'roll') {
    const dice = interaction.options.getString('dice');
    const count = interaction.options.getNumber('count');
    const rollFormula = count ? `${count}d${dice.split('d')[1]}` : `${dice}`;
    const rs = new RollService(rollFormula);
    console.log(interaction);
    const res = rs.roll();
    const emededRolls = [];
    const embededRoll = new EmbedBuilder()
      .setTitle(
        `${interaction.guild.emojis.cache.first()} Rolled: ${
          res.length > 1 ? res.join(',') : res[0]
        }`
      )
      .setAuthor({
        name: interaction.user.globalName,
        iconURL: interaction.user.avatarURL(),
      })
      .setFooter({ text: `Rolling: ${rollFormula}` });
    embededRoll.setColor(0xff7a00);
    emededRolls.push(embededRoll);
    emededRolls.forEach(async (roll) => {
      await interaction.channel.send({ embeds: [roll] });
    });
  }

  await interaction.reply({
    content: `...`,
  });

  await setTimeout(() => {
    interaction.deleteReply();
  }, 100);
});

client.login(config.DISCORD_TOKEN);
