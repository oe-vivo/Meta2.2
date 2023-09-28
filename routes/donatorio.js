const express = require("express");
const router = express.Router();
const donatariosController = require("../Controladores/donatarioController");
router.get("/",donatariosController.getAll);
router.get("/:rfc",donatariosController.getByRfc);
router.get("/proyectos/:rfc",donatariosController.getProyecto);
module.exports = router;