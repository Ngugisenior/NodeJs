# Lesson two

Today we are creating a basic webserver application with express.

## step 1 - install

Create a copy of your previous application (project 1), and rename it in the `package.json` file.

After that install the express framework into our project:

`npm install --save express`

This command not just downloads, but adds `express` as a dependency into the `package.json` file (`--save`).

Modify your `webpack.config.js` add the line `target: "node"`

```js
.
.
.
	let prod = options.mode === 'production';

	return {
		target: 'node',
		name: 'Transpiler',
        entry: {"./prod/index": "./src/index"},
.
.
.
```

This says to webpack, that you are not working in browser environment, but building a nodejs application.

## step 2 - create a basic server

Modify the content of your `index.js` as below

```js
// load express module
import express from "express";

// create an express application
const app = express()

// listen for a get request, where the url path matches `/`
app.get('/', (request, response) => {
    // in the server console you can see, how the request looks like
    console.log(request);
    // send a response: Hello World!
    response.send('Hello World!')
})

// finally start listening on port 3000
app.listen(3000, ()=>{
    console.log('listnening');
});
```

Build your appication (`npm run build` or `npm run work`), and run it `node .`

Your application should write *listening* to the console, but not giving the prompt back. If you want to stop it, press ctrl-c.

Open a web browser, and open 'http://localhost:3000` and you will see `Hello World!`

## step 3 - create a route

Modify your `hello-world` module, not to write out, but return the greeting in the `sayHello` method!

Add these lines to your application `index.js`:

```js
// listing to /hello/:name means, that we are listening any url start with hello
// followed by a slash and a string. Express will store that string in the
// request's param property
app.get('/hello/:name', (request, response)=>{
    // Create a HelloWorld object
    let hello = new HelloWorld('Hello');
    // make a response with it
    response.send(hello.sayHello(request.params.name));
})
```

Build it, run it and test it in the browser: `http://localhost:3000/hello/elvis`!

## Homework

1. Read about [Express JS](https://expressjs.com/)
2. Learn about [Promoises](https://javascript.info/promise-basics#tasks)
3. Learn using [Node-Fetch](https://www.npmjs.com/package/node-fetch) 
4. Create a new project starting from project-2
    - install `node-fetch`
    - run `project-2` server
    - try to access your server (`http://localhost:3000/hello/elvis`) from your application using the `fetch` moodule
    - write out the result to the console