import {Ironman} from './Ironman';
import {PunchAttackStrategy} from './PunchAttackStrategy';
import {ShootAttackStrategy} from './ShootAttackStrategy';

const punchAttack = new PunchAttackStrategy();
const shootAttack = new ShootAttackStrategy();

const ironman = new Ironman(10, punchAttack);
console.log(ironman.attack());
ironman.setAttackStrategy(shootAttack);
console.log(ironman.attack());
ironman.setAttackStrategy(punchAttack);
console.log(ironman.attack());
