const donadores = [
    {
        rfc:1,
        nombre:"HSBC",
        imagen: null,
        proyectosAsociados: "EmotionIA"
    },
    {
        rfc:2,
        nombre:"Bancomer",
        imagen: null,
        proyectosAsociados: "Nimbus"
    }
]

const findAll = function(){
    return donadores;
}

const findByRfc = function(rfc){
    let p = donadores.find(e=>e.rfc == rfc);
    return p
}

exports.findAll = findAll;
exports.findByRfc = findByRfc;