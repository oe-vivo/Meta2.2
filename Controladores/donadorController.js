const donadores = require("../Modelos/donador");

const getAll = async function (req,res){
    let p = donadores.findAll();
    await res.json(p);
}

const getByRfc = async function (req,res){
    await res.json(donadores.findByRfc(req.params.rfc));
}

const proyectoPorDonador = async function (req,res){
    const rfc=req.params.rfc;
    const donador=donadores.findByRfc(rfc);
    const proyectos = donador.proyectosAsociados;
    res.json(`El Donador con RFC:${rfc} se asocia al proyecto: ${proyectos}`);
}

exports.proyectoPorDonador = proyectoPorDonador;
exports.getAll = getAll;
exports.getByRfc = getByRfc;