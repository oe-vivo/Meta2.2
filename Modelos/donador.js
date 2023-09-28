const donadores = [
    {
        rfc:1,
        nombre:"HSBC",
        imagen: null,
        proyectosAsociados: "EmotionIA",
        cantidadDonada: 50000
    },
    {
        rfc:2,
        nombre:"Bancomer",
        imagen: null,
        proyectosAsociados: "Nimbus",
        cantidadDonada: 35000
    }
]

const findAll = function(){
    return donadores;
}

const findByRfc = function(rfc){
    let p = donadores.find(e=>e.rfc == rfc);
    return p;
}




exports.findAll = findAll;
exports.findByRfc = findByRfc;