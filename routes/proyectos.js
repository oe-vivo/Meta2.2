const express = require("express");
const router = express.Router()
const proyectosController = require("../Controladores/proyectoController");
router.get("/",proyectosController.getAll);
router.get("/:id",proyectosController.getById);
router.get("/buscaProyecto/:id", proyectosController.donadoresPorProyecto);
router.get("/donatarios/:id",proyectosController.getDonatorio);
//router.post("/",proyectosController.add);
module.exports = router;