import express from 'express';
import bodyParser from 'body-parser';

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

import charactersRoute from "./controllers/characters.js";
app.use('/characters', charactersRoute);

import episodesRoute from "./controllers/episodes.js";
app.use('/episodes', episodesRoute);

import quotesRoute from "./controllers/quotes.js";
app.use("/quotes", quotesRoute);

const port = 5010;

app.listen(port, function(){
    console.log(`Running server in port ${port}`);
})
