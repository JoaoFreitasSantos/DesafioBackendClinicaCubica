const db = require('../database/db');
const uuid = require('uuidv4');

function dataParaTexto(data){
    return `${data.getDate()}-${data.getMonth()+01}-${data.getFullYear()}`
}

function textoParaData(texto){  
    let reorganizar =  texto.split('-');
    let ordemCorreta = `${reorganizar[2]}-${reorganizar[1]}-${reorganizar[0]}`;
    return new Date(...ordemCorreta.split('-').map((item, indice) => item - indice % 2));
}

function extrairIntervaloDisponivel(regras, inicio, fim){
    let intervalo = [];
    for (let i = inicio.getDate(); i <= fim.getDate(); i++){
        intervalo.push(new Date(inicio.getFullYear(), inicio.getMonth(), i));
    } 
    
    var disponiveis = [];
    regras.forEach(regra => {
        if(regra.tipo == 'dia'){
            
            intervalo.map(dia => {
                disponiveis.push({dia: dataParaTexto(dia), intervalo: regra.horario});
            })

        }else if(regra.tipo == 'semana'){
            regra.dias.forEach(dia => {
                intervalo.map(d => {
                    if(d.getDay() == dia){
                        disponiveis.push({dia: dataParaTexto(d), intervalo: regra.horario})
                    }
                })
            })
        }else if(regra.tipo == 'especifico'){
            intervalo.map(dia => {

                 if(dataParaTexto(dia) == dataParaTexto(textoParaData(regra.dias[0]))){
                    disponiveis.push({dia: dataParaTexto(dia), intervalo: regra.horario});
                 }
             })
        }
    })
    
    return tratarDatasDuplicadas(disponiveis);
   
}

function tratarDatasDuplicadas(disponiveis){
    disponiveis.forEach(dia => {
        for(let i =0; i < disponiveis.length; i++){
            
            if(dia.dia == disponiveis[i].dia && dia.intervalo != disponiveis[i].intervalo){
                dia.intervalo = dia.intervalo.concat(disponiveis[i].intervalo);
                disponiveis.splice(i, 1);
                
            }
        }
    })
        
    return disponiveis;
    
}

module.exports = {
    
    salvar : async (regra) => {
        return  await db.get("regra").push(regra).last().assign({id: uuid()}).write()
    },
    listar : async () => {
        return await db.get('regra').value();
    },
    deletar : async (id) => {
        return await db.get('regra').remove({id}).write();
    },
    listarIntervalo : (dataInicial, dataFinal) => {
        const regras = db.get('regra').value();

        dataInicial = textoParaData(dataInicial);
        dataFinal = textoParaData(dataFinal);
        return extrairIntervaloDisponivel(regras, dataInicial, dataFinal);
    }
}