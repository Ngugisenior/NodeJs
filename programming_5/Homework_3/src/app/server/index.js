import express from "express"
import settings from "../../modules/settings.js"

const app = express();

app.get('/hello/:name', (req, res) => res.send('Hello '+req.params.name+'!'));

app.listen(settings.port);
