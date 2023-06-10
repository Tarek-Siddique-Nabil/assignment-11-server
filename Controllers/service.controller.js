const Service = require("../Models/service.model");

const serviceController = {
  // ------------Get all services------------//
  getAllServices: async (req, res) => {
    try {
      const services = await Service.find();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //------------ Get a specific service by ID------------//
  getServiceById: async (req, res) => {
    const { id } = req.params;
    try {
      const service = await Service.findById(id);
      if (service) {
        res.json(service);
      } else {
        res.status(404).json({ message: "Service not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //------------ add service ------------//
  createService: async (req, res) => {
    const service = new Service(req.body);
    try {
      const newService = await service.save();
      res.status(201).json(newService);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  //------------ Update a service by ID------------//
  updateService: async (req, res) => {
    const { id } = req.params;
    console.log(
      "🚀 ~ file: service.controller.js:42 ~ updateService: ~ id:",
      id
    );
    try {
      const service = await Service.findById(id);
      if (!service) return res.status(404).json({ msg: "Service not found" });
      Object.assign(service, req.body);
      await service.save();
      res.json(service);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  //--------------- Delete a service by ID------------//
  deleteService: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedService = await Service.findByIdAndDelete(id);
      if (deletedService) {
        res.json({ message: "Service deleted successfully" });
      } else {
        res.status(404).json({ message: "Service not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = serviceController;
