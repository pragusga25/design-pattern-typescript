import {ISubscriber} from './ISubscriber';

export class Subscriber implements ISubscriber {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`${this.name} received: ${message}`);
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}
