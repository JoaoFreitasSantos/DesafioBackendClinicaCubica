const express = require('express')
const bodyParser = require('body-parser')
const lowdb = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
const fs = require('fs')
const porta = 3001

//Inicio da criação do Servidor
const app = express()
app.use(bodyParser.json())

//Criar banco de dados e iniciar servidor
const adapter = new FileAsync('./database/db.json')
lowdb(adapter).then(db => {
    //ROTAS

    //Obter todas as regras
    //GET /regras
    app.get('/regras', (req, res) => {
        const regra = db.get('regra').value()

        res.send(regra)
    })

    //Obter regras de um determinado intervalo de dias
    //manda dataInicio e datafim.se datafim estiver vazio, supõe ser no mesmo dia

    //Cadastrar uma regra de atendimento
    //horaInicio não pode ser maior que hora fim


    //POST /regras
    app.post('/regras', (req, res) => {
        const regra = res.json
        db.get('regra')
          .push(req.body)
          .last()
          .write()
          .then(regra => {
              res.send(regra)})
    })
    


    //Apagar uma regra de atendimento
    // TODO: terminar de implementar o metodo de apagar do json. teoria: baixar json em variavel, remover com splice e dar post
    app.delete('/regras/:id', (req, res) => {
        const rei = db.get('regra')
          .remove({id: req.params.id })
          .write()

          res.send(() => {
          })
    })

    //Povoa o banco
    return db.defaults({
        regra: []
    }).write()


})

app.listen(porta,() =>{
    console.log(`Servidor rodando em localhost:${porta}`);
})