const proyectos = require("../Modelos/proyecto");

const getAll = async function (req,res){
    let p = proyectos.findAll();
    await res.json(p);
}

const getById = async function (req,res){
    await res.json(proyectos.findById(req.params.id));
}

const add = async function (req,res){
    console.log(req.body);
    const newProyect = proyectos.add(req.body);
    await res.json(newProyect)
}

exports.getAll = getAll;
exports.getById = getById;