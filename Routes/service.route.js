const express = require("express");
const {
  getAllServices,
  getServiceById,
  deleteService,
  updateService,
  createService,
} = require("../Controllers/service.controller");
const router = express.Router();

router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.post("/", createService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

module.exports = router;
