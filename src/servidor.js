const express = require('express');
const bodyParser = require('body-parser');
const lowdb = require('lowdb');
const FileAsync = require( 'lowdb/adapters/FileAsync');

const porta = 3001;

//Inicio da criação do Servidor
const app = express();
app.use(bodyParser.json());

//Criar banco de dados e iniciar servidor
const adapter = new FileAsync('./database/db.json');
lowdb(adapter).then(db => {
    //ROTAS ATUAIS

    //Obter todas as regras
    //GET /regras
    app.get('/regras', (req, res) => {
        const regra = db.get('regra').value()

        res.send(regra)
    })

    //Obter regras de um determinado intervalo de dias
    //GET regras/dataInicio/datafim


    //Cadastrar uma regra de atendimento
    //POST /regras
    app.post('/regras', (req, res) => {
        db.get('regra')
          .push(req.body)
          .last()
          .write()
          .then(regra => {
              res.send(regra)})
    })
    
    //Apagar uma regra de atendimento
    //DELETE /regras/id
    app.delete('/regras/:id', (req, res) => {
       // TODO: terminar de implementar o metodo de apagar do json.
    })


    //Povoa o banco
    return db.defaults({
        regra: [],
        indice: 0
    }).write()


})

app.listen(porta,() =>{
    console.log(`Servidor rodando em localhost:${porta}`);
})