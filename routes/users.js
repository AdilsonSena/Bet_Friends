const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const registerValidator = require("../middlewares/validators/registerValidator");
const controllerCampeonato = require("../controllers/campeonatoController");
const controllerData = require("../controllers/dataController");

/* GET users listing. */
router.get("/", controller.listUsers);
router.post("/", registerValidator, controller.createUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

/* GET campeonato listing. */
router.get("/campeonato", controllerCampeonato.listCampeonato);
router.post("/campeonato", controllerCampeonato.createCampeonato);
router.put("/campeonato/:id", controllerCampeonato.updateCampeonato);
router.delete("/campeonato/:id", controllerCampeonato.deleteCampeonato);

/* GET data listing. */
router.get("/data", controllerData.listData);
router.post("/data", controllerData.createData);
router.put("/data/:id", controllerData.updateData);
router.delete("/data/:id", controllerData.deleteData);

module.exports = router;
