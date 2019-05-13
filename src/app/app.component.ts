import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PTL';

  constructor() {
    console.log('Component loaded');
    this.changeName('John');
  }

  changeName(title: string): void {
    this.title = title;
  }
}
