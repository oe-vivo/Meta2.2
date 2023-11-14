const cors = require("cors");
const express = require ("express");
const proyectosRouter = require("./routes/proyectos");
const donadoresRouter = require("./routes/donadores");
const donatariosRouter=require("./routes/donatorio");
const app=express();
const passport = require('passport');
require('./passport')(passport); // Asume que passport.js está en la raíz del proyecto
const verificarToken = require('./middleware');

app.use("/rutaProtegida", verificarToken, rutaProtegidaRouter);

app.use(passport.initialize());
app.use(cors());
app.use(express.json());

app.use("/proyectos",proyectosRouter);
app.use("/donadores",donadoresRouter);
app.use("/donatarios",donatariosRouter);


app.listen(3000,()=>{
    console.log("Escuchando en el puerto 3000");
}).on("error",err => {
    console.log("Error al iniciar server");
});