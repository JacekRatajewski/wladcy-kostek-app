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
import { RollService } from './commands/roll';

const rollCommand = new SlashCommandBuilder()
  .setName('roll')
  .setDescription('Rzuć kością!');
rollCommand
  .addStringOption((option) =>
    option.setName('count').setDescription('Ile kości?')
  )
  .addStringOption((option) =>
    option
      .setName('dice')
      .setDescription('Wybierz kostkę!')
      .setRequired(true)
      .setChoices(
        { name: 'd4', value: '1d4' },
        { name: 'd6', value: '1d6' },
        { name: 'd8', value: '1d8' },
        { name: 'd10', value: '1d10' },
        { name: 'd12', value: '1d12' },
        { name: 'd20', value: '1d20' },
        { name: 'd100', value: '1d100' }
      )
  );

const carCommand = new SlashCommandBuilder()
  .setName('card')
  .setDescription('Losowa Karta do licytacji!');

const commands = [rollCommand, carCommand];

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

  if (interaction.commandName === 'card') {
    const result = new RollService(`1d${cards.length}`).roll()[0];
    const card = cards[result + 1];
    const embededCard = new EmbedBuilder()
      .setTitle(`${card.name}`)
      .setDescription(card.description);
    if (card.additionalRoll && card.additionalRollModifier) {
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
    const count = interaction.options.getString('count');
    let rs;
    if (count) {
      rs = new RollService(`${count}${dice}`);
    } else {
      rs = new RollService(`${dice}`);
    }
    const res = rs.roll();
    const emededRolls = [];
    for (let index = 0; index < res.length; index++) {
      const roll = res[index];
      const embededRoll = new EmbedBuilder().setTitle(
        `${interaction.guild.emojis.cache.first()} Rolled: ${roll}`
      );
      embededRoll.setColor(0xff7a00);
      emededRolls.push(embededRoll);
    }
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
