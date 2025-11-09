// utilizzo di dotenv per poter usare il file .env
require('dotenv').config();

// utilizzo di myswl2 per connettere il database al server
const mysql = require('mysql2');

// creazione della connessione
const connection = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
);

// gestione dell'eventuale errore in fase di connessione al database 
connection.connect((err) =>{
    if (err) throw err;
    console.log('Connected to My SQL Database')
});

module.exports=connection;