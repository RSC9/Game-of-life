const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3080;

const universe = [];

app.use(bodyParser.json());

app.get('/api/universe', (req, res) => {
    res.json(universe);
});

app.get('/', (req,res) => {
    res.send('Game of life Server');
});

app.listen(port, () => {
    console.log(`Listening http://localhost:${port}`);
});