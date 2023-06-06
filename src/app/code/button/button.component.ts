import { Component, HostBinding, Input } from '@angular/core';

/**
 * Button component with different colors, sizes and rounded corners.
 *
 * ## Import module
 *
 * To use the button, you need to import the `ButtonModule`:
 *
 * ```ts
 * import {ButtonModule} from 'my-lib';
 *
 * @NgModule({
 *  imports: [ButtonModule]
 * })
 *  export class AppModule {}
 * ```
 *
 * ## Usage
 * Here are some examples of how to use the button:
 *
 * ```html
 * <button app-button>Default</button>
 * <button app-button-outline>Default</button>
 * ```
 *
 */
@Component({
  selector: 'button[app-button], button[app-button-outline]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {
  /**
   * Color of the button.
   */
  @Input()
  @HostBinding('attr.data-color')
  color: 'primary' | 'accent' | 'warn' = 'primary';

  /**
   * Size of the button.
   */
  @Input()
  @HostBinding('attr.data-size')
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Whether the button should have rounded corners.
   */
  @Input()
  @HostBinding('attr.data-rounded')
  rounded: boolean = false;

  /**
   * Whether the button should be disabled.
   */
  @Input()
  @HostBinding('attr.data-disabled')
  disabled: boolean = false;
}
