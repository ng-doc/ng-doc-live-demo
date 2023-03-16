import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';

/**
 * Button module that you can import to use the button component.
 *
 * ## Import module
 *
 * You can import the `ButtonModule` in a module to use the `ButtonComponent`:
 *
 * ```ts
 * import {ButtonModule} from 'my-lib';
 *
 * @NgModule({
 *  imports: [ButtonModule]
 * })
 *  export class AppModule {}
 * ```
 */
@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [ButtonComponent]
})
export class ButtonModule {
}
