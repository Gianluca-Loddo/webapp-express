const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => { console.log(`Il server è in ascolto sulla porta http://localhost:${port}`) });

app.use(express.static('public'));

// rotta di benvenuto
app.get("/", (req,res) => {
    res.send("Welcome into my server!")
});


const moviesRouter = require('./DB/ROUTER/movies');
app.use("/movies", moviesRouter);


