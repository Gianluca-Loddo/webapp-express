const express = require('express');

const mysql = require('mysql2');
// utilizzo di dotenv per poter usare il file .env
require('dotenv').config();

const app = express();
const port = 3000;

app.listen(port, () => { console.log(`Il server è in ascolto sulla porta ${port}`) });

app.use(express.static('public'));


// creazione della connession 
const connection = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);

// gestione dell'eventuale errore in fase di connessione al database 
connection.connect((err) =>{
    if (err) throw err;
    console.log('Connected to My SQL Database')
});
