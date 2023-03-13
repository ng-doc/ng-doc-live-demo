# {{ NgDocPage.title }}

A button is an interface element that allows the user to perform a specific action when clicked.

## Importing a button

To use the button in your project, you need to import the `ButtonModule` from our library:

```typescript
import { ButtonModule } from 'my-lib';

@NgModule({
  imports: [
    ButtonModule
  ]
})
export class AppModule { }
``
```

## Creating a button
To create a button using our library, you can use the following code:

```html
<button app-button>My Button</button>
```

This will create a simple button with the text "Click me!" on it.

## Styling a button
You can style the button using CSS. Here's an example of how to change the background color and text color of the button:

```css
button {
  background: red;
  color: white
}
```

## Adding an event listener
To make the button do something when clicked, you can add an event listener to it. Here's an example of how to create an alert when the button is clicked:

```html
<button app-button (click)="alert('message')">My Button</button>
```

This will create a button with the text "Click me!" and show an alert saying "Hello, world!" when clicked.

## Example of usage

{{ NgDocActions.demo("ButtonDemoComponent")}}

## Play with it

{{ NgDocActions.playground("ButtonPlayground")}}

## Conclusion
Buttons are a fundamental element of any user interface. With our library, you can easily create and customize buttons to fit your needs.
