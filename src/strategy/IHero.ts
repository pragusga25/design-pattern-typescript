import {IAttackStrategy} from './IAttackStrategy';

export interface IHero {
  setAttackStrategy(attackStrategy: IAttackStrategy): void;
  attack(): string;
  getPower(): number;
  setPower(power: number): void;
}
