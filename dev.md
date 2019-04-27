# Desafio Cubos Backend Clinica
=================

## Definicao
_API REST construida em Javascript(até o presente momento) e roda em NodeJS, destinado a gerenciar os horários disponíveis para uma clínica ficticia. A API usa express para gerenciar a criação dos endpoints, Tape e tap-spec para teste unitário e lowdb para registrar dados num arquivo JSON_

##Tecnologias
- NodeJS
- Javascript

## Instalacao

**Presume-se que esteja usando um sistema operacional Unix(Ubuntu,Mint, Manjaro,etc). caso utilize outro(Mac OS ou Windows), faça as devidas adapatações**

-> Antes de baixar o projeto, é necessário que sua máquina possua o Node e o NPM instalado.

Baixando o Node e npm:
1. abra o terminal e digite os comandos abaixo, um por vez
```
sudo apt update
sudo apt install nodejs
sudo apt install npm 
```
2. Se a instalação ocorrer sem problemas, voce deve obter uma mensagem com as versões do NODE e NPM ao digitar no terminal os comandos
```
nodejs -v
npm -v
```


#### Editor recomendado: (Visual Studio Code)[https://code.visualstudio.com/]

-> de posse do `enderecoDesafio.git` deste projeto, abra o terminal na pasta que deseja extrair o projetovem sua máquina e digite 

```bash
git clone enderecoDesafio.git
```

para realizar o download do projeto.
-> Após concluido o download, entre na pasta recem baixada e baixe as dependência via comando

```bash
npm install
```

## Execucao
-> Tendo baixado o projeto em sua máquina e instalado as dependencias, execute o comando 
```
npm run start
```

 via terminal dentro da pasta raiz do projeto para ter sua aplicação rodando na porta descrita na aplicação. (Porta padrão nesse projeto: 3001)

## Endpoints para testar:
Postman Collection: https://www.getpostman.com/collections/a0aaf87f29b0f28071c8

### Criacao de Regra para data especifica
OBS: tipo se refere ao tipo de regra a ser cadastrada,dias se refere aos 7 dias da semana, horario são os horarios das consultas.
URL: localhost:3001/regras
Metodo HTTP: POST
body: JSON
{
    "tipo": "especifico",
    "dias": [
        "11-09-2021"
    ],
    "horario": [
        {
            "inicio": "08:00",
            "fim": "12:00"
        },
        {
            "inicio": "14:00",
            "fim": "18:00"
        }
    ]
}

### Criacao de Regra para periodo do dia
OBS: tipo se refere ao tipo de regra a ser cadastrada,dias se refere aos 7 dias da semana, horario são os horarios das consultas.
URL: localhost:3001/regras
Metodo HTTP: POST
body: JSON
{
    "tipo": "dia",
    "dias": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
    ],
    "horario": [
        {
            "inicio": "09:10",
            "fim": "10:10"
        },
        {
            "inicio": "14:30",
            "fim": "15:30"
        }
    ]
}

### Criacao de Regra para dias especificos da semana
OBS: tipo se refere ao tipo de regra a ser cadastrada,dias se refere aos 7 dias da semana, horario são os horarios das consultas.
URL: localhost:3001/regras
Metodo HTTP: POST
body: JSON
{
    "tipo": "semana",
    "dias": [
        1,
        2
    ],
    "horario": [
        {
            "inicio": "10:20",
            "fim": "11:20"
        },
        {
            "inicio": "15:30",
            "fim": "16:40"
        }
    ]
}

### Remocao de regra
URL: localhost:3001/regras/deletar/id
Metodo HTTP: DELETE
body: Sem body

### Listagem total das regras
URL: localhost:3001/regras
Metodo HTTP: GET
body: Sem body

### Listagem das regras segundo interalo dado
OBS: dataInicial e dataFinal são datas no formato DD-MM-YYYY sendo passadas na propria URL
URL: localhost:3001/regras?dataInicial=01-01-2019&dataFinal=31-12-2019
Metodo HTTP: GET
body: Sem body