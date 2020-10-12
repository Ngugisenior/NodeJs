# Lesson one

## step 1 - install

After you cloned the project, install all dependencies `npm install`

In your project the environment is ready for work. 

Look at all the files in the root:

- `package.json` : descriptor of your node project, with dependencies
- `package-lock.json` : version locks of all installed packages
- `babel.config.js` : babel configuration
- `webpack.config.js` : configuration of the code transpiler

Please notice that there are `json` and `js` files there. `json` files are only configurations, but in `js` files you can write some code too, to make sophisticated configurations.

Modern javascript project need compilations. There are many transpilers out there, but one of the most powerfull ones is webpack with babel. This transpiles our es6 codes to es5, minifies it.
In the package.json file there are two scripts definied:
- `build` : (this builds the project)
- `work` : this also builds the project, but much faster with less optimizations. It also watches your files, and if you modify one of tham, it runs again. You don't need to build it manually again and again, this does it for you automatically.

## step 2 - build

Compile your project `npm run build`

The compiled files will be in the `prod` folder. There must be two files this time:

- `index.js` - the code
- `index.js.map` - this will be usefull while debugging, when we run our code in the browser

In the `webpack.config.js` file there is a line:

```js
entry: {
    // destination: source
    "./prod/index": "./src/index"
    }
```

There you can define as many entries, as you need in this format.

## step 3 - run

With the command `node ./prod/index.js` you can run your code.

The project should output: **Hello World!**

Please notice that you can run your code with `node .` command too! It will read the `package.json` and reads this line to find the main entry point of your application: `"main": "prod/index.js"`

## step 4 - examine the code

Your project codes are in the `src` folder.

`index.js` - your entry point

```js
// import your module
// notice the "./" in the begining of the import
// notice that there are no js exension at the end
import HelloWorld from "./modules/hello-world";

// create a new HelloWorld object
let hello = new HelloWorld('Hello');
// call it's sayHello method
hello.sayHello('World');
```

`modules/hello-world.js` - your only module in this project

```js
// export default - this module exports only this class
// this will be the most common use of exports
export default class HelloWorld{
    // notice the typehint annotations
    // this is the constructor, it initializes the greeting property
    /**
     * @param {string} greeting 
     */
    constructor(greeting){
        this.greeting = greeting;
    }

    // this is a method, that returns nothing, but prints out a message
    /**
     * @param {string} name 
     */
    sayHello(name){
        console.log(this.greeting+' '+name+'!');
    }
}
```

## Homework

1. Read about [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) - we will use these kind of modules in our projects
2. Read about nodejs modules ([CommonJs](https://nodejs.org/api/modules.html#modules_modules_commonjs_modules)) - our environment (nodejs) uses commonjs modules, you need to know this
3. Read about [ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
4. Create a new project (just copy this one without the source files) and create a new application
    - Create two classes (in two separate modules) and the entry point (index.js)
    - Both of tham need to have a calculate method
    - One of tham adds PI (`Math.PI`) to the argument
    - The other multiplies the artument with PI
    - They will call each others calculate class, unless the number is above 300
    - Call one of the methods from the `index.js` with an initial number and print out the result
    - Upload your project to github, and send me the project location