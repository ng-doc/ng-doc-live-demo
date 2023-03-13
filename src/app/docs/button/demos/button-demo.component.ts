import {Component} from '@angular/core';

@Component({
  selector: 'app-button-demo',
  template: `
    <button app-button (click)="notify()">My button</button>
  `,
})
export class ButtonDemoComponent {
  notify(): void {
    alert('Hello!');
  }
}
