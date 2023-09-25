const express = require("express");
const router = express.Router();
const donadoresController = require("../Controladores/donadorController");
router.get("/",donadoresController.getAll);
router.get("/:rfc",donadoresController.getByRfc);

module.exports = router;