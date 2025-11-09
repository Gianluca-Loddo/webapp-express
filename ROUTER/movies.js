const query = require('../DB/query_db');


const express = require('express');
const router = express.Router();

// rotta index per la lista dei film (Con query into DATABASE)
router.get("/", query.index);

// rotta show per visualizzare i dettagli film e le recensioni (eventuali)
router.get("/:id", query.show);

// esporto il modulo router
module.exports=router;