const mongoose = require("mongoose");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const Immobile = mongoose.model("Immobile");
const People = mongoose.model("People");

module.exports = {
  async store(req, res) {
    const {
      title,
      description,
      offerType,
      immobileType,
      value,
      numberDormitory,
      hasGarage,
      city,
      street,
      houseNumber,
      neighborhood,
      state,
      people
    } = req.body;

    const { filename: image } = req.file;

    const [name] = image.split(".");
    const fileName = `${name}.jpg`;

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, "resized", fileName));

    const immobile = await Immobile.create({
      title,
      description,
      offerType,
      immobileType,
      value,
      numberDormitory,
      hasGarage,
      city,
      street,
      houseNumber,
      neighborhood,
      state,
      people,
      image: fileName
    });
    if (!(await People.findById(req.body.people))) {
      res.send("Esse usuário não existe!");
    }
    fs.unlinkSync(req.file.path);
    return res.json({ immobile });
  },

  async show(req, res) {
    const immobile = await Immobile.findById(req.params.id);

    return res.json(immobile);
  },
  async index(req, res) {
    const { page = 1 } = req.query;
    const immobile = await Immobile.paginate({}, { page, limit: 10 });
    return res.json(immobile);
  },
  async update(req, res) {
    const {
      title,
      description,
      offerType,
      immobileType,
      value,
      numberDormitory,
      hasGarage,
      city,
      street,
      houseNumber,
      neighborhood,
      state
    } = req.body;

    const { filename: image } = req.file;

    const [name] = image.split(".");
    const fileName = `${name}.jpg`;

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, "resized", fileName));

    const immobile = await Immobile.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        offerType,
        immobileType,
        value,
        numberDormitory,
        hasGarage,
        city,
        street,
        houseNumber,
        neighborhood,
        state,
        image: fileName
      },
      { new: true }
    );

    if (!(await People.findById(req.body.people))) {
      res.send("Esse usuário não existe!");
    }

    let isExist = false;
    await immobile.people.map(async id => {
      if (id == req.body.people) {
        isExist = true;
      }
    });

    if (!isExist) {
      immobile.people.push(req.body.people);
      await immobile.save();

      fs.unlinkSync(req.file.path);
      return res.json({ immobile });
    } else {
      res.status(401).send({ error: "Esse Id já existe!" });
    }
  }
};
