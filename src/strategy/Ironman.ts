import {IAttackStrategy} from './IAttackStrategy';
import {IHero} from './IHero';

export class Ironman implements IHero {
  constructor(private power: number, private attackStrategy: IAttackStrategy) {}

  setAttackStrategy(attackStrategy: IAttackStrategy): void {
    this.attackStrategy = attackStrategy;
  }

  attack(): string {
    return this.attackStrategy.attack(this.power);
  }

  getPower(): number {
    return this.power;
  }

  setPower(power: number): void {
    this.power = power;
  }
}
