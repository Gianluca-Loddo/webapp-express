
const query = require('./DB/query_db')
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => { console.log(`Il server è in ascolto sulla porta ${port}`) });

app.use(express.static('public'));

// rotta di benvenuto
app.get("/", (req,res) => {
    res.send("Welcome into my server!")
}
);

// rotta index per la lista dei film (Con query into DATABASE)
app.get("/index", query.index);
