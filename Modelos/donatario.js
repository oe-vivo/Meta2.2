const donatarios = [
    {
        rfc:10,
        nombreDonador: "Juan Lopez",
        proyectoAsociado: "Nimbus",
        imagen: null
    },
    {
        rfc:20,
        nombreDonador: "Mario Castellanos",
        proyectoAsociado: "EmotionIA",
        imagen: null
    }
]

const findAll = function (){
    return donatarios;
}

const findByRfc = function (rfc){
    let d = donatarios.find((value, index) => value.rfc == rfc);
    return d;
}

exports.findAll = findAll;
exports.findByRfc = findByRfc;