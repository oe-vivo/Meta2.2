const donadores = require("../Modelos/donador");

const getAll = async function (req,res){
    let p = donadores.findAll();
    await res.json(p);
}

const getByRfc = async function (req,res){
    await res.json(donadores.findByRfc(req.params.rfc));
}

exports.getAll = getAll;
exports.getByRfc = getByRfc;