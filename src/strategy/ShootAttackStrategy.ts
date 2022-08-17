import {IAttackStrategy} from './IAttackStrategy';

export class ShootAttackStrategy implements IAttackStrategy {
  attack(power: number): string {
    return `Shoot with ${power - 5} power`;
  }
}
