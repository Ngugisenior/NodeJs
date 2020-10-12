//const fetch = require("node-fetch");
import fetch from "node-fetch";

fetch('http://localhost:3000/hello/elvis')
.then(response=>response.text())
.then(text=>{
    console.log(text)
});
