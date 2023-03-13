import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'button[app-button], button[app-button-outline]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  @HostBinding('attr.data-color')
  color: 'blue' | 'red' | 'green' = 'blue';

  @Input()
  @HostBinding('attr.data-rounded')
  rounded = false;

  @Input()
  @HostBinding('attr.data-size')
  size: 'small' | 'medium' | 'large' = 'medium';
}
