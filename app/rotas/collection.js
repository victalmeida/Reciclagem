const express = require("express");
const Router = express.Router();
const authMiddleware = require("../middleware/auth.js");
const Colletion = require("../database/model/collection");
const Address = require("../database/model/addres");

Router.use(authMiddleware);

Router.get("/", async (req, res) => {
  const user_id = req.userId;
  const colletion = await Colletion.findAll({
    where: {
      user_id: user_id,
    },
    include: [
      {
        association: "collectionAddress",
      },
      {
        association: "collectionReciclado",
      },
      {
        association: "collectionStatus",
      },
    ],
  });

  return res.json(colletion);
});

Router.get("/address", async (req, res) => {
  const user_id = req.userId;
  const colletion = await Colletion.findAll({
    where: {
      user_id: user_id,
    },
  });

  const resp = [];

  for (var i = 0; i < colletion.length; i++) {
    const addres = await Address.findByPk(colletion[i].address_id);

    resp.push(addres);
  }

  return res.json(resp);
});

Router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const colletion = await Colletion.findByPk(id);

  res.json(colletion);
});

Router.post("/", async (req, res) => {
  const { reciclado_id, complemento, address } = req.body;
  const user_id = req.userId;

  const colletion = await Colletion.create({
    user_id,
    address_id: address,
    reciclado_id,
    complemento,
    status: 1,
  });

  return res.json(colletion);
});

Router.delete("/:id/delete", async (req, res) => {
  const { id } = req.params;
  const colletion = await Colletion.destroy({
    where: { id: id },
  });
  return res.status(204).send();
});

module.exports = Router;
