import { SlashCommandBuilder } from "discord.js";

export class RollService {
  private count!: number;
  dice: number;
  constructor(rollFormula: string) {
    const rollFormulaArray = rollFormula.split('d');
    this.count = parseInt(rollFormulaArray[0]);
    this.dice = parseInt(rollFormulaArray[1]);
  }
  public roll(): number[] {
    const results = [];
    for (let index = 0; index < this.count; index++) {
      const roll = this.randomIntFromInterval(1, this.dice);
      results.push(roll);
    }
    return results;
  }

  private randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export const rollCommand = new SlashCommandBuilder()
  .setName('roll')
  .setDescription('Rzuć kością!');
rollCommand
  .addStringOption((option) =>
    option
      .setName('dice')
      .setDescription('Wybierz kostkę!')
      .setRequired(true)
      .setChoices(
        { name: 'd3', value: '1d3' },
        { name: 'd4', value: '1d4' },
        { name: 'd6', value: '1d6' },
        { name: 'd8', value: '1d8' },
        { name: 'd10', value: '1d10' },
        { name: 'd12', value: '1d12' },
        { name: 'd20', value: '1d20' },
        { name: 'd100', value: '1d100' }
      )
  )
  .addNumberOption((option) =>
    option.setName('count').setDescription('Ile kości?').setRequired(false)
  );