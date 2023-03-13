import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDemoComponent} from './demos/button-demo.component';
import {ButtonModule} from '../../button/button.module';

@NgModule({
  imports: [CommonModule, ButtonModule],
	declarations: [
    ButtonDemoComponent
  ],
	exports: [ButtonModule]
})
export class ButtonPageModule {}
