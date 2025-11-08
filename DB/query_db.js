const connection = require('./connection');

//rotta index: uso query per visualizzare tutti i film
function index (req, res) {

//preparazione della query
const sql = 'SELECT * from movies';

//esecuzione della query
connection.query(sql, (err,results) =>{
    if (err) {return res.status(500).json({error: 'Database query failed'});}
    res.json(results);
});
};




module.exports={index};