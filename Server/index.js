const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3080;

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Game of life Server');
});

app.listen(port, () => {
    console.log(`Listening http://localhost:${port}`);
});