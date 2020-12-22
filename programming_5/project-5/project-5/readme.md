# NWJS app 2

Today's application is based on project-4 nwjs app. We have made some improvements in our application and our "mini framework".

## Automatic loading

You can import ALL of your registered component (module) in this way:

```js
import "./component/*/component.js";
import "./component/*/style.scss";
```

It is based on file path patterns. This is a very basic implementation we use, it has some drawback's (you need to restart the
compilation whenever you add or remove a new file, which was loaded this way)

## Component registry

It was not the best way to manage our components as individual elements. It's much better, to create a registry which can
manage our components automatically.

The component definition has been changed a bit:

```js
import Component from "../../modules/component";
import twig from "./template.twig"

export default (class MyComponent extends Component{
 // your code here
}).register(twig, 'my-component');
```

This means we create a new class (MyComponent) and right after that we call it's static `register` method. In that point we pass the
template and the `tag-name` to it. The register static method adds our component to the registry, and returns the class itself, so the
export gets the class to export.

It's the same as the code below, but in a more compact way:

```js
import Component from "../../modules/component";
import twig from "./template.twig"

class MyComponent extends Component{
 // your code here
}

MyComponent.register(twig, 'my-component');
export default MyComponent;
```

When your component is registered, and the application is started, the registry will check the **DOM** for every element that has
`is` attribute with the `tag-names` you defined. It not checks only once, but defines a `DOM observer` and when the dom changes, it
searches for your tags. When it find a `tag`, it will add an other attribute (`component`), therefore it knows, that it's already
initialized.

```html
<div is="my-component"></div>
```

When your application starts you need to call the registry's listen method

```js
document.addEventListener('DOMContentLoaded', () => registry.listen())
```

## The finder

The component has two new methods, the `$` and the `$$` method. Both of them are returns a `Finder` object. The finder object
can find any elements within your component, but it stops searching, when reaches a subcomponent - components can contains
other components.

The `$` method accepts any selector the `querySelector` method accepts.

The `$$` is much more interesting to use. That searches for **ACTORS**. Actors are the html elements, which has a role in your app.
Role means that you attach an event handler to them, or changes their content, or css.

You can define actors in your templates like this:

```html
<div class="nice">
    <div (user)>user</div>
</div>
```

In this case, you can address the `(user)` actor from your component like this, and add a click event handler:

```js
this.$$('user').on.mouse.click((event, target)=>{ target.innerHTML = "elvis presley"; });
```

Discover the capabilities of the Finder class!

## App Events

Your components are need to communicate with each other. Off course they can address each other directly by for example the Finder:

```html
...
   <div (user) is="user-component"></div>
...
```

```js
this.$$('user').node.component.itMightHasAChangeNameMethodSoICallIt('elvis presley');
```

But you need to know that your component have a method called `itMightHasAChangeNameMethodSoICallIt`. But you can't be sure of it.
It's much better to communicate through events. The event handling is a built-in DOM functionality, our events are based on that.
An event must have a name, and can contain any additional data.

You can fire events in different ways.

### Bubbling event

Fire an event from a component to it's parents:

```js
this.fire('the-user-has-been-selected', {user: this.user});
```

This event can be catched by any parent elements in the dom tree, typically, you define your listeners in the `constructor`.

```js
constructor(element){
   super(element);
   this.listen('the-user-has-been-selected', (event) => {
      console.log(event.data)
   })
}
```

If you catch an event, it's your decision to handle it, or let it bubbles through your component. When you handle a bubbling event,
you should cancel it's bubbling, by calling the event's `cancel` method. Defining the listeners (like above) can be confusing when
you have many of tham, so you can bind your components methods as listener:

```js
constructor(element){
   super(element);
   this.listen('the-user-has-been-selected', this.onUserSelect.bind(this))
}

onUserSelect(event){
	console.log(event.data);
	event.cancel();
}
```

### Message

You can address your target and send a message to it via events. You dont need to know the targets methdos, you just send a message
and if it matters, the target will handle it.

```js
this.message('user-has-been-selected', {user: this.user}, this.$$('display').node)
```

*note: the message events are not bubbling*

### Broadcast

You can send a broadcast message when something happens, that can be interesting for any other components on the page,
but you know nothing about those components. All of the components in the dom will receive your message.

```js
AppEvent.broadcast('user-has-been-selected', {user: user});
```

*note: the broadcast events are not bubbling*

# Project-5: The github search application

Please analyze the application. It searches the github for users, from the result list, you can add users to the favourites list.

## Homework

Please write a few lines of comments (readme.md) to your submission.

1. Modify the application, to store your favorites in the localStorage object.

    - [localStorage](https://javascript.info/localstorage)
    - [JSON.stringify](https://javascript.info/json#json-stringify)
    - [JSON.parse](https://javascript.info/json#json-parse)

2. In the `app.js` file, I've prepared the application menu with two menu items: save and load. 
   Modify the application, it should save your favorites into a file, and load it from a file.
    
    - [NWJS menu](https://docs.nwjs.io/en/latest/References/Menu/)

3. Bonus: use the nwjs file dialog, to specify a file.

   - [NWJS file dialogs](https://nwjs.readthedocs.io/en/nw13/References/File%20Dialogs/)

4. Bonus2: create a separate expressjs application, to store your data in files. Communicat with it through the fetch api.