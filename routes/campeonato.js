const express = require('express');
const router = express.Router();

const controllerCampeonato = require("../controllers/campeonatoController");

/* GET campeonato listing. */
router.get("/campeonato", controllerCampeonato.listCampeonato);
router.post("/campeonato", controllerCampeonato.createCampeonato);
router.put("/campeonato/:id", controllerCampeonato.updateCampeonato);
router.delete("/campeonato/:id", controllerCampeonato.deleteCampeonato);

module.exports = router;