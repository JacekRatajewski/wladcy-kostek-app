import { SlashCommandBuilder } from 'discord.js'
// @ts-ignore: Enviroment files;
import cards from '../assets/cards.json';

const cardCommand = new SlashCommandBuilder()
  .setName('card')
  .setDescription('Losowa karta do licytacji!');

const resetCardsCommand = new SlashCommandBuilder()
  .setName('reset_cards')
  .setDescription('Przywróć wszystkie karty do licytacji!');

const addCardCommand = new SlashCommandBuilder()
  .setName('add_card')
  .setDescription('Dodaj kartę!')
  .addStringOption((option) =>
    option
      .setName('card')
      .setDescription('Przywróć kartę do puli losowania!')
      .setRequired(true)
      .setChoices(
        ...cards.map((card) => {
          return {
            name: card.name,
            value: card.name,
          };
        })
      )
  );

export const commands = [cardCommand, addCardCommand, resetCardsCommand];
