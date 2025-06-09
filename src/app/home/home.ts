import { Component, signal } from '@angular/core';
import {Counter} from '../components/counter/counter';
import {Greeting} from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  homeMessage = signal('Hellow orld. Shine on.');
  keyUpHandler(event: KeyboardEvent) {
    const input = document.querySelector('input')?.value;
    console.log(`...typing: "${event.key}" key, ${input}`);
  }
}
