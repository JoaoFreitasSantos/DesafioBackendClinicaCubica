const test = require('tape')
const index = require('./src/index')

// TODO: substituir esqueleto dos testes por testes em estado de uso.

test('Consegue acessar o banco JSON', (t) => {
    t.assert(index.criarRegraDataEspecifica() === 200,"Consegue acessar o banco JSON")
    t.end()
})

test('Porta para se conectar ao banco está ocupada', (t) => {
    t.assert(index.criarRegraDataEspecifica() === 200,"Não consegue acessar banco se porta ja estiver ocupada.")
    t.end()
})

test('Não aceita valor nulo para cadastrar regra', (t) => {
    t.assert(index.criarRegraDataEspecifica() === 200,"Criação de regra de atendimento não aceita valor nulo")
    t.end()
})

test('Valores inseridos para cadastrar não podem ser negativos', (t) => {
    t.assert(index.criarRegraDataEspecifica() === 200, "Valores inseridos para cadastrar não podem ser negativos")
    t.end()
})

test('Valores inseridos para cadastrar devem estar dentro do intervalo cabível de datas', (t) => {
    t.assert(index.criarRegraDataEspecifica() === 200, "Valores inserridos para cadastrar regra de atendimento não devem permitir valores de dias ou meses superiores aos limites")
    t.end()
})

test('Não permitir inserir letras no lugar dos numeros', (t) => {
    t.assert(index.criarRegraDataEspecifica() === 200, "Não permitir inserir letras no lugar dos números")
    t.end()
})

test('Não permitir inserir simbolos no lugar dos números', (t) => {
    t.assert(index.criarRegraDataEspecifica() === 200, "Não permitir inserir simbolos no lugar dos números")
    t.end()
})

test('Não permitir envio de formato de data incorreto', (t) => {
    t.assert(index.criarRegraDataEspecifica() === 200, "Formato de data não permtido. inserir no formato DD-MM-YYYY")
    t.end()
})

test('Criar regra de atendimento para data específica', (t) => {
    t.assert(index.criarRegraDataEspecifica() === 200,"Regra de atendimento para data em particular cadastrada com sucesso")
    t.end()
})

test('Criar regra de atendimento para faixa de horario', (t) => {
    t.assert(index.criarRegraDataComFaixaDeHorario() === 200,"Regra de atendimento para intervalo de horario em particular cadastrada com sucesso")
    t.end()
})

test('Criar regra de atendimento para intervalo de dias e de horas', (t) => {
    t.assert(index.criarRegraFaixaDeDataMaisFaixaDeHorario() === 200,"Regra de atendimento em faixa de horario e faixa de dias cadastrada com sucesso")
    t.end()
})

test('Listagem de todos os horarios de atendimento cadastrados', (t) => {
    t.assert(index.criarRegraFaixaDeDataMaisFaixaDeHorario() === 200,"Listagem de todos os horários de atendimento realizada com sucesso")
    t.end()
})

test('Listagem de todos os horarios de atendimento cadastrados em intervalo de tempo fornecido', (t) => {
    t.assert(index.criarRegraFaixaDeDataMaisFaixaDeHorario() === 200,"Listagem de todos os horários de atendimento  em determinado intervalo de tempo realizada com sucesso")
    t.end()
})

test('Apagar regra', (t) => {
    t.assert(index.apagarRegra() === 200, "Regra de atendimento apagada com sucesso")
    t.end()
})

test('Não aceita valor nulo para apagar regra', (t) => {
    t.assert(index.apagarRegra() === 200, "Apagar regra de atendimento não aceita valores nulos")
    t.end()
})

test('Não aceita valor em branco para apagar regra', (t) => {
    t.assert(index.apagarRegra() === 200, "Apagar regra de atendimento não aceita valores em branco")
    t.end()
})

test('Valores inseridos para apagar não podem ser negativos', (t) => {
    t.assert(index.apagarRegra() === 200, "Apagar regra não aceita valores negativos")
    t.end()
})