const express = require("express");
const Router = express.Router();
const bcrypt = require("bcrypt");
const jwtMakeHash = require("../middleware/JWT");
const User = require("../database/model/user");

Router.post("/cadastrar", async (req, res) => {
  try {
    const { nome, email, password } = req.body;
    const pass = bcrypt.hashSync(password, 10);
    const user = await User.create({ name: nome, email, senha: pass });
    res.json(user);
  } catch (err) {
    if (err.errors[0].message === "email must be unique") {
      return res.status(409).json({ erro: "email must be unique" });
    }
    return res.status(400).json({ erro: err.errors[0] });
  }
});

Router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findAll({
    where: {
      email,
    },
  });

  if (user.length == 0) {
    const resp = {
      error: "User not exist",
    };

    return res.status(401).json(resp);
  }

  if (bcrypt.compareSync(password, user[0].senha)) {
    const resp = {
      token: jwtMakeHash(user[0].id),
      collector: user[0].collector,
    };
    return res.json(resp);
  } else {
    const resp = {
      error: "Password not match",
    };

    return res.status(401).json(resp);
  }

  return res.send();
});

module.exports = Router;
