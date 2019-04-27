const service = require('../service/RegraService');

module.exports ={

    salvar : async (req, res) => {
       try {
           regra = await service.salvar(req.body);
           res.json(regra);
       } catch(error){
           res.status(500).json({msg: "Server internal error"});
       }
    },
    listar : async (req, res) => {
        try {
            regras = await service.listar();
            res.json(regras);
        } catch(error){
            res.status(500).json({msg: "Server internal error"});
        }
    },
    deletar : async (req, res) => {
        try{  
            await service.deletar(req.params.id);
            res.sendStatus(204);
        }catch(err){
            console.log(err);
            res.status(500).json({mensagem: 'Server internal error'});   
        }
    },
    listarIntervalo : async (req, res) => {
        const {dataInicial, dataFinal} = req.query;
        try{
            const intervalo = await service.listarIntervalo(dataInicial, dataFinal);
            res.json(intervalo);
        } catch (err) {
            res.status(500).json({mensagem: 'Server internal error'});
        }
    }

}