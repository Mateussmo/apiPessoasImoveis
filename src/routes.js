const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const { check, validationResult } = require("express-validator");

const PeopleController = require("./controllers/PeopleController");
const ImmobileController = require("./controllers/ImmobileController");
const authController = require("./controllers/authController");
const authMiddleware = require("../src/middlewares/auth");
const routes = express.Router();
const upload = multer(uploadConfig);

//Rotas para registro

routes.post(
  "/register",
  check("name")
    .not()
    .isEmpty()
    .withMessage("O nome do usuário é obrigatório!"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("O e-mail do usuário é obrigatório!"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("A senha do usuário é obrigatória!"),

  function(req, res) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array());
    } else {
      authController.store(req, res);
    }
  }
);

//Rotas para autenticação

routes.post(
  "/authenticate",
  check("email")
    .not()
    .isEmpty()
    .withMessage("O e-mail do usuário é obrigatório!"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("A senha do usuário é obrigatória!"),

  function(req, res) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array());
    } else {
      authController.authenticate(req, res);
    }
  }
);

//Rotas para Pessoas
routes.get("/pessoas", PeopleController.index);

routes.get("/pessoas/:id", PeopleController.show);

routes.post(
  "/pessoas",
  authMiddleware,
  check("name")
    .not()
    .isEmpty()
    .withMessage("O nome é obrigatorio!"),
  check("lastname")
    .not()
    .isEmpty()
    .withMessage("O sobrenome é obrigatorio!"),
  check("cpf")
    .not()
    .isEmpty()
    .withMessage("O CPF é obrigatorio!"),
  check("birthday")
    .not()
    .isEmpty()
    .withMessage("A data de nascimento é obrigatoria!"),
  check("phone")
    .not()
    .isEmpty()
    .withMessage("O número de celular é obrigatorio!"),
  check("street")
    .not()
    .isEmpty()
    .withMessage("A rua é obrigatoria!"),
  check("state")
    .not()
    .isEmpty()
    .withMessage("O Estado é obrigatorio!"),
  check("city")
    .not()
    .isEmpty()
    .withMessage("A cidade é obrigatoria!"),

  function(req, res) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array());
    } else {
      PeopleController.store(req, res);
    }
  }
);

//Rotas para Imoveis
routes.post(
  "/imoveis",
  upload.single("image"),
  authMiddleware,

  check("title")
    .not()
    .isEmpty()
    .withMessage("O titulo é obrigatório!"),
  check("description")
    .not()
    .isEmpty()
    .withMessage("A descrição é obrigatória!"),
  check("offerType")
    .not()
    .isEmpty()
    .withMessage("O Tipo de Oferta é obrigatório!"),
  check("immobileType")
    .not()
    .isEmpty()
    .withMessage("O tipo de imóvel obrigatório!"),
  check("value")
    .not()
    .isEmpty()
    .withMessage("O valor do imóvel obrigatório!"),
  check("numberDormitory")
    .not()
    .isEmpty()
    .withMessage("O número de quartos é obrigatório!"),
  check("hasGarage")
    .not()
    .isEmpty()
    .withMessage("Deve-se informar se há garagem disponivel!"),
  check("city")
    .not()
    .isEmpty()
    .withMessage("A cidade é obrigatoria!"),
  check("street")
    .not()
    .isEmpty()
    .withMessage("A rua é obrigatoria!"),
  check("houseNumber")
    .not()
    .isEmpty()
    .withMessage("O numéro da Casa é obrigatorio!"),
  check("neighborhood")
    .not()
    .isEmpty()
    .withMessage("O bairro é obrigatorio!"),
  check("state")
    .not()
    .isEmpty()
    .withMessage("A estado é obrigatorio!"),

  function(req, res) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array());
    } else {
      ImmobileController.store(req, res);
    }
  }
);

routes.get("/imoveis", ImmobileController.index);

routes.put(
  "/imoveis/:id",
  upload.single("image"),
  authMiddleware,

  check("title")
    .not()
    .isEmpty()
    .withMessage("O titulo é obrigatório!"),
  check("description")
    .not()
    .isEmpty()
    .withMessage("A descrição é obrigatória!"),
  check("offerType")
    .not()
    .isEmpty()
    .withMessage("O Tipo de Oferta é obrigatório!"),
  check("immobileType")
    .not()
    .isEmpty()
    .withMessage("O tipo de imóvel obrigatório!"),
  check("value")
    .not()
    .isEmpty()
    .withMessage("O valor do imóvel obrigatório!"),
  check("numberDormitory")
    .not()
    .isEmpty()
    .withMessage("O número de quartos é obrigatório!"),
  check("hasGarage")
    .not()
    .isEmpty()
    .withMessage("Deve-se informar se há garagem disponivel!"),
  check("city")
    .not()
    .isEmpty()
    .withMessage("A cidade é obrigatoria!"),
  check("street")
    .not()
    .isEmpty()
    .withMessage("A rua é obrigatoria!"),
  check("houseNumber")
    .not()
    .isEmpty()
    .withMessage("O numéro da Casa é obrigatorio!"),
  check("neighborhood")
    .not()
    .isEmpty()
    .withMessage("O bairro é obrigatorio!"),
  check("state")
    .not()
    .isEmpty()
    .withMessage("A estado é obrigatorio!"),

  function(req, res) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array());
    } else {
      ImmobileController.update(req, res);
    }
  }
);

module.exports = routes;
