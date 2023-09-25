const proyectos = [
    {
        id:1,
        nombre:"Nimbus",
        descripcion: "Proyecto Pyme reposteria",
        imagen: null,
        donatorio: "Octavio Vivo",
        donadores: "Bancomer,Banamex"

    },
    {
      id:2,
      nombre:"EmotionIA",
      descripcion: "Proyecto de software para psicologia",
      imagen: null,
      donatorio: "Emmanuel Ruiz",
      donadores: "Nasa,HSBC,UABC"
    }
]

const findAll = function(){
    return proyectos;
}

const findById = function(id){
    let p = proyectos.find(e=>e.id == id);
    return p
}

const add = function(id,nombre,descripcion,imagen,donatorio,donadores){
    proyectos.push(id,nombre,descripcion,imagen,donatorio,donadores);
}
exports.findAll = findAll;
exports.findById = findById;