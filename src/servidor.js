const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/db');

const porta = 3001;

//Inicio da criação do Servidor
const app = express();
app.use(bodyParser.json());

app.use(require('./routes'));

db.defaults({
    "regra": []
}).write()


app.listen(porta,() =>{
    console.log(`Servidor rodando em localhost:${porta}`);
})