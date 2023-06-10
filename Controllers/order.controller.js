const Order = require("../Models/order.model");

const orderController = {
  // ------------Get all Orders------------//
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //------------ Get a specific Orders by Email------------//
  getOrdersByEmail: async (req, res) => {
    const { email } = req.params;
    try {
      const orders = await Order.find({ email: email });
      if (orders) {
        res.json(orders);
      } else {
        res.status(404).json({ message: "Orders not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //------------ add Order ------------//
  addOrder: async (req, res) => {
    const order = new Order(req.body);
    try {
      const newOrder = await order.save();
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  //------------ Update a order by ID------------//
  updateOrder: async (req, res) => {
    const { id } = req.params;

    try {
      const order = await Order.findById(id);
      if (!order) return res.status(404).json({ msg: "Order not found" });
      Object.assign(order, req.body);
      await order.save();
      res.json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  //--------------- Delete a Order by ID------------//
  deleteOrder: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedOrder = await Order.findByIdAndDelete(id);
      if (deletedOrder) {
        res.json({ message: "Order deleted successfully" });
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = orderController;
