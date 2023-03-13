# {{ NgDocPage.title }}

Here is a demo article about Button component, it shows some features that
NgDoc has, and can be used to check how it works.

## How to import

{% include "../shared/import-alert.md" %}

To start using `ButtonComponent` you need to import `ButtonModule` like on the example below

```typescript
import {ButtonModule} from 'my-lib'

@NgModule({
  imports: [ButtonModule]
})
export class MyModule {}
```

## Example of usage

You can easily use this button with the native `button` tag

{{ NgDocActions.demo("ButtonDemoComponent") }}

## Playground

Here is the playground that you can use to iteract with the component

{{ NgDocActions.playground("ButtonPlayground") }}
