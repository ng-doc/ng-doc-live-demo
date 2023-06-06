import {Component} from '@angular/core';
import {ButtonComponent} from "../../../code/button/button.component";

@Component({
  selector: 'app-button-demo',
  template: `
    <button app-button (click)="notify()">My button</button>
  `,
  standalone: true,
  imports: [ButtonComponent],
})
export class ButtonDemoComponent {
  notify(): void {
    alert('Hello!');
  }
}
