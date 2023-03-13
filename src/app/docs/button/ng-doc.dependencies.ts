import {NgDocDependencies} from '@ng-doc/core';
import {ButtonPageModule} from './ng-doc.module';
import {ButtonDemoComponent} from './demos/button-demo.component';
import {ButtonComponent} from '../../button/button.component';

const ButtonDependencies: NgDocDependencies = {
	module: ButtonPageModule,
	demo: {ButtonDemoComponent},
  playgrounds: {
    ButtonPlayground: {
      target: ButtonComponent,
      template: `<ng-doc-selector>My Button</ng-doc-selector>`,
    }
  }
};

export default ButtonDependencies;
