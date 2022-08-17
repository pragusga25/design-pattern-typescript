import {ISubscriber} from './ISubsriber';

export interface IPublisher {
  subscribe(observer: ISubscriber): void;
  unsubscribe(observer: ISubscriber): void;
  notify(message: string): void;
}
