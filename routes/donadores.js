const express = require("express");
const router = express.Router();
const donadoresController = require("../Controladores/donadorController");
router.get("/",donadoresController.getAll);
router.get("/:rfc",donadoresController.getByRfc);
router.get("/proyectos/:rfc",donadoresController.proyectoPorDonador);
module.exports = router;