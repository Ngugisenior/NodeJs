import fetch from "node-fetch";
import settings from "../../modules/settings.js";

let name = 'Elvis';
let url = settings.url + ':' + settings.port + '/hello/' + name;
console.log('Fetching ' + url);

fetch(url)
    .then(res => res.text())
    .then(text => console.log("Our server said: " + text)); 