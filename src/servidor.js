const express = require('express')
const bodyParser = require('body-parser')
const lowdb = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

//Inicio da criação do Servidor
const app = express()
app.use(bodyParser.json())

//Criar banco de dados e iniciar servidor
const adapter = new FileAsync('db.json')
