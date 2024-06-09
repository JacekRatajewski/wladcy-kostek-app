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
