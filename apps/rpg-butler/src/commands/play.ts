import { SlashCommandBuilder } from 'discord.js';

export const playCommand = new SlashCommandBuilder()
  .setName('play')
  .setDescription('Zagram ci piosenkę!')
  .addSubcommand((subcommand) =>
    subcommand
      .setName('song')
      .setDescription('Podaj url piosenki!')
      .addStringOption((option) =>
        option.setName('url').setDescription('Podaj url.').setRequired(true)
      )
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName('playlist')
      .setDescription('Podaj url playlisty!')
      .addStringOption((option) =>
        option.setName('url').setDescription('Podaj url.').setRequired(true)
      )
  ).addSubcommand((subcommand) =>
    subcommand
      .setName('end')
      .setDescription('Zatrzymaj odtwarzanie i wyrzuć bota!')
  );
