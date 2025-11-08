const connection = require('./DB/connection')

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => { console.log(`Il server è in ascolto sulla porta ${port}`) });

app.use(express.static('public'));


