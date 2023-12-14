const personModel = require("../models/Person");

const PersonController = {
  insert: async (req, res) => {
    try {
      const persondb = {
        name: req.body.name,
        salary: req.body.salary,
        approved: req.body.approved,
      };
      const response = await personModel.create(persondb);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ massage: "failed operation", error });
    }
  },

  getAll: async (req, res) => {
    try {
      const response = await personModel.find();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ massage: "failed operation", error });
    }
  },

  getId: async (req, res) => {
    const id = req.params.id;
    try {
      const response = await personModel.findById(id);
      if (!response) {
        res.status(404).json({ massage: "pessoa não encontrada" });
        return;
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(500);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    try {
      const persondb = {
        name: req.body.name,
        salary: req.body.salary,
        approved: req.body.approved,
      };
      const response = await personModel.findByIdAndUpdate(id, persondb);
      if (!response) {
        res.status(404).json({ massage: "pessoa não encontrada" });
        return;
      }
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ massage: "failed operation", error });
    }
    },

   delete: async (req, res) => {
    const id = req.params.id;
    try {
      const response = await personModel.findByIdAndDelete(id);
      if (!id) {
        res.status(404).json({ massage: "pessoa não encontrada" });
        return;
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(500);
    }
  }
};

module.exports = PersonController;
