import {IAttackStrategy} from './IAttackStrategy';

export class PunchAttackStrategy implements IAttackStrategy {
  attack(power: number): string {
    return `Punch with ${power + 5} power`;
  }
}
