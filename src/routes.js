const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const PeopleController = require("./controllers/PeopleController");
const ImmobileController = require("./controllers/ImmobileController");
const authController = require("./controllers/authController");
const authMiddleware = require("../src/middlewares/auth");
const routes = express.Router();
const upload = multer(uploadConfig);

//Rotas para registro

routes.post("/register", authController.store);

//Rotas para autenticação

routes.post("/authenticate", authController.authenticate);

//Rotas para Pessoas
routes.get("/pessoas", PeopleController.index);
routes.get("/pessoas/:id", PeopleController.show);
routes.post("/pessoas", authMiddleware, PeopleController.store);

//Rotas para Imoveis
routes.post(
  "/imoveis",
  authMiddleware,
  upload.single("image"),
  ImmobileController.store
);
routes.get("/imoveis", ImmobileController.index);
routes.put(
  "/imoveis/:id",
  authMiddleware,
  upload.single("image"),
  ImmobileController.update
);

module.exports = routes;
