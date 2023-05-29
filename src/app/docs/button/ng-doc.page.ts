import {NgDocPage} from '@ng-doc/core';
import {ButtonPageModule} from './ng-doc.module';
import {ButtonDemoComponent} from './demos/button-demo.component';
import {ButtonComponent} from '../../code/button/button.component';

const Button: NgDocPage = {
  title: `Button`,
  mdFile: './index.md',
  imports: [ButtonPageModule],
  demos: {ButtonDemoComponent},
  playgrounds: {
    ButtonPlayground: {
      target: ButtonComponent,
      template: `<ng-doc-selector>My Button</ng-doc-selector>`,
    }
  }
};

export default Button;
