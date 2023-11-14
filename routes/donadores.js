const express = require("express");
const router = express.Router();
const verificarToken = require('./middleware.js'); // Asumiendo que el middleware se llama verificarToken.js

const donadoresController = require("../Controladores/donadorController");
router.get("/",donadoresController.getAll);
router.get("/:rfc",donadoresController.getByRfc);
router.get("/proyectos/:rfc",donadoresController.proyectoPorDonador);
// Ruta protegida
router.get('/rutaProtegida', verificarToken, (req, res) => {
    res.send('Acceso a ruta protegida');
});
module.exports = router;