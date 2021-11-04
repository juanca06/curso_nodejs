/*console.log("Hola Juan!");*/

const express = require('express');

const app = express();

app.get('/', function (req, res) {res.send('Hola Juan'); });

app.listen(3000);