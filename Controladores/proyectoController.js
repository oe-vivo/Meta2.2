const proyectos = require("../Modelos/proyecto");
const {json} = require("express");

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

const donadoresPorProyecto = async function (req,res){
    const id=req.params.id;
    const proyecto=proyectos.findById(id);
    res.json(`El proyecto ${proyecto.nombre} con id ${proyecto.id}, tiene como donadores a: ${proyecto.donadores}`);
}

const getDonatorio = async function(req,res){
    const id=req.params.id;
    const p= proyectos.findById(id);
    res.json(`El proyecto ${p.nombre} tiene como donatario a: ${p.donatorio}`);
}

exports.getAll = getAll;
exports.getById = getById;
exports.donadoresPorProyecto = donadoresPorProyecto;
exports.getDonatorio = getDonatorio;