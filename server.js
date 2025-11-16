const express = require('express');

const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({
    origin: "http://localhost:5173",   // chi può accedere al backend
    credentials: true                   // se in futuro si dovessero usare cookie/token
}));


app.listen(port, () => { console.log(`Il server è in ascolto sulla porta http://localhost:${port}`) });

app.use(express.static('public'));

// rotta di benvenuto
app.get("/", (req,res) => {
    res.send("Welcome into my server!")
});

// importo il modulo ROUTER
const moviesRouter = require('./ROUTER/movies');
app.use("/movies", moviesRouter);


