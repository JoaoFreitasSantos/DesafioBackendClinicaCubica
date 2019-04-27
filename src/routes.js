const RegraController = require('./controllers/RegraController')

const express = require('express');

const router = express.Router();

router.post('/regras', RegraController.salvar);
router.get('/regras', RegraController.listar);
router.delete('/regras/deletar/:id', RegraController.deletar);
router.get('/regras/intervalo', RegraController.listarIntervalo);

module.exports = router;