import express from "express";
import HelloWorld from "./modules/hello-world";

const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello World!')
});

app.get('/hello/:name', (request, response)=>{
    let hello = new HelloWorld('Hello');
    response.send(hello.sayHello(request.params.name));
})

app.listen(3000, ()=>{
    console.log('listnening');
});