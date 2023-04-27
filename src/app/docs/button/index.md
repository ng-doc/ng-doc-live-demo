# {{ NgDocPage.title }}

A button is an interface element that allows the user to perform a specific action when clicked.

## Importing a button

{% include "../shared/import-alert.md" %}

To use the `ButtonComponent` in your project, you need to import the `ButtonModule` from our library:

```typescript fileName="app.module.ts"
import {ButtonModule} from 'my-lib';

@NgModule({
  imports: [ButtonModule]
})
export class AppModule {}
```

## Creating a button

To create a button using our library, you can use the following code:

```html
<button app-button>MyButton<button>
```

This will create a simple button with the text "MyButton" on it.

{{ NgDocActions.demo("ButtonDemoComponent") }}

## Styling a button

You can style the button using CSS. Here's an example of how to change the background color and text color of the button:

```css
button {
  background: red;
  color: white;
}
```

## Playground

{{ NgDocActions.playground("ButtonPlayground") }}

<div id="end"></div>