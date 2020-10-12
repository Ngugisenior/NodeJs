export default class HelloWorld{
    /**
     * @param {string} greeting 
     */
    constructor(greeting){
        this.greeting = greeting;
    }
    /**
     * @param {string} name 
     */
    sayHello(name){
        console.log(this.greeting+' '+name+'!');
    }
}