const donatarios = require("../Modelos/donatario");

const getAll = async function (req,res){
    let d = donatarios.findAll();
    await res.json(d);
}

const getByRfc = async function (req,res){
    await res.json(donatarios.findByRfc(req.params.rfc));
}

const getProyecto = async function (req,res) {
    try {
        const rfc = req.params.rfc;
        const d = donatarios.findByRfc(rfc);
        const n=d.nombreDonador;
        res.json(`El donatario: ${n} tiene el proyecto: ${d.proyectoAsociado}`);
    }catch (e) {
        res.status(500).json({ error: "Error interno del servidor" })
    }t

}

exports.getProyecto=getProyecto;
exports.getAll = getAll;
exports.getByRfc = getByRfc;