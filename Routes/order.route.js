const express = require("express");
const {
  getAllOrders,
  getOrdersByEmail,
  addOrder,
  updateOrder,
  deleteOrder,
} = require("../Controllers/order.controller");
const router = express.Router();

router.get("/", getAllOrders);
router.get("/:email", getOrdersByEmail);
router.post("/", addOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
