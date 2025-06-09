import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {Home} from './home/home';
import {Header} from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home, Header],
  template: `
  <app-header />
  <app-home />
  `,
  styles: [],
})
export class App {
  protected title = 'first-ng-app';
}
