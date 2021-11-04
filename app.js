/*console.log("Hola Juan!");*/

/*const express = require('express');*/
require('dotenv').config();

const Server = require("./server");

const server = new Server ();

server.listen();

/*const app = express();*/
/*app.listen(3000);*/
// localhost:3000
