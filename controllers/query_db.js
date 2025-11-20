const connection = require('../DB/connection');

//rotta INDEX: uso query per visualizzare tutti i film
function index(req, res) {

    //preparazione della query
    const sql = 'SELECT * FROM movies';

    //esecuzione della query
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
};

//rotta SHOW: uso query per visualizzare tutti i film (ed i loro dettagli) + le recensioni
function show(req, res) {

    //preparazione della query
    const id = req.params.id; //prende dal browser l'id inserito come url

    const sqlMovie = 'SELECT * FROM movies WHERE id = ?';
    const sqlReviews = 'SELECT * FROM reviews WHERE movie_id = ?';

    //esecuzione della query 1 → ottieni il film
    connection.query(sqlMovie, [id], (errMovie, resultMovie) => {

        if (errMovie) {
            return res.status(500).json({ error: 'Database movie query failed ❌' });
        }

        if (resultMovie.length === 0) {
            return res.status(404).json({ error: "Movie wasn't found 😲" });
        }

        const movie = resultMovie[0];

        //esecuzione della query 2 → ottieni le recensioni
        connection.query(sqlReviews, [id], (errReviews, resultReviews) => {

            if (errReviews) {
                return res.status(500).json({ error: 'Database reviews query failed ❌' });
            }

            //aggiungo la lista delle recensioni al film
            movie.reviews = resultReviews;

            //risposta finale: film + recensioni
            res.json(movie);
        });
    });
};

// esporto le funzione index e show
module.exports = { index, show };
