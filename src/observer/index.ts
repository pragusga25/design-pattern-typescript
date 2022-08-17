import {Channel} from './Channel';
import {Subscriber} from './Subscriber';

const youtube = new Channel('Youtube');

const subscriber1 = new Subscriber('Subscriber 1');
const subscriber2 = new Subscriber('Subscriber 2');
const subscriber3 = new Subscriber('Subscriber 3');

youtube.subscribe(subscriber1);
youtube.subscribe(subscriber2);
youtube.subscribe(subscriber3);

youtube.setName('Youtube New');
youtube.unsubscribe(subscriber2);
youtube.startLiveStream();
youtube.unsubscribe(subscriber1);
youtube.stopLiveStream();
