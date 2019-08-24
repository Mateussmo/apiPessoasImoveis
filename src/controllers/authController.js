const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");
const User = require("../models/user");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    // 30 days
    expiresIn: 2592000
  });
}

module.exports = {
  async store(req, res) {
    const { email } = req.body;
    try {
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: "O usuario já existe!" });
      }
      const user = await User.create(req.body);
      user.password = undefined;
      return res.send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {
      return res.status(200).send({ error: "" });
    }
  },
  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).send({ error: "Usuário não encontrado!" });
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: "Senha Inválida!" });
    }

    user.password = undefined;

    res.send({ user, token: generateToken({ id: user.id }) });
  }
};
