import {IPublisher} from './IPublisher';
import {ISubscriber} from './ISubscriber';

export class Channel implements IPublisher {
  private subscribers: ISubscriber[] = [];
  private isLive = false;
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    const oldName = this.name;
    this.name = name;
    this.notify(`Channel name changed from ${oldName} to ${name}`);
  }

  startLiveStream(): void {
    if (this.isLive) {
      return;
    }
    this.isLive = true;
    this.notify(`${this.name} is now live`);
  }

  stopLiveStream(): void {
    if (!this.isLive) {
      return;
    }
    this.isLive = false;
    this.notify(`${this.name} is now offline`);
  }

  subscribe(subscriber: ISubscriber): void {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: ISubscriber): void {
    this.subscribers = this.subscribers.filter(s => s !== subscriber);
  }

  notify(message: string): void {
    this.subscribers.forEach(s => s.update(message));
  }
}
