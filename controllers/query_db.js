const connection = require('../DB/connection');

//rotta INDEX: uso query per visualizzare tutti i film
function index (req, res) {
//preparazione della query
const sql = 'SELECT * from movies';
//esecuzione della query
connection.query(sql, (err, results) =>{
    if (err) {return res.status(500).json({error: 'Database query failed'});}
    res.json(results);
});
};

//rotta SHOW: uso query per visualizzare tutti i film (ed i loro dettagli) + le recensioni
function show (req, res) {
//preparazione della query
const id = req.params.id; //prende dal browser l'id inserito come url
const sql = 'SELECT * from movies LEFT JOIN reviews ON movies.id = reviews.movie_id WHERE movies.id = ?';
//esecuzione della query
connection.query(sql, [id], (err,results) =>{
    if (err) {return res.status(500).json({error: 'Database query failed ❌'});}
    if (results.length===0) {return res.status(404).json({error: "Movie wasn't found 😲"});}
    res.json(results[0]);
});
};

// esporto le funzione index e show
module.exports={index, show};