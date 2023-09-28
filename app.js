const cors = require("cors");
const express = require ("express");
const proyectosRouter = require("./routes/proyectos");
const donadoresRouter = require("./routes/donadores");
const donatariosRouter=require("./routes/donatorio");
const app=express();
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