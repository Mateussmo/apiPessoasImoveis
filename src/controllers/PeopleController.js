const mongoose = require("mongoose");

const People = mongoose.model("People");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const peoples = await People.paginate({}, { page, limit: 10 });
    return res.json(peoples);
  },

  async show(req, res) {
    const people = await People.findById(req.params.id);

    return res.json(people);
  },

  async store(req, res) {
    //Criação
    const people = await People.create({ ...req.body, user: req.userId });

    return res.json(people);
  }
};
