const express = require('express');
const router = express.Router();

const controllerData = require("../controllers/dataController");

/* GET data listing. */
router.get("/data", controllerData.listData);
router.post("/data", controllerData.createData);
router.put("/data/:id", controllerData.updateData);
router.delete("/data/:id", controllerData.deleteData);

module.exports = router;