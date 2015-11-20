import {Component} from 'angular2/angular2';


@Component({
  selector: 'app',
  template: `
  <header>
    <h1 class="title">Hello {{ title }}</h1>
  </header>
  `
})
export class App {
  title: string;

  constructor() {
    this.title = 'World!';
  }

}
